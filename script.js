// Variables
const body = document.getElementById('particles-js');
const warning = document.getElementById('warning');

const canvas = document.getElementById('canvas');
const rect = canvas.getBoundingClientRect();

const dvd = new Image();
dvd.src = 'images/dvd.png';

var u = 3;
var v = 3;
var x = 0;
var y = 0;
const blockSize = 60;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

// Events
checkWindow();

window.addEventListener('resize', checkWindow);

// Setup
requestAnimationFrame(main);

// Functions
function checkWindow() {
    if (window.innerWidth < rect.width) {
        body.style.filter = 'blur(4px)';
        warning.style.visibility = 'visible';
        canvas.style.visibility = 'hidden'
    } else {
        body.style.filter = 'none';
        warning.style.visibility = 'hidden';
        canvas.style.visibility = 'visible'
    }
}

function main() {
    cls();

    ctx.fillStyle = 'black';

    if (x + (blockSize * 1.5) > rect.width || x < 0) {
        u = -u;
    }

    if (y + blockSize > rect.height || y < 0) {
        v = -v;
    }

    ctx.drawImage(dvd, x, y, blockSize * 1.5, blockSize)

    x += u;
    y += v;

    requestAnimationFrame(main);
}

function cls() {
    ctx.fillStyle = '#d7d7e8';
    ctx.fillRect(0, 0, rect.width, rect.height);
}