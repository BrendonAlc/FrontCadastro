import { valida } from './validacao.js' //importando a função valida do arquivo validacao.js

//Função para validar os campos preenchidos
const inputs = document.querySelectorAll('input')


//Função para validar os campos preenchidos
inputs.forEach(input => {
    if(input.dataset.tipo === 'preco'){
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$', //o que virá antes do valor
            suffix: '', //o que virá depois do valor
            fixed: true, //se terá casas decimais
            fractionDigits: 2, //quantas casas decimais terá
            decimalSeparator: ',', //separador decimal
            thousandsSeparator: '.', //separador de milhar
            cursor: 'end' //onde o cursor ficará posicionado
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})
