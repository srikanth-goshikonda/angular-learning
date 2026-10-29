// TypeScript infers string from the initial value.
let message = "Welcome to TypeScript";
message = message.toUpperCase();

// It infers number[] from the array elements.
const temperatures = [18, 21, 24];
const averageTemperature =
  temperatures.reduce((total, temperature) => total + temperature, 0) / temperatures.length;

// The return type is inferred as number.
function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}

// The callback parameter is contextually inferred as string.
const courseNames = ["Types", "Interfaces", "Generics"];
const uppercaseCourseNames = courseNames.map((course) => course.toUpperCase());

const total = calculateTotal(29.99, 2);

console.log({ message, averageTemperature, uppercaseCourseNames, total });
