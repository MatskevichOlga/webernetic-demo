import "../styles/reset.scss";
import "../styles/styles.scss";

const tryDemo = document.querySelector("#try-demo");
const modalPopup = document.querySelector(".modal-popup");
const btnClose = document.querySelector(".btn-close");

const addUser = document.querySelector("#register");
const login = document.querySelector('#mail');
const pass = document.querySelector('#password');
const mail = localStorage.getItem('user');
const password = localStorage.getItem('password');

if (mail) {
  login.value = mail;
}
if (password) {
  pass.value = password;
}

tryDemo.addEventListener('click', () => {
 
 modalPopup.classList.add('opened');
 if(!mail){
  alert('Зарегистрируйтесь, пожалуйста!');
 }

});

btnClose.addEventListener('click', () => {
 modalPopup.classList.remove('opened');

});


  addUser.addEventListener('click', () => {

    localStorage.setItem('user', login.value);
    localStorage.setItem('password', pass.value);

    if(login.value && pass.value){
      alert('Поздравляем, ' + login.value +'! Вы успешно зарегистировались!');
    }


    
    // alert('Введите логин и пароль!');

    modalPopup.classList.add('opened');
  })

  // localStorage.clear();

