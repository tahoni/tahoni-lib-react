import {ReactElement} from "react";
import {CoverSlider, ImageWithSourceAndDescription} from "../../../lib";
import {ExampleSliderImages} from "./ExampleSliderImages.ts";

export const ExampleSlider = (): ReactElement => {
    const exampleText: string = 'Even longer example text';
    const underConstructionSlides: ImageWithSourceAndDescription[] = [
        {...ExampleSliderImages.underConstructionLadyImage,
            text: exampleText},
        {...ExampleSliderImages.underConstructionTargetImage,
            text: exampleText},
        {...ExampleSliderImages.waterLilyImage,
            text: exampleText},
    ];

    return (
        <CoverSlider slides={underConstructionSlides}
                     infinite={true} autoPlay={false}/>
    )
}
