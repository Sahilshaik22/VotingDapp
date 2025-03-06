import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const TokenBalance = ({ contractInstance }) => {
    const [TokenBalance, setBalance] = useState(0);

    useEffect(() => {
        const fetchUserTokenBalance = async () => {
            try {
                // Ensure contractInstance is defined before calling its function
                if (!contractInstance) {
                    console.log("Contract instance is not available yet.");
                    return;
                }

                const fetchTokenBalanceInWei = await contractInstance.BalanceOfToken();
                const fetchBalanceInEth = ethers.formatEther(fetchTokenBalanceInWei);
                setBalance(fetchBalanceInEth);
            } catch (error) {
                toast.error("Error in fetching token balance");
                console.log(error);
            }
        };

        fetchUserTokenBalance();
    }, [contractInstance]); // Runs when contractInstance is updated

    return (
        <>
            <h5 style={{ color: "blue" }}>User-tokenBalance: {TokenBalance}</h5>
        </>
    );
};

export default TokenBalance;
