DocId("Perks").addEventListener("click", function () {
    // Moved everything to the button to clean up the player const.
    DisplayNone();
    const div = DocId("Levels");
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
    RawP.innerHTML = `<li>Str: ${player.Str}</li><li>End: ${player.End}</li><li>Will: ${player.Will}
    </li><li>Charm: ${player.Charm}</li><li>Int: ${player.Int}</li><li>Sex skill: ${player.SexSkill}</li>`;
    RawStats.appendChild(RawP);

    const H4 = document.createElement("h4"),
        H4Text = document.createTextNode("Total:");
    H4.appendChild(H4Text);
    Stats.appendChild(H4);

    const P = document.createElement("ol");
    P.innerHTML = `<li>Str: ${TotalStr()}</li><li>End: ${TotalEnd()}</li><li>Will: ${TotalWill()}
        </li><li>Charm: ${TotalCharm()}</li><li>Int: ${TotalInt()}</li><li>Sex skill: ${TotalSexSkill()}</li>`;
    Stats.appendChild(P);

    StatsLevel.appendChild(RawStats);
    StatsLevel.appendChild(Stats);
    div.appendChild(StatsLevel);
    DocId("Levels").style.display = 'block';

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
    const RaceTotal = Math.max(100, player.RaceEssence.length > 0 ?
        player.RaceEssence.map(e => e.amount).reduce((cul, cur) => cul + cur) : 0);
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

    const CloseLevel = ButtonButton("Close");
    CloseLevel.addEventListener("click", function () {
        DocId("Levels").style.display = 'none';
        DisplayGame();
    });
    div.appendChild(CloseLevel);
});

DocId("ExtraInfo").addEventListener("click", function () {
    DisplayNone();
    DocId("DetailedInfo").style.display = 'block';
    const {
        Race,
        SecondRace,
        Virility,
        Fertility,
        EssenceDrain,
        GiveEssence,
        RestRate
    } = player, {
        Impregnations,
        Pregnations
    } = Flags
    DocId("FullRace").innerHTML = `${Race} ${SecondRace}<br><br>${DetailedRaceDesc()}`;
    DocId("Pregnancy").innerHTML = `Times you have impregnated: ${Impregnations}<br>Times you have been 
    pregnant: ${Pregnations}`;
    DocId("ExtraStats").innerHTML = `Virility: ${Virility}<br>Fertility: ${Fertility}<br>
    Essence drain: ${EssenceDrain}<br>Give essence: ${GiveEssence}<br>passive rest rate: ${RestRate}`;
});

DocId("CloseExtra").addEventListener("click", function () {
    DocId("DetailedInfo").style.display = 'none';
    DisplayGame();
});

DocId("Looks").addEventListener("click", function () {
    DisplayNone();
    Settings.EssenceAuto ? EssenceCheck(player) : false;
    DocId("ShowLooks").style.display = 'block';
    // Update for Looksmenu #Moved it here because there is no need to have it update every loop.
    const {
        Masc,
        Femi,
        Name,
        LastName,
        Height,
        Face,
        Skincolor,
        Pregnant,
        Age,
        Weight,
        Fat,
        Muscle
    } = player // To save space inside the innerhtmls

    DocId("StatusMascFemi").innerHTML = `Masculinity: ${Math.round(Masc)}<br>Femininity: ${Math.round(Femi)}`;

    DocId("looks2").innerHTML = `You are ${Name} ${LastName}, a ${CmToInch(Math.round(Height))} 
    tall ${RaceDesc(player)} ${Pronoun(CheckGender(player))}. Looking at yourself in a mirror you see 
    ${Face.HairColor} ${Face.HairLength} hair, ${Face.Eyes} eyes and ${Skincolor} skin.`;


    if (Pregnant.Babies.length > 0) {
        const {
            BabyAge
        } = player.Pregnant.Babies[0]
        DocId("looks2").innerHTML += (BabyAge < 30) ? `<br><br> You are pregnant` :
            `<br><br>You are ${Math.round(BabyAge / 30)} months pregnant.`;
    }
    DocId("StatusFitness").innerHTML = `Age: ${Age} years old<br>Weight: ${KgToPound(Weight)}<br>Fat: 
    ${KgToPound(Fat)}<br>Muscle: ${KgToPound(Muscle)}<br>${Fitness(player)}`;
    DocId("genitals2").innerHTML = AllSexualOrgans(player);
    // End update Looksmenu
});

DocId("CloseLooks").addEventListener("click", function () {
    DocId("ShowLooks").style.display = 'none';
    DisplayGame();
});