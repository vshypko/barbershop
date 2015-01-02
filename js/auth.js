var link = document.querySelector('.account-menu-enter');
var popup = document.querySelector('.login-popup');
var close = popup.querySelector('.login-popup-close');
var form = popup.querySelector('form');
var login = form.querySelector('.login-field');
var password = form.querySelector('.password-field');
var storage = localStorage.getItem('login');
 
link.addEventListener('click', function (event) {
	event.preventDefault();
	popup.classList.add('login-popup-show');
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
}, false);
 
close.addEventListener('click', function (event) {
	event.preventDefault();
	popup.classList.remove('login-popup-show');
}, false);
 
form.addEventListener('submit', function (event) {
    if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add('login-popup-error');
	} else {
		localStorage.setItem('login', login.value);
	}
}, false);
 
window.addEventListener('keydown', function (event) {
	if (event.keyCode === 27 && popup.classList.contains('login-popup-show')) {
		popup.classList.remove('login-popup-show');
	}
}, false);