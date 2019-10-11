const body = document.body;
const btn = document.getElementById('nav-button');
//const submenu = document.getElementById('sub-menu');

btn.addEventListener('click', _ => body.classList.toggle('show'));

//submenu.addEventListener('click', _ => body.classList.toggle('show-sub-menu'));

// Prevents the focus state from activating on mousedown but
// keeps the focus state for keyboard users
btn.addEventListener('mousedown', (e) => { e.preventDefault() });