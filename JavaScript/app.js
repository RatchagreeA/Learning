let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        },
    };
})();

let odule = {
    isCuteMixin: function (obj) {
        obj.isCute = function () {
            return true;
        };
    },
    singMixin: function (obj) {
        obj.sing = function () {
            console.log("Singing to an awesome tune");
        };
    },
};

let duck = {};
console.log(typeof funModule);
console.log(typeof odule);

(function () {
    console.log("Chirp, chirp!");
})();

function chunkArrayInGroups(arr, size) {
    // return arr.length<=size? [arr]: [ arr.slice(0,size), ...chunkArrayInGroups(arr.slice(size), size)];
    return arr.length <= size
        ? [arr]
        : [arr.slice(0, size)].concat(
              chunkArrayInGroups(arr.slice(size), size)
          );
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

function mutation(arr) {
    let pattern = [...arr[1]].map((x) => new RegExp(x, "i"));
    console.log(pattern.every((x) => x.test(arr[0])));
    return pattern.every((x) => x.test(arr[0]));
}

mutation(["hello", "hey"]);

function getIndexToIns(arr, num) {
    return arr.filter((x) => x < num).length;
}

console.log(getIndexToIns([40, 60], 50));

function titleCase(str) {
    let o = str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    console.log(o);
    return o;
}

titleCase("I'm a little tea pot");

function findElement(arr, func) {
    let num = 0;
    console.log(arr[arr.map(func).indexOf(true)]);
    return arr.map(func).indexOf(true) == -1
        ? undefined
        : arr[arr.map(func).indexOf(true)];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);

const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const range = rangeOfNumbers(startNum, endNum - 1);
        range.push(endNum);
        return range;
    }
}
console.log(rangeOfNumbers(6, 9));

let a = document.getElementById("demo1");
let b = document.querySelector(".demo2");
let c = document.querySelector("#list");
let item = document.createElement("li");
item.innerText = "item 1";
let x = 10;
let y = 20;
let cnt = 1;

const menu = document.getElementById("menu");
const disp = document.getElementById("disp");
menu.addEventListener("change", chg);
function chg() {
    disp.innerText = menu.value;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", shw);
function shw() {
    alert("welcom");
}

function hilite(obj) {
    obj.style.background = "red";
}
function unhilite(obj) {
    obj.style.background = "white";
}
function change() {
    const menu = document.getElementById("menu");
    // const disp = document.getElementById("disp");
    console.log(menu.value.toUpperCase());
    // disp.innerText = menu.value;
}
function hover(obj) {
    obj.style.background = "red";
}
function unhover(obj) {
    obj.style.background = "white";
}

let d = document.querySelector("#demo4");
let status;
function addClass() {
    d.classList.add("demo1");
}
function removeClass() {
    d.classList.remove("demo1");
}
function toggleClass() {
    status = d.classList.contains("demo1");
    d.classList.toggle("demo2");
    console.log(status);
}

function dispTxt1() {
    a.innerText = "<strong>new</strong> text";
    b.innerText = "<strong>new</strong> text";
    a.style.color = "red";
    b.setAttribute("class", "demo4");
}
function dispTxt2() {
    a.innerHTML = "<strong>new</strong> text";
    b.innerHTML = `${x} ${y}`;
    a.style.color = "black";
    b.setAttribute("class", "demo5");
}
function addItem() {
    let item = document.createElement("li");
    item.innerText = "item" + cnt;
    item.setAttribute("class", "item" + cnt);
    cnt++;
    c.appendChild(item);
}
function removeItem() {
    let item = document.querySelector(".item" + (cnt - 1));
    cnt--;
    c.removeChild(item);
}
function replaceItem() {
    let item = document.querySelector(".item" + (cnt - 1));
    let newItem = document.createElement("li");
    newItem.innerText = "new " + cnt;
    newItem.setAttribute("class", "item" + (cnt - 1));
    c.replaceChild(newItem, item);
}

// let x = 10;
// let y = 20;
// let z = f(5,5);
// let arr1 = ["g","z","a"];
// let arr2 = [520,111,5];
// let arr3 = [6,7,8];
// let l = arr1.length;
// let nArr = arr1.sort();
// let user = {
//     name: "ppp",
//     age: 22,
//     email: "aaa@hot.com",
//     getData:function() {
//         return this.name+" "+this .email;
//     }
// }
// console.log(user.getData());
// console.log(l);
// console.log(arr1.sort());
// console.log(arr2.reverse());
// console.log(nArr.push(9));
// console.log(nArr);

// for (let i = 0;i<nArr.length;i++) {
//     console.log(nArr[i]);
// }
// nArr.forEach(g);
// let str1 = arr1.toString();
// let str2 = arr1.join(" T ");

// console.log(arr1);
// let str3 = arr1.pop();
// console.log(arr1);

// console.log(arr1.concat(arr2,arr3,arr2,arr3,arr2,arr3));
// console.log(arr2.sort(function h(a,b) {
//     return a-b;
// }));
// function h() {
//     let result = confirm("check");
//     if (result) {
//         console.log("ok");
//     } else {
//         console.log("ng");
//     }
// }

// function g(txt="text") {
//     console.log(txt);
// }

// function f(in1=1, in2=2, in3=3) {
//     return in1+in2+in3;
// }

// function a() {
//     console.log("hello");
// }

// function b() {
//     alert("warning");
// }

// function c() {
//     document.write("text");
// }

// function d(x,y="") {
//     console.log(x+y);
// }

// function e() {
//     return "125";
// }
