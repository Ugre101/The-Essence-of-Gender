    // Start Vore
    DocId("VoreLooks").style.display = 'none';
    DocId("Vore").addEventListener("click", function () {
        Settings.Vore = Settings.Vore ? false : true;
        DocId("VoreLooks").style.display = Settings.Vore ? 'inline-block' : 'none';
        DocId("Vore").value = "Vore " + Settings.Vore;
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

    DocId("VorePerks").addEventListener("click", function () {
        const {
            VorePerks,
            VorePoints
        } = player.Vore
        DocId("VoreButtons").style.display = 'none';
        DocId("VorePerkMenu").style.display = 'block';
        DocId("VorePerkPointsLeft").innerHTML = `You have ${VorePoints} perk points left.`;
        DocId("AbsorbEssence").value = VorePerks.hasOwnProperty("AbsorbEssence") ? VorePerks.AbsorbEssence.Count > 0 ? `AbsorbEssence +${VorePerks.AbsorbEssence.Count}` : `AbsorbEssence` : `AbsorbEssence`;
        DocId("FasterDigestion").value = VorePerks.hasOwnProperty("FasterDigestion") ? VorePerks.FasterDigestion.Count > 0 ? `Faster digestion +${VorePerks.FasterDigestion.Count}` : `Faster digestion` : `Faster digestion`;
        DocId("AbsorbStats").value = VorePerks.hasOwnProperty("AbsorbStats") ? VorePerks.AbsorbStats.Count > 0 ? `Drain Stats +${VorePerks.AbsorbStats.Count}` : `Drain Stats` : `Drain Stats`; //Had to shorten value as text got outside button            
        DocId("HigherCapacity").value = VorePerks.hasOwnProperty("HigherCapacity") ? VorePerks.HigherCapacity.Count > 0 ? `Higher capacity +${VorePerks.HigherCapacity.Count}` : `Higher capacity` : `Higher capacity`;
        DocId("AbsorbHeight").value = VorePerks.hasOwnProperty("AbsorbHeight") ? VorePerks.AbsorbHeight.Count > 0 ? "Absorb height +" + player.Vore.VorePerks.AbsorbHeight.Count : `Absorb height` : `Absorb height`;
        DocId("PredatorsMeta").value = VorePerks.hasOwnProperty("PredatorsMeta") ? VorePerks.PredatorsMeta.Count > 0 ? `Predators meta +${VorePerks.PredatorsMeta.Count}` : `Predators meta` : `Predators meta`;
        return;
    });

    function VorePerkHandler(perket) {
        const {
            VorePerks
        } = player.Vore
        player.Vore.VorePoints--;
        if (perket === "AbsorbStats")
            player.Vore.VorePoints -= 9;
        if (VorePerks.hasOwnProperty(perket)) {
            VorePerks[perket].Count++;
        } else {
            VorePerks[perket] = {
                Count: 1
            }
        }
        DocId(perket).value = `${perket} +${VorePerks[perket].Count}`;
        DocId("VorePerkPointsLeft").innerHTML = `You have ${player.Vore.VorePoints} perk points left.`;
    }
    DocId("AbsorbEssence").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("AbsorbEssence") : DocId("VorePerkMenuText").innerHTML = `You don't have enough perk points`;
    });
    DocId("AbsorbStats").addEventListener("click", function () {
        if (player.Vore.VorePoints > 9) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats") ? player.Vore.VorePerks.AbsorbStats.Count < 10 : true) {
                VorePerkHandler("AbsorbStats");
            }
        } else {
            DocId("VorePerkMenuText").innerHTML = `You don't have enough perk points or perk is maxed`
            return;
        }
    });
    DocId("VorePerkMenu").addEventListener("mouseover", function (e) {
        DocId("VorePerkMenuText").innerHTML = e.target.title;
    });
    DocId("FasterDigestion").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("FasterDigestion") : DocId("VorePerkMenuText").innerHTML = `You don't have enough perk points`;
    });
    DocId("HigherCapacity").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("HigherCapacity") : DocId("VorePerkMenuText").innerHTML = `You don't have enough perk points`;
    });
    DocId("AbsorbHeight").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("AbsorbHeight") : DocId("VorePerkMenuText").innerHTML = `You don't have enough perk points`;
    });
    DocId("PredatorsMeta").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("PredatorsMeta") : DocId("VorePerkMenuText").innerHTML = `You don't have enough perk points`;
    });
    DocId("LeaveVorePerkMenu").addEventListener("click", function () {
        DocId("VoreButtons").style.display = 'grid';
        DocId("VorePerkMenu").style.display = 'none';
    });

    DocId("VoreSettings").addEventListener("click", function () {
        const {
            style
        } = DocId("VoreSettingsMenu");
        style.display = style.display === 'block' ? 'none' : 'block';
    });
    DocId("AbsorbEssenceSetting").addEventListener("click", function () {
        const {
            VoreSettings
        } = Settings,
        Next = () => {
            switch (VoreSettings.AbsorbEssence) {
                case "Both":
                    return "Femininity";
                case "Femininity":
                    return "Masculinity";
                case "Masculinity":
                    return "None";
                default:
                    return "Both";
            };
        };
        VoreSettings.AbsorbEssence = Next();
        DocId("AbsorbEssenceSetting").value = `Absorb Essence ${VoreSettings.AbsorbEssence}`;
    });
    DocId("LeaveVore").addEventListener("click", function () {
        const none = ["ShowVore", "VoreAnal", "VoreBalls", "VoreBreast", "VoreVagina", "VoreStomach"].forEach((src) => {
            DocId(src).style.display = 'none';
        });
        DocId("VoreButtons").style.display = 'grid';
        DisplayGame();
    });

    function VoreEngine(progress = 0.001) {
        const VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level - 1),
            VP = player.Vore.VorePerks,
            digestionCount = VP.hasOwnProperty("FasterDigestion") ?
            1 + VP.FasterDigestion.Count : 1;
        if (player.Vore.Exp >= VoreMaxExp) {
            player.Vore.Exp = player.Vore.Exp - VoreMaxExp;
            player.Vore.Level++;
            player.Vore.VorePoints++;
        }
        DocId("VoreLevel").innerHTML = player.Vore.Level;
        DocId("VoreLevel").style.width = 100 * (player.Vore.Exp / VoreMaxExp) + "%";
        DocId("ShowStomach").innerHTML = `Stomach<br>${KgToPound(MaxStomachCapacity() - StomachCapacity())} prey<br>${KgToPound(MaxStomachCapacity())} Max`;
        DocId("ShowVagina").innerHTML = `Pussy<br>${KgToPound(MaxVaginaCapacity() - VaginaCapacity())} prey<br>${KgToPound(MaxVaginaCapacity())} Max`;
        DocId("ShowBreast").innerHTML = `Breast<br>${KgToPound(MaxBreastCapacity() - BreastCapacity())} prey<br>${KgToPound(MaxBreastCapacity())} Max`;
        DocId("ShowBalls").innerHTML = `Balls<br>${KgToPound(MaxBallsCapacity() - BallsCapacity())} prey<br>${KgToPound(MaxBallsCapacity())} Max`;
        DocId("ShowAnal").innerHTML = `Anal<br>${KgToPound(MaxAnalCapacity() - AnalCapacity())} prey<br>${KgToPound(MaxAnalCapacity())} Max`;
        DocId("VorePerks").style.display = player.Vore.VorePoints > 0 ? 'inline-block' : 'none';

        // Digestion perk

        // Stomach
        const content = (arr) => {
            return arr.length > 0 ? arr.map(arr => arr.Weight).reduce((acc, cur) => acc + cur) : 0;
        }
        while (content(player.Vore.Stomach) > MaxStomachCapacity()) {
            enemies.push(player.Vore.Stomach[player.Vore.Stomach.length - 1]);
            player.Vore.Stomach.pop();
        }
        const Stomachfullness = content(player.Vore.Stomach) / MaxStomachCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // stomach fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.StomachDigestion) {
            player.Vore.StomachExp += Stomachfullness * digestionCount * progress;
            player.Vore.Exp += Stomachfullness * digestionCount * progress;
        } else {
            player.Vore.StomachExp += 0.5 * Stomachfullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * Stomachfullness * digestionCount * progress;
        }
        for (let e of player.Vore.Stomach) {
            if (!e.hasOwnProperty("LastName")) {
                e.LastName = "";
            }
            if (VP.hasOwnProperty("AbsorbEssence")) {
                const Mshift = Math.min(VP.AbsorbEssence.Count * progress, e.Masc),
                    Fshift = Math.min(VP.AbsorbEssence.Count * progress, e.Femi)

                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        break;
                    case "Femininity":
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                    default:
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                }
            }
            if (VP.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + VP.AbsorbHeight.Count * 20 && e.Height > 1) {
                    player.Height += VP.AbsorbHeight.Count * progress;
                    e.Height -= VP.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.StomachDigestion) {
                e.Weight -= progress * digestionCount;
                for (let q of player.RaceEssence) {
                    if (q.Race === e.Race) {
                        q.amount += progress * digestionCount;
                    } else {

                    }
                }
                player.Fat += progress / 2 * digestionCount;

                if (e.Weight < 0) {
                    if (VP.hasOwnProperty("AbsorbStats") ? VP.AbsorbStats.Count > 0 : false) {
                        const snowA = Math.max(20 - VP.AbsorbStats.Count, 1),
                            ToAdd = (what) => {
                                return Math.floor(e.hasOwnProperty(what) ? e[what] / snowA : 0)
                            };
                        player.Str += ToAdd("Str");
                        player.Int += ToAdd("Int");
                        player.Charm += ToAdd("Charm");
                        player.Will += ToAdd("Will");
                        player.End += ToAdd("End");
                        player.SexSkill += ToAdd("SexSkill");
                    }
                    EventLog(`You have digested ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                    player.Vore.Stomach.splice(player.Vore.Stomach.findIndex(i => i === e), 1);
                }
            }
        }
        // Vagina

        while (content(player.Vore.Vagina) > MaxVaginaCapacity()) {
            enemies.push(player.Vore.Vagina[player.Vore.Vagina.length - 1]);
            player.Vore.Vagina.pop();
        }
        const Vaginafullness = content(player.Vore.Vagina) / MaxVaginaCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Vagina fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.VCumDigestion) {
            player.Vore.VaginaExp += Vaginafullness * digestionCount * progress;
            player.Vore.Exp += Vaginafullness * digestionCount * progress;
        } else {
            player.Vore.VaginaExp += 0.5 * Vaginafullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * Vaginafullness * digestionCount * progress;
        }
        for (let e of player.Vore.Vagina) {
            if (VP.hasOwnProperty("AbsorbEssence")) {
                const Mshift = Math.min(VP.AbsorbEssence.Count * progress, e.Masc),
                    Fshift = Math.min(VP.AbsorbEssence.Count * progress, e.Femi);
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        break;
                    case "Femininity":
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                    default:
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                }
            }
            if (VP.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + VP.AbsorbHeight.Count * 20 && e.Height > 1) {
                    player.Height += VP.AbsorbHeight.Count * progress;
                    e.Height -= VP.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.VCumDigestion) {
                e.Weight -= progress * digestionCount;
                for (let q of player.RaceEssence) {
                    if (q.Race === e.Race) {
                        q.amount += progress * digestionCount;
                    } else {

                    }
                }
                if (e.Weight < 0) {
                    if (VP.hasOwnProperty("AbsorbStats") ? VP.AbsorbStats.Count > 0 : false) {
                        const snowA = Math.max(20 - VP.AbsorbStats.Count, 1),
                            ToAdd = (what) => {
                                return Math.floor(e.hasOwnProperty(what) ? e[what] / snowA : 0)
                            };
                        player.Str += ToAdd("Str");
                        player.Int += ToAdd("Int");
                        player.Charm += ToAdd("Charm");
                        player.Will += ToAdd("Will");
                        player.End += ToAdd("End");
                        player.SexSkill += ToAdd("SexSkill");
                    }
                    EventLog(`The only trace left of ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName} is a trail of pussy discharge traveling down your legs.`);
                    player.Vore.Vagina.splice(player.Vore.Vagina.findIndex(i => i === e), 1);
                }
            } else if (Settings.VoreSettings.ChildTF) {
                e.hasOwnProperty("Counter") ? e.Counter++ : e.Counter = 0;
                e.Counter++;
                if (e.Counter > 1000) {
                    const Baby = {
                        BabyAge: 0,
                        BabyRace: e.Race,
                        Father: player.Name + " " + player.LastName,
                        Mother: player.FirstName + " " + player.LastName
                    }
                    player.Pregnant.Status = true;
                    player.Pregnant.Babies.push(Baby);
                    EventLog(`${e.Name} ${e.Race} ${e.FirstName} ${e.LastName} have been reduced to infant who now rests in your womb.`);
                    player.Vore.Vagina.splice(player.Vore.Vagina.findIndex(i => i === e), 1);
                };
            };
        };
        // Breast

        while (content(player.Vore.Breast) > MaxBreastCapacity()) {
            enemies.push(player.Vore.Breast[player.Vore.Breast.length - 1]);
            player.Vore.Breast.pop();
        }
        const Breastfullness = content(player.Vore.Breast) / MaxBreastCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Breast fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.MilkTF) {
            player.Vore.BreastExp += Breastfullness * digestionCount * progress;
            player.Vore.Exp += Breastfullness * digestionCount * progress;
        } else {
            player.Vore.BreastExp += 0.5 * Breastfullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * Breastfullness * digestionCount * progress;
        }
        for (let e of player.Vore.Breast) {
            if (VP.hasOwnProperty("AbsorbEssence")) {
                const Mshift = Math.min(VP.AbsorbEssence.Count * progress, e.Masc),
                    Fshift = Math.min(VP.AbsorbEssence.Count * progress, e.Femi)
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        break;
                    case "Femininity":
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                    default:
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                };
            };
            if (VP.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + VP.AbsorbHeight.Count * 20 && e.Height > 1) {
                    player.Height += VP.AbsorbHeight.Count * progress;
                    e.Height -= VP.AbsorbHeight.Count * progress;
                };
            };
            if (Settings.VoreSettings.MilkTF) {
                e.Weight -= progress * digestionCount;
                for (let q of player.RaceEssence) {
                    if (q.Race === e.Race) {
                        q.amount += progress * digestionCount;
                        break;
                    } else {

                    }
                }
                for (let b of player.Boobies) {
                    if (b.Milk < b.MilkMax) {
                        b.Milk += progress * digestionCount;
                    };
                };
                if (e.Weight < 0) {
                    const snowA = Math.max(20 - VP.AbsorbStats.Count, 1),
                        ToAdd = (what) => {
                            return Math.floor(e.hasOwnProperty(what) ? e[what] / snowA : 0)
                        };
                    player.Str += ToAdd("Str");
                    player.Int += ToAdd("Int");
                    player.Charm += ToAdd("Charm");
                    player.Will += ToAdd("Will");
                    player.End += ToAdd("End");
                    player.SexSkill += ToAdd("SexSkill");
                    EventLog(`There is nothing but milk left of ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                    player.Vore.Breast.splice(player.Vore.Breast.findIndex(i => i === e), 1);
                };
            };
        };
        // Balls
        while (content(player.Vore.Balls) > MaxBallsCapacity()) {
            enemies.push(player.Vore.Balls[player.Vore.Balls.length - 1]);
            player.Vore.Balls.pop();
        }
        const Ballfullness = content(player.Vore.Balls) / MaxBallsCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Balls fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.CumTF) {
            player.Vore.BallsExp += Ballfullness * digestionCount * progress;
            player.Vore.Exp += Ballfullness * digestionCount * progress;
        } else {
            player.Vore.BallsExp += 0.5 * Ballfullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * Ballfullness * digestionCount * progress;
        }
        for (let e of player.Vore.Balls) {
            if (VP.hasOwnProperty("AbsorbEssence")) {
                const Mshift = Math.min(VP.AbsorbEssence.Count * progress, e.Masc),
                    Fshift = Math.min(VP.AbsorbEssence.Count * progress, e.Femi)
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        break;
                    case "Femininity":
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                    default:
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                };
            };
            if (VP.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + VP.AbsorbHeight.Count * 20 && e.Height > 1) {
                    player.Height += VP.AbsorbHeight.Count * progress;
                    e.Height -= VP.AbsorbHeight.Count * progress;
                };
            };
            if (Settings.VoreSettings.CumTF) {
                e.Weight -= progress * digestionCount;
                for (let q of player.RaceEssence) {
                    if (q.Race === e.Race) {
                        q.amount += progress * digestionCount;
                    } else {

                    };
                };
                for (let b of player.Balls) {
                    if (b.Cum < b.CumMax) {
                        b.Cum += 100 * progress * digestionCount;
                    };
                };
                if (e.Weight < 0) {
                    if (VP.hasOwnProperty("AbsorbStats")) {
                        const snowA = Math.max(20 - VP.AbsorbStats.Count, 1),
                            ToAdd = (what) => {
                                return Math.floor(e.hasOwnProperty(what) ? e[what] / snowA : 0)
                            };
                        player.Str += ToAdd("Str");
                        player.Int += ToAdd("Int");
                        player.Charm += ToAdd("Charm");
                        player.Will += ToAdd("Will");
                        player.End += ToAdd("End");
                        player.SexSkill += ToAdd("SexSkill");
                    }
                    EventLog(`There is nothing but cum left of the ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                    player.Vore.Balls.splice(player.Vore.Balls.findIndex(i => i === e), 1);
                    return;
                }
            }
        }
        // Anal
        while (content(player.Vore.Anal) > MaxAnalCapacity()) {
            enemies.push(player.Vore.Anal[player.Vore.Anal.length - 1]);
            player.Vore.Anal.pop();
        }
        const Analfullness = content(player.Vore.Anal) / MaxAnalCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Anal fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.AnalDigestion) {
            player.Vore.AnalExp += Analfullness * digestionCount * progress;
            player.Vore.Exp += Analfullness * digestionCount * progress;
        } else {
            player.Vore.AnalExp += 0.5 * Analfullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * Analfullness * digestionCount * progress;
        }
        for (let e of player.Vore.Anal) {
            if (VP.hasOwnProperty("AbsorbEssence")) {
                const Mshift = Math.min(VP.AbsorbEssence.Count * progress, e.Masc),
                    Fshift = Math.min(VP.AbsorbEssence.Count * progress, e.Femi)
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        break;
                    case "Femininity":
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                    default:
                        e.Masc -= Mshift;
                        player.Masc += Mshift;
                        e.Femi -= Fshift;
                        player.Femi += Fshift;
                        break;
                }
            }
            if (VP.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + VP.AbsorbHeight.Count * 20 && e.Height > 1) {
                    player.Height += VP.AbsorbHeight.Count * progress;
                    e.Height -= VP.AbsorbHeight.Count * progress;
                };
            };
            if (Settings.VoreSettings.AnalDigestion) {
                e.Weight -= progress * digestionCount;
                for (let q of player.RaceEssence) {
                    if (q.Race === e.Race) {
                        q.amount += progress * digestionCount;
                        break;
                    } else {

                    };
                };
                player.Fat += progress / 2 * digestionCount;
                if (e.Weight < 0) {
                    if (VP.hasOwnProperty("AbsorbStats")) {
                        const snowA = Math.max(20 - VP.AbsorbStats.Count, 1),
                            ToAdd = (what) => {
                                return Math.floor(e.hasOwnProperty(what) ? e[what] / snowA : 0)
                            };
                        player.Str += ToAdd("Str");
                        player.Int += ToAdd("Int");
                        player.Charm += ToAdd("Charm");
                        player.Will += ToAdd("Will");
                        player.End += ToAdd("End");
                        player.SexSkill += ToAdd("SexSkill");
                    };
                    EventLog(`There is nothing left of the ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                    player.Vore.Anal.splice(player.Vore.Anal.findIndex(i => i === e), 1);
                };
            };
        };
    };

    function StomachCapacity() {
        let capacity = player.Height / 3,
            bonus = 1 + player.Vore.StomachExp / 100;
        const sub = player.Vore.Stomach.length > 0 ? player.Vore.Stomach.map(s => s.Weight).reduce((acc, cur) => acc + cur) : 0;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxStomachCapacity() {
        let capacity = player.Height / 3,
            bonus = 1 + player.Vore.StomachExp / 100;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function VaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        let capacity = player.Pussies.map(p => p.Size).reduce((acc, cur) => acc + cur),
            bonus = 1 + player.Vore.VaginaExp / 100;
        const sub = player.Vore.Vagina.length > 0 ? player.Vore.Vagina.map(v => v.Weight).reduce((acc, cur) => acc + cur) : 0;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxVaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        var capacity = player.Pussies.map(p => p.Size).reduce((acc, cur) => acc + cur);
        var bonus = 1 + player.Vore.VaginaExp / 100;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function BreastCapacity() {
        if (player.Boobies.length < 1) {
            return 0;
        };
        let capacity = player.Boobies.map(b => b.Size).reduce((acc, cur) => acc + cur),
            bonus = 1 + player.Vore.BreastExp / 100;
        const sub = player.Vore.Breast.length > 0 ? player.Vore.Breast.map(b => b.Weight).reduce((acc, cur) => acc + cur) : 0;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxBreastCapacity() {
        if (player.Boobies.length < 1) {
            return 0;
        };
        let capacity = player.Boobies.map(b => b.Size).reduce((acc, cur) => acc + cur),
            bonus = 1 + player.Vore.BreastExp / 100;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function BallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        let capacity = player.Balls.map(b => b.Size).reduce((acc, cur) => acc + cur),
            bonus = 1 + player.Vore.BallsExp / 100;
        const sub = player.Vore.Balls.length > 0 ? player.Vore.Balls.map(b => b.Weight).reduce((acc, cur) => acc + cur) : 0;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxBallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        let capacity = player.Balls.map(b => b.Size).reduce((acc, cur) => acc + cur),
            bonus = 1 + player.Vore.BallsExp / 100;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function AnalCapacity() {
        if (player.Anal.length < 1) {
            return 0;
        }
        let capacity = player.Anal.map(a => a.Size).reduce((acc, cur) => acc + cur),
            bonus = 1 + player.Vore.AnalExp / 100;
        const sub = player.Vore.Anal.length > 0 ? player.Vore.Anal.map(a => a.Weight).reduce((acc, cur) => acc + cur) : 0;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxAnalCapacity() {
        if (player.Anal.length < 1) {
            return 0;
        }
        let capacity = player.Anal.map(a => a.Size).reduce((acc, cur) => acc + cur),
            bonus = 1 + player.Vore.AnalExp / 100;
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity") ? player.Vore.VorePerks.HigherCapacity.Count > 0 : false) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }
    // End vore