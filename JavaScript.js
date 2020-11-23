function change_arrow_left() {

    var src = document.getElementById("right").src;
    var imgsrc = src.substring(src.lastIndexOf("/") + 1);
    if (imgsrc == "arrow-blue-right.png") {
        document.getElementById("right").src = "Assets/arrow-gray-right.png";
        document.getElementById("arrow-right").style.borderColor = "gray";
    }
    var src = document.getElementById("left").src;
    var imgsrc = src.substring(src.lastIndexOf("/") + 1);
    if (imgsrc == "arrow-gray-left.png") {
        document.getElementById("left").src = "Assets/arrow-blue-left.png";
        document.getElementById("arrow-left").style.borderColor = " rgb(10 90 255) ";
    }
};

function change_arrow_right() {
    var src = document.getElementById("left").src;
    var imgsrc = src.substring(src.lastIndexOf("/") + 1);
    if (imgsrc == "arrow-blue-left.png") {
        document.getElementById("left").src = "Assets/arrow-gray-left.png";
        document.getElementById("arrow-left").style.borderColor = "gray";
    }
    var src = document.getElementById("right").src;
    var imgsrc = src.substring(src.lastIndexOf("/") + 1);
    if (imgsrc == "arrow-gray-right.png") {
        document.getElementById("right").src = "Assets/arrow-blue-right.png";
        document.getElementById("arrow-right").style.borderColor = " rgb(10 90 255)";
    }
};
var sum = 0;
var container_width = document.getElementsByClassName("slideshow-container")[0].offsetWidth;
for (let i = 0 ; i <5 ; i++){
    sum += document.getElementsByClassName("slide")[i].offsetWidth;
}
if (sum > container_width) {
    console.log(sum);
}
