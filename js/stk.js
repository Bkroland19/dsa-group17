
function compute() {
  let a = 0;
  let b = 1;
  let c;
  let input = document.querySelector(".inputfib");
  let output = document.querySelector(".outputfib");
  let limit = document.querySelector(".limit");
  limit.innerHTML = `The first ${input.value} fibonacci numbers are;`;
  for (let counter = 1; counter <= input.value; counter++) {
    output.innerHTML += `<option> ${b} </option>`;

    c = a + b;
    a = b;
    b = c;
  }
}
