function checkCashRegister(price, cash, cid) {
  const pair = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let diff=cash-price;
  let sumAll = cid.reduce( (prev, cur) => prev = Math.round((prev+cur[1])*100)/100,0);
  let tmpCid = [...cid].reverse();
  let tmpChange = [];
  let remain = tmpCid.reduce( (prev, cur) =>{
    let unit = cur[0];
    let amount = cur[1];
    let unitVal = pair[unit];
    if (prev>unitVal) {
      let nChange = Math.floor(prev/unitVal);
      let nStore = Math.floor(amount/unitVal);
      let nMin = Math.min(nChange,nStore);
      prev = Math.round((prev-nMin*unitVal)*100)/100      
      tmpChange.push([unit, nMin*unitVal])
    }
    return prev
    },diff)
  let status = 'OPEN';
  let change = [];
  if (diff == sumAll){
    status = 'CLOSED';
    change = cid;
  } else if (remain > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else {
    status = 'OPEN';
    change = tmpChange;
  }
  let result = {status,change}
  return result;
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));




function telephoneCheck(str) {
  let patt= /^(1\s?)?(\d{3}\-\d{3}\-\d{4}|\(\d{3}\)\s?\d{3}\-\d{4}|\d{3}\s?\d{3}\s?\d{4})$/;
  return patt.test(str);
}
console.log(telephoneCheck("555-555-5555"));

function rot13(str) {
  const cnvChar = function( c ) {
    let x = c.charCodeAt(0);
    let y = ((x-65+13)%26)+65;
    let z = String.fromCharCode(y);
    return (x>=65 && x<=91)?z:c;
  } 
  return str.split('').map(cnvChar).join('');
}

console.log(rot13("SERR PBQR PNZC"));
console.log('A'.charCodeAt(0));
console.log('Z'.charCodeAt(0));

function convertToRoman(num) {
  const cnvTho = (val)=>  {
    let txt = '';
    while (val>0) {
      txt+='M';
      val-=1;
    }
    return txt
  }
  const cnvHun = (val)=>  {
    let txt = '';
    while (val>0) {
      if (val>=9) {
          txt+='CM';
          val-=9;
      } else if (val>=5) {
        txt+='D';
        val-=5;
      }else if (val>=4) {
        txt+='CD';
        val-=4;
      } else {
        txt+='C';
        val-=1;
      }
    }
    return txt
  }
  const cnvTen = (val)=>  {
    let txt = '';
    while (val>0) {
      if (val>=9) {
          txt+='XC';
          val-=9;
      } else if (val>=5) {
        txt+='L';
        val-=5;
      }else if (val>=4) {
        txt+='XL';
        val-=4;
      } else {
        txt+='X';
        val-=1;
      }
    }
    return txt
  }
  const cnvUni = (val)=>  {
    let txt = '';
    while (val>0) {
      if (val>=9) {
          txt+='IX';
          val-=9;
      } else if (val>=5) {
        txt+='V';
        val-=5;
      }else if (val>=4) {
        txt+='IV';
        val-=4;
      } else {
        txt+='I';
        val-=1;
      }
    }
    return txt
  }

  let numTho = Math.floor(num/1000);
  let numHun = Math.floor(num%1000/100);
  let numTen = Math.floor(num%100/10);
  let numUni = Math.floor(num%10);
  console.log(numTho);
  console.log(numHun);
  console.log(numTen);
  console.log(numUni);
 return cnvTho(numTho)+cnvHun(numHun)+cnvTen(numTen)+cnvUni(numUni);
}
console.log(convertToRoman(3999));

function palindrome(str) {
  let bf = str.replace(/[^A-Za-z0-9]/ig,'').toLowerCase();
  let af = bf.split('').reverse().join('').toLowerCase();
  console.log(bf);
  console.log(af);
  return af===bf;
}
console.log(palindrome("A man, a plan, a canal. Panama"));

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const orbitalPeriod = (avgAlt) => {    
    return Math.round(2*Math.PI*Math.sqrt((earthRadius+avgAlt)**3/GM))
  }
  
  return arr.reduce( (prev,cur) => prev.concat(
    {
      name: cur['name'],
      orbitalPeriod: orbitalPeriod(cur['avgAlt'])
    }
    ),[]);
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let first = firstAndLast.split(' ')[0];
  let last = firstAndLast.split(' ')[1];
  let full = firstAndLast;
  
  this.getFirstName= function() {
    return first;
  };
  this.getLastName= function() {
    return last;
  };
  this.getFullName= function() {
    return full;
  };
  this.setFirstName= function(txt) {
    first=txt;
    full = [first,last].join(' ');
  };
  this.setLastName= function(txt) {
    last=txt;
    full = [first,last].join(' ');
  };
  this.setFullName= function(txt) {
    full=txt;
    first = txt.split(' ')[0];
    last = txt.split(' ')[1];
  };
};

const bob = new Person('Bob Ross');
console.log(bob.setFirstName("Haskell"));

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


function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5]);

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
function sumPrimes(num) {
  
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

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


function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

function uniteUnique() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

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