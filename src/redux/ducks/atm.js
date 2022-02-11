//Actions

export const withDrawClickedValue = (value) => ({
    type: "withdrawClicked",
    payload:{
        value:value
    }
});

export const withDrawValue = (value) => ({
    type: "withdrawValue",
    payload:{
        value: value
    }
});

export const depositClickedValue = (value) => ({
    type: "depositClicked",
    payload:{
        value:value
    }
});

export const depositValue = (value) => ({
    type: "depositValue",
    payload:{
        value: value
    }
});

//State
const initialState = {
    balance: 1000
}

//Reducer
const reducer = (state = initialState, action) => {

    switch(action.type){
        case "withdrawClicked":
            return { balance: state.balance - action.payload.value};
        case "withdrawValue":
            return { balance: state.balance - action.payload.value};
        case "depositClicked":
            return { balance: state.balance + action.payload.value};
        case "depositValue":
            return { balance: state.balance + action.payload.value};
        default:
            return state;
    }
}
export default reducer;