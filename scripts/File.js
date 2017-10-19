let images = [];

class File {
    constructor(file) {
        print(file);
        if (file.type === 'image') {
            print('yup, thats an image');
            this.loaded = file;
            this.show();
        } else {
            return
        }
    }
    show() {
        createP('name: ' + this.loaded.name)
            .parent('main');
        createP('size: ' + floor(this.loaded.size / (1024 * 1024) * 100) / 100 + ' MB')
            .parent('main');
        var img = createImg(this.loaded.data)
            .parent('main')
            .style('width', '760px');
        images.push(img);
        canvas.show();
        img.mousePressed(function() { loadimage(img) }); // podpiecie eventu klikniecia mysza do zdjęcia
    }
}

function loadimage(img) {
    canvas.size(img.width, img.height);
    img.hide();
    image(img, 0, 0); // rysowanie na canvasie
    loadPixels();
    img.show();
}