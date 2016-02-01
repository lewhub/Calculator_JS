var nums = document.querySelectorAll(".num")
var operators = document.querySelectorAll(".operator")
var labl = document.querySelector("#label")
var equal = document.querySelector("#equal")
var decimal = document.querySelector("#decimal")
var clear = document.querySelector("#clear")
decimal.addEventListener("click", decClicked)
clear.addEventListener("click", clearClicked)
var result = 0;
equal.addEventListener("click", evaluateOp)
var decimalArray = []
var numsArray = []
var operatorArray = []
for (var i = 0; i < 10; i += 1) {
  nums[i].addEventListener("click", numClicked)
}
for (var j = 0; j < 4; j += 1) {
  operators[j].addEventListener("click", opClicked)
}

function decClicked(){
  if (decimalArray.length === 0) {
    labl.innerHTML += "."
    decimalArray.push(".")
  }
}
function clearClicked(){
  labl.innerHTML = "0"
  numsArray = []
  operatorArray = []
  result = 0
  decimalArray = []
  console.log("numsArray: " + numsArray.length)
  console.log("operatorArray:" + operatorArray.length)
  console.log("result: " + result)
}

function evaluateOp(){
  switch (operatorArray[0]) {
    case "+":
      numsArray.push(labl.innerHTML)
      console.log(numsArray)
      result = add(numsArray[0], numsArray[1])
      break;
    case "-":
      numsArray.push(labl.innerHTML)
      result = subtract(numsArray[0], numsArray[1])
      break;
    case "*":
      numsArray.push(labl.innerHTML)
      result = multiply(numsArray[0], numsArray[1])
      break;
    default:
      numsArray.push(labl.innerHTML)
      result = divide(numsArray[0], numsArray[1])
    }
      console.log(result)
      labl.innerHTML = result.toString();
      numsArray = []
      operatorArray = []
      numsArray.push(result)
      console.log(numsArray)
}

function opClicked(){
  if ((result != 0) && (operatorArray.length === 0)) {
    console.log(numsArray)
    operatorArray.push(this.innerHTML)
    console.log(operatorArray)
  } else {
    operatorArray.push(this.innerHTML)
    numsArray.push(labl.innerHTML)
    labl.innerHTML = ""
    console.log(numsArray)
    console.log(operatorArray)
  }
}

function numClicked() {

  if (result != 0) {
    labl.innerHTML = ""
    result = 0;
  }
  if (labl.innerHTML === "0") {
    labl.innerHTML = ""
    labl.innerHTML = this.innerHTML
  } else {
    labl.innerHTML += this.innerHTML
  }
}
function add(a, b) {
  return (Number(a) + Number(b));
}
function subtract(a, b) {
  return (Number(a) - Number(b));
}
function multiply(a, b) {
  return (Number(a) * Number(b));
}
function divide(a, b) {
  return (Number(a) / Number(b));
}
