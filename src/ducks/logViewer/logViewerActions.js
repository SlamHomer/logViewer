export function addDataSource() {
    return {
        type:"ADD_DATASOURCE"
    };
}

export function dataSourceAddedAction(pathToDS) {
    return {
        type:"DATASOURCE_ADDED",
        payload: pathToDS
    };
}

export function dataLoaded(data) {
    return {
        type:"DATA_LOADED",
        payload: data
    };
}

export function removeDataSource(){
    return{
        type: "REMOVE_DATASOURCE"
    }
}