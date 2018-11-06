document.getElementById("Dorm").addEventListener("click", function () {
    document.getElementById("HomeStart").style.display = 'none';
    document.getElementById("TheDorm").style.display = 'block';
    document.getElementById("ButtonMates").style.display = 'grid';
    document.getElementById("DivMates").style.display = 'none';
    document.getElementById("LeaveDorm").style.display = 'inline-block'
    document.getElementById("flex").style.display = 'none';
    ButtonMates();
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
    document.getElementById("ButtonMates").innerHTML = Inputs;
}

var MateIndex;

function MateDiv(e) {
    MateIndex = e;
    var rm = House.Dormmates[e];
    document.getElementById("ButtonMates").style.display = 'none';
    document.getElementById("DivMates").style.display = 'flex';
    document.getElementById("flex").style.display = 'grid';
    var RoomMate = "<div id=\"" + e + "\"></div>"
    document.getElementById("DivMates").innerHTML = RoomMate;
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
    document.getElementById(e).innerHTML = "<div>" + DormName + "<br>" + rm.Name + " " + rm.Race + "<br>" + Pronun(CheckGender(rm)) +
        "<br><br>Height: " + CmToInch(Math.round(rm.Height)) + "<br>Weight: " + KgToPound(rm.Weight) + "<br>Muscle: " + KgToPound(rm.Muscle) + "<br>Fat: " + KgToPound(rm.Fat) +
        "<br>" + PregnantStatus + "<br><br>" + BoobLook(rm) + DickLook(rm) + BallLook(rm) + PussyLook(rm) + "<div> Strength: " + rm.Str +
        "<br>Charm: " + rm.Charm + "<br>Endurance: " + rm.End + "<br>Int: " + rm.Int + "<br>Sexskill: " + rm.SexSkill +
        "<br> Willpower: " + rm.Willpower + "</div></div>   "
    document.getElementById(e).style.display = 'block'
    document.getElementById("LeaveRoom").style.display = 'block';
    document.getElementById("LeaveDorm").style.display = 'none';
    document.getElementById("ImpregOrgy").style.display = 'none';
    document.getElementById("GetImpregOrgy").style.display = 'none';
    document.getElementById("KickOut").style.display = 'block';
    document.getElementById("Fuck").style.display = 'block';
    document.getElementById("Rename").style.display = 'block';
}
document.getElementById("KickYes").addEventListener("click", function () {
    document.getElementById("flex").style.display = 'grid';
    document.getElementById("KickYesNo").style.display = 'none';
    document.getElementById("HomeStart").style.display = 'block';
    document.getElementById("TheDorm").style.display = 'none';
    document.getElementById("ImpregOrgy").style.display = 'inline-block';
    document.getElementById("GetImpregOrgy").style.display = 'inline-block';
    House.Dormmates.splice(MateIndex, 1);
    return;
});
document.getElementById("KickNo").addEventListener("click", function () {
    document.getElementById("flex").style.display = 'grid';
    document.getElementById("KickYesNo").style.display = 'none';
});
document.getElementById("Fuck").addEventListener("click", function () {
    document.getElementById("Home").style.display = 'none';
    document.getElementById("FuckDorm").style.display = 'grid';
    document.getElementById("status").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'none';
    document.getElementById("EventLog").style.display = 'none';
    DormSex();
});
document.getElementById("Rename").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (e.hasOwnProperty("FirstName")) {
        document.getElementById("DormFirstName").value = e.FirstName;
    }
    if (e.hasOwnProperty("LastName")) {
        document.getElementById("DormLastName").value = e.LastName
    }
    document.getElementById("DormNameChangeForm").style.display = 'block';
    document.getElementById(MateIndex).style.display = 'none';
    document.getElementById("flex").style.display = 'none';
});
document.getElementById("AcceptDormName").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    e.FirstName = document.getElementById("DormFirstName").value;
    e.LastName = document.getElementById("DormLastName").value;
    document.getElementById("DormNameChangeForm").style.display = 'none';
    MateDiv(MateIndex);
});

