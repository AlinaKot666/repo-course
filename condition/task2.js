//Task 2: Grades based on average score

let averageGrade = 85;
let gradeGroup = Math.floor(averageGrade / 10); 

switch (gradeGroup) {
  case 10:
  case 9:
    console.log("Excellent");
    break;
  case 8:
    console.log("Very good");
    break;
  case 7:
    console.log("Good");
    break;
  case 6:
    console.log("Not so bad");
    break;
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Very bad");
    break;
  default:
    console.log("Incorrect assessment");
}