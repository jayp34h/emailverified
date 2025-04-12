const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
document.querySelector('#email-welcome').textContent = `Welcome, ${email}`;


