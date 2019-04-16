var MobileButtons = false;

DocId("MobileButtons").addEventListener("click", function () {
    switch (MobileButtons) {
        case true:
            DocId("buttons").style.width = 18 + "%";
            DocId("buttons").style.maxWidth = 260 + "px";
            DocId("FirstButtons").style.display = 'none';
            DocId("SecondButtons").style.display = 'none';
            DocId("MobileButtons").innerHTML = "Buttons";
            MobileButtons = false;
            break;
        default:
            DocId("buttons").style.width = 70 + "vw";
            DocId("buttons").style.maxWidth = 70 + "vw";
            DocId("FirstButtons").style.display = 'block';
            DocId("MobileButtons").innerHTML = "Buttons";
            MobileButtons = true;
            break;
    }
});

function StatusButtonSystem() {
    if (window.innerHeight < 400) {
        DocId("FirstButtons").style.display = 'none';
        DocId("SecondButtons").style.display = 'none';
        DocId("MoreButtons").style.display = 'inline-block';
        DocId("LessButtons").style.display = 'inline-block';
        DocId("MobileButtons").style.display = 'inline-block';
    } else if (window.innerHeight < 800) {
        DocId("FirstButtons").style.display = 'block';
        DocId("SecondButtons").style.display = 'none';
        DocId("MoreButtons").style.display = 'inline-block';
        DocId("LessButtons").style.display = 'inline-block';
        DocId("MobileButtons").style.display = 'none';
    } else {
        DocId("SecondButtons").style.display = 'block';
        DocId("FirstButtons").style.display = 'block';
        DocId("MoreButtons").style.display = 'none';
        DocId("LessButtons").style.display = 'none';
        DocId("MobileButtons").style.display = 'none';
    }
}