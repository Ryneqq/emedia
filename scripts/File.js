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
    }
}

// function File(file) {

//     this.show = function() {
//         createP('name: ' + this.loaded.name)
//             .parent('main');
//         createP('size: ' + floor(this.loaded.size / (1024 * 1024) * 100) / 100 + ' MB')
//             .parent('main');
//         let img = createImg(this.loaded.data)
//             .parent('main')
//             .style('width', '760px');
//     }

//     if (file.type === 'image') {
//         print('yup, thats an image');
//         this.loaded = file;
//         loaded = file;
//         this.show();
//     } else {
//         return
//     }
// }