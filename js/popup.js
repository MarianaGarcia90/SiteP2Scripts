/*
    Arquivo responsável pelo popup
    contém funções necessárias para exibir o popup 
    e preenche-lo com as informações
    Apenas utilizado na página: compras

    Funções presentes:
    parseURLParams(url)
    returnDataAtual()
    returnTroco()
    renderInfoPedidoPopUp()
    
    Eventos:
    onclick => para exibir e ocultar o popup
*/

const modal = document.getElementById("myModal");


// Recebe os parâmetros da url
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function returnDataAtual() {
    const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const date = new Date();
    let data = "Jundiaí, " + date.getDate() + " de " + month[date.getMonth()]
        + " de " + date.getFullYear();
    return data;
}


function returnTroco(preco, pago) {
    try {
        pago = pago[0].replace(",",".");
    } catch (error) {}
    let troco = parseFloat(pago) - parseFloat(preco);
    troco = Number(troco).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });
    return troco;
}

function renderInfoPedidoPopUp() {
    const popupContent = document.querySelector(".modal-content");
    const info = parseURLParams(window.location.href);
    console.log(info)
    
    if (info != undefined && info.email != "") {
        let pedido = Math.floor(Math.random() * 10000);
        let conteudo = `<h4>Senhor(a) ${info.nome} seu pedido foi enviado com sucesso.</h4>
                        <p>Pedido: ${pedido}</p>
                        <p>Valor: R$${info.hiddentotal},00</p>`

        if (info.pagamento == "show") {
            conteudo += `<p>Troco: ${returnTroco(info.hiddentotal, info.valor)} </p>`;
        }

        conteudo += `<p>Email: ${info.email} </p>
                    <p>Mensagem: ${info.mensagem} </p>
                    <p> ${returnDataAtual()} </p>`;
        popupContent.innerHTML = conteudo;

    } else {
        popupContent.innerHTML = `<h4>Pedido ainda não foi feito!</h4>`
    }
}
// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

renderInfoPedidoPopUp()