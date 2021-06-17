interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

let customer: IPerson = {
    firstName: "",
    lastName: "",
    sayHi: (): string => {
        return "Hi There"
    }

}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.sayHi())


interface namelist {
    [index: number]: string
}

let list2: namelist = ["John", 1, "Bran"] //Error. 1 is not type string
interface ages {
    [index: string]: number
}

let agelist: ages;
agelist["John"] = 15   // Ok
agelist[2] = "nine"   // Error


interface Person {
    age:number
}

// INHERITANCE

interface IAPerson {
    age:number
}

interface Musician extends IAPerson {
    instrument:string
}

let aMusician: Musician = {
    age: 0, instrument: ""

}

