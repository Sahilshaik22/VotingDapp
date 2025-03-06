import Web3Context from "./web3Context";
import { useEffect, useState } from "react";
import { getWeb3State } from "../utils/getWeb3State";
import { handleAccountsChanged } from "../utils/handleAccountsChanged";
import { handleChainChanged } from "../utils/handleChainChanged";



const Web3Provider = ({children})=>{
    const [web3State,setWeb3State] =  useState({
        contractInstance:null,
        selectedAccount:null,
        chainId:null,
        provider: null,
        signer: null

    });
    const handleWallet = async(e)=>{
        try{
            e.preventDefault();
            const{contractInstance,selectedAccount,chainId,provider,signer} = await getWeb3State(); 
            setWeb3State({contractInstance ,selectedAccount,chainId,provider,signer})
            console.log({contractInstance,selectedAccount,chainId,provider,signer})

        }catch(error){
            console.log(error)
        }
    }
    const onAccountChanged = ()=>handleAccountsChanged(setWeb3State)
    const onchainChnaged = ()=>handleChainChanged(setWeb3State)

    useEffect(()=>{
        window.ethereum.on("accountsChanged",onAccountChanged)
        window.ethereum.on("chainChanged",onchainChnaged)

        return ()=>{
            window.ethereum.removeListener("accountsChanged",onAccountChanged)
            window.ethereum.removeListener( "chainChanged",onchainChnaged)
        }

    })

        

    


    return(
        <>
        <Web3Context.Provider value={{web3State,handleWallet}} >
            {children}
        </Web3Context.Provider>
        
        </>
    )
}
export default Web3Provider;