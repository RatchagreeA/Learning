let x = 10;
let y = 20;
let z = f(5,5);
let arr1 = ["g","z","a"];
let arr2 = [520,111,5];
let arr3 = [6,7,8];
let l = arr1.length;
let nArr = arr1.sort();
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
console.log(arr2.sort(function h(a,b) {
    return a-b;
}));

function h(a,b) {
    return a-b;
}

function g(txt="text") {
    console.log(txt);
}

function f(in1=1, in2=2, in3=3) {
    return in1+in2+in3;
}

function a() {
    console.log("hello");
}

function b() {
    alert("warning");
}

function c() {
    document.write("text");
}

function d(x,y="") {
    console.log(x+y);
}

function e() {
    return "125";
}