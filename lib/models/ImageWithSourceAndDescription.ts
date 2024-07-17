export class ImageWithSourceAndDescription {
    image: string;
    description: string;
    text?: string;

    constructor(source: string, description: string, text?: string) {
        this.image = source;
        this.description = description;
        this.text = text;
    }
}
