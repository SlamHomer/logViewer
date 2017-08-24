import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from "react-redux";
import {addTest} from "../actions/testActions";
import LogViewer from "./LogViewer";
import AddLogViewer from "./AddLogViewer";

class App extends Component {
    constructor(){
        super();
        this.state = {
            logViewerArray: []
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Log-Viewer</h2>
                </div>

                <div>
                    <AddLogViewer/>
                </div>

                <div>
                {
                    this.createLogViewer()
                }
                </div>
            </div>
        );
    }

    // TODO semi gut...
    createLogViewer() {
        let result = this.state.logViewerArray;

        while(this.state.logViewerArray.length < this.props.numberOfLogViewer){
            result.push(<LogViewer key={"logViewer_"+this.state.logViewerArray.length}/>);
        }

        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        test1: state.testReducer.test1,
        numberOfLogViewer: state.generalAppReducer.numberOfLogViewer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTest: (add) => {
            dispatch(addTest(add))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
