import {ObjectWithNameAndDescription} from "../ObjectWithNameAndDescription.ts";
import {Topic} from "../topic/Topic.ts";
import {Category} from "../topic/Category.ts";
import {Tag} from "../topic/Tag.ts";
import {WEB_CONTENT_NAME_DEFAULT_LENGTH} from "../../constants/ContentConstants.ts";

export class WebContent extends ObjectWithNameAndDescription {
    content: string;
    topic: Topic;

    categories: Category[] = [];
    tags: Tag[] = [];

    readonly dateCreated: Date;
    dateUpdated: Date;

    constructor(right: {content: string, topic: Topic, name?: string,
        description?: string, categories?: Category[], tags?: Tag[],
        dateCreated?: Date, dateUpdated?: Date}) {

        super({name: WebContent.generateName(right.content, right.name),
            description: right.description});
        this.initContent(right);

        this.content = right.content;
        this.topic = right.topic;
        this.dateCreated = right.dateCreated ?? new Date();
        this.dateUpdated = right.dateUpdated ?? new Date();
    }

    protected initContent = (right: {content: string, topic: Topic, name?: string,
        description?: string, categories?: Category[], tags?: Tag[]}): void => {

        this.initObject({name: WebContent.generateName(right.content,
                right.name), description: right.description})

        this.content = right.content;
        this.topic = right.topic;
        this.categories = right.categories ?? [];
        this.tags = right.tags ?? [];
    }

    public static generateName = (content: string, name?: string): string => {
        if (name) {
            return name;
        } else {
            return (content.length > WEB_CONTENT_NAME_DEFAULT_LENGTH ?
                content.substring(0, WEB_CONTENT_NAME_DEFAULT_LENGTH) : content)
        }
    }
}
