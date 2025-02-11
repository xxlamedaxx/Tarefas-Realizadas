// difinir variaveis
var nota1 = 8;
var nota2 = 7;
var nota3 = 10;
var media = (nota1 + nota2 + nota3) / 3;
var mediami = 7;


// controle de while
while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log("VALORES INVALIDOS! Insira valores de 0 ate 10");
    return;
    
}

// controle if e else
if (media >= mediami) {
    console.log("nota 1:",nota1);
    console.log("nota 2:",nota2);
    console.log("nota 3:",nota3);
    console.log("media:", media.toFixed(2));
    console.log("Aprovado✅")
} else {
    console.log("REPROVADO❌");
}


