// Box width
var bw = 400;
// Box height
var bh = 400;
// Padding
var p = 10;

mines = 10;

var grid = []

for (i = 0; i > 100; i++) {
    let x = 10 * Math.random()
    let y = 10 * Math.random()
    x = Math.ceil(x)
    y = Math.ceil(y)
    let mine = {
        "xx": x,
        "yy": y,
        "flagged": false,
        "clicked": false
    }
    grid.push(mine)

}

function Sprite(img, width, height, positions) {
    this.img = img;
    this.width = width;
    this.height = height;
    this.positions = positions;
}
Sprite.prototype = {
    draw: function (position, x, y) {
        var pos = this.positions[position];
        context.drawImage(
            this.img,
            pos[0],
            pos[1],
            this.width,
            this.height,
            x, y,
            this.width,
            this.height
        );
    }
};
var img = new Image();
img.src = 'images/mine.png';

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawBoard() {
    
    
    var sprite = new Sprite(img, 200, 200, [
        // specify a few sprite locations
        [10, 10],  // green
        [131, 523], // pink
        [191, 523]  // hit
    ]);
    sprite.draw(0, 10, 200);
    sprite.draw(1, 50, 200);
    sprite.draw(2, 90, 200);
    
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();
