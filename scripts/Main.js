let canvas;

function setup() {
    new Drop('#drop');
    canvas = createCanvas(760, 300)
        .parent('main')
        .hide();
    background(unhighlight_color);

}

function draw() {
    for (let i = 0; images[i]; i++) {
        canvas.show();
        images[i].mousePressed(function() { loadimage(images[i]) });
    }
    noLoop();
}

function mousePressed() {
    redraw();
}

function loadimage(img) {
    image(img, 0, 0);
    loadPixels();
}