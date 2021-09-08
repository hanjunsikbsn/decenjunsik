'use strict';

const menu = document.querySelector('.menu');
const btnbox = document.querySelector('.buttonbox');
const search = document.querySelector('.search');

function loadItems() {
    return fetch('/data/data.json')
        .then(response => response.json())
        .then(json => json.items)
}

function displayItems(items) {
    menu.innerHTML = items.map(item => createHtml(item)).join('');
}

function createHtml(item) {
    return `
    <div class="menubox">
        <img src="${item.img}" class="img">
        <h3>${item.name}</h3>
        <h5>${item.price}</h5>
    </div>
    `
}

function onButtonClick(event, items) {
    const datase = event.target.dataset;
    const key = datase.key;
    const value = datase.value;
    if (key == null || value == null) {
        return;
    }
    displayItems(items.filter(item => item[key] === value));

}

loadItems()
    .then(items => {
        btnbox.addEventListener('click', (event) => onButtonClick(event, items));
        qwe(items);
        
    })

function qwe (items) {
items.filter(item => item.includes(searchkeyword(text)))
}




function searchkeyword(keyword) {
    const menuBox = document.querySelectorAll('.menubox');
    const menuName = document.querySelectorAll('.menubox h3');

    for (let i = 0; i < menuName.length; i++) {
        if (menuName[i].innerHTML.includes(keyword)) {
            menuBox[i].style.display = "inline";
        } else {
            menuBox[i].style.display = "none";
        }
    }

    search.value = '';
    search.focus();
}






