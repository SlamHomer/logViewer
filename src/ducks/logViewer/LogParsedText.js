import * as React from 'react';
import LogText from "./LogText";

/**
 * TODO: comment me
 */
const LogParsedText = (props) => {
    const formatText = (rawText, lastBackgroundColor) => {
        let thisBackgroundColor = lastBackgroundColor;

        // language=RegExp
        let infoRegex = new RegExp(".*?(?:^|\\s)(INFO[^\\s$]*).*?");
        // language=RegExp
        let debugRegex = new RegExp(".*?(?:^|\\s)(DEBUG[^\\s$]*).*?");
        // language=RegExp
        let errorRegex = new RegExp(".*?(?:^|\\s)(ERROR[^\\s$]*).*?");
        // language=RegExp
        let warnRegex = new RegExp(".*?(?:^|\\s)(WARN[^\\s$]*).*?");

        let isInfoText = infoRegex.test(rawText);
        let isDebugText = debugRegex.test(rawText);
        let isErrorText = errorRegex.test(rawText);
        let isWarnText = warnRegex.test(rawText);

        let textStyle = {alignSelf: 'stretch', textAlign: 'left', borderBottom: '1px solid black'};
        if (isInfoText) {
            const infoBC = 'cornsilk';
            textStyle = {...textStyle, background: infoBC};
            thisBackgroundColor = infoBC;
        }
        else if (isDebugText) {
            const debugBC = 'paleGreen';
            textStyle = {...textStyle, background: debugBC};
            thisBackgroundColor = debugBC;
        } else if (isWarnText) {
            const warnBC = 'yellow';
            textStyle = {...textStyle, background: warnBC};
            thisBackgroundColor = warnBC;
        } else if (isErrorText) {
            const errorBC = 'red';
            textStyle = {...textStyle, background: errorBC, fontWeight: 'bold'};
            thisBackgroundColor = errorBC;
        } else {
            textStyle = {...textStyle, background: lastBackgroundColor};
        }

        return {
            lastBackgroundColor: thisBackgroundColor,
            formattedText: (
                <div style={textStyle}>
                    {rawText}
                </div>
            )
        }
    };

    let getMappedLogTexts = function () {
        let lastBackgroundColor = "white";
        return props.data.map(function (text, index) {
            let lastBCAndFormattedText = formatText(text, lastBackgroundColor);
            lastBackgroundColor = lastBCAndFormattedText.lastBackgroundColor;
            return <LogText key={"logParsedText_" + index} lastBCAndFormattedText={lastBCAndFormattedText}/>
        });
    };

    return (
        <div style={{alignSelf: 'stretch'}}>
            {
                getMappedLogTexts()
            }
        </div>
    );
};

export default LogParsedText;