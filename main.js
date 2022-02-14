let input = document.querySelector(".input");
let result = document.getElementById("result");
function element(e) {
  input.value += e.innerHTML;
}

function solve() {
  if (input.value.trim() != "") {
    try {
      result.value = eval(input.value);
    } catch {
      result.value = "Error!";
    }
  }
  input.value = "";
}

function clr() {
  input.value = "";
  result.value = "";
}

function del() {
  let x = input.value[length - 1];
  if (x === " ") {
    input.value = input.value.slice(0, -2);
    result.value = result.value.slice(0, -2);
  } else {
    input.value = input.value.slice(0, -1);
    result.value = result.value.slice(0, -1);
  }
}

function backResult() {
  input.value = result.value;
}