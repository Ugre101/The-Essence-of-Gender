function BarberFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Barber");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var DyeCon = document.createElement("div");
    var CutCon = document.createElement("div");

    function DyeButton(e, p) {
        var dye = document.createElement("input");
        dye.setAttribute("type", "button");
        dye.setAttribute("value", e);
        dye.addEventListener("click", function () {
            player.Face.HairColor = e.toLowerCase()
            p.innerHTML = "Looking into the barbers mirror you see your hair dying is complete and your hair is now " + player.Face.HairColor;
        });
        dye.addEventListener("mouseover", function () {
            p.innerHTML = e + " dye";
        })
        return dye;
    }

    function CutButton(e) {
        var cut = document.createElement("input");
        cut.setAttribute("type", "button");
        cut.setAttribute("value", e);
        cut.addEventListener("click", function () {
            player.Face.HairLength = e.toLowerCase();
        });
        cut.addEventListener("mouseover", function () {
            p.innerHTML = e;
        })
        return cut;
    }
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "Dye");
    input1.addEventListener("click", function () {
        if (DyeCon.hasChildNodes()) {
            while (DyeCon.hasChildNodes()) {
                DyeCon.removeChild(DyeCon.firstChild);
            };
        } else {
            while (CutCon.hasChildNodes()) {
                CutCon.removeChild(CutCon.firstChild);
            };
            var Dyes = ["Red", "Blonde", "Dark brown", "Black", "Pink", "Purple"];
            for (var e of Dyes) {
                DyeCon.appendChild(DyeButton(e, p));
            };
        }
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "Cut");
    input2.addEventListener("click", function () {
        if (CutCon.hasChildNodes()) {
            while (CutCon.hasChildNodes()) {
                CutCon.removeChild(CutCon.firstChild);
            };
        } else {
            while (DyeCon.hasChildNodes()) {
                DyeCon.removeChild(DyeCon.firstChild);
            };
            const Cuts = [ /*"Shaved", "Buzz cut", "Short",*/ "Medium length", "Ear length", "Chin length", "Shoulder length",
                /*"Armpit length", "Mid-back length",*/
                "Hip length", "Knee length", "Floor length"
            ];
            for (var e of Cuts) {
                CutCon.appendChild(CutButton(e, p));
            };
        }
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    var br = document.createElement("br");
    div.appendChild(br);
    div.appendChild(DyeCon);
    div.appendChild(CutCon);

    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}