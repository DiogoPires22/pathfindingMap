var setRoute = function () {
        var inicio = $("#inicio").val();
        var fim = $("#Fim").val();

        if (inicio == "") {
            alert("Informe o inicio")
        } else if (fim == "") {
            alert("Informe o fim")
        } else if (fim == inicio) {
            alert("Inicio deve ser diferente de fim");
        } else {
            var elemStart = lojas.find(function (elem) { return elem.id == inicio });
            var elemEnd = lojas.find(function (elem) { return elem.id == fim });
            pathFindingCalc(elemStart.door.linha, elemStart.door.coluna, elemEnd.door.linha, elemEnd.door.coluna)
        }
}
var setLabels = function () {
    for (var i = 0; i < lojas.length; i++) {
        createLabel(lojas[i].x, lojas[i].y, lojas[i].id);
    }
}

   