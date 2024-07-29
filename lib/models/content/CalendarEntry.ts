import {WebContent} from "./WebContent.ts";
import {Topic} from "../topic/Topic.ts";
import {Category} from "../topic/Category.ts";
import {Tag} from "../topic/Tag.ts";

export class CalendarEntry extends WebContent {
    startTime: Date;
    endTime?: Date;

    constructor(right: {content: string, topic: Topic, name?: string,
        description?: string, startTime: Date, endTime?: Date,
        categories?: Category[], tags?: Tag[], dateCreated?: Date,
        dateUpdated?: Date}) {

        super(right);
        this.startTime = right.startTime;
        this.endTime = right.endTime;
    }

    public static createCalendarEntry = (right: {content: string, topic: Topic,
        name?: string, description?: string, startTime: Date, endTime?: Date,
        categories?: Category[], tags?: Tag[]}): CalendarEntry => {

        return new CalendarEntry(right);
    }

    public updateCalendarEntry = (right: {content: string, topic: Topic,
        name?: string, description?: string, startTime: Date, endTime?: Date,
        categories?: Category[], tags?: Tag[]}): void => {

        this.initContent(right);
        this.startTime = right.startTime;
        this.endTime = right.endTime;
    }
}
