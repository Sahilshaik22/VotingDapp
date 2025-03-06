import { useEffect, useState } from "react"
import UseWeb3Context from "../../context/useWeb3Context"
const DisplayResult = ()=>{
    const [winner , setWinner] = useState("No winner declared");
    const {web3State} = UseWeb3Context();
    const {contractInstance} = web3State;

    useEffect(()=>{
        const getWinner = async()=>{
            try{
                
                winningCandidateAddress =  await contractInstance.winner();
                if(winningCandidateAddress != "0x0000000000000000000000000000000000000000"){
                    setWinner(winningCandidate);

                }
                if(!winningCandidateAddress){
                    setWinner("No winner declared");
                }
                
            }catch(error){
                console.log(error);
            }
        }

        if(contractInstance){
          getWinner();
        }

    },[])
    return(
        <div>
            <h5 style={{color:"white"}}>Winner is {winner}</h5>
        </div>
    )

}

export default DisplayResult;