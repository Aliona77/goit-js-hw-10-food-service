import templateCard from './templates/template.hbs';
import food from './menu.json';
import './styles.css';


//=========================Розмітка=============================== 

const menu = document.querySelector('.js-menu');
     console.log(menu);

function createMenu(food) {
    return food.map(templateCard).join('');
}

const markup = createMenu(food);
menu.insertAdjacentHTML('beforeend', markup);


//========================== ТЕМА===================================
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const body = document.querySelector('body');
const input = document.getElementById('theme-switch-toggle');

    function changeTheme() {
        if (input.checked) {
            body.classList.remove(Theme.LIGHT);
            body.classList.add(Theme.DARK);
            localStorage.setItem('Theme', Theme.DARK);
            return;
        }
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.LIGHT);
    }

    function themeMenu() {
     if (localStorage.getItem('Theme') === 'dark-theme') {
        body.classList.add(Theme.DARK);
        input.checked = true;
    }
}
input.addEventListener('click', changeTheme);
themeMenu();