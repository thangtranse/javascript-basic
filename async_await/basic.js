console.log("----synchronous----");
console.log("hi");
console.log("my name");
console.log("is");
console.log("jeff!");

console.log("----synchronous?----");
console.log("hi");
console.log("my name");

setTimeout(() => {
  console.log("is");
}, 500);

console.log("jeff!");

// FUNCTION

// String, Number, Boolean, Object, Array, Function
// ArrayObject, ArrayBuffer,

// typeof <arg> -> xác định kiểu dữ liệu
// Array.isArray(arg)

const result = "Xin chào";
function fnc(arg) {
  console.log("1", result);
}
fnc();
console.log("2", result);

// -------------

// var
// let
// const

function fnc() {
  const result2 = "Xin chào";
  console.log("1", result2);
}
fnc();
console.log("2", result2);

// -------------
{
  {
    var result3 = "Xin chào";
    var result2 = "Xin chào";

    console.log("1.1", result3);
    console.log("1.2", result2);
  }
  fnc();
  console.log("2.1", result3);
  console.log("2.2", result2);
}
// -------------
console.clear();

const fnc2 = (arg) => {
  console.log(arg);
};

fnc2("Xin chào");

// -------------

const sum = (arg1, arg2) => {
  return arg1 + arg2;
};

const rsl = sum(1, 3);
console.log(rsl)

// -------------

function fncDemoCallBack(callback){
  return callback("Xin chào")
}
fncDemoCallBack(console.log)

// -------------

function fncDemo2CallBack(callback){
  return callback(2, 3)
}

fncDemo2CallBack((a, b) => a - b)


- Giải bài toán n^n (vd: 2^5) bằng javascript
- Xem lại bài toán Fibonacci