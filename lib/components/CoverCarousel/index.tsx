import {ReactElement} from "react";
import {Container} from "react-bootstrap";
import Slider, {Settings} from "react-slick";
import {ImageSourceDescription} from "../../model/ImageSourceDescription.ts";
import {Cover} from "../Cover";
import "./styles.scss";

export const CoverCarousel = (props: CoverCarouselProps): ReactElement => {
    const settings: Settings = {
        accessibility: true,
        dots: (props.slides.length > 1),
        arrows: (props.slides.length > 1),
        pauseOnHover: true,
        pauseOnDotsHover: true,
        infinite: props.infinite,
        speed: 500,
        autoplay: props.autoPlay,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container fluid id="slider-container">

            <Slider {...settings}>
                {(props.slides.map((value: ImageSourceDescription, index: number) => {
                    return (
                        <Cover key={index} image={value.source}
                               description={value.description}
                               text={value.text ?? ''}/>
                    )
                }))}
            </Slider>

        </Container>
    );
}

interface CoverCarouselProps {
    slides: ImageSourceDescription[];
    infinite: boolean;
    autoPlay: boolean;
}
