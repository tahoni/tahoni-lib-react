import { ObjectWithNameAndDescription } from "./ObjectWithNameAndDescription.ts";
import { NAME_DEFAULT_LENGTH } from "../constants/ContentConstants.ts";

export class ImageWithSourceAndDescription extends ObjectWithNameAndDescription {
  image: string;
  text?: string;

  constructor(right: {
    name?: string;
    description: string;
    image: string;
    text?: string;
  }) {
    super({
      name: ImageWithSourceAndDescription.generateName(
        right.description,
        right.name,
      ),
      description: right.description,
    });

    this.image = right.image;
    this.text = right.text;
  }

  public static generateName = (description: string, name?: string) => {
    let result: string = "";
    if (!name) {
      result = description.substring(
        0,
        Math.min(description.length - 1, NAME_DEFAULT_LENGTH),
      );
    } else {
      result = name;
    }
    return result;
  };
}
