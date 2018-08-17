var nome;
var contato;
var data;
var cliente = document.getElementById('cliente');
var contato = document.getElementById('contato');
var data = document.getElementById('data');

firebase.database().ref('clientes').on('value', function (snapshot) {
    cliente.innerHTML = '';
    snapshot.forEach(function (item) {
        var clienteTable = document.createElement('table');
        clienteTable.appendChild(document.createTextNode(item.val().nome));
        var contatoTable = document.createElement('table');
        contatoTable.appendChild(document.createTextNode(item.val().contato));
        var dataTable = document.createElement('table');
        dataTable.appendChild(document.createTextNode(item.val().data));
        cliente.appendChild(clienteTable);
        contato.appendChild(contatoTable);
        data.appendChild(dataTable);
    })
})