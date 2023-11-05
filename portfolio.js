var data = new Date();
var hora = data.getHours();
var saudacao;

if (hora >= 6 && hora <= 12) {
     saudacao = "Bom dia!";
} else if (hora >= 13 && hora < 18) {
         saudacao = "Boa tarde!";
} else {
     saudacao = "Boa noite!";
}

var saudacaoElement = document.createElement("p");
saudacaoElement.textContent = saudacao;
// #saudacao para selecionar o elemento html
document.querySelector("#saudacao").appendChild(saudacaoElement);  

function aumentarFonte() {
     var elementos = document.querySelectorAll(".projeto");
     elementos.forEach(function (elemento) {
            // remove a classe anterior para substituir
           elemento.classList.remove("diminuir-fonte");
            // adiciona a nova classe
           elemento.classList.add("aumentar-fonte"); 
     });
 }   

function diminuirFonte() {
    var elementos = document.querySelectorAll(".projeto");
       elementos.forEach(function (elemento) {
            // remove a classe anterior para substituir
           elemento.classList.remove("aumentar-fonte"); 
           // adiciona a nova classe
        elemento.classList.add("diminuir-fonte"); 
      });
 }

var elementos = document.querySelectorAll(".projeto");

// obtém o modal e os elementos relacionados
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var closeModal = document.getElementById("close");

// função para abrir o modal com a imagem do projeto
function abrirModal(imagemSrc) {
    modalImage.src = imagemSrc;
    modal.style.display = "block";
}

// função fechar o modal
function fecharModal() {
    modal.style.display = "none";
}

// itera sobre os elementos do portfólio e adiciona um evento de clique ao clicar em cada um
elementos.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        // obtém a url da imagem do projeto
        var imagemSrc = elemento.querySelector("img").src;
        
        // abre o modal com a imagem
        abrirModal(imagemSrc);
    });
});

// fecha o modal quando clicar no botão de fechar
closeModal.addEventListener("click", function () {
    fecharModal();
});

// fecha o modal quando o usuário clica fora da imagem
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        fecharModal();
    }
});