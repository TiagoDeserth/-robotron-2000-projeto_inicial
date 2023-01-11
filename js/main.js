//console.log('Oi')
//document.querySelector("#robotron").addEventListener("click", dizOi)

//const robotron = document.querySelector("#robotron")
//robotron.addEventListener("click", dizOi)

//function dizOi(nome) {
    //console.log(nome)
    //console.log("Bem-vindo ao Robotron 2000")
//}

//dizOi("Tiago")

//Função anônima
//robotron.addEventListener("click", function() {
    //console.log("Cliquei no robo")
//})
//robotron.addEventListener("click", (evento) => {
    //console.log("evento")
//})

//const subtrair = document.querySelector("#subtrair")
//const somar = document.querySelector("#somar")
//const braco = document.querySelector("#braco")

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
//console.log(estatistica)
//console.log(controle)

const pecas = {
    "bracos": {
        "forca": 900,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//controle.forEach( (elemento) => {
    //elemento.addEventListener('click', (evento) => {
        //manipulaDados(evento.target.textContent, evento.target.parentNode)
        //atualizaEstatistica(evento.target.dataset.controle)
    //})
//})

//function manipulaDados(operacao, controle) {
    //const peca = controle.querySelector("[data-contador]")

    //if(operacao === "-") {
        //peca.value = parseInd(peca.value) - 1
    //} else {
        //peca.value = parseInt(peca.value) + 1
    //}
//}

//controle.forEach( (elemento) => {
    //console.log(elemento)
//})

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        //console.log(evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

//somar.addEventListener("click", (evento) => {
    //braco.value = parseInt(braco.value) + 1
//})
//subtrair.addEventListener("click", (evento) => {
    //braco.value = parseInt(braco.value) - 1
//})

//somar.addEventListener("click", () => {manipulaDados("somar")})
//subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } 
    else {
        peca.value = parseInt(peca.value) + 1
    }    
}

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca])
    estatistica.forEach( (elemento) => {
        //console.log(elemento.dataset.estatisticas)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
