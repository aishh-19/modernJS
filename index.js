//problem 1
function greet(name , age){
console.log(`HI my name is ${name}  and I am ${age} years`)
}
greet("john" , 35);

//problem 2

function generatePara(a , b , c , d , e){
    console.log(`${a}`)
    console.log(`${b}`)
    console.log(`${c}`)
    console.log(`${d}`)
    console.log(`${e}`)
}
let a ="hey this is parar"
let b ="hey this is parar"
let c ="hey this is parar"
let d ="hey this is parar"
let e="hey this is parar"
generatePara(a , b , c , d , e);


//ARROW FUNCTION//
//problem 1
const add =(a, b)=> {
    return a + b;
  }
  const x = 1 ;
  const y = 2;
  console.log(add(x , y));

//problem 2
const double = (n)=>{
    return (n*2)
}
console.log(double(3));

// problem 3

// rest and spread
function sum(...number){
console.log(...number)
const sumOf = number.reduce((acc , curr) =>
 acc + curr , 0
)
console.log(sumOf)
}
sum(12, 23, 32,34)

//spread
function spread(arr1 , arr2){
console.log(...arr1 , ...arr2 , "done man");
}
let arr1 = [12,23,24,234,243];
let arr2 = [23,34,45,56 ];
spread(arr1 , arr2)
  

//object spread//

function updatedperson(person , updated){
    console.log({...person , ...update})
}

let person = {
names : "ashish",
age : "20"
}
let update = {
    city : "New delhi",
    age : "34"
}
updatedperson(person , update);

//destructuring//
let swap1= 1;
let swap2 = 2;

// Swap using array destructuring
[swap1, swap2] = [swap2, swap1];

console.log(swap1); // Output: 2
console.log(swap2); // Output: 1

// question-2
function displayPerson(person){
let {name , age , std} = person
console.log(name);
console.log(age);

}
let personOf = { 
    name : "ashish" ,
    age : 23 ,
    std : "college first year"
}
displayPerson(personOf)


