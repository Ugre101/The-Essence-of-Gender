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
            AbsorbEssence: true,
            AbsorbRace: true
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
    const options = DocId("VoreSettingsMenu"),
        {
            style
        } = options;
    while (options.hasChildNodes()) {
        options.removeChild(options.lastChild);
    }
    style.display = style.display === 'block' ? 'none' : 'block';
    if (style.display === 'block') {
        const {
            VoreSettings
        } = Settings,
        AE = ButtonButton(`Absorb Essence ${VoreSettings.AbsorbEssence}`, ``),
            AR = ButtonButton(`Absorb Race-Essence ${VoreSettings.AbsorbRace}`, ``),
            frag = document.createDocumentFragment();
        AE.addEventListener("click", function () {
            function Next() {
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
            AE.innerHTML = `Absorb Essence ${VoreSettings.AbsorbEssence}`;
        });
        AR.addEventListener("click", function () {
            VoreSettings.AbsorbRace = VoreSettings.AbsorbRace ? false : true;
            AR.innerHTML = `Absorb Race-Essence ${VoreSettings.AbsorbRace}`;
        });
        [AE, AR].forEach((src) => {
            frag.appendChild(src);
        });
        options.appendChild(frag);
    }
});

DocId("LeaveVore").addEventListener("click", function () {
    DocId("ShowVore").style.display = 'none';
    DisplayGame();
});

