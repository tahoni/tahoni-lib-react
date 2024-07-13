import {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import styles from "./styles.module.scss";

export const Cover = (props: CoverProps): ReactElement => {
    return (
        <Container fluid id="cover" className={styles.cover}>
            <Row className="d-flex h-100 align-items-center justify-content-center">
                <Col className="d-flex h-100 align-items-center justify-content-center">
                    <div className={styles.coverOverlay}>
                        <Image fluid src={props.image} alt={props.description}
                               className={styles.coverImage}/>
                    </div>
                    <h1 className={styles.coverText}>{props.text}</h1>
                </Col>
            </Row>
        </Container>
    )
}

interface CoverProps {
    image: string;
    description: string;
    text: string;
}
