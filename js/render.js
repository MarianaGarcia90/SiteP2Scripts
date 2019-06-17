/*
	Arquivo destinado para funções que renderizam informações ou objetos
	na tela ou atribuem eventos para removeção dessas.

	Funções:
	deleteContentOnMouseOut()
	updateTotalInputCompras()
	optionCheck()
	renderSaboresBolos(i)
	renderModelosBolos(i)
	renderFooter()

	Funções Auxiliar (não renderizam, porém formatam a informação)
	formatCurrency(num)
*/


const content = document.getElementById("content");

// Executada 
function start() {
	deleteContentOnMouseOut();
	updateTotalInputCompras();
}

/**
 * 
 * @description
 * Atribui evento mouseout aos elementos que apaga o conteúdo
 * do content nas páginas de modelos e sabores
 */
function deleteContentOnMouseOut() {
	try {
		let article = document.getElementsByTagName("article");
		for (let i = 0; i < article.length; i++) {
			article[i].onmouseleave = function removerTexto() {
				content.innerHTML = "";
			};
		}
	} catch (error) { }
}

/**
 * 
 * @description
 * Atribui evento change na seleção dos produtos
 * é feito a somatória e inserido no Total A Pagar
 */
function updateTotalInputCompras() {
	try {
		const form = document.forms[0];
		const inputs = form.querySelectorAll('input[type=checkbox],input[type=radio]');
		// iterar todos os inputs
		for (let i = 0; i < inputs.length; i++) {
			// vincular função ao evento "change"
			inputs[i].addEventListener('change', function () {
				let soma = 0;
				for (let j = 0; j < inputs.length; j++) {
					if (inputs[j].checked) {
						// interpreta como float, usando parseFloat ao invés de eval
						soma += parseFloat(inputs[j].value);
					}
				}
				form.hiddentotal.value = soma; // atribui valor ao campo oculto
				form.total.value = formatCurrency(soma) // exibe valor formatado
			}, false);
		}
	} catch (error) { }
}

/**
 * 
 * @param {float} num
 * @description
 * Formata o número para o padrão de moeda
 * @returns {String} 
 */
function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g, '');
	if (isNaN(num)) num = "0";
	cents = Math.floor((num * 100 + 0.5) % 100);
	num = Math.floor((num * 100 + 0.5) / 100).toString();
	if (cents < 10) cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
		num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
	return ("" + num + "," + cents);
}


/**
 * 
 * @description
 * Renderiza na página a data atual e formatada
 * Sendo chamada no final do arquivo
 */
function renderDataAtual() {
	const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
		"julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
	const date = new Date();
	let data = `<h3> Jundiaí, ${date.getDate()} de ${month[date.getMonth()]} de ${date.getFullYear()} </h3>`;
	document.write(data)
}

/**
 * 
 * @description 
 * Exibe ou Oculta campo para entrada do pagamento em dinheiro
 * @event onchange
 */
function optionCheck() {
	var option = document.getElementById("options").value;
	if (option == "show") {
		document.getElementById("hiddenDiv").style.visibility = "visible";
	}
	if (option == "hide") {
		document.getElementById("hiddenDiv").style.visibility = "hidden";
	}
	if (option == "hide1") {
		document.getElementById("hiddenDiv").style.visibility = "hidden";
	}
}

/**
 * 
 * @param {Integer} i 
 * @description 
 * Renderiza frase de acordo com o índice do bolo
 * @event onmouseover
 */
function renderSaboresBolos(i) {

	switch (i) {
		case 1:
			content.innerHTML = "<h2>Massa “dark chocolate” recheada de mousse de chocolate.</h2>";
			break;
		case 2:
			content.innerHTML = "<h2>Delicado pão de ló recheado e com chantilly doce e pedaços frescos de morango.</h2>";
			break;
		case 3:
			content.innerHTML = "<h2>Deliciosa Massa Aerada branca com Recheio de Doce de Leite, açúcar e canela.</h2>";
			break;
		case 4:
			content.innerHTML = "<h2>Pão de ló recheado com mousse de limão com marshmallow e raspas de limão.</h2>";
			break;
		case 5:
			content.innerHTML = "<h2>Delicioso bolo branco recheado com doce de leite e Nozes.</h2>";
			break;
		case 6:
			content.innerHTML = "<h2>Massa de pão de ló, com recheio de brigadeiro branco e frutas vermelhas da estação.</h2>";
			break;
		case 7:
			content.innerHTML = "<h2>Pão de ló molhadinha, recheada com mousse de leite ninho.</h2>";
			break;
		case 8:
			content.innerHTML = "<h2>Pão de ló de chocolate molhadinho, recheado com doce de coco.</h2>";
			break;
		case 9:
			content.innerHTML = "<h2>Pão de ló recheado com Nutela e castanhas.</h2>";
			break;
		case 10:
			content.innerHTML = "<h2>Bolo pão-de-ló de chocolate, com recheio de brigadeiro de Oreo com pedaços.</h2>";
			break;
		case 11:
			content.innerHTML = "<h2>Pão de ló Veludo Vermelho, com recheio de cream cheese com chocolate branco.</h2>";
			break;
		case 12:
			content.innerHTML = "<h2>Pão de ló com biscoitos. Recheio a escolher.</h2>";
			break;

		default:
			console.log(i)
			break;
	}
}

