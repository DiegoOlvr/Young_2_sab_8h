// COMENTÁRIO

/**
 * COMENTÁRIO
 * DE
 * MULTIPLAS
 * LINHAS 
 */

// TIPOS DE DADOS
/**
 * NUMBER => int float NaN 
 * STRING => texto
 * BOOLEAN => true false
 * NULL => vazio
 * UNDEFINED => não tem definição 
 */

/**
 * # CONVERTER TIPOS
 * var = 4
 * De número para string
 * var.toString()
 * 
 * De string para número
 * parseInt(var)
 */

/**
 * # OPERADORES ARITMÉTICOS
 * + ADIÇÃO
 * - SUBTRAÇÃO
 * * MULTIPLICAÇÃO
 * / DIVISÃO
 * % RESTO DA DIVISÃO
 * ** POTENCIA
 */

/**
 * # OPERADORES RELACIONAIS
 * > MAIOR QUE
 * < MENOR QUE
 * >= MAIOR OU IGUAL QUE
 * <= MENOR OU IGUAL QUE
 * == IGUALDADE
 * === SE OS TIPOS SÃO IGUAIS
 * != DIFERENTE
 */

/**
 * # OPERADORES LÓGICOS
 * '!  NÃO - NEGAÇÃO
 * '&& E - CONJUNÇÃO
 * '|| OU - DISJUNÇÃO
 */


/**
 * # VARIÁVEIS
 * VAR   = vc pode redefinir - escopo global
 * LET   = vc não pode redefinir - escopo local
 * CONST = constante, uma informação que vc não irá mudar
 */

/**
 * # ARRAY   = LISTAS
 * # OBJETOS = DICIONÁRIO
 * # JSON => JAVASCRIPT OBJECT NOTATION {chave: valor}
 * 
 * Para saber o tipo de algum dado
 * 
 * ! typeof()
 */

/**
 * # FUNÇÕES
 * function nome_da_função(parametros){
 *     comandos
 *     return alguma_coisa
 * }
 */

/**
 * # CONDICIONAIS
 * IF (CONDIÇÃO1){
 *    PLANO A
 * }ELSE IF (CONDIÇÃO2){
 *    PLABO B
 * }ELSE {
 *    PLANO RESTO
 * }
 */

/**
 * # LOOP
 * for i in range(10)
 * for (let i = 1; i < 11; i++){
 *     o que tem que ser repetido
 * }
 */

// document.getElementById('titulo').innerHTML = 'Bom dia'
// document.write(5 + 5)
// console.log('Teste 123')

// let resposta = window.prompt('Digite um numero')
// console.log(resposta)
// document.write(resposta)

// let resposta = window.prompt('Digite um numero')
// let num = resposta % 2

// if (num == 0) {
//     document.write('É par!')
// } else {
//     document.write('impar')
// }


// // pedi dois numeros e mostra a soma
// let n1 = parseInt(window.prompt('Digite um número'))
// let n2 = parseInt(window.prompt('Digite um número'))
// document.write(n1 + n2)



/**
// fazer uma tabuada, pedir 1 números e ele será a tabuada que vc deverá mostar
5

 * 5 x 1 = 5
 * 5 x 2 = 10
 */


let valor = parseInt(window.prompt('Digite um número: '))

for (let i = 1; i < 11; i++){
    document.write(`${valor} X ${i} = ${valor*i}, `)
}