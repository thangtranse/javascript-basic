# N

tính n^m

2^2 = 2*2
2^3 = 2*2*2

1. Function nhận giá trị n và m
2. Dùng vòng lặp for để đếm số n
3. Tính giá trị n theo vòng lặp for
4. Trả về giá trị

```js
function N(n, m) {
  let result = n;
  for (let i = 1; i <= m; i++) {
    result = result * m;
  }
  return n**m;
}
N(2, 4)
```
