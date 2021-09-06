import dishes from "../menu.json"
import dish_template from '../templates/dish_template.hbs'



dishes.forEach(dish => {

const dish_list = document.querySelector('.js-menu')

dish_list.insertAdjacentHTML('beforeend', dish_template(dish) )

})






const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const refs = {
    bodyRef: document.querySelector('body'),
    switchRef: document.querySelector('#theme-switch-toggle'),
  };
  
  const setThemeFn = (removeTheme, addTheme) => {
    refs.bodyRef.classList.remove(removeTheme);
    refs.bodyRef.classList.add(addTheme);
  };
  
  const сheckboxChangeFn = () => {
    if (refs.switchRef.checked) {
      setThemeFn(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('theme', Theme.LIGHT);
    } else {
      setThemeFn(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('theme', Theme.DARK);
    }
  };
  
  const localStorageSettingsFn = () => {
    const localStorageSavedТheme = localStorage.getItem('theme');
    if (localStorageSavedТheme === Theme.LIGHT) {
      refs.switchRef.checked = 'true';
      сheckboxChangeFn();
    }
  };
  localStorageSettingsFn();
  
  refs.switchRef.addEventListener('change', сheckboxChangeFn);