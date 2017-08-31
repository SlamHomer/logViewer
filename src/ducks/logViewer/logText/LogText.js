import * as React from "react";
import {Col, Row} from "react-bootstrap";

/**
 * TODO: comment me
 */
const LogText = (props) => {
    return (
        <Row className="show-grid">
            <Col xs={1}>{props.logTextEntity.getLineNumber()}</Col>
            <Col xs={1}>{props.logTextEntity.getLogLevel().name}</Col>
            <Col xs={10}>{props.logTextEntity.getFormattedText()}</Col>
        </Row>
    );
};

export default LogText;