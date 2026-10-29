const scores: number[] = [88, 94, 79];
const courseNames: Array<string> = ["Types", "Functions"];
const firstScore = scores[0];

const coordinates: [number, number] = [40.7128, -74.006];
const readOnlyScores: readonly number[] = scores;

interface Course {
  id: number;
  title: string;
  published?: boolean;
}

const course: Course = {
  id: 1,
  title: "TypeScript Essentials",
};

const updatedCourse: Course = { ...course, published: true };
const { title, published } = updatedCourse;

const courseById: Record<number, Course> = {
  [updatedCourse.id]: updatedCourse,
};

console.log({
  firstScore,
  courseNames,
  coordinates,
  readOnlyScores,
  title,
  published,
  courseById,
});
