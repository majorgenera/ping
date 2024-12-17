const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.getElementById('button');

form.addEventListener('submit', e =>{
    e.preventDefault();

    var emailValue = email.Value.target();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailValue === ''){
        errorFunc(email, 'Email cannot be empty')
    } else if(!emailValue.match(pattern)){
        errorFunc(email, 'example@email/com')
    }
    else {
        successFunc(email)
    }
})

function errorFunc(req, message){
    const formControl = req.parentElement;
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    if( req !== email){
        req.value = ' ';
    } else {
        req.style.color = "hsl(0, 100%, 74%)"
    }
}

function successFunc(req){
    req.className += 'success';

}