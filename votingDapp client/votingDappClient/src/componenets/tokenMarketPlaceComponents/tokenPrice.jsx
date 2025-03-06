import { ethers } from "ethers";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const TokenPrice = ({ contractInstance }) => {
    const [tokenPriceInEth, setTokenPrice] = useState(0);


    useEffect(() => {
        const tokenPrice = async () => {
            try {
                const tokenPriceInWei = await contractInstance.tokenPrice();
                const tokenPriceInEth =  ethers.formatEther(tokenPriceInWei);
                setTokenPrice(tokenPriceInEth);

            } catch (error) {
                toast.error("error")
            }


        }
        if(contractInstance){
            tokenPrice();
        }
    },[contractInstance])


    return(
        <>
        <h3 style={{color:"white"}}>Token Price:- {tokenPriceInEth}Eth</h3>
        
        </>
    )


}


export default TokenPrice;