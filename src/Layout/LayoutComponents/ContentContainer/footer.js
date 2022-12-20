import React from "react";
import {Col, Row} from "antd";

function ContentContainer({children}) {
    console.log(123);
    return (
        <Row justify={"center"} style={{marginTop: "80px"}}>
            <Col style={{maxWidth: 1280, minHeight: 600}}>{children}</Col>
        </Row>
    );
}

export default ContentContainer;
