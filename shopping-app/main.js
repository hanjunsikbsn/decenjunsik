'use strict';

function loadItems() {
    //json 데이타 가져오는 기본 코드
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items)
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class = item_thumbnail>
            <span class="item_description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

function onButtonClick(event, items) {
    const datset = event.target.dataset;
    const key = datset.key; // html에 data-key 값
    const value = datset.value; // html에 data-value 값
    if (key == null || value == null) { // img와 글 버튼을 제외하고 눌러질시 이벤트가 발생하지 않게.
        return;
    }
    displayItems(items.filter(item => item[key] === value)); //key와 value 가 일치하는 값들만 이벤트 발생.

}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items)); // logo 를 클릭하면 displayItems 함수 실행으로 첫 화면으로 가게한다.
    buttons.addEventListener('click', (event) => onButtonClick(event, items))  // buttons 을 클릭하면 해당하는 값들을 나열하게 한다.
}



// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })

