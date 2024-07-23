import React, {ReactElement} from "react";
import {Container, Image} from "react-bootstrap";
import "./Cover.scss";

export const Cover = (props: CoverProps): ReactElement => {
    return (
        <Container fluid className="cover">
                    <Image fluid src={props.slide?.image}
                           alt={props.slide?.description}/>
                    <h1 className="coverText">{props.slide?.text}</h1>
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
