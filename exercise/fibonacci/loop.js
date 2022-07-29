const fibonacci = (num) => {
    let temp = 0,
      a = 1,
      b = 0;
    for (let i = 0; i < num; i++) {
      temp = a;
      a = a + b;
      b = temp;
    }
  
    return temp;
  };
  
  fibonacci(10);