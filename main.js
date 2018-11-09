(function () {
const input = document.querySelector('input');

input.addEventListener('keypress', addName);

function addName(event) {
    if (event.which === 13) {
        const p = document.createElement('p');
       p.innerText = `Hello ${input.value}, nice to meet you!`;
        const form = document.querySelector('form');
        form.append(p);
        event.preventDefault();   
   }
}

})();