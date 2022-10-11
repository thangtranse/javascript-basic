const arr = [5, 2, 3, 4, 1, 3, 2, 5, 6, 8, 9];

arr.find((x) => {
  if (x > 5) {
    return true;
  }
  return false;
});

const MapRes = arr.map((x) => {
  if (x > 5) return "NNN";
});
console.log(MapRes);

const filtRes = arr.filter((x) => {
  if (x > 5) return "NNN";
});
console.log(filtRes);

let newArr = [];
arr.forEach((element) => {
  if (element > 5) newArr.push(element);
});

let arrObj = [{ a: 1 }, { a: 2 }, { a: 3 }];
