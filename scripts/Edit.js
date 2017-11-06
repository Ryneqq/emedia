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

        this.calculate_fft();

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].show();
        }
    }

    calculate_fft() {
        let k = pixels.length / 4 / (width * height);
        let w = width * sqrt(k);
        let h = height * sqrt(k);
        let X = FFTImageDataRGBA(pixels, w, h);
        print(X.real.length);

        fftRe = [];
        fftIm = [];
        for (let i = 0; i < X.real.length; i++) {
            if (i % 3 != 0) {
                fftRe[i] = X.real[i] % 255;
                fftIm[i] = X.imag[i] % 255;
            } else {
                fftRe[i] = X.real[i] = 255;
                fftIm[i] = X.imag[i] = 255;
            }
        }

        // // step musi być wielokrotnością 4!!!
        // // step mówi o ilości pominietych pixeli
        // // ilosc pominietych pixeli = (step / 4 - 1) * N
        // let step = 16;
        // let vector = [];
        // let complex = {};
        // for (let i = 0; i < pixels.length; i += step) {
        //     let pv = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 4;
        //     complex = [pv, pv];
        //     vector.push(complex);
        // }

        // let power = floor(Math.log2(vector.length));
        // let N = pow(2, power);
        // print(vector.length + ' ' + N);
        // vector.splice(N, vector.length - N);
        // var X = fft2(vector, 0, N);

        // for (let n = 0, k = 0; k < N; n += 4, k++) {
        //     fftRe[n] = X[k][0] % 255;
        //     fftRe[n + 1] = fftRe[n]; // odcienie szarosci
        //     fftRe[n + 2] = fftRe[n];

        //     fftIm[n] = X[k][1] % 255;
        //     fftIm[n + 1] = fftIm[n]; // odcienie szarosci
        //     fftIm[n + 2] = fftIm[n];
        // }
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