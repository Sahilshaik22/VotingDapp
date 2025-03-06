import { ethers } from "ethers";
import erc20abi from "../../constants/erc20Abi.json";
import UseWeb3Context from "../../context/useWeb3Context";
import tokenMarketPlaceAbi from "../../constants/TokenMarketPlaceAbi.json";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import BuyToken from "../../componenets/tokenMarketPlaceComponents/buyToken";
import SellToken from "../../componenets/tokenMarketPlaceComponents/sellToken";
import TokenPrice from "../../componenets/tokenMarketPlaceComponents/tokenPrice";
import TokenBalance from "../../componenets/tokenMarketPlaceComponents/tokenbalance";

const TokenMarketPlace = ({ children }) => {
    const { web3State } = UseWeb3Context();
    const { provider, signer } = web3State;
    
    const [erc20TokenInstance, setErc20TokenInstance] = useState(null);
    const [tokenMarketPlaceInstance, setTokenMarketPlaceInstance] = useState(null);

    useEffect(() => {
        const initERC20Token = async () => {
            try {
                const contractAddress = "0xa886e86443e9257433d33e2d506d0b4aa6c78a55";
                let erc20instance = new ethers.Contract(contractAddress, erc20abi, provider);
                
                if (signer) {
                    erc20instance = erc20instance.connect(signer);  // Attach signer for transactions
                }
                
                setErc20TokenInstance(erc20instance);
            } catch (error) {
                console.error("Error initializing ERC-20 contract:", error);
            }
        };

        if (provider) {
            initERC20Token();
        }
    }, [provider, signer]);  // Re-run when `signer` changes

    useEffect(() => {
        const initTokenMarketPlace = async () => {
            try {
                const contractAddress = "0xbd6B4f7e9CdE8dd268D736c5Eac3Ee5317134A9A";
                let marketPlaceInstance = new ethers.Contract(contractAddress, tokenMarketPlaceAbi, provider);

                if (signer) {
                    marketPlaceInstance = marketPlaceInstance.connect(signer); // Attach signer for transactions
                }

                setTokenMarketPlaceInstance(marketPlaceInstance);
            } catch (error) {
                console.error("Error initializing Token Marketplace contract:", error);
            }
        };

        if (provider) {
            initTokenMarketPlace();
        }
    }, [provider, signer]);  // Re-run when `signer` changes

    return (
        <>
            <BuyToken contractInstance={tokenMarketPlaceInstance} /> <br />
            <SellToken contractInstance={tokenMarketPlaceInstance} erc20contractInstance={erc20TokenInstance} /> <br />
            <TokenPrice contractInstance={tokenMarketPlaceInstance} /> <br />
            <TokenBalance contractInstance={tokenMarketPlaceInstance} />
        </>
    );
};

export default TokenMarketPlace;
