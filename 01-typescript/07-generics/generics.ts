function identity<T>(value: T): T {
  return value;
}

function firstItem<T>(items: readonly T[]): T | undefined {
  return items[0];
}

interface HasId {
  id: number;
}

function getById<T extends HasId>(items: readonly T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
}

class Repository<T extends HasId> {
  constructor(private readonly items: T[]) {}

  find(id: number): T | undefined {
    return getById(this.items, id);
  }
}

interface Learner extends HasId {
  name: string;
}

const learner = identity<Learner>({ id: 1, name: "Taylor" });
const learners = new Repository<Learner>([learner]);
const response: ApiResponse<Learner[]> = {
  data: [learner],
  success: true,
};

console.log(firstItem(response.data), learners.find(1));
