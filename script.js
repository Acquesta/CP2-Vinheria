// ABRIR E FECHAR POPUP +18

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

togglePopup()

function blockSite(){
    alert('Você não pode entrar nesse site')
    window.location.href = "https://www.google.com/"
}

// ABRIR POPUP COMENTÁRIOS

function comentarios() {
    document.getElementById("popup-2").classList.toggle("active");
}

// AVALIAÇÃO COMENTARIO

var stars = document.querySelectorAll('.star-icon');
var nota = document.getElementById('avaliacao')
                  
document.addEventListener('click', (e) => {
    console.warn(e.target)
    console.warn(stars);

    stars.forEach((item) => {
        if (e.target == item){
            var classStar = e.target.classList;
            if(!classStar.contains('ativo')){
                stars.forEach((star) => {
                star.classList.remove('ativo');
                });
            classStar.add('ativo');
            var avaliacao = e.target.getAttribute('data-avaliacao')
            console.log(avaliacao);
            nota.innerHTML = avaliacao + ".0"
        }

        }
    });
});

//PÁGINA DE LOGIN

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


// VALOR E CUPOM DE DESCONTO

let total = 0;
let cupomUtilizado = false; // Variável para controlar se o cupom já foi utilizado

function adicionarValor(valor) {
    total += valor;
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}

function aplicarDesconto() {
    if (cupomUtilizado) {
        alert('O cupom já foi utilizado.');
        return;
    }
    
    const cupom = document.getElementById('cupom').value;
    if (cupom === 'FIAP2024 ') {
        total = total - (0.1 * total); // Aplica desconto de 10%
        document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
        alert('Desconto de 10% aplicado com sucesso!');
        cupomUtilizado = true; // Marca o cupom como utilizado
    } else {
        alert('Cupom inválido.');
    }
}

function limparDados() {
    total = 0;
    document.getElementById('total').textContent = 'R$ 0';
    document.getElementById('cupom').value = '';
    limparMensagens();
    cupomUtilizado = false; // Reinicia o status do cupom
}

function limparMensagens() {
    // Limpar mensagens aqui
    alert('Mensagens limpas!');
}

// FUNÇÃO DE FORMULÁRIO
function enviar() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name == "" || email == "" || phone == "" || message == " ") {
        alert('Preencha os campos em branco, por favor!');
        return
    } else {
        alert('Mensagem enviada com sucesso!');

    }

}