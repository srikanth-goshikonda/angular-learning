interface Person {
  readonly id: number;
  name: string;
  email?: string;
}

interface Learner extends Person {
  courses: string[];
}

interface Printable {
  format(): string;
}

class CourseCertificate implements Printable {
  constructor(
    private readonly learner: Learner,
    private readonly courseName: string,
  ) {}

  format(): string {
    return `${this.learner.name} completed ${this.courseName}`;
  }
}

const learner: Learner = {
  id: 1,
  name: "Jordan",
  email: "jordan@example.com",
  courses: ["TypeScript"],
};

const certificate: Printable = new CourseCertificate(learner, "TypeScript Basics");
console.log(certificate.format());
