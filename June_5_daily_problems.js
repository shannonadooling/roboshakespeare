/* purpose: produce and array from 1 to 100 with any number
          divisible by 3 replaced by "fizz", any number
          divisible by 5 replaced by "buzz", any number
          disible by both 3 and 5 replaced by "fizzbuzz"
   parameters: n: n is the range of the array
   produce: return the replace string or the number
   preconditions: none
   postconditions: none

*/
const newRange =(n) =>{
  const myArr = [...Array(n+1).keys()]
  const arr = myArr.slice(1);

  const listRange =(n) => {
/*
    const next = n % 3 ===0 ? (n % 5 ===0 ?
        "fizzbuzz":"fizz" )  : (n % 5 ===0 ? "buzz" : n) ;
      */
      const fizz = n % 3 === 0 ? "fizz" : "";
      const buzz = n % 5 === 0 ? "buzz" : "" ;
      const replace = fizz+buzz
      return replace ? replace : n ;
// return next;
  }
const newArr = arr.map(listRange);
   return newArr;
}

//console.log(range(100));

const range = (n) => {
  return [...Array(n).keys()];
  // make an array of size n then .keys() releases an iterator
  // to pack the array
}

console.log(newRange(100).join(", "))

/*
purpose
parameters
produce
preconditions
postconditions
*/
