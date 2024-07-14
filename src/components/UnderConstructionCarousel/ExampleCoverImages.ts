import {ImageSourceDescription} from "../../../lib";
import ladyShooterOnIpscRangeImage from './images/lady-shooter-on-ipsc-range.png';
import ipscTargetWithBulletHoles from './images/ipsc-target-with-bullet-holes.png';
import waterLilyImage from "./images/water-lilies.jpg";

export class ExampleCoverImages {
    static underConstructionLadyImage: ImageSourceDescription =
        {source: ladyShooterOnIpscRangeImage,
            description: 'Lady shooter on IPSC range'};
    static underConstructionTargetImage: ImageSourceDescription =
        {source: ipscTargetWithBulletHoles,
            description: 'IPSC target with bullet holes'};
    static waterLilyImage: ImageSourceDescription =
        {source: waterLilyImage,
            description: 'Water lilies in a pond'};
}
