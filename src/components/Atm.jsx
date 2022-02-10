import Withdraw  from "./Withdraw"
import Deposit from "./Deposit"
import {useState} from "react"

const Atm = () => {
    const[withdraw, setWithdraw] = useState(true);

    return(
        <div>
        {withdraw ? <Withdraw/>: <Deposit/> }
        
        </div>
    )
    
};

export default Atm;