'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');

    let className = document.body.className;

    if(className == 'dark-theme'){
        switcher.textContent = 'Light';
    } else {
        switcher.textContent = 'Dark';
    }
});