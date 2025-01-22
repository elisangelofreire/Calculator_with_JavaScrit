//Selecionando os elementos do html:
const previousOperandTextElement = document.querySelector('#previous-operand');
const currentOperandTextElement = document.querySelector('#current-operand');
const numberButtons = document.querySelectorAll('#buttons-container button');

//Criando a classe Calculator:
class Calculator {

}

//Criando os eventos dos buttons para pegar os seus valores, no caso, numeros e sinais:
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const number = e.target.innerText;
        console.log(number);
    })
})