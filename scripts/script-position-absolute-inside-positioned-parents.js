const btns = document.querySelectorAll('.controls button');

btns.forEach((btn) => {
    btn.addEventListener('mousedown', (e) => { e.preventDefault() });
});