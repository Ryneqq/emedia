let original;
let fftRe;
let fftIm;
let encrypted;
let canvasdata;

class Edit {
    constructor() {
        original = [];
        encrypted = [];
        fftRe = [];
        fftIm = [];

        canvasdata = [CanvasRenderingContext2D].getImageData;

        arrayCopy(pixels, original);
        arrayCopy(pixels, fftRe);
        arrayCopy(pixels, fftIm);
        arrayCopy(pixels, encrypted);
        // arrayCopy returns an array of objects, the [0] element is array of pixels
        original = original[0];
        fftRe = fftRe[0];
        fftIm = fftIm[0];
        encrypted = encrypted[0];

        this.fft();

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].show();
        }
    }
    fft() {
        // const rate = 44100;
        // let fftImg = [];
        // fftRe = [];
        // fftIm = [];

        // let l = pow(2, floor(Math.log2(fftRe.length)));
        // let fft = new FFT(l, rate);

        // for (let i = 0; i < l; i++) {
        //     fftImg.push(original[i]);
        // }

        // fftImg = fft.forward(fftImg);
        // fftRe = fftImg;
        // fftIm = fft.imag;

        for (let i = 0; i < fftRe.length; i += 4) {
            let temp = fftRe[i];
            fftRe[i] = fftRe[i + 1];
            fftRe[i + 1] = fftRe[i + 2];
            fftRe[i + 2] = temp;
        }
    }
    encrypt() {

    }
}

function CreateButtons() {
    orignial_button = createButton('original')
        .mousePressed(function() { ChangePixels(original) });
    buttons.push(orignial_button);

    fftRe_button = createButton('fft_re')
        .mousePressed(function() { ChangePixels(fftRe) });
    buttons.push(fftRe_button);

    fftIm_button = createButton('fft_im')
        .mousePressed(function() { ChangePixels(fftIm) });
    buttons.push(fftIm_button);

    encrypted_button = createButton('encrypted')
        .mousePressed(function() { ChangePixels(encrypted) });
    buttons.push(encrypted_button);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].parent('canvas').hide();
    }
}

function ChangePixels(pixelsArray) {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i] = pixelsArray[i];
    }
    updatePixels();
}