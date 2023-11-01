document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (localStorage.getItem(username) === password) {
        alert('Login bem-sucedido!');
        document.getElementById('username').classList.remove('input-error');
        document.getElementById('password').classList.remove('input-error');
        
        var userInfo = JSON.parse(localStorage.getItem(username + "_info"));
        console.log(userInfo);
    } else {
        alert('Login ou senha incorretos!');
        document.getElementById('username').classList.add('input-error');
        document.getElementById('password').classList.add('input-error');
    }
});

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
    
    var userInfo = {
        dateJoined: new Date().toISOString(),
    };
    localStorage.setItem(newUsername + "_info", JSON.stringify(userInfo));

    alert('Conta criada com sucesso!');

    window.location.href = 'login.html';
}

// Adicionando funcionalidades para os botões "Sair" e "Salvar"
document.getElementById("exitBtn").addEventListener("click", function() {
    window.location.href = 'login.html';
});

document.getElementById("saveBtn").addEventListener("click", function() {
    var username = document.getElementById("username").value;
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
