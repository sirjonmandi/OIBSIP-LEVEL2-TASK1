let result = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            result = eval(result);
            document.querySelector('.down').value ="=   "+result;
        }
        else if (e.target.innerHTML == 'AC') {
            result = "";
            document.querySelector('.up').value =result;
            document.querySelector('.down').value = result;
        }else if (e.target.innerHTML == '&lt;') {
            result = result.slice(0,-1);
            document.querySelector('.up').value = result;
        }else if (e.target.innerHTML == 'X') {
            result += "*";
            document.querySelector('.up').value = result;
        }else if (e.target.innerHTML == '÷') {
            result += "/";
            document.querySelector('.up').value = result;
        }
        else {
            result += e.target.innerHTML;
            document.querySelector('.up').value = result;
        }
    })
}

)