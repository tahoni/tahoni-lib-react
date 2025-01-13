import { SUBJECT_DEFAULT_LENGTH } from "../constants/ContentConstants.ts";

export class ObjectWithNameAndDescription {
  name: string;
  subject?: string;
  description?: string;

  constructor(right: { name: string; subject?: string; description?: string }) {
    this.name = right.name;
    this.description = right.description;
    this.subject = ObjectWithNameAndDescription.generateSubject(
      right.name,
      right.description,
      right.subject,
    );
  }

  public static generateSubject(
    name: string,
    description?: string,
    subject?: string,
  ): string {
    let result: string = "";
    if (subject) {
      result = subject;
    } else if (description) {
      result = description?.substring(
        0,
        Math.min(description.length - 1, SUBJECT_DEFAULT_LENGTH),
      );
    } else {
      result = name.substring(
        0,
        Math.min(this.name.length - 1, SUBJECT_DEFAULT_LENGTH),
      );
    }
    return result;
  }
}
