const addDataSourceReducer = (state = {
    wantToAddDataSource: false,
    dataSourceAdded: false,
    dataSourcePath: undefined,
    data: ["NOTHING"]
}, action) => {
    switch (action.type) {
        case "ADD_DATASOURCE":
            state = {
                ...state,
                wantToAddDataSource: true
            };
            break;
        case "DATASOURCE_ADDED":
            state = {
                ...state,
                wantToAddDataSource: false,
                dataSourcePath: action.payload
            };
            break;
        case "DATA_LOADED":
            state = {
                ...state,
                dataSourceAdded: true,
                data: action.payload
            };
            break;
        case "REMOVE_DATASOURCE":
            state = {
                ...state,
                wantToAddDataSource: false,
                dataSourcePath: undefined,
                dataSourceAdded: false,
                data: ["NOTHING"]
            };
            break;
    }

    return state;
};

export default addDataSourceReducer;
