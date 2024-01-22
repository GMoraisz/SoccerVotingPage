document.addEventListener('DOMContentLoaded', function () {
    fadeInText();
});

function fadeInText() {
    const textElement = document.getElementById('voteConfirmationText');
    textElement.style.opacity = '1';
}

function encerrar() {
    
    alert('Votação encerrada. Obrigado!');
    window.location.href = 'index.html';
   
}