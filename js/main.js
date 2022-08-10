const humburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


    humburger.addEventListener('click', () => {
        humburger.classList.toggle('active');
        navMenu.classList.toggle('active');

    })


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    humburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


// dropdwn Menu
const details = document.querySelector('.option');
const menuList = document.querySelector('.option-list');


details.addEventListener('click', () => {
    details.classList.toggle('active')
})
menuList.addEventListener('click', () => {
    menuList.classList.toggle('active');
})