export class Course {
  static readonly platform = "Learning Portal";

  constructor(
    public readonly id: number,
    private courseTitle: string,
  ) {}

  get title(): string {
    return this.courseTitle;
  }

  rename(newTitle: string): void {
    this.courseTitle = newTitle;
  }

  describe(): string {
    return `${this.title} on ${Course.platform}`;
  }
}

export class VideoCourse extends Course {
  constructor(
    id: number,
    title: string,
    public durationMinutes: number,
  ) {
    super(id, title);
  }

  override describe(): string {
    return `${super.describe()} (${this.durationMinutes} minutes)`;
  }
}
