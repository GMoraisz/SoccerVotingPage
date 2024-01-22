
var formModule = (function () {
    function validateForm() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("e-mail").value;

        if (nome.trim() === "" || email.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        return true;
    }

 
    return {
        validateForm: validateForm
    };
})();


var checkboxModule = (function () {
    function onCheckboxChange(checkbox) {
        var checkboxes = document.getElementsByName('jogador');
        checkboxes.forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    }

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


    return {
        onCheckboxChange: onCheckboxChange,
        submitForm: submitForm
    };
})();
