import * as React from 'react';
import {addLogViewer} from "../../actions/generalAppActions";
import {connect} from "react-redux";
import {Button, Glyphicon} from "react-bootstrap";

/**
 * TODO: comment me
 */
class AddLogViewer extends React.Component {

    render() {
        return (
            <div style={{margin: "5px"}}>
                <Button bsSize="large" onClick={this.props.addLogViewer}>Add
                    Log-Viewer</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLogViewer: () => {
            dispatch(addLogViewer())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLogViewer);