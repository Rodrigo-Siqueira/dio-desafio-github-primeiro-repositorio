function calculadora() {
    const operacao = Number(prompt('Escolha a operação desejada:\n 1- SOMA (+)\n 2- SUBTRAÇÃO (-)\n 3- MULTIPLICAÇÃO (*)\n 4- DIVISÃO REAL (/)\n 5- DIVISÃOINTEIRA (%)\n 6- POTÊNCIAÇÃO(**)'));

    if(!operacao || operacao >= 7) {
        alert('Erro operação Inválida.');
        calculadora();
    }else {
        let n1 = Number(prompt('Insira o Primeiro Valor: '));
        let n2 = Number(prompt('Insira o Segunsdo Valor: '));
        let resultado;

        if(!n1 || !n2) {
            alert('Erro - Parâmetros inválidos!');
            calculadora();
        }else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divInteiro() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = Number(prompt('Deseja realizar uma nova operação? 1- SIM 2- NÃO'));
    
                if(opcao == 1) {
                    calculadora();
                }else if(opcao == 2) {
                    alert('Até Logo!');
                }else {
                    alert('Digite uma opção valida.');
                    novaOperacao();
                }
            }
            
            if (operacao == 1) {
                soma();
            }else if(operacao == 2) {
                    subtracao();
            }else if(operacao == 3) {
                multiplicacao();
            }else if(operacao == 4) {
                    divReal();
            }else if(operacao == 5) {
                    divInteiro();
            }else if(operacao == 6) {
                    potenciacao();
            }
        }
    }
}

calculadora();