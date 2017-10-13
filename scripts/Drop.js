let highlight_color = '#D3D3D3'; // light grey
let unhighlight_color = '#808080'; // grey
let name;

class Drop {
    constructor(_name) {
        name = _name;
        select(name)
            .dragOver(this.highlight)
            .dragLeave(this.unhighlight)
            .drop(this.file);
    }

    highlight() {
        select(name).style("background-color", highlight_color);
    }
    unhighlight() {
        print(unhighlight_color);
        select(name).style("background-color", unhighlight_color);
    }
    file(file) {
        select(name).hide();
        canvas.show();
    }
}

// function Drop() {
//     this.setup = function(_name) {

//         name = _name;
//         select(name)
//             .dragOver(this.highlight)
//             .dragLeave(this.unhighlight);
//     }

//     this.highlight = function() {
//         select(name).style("background-color", highlight_color);
//     }
//     this.unhighlight = function() {
//         print(unhighlight_color);
//         select(name).style("background-color", unhighlight_color);
//     }
// }