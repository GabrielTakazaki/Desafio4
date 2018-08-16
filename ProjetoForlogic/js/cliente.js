var nome = document.getElementById('nomeInput');
var contato = document.getElementById('contatoInput');
var data = document.getElementById('dataInput');
var add = document.getElementById('cadastroButton');
var lista = document.getElementById('lista');

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

firebase.database().ref('clientes').on('value', function (snapshot) {
    lista.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().contato + ': ' + item.val().data));
        lista.appendChild(li);
    })
})