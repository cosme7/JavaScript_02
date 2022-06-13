//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 18;
if (idade >=18){
    console.log('Você é maior de 18') 
}
else{
    console.log('Mete o pé pirralho')
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let maiorIdade = 18;
let corRoupa = 'Roxo';
if ((maiorIdade >=18) && (corRoupa === 'Roxo')){
    console.log('Tá safe, pau na máquina!') 
}
else{
    console.log('YOU SHALL NOT PASS!!11!!')
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let niver = 'Setembro';
if ((niver === 'Janeiro') || (niver === 'Dezembro')){
    console.log('Meus Parabéns')
}
else{
    console.log('The Cake is a lie')
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = 'Cosme';
if(nome.substring(0, 1) == 'R') {
    console.log("TÁ SAFE!!")
} 
else {
    console.log("FAKE!!!")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobreNome = 'Leite';
if (sobreNome.length >= 6 || nome.substring(0,1) === 'E'){
    console.log("TÁ SUAVE!!!")
} 
else {
    console.log("DEU B.O!!!")
}