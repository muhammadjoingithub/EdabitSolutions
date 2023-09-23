function mySub(x, y) {
    while (y != 0) {
      borrow = (~x) & y;
      x = x ^ y;
      y = borrow << 1;
    }
    return x;
  }
console.log(mySub(5, 9));
console.log(mySub(10, 30));
console.log(mySub(0, 0));
