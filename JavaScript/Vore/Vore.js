    // Start Vore
    document.getElementById("VoreLooks").style.display = 'none';
    document.getElementById("Vore").addEventListener("click", function () {
        Settings.Vore = Settings.Vore ? false : true;
        document.getElementById("VoreLooks").style.display = Settings.Vore ? 'inline-block' : 'none';
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
        if (!player.hasOwnProperty("Vore")) {
            player.Vore = {
                Level: 0,
                Exp: 0,
                VorePoints: 0,
                VorePerks: {},
                Stomach: [],
                StomachExp: 0,
                TaurStomach: [],
                TaurStomachExp: 0,
                Vagina: [],
                VaginaExp: 0,
                Balls: [],
                BallsExp: 0,
                Anal: [],
                AnalExp: 0,
                Breast: [],
                BreastExp: 0
            }
        }
        if (!Settings.hasOwnProperty("VoreSettings")) {
            Settings.VoreSettings = {
                StomachDigestion: true,
                CumTF: true,
                ChildTF: false,
                VCumDigestion: true,
                MilkTF: true,
                AnalDigestion: true,
                AbsorbEssence: true
            }
        }
    });

    document.getElementById("VoreStart").addEventListener("click", function () {
        Settings.Vore = Settings.Vore ? false : true;
        document.getElementById("VoreStart").value = "Vore " + Settings.Vore;
    });

    document.getElementById("VorePerks").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VorePerkMenu").style.display = 'block';
        document.getElementById("VorePerkPointsLeft").innerHTML = "You have " + player.Vore.VorePoints + " perk points left.";
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
            document.getElementById("AbsorbEssence").value = "AbsorbEssence +" + player.Vore.VorePerks.AbsorbEssence.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
            document.getElementById("FasterDigestion").value = "Faster digestion +" + player.Vore.VorePerks.FasterDigestion.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
            if (player.Vore.VorePerks.AbsorbStats.Count > 9) {
                document.getElementById("AbsorbStats").style.display = 'none';
            } else {
                document.getElementById("AbsorbStats").value = "Drain Stats +" + player.Vore.VorePerks.AbsorbStats.Count; //Had to shorten value as text got outside button
            }
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            document.getElementById("HigherCapacity").value = "Higher capacity +" + player.Vore.VorePerks.HigherCapacity.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
            document.getElementById("AbsorbHeight").value = "Absorb height +" + player.Vore.VorePerks.AbsorbHeight.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("PredatorsMeta")) {
            document.getElementById("PredatorsMeta").value = "Predators meta +" + player.Vore.VorePerks.PredatorsMeta.Count;
        }
        return;
    });

    function VorePerkHandler(perket) {
        player.Vore.VorePoints--;
        if (perket === "AbsorbStats")
            player.Vore.VorePoints -= 9;
        if (player.Vore.VorePerks.hasOwnProperty(perket)) {
            player.Vore.VorePerks[perket].Count++;
        } else {
            player.Vore.VorePerks[perket] = {
                Count: 1
            }
        }
        document.getElementById(perket).value = perket + " +" + player.Vore.VorePerks[perket].Count;
        document.getElementById("VorePerkPointsLeft").innerHTML = "You have " + player.Vore.VorePoints + " perk points left.";
    }
    document.getElementById("AbsorbEssence").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("AbsorbEssence") : false;
    });
    document.getElementById("AbsorbStats").addEventListener("click", function () {
        if (player.Vore.VorePoints > 9) {
            if (!player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                VorePerkHandler("AbsorbStats");
            } else if (player.Vore.VorePerks.AbsorbStats.Count < 10) {
                VorePerkHandler("AbsorbStats");
            }
        } else {
            return;
        }
    });
    document.getElementById("VorePerkMenu").addEventListener("mouseover", function (e) {
        document.getElementById("VorePerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("FasterDigestion").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("FasterDigestion") : false;
    });
    document.getElementById("HigherCapacity").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("HigherCapacity") : false;
    });
    document.getElementById("AbsorbHeight").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("AbsorbHeight") : false;
    });
    document.getElementById("PredatorsMeta").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("PredatorsMeta") : false;
    });
    document.getElementById("LeaveVorePerkMenu").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'grid';
        document.getElementById("VorePerkMenu").style.display = 'none';
    });

    document.getElementById("VoreSettings").addEventListener("click", function () {
        var VoreSettings = document.getElementById("VoreSettingsMenu");
        VoreSettings.style.display = VoreSettings.style.display === 'block' ? 'none' : 'block';
    });
    document.getElementById("AbsorbEssenceSetting").addEventListener("click", function () {
        switch (Settings.VoreSettings.AbsorbEssence) {
            case "Both":
                Settings.VoreSettings.AbsorbEssence = "Femininity";
                break;
            case "Femininity":
                Settings.VoreSettings.AbsorbEssence = "Masculinity";
                break;
            case "Masculinity":
                Settings.VoreSettings.AbsorbEssence = "None";
                break;
            default:
                Settings.VoreSettings.AbsorbEssence = "Both";
                break;
        }
        document.getElementById("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
    });
    document.getElementById("LeaveVore").addEventListener("click", function () {
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
        DisplayGame();
    });

    function VoreEngine(progress = 0.001) {
        var VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level - 1);
        if (player.Vore.Exp >= VoreMaxExp) {
            player.Vore.Exp = player.Vore.Exp - VoreMaxExp;
            player.Vore.Level++;
            player.Vore.VorePoints++;
        }
        document.getElementById("VoreLevel").innerHTML = player.Vore.Level;
        document.getElementById("VoreLevel").style.width = 100 * (player.Vore.Exp / VoreMaxExp) + "%";
        document.getElementById("ShowStomach").innerHTML = "Stomach<br>" + KgToPound(MaxStomachCapacity() - StomachCapacity()) + " prey <br> " + KgToPound(MaxStomachCapacity()) + " Max";
        document.getElementById("ShowVagina").innerHTML = "Pussy<br>" + KgToPound(MaxVaginaCapacity() - VaginaCapacity()) + " prey <br> " + KgToPound(MaxVaginaCapacity()) + " Max";
        document.getElementById("ShowBreast").innerHTML = "Breast<br>" + KgToPound(MaxBreastCapacity() - BreastCapacity()) + " prey <br> " + KgToPound(MaxBreastCapacity()) + " Max";
        document.getElementById("ShowBalls").innerHTML = "Balls<br>" + KgToPound(MaxBallsCapacity() - BallsCapacity()) + " prey <br> " + KgToPound(MaxBallsCapacity()) + " Max";
        document.getElementById("ShowAnal").innerHTML = "Anal<br>" + KgToPound(MaxAnalCapacity() - AnalCapacity()) + " prey <br> " + KgToPound(MaxAnalCapacity()) + " Max";
        document.getElementById("VorePerks").style.display = player.Vore.VorePoints > 0 ? 'inline-block' : 'none';

        // Digestion perk
        var digestionCount = 1;
        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
            digestionCount += player.Vore.VorePerks.FasterDigestion.Count;
        }

        // Stomach
        var content = 0;
        for (var e of player.Vore.Stomach) {
            content += e.Weight;
        }
        while (content > MaxStomachCapacity()) {
            enemies.push(player.Vore.Stomach[player.Vore.Stomach.length - 1]);
            player.Vore.Stomach.pop();
            content = 0;
            for (var e of player.Vore.Stomach) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxStomachCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // stomach fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.StomachDigestion) {
            player.Vore.StomachExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.StomachExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            if (!player.Vore.Stomach[e].hasOwnProperty("LastName")) {
                player.Vore.Stomach[e].LastName = "";
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Masc)
                        player.Vore.Stomach[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Femi)
                        player.Vore.Stomach[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Masc)
                        player.Vore.Stomach[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Femi)
                        player.Vore.Stomach[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Stomach[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Stomach[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.StomachDigestion) {
                player.Vore.Stomach[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Stomach[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                player.Fat += progress / 2 * digestionCount;

                if (player.Vore.Stomach[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Stomach[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Stomach[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Stomach[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Stomach[e].Will / snowA);
                        player.End += Math.round(player.Vore.Stomach[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Stomach[e].SexSkill / snowA);
                    }
                    EventLog("You have digested " + player.Vore.Stomach[e].Name + " " + player.Vore.Stomach[e].Race + " " + player.Vore.Stomach[e].FirstName + " " + player.Vore.Stomach[e].LastName);
                    player.Vore.Stomach.splice(e, 1);
                }
            }
        }
        // Vagina
        var content = 0;
        for (var e of player.Vore.Vagina) {
            content += e.Weight;
        }
        while (content > MaxVaginaCapacity()) {
            enemies.push(player.Vore.Vagina[player.Vore.Vagina.length - 1]);
            player.Vore.Vagina.pop();
            content = 0;
            for (var e of player.Vore.Vagina) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxVaginaCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Vagina fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.VCumDigestion) {
            player.Vore.VaginaExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.VaginaExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Masc);
                        player.Vore.Vagina[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Femi);
                        player.Vore.Vagina[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Masc);
                        player.Vore.Vagina[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Femi);
                        player.Vore.Vagina[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Vagina[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Vagina[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.VCumDigestion) {
                player.Vore.Vagina[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Vagina[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                if (player.Vore.Vagina[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Vagina[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Vagina[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Vagina[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Vagina[e].Will / snowA);
                        player.End += Math.round(player.Vore.Vagina[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Vagina[e].SexSkill / snowA);
                    }
                    EventLog("The only trace left of " + player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].LastName + " is a trail of pussy discharge traveling down your legs.");
                    player.Vore.Vagina.splice(e, 1);
                }
            } else if (Settings.VoreSettings.ChildTF) {
                if (!player.Vore.Vagina[e].hasOwnProperty("Counter")) {
                    player.Vore.Vagina[e].Counter = 0;
                } else {
                    player.Vore.Vagina[e].Counter++;
                    if (player.Vore.Vagina[e].Counter > 1000) {
                        var Baby = {
                            BabyAge: 0,
                            BabyRace: player.Vore.Vagina[e].Race
                        }
                        player.Pregnant.Status = true;
                        player.Pregnant.Babies.push(Baby);
                        EventLog(player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].LastName + " have been reduced to infant who now rests in your womb.")
                        player.Vore.Vagina.splice(e, 1);
                    }
                }
            }
        }
        // Breast
        var content = 0;
        for (var e of player.Vore.Breast) {
            content += e.Weight;
        }
        while (content > MaxBreastCapacity()) {
            enemies.push(player.Vore.Breast[player.Vore.Breast.length - 1]);
            player.Vore.Breast.pop();
            content = 0;
            for (var e of player.Vore.Breast) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxBreastCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Breast fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.MilkTF) {
            player.Vore.BreastExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.BreastExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Masc)
                        player.Vore.Breast[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Femi)
                        player.Vore.Breast[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Masc)
                        player.Vore.Breast[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Femi)
                        player.Vore.Breast[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Breast[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Breast[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.MilkTF) {
                player.Vore.Breast[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Breast[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                for (var b = 0; b < player.Boobies.length; b++) {
                    if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                        player.Boobies[b].Milk += progress * digestionCount;
                    }
                }
                if (player.Vore.Breast[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Breast[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Breast[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Breast[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Breast[e].Will / snowA);
                        player.End += Math.round(player.Vore.Breast[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Breast[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing but milk left of " + player.Vore.Breast[e].Name + " " + player.Vore.Breast[e].Race + " " + player.Vore.Breast[e].FirstName + " " + player.Vore.Breast[e].LastName);
                    player.Vore.Breast.splice(e, 1);
                }
            }
        }
        // Balls
        var content = 0;
        for (var e of player.Vore.Balls) {
            content += e.Weight;
        }
        while (content > MaxBallsCapacity()) {
            enemies.push(player.Vore.Balls[player.Vore.Balls.length - 1]);
            player.Vore.Balls.pop();
            content = 0;
            for (var e of player.Vore.Balls) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxBallsCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Balls fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.CumTF) {
            player.Vore.BallsExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.BallsExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Masc)
                        player.Vore.Balls[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Femi)
                        player.Vore.Balls[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Masc)
                        player.Vore.Balls[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Femi)
                        player.Vore.Balls[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Balls[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Balls[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.CumTF) {
                player.Vore.Balls[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Balls[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                for (var b = 0; b < player.Balls.length; b++) {
                    if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                        player.Balls[b].Cum += 100 * progress * digestionCount;
                    }
                }
                if (player.Vore.Balls[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Balls[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Balls[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Balls[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Balls[e].Will / snowA);
                        player.End += Math.round(player.Vore.Balls[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Balls[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing but cum left of the " + player.Vore.Balls[e].Name + " " + player.Vore.Balls[e].Race + " " + player.Vore.Balls[e].FirstName + " " + player.Vore.Balls[e].LastName);
                    player.Vore.Balls.splice(e, 1);
                    return;
                }
            }
        }
        // Anal
        var content = 0;
        for (var e of player.Vore.Anal) {
            content += e.Weight;
        }
        while (content > MaxAnalCapacity()) {
            enemies.push(player.Vore.Anal[player.Vore.Anal.length - 1]);
            player.Vore.Anal.pop();
            content = 0;
            for (var e of player.Vore.Anal) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxAnalCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Anal fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.AnalDigestion) {
            player.Vore.AnalExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.AnalExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Masc)
                        player.Vore.Anal[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Femi)
                        player.Vore.Anal[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Masc)
                        player.Vore.Anal[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Femi)
                        player.Vore.Anal[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Anal[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Anal[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.AnalDigestion) {
                player.Vore.Anal[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Anal[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                player.Fat += progress / 2 * digestionCount;
                if (player.Vore.Anal[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Anal[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Anal[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Anal[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Anal[e].Will / snowA);
                        player.End += Math.round(player.Vore.Anal[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Anal[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing left of the " + player.Vore.Anal[e].Name + " " + player.Vore.Anal[e].Race + " " + player.Vore.Anal[e].FirstName + " " + player.Vore.Anal[e].LastName);
                    player.Vore.Anal.splice(e, 1);
                }
            }
        }
    }

    function StomachCapacity() {
        var capacity = player.Height / 3
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            sub += player.Vore.Stomach[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxStomachCapacity() {
        var capacity = player.Height / 3
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function VaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Pussies.length; e++) {
            capacity += player.Pussies[e].Size
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.VaginaExp / 100;
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            sub += player.Vore.Vagina[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxVaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Pussies.length; e++) {
            capacity += player.Pussies[e].Size
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.VaginaExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function BreastCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Boobies.length; e++) {
            capacity += player.Boobies[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BreastExp / 100;
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            sub += player.Vore.Breast[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxBreastCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Boobies.length; e++) {
            capacity += player.Boobies[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BreastExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function BallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            capacity += player.Balls[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BallsExp / 100;
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            sub += player.Vore.Balls[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxBallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            capacity += player.Balls[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BallsExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function AnalCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Anal.length; e++) {
            capacity += player.Anal[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.AnalExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            sub += player.Vore.Anal[e].Weight;
        }
        return capacity * bonus - sub;
    }

    function MaxAnalCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Anal.length; e++) {
            capacity += player.Anal[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.AnalExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }
    // End vore