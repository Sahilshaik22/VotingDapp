import { useEffect } from "react";
import UseWeb3Context from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
const Wallet = ()=>{
    const {handleWallet,web3State} = UseWeb3Context();
    const {selectedAccount} =  web3State;
    const navigateTo = useNavigate();
    useEffect(() => {
        console.log("selectedAccount:", selectedAccount);
        if (selectedAccount) {
            navigateTo('/register-candidate');
        }
    }, [selectedAccount]);
    
    return(
        <div>
            <button onClick={handleWallet}>Connect Wallet</button>

        </div>
        
    )

}

export default Wallet;