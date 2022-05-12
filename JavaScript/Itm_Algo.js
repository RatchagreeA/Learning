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