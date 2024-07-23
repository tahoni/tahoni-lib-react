import {ReactElement} from "react";
import {CoverSlider, ImageWithSourceAndDescription} from "../../..";
import {ExampleSliderImages} from "./ExampleSliderImages.ts";

export const ExampleSlider = (): ReactElement => {
    const exampleText: string = 'Even longer example text';
    const underConstructionSlides: ImageWithSourceAndDescription[] = [
        {image: ExampleSliderImages.underConstructionLadyImage.image,
            description: ExampleSliderImages.underConstructionLadyImage.description,
            text: exampleText},
        {image: ExampleSliderImages.underConstructionTargetImage.image,
            description: ExampleSliderImages.underConstructionTargetImage.description,
            text: exampleText},
        {image: ExampleSliderImages.waterLilyImage.image,
            description: ExampleSliderImages.waterLilyImage.description,
            text: exampleText},
    ];

    return (
        <CoverSlider slides={underConstructionSlides}
                     infinite={true} autoPlay={false}/>
    )
}
