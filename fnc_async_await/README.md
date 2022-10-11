# Function

### JavaScript Function Syntax

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

name(1, 2, 3);
```

### Function Return

```js
let x = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}
```

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

async_func();

async_func()
  .then((res) => {
    console.log(res);
    console.log("jeff!");
  })
  .catch((err) => {
    console.log(err);
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
      reject("is");
    }, 530);
  });
};

const async_func2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("and I love 2 code");
    }, 500);
  });
};

const main = async () => {
  console.log("hi");
  console.log("my name");
  try {
    const result = await async_func();
    console.log(result);
    console.log("jeff!");
    const result2 = await async_func2();
    console.log(result2);
  } catch (error) {
    console.log("error", error);
  }
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

## What is result with example of below?

```javascript
const funcA = async () => {
  return "Hello";
};
const funcB = () => {
  return "Hello";
};

funcA();
funcB();
```

Result

```sh
// funcA()
Promise<{}>
// funcB()
"Hello"
```

# Callbacks

```javascript
const functionWithACallback = (callback) => {
  console.log("You called this function!");
  setTimeout(() => {
    callback("I am done");
  }, 1000);
};
const myFunction = () => {
  const myCallback = console.log;
  functionWithACallback(myCallback);
};
myFunction();
```

Result

```text
You called this function
I am done
```

# Ref:

1. https://betterprogramming.pub/learn-how-to-use-async-await-like-a-pro-481a5b829bf0
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments?retiredLocale=vi
