/*Crie Variavel que converte dados digitados */
const teclado = require("prompt-sync")({sigint:true}); //Recebe dados digitados (executar no terminal "npm install prompt-sync")

class Conta { //Gerencia numero das contas
    constructor(numero){
        this.numero = numero;
    }
}

class contaBancaria { //Classe das contas
        constructor() {
            this.NumeroConta = 1000;
            this.contas = [];
        }

    GerarNumC(){ // Função Geradora de um número para a conta
        this.NumeroConta += 1;
        return this.NumeroConta
    }

    criaconta(nome, saldoInicial){ //Função para criar contas
        const novoNumeroConta = this.GerarNumC();
        const novaConta = new Conta(novoNumeroConta);
        this.contas.push({ numero: novoNumeroConta, titular: nome, saldo: saldoInicial });
        console.log(`Conta criada: ${novoNumeroConta}`);
        return novaConta;
    }
    
    depositar(numeroConta, valor) {  //Função Depósito
        const conta = this.contas.find(c => c.numero === numeroConta); /* Verifica se a array contas (criada na class contaBancaria) possui a conta digitada pelo usuário */
        if (!conta) { // Se conta não for encontrada na array, console mostra seguinte mensagem:
            console.log("Conta não encontrada");
            return;
        } // Se encontrada verifica se valor digitado é número e maior que zero
        if (typeof valor !== 'number' || valor <= 0) {
            console.log("Valor inválido");
            return;
    } // Então depósito será feito e console mostra saldo atualizado
    conta.saldo += valor;  
        console.log(`Depósito realizado, seu saldo atual é de: ${conta.saldo}`);
    }   

    sacar(numeroConta, valor) { // Função Saque
        const conta = this.contas.find(c => c.numero === numeroConta); /* Verifica se a array contas (criada na class contaBancaria) possui a conta digitada pelo usuário */
        if (!conta) { // Se conta não for encontrada na array, console mostra seguinte mensagem:
            console.log("Conta não encontrada");
            return;
        } // Se encontrada verifica se valor digitado é número e maior que zero
        if (typeof valor !== 'number' || valor <= 0) { 
            console.log("Valor inválido");
            return;
        }// Se número maior que zero então verifica se solicitação de saque não é maior que valor na conta
        if (valor > conta.saldo) {
            console.log("Saldo insuficiente");
            return;
        } // Então saque será feito e console mostra saldo atualizado
        conta.saldo -= valor;
        console.log(`Saque realizado, seu saldo atual é de: ${conta.saldo}`);
    }

    consultar(numeroConta) { // Função Consultar Saldo
        const conta = this.contas.find(c => c.numero === numeroConta); /* Verifica se a array contas (criada na class contaBancaria) possui a conta digitada pelo usuário */
        if (!conta) { // Se conta não for encontrada na array, console mostra seguinte mensagem:
            console.log("Conta não encontrada");
            return;
        } // Então console mostra saldo da conta digitada
        console.log(`Seu saldo atual é de: ${conta.saldo}`);
    }

    listarContas() { // Função para listar contas existentes
        console.log("Contas existentes:");
        this.contas.forEach(conta => {
            console.log(`Número: ${conta.numero}, Titular: ${conta.titular}, Saldo: ${conta.saldo}`);
        });
    }
}

const meuBanco = new contaBancaria();
let aplicativoExe = true // Executa o código enquanto true

while (aplicativoExe) {

    console.log("---------------------------")
    console.log("1. Criar Conta");
    console.log("2. Depositar");
    console.log("3. Sacar");
    console.log("4. Consultar Saldo");
    console.log("5. Listar Contas Existentes");
    console.log("6. Sair")
    console.log("---------------------------")

    let valor = parseInt(teclado("Digite o sua ação conforme o número da linha: ")); //Recebe o número digitado

    switch (valor) { //Executa o digito conforme ação

        case 1:
            console.log("** VOCÊ ESTÁ CRIANDO UMA NOVA CONTA **");
            const nome = teclado("Digite o nome do titular: ");
            const saldoInicial = 0;
            meuBanco.criaconta(nome, saldoInicial);
            break;

        case 2:
            const numeroContaDeposito = parseInt(teclado("Digite o número da conta: "));
            const valorDeposito = parseFloat(teclado("Digite o valor que quer DEPOSITAR: "));
            meuBanco.depositar(numeroContaDeposito, valorDeposito);
            break;

        case 3:
            const numeroContaSaque = parseInt(teclado("Digite o número da conta: "));
            const valorSaque = parseFloat(teclado("Digite o valor que quer SACAR: "));
            meuBanco.sacar(numeroContaSaque, valorSaque);
            break;

        case 4:
            const numeroContaConsulta = parseInt(teclado("Digite o número da conta: "));
            meuBanco.consultar(numeroContaConsulta);
            break;

        case 5:
            meuBanco.listarContas();
            break;

        case 6:
            console.clear();
            console.log("### EXECUÇÃO ENCERRADA ###");
            aplicativoExe = false;
            break;

        default:
            console.log("Dados Não identificados, tente novamente");
            aplicativoExe = true
            break;
    }
}
   