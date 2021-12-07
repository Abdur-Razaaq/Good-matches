// The String
let name1 = window. prompt("Enter First name: ");
let name2 = window. prompt("Enter Second name: ");
//let name1 = "Jack";
//let name2 = "Jacky";

const string = name1 + " matches " + name2;


//removing white spaces, splitting characters and dealing with case
const usingSplit = string.toLowerCase().replace(/\s/g, "").split("");
//(/\s/g, "") = (/\s/): selecting the white space, (g(global)): refers to all white spaces. therefore this selects all whitespaces character by character

// converting split string into an object and then counting the repeating words
const counts = {};
usingSplit.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});

// taking the values of the above object and converting it into an array
const display = Object.values(counts);
let num = +display.join("");

// adding first and last integers continuously until there are only two digits left
function sum(num) {
  let numString = num.toString();
  let newString = "";
  while (numString.length > 1) {
    newString += (
      parseInt(numString[0]) + parseInt(numString[numString.length - 1])
    ).toString();
    numString = numString.substring(1, numString.length - 1);
  }
  newString += numString;

  if (newString.length > 2) {
    return sum(newString);
  } else {
    return newString;
  }
}

if (sum(num) >= 80) {
  console.log(
    name1 + " matches " + name2 + " " + sum(num) + "%" + ", good match"
  );
} else {
  console.log(name1 + " matches " + name2 + " " + sum(num) + "%");
}
