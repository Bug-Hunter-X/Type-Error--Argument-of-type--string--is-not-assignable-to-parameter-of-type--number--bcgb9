function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Error: Both arguments must be numbers");
    return 0; //Or throw error
  }
}

let result1 = addSafe(1, 2); // Correct: Returns 3
let result2 = addSafe("1", 2); // Correct: Logs error, returns 0
let result3 = addSafe(1, "2"); // Correct: Logs error, returns 0
let result4 = addSafe("1", "2"); // Correct: Logs error, returns 0