import { ReactElement } from "react";
import Slider, { Settings } from "react-slick";
import { ImageWithSourceAndDescription } from "../../model/ImageWithSourceAndDescription.ts";
import { Cover, CoverProps, CoverSlideObject } from "../Cover/Cover.tsx";
import "./CoverSlider.scss";

export const CoverSlider = (props: CoverSliderProps): ReactElement => {
  // Build the slides
  const coverSlides: CoverProps[] = props.slides.map((slide) => ({
    slide: new CoverSlideObject(
      slide.image,
      slide.description ?? "",
      slide.text ?? "",
    ),
  }));

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
      {coverSlides.length > 0 ? (
        <Slider {...settings}>
          {coverSlides.map((coverSlide, index) => (
            <Cover slide={coverSlide.slide} key={index} />
          ))}
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
