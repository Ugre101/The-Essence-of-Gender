document.getElementById("Perks").addEventListener("click", function () {
    // Moved everything to the button to clean up the player var.
    DisplayNone();
    var div = document.getElementById("Levels");
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }

    var StatsLevel = document.createElement("div");

    var h3 = document.createElement("h3");
    var h3Text = document.createTextNode("Stats:");
    h3.appendChild(h3Text);
    StatsLevel.appendChild(h3);

    var RawStats = document.createElement("div");
    RawStats.style.display = 'inline-block';
    RawStats.style.marginRight = "5px";
    var Stats = document.createElement("div");
    Stats.style.display = 'inline-block';

    var RawH4 = document.createElement("h4");
    var RawH4Text = document.createTextNode("Raw:");
    RawH4.appendChild(RawH4Text);
    RawStats.appendChild(RawH4);

    var RawP = document.createElement("ol");
    RawP.innerHTML = "<li>Str: " + player.Str + "</li><li>End: " + player.End + "</li><li>Will: " + player.Will +
        "</li><li>Charm: " + player.Charm + "</li><li>Int: " + player.Int + "</li><li>Sex skill: " + player.SexSkill + "</li>";
    RawStats.appendChild(RawP);

    var H4 = document.createElement("h4");
    var H4Text = document.createTextNode("Total:");
    H4.appendChild(H4Text);
    Stats.appendChild(H4);

    var P = document.createElement("ol");
    P.innerHTML = "<li>Str: " + TotalStr() + "</li><li>End: " + TotalEnd() + "</li><li>Will: " + TotalWill() +
        "</li><li>Charm: " + TotalCharm() + "</li><li>Int: " + TotalInt() + "</li><li>Sex skill: " + TotalSexSkill() + "</li>";
    Stats.appendChild(P);

    StatsLevel.appendChild(RawStats);
    StatsLevel.appendChild(Stats);
    div.appendChild(StatsLevel);
    document.getElementById("Levels").style.display = 'block';

    var Perks = document.createElement("div");
    Perks.style.display = "inline-block"
    var PerksH4 = document.createElement("h4");
    var PerksH4text = document.createTextNode("Perks:");
    PerksH4.appendChild(PerksH4text);
    Perks.appendChild(PerksH4);

    var PerksP = document.createElement("ol");

    for (var i = 0; i < Object.keys(player.Perks).length; i++) {
        if (player.Perks[Object.keys(player.Perks)[i]].Count > 0) {
            var perkLi = document.createElement("li");
            perkLi.innerHTML = Object.keys(player.Perks)[i] + ": " + player.Perks[Object.keys(player.Perks)[i]].Count;
            PerksP.appendChild(perkLi);
        }
    }
    Perks.appendChild(PerksP);
    div.appendChild(Perks);

    var Races = document.createElement("div");
    Races.style.display = "inline-block";

    var RacesH4 = document.createElement("h4");
    var RacesH4Text = document.createTextNode("Race essence:");
    RacesH4.appendChild(RacesH4Text);
    Races.appendChild(RacesH4);

    var RacesP = document.createElement("ol");
    var RaceTotal = 0;
    for (var e = 0; e < player.RaceEssence.length; e++) {
        RaceTotal += player.RaceEssence[e].amount;
    }
    if (RaceTotal < 100) {
        RaceTotal = 100;
    }
    for (var e = 0; e < player.RaceEssence.length; e++) {
        var RacesLi = document.createElement("li");
        RacesLi.innerHTML = player.RaceEssence[e].Race + ": " + Math.round(player.RaceEssence[e].amount / RaceTotal * 100) + "%  (" + player.RaceEssence[e].amount + ")";
        RacesP.appendChild(RacesLi);
    }
    Races.appendChild(RacesP);
    div.appendChild(Races);


    if (Settings.Vore) {
        var Vore = document.createElement("div");
        Vore.style.display = "inline-block";

        var VoreH4 = document.createElement("h4");
        var VoreH4Text = document.createTextNode("Vore perks:");
        VoreH4.appendChild(VoreH4Text);
        Vore.appendChild(VoreH4);

        var VoreP = document.createElement("ol");
        var v = player.Vore.VorePerks;
        if (Object.keys(v).length > 0) {
            for (var i = 0; i < Object.keys(v).length; i++) {
                var VoreLi = document.createElement("li");
                VoreLi.innerHTML = Object.keys(v)[i] + ": " + v[Object.keys(v)[i]].Count;
                VoreP.appendChild(VoreLi);
            }
        }
        Vore.appendChild(VoreP);
        div.appendChild(Vore);
    }

    var br = document.createElement("br");
    div.appendChild(br);

    var CloseLevel = InputButton("Close");
    CloseLevel.addEventListener("click", function () {
        document.getElementById("Levels").style.display = 'none';
        DisplayGame();
    });
    div.appendChild(CloseLevel);
});

document.getElementById("ExtraInfo").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("DetailedInfo").style.display = 'block';
    document.getElementById("FullRace").innerHTML = player.Race + " " + player.SecondRace + "<br><br>" + DetailedRaceDesc();
    document.getElementById("Pregnancy").innerHTML = "Times you have impregnated: " + Flags.Impregnations + "<br> Times you have been pregnant: " + Flags.Pregnations;
    document.getElementById("ExtraStats").innerHTML = "Virility: " + player.Virility + "<br>Fertility: " + player.Fertility + "<br>Essence drain: " + player.EssenceDrain +
        "<br>Give essence: " + player.GiveEssence + "<br> passive rest rate: " + player.RestRate;
});

document.getElementById("CloseExtra").addEventListener("click", function () {
    document.getElementById("DetailedInfo").style.display = 'none';
    DisplayGame();
});

document.getElementById("Looks").addEventListener("click", function () {
    DisplayNone();
    Settings.EssenceAuto ? EssenceCheck(player) : false;
    document.getElementById("ShowLooks").style.display = 'block';
    // Update for Looksmenu #Moved it here because there is no need to have it update every loop.
    document.getElementById("StatusMascFemi").innerHTML = "Masculinity: " + Math.round(player.Masc) + "<br> Femininity: " + Math.round(player.Femi);

    document.getElementById("looks2").innerHTML = "You are " + player.Name + " " + player.LastName + ", a " + CmToInch(Math.round(player.Height)) + " tall " + RaceDesc(player) + " " + Pronoun(CheckGender(player)) +
        ". Looking at yourself in a mirror you see " + player.Face.HairColor + " " + player.Face.HairLength + " hair, " + player.Face.Eyes + " eyes and " + player.Skincolor + " skin.";

    if (player.Pregnant.Babies.length > 0) {
        document.getElementById("looks2").innerHTML += (player.Pregnant.Babies[0].BabyAge < 30) ? "<br><br> You are pregnant" :
            "<br><br> You are " + Math.round(player.Pregnant.Babies[0].BabyAge / 30) + " months pregnant.";
    }
    document.getElementById("StatusFitness").innerHTML = "Age: " + player.Age + "years old<br>Weight: " + KgToPound(player.Weight) + "<br>" + "Fat: " + KgToPound(player.Fat) + "<br>Muscle: " + KgToPound(player.Muscle) + "<br>" + Fitness(player);
    document.getElementById("genitals2").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
    // End update Looksmenu
});

document.getElementById("CloseLooks").addEventListener("click", function () {
    document.getElementById("ShowLooks").style.display = 'none';
    DisplayGame();
});