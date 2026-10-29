interface Course {
  id: number;
  title: string;
}

const course: Course = { id: 1, title: "Compilation Basics" };

// Compile this folder with: npx tsc --project .\01-typescript\16-tsconfig-and-compilation\tsconfig.json
// Run the emitted JavaScript with: node .\01-typescript\16-tsconfig-and-compilation\compilation.js
console.log(course);
