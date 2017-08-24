import * as React from 'react';
import LogText from "./LogText";

/**
 * TODO: comment me
 */
const LogParsedText = (props) => {
    return (
        <div style={{alignSelf: 'stretch'}}>
            {
                props.data.map(function (text, index) {
                    return <LogText key={"logParsedText_"+index} text={text}/>
                })
            }
        </div>
    );
};

export default LogParsedText;