import {WebContent} from "./WebContent.ts";
import {Topic} from "../topic/Topic.ts";
import {Category} from "../topic/Category.ts";
import {Tag} from "../topic/Tag.ts";
import {SUMMARY_DEFAULT_LENGTH} from "../../constants/ContentConstants.ts";

export class BlogPost extends WebContent {
    summary: string;

    constructor(right: {name?: string, subject: string, description?: string, content: string,
        summary?: string, topic: Topic, categories?: Category[], tags?: Tag[],
        dateCreated?: Date, dateUpdated?: Date}) {

        super(right);
        this.summary = BlogPost.generateSummary(right.content, right.summary);
    }

    public static createPost = (right: {name?: string, subject: string,
        description?: string, content: string, summary?: string, topic: Topic,
        categories?: Category[], tags?: Tag[]}): BlogPost => {

        return new BlogPost(right);
    }

    public updatePost = (right: {name?: string, subject: string,
        description?: string, content: string, summary?: string, topic: Topic,
        categories?: Category[], tags?: Tag[]}): void => {

        this.initContent(right);
        this.summary = BlogPost.generateSummary(right.content, right.summary);
    }

    public static generateSummary = (content: string, summary?: string): string => {
        if (summary) {
            return summary;
        } else {
            return (content.length > SUMMARY_DEFAULT_LENGTH ?
                content.substring(0, SUMMARY_DEFAULT_LENGTH) : content)
        }
    }
}
