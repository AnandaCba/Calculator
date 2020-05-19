//Declarando vetor(array).
var arr = []
 //Função para limpar a caixa de número ao clicar na operação desejada
 function limpar(){
    // .VALUE para inserir um valor igual a "nada" e limpar
    document.getElementById('num').value = ""
}
// Array para armazenar o botão que foi clicado pelo user
var callnum = []
    // Cada função declarada no onlcick do determinado botão no HTML
    numb(0),
    numb(1),
    numb(2),
    numb(3),
    numb(4),
    numb(5),
    numb(6),
    numb(7),
    numb(8),
    numb(9),
    /* Chama a função limpar */
    limpar()
// Função implementada para chamar o número clicado e inserir na caixa de número 
function numb(callnum){
    for(c = 0 ; c <= 9; c++ )
        /* Se o botão apertado ex: numb(3) for igual ao contador (uma hora ele vai chegar no valor do botão)
            Então adiciona na caixa de número o valor do contador */
        if( callnum == c){
            var n = c
        }
        //If para limpar depois de clicar na operação e escolher o number
        // arr[0] serve como gatilho para saber se deve ou não limpar
        if(arr[0] > 0){
            limpar()
            arr[0]=0
        }
    // '+=' para contatenar os numbers e não entrar apenas um valor por vezverificar o valor do INPUT
    num.value += n
}
// Array para armazenar aultima operação
var funcanterior = []
//Função (ADIÇÃO)
function plus(){
    //Armazena essa função para quando usar o '=' puxar qual operação o user queria
    funcanterior[0] = "plus"
    // Caso nada seja inserido no input a função envia um alerta e para a execução com o comando 'return'. 
    if (document.getElementById('num').value == ''){
        return 
    }
    //Verificando se o array está vazio , nessa caso o array[1] não vai ter valor definido ainda
    if (arr[1] == undefined){
        var num = parseInt(document.getElementById('num').value)
        // dou um 'push' porém em um local especifico do array pois será usado posteiormente
        arr[1] = num
        //gatilho para limpar a caixa de number array[0]
        arr[0] = 1
        //Verificando se o valor está correto
        console.log(`Primeiro ${arr[1]}`)
        /* Envio para caixa de resposta o resultado (apenas no primeiro caso o valor inserido no input sem conta alguma)
            Pois até esse momento só foi passado um valor */
    }else{
        /* Caso o user já tenha feito um input uso a função array.length para verificar quantos
            elementos estão dentro do vetor, se for igual a 1 (Nesse caso vai ser proposital) então sigo com a operação*/
        if(arr.length >= 1){
            // Atribuo o valor o array[1] para 'result
            var result = arr[1]
            // Verificando
            console.log(`Segundo (Armazém anterior) ${arr[1]}`)
            /* O User vai inserir o proxímo valor para realizar qualquer operação, nessa hora substituo o valor que está no
                array [0] pelo valor que o user acabou de inserir */
            var num = parseInt(document.getElementById('num').value)
            arr[1] = num
            // Verificando
            console.log(`Terceiro (input) ${arr[1]}`)
            var res = result + arr[1]
            // Verificando o valor no NODE.JS
            console.log(`Quarto (Soma) ${res}`)
            //Apresento o resultado ao User
            var result = document.getElementById('num')
            result.value = res
            // Aqui armazeno o valor do resultado
            arr[1] = res
            //Gatilho para limpar caixa de number
            arr[0] = 1
            // Verificando
            console.log(`Quinto (Guardar) ${arr[1]}`)
            /* A sacada é a substituição dos valores no momento certo para ser rotativa as variaveis
                assim sempre que for adicionados novos valores a função consegue calcular com base
                nos valores já somados antes*/
        }
    }
}
    /*A partir daqui o código se repete, a diferença está nos sinais das operações
     como as variaveis servem para todo o projeto então o que for registrado na operações 
     seja ela qual for vai servir para as próximas.*/
//Função (SUBTRAÇÃO)
function minus (){
    funcanterior[0] = "minus"
    if (document.getElementById('num').value == ''){
        return 
    }
    if (arr[1] == undefined){
        var num = parseInt(document.getElementById('num').value)
        arr[1] = num
        arr[0] = 1
        console.log(`Primeiro ${arr[1]}`)
    }else{
        if(arr.length >= 1){
            var result = arr[1]
            console.log(`Segundo (Armazém anterior) ${arr[1]}`)
            var num = parseInt(document.getElementById('num').value)
            arr[1] = num
            console.log(`Terceiro (input) ${arr[1]}`)
            var res = result - arr[1]
            console.log(`Quarto (Soma) ${res}`)
            var result = document.getElementById('num')
            result.value = res
            arr[1] = res
            arr[0] = 1
            console.log(`Quinto (Guardar) ${arr[1]}`) 
        }
    }
}  
    //Função (MULTIPLICAÇÃO)
function multi(){
    funcanterior[0] = "multi"
    if (document.getElementById('num').value == ''){
        return 
    }
    if (arr[1] == undefined){
        var num = parseInt(document.getElementById('num').value)
        arr[1] = num
        arr[0] = 1
        console.log(`Primeiro ${arr[1]}`)
    }else{
        if(arr.length >= 1){
            var result = arr[1]
            console.log(`Segundo (Armazém anterior) ${arr[1]}`)
            var num = parseInt(document.getElementById('num').value)
            arr[1] = num
            console.log(`Terceiro (input) ${arr[1]}`)
            var res = result * arr[1]
            console.log(`Quarto (Soma) ${res}`)
            var result = document.getElementById('num')
            result.value = res
            arr[1] = res
            arr[0] = 1
            console.log(`Quinto (Guardar) ${arr[1]}`) 
        }
    }
}
    //Função (DIVISÃO)
function divi(){
    funcanterior[0] = "divi"
    if (document.getElementById('num').value == ''){
        return 
    }
    if (arr[1] == undefined){
        var num = parseInt(document.getElementById('num').value)
        arr[1] = num
        arr[0] = 1
        console.log(`Primeiro ${arr[1]}`)
    }else{
        if(arr.length >= 1){
            var result = arr[1]
            console.log(`Segundo (Armazém anterior) ${arr[1]}`)
            var num = parseInt(document.getElementById('num').value)
            arr[1] = num
            console.log(`Terceiro (input) ${arr[1]}`)
            var res = result / arr[1]
            console.log(`Quarto (Soma) ${res}`)
            var result = document.getElementById('num')
            result.value = res
            arr[1] = res
            arr[0] = 1
            console.log(`Quinto (Guardar) ${arr[1]}`) 
        }
    }
}
function operacanterior(){
    var armaz = funcanterior[0]
    console.log(`Função armazenada:"${armaz}"`)
    if(armaz == "plus"){
        plus()
        arr.pop()
    }
    if(armaz == "minus"){
        minus()
        arr.pop()
    }
    if(armaz == "multi"){
        multi()
        arr.pop()
    }
    if(armaz == "divi"){
        divi()
        arr.pop()
    }
}