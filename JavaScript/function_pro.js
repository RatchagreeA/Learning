function add(x) {
  // Only change code below this line
return y=>z=>x+y+z;
  // Only change code above this line
}
console.log(add(10)(20)(30));


function impartial(x, y, z) {
  return x + 2*y + 3*z;
}

const partialFn = impartial.bind(this, 1, 2);

console.log(partialFn(10)); // 13


function getRating(watchList) {
  // Only change code below this line
  let averageRating;

  let out = watchList
  .filter(movie=>movie.Director=="Christopher Nolan")
  .reduce( (data, movie) => {
    data.sum+=Number(movie.imdbRating);
    data.cnt++;
    return data;
  }, {sum: 0, cnt: 0})
  averageRating=out.sum/out.cnt;
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
for (let i=0;i<this.length;i++){
  newArray.push(callback(this[i]));
}
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});


// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list,bookName) {

  let tmp = [...list];
  tmp.push(bookName);
  return tmp;

  // return [...list,bookName];
  
  // Change code above this line
}

// Change code below this line
function remove(list,bookName) {

  let tmp = [...list];
  let idx = tmp.indexOf(bookName);
  if (idx != -1) {
    tmp.splice(idx,1);
   }
  return tmp;

  // return list.filter(book => book != bookName);

    // Change code above this line
}


// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);