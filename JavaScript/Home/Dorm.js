DocId("Dorm").addEventListener("click", function () {
    DocId("HomeStart").style.display = 'none';
    DocId("TheDorm").style.display = 'block';
    DocId("ButtonMates").style.display = 'grid';
    DocId("DivMates").style.display = 'none';
    DocId("LeaveDorm").style.display = 'inline-block'
    DocId("flex").style.display = 'none';
    ButtonMates();

    if (House.Dormmates.length > 0 && player.Balls.length > 0) {
        DocId("ImpregOrgy").style.display = 'inline-block';
        DocId("GetImpregOrgy").style.display = 'inline-block';
    } else {
        DocId("ImpregOrgy").style.display = 'none';
        DocId("GetImpregOrgy").style.display = 'none';
    }


});

function ButtonMates() {
    var Inputs = [];
    for (var e = 0; e < House.Dormmates.length; e++) {
        var color;
        switch (CheckGender(House.Dormmates[e])) {
            case "female":
                color = "Pink";
                break;
            case "male":
                color = "Blue";
                break;
            case "hermaphrodite":
                color = "Purple";
                break;
            case "doll":
                color = "Beige";
                break;
        }
        var DormName = "";
        if (House.Dormmates[e].hasOwnProperty("FirstName")) {
            DormName += House.Dormmates[e].FirstName;
        };
        if (House.Dormmates[e].hasOwnProperty("LastName")) {
            DormName += " " + House.Dormmates[e].LastName;
        };
        var Input = "<button type=\"button\" class=\"" + color + "\" onclick=\"MateDiv(" + e + ")\">" + DormName + "<br>" +
            House.Dormmates[e].Name + " " + House.Dormmates[e].Race + "</button  >"
        Inputs += Input;
    }
    DocId("ButtonMates").innerHTML = Inputs;
}

var MateIndex;

function MateDiv(e) {
    MateIndex = e;
    var rm = House.Dormmates[e];
    DocId("ButtonMates").style.display = 'none';
    DocId("DivMates").style.display = 'flex';
    DocId("flex").style.display = 'grid';
    var RoomMate = "<div id=\"" + e + "\"></div>"
    DocId("DivMates").innerHTML = RoomMate;
    var PregnantStatus = "";
    if (rm.hasOwnProperty("Pregnant")) {
        if (rm.Pregnant.Status) {
            var age = Math.round(rm.Pregnant.Baby / 10000);
            if (age < 1) {
                PregnantStatus = "<br>Impregnated";
            } else {
                PregnantStatus = "<br>" + age + " months pregnant";
            }
        }
    }
    var DormName = "";
    if (rm.hasOwnProperty("FirstName")) {
        DormName += rm.FirstName;
    };
    if (rm.hasOwnProperty("LastName")) {
        DormName += " " + rm.LastName;
    };
    DocId(e).innerHTML = "<div>" + DormName + "<br>" + rm.Name + " " + rm.Race + "<br>" + Pronoun(CheckGender(rm)) +
        "<br><br>Height: " + CmToInch(Math.round(rm.Height)) + "<br>Weight: " + KgToPound(rm.Weight) + "<br>Muscle: " + KgToPound(rm.Muscle) + "<br>Fat: " + KgToPound(rm.Fat) +
        "<br>" + PregnantStatus + "<br><br>" + BoobLook(rm) + DickLook(rm) + BallLook(rm) + PussyLook(rm) + "<div> Strength: " + rm.Str +
        "<br>Charm: " + rm.Charm + "<br>Endurance: " + rm.End + "<br>Int: " + rm.Int + "<br>Sexskill: " + rm.SexSkill +
        "<br> Willpower: " + rm.Will + "</div></div>   "
    DocId(e).style.display = 'block'
    DocId("LeaveRoom").style.display = 'block';
    DocId("LeaveDorm").style.display = 'none';
    DocId("ImpregOrgy").style.display = 'none';
    DocId("GetImpregOrgy").style.display = 'none';
    DocId("KickOut").style.display = 'block';
    DocId("Fuck").style.display = 'block';
    DocId("Rename").style.display = 'block';
}
DocId("KickYes").addEventListener("click", function () {
    DocId("flex").style.display = 'grid';
    DocId("KickYesNo").style.display = 'none';
    DocId("HomeStart").style.display = 'block';
    DocId("TheDorm").style.display = 'none';
    DocId("ImpregOrgy").style.display = 'inline-block';
    DocId("GetImpregOrgy").style.display = 'inline-block';
    House.Dormmates.splice(MateIndex, 1);
    return;
});
DocId("KickNo").addEventListener("click", function () {
    DocId("flex").style.display = 'grid';
    DocId("KickYesNo").style.display = 'none';
});
DocId("Fuck").addEventListener("click", function () {
    DocId("Home").style.display = 'none';
    DocId("FuckDorm").style.display = 'grid';
    DocId("status").style.display = 'none';
    DocId("EmptyButtons").style.display = 'none';
    DocId("EventLog").style.display = 'none';
    DormSex();
});
DocId("Rename").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (e.hasOwnProperty("FirstName")) {
        DocId("DormFirstName").value = e.FirstName;
    }
    if (e.hasOwnProperty("LastName")) {
        DocId("DormLastName").value = e.LastName
    }
    DocId("DormNameChangeForm").style.display = 'block';
    DocId(MateIndex).style.display = 'none';
    DocId("flex").style.display = 'none';
});
DocId("AcceptDormName").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    e.FirstName = DocId("DormFirstName").value;
    e.LastName = DocId("DormLastName").value;
    DocId("DormNameChangeForm").style.display = 'none';
    MateDiv(MateIndex);
});

