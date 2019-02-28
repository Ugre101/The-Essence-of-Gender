function ManualGrowthScale() {
    return (player.Height / 160)
} // I put this a function to make it easier to trial different formulas.


function EssenceCost(what) {
    return Math.min(2000, Math.round((30 * Math.pow(1.05, what.Size))));
};

function EssenceExtraCost(what) {
    return Math.round((30 * Math.pow(3, what.length)));
};

document.getElementById("EssenceAuto").addEventListener("click", function () {
    Settings.EssenceAuto = !Settings.EssenceAuto;
    if (Settings.EssenceAuto) {
        document.getElementById("EssenceAuto").value = "Essence Auto";
        document.getElementById("ManualGrowth").style.display = 'none';

    } else {
        document.getElementById("EssenceAuto").value = "Essence Manual";
        document.getElementById("ManualGrowth").style.display = 'block';
        Settings.BalanceParts = false;
    }
});

document.getElementById("GrowBalls").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    BallsButtons();
});
document.getElementById("GrowPussy").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    PussyButtons();
});
document.getElementById("GrowBreast").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    BreastButtons();
});
document.getElementById("GrowDick").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    DickButtons();
});

function BreastButtons() {
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var Extraboobs = InputButton("Extra breasts " + EssenceExtraCost(player.Boobies) + "F");
    Extraboobs.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Boobies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Boob = {
                Size: 0,
                Type: player.Race,
                Milk: 0,
                MilkBaseRate: 0,
                MilkRate: 0,
                MilkMax: 0

            }
            player.Boobies.push(Boob);
        }
        BreastButtons();
    });
    ManualOrgans.appendChild(Extraboobs);
    ManualOrgans.appendChild(ManualOrgansClose());
    for (var e of player.Boobies) {
        ManualOrgans.appendChild(BreastButton(e));
    }
}

function BreastButton(e) {
    var boob = document.createElement("button");
    boob.setAttribute("type", "button");
    boob.innerHTML = BoobSizeConvertor(e.Size) + " " + EssenceCost(e) + "Feminity";
    boob.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            e.Size += 1 * ManualGrowthScale();
            e.MilkMax = Math.round(e.Size * 400);
        }
        BreastButtons();
    });
    return boob;
}

function PussyButtons() {
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraPussy = InputButton("Extra pussy " + EssenceExtraCost(player.Pussies) + "F");
    ExtraPussy.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Pussies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Pussy = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Pussies.push(Pussy);
            PussyButtons();
        }
    });
    ManualOrgans.appendChild(ExtraPussy);
    ManualOrgans.appendChild(ManualOrgansClose());
    for (var e of player.Pussies) {
        ManualOrgans.appendChild(PussyButton(e))
    };
}

function PussyButton(e) {
    var pussy = document.createElement("button");
    pussy.setAttribute("type", "button");
    pussy.innerHTML = CmToInch(e.Size) + " " + EssenceCost(e) + "Feminity";
    pussy.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            e.Size += 1 * ManualGrowthScale();
            PussyButtons();
        }
    });
    return pussy;
}

function DickButtons() {
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraDick = InputButton("Extra dick " + EssenceExtraCost(player.Dicks) + "M");
    ExtraDick.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Dicks);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            var Dick = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Dicks.push(Dick);
            DickButtons();
        }
    });
    ManualOrgans.appendChild(ExtraDick);
    ManualOrgans.appendChild(ManualOrgansClose());
    for (var e of player.Dicks) {
        ManualOrgans.appendChild(DickButton(e));
    }
}

function DickButton(e) {
    var Dick = document.createElement("button");
    Dick.setAttribute("type", "button");
    Dick.innerHTML = CmToInch(e.Size) + " " + EssenceCost(e) + "Masculinity";
    Dick.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            e.Size += 1 * ManualGrowthScale();
            DickButtons();
        }
    });
    return Dick;
}

function BallsButtons() {
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    var ExtraBall = InputButton("Extra Balls " + EssenceExtraCost(player.Balls) + "M");
    ExtraBall.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Balls);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            var Ball = {
                Size: 2,
                Type: player.Race,
                CumMax: 2,
                Cum: 0,
                CumRate: 0,
                CumBaseRate: 0.5
            }
            player.Balls.push(Ball);
            BallsButtons();
        }
    });
    ManualOrgans.appendChild(ExtraBall);
    ManualOrgans.appendChild(ManualOrgansClose())
    var br = document.createElement("br");
    ManualOrgans.appendChild(br);
    for (var e of player.Balls) {
        ManualOrgans.appendChild(BallsButton(e));
    }
}

function BallsButton(e) {
    var Ball = document.createElement("button");
    Ball.setAttribute("type", "button");
    Ball.innerHTML = CmToInch(e.Size) + " " + EssenceCost(e) + "Masculinity";
    Ball.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            e.Size += 1 * ManualGrowthScale();
            BallsButtons();
        }
    });
    return Ball;
}

function ManualOrgansClose() {
    var Close = InputButton("Back");
    Close.addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'block';
        ManualOrgans.style.display = 'none';
        while (ManualOrgans.hasChildNodes()) {
            ManualOrgans.removeChild(ManualOrgans.firstChild);
        }
    });
    return Close;
}

document.getElementById("EssenceOptionsLeave").addEventListener("click", function () {
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    document.getElementById("EssenceStart").style.display = 'block';
    document.getElementById("ManualGrowth").style.display = 'none';
    DisplayNone();
    DisplayGame();
});