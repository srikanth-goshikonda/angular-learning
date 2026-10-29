interface Course {
  id: number;
  title: string;
}

type Result<T, E = string> =
  | { success: true; data: T }
  | { success: false; error: E };

function parseCourseId(input: string): Result<number> {
  const id = Number(input);
  if (!Number.isInteger(id) || id <= 0) {
    return { success: false, error: "Course ID must be a positive integer." };
  }
  return { success: true, data: id };
}

function loadCourse(id: number): Course {
  if (id !== 1) {
    throw new Error(`Course ${id} was not found.`);
  }
  return { id, title: "Error Handling Basics" };
}

const parsedId = parseCourseId("1");
if (parsedId.success) {
  try {
    console.log(loadCourse(parsedId.data));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unexpected error occurred.");
    }
  }
} else {
  console.error(parsedId.error);
}
