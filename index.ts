type Person = {
  name: string;
};

const person: Person = {
  name: "John",
};

console.log(person.name);

let age: number = 30;
console.log(age);
console.log(typeof age);

class Character {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
let p1 = new Character("Alice", 25);

console.log(p1.name);
p1.greet();
