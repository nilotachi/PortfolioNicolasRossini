// Obter elementos do DOM
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const icons = document.querySelectorAll('.icon-networking, .icon-python, .icon-cisco');

// Adicionar evento de clique à imagem
icons.forEach(icon => {
    icon.onclick = function() {
        modal.style.display = "block"; 
        modalImg.src = this.getAttribute('data-large'); 
        captionText.innerHTML = this.alt; 
    }
});

// Adicionar evento de clique ao botão de fechar
document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none"; 
}

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}
