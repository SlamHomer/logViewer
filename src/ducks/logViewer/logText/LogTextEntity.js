class LogTextEntity {
    _logLevel;
    _backGroundColor;
    _formattedText;
    _lineNumber;

    constructor(backGroundColor, logLevel, formattedText, lineNumber) {
        this._backGroundColor = backGroundColor;
        this._logLevel = logLevel;
        this._formattedText = formattedText;
        this._lineNumber = lineNumber;
    }

    getLogLevel() {
        return this._logLevel;
    }

    getBackGroundColor() {
        return this._backGroundColor;
    }

    getFormattedText() {
        return this._formattedText;
    }

    getLineNumber() {
        return this._lineNumber;
    }
}

export default LogTextEntity;