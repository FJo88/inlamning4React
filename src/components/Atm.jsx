import Withdraw  from "./Withdraw"
import Deposit from "./Deposit"
import {useState} from "react"

const Atm = () => {
    const[withdraw, setWithdraw] = useState(true);

    return(
        <div>
        {withdraw ? <Withdraw/>: <Deposit/> }
        <button onClick={() =>{setWithdraw(!withdraw)}} className="change">{withdraw ? "Go to Deposit": "Go to Withdraw"}</button>
        </div>
    )
    
};

export default Atm;