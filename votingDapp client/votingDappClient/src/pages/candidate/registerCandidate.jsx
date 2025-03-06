import { useEffect, useRef } from "react";
import UseWeb3Context from "../../context/useWeb3Context";
import { useState } from "react";
import { uploadCandiateImage } from "../../utils/uploadCandidateImage";
import { useNavigate } from "react-router-dom";
import "./registerCandidate.css"
const RegisterCandidate = () => {
    const { web3State } = UseWeb3Context();
    const { contractInstance } = web3State;
    const { selectedAccount } = web3State;
    const [file, setFile] = useState();
    const token = localStorage.getItem("token")
    const navigateTo = useNavigate()
    useEffect(() => {
        if (!token) {
            navigateTo("/")

        }
    }, [navigateTo, token])


    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);
    const partyRef = useRef(null);

    const submitVoterRegisterDetails = async (e) => {
        e.preventDefault();

        try {
            if (!contractInstance) {
                console.log("Contract instance not found");
                return;
            }


            const name = nameRef.current.value;
            const age = ageRef.current.value;
            const gender = genderRef.current.value;
            const party = partyRef.current.value;

            const imageUploadStatus = await uploadCandiateImage(file);
            if (imageUploadStatus == true) {
                console.log("Submitting candidate details:", { name, party, age, gender });
                const tx = await contractInstance.registerCandidate(name, party, age, gender);
                console.log("Transaction Successful", tx.hash)
                nameRef.current.value = "";
                ageRef.current.value = "";
                genderRef.current.value = "";
                partyRef.current.value = "";
                alert("Registration Successful")
                setFile(null);

            }
        } catch (error) {
            console.log(error, "Eroor in submitVoterRegisterDetails");
        }
    }
    return (
        <><h3>Candidate Registration</h3>
            <form onSubmit={submitVoterRegisterDetails}>
                <label>Enter Your Name:-</label>
                <input type="text" ref={nameRef} placeholder="Enter Your AgeEnter Your Name" required /> <br />
                <label>Age:</label>
                <input type="number" ref={ageRef} placeholder="Enter Your Age" required /> <br />
                <label>Gender:-</label>
                <input type="text" ref={genderRef} placeholder="Enter Your Gender" required /> <br />
                <label>Party Name:-:-</label>
                <input type="text" ref={partyRef} placeholder="Enter Your Party Name" required /> <br />
                <button type="submit">Submit</button>

            </form>
            <input class = "color" type="file" onChange={(e) => setFile(e.target.files[0])}></input>

        </>
    )


}

export default RegisterCandidate;