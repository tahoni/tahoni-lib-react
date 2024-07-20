import {MutableRefObject, ReactElement, useRef, useState} from "react";
import Slider, {Settings} from "react-slick";
import {ImageWithSourceAndDescription} from "../../models/ImageWithSourceAndDescription.ts";
import {Cover, CoverCssProperties, CoverProps, CoverSlideObject} from "../Cover/Cover.tsx";
import "./CoverSlider.scss";

export const CoverSlider = (props: CoverSliderProps): ReactElement => {
    // Initial CSS override properties
    const coverCssOverrides: CoverCssProperties  = {
        cssOverride: {
            visibility: 'hidden',
            border: '0px solid transparent',
            borderImage: 'none',
        }
    }

    // Initialize all the slides
    const initialCoverSlides: Map<number, CoverProps> = new Map();
    let index: number = 0;
    for (let slide of props.slides) {
        const coverSlideObject: CoverProps = {
            slide: new CoverSlideObject(slide.image, slide.description,
                slide.text ?? ''),
            cssProperties: coverCssOverrides,
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

    // Currently selected slide
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentSlide, setCurrentSlide] =
        useState<CoverProps | null | undefined>(null);

    // Select the current slide
    const selectSlide = (slideNumber: number): void => {
/*
        // The height of the slider content
        const slideHeight: number = ((sliderContainerRef?.current) ?
                (sliderContainerRef.current?.clientHeight ?? window.innerHeight) :
                window.innerHeight);
        console.log('slideHeight', slideHeight);

        // Get the selected slide and its ref from the property arrays
        const currentCoverSlide: CoverProps | undefined =
            coverSlides.current?.get(slideNumber);
        const currentSlideRef: MutableRefObject<HTMLDivElement | null> | undefined =
            coverSlideRefsMap.current?.get(slideNumber);

        // Set the currently selected slide
        setCurrentSlide(currentCoverSlide);

        if (currentCoverSlide && currentSlideRef) {
            // Get the slide overlay
            const coverOverlay: HTMLDivElement | null | undefined =
                currentSlideRef.current?.querySelector('.coverOverlay');

            // Get the slide image
            const image: HTMLImageElement | undefined | null =
                coverOverlay?.querySelector('img');
            console.log('image', image);

            let cssHeight: number = slideHeight;
            if (coverOverlay && image) {
                // Get the image height
                const imageHeight: number = image.naturalHeight;
                console.log('imageHeight', imageHeight);

                // Calculate the final image height
                cssHeight = ((imageHeight > 0) && (imageHeight <= slideHeight) ?
                    imageHeight : slideHeight);
                console.log('cssHeight', cssHeight);
            }

            // Set the slide image's height
            currentCoverSlide.cssProperties = new CoverCssProperties({
                ...currentCoverSlide.cssProperties?.cssOverride,
                visibility: 'visible',
                height: cssHeight + 'px',
                borderImage: 'var(--tl-cover-gradient, none) 1 fill',
            });
        }
*/
    };

    // Slider settings
    const settings: Settings = {
        accessibility: true,
        dots: (props.slides.length > 1),
        arrows: (props.slides.length > 1),
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: props.infinite,
        speed: 500,
        autoplay: props.autoPlay,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,

        onInit: () => {
            selectSlide(0);
        },
        afterChange: (currentSlideNumber: number): void => {
            selectSlide(currentSlideNumber);
        },
    };

   return (
        <div className="slider-container" ref={sliderContainerRef}>
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
                            } else {
                                return '';
                            }
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
