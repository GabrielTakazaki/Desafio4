var nome = document.getElementById('nomeInput');
var contato = document.getElementById('contatoInput');
var data = document.getElementById('dataInput');
var add = document.getElementById('cadastroButton');

add.addEventListener('click', function () {
    create(nome.value, contato.value, data.value);
});

function create(nome, contato, data) {
    var dbase = {
        nome: nome,
        contato: contato,
        data: data
    }
    return firebase.database().ref().child('clientes').push(dbase);
}
