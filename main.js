function allLetter(inputtxt) {
  let letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    var z = document.getElementById("textty").value;
    return true;
  } else {
    alert("Please input alphabetic characters only");
    return false;
  }
}

function nextLetter(inputtxt) {
  let letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    var y = document.getElementById("wall").value;
    return true;
  } else {
    alert("Please input alphabetic characters only");
    return false;
  }
}


function output() {
  var name1 = document.getElementById("textty").value;
  var name2 = document.getElementById("wall").value;
  const string = name1 + " matches " + name2;

  const usingSplit = string.toLowerCase().replace(/\s/g, "").split("");

  const counts = {};

  usingSplit.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  const display = Object.values(counts);
  let num = +display.join("");

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
    document.getElementById("match").innerHTML =  name1 + " matches " + name2 + " " + sum(num) + "%" + ", good match";
    e.preventDefault()
  } else {
    document.getElementById("match").innerHTML = name1 + " matches " + name2 + " " + sum(num) + "%"
    e.preventDefault()
  }
}
