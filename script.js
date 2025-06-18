// Seleciona o botão com ID 'modo-escuro' e adiciona um listener de clique
document.getElementById('modo-escuro').addEventListener('click', function() {
  // Alterna a classe 'dark-mode' no elemento body do documento:
  // - Se a classe existir, será removida
  // - Se não existir, será adicionada
  document.body.classList.toggle('dark-mode');
  
});

// Seleciona o botão com ID 'imprimir' e adiciona um listener de clique
document.getElementById('imprimir').addEventListener('click', function() {
  // Aciona a função de impressão nativa do navegador
  // Isso abrirá o diálogo de impressão do sistema operacional
  window.print();
  
});
