Q1
let student = {
    name: "Alice",
    age: 22,
    course: "Computer Science"
};
let jsonString = JSON.stringify(student);
console.log(jsonString);

Q2
function multiplyNumbers(a, b) {
    return Math.multiply.apply(null, [a, b]);
}
const mathOperations = {
    multiply: function(a, b) {
        return a * b;
    }
};
function multiplyNumbers(a, b) {
    return mathOperations.multiply.apply(null, [a, b]);
}

console.log(multiplyNumbers(5, 3)); // Output: 15
console.log(multiplyNumbers(10, 4)); // Output: 40

Q3
function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
    name: "Alice",
    age: 25
};
personInfo.call(person);

Q4

function setTimeoutGreeting() {
    console.log(`Hello, ${this.name}`);
}
const person = {
    name: "Alice"
};
const boundGreeting = setTimeoutGreeting.bind(person);
setTimeout(boundGreeting, 1000);

Q5
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
}
const person1 = new Person("Alice", 25);
const boundDisplayInfo = person1.displayInfo.bind(person1);
boundDisplayInfo();

Q6
function checkElement(arr, element) {
    return arr.includes(element);
}
console.log(checkElement([10, 20, 30, 40], 20)); // Output: true
console.log(checkElement([10, 20, 30, 40], 50)); // Output: false

Q7
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj)); 
}
let original = { name: "Alice", hobbies: ["reading", "traveling"] };
let clone = deepClone(original);
clone.hobbies.push("coding");
console.log("Original:", original);
console.log("Clone:", clone);

Q8
function sortNames(namesArray) {
    return namesArray.sort((a, b) => a.localeCompare(b));
}
let names = ["Charlie", "Alice", "Bob"];
let sortedNames = sortNames(names);

console.log(sortedNames);
