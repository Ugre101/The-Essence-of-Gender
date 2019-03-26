function GetImpregOrgyFunc() {
    DocId("HomeText").innerHTML = "Orgy";
    var CumTotal = 0;
    for (var a = 0; a < House.Dormmates.length; a++) {
        for (var b = 0; b < House.Dormmates[a].Balls.length; b++) {
            CumTotal += House.Dormmates[a].Balls[b].Cum;
            while (House.Dormmates[a].Balls[b].Cum >= 10) {
                if (player.Pregnant.Status) {
                    break;
                } else {
                    Impregnate(player, House.Dormmates[a], "B", "Dorm")
                    House.Dormmates[a].Balls[b].Cum -= 10;
                }
            }
        }
    }
    DocId("HomeText").innerHTML += "<br><br> By the end of the night they have cummed " + (Math.round(CumTotal / 1000 * 100) / 100) + "L into you.";
};

function ImpregOrgyFunc() {
    DocId("HomeText").innerHTML = "Orgy<br>"
    var CumTotal = 0;
    for (var b = 0; b < player.Balls.length; b++) {
        CumTotal += player.Balls[b].Cum;
    }
    while (CumTotal >= 10) {
        for (var non = 0; non < House.Dormmates.length; non++) {
            if (House.Dormmates[non].Pregnant.Status) {
                CumTotal--;
                continue;
            } else {
                Impregnate(House.Dormmates[non], player, "A", "Dorm");
                CumTotal -= 10;
                if (House.Dormmates[non].Pregnant.Status) {
                    DocId("HomeText").innerHTML += House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + " is impregnated! "
                }
            }
        }
    }
    for (var non = 0; non < House.Dormmates.length; non++) {
        if (!House.Dormmates[non].Pregnant.Status) {
            DocId("HomeText").innerHTML += "You failed to impregnate " + House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + "...";

        }
    }
    for (var b = 0; b < player.Balls.length; b++) {
        player.Balls[b].Cum = 0;
    }
    FluidsEngine();
};

DocId("DormDrainMasc").addEventListener("click", function () {
    const e = MateIndex,
        Ess = Math.min(e.Masc, player.EssenceDrain);

    player.Masc += Ess;
    e.Masc -= Ess;
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DormSex(e);
    DocId("DormSexText").innerHTML = "Siphon masc";
});
DocId("DormDrainFemi").addEventListener("click", function () {
    const e = MateIndex,
        Ess = Math.min(e.Femi, player.EssenceDrain);
    player.Femi += Ess;
    e.Femi -= Ess;
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DormSex(e);
    DocId("DormSexText").innerHTML = "Siphon femi";
    return;
});
DocId("DormInjMasc").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Masc > 0) {
        e.Masc += Math.min(100, player.Masc);
        player.Masc -= Math.min(100, player.Masc);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject masc";
        return;
    }
});
DocId("DormInjFemi").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Femi > 0) {
        e.Femi += Math.min(100, player.Femi);
        player.Femi -= Math.min(100, player.Femi);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject femi";
        return;
    }
});
DocId("Impregnate").addEventListener("click", function () {
    DocId("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
    const e = MateIndex;
    if (e.Pussies.length > 0) {
        var pussypicker = RandomInt(0, e.Pussies.length - 1)
        if (e.Pussies[pussypicker].Virgin) {
            e.Pussies[pussypicker].Virgin = false;
        }
    }
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            DocId("DormSexText").innerHTML = "You have already impregnated her!"
            DormSex(e);
            return;
        }
    } else {
        e.Pregnant = {};
        e.Pregnant.Status = false;
        e.Pregnant.Baby = 0;
    }
    for (var b = 0; b < player.Balls.length; b++) {
        if (player.Balls[b].Cum > 50) {
            Impregnate(e, player, "A", "Dorm");
            player.Balls[b].Cum -= 50;
        } else {
            DocId("DormSexText").innerHTML = "You try but there is to little cum in your balls."
        }

    }
    DormSex(e);
});
var Setup = true;
DocId("GetImpregnated").addEventListener("click", function () {
    const e = MateIndex;
    if (Setup) {
        DocId("DormSexText").innerHTML = `Desiring to get pregnant you call ${e.FirstName} ${e.LastName} a 
        servant whom you feel are worthy fathering you child. Firmly pushing them down on the bed you 
        get on top them straddling their face grinding your pussy against their mouth, once you feel ready 
        you shift focus to their groin removing their clothes and free their ${CmToInch(e.Dicks[0].Size)} 
        ${e.Dicks[0].Type} dick. Positions your pussy on top of their glans letting it slowly enter, 
        once accustomed speeding up.`
    } else {
        DocId("DormSexText").innerHTML = `Not giving up you continue riding them.`;
    }
    if (player.Pregnant.Status) {
        DocId("DormSexText").innerHTML = "You are already pregnant.";
        DormSex(e);
        return;
    } else if (e.Balls.length > 0) {
        Setup = false;
        for (var b = 0; b < e.Balls.length; b++) {
            if (e.Balls[b].Cum >= 10) {
                Impregnate(player, e, "B", "Dorm");
                e.Balls[b].Cum -= 10;
                if (!player.Pregnant.Status) {
                    DocId("DormSexText").innerHTML += "<br><br>They failed to impregnate you";
                }
                break;
            } else {
                DocId("DormSexText").innerHTML += "<br><br>Their balls are dry, you have to let them recover.(10ml needed  )";
            }
        }
    }
    var pussypicker = RandomInt(0, player.Pussies.length - 1)
    if (player.Pussies[pussypicker].Virgin) {
        player.Pussies[pussypicker].Virgin = false;
    }
    DormSex(e);
});