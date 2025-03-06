import { useEffect, useState } from "react";
import UseWeb3Context from "../../context/useWeb3Context";

const AnnounceWinner = () => {
    const { web3State } = UseWeb3Context();  // Corrected Hook usage
    const { contractInstance } = web3State;
    const [winner, setWinner] = useState(null);

    const fetchWinner = async () => {
        try {
            if (!contractInstance) {
                console.log("Contract instance is not available");
                return;
            }
            const winner = await contractInstance.announceResultOfCandidates();
            setWinner(winner);
        } catch (error) {
            console.log("Error in fetchWinner", error);
        }
    };

    return (
        <>
            <button onClick={fetchWinner}>Announce Winner</button>
            <h5 style={{color:"white"}}>Winner is {winner}</h5>
        </>
    );
};

export default AnnounceWinner;
