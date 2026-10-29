interface Learner {
  id: number;
  name: string;
}

type LearnerId = number | string;
type CourseLevel = "beginner" | "intermediate" | "advanced";
type Result<T> = { success: true; value: T } | { success: false; error: string };

function findLearner(id: LearnerId): string {
  return `Looking for learner ${id}`;
}

function describeLevel(level: CourseLevel): string {
  return `Course level: ${level}`;
}

const successfulResult: Result<Learner> = {
  success: true,
  value: { id: 1, name: "Alex" },
};

console.log(findLearner("learner-1"));
console.log(describeLevel("beginner"));
if (successfulResult.success) {
  console.log(successfulResult.value.name);
}
