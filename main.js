var c = document.getElementById("render");
var ctx = c.getContext("2d");

c.width = $(document).width()*10;
c.height = $(document).height()*10;
//document.body.innerHTML = toString(screen.width) + toString(window.innerWidth);

function drawDot(x, y, r=1) {
    ctx.fillRect(x,y,r,r);
    instances.push([x, y]);
}

function drawDotSave(x, y, r=1) {
    ctx.fillRect(x,y,r,r);
    current = [x, y];
}

var seed = [Math.floor(Math.random() * c.width - 20) + 10, Math.floor(Math.random() * c.height - 20) + 10];
var current = seed;

var instances = [];

drawDot(c.width/2, 10, 2);
//drawDot(c.width-10, 100, 2);
//drawDot(10, 100, 2);
drawDot(c.width-10, c.height-10, 2);
drawDot(10, c.height-10, 2);

var count = 1000;

interval = setInterval(() => {
    for (var i = 0; i < count; i++) {
        var rand = Math.floor(Math.random() * instances.length) + 1;
        var chosen = instances[rand - 1];
        
        var midpoint = [(chosen[0] + current[0]) / 2, (chosen[1] + current[1]) / 2];
        drawDotSave(midpoint[0], midpoint[1]);
    }
}, 5);

increase = setInterval(() => {
    count += 1000;
    clearInterval(interval);
    interval = setInterval(() => {
        for (var i = 0; i < count; i++) {
            var rand = Math.floor(Math.random() * instances.length) + 1;
            var chosen = instances[rand - 1];
            
            var midpoint = [(chosen[0] + current[0]) / 2, (chosen[1] + current[1]) / 2];
            drawDotSave(midpoint[0], midpoint[1]);
        }
    }, 5);
}, 1000);