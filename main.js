
//Declarando variáveis
let numbers = []
let lastOperation = []
const result = document.getElementById('concatenatedNumber')

//Função limpar
cleanVisor = () => result.value = ""

//Exibe resultado no visor
showResult = (total) => result.value = total

//Número inserido pelo usuário
function insertNumber(eachNumber){            

    //Para limpar visor caso já exista um resultado sendo exibido
    if (lastOperation[1] != undefined ){cleanVisor(), lastOperation.shift()}

    //Concatena os números digitados
    concatenatedNumber.value += eachNumber
    userNumber = concatenatedNumber.value
    console.log(userNumber)}

//Cálculos
function calculate(symbols){

    console.log(symbols)
    lastOperation[0] = symbols
    lastOperation[1] = symbols

    cleanVisor();
    
    //Caso nenhum número seja inserido o valor no visor ficará o mesmo
    if (userNumber == ''){return false}

    //Alimenta visor últimos digitos
    previousNumbers.value += symbols + userNumber

    //Realizará os cálculos após o primeiro número ser inserido
    if(numbers[0] >= 0){
        numbers[1] = parseInt(userNumber)
        total = math(numbers[0], numbers[1],symbols)
        numbers[0] = total
        userNumber = ''
        console.log('Second Function',total)
        showResult(total)}

    //Primeira condição para inserir prmeiro número
    if(numbers[0] == undefined){
        numbers[0] = parseInt(userNumber)
        console.log("First function")
        cleanVisor()}
}

//Realiza o cálculo
function math(value1, value2,symbols){
    if (symbols == '+'){return total = value1 + value2}
    if (symbols == '-'){return total = value1 - value2}
    if (symbols == '*'){return total = value1 * value2}
    if (symbols == '/'){return total = value1 / value2}}

//Função armazém operação anterior
function operacanterior(){
    if (lastOperation[0] != undefined){
        strOperation = lastOperation[0]
        lastOperation.shift()
        console.log('function last operation:',strOperation)
    return calculate(strOperation)}}

//Limpar calculadora
function cleanValues(){ 
    numbers[0] = null
    numbers[1] = null 
    previousNumbers.value = null
    concatenatedNumber.value = null}