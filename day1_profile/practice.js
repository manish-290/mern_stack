// reverse a string
function reverseString(str){
  return str.split('').reverse().join('');
}
console.log("Reverse string:", reverseString("hello"));

//check if number is prime 
function isPrime(num){
  if(num <2) return false;
  for(let i =2; i<= Math.sqrt(num);i++){
    if(num % i === 0) return false;
  }
  return true;
}

console.log("2. Is Prime (7):", isPrime(7));
console.log("2. Is Prime (10):", isPrime(10));

//sum numbers in an array
function sumArray(arr){
  return arr.reduce((sum,val)=>sum+val,0)
}
console.log("Sum Array:", sumArray([1,2,3,4]))

//filter even numbers from array
function filterEven(arr){
  return arr.filter(num=>num%2 ===0)
}
console.log("Evern numbers from array: ",filterEven([1,2,3,4,5,6]))


//capitalize 1st letter of each word
function capitalWords(sentence){
  return sentence.split(' ')
  .map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalWords("I am learning javascript"));

// 6. FizzBuzz up to n (n = 30)
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
console.log("6. FizzBuzz up to 30:");
fizzBuzz(30);

