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

export const withDrawValue = (value) => ({
    type: "withdrawValue",
    payload:{
        value: value
    }
});
//State
const initialState = {
    balance: 10000
}

//Reducer
const reducer = (state = initialState, action) => {

    switch(action.type){
        case "withdraw100":
            return { balance: state.balance - 100};
        case "withdraw200":
            return { balance: state.balance - 200};
        case "withdraw500":
            return { balance: state.balance - 500};
        case "withdraw1000":
            return { balance: state.balance - 1000};
        case "withdrawValue":
            return { balance: state.balance - action.payload.value};
        default:
            return state;
    }
}
export default reducer;