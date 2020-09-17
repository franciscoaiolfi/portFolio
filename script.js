// JS USADO PARA O MENU
var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})
// ESTUDAR TODAS ESSAS QUESTÕES DE MEDIAS PARA VALORES-----JS USADO PARA O ORÇAMENTO
function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 80;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 300
    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

// JS BASICO, REVER TUDO QUE FOI UTILIZADO NESSA CONSTRUÇÃO.
