const studentName: string = "Maya";
const age: number = 20;
const isEnrolled: boolean = true;

const scores: number[] = [92, 85, 100];
const courseNames: Array<string> = ["TypeScript", "Angular"];

let optionalNote: string | null = null;
optionalNote = "Ready to learn";

let notAssigned: undefined;
notAssigned = undefined;

const courseLevel: "beginner" | "intermediate" | "advanced" = "beginner";

let flexibleValue: any = "This can be anything";
flexibleValue = 42;

let unknownValue: unknown = "Check this value before using it";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

function throwError(message: string): never {
  throw new Error(message);
}

console.log({ studentName, age, isEnrolled, scores, courseNames, optionalNote, notAssigned, courseLevel });
