'use strict';

/*
function togglefir () {
    const me = document.querySelector('#me');
    const cover = document.querySelector('.cover');
    const write = document.querySelector('.write');
    cover.appendChild(me);
    me.classList.toggle('appear');
    write.classList.add('pear');
}
*/

const navbar = document.querySelector('.navbar');
const bar = document.querySelectorAll('.bar');
const cover = document.querySelectorAll('.cover');

navbar.addEventListener('click', (event) => {

    const tar = event.target;
    const tarlink = tar.dataset.link;
    const link = document.querySelector(tarlink);
    const fil = event.target.dataset.filter;

    for(let i =0; i<cover.length; i++) {
        if(fil === cover[i].dataset.type) {
            cover[i].appendChild(link);
            link.classList.toggle('appear');

        }
    }
})






/*
bar.addEventListener('click', toggleBtn);
function toggleBtn (event) {
    const link = event.target.dataset.link;
    const btn = document.querySelector(link);
    const write = document.querySelector('.write');
    const cover = document.querySelector('.cover');
    console.log(link);
    cover.appendChild(btn);
    btn.classList.toggle('appear');
    write.classList.add('pear');
}
*/