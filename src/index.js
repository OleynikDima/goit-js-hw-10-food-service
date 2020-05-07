import './styles.css';
import menuItemLi from'./list-handle_menu.hbs';
import infoMenu from './menu.json';
import'./task-theme_rest'


const boxUl = document.querySelector('.js-menu');

// Собераем наш пазлб -> подключаем шаблон и мапим его
createMenuList(infoMenu)
function createMenuList (infoMenu){
    let markup = infoMenu.map(el => menuItemLi(el)).join('');
    boxUl.insertAdjacentHTML('beforeend', markup);
}




  