// Seu código Javascript vem aqui
document.addEventListener('DOMContentLoaded', function () {

    // Obtém elementos relevantes do DOM.
    // output: É o local onde a senha será exibida.
    var lengthInput = document.getElementById('length');
    var generateButton = document.getElementById('generate');
    var copyButton = document.getElementById('copy');
    var outputDiv = document.getElementById('output');

    // Função para gerar uma senha.
    //length: Tamanho da senha.
    function generatePassword() {
        var length = lengthInput.value;
        var symbols = ":{}[]?!<>@-+$%&#;|/=()";
        var numbers = "1234567890";
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var caracteres = "";
        
        // Verifica quais opções foram selecionadas.
        var checkSymbols = document.getElementById("symbols").checked;
        var checkNumbers = document.getElementById("numbers").checked;
        var checkLowercase = document.getElementById("lowercase").checked;
        var checkUppercase = document.getElementById("uppercase").checked;

        // Adiciona os caracteres conforme as opções selecionadas.
        if (checkSymbols) {
            caracteres += symbols;
        }
        if (checkNumbers) {
            caracteres += numbers;
        }
        if (checkLowercase) {
            caracteres += lowercase;
        }
        if (checkUppercase) {
            caracteres += uppercase;
        }

        // Se nenhum checkbox estiver marcado, exibe um alerta e retorna.
        if (caracteres === "") {
            alert("Por favor, selecione pelo menos uma opção de caracteres.");
            outputDiv.textContent = ""; // Limpar a área onde a senha é gerada (antes de gerar outra senha).
            copyButton.disabled = true; // Permite o acesso do usuário no botão (desabilitado quando não houver senha para copiar).
            return;
        }

        // Gera uma senha aleatória.
        var password = "";
        for (var i = 0; i < length; i++) {
            password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            // Math.floor: Arredonda o número para baixo (para ser inteiro).
            // Math.random: Gerar números aleatórios dentro de uma string formando uma senha aleatória.
            // charAt: Acessa caracteres dentro de uma string.
        }

        // Exibe a senha gerada.
        outputDiv.textContent = password;

        // Habilita o botão de cópia.
        copyButton.disabled = false;
    }

    // Evento de clique para gerar senha.
    // add.EventListener: Gera um evento (como um clique no botão).
    generateButton.addEventListener('click', generatePassword);

    // Evento de clique para copiar senha.
    copyButton.addEventListener('click', function () {
        var textarea = document.createElement('textarea');
        textarea.value = outputDiv.textContent; // Definindo o valor da senha gerada.
        document.body.appendChild(textarea); // Adicionando o textarea ao HTML (necessário para ser selecionado).
        textarea.select(); // Destacando o texto para poder ser copiado.
        document.execCommand('copy'); // Permite copiar o texto para á area de transferência para poder ser colado posteriormente.
        document.body.removeChild(textarea); // Limpa a interface após a cópia da senha.
        alert("Senha copiada para a área de transferência!");
    });
});

