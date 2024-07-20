import {MutableRefObject, ReactElement, useRef, useState} from "react";
import Slider, {Settings} from "react-slick";
import {ImageWithSourceAndDescription} from "../../models/ImageWithSourceAndDescription.ts";
import {Cover, CoverProps, CoverSlideObject} from "../Cover/Cover.tsx";
import "./CoverSlider.scss";

export const CoverSlider = (props: CoverSliderProps): ReactElement => {
    // Initialize all the slides
    const initialCoverSlides: Map<number, CoverProps> = new Map();
    let index: number = 0;
    for (const slide of props.slides) {
        const coverSlideObject: CoverProps = {
                slide: new CoverSlideObject(slide.image, slide.description,
                    slide.text ?? ''),
        }
        initialCoverSlides.set(index, coverSlideObject);
        ++index;
    }

    // Array of all slides
    const coverSlides: MutableRefObject<Map<number, CoverProps>> =
        useRef(initialCoverSlides);

    // Currently selected slide
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentSlide, setCurrentSlide] =
        useState<CoverProps | null | undefined>(null);

    // Get a slide by its index
    const getSlide = (slideNumber: number): CoverProps | undefined => {
        // Get the slide from the array of slides
        return coverSlides.current?.get(slideNumber);
    }

    // Select the current slide
    const selectSlide = (slideNumber: number): void => {
        // Get the selected slide
        const currentCoverSlide: CoverProps | undefined = getSlide(slideNumber);

        // Set the currently selected slide
        setCurrentSlide(currentCoverSlide);
    }

    // Slider settings
    const settings: Settings = {
        accessibility: true,
        dots: (props.slides.length > 1),
        arrows: (props.slides.length > 1),
        pauseOnHover: true,
        pauseOnDotsHover: false,
        infinite: props.infinite,
        speed: 500,
        autoplay: props.autoPlay,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,

        afterChange: (currentSlideNumber: number): void => {
            selectSlide(currentSlideNumber);
        },
    };

   return (
        <div className="slider-container">
            {(((coverSlides.current) && (coverSlides.current.size > 0)) ?
                <Slider {...settings}>
                    {(coverSlides.current.keys() ?
                        Array.from(coverSlides.current.keys()).map((key: number) => {
                            const coverSlide: CoverProps | undefined =
                                coverSlides.current.get(key);

                            return (
                                <Cover slide={coverSlide?.slide} key={key}/>
                            )
                        })
                    : '')}
                </Slider>
            : '')}
        </div>
    );
}

interface CoverSliderProps {
    slides: ImageWithSourceAndDescription[];
    infinite: boolean;
    autoPlay: boolean;
}
