import * as React from 'react';
import {addLogViewer} from "../actions/generalAppActions";
import {connect} from "react-redux";

/**
 * TODO: comment me
 */
class AddLogViewer extends React.Component {

    render() {
        return (
            <button onClick={this.props.addLogViewer}>+</button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLogViewer: () =>{
            dispatch(addLogViewer())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLogViewer);