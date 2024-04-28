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
    mudarCombinacao(valor)
}
function mudarCombinacao(vinho){
    let listacombinacao = document.getElementById("wine-list")
console.log(vinho);
    switch(vinho){
        case 10:
            console.log(listacombinacao);
            listacombinacao.innerHTML='<div class="wines-item"> <img src="images/combinacoes/1.png" alt="vinho Carignan"> <h3>Cassoulet: </h3> <p>Um clássico francês com feijão branco, carne de porco, linguiça e pato, harmoniza perfeitamente com os taninos robustos e aromas terrosos do Carignan.</p> </a></div><!--fim 1 vinho--><!--2 vinho--><div class="wines-item"><img src="images/combinacoes/2.png" alt="vinho Chardonnay"><h3>Costeletas de Cordeiro com Alecrim e Tomilho: </h3><p>A carne suculenta de cordeiro complementa os sabores frutados do Carignan, enquanto as ervas frescas realçam as notas terrosas do vinho.</p></div><!--3 vinho--><div class="wines-item"><img src="images/combinacoes/3.png" alt="La Linda Malbec"><h3>Queijo Gruyère: </h3><p> A cremosidade e o sabor intenso do Gruyère se equilibram com os taninos firmes e o final persistente do Carignan.</p></div>'
            break;
        case 20:
            listacombinacao.innerHTML =    '<div class="wines-item"> <img src="images/combinacoes/4.png" alt="vinho Carignan"> <h3>Salmão Grelhado com Molho de Limão e Dill: </h3> <p>O frescor do salmão e a acidez do molho combinam com a mineralidade e os sabores cítricos do Chardonnay.</p> </a></div><!--fim 1 vinho--><!--2 vinho--><div class="wines-item"><img src="images/combinacoes/5.2.png" alt="vinho Chardonnay"><h3>Frango Assado com Legumes: </h3><p>O Chardonnay encorpado complementa os sabores do frango e dos legumes, enquanto a sua acidez corta a gordura do prato.</p></div><!--3 vinho--><div class="wines-item"><img src="images/combinacoes/5.png" alt="La Linda Malbec"><h3>Queijo Brie: </h3><p>A textura macia e o sabor amanteigado do Brie se harmonizam com a cremosidade e as notas de frutas do Chardonnay.</p></div>'
            break;
        case 30:
            listacombinacao.innerHTML =    '<div class="wines-item"> <img src="images/combinacoes/6.png" alt="vinho Carignan"> <h3>Bife de Chorão </h3> <p>O corte suculento e o sabor intenso da carne se equilibram com os taninos macios e os aromas frutados do Malbec.</p> </a></div><!--fim 1 vinho--><!--2 vinho--><div class="wines-item"><img src="images/combinacoes/7.png" alt="vinho Chardonnay"><h3>Empadão de Carne Moída </h3><p> O recheio saboroso e a massa crocante combinam com a estrutura robusta e os sabores especiados do Malbec.</p></div><!--3 vinho--><div class="wines-item"><img src="images/combinacoes/8.png" alt="La Linda Malbec"><h3>Queijo Provolone </h3><p>  O sabor picante e a textura firme do Provolone se complementam com os taninos maduros e as notas de especiarias do Malbec.</p></div>'
            break;
        case 40:
            listacombinacao.innerHTML =    '<div class="wines-item"> <img src="images/combinacoes/9.png" alt="vinho Carignan"> <h3>Salada de Frutas com Hortelã </h3> <p>A doçura refrescante da salada e o toque de hortelã harmonizam com a doçura delicada e os aromas florais do Moscato.</p> </a></div><!--fim 1 vinho--><!--2 vinho--><div class="wines-item"><img src="images/combinacoes/10.png" alt="vinho Chardonnay"><h3>Torta de Maçã </h3><p> A acidez da maçã e a doçura da torta se equilibram com a doçura frutada e a leve efervescência do Moscato..</p></div><!--3 vinho--><div class="wines-item"><img src="images/combinacoes/11.png" alt="La Linda Malbec"><h3>Queijo Gorgonzola:  </h3><p> O sabor picante e a textura cremosa do Gorgonzola se contrastam com a doçura suave e a acidez equilibrada do Moscato.</p></div>'
            break;
            
    }
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

