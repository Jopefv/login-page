function formatar(marcara, documento){
    var i = documento.value.length;
    var saida = marcara.substring(0,1);
    var texto = marcara.substring(i)

    if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }
}