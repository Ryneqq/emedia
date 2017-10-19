let images = [];
let loaded = [];

class File {
    constructor(file) {
        if (file.type === 'image') {
            this.loaded = file;
            loaded.push(this.loaded);
            this.show();
        } else {
            return
        }
    }
    show() {
        // create headings
        // createElement('h4', 'name: ' + this.loaded.name)
        //     .parent('main');
        // createElement('h4', 'size: ' + floor(this.loaded.size / (1024 * 1024) * 100) / 100 + ' MB')
        //     .parent('main');

        // show an image as html object
        var img = createImg(this.loaded.data)
            .parent('main')
            .style('width', '760px');
        // add 'click' event to the image
        img.mousePressed(function() { loadimage(img) });
        images.push(img);
        canvas.show();
    }
}

function loadimage(img) {
    canvas.size(img.width, img.height);
    img.hide();
    image(img, 0, 0); // drawing image on canvas
    loadPixels();
    img.show();
    img.style('padding-bottom', '4px');
    window.scroll(0, 0); // jump to the begining of the page
    new Edit();
}