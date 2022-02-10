import { useDispatch, useSelector } from "react-redux";


const Atm = () => {

    const balance = useSelector((state) => state.balance);

    return (
        <div>
            <h1>Balance: {balance}</h1>
        </div>
    )
};

export default Atm;