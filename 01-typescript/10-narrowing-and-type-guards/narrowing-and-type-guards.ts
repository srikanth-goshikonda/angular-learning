interface Learner {
  kind: "learner";
  name: string;
  courses: string[];
}

interface Instructor {
  kind: "instructor";
  name: string;
  subject: string;
}

type Person = Learner | Instructor;

function isLearner(person: Person): person is Learner {
  return person.kind === "learner";
}

function describePerson(person: Person): string {
  if ("courses" in person) {
    return `${person.name} is learning ${person.courses.join(", ")}`;
  }

  return `${person.name} teaches ${person.subject}`;
}

function parseCount(value: string | number): number {
  if (typeof value === "number") {
    return value;
  }

  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    throw new Error(`Not a valid count: ${value}`);
  }
  return parsed;
}

const people: Person[] = [
  { kind: "learner", name: "Riley", courses: ["TypeScript"] },
  { kind: "instructor", name: "Morgan", subject: "Programming" },
];

console.log(people.map(describePerson));
console.log(people.filter(isLearner));
console.log(parseCount("12"));
