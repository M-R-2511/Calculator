let input = document.querySelector(".input");
let result = document.getElementById("result");
let temp = "";
function element(e) {
  if (e.textContent === "÷") {
    input.value += e.textContent;
    temp += "/";
  } else if (e.textContent === "x") {
    input.value += e.textContent;
    temp += "*";
  } else if (e.textContent === "pow") {
    input.value += "^";
    temp += "**";
  } else {
    input.value += e.textContent;
    temp += e.textContent;
  }
}

function solve() {
  if (input.value.trim() != "") {
    try {
      result.value = eval(temp);
    } catch {
      result.value = "Error!";
    }
    input.value = "";
    temp = "";
  }
}

function clr() {
  input.value = "";
  result.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}

function backResult() {
  input.value = result.value;
}
