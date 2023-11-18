const QUESTOES_QUIZ = [
    {
        questao: 'Melhor professor?',
        a: 'Daniel',
        b: 'Rodrigo',
        c: 'Diego',
        d: 'Arthur',
        correta: 'c'
    },
    {
        questao: 'Qual a melhor guilda de ravnica?',
        a: 'Boros',
        b: 'Golgari',
        c: 'Dimir',
        d: 'Azorius',
        correta: 'd'
    },
    {
        questao: 'Qual o meu main no lol?',
        a: 'Vi',
        b: 'Ziggs',
        c: 'Volibear',
        d: 'Xayah',
        correta: 'b'
    },
    {
        questao: 'Quem ganhou a copa de 1950?',
        a: 'Uruguai',
        b: 'Brasil',
        c: 'Argentina',
        d: 'Alemanha',
        correta: 'a'
    },
    {
        questao: 'Franquia com mais títulos na NBA?',
        a: 'Lakers e Celtics',
        b: 'Nicks e Celtics',
        c: 'Lakers e Warrios',
        d: 'Warrios e Bulls',
        correta: 'a'
    },
]

// identificando elementos
const TITULO_QUIZ = document.querySelector('.titulo-questao')
const ALTERNATIVA_A = document.getElementById('texto-a')
const ALTERNATIVA_B = document.getElementById('texto-b')
const ALTERNATIVA_C = document.getElementById('texto-c')
const ALTERNATIVA_D = document.getElementById('texto-d')
const BOTAO = document.getElementById('enviar')
const RESPOSTAS = document.querySelectorAll('.resposta')
const CONTEINER_QUIZ = document.querySelector('.conteiner-quiz')

// variaveis importantes
let questao_atual = 0
let qtd_corretas = 0

// iniciar quiz
// mostrar questões 
function carregar_questoes() {
    const QUESTAO = QUESTOES_QUIZ[questao_atual]
    TITULO_QUIZ.innerHTML = QUESTAO.questao
    ALTERNATIVA_A.innerHTML = QUESTAO.a
    ALTERNATIVA_B.innerHTML = QUESTAO.b
    ALTERNATIVA_C.innerHTML = QUESTAO.c
    ALTERNATIVA_D.innerHTML = QUESTAO.d
}

carregar_questoes()


// click do botão