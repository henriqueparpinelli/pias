const form = document.getElementById('formEndereco');
const corpoTabela = document.getElementById('corpoTabela');
const aviso = document.getElementById('aviso');

function aplicarMascaraCPF(input) {
    let valor = input.value.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = valor;
}

function aplicarMascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    input.value = valor;
}

function aplicarMascaraCEP(input) {
    let valor = input.value.replace(/\D/g, "");
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    input.value = valor;
}




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
