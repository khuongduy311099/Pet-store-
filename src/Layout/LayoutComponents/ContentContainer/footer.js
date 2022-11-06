import React from "react";
import {Col, Row} from "antd";

function ContentContainer({children}) {
    return (
        <Row justify={"center"} style={{marginTop: "80px"}}>
            <Col style={{maxWidth: 1280}}>{children}</Col>
        </Row>
    );
}

export default ContentContainer;
