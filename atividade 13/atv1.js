function operacoes(primeira, segunda) {
    let diferenca = primeira - segunda;
    let dobro = (2 * primeira) + (3 * segunda);
    let multiplicacao = primeira * segunda;

    console.log("Diferença entre as duas variáveis: " + diferenca);
    console.log("O dobro da primeira variável mais o triplo da segunda variável: " + dobro);
    console.log("Multiplicação das duas variáveis: " + multiplicacao);

    let ordem = (primeira > segunda) ? primeira + ", " + segunda : segunda + ", " + primeira;
    console.log("Variáveis em ordem decrescente: " + ordem);

    document.getElementById("resultado").innerHTML = 
        "<p>Diferença entre as duas variáveis: " + diferenca + "</p>" +
        "<p>O dobro da primeira variável mais o triplo da segunda variável: " + dobro + "</p>" +
        "<p>Multiplicação das duas variáveis: " + multiplicacao + "</p>" +
        "<p>Variáveis em ordem decrescente: " + ordem + "</p>";
}

document.getElementById("calcular").addEventListener("click", function() {
    let a = 60;
    let b = 30;
    operacoes(a, b); 
});


function calcularSalario() {
    const nomeFuncionario = document.getElementById("nomeFuncionario").value;
    const salarioFuncionario = parseFloat(document.getElementById("salarioFuncionario").value);
    
    const taxaINSS = 0.08; 

    let inss = salarioFuncionario * taxaINSS;
    let salarioLiquido = salarioFuncionario - inss;

    let resultadoHTML = "<h4>Nome do Funcionário: " + nomeFuncionario + "</h4>" +
    "<p>Salário bruto: " + salarioFuncionario + "</p>" +
    "<p>Valor do INSS: " + inss + "</p>" +
    "<p>Salário líquido: " + salarioLiquido + "</p>";
    document.getElementById("resultado2").innerHTML = resultadoHTML;
}


function calcularDesconto() {
    const salario = parseFloat(document.getElementById("salario").value);
    let taxaDesconto;
    let valorDesconto;

    if (salario <= 1000) {
        taxaDesconto = 0.08; 
    } else if (salario <= 1500) {
        taxaDesconto = 0.085; 
    } else {
        taxaDesconto = 0.09; 
    }

    valorDesconto = salario * taxaDesconto;

    let resultadoHTML = "<h4>Salário: R$ " + salario.toFixed(2) + "</h4>" +
     "<p>Taxa de desconto: " + (taxaDesconto * 100) + "%</p>" +
     "<p>Valor do desconto: R$ " + valorDesconto.toFixed(2) + "</p>";

    document.getElementById("resultado3").innerHTML = resultadoHTML;
}
