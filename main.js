const form = document.getElementById('formulario');

let Validform = false 

function numberVal (A,B){
    return B > A;
}

form.addEventListener('buttom', function(e) {
    e.defaultPrevented();

    let A = parseFloat(document.getElementById('ValorA').value);
    let B = parseFloat(document.getElementById('ValorB').value);

    const messagesucess = 'Formulario enviado!';
    const containermessagesucess = document.querySelector('Sucesso');

    formValid = numberVal(A,B);

    if (formValid){
        document.querySelector('error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        A.value = '';
        B.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }
})