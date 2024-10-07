// Задача 1 Легкий уровень
const task11 = document.querySelector('.wrap-task11');

task11.addEventListener('click', (e) => {
    if (e.target.id === 'btn11') {
        document.querySelector('.p11').textContent = 'Была нажата "Кнопка 1"';
    }
    if (e.target.id === 'btn12') {
        document.querySelector('.p11').textContent = 'Была нажата "Кнопка 2"';
    }
    if (e.target.id === 'btn13') {
        document.querySelector('.p11').textContent = 'Была нажата "Кнопка 3"';
    }
    // console.log(e.target.id === 'btn11');

});

//Задача 2 Легкий уровень
const form12 = document.getElementById('form12');
form12.addEventListener('click', (e) => {
    let data = '';
    if (e.target.id === 'btn21') {
        if (form12.children.input21.value !== '') {
            document.querySelector('#list12').append(document.createElement("li"));
            document.querySelector('#list12').lastChild.textContent = form12.children.input21.value.trim();
            form12.children.input21.value = '';
        }
    }
});