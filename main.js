let input = document.querySelector("input");

function element(e) {
  input.value += e.innerHTML;
}

function solve() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error!";
  }
}

function clr() {
  input.value = "";
}

function del() {
  let x = input.value[length - 1];
  if (x === " ") {
    input.value = input.value.slice(0, -2);
  } else {
    input.value = input.value.slice(0, -1);
  }
}
