import React, {CSSProperties, forwardRef, useEffect, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import "./style.scss";

export const Cover = forwardRef((props: CoverProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <Container fluid id="cover" className="cover" ref={ref}>
            <Row className="d-flex h-100 align-items-center justify-content-center">
                <Col className="d-flex h-100 align-items-center justify-content-center">
                    <div style={props.object.cssOverrides} className="coverOverlay">
                        <Image fluid src={props.object.image}
                               alt={props.object.description}
                               className="coverImage"/>
                        <h1 className="coverText">{props.object.text}</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    )
})

export interface CoverProps {
    object: CoverObject;
}

export class CoverObject {
    image: string;
    description: string;
    text: string;
    cssOverrides: CSSProperties;

    constructor(image: string, description: string, text: string,
                cssOverrides: React.CSSProperties) {
        this.image = image;
        this.description = description;
        this.text = text;
        this.cssOverrides = cssOverrides;
    }
}

