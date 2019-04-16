function BarberFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    div.appendChild(TitleText("Barber"));

    const p = TextBox();
    div.appendChild(p);

    const DyeCon = document.createElement("div"),
        CutCon = document.createElement("div");

    function DyeButton(e, p) {
        const dye = ButtonButton(e);
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
        const cut = ButtonButton(e);
        cut.addEventListener("click", function () {
            player.Face.HairLength = e.toLowerCase();
        });
        cut.addEventListener("mouseover", function () {
            p.innerHTML = e;
        })
        return cut;
    }
    const input1 = ButtonButton("Dye");
    input1.addEventListener("click", function () {
        if (DyeCon.hasChildNodes()) {
            while (DyeCon.hasChildNodes()) {
                DyeCon.removeChild(DyeCon.firstChild);
            };
        } else {
            while (CutCon.hasChildNodes()) {
                CutCon.removeChild(CutCon.firstChild);
            };
            const Dyes = ["Red", "Blonde", "Dark brown", "Black", "Pink", "Purple"];
            for (const e of Dyes) {
                DyeCon.appendChild(DyeButton(e, p));
            };
        }
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    const input2 = ButtonButton("Cut");
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
            for (const e of Cuts) {
                CutCon.appendChild(CutButton(e, p));
            };
        }
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    div.appendChild(document.createElement("br"));
    div.appendChild(DyeCon);
    div.appendChild(CutCon);

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}