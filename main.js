const form = document.getElementById('form-val');
    
    function numberVal (A,B){
        return B > A;
    }
    
    form.addEventListener('btn', function(e) {
        e.defaultPrevented();
    
        let A = parseFloat(document.getElementById('valorA').value);
        let B = parseFloat(document.getElementById('valorB').value);
        let formValido = false;
        const mensagemsucesso = 'O valor B(<b>${numeroTotalB}<b>) é maior que A(<b>${numeroTotalA}<b>)';
        const mensagemError = 'O valor B(<b>${numeroTotalB}<b>) é menor que A(<b>${numeroTotalA}<b>)';
        function validação(numeroTotalA, numeroTotalB){
            return numeroTotalA < numeroTotalB
        }

            formValido = numberVal(A,B);
        if (formValido){
            document.querySelector('error-message').style.display = 'none';
            containermessagesucess.innerHTML = messagesucess;
            containermessagesucess.style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
    
            A.value = '';
            B.value = '';
    
        } 
        else {
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.success-message').style.display = 'none';
        }
    })