//Actions

export const withDraw100 = () => ({
    type: "withdraw100"
});
  
export const withDraw200 = () => ({
    type: "withdraw200"
});

export const withDraw500 = () => ({
    type: "withdraw500"
});

export const withDraw1000 = () => ({
    type: "withdraw1000"
});
//State
const initialState = {
    balance: 20000
}

//Reducer
const reducer = (state = initialState, action) => {

    switch(action){
        case "withdraw100":
            return {...state, balance: state.balance - 100};
        case "withdraw200":
            return {...state, balance: state.balance - 200};
        case "withdraw500":
            return {...state, balance: state.balance - 500};
        case "withdraw1000":
            return {...state, balance: state.balance - 1000};
        default:
            return state;
    }
}
export default reducer;