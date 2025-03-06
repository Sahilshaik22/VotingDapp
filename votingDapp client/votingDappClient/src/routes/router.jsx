import {createBrowserRouter} from "react-router-dom"
import RegisterVoter from "../pages/voter/registerVoter"
import RegisterCandidate from "../pages/candidate/registerCandidate"
import VoterList from "../pages/voter/voterList"
import CandidateList from "../pages/candidate/candidateList"
import ElectionCommsion from "../pages/electionCommison/electionCommisson"
import Wallet from "../componenets/wallet/wallet"
import Navigation from "../componenets/navigation/navigation"
import TokenMarketPlace from "../pages/tokenmarket/tokenmarketPlace"

 export const router = createBrowserRouter([
    {path:"/",element:(
        <div>
            <Wallet/></div>)
    },
    { path: "register-voter", element: (<div><Navigation/><RegisterVoter/></div>) },
    { path: "register-candidate", element: (<div><Navigation/><RegisterCandidate/></div>)}
    ,
    {path:"voter-list",element:(
        <div>
            <Navigation/>
            <VoterList/>
        </div>
    )},
    {path:"candidate-list",element:(
        <div>   
            <Navigation/>
            <CandidateList/>
        </div>
    )},
    {path:"electioncommisson",element:(
        <div>
            <Navigation/>
            <ElectionCommsion/>
        </div>
    )},
    {path:"token-market-place",element:(
        <div>
            <Navigation/>
            <TokenMarketPlace/>
        </div>
    )}

 ])