import abi from "../constants/abi.json"
import {ethers} from "ethers"
import axios from "axios"
export const getWeb3State = async()=>{
    try{
        if(!window.ethereum){
            throw new Error("Metamask is not installed")
        }
    
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        const selectedAccount = accounts[0]
    
        const chainIdHex = await window.ethereum.request({
            method: "eth_chainId"
        })
        const chainId = parseInt(chainIdHex,16);
        const provider = new ethers.BrowserProvider(window.ethereum)
        const contractAddress = "0xcd6bdf310a1CF8384497ECc631C04406896847F9";
        const signer = await provider.getSigner()
        const message  = "Welcome to Voting Dapp You accpet terms and conditions";
        const signature = await signer.signMessage(message)
        const dataSignature = {
            signature
        }
        const res = await axios.post(`http://localhost:3000/api/authentication/?accountAddress=${selectedAccount}`,dataSignature)
        localStorage.setItem("token",res.data.token)
        console.log(res.data.token)

        const contractInstance = new ethers.Contract(contractAddress,abi,provider,signer)
        return {contractInstance,selectedAccount,chainId,provider,signer}

    }catch(error){
        console.log(error)
    }


}