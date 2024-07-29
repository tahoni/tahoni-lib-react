export class ObjectWithNameAndDescription {
    name: string;
    description?: string;

    constructor(right: {name: string, description?: string}) {
        this.name = right.name;
        this.description = right.description;
    }

    protected initObject = (right: {name: string, description?: string}): void => {
        this.name = right.name;
        this.description = right.description;
    }
}
