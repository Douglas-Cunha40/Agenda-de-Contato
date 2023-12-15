const form = document.getElementById('form-contacts');

const imgCelular = '<img src="./images/celular.png" alt ="Emoji Celular" />';
const imgFixo = '<img src="./images/fixo.png" alt ="Emoji Telefone Fixo" />';
const imgComercial = '<img src="./images/escritorio.png" alt ="Emoji Telefone Comercial" />';
const nome = [];
const numero = [];
const img = document.getElementById('tipo-contato');
let linhas = "";

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaAgenda();
    somaTotalNumero();
    somaTotalTelefones();
});

function adicionaLinha() {
    const inputNomeDoContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");
    const tipo = document.getElementById("tipo-contato");

    if (nome.includes(inputNomeDoContato.value)) {
        alert(`O Nome ${inputNomeDoContato.value} já foi cadastrado`);
    } else {
        nome.push(inputNomeDoContato.value);
        numero.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${img.value == "celular" ? imgCelular : img.value == "fixo" ? imgFixo : imgComercial}</td>`;
        linha += '</tr>';
        linhas += linha;
    }
    inputNomeDoContato.value = "";
    inputNumeroContato.value = "";
    tipo.value = "";
}

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function somaTotalNumero() {
    const numerofinal = somaTotalTelefones();
    document.getElementById("total").innerHTML = numerofinal;
}

function somaTotalTelefones() {
    let somaNumero = 0;
    for (let i = 0; i < numero.length; i++) somaNumero += numero[i];
    const tot = numero.length;
    return numero.length;
}