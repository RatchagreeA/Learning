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