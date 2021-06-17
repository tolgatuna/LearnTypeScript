const message: string = "Hello World";
// This is a comment
console.log(message);

// Class Example:
class Greeting {
    greet(): void {
        console.log('Hello From Greeting Class');
    }
}

const greeting = new Greeting();
greeting.greet();

//Example: Variables in TypeScript
const userName: string = "John";
const score1: number = 50;
const score2: number = 42.50
const sum = score1 + score2
console.log("name: " + userName)
console.log("first score: " + score1)
console.log("second score: " + score2)
console.log("sum of the scores: " + sum)


const str = '1'
const str2:number = <number> <any> str   //str is now of type number
console.log(str2)
console.log(str)

let num = 2;    // data type inferred as  number
console.log("value of num "+num);
// num = "12"; //error TS2322: Type 'string' is not assignable to type 'number'.
console.log(num);

let testNum:number = -1
let result1 = testNum > 0 ?"positive": -1
let result2 = testNum < 0 ?"negative": -1
console.log(typeof result1)
console.log(typeof result2)

