let passImg = document.querySelector('.pass-img');
let passIn = document.querySelector('#pass');

passImg.onclick = function() {
    if (passIn.type == "password") {
        passIn.type = "text";
    } else {
        passIn.type = "password";
    }
}