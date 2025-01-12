export class ObjectWithNameAndDescription {
    name: string;
    subject?: string;
    description?: string;

    constructor(right: {name: string, subject: string, description?: string}) {
        this.name = right.name;
        this.subject = right.subject;
        this.description = right.description;
    }

    protected initObject = (right: {name: string, subject: string, description?: string}): void => {
        this.name = right.name;
        this.subject = right.subject;
        this.description = right.description;
    }
}
