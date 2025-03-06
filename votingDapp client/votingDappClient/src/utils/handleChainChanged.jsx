export const handleChainChanged =async(setWeb3State)=>{
    try{
        if(!window.ethereum){
            throw new Error("Metamask in not installed")
        }
        const chainIdHex = await window.ethereum.request({
            method: 'eth_chainId'
        })
        const chainId = parseInt(chainIdHex,16)
        setWeb3State((prevState)=>({...prevState,chainId}))
    }catch(error){
        console.error(error,"Error in chainChanged")
    }

}