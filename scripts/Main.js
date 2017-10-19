let canvas;

function setup() {
    new Drop('#drop');
    canvas = createCanvas(760, 100)
        .parent('canvas')
        .hide();
    background(unhighlight_color);
    textStyle(BOLD);
    textAlign(CENTER);
    textFont('Times New Roman', 18);
    text('Choose your image by clicking on it', 760 / 2, 100 / 2);
    fill(0);
}