// globalScript.js

const colors = ['#d62828', '#059605'];

function createSquare() {
    const section = document.querySelector('section');
    const square = document.createElement('span');

    let size = Math.random() + 40;

    square.style.width = 15 + size + 'px';
    square.style.height = 2 + size + 'px';

    square.style.top = Math.random() * window.innerHeight + 'px';
    square.style.left = Math.random() * window.innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 7000);
}

setInterval(createSquare, 150);

export default {
    // Тут ви можете додати інші глобальні параметри або методи, які вам потрібні
};
