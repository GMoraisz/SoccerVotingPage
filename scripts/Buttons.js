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
        alert("Selecione um Jogador antes de enviar!");
    }
}

function submitFormF() {
    var checkboxes = document.querySelectorAll('input[name="jogador"]:checked');
    
    if (checkboxes.length > 0) {
        window.location.href = "bestgoalsm.html";
    } else {
        alert("Selecione uma jogadora antes de enviar!");
    }
}

function submitFormM() {

    var checkboxes = document.getElementsByName("jogador");
    var checked = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked = true;
            break;
        }
    }

    if (checked) {
       
        window.location.href = "bestgoalsf.html";
    } else {
       
        alert("Selecione um gol antes de enviar!");
    }
}

function submitFormEnd() {
    var checkboxes = document.getElementsByName("jogador");
    var checked = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked = true;
            break;
        }
    }

    if (checked) {
       
        window.location.href = "endPage.html";
    } else {
     
        alert("Selecione um gol antes de enviar!");
    }
}