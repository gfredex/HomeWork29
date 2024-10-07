// Задача 1 Легкий уровень
const task11 = document.querySelector('.wrap-task11');
const btn11 = document.getElementById('btn11');
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
