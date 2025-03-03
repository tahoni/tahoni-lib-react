import { ImageWithSourceAndDescription } from "../../../lib";
import ladyShooterOnIpscRangeImage from "./images/lady-shooter-on-ipsc-range.png";
import ipscTargetWithBulletHoles from "./images/ipsc-target-with-bullet-holes.png";
import waterLilyImage from "./images/water-lilies.jpg";

export class ExampleSliderImages {
  static underConstructionLadyImage: ImageWithSourceAndDescription =
    new ImageWithSourceAndDescription({
      image: ladyShooterOnIpscRangeImage,
      description: "Lady shooter on IPSC range",
    });
  static underConstructionTargetImage: ImageWithSourceAndDescription =
    new ImageWithSourceAndDescription({
      image: ipscTargetWithBulletHoles,
      description: "IPSC target with bullet holes",
    });
  static waterLilyImage: ImageWithSourceAndDescription =
    new ImageWithSourceAndDescription({
      image: waterLilyImage,
      description: "Water lilies in a pond",
    });
}
