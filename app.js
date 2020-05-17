'use strict';
const Mapmemo = new Map();
Mapmemo.set(0, 0);
Mapmemo.set(1, 1);

function fib(n) {
    if (Mapmemo.has(n)) {
    return Mapmemo.get (n);
} 
const value = fib(n - 1) + fib(n - 2);
Mapmemo.set (n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}