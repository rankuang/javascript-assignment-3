// Do your work in this file.
var element = ["view", "grass", "sun", "mountain", "mountain-top"];
var div = [];

for (var i = 0; i < 5; i++) {
    div[i] = document.createElement("div");
    div[i].className = element[i];
    switch(i) {
        case 0:
            document.body.appendChild(div[i]);
            break;
        case 1:
            div[0].appendChild(div[i]);
            break;
        case 2:
            div[0].appendChild(div[i]);
            break;
        case 3:
            div[0].appendChild(div[i]);
            break;
        // why can't I merge the three same ones using
        // case 1 && 2 && 3:
        // div[0].appendChild(div[i]);
        // break;           
        case 4:
            div[3].appendChild(div[i]);
            break;
    }
};

var x = 1;
while (x <= 5) {
    var aDiv = document.createElement("div");
    aDiv.className = "ray-" + x;
    div[2].appendChild(aDiv);
    x++;
}

var y = 1;
while (y <= 3) {
    var aDiv = document.createElement("div");
    aDiv.className = "mountain-cap-" + y;
    div[4].appendChild(aDiv);
    y++;
}

