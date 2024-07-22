import {BlogTopic} from "./BlogTopic.ts";

export class BlogPost {
    private _name?: string;
    private _summary?: string;
    private _content: string;
    private _topics: BlogTopic[];
    private readonly _dateCreated: Date;
    private _dateUpdated: Date;

    constructor(name?: string, summary?: string, content?: string,
                topics?: BlogTopic[], dateCreated?: Date, dateUpdated?: Date) {
        this._name = name;
        this._summary = summary;
        this._content = content ?? '';
        this._dateCreated = dateCreated ?? new Date();
        this._dateUpdated = dateUpdated ?? new Date();
        this._topics = topics ?? [];
    }

    public static createPost = (name?: string, summary?: string, content?: string,
                         topics?: BlogTopic[]): BlogPost => {
        return new BlogPost(name, summary, content, topics);
    }

    public updatePost = (name?: string, summary?: string, content?: string,
                  topics?: BlogTopic[]) => {
        this._name = name ?? this._name;
        this._summary = summary ?? this._summary;
        this._content = content ?? this._content;
        this._dateUpdated = new Date();
        this._topics = topics ?? this._topics;
    }


    get name(): string | undefined {
        return this._name;
    }

    get summary(): string | undefined {
        return this._summary;
    }

    get content(): string {
        return this._content;
    }

    get topics(): BlogTopic[] {
        return this._topics;
    }

    get dateCreated(): Date {
        return this._dateCreated;
    }

    get dateUpdated(): Date {
        return this._dateUpdated;
    }
}
