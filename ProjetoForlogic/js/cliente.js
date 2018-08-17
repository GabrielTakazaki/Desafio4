var nome = document.getElementById('nomeInput');
var contato = document.getElementById('contatoInput');
var data = document.getElementById('dataInput');
var add = document.getElementById('cadastroButton');
var lista = document.getElementById('lista');
var alertWarningMsg = document.getElementById('alertWarningMsg');
var alertSucessMsg = document.getElementById('alertSucessMsg');

add.addEventListener('click', function () {
    create(nome.value, contato.value, data.value);
});

function create(nome, contato, data) {
    if (nome !== "" && contato !== "" && data !== "") {
        var dbase = {
            nome: nome,
            contato: contato,
            data: data
        }
        alert("Cliente Cadastrado");
        return firebase.database().ref().child('clientes').push(dbase);
    } else {
        alert("Há campos vazios")
    }
}
