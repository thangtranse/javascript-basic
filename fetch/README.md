```js
fetch("https://zing.vn?value=1000&type=network%40123")
  .then((data) => {
    return data.json();
  })
  .catch((error) => error);
```

```js
fetch("https://zing.vn", {
    method: "POST", // GET, POST, PUT, DELETE, UPDATE, OPTION
    headers: {
        'Content-Type': 'application/json' // application/text, file ....
    }
    body: {
        value:1000,
        type:"network"
    }
}).then((data) => {return data.json()}).catch(error => error)
```

```js
const object = { status: true, statusCode: 200 };
```

1xx -> ...
3xx -> Thành công

2xx -> Thành công

4xx -> Lỗi server
422 -> Request quá nhiều server ko cho request nữa
404 -> ko lên được server
403

5xx -> Lỗi code, server ko chấp nhận dữ liệu

```js
// function, arrow, function void, function return, callback
// async-await, promise, callback
```