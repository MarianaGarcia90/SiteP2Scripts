/*
	Arquivo faz toda parte de validação dos formulários
	possuindo assim também funções auxiliares
	Funções Principais:
	enviarFormularioIndex(formDados)
	enviarFormularioComprar(formDados)

	Funções Auxiliares:
	verificaCheckBoxSabores(formDados) 
	verificaPagamentoDinheiro(formDados)
*/

/**
 * 
 * @param {Object} formDados
 * @description 
 * Valida todos os campos do formulário da página de Index
 * @return {Boolean} - válido ou inválido
 * @event onsubmit
 */
function enviarFormularioIndex(formDados) {
	if (formDados.nome.value == "") {
		alert("Digite um valor para o campo \"Nome\".");
		formDados.nome.focus();
		return false;
	}

	if (formDados.email.value == "") {
		alert("Digite um valor para o campo \"E-mail\".");
		formDados.email.focus();
		return false;
	}

	if (formDados.mensagem.value == "") {
		alert("Digite uma mensagem válida no campo \"Mensagem\".");
		formDados.mensagem.focus();
		return false;
	}
	alert("Mensagem enviada, em breve entraremos em contato.")
	return true;
}

/**
 * 
 * @param {Object} formDados
 * @description 
 * Envia e valida o formulário da página de Compras, verifica se 
 * todos os campos estão preenchidos corretamente e se as entradas são válidas
 * @return {Boolean} - válido : inválido
 * @event onsubmit
 */
function enviarFormularioComprar(formDados) {
	if (verificaCheckBoxSabores(formDados)) {
		alert("O campo \"Sabores\" não está selecionado!\n\nPor favor selecione um item no campo \"Sabores\".")
		formDados.sabores[0].focus();
		return false;
	}

	let modeloOk = false;
	for (let i = 0; i < formDados.modelo.length; i++) {
		if (formDados.modelo[i].checked)
			modeloOk = true;
	}

	if (!modeloOk) {
		alert("O campo \"Modelo\" não está selecionado!\n\nPor favor selecione um item no campo \"Modelo\".")
		formDados.modelo[0].focus();
		return false;
	}

	if (verificaPagamentoDinheiro(formDados)) {
		alert("Digite um valor válido no pagamento em dinheiro");
		return false;
	}

	if (formDados.nome.value == "") {
		alert("Digite seu \"Nome\".");
		formDados.nome.focus();
		return false;
	}

	if (formDados.email.value == "") {
		alert("Digite seu \"E-mail\".");
		formDados.email.focus();
		return false;
	}

	if (formDados.mensagem.value == "") {
		alert("Digite uma mensagem com especificações \"Mensagem\".");
		formDados.mensagem.focus();
		return false;
	}

	let comboPag = document.getElementById("options");
	if (comboPag.options[comboPag.selectedIndex].value == "hide1") {
		alert("O campo \"Pagamento\" não está selecionado!\n\nPor favor selecione um item no campo \"Forma de pagamento\".")
		formDados.pagamento.focus();
		return false;
	}

	alert("Pedido feito!");
	return true;
}

/**
 * @param {Object} formDados
 * @description 
 * Verifica se no mínimo um checkbox foi selecionado
 * @returns {Boolean} = checked : not checked 
 */
function verificaCheckBoxSabores(formDados) {
	for (let i = 0; i < formDados.sabor.length; i++) {
		const element = formDados.sabor[i];
		if (element.checked) {
			return false;
		}
	}
	return true;
}

/**
 * 
 * @param {Object} formDados
 * @description 
 * Verifica se o valor em dinheiro inserido é um maior ou igual preço.
 * E checa se foi inserido letras.
 * @returns {Boolean} = válido : inválido
 */
function verificaPagamentoDinheiro(formDados) {
	/* 
		Feita multiplicação por 1000, pois o value é no formato de moeda
	 	e quando convertido fica 1,200 (decimal)
	*/
	const totalPagar = parseFloat(formDados.total.value) * 1000;
	const inputVisibility = document.querySelector("#hiddenDiv").style.visibility;
	let valorPagamento;

	if (inputVisibility != "hidden") {
		try {
			valorPagamento = parseFloat(formDados.valor.value);
		} catch (error) {
			return true;
		}
		// Operador Ternário
		return (valorPagamento >= totalPagar) ? false : true;
	}
	return false;
}
