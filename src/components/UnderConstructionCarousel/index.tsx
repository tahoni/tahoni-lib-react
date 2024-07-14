import {ReactElement} from "react";
import {ImageSourceDescription} from "../../../lib";
import {CoverCarousel} from "../../../lib";
import {ExampleCoverImages} from "./ExampleCoverImages.ts";

export const ExampleCarousel = (): ReactElement => {
    const exampleText: string = 'Example';
    const underConstructionSlides: ImageSourceDescription[] = [
        {source: ExampleCoverImages.underConstructionLadyImage.source,
            description: ExampleCoverImages.underConstructionLadyImage.description,
            text: exampleText},
        {source: ExampleCoverImages.underConstructionTargetImage.source,
            description: ExampleCoverImages.underConstructionTargetImage.description,
            text: exampleText},
        {source: ExampleCoverImages.waterLilyImage.source,
            description: ExampleCoverImages.waterLilyImage.description,
            text: exampleText},
    ];

    return (
        <CoverCarousel slides={underConstructionSlides}
                       infinite={true} autoPlay={false}/>
    )
}
