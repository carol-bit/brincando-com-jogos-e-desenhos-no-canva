function pularLinha() {
    document.write("<br><br>");
}
function mostra(frase) {
    document.write(frase);
    pularLinha();
} 

var numeroPensado = Math.round(Math.random() * 10);
var chute = parseInt(prompt("Digite seu chute"));

if(chute == numeroPensado) {
    mostra("Voce acertou! O numero pensado foi: " +numeroPensado);
} 
else {
    mostra("Voce errou! o numero pensado foi: " + numeroPensado);
}