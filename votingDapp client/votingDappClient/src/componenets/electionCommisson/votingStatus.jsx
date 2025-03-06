import UseWeb3Context from "../../context/useWeb3Context"
import { useEffect, useState } from "react"
const VotingStatus = () => {
  const [votingStatus, setVotingStatus] = useState();
  const { web3State } = UseWeb3Context();
  const { contractInstance } = web3State;
  useEffect(() => {
    const getVotingStatus = async () => {
      try {
        if (!contractInstance) {
          console.log("Contract instance is not available");
          return;
        }
        const status = await contractInstance.getVotingStatus();
        if (status == 0) {
          setVotingStatus("Voting is not started yet");
        } else if (status == 1) {
          setVotingStatus("Voting is in progress");
        } else {
          setVotingStatus("Voting is completed");
        }

        console.log(status);
        setVotingStatus(status);
      } catch (error) {
        console.error(error);
      }
    }
    if (contractInstance) {
      getVotingStatus();
    }
  }, [contractInstance])

  return (
    <>
      <h5 style={{ color: "white" }}> Voting Status :- {votingStatus}</h5>
    </>
  )
}

export default VotingStatus;
