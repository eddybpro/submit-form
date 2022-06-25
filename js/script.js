const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const spans = document.querySelectorAll('.redSpan');


submit.addEventListener('click',()=>{
    if(!firstName.value){
        spans[0].style.opacity = 1
        
    }
    if(!lastName.value){
        spans[1].style.opacity = 1
    }
    if(!email.value){
        spans[2].style.opacity = 1
    }
    if(!password.value){
        spans[3].style.opacity = 1
    }
    
})