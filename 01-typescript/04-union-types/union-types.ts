type Identifier = number | string;
type Status = "pending" | "in-progress" | "complete";

interface VideoLesson {
  kind: "video";
  title: string;
  durationMinutes: number;
}

interface ArticleLesson {
  kind: "article";
  title: string;
  wordCount: number;
}

type Lesson = VideoLesson | ArticleLesson;

function describeLesson(lesson: Lesson): string {
  switch (lesson.kind) {
    case "video":
      return `${lesson.title}: ${lesson.durationMinutes} minutes`;
    case "article":
      return `${lesson.title}: ${lesson.wordCount} words`;
    default:
      return assertNever(lesson);
  }
}

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function findLearner(id: Identifier): string {
  return `Looking up learner ${id}`;
}

const lesson: Lesson = {
  kind: "video",
  title: "Union types",
  durationMinutes: 12,
};

const status: Status = "in-progress";
console.log(describeLesson(lesson), findLearner(42), status);
