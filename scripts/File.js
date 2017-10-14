class File {
    constructor(file) {
        if (file.type == 'image') {
            print('yup, thats an image');
            this.loaded = true;
            this.file = file;
            this.show();
        } else {
            return
        }
    }
    show() {
        let img = createImg(this.file.data)
            .parent('main')
            .style('width', '760px');
    }
}