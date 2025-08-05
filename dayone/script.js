//Array in javascript
console.log("Arrays");

let arr = [1, 2, 3, 4];
let ogud = arr.length;
console.log(ogud);
//Foreach
arr.forEach((item) => {
  console.log(item * 2);
});

//map
let newArr1 = arr.map((items) => {
  return items + 13;
});
console.log(newArr1);

//filter
let newArr = arr.filter((item) => {
  return item > 2;
});

console.log(newArr);

//find
arr.find((item) => {
  if (item === 12) {
    console.log("founded");
  } else {
    console.log("this number is not found");
  }
});

//indexof
let arr1 = ["raees", "ali", "hamza", "nehal"];
let idx = arr1.indexOf("nehal");
console.log(idx);

//objects in javascript
console.log("Objects");

let obj = {
  name: "Raees khan",
  age: 23,
};

Object.freeze(obj);
obj.age = 40;

console.log(obj.name);
console.log("your age:", obj.age);
console.log(obj);
console.log(JSON.stringify(obj));

//functions in javascript

function abcd() {
  return "hello world";
}

console.log(abcd());
//ap function main jo chahy wo return kar sakty hain jaisy number, string, object etc.
//or jab call karogy wahy return apko melaigy...

//sync and Async code in js
//sync: run code line by line
//Asynce: run code in parallel==> jo bhi code async nature ka hu, usey side stack main baij do and agly code ko chalao jo bhi sync nature ka hu. jab bhi sara sync code chal jaye, tab check karo side stack main async code complete hua hain ya nhi. and agar complete hua hain tu usy main stack main lee aoo and execute karo.

async function getdata() {
  const blob = await fetch("https://api.api-ninjas.com/v1/randomuser");
  const data = await blob.json();
  console.log(data);
}

getdata();