function calcularAumento() {
    var salario = parseFloat(document.getElementById("salario").value);
    var anosTrabalhados = parseInt(document.getElementById("anos").value);
    var aumento = 0;
            
    if (anosTrabalhados >= 0 && anosTrabalhados < 2) {
                aumento = salario * 0.02;
    } else if (anosTrabalhados >= 2 && anosTrabalhados < 4) {
                aumento = salario * 0.04;
    } else if (anosTrabalhados >= 4 && anosTrabalhados < 6) {
                aumento = salario * 0.06;
    } else if (anosTrabalhados >= 6 && anosTrabalhados < 8) {
                aumento = salario * 0.08;
    } else if (anosTrabalhados >= 8) {
                aumento = salario * 0.12;
    }
            
    var novoSalario = salario + aumento;
    document.getElementById("resultado").innerHTML = "Novo salário: R$" + novoSalario.toFixed(2);
    }



