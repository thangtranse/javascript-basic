# Fibonacci

Cho một số N trả về giá trị chỉ số của dãy Fibonacci, trong đó trình tự là:

> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

Sau khi xem nhanh, bạn có thể dễ dàng nhận thấy rằng mẫu của chuỗi là mỗi giá trị là tổng của 2 giá trị trước đó, điều đó có nghĩa là đối với N = 5 → 2 + 3 hoặc trong toán học là:

> F(n) = F(n-1) + F(n-2)

`./loop.js`

```js
const fibonacci = (num) => {
  let temp = 0,
    a = 1,
    b = 0;
  for (let i = 0; i < num; i++) {
    temp = a;
    a = a + b;
    b = temp;
    console.log(`${temp} `);
  }
  return temp;
};

fibonacci(5);
```

`recursive.js`

```js
const fibonacci = (num) => {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};
fibonacci(5);
```

# REF