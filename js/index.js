// Your code goes here

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
});

const headerFocus = document.querySelector('.main-navigation');
const title = document.querySelector('.logo-heading');
const imgShake = document.querySelectorAll('img');
const textSlide = document.querySelectorAll('h2');



title.onmouseover = logMouseOver;
title.onmouseout = logMouseOut;

function logMouseOver() {
    title.style.color = "blue";
}

function logMouseOut() {
    title.style.color = "black";
}

headerFocus.addEventListener('focus', (event) => {
    event.target.style.background = "yellow";
}, true);

headerFocus.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

imgShake.forEach(imgShake => {
    imgShake.addEventListener('click', () => {

        imgShake.classList.add("apply-shake");
    }, true);
});

imgShake.forEach(imgShake => {
    imgShake.addEventListener("animationend", () => {
        imgShake.classList.remove("apply-shake");
    });
});

textSlide.forEach(textSlide => {
    window.addEventListener('load', () => {
        textSlide.classList.add('text-slide');
    });
});