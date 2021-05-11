const btnToggleMenu = document.getElementById('toggle')
const btnClose = document.getElementById('close')
const btnOpen = document.getElementById('open')
const modalEl = document.getElementById('modal')

// TOGGLE MENU
btnToggleMenu.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// SHOW MODAL
btnOpen.addEventListener('click', () => {
    modalEl.classList.add('show-modal')
})

// HIDE MODAL
btnClose.addEventListener('click', () => {
    modalEl.classList.remove('show-modal')
})

// HIDE MODAL ON OUTSIDE CLICK
window.addEventListener('click', (e) => {
    // console.log(e.target)
    // modalEl is across whole page, with rgba background
    e.target === modalEl ? modalEl.classList.remove('show-modal') : false;
})