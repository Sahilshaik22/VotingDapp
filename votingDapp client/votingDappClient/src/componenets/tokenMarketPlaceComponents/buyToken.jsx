
import { useRef } from "react";
import { ethers } from "ethers"
import toast from "react-hot-toast";
const BuyToken = ({ contractInstance }) => {
    const tokenAmountRef = useRef();

    const buyToken = async (e) => {
        e.preventDefault();
        try {
            const tokenAmountEth = tokenAmountRef.current.value;
            const tokenAmountInWei = ethers.parseEther(tokenAmountEth, 18)
            const tx = await contractInstance.buyGLDToken(tokenAmountInWei, { gasLimit: 300000 })
            const reciept = tx.wait()
            console.log("Transaction Successful")



        } catch (error) {
            toast.error("error in Buy token")
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={buyToken}>
                <label>BuyBees Token (In Eth) :-</label>
                <input type="text" ref={tokenAmountRef}></input>
                <button type="submit">Buy Token</button>
            </form>
        </>
    )
}

export default BuyToken;