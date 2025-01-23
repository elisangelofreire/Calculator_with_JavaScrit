//Step01: Selecionando os elementos do html:
const previousOperationTextElement = document.querySelector('#previous-operation');
const currentOperationTextElement = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');

//Step02: Criando a classe Calculator:
class Calculator {
    //Step04: Criando o construtor da classe:
    constructor(previousOperationTextElement, currentOperationTextElement) {
        //Para os dados já existentesno screen da calculadora:
        this.previousOperationTextElement = previousOperationTextElement;
        this.currentOperationTextElement = currentOperationTextElement;
        //Para os dados que estão sendo digitados no screen da calculadora:
        this.currentOperation = '';
    }

    //Step06: Criando o método para adicionar um número ou sinal na calculadora:
    addDigit(digit) {
        this.currentOperation = digit; //Step06.2 pra saber qual digito foi digitado

        this.updateScreen(); //Step06.3: Atualizando o screen da calculadora:
    }

    //Step06.4: Criando a lógica do método para atualizar o screen da calculadora que será chamado em várias partes do código:
    updateScreen() {
        this.currentOperationTextElement.innerText += this.currentOperation; //1ª atualização
        
}
}

//Step05: instanciando a classe Calculator:
const calc = new Calculator(previousOperationTextElement, currentOperationTextElement);

//Step03: Criando os eventos dos buttons para pegar os seus valores, no caso, numeros e sinais:
buttons.forEach((btn) => {
    //Step03.1: Com o evento click, pegamos o valor do button clicado para futura operação:
    btn.addEventListener('click', (e) =>{
        const btnValue = e.target.innerText;
        
        //Step03.2: Verificando se o valor é um número ou um sinal:
        if (!isNaN(btnValue) >= 0 || btnValue === '.') { //o + antes da variável btnValue converte a string em número
            //console.log(btnValue);
            calc.addDigit(btnValue); //Step06.1
        } else {
            console.log('Sinal: ', btnValue);            
        }
    });
});