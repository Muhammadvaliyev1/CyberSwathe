const but1 = document.getElementById('but1')
const but2 = document.getElementById('but2')
const but3 = document.getElementById('but3')
const but4 = document.getElementById('but4')
const but5 = document.getElementById('but5')
const but6 = document.getElementById('but6')

function butt2() {
    if (but2) {
        but2.classList.remove('hover:bg-cyanblue');
    } else {
        but2.classList.add('hover:bg-cyanblue')
    }
}