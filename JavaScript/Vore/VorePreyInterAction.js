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
    DocId(where + "Content").style.display = 'none';
    DocId(where + "Prey").style.display = 'block';
    DocId(where + "Leave").style.display = 'none';
    DocId("LeaveVore").style.display = 'none';
    DocId("Leave" + where + "Prey").style.display = 'inline-block';
    DocId("regurgitate" + where).style.display = 'inline-block';
}

function HidePrey(where) {
    DocId(where + "Content").style.display = 'grid';
    DocId(where + "Prey").style.display = 'none';
    DocId(where + "Leave").style.display = 'inline-block';
    DocId("LeaveVore").style.display = 'none';
    DocId("Leave" + where + "Prey").style.display = 'none';
    DocId("regurgitate" + where).style.display = 'none';
}

function ShowAnalPrey(e) {
    var Prey = player.Vore.Anal[e];
    PreyIndex = e;
    ShowPrey("Anal")
    DocId("AnalPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    DocId("AnalDigestion").style.display = 'none';
};

DocId("LeaveAnalPrey").addEventListener("click", function () {
    HidePrey("Anal")
    DocId("AnalDigestion").style.display = 'inline-block';
});
DocId("regurgitateAnal").addEventListener("click", function () {
    var who = player.Vore.Anal[PreyIndex];
    enemies.push(who);
    player.Vore.Anal.splice(PreyIndex, 1);
    HidePrey("Anal");
    DocId("AnalDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Anal.length; e++) {
        var ps = player.Vore.Anal[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Anal", e);
    }
    DocId("AnalContent").innerHTML = food;
});

function ShowBallsPrey(e) {
    var Prey = player.Vore.Balls[e];
    PreyIndex = e;
    ShowPrey("Balls");
    DocId("CumDigestion").style.display = 'none';
    DocId("BallsPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};

DocId("LeaveBallsPrey").addEventListener("click", function () {
    HidePrey("Balls")
    DocId("CumDigestion").style.display = 'inline-block';
});
DocId("regurgitateBalls").addEventListener("click", function () {
    var who = player.Vore.Balls[PreyIndex];
    enemies.push(who);
    player.Vore.Balls.splice(PreyIndex, 1);
    HidePrey("Balls");
    DocId("CumDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Balls.length; e++) {
        var ps = player.Vore.Balls[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Balls", e);
    }
    DocId("BallsContent").innerHTML = food;
});

function ShowVaginaPrey(e) {
    var Prey = player.Vore.Vagina[e];
    PreyIndex = e;
    ShowPrey("Vagina");
    DocId("VCumDigestion").style.display = 'none';
    DocId("ChildTF").style.display = 'none';
    DocId("VaginaPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;

    DocId("")
};

DocId("LeaveVaginaPrey").addEventListener("click", function () {
    HidePrey("Vagina");
    DocId("VCumDigestion").style.display = 'inline-block';
    DocId("ChildTF").style.display = 'inline-block';
});
DocId("regurgitateVagina").addEventListener("click", function () {
    var who = player.Vore.Vagina[PreyIndex];
    enemies.push(who);
    player.Vore.Vagina.splice(PreyIndex, 1);
    HidePrey("Vagina");
    DocId("VCumDigestion").style.display = 'inline-block';
    DocId("ChildTF").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Vagina.length; e++) {
        var ps = player.Vore.Vagina[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Vagina", e);
    }
    DocId("VaginaContent").innerHTML = food;
});


function ShowBreastPrey(e) {
    var Prey = player.Vore.Breast[e];
    PreyIndex = e;
    ShowPrey("Breast");
    DocId("MilkTransformation").style.display = 'none';
    DocId("BreastPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};

DocId("LeaveBreastPrey").addEventListener("click", function () {
    HidePrey("Breast");
    DocId("MilkTransformation").style.display = 'inline-block';
});
DocId("regurgitateBreast").addEventListener("click", function () {
    var who = player.Vore.Breast[PreyIndex];
    enemies.push(who);
    player.Vore.Breast.splice(PreyIndex, 1);
    HidePrey("Breast");
    DocId("MilkTransformation").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Breast.length; e++) {
        var ps = player.Vore.Breast[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Breast", e);
    }
    DocId("BreastContent").innerHTML = food;
});


var PreyIndex;

function ShowStomachPrey(e) {
    var Prey = player.Vore.Stomach[e];
    PreyIndex = e;
    ShowPrey("Stomach");
    DocId("StomachDigestion").style.display = 'none';
    DocId("StomachPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};
DocId("LeaveStomachPrey").addEventListener("click", function () {
    HidePrey("Stomach");
    DocId("StomachDigestion").style.display = 'inline-block';
});
DocId("regurgitateStomach").addEventListener("click", function () {
    var who = player.Vore.Stomach[PreyIndex];
    enemies.push(who);
    player.Vore.Stomach.splice(PreyIndex, 1);
    HidePrey("Stomach");
    DocId("StomachDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Stomach.length; e++) {
        var ps = player.Vore.Stomach[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Stomach", e);
    }
    DocId("StomachContent").innerHTML = food;
});


DocId("VoreLooks").addEventListener("click", function () {
    DisplayNone();
    DocId("ShowVore").style.display = 'block';
    DocId("VorePerkMenu").style.display = 'none';
    DocId("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
});

function DisplayNoneVore(where) {
    DocId("VoreSettings").style.display = 'none';
    DocId("VoreButtons").style.display = 'none';
    DocId("Leave" + where + "Prey").style.display = 'none';
    DocId("regurgitate" + where).style.display = 'none';
    DocId("LeaveVore").style.display = 'none';
    DocId("Leave" + where + "Prey").style.display = 'none';
    DocId("regurgitate" + where).style.display = 'none';
}
DocId("ShowStomach").addEventListener("click", function () {
    DisplayNoneVore("Stomach");
    DocId("VoreStomach").style.display = 'block';
    DocId("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
    var food = "";
    for (var e = 0; e < player.Vore.Stomach.length; e++) {
        var ps = player.Vore.Stomach[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Stomach", e);
    }
    DocId("StomachContent").innerHTML = food;

});
DocId("StomachDigestion").addEventListener("click", function () {
    Settings.VoreSettings.StomachDigestion = !Settings.VoreSettings.StomachDigestion
    DocId("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
});
DocId("ShowVagina").addEventListener("click", function () {
    DisplayNoneVore("Vagina")
    DocId("VoreVagina").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Vagina.length; e++) {
        var ps = player.Vore.Vagina[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Vagina", e);
    }
    DocId("VaginaContent").innerHTML = food;
    DocId("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    DocId("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
});
DocId("ChildTF").addEventListener("click", function () {
    if (Settings.VoreSettings.ChildTF) {
        Settings.VoreSettings.ChildTF = false;
    } else {
        Settings.VoreSettings.ChildTF = true;
        Settings.VoreSettings.VCumDigestion = false;
    }
    DocId("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    DocId("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
});
DocId("VCumDigestion").addEventListener("click", function () {
    if (Settings.VoreSettings.VCumDigestion) {
        Settings.VoreSettings.VCumDigestion = false;
    } else {
        Settings.VoreSettings.ChildTF = false;
        Settings.VoreSettings.VCumDigestion = true;
    }
    DocId("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    DocId("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
})

DocId("ShowBreast").addEventListener("click", function () {
    DocId("VoreBreast").style.display = 'block';
    DisplayNoneVore("Breast")
    var food = "";
    for (var e = 0; e < player.Vore.Breast.length; e++) {
        var ps = player.Vore.Breast[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Breast", e);
    }
    DocId("BreastContent").innerHTML = food;
    DocId("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
});
DocId("MilkTransformation").addEventListener("click", function () {
    Settings.VoreSettings.MilkTF = !Settings.VoreSettings.MilkTF;
    DocId("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
});
DocId("ShowBalls").addEventListener("click", function () {
    DisplayNoneVore("Balls")
    DocId("VoreBalls").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Balls.length; e++) {
        var ps = player.Vore.Balls[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Balls", e);
    }
    DocId("BallsContent").innerHTML = food;
    DocId("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
});
DocId("CumDigestion").addEventListener("click", function () {
    Settings.VoreSettings.CumTF = !Settings.VoreSettings.CumTF;
    DocId("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
});
DocId("ShowAnal").addEventListener("click", function () {
    DisplayNoneVore("Anal")
    DocId("VoreAnal").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Anal.length; e++) {
        var ps = player.Vore.Anal[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Anal", e);
    }
    DocId("AnalContent").innerHTML = food;
    DocId("AnalDigestion").value = "Anal digestion " + Settings.VoreSettings.AnalDigestion;
});
DocId("AnalDigestion").addEventListener("click", function () {
    Settings.VoreSettings.AnalDigestion = !Settings.VoreSettings.AnalDigestion;
    DocId("AnalDigestion").value = "Anal Digestion " + Settings.VoreSettings.AnalDigestion;
});

function LeavePreyMenu() {
    DocId("VoreButtons").style.display = 'grid';
    DocId("LeaveVore").style.display = 'inline-block';
    DocId("VoreSettings").style.display = 'inline-block';
}

DocId("StomachLeave").addEventListener("click", function () {
    DocId("VoreStomach").style.display = 'none';
    LeavePreyMenu();
});
DocId("VaginaLeave").addEventListener("click", function () {
    DocId("VoreVagina").style.display = 'none';
    LeavePreyMenu();
});
DocId("BreastLeave").addEventListener("click", function () {
    DocId("VoreBreast").style.display = 'none';
    LeavePreyMenu();
});
DocId("BallsLeave").addEventListener("click", function () {
    DocId("VoreBalls").style.display = 'none';
    LeavePreyMenu();
});
DocId("AnalLeave").addEventListener("click", function () {
    DocId("VoreAnal").style.display = 'none';
    LeavePreyMenu();
});