import {MutableRefObject, ReactElement, useRef, useState} from "react";
import {Container} from "react-bootstrap";
import Slider, {Settings} from "react-slick";
import {ImageSourceDescription} from "../../model/ImageSourceDescription.ts";
import {Cover, CoverCssProperties, CoverProps, CoverSlideObject} from "../Cover";
import "./styles.scss";

export const CoverCarousel = (props: CoverCarouselProps): ReactElement => {
    // Initial CSS override properties
    const firstCoverCssOverrides: CoverCssProperties = {
        cssOverride: {
            border: '1px solid transparent',
            borderImage: 'var(--tl-cover-gradient, none) 1 fill',
        }
    }
    const coverCssOverrides: CoverCssProperties  = {
        cssOverride: {
            visibility: 'hidden',
            border: '1px solid transparent',
            borderImage: 'none',
        }
    }

    // Initialize all the slides
    const initialCoverSlides: Map<number, CoverProps> = new Map();
    let index: number = 0;
    for (let slide of props.slides) {
        const coverSlideObject: CoverProps =
            {
                slide: new CoverSlideObject(slide.image, slide.description,
                    slide.text ?? ''),
                cssProperties: (index === 0 ?
                    firstCoverCssOverrides : coverCssOverrides),
            }
        initialCoverSlides.set(index, coverSlideObject);
        ++index;
    }

    // Initialize all the slide refs
    const initialCoverSlideRefs: Map<number, MutableRefObject<HTMLDivElement | null>> =
        new Map();
    const initialRefs: Array<MutableRefObject<HTMLDivElement | null>> =
        Array(props.slides.length).fill(useRef(null));
    index = 0;
    for (let ref of initialRefs) {
        initialCoverSlideRefs.set(index, {...ref});
        ++index;
    }

    // Slides properties
    const sliderContainerRef: MutableRefObject<HTMLDivElement | null> =
        useRef(null);
    const coverSlides: MutableRefObject<Map<number, CoverProps>> =
        useRef(initialCoverSlides);
    const coverSlideRefsMap: MutableRefObject<Map<number, MutableRefObject<HTMLDivElement | null>>> =
        useRef(initialCoverSlideRefs);

    // Select a slide using its index
    const selectSlide = (slideNumber: number) => {
        // The height of the slider content
        const slideHeight: number =
            ((sliderContainerRef?.current) ?
                sliderContainerRef.current?.clientHeight ?? window.innerHeight :
                window.innerHeight);

        // Get the selected slide and its ref from the property arrays
        const currentCoverSlide: CoverProps | undefined =
            coverSlides.current?.get(slideNumber);
        const currentSlideRef: MutableRefObject<HTMLDivElement | null> | undefined =
            coverSlideRefsMap.current?.get(slideNumber);

        // Set the currently selected slide
        setCurrentSlide(currentCoverSlide);

        if (currentCoverSlide && currentSlideRef) {
            // Get the slide image
            const image: HTMLImageElement | null | undefined =
                currentSlideRef.current?.querySelector("img");

            if (image) {
                // Get the image height
                const imageHeight: number = image.height;
                // Get the slide overlay
                const coverOverlay: HTMLDivElement | null | undefined =
                    currentSlideRef.current?.querySelector('.coverOverlay');

                if (coverOverlay) {
                    // Calculate the final image height
                    const cssHeight: number = (imageHeight <= slideHeight ?
                        imageHeight : slideHeight);

                    // Set the slide image's height
                    currentCoverSlide.cssProperties = new CoverCssProperties({
                        ...currentCoverSlide.cssProperties?.cssOverride,
                        visibility: 'visible',
                        height: cssHeight + 'px',
                        borderImage: 'var(--tl-cover-gradient, none) 1 fill',
                    });
                }
            }
        }
    }

    // Currently selected slide
    const [currentSlide, setCurrentSlide] =
        useState<CoverProps | null | undefined>(null);

    // Slider settings
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

        afterChange: (currentSlideNumber: number): void => {
            selectSlide(currentSlideNumber)
        },
    };

   return (
        <Container fluid id="slider-container" ref={sliderContainerRef}>
            {(((coverSlides.current) && (coverSlides.current.size > 0)) ?
                <Slider {...settings}>
                    {(coverSlides.current.keys() ?
                        Array.from(coverSlides.current.keys()).map((key: number) => {
                            const coverSlide: CoverProps | undefined =
                                coverSlides.current.get(key);
                            const coverSlideRef: MutableRefObject<HTMLDivElement | null> | undefined =
                                coverSlideRefsMap.current.get(key);

                            if (coverSlideRef && coverSlide) {
                                coverSlideRefsMap.current.set(key, coverSlideRef);
                                return (
                                    <Cover slide={coverSlide?.slide}
                                           cssProperties={coverSlide?.cssProperties}
                                           ref={coverSlideRef} key={key}/>
                                )
                            }
                        })
                    : '')}
                </Slider>
            : '')}
        </Container>
    );
}

interface CoverCarouselProps {
    slides: ImageSourceDescription[];
    infinite: boolean;
    autoPlay: boolean;
}
