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