import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/register-voter">Register Voter</Link>   </li>
            <li><Link to="/register-candidate">Register Candiadte</Link></li>
            <li><Link to="/voter-list">Voter List</Link></li>
            <li><Link to="/candidate-list">Candidate List</Link></li>
            <li><Link to="/electioncommisson">Election commission</Link></li>
            <li><Link to="/token-market-place">Token Market Place</Link></li>
        </ul>
    )
}
export default Navigation;