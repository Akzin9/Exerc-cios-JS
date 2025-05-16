/*const entrada = require('prompt-sync') ({sigint: true})  //instalando o prompt-sync tem que criar uma variável que vai requisitar essa biblioteca, sigint true é importante

let x = entrada("Digite x: ") //cria o prompt, não é necessário usar o console.log pra chamar a variável

console.log('x = ' + x)
*/
const entrada = require('prompt-sync') ({sigint: true})

var n = 43

var Chute = entrada('Chute um número inteiro de 0 a 100: ')
var IntN = Math.trunc(Chute)

while (Chute !== n){

    if (IntN > n) {
        console.log("O número correto é menor.")
    } else if (IntN < n) {
        console.log("O número correto é maior.")
    } 
    var Chute = entrada('Chute um número inteiro de 0 a 100: ')
    var IntN = Math.trunc(Chute)
    if (IntN == n) {
        console.log("Parabéns! Você acertou.")
        break
    }
}