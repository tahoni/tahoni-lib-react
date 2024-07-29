export class ImageWithSourceAndDescription {
    image: string;
    description: string;
    text?: string;

    constructor(right: {image: string, description: string, text?: string}) {
        this.image = right.image;
        this.description = right.description;
        this.text = right.text;
    }
}
