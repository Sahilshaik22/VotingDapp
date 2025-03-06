export const handleAccountsChanged=async(setWeb3State)=>{
    try{
        if(!window.ethereum){
            throw new Error("Metamask in not installed")
        }
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })
        const selectedAccount = accounts[0]


        setWeb3State((prevState)=>({...prevState,selectedAccount}))

    }catch(error){
        console.log(error,"Error in handleAccountsChange");
    }

}