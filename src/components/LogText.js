import * as React from "react";

/**
 * TODO: comment me
 */
const LogText = (props) => {
    return (
        <div style={{alignSelf: 'stretch', textAlign: 'left'}}>
            {props.text}
        </div>
    );
};

export default LogText;