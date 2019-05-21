// Your code goes here
const body = document.querySelector('body');

body.addEventListener('keydown', event => {
    body.classList.toggle('toggle-bg');
});

const navbar = document.querySelector('.main-navigation');

body.addEventListener('wheel', event => {
    navbar.style.height = '50px';
},{once: true})

const h2 = document.querySelectorAll('h2');

h2.forEach(item => {
    item.addEventListener('click', event => {
        item.style.fontFamily = "New Times Roman";
    })
});

h2.forEach(item => {
    item.addEventListener('dblclick', event => {
        item.style.fontSize = "5rem";
    })
})

const img = document.querySelectorAll('img');

window.addEventListener('load', event => {
    img.forEach(item => item.style.border = '4px dashed red');
});

img.forEach( item => {
    item.addEventListener('mouseleave', event => {
        item.style.border = '10px solid green';
    })
})

const p = document.querySelectorAll('p');
p.forEach( item => {
    item.addEventListener('copy', event => {
        alert('HAH I CAUGHT YOU!!!!');
});
})

p.forEach( item => {
    item.addEventListener('contextmenu', event => {

        item.style.color = 'red';
    })
    item.addEventListener('mouseover', event => {

        item.style.fontSize = '2rem';
    })
})

const button = document.querySelectorAll('.btn');

button.forEach(item => {
    item.addEventListener('mouseup', event => {
        item.style.fontSize = "3rem";
    } )
});

const a = document.querySelectorAll('a');

a.forEach( item => {
    item.addEventListener('click', event => {
        item.style.background = 'blue';
        event.stopPropagation();
        event.preventDefault();
    })
})

const nav = document.querySelector('div.nav-container');

nav.addEventListener('click', event => {
    nav.style.background = 'red';
})