function DormSex() {
    var e = House.Dormmates[MateIndex];
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("DormPName").innerHTML = player.Name + " " + player.LastName;
    DocId("DormEName").innerHTML = e.Name + "<br>" + e.Race + " " + Pronoun(CheckGender(e));
    DocId("DormMascu").innerHTML = Math.round(player.Masc);
    DocId("DormFemin").innerHTML = Math.round(player.Femi);
    DocId("DormEMascu").innerHTML = Math.round(e.Masc);
    DocId("DormEFemin").innerHTML = Math.round(e.Femi);
    DocId("DormPlayerLooks").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
    DocId("DormEnemyLooks").innerHTML = BoobLook(e) + DickLook(e) + BallLook(e) + PussyLook(e);
    SexColor(player, "PlayerDorm");
    SexColor(e, "EnemyDorm");
    if (e.Pregnant.Status || player.Balls.length == 0) {
        DocId("Impregnate").style.display = 'none';
    } else {
        DocId("Impregnate").style.display = 'inline-block';
    }
    if (player.Pregnant.Status) {
        DocId("GetImpregnated").style.display = 'none';
        var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        if (age < 1) {
            DocId("DormPlayerLooks").innerHTML += "<br>Impregnated";
        } else {
            DocId("DormPlayerLooks").innerHTML += "<br>" + age + " months pregnant";
        }


    } else {
        if (e.Balls.length < 1) {
            DocId("GetImpregnated").style.display = 'none';
        } else {
            DocId("GetImpregnated").style.display = 'inline-block';
        }
    }

    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            var age = Math.round(e.Pregnant.Baby / 10000);
            if (age < 1) {
                DocId("DormEnemyLooks").innerHTML += "<br>Impregnated";
            } else {
                DocId("DormEnemyLooks").innerHTML += "<br>" + age + " months pregnant";
            }
        }
    }
    var DelatMed = 2;
    if (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) {
        DelatMed = 100 / player.Masc;
    } else if (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc) {
        DelatMed = 100 / player.Femi;
    } else if (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) {
        DelatMed = 100 / e.Masc;
    } else {
        DelatMed = 100 / e.Femi;
    }

    DocId("DormMascu").style.width = player.Masc * DelatMed + "%";
    DocId("DormFemin").style.width = player.Femi * DelatMed + "%";
    DocId("DormEMascu").style.width = e.Masc * DelatMed + "%";
    DocId("DormEFemin").style.width = e.Femi * DelatMed + "%";
    return;
};
DocId("DormDrainMasc").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.EssenceDrain >= e.Masc && e.Masc > 0) {
        player.Masc += e.Masc;
        e.Masc = 0;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        DocId("DormSexText").innerHTML = "Siphon masc";
        return;
    } else if (player.EssenceDrain < e.Masc) {
        player.Masc += player.EssenceDrain;
        e.Masc -= player.EssenceDrain;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        DocId("DormSexText").innerHTML = "Siphon masc";
        return;
    } else {
        return;
    }
});
DocId("DormDrainFemi").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.EssenceDrain >= e.Femi && e.Femi > 0) {
        player.Femi += e.Femi;
        e.Femi = 0;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        DocId("DormSexText").innerHTML = "Siphon femi";
        return;
    } else if (player.EssenceDrain < e.Femi) {
        player.Femi += player.EssenceDrain;
        e.Femi -= player.EssenceDrain;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        DocId("DormSexText").innerHTML = "Siphon femi";
        return;
    } else {
        return;
    }
});
DocId("DormInjMasc").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.Masc > 0) {
        e.Masc += Math.min(100, player.Masc);
        player.Masc -= Math.min(100, player.Masc);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        DocId("DormSexText").innerHTML = "Inject masc";
        return;
    }
});
DocId("DormInjFemi").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.Femi > 0) {
        e.Femi += Math.min(100, player.Femi);
        player.Femi -= Math.min(100, player.Femi);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        DocId("DormSexText").innerHTML = "Inject femi";
        return;
    }
});
DocId("Impregnate").addEventListener("click", function () {
    DocId("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
    var e = House.Dormmates[MateIndex];
    if (e.Pussies.length > 0) {
        var pussypicker = RandomInt(0, e.Pussies.length - 1)
        if (e.Pussies[pussypicker].Virgin) {
            e.Pussies[pussypicker].Virgin = false;
        }
    }
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            DocId("DormSexText").innerHTML = "You have already impregnated her!"
            DormSex();
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
    DormSex();
});
var Setup = true;
DocId("GetImpregnated").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (Setup) {
        DocId("DormSexText").innerHTML = "Desiring to get pregnant you call " + e.FirstName + " " + e.LastName + " a servant whom you feel are worthy " +
            "fathering you child. Firmly pushing them down on the bed you get on top them straddling their face grinding your pussy against their mouth, once you feel ready you shift focus to their groin removing their clothes and free their " + CmToInch(e.Dicks[0].Size) + " " + e.Dicks[0].Type + " dick. " +
            "Positions your pussy on top of their glans letting it slowly enter, once accustomed speeding up."
    } else {
        DocId("DormSexText").innerHTML = "Not giving up you continue riding them.";
    }
    if (player.Pregnant.Status) {
        DocId("DormSexText").innerHTML = "You are already pregnant.";
        DormSex();
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
    DormSex();
});
DocId("LeaveDormSex").addEventListener("click", function () {
    DocId("Home").style.display = 'block';
    DocId("FuckDorm").style.display = 'none';
    DocId("status").style.display = 'block';
    DocId("EmptyButtons").style.display = 'block';
    DocId("DormSexText").innerHTML = " "
    MateDiv(MateIndex);
    Setup = true;
});
DocId("LeaveRoom").addEventListener("click", function () {
    DocId("DivMates").style.display = 'none';
    DocId("ButtonMates").style.display = 'grid';
    DocId("LeaveRoom").style.display = 'none';
    DocId("LeaveDorm").style.display = 'inline-block'
    DocId("ImpregOrgy").style.display = 'inline-block';
    DocId("GetImpregOrgy").style.display = 'inline-block';
    DocId("KickOut").style.display = 'none';
    DocId("Fuck").style.display = 'none';
    DocId("Rename").style.display = 'none';
    DocId("DormChildren").style.display = 'none';
    ButtonMates();
    return;
});
DocId("KickOut").addEventListener("click", function () {
    DocId("flex").style.display = 'none';
    DocId("KickYesNo").style.display = 'block';
});
DocId("ImpregOrgy").addEventListener("click", function () {
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
});
DocId("TheDorm").addEventListener("mouseover", function (e) {
    DocId("HomeText").innerHTML = e.target.title;
});
DocId("GetImpregOrgy").addEventListener("click", function () {
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
                    console.log(House.Dormmates[a].Balls[b].Cum)
                }
            }
        }
    }
    DocId("HomeText").innerHTML += "<br><br> By the end of the night they have cummed " + (Math.round(CumTotal / 1000 * 100) / 100) + "L into you.";
});
DocId("LeaveDorm").addEventListener("click", function () {
    DocId("HomeStart").style.display = 'block';
    DocId("TheDorm").style.display = 'none';
    DocId("HomeText").innerHTML = "";
    return;
});