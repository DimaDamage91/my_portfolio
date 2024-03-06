
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