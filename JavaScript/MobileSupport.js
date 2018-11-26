var MobileButtons = false;

document.getElementById("MobileButtons").addEventListener("click", function () {
    switch (MobileButtons) {
        case true:
            document.getElementById("buttons").style.width = 17 + "%";
            document.getElementById("buttons").style.maxWidth = 260 + "px";
            document.getElementById("FirstButtons").style.display = 'none';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MobileButtons").value = "Buttons";
            MobileButtons = false;
            break;
        default:
            document.getElementById("buttons").style.width = 70 + "vw";
            document.getElementById("buttons").style.maxWidth = 70 + "vw";
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MobileButtons").value = "Buttons";
            MobileButtons = true;
            break;
    }
});

window.onload = function () {
    if (window.innerHeight < 600) {
        document.getElementById("FirstButtons").style.display = 'none';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'inline-block';
        FontSize = 0.65;
        document.body.style.fontSize = FontSize + "em";
        MapPercent = 0.6;
        HemScale();
    } else if (window.innerHeight < 800) {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'none';
        FontSize = 0.95;
        document.body.style.fontSize = FontSize + "em";
    } else {
        document.getElementById("SecondButtons").style.display = 'block';
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("MoreButtons").style.display = 'none';
        document.getElementById("LessButtons").style.display = 'none';
        document.getElementById("MobileButtons").style.display = 'none';
    }
};