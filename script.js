
const wrapper = document.querySelector('.wrapper_bg');
const loginLink = document.querySelector('.login_link');
var a =1;
const registerLink = document.querySelector('.register_link');
const btnPopup = document.querySelector('.Login_popup');
const closeBut = document.querySelector('.Icon_close');

registerLink.addEventListener('click',() => {

wrapper.classList.add('active');
console.log("Hi I work");
});

loginLink.addEventListener('click',() => {

    wrapper.classList.remove('active');
    console.log("Hi I work");
    });
    


    btnPopup.addEventListener('click',() => {
    
        if(a==1){
        wrapper.classList.add('active_popup');a=0;}
        else {wrapper.classList.remove('active_popup');a=1;}
        console.log("Hi I work",a);
        });    
    
    
        closeBut.addEventListener('click',() => {

            wrapper.classList.remove('active_popup');
            console.log("Hi I work");
            });   
        
    
    
    


//This is for the parallax effect on the text

let font1 = document.getElementByClass('parallax');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
        font1.style.left = value + 'px';
});