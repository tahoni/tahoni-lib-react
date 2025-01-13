import { ReactNode } from "react";
import { ObjectWithNameAndDescription } from "../ObjectWithNameAndDescription.ts";
import { Topic } from "../topic/Topic.ts";
import { Category } from "../topic/Category.ts";
import { Tag } from "../topic/Tag.ts";
import {
  NAME_DEFAULT_LENGTH,
  SUMMARY_DEFAULT_LENGTH,
} from "../../constants/ContentConstants.ts";

export class Content extends ObjectWithNameAndDescription {
  content: string;
  summary?: string;
  children?: ReactNode[];

  topic: Topic;

  categories: Category[] = [];
  tags: Tag[] = [];

  readonly dateCreated: Date;
  dateUpdated: Date;

  constructor(right: {
    name?: string;
    subject?: string;
    description?: string;
    content: string;
    summary?: string;
    children?: ReactNode[];
    topic: Topic;
    categories?: Category[];
    tags?: Tag[];
    dateCreated?: Date;
    dateUpdated?: Date;
  }) {
    super({
      name: Content.generateName(right.content, right.name),
      subject: right.subject,
      description: right.description,
    });

    this.content = right.content;
    this.summary = Content.generateSummary(right.content, right.summary);
    this.children = right.children;

    this.topic = right.topic;
    this.categories = right.categories ?? [];
    this.tags = right.tags ?? [];

    this.dateCreated = right.dateCreated ?? new Date();
    this.dateUpdated = right.dateUpdated ?? new Date();
  }

  public static generateName = (content: string, name?: string): string => {
    let result: string = "";
    if (!name) {
      result = content.substring(
        0,
        Math.min(content.length - 1, NAME_DEFAULT_LENGTH),
      );
    } else {
      result = name;
    }
    return result;
  };

  public static generateSummary = (
    content: string,
    summary?: string,
  ): string => {
    if (summary) {
      return summary;
    } else {
      return content.length > SUMMARY_DEFAULT_LENGTH
        ? content.substring(0, SUMMARY_DEFAULT_LENGTH)
        : content;
    }
  };
}
