const input = document.getElementById("name-input");
const inputOutput = document.getElementById("name-output");

input.oninput = () => {
  if (input.value === "") {
    inputOutput.innerHTML = "Anonymous";
  } else {
    inputOutput.innerHTML = input.value;
  }
};
