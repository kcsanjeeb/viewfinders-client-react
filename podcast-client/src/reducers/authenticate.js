export const initialState = {
    isAuthenticated: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_AUTHENTICATE":
            return {
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state;
    }
};

export default authReducer;