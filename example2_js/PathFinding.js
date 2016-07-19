 var pathFindingCalc = function (x1, y1, x2, y2) {
        var grid = new PF.Grid(matrizPrimeiroAndar);
        var finder = new PF.AStarFinder({
            allowDiagonal: true
        });
        var path = finder.findPath(y1, x1, y2, x2, grid);
        var stringPath = "";
        console.log(path)
        for (var i = 0; i < path.length; i++) {

            // var x = $("#linha rect[linha='" + path[i][0] + "'][coluna='" + path[i][1] + "']").attr('x');
            // var y = $("#linha rect[linha='" + path[i][0] + "'][coluna='" + path[i][1] + "']").attr('y');
            stringPath = stringPath + " " + path[i][0] + "," + path[i][1];
        }

        if (stringPath != "") {

          

          insertAvatar(path[0][0], path[0][1], path);


        
            writeLine(stringPath);
        }
}