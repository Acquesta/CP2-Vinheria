function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

togglePopup()

function blockSite(){
    alert('Você não pode entrar nesse site')
    window.location.href = "https://www.google.com/"
}

function carrinho(){
    document.getElementById("popup-2").classList.toggle("active");
}

function fecharCarrinho() {
    document.getElementById("popup-2").classList.toggle("active");
}




//*************************** function destinada a parte de login **************************************
function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "1234" && senha == "1234") {
        alert('Login realizado com sucesso!!');
        location.href = "index.html";
    } else {
        alert('Usuário ou senha incorretos, tente novamente.');
    }

}