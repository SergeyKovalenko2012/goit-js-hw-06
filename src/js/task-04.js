const decrementBtn = document.querySelector("[data-action = 'decrement']");
const value = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action = 'increment']");

let step = 0;

const plus = () => {
  step += 1;

  value.textContent = step;
};

const minus = () => {
  step -= 1;

  value.textContent = step;
};

incrementBtn.addEventListener("click", plus);

decrementBtn.addEventListener("click", minus);
