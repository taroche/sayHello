
const input = document.querySelector('input');

input.addEventListener('keypress', addName);

function addName(event) {
    if (event.which === 13) {
        const p = document.createElement('p');
        if (input.value.length === 0) {
            p.classList.add('red');
            p.innerText = `The text field is empty. Please enter name.`;
        }
        else {
            p.innerText = `Hello ${input.value}, nice to meet you!`; 
        } 
        const form = document.querySelector('form');
        form.append(p);
        event.preventDefault();
        form.reset(); 
   }
}