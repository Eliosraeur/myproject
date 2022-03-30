var clicked = true;
function DayNight() {
if (clicked == true) {
    document.getElementById("dot").style.right = "12px";
    document.getElementById("dot").style.backgroundColor = "white";
    document.getElementById("gt").style.color = "white";
    document.getElementById("hd").style.color = "white";
    document.getElementById("tt").style.color = "white";
    document.getElementById("ch").style.color = "white";
    document.body.style.backgroundColor = "black";
    clicked = false;
} else {
    document.getElementById("dot").style.right = "47px";
    document.getElementById("dot").style.backgroundColor = "";
    document.getElementById("gt").style.color = "";
    document.getElementById("hd").style.color = "";
    document.getElementById("tt").style.color = "";
    document.getElementById("ch").style.color = "";
    document.body.style.backgroundColor = "white";
    clicked = true;
}
}