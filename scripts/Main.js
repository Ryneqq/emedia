var canvas;

function setup() {
    canvas = createCanvas(760, 600);
    canvas.parent('main');
    canvas.hide();
    drop = new Drop('#drop');
}

function draw() {
    background(0);
    // print(drop.unhighlight_color);
}