
var nomes = document.getElementById('nomes');

firebase.database().ref('clientes').on('value', function (snapshot) {
    snapshot.forEach(function (item) {
        var clienteTable = document.createElement('label');
        clienteTable.appendChild(document.createTextNode(item.val().nome));
        nomes.appendChild(clienteTable);
    })
});