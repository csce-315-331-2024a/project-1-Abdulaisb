
function shift() {
    if (localStorage.getItem("time") == "night") {
        localStorage.setItem("time","day");
        document.getElementById("stylesheet").setAttribute("href", "Day.css");
        var pics = document.getElementsByClassName("styler");
        pics[0].setAttribute("src","Sun.jpg");

    }
    else {
        localStorage.setItem("time", "night");
        document.getElementById("stylesheet").setAttribute("href", "styles.css");
        var pics = document.getElementsByClassName("styler");
        pics[0].setAttribute("src","Moon.jpg");

    }
}

function check() {
    if (localStorage.getItem("time") == "day") {
        var pics = document.getElementsByClassName("styler");
        pics[0].setAttribute("src","Sun.jpg");
        document.getElementById("stylesheet").setAttribute("href", "Day.css");

    }
    else {
        var pics = document.getElementsByClassName("styler");
        pics[0].setAttribute("src","Moon.jpg");
        document.getElementById("stylesheet").setAttribute("href", "styles.css");

    }
}