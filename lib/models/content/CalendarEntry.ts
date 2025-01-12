import {WebContent} from "./WebContent.ts";
import {Topic} from "../topic/Topic.ts";
import {Category} from "../topic/Category.ts";
import {Tag} from "../topic/Tag.ts";

export class CalendarEntry extends WebContent {
    startTime: Date;
    endTime?: Date;

    constructor(right: {name?: string, subject?: string, description?: string, content: string,
        startTime: Date, endTime?: Date, topic: Topic, categories?: Category[], tags?: Tag[],
        dateCreated?: Date, dateUpdated?: Date}) {

        super(right);
        this.startTime = right.startTime;
        this.endTime = right.endTime;
    }

    public static createCalendarEntry = (right: {name?: string, subject?: string,
        description?: string, content: string, startTime: Date, endTime?: Date, topic: Topic,
        categories?: Category[], tags?: Tag[]}): CalendarEntry => {

        return new CalendarEntry(right);
    }

    public updateCalendarEntry = (right: {name?: string, subject?: string,
        description?: string, content: string, startTime: Date, endTime?: Date, topic: Topic,
        categories?: Category[], tags?: Tag[]}): void => {

        this.initContent(right);
        this.startTime = right.startTime;
        this.endTime = right.endTime;
    }
}
