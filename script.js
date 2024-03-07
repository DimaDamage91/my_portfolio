
/*Проверяем форму, если все заполнено отправляет*/

document.getElementById('sendbutton').addEventListener('click', function() {
    var name = document.getElementById('nname').value;
    var email = document.getElementById('mail').value;
    var phone = document.getElementById('pphone').value;
    var message = document.getElementById('iinfo').value;

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        document.getElementById('myForm').submit();
        alert('Your message has been sent!');
    }
});
/*Добавляем smooth scroll к якорным ссылкам*/
document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
    anchor.addEventListener('touchstart', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
