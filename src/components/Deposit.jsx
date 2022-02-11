import { useDispatch, useSelector } from "react-redux";
import { depositClickedValue, depositValue } from "../redux/ducks/atm";

const Deposit = () =>{
    let dispatch = useDispatch();
    const balance = useSelector((state) => state.balance);
    

    let onDepositClicked = (e) =>{
        const value = +e.target.innerText;
        dispatch(depositClickedValue(value));
        console.log("You deposited "+ value);
        
        return value;
    };
 
    let onDepositValue = () =>{
        const value = +document.querySelector("#value").value;
        dispatch(depositValue(value));
        console.log("You deposited "+ value);
        return value;
    }

    return (
        <div className="depo">
            <h1>Balance: {balance}</h1>
            <div>
                <h4>Deposit specific value:</h4>
                <input type="number" id="value" />
                <button onClick={onDepositValue}>Deposit value</button> 
                <br/>
                <br/>
                <button onClick={onDepositClicked}>100</button>
                <button onClick={onDepositClicked}>200</button>
                <button onClick={onDepositClicked}>500</button>
                <button onClick={onDepositClicked}>1000</button>
            </div>
        </div>
    )
}
export default Deposit;