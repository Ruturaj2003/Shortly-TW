const input = document.getElementById('input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');



const dota = document.getElementsByClassName('dota');

linkForm.addEventListener('submit', formSubmit);


function formSubmit(event) {
    event.preventDefault();


    if (input.value === "") {
        errMsg.innerHTML = "Please Enter Something";
        input.classList.add('border-red');
    }

    else if (!(isUrlValid(input.value))) {
        errMsg.innerHTML = "Please enter Valid URL";
        input.classList.add('border-red');
    }
    else {
        errMsg.innerHTML = "";
        input.classList.remove('border-red');
        setTimeout(function () { alert("Success"); }, 1000);

    }
}

function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
        return false;
    else
        return true;
}