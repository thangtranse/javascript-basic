const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  if (num < 0) return -1;
  let temp = num;
  for (let i = 1; i < num; i++) {
    temp = i * temp;
    console.log(temp);
  }
  return temp;
};
factorial(5);
