const highlight_color = '#D3D3D3'; // light grey
const unhighlight_color = '#808080'; // grey
let name;

class Drop {
    constructor(_name) {
        name = _name;
        select(name)
            .dragOver(this.highlight)
            .dragLeave(this.unhighlight)
            .drop(this.file, this.unhighlight);
    }
    highlight() {
        select(name).style('background-color', highlight_color);
    }
    unhighlight() {
        select(name).style('background-color', unhighlight_color);
    }
    file(file) {
        if (new File(file).loaded)
            select(name).hide();
    }
}