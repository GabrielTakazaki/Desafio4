var nome = document.getElementById('nomeInput');
var contato = document.getElementById('contatoInput');
var data = document.getElementById('dataInput');
var categoria = document.getElementById('categoria');
var id;

var add = document.getElementById('cadastroButton');
var lista = document.getElementById('lista');
var alertWarningMsg = document.getElementById('alertWarningMsg');
var alertSucessMsg = document.getElementById('alertSucessMsg');

add.addEventListener('click', function () {
    create(nome.value, contato.value, data.value, categoria.value);
});

function create(nome, contato, data, categoria) {
    if (nome !== "" && contato !== "" && data !== "" && data !== "") {
        var dbase = {
            contato: contato,
            data: data,
            categoria: categoria
        }
        alert("Cliente Cadastrado");
        return firebase.database().ref().child('clientes').child(nome).set(dbase);
    } else {
        alert("Há campos vazios")
    }
}