function DormSex() {
    var e = House.Dormmates[MateIndex];
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    document.getElementById("DormPName").innerHTML = player.Name + " " + player.Lastname;
    document.getElementById("DormEName").innerHTML = e.Name + "<br>" + e.Race + " " + Pronun(CheckGender(e));
    document.getElementById("DormMascu").innerHTML = Math.round(player.Masc);
    document.getElementById("DormFemin").innerHTML = Math.round(player.Femi);
    document.getElementById("DormEMascu").innerHTML = Math.round(e.Masc);
    document.getElementById("DormEFemin").innerHTML = Math.round(e.Femi);
    document.getElementById("DormPlayerLooks").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
    document.getElementById("DormEnemyLooks").innerHTML = BoobLook(e) + DickLook(e) + BallLook(e) + PussyLook(e);
    SexColor(player, "PlayerDorm");
    SexColor(e, "EnemyDorm");
    if (e.Pregnant.Status || player.Dicks.length == 0) {
        document.getElementById("Impregnate").style.display = 'none';
    } else {
        document.getElementById("Impregnate").style.display = 'inline-block';
    }
    if (player.Pregnant.Status) {
        document.getElementById("GetImpregnated").style.display = 'none';
            var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
            if (age < 1) {
                document.getElementById("DormPlayerLooks").innerHTML += "<br>Impregnated";
            } else {
                document.getElementById("DormPlayerLooks").innerHTML += "<br>" + age + " months pregnant";
            }
        
        
    } else {
        document.getElementById("GetImpregnated").style.display = 'inline-block';
    }

    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            var age = Math.round(e.Pregnant.Baby / 10000);
            if (age < 1) {
                document.getElementById("DormEnemyLooks").innerHTML += "<br>Impregnated";
            } else {
                document.getElementById("DormEnemyLooks").innerHTML += "<br>" + age + " months pregnant";
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

    document.getElementById("DormMascu").style.width = player.Masc * DelatMed + "%";
    document.getElementById("DormFemin").style.width = player.Femi * DelatMed + "%";
    document.getElementById("DormEMascu").style.width = e.Masc * DelatMed + "%";
    document.getElementById("DormEFemin").style.width = e.Femi * DelatMed + "%";
    return;
};
document.getElementById("DormDrainMasc").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.EssenceDrain >= e.Masc && e.Masc > 0) {
        player.Masc += e.Masc;
        e.Masc = 0;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon masc";
        return;
    } else if (player.EssenceDrain < e.Masc) {
        player.Masc += player.EssenceDrain;
        e.Masc -= player.EssenceDrain;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon masc";
        return;
    } else {
        return;
    }
});
document.getElementById("DormDrainFemi").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.EssenceDrain >= e.Femi && e.Femi > 0) {
        player.Femi += e.Femi;
        e.Femi = 0;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon femi";
        return;
    } else if (player.EssenceDrain < e.Femi) {
        player.Femi += player.EssenceDrain;
        e.Femi -= player.EssenceDrain;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon femi";
        return;
    } else {
        return;
    }
});
document.getElementById("DormInjMasc").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.Masc > 0) {
        e.Masc += Math.min(100, player.Masc);
        player.Masc -= Math.min(100, player.Masc);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Inject masc";
        return;
    }
});
document.getElementById("DormInjFemi").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.Femi > 0) {
        e.Femi += Math.min(100, player.Femi);
        player.Femi -= Math.min(100, player.Femi);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Inject femi";
        return;
    }
});
document.getElementById("Impregnate").addEventListener("click", function () {
    document.getElementById("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
    var e = House.Dormmates[MateIndex];
    if (e.Pussies.length > 0) {
        var pussypicker = RandomInt(0, e.Pussies.length - 1)
        if (e.Pussies[pussypicker].Virgin) {
            e.Pussies[pussypicker].Virgin = false;
        }
    }
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            document.getElementById("DormSexText").innerHTML = "You have already impregnated her!"
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
            document.getElementById("DormSexText").innerHTML = "You try but there is to little cum in your balls."
        }

    }
    DormSex();
});
var Setup = true;
document.getElementById("GetImpregnated").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (Setup) {
        document.getElementById("DormSexText").innerHTML = "Desiring to get pregnant you call " + e.FirstName + " " + e.LastName + " a servant whom you feel are worthy " +
            "fathering you child. Firmly pushing them down on the bed you get on top them straddling their face grinding your pussy against their mouth, once you feel ready you shift focus to their groin removing their clothes and free their " + CmToInch(e.Dicks[0].Size) + " " + e.Dicks[0].Type + " dick. " +
            "Positions your pussy on top of their glans letting it slowly enter, once accustomed speeding up."
    } else {
        document.getElementById("DormSexText").innerHTML = "Not giving up you continue riding them.";
    }
    if (player.Pregnant.Status) {
        document.getElementById("DormSexText").innerHTML = "You are already pregnant.";
        DormSex();
        return;
    } else if (e.Balls.length > 0) {
        Setup = false;
        for (var b = 0; b < e.Balls.length; b++) {
            if (e.Balls[b].Cum >= 10) {
                Impregnate(player, e, "B", "Dorm");
                e.Balls[b].Cum -= 10;
                if (!player.Pregnant.Status) {
                    document.getElementById("DormSexText").innerHTML += "<br><br>They failed to impregnate you";
                }
                break;
            } else {
                document.getElementById("DormSexText").innerHTML += "<br><br>Their balls are dry, you have to let them recover.(10ml needed  )";
            }
        }
    }
    var pussypicker = RandomInt(0, player.Pussies.length - 1)
    if (player.Pussies[pussypicker].Virgin) {
        player.Pussies[pussypicker].Virgin = false;
    }
    DormSex();
});
document.getElementById("LeaveDormSex").addEventListener("click", function () {
    document.getElementById("Home").style.display = 'block';
    document.getElementById("FuckDorm").style.display = 'none';
    document.getElementById("status").style.display = 'block';
    document.getElementById("EmptyButtons").style.display = 'block';
    document.getElementById("DormSexText").innerHTML = " "
    MateDiv(MateIndex);
    Setup = true;
});
document.getElementById("LeaveRoom").addEventListener("click", function () {
    document.getElementById("DivMates").style.display = 'none';
    document.getElementById("ButtonMates").style.display = 'grid';
    document.getElementById("LeaveRoom").style.display = 'none';
    document.getElementById("LeaveDorm").style.display = 'inline-block'
    document.getElementById("ImpregOrgy").style.display = 'inline-block';
    document.getElementById("GetImpregOrgy").style.display = 'inline-block';
    document.getElementById("KickOut").style.display = 'none';
    document.getElementById("Fuck").style.display = 'none';
    document.getElementById("Rename").style.display = 'none';
    document.getElementById("DormChildren").style.display = 'none';
    ButtonMates();
    return;
});
document.getElementById("KickOut").addEventListener("click", function () {
    document.getElementById("flex").style.display = 'none';
    document.getElementById("KickYesNo").style.display = 'block';
});
document.getElementById("ImpregOrgy").addEventListener("click", function () {
    document.getElementById("HomeText").innerHTML = "Orgy<br>"
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
                    document.getElementById("HomeText").innerHTML += House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + " is impregnated! "
                }
            }
        }
    }
    for (var non = 0; non < House.Dormmates.length; non++) {
        if (!House.Dormmates[non].Pregnant.Status) {
            document.getElementById("HomeText").innerHTML += "You failed to impregnate " + House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + "...";

        }
    }
    for (var b = 0; b < player.Balls.length; b++) {
        player.Balls[b].Cum = 0;
    }
    FluidsEngine();
});
document.getElementById("TheDorm").addEventListener("mouseover", function (e) {
    document.getElementById("HomeText").innerHTML = e.target.title;
});
document.getElementById("GetImpregOrgy").addEventListener("click", function () {
    document.getElementById("HomeText").innerHTML = "Orgy";
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
    document.getElementById("HomeText").innerHTML += "<br><br> By the end of the night they have cummed " + (Math.round(CumTotal/1000*100)/100) + "L into you.";
});
document.getElementById("LeaveDorm").addEventListener("click", function () {
    document.getElementById("HomeStart").style.display = 'block';
    document.getElementById("TheDorm").style.display = 'none';
    document.getElementById("HomeText").innerHTML = "";
    return;
});