// captura dos numeros
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// funcao para alterar o relogio
const atualizarRelogio = setInterval(() => {
  // captura a data e hora atual
  let dataHoje = new Date();
  // captura os numeros de horas, minutos e segundos
  // já adicionando o zero a esquerda com string().padStart(2, "0")
  let hora = String(dataHoje.getHours()).padStart(2, "0");
  let minuto = String(dataHoje.getMinutes()).padStart(2, "0");
  let segundo = String(dataHoje.getSeconds()).padStart(2, "0");

  // altera o conteudo dos elementos html
  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;
});
