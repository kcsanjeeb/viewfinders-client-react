export const setAuthenticate = (isAuthenticated) => {
    return {
        type:"SET_AUTHENTICATE",
        payload: isAuthenticated
    };
};