function VoreEngine() {
    const progress = 0.1,
        VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level - 1),
        {
            Stomach,
            Vagina,
            Breast,
            Balls,
            Anal,
            VorePerks
        } = player.Vore,
        digestionCount = VorePerks.hasOwnProperty("FasterDigestion") ?
        1 + VorePerks.FasterDigestion.Count : 1,
        {
            Vore
        } = player,
        {
            StomachDigestion,
            VCumDigestion,
            ChildTF,
            MilkTF,
            CumTF,
            AnalDigestion
        } = Settings.VoreSettings;
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
    while (content(Stomach) > MaxStomachCapacity()) {
        enemies.push(Last(Stomach));
        Stomach.pop();
    }
    const Stomachfullness = content(Stomach) / MaxStomachCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // stomach fullness should be able to vary between 0 and 2
    Vore.StomachExp += StomachDigestion ? VoreExpTick(Stomachfullness) : 0.5 * VoreExpTick(Stomachfullness);
    Vore.Exp += StomachDigestion ? VoreExpTick(Stomachfullness) : 0.5 * VoreExpTick(Stomachfullness);
    for (let e of Stomach) {
        AbsorbEssenceCalc(e);
        AbsorbHeightCalc(e);
        if (StomachDigestion) {
            e.Weight -= progress * digestionCount;
            AbsorbRace(e);
            player.Fat += progress / 2 * digestionCount;
            if (e.Weight < 0) {
                AbsorbStatsCalc(e);
                EventLog(`You have digested ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Stomach.splice(Stomach.findIndex(i => i === e), 1);
            };
        };
    };
    // Vagina

    while (content(Vagina) > MaxVaginaCapacity()) {
        enemies.push(Last(Vagina));
        Vagina.pop();
    }
    const Vaginafullness = content(Vagina) / MaxVaginaCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Vagina fullness should be able to vary between 0 and 2
    Vore.VaginaExp += VCumDigestion ? VoreExpTick(Vaginafullness) : 0.5 * VoreExpTick(Vaginafullness);
    Vore.Exp += VCumDigestion ? VoreExpTick(Vaginafullness) : 0.5 * VoreExpTick(Vaginafullness);
    for (let e of Vagina) {
        AbsorbEssenceCalc(e);
        AbsorbHeightCalc(e);
        if (VCumDigestion) {
            e.Weight -= progress * digestionCount;
            AbsorbRace(e);
            if (e.Weight < 0) {
                AbsorbStatsCalc(e);
                EventLog(`The only trace left of ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName} is a trail of pussy discharge traveling down your legs.`);
                Vagina.splice(Vagina.findIndex(i => i === e), 1);
            }
        } else if (ChildTF) {
            e.hasOwnProperty("Counter") ? e.Counter++ : e.Counter = 0;
            e.Counter++;
            if (e.Counter > 73) {
                const Baby = {
                    BabyAge: 0,
                    BabyRace: e.Race,
                    Father: `${player.Name} ${player.LastName}`,
                    Mother: `${player.Name} ${player.LastName}`
                }
                player.Pregnant.Status = true;
                player.Pregnant.Babies.push(Baby);
                EventLog(`${e.Name} ${e.Race} ${e.FirstName} ${e.LastName} have been reduced to infant who now rests in your womb.`);
                Vagina.splice(Vagina.findIndex(i => i === e), 1);
            };
        };
    };
    // Breast

    while (content(Breast) > MaxBreastCapacity()) {
        enemies.push(Last(Breast));
        Breast.pop();
    }
    const Breastfullness = content(Breast) / MaxBreastCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Breast fullness should be able to vary between 0 and 2
    Vore.BreastExp += MilkTF ? VoreExpTick(Breastfullness) : 0.5 * VoreExpTick(Breastfullness);
    Vore.Exp += MilkTF ? VoreExpTick(Breastfullness) : 0.5 * VoreExpTick(Breastfullness);
    for (let e of Breast) {
        AbsorbEssenceCalc(e);
        AbsorbHeightCalc(e);
        if (MilkTF) {
            e.Weight -= progress * digestionCount;
            AbsorbRace(e);
            for (let b of player.Boobies) {
                if (b.Milk < b.MilkMax) {
                    b.Milk += progress * digestionCount;
                };
            };
            if (e.Weight < 0) {
                AbsorbStatsCalc(e);
                EventLog(`There is nothing but milk left of ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Breast.splice(Breast.findIndex(i => i === e), 1);
            };
        };
    };
    // Balls
    while (content(Balls) > MaxBallsCapacity()) {
        enemies.push(Last(Balls));
        Balls.pop();
    }
    const Ballfullness = content(Balls) / MaxBallsCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Balls fullness should be able to vary between 0 and 2
    Vore.BallsExp += CumTF ? VoreExpTick(Ballfullness) : 0.5 * VoreExpTick(Ballfullness);
    Vore.Exp += CumTF ? VoreExpTick(Ballfullness) : 0.5 * VoreExpTick(Ballfullness);
    for (let e of Balls) {
        AbsorbEssenceCalc(e);
        AbsorbHeightCalc(e);
        if (CumTF) {
            e.Weight -= progress * digestionCount;
            AbsorbRace(e);
            for (let b of player.Balls) {
                if (b.Cum < b.CumMax) {
                    b.Cum += 100 * progress * digestionCount;
                };
            };
            if (e.Weight < 0) {
                AbsorbStatsCalc(e);
                EventLog(`There is nothing but cum left of the ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Balls.splice(Balls.findIndex(i => i === e), 1);
                return;
            };
        };
    };
    // Anal
    while (content(Anal) > MaxAnalCapacity()) {
        enemies.push(Last(Anal));
        Anal.pop();
    }
    const Analfullness = content(Anal) / MaxAnalCapacity() || 0.1; // prevent NaN if maxCapacity is 0
    // Anal fullness should be able to vary between 0 and 2
    Vore.AnalExp += AnalDigestion ? VoreExpTick(Analfullness) : 0.5 * VoreExpTick(Analfullness);
    Vore.Exp += AnalDigestion ? VoreExpTick(Analfullness) : 0.5 * VoreExpTick(Analfullness);
    for (let e of Anal) {
        AbsorbEssenceCalc(e);
        AbsorbHeightCalc(e);
        if (AnalDigestion) {
            e.Weight -= progress * digestionCount;
            AbsorbRace(e);
            player.Fat += progress / 2 * digestionCount;
            if (e.Weight < 0) {
                AbsorbStatsCalc(e);
                EventLog(`There is nothing left of the ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName}`);
                Anal.splice(Anal.findIndex(i => i === e), 1);
            };
        };
    };

    // Testing have functions to handle perk stuff.
    function AbsorbRace(prey) {
        if (Settings.VoreSettings.hasOwnProperty("AbsorbRace") ? Settings.VoreSettings.AbsorbRace : false) {
            const {
                RaceEssence
            } = player;
            if (RaceEssence.some(e => e.Race === prey.Race)) {
                const index = RaceEssence.findIndex(i => i.Race === prey.Race);
                RaceEssence[index].amount += progress * digestionCount;
            } else {
                const Race = {
                    Race: prey.Race.Capitalize(),
                    amount: 1
                }
                RaceEssence.push(Race);
            }
        }
    }

    function AbsorbHeightCalc(prey) {
        if (VorePerks.hasOwnProperty("AbsorbHeight") ? VorePerks.AbsorbHeight.Count > 0 : false) {
            const {
                Count
            } = player.Vore.VorePerks.AbsorbHeight;
            if (player.Height < 160 + Count * 20 && prey.Height > 1) {
                player.Height += Count * progress;
                prey.Height -= Count * progress;
            };
        };
    };

    function AbsorbStatsCalc(prey) {
        if (VorePerks.hasOwnProperty("AbsorbStats") ? VorePerks.AbsorbStats.Count > 0 : false) {
            const snowA = Math.max(20 - VorePerks.AbsorbStats.Count, 1);

            function ToAdd(what) {
                return Math.floor(prey.hasOwnProperty(what) ? prey[what] / snowA : 0)
            };
            player.Str += ToAdd("Str");
            player.Int += ToAdd("Int");
            player.Charm += ToAdd("Charm");
            player.Will += ToAdd("Will");
            player.End += ToAdd("End");
            player.SexSkill += ToAdd("SexSkill");
        };
    };

    function AbsorbEssenceCalc(prey) {
        if (VorePerks.hasOwnProperty("AbsorbEssence") ? VorePerks.AbsorbEssence.Count > 0 : false) {
            const {
                Count
            } = player.Vore.VorePerks.AbsorbEssence,
                Mshift = Math.min(Count * progress, prey.Masc),
                Fshift = Math.min(Count * progress, prey.Femi);
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
            };
        };
    };

    function VoreExpTick(organfullness) {
        return Math.max(0, organfullness * progress * digestionCount)
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