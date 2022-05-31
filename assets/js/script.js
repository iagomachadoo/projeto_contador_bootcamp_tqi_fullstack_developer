"use strict"

function pegarElemento(el){
    const ELEMENTO = document.getElementById(el)

    return ELEMENTO
}

function addEvento(el, evento, funcao){
    return el.addEventListener(evento, funcao)
}

function modificaEstilo(el, color){
    el.style.borderColor = color

    el.style.color = color
}

const OBJETO_ELEMENTOS = {
    valorInicial : pegarElemento('currentNumber'),
    elBtnIncremento: pegarElemento('btnIncrementar'),
    elBtnDecremento: pegarElemento('btnDecrementar'),
}

addEvento(OBJETO_ELEMENTOS.elBtnIncremento, 'click', increment)

addEvento(OBJETO_ELEMENTOS.elBtnDecremento, 'click', decrement)

let valorAtual = 0

const COR_HABILITADO = 'lightcoral'
const COR_DESABILITADO = 'gray'
const ATRIBUTO = 'disabled'

function increment(){
    valorAtual ++ 

    if(valorAtual >= 10){
        OBJETO_ELEMENTOS.elBtnIncremento.setAttribute(ATRIBUTO, ATRIBUTO)

        modificaEstilo(OBJETO_ELEMENTOS.elBtnIncremento, COR_DESABILITADO)
    }

    if(valorAtual >= 0){
        OBJETO_ELEMENTOS.elBtnDecremento.removeAttribute(ATRIBUTO)

        modificaEstilo(OBJETO_ELEMENTOS.elBtnDecremento, COR_HABILITADO)
    }
    
    OBJETO_ELEMENTOS.valorInicial.innerHTML = valorAtual
}

function decrement(){
    valorAtual -- 
    
    if(valorAtual < 10){
        OBJETO_ELEMENTOS.elBtnIncremento.removeAttribute(ATRIBUTO)

        modificaEstilo(OBJETO_ELEMENTOS.elBtnIncremento, COR_HABILITADO)

    }
    
    if(valorAtual < 0){
        OBJETO_ELEMENTOS.elBtnDecremento.setAttribute(ATRIBUTO, ATRIBUTO)

        modificaEstilo(OBJETO_ELEMENTOS.elBtnDecremento, COR_DESABILITADO)
    }

    OBJETO_ELEMENTOS.valorInicial.innerHTML = valorAtual
}