// script.js
const form = document.getElementById("agendamentoForm");
const mensagemDiv = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aqui você pode usar JavaScript para validar os campos do formulário
    // e criar um objeto com os dados do agendamento

    const agendamentoData = {
        nome: document.getElementById("nome").value,
        servico: document.getElementById("servico").value,
        data: document.getElementById("data").value,
        horario: document.getElementById("horario").value
    };

    // Envie os dados para o servidor para processamento (usando AJAX ou Fetch API)

    // Exemplo de mensagem de confirmação formatada
    const mensagem = `Olá, ${agendamentoData.nome}! Seu agendamento para ${agendamentoData.servico} em ${agendamentoData.data} às ${agendamentoData.horario} foi confirmado.`;

    // Exiba a mensagem de confirmação com estilo
    mensagemDiv.innerHTML = `<p>${mensagem}</p>`;
});