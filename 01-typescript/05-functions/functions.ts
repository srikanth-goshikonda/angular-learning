function greet(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}

function sum(first: number, second: number, ...remaining: number[]): number {
  return [first, second, ...remaining].reduce((total, value) => total + value, 0);
}

type Formatter = (value: number) => string;

const formatPrice: Formatter = (value) => `$${value.toFixed(2)}`;

function getLength(value: string): number;
function getLength(value: readonly unknown[]): number;
function getLength(value: string | readonly unknown[]): number {
  return value.length;
}

function runTwice(action: () => void): void {
  action();
  action();
}

console.log(greet("Sam"), greet("Sam", "Welcome"));
console.log(sum(1, 2, 3, 4), formatPrice(19.5));
console.log(getLength("TypeScript"), getLength(["a", "b", "c"]));
runTwice(() => console.log("Callback executed"));
