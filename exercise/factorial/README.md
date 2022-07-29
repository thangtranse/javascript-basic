# Factorial

Tính giai thừa của một số:

Trong toán học, giai thừa của một số nguyên không âm `n`, ký hiệu là `n!`, là tích của tất cả các số nguyên dương nhỏ hơn hoặc bằng `n`.

> Ví dụ, 5! = 5 x 4 x 3 x 2 x 1 = 120

`./loop.js`

```js
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
```

`recursive.js`

```js
const factorial = (num) => {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
};
factorial(5);
```

# REF

1. https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
