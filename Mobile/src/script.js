var password = "";

function generatePassword() {
    const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    const digit = "0123456789";
    const special = "!?@#$%&*-_=+[]{}|;:";
    const allCharacters = upperAlpha + lowerAlpha + digit + special;
    var password = "";
    let length = 8;

    for (let i = 0; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    document.getElementById("password").value = password;
    clearCopyMessage();
}

function copyPassword() {
    var passwordCopy = document.getElementById("password");
    passwordCopy.select();
    document.execCommand("copy");
    confirmCopy();
}

function confirmCopy() {
    if (document.getElementById("password").value !== "") {
        document.getElementById("copy-confirmation").style.color = "green";
        document.getElementById("copy-confirmation").innerHTML = "Password copied successfully.";
    } else {
        document.getElementById("copy-confirmation").style.color = "red";
        document.getElementById("copy-confirmation").innerHTML = "Nothing to copy.";
    }
}

function clearCopyMessage() {
    document.getElementById("copy-confirmation").innerHTML = "";
}

const title = document.getElementById('title');
const credits = document.getElementById('credits');

title.addEventListener('click', function () {
    if (credits.style.display === 'none' || credits.style.display === '') {
      credits.style.display = 'block';
    } else {
      credits.style.display = 'none';
    }
  });
  credits.style.display = 'none';