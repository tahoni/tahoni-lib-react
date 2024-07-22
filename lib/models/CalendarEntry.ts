import {Topic} from "./Topic.ts";

export class CalendarEntry {
    private _name?: string;
    private _summary?: string;
    private _content: string;
    private _topics: Topic[];
    private _dateTime: Date;
    private readonly _dateCreated: Date;
    private _dateUpdated: Date;

    constructor(name?: string, summary?: string, content?: string, topics?: Topic[],
                dateTime?: Date, dateCreated?: Date, dateUpdated?: Date) {
        this._name = name;
        this._summary = summary;
        this._content = content ?? '';
        this._topics = topics ?? [];
        this._dateTime = dateTime ?? new Date();
        this._dateCreated = dateCreated ?? new Date();
        this._dateUpdated = dateUpdated ?? new Date();
    }

    public static createCalendarEntry = (name?: string, summary?: string,
                                         content?: string, topics?: Topic[],
                                         dateTime?: Date): CalendarEntry => {
        return new CalendarEntry(name, summary, content, topics, dateTime);
    }

    public updateCalendarEntry = (name?: string, summary?: string, content?: string,
                                  topics?: Topic[], dateTime?: Date) => {
        this._name = name;
        this._summary = summary;
        this._content = content ?? '';
        this._topics = topics ?? [];
        this._dateTime = dateTime ?? new Date();
        this._dateUpdated = new Date();
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

    get dateTime(): Date {
        return this._dateTime;
    }

    set dateTime(value: Date) {
        this._dateTime = value;
    }

    get dateCreated(): Date {
        return this._dateCreated;
    }

    get dateUpdated(): Date {
        return this._dateUpdated;
    }
}

