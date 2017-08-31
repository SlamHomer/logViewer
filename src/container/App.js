import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from "react-redux";
import {addTest} from "../actions/testActions";
import LogViewer from "../ducks/logViewer/LogViewer";
import AddLogViewer from "../ducks/logViewer/AddLogViewer";
import {Accordion, Panel} from "react-bootstrap";

class App extends Component {
    constructor() {
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

                <Accordion>
                    {
                        this.createLogViewer()
                    }
                </Accordion>
            </div>
        );
    }

    // TODO semi gut...
    createLogViewer() {
        let result = this.state.logViewerArray;

        while (this.state.logViewerArray.length < this.props.numberOfLogViewer) {
            result.push(
                <Panel header={"LogViewer " + this.state.logViewerArray.length}
                       eventKey={this.state.logViewerArray.length}
                       key={"logViewerPanel_" + this.state.logViewerArray.length}>
                    <LogViewer key={"logViewer_" + this.state.logViewerArray.length}/>
                </Panel>
            );
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
