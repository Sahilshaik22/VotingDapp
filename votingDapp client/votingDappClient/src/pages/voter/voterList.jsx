import { useEffect, useState } from "react";
import UseWeb3Context from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import "./voterList.css"
const VoterList = () => {
    const [voterList, setVoterList] = useState([])
    const { web3State } = UseWeb3Context();
    const { contractInstance } = web3State;
    const token = localStorage.getItem("token");
    const navigateTo = useNavigate();
    useEffect(() => {
        if (!token) {
            navigateTo("/")
        }
    }, [navigateTo, token])

    useEffect(() => {
        const fetchVoterList = async () => {
            
            try {
                if (!contractInstance) {
                    console.log("Contract instance is not available");
                    return;
                }
                console.log("fetching voter details")
                const voterList = await contractInstance.getVoterList();
                setVoterList(voterList)
                console.log(voterList)

            } catch (error) {
                console.log(error, "Error in getVoterList");
            }
        }
        if (contractInstance) {
            fetchVoterList()
        }

    }, [contractInstance])



    return (
        <div className="Voter-list-table-container">
            {voterList.length !== 0 ? (
                <table className="voter-list-table">
                    <thead>
                        <tr>
                            <th className="voter-list-table-header">Name</th>
                            <th className="voter-list-table-header">VoterId</th>
                            <th className="voter-list-table-header">Vote-To</th>
                            <th className="voter-list-table-header">Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voterList.map((voter, index) => (
                            <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                                <td className="voter-list-table-data">{voter.name}</td>
                                <td className="voter-list-table-data">{voter.voterId}</td>
                                <td className="voter-list-table-data">{voter.voteCandidate}</td> 
                                <td className="voter-list-table-data">
                                    <img 
                                        width="70px" 
                                        height="70px" 
                                        src={`http://localhost:3000/images/voterImage/${voter.voterAddress}.png`}
                                        alt="Voter"
                                    />  
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No voters found.</p>
            )}
        </div>
    );
    
}

export default VoterList;