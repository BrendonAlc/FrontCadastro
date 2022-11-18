import { valida } from './validacao.js' //importando a função valida do arquivo validacao.js

//Função para validar os campos preenchidos
const inputs = document.querySelectorAll('input')


//Função para validar os campos preenchidos
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})
