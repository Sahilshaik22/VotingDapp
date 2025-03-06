import { useEffect, useRef } from "react";
import { useState } from "react";
import { uploadVoterDetails } from "../../utils/uploadVoterDetails";
import UseWeb3Context from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import "./registerVoter.css"
const ResiterVoter = () => {
    const token = localStorage.getItem("token")
    const navigateTo = useNavigate();
    useEffect(() => {
        if (!token) {
            navigateTo('/')
        }

    }, [navigateTo, token])


    const { web3State } = UseWeb3Context();
    const { contractInstance } = web3State;
    const [file, setFile] = useState("")

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);

    const submitVoterRegisterDetails = async (e) => {
        e.preventDefault()
        try {
            if (!contractInstance) {
                console.log("Contract instance not found");
                return;
            }
            const name = nameRef.current.value;
            const age = ageRef.current.value;
            const gender = genderRef.current.value;

            const imageUploadStatus = await uploadVoterDetails(file)
            if(imageUploadStatus==true){
            console.log("Submitting Voter details:", { name, age, gender});
            await contractInstance.registerVoter(name, age, gender);
            nameRef.current.value = "";
            ageRef.current.value = "";
            genderRef.current.value = "";
            alert("Registration Successful")
            setFile(null);


            }




            // console.log("Transaction Successful",tx.hash)

        } catch (error) {
            console.log(error, "Eroor in submitVoterRegisterDetails");
        }
    }
    return (
        <>
            <form onSubmit={submitVoterRegisterDetails}>
                <label>Enter Your Name:-</label>
                <input type="text" ref={nameRef} placeholder="Enter Your Name" required /> <br />
                <label>Age:</label>
                <input type="number" ref={ageRef} placeholder="Enter Your Age" required /> <br />
                <label>Gender:-</label>
                <input type="text" ref={genderRef} placeholder="Enter Your Gender" required /> <br />
                <button type="submit">Submit</button>

            </form>
            <input class="color" type="file" required onChange={(e) => { setFile(e.target.files[0]) }}></input>

        </>
    )


}

export default ResiterVoter;