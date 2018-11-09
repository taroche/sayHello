
const input = document.querySelector('input');

input.addEventListener('keypress', addName);

function addName(event) {
    if (event.which === 13) {
        if (input.value.length === 0) {
            const p = document.createElement('p');
            p.innerText = `The text field is empty. Please enter name.`;
             const form = document.querySelector('form');
             form.append(p);
             event.preventDefault();
        }
        else {
            const p = document.createElement('p');
            p.innerText = `Hello ${input.value}, nice to meet you!`;
            const form = document.querySelector('form');
            form.append(p);
            event.preventDefault();
        }   
   }
}
