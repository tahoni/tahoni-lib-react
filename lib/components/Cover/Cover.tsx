import React, {CSSProperties, forwardRef} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import "./Cover.scss";

export const Cover = forwardRef((props: CoverProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <Container fluid id="cover" className="cover" ref={ref}>
            <Row className="d-flex h-100 align-items-center justify-content-center">
                <Col className="d-flex h-100 align-items-center justify-content-center">
                    <div style={props.cssProperties?.cssOverride}
                         className="coverOverlay">
                        <Image fluid src={props.slide?.image}
                               alt={props.slide?.description}
                               className="coverImage"/>
                        <h1 className="coverText">{props.slide?.text}</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    )
})

export class CoverProps {
    slide?: CoverSlideObject;
    cssProperties?: CoverCssProperties;
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

export class CoverCssProperties {
    cssOverride: CSSProperties;

    constructor(cssOverride: CSSProperties) {
        this.cssOverride = cssOverride;
    }
}
