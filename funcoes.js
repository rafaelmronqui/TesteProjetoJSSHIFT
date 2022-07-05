function validarFaculdade()
{
	var verificar = prompt("Digite uma opção:");

	switch (verificar)
	{
		case "1":
			var recebeGraduacao = prompt("Digite a graduação que deseja fazer:");
			alert("Parabéns, você está cadastrado para cursar a graduação em " + recebeGraduacao);
			break;
		case "2":
			var graduacao = prompt("Digite o nome do curso que você é graduado:");
			var posgraduacao = prompt("Digite o nome da pós-graduação que deseja fazer:");
			alert("Parabéns, você já é graduado em " + graduacao + " e agora irá cursar pós-graduação em: " + posgraduacao);
			break;
		default:
			alert("Digitou uma opção errada.");
			break;
	}
}

