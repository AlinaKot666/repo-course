//function getRectangleArea(width, height) {
  //const area = width * height;
 // return area; // the result


//const result1 = getRectangleArea(12, 24);
//console.log("Function Declaration:", result1); 

// const getRectangleArea2 = function(width, height) {
//   const area = width * height;
//   return area; // ←  the result 
// };

// const result2 = getRectangleArea2(5, 10);
// console.log("Function Expression:", result2); 

const getRectangleArea3 = (width, height) => {
  const area = width * height;
  return area; // ← the result
};

const result3 = getRectangleArea3(25, 50);
console.log("Arrow Function:", result3);