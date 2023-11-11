var setadireita = window.document.getElementById("setaDireita")
var leonardo = window.document.getElementById("card1")
var samantha = window.document.getElementById("card2")
var bruna = window.document.getElementById("card3")
var setaesquerda = window.document.getElementById("setaEsquerda")

function rolarparadireita() {
    card1.style = "display:none"
    card3.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
    
}

function rolarparaesquerda() {
    card3.style = "display:none"
    card1.style = "diplay:flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"

}