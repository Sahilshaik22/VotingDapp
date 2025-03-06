import axios from "axios";
export const uploadCandiateImage = async (file) => {
    try {

        const formData = new FormData()
        formData.append('file', file);
        
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                "x-access-token": token,
                'Content-Type': 'multipart/form-data'
            }

        }
        const res = await axios.post("http://localhost:3000/api/postCandidateDetails",formData,config)
        if(res.data = "successfull"){
            return true;
        }
        return false

    } catch (error) {
        
        console.log(error, "error in uploadCandidateImage")
        return false;
    }



}