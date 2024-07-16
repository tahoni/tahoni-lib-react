import {ReactElement} from "react";
import {ImageSourceDescription} from "../../../lib/model/ImageSourceDescription.ts";
import {CoverCarousel} from "../../../lib";
import {ExampleCoverImages} from "./ExampleCoverImages.ts";

export const ExampleCarousel = (): ReactElement => {
    const exampleText: string = 'Example';
    const underConstructionSlides: ImageSourceDescription[] = [
        {image: ExampleCoverImages.underConstructionLadyImage.image,
            description: ExampleCoverImages.underConstructionLadyImage.description,
            text: exampleText},
        {image: ExampleCoverImages.underConstructionTargetImage.image,
            description: ExampleCoverImages.underConstructionTargetImage.description,
            text: exampleText},
        {image: ExampleCoverImages.waterLilyImage.image,
            description: ExampleCoverImages.waterLilyImage.description,
            text: exampleText},
    ];

    return (
        <CoverCarousel slides={underConstructionSlides}
                       infinite={true} autoPlay={false}/>
    )
}
