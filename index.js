var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let funcionario = parseInt(lines[0]);
let numero_hora = parseInt(lines[1]);
let valor_hora = parseFloat(lines[2]);

function calculo(funcionario, numero_hora, valor_hora)  {
    return numero_hora * valor_hora
}

let salario = calculo(funcionario, numero_hora, valor_hora);
 
console.log("NUMBER = " + funcionario);
console.log("SALARY = U$ " + salario.toFixed(2));