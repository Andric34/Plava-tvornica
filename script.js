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
        document.getElementById("arrow-left").style.borderColor =
            " rgb(10 90 255) ";
    }
}

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
        document.getElementById("arrow-right").style.borderColor =
            " rgb(10 90 255)";
    }
}

function positioning_images() {
    var container_width = document.getElementsByClassName(
        "slideshow-container"
    )[0].offsetWidth;
    var width_left = container_width;
    var counter = 0;

    for (let i = 0; i < 5; i++) {
        if (
            width_left - document.getElementsByClassName("slides")[i].offsetWidth >
            0
        ) {
            width_left -= document.getElementsByClassName("slides")[i].offsetWidth;
            counter++;
        }
    }
    var pictures_width_first_row = container_width - width_left;

    if (counter < 5) {
        for (let i = counter; i < 5; i++) {
            document.getElementsByClassName("slides")[i].style.position = "absolute";
            document.getElementsByClassName("slides")[i].style.right =
                pictures_width_first_row + 5 + "px";
            pictures_width_first_row += document.getElementsByClassName("slides")[i]
                .offsetWidth;
        }
    }
    var container_width = document.getElementsByClassName(
        "second-row-container"
    )[0].offsetWidth;

    var width_left = container_width;
    var counter = 0;
    for (let i = 5; i < 9; i++) {
        if (
            width_left - document.getElementsByClassName("slides")[i].offsetWidth >
            0
        ) {
            width_left -= document.getElementsByClassName("slides")[i].offsetWidth;
            counter++;
        }
    }
    var pictures_width_second_row = container_width - width_left;

    if (counter < 4) {
        for (let i = 5 + counter; i < 9; i++) {
            document.getElementsByClassName("slides")[i].style.position = "absolute";
            document.getElementsByClassName("slides")[i].style.right =
                pictures_width_second_row + 15 + "px";
            pictures_width_second_row += document.getElementsByClassName("slides")[i]
                .offsetWidth;
        }
    }
}
