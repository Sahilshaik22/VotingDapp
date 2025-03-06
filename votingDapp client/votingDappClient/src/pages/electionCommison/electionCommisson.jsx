import AnnounceWinner from "../../componenets/electionCommisson/announceWinner"
import DisplayResult from "../../componenets/electionCommisson/DisplayWinner"
import EmergencyDeclare from "../../componenets/electionCommisson/emergencyStop"
import SetVOtingTimePeriod from "../../componenets/electionCommisson/setVotingTimePeriod"
import VotingStatus from "../../componenets/electionCommisson/votingStatus"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const ElectionCommsion = ()=>{
  const token = localStorage.getItem("token")
  const navigateTo = useNavigate()
  useEffect(() => {
    if (!token) {
      navigateTo("/");
    }
  }, [navigateTo, token]);  // Added `token` dependency
  
    

    return(
        <>
        <h3>Election commission</h3>
        <AnnounceWinner/> <br />
        <DisplayResult/> <br />
        <EmergencyDeclare/> <br />
        <SetVOtingTimePeriod/> <br />
        <VotingStatus/>
        </>
    )
}

export default ElectionCommsion;