const INITIAL_STATE = {
    users: [],
    loading: true,
    error: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                users: action.payload.users,
                loading: action.payload.loading,
                error: action.payload.error,
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload.error,
                loading: action.payload.loading,
            };
        default:
            return state;
    }
}

export default reducer;
