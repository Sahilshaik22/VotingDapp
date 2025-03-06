import UseWeb3Context from "../../context/useWeb3Context";
import { useRef } from "react";
const SetVOtingTimePeriod = ()=>{
    const {web3State} =  UseWeb3Context();
    const {contractInstance} = web3State;
    const startTimeRef = useRef()
    const endTimeRef = useRef();
    const setTime = async()=>{
        try{
            if (!contractInstance) {
                console.log("Contract instance is not available");
                return;
            }
            
            const startTime = startTimeRef.current.value
            const endTime = endTimeRef.current.value
            const Time = await contractInstance.setVotingPeriod(startTime,endTime)

        }catch(error){
            console.log(error,"Error in setVotingTimePeriod");
            
        }


    }
    return(
        <>
        <div>
            <label>Start Time:-</label>
            <input  type="datetime-local" ref={startTimeRef} placeholder="Start Time"/> <br />
            <label>End Time:-</label>
            <input type="datetime-local" ref={endTimeRef} placeholder="End Time"/> <br />


        </div>
        </>
    )
}
export default SetVOtingTimePeriod;