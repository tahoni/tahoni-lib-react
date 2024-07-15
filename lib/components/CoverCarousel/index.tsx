import {CSSProperties, MutableRefObject, ReactElement, useRef} from "react";
import {Container} from "react-bootstrap";
import Slider, {Settings} from "react-slick";
import {ImageSourceDescription} from "../../model/ImageSourceDescription.ts";
import {Cover, CoverObject, CoverProps} from "../Cover";
import "./styles.scss";

export const CoverCarousel = (props: CoverCarouselProps): ReactElement => {
    const cssOverrides: CSSProperties = {
        // display: 'block',
        // height: window.innerHeight,
        border: '1px solid transparent',
        borderImage: 'var(--tl-cover-gradient, none) 1 fill',
    };

    const initialCoverSlides: Map<number, CoverProps> = new Map();
    let index: number = 0;
    for (const slide of props.slides) {
        const coverSlideObject: CoverObject =
            new CoverObject(slide.image, slide.description,
                slide.text || '', cssOverrides);
        initialCoverSlides.set(index, {object: coverSlideObject});
        ++index;
    }

    const initialCoverSlideRefs: Map<number, MutableRefObject<HTMLDivElement | null>> =
        new Map();
    const initialRefs: Array<MutableRefObject<HTMLDivElement | null>> =
        Array(initialCoverSlides.size).fill(useRef(null));
    index = 0;
    for (const ref of initialRefs) {
        initialCoverSlideRefs.set(index, {...ref});
        ++index;
    }

    const sliderContainerRef: MutableRefObject<HTMLDivElement | null> =
        useRef(null);
    const coverSlides: MutableRefObject<Map<number, CoverProps>> =
        useRef(initialCoverSlides);
    const coverSlideRefsMap: MutableRefObject<Map<number, MutableRefObject<HTMLDivElement | null>>> =
        useRef(initialCoverSlideRefs);

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

        afterChange(currentSlide: number) {
            const slideNumber: number = currentSlide;
            console.log('slideNumber', slideNumber);

            const slideHeight: number =
                ((sliderContainerRef?.current) ?
                    sliderContainerRef.current?.clientHeight || window.innerHeight :
                    window.innerHeight);
            console.log('slideHeight', slideHeight);

            const currentCoverSlide: CoverProps | undefined =
                coverSlides.current?.get(slideNumber);
            const currentSlideRef: MutableRefObject<HTMLDivElement | null> | undefined =
                coverSlideRefsMap.current?.get(slideNumber);

            if (currentCoverSlide && currentSlideRef) {
                console.log('currentSlideRef', currentSlideRef);
                const image: HTMLImageElement | null | undefined =
                    currentSlideRef.current?.querySelector("img");

                if (image) {
                    const imageHeight: number = image.height;
                    console.log('imageHeight', imageHeight);
                    const coverOverlay: HTMLDivElement | null | undefined =
                        currentSlideRef.current?.querySelector('.coverOverlay');

                    if (coverOverlay) {
                        const cssHeight: number = (imageHeight <= slideHeight ?
                            imageHeight : slideHeight);

                        coverOverlay.style.height = cssHeight + 'px';
                        currentCoverSlide.object.text = 'Testing';
                        currentCoverSlide.object.cssOverrides = {
                            ...cssOverrides,
                            height: cssHeight,
                        }
                        // currentCoverSlide.text = 'Test';
                        // console.log('slide', currentCoverSlide);
                        console.log('height', (imageHeight <= slideHeight ? imageHeight : slideHeight));
                    }
                }
            }
        },
    };

    return (
        <Container fluid id="slider-container" ref={sliderContainerRef}>
            {(coverSlides.current?.size > 0 ?
                <Slider {...settings}>
                    {Array.from(coverSlides.current?.keys()).map((key: number) => {
                        const coverSlide: CoverObject | undefined =
                            coverSlides.current?.get(key)?.object;
                        const coverSlideRef: MutableRefObject<HTMLDivElement | null> | undefined =
                            coverSlideRefsMap.current?.get(key);

                        if (coverSlideRef && coverSlide) {
                            coverSlideRefsMap.current.set(key, coverSlideRef);
                            return (
                                <Cover object={coverSlide} key={key}
                                       ref={coverSlideRef}/>
                            )
                        }
                    })}
                </Slider>
            : '')}
        </Container>
    );
}

export interface CoverCarouselProps {
    slides: ImageSourceDescription[];
    infinite: boolean;
    autoPlay: boolean;
}
