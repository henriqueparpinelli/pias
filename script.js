const form = document.getElementById('formEndereco');
const corpoTabela = document.getElementById('corpoTabela');
const aviso = document.getElementById('aviso');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  
  const nome = formData.get('Nome');
  const cpf = formData.get('CPF');
  const gmail = formData.get('@gmail');
  const cidade = formData.get('Cidade');
  const telefone = formData.get('Telefone');
  const cep = formData.get('CEP');
  const id = formData.get('ID');

  const novaLinha = document.createElement('tr');

  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${cpf}</td>
    <td>${gmail}</td>
    <td>${cidade}</td>
    <td>${telefone}</td>
    <td>${cep}</td>
    <td>${id}</td>
  `;

  corpoTabela.appendChild(novaLinha);

  aviso.textContent = "Aluno cadastrado com sucesso!";
  aviso.style.color = "green";

  form.reset();

  setTimeout(() => {
    aviso.textContent = "";
  }, 3000);
});
