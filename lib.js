const lib = require("./main"); // ファイルパスを修正

console.log(`factorial number of 4: ${lib.fact(4)}`);
console.log(`10th fibonacci number: ${lib.fib(10)}`);

// var fof4 = lib.fact("four"); // この行はコメントアウト

var fibgen = lib.fibmaker();
for (var i = 0; i < 10; i++) {
  console.log(fibgen.next().value);
}