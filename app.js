let barbeiroSelecionado = null;
let servicoSelecionado = null;
let precoSelecionado = null;

function selecionarServico(servico, preco) {
  servicoSelecionado = servico;
  precoSelecionado = preco;
  alert(`Serviço selecionado: ${servico}`);
}function selecionarBarbeiro(nome) {
  barbeiroSelecionado = nome;
  alert(`Barbeiro selecionado: ${nome}`);
}

function confirmarAgendamento() {
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if (!servicoSelecionado || !barbeiroSelecionado || !data || !hora) {
    alert("Preencha tudo antes de confirmar.");
    return;
  }

  const resumo = `
Serviço: ${servicoSelecionado}
Barbeiro: ${barbeiroSelecionado}
Valor: R$${precoSelecionado}
Data: ${data}
Horário: ${hora}
  `;

  document.getElementById("resumo").innerText = resumo;
}
  if (!servicoSelecionado || !data || !hora) {
    alert("Preencha tudo antes de confirmar.");
    return;
  }

  const resumo = `
  Serviço: ${servicoSelecionado}
  Valor: R$${precoSelecionado}
  Data: ${data}
  Horário: ${hora}
  `;

  document.getElementById("resumo").innerText = resumo;

  // Próximo passo: salvar no Firebase ou enviar pro bot WhatsApp
}
