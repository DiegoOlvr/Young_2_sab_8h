// IDENTIFICAR OS ELENTOS
const DIAS_EL = document.querySelector('.dias')
const HORAS_EL = document.querySelector('.horas')
const MINUTOS_EL = document.querySelector('.minutos')
const SEGUNDOS_EL = document.querySelector('.segundos')

// DEFINIR UMA DATA
const DATA_NIVER = '30 June 2024'

// LÓGICA PARA MOSTRAR A DIFERENÇA ENTRE DATAS
function contagem() {
    const DATA_FORMATADA = new Date(DATA_NIVER)
    const DATA_ATUAL = new Date()
    const TOTAL_SEGUNDOS = (DATA_FORMATADA - DATA_ATUAL) / 1000
    console.log(TOTAL_SEGUNDOS)

    // OBTER OS VALORES
    let dia = Math.floor(TOTAL_SEGUNDOS / 3600 / 24)
    let horas = Math.floor(TOTAL_SEGUNDOS / 3600) % 24
    let minutos = Math.floor(TOTAL_SEGUNDOS / 60) % 60
    let segundos = Math.floor(TOTAL_SEGUNDOS) % 60

    // MOSTRAR VALORES NO CONSOLE
    console.log(dia, horas, minutos, segundos)

    // INSERIR VALORES NOS ELEMENTOS
    DIAS_EL.innerHTML = dia
    HORAS_EL.innerHTML = horas
    MINUTOS_EL.innerHTML = minutos
    SEGUNDOS_EL.innerHTML = segundos
}

// INICIA A FUNÇÃO
contagem()

// COMO ATUALIAR A PAGINA SEGUNDO A SEGUNDO
// FORMATAR AS CASAS PARA TEREM NO MÍNIMO 2 DIGITOS
// TORNAR DINÂMICO A DATA ALVO
