document.addEventListener("DOMContentLoaded", () => {
    const contaInfo = JSON.parse(localStorage.getItem("conta")); //Recuperando a informação do LocalStorage
    let saldo = 0; // Inicializa o saldo

    if (contaInfo) {
        document.getElementById("usuarioNome").innerText = `Olá ${contaInfo.titular}`;
        saldo = contaInfo.saldo; 
        document.getElementById("saldoEmConta").innerText = `Saldo: ${saldo}`;
    } else {
        console.log("Nenhuma conta encontrada.");
    }

    function depositar() { 
        const valor = parseFloat(document.getElementById("valorDeposito").value);
        
        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido");
            return;
        }

        saldo += valor; 
        alert(`Depósito realizado, seu saldo atual é de: ${saldo}`);
        
        contaInfo.saldo = saldo;
        localStorage.setItem("conta", JSON.stringify(contaInfo));
        document.getElementById("saldoEmConta").innerText = `Saldo: ${saldo}`;

        // Fecha a tela de depósito
        document.getElementById("fechar-popupDeposito").checked = true;
    }

    function sacar() {
        const valor = parseFloat(document.getElementById("valorSaque").value);

        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido");
            return;
        }
        
        if (valor > saldo) {
            alert("Saldo insuficiente");
            return;
        }

        saldo -= valor; 
        alert(`Saque realizado, seu saldo atual é de: ${saldo}`);
        
        contaInfo.saldo = saldo;
        localStorage.setItem("conta", JSON.stringify(contaInfo));
        document.getElementById("saldoEmConta").innerText = `Saldo: ${saldo}`;

        // Fecha a tela de saque
        document.getElementById("fechar-popupSaque").checked = true;
    }

    document.getElementById("depositarBtn").onclick = () => {
        depositar();
    };

    document.getElementById("sacarBtn").onclick = () => {
        sacar();
    };
});
