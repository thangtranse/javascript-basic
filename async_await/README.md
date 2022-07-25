# Promises

```javascript
const async_func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("is");
    }, 500);
  });
};

console.log("hi");
console.log("my name");

async_func()
  .then((res) => {
    console.log(res);
    console.log("jeff!");
  })
  .catch((error) => {
    console.error(error);
  });
```

Result:

```sh
hi
my name
is
jeff!
```

Let’s say instead of our promise being fulfilled, that it ends up getting rejected instead. What would happen to our output?

```javascript
const async_func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(false);
    }, 500);
  });
};

console.log("hi");
console.log("my name");

async_func()
  .then((res) => {
    console.log(res);
    console.log("jeff!");
  })
  .catch((error) => {
    console.error(error);
  });
```

Result:

```sh
hi
my name
error: false
```

# Async/await

```javascript
const async_func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("is");
    }, 530);
  });
};

const main = async () => {
  console.log("hi");
  console.log("my name");
  const result = await async_func();
  console.log(result);
  console.log("jeff!");
};

main();
```

Result

```sh
hi
my name
is
jeff!
```

Now, say that we wanted to add another piece of asynchronous code to the example above. What would happen?

```javascript
const async_func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("is");
    }, 530);
  });
};

const async_func2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("and I love 2 code");
    }, 500);
  });
};

const main = async () => {
  console.log("hi");
  console.log("my name");
  const result = await async_func();
  console.log(result);
  console.log("jeff!");
  const result2 = await async_func2();
  console.log(result2);
};

main();
```
Result:
```sh
hi
my name
is
jeff!
and I love 2 code
```