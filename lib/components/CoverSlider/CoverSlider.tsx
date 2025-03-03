import { ReactElement, RefObject, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { ImageWithSourceAndDescription } from "../../model/ImageWithSourceAndDescription.ts";
import { Cover, CoverProps, CoverSlideObject } from "../Cover/Cover.tsx";
import "./CoverSlider.scss";

export const CoverSlider = (props: CoverSliderProps): ReactElement => {
  // Initialize all the slides
  const initialCoverSlides: Map<number, CoverProps> = new Map();
  let index: number = 0;
  for (let slide of props.slides) {
    const coverSlideObject: CoverProps = {
      slide: new CoverSlideObject(
        slide.image,
        slide.description ?? "",
        slide.text ?? "",
      ),
    };
    initialCoverSlides.set(index, coverSlideObject);
    ++index;
  }

  // Slides properties
  const coverSlides: RefObject<Map<number, CoverProps>> =
    useRef(initialCoverSlides);

  // Slider settings
  const settings: Settings = {
    accessibility: true,
    dots: props.slides.length > 1,
    arrows: props.slides.length > 1,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    infinite: props.infinite,
    speed: 500,
    autoplay: props.autoPlay,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      {coverSlides.current && coverSlides.current.size > 0 ? (
        <Slider {...settings}>
          {coverSlides.current.keys()
            ? Array.from(coverSlides.current.keys()).map((key: number) => {
                const coverSlide: CoverProps | undefined =
                  coverSlides.current.get(key);

                if (coverSlide) {
                  return <Cover slide={coverSlide?.slide} key={key} />;
                } else {
                  return "";
                }
              })
            : ""}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
};

interface CoverSliderProps {
  slides: ImageWithSourceAndDescription[];
  infinite: boolean;
  autoPlay: boolean;
}
