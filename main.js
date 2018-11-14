
const input = document.querySelector('input');

input.addEventListener('keypress', addName);

function addName(event) {
    if (event.which === 13) {
        const p = document.createElement('p');
        if (input.value.length === 0) {
            p.classList.add('color');
            p.innerText = `The text field is empty. Please enter name.`;
        }
        else {
            p.classList.add('hello');
            p.innerText = `Hello ${input.value}, nice to meet you!`; 
        } 
        const article = document.querySelector('article');
        const form = document.querySelector('form');
        article.prepend(p);
        event.preventDefault();
        form.reset();
        var remove = document.querySelector('article');
        remove.removeChild(remove.childNodes[5]);
   }
}