

let name:String="varshitha";
let age:number=10
let no:null=null
let anything:any="hello"
let notknown:undefined=undefined
let notsure:unknown=6

// console.log(name);

//functions
function animal():void{
    console.log("dog");
}

function add(a:number,b:number):number{
    return a+b;
}
// console.log(add(5,3));

function greet(name:string,greet?:string): string{
   return greet?`${greet},${name}`:`Hello,${name}`;
}

// console.log(greet("varshitha"));

function sum(...numbers:number[]):number{
    return(numbers.reduce((acc,n)=>acc+n,0))
}

// console.log(sum(20,30,50))
// animal();
// console.log(notsure)

//objects
let user:{
    id:number,
    name:string,
    age?:number
    }={
    id:2,
    name:"varshitha",
    // age:20
}
// console.log(user.name)

let animals:{
    name:string,
    age:number,
    sound:string
}={
    name:"dog",
    age:3,
    sound:"bark"
}

// console.log(animals.sound);

//arrays
let nums:number[]=[10,20,30]
// console.log(nums[1]=40);

//readonly
let names:readonly string[]=["varshi","vaishu","dinku"]
// console.log(names[2]);

//tuple
let student:[string,number]=["varshitha",134]
// console.log(student[1]);

//interfaces
interface person{
    name:string,
    age:number
}

interface students extends person{
    id:number
}
interface teacher extends person{
    salary:number
}

interface employee extends students,teacher{
    employeeId:number
}

let Person:person={
    name:"varshitha",
    age:20
}
console.log(Person);

let s:students={
    name:"varshitha",
    age:20,
    id:134
}
console.log(s);

let t:teacher={
    name:"danny",
    age:20,
    salary:50000
}
console.log(t);

const e:employee={
    name:"max",
    age:20,
    id:2,
    salary:35000,
    employeeId:302
}
console.log(e);

//type alias

type Id=number | string

let userId:Id=123
let empId:Id="r234"

type status="success" | "pending" | "error"
function showstatus(status:string):string{
    return status
}

let st:status="pending"
// let sm:status="done"
console.log(showstatus("completed"))

// Union — value can be one of several types
let value: string | number;
value = "hello"; // ok
value = 10;      // ok

// Intersection — combines multiple types into one
type A = { a: number };
type B = { b: string };
type C = A & B;
const c: C = { a: 1, b: "x" }; // must satisfy BOTH A and B

// Literal Types — restricts to specific exact values
let status: "loading" | "success" | "error";
status = "loading"; // ok
// status = "done";    // ERROR — not allowed

// Type Narrowing
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));  
}}
print("name")
print(1345.4567)

//Generics
// function Identity(arg:any):any{
//     return arg.toUpperCase();
// }

console.log(Identity("varshitha"))

//using generics
function Identity<T>(arg:T):T{
    return arg
}

const output=Identity<string>("varshitha")
output.toUpperCase()
// output.toFixed(2) - now it shows error

const outputnum=Identity<number>(5.567)
console.log(outputnum.toFixed(2))

//generic Interfaces
interface Box<T>{
    value:T
}

let stringBox:Box<string>={value:"Hello"}
console.log(stringBox)

let numberBox:Box<number>={value:123}

interface Pair<A, B> {
    first: A;
    second: B;
  }
  
const item: Pair<string, number> = { first: "age", second: 25 };
console.log(item);

//assertions
let somevalue:any=567

let strlength:number=(somevalue as string).length;
console.log(strlength)

//enums
enum Direction{
    up,
    down,
    left,
    right
}
function move(direction:Direction){
    if(direction == Direction.up){
        console.log("moving up");
    }
    else{
        console.log("mving down");
    }
}

move(Direction.up);
console.log(Direction.down)

enum Status {
    Loading = "LOADING",
    Success = "SUCCESS",
    Error = "ERROR"
  }
  
  function handleStatus(status: Status) {
    switch (status) {
      case Status.Loading:
        console.log("Please wait...");
        break;
      case Status.Success:
        console.log("Data loaded!");
        break;
      case Status.Error:
        console.log("Something went wrong");
        break;
    }
  }
  
  handleStatus(Status.Loading);  // "Please wait..."
  handleStatus(Status.Success);  // "Data loaded!"