import {ObjectWithNameAndDescription} from "../ObjectWithNameAndDescription.ts";
import {Topic} from "../topic/Topic.ts";
import {Category} from "../topic/Category.ts";
import {Tag} from "../topic/Tag.ts";
import {NAME_DEFAULT_LENGTH} from "../../constants/ContentConstants.ts";

export class WebContent extends ObjectWithNameAndDescription {
    content: string;
    topic: Topic;

    categories: Category[] = [];
    tags: Tag[] = [];

    readonly dateCreated: Date;
    dateUpdated: Date;

    constructor(right: {name?: string, subject?: string, description?: string, content: string,
        topic: Topic, categories?: Category[], tags?: Tag[],
        dateCreated?: Date, dateUpdated?: Date}) {

        super({name: WebContent.generateName(right.content, right.name),
            subject: right.subject, description: right.description});
        this.initContent(right);

        this.content = right.content;
        this.topic = right.topic;
        this.dateCreated = right.dateCreated ?? new Date();
        this.dateUpdated = right.dateUpdated ?? new Date();
    }

    public static generateName = (content: string, name?: string): string => {
        let result: string = "";
        if (!name) {
            result = content.substring(0, Math.min(content.length - 1, NAME_DEFAULT_LENGTH));
        } else {
            result = name;
        }
        return result;
    }

    protected initContent = (right: {name?: string,
        subject?: string, description?: string, content: string, topic: Topic, categories?: Category[], tags?: Tag[]}): void => {

        const name: string = WebContent.generateName(right.content, right.name);
        this.initObject({name: name, subject: right.subject, description: right.description})

        this.content = right.content;
        this.topic = right.topic;
        this.categories = right.categories ?? [];
        this.tags = right.tags ?? [];
    }
}
