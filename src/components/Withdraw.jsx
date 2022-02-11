import { useDispatch, useSelector } from "react-redux";
import { withDrawClickedValue , withDrawValue } from "../redux/ducks/atm";

const Withdraw = () => {

    let dispatch = useDispatch();
    const balance = useSelector((state) => state.balance);

    let onWithDrawClicked = (e) =>{
        let value = e.target.innerText;
        if(value <= balance){
            dispatch(withDrawClickedValue(value));
            console.log("You withdrew "+ value);
        }
        else{
            alert("Not enough money on your account!!!")
        }
    };
 
    let onWithDrawValue = () =>{
        const value = +document.querySelector("#value").value;
        if(value <= balance){
            dispatch(withDrawValue(value));
            console.log("You withdrew "+ value);
        }
        else{
            alert("Not enough money on your account!!!")
        }
    }

    return (
        <div className="with">
            <h1>Balance: {balance}</h1>
            <div>
                <h4>Withdraw specific value:</h4>
                <button onClick={onWithDrawClicked}>100</button>
                <button onClick={onWithDrawClicked}>200</button>
                <button onClick={onWithDrawClicked}>500</button>
                <button onClick={onWithDrawClicked}>1000</button>
                <br/>
                <br/>
                <input type="number" id="value" />
                <button onClick={onWithDrawValue}>Withdraw value</button> 
            </div>
        </div>
    )
};


export default Withdraw;