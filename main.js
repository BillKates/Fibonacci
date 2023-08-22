/**
 * nの階乗を求める
 * @param {number} n - 階乗を求めたい数
 * @param {number} result - 計算結果を保管する変数。デフォルト値は1
 */
function fact(n, result = 1) {
    if (n <= 1)
      return result;
    return fact(n - 1, n * result);
  }
  
  function fib(n) {
    var n0 = 0;
    var n1 = 1;
    if (n === 0)
      return n0;
    if (n === 1)
      return n1;
    for (var cnt = 0; cnt < n - 1; cnt++) { // cnt <= n - 2 を cnt < n - 1 に修正
      [n0, n1] = [n1, n0 + n1];
    }
    return n1;
  }
  
  function* fibmaker() {
    var n0 = 0;
    var n1 = 1;
    yield n0;
    yield n1;
    while (true) {
      [n0, n1] = [n1, n0 + n1];
      yield n1;
    }
  }
  
  module.exports = {
    fact: fact,
    fib: fib,
    fibmaker: fibmaker
  };