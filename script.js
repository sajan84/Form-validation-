const form=document.querySelector('form');
const name1=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validInputs();
});

const setError = (element,message)=>{
    const input=element.parentElement;
    const error=input.querySelector('.error')
    error.textContent=message;
    input.classList.add('error');
    input.classList.remove('success');
}
const setSuccees =element=>{
    const input=element.parentElement;
    const error=input.querySelector('.error')
    error.textContent='';
    input.classList.add('success');
    input.classList.remove('error')
}

const validEmail=email=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validInputs = () =>{
    const nameValue=name1.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();

    if(nameValue===''){
        setError(name1,'Name is Required')
        name1.style.border="2px solid red";
    }
    else{
        setSuccees(name1)
    }
    if(emailValue===''){
        setError(email,'Email is Required')
        email.style.border="2px solid red";
    }
    else if (!validEmail(emailValue)) {
        setError(email,'Email is Required')
        email.style.border="2px solid red";
    }
    else{
        setSuccees(email)
    }
    if (passwordValue==='') {
        setError(password,'password is Required')
        password.style.border="2px solid red";
    }
    else if(passwordValue.length<10){
        setError(password,'password must be greater or equal to 10 length')
        password.style.border="2px solid red";
    }
    else{
        setSuccees(password)
    }
}
