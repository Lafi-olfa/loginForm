const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link')
const loginLink= document.querySelector('.login-link')
const btnPopUp= document.querySelector('.btn-login');
const btnClose = document.querySelector('.icon-close');
const iconBars= document.querySelector('.icon-bars');
const headerRepsonsive= document.querySelector('header');
const iconXmark = document.querySelector('.icon-xmark');
const btnLogin= document.querySelector('.btn-login')
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
btnClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})
iconBars.addEventListener('click',()=>{
    console.log('object')
    headerRepsonsive.classList.add('active-icon-bars')
})
iconXmark.addEventListener('click', ()=>{
    headerRepsonsive.classList.remove('active-icon-bars')
})
btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapper.classList.add('form-active')
})
btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    headerRepsonsive.classList.remove('active-icon-bars')
})