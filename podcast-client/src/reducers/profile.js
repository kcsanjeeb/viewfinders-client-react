export const initialState = {
    displayName: '',
    displayImage: '',
    email: '',
    phoneNumber: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DISPLAY_NAME":
            return {
                ...state,
                displayName: action.payload
            }
        case "SET_DISPLAY_IMAGE":
            return {
                ...state,
                displayImage: action.payload
            }
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            }
        case "SET_PHONE_NUMBER":
            return {
                ...state,
                phoneNumber: action.payload
            }
        default:
            return state;
    }
};

export default profileReducer;