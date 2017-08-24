const testReducer = (state = {
    test1: 1
}, action) => {
    switch (action.type) {
        case "ADD_TEST":
            state = {
                ...state,
                test1: state.test1 + action.payload
            };
            break;
    }

    return state;
};

export default testReducer;
