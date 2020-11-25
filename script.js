//Function is activated on click on the left arrow element 
function change_arrow_left() {
    //initialising variables and storing the path to the image displayed (right arrow)
    var src = document.getElementById("right").src;
    // storing the required substring
    var imgsrc = src.substring(src.lastIndexOf("/") + 1);
    // checking if the image is blue 
    if (imgsrc == "arrow-blue-right.png") {
        //changing the image to gray and changing border-color to gray
        document.getElementById("right").src = "Assets/arrow-gray-right.png";
        document.getElementById("arrow-right").style.borderColor = "gray";
    }
    // after changing right arrow checking the left arrow
    var src = document.getElementById("left").src;
    var imgsrc = src.substring(src.lastIndexOf("/") + 1);
    // if the left arrow is gray changing it to default color 
    if (imgsrc == "arrow-gray-left.png") {
        document.getElementById("left").src = "Assets/arrow-blue-left.png";
        document.getElementById("arrow-left").style.borderColor =
            " rgb(10 90 255) ";
    }
}
// function works the same as change_arrow_right () but for the right arrow 
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
// function triggers after the document has been loaded.
// It is used to position the slider images to overflow to the left of the slideshow-container.
function positioning_images() {
    // getting slideshow container width 
    var container_width = document.getElementsByClassName( "slideshow-container" )[0].offsetWidth;
    // var width_left is used to calculate how much width of the slideshow-container is left after all the 
    // slider images that can fit in.
    var width_left = container_width;
    // counter is used to count the images that can fit in the container
    var counter = 0;
    // for block goes from 0 to 4 because there are 5 images in the first row of the slider  
    for (let i = 0; i < 5; i++) {
        if ( width_left - document.getElementsByClassName("slides")[i].offsetWidth > 0 ) {
            // checking if the next image can fit inside the container 
            width_left -= document.getElementsByClassName("slides")[i].offsetWidth;
            counter++;
        }
    }
    // pictures_width_first_row is used to store the width of all the images that can fit in
    var pictures_width_first_row = container_width - width_left;
    // checking if all the images can fit in 
    if (counter < 5) {
        for (let i = counter; i < 5; i++) {
            // if some images can't fit in setting their position to absolute and positioning them
            // to the left of the last image that is inside container
            document.getElementsByClassName("slides")[i].style.position = "absolute";
            document.getElementsByClassName("slides")[i].style.right =
                pictures_width_first_row + 5 + "px";
                //adding the width of the image to the width of the first row 
                //it is used only if more than one picture can't fit in the container
            pictures_width_first_row += document.getElementsByClassName("slides")[i]
                .offsetWidth;
        }
    }
    //repeting the proces for the second row 
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
