interface Course {
  id: number;
  title: string;
  description: string;
  published: boolean;
}

type CourseDraft = Partial<Course>;
type CompleteCourse = Required<Course>;
type CourseSummary = Pick<Course, "id" | "title">;
type CourseWithoutDescription = Omit<Course, "description">;
type ReadonlyCourse = Readonly<Course>;

const draft: CourseDraft = { title: "Utility Types" };
const summary: CourseSummary = { id: 1, title: "TypeScript" };
const withoutDescription: CourseWithoutDescription = {
  id: 2,
  title: "Generics",
  published: true,
};
const courseById: Record<number, CourseSummary> = {
  [summary.id]: summary,
};

function publishCourse(course: Course): CompleteCourse {
  return { ...course, published: true };
}

const completeCourse = publishCourse({
  id: 3,
  title: "Type Safety",
  description: "A practical introduction",
  published: false,
});
const readonlyCourse: ReadonlyCourse = completeCourse;

console.log(draft, withoutDescription, courseById, readonlyCourse);
