// Login logic
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("newUsername").value;
    var password = document.getElementById("newPassword").value;

    if (localStorage.getItem(username) === password) {
        alert('Login bem-sucedido!');
        localStorage.setItem("loggedUser", username); // Armazenando o nome de usuário logado
        window.location.href = 'teste_notas.html';
    } else {
        alert('Login ou senha incorretos!');
    }
});

// Create account logic
function createAccount() {
    var newUsername = document.getElementById("newUsername").value.trim();
    var newPassword = document.getElementById("newPassword").value.trim();

    if (!newUsername || !newPassword) {
        alert('Por favor, insira o nome de usuário e a senha.');
        return;
    }

    if (localStorage.getItem(newUsername)) {
        alert('Esse nome de usuário já existe!');
        return;
    }

    localStorage.setItem(newUsername, newPassword);

    alert('Conta criada com sucesso!');

    window.location.href = 'login.html';
}

// Save notes logic
document.getElementById("saveBtn").addEventListener("click", function() {
    var username = localStorage.getItem("loggedUser"); // Recuperando o nome de usuário logado
    var notas = {
        nota1: document.getElementById("nota1").value,
        nota2: document.getElementById("nota2").value,
        nota3: document.getElementById("nota3").value,
        nota4: document.getElementById("nota4").value,
        nota5: document.getElementById("nota5").value,
    };

    localStorage.setItem(username + "_notas", JSON.stringify(notas));
    alert('Notas salvas com sucesso!');
});

// Load saved notes when the page is loaded
window.addEventListener("load", function() {
    var username = localStorage.getItem("loggedUser"); // Recuperando o nome de usuário logado
    var savedNotes = JSON.parse(localStorage.getItem(username + "_notas") || "{}");

    for (var i = 1; i <= 5; i++) {
        if (savedNotes["nota" + i]) {
            document.getElementById("nota" + i).value = savedNotes["nota" + i];
        }
    }
});

// Exit button logic
document.getElementById("backToLogin").addEventListener("click", function() {
    localStorage.removeItem("loggedUser"); // Removendo o nome de usuário logado
    window.location.href = 'Inicio.html';
});
