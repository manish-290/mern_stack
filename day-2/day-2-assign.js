// Extend day2.js by writing your own examples of:

// A function that multiplies numbers using reduce.

// A function that filters names starting with the letter A.

// An object with a method that prints a greeting.

function multiplyReduce(arr){
  return arr.reduce((mul,val)=>mul*val)
}

console.log(multiplyReduce([1,2,3,4]))


function filterName(names){
  return names.filter(name=>name.startsWith("A"))
}
const nameList = ["Manish","Aman", "Ajay"]
console.log(filterName(nameList))


const person = {
  name:"Manish",
   age :22,
   greet(){
    console.log(`Namaste ${person.name}`)
  }
}
person.greet()