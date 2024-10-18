
let saldo = 0;
let titular = ` ` //Sem definir titular o código reconhece o campo como vazio

function criaconta() {
    titular = document.getElementById("nomeCompleto").value;

    if (titular === "") { // Verifica se o nome está em branco
        alert("Por favor, digite o nome do titular.");
        return;
    }

    alert(`Olá ${titular}, o número da sua conta é: 1001`);

    // Armazena as informações no localStorage
    const contaInfo = {
        titular: titular,
        saldo: 0,
    };

    localStorage.setItem("conta", JSON.stringify(contaInfo)); // Armazenando uma informação no LocalStorage

    // Redireciona para outra página
    window.location.href = "login.html";
}

document.getElementById("criarContaBtn").onclick = () => {
criaconta();
};