document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (localStorage.getItem(username) === password) {
        // Login bem-sucedido
        alert('Login bem-sucedido!');
        document.getElementById('username').classList.remove('input-error');
        document.getElementById('password').classList.remove('input-error');
        
        var userInfo = JSON.parse(localStorage.getItem(username + "_info"));
        console.log(userInfo); // Exibe as informações adicionais no console
        
        // Recuperar notas
        var userNotes = JSON.parse(localStorage.getItem(username + "_notes") || "[]");
        
        // Vamos assumir que temos 5 campos de notas na página para preencher.
        for (var i = 0; i < 5; i++) {
            if (userNotes[i]) {
                document.getElementById("note" + (i+1)).value = userNotes[i];
            }
        }

        // Redireciona o usuário para a página onde ele pode ver suas notas
        window.location.href = 'notas.html';
    } else {
        // Falha no login
        alert('Login ou senha incorretos!');
        document.getElementById('username').classList.add('input-error');
        document.getElementById('password').classList.add('input-error');
    }
});

function createAccount() {
    var newUsername = document.getElementById("newUsername").value.trim();
    var newPassword = document.getElementById("newPassword").value.trim();

    // Verifica se os campos de nome de usuário e senha não estão vazios
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

function saveNotes(username, notes) {
    localStorage.setItem(username + "_notes", JSON.stringify(notes));
}
