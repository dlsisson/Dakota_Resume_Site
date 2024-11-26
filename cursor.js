/*Cursor effects + on hover*/
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const lagFactor = 0.1;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;


function moveCursor() {
    currentX += (targetX - currentX) * lagFactor;
    currentY += (targetY - currentY) * lagFactor;
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;
    requestAnimationFrame(moveCursor);
}

moveCursor();


document.addEventListener('mousemove', (e) => {
    targetX = e.pageX;
    targetY = e.pageY;
});


document.querySelectorAll('.hc').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });

    anchor.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});
