import UseWeb3Context from "../../context/useWeb3Context"
const EmergencyDeclare = ()=>{
    const {web3State} = UseWeb3Context();
    const {contractInstance} = web3State;
    const emergencyStop = async()=>{
        await contractInstance.emergencyStopVoting()
    }
return(
    <div>
        <button style={{color:"white"}} onClick={emergencyStop}>Emergency Stop</button>
    </div>
)

}

export default EmergencyDeclare;