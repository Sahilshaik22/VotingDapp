import { useEffect, useState } from "react";
import UseWeb3Context from "../../context/useWeb3Context";
import "./candidateList.css"
const CandidateList = ()=>{
    const [candidateList,setCandidateList] = useState([])
    const { web3State } = UseWeb3Context();
    const {contractInstance} =  web3State;
    
    useEffect(()=>{
        const fetchCandidateList = async()=>{
            try{
                if (!contractInstance) {
                    console.log("Contract instance is not available");
                    return;
                }
                console.log("fetching candidate list")
                const candidateList = await contractInstance.getCandiateList();
                setCandidateList(candidateList)
                console.log(candidateList)
    
            }catch(error){
                console.log(error,"Error in getCandidatelist");
            }
        }
        if(contractInstance){
            fetchCandidateList()
        }

    },[contractInstance])





    return(
      
      <div className="candidate-list-table-container">
    {candidateList.length!==0?(<table className="candidate-list-table">
        <thead>
            <tr>
            <th className="candidate-list-table-header">Address</th>
                <th className="candidate-list-table-header">Name</th>
                <th className="candidate-list-table-header">Party</th>
                <th className="candidate-list-table-header">Votes</th>
                <th className="candidate-list-table-header">Photo</th>
            </tr>
        </thead>
        <tbody>
            {candidateList.map((candidate, index) => (
                <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td className="candidate-list-table-data">{candidate.candidateAddress}</td>
                    <td className="candidate-list-table-data">{candidate.name}</td>
                    <td className="candidate-list-table-data">{candidate.party}</td>
                    <td className="candidate-list-table-data">{String(candidate.votes)}</td>
                    <td className="candidate-list-table-data">  
                      <img 
                       width={"70px"} 
                       height={"70px"} 
                       src={`http://localhost:3000/images/candidateImage/${candidate.candidateAddress}.png`}
                      />      
                    </td>
                </tr>
            ))}
        </tbody>
    </table>):(<p>No Candidates Found!</p>)}
</div>)

        
    
}

export default CandidateList;