    var createLabel = function (x, y, text) {
        label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttributeNS(null, "x", x);
        label.setAttributeNS(null, "y", y);
        label.setAttributeNS(null, "style", "fill: white; stroke: white; text-anchor: left; font-size: 20px; font-family: Arial; stroke-width: 0.8");
        label.innerHTML = text;
        document.getElementById("svg1").appendChild(label);
    }


    var createRect = function (x, y, w, h, c, col, l) {
        rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttributeNS(null, "x", x);
        rect.setAttributeNS(null, "y", y);
        rect.setAttributeNS(null, "width", w);
        rect.setAttributeNS(null, "height", h);
        rect.setAttributeNS(null, "fill", c);
        rect.setAttributeNS(null, "linha", l)
        rect.setAttributeNS(null, "coluna", col);
        $("#linha").append(rect);
    }


    var writeLine = function (pathString) {

        // $(".linhacaminho").remove();
        // line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        // line.setAttributeNS(null, "points", pathString);
        // line.setAttributeNS(null, "stroke", "red");
        // line.setAttributeNS(null, "fill", "transparent");
        // line.setAttributeNS(null, "stroke-width", "3");

        // line.setAttributeNS(null, "class", "linhacaminho");
        // document.getElementById("svg1").appendChild(line);

         $("#maskedPath").remove();
        var map     = Snap('#svg1');
        var maskedPath = map.path(pathString.replace(/\ /g, ' L').replace(/\,/g, ' ').replace("L","M")).attr({
              id: "maskedPath",
              fill: "none",
              strokeWidth: "5",
              stroke: "#66ccff",
              strokeMiterLimit: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "0,10",
              strokeDashOffset: "180"
        });

        var len = maskedPath.getTotalLength();
        // Animate  Path
           maskedPath.attr({
          stroke: '#66ccff',
          strokeLinecap: "round",
          strokeWidth: 5,
          fill: 'none',
          "stroke-dasharray": len + " " + len,
          "stroke-dashoffset": len
        }).animate({"stroke-dashoffset": 10}, 12000,mina.easeinout);



        var avatar=map.select("#avatar");
        setTimeout( function() {
          Snap.animate(0, len, function(value) {
               movePoint = maskedPath.getPointAtLength(value);  
               avatar.transform( 't' + parseInt(movePoint.x-30) + ',' + parseInt( movePoint.y-30 ) + 'r' + 0);
         }, 12000,mina.easeinout); 
        });

    }
    var insertAvatar = function (x, y,path) {
        // $("#avatar").attr("x", $("#linha rect[linha='" + x + "'][coluna='" + y + "']").attr('y'));
        // $("#avatar").attr("y", $("#linha rect[linha='" + x + "'][coluna='" + y + "']").attr('x'));
        $("#avatar").fadeIn(300);
        // var avatar = d3.select("avatar");

    }