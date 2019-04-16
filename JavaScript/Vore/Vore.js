// Start Vore
DocId("VoreLooks").style.display = 'none';
DocId("Vore").addEventListener("click", function () {
    Settings.Vore = Settings.Vore ? false : true;
    DocId("VoreLooks").style.display = Settings.Vore ? 'inline-block' : 'none';
    DocId("Vore").innerHTML = "Vore " + Settings.Vore;
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

function VorePerkFunc() {
    const {
        VorePerks,
        VorePoints
    } = player.Vore,
        value = (str) => {
            var regex = /([a-z])([A-Z])/g;
            const text = () => {
                return str.replace(regex, '$1 $2')
            }
            DocId(str).innerHTML = VorePerks.hasOwnProperty(str) ? VorePerks[str].Count > 0 ?
                `${text()} + ${VorePerks[str].Count}` : text() : text();
        },
        strings = ["AbsorbEssence", "FasterDigestion", "AbsorbStats", "HigherCapacity", "AbsorbHeight", "PredatorsMeta"].forEach((str) => {
            value(str);
        })
    DocId("VoreButtons").style.display = 'none';
    DocId("VorePerkMenu").style.display = 'block';
    DocId("VorePerkPointsLeft").innerHTML = `You have ${VorePoints} perk points left.`;
}

function VorePerkHandler(perket) {
    const {
        VorePerks
    } = player.Vore
    if (perket === "AbsorbStats" && player.Vore.VorePoints > 9) {
        player.Vore.VorePoints -= 10;
        Local();
    } else {
        player.Vore.VorePoints--;
        Local();
    }

    function Local() {
        if (VorePerks.hasOwnProperty(perket)) {
            VorePerks[perket].Count > 0 ? VorePerks[perket].Count++ : VorePerks[perket] = {
                Count: 1
            };
        } else {
            VorePerks[perket] = {
                Count: 1
            };
        };
    }
    VorePerkFunc();
}
DocId("VorePerkMenu").addEventListener("mouseover", function (e) {
    DocId("VorePerkMenuText").innerHTML = e.target.title;
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
["AbsorbEssence", "FasterDigestion", "HigherCapacity", "AbsorbHeight", "PredatorsMeta"].forEach((str) => {
    DocId(str).addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler(str) : DocId("VorePerkMenuText").innerHTML = `You don't have enough perk points`;
    });
});
DocId("LeaveVorePerkMenu").addEventListener("click", function () {
    VoreButtonsFunc();
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
    DocId("AbsorbEssenceSetting").innerHTML = `Absorb Essence ${VoreSettings.AbsorbEssence}`;
});
DocId("LeaveVore").addEventListener("click", function () {
    DocId("ShowVore").style.display = 'none';
    DisplayGame();
});

function VoreEngine() {
    const progress = 0.1,
        VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level - 1),
        VP = player.Vore.VorePerks,
        digestionCount = VP.hasOwnProperty("FasterDigestion") ?
        1 + VP.FasterDigestion.Count : 1,
        {
            Vore
        } = player;
    if (Vore.Exp >= VoreMaxExp) {
        Vore.Exp = Vore.Exp - VoreMaxExp;
        Vore.Level++;
        Vore.VorePoints++;
    }
    DocId("VoreLevel").innerHTML = `${Vore.Level} (${Math.floor(Vore.Exp)}/${Math.ceil(VoreMaxExp)})`;
    DocId("VoreLevel").style.width = 100 * (Vore.Exp / VoreMaxExp) + "%";
    //  DocId("VorePerks").style.display = Vore.VorePoints > 0 ? 'inline-block' : 'none';

    // Digestion perk

    // Stomach
    const content = (arr) => {
        return arr.length > 0 ? arr.map(arr => arr.Weight).reduce((acc, cur) => acc + cur) : 0;
    }
    while (content(Vore.Stomach) > MaxStomachCapacity()) {
        enemies.push(Vore.Stomach[Vore.Stomach.length - 1]);
        Vore.Stomach.pop();
    }
    const Stomachfullness = content(Vore.Stomach) / MaxStomachCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // stomach fullness should be able to vary between 0 and 2
    if (Settings.VoreSettings.StomachDigestion) {
        Vore.StomachExp += Stomachfullness * digestionCount * progress;
        Vore.Exp += Stomachfullness * digestionCount * progress;
    } else {
        Vore.StomachExp += 0.5 * Stomachfullness * digestionCount * progress;
        Vore.Exp += 0.5 * Stomachfullness * digestionCount * progress;
    }
    for (let e of Vore.Stomach) {
        if (!e.hasOwnProperty("LastName")) {
            e.LastName = "";
        }
        if (VP.hasOwnProperty("AbsorbEssence")) {
            AbsorbEssenceCalc(e);
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
                    AbsorbStatsCalc(e);
                }
                EventLog(`You have digested ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Vore.Stomach.splice(Vore.Stomach.findIndex(i => i === e), 1);
            }
        }
    }
    // Vagina

    while (content(Vore.Vagina) > MaxVaginaCapacity()) {
        enemies.push(Last(Vore.Vagina));
        Vore.Vagina.pop();
    }
    const Vaginafullness = content(Vore.Vagina) / MaxVaginaCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Vagina fullness should be able to vary between 0 and 2
    if (Settings.VoreSettings.VCumDigestion) {
        Vore.VaginaExp += Vaginafullness * digestionCount * progress;
        Vore.Exp += Vaginafullness * digestionCount * progress;
    } else {
        Vore.VaginaExp += 0.5 * Vaginafullness * digestionCount * progress;
        Vore.Exp += 0.5 * Vaginafullness * digestionCount * progress;
    }
    for (let e of Vore.Vagina) {
        if (VP.hasOwnProperty("AbsorbEssence")) {
            AbsorbEssenceCalc(e);
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
                    AbsorbStatsCalc(e);
                }
                EventLog(`The only trace left of ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName} is a trail of pussy discharge traveling down your legs.`);
                Vore.Vagina.splice(Vore.Vagina.findIndex(i => i === e), 1);
            }
        } else if (Settings.VoreSettings.ChildTF) {
            e.hasOwnProperty("Counter") ? e.Counter++ : e.Counter = 0;
            e.Counter++;
            if (e.Counter > 73) {
                const Baby = {
                    BabyAge: 0,
                    BabyRace: e.Race,
                    Father: player.Name + " " + player.LastName,
                    Mother: player.FirstName + " " + player.LastName
                }
                player.Pregnant.Status = true;
                player.Pregnant.Babies.push(Baby);
                EventLog(`${e.Name} ${e.Race} ${e.FirstName} ${e.LastName} have been reduced to infant who now rests in your womb.`);
                Vore.Vagina.splice(Vore.Vagina.findIndex(i => i === e), 1);
            };
        };
    };
    // Breast

    while (content(Vore.Breast) > MaxBreastCapacity()) {
        enemies.push(Last(Vore.Breast));
        Vore.Breast.pop();
    }
    const Breastfullness = content(Vore.Breast) / MaxBreastCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Breast fullness should be able to vary between 0 and 2
    if (Settings.VoreSettings.MilkTF) {
        Vore.BreastExp += Breastfullness * digestionCount * progress;
        Vore.Exp += Breastfullness * digestionCount * progress;
    } else {
        Vore.BreastExp += 0.5 * Breastfullness * digestionCount * progress;
        Vore.Exp += 0.5 * Breastfullness * digestionCount * progress;
    }
    for (let e of Vore.Breast) {
        if (VP.hasOwnProperty("AbsorbEssence")) {
            AbsorbEssenceCalc(e);
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
                if (VP.hasOwnProperty("AbsorbStats") ? VP.AbsorbStats.Count > 0 : false) {
                    AbsorbStatsCalc(e);
                }
                EventLog(`There is nothing but milk left of ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Vore.Breast.splice(Vore.Breast.findIndex(i => i === e), 1);
            };
        };
    };
    // Balls
    while (content(Vore.Balls) > MaxBallsCapacity()) {
        enemies.push(Last(Vore.Balls));
        Vore.Balls.pop();
    }
    const Ballfullness = content(Vore.Balls) / MaxBallsCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Balls fullness should be able to vary between 0 and 2
    if (Settings.VoreSettings.CumTF) {
        Vore.BallsExp += Ballfullness * digestionCount * progress;
        Vore.Exp += Ballfullness * digestionCount * progress;
    } else {
        Vore.BallsExp += 0.5 * Ballfullness * digestionCount * progress;
        Vore.Exp += 0.5 * Ballfullness * digestionCount * progress;
    }
    for (let e of Vore.Balls) {
        if (VP.hasOwnProperty("AbsorbEssence")) {
            AbsorbEssenceCalc(e);
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
                    AbsorbStatsCalc(e);
                }
                EventLog(`There is nothing but cum left of the ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Vore.Balls.splice(Vore.Balls.findIndex(i => i === e), 1);
                return;
            }
        }
    }
    // Anal
    while (content(Vore.Anal) > MaxAnalCapacity()) {
        enemies.push(Last(Vore.Anal));
        Vore.Anal.pop();
    }
    const Analfullness = content(Vore.Anal) / MaxAnalCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Anal fullness should be able to vary between 0 and 2
    if (Settings.VoreSettings.AnalDigestion) {
        Vore.AnalExp += Analfullness * digestionCount * progress;
        Vore.Exp += Analfullness * digestionCount * progress;
    } else {
        Vore.AnalExp += 0.5 * Analfullness * digestionCount * progress;
        Vore.Exp += 0.5 * Analfullness * digestionCount * progress;
    }
    for (let e of Vore.Anal) {
        if (VP.hasOwnProperty("AbsorbEssence")) {
            AbsorbEssenceCalc(e);
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
                    AbsorbStatsCalc(e);
                };
                EventLog(`There is nothing left of the ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Vore.Anal.splice(Vore.Anal.findIndex(i => i === e), 1);
            };
        };
    };

    function AbsorbStatsCalc(prey) {
        const snowA = Math.max(20 - VP.AbsorbStats.Count, 1);

        function ToAdd(what) {
            return Math.floor(prey.hasOwnProperty(what) ? prey[what] / snowA : 0)
        };
        player.Str += ToAdd("Str");
        player.Int += ToAdd("Int");
        player.Charm += ToAdd("Charm");
        player.Will += ToAdd("Will");
        player.End += ToAdd("End");
        player.SexSkill += ToAdd("SexSkill");
    }

    function AbsorbEssenceCalc(prey) {
        const Mshift = Math.min(VP.AbsorbEssence.Count * progress, prey.Masc),
            Fshift = Math.min(VP.AbsorbEssence.Count * progress, prey.Femi)

        switch (Settings.VoreSettings.AbsorbEssence) {
            case "None":
                break;
            case "Masculinity":
                prey.Masc -= Mshift;
                player.Masc += Mshift;
                break;
            case "Femininity":
                prey.Femi -= Fshift;
                player.Femi += Fshift;
                break;
            default:
                prey.Masc -= Mshift;
                player.Masc += Mshift;
                prey.Femi -= Fshift;
                player.Femi += Fshift;
                break;
        }
    }
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