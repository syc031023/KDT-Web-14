const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

const initialState = 0;

export const deposit = (payload) => ({ type : DEPOSIT, payload});
export const withdraw = (payload) => ({ type : WITHDRAW, payload});

const bankReducer = (state = initialState, action) => {
    switch (action.type){
        case DEPOSIT:
            return state + action.payload;
        case WITHDRAW:
            return state - action.payload;
        default:
            return state;
    }
};

export default bankReducer;