document.getElementById("Perks").addEventListener("click", function () {
    // Moved everything to the button to clean up the player const.
    DisplayNone();
    const div = document.getElementById("Levels");
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }

    const StatsLevel = document.createElement("div"),
        h3 = document.createElement("h3"),
        h3Text = document.createTextNode("Stats:");
    h3.appendChild(h3Text);
    StatsLevel.appendChild(h3);

    const RawStats = document.createElement("div");
    RawStats.style.display = 'inline-block';
    RawStats.style.marginRight = "5px";
    const Stats = document.createElement("div");
    Stats.style.display = 'inline-block';

    const RawH4 = document.createElement("h4"),
        RawH4Text = document.createTextNode("Raw:");
    RawH4.appendChild(RawH4Text);
    RawStats.appendChild(RawH4);

    const RawP = document.createElement("ol");
    RawP.innerHTML = "<li>Str: " + player.Str + "</li><li>End: " + player.End + "</li><li>Will: " + player.Will +
        "</li><li>Charm: " + player.Charm + "</li><li>Int: " + player.Int + "</li><li>Sex skill: " + player.SexSkill + "</li>";
    RawStats.appendChild(RawP);

    const H4 = document.createElement("h4"),
        H4Text = document.createTextNode("Total:");
    H4.appendChild(H4Text);
    Stats.appendChild(H4);

    const P = document.createElement("ol");
    P.innerHTML = "<li>Str: " + TotalStr() + "</li><li>End: " + TotalEnd() + "</li><li>Will: " + TotalWill() +
        "</li><li>Charm: " + TotalCharm() + "</li><li>Int: " + TotalInt() + "</li><li>Sex skill: " + TotalSexSkill() + "</li>";
    Stats.appendChild(P);

    StatsLevel.appendChild(RawStats);
    StatsLevel.appendChild(Stats);
    div.appendChild(StatsLevel);
    document.getElementById("Levels").style.display = 'block';

    const Perks = document.createElement("div");
    Perks.style.display = "inline-block"
    const PerksH4 = document.createElement("h4"),
        PerksH4text = document.createTextNode("Perks:");
    PerksH4.appendChild(PerksH4text);
    Perks.appendChild(PerksH4);

    const PerksP = document.createElement("ol");
    for (let i of Object.keys(player.Perks)) {
        if (player.Perks[i].Count > 0) {
            const perkLi = document.createElement("li");
            perkLi.innerHTML = i + ": " + player.Perks[i].Count;
            PerksP.appendChild(perkLi);
        }
    };
    Perks.appendChild(PerksP);
    div.appendChild(Perks);

    const Races = document.createElement("div");
    Races.style.display = "inline-block";

    const RacesH4 = document.createElement("h4"),
        RacesH4Text = document.createTextNode("Race essence:");
    RacesH4.appendChild(RacesH4Text);
    Races.appendChild(RacesH4);

    const RacesP = document.createElement("ol");
    let RaceTotal = 0;
    for (let e = 0; e < player.RaceEssence.length; e++) {
        RaceTotal += player.RaceEssence[e].amount;
    }
    if (RaceTotal < 100) {
        RaceTotal = 100;
    }
    for (let e of player.RaceEssence) {
        const RacesLi = document.createElement("li");
        RacesLi.innerHTML = Math.round(e.amount / RaceTotal * 100) > 1 ?
            `${e.Race}: ${Math.round(e.amount / RaceTotal * 100)}%  (${Math.round(e.amount)})` :
            `${e.Race}: <1%  (${e.amount})`;
        RacesP.appendChild(RacesLi);
    }
    Races.appendChild(RacesP);
    div.appendChild(Races);

    if (Settings.Vore) {
        const Vore = document.createElement("div");
        Vore.style.display = "inline-block";

        const VoreH4 = document.createElement("h4"),
            VoreH4Text = document.createTextNode("Vore perks:");
        VoreH4.appendChild(VoreH4Text);
        Vore.appendChild(VoreH4);

        const VoreP = document.createElement("ol"),
            v = player.Vore.VorePerks;
        if (Object.keys(v).length > 0) {
            for (let i of Object.keys(v)) {
                const VoreLi = document.createElement("li");
                VoreLi.innerHTML = i + ": " + v[i].Count;
                VoreP.appendChild(VoreLi);
            }
        }
        Vore.appendChild(VoreP);
        div.appendChild(Vore);
    }

    const br = document.createElement("br");
    div.appendChild(br);

    const CloseLevel = InputButton("Close");
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