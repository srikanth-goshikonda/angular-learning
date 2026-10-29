interface Learner {
  id: number;
  name: string;
  active: boolean;
}

type LearnerProperty = keyof Learner;
type LearnerName = Learner["name"];
type LearnerMap = { [Key in keyof Learner]: Learner[Key] };

const learner: Learner = { id: 1, name: "Casey", active: true };
const property: LearnerProperty = "active";
const learnerName: LearnerName = learner.name;
const learnerCopy: LearnerMap = { ...learner };

type ElementType<T> = T extends readonly (infer Element)[] ? Element : never;
type CourseName = ElementType<readonly ["TypeScript", "Angular"]>;

type ApiResult<T> =
  | { state: "success"; data: T }
  | { state: "error"; message: string };

const result: ApiResult<Learner> = { state: "success", data: learner };

console.log(property, learnerName, learnerCopy, result);
