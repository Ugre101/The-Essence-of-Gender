function PreyButton(ps, from, index) {
    var color;
    switch (CheckGender(ps)) {
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
    return "<button type=\"button\" class=\"" + color + "\" onclick=\"Show" + from + "Prey(" + index + ")\">" + ps.Name + " " + ps.Race +
        " <br> " + Pronoun(CheckGender(ps)) + "<br><br>Height:" + CmToInch(ps.Height) + "<br>Weight:" +
        KgToPound(ps.Weight) + "</button>";
}

function ShowPrey(where) {
    document.getElementById(where + "Content").style.display = 'none';
    document.getElementById(where + "Prey").style.display = 'block';
    document.getElementById(where + "Leave").style.display = 'none';
    document.getElementById("LeaveVore").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'inline-block';
    document.getElementById("regurgitate" + where).style.display = 'inline-block';
}

function HidePrey(where) {
    document.getElementById(where + "Content").style.display = 'grid';
    document.getElementById(where + "Prey").style.display = 'none';
    document.getElementById(where + "Leave").style.display = 'inline-block';
    document.getElementById("LeaveVore").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'none';
    document.getElementById("regurgitate" + where).style.display = 'none';
}

function ShowAnalPrey(e) {
    var Prey = player.Vore.Anal[e];
    PreyIndex = e;
    ShowPrey("Anal")
    document.getElementById("AnalPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    document.getElementById("AnalDigestion").style.display = 'none';
};

document.getElementById("LeaveAnalPrey").addEventListener("click", function () {
    HidePrey("Anal")
    document.getElementById("AnalDigestion").style.display = 'inline-block';
});
document.getElementById("regurgitateAnal").addEventListener("click", function () {
    var who = player.Vore.Anal[PreyIndex];
    enemies.push(who);
    player.Vore.Anal.splice(PreyIndex, 1);
    HidePrey("Anal");
    document.getElementById("AnalDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Anal.length; e++) {
        var ps = player.Vore.Anal[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Anal", e);
    }
    document.getElementById("AnalContent").innerHTML = food;
});

function ShowBallsPrey(e) {
    var Prey = player.Vore.Balls[e];
    PreyIndex = e;
    ShowPrey("Balls");
    document.getElementById("CumDigestion").style.display = 'none';
    document.getElementById("BallsPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};

document.getElementById("LeaveBallsPrey").addEventListener("click", function () {
    HidePrey("Balls")
    document.getElementById("CumDigestion").style.display = 'inline-block';
});
document.getElementById("regurgitateBalls").addEventListener("click", function () {
    var who = player.Vore.Balls[PreyIndex];
    enemies.push(who);
    player.Vore.Balls.splice(PreyIndex, 1);
    HidePrey("Balls");
    document.getElementById("CumDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Balls.length; e++) {
        var ps = player.Vore.Balls[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Balls", e);
    }
    document.getElementById("BallsContent").innerHTML = food;
});

function ShowVaginaPrey(e) {
    var Prey = player.Vore.Vagina[e];
    PreyIndex = e;
    ShowPrey("Vagina");
    document.getElementById("VCumDigestion").style.display = 'none';
    document.getElementById("ChildTF").style.display = 'none';
    document.getElementById("VaginaPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;

    document.getElementById("")
};

document.getElementById("LeaveVaginaPrey").addEventListener("click", function () {
    HidePrey("Vagina");
    document.getElementById("VCumDigestion").style.display = 'inline-block';
    document.getElementById("ChildTF").style.display = 'inline-block';
});
document.getElementById("regurgitateVagina").addEventListener("click", function () {
    var who = player.Vore.Vagina[PreyIndex];
    enemies.push(who);
    player.Vore.Vagina.splice(PreyIndex, 1);
    HidePrey("Vagina");
    document.getElementById("VCumDigestion").style.display = 'inline-block';
    document.getElementById("ChildTF").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Vagina.length; e++) {
        var ps = player.Vore.Vagina[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Vagina", e);
    }
    document.getElementById("VaginaContent").innerHTML = food;
});


function ShowBreastPrey(e) {
    var Prey = player.Vore.Breast[e];
    PreyIndex = e;
    ShowPrey("Breast");
    document.getElementById("MilkTransformation").style.display = 'none';
    document.getElementById("BreastPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};

document.getElementById("LeaveBreastPrey").addEventListener("click", function () {
    HidePrey("Breast");
    document.getElementById("MilkTransformation").style.display = 'inline-block';
});
document.getElementById("regurgitateBreast").addEventListener("click", function () {
    var who = player.Vore.Breast[PreyIndex];
    enemies.push(who);
    player.Vore.Breast.splice(PreyIndex, 1);
    HidePrey("Breast");
    document.getElementById("MilkTransformation").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Breast.length; e++) {
        var ps = player.Vore.Breast[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Breast", e);
    }
    document.getElementById("BreastContent").innerHTML = food;
});


var PreyIndex;

function ShowStomachPrey(e) {
    var Prey = player.Vore.Stomach[e];
    PreyIndex = e;
    ShowPrey("Stomach");
    document.getElementById("StomachDigestion").style.display = 'none';
    document.getElementById("StomachPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};
document.getElementById("LeaveStomachPrey").addEventListener("click", function () {
    HidePrey("Stomach");
    document.getElementById("StomachDigestion").style.display = 'inline-block';
});
document.getElementById("regurgitateStomach").addEventListener("click", function () {
    var who = player.Vore.Stomach[PreyIndex];
    enemies.push(who);
    player.Vore.Stomach.splice(PreyIndex, 1);
    HidePrey("Stomach");
    document.getElementById("StomachDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Stomach.length; e++) {
        var ps = player.Vore.Stomach[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Stomach", e);
    }
    document.getElementById("StomachContent").innerHTML = food;
});


document.getElementById("VoreLooks").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("ShowVore").style.display = 'block';
    document.getElementById("VorePerkMenu").style.display = 'none';
    document.getElementById("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
});

function DisplayNoneVore(where) {
    document.getElementById("VoreSettings").style.display = 'none';
    document.getElementById("VoreButtons").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'none';
    document.getElementById("regurgitate" + where).style.display = 'none';
    document.getElementById("LeaveVore").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'none';
    document.getElementById("regurgitate" + where).style.display = 'none';
}
document.getElementById("ShowStomach").addEventListener("click", function () {
    DisplayNoneVore("Stomach");
    document.getElementById("VoreStomach").style.display = 'block';
    document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
    var food = "";
    for (var e = 0; e < player.Vore.Stomach.length; e++) {
        var ps = player.Vore.Stomach[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Stomach", e);
    }
    document.getElementById("StomachContent").innerHTML = food;

});
document.getElementById("StomachDigestion").addEventListener("click", function () {
    Settings.VoreSettings.StomachDigestion = !Settings.VoreSettings.StomachDigestion
    document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
});
document.getElementById("ShowVagina").addEventListener("click", function () {
    DisplayNoneVore("Vagina")
    document.getElementById("VoreVagina").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Vagina.length; e++) {
        var ps = player.Vore.Vagina[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Vagina", e);
    }
    document.getElementById("VaginaContent").innerHTML = food;
    document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
});
document.getElementById("ChildTF").addEventListener("click", function () {
    if (Settings.VoreSettings.ChildTF) {
        Settings.VoreSettings.ChildTF = false;
    } else {
        Settings.VoreSettings.ChildTF = true;
        Settings.VoreSettings.VCumDigestion = false;
    }
    document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
});
document.getElementById("VCumDigestion").addEventListener("click", function () {
    if (Settings.VoreSettings.VCumDigestion) {
        Settings.VoreSettings.VCumDigestion = false;
    } else {
        Settings.VoreSettings.ChildTF = false;
        Settings.VoreSettings.VCumDigestion = true;
    }
    document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
})

document.getElementById("ShowBreast").addEventListener("click", function () {
    document.getElementById("VoreBreast").style.display = 'block';
    DisplayNoneVore("Breast")
    var food = "";
    for (var e = 0; e < player.Vore.Breast.length; e++) {
        var ps = player.Vore.Breast[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Breast", e);
    }
    document.getElementById("BreastContent").innerHTML = food;
    document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
});
document.getElementById("MilkTransformation").addEventListener("click", function () {
    Settings.VoreSettings.MilkTF = !Settings.VoreSettings.MilkTF;
    document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
});
document.getElementById("ShowBalls").addEventListener("click", function () {
    DisplayNoneVore("Balls")
    document.getElementById("VoreBalls").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Balls.length; e++) {
        var ps = player.Vore.Balls[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Balls", e);
    }
    document.getElementById("BallsContent").innerHTML = food;
    document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
});
document.getElementById("CumDigestion").addEventListener("click", function () {
    Settings.VoreSettings.CumTF = !Settings.VoreSettings.CumTF;
    document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
});
document.getElementById("ShowAnal").addEventListener("click", function () {
    DisplayNoneVore("Anal")
    document.getElementById("VoreAnal").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Anal.length; e++) {
        var ps = player.Vore.Anal[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Anal", e);
    }
    document.getElementById("AnalContent").innerHTML = food;
    document.getElementById("AnalDigestion").value = "Anal digestion " + Settings.VoreSettings.AnalDigestion;
});
document.getElementById("AnalDigestion").addEventListener("click", function () {
    Settings.VoreSettings.AnalDigestion = !Settings.VoreSettings.AnalDigestion;
    document.getElementById("AnalDigestion").value = "Anal Digestion " + Settings.VoreSettings.AnalDigestion;
});

function LeavePreyMenu() {
    document.getElementById("VoreButtons").style.display = 'grid';
    document.getElementById("LeaveVore").style.display = 'inline-block';
    document.getElementById("VoreSettings").style.display = 'inline-block';
}

document.getElementById("StomachLeave").addEventListener("click", function () {
    document.getElementById("VoreStomach").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("VaginaLeave").addEventListener("click", function () {
    document.getElementById("VoreVagina").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("BreastLeave").addEventListener("click", function () {
    document.getElementById("VoreBreast").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("BallsLeave").addEventListener("click", function () {
    document.getElementById("VoreBalls").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("AnalLeave").addEventListener("click", function () {
    document.getElementById("VoreAnal").style.display = 'none';
    LeavePreyMenu();
});