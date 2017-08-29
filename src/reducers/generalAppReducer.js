const generalAppReducer = (state = {
    numberOfLogViewer: 0
}, action) => {
    console.log("generalAppReducer!");
    switch (action.type) {
        case "ADD_LOG_VIEWER":
            console.log("ADD_LOG_VIEWER!");
            state = {
                ...state,
                numberOfLogViewer: ++state.numberOfLogViewer
            };
            break;
        default:
            state = {...state}
    }

    return state;
};

export default generalAppReducer;
