let a = document.getElementById("demo1");
let b = document.querySelector('.demo2');
let c = document.querySelector('#list');
let item = document.createElement('li');
item.innerText = "item 1";
let x = 10;
let y = 20;
let cnt = 1;

const menu = document.getElementById("menu");
const disp = document.getElementById("disp");
menu.addEventListener('change',chg);
function chg(){
    disp.innerText = menu.value;
}
const btn = document.getElementById("btn");
btn.addEventListener('click',shw);
function shw(){
    alert("welcom");
}

function hilite(obj) {
    obj.style.background="red";
}
function unhilite(obj) {
    obj.style.background="white";
}
function change() {
    const menu = document.getElementById("menu");
    // const disp = document.getElementById("disp");
    console.log(menu.value.toUpperCase());
    // disp.innerText = menu.value;
}
function hover(obj) {
    obj.style.background="red";
}
function unhover(obj) {
    obj.style.background="white";
}


let d = document.querySelector('#demo4');
let status;
function addClass() {
    d.classList.add('demo1')
}
function removeClass() {
    d.classList.remove('demo1')
}
function toggleClass() {
    status = d.classList.contains('demo1');
    d.classList.toggle('demo2')
    console.log(status);


}

function dispTxt1() {
    a.innerText="<strong>new</strong> text";
    b.innerText="<strong>new</strong> text";
    a.style.color = "red";
    b.setAttribute('class','demo4');
}
function dispTxt2() {
    a.innerHTML="<strong>new</strong> text";
    b.innerHTML=`${x} ${y}`;
    a.style.color = "black";
    b.setAttribute('class','demo5');
   
}
function addItem() {
    let item = document.createElement('li');
    item.innerText = "item" + cnt;
    item.setAttribute('class',"item" + cnt);
    cnt++;
    c.appendChild(item);
}
function removeItem() {
    let item = document.querySelector(".item" + (cnt-1));
    cnt--;
    c.removeChild(item);
}
function replaceItem() {
    let item = document.querySelector(".item" + (cnt-1));
    let newItem = document.createElement('li');
    newItem.innerText = "new " + cnt;
    newItem.setAttribute('class',"item" + (cnt-1));
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