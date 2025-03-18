document.getElementById("calcular").addEventListener("click", function () {
  const urgencia = document.getElementById("urgencia").value;
  const impacto = document.getElementById("impacto").value;

  const matriz = {
    alta: { alta: 5, media: 4, baixa: 3 },
    media: { alta: 4, media: 3, baixa: 2 },
    baixa: { alta: 3, media: 2, baixa: 1 },
  };

  const prioridade = matriz[urgencia][impacto];

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = `Prioridade: ${prioridade}`;
  resultadoDiv.style.display = "block";
});
