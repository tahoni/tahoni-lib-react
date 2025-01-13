import { ReactNode } from "react";
import { Content } from "./Content.ts";
import { Topic } from "../topic/Topic.ts";
import { Category } from "../topic/Category.ts";
import { Tag } from "../topic/Tag.ts";

export class Event extends Content {
  startTime: Date;
  endTime?: Date;

  constructor(right: {
    name?: string;
    subject?: string;
    description?: string;
    content: string;
    summary?: string;
    children?: ReactNode[];
    startTime: Date;
    endTime?: Date;
    topic: Topic;
    categories?: Category[];
    tags?: Tag[];
    dateCreated?: Date;
    dateUpdated?: Date;
  }) {
    super({
      name: right.name,
      subject: right.subject,
      description: right.description,
      content: right.content,
      summary: right.summary,
      children: right.children,
      topic: right.topic,
      categories: right.categories,
      tags: right.tags,
      dateCreated: right.dateCreated,
      dateUpdated: right.dateUpdated,
    });
    this.startTime = right.startTime;
    this.endTime = right.endTime;
  }
}
