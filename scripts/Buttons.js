document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("formulario");

    if (form) {
        form.addEventListener("submit", function () {
            var isFormValid = formModule.validateForm();

            if (isFormValid) {
                window.location.href = "bestplayersm.html";  
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});

function submitForm() {
    var checkboxes = document.getElementsByName('jogador');
    var selectedPlayers = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedPlayers.push(checkbox.value);
        }
    });

    if (selectedPlayers.length > 0) {
        var nextPage = "bestplayersf.html";
        window.location.href = nextPage;
    } else {
        alert("Selecione um Jogador!");
    }
}

function submitFormF() {
    var checkboxes = document.querySelectorAll('input[name="jogador"]:checked');
    
    if (checkboxes.length > 0) {
        window.location.href = "bestgoalsf.html";
    } else {
        alert("Selecione pelo menos uma jogadora antes de enviar!");
    }
}