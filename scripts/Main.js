var canvas;

function setup() {
    canvas = createCanvas(760, 600);
    canvas.parent('main');
    canvas.hide();
    new Drop('#drop');
}

function draw() {
    noLoop();
}