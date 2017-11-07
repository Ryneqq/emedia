let original;
let fftRe;
let fftIm;
let encrypted;

class Edit {
    constructor() {
        original = [];
        encrypted = [];

        arrayCopy(pixels, original);
        arrayCopy(pixels, encrypted);
        // arrayCopy returns an array of objects, the [0] element is array of pixels
        original = original[0];
        encrypted = encrypted[0];
        select('#buttons').show();
        isfft = false;
    }
}

let isfft = false;

function CalculateFFT() {

    if (isfft)
        return;

    alert('I am calculating FFT. That might take a while. Wait till another alert.');
    let k = pixels.length / 4 / (width * height);
    let w = width * sqrt(k);
    let h = height * sqrt(k);

    let X = FFTImageDataRGBA(pixels, w, h);
    print(X.real.length);

    fftRe = [];
    fftIm = [];
    for (let i = 0; i < X.real.length; i += 4) {
        let avre = (X.real[i] + X.real[i + 1] + X.real[i + 2]) / 3 % 255;
        let avim = (X.imag[i] + X.imag[i + 1] + X.imag[i + 2]) / 3 % 255;

        fftRe[i] = avre;
        fftRe[i + 1] = avre;
        fftRe[i + 2] = avre;

        fftIm[i] = avim;
        fftIm[i + 1] = avim;
        fftIm[i + 2] = avim;

        fftRe[i + 3] = 255;
        fftIm[i + 3] = 255;
    }
    isfft = true;
    alert('The FFT has been calculated, go check the results!');
}

function CreateButtons() {
    orignial_button = createButton('original')
        .mousePressed(function() { ChangePixels(original) });
    buttons.push(orignial_button);

    fftRe_button = createButton('real')
        .mousePressed(function() { CalculateFFT(), ChangePixels(fftRe) });
    buttons.push(fftRe_button);

    fftIm_button = createButton('imag')
        .mousePressed(function() { CalculateFFT(), ChangePixels(fftIm) });
    buttons.push(fftIm_button);

    encrypted_button = createButton('encrypted')
        .mousePressed(function() { ChangePixels(encrypted) });
    buttons.push(encrypted_button);


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].parent('buttons').style('float', 'left');
    }
    select('#buttons').style('clear', 'both').hide();

}

function ChangePixels(pixelsArray) {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i] = pixelsArray[i];
    }
    updatePixels();
}