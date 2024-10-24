//=================================
// Interview Question: Type of triangle
//=================================
// Write a function called checkTriangleType that 
// takes three parameters representing the Lengths of the sides of a triangle.
// The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scatene".
console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"
//todo The function should adhere to the following rules:
// If all three sides are of equal length, return "equilateral".
// If only two sides are of equal length, return "isosceles".
// If all three sides have different lengths, return "scalene".

function checkTriangleType(a,b,c){
    if(a===b && b===c) return "equilateral";
    else if(a!==b && a!==c && b!==c ) return "scalene";
    else return "isosceles";
}