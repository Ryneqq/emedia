let canvas;

function setup() {
    new Drop('#drop');
    canvas = createCanvas(760, 100)
        .parent('canvas')
        .hide();
    background(unhighlight_color);
    textSize(20);
    textAlign(CENTER);
    text('Choose your image by clicking on it', 760 / 2, 100 / 2);
    fill(0);
}