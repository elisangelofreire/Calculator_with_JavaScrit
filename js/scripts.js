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
        //Step06.4: condição para o número não ter mais de um ponto de decimal:
        if (digit === '.' && this.currentOperationTextElement.innerText.includes('.')) {
            return
        };

        this.currentOperation = digit; //Step06.2 pra saber qual digito foi digitado

        this.updateScreen(); //Step06.3: Atualizando o screen da calculadora:
    }

    //Step07: método para operações de cálculo:
    processOperation(operation) {
        //Step07.6: mudando de operação se o currentValue estiver vazio:
        if(this.currentOperationTextElement.innerText === '' && operation !== 'C'){ //Step07.9.2
            //mudança de operação
            if(this.previousOperationTextElement.innerText !== ' '){
                this.changeOperation(operation); //ver método criado em baixo Step07.6.1
            }
            return;
        }
        //Step07.1: Pegando os valores current e previous:
        let operationValue;
        const previousValue = +this.previousOperationTextElement.innerText.split(' ')[0]; //o + antes da variável converte a string em número
        const currentValue = +this.currentOperationTextElement.innerText; //o + antes da variável converte a string em número
        
        //Step07.3: Verificando qual operação foi escolhida:
        switch (operation) {
            case '+':
                operationValue = previousValue + currentValue; //Step07.3.2: operação de soma
                this.updateScreen(operationValue, operation, currentValue, previousValue); //Step07.3.3: atualizando o screen da calculadora
                break;
            
            case '-':
                operationValue = previousValue - currentValue; //Step07.3.4: operação de subtração
                this.updateScreen(operationValue, operation, currentValue, previousValue);
                break;

            case '/':
                operationValue = previousValue / currentValue; //Step07.3.4: operação de divisão
                this.updateScreen(operationValue, operation, currentValue, previousValue);
                break;
        
            case '*':
                operationValue = previousValue * currentValue; //Step07.3.4: operação de multiplicaçã
                this.updateScreen(operationValue, operation, currentValue, previousValue); 
                break;
            //Step07.7: tecla DEL
            case 'DEL':
                this.processDelOperator(); // criado em baixo Step07.7.1
                break;
            //Step07.8: tecla CE
            case 'CE':
                this.processClearCurrentOperator(); // criado embaixo Step07.8.1
                break;
            //Step07.9: tecla C
            case 'C':
                this.processClearAllOperator(); // criado embaixo Step07.9.1
                break;
            //Step07.10: tecla =
            case '=':
                this.processEqualOperator(); // criado embaixo Step07.10.1
                break;
            default:
                return; //caso não seja nenhuma operação válida, o método para aqui
        }
    }


    //Step06.4: Criando a lógica do método para atualizar o screen da calculadora que será chamado em várias partes do código:
    updateScreen(
        //Step07.3.1: implementando os parâmetros do método:
        operationValue = null,
        operation = null,
        currentValue = null,
        previousValue = null
    ) {
        if(operationValue === null) { //Step7.3.4.
            this.currentOperationTextElement.innerText += this.currentOperation; //Step06.4.1ª atualização
        }else{
            //verficar se o valor é zero para apenas mostrar o valor atual:
            if(previousValue === 0){
                operationValue = currentValue;
            }
            //adicionando o currentValue para o previousValue:
            this.previousOperationTextElement.innerText = `${operationValue} ${operation}`;
            this.currentOperationTextElement.innerText = ''; //para zera o valor atual
        }
        
}

//Step07.6.1: método de mudança de operações math:
changeOperation(operation){
    const mathOperations = ['*', '/', '+', '-'];

    if(!mathOperations.includes(operation)){
        return; //para parar caso não seja introduzido operation math
    }

    this.previousOperationTextElement.innerText = this.previousOperationTextElement.innerText.slice(0,-1) + operation;
}

//Step07.7.1: método de DEL: apaga o último digito de currentValue screen
processDelOperator(){
    this.currentOperationTextElement.innerText = this.currentOperationTextElement.innerText.slice(0, -1);
}

//Step07.8.1: mẽtodo de CE: apaga o valor current
processClearCurrentOperator(){
    this.currentOperationTextElement.innerText = ' ';
}

//Step07.9.1: método de C que apaga todos os valores previous e currentValue do screen
processClearAllOperator(){
    this.currentOperationTextElement.innerText = ' ';
    this.previousOperationTextElement.innerText = ' ';
}

//Step07.10.1: método de = que realiza a operação 
processEqualOperator(){
    const operation = previousOperationTextElement.innerText.split(' ')[1]; //split para pegar a segunda parte da operação
    this.processOperation(operation);
};

} // end class Calculator

//Step05: instanciando a classe Calculator:
const calc = new Calculator(previousOperationTextElement, currentOperationTextElement);

//Step03: Criando os eventos dos buttons para pegar os seus valores, no caso, numeros e sinais:
buttons.forEach((btn) => {
    //Step03.1: Com o evento click, pegamos o valor do button clicado para futura operação:
    btn.addEventListener('click', (e) =>{
        const btnValue = e.target.innerText;
        
        //Step03.2: Verificando se o valor é um número ou um sinal:
        if (+btnValue >= 0 || btnValue === '.') { //o + antes da variável btnValue converte a string em número
            //console.log(btnValue);
            calc.addDigit(btnValue); //Step06.1
        } else {
            //console.log('Sinal: ', btnValue);
            calc.processOperation(btnValue); //Step07.1           
        }
    });
});