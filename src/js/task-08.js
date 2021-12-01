const form = document.querySelector('.login-form');

const elements = form.elements;

const filterElement = (elements) => {
    const filteredElements = [];

    for(const element of elements) {
        if(element.hasAttribute('name')){
            filteredElements.push(element)
        }
    }
    return filteredElements;
}

const onSubmit = () => {
    const values = {};

    for(const element of filterElement(elements)){
        if(element.value) {
            values[element.getAttribute('name')] = element.value;
        } else {
            continue;
        }
    }

    if(Object.keys(values).length <= 1) {
        alert('all fields must be filled!');

    } else {
        console.log(values)
    }
    form.reset()
}

form.addEventListener('submit', onSubmit);
