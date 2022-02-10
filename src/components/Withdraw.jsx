import { useDispatch, useSelector } from "react-redux";
import { withDraw100, withDraw200, withDraw500, withDraw1000, withDrawValue } from "../redux/ducks/atm";

const Withdraw = () => {

    let dispatch = useDispatch();
    const balance = useSelector((state) => state.balance);

    let onWithDraw100 = () =>{
        dispatch(withDraw100());
        console.log("You withdrew 100");
    };
    let onWithDraw200 = () =>{
        dispatch(withDraw200());
        console.log("You withdrew 200");
    };
    let onWithDraw500 = () =>{
        dispatch(withDraw500());
        console.log("You withdrew 500");
    };
    let onWithDraw1000 = () =>{
        dispatch(withDraw1000());
        console.log("You withdrew 1000");
    };
    let onWithDrawValue = () =>{
        const value = +document.querySelector("#value").value;
        dispatch(withDrawValue(value));
        console.log("You withdrew "+ value);
    }

    return (
        <div>
            <h1>Balance: {balance}</h1>
            <div>
                <button onClick={onWithDraw100}>100</button>
                <button onClick={onWithDraw200}>200</button>
                <button onClick={onWithDraw500}>500</button>
                <button onClick={onWithDraw1000}>1000</button>
                <br/>
                <input type="number" id="value" />
                <button onClick={onWithDrawValue}>Add value</button> 
            </div>
        </div>
    )
};


export default Withdraw;