import React, {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import "./Cover.scss";

export const Cover = (props: CoverProps): ReactElement => {
    return (
        <Container fluid id="cover" className="cover">
            <Row className="d-flex h-100 align-items-center justify-content-center">
                <Col className="d-flex h-100 align-items-center justify-content-center">
                    <div className="coverOverlay">
                        <Image fluid src={props.slide?.image}
                               alt={props.slide?.description}
                               className="coverImage"/>
                    </div>
                    <h1 className="coverText">{props.slide?.text}</h1>
                </Col>
            </Row>
        </Container>
    )
}

export class CoverProps {
    slide?: CoverSlideObject;
}

export class CoverSlideObject {
    image: string;
    description: string;
    text: string;

    constructor(image: string, description: string, text: string) {
        this.image = image;
        this.description = description;
        this.text = text;
    }
}
