//day 2: Javascript fundamentals(ES6)

//1.variable and scope
var x= 10;//function scoped, avoid using
let y=20; //blocked scope, prefferable to reassign value
const z = 30; //blocked scope, constant
console.log("variables:", x, y,z);

//2. Functions
function add(a,b){
    return a+b;
}

const addArrow = (a,b)=>a+b;
console.log("2.Functions", add(2,3),addArrow(5,7));

//3.objects and arrays
const person = {name: "Manish", age:25};
console.log("3. Object:", person.name,person.age)

const numbers = [1,2,3,4,5];
console.log("3b.Array",numbers[0],numbers.length);


//destructuring
const {name,age} = person;
const [first,second, ...rest] = numbers;
console.log("3c. Destructuring", name,age, first, second, rest);

//loops
for(let i =0;i<5;i++){
    console.log("For loop",i);
}
for(let num of numbers){
    console.log("For..of",num);
}
let count =0;
while(count <2){
    console.log("While loop",count);
    count++;
}


//modern ES6 features 
//template literals
console.log(`Template: Hello, my name is ${name} and my age is ${age}`)

//spread operator
const newNumbers = [...numbers,6,7]
console.log("Spread operatrs",newNumbers)


// Rest operator
function sumAll(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
console.log("5c. Rest:", sumAll(1, 2, 3, 4));

// Map, Filter, Reduce
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log("5d. Map:", doubled);
console.log("5e. Filter:", evens);
console.log("5f. Reduce:", total);
