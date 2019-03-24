/*
* @Author RAJERISON Julien
* @Description BIG-O notation && Approach of fibonacci Algorithm
*----------------------------------- 
*         TABLEAU FIBONACCI
*-----------------------------------
* n  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7  |
* xn 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 |
*----------------------------------- 
*xn = |(xn-1) + (xn-2)|
*/

// Is constant <Time complexity Constant | Space complexity = 0(1) Constant>
function isConstantExec(enumerate)
{
	return enumerate[0] == null;
}
console.log(isConstantExec(5))

// Recursion <Time complexity 0(2^N) | Space complexity = 0(n)>
function Fibonacci(enumerate)
{
	if(typeof(enumerate) === 'number')
		if(enumerate<=1) return 1;
		return Math.abs(Fibonacci(enumerate-2) + Fibonacci(enumerate - 1))
	return "enumerate is never !number";
}
console.log(Fibonacci(6));


// Loop fibonnaci <Time complexity 0(N) | space complexity Constant>
function fibonacciLoop(enumerate){

 var a = 1, b = 0, temp;

  while (enumerate >= 0){
    temp = a;
    a = a + b;
    b = temp;
    enumerate--;
  }

  return b;
}

console.log(fibonacciLoop(6))

// Memoization <Time complexity 0(2N) | space complexity 0(N)>
function fibonacciMemoization(enumerate, memory) {

  memory = memory || {};

  if (memory[enumerate]) return memory[enumerate];
  if (enumerate <= 1) return 1;

  return memory[enumerate] = fibonacciMemoization(enumerate - 1, memory) + fibonacciMemoization(enumerate - 2, memory);
}
console.log(fibonacciMemoization(5,2))

