function dropElements(arr, func) {

  // let idx = arr.map(func).indexOf(true);
  let idx = arr.findIndex(func);
  return idx==-1?[]:arr.slice(idx);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));

function smallestCommons(arr) {

  let n = [];
  let limit = [...arr].sort((a,b)=>a-b);
  for (let i = limit[0]; i <= limit[1]; i++) {
    n.push(i)
  }
  let result = limit[1];
  while (!n.every(val => result%val==0)) {
    result++;    
  }
  return result;
}

console.log(smallestCommons([1, 5]));


// function smallestCommons(arr) {
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b);
//   const range = Array(max - min + 1)
//     .fill(0)
//     .map((_, i) => i + min);
//   // GCD of two numbers
//   // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
//   const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
//   // LCM of two numbers
//   // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
//   const lcm = (a, b) => a * b / gcd(a, b);
//   // LCM of multiple numbers
//   // https://en.wikipedia.org/wiki/Least_common_multiple#Other
//   return range.reduce((multiple, curr) => lcm(multiple, curr));
// }

// smallestCommons([1, 5]);

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2;i<=num;i++){
    if (isPrimes(i)){
      sum+=i;
    }
  }
  return sum;
}

console.log(sumPrimes(10));
function isPrimes(n) {
  if (n==0||n==1) return false
  for (let i=2;i<n;i++) {
    if (n%i == 0 ) {
      return false
    }
  }
  return true
}
// function sumPrimes(num) {
  
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0))
//       primes.push(i);
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);
// }

function convertHTML(str) {
  let pair = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  return str.split('').map( c => pair.hasOwnProperty(c)?pair[c]:c).join('');
}

function uniteUnique(...arr) {
  let result = [];
  
  return  result
          .concat(...arr)
          .reduce((prev, cur) => prev.includes(cur) 
          ? prev : prev.concat(cur), [])

}

console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) );


// function uniteUnique(...arr) {
//   return [...new Set(arr.flat())];
// }

// function uniteUnique() {
//   return [...arguments]
//     .flat()
//     .filter((item, ind, arr) => arr.indexOf(item) === ind);
// }

function fearNotLetter(str) {

  let st = str[0].charCodeAt(0);
  let ed = str[str.length-1].charCodeAt(0);
  let sum = (ed-st+1)*(ed+st)/2;
  let strVal = str.split('').map(c => c.charCodeAt(0)).reduce( (cur,val)=> cur+=val,0);
  let diff = sum - strVal;
  return diff== 0? undefined : String.fromCharCode(diff);

}

console.log(fearNotLetter("abce"));

function myReplace(str, before, after) {
  let tmp = before[0].toUpperCase()==before[0]
  ?after[0].toUpperCase()+after.slice(1)
  :after[0].toLowerCase()+after.slice(1)
  console.log(tmp)
  return str.replace(before,tmp);
}

console.log(myReplace("Let us go to the store", "store", "mall"));

function spinalCase(str) {

    return str
          .split(/[^A-Za-z]/g)
          .map(word => word[0].toUpperCase()+word.slice(1))
          .join('')
          .match(/[A-Z][a-z]*/g)
          .join('-')
          .toLowerCase();
  }
  
  
  console.log(spinalCase("Teletubbies say Eh-oh"));

  
function whatIsInAName(collection, source) {
  
    // Only change code below this line
  let keyList = Object.keys(source);
  let arr = collection.filter(obj => keyList.every(key => obj[key]==source[key]));
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });