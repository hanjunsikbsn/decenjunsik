'use strict'

const input = document.querySelector('#passbox');
const Btn = document.querySelector('.btn');
Btn.addEventListener('click', () => {
    input.value = '';
    input.focus();
})

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        input.value ='';
        input.focus();
    }
})