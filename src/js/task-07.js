const onInput = document.querySelector('#font-size-control');

const onMoveInput = () => {
    const moveValue = onInput.value;
    const textSize = document.querySelector('#text');
   textSize.style.fontSize = `${moveValue}px`;

   
}

onInput.addEventListener('input', onMoveInput)
