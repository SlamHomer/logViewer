import * as React from 'react';
import LogText from "./logText/LogText";
import {Col, Grid, Row} from "react-bootstrap";
import LogTextEntity from "./logText/LogTextEntity";
import {LogLevels} from "./LogLevels";

/**
 * TODO: comment me
 */
const LogParsedText = (props) => {

    const createLogTextEntity = (rawText, lastBackgroundColor, lastLogLevel, index) => {
        let thisBackgroundColor = lastBackgroundColor;
        let logLevel = lastLogLevel;

        // language=RegExp
        let infoRegex = new RegExp(".*?(?:^|\\s)(INFO[^\\s$]*).*?");
        // language=RegExp
        let debugRegex = new RegExp(".*?(?:^|\\s)(DEBUG[^\\s$]*).*?");
        // language=RegExp
        let errorRegex = new RegExp(".*?(?:^|\\s)(ERROR[^\\s$]*).*?");
        // language=RegExp
        let warnRegex = new RegExp(".*?(?:^|\\s)(WARN[^\\s$]*).*?");
        // language=RegExp
        let traceRegex = new RegExp(".*?(?:^|\\s)(TRACE[^\\s$]*).*?");

        let textStyle = {textAlign: 'left', overflowWrap: 'break-word', padding: '5px', minHeight: '32px'};
        if (infoRegex.test(rawText)) {
            const infoBC = 'cornsilk';
            textStyle = {...textStyle, background: infoBC};
            thisBackgroundColor = infoBC;
            logLevel = LogLevels.INFO;
        }
        else if (debugRegex.test(rawText)) {
            const debugBC = 'paleGreen';
            textStyle = {...textStyle, background: debugBC};
            thisBackgroundColor = debugBC;
            logLevel = LogLevels.DEBUG;
        } else if (warnRegex.test(rawText)) {
            const warnBC = 'yellow';
            textStyle = {...textStyle, background: warnBC};
            thisBackgroundColor = warnBC;
            logLevel = LogLevels.WARN;

        } else if (errorRegex.test(rawText)) {
            const errorBC = 'red';
            textStyle = {...textStyle, background: errorBC, fontWeight: 'bold'};
            thisBackgroundColor = errorBC;
            logLevel = LogLevels.ERROR;
        }else if(traceRegex.test(rawText)){
            const traceBC = 'gainsboro';
            textStyle = {...textStyle, background: traceBC};
            thisBackgroundColor = traceBC;
            logLevel = LogLevels.TRACE;
        } else {
            textStyle = {...textStyle, background: lastBackgroundColor};
        }

        const formattedText =
            <div style={textStyle}>
                {rawText}
            </div>;

        return new LogTextEntity(thisBackgroundColor, logLevel, formattedText, index);
    };

    let getMappedLogTexts = function () {
        let lastBackgroundColor = "white";
        // TODO falsch...
        let lastLogLevel = LogLevels.INFO;
        return props.data.map(function (text, index) {
            const lineNumber = ++index;
            let logTextEntity = createLogTextEntity(text, lastBackgroundColor, lastLogLevel, lineNumber);
            lastBackgroundColor = logTextEntity.getBackGroundColor();
            lastLogLevel = logTextEntity.getLogLevel();

            return <LogText key={"logParsedText_" + index} logTextEntity={logTextEntity}/>
        });
    };

    return (
        <Col xs={12}>
            {
                getMappedLogTexts()
            }
        </Col>
    );
};

export default LogParsedText;