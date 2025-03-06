import toast from "react-hot-toast";
import { ethers } from "ethers"
import { useRef } from "react";
const SellToken = ({ contractInstance, erc20contractInstance }) => {
    const sellTokenAmountRef = useRef();
    const approveTokenAmountRef = useRef();
    const sellToken = async (e) => {
        try {
            e.preventDefault();
            const sellTokenInEth = sellTokenAmountRef.current.value.trim();
            
            if (!sellTokenInEth || isNaN(sellTokenInEth)) {
                toast.error("Please enter a valid token amount.");
                return;
            }
            
            const sellTokenValueInWei = ethers.parseEther(sellTokenInEth);
            const tx = await contractInstance.sellGLDToken(sellTokenValueInWei, { gasLimit: 1000000});
            const receipt = await tx.wait();
            console.log("Transaction Successful");
        } catch (error) {
            toast.error("Error in sellToken");
            console.log(error);
        }
    };
    
    const approveToken = async (e) => {
        try {
            e.preventDefault();
            const tokenMarketPlace = "0xcd6bdf310a1cf8384497ecc631c04406896847f9";
            const approveTokenInEth = approveTokenAmountRef.current.value.trim();
            
            if (!approveTokenInEth || isNaN(approveTokenInEth)) {
                toast.error("Please enter a valid token amount.");
                return;
            }
            
            const approveAmountInWei = ethers.parseEther(approveTokenInEth);
            const tx = await erc20contractInstance.approve(tokenMarketPlace, approveAmountInWei);
            const receipt = await tx.wait();
            console.log("Approve Successful");
        } catch (error) {
            toast.error("Error in approveToken");
            console.log(error);
        }
    };
    

    return (
        <>
            <form onSubmit={sellToken}>
                <label>Token Amount To Sell(In Eth):-</label>
                <input type="text" ref={sellTokenAmountRef} />
                <button type="submit">Sell Token</button>
            </form>
            <form onSubmit={approveToken}>
                <label>Token Amount To Approve(In Eth):</label>
                <input type="text" ref={approveTokenAmountRef}></input>
                <button type="submit">Approve Token</button>
            </form>
        </>
    )

}

export default SellToken;