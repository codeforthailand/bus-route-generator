var START_LEFT = 150;
var START_TOP  = 300;

var canvas;
function renderRouteMap(nodes) {
    canvas = new fabric.StaticCanvas('c');

    var line = new fabric.Line(
        [
            START_LEFT - 50,
            START_TOP - 30,
            nodes.length*START_LEFT + 60 + 100,
            START_TOP - 30
        ],{
            fill: 'red',
            stroke: 'red',
            strokeWidth: 30,
            originX: 'center',
            originY: 'center',
            strokeLineCap: 'round'
        }
    );
    canvas.add(line);

    for( var i = 0; i < nodes.length; i++ ){
        var n = node(nodes[i]);
        n.setLeft( START_LEFT*( i + 1) );
        canvas.add( n );
    }

    function node( name ) {
        var circle = new fabric.Circle({
            radius: 30,
            fill: 'orange',
            left: 0,
        });
        var text = new fabric.Text(
            name,
            {
                left: 70,
                originX: 'left',
                fontSize: 24,
                originX: 'left',
                originY: 'bottom',
                angle: -50
            }
        )
        var group = new fabric.Group([ circle, text ], {
          top: 300,
          originX: 'left',
          originY: 'bottom'
        });

        return group;
    }
}

function reRender(){
    if( typeof canvas != "undefined" ){
        canvas.clear();
    }
    var t = document.getElementById('text');
    var data = t.value.split(/\n/);;
    var nodes = [];
    for( var i = 0; i < data.length; i++ ){
        var n = data[i].replace(/(^\s+|\s+$)/g,'');
        if( n ) {
            nodes.push(n);
        }
    }

    renderRouteMap(nodes);
}

reRender();
