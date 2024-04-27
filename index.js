const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link')
const loginLink= document.querySelector('.login-link')
const btnPopUp= document.querySelector('.btn-login');
const btnClose = document.querySelector('.icon-close');
registerLink.addEventListener('click', (e)=>{
        e.preventDefault();
        wrapper.classList.add('active')

})
loginLink.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapper.classList.remove('active')
})
btnPopUp.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapper.classList.add('active-popup');
})
btnClose.addEventListener('click',(e)=>{
    wrapper.classList.remove('active-popup')
})