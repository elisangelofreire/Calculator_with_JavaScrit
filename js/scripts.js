//Step01: Selecionando os elementos do html:
const previousOperandTextElement = document.querySelector('#previous-operand');
const currentOperandTextElement = document.querySelector('#current-operand');
const numberButtons = document.querySelectorAll('#buttons-container button');

//Step02: Criando a classe Calculator:
class Calculator {
    //Step04: Criando o construtor da classe:
    constructor(previousOperandTextElement, currentOperandTextElement) {
        //Para os dados já existentesno screen da calculadora:
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        //Para os dados que estão sendo digitados no screen da calculadora:
        this.currentOperation = '';
    }
}

//Step05: instanciando a classe Calculator:
const calc = new Calculator(previousOperandTextElement, currentOperandTextElement);

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