/**
 * 
 * @param {Integer} i 
 * @description Renderiza frase de acordo com o índice do bolo
 * @event onmouseover
 */
function renderModelosBolos(i) {
	let content = document.getElementById("content");
	switch (i) {
		case 1:
			content.innerHTML = `
					<h2>
						Ficam super chic quando misturados às outras tendências,
						adicionando texturas e cor em camadas do bolo.
					</h2>"`;
			break;
		case 2:
			content.innerHTML = `
					<h2>
						Versáteis, elas dão o toque da estação do ano em que o casamento acontece.
						Começaram a ser usadas nos naked cakes e estão ganhando cada vez mais 
						destaque com cobertura cremosa ou pasta americana.
					</h2>`;
			break;
		case 3:
			content.innerHTML = `
					<h2>
						Por serem super pessoais, únicos e com a cara dos noivos, 
						os bolos escritos estão cada vez mais populares.
					</h2>`;
			break;
		case 4:
			content.innerHTML = `
					<h2>
						Pode parecer simples, mas babados são com certeza um dos 
						projetos mais complicados para um decorador do bolo. 
						Eles se assemelham às saias dos vestidos de noiva e dão ao bolo
						de casamento uma aparência chic e elegante.
					</h2>`;
			break;
		case 5:
			content.innerHTML = `
					<h2>
						É difícil errar quando se escolhe um bolo todo branco. 
						Tradicional e sempre de bom gosto, dá para dar um ar mais contemporâneo 
						e abusar de diferentes dimensões adicionando texturas, rendas, filigranas, 
						cascatas de flores naturais ou de açúcar, babados, pintura ou cobertura cremosa. 
					</h2>`;
			break;
		case 6:
			content.innerHTML = `
					<h2>
						As suculentas já começaram a ser usadas no decor de casamentos faz um certo tempo. 
						Não demorou muito para que elas migrassem para os bolos para complementar o look do evento.
					</h2>`;
			break;
		case 7:
			content.innerHTML = `
					<h2>
						Flores de açúcar para decorar bolos para casamento são um clássico atemporal. 
						Assim como bolos brancos, é extremamente difícil errar ao se escolher decorar 
						um bolo com flores naturais.
					</h2>`;
			break;
		case 8:
			content.innerHTML = `
					<h2>
						Mais e mais vemos coberturas cremosas em bolos para casamento. 
						Ideal se vocês querem um tom mais descontraído e informal em sua festa.
					</h2>`;
			break;
		case 9:
			content.innerHTML = `
					<h2>
						Um sucesso em artigos de papelaria para casamento, 
						os metálicos trazem ao bolo o mesmo glamour hollywoodiano.
					</h2>`;
			break;
		case 10:
			content.innerHTML = `
					<h2>
						No lugar de um só bolo em camadas, muitos casais estão optando por 
						vários bolos de casamento menores que ficam expostos em conjunto, 
						deixando assim a mesa de doces visualmente deslumbrante na recepção. 
						Trios, quartetos ou quintetos tem grandes benefícios. 
						O casal não precisa brigar na escolha do sabor, 
						pois os bolos podem ter diferentes combinações. 
					</h2>`;
			break;
		case 11:
			content.innerHTML = `
					<h2>
						Com certeza ninguém mais vai ter um bolo igual ao que você escolheu. 
						Essa tendência começou com os bolos de chalkboard e seus desenhos 
						que vão de monogramas à poemas bem rebuscados.
					</h2>`;
			break;
		case 12:
			content.innerHTML = `
					<h2>
						Não demorou muito para que a tendência de unhas, cabelos e passarelas 
						chegasse também aos eventos sociais, principalmente os casamentos. 
						A vantagem dos bolos ombré é poder abusar da paleta de cores do seu evento, 
						mas tente limitar-se à 3 delas.
					</h2>`;
			break;
		default:
			console.log(i)
			break;
	}
}

/**
 * @description 
 * Renderiza o rodapé na tag footer, 
 * emitindo um erro caso a mesmo não tenha sido encontrada.
 */
function renderFooter() {
	let footer = document.getElementsByTagName("footer")[0];
	if (footer != null ) {
		footer.innerHTML = `
				<div class="conteudo ">
					<p>&copy; 2019 - Mari's Wedding Cake - Seu bolo com carinho</p>
					<ul class="social">
						<li>
							<a href="#" title="Twitter" target="_blank">
								<img src="img/twitter.png" title="Twitter" alt="Twitter">
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/mariana.alcantaragarcia" title="Facebook" target="_blank">
								<img src="img/facebook.png" title="Facebook" alt="Facebook">
							</a>
						</li>
					</ul>
				</div>`;
	} else {
		console.warn("Tag Footer não foi encontrada");
	}
}

renderDataAtual();
renderFooter();
start();
