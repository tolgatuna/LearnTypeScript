var message = "Hello World";
// This is a comment
console.log(message);
// Class Example:
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log('Hello From Greeting Class');
    };
    return Greeting;
}());
var greeting = new Greeting();
greeting.greet();
//Example: Variables in TypeScript
var userName = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name: " + userName);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
var str = '1';
var str2 = str; //str is now of type number
console.log(str2);
console.log(str);
var num = 2; // data type inferred as  number
console.log("value of num " + num);
// num = "12"; //error TS2322: Type 'string' is not assignable to type 'number'.
console.log(num);
var testNum = -1;
var result1 = testNum > 0 ? "positive" : -1;
var result2 = testNum < 0 ? "negative" : -1;
console.log(typeof result1);
console.log(typeof result2);
