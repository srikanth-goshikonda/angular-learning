enum EnrollmentStatus {
  Pending = "pending",
  Active = "active",
  Complete = "complete",
}

const courseLevels = ["beginner", "intermediate", "advanced"] as const;
type CourseLevel = (typeof courseLevels)[number];

const enrollment: { learner: string; status: EnrollmentStatus } = {
  learner: "Jamie",
  status: EnrollmentStatus.Active,
};

function getCourseLevel(level: CourseLevel): string {
  return `Selected level: ${level}`;
}

const settings = {
  theme: "dark",
  pageSize: 20,
} as const;

console.log(enrollment, getCourseLevel("intermediate"), settings.theme);
