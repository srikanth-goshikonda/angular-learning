interface Course {
  id: number;
  title: string;
}

async function fetchCourse(id: number): Promise<Course> {
  return { id, title: "Async TypeScript" };
}

async function fetchCourseTitle(id: number): Promise<string> {
  const course = await fetchCourse(id);
  return course.title;
}

async function main(): Promise<void> {
  const [course, title] = await Promise.all([fetchCourse(1), fetchCourseTitle(1)]);
  console.log(course, title);
}

void main().catch((error: unknown) => {
  console.error("Could not load course:", error);
});
