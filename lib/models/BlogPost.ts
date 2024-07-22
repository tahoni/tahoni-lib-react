import {Topic} from "./Topic.ts";

export class BlogPost {
    private _name?: string;
    private _summary?: string;
    private _content: string;
    private _topics: Topic[];
    private readonly _dateCreated: Date;
    private _dateUpdated: Date;

    constructor(name?: string, summary?: string, content?: string, topics?: Topic[],
                dateCreated?: Date, dateUpdated?: Date) {
        this._name = name;
        this._summary = summary;
        this._content = content ?? '';
        this._dateCreated = dateCreated ?? new Date();
        this._dateUpdated = dateUpdated ?? new Date();
        this._topics = topics ?? [];
    }

    public static createPost = (name?: string, summary?: string, content?: string,
                         topics?: Topic[]): BlogPost => {
        return new BlogPost(name, summary, content, topics);
    }

    public updatePost = (name?: string, summary?: string, content?: string,
                  topics?: Topic[]) => {
        this._name = name ?? this._name;
        this._summary = summary ?? this._summary;
        this._content = content ?? this._content;
        this._dateUpdated = new Date();
        this._topics = topics ?? this._topics;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string | undefined) {
        this._name = value;
    }

    get summary(): string | undefined {
        return this._summary;
    }

    set summary(value: string | undefined) {
        this._summary = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get topics(): Topic[] {
        return this._topics;
    }

    set topics(value: Topic[]) {
        this._topics = value;
    }

    get dateCreated(): Date {
        return this._dateCreated;
    }

    get dateUpdated(): Date {
        return this._dateUpdated;
    }
}
