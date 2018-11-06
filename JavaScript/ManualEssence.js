function EssenceCost(what) {
    return Math.round((10 * Math.pow(1.1, what.Size)));
};

function EssenceExtraCost(what) {
    return Math.round((30 * Math.pow(5, what.length)));
};

document.getElementById("EssenceAuto").addEventListener("click", function () {
    Settings.EssenceAuto = !Settings.EssenceAuto;
    if (Settings.EssenceAuto) {
        document.getElementById("EssenceAuto").value = "Essence Auto";
        document.getElementById("ManualGrowth").style.display = 'none';
    } else {
        document.getElementById("EssenceAuto").value = "Essence Manual";
        document.getElementById("ManualGrowth").style.display = 'block';
        document.getElementById("GrowExtraBreasts").value = "Extra breasts " + EssenceExtraCost(player.Boobies)
        document.getElementById("GrowExtraPussy").value = "Extra pussy " + EssenceExtraCost(player.Pussies) + "F";
        document.getElementById("GrowExtraDick").value = "Extra dick " + EssenceExtraCost(player.Dicks) + "M";
        document.getElementById("GrowExtraBalls").value = "Extra balls " + EssenceExtraCost(player.Balls) + "M";
    }
});
document.getElementById("GrowBreast").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("BreastMenu").style.display = 'block';
    BreastButtons();
});
document.getElementById("GrowBreastBack").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'block';
    document.getElementById("BreastMenu").style.display = 'none';
});
document.getElementById("GrowExtraBreasts").addEventListener("click", function () {
    var cost = EssenceExtraCost(player.Boobies);
    if (player.Femi >= cost) {
        player.Femi -= cost;
        var Boob = {
            Size: 0,
            Type: player.Race
        }
        player.Boobies.push(Boob);
    }
    document.getElementById("GrowExtraBreasts").value = "Extra breasts " + EssenceExtraCost(player.Boobies) + "F";
    BreastButtons();
});

function BreastButtons() {
    var Inputs = [];
    for (var e = 0; e < player.Boobies.length; e++) {
        var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerChest(" + e + "); BreastButtons();\">" +
            BoobSizeConvertor(player.Boobies[e].Size) + " " + EssenceCost(player.Boobies[e]) + "Feminity</button  >"
        Inputs += Input;
    }
    document.getElementById("BreastButtons").innerHTML = Inputs;
}

function BiggerChest(index) {
    var cost = EssenceCost(player.Boobies[index]);
    if (player.Femi >= cost) {
        player.Femi -= cost;
        player.Boobies[index].Size++;
    }
}
document.getElementById("GrowPussy").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("PussyMenu").style.display = 'block';
    PussyButtons();
});
document.getElementById("GrowPussyBack").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'block';
    document.getElementById("PussyMenu").style.display = 'none';
});
document.getElementById("GrowExtraPussy").addEventListener("click", function () {
    var cost = EssenceExtraCost(player.Pussies);
    if (player.Femi >= cost) {
        player.Femi -= cost;
        var Pussy = {
            Size: 5,
            Type: player.Race,
            Virgin: true
        }
        player.Pussies.push(Pussy);
        document.getElementById("GrowExtraPussy").value = "Extra pussy " + EssenceExtraCost(player.Pussies) + "F";
        PussyButtons();
    }
});

function PussyButtons() {
    var Inputs = [];
    for (var e = 0; e < player.Pussies.length; e++) {
        var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerPussy(" + e + "); PussyButtons();\">" +
        CmToInch(player.Pussies[e].Size) + " " + EssenceCost(player.Pussies[e]) + "Feminity</button  >"
        Inputs += Input;
    }
    document.getElementById("PussyButtons").innerHTML = Inputs;
}

function BiggerPussy(index) {
    var cost = EssenceCost(player.Pussies[index]);
    if (player.Femi >= cost) {
        player.Femi -= cost;
        player.Pussies[index].Size++;
    }
}
document.getElementById("GrowDick").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("DickMenu").style.display = 'block';
    DickButtons();
});
document.getElementById("GrowDickBack").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'block';
    document.getElementById("DickMenu").style.display = 'none';
});
document.getElementById("GrowExtraDick").addEventListener("click", function () {
    var cost = EssenceExtraCost(player.Dicks);
    if (player.Masc >= cost) {
        player.Masc -= cost;
        var Dick = {
            Size: 5,
            Type: player.Race,
            Virgin: true
        }
        player.Dicks.push(Dick);
        document.getElementById("GrowExtraDick").value = "Extra dick " + EssenceExtraCost(player.Dicks) + "M";
        DickButtons();
    }
});

function BiggerDick(index) {
    var cost = EssenceCost(player.Dicks[index]);
    if (player.Masc >= cost) {
        player.Masc -= cost;
        player.Dicks[index].Size++;
    }
}

function DickButtons() {
    var Inputs = [];
    for (var e = 0; e < player.Dicks.length; e++) {
        var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerDick(" + e + "); DickButtons();\">" +
        CmToInch(player.Dicks[e].Size) + " " + EssenceCost(player.Dicks[e]) + "Masculinity</button  >"
        Inputs += Input;
    }
    document.getElementById("DickButtons").innerHTML = Inputs;
}
document.getElementById("GrowBalls").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("BallsMenu").style.display = 'block';
    BallsButtons();
});
document.getElementById("GrowBallsBack").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'block';
    document.getElementById("BallsMenu").style.display = 'none';
});
document.getElementById("GrowExtraBalls").addEventListener("click", function () {
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
        document.getElementById("GrowExtraBalls").value = "Extra balls " + EssenceExtraCost(player.Balls) + "M";
        BallsButtons();
    }
});

function BiggerBalls(index) {
    var cost = EssenceCost(player.Balls[index]);
    if (player.Masc >= cost) {
        player.Masc -= cost;
        player.Balls[index].Size++;
    }
};

function BallsButtons() {
    var Inputs = [];
    for (var e = 0; e < player.Balls.length; e++) {
        var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerBalls(" + e + "); BallsButtons();\">" +
        CmToInch(player.Balls[e].Size) + " " + EssenceCost(player.Balls[e]) + "Masculinity</button  >"
        Inputs += Input;
    }
    document.getElementById("BallsButtons").innerHTML = Inputs;
}

document.getElementById("EssenceOptionsLeave").addEventListener("click", function () {
    DisplayNone();
    battle = false;
    document.getElementById("map").style.display = 'block'
});