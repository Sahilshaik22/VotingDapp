import UseWeb3Context from "../../context/useWeb3Context"
import { useRef } from "react"
const CastVote = ()=>{
    const {web3State} = UseWeb3Context();
    const {contractInstance} = web3State;
    const voterIdref = useRef(null);
    const  CandidateIdref= useRef(null);
    const voteCandidate = async(e)=>{
        try{
            e.preventDefault();
            const voterId = voterIdref.current.value;
            const candidateId = CandidateIdref.current.value;
            await contractInstance.castVote(voterId,candidateId);
            console.log("Vote cast successfully");
        }catch(error){
            console.log(error);
        }
        
    }
    return (
        <>
            <form onSubmit={voteCandidate }>
                <label>Voter Id :</label>
                <input type="number" ref={voterIdref} placeholder="Enter Your VoterID" /> <br />

                <label>Candidate Id :</label>
                <input type="number" ref={CandidateIdref} placeholder="Enter CandidateID" /> <br />

                <button type="submit">Submit</button>
            </form>
        </>
    );


}
