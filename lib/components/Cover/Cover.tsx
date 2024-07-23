import React, {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import "./Cover.scss";

export const Cover = (props: CoverProps): ReactElement => {
    return (
        <Container fluid className="cover">
            <Row>
                <Col>
                    <Image fluid src={props.slide?.image}
                           alt={props.slide?.description}/>
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
