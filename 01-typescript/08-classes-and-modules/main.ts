import { Course, VideoCourse } from "./course";

const introduction = new Course(1, "TypeScript Basics");
const advanced = new VideoCourse(2, "Generic Types", 18);

introduction.rename("TypeScript: The Basics");

console.log(introduction.describe());
console.log(advanced.describe());
