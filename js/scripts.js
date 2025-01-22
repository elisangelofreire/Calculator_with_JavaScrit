//Step01: Selecionando os elementos do html:
const previousOperandTextElement = document.querySelector('#previous-operand');
const currentOperandTextElement = document.querySelector('#current-operand');
const numberButtons = document.querySelectorAll('#buttons-container button');

//Step02: Criando a classe Calculator:
class Calculator {

}

//Step03: Criando os eventos dos buttons para pegar os seus valores, no caso, numeros e sinais:
numberButtons.forEach((btn) => {
    //Step03.1: Com o evento click, pegamos o valor do button clicado para futura operação:
    btn.addEventListener('click', (e) =>{
        const btnValue = e.target.innerText;
        
        //Step03.2: Verificando se o valor é um número ou um sinal:
        if (+btnValue >= 0 || btnValue === '.') { //o + antes da variável btnValue converte a string em número
            console.log(btnValue);
        } else {
            console.log('Sinal: ', btnValue);            
        }

    });
});