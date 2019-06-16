// Pag Index
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
		alert("Digite um valor para o campo \"Mensagem\".");
		formDados.mensagem.focus();
		return false;
	}
	alert("Mensagem enviada, em breve entraremos em contato.")
	return true;
}

// Pag Comprar
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
	alert("Dados OK")
	return true;
}

// Mostra o campo do valor em dinheiro
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

//Verifica elemento checado
function verificaCheckBoxSabores(formDados) {
	for (let i = 0; i < formDados.sabor.length; i++) {
		const element = formDados.sabor[i];
		if (element.checked) {
			return false;
		}
	}
	return true;
}

//Verifica valor inserido no pagamento
function verificaPagamentoDinheiro(formDados) {
	// Feita multiplicação por 1000, pois o value é no formato de moeda
	// e quando convertido fica 1,200 (decimal)
	const totalPagar = parseFloat(formDados.total.value) * 1000;
	const inputVisibility = document.querySelector("#hiddenDiv").style.visibility;
	let valorPagamento;
	if (inputVisibility != "hidden") {
		try {
			valorPagamento = parseFloat(formDados.valor.value);
		} catch (error) {
			alert(error);
			return true;
		}
		if (valorPagamento >= totalPagar) {
			return false;
		} else {
			return true;
		}
	}
	return false;
}

//Calcular o troco ARRUMAR
function calculaTroco() {
	const troco = totalPagar - valorPagamento;
	const dinheiroTroco = formatCurrency(troco);
	return dinheiroTroco;
}