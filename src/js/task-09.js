function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

const onClick = () => {
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  text.innerHTML = changeColor;

}

btn.addEventListener('click', onClick)