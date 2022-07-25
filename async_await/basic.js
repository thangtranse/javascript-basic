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
