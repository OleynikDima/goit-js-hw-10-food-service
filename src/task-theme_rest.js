// подключил отдельно модуль правильности кода =))) (практиковал) 
import storegRest from "./module-storegRest";

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


 const inputSwitch =  document.querySelector('.js-switch-input');
 const body = document.querySelector('body')
 
 // Даем default класс body
 body.classList.add(Theme.LIGHT)

 // подключаем слушателя на input.checked
 inputSwitch.addEventListener('click', chackeInput)

// если в localStorage ключь совпадает с тёмной темой -> тогда checked = true  и выполняем ф-ю подмена класса
 if(Theme.DARK === storegRest.load('theme')){
    inputSwitch.checked = true
    chackeInput();
}


// Логика:
//в боди есть класс и если мы меняем input.checked, меняем класс темы удаляя предыдущий 
//и записываем его в localStoreg.  
function chackeInput(checked){
  if (inputSwitch.checked === true){
    body.classList.remove(Theme.LIGHT)
    body.classList.add(Theme.DARK)
    storegRest.save('theme',Theme.DARK)
  }
  if (inputSwitch.checked === false){
  body.classList.remove(Theme.DARK)
  body.classList.add(Theme.LIGHT)
  storegRest.save('theme',Theme.LIGHT)
  }
}