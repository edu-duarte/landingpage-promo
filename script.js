function salvar(){
    const inputEmail= document.getElementById("campoEmail");
    localStorage.setItem("campoEmail", inputEmail.value);

    if (inputEmail.value !== '') {
        inputEmail.classList.add('inputCerto');
        }

    if (inputEmail.value.indexOf("@") == 1) {
        inputEmail.classList.add('inputCerto');
        }
    
    if (inputEmail.value.indexOf(".") >= 1) {
        inputEmail.classList.add('inputCerto');
        alert("Obrigado por se cadastrar em nossas promoções!");    
    }
        

    else {
        inputEmail.classList.remove('inputCerto');
        inputEmail.classList.add('inputErrado');
    alert("Digite um e-mail válido: exemplo@email.com");
    }
}
