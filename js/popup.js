/** 
 * 
 *  Arquivo responsável pelo popup contém funções necessárias para exibir o popup 
 *  e preenche-lo com as informações. Apenas utilizado na página: compras
 *  Funções presentes:
 *  parseURLParams(url)
 *  returnDataAtual()
 *  returnTroco()
 *  renderInfoPedidoPopUp()
 *
 *  Binding de Eventos:
 *  onclick => para exibir e ocultar o popup
 * 
*/

/*
    Atribuição de Eventos, para exibir ou ocultar o popup
*/
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0]; //retorna array por isso [0]

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/**
 * 
 * @param {String} url
 * @description 
 * Recebe uma url com parâmetros recebidos após o preenchimento do formulário.
 * E atribui os mesmos num objeto, atributos são preenchido de acordo
 * com os valores presentes na url.
 * @returns {Object} com atributos contendo os valores dos parâmetros 
 */
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

/**
 *
 * @returns {string}: com data formatada
 */
function returnDataAtual() {
    const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const date = new Date();
    const data = "Jundiaí, " + date.getDate() + " de " + month[date.getMonth()]
        + " de " + date.getFullYear();
    return data;
}

/**
 * 
 * @param {string} preco 
 * @param {string} pago
 * @description 
 * Retorna diferença entre os parâmetros,
 * tratando possíveis erros como vírgula ou ponto na String 
 * @returns {float}
 */
function returnTroco(preco, pago) {
    try {
        pago = pago[0].replace(",",".");
    } catch (error) {}
    let troco = parseFloat(pago) - parseFloat(preco);
    troco = Number(troco).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });
    return troco;
}

/**
 * @description 
 * Renderiza as informações do pedido no Pop up.
 * Caso os valores forem nulos ou indefinidos,
 * exibe que o pedido ainda não foi feito.
 */
function renderInfoPedidoPopUp() {
    const popupContent = document.querySelector(".modal-content");
    const info = parseURLParams(window.location.href); //função pra pegar os dados da url
    
    if (info != undefined && info.email != "") {
        const pedido = Math.floor(Math.random() * 10000);
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

renderInfoPedidoPopUp()