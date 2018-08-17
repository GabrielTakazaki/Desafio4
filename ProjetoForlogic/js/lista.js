var nome;
var contato;
var data;
var cliente = document.getElementById('cliente');
var contato = document.getElementById('contato');
var data = document.getElementById('data');
var categoria = document.getElementById('categoria');
var nenhumaAvaliacao = document.getElementById('nenhumaAvaliacao');
var dbFirebase = firebase.database().ref('clientes');


dbFirebase.orderByKey().on('value', function (snapshot) {
    snapshot.forEach(function (item) {
        var categoriaTable = document.createElement('table');
        categoriaTable.appendChild(document.createTextNode(item.val().categoria));
        if (categoriaTable.firstChild.nodeValue === "Nenhum: Sem avaliacao") {

            var clienteTable = document.createElement('table');
            clienteTable.appendChild(document.createTextNode(item.key));

            var contatoTable = document.createElement('table');
            contatoTable.appendChild(document.createTextNode(item.val().contato));
            var dataTable = document.createElement('table');
            dataTable.appendChild(document.createTextNode(item.val().data));
            cliente.appendChild(clienteTable);
            contato.appendChild(contatoTable);
            data.appendChild(dataTable);
            categoria.appendChild(categoriaTable);
        }
    })
})