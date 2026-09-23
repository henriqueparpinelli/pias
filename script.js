const form = document.getElementById('formEndereco');
const aviso = document.getElementById('aviso');
const corpoTabela = document.getElementById('corpoTabela');

function lerFormulario(formulario) {
    const dados = {};
    const campos = new FormData(formulario);
    campos.forEach(function (vslor, chave) {
        dados[chave] = valor;


    });
    return dados;

}
function mostrarAviso(texto, ehErro) {
    aviso.textContent = texto;
    aviso.className = ehErro ? 'erro' : '';
}