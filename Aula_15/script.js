const CEP = document.querySelector('input-cep')
const UF = document.querySelector('input-uf')
const CIDADE = document.querySelector('input-cidade')
const LOGRADOURO = document.querySelector('input-logradouro')
const NUMERO = document.querySelector('input-numero')
const BAIRRO = document.querySelector('input-bairro')
const BOTAO = document.querySelector('botao')
const FORM = document.querySelector('conteiner-conteudo')



const buscar_cep = async (cep) => {
    resposta = await fetch(` https://cep.awesomeapi.com.br/json/${cep}`)
    if (resposta.status === 200) {
        const info = resposta.json()
        return info
    }
}

const mostrar_info = async (cep) => {
    const json_cep = await buscar_cep(cep)
    if (json_cep) {
        UF.value = json_cep['state']
    }
}