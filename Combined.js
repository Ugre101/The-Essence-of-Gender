// player variable
var player = {
    Name: "",
    LastName: "",
    Skincolor: "",
    MaxHealth: 100,
    Health: 100,
    MaxWillHealth: 100,
    WillHealth: 100,
    Str: 10,
    Int: 10,
    Charm: 10,
    Will: 10,
    End: 10,
    SexSkill: 10,
    Orgasm: 0, // Need to get rid of
    Arousal: 0, // This to shouldn't be saved between game sessions.
    Gold: 0,
    Exp: 0,
    level: 1,
    SkillPoints: 0,
    PerkPoints: 0,
    RaceEssence: [
        Human = {
            Race: "Human",
            amount: 100
        }
    ],
    Race: "human",
    SecondRace: "human",
    Dicks: [],
    Balls: [],
    Pussies: [],
    Boobies: [
        Boob = {
            Size: 1,
            Type: "human",
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 0
        }
    ],
    Anal: [
        Anal = {
            Size: 0,
            Type: "human",
            Virgin: true,
            stretch: 1,
        }
    ],
    Tails: [],
    Perks: {
        ExtraHealth: {
            Count: 0
        },
        ExtraWillHealth: {
            Count: 0
        },
        FasterRest: {
            Count: 0
        },
        StealMore: {
            Count: 0
        },
        GiveEssence: {
            Count: 0
        }
    },
    RestRate: 1,
    EssenceDrain: 5,
    GiveEssence: 0,
    Map: "Start",
    Area: "First",
    Quests: [],
    Weight: 60,
    Height: 160,
    Fat: 10,
    Muscle: 20,
    Masc: 0,
    Femi: 0,
    Fertility: 10,
    Virility: 5,
    Pregnant: {
        Status: false,
        Babies: []
    },
    Children: [],
    Inventory: [],
    Age: 18,
    Face: {
        Eyes: "brown",
        HairStyle: "curly",
        HairColor: "brown",
        HairLength: "shoulder-length"
    },
    Vore: {
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
    },
    cumGround: 0, // Need to get rid of
    MagicAffinity: {
        Fire: 0,
        Elemental: 0, // Fire, ice, water, stone, etc
        Restoration: 0 // Healing, returning to orginal shape/age.
    },
    Mana: 100,
    Spells: [ // Array so that I can add more without problems
    ],
    Blessings: {
        MountainShrine: {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            Malepreg: 0
        },
        ChimeraShrine: {
            Donated: 0,
            Points: 0
        }
    }
};

// House variable
var House = {
    Owned: false,
    BedLevel: 0,
    Dorm: 0,
    Kitchen: 0,
    Gym: 0,
    Brothel: 0,
    Dormmates: [],
    Portal: {
        Owned: false,
        Mountain: false,
        BlackMarket: false
    },
    Nursery: 0
};

// Flag variables
var Flags = {
    BanditLord: false,
    Impregnations: 0,
    Pregnations: 0,
    Date: {
        Year: 1200,
        Month: 0,
        Day: 0,
        Hour: 0
    },
    LastTrain: {
        Day: 0,
        Month: 0,
        Year: 0
    },
    FairiesBeaten: 0,
    FirstCityLike: 0
};

// Settings variables
var Settings = {
    BackColor: "#9099a7",
    MapColor: "#808080",
    TextColor: "#000000",
    BorderColor: "#B22222",
    TextFont: "Verdana, Geneva, sans-serif",
    FontSize: 1,
    MapPercent: 0.8,
    GiveEssence: "Both",
    Skip: false,
    Vore: false,
    ImgPack: false,
    EssenceAuto: true,
    // For testing animals
    // AnimalSpawn: true,
    LogLength: 100,
    Pronoun: {
        Status: false,
        Herm: "hermaphrodite",
        Male: "male",
        Female: "female",
        Doll: "doll",
        DickGirl: "dickgirl",
        CuntBoy: "cuntboy"
    },
    MaxLimbs: {
        MaxBoobs: 5,
        MaxVaginas: 5,
        MaxDicks: 5,
        MaxBalls: 5
    },
    Brothel: {
        ServeMasc: true,
        ServeFemi: true
    },
    Inch: false,
    Approx: false,
    VoreSettings: {
        StomachDigestion: true,
        CumTF: true,
        ChildTF: false,
        VCumDigestion: true,
        MilkTF: true,
        AnalDigestion: true,
        AbsorbEssence: true
    },
    BalanceParts: false,
    BalanceSettings: {
        StepPussy: 1500,
        StepBoobs: 1000,
        StepPenis: 1000,
        StepBalls: 1500
    },
    Cheats: {
        Enabled: false,
        Gold: false,
        Masc: false,
        Femi: false,
        Exp: false,
        VoreExp: false,
        FastTime: false
    },
    HighLightDoors: false,
    PlayerSpriteEnable: false
}

var Partners = {
    Succubus: {
        FirstName: "Lynnlea",
        LastName: "Qinienne",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0,
        Beaten: false
    },
    FarmOwner: {
        FirstName: "Teoviz",
        LastName: "",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0
    },
    TribeChief: {
        FirstName: "",
        LastName: "",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0
    },
    TribeChiefWife: {
        FirstName: "",
        LastName: "",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0
    }
}

function PlayerImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {},
        loaded = 0;
    if (Array.isArray(arr)) {
        for (let e of arr) {
            let img = new Image();
            img.onload = EmageLoaded;
            img.src = "Res/" + e + ".png";
            images[e] = img;
        }
    } else {
        return
    }

    function EmageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}
var Player_SpriteImages = {};
const PlayerSpriteLoader = PlayerImageLoad(["playerSprite"], function (images) {
    Player_SpriteImages = images;
});



// Start values for canvas
var medium = Math.ceil((document.documentElement.clientHeight / 20) * Settings.MapPercent) * 20,
    grid = (medium / 20),
    sprite = {
        x: grid,
        y: grid,
        Size: 1,
    };

// Start page
DocId("GoToCharCreator").addEventListener("click", function () {
    CharCreator();
    DocId("CharCreator").style.display = 'block';
    DocId("StartPage").style.display = 'none';
});

function CharCreator() { // No need have these active for players who use load.
    // Maybe a bit overkill but did it to train.
    const BeginButton = DocId("Begin"),
        BackHomeButton = DocId("BackHome"),
        StartAutoEssenceButton = DocId("StartAutoEssence"),
        startgameButton = DocId("startgame"),
        VoreStartButton = DocId("VoreStart"),
        CharCreator = DocId("CharCreator"),
        page2 = DocId("page2");

    BeginButton.addEventListener("click", begin)
    BackHomeButton.addEventListener("click", BackHome)
    StartAutoEssenceButton.addEventListener("click", StartAutoEssence)
    startgameButton.addEventListener("click", startgame)
    VoreStartButton.addEventListener("click", VoreStart)

    function begin() {
        const form = document.forms.CreatePlayer.elements;
        CharCreator.style.display = 'none';
        page2.style.display = 'block';
        player.Name = form[0].value;
        player.LastName = form[1].value;
        // Will remove hair and skincolor later, as I want customize player to be a part of the game.
        player.Face.HairColor = form[2].value;
        player.Skincolor = form[3].value;
        player.Spells.push(SpellDictLite.MinorHealing);
        const {
            Day,
            Month,
            Year
        } = Flags.Date, {
            Name,
            LastName,
            Height,
            Weight,
            Skincolor,
            Face
        } = player
        DocId("CurrentDate").innerHTML = `${Day}/${Month}/${Year}`;
        DocId("looks").innerHTML = `You are ${Name} ${LastName}, a ${Math.round(Height)} cm tall 
        ${Pronoun(CheckGender(player))}, who weighs ${KgToPound(Weight)}. Looking at yourself in a mirror you see 
        ${Face.HairColor} hair and ${Skincolor} skin; hopefully the last time you see your body absent of any 
        other details or personality.<br><br>For today, you will forge your own way in this world.`;

        requestAnimationFrame(loop);
        DateEngine();
    };

    function BackHome() {
        CharCreator.style.display = 'none';
        DocId("StartPage").style.display = 'grid';
        RemoveListerners();
    };

    function StartAutoEssence() {
        Settings.EssenceAuto = Settings.EssenceAuto ? false : true;
        StartAutoEssenceButton.value = `Auto TF ${Settings.EssenceAuto}`;
    };

    function startgame() {
        page2.style.display = 'none';
        DisplayGame();
        HemScale();
        RemoveListerners();
        StatusButtonSystem();
    };

    function VoreStart() {
        Settings.Vore = Settings.Vore ? false : true;
        VoreStartButton.value = "Vore " + Settings.Vore;
    };

    function RemoveListerners() {
        BeginButton.removeEventListener("click", begin);
        BackHomeButton.removeEventListener("click", BackHome)
        StartAutoEssenceButton.removeEventListener("click", StartAutoEssence)
        startgameButton.removeEventListener("click", startgame)
        VoreStartButton.removeEventListener("click", VoreStart)
    };
};

// Sets display to none used for menu buttons
function DisplayNone() {
    GamePaused = true;
    const DisplayNoneArray = [
        "map", "optionpage", "ShowLooks", "LevelMenu", "LoadMenu", "SaveMenu", "PerkOptionsMenu",
        "ShowQuests", "DetailedInfo", "Levels", "ShowVore", "EssenceOptionsMenu",
        "PronounForm", "Inventory", "ChildrenMenu", "SpellBook"
    ].forEach(function (src) {
        DocId(src).style.display = 'none';
    });
    if (window.innerHeight < 600) {
        const MobileNone = ["map", "buttons", "status", "EventLog"].forEach(function (src) {
            DocId(src).style.display = 'none';
        });
    };
};

function DisplayGame() {
    battle = false;
    GamePaused = false;
    const DisplayGameArray = ["map", "buttons", "status", "EventLog"].forEach(function (src) {
        DocId(src).style.display = 'block';
    });
    DocId("EmptyButtons").style.display = 'none';
    if (MobileButtons) {
        DocId("buttons").style.width = 18 + "%";
        DocId("buttons").style.maxWidth = 260 + "px";
        DocId("FirstButtons").style.display = 'none';
        DocId("SecondButtons").style.display = 'none';
        MobileButtons = false;
    };
};
// More buttons for small screen height
DocId("MoreButtons").addEventListener("click", function () {
    DocId("FirstButtons").style.display = 'none';
    DocId("SecondButtons").style.display = 'block';
});

DocId("LessButtons").addEventListener("click", function () {
    DocId("FirstButtons").style.display = 'block';
    DocId("SecondButtons").style.display = 'none';
});

DocId("Quests").addEventListener("click", function () {
    DisplayNone();
    const Quest = DocId("QuestTexts"),
        questText = document.createDocumentFragment();
    DocId("ShowQuests").style.display = 'block';

    while (Quest.hasChildNodes()) {
        Quest.removeChild(Quest.lastChild);
    };

    for (let e of player.Quests) {
        const div = document.createElement("div"),
            h4 = document.createElement("h4"),
            p = document.createElement("p"),
            h4text = document.createTextNode(e.Name),
            Tier = e.hasOwnProperty("Tier") ? `<br>Tier: ${e.Tier}` + (e.Tier > 4 ? ` max` : ``) : ``;
        h4.appendChild(h4text);
        div.appendChild(h4);
        p.innerHTML = `Completed: ${e.Completed} <br>Count:  ${e.Count} ${Tier} <br><br>`;
        div.appendChild(p);

        if (window.innerHeight > 500) {
            const LoveQuests = ["Get Impregnated", "Impregnate maidens"],
                FightQuests = ["ElfHunt", "BanditLord"];
            if (LoveQuests.findIndex(i => i === e.Name) > -1) {
                div.classList.add("LoverQuest");
            } else if (FightQuests.findIndex(i => i === e.Name) > -1) {
                div.classList.add("FightQuest");
            };
        };

        questText.appendChild(div);
    }
    DocId("QuestTexts").appendChild(questText);
});

DocId("QuestsLeave").addEventListener("click", function () {
    DocId("ShowQuests").style.display = 'none';
    DisplayGame();
});

var battle = true,
    GamePaused = true;

function Pronoun(gender) {
    switch (gender) {
        case "hermaphrodite":
            return Settings.Pronoun.Status ? Settings.Pronoun.Herm : gender;
        case "cuntboy":
            return Settings.Pronoun.Status ? Settings.Pronoun.CuntBoy : gender;
        case "male":
            return Settings.Pronoun.Status ? Settings.Pronoun.Male : gender;
        case "female":
            return Settings.Pronoun.Status ? Settings.Pronoun.Female : gender;
        case "dickgirl":
            return Settings.Pronoun.Status ? Settings.Pronoun.DickGirl : gender;
        case "doll":
            return Settings.Pronoun.Status ? Settings.Pronoun.Doll : gender;
    }
}

function CheckTitle(who) {
    // Titles to seperate a herm with 30femi and 2500masc from a herm with 200femi and 200masc 
    if (who.Masc < who.Femi) {
        return "feminine"
    } else if (who.Femi < who.Masc) {
        return "masculine" // Need more titles for like ultra masculine
    }
}

function CheckGender(who) {
    if (who.Dicks.length > 0 && who.Pussies.length > 0) {
        return "hermaphrodite";
    } else if (who.Dicks.length > 0 && Math.floor(who.Boobies.some(e => e.Size > 2))) {
        return "dickgirl";
    } else if (who.Dicks.length > 0) {
        return "male";
    } else if (who.Pussies.length > 0 && who.Boobies.some(e => e.Size < 2)) { // Check all rows of boobs
        return "cuntboy";
    } else if (who.Pussies.length > 0) {
        return "female";
    } else {
        return "doll"
    }
}
// Level System

function ExpCheck() {
    const MaxExp = 30 * Math.pow(1.05, player.level - 1);
    DocId("StatusLevel").style.width = Math.min(100 * (player.Exp / MaxExp), 100) + "%";
    DocId("LevelButton").style.display = (player.SkillPoints > 0 || player.PerkPoints > 0) ? 'inline-block' : 'none';

    if (player.Exp >= MaxExp) {
        player.Exp = player.Exp - MaxExp;
        player.level++;
        player.SkillPoints += 3;
        player.PerkPoints += 1;
        return;
    }
}

// function to update player & enemy stats, check if you win or lose and deal damage to player

var enemies = [];

//    DocId("PlayerLooks").innerHTML = BoobLook(player) + "<br>" + PussyLook(player) + "<br>" + DickLook(player);
//    DocId("EnemyLooks").innerHTML = BoobLook(enemies[EnemyIndex]) + "<br>" + PussyLook(enemies[EnemyIndex]) + "<br>" + DickLook(enemies[EnemyIndex]);

function HeightSystem(me, they) {
    if (me.Height > they.Height) {
        if (me.Height * 0.95 < they.Height) {
            return "Your opponent is almost as tall as you.";
        } else if (me.Height * 0.9 < they.Height) {
            return "You are a head taller than your opponent.";
        } else if (me.Height * 0.8 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.7 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.6 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.5 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.4 < they.Height) {
            return "Your opponent is short enough for their head to be almost be in level with your groin, how convenient.";
        } else if (me.Height * 0.3 < they.Height) {
            return "Looking down at your opponent you see that they are almost tall enough to reach your groin.";
        } else if (me.Height * 0.2 < they.Height) {
            return "Looking down at your opponent you see that they are just tall enough to reach over your knees.";
        } else if (me.Height * 0.1 < they.Height) {
            return "Your opponent is so short, that they can't reach over your knees!";
        } else {
            return "Your opponent is so small than you could hold them in one hand."
        }
    } else if (me.Height == they.Height) {
        return "You and your opponent exact same height! What are the odds?"
    } else {
        if (they.Height * 0.95 < me.Height) {
            return "You are almost as tall as your opponent."
        } else if (they.Height * 0.9 < me.Height) {
            return "You are a head shorter than your opponent."
        } else {
            return "Your opponent is taller than you."
        }
    };
};

function SexColor(who, where) {
    const WS = DocId(where + "Sex").style;
    switch (CheckGender(who)) {
        case "cuntboy":
        case "female":
            WS.backgroundColor = "rgba(255, 192, 203, 0.7)";
            WS.border = "5px ridge rgba(255, 192, 203)";
            break;
        case "dickgirl":
        case "male":
            WS.backgroundColor = "rgba(0, 0, 255, 0.3)";
            WS.border = "5px ridge rgba(0, 0, 255)";
            break;
        case "hermaphrodite":
            WS.backgroundColor = "rgba(128, 0, 128, 0.3)";
            WS.border = "5px ridge rgba(128, 0, 128)";
            break;
        case "doll":
            WS.backgroundColor = "rgba(245, 245, 220)";
            WS.border = "5px ridge rgb(201, 201, 182)";
            break;
    }
}

function HealthWillBars() {
    const health = DocId("StatusHealth"),
        will = DocId("StatusWillHealth"),
        red = 150 + 105 * (player.Health / player.MaxHealth),
        blue = 150 + 105 * (player.WillHealth / player.MaxWillHealth);

    // Need to decide absoulte max health for overhealing
    player.Health = Math.max(1, player.Health);
    player.WillHealth = Math.max(1, player.WillHealth);
    player.MaxHealth = player.End * 10 + player.Perks.ExtraHealth.Count * 20;
    player.MaxWillHealth = player.Will * 10 + player.Perks.ExtraWillHealth.Count * 20;

    health.innerHTML = Math.round(player.Health);
    health.style.width = Math.min(100 * (player.Health / player.MaxHealth), 103) + "%";
    will.innerHTML = Math.round(player.WillHealth);
    will.style.width = Math.min(100 * (player.WillHealth / player.MaxWillHealth), 103) + "%";
    // Trial of making the bars darker the lower as health goes down.
    health.style.backgroundColor = "rgb(" + red + ",0,0)";
    will.style.backgroundColor = "rgb(0,0," + blue + ")";
}

function HouseEngine() {
    if (House.Gym > 0) {
        for (let e of House.Dormmates) {
            const maxMuscle = (e.Height / 3) * (House.Gym * 0.1);
            if (e.Fat > 1 && (e.Muscle < maxMuscle)) {
                e.Muscle += 0.1;
                e.Fat -= 0.4;
            };
        };
    };
    if (House.Kitchen > 0) {
        for (let e of House.Dormmates) {
            const maxFat = (e.Height / 2) * (House.Kitchen * 0.1);
            if (e.Fat < maxFat) {
                e.Fat += 0.4;
            };
        };
    };
    if (House.Dormmates.length > 0) {
        player.Gold += 0.001 * House.Dormmates.length;
        for (let esf of House.Dormmates) {
            if (Settings.Brothel.ServeMasc && Settings.Brothel.ServeFemi) {
                esf.Masc += 0.05 * House.Brothel;
                esf.Femi += 0.05 * House.Brothel;
            } else if (Settings.Brothel.ServeFemi) {
                esf.Femi += 0.1 * House.Brothel;
            } else if (Settings.Brothel.ServeMasc) {
                esf.Masc += 0.1 * House.Brothel;
            };
        };
        if (House.hasOwnProperty("Brothel")) {
            player.Gold += 0.01 * House.Dormmates.length * House.Brothel;
        };
    }
};

function GenitalChange(what) {
    for (let e of player.Dicks) {
        e.Type = what;
    }
    for (let e of player.Balls) {
        e.Type = what;
    }
    for (let e of player.Boobies) {
        e.Type = what;
    }
    for (let e of player.Pussies) {
        e.Type = what;
    }
    for (let e of player.Anal) {
        e.Type = what;
    }
}

function addMilk(amount) {
    for (let b of player.Boobies) {
        if (b.Milk <= b.MilkMax)
            b.Milk += Math.min(b.MilkMax - b.Milk, amount);
    }
}

function DateEngine() {
    setInterval(DateTracker, 1000);
}

function FoodEngine() {
    // health/will && fat burn
    /*  for (var e = 0; e < player.FoodStomach.length; e++) {
          player.FoodStomach[e].Kcal -= player.FoodStomach[e].KcalRate;
          player.Fat += player.FoodStomach[e].KcalRate;
          if (player.FoodStomach[e].Kcal < 0) {
              player.FoodStomach.splice(e, 1)
          }
      }*/
    player.Fat -= 0.0002;
}

var EnemyIndex;

function Touching() {
    if (battle === true) {
        return;
    }
    enemies.forEach((j, i) => {
        if (sprite.x + grid * sprite.Size >= j.XPos && sprite.x < j.XPos + j.Size &&
            sprite.y + grid * sprite.Size >= j.YPos && sprite.y < j.YPos + j.Size) {
            if (mousedowner) {
                mousedowner = false;
            }
            EnemyIndex = i;
            EssenceCheck(j);
            j.XPos = RandomInt(2, 18) * grid;
            j.YPos = RandomInt(2, 18) * grid;
            BattleSetup(j);
        }
    })
};

/* Disabled for now
 * var fps = [];
const t = new Date().getTime();
fps.push(t);
if (fps.length > 30) {
    const Thefps = fps[30] - fps[29];
    fps = [];
    if (typeof Thefps === "number") { // Stop typing NaN but I still need to figure out why NaN in first place
        DocId("Fps").innerHTML = `${Math.floor(1000 / Thefps)} Lps`;
    }
}
 */

function loop() {
    requestAnimationFrame(loop);

    DocId("StatusArea").innerHTML = `Area: ${player.Area} and Map: ${player.Map}`;
    DocId("StatusName").innerHTML = player.Name + " " + player.LastName;
    HealthWillBars();
    DocId("StatusLevel").innerHTML = player.level;
    DocId("Gold").innerHTML = Math.floor(player.Gold);
    DocId("Hunger").innerHTML = (player.Fat <= player.Height / 100) ? "You are starving" : null
    DocId("EssenceTracker").innerHTML = `Masculinity: ${Math.round(player.Masc)} and Femininity: ${Math.round(player.Femi)}`;
    DocId("VoreLooks").style.display = Settings.Vore ? 'inline-block' : 'none'
    ExpCheck();

    if (!battle && !GamePaused) { // Splited so I can have time still running while on menus etc...
        const startarea = DocId("hem"),
            ctx = startarea.getContext("2d");
        startarea.width = medium;
        startarea.height = medium;

        if (Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20 !== medium) {
            HemScale();
            StatusButtonSystem();
        };
        CurrentMap();
        (enemies.length > 0) ? PrintEnemies(): false;
        if (Settings.PlayerSpriteEnable) {
            ctx.drawImage(Player_SpriteImages["playerSprite"], sprite.x, sprite.y, grid * 2, grid * 2);
        } else {
            ctx.fillStyle = "BlueViolet";
            ctx.fillRect(sprite.x, sprite.y, grid * sprite.Size, grid * sprite.Size);
        }
    }
    if (!battle) {
        //Settings.Vore ? VoreEngine() : false; //Should move this to datetracker
        Settings.Cheats.Enabled ? CheatEngine() : false;
        Laglimiter++;
        if (Laglimiter % 80 == 0) {
            Laglimiter = 0;
            Settings.EssenceAuto ? EssenceCheck(player) : false;
            RaceEssenceBalance(); // Race essence bad name
            player.Fat = Math.max(0.1, player.Fat);
            player.Muscle = Math.max(1, player.Muscle);
            player.Weight = Math.round(player.Height * 0.15 + player.Fat + player.Muscle);
            player.Height = Math.max(5, player.Height);
            // Check if essence is negative of NaN
            player.Masc = Math.max(0, player.Masc);
            if (typeof player.Masc !== "number" || Number.isNaN(player.Masc)) {
                player.Masc = 50;
            };
            player.Femi = Math.max(0, player.Femi);
            if (typeof player.Femi !== "number" || Number.isNaN(player.Femi)) {
                player.Femi = 50;
            };
            player.EssenceDrain = 5 + (player.Perks.StealMore.Count * 3);
            player.GiveEssence = 0 + (player.Perks.GiveEssence.Count * 3);

            sprite.Size = 1; //Math.min(0.8 + player.Height / 320, 1.2);
        }
    }
};
var Laglimiter = 0;

function DocId(id) { // Important Prototype.js must be loaded before where you want to use this!
    return document.getElementById(id);
}

/**
 * (function () {
    var a = RandomInt(1, 6);
    a === 1 ? console.log("One") : a === 2 ? console.log("Two") : a === 3 ? console.log("Three") :
        a === 4 ? console.log("Four") : a === 5 ? console.log("Five") : console.log("Six");
    var b = [1, 2, 3],
        c = [4, 5, 6],
        d = [...b, ...c];
    console.log(d);
    setTimeout(() => {
        console.log("Hello")
    }, 2000)
    setTimeout(() => {
        console.log("Future")
    }, 4000);
})()
 */
function BarFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings()
    const div = document.createElement("div");
    div.appendChild(TitleText("Local bar"));

    const p = TextBox();
    p.innerHTML = "The local tavern is small and cozy, quite calm for being a tavern but not that" +
        "surprising given the small number of patrons. The smell from the kitchen is very appetizing, maybe you should buy a meal?"
    div.appendChild(p);

    const ShopMenu = document.createElement("div");
    ShopMenu.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })

    const input1 = ButtonButton("Rest 5g", "Spend the night to recover health and will")
    input1.addEventListener("click", function () {
        if (player.Gold >= 5) {
            player.Gold -= 5;
            player.Health = player.MaxHealth;
            player.WillHealth = player.MaxWillHealth;
            battle = false; // A bit overkill but whatever.
            GamePaused = true;
            for (let e = 0; e < 8; e++) {
                DateTracker();
            }
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input1);

    const input2 = ButtonButton("Medium meal 10g", "+2kg fat")
    input2.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 2;
            /*  const BarMeal = {
                  Kcal: 1200,
                  KcalRate: 0.05
              }
              player.FoodStomach.pop();
              player.FoodStomach.push(BarMeal); */
            player.Gold -= 10;
            player.Health += 20;
            player.WillHealth += 20;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input2);
    ShopMenu.appendChild(document.createElement("br"));

    const input3 = ButtonButton("Large meal 30g", "+4kg fat");
    input3.addEventListener("click", function () {
        if (player.Gold > 30) {
            player.Fat += 4;
            /*    const BarMeal = {
                    Kcal: 1800,
                    KcalRate: 0.1
                }
                player.FoodStomach.pop();
                player.FoodStomach.push(BarMeal); */
            player.Gold -= 30;
            player.Health += 50;
            player.WillHealth += 50;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input3);

    const input4 = ButtonButton("Buffet 50g", "+8kg fat");
    input4.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 8;
            /*    const BarMeal = {
                    Kcal: 3200,
                    KcalRate: 0.2
                }
                player.FoodStomach.pop();
                player.FoodStomach.push(BarMeal); */
            player.Gold -= 50;
            player.Health += 70;
            player.WillHealth += 70;
            return;
        }
    });
    ShopMenu.appendChild(input4);
    div.appendChild(ShopMenu);

    div.appendChild(ShopMenu);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function BarberFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    div.appendChild(TitleText("Barber"));

    const p = TextBox();
    div.appendChild(p);

    const DyeCon = document.createElement("div"),
        CutCon = document.createElement("div");

    function DyeButton(e, p) {
        const dye = document.createElement("input");
        dye.setAttribute("type", "button");
        dye.setAttribute("value", e);
        dye.addEventListener("click", function () {
            player.Face.HairColor = e.toLowerCase()
            p.innerHTML = "Looking into the barbers mirror you see your hair dying is complete and your hair is now " + player.Face.HairColor;
        });
        dye.addEventListener("mouseover", function () {
            p.innerHTML = e + " dye";
        })
        return dye;
    }

    function CutButton(e) {
        const cut = document.createElement("input");
        cut.setAttribute("type", "button");
        cut.setAttribute("value", e);
        cut.addEventListener("click", function () {
            player.Face.HairLength = e.toLowerCase();
        });
        cut.addEventListener("mouseover", function () {
            p.innerHTML = e;
        })
        return cut;
    }
    const input1 = ButtonButton("Dye");
    input1.addEventListener("click", function () {
        if (DyeCon.hasChildNodes()) {
            while (DyeCon.hasChildNodes()) {
                DyeCon.removeChild(DyeCon.firstChild);
            };
        } else {
            while (CutCon.hasChildNodes()) {
                CutCon.removeChild(CutCon.firstChild);
            };
            const Dyes = ["Red", "Blonde", "Dark brown", "Black", "Pink", "Purple"];
            for (const e of Dyes) {
                DyeCon.appendChild(DyeButton(e, p));
            };
        }
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    const input2 = document.ButtonButton("Cut");
    input2.addEventListener("click", function () {
        if (CutCon.hasChildNodes()) {
            while (CutCon.hasChildNodes()) {
                CutCon.removeChild(CutCon.firstChild);
            };
        } else {
            while (DyeCon.hasChildNodes()) {
                DyeCon.removeChild(DyeCon.firstChild);
            };
            const Cuts = [ /*"Shaved", "Buzz cut", "Short",*/ "Medium length", "Ear length", "Chin length", "Shoulder length",
                /*"Armpit length", "Mid-back length",*/
                "Hip length", "Knee length", "Floor length"
            ];
            for (const e of Cuts) {
                CutCon.appendChild(CutButton(e, p));
            };
        }
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    div.appendChild(document.createElement("br"));
    div.appendChild(DyeCon);
    div.appendChild(CutCon);

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function BlackMarketFunc() {
    const Buildings = document.getElementById("Buildings"),
        MainFrag = document.createDocumentFragment(),
        p = TextBox(),
        input1 = ButtonButton("Sell limbs"),
        limbcon = document.createElement("div"),
        PESS = document.createElement("p"),
        input2 = ButtonButton("Sell 50 femininity 100g"),
        input3 = ButtonButton("Sell 50 masculinity 100g"),
        input4 = ButtonButton("Why can't I buy?", "I see a plenty signs here of what you are buying, but I see nothing about what I can buy?"),
        Content = [p, input1, limbcon, PESS, input2, input3, input4, LeaveBuilding()];

    CleanBuildings();
    if (window.innerHeight > 200) { // No title on small screen
        Content.unshift(TitleText("Black Market"));
    }

    input1.addEventListener("click", function () {
        limbcon.classList.add("LimbSale")
        if (limbcon.hasChildNodes()) {
            while (limbcon.hasChildNodes()) {
                limbcon.removeChild(limbcon.firstChild);
            };
            p.style.display = 'block';
        } else {
            LimbSale();
            p.style.display = 'none';
        }
    });
    input1.addEventListener("mouseover", function () {

    });

    PESS.innerHTML = `Masc: ${Math.round(player.Masc)} Femi: ${Math.round(player.Femi)}`

    input2.addEventListener("click", function () {
        const amount = Math.min(50, player.Femi);
        if (typeof amount === "number" && !Number.isNaN(amount)) {
            player.Femi -= amount;
            player.Gold += amount * 2;
        }
        BlackMarketFunc();
    });
    input2.addEventListener("mouseover", function () {

    });

    input3.addEventListener("click", function () {
        const amount = Math.min(50, player.Masc);
        if (typeof amount === "number" && !Number.isNaN(amount)) {
            player.Masc -= amount;
            player.Gold += amount * 2;
        }
        BlackMarketFunc();
    });
    input3.addEventListener("mouseover", function () {

    });

    input4.addEventListener("click", function () {
        p.innerHTML = `Yeah we are only buying essence here, you see we have a contract with guys in the capital where we can sell for a lot more to nobles.  
        Nobles you might ask aren’t they the ones who preach about how you should only have as much essence you can conquer! 
        The thing is though while they say trading essence are forbidden and for the weak, the rich don’t follow the rules they only pretend to in order to maintain their image.`
    });
    input4.addEventListener("mouseover", function () {
        p.innerHTML = `I see a plenty signs here of what you are buying, but I see nothing about what I can buy?`
    });

    Content.forEach((val) => {
        MainFrag.appendChild(val);
    });
    Buildings.appendChild(MainFrag);
    document.getElementById("Buildings").style.display = 'block';

    function LimbSale() {
        while (limbcon.hasChildNodes()) {
            limbcon.removeChild(limbcon.firstChild);
        };
        const Frag = document.createDocumentFragment(),
            H41 = document.createElement("h4"),
            H41Text = document.createTextNode("Sell sexual organs 30g/cm"),
            label1 = LabelFor("SellDicks", "Dicks"),
            div1 = document.createElement("div"),
            label2 = LabelFor("SellBalls", "Balls"),
            div2 = document.createElement("div"),
            label3 = LabelFor("SellBreasts", "Breasts"),
            div3 = document.createElement("div"),
            label4 = LabelFor("SellVaginas", "Vaginas"),
            div4 = document.createElement("div"),
            H42 = document.createElement("h4"),
            H42Text = document.createTextNode("Sell sexual organ size 25g/cm"),
            label5 = LabelFor("SellDickSize", "Dick size"),
            div5 = document.createElement("div"),
            label6 = LabelFor("SellBallSize", "Ball size"),
            div6 = document.createElement("div"),
            label7 = LabelFor("SellBreastSize", "Breast size"),
            div7 = document.createElement("div"),
            label8 = LabelFor("SellVaginaSize", "Vagina depth"),
            div8 = document.createElement("div"),
            SellLimbsCon = [H41, label1, div1, label2, div2, label3, div3, label4, div4,
                H42, label5, div5, label6, div6, label7, div7, label8, div8
            ]

        H41.appendChild(H41Text);
        H42.appendChild(H42Text);

        div1.setAttribute("id", "SellDicks");
        player.Dicks.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " dick " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Dicks.splice(i, 1);
                LimbSale();
            });
            div1.appendChild(inp);
        });

        div2.setAttribute("id", "SellBalls");
        player.Balls.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " balls " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Balls.splice(i, 1);
                LimbSale();
            });
            div2.appendChild(inp);
        });

        div3.setAttribute("id", "SellBreasts");
        player.Boobies.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " boobs " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                if (player.Boobies.length > 1) {
                    player.Gold += e.Size * 30;
                    player.Boobies.splice(i, 1);
                    LimbSale();
                }
            });
            div3.appendChild(inp);
        });

        div4.setAttribute("id", "SellVaginas");
        player.Pussies.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " vagina " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Pussies.splice(i, 1);
                LimbSale();
            });
            div4.appendChild(inp);
        });

        div5.setAttribute("id", "SellDickSize");
        player.Dicks.forEach((e) => {
            const inp = ButtonButton(e.Type + " dick " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div5.appendChild(inp);
        });

        div6.setAttribute("id", "SellBallSize");
        player.Balls.forEach((e) => {
            const inp = ButtonButton(e.Type + " balls " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div6.appendChild(inp);
        });

        div7.setAttribute("id", "SellBreastSize");
        player.Boobies.forEach((e) => {
            const inp = ButtonButton(e.Type + " boobs " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div7.appendChild(inp);
        });

        div8.setAttribute("id", "SellVaginaSize");
        player.Pussies.forEach((e) => {
            const inp = ButtonButton(e.Type + " vagina " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div8.appendChild(inp);
        });

        SellLimbsCon.forEach((src) => {
            Frag.appendChild(src)
        });
        limbcon.appendChild(Frag);
    }
}
document.getElementById("SacRaceEss").addEventListener("click", function () {
    const SacMenu = document.getElementById("SacRaceEssMenu");
    if (SacMenu.style.display === 'grid') {
        SacMenu.style.display = 'none';
    } else {
        SacMenu.style.display = 'grid';
        SacRaces();
    }
});

function SacRaces(parAmount = 50) {
    const MaxValue = player.RaceEssence.length > 0 ? player.RaceEssence.map(ess => ess.amount).reduce((a,b) => Math.max(a,b)) : 0;
    var DonateAmount = parAmount > MaxValue ? Math.round(MaxValue) : parAmount;
    const SacMenu = document.getElementById("SacRaceEssMenu"),
        SacFrag = document.createDocumentFragment();
    while (SacMenu.hasChildNodes()) {
        SacMenu.removeChild(SacMenu.firstChild);
    }
    const Sliderdiv = document.createElement("DIV"),
        SliderOut = document.createElement("P");
    SliderOut.innerHTML = `Donate: ${DonateAmount}`;
    Sliderdiv.appendChild(SliderOut);
    const Slider = MakeSlider(DonateAmount, MaxValue);
    Slider.oninput = function () {
        DonateAmount = this.value;
        SliderOut.innerHTML = `Donate: ${this.value}`;
    }
    Sliderdiv.appendChild(Slider);
    SacFrag.appendChild(Sliderdiv);

    const Condiv = document.createElement("DIV");
    Condiv.setAttribute("class", "TwoColumn");
    const {
        ChimeraShrine
    } = player.Blessings;
    if (player.RaceEssence.length > 0) {
        player.RaceEssence.forEach((ess, i) => {
            div = document.createElement("DIV"),
                RaceButton = ButtonButton(`${ess.Race} ${Math.round(ess.amount)}`);
            RaceButton.addEventListener("click", function () {
                if (DonateAmount > ess.amount) {
                    ChimeraShrine.Donated += ess.amount;
                    player.RaceEssence.splice(i, 1);
                } else {
                    ChimeraShrine.Donated += DonateAmount;
                    ess.amount -= DonateAmount;
                }
                ChimeraShrine.Points = Math.floor(Math.sqrt(ChimeraShrine.Donated));
                SacRaces(DonateAmount);
            });
            div.appendChild(RaceButton)
            Condiv.appendChild(div);
        })
    }
    SacFrag.appendChild(Condiv);
    SacMenu.appendChild(SacFrag);
};
// "Friendly" shop in dungeon area
var items = { // export to items.js when done!
    itemTemplate: {
        Name: "Name of the item",
        Equip: "No", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
        Drop: true, // or false
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
        Use: function (who) {
            EventLog(who.Name + " used the item")
        }
    },
    Whip: {
        Name: "Basic whip",
        Equip: function () {
            /** Function to equip whip think I will make so that where dmg is calulated will use 
             *  something like TotalStr() instead of player.str 
             *  */
        }
    }
}
function GymFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    if (window.innerHeight > 600) {
        div.appendChild(TitleText("Gym"));
    }
    const p = TextBox();

    div.appendChild(p);

    const row1 = document.createElement("div");
    row1.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });

    const input1 = InputButton("Train muscle", "Gain muscle.");
    input1.addEventListener("click", function () {
        if (Flags.LastTrain.Day === Flags.Date.Day && Flags.LastTrain.Month === Flags.Date.Month && Flags.LastTrain.Year === Flags.Date.Year) {
            p.innerHTML = "You have already trained today.";
        } else {
            if (player.Fat > (player.Weight * 0.1)) {
                const gains = Math.min(player.Height / 80, Math.round((player.Height / (player.Muscle * 4)) * (player.Str / 20)));
                const burn = Math.round(gains / 4);
                player.Muscle += gains;
                player.Fat -= burn;
                p.innerHTML = `You burn ${KgToPound(burn)} of fat and gain ${KgToPound(gains)} of muscle.
                <br>${Math.round(player.Muscle)}`;
                Flags.LastTrain = {
                    Day: Flags.Date.Day,
                    Month: Flags.Date.Month,
                    Year: Flags.Date.Year,
                    Count: Flags.LastTrain.Count + 1
                };
                if (Flags.LastTrain.Count > 10 && false) {
                    // Event to buy steriods or similiar
                }
            } else {
                p.innerHTML = "You are to skinny."
            }
        }
    });
    row1.appendChild(input1);

    const input2 = InputButton("Cardio", "Lose some fat.");
    input2.addEventListener("click", function () {
        if (player.Fat > player.Weight * 0.1) {
            const burn = Math.round(player.Fat * 0.09);
            player.Fat -= burn;
            p.innerHTML = `You speent an hour doing cardio, when stepping on the scale in the shower room you are 
            happy to see you lost ${KgToPound(burn)}.<br>`; //${Math.round(player.Fat)}`;
        } else {
            p.innerHTML = "Buring more fat would be dangerous!";
        }
    });
    row1.appendChild(input2);

    const input3 = InputButton("Lose muscle", "Sacrifice your gains to the shining swole bro.")
    input3.addEventListener("click", function () {
        const Sacrifice = Math.round(player.Muscle / 10 * 10) / 10;
        player.Muscle -= Sacrifice;
        p.innerHTML = `Mesmerized by the swole bro’s flexing you cannot look away from show of displaying 
         his sculpted muscle in a routine of poses, once finished he thanks for the audience.<br><br>
         Looking at him walking away he seems to have gained muscle, looking at yourself in the mirror you
          seems to have lost muscle? (${KgToPound(Sacrifice)})`
    });
    row1.appendChild(input3);

    div.appendChild(row1);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function LocalPortalFunc() {
    const Buildings = DocId("Buildings"),
        InnerDiv = document.createElement("div"),
        Frag = document.createDocumentFragment(),
        p = TextBox(),
        Container = [p]
    CleanBuildings();

    if (window.innerHeight > 600) { // No title on small screen
        Container.unshift(TitleText("Portal"));
    }

    if (player.Map === "Outlaws" && House.Portal.BlackMarket === false) {
        const Activate = InputButton("Activate", "Sync this local portal with your home portal");
        Activate.addEventListener("click", function () {
            House.Portal.BlackMarket = true;
            p.innerHTML = "Sync"
            LocalPortalFunc();
        });
        Activate.addEventListener("mouseover", function () {
            p.innerHTML = "Sync this local portal with your home portal";
        });
        Container.push(Activate);
    } else if (player.Map === "MountainPlateau" && House.Portal.MountainPlateau != true) {
        const Activate = InputButton("Activate", "Sync this local portal with your home portal");
        Activate.addEventListener("click", function () {
            House.Portal.MountainPlateau = true;
            p.innerHTML = "Sync"
            LocalPortalFunc();
        });
        Activate.addEventListener("mouseover", function () {
            p.innerHTML = "Sync this local portal with your home portal";
        });
        Container.push(Activate);
    }

    const input1 = InputButton("Home")
    input1.addEventListener("click", function () {
        player.Area = "First";
        player.Map = "RoadToHome";
        Teleport();
        return;
    });
    input1.addEventListener("mouseover", function () {

    });
    Container.push(input1)

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        const Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            Teleport();
            return;
        });
        Container.push(Mountain);
    }

    if (House.Portal.BlackMarket) {
        const BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            Teleport();
            return;
        });
        BlackMarket.addEventListener("mouseover", function () {

        });
        Container.push(BlackMarket);
    }
    if (House.Portal.MountainPlateau) {
        const MountainPlateau = InputButton("Mountain plateau")
        MountainPlateau.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainPlateau";
            Teleport();
            return;
        });
        MountainPlateau.addEventListener("mouseover", function () {

        });
        Container.push(MountainPlateau);
    }
    Container.push((LeaveBuilding()));
    Container.forEach((src) => {
        Frag.appendChild(src);
    });
    InnerDiv.appendChild(Frag);
    Buildings.appendChild(InnerDiv);
    Buildings.style.display = "block";

    function Teleport() {
        Buildings.style.display = 'none';
        CleanBuildings();
        DisplayGame();
    }
}
// Test of new way to add quests, in order to avoid public consts.
function PregQuests() {
    const div = document.getElementById("Buildings"),
        x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    const h1 = document.createElement("h1"),
        h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    const Impreg = InputButton("Impreg", "Impregnate our maidens.");
    Impreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        p.innerHTML = `Get impregnated while carrying our goddesses blessing, when the child is born we will send a cartage to collect so it can be raised here at our temple.
        <br><br>
        I wish of you to impregnate our local maidens, our scripture only allows temple maidens to copulate with those who can defeat them in battle. Usually they would find a mate among the local dragons, but after their new tribe leader got defeated by our strongest maiden his pride got wounded and our relationship has soured. 
        <br><br>
        It’s a shame he could not defeat her, she has grown bitter over the years and I believe that finally losing her virginity and learning the joys of motherhood would greatly improve her personalty.`;

        const Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "Impregnate maidens",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        const Decline = InputButton("Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    const ImpregReward = InputButton("Impreg reward", "Impregnate our maidens.");
    ImpregReward.addEventListener("click", function () {
        const index = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
        player.Blessings.MountainShrine.Points += player.Quests[index].Count;
        player.Quests.splice(index, 1);
        PregQuests();
    });

    const GetImpreg = InputButton("Get Impreg", "Get impregnated.");
    GetImpreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        p.innerHTML = `Get impregnated while carrying our goddesses blessing, 
        when the child is born we will send a cartage to collect so it can be raised here at our temple.`

        const Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "Get Impregnated",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        const Decline = InputButton("Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    const GetImpregReward = InputButton("Get Impreg", "Get impregnated.");
    GetImpregReward.addEventListener("click", function () {
        const index = player.Quests.findIndex(e => e.Name == "Get Impregnated");
        player.Blessings.MountainShrine.Points += player.Quests[index].Count * 7; // Getting yourself pregnant is harder to repeat therefore higher reward.
        player.Quests.splice(index, 1);
        PregQuests();
    });
    if (!player.Quests.some(e => e.Name === "Get Impregnated")) {
        x.appendChild(GetImpreg);
    } else if (player.Quests.some(e => e.Name === "Get Impregnated" && e.Completed)) {
        x.appendChild(GetImpregReward);
    }
    if (!player.Quests.some(e => e.Name === "Impregnate maidens")) {
        x.appendChild(Impreg);
    } else if (player.Quests.some(e => e.Name === "Impregnate maidens" && e.Completed)) {
        x.appendChild(ImpregReward);
    }

    const back = InputButton("Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    })

    const row1 = document.createElement("div");
    row1.appendChild(x);
    div.appendChild(row1);
    const row2 = document.createElement("div");
    row2.appendChild(back);
    div.appendChild(row2);
}

function MountainShrineFunc() {
    const Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div"),
        h1 = document.createElement("h1"),
        h1text = document.createTextNode("Shrine");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    const row1 = document.createElement("div"),
        input1 = InputButton("Blessings");
    input1.addEventListener("click", function () {
        FertTempleBlessings();
    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    const input2 = InputButton("Quests");
    input2.addEventListener("click", function () {
        PregQuests();
    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    div.appendChild(row1);

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
};

function FertTempleBlessings(text = "") {
    const div = document.getElementById("Buildings"),
        x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    const h1 = document.createElement("h1"),
        h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const PregPoints = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points;

    const h5 = document.createElement("h5");
    h5.innerHTML = `${PregPoints} faith`;
    div.appendChild(h5);

    const p = document.createElement("p");
    p.classList.add("TextBox");
    p.innerHTML = text;

    div.appendChild(p);


    const Incubator = InputButton("Incubator +" + player.Blessings.MountainShrine.Incubator, "Makes your pregnancy faster.");
    Incubator.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.Incubator + 1
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Incubator++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Incubator);

    const IncubatorSeed = InputButton("Mature seeds +" + player.Blessings.MountainShrine.IncubatorSeed, "Makes your servant's pregnancies faster.");
    IncubatorSeed.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.IncubatorSeed + 1;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.IncubatorSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    })
    div.appendChild(IncubatorSeed);

    const Broodmother = InputButton("Broodmother +" + player.Blessings.MountainShrine.Broodmother, "Chance for twins or more for player.");
    Broodmother.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.Broodmother * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Broodmother++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Broodmother);

    const BroodmotherSeed = InputButton("Branching seeds +" + player.Blessings.MountainShrine.BroodmotherSeed, "Chance for twins or more for others.");
    BroodmotherSeed.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.BroodmotherSeed * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.BroodmotherSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(BroodmotherSeed);

    const MalePreg = InputButton("Anal Incubator +" + player.Blessings.MountainShrine.Malepreg, "Enables player non-female pregnancy.");
    MalePreg.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.Malepreg * 5;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Malepreg++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(MalePreg);

    const back = InputButton("Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    });
    div.appendChild(back);
}
function PortalShopFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");

    if (window.innerHeight > 600) { // Skip title on smaller screens
        div.appendChild(TitleText("Portal shop"));
    };
    const p = TextBox();
    div.appendChild(p);

    const input1 = ButtonButton("Pocket portal 1000g", "Are you tired of walking home? Then pocket portal is for you, now with 99 uses! #Note seller is not responsible if you waste them by using them without owning a home portal.");
    input1.addEventListener("click", function () {
        if (player.Gold >= 1000) {
            player.Gold -= 1000;
            SnowInventoryAdd(ItemDict.PocketPortal, 99);
            if (!House.Portal.Owned) {
                p.innerHTML = "Now you just need to build a portal at home..."
            }
        } else {
            p.innerHTML = "You can't afford a pocket portal..."
        }
    });
    input1.addEventListener("mouseover", function () {
        p.innerHTML = "Are you tired of walking home? Then pocket portal is for you, now with 99 uses!<br>#Note seller is not responsible if you waste them by using them without owning a home portal."
    });
    div.appendChild(input1);

    if (House.Portal.Mountain === false) {
        const input2 = ButtonButton("Portal to mountain region 500g", "A beautiful land with wonderful views, but be consty as it’s the home for plenty dangerous races and tribes.");
        input2.addEventListener("click", function () {
            if (player.Gold >= 500) {
                if (House.Portal.Mountain) {
                    p.innerHTML = "You already own this."
                } else {
                    player.Gold -= 500;
                    House.Portal.Mountain = true;
                    if (House.Portal.Owned) {
                        p.innerHTML = "A new destination have been unlocked at your home portal."
                    } else {
                        p.innerHTML = "Now you just need to build a portal at home..."
                    }
                }
            } else {
                p.innerHTML = "You can't afford it..."
            }
        });
        input2.addEventListener("mouseover", function () {
            p.innerHTML = "A beautiful land with wonderful views, but be consty as it’s the home for plenty dangerous races and tribes."
        });
        div.appendChild(input2);
    }

    div.appendChild(document.createElement("br"));

    div.appendChild(LeaveBuilding()); // Call to leave building function; returns a leave button

    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function ShopFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    div.appendChild(TitleText("Potion shop"));

    const p = TextBox();
    div.appendChild(p);

    const innerdiv = document.createElement("div");

    const StrPotion = ButtonButton("Potion of Strength 100g");
    StrPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Str++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body 
            becoming stronger.<br>${player.Str}`;
        }
    });

    const ChaPotion = ButtonButton("Potion of Charm <br>100g");
    ChaPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Charm++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your 
            charms grow.<br>${player.Charm}`;
        }
    });
    innerdiv.appendChild(StrPotion);
    innerdiv.appendChild(ChaPotion);
    innerdiv.appendChild(document.createElement("br"));

    const EndPotion = ButtonButton("Potion of Endurance 100g")
    EndPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.End++
            player.MaxHealth += 5; // This is bad, need something that mod maxhealth dependent on end and other buffs.
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel 
            your endurance growing.<br>${player.End}`;
        }
    });
    const IntPotion = ButtonButton("Potion of Intelligence 100g")
    IntPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Int++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can 
            feel your mind becoming sharper.<br>${player.Int}`;
        }
    });
    innerdiv.appendChild(EndPotion);
    innerdiv.appendChild(IntPotion);
    innerdiv.appendChild(document.createElement("br"));

    const WillPotion = ButtonButton("Potion of Willpower 100g")
    WillPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Will++
            player.MaxWillHealth += 5;
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can 
            feel your willpower growing.<br>${player.Will}`;
        }
    });
    const SexPotion = ButtonButton("Potion of Sexskill 100g"); // Needs to be renamed, sounds stupid.
    SexPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.SexSkill++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you get 
            a feeling that somehow your bedskills have improved.<br>${player.SexSkill}`;
        }
    });
    innerdiv.appendChild(WillPotion);
    innerdiv.appendChild(SexPotion);

    div.appendChild(innerdiv);

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
} // Saved 13 lines with ButtonButton, wow... but looks better to me atleast!    
// Start Farm
function FarmOwnerFunc() {
    const Npc = document.getElementById("Npcs")
    CleanNpcs(); // Empties div
    const div = document.createElement("div");
    div.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });

    if (window.innerHeight > 600) { // No title on small screen
        Npc.appendChild(TitleText("Title"));
    }

    const p = TextBox();
    Npc.appendChild(p);

    const wip = ButtonButton("(Placeholder)Need help?");

    const EquineTaurTF = ButtonButton("Equine-Taur Essence 250g", `Do you lack endurance? Want to able to work 
    like a horse? One dose of this and you will turn to a taur hybrid of equine and you current race.`)
    EquineTaurTF.addEventListener("click", function () {
        if (player.Gold >= 250) {
            player.Gold -= 250;
            PotionDrunk("centaur");
            return;
            //TfEngine("centaur");
        } else {
            p.innerHTML = "Insufficient gold.";
            return;
        }
    });
    div.appendChild(EquineTaurTF);

    const EquineTF = ButtonButton("Equine Essence 250g", `Want more lower body strength? Lucky for you this essence 
    will make you to the mare or stallion of your dreams! One dose will turn your lower body to a set of humanoid 
    equine legs while two doses will turn you to a anthropomorphic equine.`)
    EquineTF.addEventListener("click", function () {
        if (player.Gold >= 250) {
            player.Gold -= 250;
            PotionDrunk("equine");
        } else {
            p.innerHTML = "Insufficient gold.";
            return;
        }
    });
    div.appendChild(EquineTF);

    const wip2 = ButtonButton("(Placeholder)Bovine Essence");

    const Looks = ButtonButton("Looks");
    Looks.addEventListener("click", function () {
        p.innerHTML = `Standing before you, a centaur who introduce himself as Teoivz, looking at him it’s evident 
        he spends many hours working on the farm. His human upper body possess muscle forged from years of work, 
        his equine lower body is not one from a race horse but a work horse.<br>Throwing an eye towards his 
        genitals, it’s	hard to guess the exact size his two members retracted inside their penile sheath but it's 
        obvious that they are well capable of stretching a maiden.`
    });
    Looks.addEventListener("mouseover", function () {

    });
    Npc.appendChild(div);
    Npc.appendChild(Looks);
    Npc.appendChild(LeaveNpc());
    Npc.style.display = 'block';
};

function FarmBarnFunc() {
    const Buildings = DocId("Buildings")
    CleanBuildings();
    const div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        div.appendChild(TitleText("Barn"));
    }

    const p = TextBox();
    div.appendChild(p);

    const input1 = ButtonButton("Milker500 499g", "Are your breasts constantly leaking? Does it feel like a waste, seeing your milk drip away? Buy today; a portable milker!");
    input1.addEventListener("click", function () {
        if (player.Gold >= 499) {
            player.Gold -= 499;
            SnowInventoryAdd(ItemDict.Milker, 500);
            p.innerHTML = "Added to inventory"
        } else {
            p.innerHTML = "Not enough gold"
        }
    });
    input1.addEventListener("mouseover", function () {
        p.innerHTML = "Are your breasts constantly leaking? Does it feel like a waste, seeing your milk drip away?<br><br> Buy today; a portable milker!"
    });
    div.appendChild(input1);

    const input2 = ButtonButton("Milk booster 30g", "Can't produce enough milk to feed a baby? Or maybe you want to feed your whole family, or even your town?! Well, this is for your humble (or crazy) needs!")
    input2.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            for (let e of player.Boobies) {
                e.MilkRate++;
                if (false) {
                    // if milkrate is over certain value say stuff like wow godly amounts etc...
                }
            }
            p.innerHTML = "Your breasts milk production increases."
        } else {
            p.innerHTML = "Sorry you can't afford this."
        }
    });
    input2.addEventListener("mouseover", function () {
        p.innerHTML = "Can't produce enough milk to feed a baby? Or maybe you want to feed your whole family, or even your town?!<br><br> Well, this is for your humble (or crazy) needs!"
    });
    div.appendChild(input2);

    const input3 = ButtonButton("Milk stopper 50g", "Sick and tired of your breasts leaving milk spots on your clothes? Just one of these will reduce future 'accidents.' #Note this does not affect lacation rate from pregnancy.")
    input3.addEventListener("click", function () {
        // Lower milkrate
        // if no breast have milkrate stop
        if (player.Gold >= 50) {
            player.Gold -= 50;
            p.innerHTML = ""
            for (let e of player.Boobies) {
                if (e.MilkRate - 1 < 0) {
                    e.MilkRate = 0;
                    p.innerHTML += "Your breasts stops lactating.<br>" //Milk stops
                } else {
                    e.MilkRate--;
                    p.innerHTML = "Your milk production slows.<br>"
                }
                if (false) {
                    // if milkrate is over certain value say stuff like wow gogly amounts etc...
                }
            }
        } else {
            // you are broke
            p.innerHTML = "Sorry you can't afford this."
        }
    })
    input3.addEventListener("mouseover", function () {
        p.innerHTML = "Sick and tired of your breasts leaving milk spots on your clothes? Just one of these will reduce future 'accidents.'<br><br> #Note this does not affect lacation rate from pregnancy."
    })
    div.appendChild(input3);

    if (false) { // TODO
        const DrinkFresh = ButtonButton("Drink fresh milk", "It's not yours. You think.");
        DrinkFresh.addEventListener("click", function () {
            // Drink milk Maybe fuck a bovine furry? 
            // Get healed + temp boost to hp & will stronger than bar meal
            const a = RandomInt(1, 20);
            if (a > 15) {
                if (player.Int > 20) {
                    if (false) {
                        Partners.FarmOwner.Submit += 1; // ask Bovine to help you dom farmowner
                        // Flags.BovineSometing = true;
                    }
                    // Fuck bovine
                } else {
                    // The horny bovine staddles you before you mangage to figure out what's happening.
                }
            }
        })
        const GetMilked = ButtonButton("Get milked", "Mooooooooooooo!");
        GetMilked.addEventListener("click", function () {
            // Sell milk(maybe cum to?), this can trigger a event where farmowner tries to fuck you
            // depenent on your stats you can turn it around or get away, if your stats are to weak you get fucked.
            const MilkTotal = 0;
            for (const e of player.Boobies) {
                MilkTotal += e.Milk * 0.9;
                e.Milk = e.Milk * 0.1;
            }
            if (MilkTotal > 0) {
                if (MilkTotal > 10) {
                    const a = RandomInt(1, 20);
                    if (a > 10) {
                        // if (Flags.Bovine) {};
                    }
                }

            } else {

            }
        })
    }

    // TODO add a milking event with farm owner
    /**
     * // Barn Milk Event
    // Let him fuck you
    Partners.FarmOwner.Submit -= 5;
    Partners.FarmOwner.Like += 5;
    // Turn it around if you have enough strength
    Partners.FarmOwner.Submit += 5;
    Partners.FarmOwner.Like -= 5;
    // Get away
    Partners.FarmOwner.Like += 3;
     */

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    DocId("Buildings").style.display = 'block';
}
// Test of new way to add quests, in order to avoid public consts.
function TownHallQuests(text = "") {
    const div = document.getElementById("Buildings");
    CleanBuildings();

    div.appendChild(TitleText("Quests"));

    const p = TextBox();
    div.appendChild(p);
    p.innerHTML = text;

    const buttons = document.createElement("div");

    const BanditLord = InputButton("BanditLord");
    BanditLord.addEventListener("click", function () {
        if (Flags.BanditLord) {
            p.innerHTML = "The bandit are still humiliated from the defeat of their lord, but if you are willing please defeat them again to make sure they don't regain their confidence."
        } else {
            p.innerHTML = `The bandits up to the north has become braver with their new leader, if you are strong enough please beat them into submission. <br> <br>
            You will be greatly awarded for your effort and we will grant you the right to buy the old mansion located east from the city.`
        }
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        const Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "BanditLord",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        const Decline = InputButton("Decline");
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    const ElfHunt = InputButton("Elf hunt")
    ElfHunt.addEventListener("click", function () {
        p.innerHTML = "The elves to our south have lately become a problem, defeat atleast three of them and you will be awarded."
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        const Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "ElfHunt",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        const Decline = InputButton("Decline")
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    if (!player.Quests.some(e => e.Name === "ElfHunt")) {
        buttons.appendChild(ElfHunt);
    } else if (player.Quests.some(e => e.Name === "ElfHunt" && e.Completed)) {
        const ElfHuntReward = ButtonButton("Elf hunt reward")
        ElfHuntReward.addEventListener("click", function () {
            const ElfIndex = player.Quests.findIndex((src) => src.Name === "ElfHunt");
            Tier = player.Quests[ElfIndex].hasOwnProperty("Tier") ?
                player.Quests[ElfIndex].Tier : 0,
                Multi = Math.pow(2, Tier - 1)

            player.Quests.splice(ElfIndex, 1);
            player.Exp += 50 * Multi;
            player.Gold += 100 * Multi;
            Flags.FirstCityLike += 1 * Multi;
            TownHallQuests(`You are rewarded: ${50 * Multi} Exp and ${100 * Multi} gold`);
        });
        buttons.appendChild(ElfHuntReward);
    };
    if (!player.Quests.some(e => e.Name === "BanditLord")) {
        buttons.appendChild(BanditLord);
    } else if (player.Quests.some(e => e.Name === "BanditLord" && e.Completed)) {
        const BanditLordReward = ButtonButton("Banditlord reward")
        BanditLordReward.addEventListener("click", function () {
            player.Exp += 300;
            player.Gold += 500;
            const BanditIndex = player.Quests.findIndex((src) => src.Name === "BanditLord");
            player.Quests.splice(BanditIndex, 1);
            if (Flags.BanditLord) {
                TownHallQuests("You are rewared: 300Exp and 500gold");
            } else {
                if (!Flags.BanditLord) {
                    Flags.BanditLord = true
                    TownHallQuests("You are now allowed to buy a house. <br> You are rewared: 300Exp and 500gold");
                };
            }
        });
        buttons.appendChild(BanditLordReward);
    };

    const back = InputButton("Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    div.appendChild(buttons);
    div.appendChild(back);
}

function TownhallFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();

    const div = document.createElement("div");
    div.appendChild(TitleText("Townhall"));

    const p = TextBox();
    p.innerHTML = `Inside the local town hall there isn’t much to see, for being a town hall it’s honestly not that 
    impressive at all. But this is just a small outskirt village after all, hopefully they do at least have work for you.`;
    div.appendChild(p);

    const row1 = document.createElement("div"),
        input1 = InputButton("Quests")
    input1.addEventListener("click", function () {
        TownHallQuests();
    });
    row1.appendChild(input1);

    if (House.Owned === false && Flags.BanditLord) {
        const input2 = ButtonButton("Buy house 100g")
        input2.addEventListener("click", function () {
            if (player.Gold >= 100) {
                House.Owned = true;
                TownhallFunc();
                return;
            } else {
                return;
            }
        });
        row1.appendChild(input2);
    }

    const input3 = InputButton("Services")
    input3.addEventListener("click", function () {
        TownHallService();
    });
    row1.appendChild(input3);

    const input4 = ButtonButton("(placeholder)Reputation");
    input4.addEventListener("click", function () {
        p.innerHTML = `${Flags.FirstCityLike}<br> They temp temp you.`;
    });
    row1.appendChild(input4);
    div.appendChild(row1);

    div.appendChild(LeaveBuilding());

    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}

function TownHallService() {
    const div = document.getElementById("Buildings");
    CleanBuildings();

    // Container for services, atm there is only name change
    const inputs = document.createElement("div");

    // Container for accept and back [Yes/No]
    const YN = document.createElement("div");
    div.appendChild(TitleText("Service"));

    const p = TextBox();
    div.appendChild(p);

    const CN = InputButton("Change name");
    CN.addEventListener("click", function () {
        while (inputs.hasChildNodes()) {
            inputs.removeChild(inputs.firstChild);
        }
        const FName = InputText(player.Name, "ServiceFName724");
        inputs.appendChild(LabelFor("ServiceFName724", "First name:"));
        inputs.appendChild(FName);

        const LName = InputText(player.LastName, "ServiceLName244");
        inputs.appendChild(LabelFor("ServiceLName244", "Last name:"));
        inputs.appendChild(LName);

        const Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            player.Name = FName.value;
            player.LastName = LName.value;
            TownHallService();
        });
        YN.appendChild(Accept);
    });
    inputs.appendChild(CN);

    const back = InputButton("Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    YN.appendChild(back);

    div.appendChild(inputs);
    div.appendChild(YN);
}
function WitchHutFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    if (window.innerHeight > 600) {
        div.appendChild(TitleText("Witch hut"));
    }

    const p = TextBox();
    div.appendChild(p);

    const row1 = document.createElement("div");
    row1.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })

    const elf = ButtonButton("Elf delight 200g", "Tired of being a human? Do you feel a desire to possess pointy ears? Become an elf today!")
    elf.addEventListener("click", function () {
        if (player.Gold >= 200) {
            player.Gold -= 200;
            PotionDrunk("elf");
            p.innerHTML = "You drink the potion and get a strange feeling running through your entire body.";
        } else {
            p.innerHTML = "You can't afford the potion";
        }
    });
    row1.appendChild(elf);

    const Perkup = ButtonButton("Perk Up 1000g", "This pill glows green and yellow, and seems to hover slightly above your hand. Eat it to get a perk point!")
    Perkup.addEventListener("click", function () {
        if (player.Gold >= 1000) {
            player.Gold -= 1000;
            player.PerkPoints++;
            p.innerHTML = "You eat the pill, and hear something like a bell ringing in your ears.";
        } else {
            p.innerHTML = "You can't afford the pill, and you don't have any emeralds to barter with.";
        }
    });
    row1.appendChild(Perkup);

    if (Settings.Vore) {
        const VoreUp = ButtonButton("Eating Up 1000g", "This red pill makes your mouth water and stomach growl. Eat it for an other perk point! (Below it is a little disclaimer: 'store owner not responsible for ineffective pills.')")
        // Move to more fitting place and need new title
        // title ideas
        // Ilegal item, made from havrested souls from the last great battle.
        VoreUp.addEventListener("click", function () {
            if (player.Gold >= 1000) {
                player.Gold -= 1000;
                player.Vore.VorePoints++;
                p.innerHTML = "You eat the pill, and get a strange feeling running through your entire body.";
            } else {
                p.innerHTML = "You can't afford the pill, and it looks so tasty...";
            }
        });
        row1.appendChild(VoreUp);
    }

    const Fireball = ButtonButton("Fireball 500g", "Basic quick course on elemental magic, includes how to cast a fireball.")
    //Fireball.setAttribute("title", "This little ball allows you to cast a single fireball spell per ball you own, per battle! (Don't set yourself on fire, please.)");
    Fireball.addEventListener("click", function () {
        if (!Array.isArray(player.Spells)) { // Remove later
            player.Spells = [];
        }
        if (player.Spells.some(e => e.Name === "Fireball")) {
            // Maybe add some affinity gain
            p.innerHTML = "You already know the basics"
            return;
        } else if (player.Gold >= 500) {
            player.Gold -= 500;
            player.Spells.push(SpellDictLite.Fireball);

            p.innerHTML = "Putting the ball in your pocket, you hope it works as advertised.";
        } else {
            // to poor
        }
    });
    row1.appendChild(Fireball);

    const HumanTF = ButtonButton("Potion of Humanity 250g", "Do you not remember who you are anymore? Feel like you have lost you humanity?");
    HumanTF.addEventListener("click", function () {
        if (player.Gold >= 250) {
            player.Gold -= 250;
            PotionDrunk("human");
            p.innerHTML = "You drink the potion and get a familiar feeling running through your entire body.";
        } else {
            p.innerHTML = "You can't afford the potion";
        }
    });
    row1.appendChild(HumanTF);

    const EyeColor = ButtonButton("Eye color 50g", "Not happy with the eyes you were born with?");
    EyeColor.addEventListener("click", function () {
        const row2 = document.createElement("div");
        row2.addEventListener("mouseover", function (e) {
            p.innerHTML = e.target.title;
        })
        const EyeColors = [
            "brown", "hazel", "blue", "green", "silver", "amber"
        ]
        for (let e of EyeColors) {
            const inputs = ButtonButton(e.Capitalize(), ` ${e.Capitalize()} eyes`)
            inputs.addEventListener("click", function (a) {
                if (player.Gold >= 50) {
                    player.Face.Eyes = a.target.value.toLowerCase();
                    p.innerHTML = "Looking in the mirror your eyes are now " + player.Face.Eyes;
                } else {
                    p.innerHTML = "Insufficient gold!"
                }
            });
            row2.appendChild(inputs);
        };

        const close = ButtonButton("Close", "Close eye color menu");
        close.addEventListener("click", function () {
            WitchHutFunc();
        })
        row2.appendChild(close);
        div.appendChild(row2);
    });
    row1.appendChild(EyeColor);

    div.appendChild(row1);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function WitchShopFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings(); // Empties div

    if (window.innerHeight > 600) { // No title on small screen
        Buildings.appendChild(TitleText("Title"));
    }

    const p = TextBox();
    Buildings.appendChild(p);

    const div = document.createElement("div");
    div.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });

    const input1 = ButtonButton("Grow 50g", `Can't reach the top shelf? Get taller today!`);
    input1.addEventListener("click", function () {
        if (player.Gold >= 50) {
            const growth = Math.round((180 / player.Height) * 100) / 100;
            player.Gold -= 50;
            player.Height += growth;
            p.innerHTML = `You grow ${growth}cm.`;
        }
    });
    const input2 = ButtonButton("Shrink 50g", `Hitting your head on ceilings and doorframes? Shrink today!`);
    input2.addEventListener("click", function () {
        if (player.Gold >= 50) {
            const shrunk = Math.round((player.Height / 100) * 100) / 100;
            player.Gold -= 50;
            player.Height -= shrunk;
            p.innerHTML = `You shrink ${shrunk}cm.`;
        }
    });
    const input3 = ButtonButton("Fertility booster 30g", `Is it hard to become pregnant? Fear not! 
    We have the product for you!`);
    input3.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            player.Fertility++;
            p.innerHTML = `You feel your body becoming more fertil.`;
        }
    });
    const input4 = ButtonButton("Fertility subtractor 70g", `Tired of getting knocked up by a bunch of deadbeat fathers? 
    We have the product to turn your fertile nethers into a barren wasteland!`);
    input4.addEventListener("click", function () {
        if (player.Gold >= 70) {
            player.Gold -= 70;
            player.Fertility -= 3;
            p.innerHTML = "You feel your body becoming more barren."
        }
    });
    const input5 = ButtonButton("Virility booster 70g", `Do you feel like you don't have enough children? 
    Don't worry! With our virility booster you can be sure that you will get enough successors!`);
    input5.addEventListener("click", function () {
        if (player.Gold >= 70) {
            player.Gold -= 70;
            player.Virility++;
            p.innerHTML = `You feel your virility increasing.`;
        }
    });
    const input6 = ButtonButton("Virility subtractor 30g", `Do you have nightmares that future partners will demand child support? 
    Do you want to live a child-free life? Well then, look no further!`);
    input6.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            player.Virility -= 3;
            p.innerHTML = `You feel your virility decreasing`;
        }
    });
    const input7 = ButtonButton("Cum booster 100g", `Do you shoot blanks? Say no more! With our cum booster, 
    your balls will refill at a healthy rate. Warning: over-dosing can lead to spontaneous ejaculation.`);
    input7.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Gold -= 100;
            for (let e of player.Balls) {
                e.CumRate += 0.1;
            }
            p.innerHTML = `You get a tingling feeling in your balls, you think it works!`
        }
    });
    const input8 = ButtonButton("Cum dropper 20g", `Do your balls overfill and you spontaneously ejaculate in your pants? 
    Don't worry about it! This will dry up your balls. Warning: over-dosing can lead to impotence.`);
    input8.addEventListener("click", function () {
        if (player.Gold >= 20) {
            player.Gold -= 20;
            for (let e of player.Balls) {
                e.CumRate -= 0.5;
            }
            p.innerHTML = `You get a strange feeling in your balls, you think it works!`
        }
    });
    const br = () => {
            return document.createElement("br");
        },
        Inputs = [input1, input2, br(), input3, input4, br(), input5, input6, br(), input7, input8].forEach((src) => {
            div.appendChild(src);
        });
    Buildings.appendChild(div);
    Buildings.appendChild(br());
    Buildings.appendChild(LeaveBuilding());
    document.getElementById("Buildings").style.display = 'block';
};
// Cheats to help me with development and aid those who don't like grinding. 
function CheatEngine() {
    if (Settings.Cheats.Gold) {
        player.Gold++;
    }
    if (Settings.Cheats.Masc) {
        player.Masc++;
    }
    if (Settings.Cheats.Femi) {
        player.Femi++;
    }
    if (Settings.Cheats.Exp) {
        player.Exp++;
    }
    if (Settings.Cheats.VoreExp) {
        player.Vore.Exp++;
    }
    if (Settings.Cheats.FastTime) {
        DateTracker();
    }
}

DocId("Gold").addEventListener("click", function () {
    const gold = DocId("Gold");
    let clicked = gold.dataset.clicked;
    clicked++;
    gold.dataset.clicked = clicked;
    if (clicked > 10) {
        DisplayNone();
        DocId("CheatMenu").style.display = 'block';
        DocId("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
        DocId("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
        DocId("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
        DocId("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
        DocId("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
        DocId("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
        DocId("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
    }
});
DocId("CheatsEnabled").addEventListener("click", function () {
    Settings.Cheats.Enabled = Settings.Cheats.Enabled ? false : true;
    DocId("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
});
DocId("CheatsGold").addEventListener("click", function () {
    Settings.Cheats.Gold = Settings.Cheats.Gold ? false : true;
    DocId("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
});
DocId("CheatsMasc").addEventListener("click", function () {
    Settings.Cheats.Masc = Settings.Cheats.Masc ? false : true;
    DocId("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
});
DocId("CheatsFemi").addEventListener("click", function () {
    Settings.Cheats.Femi = Settings.Cheats.Femi ? false : true;
    DocId("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
});
DocId("CheatsExp").addEventListener("click", function () {
    Settings.Cheats.Exp = Settings.Cheats.Exp ? false : true;
    DocId("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
});
DocId("CheatsVoreExp").addEventListener("click", function () {
    Settings.Cheats.VoreExp = Settings.Cheats.VoreExp ? false : true;
    DocId("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
});
DocId("CheatsFastTime").addEventListener("click", function () {
    Settings.Cheats.FastTime = Settings.Cheats.FastTime ? false : true;
    DocId("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
});
DocId("CloseCheatMenu").addEventListener("click", function () {
    DocId("CheatMenu").style.display = 'none';
    DisplayGame();
});
// Checks flags, settings, etc at load
function CheckFlags() {
    // Flags

    // load Settings
    DateTracker();

    document.body.style.backgroundColor = Settings.BackColor;
    MapColor = Settings.MapColor;
    document.body.style.color = Settings.TextColor;
    document.body.style.fontFamily = Settings.TextFont;

    if (!Settings.hasOwnProperty("MapPercent")) {
        Settings.MapPercent = 0.9;
        console.log("Added MapPercent")
    }
    if (!Settings.hasOwnProperty("FontSize")) {
        Settings.FontSize = 1;
    }
    document.body.style.fontSize = Settings.FontSize + "em";

    if (Settings.Vore) {
        if (!Settings.hasOwnProperty("VoreSettings")) {
            Settings.VoreSettings = {
                StomachDigestion: false,
                CumTF: false,
                ChildTF: false,
                VCumDigestion: false,
                MilkTF: false,
                AnalDigestion: false
            }
        }
        //More load fixing
        if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion")) {
            Settings.VoreSettings.AnalDigestion = false;
        }
        if (!Settings.VoreSettings.hasOwnProperty("AbsorbEssence")) {
            Settings.VoreSettings.AbsorbEssence = "Both";
        }
        if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion")) {
            Settings.VoreSettings.AnalDigestion = false;
        }
    }
    if (!Settings.hasOwnProperty("EssenceAuto")) {
        Settings.EssenceAuto = false;
        console.log("Added EssenceAuto");
    }
    if (!Settings.hasOwnProperty("Pronoun")) {
        Settings.Pronoun = {
            Status: false,
            Herm: "hermaphrodite",
            Male: "male",
            Female: "female",
            Doll: "doll",
            DickGirl: "dickgirl",
            CuntBoy: "cuntboy"
        }
        console.log("Added Settings pronoun");
    }
    if (!Settings.Pronoun.hasOwnProperty("CuntBoy")) {
        Settings.Pronoun.CuntBoy = "cuntboy"
        Settings.Pronoun.DickGirl = "dickgirl"
        console.log("Added more pronouns")
    }
    if (!player.Pregnant.hasOwnProperty("Babies")) {
        player.Pregnant = {};
        player.Pregnant.Status = false;
        player.Pregnant.Babies = [];
        console.log("Added babies []");
    }
    if (!Array.isArray(player.Children)) {
        player.Children = [];
        console.log("Added Children []");
    }
    Flags.Pregnations = Math.max(0, Flags.Pregnations);
    if (!Flags.hasOwnProperty("Date")) {
        Flags.Date = {
            Year: 1200,
            Month: 0,
            Day: 0
        }
        console.log("Added date")
    }
    DateEngine();

    if (!House.hasOwnProperty("Gym")) {
        House.Gym = 0;
        console.log("Added gym");
    }
    if (!House.hasOwnProperty("Kitchen")) {
        House.Kitchen = 0;
        console.log("Added Kitchen");
    }
    if (!House.hasOwnProperty("Brothel")) {
        House.Brothel = 0;
        console.log("Added brothel")
    }
    if (!House.hasOwnProperty("Nursery")) {
        House.Nursery = 0;
        console.log("Added Nursery")
    }
    if (!Settings.hasOwnProperty("MaxLimbs")) {
        Settings.MaxLimbs = {
            MaxBoobs: 5,
            MaxVaginas: 5,
            MaxDicks: 5,
            MaxBalls: 5
        }
        console.log("Added MaxLimbs ")
    }
    if (!player.hasOwnProperty("Age")) {
        player.Age = 18;
        console.log("Added player age")
    }
    if (!player.hasOwnProperty("SecondRace")) {
        player.SecondRace = "human";
    }
    if (!Flags.Date.hasOwnProperty("Hour")) {
        Flags.Date.Hour = 0;
        console.log("Added hour")
    }

    if (!player.hasOwnProperty("Face")) {
        player.Face = {
            Eyes: "brown",
            HairStyle: "curly",
            HairColor: player.Haircolor,
            HairLength: "shoulder-length"
        }
    }
    if (!Settings.hasOwnProperty("Brothel")) {
        Settings.Brothel = {
            ServeMasc: true,
            ServeFemi: true
        }
        console.log("Added brothel settings");
    }
    if (!Settings.hasOwnProperty("LogLength")) {
        Settings.LogLength = 100;
        console.log("Added Settings loglength");
    }
    if (!Settings.hasOwnProperty("Inch")) {
        Settings.Inch = false;
        console.log("Added Inch")
    }
    if (!Flags.hasOwnProperty("BeatSuccubus")) {
        Flags.BeatSuccubus = false;
        console.log("Added beat succubus");
    }
    if (!Flags.hasOwnProperty("FirstCityLike")) {
        Flags.FirstCityLike = 0;
    }
    if (!Settings.hasOwnProperty("BalanceParts")) {
        Settings.BalanceParts = false;
    }
    if (!House.hasOwnProperty("Portal")) {
        House.Portal = {
            Owned: false,
            Mountain: false
        }
        console.log("Added house portal owned false");
    } else if (!House.Portal.hasOwnProperty("Owned")) {
        if (House.Portal) {
            House.Portal = {
                Owned: true,
                Mountain: false
            }
            console.log("Added house portal owned true");
        } else {
            House.Portal = {
                Owned: false,
                Mountain: false
            }
            console.log("Added house portal owned false");
        }
    }
    if (!player.hasOwnProperty("Blessings")) {
        player.Blessings.MountainShrine = {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            MalePreg: 0
        }
    }
    if (!player.Blessings.hasOwnProperty("MountainShrine")) {
        player.Blessings = {};
        player.Blessings.MountainShrine = {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            MalePreg: 0
        }
    };

    FluidsEngine();
    if (!player.hasOwnProperty("RaceEssence")) {
        player.RaceEssence = [
            Human = {
                Race: "Human",
                amount: 100
            }
        ]
        console.log("Added race essence");
    };
    if (!Flags.hasOwnProperty("LastTrain")) {
        Flags.LastTrain = {
            Day: 0,
            Month: 0,
            Year: 0,
            Count: 0
        };
        console.log("Added LastTrain");
    } else if (!Flags.LastTrain.hasOwnProperty("Count")) {
        Flags.LastTrain = {
            Day: 0,
            Month: 0,
            Year: 0,
            Count: 0
        };
        console.log("Modded LastTrain")
    }
    if (!Settings.hasOwnProperty("Cheats")) {
        Settings.Cheats = {
            Enabled: false,
            Gold: false,
            Masc: false,
            Femi: false,
            Exp: false,
            VoreExp: false,
            FastTime: false
        }
        console.log("Added cheats");
    }
    if (!player.Blessings.hasOwnProperty("ChimeraShrine")) {
        player.Blessings.ChimeraShrine = {
            Donated: 0,
            Points: 0
        }
    }
    /**
       else if (player.Blessings.ChimeraShrine.hasOwnProperty("placeholder")){
                   player.Blessings.ChimeraShrine = {
                    Donated: player.Blessings.ChimeraShrine.Donated,
                    Points: player.Blessings.ChimeraShrine.Points,
                    Perk1: 0
        }
       } */
    // Convert old willpower to new will, so it's the same as player.
    for (let e of House.Dormmates) {
        if (e.hasOwnProperty("Willpower")) {
            e.Will = e.Willpower
        }
    }
    if (!player.hasOwnProperty("Mana")) {
        player.Mana = 100;
    }
    if (Array.isArray(player.Spells) !== true) {
        player.MagicAffinity = {
            Fire: 0,
            Elemental: 0, // Fire, ice, water, stone, etc
            Restoration: 0 // Healing, returning to orginal shape/age.
        }
        player.Spells = [ // Array so that I can add more without problems
            Fireball = {
                Name: "Fireball",
                Exp: 0
            }
        ]
        console.log("Changed player.spells to an array");
    }
    if (House.Portal.hasOwnProperty("BlackMarket") === false) {
        House.Portal.BlackMarket = false;
    }

    if (player.Inventory.findIndex(e => e.Name === "SpellBook") === -1) {
        console.log(player.Inventory.findIndex(e => e.Name === "SpellBook"))
        player.Inventory.push(ItemDict.SpellBook);
    }
    HemScale();
    StatusButtonSystem();
};
// Hopefully obselite
/**
 *     for (var e of player.Inventory) {
        var itemarray = Object.values(ItemDict);
        for (var b of itemarray) {
            if (e.Name === b.Name) {
                e.Use = b.Use
            }
        }
    }
 */
function BattleSetup(who) {
    const none = [DocId("map"), DocId("status"), DocId("buttons"),
        DocId("EmptyButtons"), DocId("EventLog")
    ].forEach((src) => {
        src.style.display = 'none';
    })
    DocId("Encounter").style.display = 'grid';
    DocId("BattleText").innerHTML = null;
    DocId("BattleText2").innerHTML = null;
    battle = true;
    who.Health = who.FullHealth;
    who.WillHealth = who.FullWillHealth;
    player.Mana = 100; // Remember to Change
    // Clean battlelog
    while (BattleLog.length > 0) {
        BattleLog.pop();
    };
    Combatants = [];
    CombatTurn = 1;
    CombatantIndex = -1;
    Combatants.push(player);
    // push player teammates
    if (Array.isArray(who)) {
        for (let e of who) {
            Combatants.push(e);
        };
    } else {
        Combatants.push(who);
    };
    // Push enemy teammates 
    UpdateStats();
};

// Combat turn system to allow me to add team mates or fight against 
var CombatTurn = 1,
    Combatants = [],
    CombatantIndex = -1;

function NextTurn() {
    CombatantIndex++;
    if (CombatantIndex >= Combatants.length) {
        CombatantIndex = 0;
        BattleLog.push(`<br>Turn ${CombatTurn}<br>`);
        CombatTurn++;
        const BT = DocId("BattleText2"),
            temp = BattleLog.slice(0);
        BT.innerHTML = null;
        for (let e of temp.reverse()) {
            BT.innerHTML += `${e}<br>`
        }
    };
    if (Combatants[CombatantIndex] === player) {
        // wait for player input
    } else {
        const ee = Combatants[CombatantIndex];
        EnemyAttack(ee);
    };
};

function UpdateStats() {
    CombatButtons();
    const ee = enemies[EnemyIndex],
        ESH = DocId("EnemyStatusHealth"),
        ESWH = DocId("EnemyStatusWillHealth"),
        SH = DocId("StatusHealth2"),
        SWH = DocId("StatusWillHealth2"),
        BE = DocId("BattleEnemy"),
        SN = DocId("StatusName2");

    // Enemy Status
    BE.innerHTML = `${ee.Name}<br>${ee.Race} ${Pronoun(CheckGender(ee))}`;
    ESH.innerHTML = Math.round(ee.Health);
    ESH.style.width = `${100 * (ee.Health / ee.FullHealth)}%`;
    ESWH.innerHTML = Math.round(ee.WillHealth);
    ESWH.style.width = `${100 * (ee.WillHealth / ee.FullWillHealth)}%`;
    // Player Status
    SN.innerHTML = `${player.Name} ${player.LastName}`;
    SH.innerHTML = Math.round(player.Health);
    SH.style.width = `${Math.min(103, 100 * (player.Health / player.MaxHealth))}%`;
    SWH.innerHTML = Math.round(player.WillHealth);
    SWH.style.width = `${Math.min(103, 100 * (player.WillHealth / player.MaxWillHealth))}%`;
    player.Mana += 2; // Slow in combat mana rec

    if (ee.Health <= 0 || ee.WillHealth <= 0) {
        WinBattle();
        return;
    } else if (player.Health <= 0 || player.WillHealth <= 0) {
        Lose();
        return;
    }
    NextTurn();
};

const BattleLog = [];

function AddToBattleLog(text, who = player) {
    BattleLog.push(`${text}<br>`);
    BattleLog.push(who.Name);
};

function EnemyAttack(ee) {
    const {
        Charm,
        Str,
        Boobies,
        Balls
    } = ee;
    if (Str >= Charm) {
        const PhysicalAttacks = [
                "Kicks", "Hits", "Grapple with"
            ],
            EAttack = (RandomInt(1, 5) * Str) / 2,
            Text = `${RandomString(PhysicalAttacks)} you, causing ${EAttack} dmg.`
        player.Health -= EAttack;
        AddToBattleLog(Text, ee);
    } else { // if (ee.Str < ee.Charm) Unnesary?
        const LustAttacks = ["Tease you"],
            EAttack = (RandomInt(1, 5) * Charm) / 2;
        if (Boobies.length > 0 ? Boobies[0].Size > 5 : false) {
            const boob = "Fondle their breast in a seductive manner";
            LustAttacks.push(boob);
        };
        if (Balls.length > 0) {
            const ball = "Fondle their balls in a teasing manner";
            LustAttacks.push(ball);
        };
        const Text = `${RandomString(LustAttacks)} causing your will to suffer by ${EAttack}.`
        AddToBattleLog(Text, ee);
        player.WillHealth -= EAttack;
    };
    UpdateStats();
    return;
};
/**
 * Need to make enemy attack more flavour full
 * Make it so enemies tease with different movement & hit with stuff like kick, sweeps, slashing, etc..
 * Race specific is extra needed, succubus can tex tease by fucking themselfs with their tail maybe?
 */

// Battle attack buttons
// Ideas for new combat system I want to add resistence and other things for more depth
/** Ideas to add
 *  Ways to ignore resistance like pierce?
 *  Ways to do extra dmg like they have 5% res but you have 12% something so they get -7% res
 *  Pets & allies attack
 */

function LusRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.Will + 0.01 * who.Charm)));
}

function PhyRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.End + 0.01 * who.Str)));
}

function MagRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.Will + 0.01 * who.Int)));
}

function CombatFunc() { // Whole combat div
    const Combat = DocId("Encounter");
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    const h1text = document.createTextNode("Battle");
    h1.appendChild(h1text);
    div.appendChild(h1);

    // Enemy
    const TheEnemy = document.createElement("div");
    TheEnemy.setAttribute("id", "TheEnemy");
    TheEnemy.classList.add("d");

    const BattleEnemy = document.createElement("p");
    BattleEnemy.setAttribute("id", "BattleEnemy");

    const EH = document.createElement("div");
    EH.setAttribute("id", "EnemyStatusHealth");
    EH.classList.add("StatusHealth");

    const EHOD = document.createElement("div");
    EHOD.classList.add("FullBar");
    EHOD.appendChild(EH);

    const EHL = document.createElement("label");
    EHL.setAttribute("for", "EnemyStatusHealth");
    EHL.innerHTML("Health");
};

function CombatButtons() { // Just combat buttons
    let ee = enemies[EnemyIndex];
    const Combat = DocId("CombatButtons"),
        BT = DocId("BattleText");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    let row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const Hit = ButtonButton(`Hit<br>${Math.floor(4 * player.Str / 2)}-${Math.floor(8 * player.Str / 2)}dmg`);
    Hit.addEventListener("click", function () {
        const PAttack = Math.floor(RandomInt(4, 8) * player.Str / 2); // * PhyRes(ee);
        ee.Health -= PAttack;
        AddToBattleLog(`You dealt ${PAttack} dmg to ${ee.Name}.`);
        UpdateStats();
    });
    row1.appendChild(Hit);
    Combat.appendChild(row1);

    const NonTease = [ // Insert enemies who can't be beaten by tease
        "Feral"
    ];
    if (NonTease.some(e => e === ee.Name)) {
        // Nothing for now will later make it so tease doesn't get created.
        console.log("Non tease")
    } else {
        const Tease = ButtonButton(`Tease<br>${Math.floor(4 * player.Charm / 2)}-${Math.floor(8 * player.Charm / 2)}Will`);
        Tease.addEventListener("click", function () {
            const PAttack = Math.floor(RandomInt(4, 8) * player.Charm / 2); // * LusRes(ee);
            ee.WillHealth -= PAttack;
            AddToBattleLog(`You dealt ${PAttack} will dmg to ${ee.Name}.`);
            UpdateStats();
        });
        row2.appendChild(Tease);
        Combat.appendChild(row2);
    }
    if (player.Spells.length > 0) {
        for (let e = 0; e < Math.min(player.Spells.length, 3); e++) {
            const Spell = SpellButton(e);
            row3.appendChild(Spell);
        }
        // Todo make it so that instead of spell with index 0,1,2 spawn at outside book make it so
        // that last casted spells is at the "quick cast" menu 
        if (player.Spells.length >= 2) {
            const book = InputButton("Spellbook");
            book.addEventListener("click", function () {
                Spellbook();
            });
            row3.appendChild(book);
        }
        Combat.appendChild(row3)
    }

    const FleeBattle = InputButton("Flee");
    FleeBattle.addEventListener("click", function () {
        if (RandomInt(1, 10) > 7) {
            battle = false;
            DisplayGame();
            DocId("Encounter").style.display = 'none';
            AddToBattleLog(`Success!`);
        } else {
            AddToBattleLog(`You failed to get away.`);
            UpdateStats();
        }
    });
    row4.appendChild(FleeBattle);

    const Surrender = InputButton("Surrender");
    Surrender.addEventListener("click", function () {
        Lose();
    });
    row4.appendChild(Surrender);
    Combat.appendChild(row4);
}

function Spellbook() {
    // Replace all buttons with spells
    const Combat = DocId("CombatButtons");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    const row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const CloseBook = InputButton("Close book");
    CloseBook.addEventListener("click", function () {
        CombatButtons();
    });
    row4.appendChild(CloseBook);

    for (let e = 0; e < player.Spells.length; e++) {
        if (e < 3) {
            const Spell = SpellButton(e);
            row1.appendChild(Spell);
        } else if (e < 6) {
            const Spell = SpellButton(e);
            row2.appendChild(Spell);
        } else {
            const Spell = SpellButton(e);
            row3.appendChild(Spell);
        }
    }
    const Frag = document.createDocumentFragment();
    Rows = [row1, row2, row3, row4].forEach(function (src, index, array) {
        Frag.appendChild(src);
        if (index + 1 === array.length) {
            Combat.appendChild(Frag);
        }
    });
}

function SpellButton(index) { // Instead of repeating, Can only add fireball now need a const dic for spells
    const it = player.Spells[index],
        DictIt = SpellDict[it.Name],
        Spell = ButtonButton(`${DictIt.Name} ${DictIt.ManaCost()}M<br>${DictIt.Does(it.Exp)}`,
            SpellDictLite[it.Name].Title), // + " Mana-cost: " + ManaCost;
        ee = enemies[EnemyIndex];
    Spell.addEventListener("click", function () {
        DictIt.Cast(index, ee);
        UpdateStats();
    });
    return Spell;
}
function WinBattle() {
    const ee = enemies[EnemyIndex];
    player.Exp += ee.Exp;
    player.Gold += ee.Gold;
    CombatQuests(ee);
    //WinEnemyChanges(ee);
    DropSystem(ee);
    DocId("Encounter").style.display = 'none';
    if (Settings.Skip) {
        DisplayGame();
    } else if (false) { // Replace with ee.Name === "specific name"
        DocId("DungeonSystem").style.display = 'block';
        DocId("DungeonText").innerHTML = "What should you do with her?";
        DocId("DungeonButtons").innerHTML = "<input type=\"button\" id=\"Partner\" value=\"Take her as a equal.\">" +
            "<input type=\"button\" id=\"MakeSubmit\" value=\"Make her understand her place.\" >";
    } else {
        SetupSex(ee);
    }
}

function SetupSex(ee) {
    ee.SessionOrgasm = 0;
    player.SessionOrgasm = 0;
    player.Orgasm = 0;
    LastPressed = " ";
    DocId("SexText").innerHTML = HeightSystem(player, ee);
    DocId("AfterBattle").style.display = 'grid';
    DocId("SexButtons").style.display = 'grid';
    if (Settings.ImgPack) {
        DocId("AfterBattle").classList.remove("AfterBattle");
        DocId("AfterBattle").classList.add("AfterBattleImg");
        DocId("MyImg").style.display = 'block';

    } else {
        DocId("AfterBattle").classList.add("AfterBattle");
        DocId("AfterBattle").classList.remove("AfterBattleImg");
        DocId("MyImg").style.display = 'none';
    }
    CheckArousal();
    if (ee.Name === "Feral") {
        AfterBattleButtons(false);
    } else {
        AfterBattleButtons();
    }
}

// Handles quests related to combat
function CombatQuests(ee) {
    for (let q of player.Quests) {
        if (q.Name === "ElfHunt") {
            if (ee.Race === "Elf") {
                q.Count++;
                if (q.Count >= 3) {
                    q.Completed = true;
                    if (q.Count % 3 === 0) {
                        q.hasOwnProperty("Tier") ? q.Tier < 3 ? q.Tier++ : q.Tier = 3 : q.Tier = 1;
                    }
                }
            }
        }
        if (q.Name === "BanditLord" && q.Completed === false) {
            if (ee.Name === "Banditlord") {
                q.Completed = true;
            }
        }
    }
}

// Some enemies change when you win
function WinEnemyChanges(ee) {
    if (ee.Race === "Dragon") {
        ee.Race = "Anthro dragon";
    }
}
function DateTracker() {
    Flags.Date.Hour++;
    HouseEngine();
    if (Flags.Date.Hour % 6 === 0) {
        const displayDate = new Date(Flags.Date.Year, Flags.Date.Month - 1, Flags.Date.Day);
        DocId("CurrentDate").innerHTML = `${displayDate.toDateString()} ${Flags.Date.Hour > 9 ? `${Flags.Date.Hour}:00` : `0${Flags.Date.Hour}:00`}`;
    }
    if (Flags.Date.Hour > 23) {
        Flags.Date.Day++;
        Flags.Date.Hour = 0;
        if (Flags.Date.Day > 30) {
            Flags.Date.Day = 1;
            Flags.Date.Month++;
            if (Flags.Date.Month > 12) {
                Flags.Date.Month = 1;
                Flags.Date.Year++;
                player.Age++;
            }
        }
        PregnanyEngine();
    }
    // health/will && fat burn
    if (!battle) {
        VoreEngine();
        FoodEngine();
        FluidsEngine();
        player.RestRate = 1 + player.Perks.FasterRest.Count * 1;
        if (player.Health < player.MaxHealth && player.Fat >= player.Height / 100) {
            if ((player.Health + player.RestRate) > player.MaxHealth) {
                player.Health = player.MaxHealth;
            } else {
                player.Health += player.RestRate;
            }
        }
        if (player.WillHealth < player.MaxWillHealth && player.Fat >= player.Height / 100) {
            if ((player.WillHealth + player.RestRate) > player.MaxWillHealth) {
                player.WillHealth = player.MaxWillHealth;
            } else {
                player.WillHealth += player.RestRate;
            }
        }
        if (player.Fat <= player.Height / 100) {
            player.Health -= 1;
            player.WillHealth -= 1;
        }
        if (Settings.Vore) {
            if (player.Vore.VorePerks.hasOwnProperty("PredatorsMeta") ? player.Vore.VorePerks.PredatorsMeta.Count > 0 : false) {
                const RestRate = player.Vore.VorePerks.PredatorsMeta.Count * 2;
                if (player.Health < player.MaxHealth && player.Fat >= player.Height / 100) {
                    if ((player.Health + RestRate) > player.MaxHealth) {
                        player.Health = player.MaxHealth;
                    } else {
                        player.Health += RestRate;
                    }
                }
                if (player.WillHealth < player.MaxWillHealth && player.Fat >= player.Height / 100) {
                    if ((player.WillHealth + RestRate) > player.MaxWillHealth) {
                        player.WillHealth = player.MaxWillHealth;
                    } else {
                        player.WillHealth += RestRate;
                    }
                }
                if ((player.Fat / player.Weight) * 100 > 18) {
                    player.Fat -= player.Fat / 100 * player.Vore.VorePerks.PredatorsMeta.Count;
                }
            }
        }
    }
};
function TestDialog() {
    var Npc = document.getElementById("Npcs");
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.lastChild)
    };

    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode("Testsson");
    h1.appendChild(h1Text);
    Npc.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    Npc.appendChild(p);

    var Inputs = document.createElement("div");

    var Option1 = InputButton("Option 1");
    Option1.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option11 = InputButton("Option 1-1");
        Option11.addEventListener("click", function () {

        });
        Inputs.appendChild(Option11);

        var Option12 = InputButton("Option 1-2");
        Option12.addEventListener("click", function () {

        });
        Inputs.appendChild(Option12);
    });
    Inputs.appendChild(Option1);

    var Option2 = InputButton("Option 2a");
    Option2.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option21 = InputButton("Option 2-1");
        Option21.addEventListener("click", function () {

        });
        Inputs.appendChild(Option21);

        var Option22 = InputButton("Option 2-2");
        Option22.addEventListener("click", function () {

        });
        Inputs.appendChild(Option22);
    });
    Inputs.appendChild(Option2);

    Npc.appendChild(Inputs);
}
function OrganSize(Size, who) {
    return Math.floor(Size * (who.Height / 180));
    // return Math.ceil(Math.sqrt(Size) * GrowthScale(who));
}

function EssenceCheck(who) {
    function DickMaker() {
        const Dick = {
            Size: 2,
            Type: who.Race,
            Virgin: true
        }
        return Dick;
    }

    function BallMakes() {
        const Ball = {
            Size: 2,
            Type: who.Race,
            CumMax: 1 / 3 * Math.PI * Math.pow(2, 3),
            Cum: 1 / 6 * Math.PI * Math.pow(2, 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        return Ball;
    }

    function BoobMaker() {
        const Boob = {
            Size: 0,
            Type: who.Race,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(2, 3)
        }
        return Boob;
    }

    function PussyMaker() {
        const Pussy = {
            Size: 2,
            Type: who.Race,
            Virgin: true
        }
        return Pussy;
    }
    if (!who.hasOwnProperty("Dicks")) {
        who.Dicks = [];
    }
    if (!who.hasOwnProperty("Balls")) {
        who.Balls = [];
    }
    if (!who.hasOwnProperty("Pussies")) {
        who.Pussies = [];
    }
    if (!who.hasOwnProperty("Boobies")) {
        who.Boobies = [];
    }
    if (!who.hasOwnProperty("Anal")) {
        who.Anal = []
    }
    if (who.Dicks.length === 0 && who.Masc >= 30) {
        who.Dicks.push(DickMaker());
        who.Masc -= 30;
        EssenceCheck(who);
        return
    }
    if (who.Balls.length === 0 && who.Masc >= 50) {
        who.Balls.push(BallMakes());
        who.Masc -= 50;
        EssenceCheck(who);
        return
    }
    if (who.Pussies.length === 0 && who.Femi >= 30) {
        who.Pussies.push(PussyMaker());
        who.Femi -= 30;
        EssenceCheck(who);
        return
    }
    if (who.Boobies.length === 0) {
        who.Boobies.push(BoobMaker());
        EssenceCheck(who);
        return
    }
    const DickTotal = who.Dicks.length > 0 ? who.Dicks.map(d => d.Size).reduce((tot, cur) => tot + cur) : 0,
        BallsTotal = who.Balls.length > 0 ? who.Balls.map(b => b.Size).reduce((tot, cur) => tot + cur) : 0,
        PussyTotal = who.Pussies.length > 0 ? who.Pussies.map(p => p.Size).reduce((tot, cur) => tot + cur) : 0,
        BoobsTotal = who.Boobies.length > 0 ? who.Boobies.map(b => b.Size).reduce((tot, cur) => tot + cur) : 0;
    if (BallsTotal * 2 > DickTotal) {
        if (who.Dicks.length > 0 ? EssenceCost(Last(who.Dicks)) <= who.Masc : false) {
            who.Masc -= EssenceCost(Last(who.Dicks));
            Last(who.Dicks).Size++;
            EssenceCheck(who);
            return
        };
    } else {
        if (who.Balls.length > 0 ? EssenceCost(Last(who.Balls)) <= who.Masc : false) {
            who.Masc -= EssenceCost(Last(who.Balls));
            Last(who.Balls).Size++;
            EssenceCheck(who);
            return
        };
    }
    if (BoobsTotal * 2 > PussyTotal) {
        if (who.Pussies.length > 0 ? EssenceCost(Last(who.Pussies)) <= who.Femi : false) {
            who.Femi -= EssenceCost(Last(who.Pussies));
            Last(who.Pussies).Size++;
            EssenceCheck(who);
            return
        };
    } else {
        if (who.Boobies.length > 0 ? EssenceCost(Last(who.Boobies)) <= who.Femi : false) {
            who.Femi -= EssenceCost(Last(who.Boobies));
            Last(who.Boobies).Size++;
            EssenceCheck(who);
            return
        };
    }
    if (who.Anal.length === 0) {
        const Anal = {
            Size: who.Height / 12,
            Type: who.Race,
            Virgin: true,
            stretch: 1,
        }
        who.Anal.push(Anal);
    } else {
        who.Anal[0].Size = who.Height / 12;
    }
    return;

}
function ManualGrowthScale() {
    return 1 //(player.Height / 160)
} // I put this a function to make it easier to trial different formulas.


function EssenceCost(what) {
    return Math.min(2000, Math.round((30 * Math.pow(1.05, what.Size))));
};

function EssenceExtraCost(what) {
    return Math.round((30 * Math.pow(3, what.length)));
};

DocId("EssenceAuto").addEventListener("click", function () {
    Settings.EssenceAuto = Settings.EssenceAuto ? false : true;
    DocId("EssenceAuto").value = Settings.EssenceAuto ? "Essence Auto" : "Essence Manual";
    // Settings.BalanceParts = false;
});

DocId("GrowBalls").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    BallsButtons();
});
DocId("GrowPussy").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    PussyButtons();
});
DocId("GrowBreast").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    BreastButtons();
});
DocId("GrowDick").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    DickButtons();
});

function BreastButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var Extraboobs = InputButton(`Extra breasts ${EssenceExtraCost(player.Boobies)}F`);
    Extraboobs.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Boobies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Boob = {
                Size: 0,
                Type: player.Race,
                Milk: 0,
                MilkBaseRate: 0,
                MilkRate: 0,
                MilkMax: 0

            }
            player.Boobies.push(Boob);
        }
        BreastButtons();
    });
    ManualOrgans.appendChild(Extraboobs);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Boobies) {
        ManualOrgans.appendChild(BreastButton(e));
    }
}

function BreastButton(e) {
    var boob = ButtonButton(`${BoobSizeConvertor(e.Size)} ${EssenceCost(e)}Feminity`)
    boob.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            e.Size += 1 * ManualGrowthScale();
            e.MilkMax = Math.round(e.Size * 400);
        }
        BreastButtons();
    });
    return boob;
}

function PussyButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraPussy = InputButton(`Extra pussy ${EssenceExtraCost(player.Pussies)}F`);
    ExtraPussy.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Pussies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Pussy = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Pussies.push(Pussy);
            PussyButtons();
        }
    });
    ManualOrgans.appendChild(ExtraPussy);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Pussies) {
        ManualOrgans.appendChild(PussyButton(e))
    };
}

function PussyButton(e) {
    var pussy = ButtonButton(`${CmToInch(e.Size)} ${EssenceCost(e)}Feminity`)
    pussy.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            e.Size += 1 * ManualGrowthScale();
            PussyButtons();
        }
    });
    return pussy;
}

function DickButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraDick = InputButton(`Extra dick ${EssenceExtraCost(player.Dicks)}M`);
    ExtraDick.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Dicks);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            var Dick = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Dicks.push(Dick);
            DickButtons();
        }
    });
    ManualOrgans.appendChild(ExtraDick);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Dicks) {
        ManualOrgans.appendChild(DickButton(e));
    }
}

function DickButton(e) {
    var Dick = ButtonButton(`${CmToInch(e.Size)} ${EssenceCost(e)}Masculinity`);
    Dick.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            e.Size += 1 * ManualGrowthScale();
            DickButtons();
        }
    });
    return Dick;
}

function BallsButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    var ExtraBall = InputButton(`Extra Balls ${EssenceExtraCost(player.Balls)}M`);
    ExtraBall.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Balls);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            var Ball = {
                Size: 2,
                Type: player.Race,
                CumMax: 2,
                Cum: 0,
                CumRate: 0,
                CumBaseRate: 0.5
            }
            player.Balls.push(Ball);
            BallsButtons();
        }
    });
    ManualOrgans.appendChild(ExtraBall);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Balls) {
        ManualOrgans.appendChild(BallsButton(e));
    }
}

function BallsButton(e) {
    var Ball = ButtonButton(`${CmToInch(e.Size)} ${EssenceCost(e)}Masculinity`)
    Ball.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            e.Size += 1 * ManualGrowthScale();
            BallsButtons();
        }
    });
    return Ball;
}

function ManualOrgansClose() {
    var Close = InputButton("Back");
    Close.addEventListener("click", function () {
        DocId("EssenceStart").style.display = 'block';
        ManualOrgans.style.display = 'none';
        while (ManualOrgans.hasChildNodes()) {
            ManualOrgans.removeChild(ManualOrgans.firstChild);
        }
    });
    return Close;
}

DocId("EssenceOptionsLeave").addEventListener("click", function () {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    DocId("EssenceStart").style.display = 'block';
    DocId("ManualGrowth").style.display = 'none';
    DisplayNone();
    DisplayGame();
});
function isTaur(mode = 1) {
    const Taur = ["centaur"],
        max = Math.min(2, player.RaceEssence.length),
        RaceEss = player.RaceEssence;
    for (let e = 0; RaceEss.length < max; e++) {
        if (mode === 1) {
            Taur.indexOf(RaceEss[e].Race) > -1 ? e : false
        } else {
            if (Taur.indexOf(RaceEss[e].Race) > -1) {} else {
                return e; // return biggest non taur race
            }
        }
    }
}

// Concept for calculating what species you're treated as
function RaceEssenceBalance() {
    // filter out less than 1
    player.RaceEssence = player.RaceEssence.filter(f => f.amount > 1);
    const RaceEss = player.RaceEssence;

    // Make sure all races have first letter cap + rest lowercase
    if (RaceEss.some(e => e.Race !== e.Race.Capitalize())) {
        console.log("Non cap race");
        for (let e of RaceEss) {
            e.Race = e.Race.Capitalize();
        }
    };

    // Combining amounts in case of duplicates then clearing/splicing them.
    for (let e in RaceEss) {
        for (let i in RaceEss) {
            if (RaceEss[e].Race === RaceEss[i].Race && e != i) {
                console.log("Duplicate race");
                RaceEss[e].amount += RaceEss[i].amount;
                RaceEss.splice(i, 1);
            }
        }
    };

    // Finding the new majority essence by sorting high to low 
    RaceEss.sort((a, b) => b.amount - a.amount);

    /* First I map the amounts then I count the total amount with reduce, after that I filter out
       results less than 1 percent than total amount or less than 20 amount*/
    const totalAbsorb = RaceEss.length > 0 ? RaceEss.map(m => m.amount).reduce((acc, cur) => acc + cur) : 0,
        RA = RaceEss.length > 0 ? RaceEss.filter(f => f.amount / totalAbsorb > 0.01 && f.amount > 10) : [];

    const oldRace = player.Race,
        oldSecondRace = player.SecondRace;
    if (totalAbsorb < 100) {
        player.Race = "humanoid"; // No race is lowest form of human? or implement doll race?
        if (RaceEss[0].amount > 50) {
            player.SecondRace = RaceEss[0].Race;
            GenitalChange(player.SecondRace); // null dick? bland dick? average?
        } else {
            player.SecondRace = player.Race
            GenitalChange(player.SecondRace)
        }
    } else {
        const R1 = Math.round(100 * RA[0].amount / totalAbsorb),
            R2 = RA.length > 1 ? Math.round(100 * RA[1].amount / totalAbsorb) : 0,
            R3 = RA.length > 2 ? Math.round(100 * RA[2].amount / totalAbsorb) : 0;
        if (isTaur()) { // centaur always second race?
            player.Race = player.RaceEssence.length < 2 ? "human" : RaceEss[isTaur("B")].Race;
            player.SecondRace = RaceEss[isTaur()].Race;
            GenitalChange(RaceEss[isTaur()].Race);
        } else if (R1 + R2 + R3 < 50 && R1 > 0 && R2 > 0 && R3 > 0) {
            player.Race = "chimera";
            player.SecondRace = "chimera";
            GenitalChange(RaceEss[0].Race); // change GenitalsChange you can have organs from more than on race
        } else {
            if (R2 > 25) {
                player.Race = RaceEss[0].Race;
                player.SecondRace = RaceEss[1].Race
                GenitalChange(RaceEss[1].Race); // Will add options to chose what race genitals is.
            } else {
                player.Race = RaceEss[0].Race;
                player.SecondRace = player.Race;
                GenitalChange(RaceEss[0].Race);
            }
        }
        player.Race = player.Race.toLowerCase();
        player.SecondRace = player.SecondRace.toLowerCase();
    }
    if (player.Race !== oldRace) { // Add a call to eventlog #TODO write text to reflect race change
        console.log("Race change!");
    }
    if (player.SecondRace !== oldSecondRace) {
        console.log("SecondRace change");
    }
}

function PotionDrunk(race, Dose = 50) {
    const RaceEss = player.RaceEssence,
        a = RaceEss.findIndex(e => e.Race === race.Capitalize());
    if (a > -1) {
        RaceEss[a].amount += Dose;
    } else {
        const Race = {
            Race: race.Capitalize(),
            amount: Dose
        }
        RaceEss.push(Race);
    }
}

function RaceDesc(who) {
    const Race = who.Race.toLowerCase(),
        SecondRace = who.SecondRace.toLowerCase();
    switch (Race) {
        case "human":
            if (SecondRace == "human") {
                return "human";
            } else if (SecondRace == "elf") {
                return "half elf";
            } else if (SecondRace == "centaur") {
                return "centaur";
            } else if (SecondRace == "equine") {
                return "satyr";
            }
        case "elf":
            if (SecondRace == "human") {
                return "half elf";
            } else if (SecondRace == "elf") {
                return "elf";
            } else if (SecondRace == "centaur") {
                return "centaur";
            } else if (SecondRace == "equine") {
                return "satyr";
            }
        case "equine":
            if (SecondRace == "human") {
                return "humanoid equine";
            } else if (SecondRace == "elf") {
                return "humanoid equine";
            } else if (SecondRace == "centaur") {
                return "anthropomorphic centaur";
            } else if (SecondRace == "equine") {
                return "equine";
            }
        default:
            return Race;
    }
}

function DetailedRaceDesc() {
    const RaceEss = player.RaceEssence,
        RA = RaceEss;
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence
    const totalAbsorb = RaceEss.length > 0 ? RaceEss.map(m => m.amount).reduce((acc, cur) => acc + cur) : 0;

    const R1 = Math.round(100 * RA[0].amount / totalAbsorb),
        R2 = RA.length > 1 ? Math.round(100 * RA[1].amount / totalAbsorb) : 0,
        R3 = RA.length > 2 ? Math.round(100 * RA[2].amount / totalAbsorb) : 0;

    let text
    if (totalAbsorb < 100) {
        text = "Yor're an "
        if (RaceEss[0].amount > 20) {
            text += RaceEss[0].Race + " looking humaniod."
        } else {
            text += "humaniod."
        }
        return text;
    } else if (R1 > 99) {
        return "You're fully " + RaceEss[0].Race + "!";
    } else if (R1 + R2 + R3 < 50) {
        return "You're an unnatural mix of an assortment of species!";
    } else if (R1 > 90) {
        return "You're indistinguishable from any other " + RaceEss[0].Race;
    } else if (R1 > 80) {
        text = "You're mostly " + RaceEss[0].Race + ", but you've got";
        if (R2 > 10) {
            text += " some " + RaceEss[1].Race + " traits.";
        } else {
            text += " other traits mixed in.";
        }
        return text;
    } else if (R1 > 70) {
        text = "You're mostly " + RaceEss[0].Race + ", but"
        if (R2 > 20) {
            text += " could be confused for a half-" + RaceEss[1].Race + ".";
        } else if (R2 + R3 > 20) {
            text += " you've added a few other traits, notably " + RaceEss[1].Race + " and " +
                RaceEss[2].Race + ".";
        } else {
            text += " you've added a few other traits.";
        }
        return text;
    } else if (R1 < R2 + 10) {
        return "You're half-" + RaceEss[0].Race + ", half " + RaceEss[1].Race + ".";
    } else if (R1 < R2 + R3) {
        return "You're a curious hybrid, a mix between " + RaceEss[0].Race + ", " + RaceEss[1].Race + ", and " + RaceEss[2].Race + ".";
    } else {
        return "You're unmistakably an " + RaceEss[0].Race + ", but you're deep in an uncanny valley.";
    }
}
	    // Event log
	    var LogArray = [];

	    function EventLog(LogText) {
	    	var newText = LogText + "<br>";
	    	LogArray.unshift(newText);
	    	while (LogArray.length > Settings.LogLength) {
	    		LogArray.pop();
	    	}
	    	var LogHistory = "";
	    	for (var e = 0; e < LogArray.length; e++) {
	    		LogHistory += LogArray[e] + "<br>";
	    	}
	    	//LogHistory = newText + LogHistory;
	    	DocId("EventText").innerHTML = LogHistory;
	    }
	    DocId("HideEventLog").addEventListener("click", function () {
	    	if (DocId("EventLogPart").style.display === 'none') {
	    		DocId("EventLogPart").style.display = 'block';
	    		if (window.innerHeight > 600) {
	    			DocId("EventLogH2").style.display = 'inline-block';
	    		}
	    		DocId("HideEventLog").value = "H";
	    	} else {
	    		DocId("EventLogPart").style.display = 'none';
	    		DocId("HideEventLog").value = "S";
	    		DocId("EventLogH2").style.display = 'none';
	    	}
	    });
	    DocId("HideFluids").addEventListener("click", function () {
	    	if (DocId("FluidPart").style.display === 'none') {
	    		DocId("FluidPart").style.display = 'block';
	    		if (window.innerHeight > 600) {
	    			DocId("EventFluidsH2").style.display = 'inline-block';
	    		}
	    		DocId("FluidsMode").style.display = 'inline-block';
	    		DocId("HideFluids").value = "H";
	    	} else {
	    		DocId("FluidPart").style.display = 'none';
	    		DocId("EventFluidsH2").style.display = 'none';
	    		DocId("FluidsMode").style.display = 'none';
	    		DocId("HideFluids").value = 'S';
	    	}
	    });
	    DocId("FluidsMode").addEventListener("click", function () {
	    	const menu = DocId("FluidContainer"),
	    		Fluid = DocId("FluidsMode");
	    	switch (Fluid.value) {
	    		case "1":
	    			menu.setAttribute("class", "TwoColumn");
	    			Fluid.value = 2;
	    			break;
	    		case "2":
	    			menu.setAttribute("class", "ThreeColumn");
	    			Fluid.value = 3;
	    			break;
	    		case "3":
	    			menu.setAttribute("class", "AutoColumn");
	    			Fluid.value = "A";
	    			break;
	    		case "A":
	    			menu.setAttribute("class", "OneColumn");
	    			Fluid.value = 1;
	    			break;
	    	}
	    });
	    DocId("EventLogPart").addEventListener("click", function () {
	    	const EventLog = DocId("EventLog");
	    	if (EventLog.style.width > 20 + "vw") {
	    		EventLog.style.width = 20 + "vw";
	    		EventLog.style.maxHeight = 50 + "vh";
	    	} else {
				EventLog.style.width = 80 + "vw";
	    		EventLog.style.maxHeight = 80 + "vh";
	    	}
	    });
function FluidsEngine() {
    DocId("FemcumBar").style.display = 'none';
    if (player.Balls.length > 0) {
        for (let b of player.Balls) {
            const Size = OrganSize(b.Size, player);
            b.CumMax = 1 / 3 * Math.PI * Math.pow(Size, 3),
                b.CumBaseRate = b.CumMax / 500;
            if (b.Cum < b.CumMax) {
                b.Cum += Math.max(0, b.CumRate + b.CumBaseRate);
            }
        }
        DocId("CumBar").style.display = 'block';
        const TotalCum = player.Balls.map(c => c.Cum).reduce((acc, cur) => acc + cur),
            TotalCumMax = player.Balls.map(c => c.CumMax).reduce((acc, cur) => acc + cur),
            CumPercent = TotalCum / TotalCumMax;
        if (false) {
            EventLog("Your balls are so full that you can barely hold it!")
            // Change style of cumbar?
        }
        DocId("FluidCum").innerHTML = CumPercent >= 1 ?
            `Full (${LToGal(TotalCum/1000)})` :
            `${LToGal(TotalCum/1000)}`;
        DocId("FluidCum").style.width = Math.min(1, CumPercent) * 100 + "%";

    } else {
        DocId("CumBar").style.display = 'none';
    }
    if (player.Boobies.length > 0 && GotMilk(player)) {
        DocId("MilkBar").style.display = 'block';
        for (let b of player.Boobies) {
            const Size = OrganSize(b.Size, player);
            b.MilkMax = 1 / 3 * Math.PI * Math.pow(Size, 3);
            if (b.MilkRate > 0) {
                b.Milk += b.MilkRate;
            }
        }
        const TotalMilk = player.Boobies.map(m => m.Milk).reduce((acc, cur) => acc + cur),
            TotalMilkMax = player.Boobies.map(m => m.MilkMax).reduce((acc, cur) => acc + cur),
            MilkPercent = TotalMilk / TotalMilkMax;
        if (false) {
            EventLog("You breasts are so full that they have started leaking!")
        }
        DocId("FluidMilk").innerHTML = MilkPercent >= 1 ?
            `Full (${LToGal(TotalMilk/1000)})` :
            `${LToGal(TotalMilk/1000)}`;
        DocId("FluidMilk").style.width = Math.min(1, MilkPercent) * 100 + "%";

    } else {
        DocId("MilkBar").style.display = 'none';
    }
    if (House.Dormmates.length > 0) {
        for (let e of House.Dormmates) {
            EssenceCheck(e);
            if (e.Balls.length > 0) {
                for (let b of e.Balls) {
                    const Size = OrganSize(b.Size, e);
                    b.CumMax = 1 / 3 * Math.PI * Math.pow(Size, 3),
                        b.CumBaseRate = b.CumMax / 500;
                    if (b.Cum < b.CumMax) {
                        b.Cum += Math.max(0, b.CumRate + b.CumBaseRate);
                    }
                }
            }
            if (GotMilk(e)) {
                for (let b of e.Boobies) {
                    const Size = OrganSize(b.Size, e);
                    b.MilkMax = 1 / 3 * Math.PI * Math.pow(Size, 3);
                    if (b.MilkRate > 0) {
                        b.Milk += b.MilkRate;
                    }
                }
            }
        }
    };
    // Handle enemy fluid here insted of in essencecheck, at higher rate.
    if (enemies.length > 0) {
        for (let e of enemies) {
            EssenceCheck(e);
            if (e.Balls.length > 0) {
                for (let b of e.Balls) {
                    const Size = OrganSize(b.Size, e);
                    b.CumMax = 1 / 3 * Math.PI * Math.pow(Size, 3),
                        b.CumBaseRate = b.CumMax / 50;
                    if (b.Cum < b.CumMax) {
                        b.Cum += Math.max(0, b.CumRate + b.CumBaseRate);
                    }
                }
            }
            if (GotMilk(e)) {
                for (let b of e.Boobies) {
                    const Size = OrganSize(b.Size, e);
                    b.MilkMax = 1 / 3 * Math.PI * Math.pow(Size, 3);
                    if (b.MilkRate > 0) {
                        b.Milk += b.MilkRate;
                    }
                }
            }
        }
    }
};

function GotMilk(who) {
    for (let e of who.Boobies) {
        if (e.MilkRate > 0) {
            return true;
        }
    }
    return false;
};
    // Makes sure map scales correctly when user change screen size.
    function HemScale() {
        const startarea = DocId("hem"),
            OldMap = medium;
        medium = Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20;
        startarea.width = medium;
        startarea.height = medium;
        const NewMap = medium;
        grid = (startarea.height / 20);
        sprite.x = sprite.x * NewMap / OldMap;
        sprite.y = sprite.y * NewMap / OldMap;
        for (let j of enemies) {
            j.Size = j.Size * (NewMap / OldMap);
            j.XPos = j.XPos * (NewMap / OldMap);
            j.YPos = j.YPos * (NewMap / OldMap);
        }
        return;
    }
function DormFunc() {
    const dorm = DocId("TheDorm");
    while (dorm.hasChildNodes()) {
        dorm.removeChild(dorm.firstChild)
    }

    const h2 = document.createElement("h2"),
        h2text = document.createTextNode("Dorms");
    h2.appendChild(h2text);
    dorm.appendChild(h2);

    const ButtonMates = document.createElement("div");
    ButtonMates.classList.add("ButtonMates");
    ButtonMates.style.display = 'grid';

    function Color(e) {
        switch (CheckGender(e)) {
            case "female":
                return "Pink";
            case "male":
                return "Blue";
            case "hermaphrodite":
                return "Purple";
            case "doll":
            default:
                return "Beige";
        }
    }
    for (let e of House.Dormmates) {
        const dormmate = ButtonButton(),
            DormName = e.hasOwnProperty("FirstName") ?
            (e.hasOwnProperty("LastName") ? `${e.FirstName} ${e.LastName}` : e.FirstName) :
            (e.hasOwnProperty("LastName") ? e.LastName : ``);
        dormmate.style.backgroundColor = Color(e);
        dormmate.innerHTML = `${DormName}<br>${e.Name} ${e.Race}`;
        dormmate.addEventListener("click", function () {
            MateDiv(e);
        });
        ButtonMates.appendChild(dormmate);
    }
    dorm.appendChild(ButtonMates);

    const Rules = InputButton("Rules(placeholder)");
    Rules.addEventListener("click", function () {
        // #TODO add rules for dormates,
        DormRulesFunc();
    });
    dorm.appendChild(Rules);

    if (House.Dormmates.length > 0 && player.Balls.length > 0) {
        const ImpregOrgy = InputButton("Impregnate servants",
            `Spend the day fucking you servants, until your balls are completely emptied.`)
        ImpregOrgy.addEventListener("click", ImpregOrgyFunc)
        dorm.appendChild(ImpregOrgy);
    }
    if (House.Dormmates.length > 0) {
        const GetImpregOrgy = InputButton("Get impregnated", `Spend the day getting fucked by your virile servants, 
        till all of their balls content have been emptied into your orifices.`)
        GetImpregOrgy.addEventListener("click", GetImpregOrgyFunc);
        dorm.appendChild(GetImpregOrgy);
    }
    const LeaveDorm = InputButton("Leave dorm");
    LeaveDorm.addEventListener("click", function () {
        DocId("HomeStart").style.display = 'block';
        DocId("TheDorm").style.display = 'none';
    });
    dorm.appendChild(LeaveDorm);
}

function DormRulesFunc() {
    const dorm = DocId("TheDorm");
    while (dorm.hasChildNodes()) {
        dorm.removeChild(dorm.firstChild)
    }

    const h2 = document.createElement("h2"),
        h2text = document.createTextNode("Rules");
    h2.appendChild(h2text);
    dorm.appendChild(h2);

    const ButtonMates = document.createElement("div");
    ButtonMates.classList.add("ButtonMates");
    ButtonMates.style.display = 'grid';

    const rule1 = ButtonButton("Impregnate each other: true/false");
    rule1.addEventListener("click", function () {

    });
    ButtonMates.appendChild(rule1);
    const rule2 = ButtonButton("");
    rule2.addEventListener("click", function () {

    });
    ButtonMates.appendChild(rule2);
    dorm.appendChild(ButtonMates);

    const back = InputButton("Back");
    back.addEventListener("click", function () {
        DormFunc();
    });
    dorm.appendChild(back);
}

DocId("Dorm").addEventListener("click", function () {
    DormFunc();
    DocId("HomeStart").style.display = 'none';
    DocId("TheDorm").style.display = 'block';
});

function MateDiv(e) {
    MateIndex = e;
    const RoomMate = document.createElement("div"),
        RoomMateInner = document.createElement("div"),
        StatsDiv = document.createElement("div"),
        InputCon = document.createElement("div"),
        InnerDorm = document.createElement("div"),
        dorm = DocId("TheDorm"),
        {
            FirstName,
            LastName,
            Name,
            Race,
            Height,
            Weight,
            Muscle,
            Fat
        } = e;

    while (dorm.hasChildNodes()) {
        dorm.removeChild(dorm.firstChild)
    };

    RoomMate.classList.add("DivMates");
    StatsDiv.classList.add("DivMatesInner");
    InnerDorm.classList.add("DivMatesCon");

    const PregnantStatus = () => {
        if (e.hasOwnProperty("Pregnant") ? e.Pregnant.Status : false) {
            const age = Math.round(e.Pregnant.Babies[0].BabyAge / 30);
            return age < 1 ? "<br>Impregnated" : `<br>${age} months pregnant`;
        } else {
            return ``;
        }
    }

    const DormName = `${FirstName} ${LastName}`;

    const stats = ["Str", "Charm", "End", "Int", "SexSkill", "Will"].forEach((src) => {
        StatsDiv.innerHTML += `<br>${src}: ${e[src]}`;
    });
    RoomMateInner.innerHTML = DormName + `<br>${Name} ${Race}<br>${Pronoun(CheckGender(e))}<br><br>Height: 
    ${CmToInch(Height)}<br>Weight: ${KgToPound(Weight)}<br>Muscle: ${KgToPound(Muscle)}<br>Fat: 
    ${KgToPound(Fat)}<br>${PregnantStatus()}<br><br>${AllSexualOrgans(e)}`;
    RoomMateInner.appendChild(StatsDiv);
    RoomMate.appendChild(RoomMateInner);
    InnerDorm.appendChild(RoomMate);

    const Fuck = InputButton("Fuck");
    Fuck.addEventListener("click", function () {
        const None = ["Home", "status", "EmptyButtons", "EventLog"].forEach((src) => {
            DocId(src).style.display = 'none';
        });
        DocId("FuckDorm").style.display = 'grid';
        DormSex(e);
    });
    InputCon.appendChild(Fuck);

    const LeaveRoom = InputButton("Leave room");
    LeaveRoom.addEventListener("click", function () {
        DormFunc();
    });
    InputCon.appendChild(LeaveRoom);

    const DormChildren = InputButton("DormChildren");

    const Rename = InputButton("Rename");
    Rename.addEventListener("click", function () {
        DormRename();
    });
    InputCon.appendChild(Rename);

    const KickOut = InputButton("KickOut");
    KickOut.addEventListener("click", function () {
        DormKickOut();
    });
    InputCon.appendChild(KickOut);
    InnerDorm.appendChild(InputCon);
    dorm.appendChild(InnerDorm);

    function DormRename() {
        while (dorm.hasChildNodes()) {
            dorm.removeChild(dorm.firstChild)
        };
        const InnerRenameDorm = document.createElement("div"),
            Firstlabel = document.createElement("label"),
            Firstinput = document.createElement("input"),
            Lastlabel = document.createElement("label"),
            Lastinput = document.createElement("input"),
            Accept = InputButton("Accept");

        Firstinput.setAttribute("id", "ajog94");
        Firstinput.setAttribute("type", "text");
        Firstlabel.innerHTML = "First name"
        Firstlabel.htmlFor = "ajog94";

        Lastinput.setAttribute("id", "asegk3");
        Lastinput.setAttribute("type", "text");
        Lastlabel.innerHTML = "Last name"
        Lastlabel.htmlFor = "asegk3";

        InnerRenameDorm.appendChild(Firstlabel);
        InnerRenameDorm.appendChild(Firstinput);
        InnerRenameDorm.appendChild(Lastlabel);
        InnerRenameDorm.appendChild(Lastinput);

        if (e.hasOwnProperty("FirstName")) {
            Firstinput.value = e.FirstName;
        };
        if (e.hasOwnProperty("LastName")) {
            Lastinput.value = e.LastName;
        };

        Accept.addEventListener("click", function () {
            e.FirstName = Firstinput.value;
            e.LastName = Lastinput.value;
            MateDiv(e);
        });
        InnerRenameDorm.appendChild(Accept);
        dorm.appendChild(InnerRenameDorm);
    };

    function DormKickOut() {
        while (dorm.hasChildNodes()) {
            dorm.removeChild(dorm.firstChild)
        };

        const index = House.Dormmates.findIndex(i => i === e),
            who = House.Dormmates[index];
        DocId("HomeText").innerHTML = `Are you sure you want to kick out ${who.FirstName} ${who.LastName}?`;

        const kickoutdiv = document.createElement("div"),
            Yes = InputButton("Yes"),
            No = InputButton("No");
        Yes.addEventListener("click", function () {
            House.Dormmates.splice(index, 1);
            DormFunc();
        });
        No.addEventListener("click", function () {
            MateDiv(e);
        })
        kickoutdiv.appendChild(Yes);
        kickoutdiv.appendChild(No);
        dorm.appendChild(kickoutdiv);
    }
};

function DormSex(e) {
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("DormPName").innerHTML = `${player.Name} ${player.LastName}`;
    DocId("DormEName").innerHTML = `${e.Name}<br>${e.Race} ${Pronoun(CheckGender(e))}`;
    DocId("DormMascu").innerHTML = Math.round(player.Masc);
    DocId("DormFemin").innerHTML = Math.round(player.Femi);
    DocId("DormEMascu").innerHTML = Math.round(e.Masc);
    DocId("DormEFemin").innerHTML = Math.round(e.Femi);
    DocId("DormPlayerLooks").innerHTML = AllSexualOrgans(player);
    DocId("DormEnemyLooks").innerHTML = AllSexualOrgans(e);
    SexColor(player, "PlayerDorm");
    SexColor(e, "EnemyDorm");

    if (player.Pregnant.Status) {
        DocId("GetImpregnated").style.display = 'none';
        const age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        DocId("DormPlayerLooks").innerHTML += (age < 1) ?
            "<br>Impregnated" : `<br>${age} months pregnant`;
    } else {
        DocId("GetImpregnated").style.display = e.Balls.length > 0 ? "inline-block" : "none";
    }
    DocId("Impregnate").style.display = 'none';
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            const age = Math.round(e.Pregnant.Babies[0].BabyAge / 30);
            DocId("DormEnemyLooks").innerHTML += (age < 1) ?
                `<br>Impregnated` : `<br>${age} months pregnant`;
        } else if ((player.Balls.length > 0 && player.Dicks.length > 0)) {
            DocId("Impregnate").style.display = 'inline-block';
        }
    } else if (player.Balls.length > 0 && player.Dicks.length > 0) {
        DocId("Impregnate").style.display = 'inline-block';
    }

    const DelatMed =
        (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) ? 100 / player.Masc :
        (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc) ? 100 / player.Femi :
        (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) ? 100 / e.Masc : 100 / e.Femi;
    const EW = (ess) => {
        return `${ess * DelatMed}%`
    }
    DocId("DormMascu").style.width = EW(player.Masc);
    DocId("DormFemin").style.width = EW(player.Femi);
    DocId("DormEMascu").style.width = EW(e.Masc);
    DocId("DormEFemin").style.width = EW(e.Femi);
    return;
};
DocId("LeaveDormSex").addEventListener("click", function () {
    DocId("Home").style.display = 'block';
    DocId("FuckDorm").style.display = 'none';
    DocId("status").style.display = 'block';
    DocId("EmptyButtons").style.display = 'block';
    DocId("DormSexText").innerHTML = ``
    Setup = true;
});
function DormEngine() {
    // connect this engine to date tracker
    for (let e of House.Dormmates) {
        // happiness
        if (!e.hasOwnProperty("Happy")) {
            e.Happy = 50;
        };
        // obedience
        if (!e.hasOwnProperty("Obe")) {
            e.Obe = 50;
        }
        // if dorm has thing to that

        // if dorm has rule === a do a stuff

        // Relationships between dormmates.
        if (House.Dormmates.length > 1) {
            // if same race
            // if attraced to
            // etc
        };
        

        // Escape system
        if (!e.hasOwnProperty("Escape")) {
            e.Escape = 0;
        }
        if (e.Obe < 30 && e.Happy < 30) {
            // Escape counter
            e.Escape++;

            // After being unhappy for 120 hours try to flee?
            if (e.Escape > 120) {
                // Count stuff that helps dorm mate to escape
                // Count those who love you very much and will tell you if somebody tries to flee
                // Count those who are super obedient 
                // Count other stuff that helps or hinder flee chance
                const FleeBoost = e.Str + e.Int,
                    SupperHappy = House.Dormmates.some(e => e.Happy > 100) ? House.Dormmates : 0,
                    SupperObe = House.Dormmates.some(e => e.Obe > 200) ? House.Dormmates : 0;

                const FleeChance = Math.random() * FleeBoost, // plus otherstuff
                    ToBeat = SupperHappy + SupperObe; // plus otherstuff
                if (ToBeat < FleeChance) {
                    // they ecaped
                    // splice
                    EventLog(`${e.FirstName} has escaped!`);
                } else {
                    EventLog(`${e.FirstName} tried to escape and has been caught.`);
                };
            };
        } else if (e.Escape > 0) {
            // Maybe insted of 0 have e.escape > value dependent on happy so that those who have been
            // very happy doesn't flee as fast as others.
            // Count down if they are out of escape values
            e.Escape--;
        };
    };
};
function GetImpregOrgyFunc() {
    const HomeText = DocId("HomeText");
    HomeText.innerHTML = `Orgy`;
    let CumTotal = 0;
    for (let d of House.Dormmates) {
        for (let b of d.Balls) {
            CumTotal += b.Cum;
            while (b.Cum >= 10 && !player.Pregnant.Status) {
                Impregnate(player, d, "B", "Dorm")
                b.Cum -= 10;
            };
        };
    };
    HomeText.innerHTML += `<br><br> By the end of the night they have emptied ${(LToGal(CumTotal/1000))} cum into you
    ${player.Pregnant.Status ?  ` and you are now pregnant!` : `, but they failed to impregnate you...`}`;
};

function ImpregOrgyFunc() {
    const HomeText = DocId("HomeText");
    HomeText.innerHTML = "Orgy<br>"
    let CumTotal = player.Balls.length > 0 ? player.Balls.map(b => b.Cum).reduce((acc, curr) => acc + curr) : 0;
    // some check if any of your dormmates isn't pregnant
    while (CumTotal >= 10 && House.Dormmates.some(b => !b.Pregnant.Status)) {
        for (let non of House.Dormmates) {
            if (non.Pregnant.Status) {
                CumTotal--;
                continue;
            } else {
                Impregnate(non, player, "A", "Dorm");
                CumTotal -= 10;
                if (non.Pregnant.Status) {
                    HomeText.innerHTML += `${non.FirstName} ${non.LastName} is impregnated!<br>`
                };
            };
        };
    };
    for (let non of House.Dormmates) {
        if (!non.Pregnant.Status) {
            HomeText.innerHTML += `You failed to impregnate ${non.FirstName} ${non.LastName}... `;
        }
    }
    FluidsEngine();
};

DocId("DormDrainMasc").addEventListener("click", function () {
    const ee = MateIndex,
        old = JSON.parse(JSON.stringify(player)),
        Need = player.EssenceDrain;
    let Have = ee.Masc;
    ee.Masc = Math.max(0, ee.Masc - Need);
    while (Have < Need && (ee.Balls.length > 0 || ee.Dicks.length > 0)) {
        if (ee.Balls.length > 0) {
            const ball = ee.Balls[ee.Balls.length - 1];
            ball.Size--;
            Have += EssenceCost(ball);
            if (ball.Size <= 1) {
                ee.Balls.pop();
            };
        };
        if (ee.Dicks.length > 0) {
            const dick = ee.Dicks[ee.Dicks.length - 1];
            dick.Size--;
            Have += EssenceCost(dick);
            if (dick.Size <= 1) {
                ee.Dicks.pop();
            }
        }
    }
    const Got = Math.min(Need, Have),
        left = Math.max(0, Have - Need);
    player.Masc += Got;
    ee.Masc = left;

    EssenceCheck(ee);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    //RaceDrain(ee);
    DormSex(ee);
    DocId("DormSexText").innerHTML = "Siphon masc";
});
DocId("DormDrainFemi").addEventListener("click", function () {
    const ee = MateIndex,
        old = JSON.parse(JSON.stringify(player));
    //player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
    const Need = player.EssenceDrain;
    let Have = ee.Femi;
    ee.Femi = Math.max(0, ee.Femi - Need);
    while (Have < Need && (ee.Pussies.length > 0 || ee.Boobies.length > 0 ? ee.Boobies[0].Size > 0 : false)) {
        if (ee.Pussies.length > 0) {
            const pussy = Last(ee.Pussies);
            pussy.Size--;
            Have += EssenceCost(pussy);
            if (pussy.Size <= 1) {
                ee.Pussies.pop();
            };
        };
        if (ee.Boobies.length > 0 ? ee.Boobies[0].Size > 0 : false) {
            const boobs = Last(ee.Boobies);
            boobs.Size--;
            Have += EssenceCost(boobs);
            if (boobs.Size <= 1 && ee.Boobies.length > 1) {
                ee.Boobies.pop();
            };
        };
    };
    const Got = Math.min(Need, Have),
        left = Math.max(0, Have - Need);
    player.Femi += Got;
    ee.Femi = left;
    EssenceCheck(ee);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    //RaceDrain(ee); // This could be op way to gain race? Disabled for now
    DormSex(ee);
    DocId("DormSexText").innerHTML = "Siphon femi";
    return;
});
DocId("DormInjMasc").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Masc > 0) {
        e.Masc += Math.min(100, player.Masc);
        player.Masc -= Math.min(100, player.Masc);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject masc";
        return;
    }
});
DocId("DormInjFemi").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Femi > 0) {
        e.Femi += Math.min(100, player.Femi);
        player.Femi -= Math.min(100, player.Femi);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject femi";
        return;
    }
});
DocId("Impregnate").addEventListener("click", function () {
    DocId("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
    const e = MateIndex;
    if (e.Pussies.length > 0) {
        var pussypicker = RandomInt(0, e.Pussies.length - 1)
        if (e.Pussies[pussypicker].Virgin) {
            e.Pussies[pussypicker].Virgin = false;
        }
    }
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            DocId("DormSexText").innerHTML = "You have already impregnated her!"
            DormSex(e);
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
            DocId("DormSexText").innerHTML = "You try but there is to little cum in your balls."
        }

    }
    DormSex(e);
});
var Setup = true;
DocId("GetImpregnated").addEventListener("click", function () {
    const e = MateIndex;
    if (Setup) {
        DocId("DormSexText").innerHTML = `Desiring to get pregnant you call ${e.FirstName} ${e.LastName} a 
        servant whom you feel are worthy fathering you child. Firmly pushing them down on the bed you 
        get on top them straddling their face grinding your pussy against their mouth, once you feel ready 
        you shift focus to their groin removing their clothes and free their ${CmToInch(e.Dicks[0].Size)} 
        ${e.Dicks[0].Type} dick. Positions your pussy on top of their glans letting it slowly enter, 
        once accustomed speeding up.`
    } else {
        DocId("DormSexText").innerHTML = `Not giving up you continue riding them.`;
    }
    if (player.Pregnant.Status) {
        DocId("DormSexText").innerHTML = "You are already pregnant.";
        DormSex(e);
        return;
    } else if (e.Balls.length > 0) {
        Setup = false;
        for (var b = 0; b < e.Balls.length; b++) {
            if (e.Balls[b].Cum >= 10) {
                Impregnate(player, e, "B", "Dorm");
                e.Balls[b].Cum -= 10;
                if (!player.Pregnant.Status) {
                    DocId("DormSexText").innerHTML += "<br><br>They failed to impregnate you";
                }
                break;
            } else {
                DocId("DormSexText").innerHTML += "<br><br>Their balls are dry, you have to let them recover.";
            }
        }
    }
    var pussypicker = RandomInt(0, player.Pussies.length - 1)
    if (player.Pussies[pussypicker].Virgin) {
        player.Pussies[pussypicker].Virgin = false;
    }
    DormSex(e);
});
// Home
DocId("Sleep").addEventListener("click", function () {
    if (player.Health < player.MaxHealth + House.BedLevel * 5) {
        player.Health = player.MaxHealth + House.BedLevel * 5;
    }
    if (player.WillHealth < player.MaxWillHealth + House.BedLevel * 5) {
        player.WillHealth = player.MaxWillHealth + House.BedLevel * 5;
    }
    battle = false;
    for (var e = 0; e < 8; e++) {
        DateTracker();
    }
    DocId("HomeText").innerHTML = "You sleep well, restoring your health and willpower.";
});


// Portal
DocId("Portal").addEventListener("click", function () {
    DocId("LeaveHome").style.display = 'none';
    const Buildings = DocId("PortalMenu")
    DocId("HomeStart").style.display = "none";
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        div.appendChild(TitleText("Portal"));
    }

    const p = DocId("HomeText");

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        const Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            DocId("HomeStart").style.display = 'block';
            LeaveHome();
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        Mountain.addEventListener("mouseover", function () {

        });
        div.appendChild(Mountain);
    }

    if (House.Portal.BlackMarket) {
        const BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            DocId("HomeStart").style.display = 'block';
            LeaveHome();
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        BlackMarket.addEventListener("mouseover", function () {

        });
        div.appendChild(BlackMarket);
    }

    const LeavePortal = InputButton("Back");
    LeavePortal.addEventListener("click", function () {
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        DocId("HomeStart").style.display = 'block';
        DocId("PortalMenu").style.display = 'none';
        DocId("LeaveHome").style.display = 'inline-block';
    })
    div.appendChild(LeavePortal);
    Buildings.appendChild(div);
    Buildings.style.display = 'block';
});

DocId("Brothel").addEventListener("click", function () {
    DocId("TheBrothel").style.display = 'block';
    DocId("HomeStart").style.display = 'none';
});
DocId("ServeMasc").addEventListener("click", function () {
    Settings.Brothel.ServeMasc = !Settings.Brothel.ServeMasc;
    DocId("ServeMasc").value = "Masculine customers? " + Settings.Brothel.ServeMasc;
});
DocId("ServeFemi").addEventListener("click", function () {
    Settings.Brothel.ServeFemi = !Settings.Brothel.ServeFemi;
    DocId("ServeFemi").value = "Feminine customers? " + Settings.Brothel.ServeFemi;
});
DocId("CloseBrothel").addEventListener("click", function () {
    DocId("TheBrothel").style.display = 'none';
    DocId("HomeStart").style.display = 'block';
});

DocId("LeaveHome").addEventListener("click", function () {
    LeaveHome();
    return;
});

function LeaveHome() {
    DocId("Home").style.display = 'none';
    DocId("EmptyButtons").style.display = 'none';
    battle = false;
    GamePaused = false;
    DocId("LeaveHome").style.display = 'inline-block';
    DisplayGame();
}
// End home
    DocId("UpgradeHome").addEventListener("click", function () {
        UpgradeHomeMenu();
    })

    function UpgradeHomeMenu() {
        DocId("HomeStart").style.display = 'none';
        DocId("HomeText").style.display = 'none';
        DocId("Upgrades").style.display = 'block';

        const Upgrades = DocId("Upgrades");
        while (Upgrades.hasChildNodes()) {
            Upgrades.removeChild(Upgrades.firstChild);
        }

        const p = TextBox();
        Upgrades.appendChild(p);

        const h2 = document.createElement("h2"),
            h2Text = document.createTextNode("Upgrades");
        h2.appendChild(h2Text);
        Upgrades.appendChild(h2);

        function BedCost() {
            return Math.round(50 * Math.pow(1.2, House.BedLevel));
        }
        const UpgradeBed = ButtonButton(`Upgrade bedroom ${BedCost()}g`);
        UpgradeBed.addEventListener("click", function () {
            if (player.Gold >= BedCost()) {
                House.BedLevel++;
                player.Gold -= BedCost();
                if (House.BedLevel < 5) {
                    p.innerHTML = "You have upgraded your master bedroom, this will allow you to wake up with extra health and will."
                } else {
                    p.innerHTML = "You upgrade your master bedroom.";
                }
                UpgradeBed.setAttribute("value", `Upgrade bedroom ${BedCost()}g`)
            } else {
                p.innerHTML = "You can't afford to upgrade your bedroom.";
            }
        });
        UpgradeBed.addEventListener("mouseover", function () {
            p.innerHTML = "An upgraded bedroom makes you wake up bonus health & willpower."
        })
        Upgrades.appendChild(UpgradeBed);

        function DormCost() {
            return Math.round(250 * Math.pow(1.2, House.Dorm));
        }

        const DormValue = House.Dorm > 0 ? `Upgrade dorm ${DormCost()}g` : `Build dorm ${DormCost()}g`,
            BuildDorm = ButtonButton(DormValue);
        BuildDorm.addEventListener("click", function () {
            if (player.Gold >= DormCost()) {
                House.Dorm++;
                player.Gold -= DormCost();
                if (House.Dorm < 2) {
                    DocId("Dorm").style.display = "inline-block";
                    p.innerHTML = `Hiring construction workers you give orders to build a dorm to house servants.<br><br>
                    Looking outside you see the newly built dorm. You can now take home opponent you have made orgasm five times.`
                } else {
                    p.innerHTML = `You expand your dorm to house three more servants.(${House.Dorm * 3})`;
                }
                BuildDorm.setAttribute("value", `Upgrade dorm ${DormCost()}g`)
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildDorm.addEventListener("mouseover", function () {
            p.innerHTML = "A building to house former opponents whom chose to join you either trough submission or other means."
        })
        Upgrades.appendChild(BuildDorm);

        function Gymcost() {
            return Math.round(200 * Math.pow(1.2, House.Gym));
        }
        const GymValue = House.Gym > 0 ? `Upgrade gym ${Gymcost()}g` : `Build gym ${Gymcost()}g`,
            BuildGym = ButtonButton(GymValue);
        BuildGym.addEventListener("click", function () {
            if (player.Gold >= Gymcost()) {
                if (House.Gym < 1) {
                    p.innerHTML = "You built a gym for your servants, they can now go there in order to burn fat and build muscle.";
                } else {
                    p.innerHTML = "You upgrade your gym so your servants can gain more muscle."
                }
                House.Gym++;
                player.Gold -= Gymcost();
                BuildGym.setAttribute("value", "Upgrade gym " + Gymcost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildGym.addEventListener("mouseover", function () {
            p.innerHTML = "A gym will make your servant can gain muscle over time."
        })
        Upgrades.appendChild(BuildGym);

        function Kitchencost() {
            return Math.round(200 * Math.pow(1.2, House.Kitchen));
        }
        const KitchenValue = House.Kitchen > 0 ? `Upgrade kitchen ${Kitchencost()}g` : `Build kitchen ${Kitchencost()}g`,
            BuildKitchen = ButtonButton(KitchenValue)

        BuildKitchen.addEventListener("click", function () {
            if (player.Gold >= Kitchencost()) {
                if (House.Kitchen < 1) {
                    p.innerHTML = "You have built a kitchen where your servant can go and eat. Be aware that if you don't build a gym they will get fat, unless that's what you are into to."
                } else {
                    p.innerHTML = "You upgrade your kitchen servants can now gain more fat.";
                }
                House.Kitchen++;
                player.Gold -= Kitchencost();
                BuildKitchen.setAttribute("value", "Upgrade kitchen " + Kitchencost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildKitchen.addEventListener("mouseover", function () {
            p.innerHTML = "A kitchen will make your servants gain fat over time.";
        })
        Upgrades.appendChild(BuildKitchen)

        function Brothelcost() {
            return Math.round(500 * Math.pow(1.2, House.Brothel));
        }
        const BrothelValue = House.Brothel > 0 ? `Upgrade brothel ${Brothelcost()}g` : `Build brothel ${Brothelcost()}g`,
            BuildBrothel = ButtonButton(BrothelValue);

        BuildBrothel.addEventListener("click", function () {
            if (player.Gold >= Brothelcost()) {
                player.Gold -= Brothelcost();
                if (House.Brothel < 1) {
                    p.innerHTML = "You have built a brothel where your servants will whore themself out, allowing you to gain extra income."
                } else {
                    p.innerHTML = "You upgrade your brothel for extra income.";
                }
                House.Brothel++;
                DocId("Brothel").style.display = 'inline-block';
                BuildBrothel.setAttribute("value", "Upgrade brothel " + Brothelcost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        Upgrades.appendChild(BuildBrothel);

        function Nurserycost() {
            return Math.round(200 * Math.pow(1.2, House.Nursery));
        }
        const NurseryValue = House.Nursery > 0 ? `Upgrade nursery ${Nurserycost()}g` : `Build nursery ${Nurserycost()}g`,
            BuildNursery = ButtonButton(NurseryValue);

        BuildNursery.addEventListener("click", function () {
            if (player.Gold >= Nurserycost()) {
                player.Gold -= Nurserycost();
                if (House.Nursery < 1) {
                    p.innerHTML = "You have built a nursery."
                } else {
                    p.innerHTML = "You upgrade your nursery.";
                }
                House.Nursery++;
                BuildNursery.setAttribute("value", `Upgrade nursery ${Nurserycost()}g`);
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildNursery.addEventListener("mouseover", function () {
            //p.innerHTML = "Speeds up aging of non-adult children, hopefully without consequences..."
            p.innerHTML = "Accelerate your children’s growth towards adulthood, childhood isn’t that important right?"
        });
        Upgrades.appendChild(BuildNursery);

        if (House.Portal.Owned === false) {
            const BuildPortal = ButtonButton("Build portal 1000g")
            BuildPortal.addEventListener("click", function () {
                if (player.Gold >= 1000) {
                    player.Gold -= 1000;
                    House.Portal.Owned = true;
                    p.innerHTML = "Congratulations you now own a personal portal, a true sign of wealth for peasants to envy!"
                    DocId("Portal").style.display = 'inline-block';
                    Upgrades.removeChild(BuildPortal)
                } else {
                    p.innerHTML = `Sadly you lack funds to afford commissions the construction of a portal…
                    <br><br>You will have to continue walking like the poor peasant you are.`
                }
            });
            BuildPortal.addEventListener("mouseover", function () {
                p.innerHTML = "Why would you walk in a magic world, that's for peasants!"
            });
            Upgrades.appendChild(BuildPortal);
        }

        const Close = ButtonButton("Close");
        Close.addEventListener("click", function () {
            DocId("HomeStart").style.display = 'block';
            DocId("Upgrades").style.display = 'none';
            DocId("HomeText").style.display = 'block';

            const Upgrades = DocId("Upgrades");
            while (Upgrades.hasChildNodes()) {
                Upgrades.removeChild(Upgrades.firstChild);
            }
        });
        Upgrades.appendChild(document.createElement("br"));
        Upgrades.appendChild(Close);

        // Barn.innerHTML = "Allows you to milk your lactating servants. The milk can be brought with you as a travel snack or you can sell it for gold."
    }
function ImgPackLoader(file) {

}
ImgPackLoader()

DocId("ImgPack").addEventListener("click", function () {
    switch (Settings.ImgPack) {
        case false:
            Settings.ImgPack = "Mode1";
            break;
        case "Mode1":
            Settings.ImgPack = "Mode2";
            break;
        case "Mode2":
            Settings.ImgPack = "Mode3";
            break;
        case "Mode3":
            Settings.ImgPack = "Yllarius";
            break
        default:
            Settings.ImgPack = false;
            break;
    }
    DocId("ImgPack").value = `Img pack: ${Settings.ImgPack}`;
});

function ImgChose(what, who, type = "SexActs") {
    const myimg = new Image(),
        playerRace = player.Race.Capitalize().replace(/\s/g, ""),
        b = CheckGender(player),
        Act = what,
        Race = who.Race.Capitalize().replace(/\s/g, ""),
        e = CheckGender(who);
    if (Settings.ImgPack === "Yllarius") {
        const playerGender = () => {
                switch (b) {
                    case "hermaphrodite":
                    case "dickgirl":
                        return "H";
                    case "male":
                        return "M";
                    case "cuntboy":
                        return "C";
                    case "female":
                        return "F";
                    case "doll":
                        return "D";
                }
            },
            OtherGender = () => {
                switch (e) {
                    case "hermaphrodite":
                    case "dickgirl":
                        return "H";
                    case "male":
                        return "M";
                    case "cuntboy":
                        return "C";
                    case "female":
                        return "F";
                    case "doll":
                        return "D";
                }
            }
        // This nested onload/onerror works but it looks like a disaster... TODO search for better way.
        if (type === "SexActs") {
            // if (SexActs.Race !== "undf") {if (SexActs.Race.Act !== "undf") {if array length > 0 etc.. }}
            const ImgArray = () => {
                if (typeof SexActs[Race] !== "undefined" ? typeof SexActs[Race][Act] !== "undefined" : false) {
                    if (typeof SexActs[Race][Act][playerGender() + OtherGender()] !== "undefined" ? SexActs[Race][Act][playerGender() + OtherGender()].length > 0 : false) {
                        return SexActs[Race][Act][playerGender() + OtherGender()];
                    } else if (typeof SexActs[Race][Act][OtherGender()] !== "undefined" ? SexActs[Race][Act][OtherGender()].length > 0 : false) {
                        return SexActs[Race][Act][OtherGender()];
                    } else if (typeof SexActs[Race][Act].Default !== "undefined" ? SexActs[Race][Act].Default.length > 0 : false) {
                        return SexActs[Race][Act].Default;
                    } else {
                        return [];
                    }
                } else {
                    return [];
                }
            }
            if (ImgArray().length > 0) {
                myimg.src = ImgArray()[RandomInt(0, ImgArray().length - 1)];
                myimg.onload = function () {
                    DocId("MyImg").src = myimg.src;
                };
                myimg.onerror = () => {
                    return
                }
            } else {
                //console.log(ImgArray());
                //console.log(`SexActs[${Race}][${Act}][${playerGender() + OtherGender()}]`);
            }
        } else if (type === "Vore") {
            // if (SexActs.Race !== "undf") {if (SexActs.Race.Act !== "undf") {if array length > 0 etc.. }}
            const ImgArray = () => {
                if (typeof Vore[playerRace] !== "undefined" ? typeof Vore[playerRace][Act] !== "undefined" : false) {
                    if (typeof Vore[playerRace][Act][playerGender() + OtherGender()] !== "undefined" ? Vore[playerRace][Act][playerGender() + OtherGender()].length > 0 : false) {
                        return Vore[playerRace][Act][playerGender() + OtherGender()];
                    } else if (typeof Vore[playerRace][Act][playerGender()] !== "undefined" ? Vore[playerRace][Act][playerGender()].length > 0 : false) {
                        return Vore[playerRace][Act][playerGender()];
                    } else if (typeof Vore[playerRace][Act].Default !== "undefined" ? Vore[playerRace][Act].Default.length > 0 : false) {
                        return Vore[playerRace][Act].Default;
                    } else {
                        return [];
                    }
                } else {
                    return [];
                };
            };
            if (ImgArray().length > 0) {
                myimg.src = ImgArray()[RandomInt(0, ImgArray().length - 1)];
                myimg.onload = function () {
                    DocId("MyImg").src = myimg.src;
                };
                myimg.onerror = () => {
                    return
                }
            } else {
                //console.log(ImgArray);
                //console.log(`SexActs[${playerRace}][${Act}][${playerGender() + OtherGender()}]`);
            }
        }

    } else {
        const source = () => {
            switch (Settings.ImgPack) {
                case "Mode1":
                    return a + b + c;
                case "Mode2":
                    return d + e + c;
                case "Mode3":
                    return a + b + c + d + e;
                case "Yllarius":
                default:
                    return "";
            }
        };
        myimg.src = `imgPack/${source()}.jpg`;
        myimg.onload = function () {
            DocId("MyImg").src = myimg.src;
        };
        myimg.onerror = function () {
            myimg.src = `imgPack/${type}/${source()}.png`;
            myimg.onload = function () {
                DocId("MyImg").src = myimg.src;
            }
            myimg.onerror = function () {
                DocId("MyImg").src = "imgPack/Default.jpg";
            }
        };
    }
};

DocId("MyImg").addEventListener("click", () => {
    const img = DocId("MyImg"),
        imgf = DocId("MyImgF"),
        modal = DocId("MyImgModal"),
        AfterBattle = DocId("AfterBattle");

    modal.style.display = 'flex';
    imgf.src = img.src;
});

DocId("MyImgF").addEventListener("click", () => {
    const modal = DocId("MyImgModal"),
        AfterBattle = DocId("AfterBattle");
    modal.style.display = 'none';
});
function CmToInch(cm) {
    if (Settings.Inch) {
        const Inch = Math.round(cm / 2.54),
            Feet = Math.floor(Inch / 12),
            Yard = Math.floor(Feet / 3);
        return Feet > 0 ?
            `${Feet} feet ${Inch % 12 > 0 ? 
                `and ${Inch % 12} inches`: ``} inches` : `${Inch} inches`;
    } else {
        return cm < 1 ?
            Math.round(cm * 10) + "mm" : cm < 300 ? 
                Math.round(cm) + "cm" : Math.round(cm * 10) / 1000 + "m";;
    }
}

function KgToPound(kg) {
    if (Settings.Inch) {
        return Math.round(kg * 2.2046) + "lb"
    } else {
        return kg < 1 ? `${Math.round(kg * 1000) / 1000}g` : kg < 10 ?
            `${Math.round(kg * 10) / 10}kg` : `${Math.round(kg)}kg`;
    }
}

function LToGal(L) {
    if (Settings.Inch) {
        if (Math.round(0.264172052 * L) < 1) {
            return Math.round(L * 4.22675284) + "cups"
        } else {
            return Math.round(L * 0.264172052) + "gallon"
        }
    } else if (Settings.Approx) {
        if (L < 10)
            return "an almost-unnoticable amount"
        else if (L < 50)
            return "a few sprays"
        else if (L < 100)
            return "a decent load"
        else if (L < 250)
            return "a cupful"
        else if (L < 750)
            return "cupfuls"
        else if (L < 2000)
            return "a small bucket's worth"
        else if (L <= 5000)
            return "a bucket load"
        else if (L > 5000)
            return "a torrent of"
        else
            return "Snow's overfilled! (Error: " + L + ")";
    } else {
        return L < 0.1 ? `${Math.round(L * 100)}cl` : L < 0.99 ? `${Math.round(L * 10)}dl` :
            `${Math.round(L)}L`
    }
}
function SnowInventoryAdd(item, quantity = 1) {
    if (player.Inventory.some(i => i.Name === item.Name)) {
        const index = player.Inventory.findIndex(a => a.Name === item.Name);
        player.Inventory[index].Quantity += quantity
    } else {
        item.Quantity = quantity;
        player.Inventory.push(item);
    }
}

function DropSystem(who) {
    const dropRate = {
            "Human": 1.00,
            "Halfling": 1.00,
            "Orc": 1.00,
            "Troll": 1.00,
            "Farmer": 1.00,
            "Elf": 1.00,
            "Amazon": 1.00,
            "Fairy": 1.00,
            "Commoner": 1.00,
            "Thug": 1.00,
            "Dark elf": 1.00,
            "Imp": 1.00,
            "Goblin": 1.00,
            "Dhampir": 1.00,
            "Demon": 1.00,
            "Succubus": 1.00,
            "Incubus": 1.00,
            "Witch": 1.00
        },
        e = who,
        r = Math.random();
    if (r <= typeof dropRate[e.Name] !== "undefined" ? dropRate[e.Name] : 0) {
        switch (e.Name) {
            case "Banditlord":
                SnowInventoryAdd(ItemDict.orcCum.Lite);
                break;
            case "Commoner":
                SnowInventoryAdd(ItemDict.halfPouch.Lite);
                break;
            case "Farmer":
                SnowInventoryAdd(ItemDict.milkJug.Lite);
                break;
            case "Thug":
                SnowInventoryAdd(ItemDict.halfPouch.Lite);
                break;
            case "Witch":
                SnowInventoryAdd(ItemDict.book.Lite);
                break;
            default:
                break;
        }
    }
    const r2 = Math.random();
    if (r2 <= typeof dropRate[e.Race] !== "undefined" ? dropRate[e.Race] : 0) {
        switch (e.Race) {
            case "Fairy":
                SnowInventoryAdd(ItemDict.fairyDust.Lite);
                break;
            case "Human":
                SnowInventoryAdd(ItemDict.humanity.Lite);
                break;
            case "Halfling":
                SnowInventoryAdd(ItemDict.pouch.Lite);
                break;
            case "Orc":
                SnowInventoryAdd(ItemDict.orcBrew.Lite);
                break;
            case "Troll":
                SnowInventoryAdd(ItemDict.trollMilk.Lite);
                break;
            case "Elf":
                SnowInventoryAdd(ItemDict.elvenHair.Lite);
                break;
            case "Amazon":
                SnowInventoryAdd(ItemDict.amazonGirdle.Lite);
                break;
            case "Dark Elf":
                SnowInventoryAdd(ItemDict.elvenHair.Lite);
                break;
            case "Goblin":
                SnowInventoryAdd(ItemDict.fertilityIdol.Lite);
                break;
            case "Imp":
                SnowInventoryAdd(ItemDict.cockyRock.Lite);
                break;
            case "Demon":
                SnowInventoryAdd(ItemDict.infernalSemen.Lite);
                break;
            case "Dhampir":
                SnowInventoryAdd(ItemDict.infernalMilk.Lite);
                break;
            case "Succubus":
                SnowInventoryAdd(ItemDict.SuccMilk.Lite);
                break;
            case "Incubus":
                SnowInventoryAdd(ItemDict.IncSemen.Lite);
                break;
            default:
                break;
        }
    }
}
DocId("ShowInventory").addEventListener("click", function () {
    DisplayNone();
    DocId("Inventory").style.display = 'grid';
    //DocId("InventoryBag").innerHTML = Items(player.Inventory)
    Items2();
});

function Use(item) {
    var thing = player.Inventory[item];
    if (thing.hasOwnProperty("Use") && typeof thing.Use == 'function') {
        thing.Use(player, thing)
    } else {
        console.log("this item has not been refactored: " + item.Name);
        switch (thing.Name) {
            default:
                EventLog("Uh... Something went wrong...");
                break;
        }
    }
    if (typeof player.Inventory[item].Quantity === "number") {
        player.Inventory[item].Quantity--;
        if (player.Inventory[item].Quantity <= 0) {
            player.Inventory.splice(item, 1);
        }
    }
    DocId("InventoryBag").innerHTML = Items(player.Inventory)
}

function Equip(item) {
    ItemDict[player.Inventory[item].Name].Equip();
    return console.log(player.Inventory[item]);
}

function Read(item) {
    ItemDict[player.Inventory[item].Name].Read();
    return console.log(player.Inventory[item]);
}

function Drop(item) {
    player.Inventory.splice(item, 1);
    DocId("InventoryBag").innerHTML = Items(player.Inventory)

}
DocId("InventoryLeave").addEventListener("click", function () {
    DocId("Inventory").style.display = 'none';
    DisplayGame();
});

// Trial of new inventory system so I can stop saving unnecessary data
function Items2() {
    const div = DocId("InventoryBag");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    const KeyItems = ["Pocket portal", "SpellBook"]; // Make sure important items are first in iventory
    let Exists = 0;
    for (let k of KeyItems) {
        Exists++;
        const index = player.Inventory.findIndex(f => f.Name === k)
        if (player.Inventory.some(f => f.Name === k) && index !== Exists) {
            let temp = player.Inventory[index]
            player.Inventory.splice(index, 1);
            player.Inventory.unshift(temp);
        }
    }
    for (let e of player.Inventory) {
        const itemarray = Object.values(ItemDict);
        for (let b of itemarray) {
            if (e.Name === b.Name) {
                var item = new InventoryThing(e, b)
                div.appendChild(item);
            }
        }
    }
}

function InventoryThing(e, b) {
    const item = document.createElement("div");
    item.setAttribute("title", b.Title)

    const p = document.createElement("p");
    p.innerHTML = b.Name
    if (typeof e.Quantity === "number") {
        p.innerHTML += ` (${e.Quantity})`
    }
    item.appendChild(p);

    if (typeof b.Use === "function") {
        const use = InputButton("Use");
        use.addEventListener("click", function () {
            DocId("InventoryText").innerHTML = b.Use(player, e);
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    const index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(use)
    }
    if (typeof b.Equip === "function") {
        const Equip = InputButton("Equip");
        Equip.addEventListener("click", function () {
            b.Equip();
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    const index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(Equip)
    }
    if (b.Drop === true) {
        const drop = InputButton("Drop");
        drop.addEventListener("click", function () {
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    const index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(drop);
    }
    var what = InputButton("?");
    what.addEventListener("mouseover", function () {
        DocId("InventoryText").innerHTML = b.Title
    });
    what.addEventListener("click", function () {
        DocId("InventoryText").innerHTML = b.Title
    });
    item.appendChild(what);

    return item;
}
// default items. You can still create others if they respect the template
const ItemDict = {
    itemTemplate: {
        Lite: { // What should be saved between games, quantity is added to this
            Name: "Name of the item",
        },
        Name: "Name of the item",
        Equip: "No", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
        Drop: true, // or false
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
        Use: function (who) {
            //EventLog(who.Name + " used the item") Lets stop spamming the eventlog!
            return who.Name + " used the item"
        }
    },
    orcCum: {
        Lite: {
            Name: "Orc cum"
        },
        Name: "Orc cum",
        Use: function (who) {
            who.Masc += 50;
            //if (who == who.
        return `After drinking the orc cum, ${who.Name} absorbs the manly essence of it.`;
        },
        Equip: "No",
        Drop: true,
        Does: "",
        Title: "..."
    },
    fairyDust: {
        Lite: {
            Name: "Fairy dust"
        },
        Name: "Fairy dust",
        Use: function (who) {
            who.Height -= 5;
            return "Inhaling the fairy dust you see the world grow before you, or maybe it's you who became shorter?"
        },
        Equip: "No",
        Drop: true,
        Does: "Shrinks you 5 cm",
        Title: "Sparkly, commonly used as prank item to shrink people."
    },
    humanity: {
        Lite: {
            Name: "Humanity"
        },
        Name: "Humanity",
        Use: function (who) {
            PotionDrunk("human");
            return "You try to gain some humanity."
            // if player already have alot of human race ess maybe say strengtn?
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you human",
        Title: "One way to get your humanity back."
    },
    pouch: {
        Lite: {
            Name: "Pouch"
        },
        Name: "Pouch",
        Use: function (who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            who.Gold += z;
            return "What's in the bag? It's " + z + " coins!"
        },
        Equip: "No",
        Drop: true,
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    halfPouch: {
        Lite: {
            Name: "Small Pouch",
        },
        Name: "Small Pouch",
        Use: function (who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            who.Gold += z;
            return "What's in the bag? It's " + z + " coins!";
        },
        Equip: "No",
        Drop: true,
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    orcBrew: {
        Lite: {
            Name: "Orc brew"
        },
        Name: "Orc brew",
        Use: function (who) {
            var z = Math.min(Math.round(who.MaxHealth / 10), who.MaxHealth - who.Health);
            who.Health += z;
            if (z > 0) {
                return "Bottoms up!<br><br>" + "You gained " + z + " health back!";
            } else if (z < 0) {
                return "Bottoms up!<br><br>" + "Bleh. That ruined your night's sleep.";
            }
        },
        Title: "Heals?",
        Drop: true
    },
    trollMilk: {
        Lite: {
            Name: "Troll Milk"
        },
        Name: "Troll Milk",
        Use: function (who) {
            var z = Math.min(Math.round(who.MaxWillHealth / 10), who.MaxWillHealth - who.WillHealth);
            who.WillHealth += z;
            if (z > 0) {
                return "Bottoms up!<br><br>" + "You gained " + z + " willpower back!"
            } else if (z < 0) {
                return "Bottoms up!<br><br>" + "Bleh. That ruined your night's sleep."
            }
        },
        Equip: "No",
        Drop: true,
        Does: "Restores 10% of willpower.",
        Title: "Smells like it's already gone sour. Increases focus."
    },
    elvenHair: {
        Lite: {
            Name: "Elven hair"
        },
        Name: "Elven hair",
        Use: function (who) {
            PotionDrunk("elf");
            return "You try to become an elf..."
        },
        Equip: "No",
        Drop: true,
        Does: "Elf TF",
        Title: "This is all you need to become an elf, no potions needed."
    },
    amazonGirdle: {
        Lite: {
            Name: "Amazon's Girdle"
        },
        Name: "Amazon's Girdle",
        Use: function (who) {
            if (who.Masc > who.Femi + 100) {
                who.Masc -= 50;
                who.Femi += 50;
            } else if (who.Masc + 100 < who.Femi) {
                who.Masc += 50;
                who.Femi -= 50;
            } else {
                var z = Math.round((who.Masc + who.Femi) / 2);
                who.Masc = z;
                who.Femi = z;
            }
            return "Tightening the girdle, you feel your essences balancing..."
        },
        Equip: "No",
        Drop: true,
        Does: "Balances gender",
        Title: "Brings your essences closer together in strength."
    },
    milkJug: {
        Lite: {
            Name: "Milk Jug"
        },
        Name: "Milk Jug",
        Use: function (who) {
            for (var i = 0; i < who.Boobies.length; i++) {
                who.Boobies[i].MilkRate += 0.1;
            }
            return "Chugging the jug, you feel a shudder run through your chest..."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases lactation",
        Title: "It'll go straight to your chest!"
    },
    fertilityIdol: {
        Lite: {
            Name: "Fertility idol"
        },
        Name: "Fertility idol",
        Use: function (who) {
            who.Femi += 100;
            return "You absorb the statue's latent energies."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases femininity",
        Title: "Brings out your feminine side."
    },
    cockyRock: {
        Lite: {
            Name: "Cocky rock"
        },
        Name: "Cocky rock",
        Use: function (who) {
            who.Masc += 100;
            return "You absorb the rock's male essence."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases masculinity",
        Title: "Brings out your masculine side."
    },
    infernalSemen: {
        Lite: {
            Name: "Infernal semen"
        },
        Name: "Infernal semen",
        Use: function (who) {
            who.Masc += who.Femi;
            who.Femi = 0;
            return "The infernally-hot semen burns your feminine essence, leaving you 100% male."
        },
        Equip: "No",
        Drop: true,
        Does: "Turns femininity into masculinity",
        Title: "Turns your feminine side into another masculine one."
    },
    infernalMilk: {
        Lite: {
            Name: "Infernal milk"
        },
        Name: "Infernal milk",
        Use: function (who) {
            who.Femi += who.Masc;
            who.Masc = 0;
            return "The infernally-hot milk burns your masculine essence, leaving you 100% female."
        },
        Equip: "No",
        Drop: true,
        Does: "Turns masculinity into femininity",
        Title: "Turns your masculine side into another feminine one."
    },
    SuccMilk: {
        Lite: {
            Name: "Milk+"
        },
        Name: "Milk+",
        Use: function (who) {
            var a = "",
                b = "";
            if (Settings.EssenceAuto == false && who.Boobies.length < 2) {
                if (who.Boobies[0].Size < 6) {
                    who.Boobies[0].Size = 6;
                    a = "your breasts swell";
                }
                who.Boobies[1] = who.Boobies[0];
                a += ", as another pair grow right below them to the same size!";
            } else if (Settings.EssenceAuto == false) {
                var c = 0;
                for (var i = 0; i < who.Boobies.length; i++) {
                    if (who.Boobies[i].Size < 6) {
                        who.Boobies[i].Size = 6;
                        c++;
                    }
                }
                if (c > 0)
                    a = "your smallest breasts swell to D-cups!";
            } else if (who.Femi <= 3560) {
                who.Femi = 3561;
                a = "your chest explodes with activity, leaving you with a feminized body, complete with massive breasts!";
            } else a = "your boobs vibrate with energy...";
            FluidsEngine();
            for (var i = 0; i < who.Boobies.length; i++) {
                if (who.Boobies[i].Milk < who.Boobies[i].MilkMax) {
                    who.Boobies[i].Milk = who.Boobies[i].MilkMax;
                    b = "<br>A few seconds later, they're completely filled with milk!";
                }
            }

            FluidsEngine();
            return "Feeling a flush of heat in your chest, you glance down just in time to see " + a + b
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you filled with milk!",
        Title: "Guarantees milkiness."
    },
    IncSemen: {
        Lite: {
            Name: "Semen+"
        },
        Name: "Semen+",
        Use: function (who) {
            var a = "",
                b = "";
            if (Settings.EssenceAuto == false && who.Balls.length < 2) {
                a = "your balls"
                if (who.Balls[0].Size < 6) {
                    who.Balls[0].Size = 6;
                    a += " swell";
                }
                who.Balls[1] = who.Balls[0];
                a += ", as another pair grow right beside them to the same size!";
            } else if (Settings.EssenceAuto == false) {
                var c = 0;
                for (var i = 0; i < who.Balls.length; i++) {
                    if (who.Balls[i].Size < 6) {
                        who.Balls[i].Size = 6;
                        c++;
                    }
                }
                if (c > 0)
                    a = "your smallest balls swell in size!";
            } else if (who.Masc <= 3560) {
                who.Masc = 3561;
                a = "your groin explode with activity, leaving you with a masculinized body, complete with massive dicks and balls!";
            } else a = "your balls vibrate with energy...";
            FluidsEngine();
            for (var i = 0; i < who.Balls.length; i++) {
                if (who.Balls[i].Cum < who.Balls[i].CumMax) {
                    who.Balls[i].Cum = who.Balls[i].CumMax;
                    b = " A few seconds later, they're completely filled with cum!";
                }
                FluidsEngine();
            }

            return "Feeling a flush of heat in your groin, you glance down just in time to see " + a + b
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you filled with cum!",
        Title: "Guarantees cum-filling."
    },
    book: {
        Lite: {
            Name: "Book"
        },
        Name: "Book",
        Use: function (who) {
            who.Int++;
            who.Arousal = 99;
            return "A dirty magazine, that's made you extremely aroused..."
        },
        Equip: "No",
        Drop: true,
        Does: "Int +1",
        Title: "Magically connects to another dimension's internet, but only shows porn."
    },
    Milker: {
        Lite: {
            Name: "Milker500"
        },
        Name: "Milker500",
        Use: function (who, item) {
            const Milktotal = who.Boobies.map(m => m.Milk).reduce((acc, cur) => acc + cur);
            for (let e of who.Boobies) {
                e.Milk = 0
            }
            item.Quantity++; // Crude way to stop player from wasteing milker.
            if (Math.round(Milktotal / 500) > 0) {
                item.Quantity -= Math.max(1, Math.round(Milktotal / 1000));
            }
            if (Math.floor(Milktotal / 2000) > 0) {
                SnowInventoryAdd(ItemDict.LargeMilkBottle, Math.floor(Milktotal / 2000))
            }
            if (Math.floor(Milktotal % 2000 / 1000 > 0)) {
                SnowInventoryAdd(ItemDict.MilkBottle, Math.floor(Milktotal % 2000 / 1000))
            }
            if (Math.round((Milktotal % 1000 / 500))) { // Giving two bottles if over 1.5 seems fair
                SnowInventoryAdd(ItemDict.SmallMilkBottle, Math.round((Milktotal % 1000 / 500)));
            }
            FluidsEngine();
        },
        Equip: "No",
        Drop: true,
        Does: "Milk you",
        Title: "Milk yourself"
    },
    SmallMilkBottle: {
        Lite: {
            Name: "Small milk bottle"
        },
        Name: "Small milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 18) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 5;
            player.WillHealth += 5;
            player.Fat += 0.1;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A half liter bottle filled milk."
    },
    MilkBottle: {
        Lite: {
            Name: "Milk bottle"
        },
        Name: "Milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 17) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 12;
            player.WillHealth += 12;
            player.Fat += 0.3;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A one liter bottle filled milk."
    },
    LargeMilkBottle: {
        Lite: {
            Name: "Large milk bottle"
        },
        Name: "Large milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 16) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 30;
            player.WillHealth += 30;
            player.Fat += 0.5;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A two liter bottle filled milk."
    },
    PocketPortal: {
        Lite: {
            Name: "Pocket portal"
        },
        Name: "Pocket portal",
        Use: function (who, item) {
            if (who.Map === "RoadToHome") {
                DocId("InventoryText").innerHTML = "... seriously?"
                item.Quantity++;
            } else if (House.Portal.Owned) {
                enemies = [];
                who.Area = "First";
                who.Map = "RoadToHome";
                DisplayGame();
                DocId("Inventory").style.display = 'none';
            } else {
                item.Quantity++;
                DocId("InventoryText").innerHTML = "You have no house portal.";
            }
        },
        Equip: "No",
        Does: "Teleport home",
        Drop: false, //I think?
        Title: "Never walk home again!"
    },
}

// Splited from main dict to keep it readable
ItemDict.SpellBook = {
    Lite: {
        Name: "SpellBook"
    },
    Name: "SpellBook",
    Equip: "", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
    Drop: false,
    Does: "Short desc.",
    Quantity: "bob", // Infinity
    Title: "Long description of the item",
    Use: function (who) {
        DocId("Inventory").style.display = "none";

        const Div = DocId("SpellBook");
        Div.style.display = "block";
        while (Div.hasChildNodes()) {
            Div.removeChild(Div.firstChild);
        }

        const h1 = document.createElement("h1");
        h1.innerHTML = "Spell book"
        Div.appendChild(h1);

        const p = document.createElement("p");
        p.classList.add("TextBox");
        Div.appendChild(p);

        for (let e of player.Spells) {
            Div.appendChild(DictSpell(e));
        }

        function DictSpell(e) {
            const it = e,
                DictIt = SpellDict[it.Name],
                DictSpell = InputButton(DictIt.Name);
            DictSpell.addEventListener("click", function () {
                h1.innerHTML = DictIt.Name
                p.innerHTML = `${SpellDictLite[it.Name].Title}<br><br>Manacost: ${DictIt.ManaCost(it.Exp)}<br>
                Type: ${DictIt.Type}<br>Exp: ${it.Exp}`
            });
            Div.appendChild(DictSpell);
            return DictSpell
        }
        const CloseBook = InputButton("Close book");
        CloseBook.addEventListener("click", function () {
            while (Div.hasChildNodes()) {
                Div.removeChild(Div.firstChild);
            }
            Div.style.display = "none";
            DocId("Inventory").style.display = "block";
        });
        Div.appendChild(CloseBook);
    }
}
    // Level Menu
    DocId("LevelButton").addEventListener("click", function () {
        DisplayNone();
        LevelMenuFunc();
        DocId("LevelMenu").style.display = 'block';
    });
    // Incraese stats

    function LevelMenuFunc() {
        let div = DocId("LevelMenu");
        while (div.hasChildNodes()) {
            div.removeChild(div.lastChild);
        }
        let innerdiv = document.createElement("div");
        innerdiv.classList.add("LPMenuInner");

        let Con = document.createElement("div");
        if (window.innerHeight > 600) {
            let h1 = document.createElement("h1");
            let h1text = document.createTextNode("Level menu")
            h1.appendChild(h1text);
            innerdiv.appendChild(h1);

        }

        let p = document.createElement("p");
        p.classList.add("MenuText");
        innerdiv.appendChild(p);

        Con.addEventListener("mouseover", function (e) {
            p.innerHTML = e.target.title;
        })

        let pl = document.createElement("p"); // PointsLeft
        pl.innerHTML = player.SkillPoints + " points left";
        innerdiv.appendChild(pl);

        let br = document.createElement("br"),
            br2 = document.createElement("br"),
            br3 = document.createElement("br");

        let Strength = InputButton("Strength: " + player.Str, "Makes physical attacks stronger");
        Strength.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Str++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Strength);

        let Charm = InputButton("Charm: " + player.Charm, "Makes tease stronger");
        Charm.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Charm++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Charm);
        Con.appendChild(br);

        let Endurance = InputButton("Endurance: " + player.End, "Gives you more health and every 8 point increase max orgasm");
        Endurance.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.End++;
                player.SkillPoints--;
                player.MaxHealth += 5;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Endurance);

        let Intelligence = InputButton("Intelligence: " + player.Int, "Increases spell effects");
        Intelligence.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Int++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Intelligence);
        Con.appendChild(br2);

        let Willpower = InputButton("Willpower: " + player.Will, "Increases your willhealth");
        Willpower.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Will++;
                player.MaxWillHealth += 5;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Willpower);

        let Sexskill = InputButton("Sex skill: " + player.SexSkill, "When having sex your enemy gains more arousal");
        Sexskill.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.SexSkill++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Sexskill);

        innerdiv.appendChild(Con);
        innerdiv.appendChild(br3);

        let PerkMenu = InputButton("Perk menu");
        PerkMenu.addEventListener("click", function () {
            PerkMenuFunc();
        });
        innerdiv.appendChild(PerkMenu);

        let Done = InputButton("Done");
        Done.addEventListener("click", function () {
            div.style.display = 'none';
            DisplayGame();
        })
        innerdiv.appendChild(Done);
        div.appendChild(innerdiv);
    };
function SaveLoader(Load) {
    const LoadArray = JSON.parse(localStorage.getItem(Load));
    player = LoadArray[0];
    House = LoadArray[1];
    Flags = LoadArray[2];
    Settings = LoadArray[3];
    CheckFlags();
    DisplayGame();
    requestAnimationFrame(loop);
    DocId("LoadMenu").style.display = 'none';
    return;
}

// Game load button
DocId("LoadButton").addEventListener("click", function () {
    DocId("LoadMenu").style.display = 'block';
    DocId("StartPage").style.display = 'none';
    DocId("StartLoad").style.display = 'block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            DocId("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
// Start page load button
DocId("StartLoad").addEventListener("click", function () {
    DocId("LoadMenu").style.display = 'none';
    DocId("StartPage").style.display = 'grid';
})

// Load handler
for (let e = 1; e < 6; e++) {
    DocId("LoadPlayer" + e).addEventListener("click", function () {
        enemies = [];
        if (localStorage.getItem('SavedPlayer' + e) === null) {
            return;
        } else {
            SaveLoader('SavedPlayer' + e);
        }
        return;
    });
}

DocId("LoadFile").addEventListener("input", function (file) {
    const reader = new FileReader();
    reader.readAsText(file.target.files[0]);
    reader.onload = function () {
        const parseplayer = JSON.parse(reader.result),
         LoadArray = [...parseplayer];
        player = LoadArray[0];
        House = LoadArray[1];
        Flags = LoadArray[2];
        Settings = LoadArray[3];
        DocId("StartPage").style.display = 'none';
        DocId("LoadMenu").style.display = 'none';
        DisplayGame()
        CheckFlags();
        requestAnimationFrame(loop);
    }
});
DocId("Load").addEventListener("click", function () {
    DisplayNone();
    DocId("MapLoad").style.display = 'block';
    DocId("LoadMenu").style.display = 'block';
    DocId("StartLoad").style.display = 'none';

    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            DocId("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
DocId("LoadLeave").addEventListener("click", function () {
    DocId("LoadMenu").style.display = 'none';
    DisplayGame();
})
// End Load handler
function IntToOne(i) {
    switch (i) {
        case 0:
            return "A "
        case 1:
            return ", below it there is a second "
        case 2:
            return ", followed by a third "
        default:
            return ", and a " + (i + 1) + "th ";
    }
}

function GrowthScale(who) {
    return (who.Height / 160)
}

function DickLook(who) {
    if (who.Dicks.length > 0) {
        let dicks = who.SecondRace == "centaur" ?
            "Under your equine body, retracted into their penile sheath, you find " :
            who.SecondRace == "equine" ? "Retracted into their penile sheath, you find " : "";

        who.Dicks.forEach((Dick, index) => {
            const Size = OrganSize(Dick.Size, who);
            // width = Size / modded value;
            dicks += `${IntToOne(index)} ${CmToInch(Size)} long ${Dick.Type.toLowerCase()} 
            ${Dick.Virgin ? " virgin" : ""} dick`;
        });
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function ExactDickLook(who) {
    if (who.Dicks.length > 0) {
        let dicks = who.SecondRace == "centaur" ?
            "Under your equine body, retracted into their penile sheath, you find " :
            who.SecondRace == "equine" ? "Retracted into their penile sheath, you find " : "";

        who.Dicks.forEach((Dick, index) => {
            const Size = OrganSize(Dick.Size, who);
            // width = Size / modded value;
            dicks += `${IntToOne(index)} ${CmToInch(Size)} long ${Dick.Type.toLowerCase()} 
            ${Dick.Virgin ? " virgin" : ""} dick`;
        });
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function BallLook(who) {
    if (who.Balls.length > 0) {
        let balls = "";
        who.Balls.forEach((Balls, index) => {
            const Size = OrganSize(Balls.Size, who);
            balls += `${IntToOne(index)} pair of ${CmToInch(Size)} wide balls, ${Filled(Balls)} cum`;
        });
        return balls + "<br><br>";
    } else {
        return "";
    };
};

function ExactBallLook(who) {
    if (who.Balls.length > 0) {
        let balls = "";
        who.Balls.forEach((Balls, index) => {
            const Size = OrganSize(Balls.Size, who);
            balls += `${IntToOne(index)} pair of ${CmToInch(Size)} wide balls, ${Filled(Balls)} cum`;
        });
        return balls + "<br><br>";
    } else {
        return "";
    };
};

function Filled(what) {
    return "filled with " + LToGal(what.Cum / 1000)
    /**
     *     var Percent = what.Cum / what.CumMax;
        console.log(Percent);
        if (Percent > 0.9) {
            return "swollen with"
        } else if (Percent > 0.5) {
            return "filled with"
        } else if (Percent > 0.3) {
            return "filled with"
        } else if (Percent > 0.1) {
            return "shrunken due their emptiness"
        } else if (Percent > 0.01) {
            return "shrunken due their emptiness"
        } else {
            return "completely dried up"
        }
     */
}

function PussyLook(who) {
    if (who.Pussies.length > 0) {
        let pussies = (who.SecondRace == "centaur") ?
            "At your equine backside are your mare genitals, " : "";
        who.Pussies.forEach((Pussy, index) => {
            const Size = OrganSize(Pussy.Size, who);
            pussies += `${IntToOne(index)} ${CmToInch(Size)} deep ${Pussy.Type.toLowerCase()} 
            ${Pussy.Virgin ? " virgin" : ""} pussy`;
        });
        return pussies + ".<br><br>";
    } else {
        return "";
    };
};

function ExactPussyLook(who) {
    if (who.Pussies.length > 0) {
        let pussies = (who.SecondRace == "centaur") ?
            "At your equine backside are your mare genitals, " : "";
        who.Pussies.forEach((Pussy, index) => {
            const Size = OrganSize(Pussy.Size, who);
            pussies += `${IntToOne(index)} ${CmToInch(Size)} deep ${Pussy.Type.toLowerCase()} 
            ${Pussy.Virgin ? " virgin" : ""} pussy`;
        });
        return pussies + ".<br><br>";
    } else {
        return "";
    };
};

function BoobLook(who) {
    if (who.Boobies.length > 0) {
        let boobies = "";
        who.Boobies.forEach((Boobs, index) => {
            const Size = OrganSize(Boobs.Size, who);
            if (index === 0 && Size <= 4 && Size > 2) {
                boobies += `An ${BoobSizeConvertor(Size)}-cup chest`;
            } else if (Size > 4 && Size < 28) {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)}-cup chest`;
            } else {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)} chest`;
            }
            // Todo add milk desc!
        });
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function ExactBoobLook(who) {
    if (who.Boobies.length > 0) {
        let boobies = "";
        who.Boobies.forEach((Boobs, index) => {
            const Size = OrganSize(Boobs.Size, who);
            console.log(Size)
            if (index === 0 && Size <= 4 && Size > 1) {
                boobies += `An ${BoobSizeConvertor(Size)}-cup chest`;
            } else if (Size > 4 && Size < 28) {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)}-cup chest`;
            } else {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)} chest`;
            }
        });
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function AnalLook(who) {

}

function BoobSizeConvertor(Size) {
    //const Prop = Size / GrowthScale(who)
    switch (Math.floor(Size)) {
        case 0:
        case 1:
            return "flat";
        case 2:
            return "AA";
        case 3:
            return "A";
        case 4:
            return "B";
        case 5:
            return "C";
        case 6:
            return "D";
        case 7:
            return "DD";
        case 8:
            return "F";
        case 9:
            return "Large F";
        case 10:
            return "G";
        case 11:
            return "Large G";
        case 12:
            return "H";
        case 13:
            return "Large H";
        case 14:
            return "I";
        case 15:
            return "Large I";
        case 16:
            return "J";
        case 17:
            return "Large J";
        case 18:
            return "K";
        case 19:
            return "Large K";
        case 20:
            return "L";
        case 21:
            return "Large L";
        case 22:
            return "M";
        case 23:
            return "Large M";
        case 24:
            return "N";
        case 25:
            return "Large N";
        case 26:
            return "O";
        case 27:
            return "Large O";
        default:
            return "scale-breaking"
    }
}

// TODO add pussy width
function PussySizeConvetor(Size) { // Could be fun to reuse with a strecht factor
    if (Size <= 1) {
        return "extremely tight";
    } else if (Size >= 2 && Size < 4) {
        return "very tight";
    } else if (Size >= 4 && Size < 6) {
        return "tight";
    } else if (Size >= 6 && Size < 8) {
        return "parted";
    } else if (Size >= 8 && Size < 10) {
        return "loose";
    } else {
        return "gaping";
    }
}

function Fitness(who) {
    let a, b, c;
    if ((who.Fat / who.Weight) * 100 <= 2) {
        a = "You look malnourished ";
    } else if ((who.Fat / who.Weight) * 100 <= 14) {
        a = "You have an athletic body ";
    } else if ((who.Fat / who.Weight) * 100 <= 18) {
        a = "You have a fit body ";
    } else if ((who.Fat / who.Weight) * 100 <= 26) {
        a = "You have a healthy body ";
    } else if ((who.Fat / who.Weight) * 100 <= 31) {
        a = "You have an pudgy body "; // Probably should change to more positive words, plus size? fat?
    } else if ((who.Fat / who.Weight) * 100 <= 36) {
        a = "You have a plump body "; // Obese
    } else {
        a = "You have a plus size body "; // morbidly obese
    }

    if (who.Muscle < who.Height * 0.18) {
        b = "with unnoticable muscle";
    } else if (who.Muscle < who.Height * 0.20) {
        b = "with some defined muscle";
    } else if (who.Muscle < who.Height * 0.22) {
        b = "with well-defined muscle";
    } else if (who.Muscle < who.Height * 0.26) {
        b = "with bulky muscle";
    } else if (who.Muscle < who.Height * 0.30) {
        b = "with hulking muscle";
    } else if (who.Muscle < who.Height * 0.34) {
        b = "with enormous muscle";
    } else {
        b = "with colossal muscle"; // This is relative does a fairy ever have colossal muscle?
    }


    if ((who.Fat / who.Weight) * 100 <= 25) {
        c = "."
    } else if ((who.Fat / who.Weight) * 100 <= 31 && who.Muscle < who.Height * 0.18) {
        c = " covered in fat.";
    } else if ((who.Fat / who.Weight) * 100 <= 38 && who.Muscle < who.Height * 0.20) {
        c = " buried in fat.";
    } else if ((who.Fat / who.Weight) * 100 <= 55 && who.Muscle > who.Height * 0.22) {
        c = "... Otherwise, you couldn't move.";
    } else if ((who.Fat / who.Weight) * 100 <= 55 && who.Muscle < who.Height * 0.22) {
        c = "... Your weight is a burden to your ability to move.";
    } else {
        c = "... No-one knows how you move.";
    }

    return a + b + c;
}

function AllSexualOrgans(who) {
    return BoobLook(who) + DickLook(who) + BallLook(who) + PussyLook(who);
};
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

    const CloseLevel = InputButton("Close");
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
function CheckDoor() {
    function DoorHandler(NESW) {
        const startarea = DocId("hem");
        enemies = [];
        switch (NESW) {
            case "N":
                sprite.y = startarea.height - 3 * grid;
                break;
            case "E":
                sprite.x = 2 * grid;
                break;
            case "S":
                sprite.y = 2 * grid;
                break;
            case "W":
                sprite.x = startarea.width - 3 * grid;
                break;
        }
    }

    function MakeDoor(x, y, width, height, NESW) {
        this.x = x,
            this.y = y,
            this.width = width,
            this.height = height,
            this.NESW = NESW
    };
    const startarea = DocId("hem"),
        DoorE = new MakeDoor(grid * 19, grid * 7, grid, 5 * grid, "E"),
        DoorS = new MakeDoor(grid * 7, grid * 19, grid * 5, grid, "S"),
        DoorW = new MakeDoor(0, grid * 7, 0, 5 * grid, "W"),
        DoorN = new MakeDoor(grid * 7, 0, grid * 5, 0, "N"),
        Doors = [DoorE, DoorS, DoorN, DoorW];
    for (let i of Doors) {
        let Door = i.NESW;
        // half grids are to pad doors not sure if they actually do something or if it's has placebo affect on me.
        if (sprite.x + grid/2>= i.x && sprite.x -grid/2 <= i.x + i.width &&
            sprite.y + grid/2>= i.y && sprite.y -grid/2<= i.y + i.height) {
            switch (player.Area) {
                case "First":
                    switch (player.Map) {
                        case "Start":
                            if (Door == "E") {
                                player.Map = "RoadToCity";
                                DoorHandler("E");
                            }
                            break;
                        case "RoadToCity":
                            if (Door == "S") {
                                player.Map = "RoadToCity2";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "Start";
                                DoorHandler("W");
                            } else if (Door == "N") {
                                player.Map = "Bandit";
                                DoorHandler("N");
                            }
                            break;
                        case "Bandit":
                            if (Door == "S") {
                                player.Map = "RoadToCity";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToCity2":
                            if (Door == "N") {
                                player.Map = "RoadToCity";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "City";
                                DoorHandler("E");
                            }
                            break;
                        case "City":
                            if (Door == "W") {
                                player.Map = "RoadToCity2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "RoadToHome";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Forest";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToHome":
                            if (Door == "W") {
                                player.Map = "City";
                                DoorHandler("W");
                            } else if (Door == "E" && House.Owned == true) {
                                battle = true;
                                sprite.x = startarea.width - 3 * grid;
                                DocId("map").style.display = 'none';
                                DocId("buttons").style.display = 'none';
                                DocId("EmptyButtons").style.display = 'block';
                                DocId("Home").style.display = 'block';
                                DocId("HomeText").style.display = 'block';

                                DocId("Dorm").style.display = House.Dorm > 0 ? "inline-block" : 'none';
                                DocId("Portal").style.display = House.Portal.Owned ? 'inline-block' : 'none';
                                DocId("Brothel").style.display = House.Brothel ? 'inline-block' : 'none';
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch";
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch":
                            if (Door == "S") {
                                player.Map = "RoadToHome";
                                DoorHandler("S");
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch2"
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch2":
                            if (Door == "S") {
                                player.Map = "RoadToWitch";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Witch";
                                DoorHandler("E");
                            }
                            break;
                        case "Witch":
                            if (Door == "W") {
                                player.Map = "RoadToWitch2";
                                DoorHandler("W");
                            }
                            break;
                        case "Forest":
                            if (Door == "N") {
                                player.Map = "City";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Forest2";
                                DoorHandler("S");
                            }
                            break;
                        case "Forest2":
                            if (Door == "N") {
                                player.Map = "Forest";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws";
                                player.Area = "Second";
                                DoorHandler("S");
                            }
                            break;
                    }
                    break;
                case "Second":
                    switch (player.Map) {
                        case "PathToOutlaws":
                            if (Door == "N") {
                                player.Map = "Forest2";
                                player.Area = "First";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "Cave1";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("S");
                            }
                            break;
                        case "PathToOutlaws2":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Outlaws";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Farm";
                                DoorHandler("E");
                            }
                            break;
                        case "Farm":
                            if (Door == "W") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("W");
                            }
                            break;
                        case "Outlaws":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("N");
                            }
                            break;
                        case "Cave1":
                            if (Door == "E") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "Cave2";
                                DoorHandler("W");
                            }
                            break;
                        case "Cave2":
                            if (Door == "E") {
                                player.Map = "Cave1";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Cave3";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave3":
                            if (Door == "N") {
                                player.Map = "Cave2";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Cave4";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave4":
                            if (Door == "N") {
                                player.Map = "Cave3";
                                DoorHandler("N");
                            }
                    }
                    break;
                case "Mountain":
                    switch (player.Map) {
                        case "MountainStart":
                            if (Door == "S") {
                                player.Map = "MountainClimb";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrinePath":
                            if (Door == "E") {
                                player.Map = "MountainStart";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "MountainShrine";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrine":
                            if (Door == "E") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                //player.Map = "";
                                //DoorHandler("W");
                            }
                            break;
                        case "MountainClimb":
                            if (Door == "N") {
                                player.Map = "MountainStart";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb2";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb2":
                            if (Door == "N") {
                                player.Map = "MountainClimb";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb3";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb3":
                            if (Door == "W") {
                                player.Map = "MountainClimb2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb4";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb4":
                            if (Door == "N") {
                                player.Map = "MountainClimb5";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "MountainClimb3";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainClimb5":
                            if (Door == "N") {
                                player.Map = "MountainClimb6";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb4";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb6":
                            if (Door == "N") {
                                player.Map = "MountainClimb7";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb5";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb7":
                            if (Door == "N") {
                                player.Map = "MountainClimb8";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb6";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "MountainTribe";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainTribe":
                            if (Door == "E") {
                                player.Map = "MountainClimb7";
                                DoorHandler("E");
                            } else if (Door == "N") {
                                player.Map = "MountainClimb9";
                                DoorHandler("N");
                            }
                            break
                        case "MountainClimb8":
                            if (Door == "W") {
                                player.Map = "MountainClimb9";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb7";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb9":
                            if (Door == "W") {
                                player.Map = "MountainPlateau";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb8";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "MountainTribe";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainPlateau":
                            if (Door == "E") {
                                player.Map = "MountainClimb9";
                                DoorHandler("E");
                            }
                            break;
                    }
                    break
            }
        }
    }
};
function ImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {},
        loaded = 0;

    if (Array.isArray(arr)) {
        for (let e of arr) {
            let img = new Image();
            img.onload = ImageLoaded;
            img.src = `Res/Tiles/${e}.png`;
            images[e] = img;
        }
    } else {
        return
    }

    function ImageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}

function NpcImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {},
        loaded = 0;

    if (Array.isArray(arr)) {
        for (let e of arr) {
            let img = new Image();
            img.onload = ImageLoaded;
            img.src = `Res/${e}.png`;
            images[e] = img;
        }
    } else {
        return
    }

    function ImageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}
var Tiles_images = {},
    Npc_images = {};
const Tilesloader = ImageLoad(["Bandit", "Cave1", "Cave2", "Cave3", "Cave4", "City", "Forest", "Forest2", "Outlaws",
        "PathToOutlaws", "PathToOutlaws2", "RoadToCity", "RoadToCity2", "RoadToHome", "RoadToWitch", "RoadToWitch2",
        "rtb2", "Start", "Witch", "MountainStart", "MountainShrinePath", "MountainShrine", "MountainClimb", "MountainClimb2",
        "MountainClimb3", "MountainClimb4", "MountainClimb5", "MountainClimb6", "MountainClimb7", "MountainClimb8",
        "MountainClimb9", "MountainPlateau", "Farm"
    ], function (images) {
        Tiles_images = images;
        // Stop player from starting before tiles are loaded
        DocId("LoadingImagesProgress").innerHTML = "Tiles loaded";
        DocId("LoadingImagesProgress").classList.remove("visible");
        DocId("LoadingImagesProgress").classList.add("hidden");
    }),
    NpcImageLoader = NpcImageLoad(["LocalPortal", "FarmBarn", "BlackMarket"], function (images) {
        Npc_images = images;
    });

function CurrentMap() {
    ; // Moved here to avoid public handling of npcs, need to double check so I haven't
    // forgoten avoid any refernce to Npcs somewhere
    //First Town
    function Npc(Name, RealName, X, Y, width, height, Color) {
        this.Name = Name,
            this.RealName = RealName,
            this.X = X,
            this.Y = Y,
            this.Width = width,
            this.Height = height,
            this.Color = Color
    };
    let Npcs = []
    const startarea = DocId("hem"),
        ctx = startarea.getContext("2d"),
        Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)"),
        Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)"),
        Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)"),
        // RtW
        Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)"),
        WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 6, grid * 4.5, grid * 10, "RGB(133,94,66)"),
        // Witch
        WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)"),
        ChimeraShrine = new Npc("ChimeraShrine", "Chimera shrine", grid * 3, grid * 17, grid * 2, grid * 2, "RGB(133,94,66)"),
        // Misc
        Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)"),


        Barber = new Npc("Barber", "Hair salon", grid * 15, grid, grid * 5, grid * 4, "RGB(133,94,66)"),
        PortalShop = new Npc("PortalShop", "Portal shop", grid, grid * 15, grid * 4, grid * 4, "RGB(133,94,66)"),
        //Outlaw
        BlackMarket = new Npc("BlackMarket", "Black market", grid * 12, grid * 4, grid * 6, grid * 4, "RGB(133,94,66)"),
        // Dungeons
        SuccubusDungeon = new Npc("SuccubusDungeon", "Dungeon", grid * 8, grid * 18, grid * 4, grid * 2, "RGB(133,94,66)"),
        // Farm
        FarmOwner = new Npc("FarmOwner", "Teoviz", grid * 5, grid * 2, grid, grid, "RGB(133,94,66)"),
        FarmBarn = new Npc("FarmBarn", "Barn", grid * 13, grid, grid * 5, grid * 7, "RGB(133,94,66)"),
        // Shrine
        MountainShrine = new Npc("MountainShrine", "Shrine", grid * 5.5, grid * 2.5, grid * 2.4, grid * 2.4, "Pink"),
        ShrinePriestess = new Npc("ShrinePriestess", "Priestess", grid * 15, grid, grid, grid, "Pink"),
        // Dragons
        TribeChief = new Npc("TribeChief", "", grid * 2, grid * 8, grid, grid, "#841A31"),
        TribeChiefWife = new Npc("TribeChiefWife", "", grid * 2, grid * 10, grid, grid, "#841A31"),
        TribeShop = new Npc("TribeShop", "", grid * 12, grid * 15, grid * 4, grid * 5, "RGB(133,94,66)");

    function Portal(Xpos, Ypos) { // Portal is function so I can change X-position & Y-position
        return new Npc("LocalPortal", "Portal", grid * Xpos, grid * Ypos, grid * 4, grid * 4, "RGB(96, 47, 107)")
    }

    function PrintImage() { // New and improved
        if (typeof Tiles_images[player.Map] !== "undefined") {
            ctx.clearRect(0, 0, startarea.width, startarea.height);
            ctx.drawImage(Tiles_images[player.Map], 0, 0, startarea.width, startarea.height);
            if (Settings.HighLightDoors) {
                PrintDoors();
            }
        } else {
            PaintBackground();
            PrintDoors();
        }

        function PaintBackground() {
            ctx.fillStyle = Settings.MapColor;
            ctx.fillRect(0, 0, startarea.width, startarea.height);

            // Wall around map
            ctx.fillStyle = Settings.BorderColor;
            ctx.fillRect(0, 0, grid / 2, startarea.height);
            ctx.fillRect(0, 0, startarea.width, grid / 2);
            ctx.fillRect(startarea.width - (grid / 2), 0, grid / 2, startarea.height);
            ctx.fillRect(0, startarea.height - (grid / 2), startarea.width, grid / 2);
        }
    };
    PrintImage()
    //Animal testing
    /*	var aSpawn = Math.random();
    	if (enemies.length < 1 && Settings.AnimalSpawn)
    	{
    		enemies = [animalSpawn(player.Height), animalSpawn(player.Height)];
    		return;
        }*/
    PrintMap();
    switch (player.Area) {
        case "First":
            switch (player.Map) {
                case "Start":
                    if (enemies.length < 1) {
                        enemies = [EncounterStart(), EncounterStart(), EncounterStart()];
                    }
                    break;
                case "RoadToCity":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath1(), EncounterPath1(), EncounterPath1()];
                    }
                    break;
                case "Bandit":
                    if (enemies.length < 1) {
                        enemies = [EncounterBandit(), EncounterBandit(), EncounterBandit(), EncounterBanditLord()];
                    }
                    break;
                case "RoadToCity2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath2(), EncounterPath2(), EncounterPath2()];
                    }
                    break;
                case "City":
                    Npcs = [Townhall, Bar, Shop];
                    break;
                case "RoadToHome":
                    Npcs = [ChimeraShrine];
                    break;
                case "RoadToWitch":
                    Npcs = [Gym, WitchShop, Barber];
                    break;
                case "RoadToWitch2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2()];
                    }
                    break;
                case "Witch":
                    Npcs = [WitchHut];
                    break;
                case "Forest":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest(), EncounterForest(), EncounterForest(), RespawnBlocker()];
                    }
                    break
                case "Forest2":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest2(), EncounterForest2(), EncounterForest2(), EncounterForest2(), RespawnBlocker()];
                    }
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    break;
                case "PathToOutlaws2":
                    break;
                case "Farm":
                    if (enemies.length < 1) {}
                    Npcs = [FarmOwner, FarmBarn]
                    break;
                case "Outlaws":
                    if (enemies.length < 1) {

                    }
                    Npcs = [BlackMarket, PortalShop, Portal(15, 15)]
                    break;
                case "Cave1":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1()]
                    }
                    break;
                case "Cave2":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2()]
                    }
                    break;
                case "Cave3":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave3(), EncounterCave3(), EncounterCave3()]
                    }
                    break;
                case "Cave4":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave4(), EncounterCave4(), EncounterCave4(), EncounterCave4()]
                    }
                    Npcs = [SuccubusDungeon];
                    break;
            }
            break;
        case "Mountain":
            switch (player.Map) {
                case "MountainStart":
                    Npcs = [Portal(14, 2)];
                    break;
                case "MountainShrinePath":
                    if (enemies.length < 1) {
                        var a = RandomInt(2, 4);
                        enemies = [];
                        for (var e = 0; e < a; e++) {
                            enemies.push(EncounterMaiden());
                        }
                    }
                    break;
                case "MountainShrine":
                    Npcs = [MountainShrine];
                    break;
                case "MountainClimb":
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainClimb2":
                    if (enemies.length < 1) {
                        enemies = [EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy()]
                    }
                    break;
                case "MountainClimb3":
                    if (enemies.length < 1) {
                        enemies = [];
                    }
                    break;
                case "MountainClimb4":
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind()];
                    }
                    break;
                case "MountainClimb5":
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterAnthroDragon()];
                    }
                    break;
                case "MountainClimb6":
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterAnthroDragon(), EncounterAnthroDragon()]
                    }
                    break;
                case "MountainClimb7":
                    if (enemies.length < 1) {
                        enemies = [EncounterAnthroDragon(), EncounterAnthroDragon(), EncounterAnthroDragon()];
                    }
                    break;
                case "MountainTribe":
                    Npcs = [TribeChief, TribeChiefWife, TribeShop];
                    enemies = [];
                    break;
                case "MountainClimb8":
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainClimb9":
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainPlateau":
                    if (enemies.length < 1) {

                    }
                    Npcs = [Portal(2, 12)];
                    break;
            }
            break;
        default:
            switch (player.Map) {
                case "TempCity":
                    if (enemies.length < 1) {

                    }
                    Npcs = [Portal(18, 18)];
                    break;
            }
    }
    Npcs.length > 0 ? (PrintNpcs(), TouchNpc()) : false;

    function PrintNpcs() {
        const DontneedPrint = ["Townhall", "Shop", "Bar", "Gym", "WitchShop", "WitchHut"],
            HasSprite = ["LocalPortal", "FarmBarn", "BlackMarket"];
        // var needPrint = ["FarmBarn", "FarmOwner", "LocalPortal", "PortalShop", "Barber", "MountainShrine", "ChimeraShrine"];
        // Switched it so new npcs always print
        for (var e of Npcs) {
            if (HasSprite.indexOf(e.Name) > -1) {
                ctx.drawImage(Npc_images[e.Name], e.X, e.Y, e.Width, e.Height);
            } else if (DontneedPrint.indexOf(e.Name) === -1) {
                ctx.fillStyle = e.Color;
                ctx.fillRect(e.X, e.Y, e.Width, e.Height);
            }
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "4vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(e.RealName, e.X + e.Width / 2, e.Y + e.Height / 1.8);
        }
    };

    function TouchNpc() {
        for (var n of Npcs) {
            if (sprite.x + grid * sprite.Size >= n.X && sprite.x < n.X + n.Width &&
                sprite.y + grid * sprite.Size >= n.Y && sprite.y < n.Y + n.Height) {
                if (mousedowner) {
                    mousedowner = false;
                }
                battle = false;
                GamePaused = true;
                sprite.x = startarea.width / 2 - grid;
                sprite.y = startarea.height / 2;
                UpdateNpc(n.Name);
            }
        }

        function UpdateNpc(name) {
            let isfunction = window[name + "Func"];
            if (typeof isfunction === "function") { // Start replacing html building/npcs with javascript functions
                DocId("map").style.display = 'none';
                DocId("buttons").style.display = 'none';
                DocId("EmptyButtons").style.display = 'block';
                isfunction();
            } else {
                DocId(name).style.display = 'block';
                DocId("map").style.display = 'none';
                DocId("buttons").style.display = 'none';
                DocId("EmptyButtons").style.display = 'block';
                DocId("Leave" + name).addEventListener("click", function () {
                    battle = false;
                    DocId(name).style.display = 'none';
                    DocId("map").style.display = 'block';
                    DocId("buttons").style.display = 'block';
                    DocId("EmptyButtons").style.display = 'none';
                    DocId("status").style.display = 'block';
                    DocId(name + "Text").innerHTML = null;
                    return;
                });
            }
        }
    }
}
function PrintDoors() {
    function PrintDoor(NESW) {
        const startarea = document.getElementById("hem"),
            ctx = startarea.getContext("2d");
        ctx.fillStyle = Settings.MapColor;
        switch (NESW.toUpperCase()) {
            case "E":
                ctx.fillRect(startarea.width - grid, startarea.height / 3, grid, grid * 6);
                break;
            case "S":
                ctx.fillRect(startarea.width / 3, startarea.height - grid, grid * 6, grid);
                break;
            case "W":
                ctx.fillRect(0, startarea.height / 3, grid, grid * 6);
                break;
            case "N":
                ctx.fillRect(startarea.width / 3, 0, grid * 6, grid);
                break;
        }
    }
    switch (player.Area) {
        case "First":
            switch (player.Map) {
                case "Start":
                    PrintDoor("E");
                    break;
                case "RoadToCity":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
                case "Bandit":
                    PrintDoor("S");
                    break;
                case "RoadToCity2":
                    PrintDoor("N");
                    PrintDoor("E");
                    break;
                case "City":
                    PrintDoor("E");
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "RoadToHome":
                    PrintDoor("N");
                    PrintDoor("W");
                    break;
                case "RoadToWitch":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "RoadToWitch2":
                    PrintDoor("S");
                    PrintDoor("E");
                    break;
                case "Witch":
                    PrintDoor("W");
                    break;
                case "Forest":
                    PrintDoor("N");
                    PrintDoor("S");
                    break
                case "Forest2":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    PrintDoor("S");
                    PrintDoor("N");
                    PrintDoor("W");
                    break;
                case "PathToOutlaws2":
                    PrintDoor("N");
                    PrintDoor("S");
                    PrintDoor("E");
                    break;
                case "Farm":
                    PrintDoor("W");
                    break;
                case "Outlaws":
                    PrintDoor("N");
                    break;
                case "Cave1":
                    PrintDoor("W");
                    PrintDoor("E");
                    break;
                case "Cave2":
                    PrintDoor("E");
                    PrintDoor("S");
                    break;
                case "Cave3":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "Cave4":
                    PrintDoor("N");
                    break;
            }
            break;
        case "Mountain":
            switch (player.Map) {
                case "MountainStart":
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "MountainShrinePath":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainShrine":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainClimb":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
                case "MountainClimb2":
                    PrintDoor("E");
                    PrintDoor("N");
                    break;
                case "MountainClimb3":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainClimb4":
                    PrintDoor("W");
                    PrintDoor("N");
                    break;
                case "MountainClimb5":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainClimb6":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainClimb7":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainTribe":
                    PrintDoor("E");
                    PrintDoor("N");
                    break;
                case "MountainClimb8":
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "MountainClimb9":
                    PrintDoor("W");
                    PrintDoor("E");
                    break;
                case "MountainPlateau":
                    PrintDoor("N");
                    PrintDoor("E");
                    break;
            }
            break;
        default:
            switch (player.Map) {
                case "TempCity":
                    break;
            }
    }
}
document.getElementById("HideWorldMap").addEventListener("click", function () {
    const HideWorld = document.getElementById("HideWorldMap");
    if (document.getElementById("WorldMapPart").style.display == 'none') {
        document.getElementById("WorldMapPart").style.display = 'block';
        HideWorld.value = "H";
        PrintMap();
    } else {
        document.getElementById("WorldMapPart").style.display = 'none';
        HideWorld.value = "S"
    }
});

const MapIcons = {},
    MapIconsToLoad = MapIconsLoader(["skull_01", "Home"])

function MapIconsLoader(urls) {
    urls.forEach((url) => {
        const temp = new Image();
        temp.src = `Res/${url}.png`;
        temp.onload = () => {
            MapIcons[url] = temp;
            console.log(MapIcons)
        };
    });
};


function OWImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {},
        loaded = 0;

    if (Array.isArray(arr)) {
        for (let e of arr) {
            let img = new Image();
            img.onload = ImageLoaded;
            img.src = `Res/WorldMap/${e}.png`;
            images[e] = img;
        }
    } else {
        return
    }

    function ImageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}
var OWImages = {};

const OWTilesloader = OWImageLoad(["OWStart", "OWRTC", "OWRTC2", "OWBandit", "OWCity", "OWRTH", "OWRTW", "OWRTW2",
    "OWWitch", "OWForest", "OWForest2", "OWPTO", "OWPTO2", "OWFarm", "OWOutlaws", "OWCave1"
], function (images) {
    OWImages = images;
});

// Tool to print mini-map
function PrintMap() {
    const WorldMap = document.getElementById("WorldMap"),
        World = WorldMap.getContext("2d"),
        Width = WorldMap.width * 0.2,
        Height = WorldMap.height * 0.2;
    World.globalAlpha = 1;

    function TileImagePainter(x, y, image) {
        if (typeof OWImages[image] !== 'undefined') {
            World.drawImage(OWImages[image], WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
        } else if (typeof Tiles_images[image] !== "undefined") {
            World.drawImage(Tiles_images[image], WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
        } else {
            TilePainter(x, y);
        }
    }

    function TilePainter(x, y) {
        World.fillStyle = Settings.MapColor;
        World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);

        World.fillStyle = Settings.BorderColor;
        World.strokeRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
    }
    // Tool to highlight current map on mini-map
    function CurrentTile(x, y) {
        World.globalAlpha = 0.5;
        World.fillStyle = "red";
        World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
    }
    World.fillStyle = "black";
    World.fillRect(0, 0, WorldMap.width, WorldMap.height);

    World.strokeStyle = "red";
    switch (player.Area) {
        case "First":
            TileImagePainter(0, 1, "OWStart");
            TileImagePainter(1, 1, "OWRTC"); //RTC1
            TileImagePainter(1, 0, "OWBandit"); //Bandit
            TileImagePainter(1, 2, "OWRTC2"); //RTC2
            TileImagePainter(2, 2, "OWCity"); //City
            TileImagePainter(3, 2, "OWRTH"); //RTH
            TileImagePainter(2, 3, "OWForest"); //Forest
            TileImagePainter(2, 4, "OWForest2"); //Forest2
            TileImagePainter(3, 1, "OWRTW"); //RTW
            TileImagePainter(3, 0, "OWRTW2"); //RTW2
            TileImagePainter(4, 0, "OWWitch"); //Witch
            World.font = "2em Arial";
            if (typeof MapIcons.skull_01 !== 'undefined') {
                World.drawImage(MapIcons.skull_01, WorldMap.width * 0.25, WorldMap.height * 0.05, Width / 2, Height / 2);
            } else {
                World.strokeText("B", WorldMap.width * 0.27, WorldMap.height * 0.17, Width / 2, Height / 2);
            }
            if (House.Owned == true) {
                TilePainter(4, 2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                if (typeof MapIcons.Home !== 'undefined') {
                    World.drawImage(MapIcons.Home, WorldMap.width * 0.85, WorldMap.height * 0.45, Width / 2, Height / 2);
                } else {
                    World.strokeText("H", WorldMap.width * 0.87, WorldMap.height * 0.57);
                }
            }

            World.font = "1em Arial";
            World.strokeText("⇩", WorldMap.width * 0.485, WorldMap.height)


            switch (player.Map) {
                case "Start":
                    CurrentTile(0, 1);
                    break;
                case "RoadToCity":
                    CurrentTile(1, 1);
                    break;
                case "Bandit":
                    CurrentTile(1, 0);
                    break;
                case "RoadToCity2":
                    CurrentTile(1, 2);
                    break;
                case "City":
                    CurrentTile(2, 2);
                    break;
                case "RoadToHome":
                    CurrentTile(3, 2);
                    break;
                case "RoadToWitch":
                    CurrentTile(3, 1);
                    break;
                case "RoadToWitch2":
                    CurrentTile(3, 0);
                    break;
                case "Witch":
                    CurrentTile(4, 0);
                    break;
                case "Forest":
                    CurrentTile(2, 3);
                    break;
                case "Forest2":
                    CurrentTile(2, 4);
                    break;
            }
            break;
        case "Second":
            TileImagePainter(2, 0, "OWPTO");
            TileImagePainter(1, 0, "OWCave1");
            TileImagePainter(0, 0, "Cave2");
            TileImagePainter(0, 1, "Cave3");
            TileImagePainter(0, 2, "Cave4");
            TileImagePainter(2, 1, "OWPTO2");
            TileImagePainter(2, 2, "OWOutlaws");
            TileImagePainter(3, 1, "OWFarm");
            World.font = "2em Arial";
            World.strokeText("O", WorldMap.width * 0.46, WorldMap.height * 0.57);
            World.strokeText("F", WorldMap.width * 0.66, WorldMap.height * 0.37);

            World.font = "1em Arial";
            World.strokeText("⇧", WorldMap.width * 0.485, WorldMap.height * 0.07)

            switch (player.Map) {
                case "PathToOutlaws":
                    CurrentTile(2, 0);
                    break;
                case "PathToOutlaws2":
                    CurrentTile(2, 1);
                    break;
                case "Farm":
                    CurrentTile(3, 1);
                    break;
                case "Outlaws":
                    CurrentTile(2, 2);
                    break;
                case "Cave1":
                    CurrentTile(1, 0);
                    break;
                case "Cave2":
                    CurrentTile(0, 0);
                    break;
                case "Cave3":
                    CurrentTile(0, 1);
                    break;
                case "Cave4":
                    CurrentTile(0, 2);
                    break;
            }
            break;
        case "Mountain":
            TileImagePainter(1, 2, "MountainShrinePath");
            TileImagePainter(0, 2, "MountainShrine");
            TileImagePainter(2, 2, "MountainStart");
            TileImagePainter(2, 3, "MountainClimb");
            TileImagePainter(2, 4, "MountainClimb2");
            TileImagePainter(3, 4, "MountainClimb3");
            TileImagePainter(4, 4, "MountainClimb4");
            TileImagePainter(4, 3, "MountainClimb5");
            TileImagePainter(4, 2, "MountainClimb6");
            TileImagePainter(4, 1, "MountainClimb7");
            TileImagePainter(4, 0, "MountainClimb8");
            TileImagePainter(3, 0, "MountainClimb9");
            TileImagePainter(2, 0, "MountainPlateau");
            //World.font = "1em Arial";
            //World.strokeText("⇧", WorldMap.width * 0.485, WorldMap.height * 0.07)
            //World.strokeText("⇦", 0, WorldMap.height * 0.525)
            switch (player.Map) {
                case "MountainStart":
                    CurrentTile(2, 2);
                    break;
                case "MountainShrinePath":
                    CurrentTile(1, 2);
                    break;
                case "MountainShrine":
                    CurrentTile(0, 2);
                    break;
                case "MountainClimb":
                    CurrentTile(2, 3);
                    break;
                case "MountainClimb2":
                    CurrentTile(2, 4);
                    break;
                case "MountainClimb3":
                    CurrentTile(3, 4);
                    break;
                case "MountainClimb4":
                    CurrentTile(4, 4);
                    break;
                case "MountainClimb5":
                    CurrentTile(4, 3);
                    break;
                case "MountainClimb6":
                    CurrentTile(4, 2);
                    break;
                case "MountainClimb7":
                    CurrentTile(4, 1);
                    break;
                case "MountainTribe":
                    CurrentTile(3, 1);
                    break;
                case "MountainClimb8":
                    CurrentTile(4, 0);
                    break;
                case "MountainClimb9":
                    CurrentTile(3, 0);
                    break;
                case "MountainPlateau":
                    CurrentTile(2, 0);
                    break;
            }
            break;
    }
};

// ⇦ ⇨ ⇩ ⇧ Unicode arrows
DocId("EssenceOptions").addEventListener("click", function () {
    DisplayNone();
    DocId("EssenceOptionsMenu").style.display = 'block';
    DocId("MaxMenu").style.display = 'none';
    DocId("EssenceAuto").value = Settings.EssenceAuto ? "Essence Auto" : "Essence Manual";
    DocId("ManualGrowth").style.display = 'block';
    DocId("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
    DocId("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
    DocId("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
    DocId("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});

DocId("BoobsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBoobs > 1) {
        Settings.MaxLimbs.MaxBoobs--;
    }
    DocId("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
DocId("BoobsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBoobs++;
    DocId("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
DocId("VaginasLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxVaginas > 0) {
        Settings.MaxLimbs.MaxVaginas--;
    }
    DocId("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
DocId("VaginasMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxVaginas++;
    DocId("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
DocId("DicksLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxDicks > 0) {
        Settings.MaxLimbs.MaxDicks--;
    }
    DocId("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
DocId("DicksMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxDicks++;
    DocId("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
DocId("BallsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBalls > 0) {
        Settings.MaxLimbs.MaxBalls--;
    }
    DocId("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});
DocId("BallsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBalls++;
    DocId("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});


DocId("NoExtra").addEventListener("click", function () {
    if (DocId("MaxMenu").style.display == 'none') {
        DocId("MaxMenu").style.display = 'block';
        DocId("NoExtra").value = "Hide";
    } else {
        DocId("MaxMenu").style.display = 'none';
        DocId("NoExtra").value = "Max boobs/dicks etc";
    }
});
var MobileButtons = false;

DocId("MobileButtons").addEventListener("click", function () {
    switch (MobileButtons) {
        case true:
            DocId("buttons").style.width = 18 + "%";
            DocId("buttons").style.maxWidth = 260 + "px";
            DocId("FirstButtons").style.display = 'none';
            DocId("SecondButtons").style.display = 'none';
            DocId("MobileButtons").value = "Buttons";
            MobileButtons = false;
            break;
        default:
            DocId("buttons").style.width = 70 + "vw";
            DocId("buttons").style.maxWidth = 70 + "vw";
            DocId("FirstButtons").style.display = 'block';
            DocId("MobileButtons").value = "Buttons";
            MobileButtons = true;
            break;
    }
});

function StatusButtonSystem() {
    if (window.innerHeight < 400) {
        DocId("FirstButtons").style.display = 'none';
        DocId("SecondButtons").style.display = 'none';
        DocId("MoreButtons").style.display = 'inline-block';
        DocId("LessButtons").style.display = 'inline-block';
        DocId("MobileButtons").style.display = 'inline-block';
    } else if (window.innerHeight < 800) {
        DocId("FirstButtons").style.display = 'block';
        DocId("SecondButtons").style.display = 'none';
        DocId("MoreButtons").style.display = 'inline-block';
        DocId("LessButtons").style.display = 'inline-block';
        DocId("MobileButtons").style.display = 'none';
    } else {
        DocId("SecondButtons").style.display = 'block';
        DocId("FirstButtons").style.display = 'block';
        DocId("MoreButtons").style.display = 'none';
        DocId("LessButtons").style.display = 'none';
        DocId("MobileButtons").style.display = 'none';
    }
}
function TribeQuests() {
    const x = DocId("TribeQuestsMenu");
    while (x.hasChildNodes()) {
        x.removeChild(x.lastChild);
    }

    const TribeDragon = ButtonButton("Dragon", "Prove you worth.");
    TribeDragon.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }
        const Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TribeQuests();
        });
        const Decline = InputButton("Decline");
        Decline.addEventListener("click", function () {
            TribeQuests();
        });
        document.getElementById("ShrineQuestsMenu").appendChild(Accept);
        document.getElementById("ShrineQuestsMenu").appendChild(Decline);
    });

    const TribeDragonReward = ButtonButton("-reward");
    TribeDragonReward.addEventListener("click", function () {
        const index = player.Quests.findIndex(e => e.Name == "");
        player.Quests.splice(index, 1);
        TribeQuests();
    });
};

function TribeShopFunc() {
    const Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div"),
        h1 = document.createElement("h1"),
        h1text = document.createTextNode("Tribe shop");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    const ShopMenu = document.createElement("div"),
        row1 = document.createElement("div"),
        input1 = ButtonButton("input");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    const input2 = ButtonButton("input");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    ShopMenu.appendChild(row1);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}

function TribeChiefFunc() {
    const Npc = document.getElementById("Npcs")
    CleanNpcs();

    const div = document.createElement("div");
    // Title / Name
    div.appendChild(TitleText("Tribe chief"));
    // Textbox
    const p = TextBox();
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    const input1 = ButtonButton("input");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    const input2 = ButtonButton("input");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    div.appendChild(LeaveNpc());

    Npc.appendChild(div);
    Npc.style.display = 'block';
}

function TribeChiefWifeFunc() {
    const Npc = document.getElementById("Npcs")
    CleanNpcs();

    const div = document.createElement("div");
    // Title / Name
    div.appendChild(TitleText("Tribe chief's Wife"));
    // Textbox
    const p = TextBox();
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    const input1 = ButtonButton("input");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    const input2 = ButtonButton("input");
    input2.addEventListener("click", function () {
        TestDialog();
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    div.appendChild(LeaveNpc());

    Npc.appendChild(div);
    Npc.style.display = 'block';

}

function TestDialog() {
    const Npc = document.getElementById("Npc");
    CleanNpcs();

    h1.appendChild(TitleText("Testsson"));
    Npc.appendChild(h1);

    const p = TextBox();
    Npc.appendChild(p);

    const Inputs = document.createElement("div");

    const Option1 = ButtonButton("Option 1");
    Option1.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        const Option11 = ButtonButton("Option 1-1");
        Option11.addEventListener("click", function () {

        });
        Inputs.appendChild(Option11);

        const Option12 = ButtonButton("Option 1-2");
        Option12.addEventListener("click", function () {

        });
        Inputs.appendChild(Option12);
    });
    Inputs.appendChild(Option1);

    const Option2 = ButtonButton("Option 2a");
    Option2.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        const Option21 = ButtonButton("Option 2-1");
        Option21.addEventListener("click", function () {

        });
        Inputs.appendChild(Option21);

        const Option22 = ButtonButton("Option 2-2");
        Option22.addEventListener("click", function () {

        });
        Inputs.appendChild(Option22);
    });
    Inputs.appendChild(Option2);

    Npc.appendChild(Inputs);
}
// Movement buttons
var mousedowner = false,
    mouseX, mouseY,
    keymap = {}; // You could also use an array

document.onkeydown = document.onkeyup = function (e) {
    e = e || event; // to deal with IE
    keymap[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
}

function MovementEngine(e) {
    if (!battle && !GamePaused) {
        const startarea = DocId("hem"),
            MapRect = startarea.getBoundingClientRect();
        if (battle) {
            return;
        }
        if ((keymap[37] || keymap[65]) && sprite.x > 0) {
            sprite.x -= grid / 2;
        } else if ((keymap[39] || keymap[68]) && sprite.x + grid * sprite.Size < startarea.width) {
            sprite.x += grid / 2;
        }
        if ((keymap[38] || keymap[87]) && sprite.y > 0) {
            sprite.y -= grid / 2; // * sprite.Size;
        } else if ((keymap[40] || keymap[83]) && sprite.y + grid * sprite.Size < startarea.height) {
            sprite.y += grid / 2; // * sprite.Size;
        }
        if (mousedowner) {
            if (mouseX - MapRect.left > sprite.x + 1.2 * grid && sprite.x + grid * sprite.Size < startarea.width) {
                sprite.x += grid / 2; // * sprite.Size;
            } else if (mouseX - MapRect.left + grid * 0.2 < sprite.x && sprite.x > 0) {
                sprite.x -= grid / 2; // * sprite.Size;
            }
            if (mouseY - MapRect.top > sprite.y + 1.2 * grid && sprite.y < startarea.height) {
                sprite.y += grid / 2; // * sprite.Size;
            } else if (mouseY - MapRect.top + grid * 0.2 < sprite.y && sprite.y > 0) {
                sprite.y -= grid / 2; // * sprite.Size;
            }
        }
        Touching();
        CheckDoor();
    };
};

setInterval(() => {
    MovementEngine();
}, 40);

DocId("hem").addEventListener('mousedown', function (e) {
    mousedowner = true;
    mouseX = e.pageX;
    mouseY = e.pageY;
});
DocId("hem").addEventListener('mousemove', function (e) {
    if (mousedowner) {
        if (mouseX != e.pageX || mouseY != e.pageY) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }
    }
});
document.addEventListener('mouseup', function () {
    mousedowner = false;
});

DocId("hem").addEventListener('touchstart', function (e) {
    if (!mousedowner) {
        mousedowner = true;
        mouseX = e.touches[e.touches.length - 1].clientX;
        mouseY = e.touches[e.touches.length - 1].clientY;
    }
});

document.addEventListener('touchend', function () {
    if (mousedowner) {
        mousedowner = false;
    }
});

DocId("hem").addEventListener('touchmove', function (e) {
    if (mousedowner) {
        if (mouseX != e.touches[e.touches.length - 1].clientX || e.touches[e.touches.length - 1].clientY) {
            mouseX = e.touches[e.touches.length - 1].clientX;
            mouseY = e.touches[e.touches.length - 1].clientY;
        }
    }
});
function EncounterCave1() {
    var RacesCave = ["Goblin", "Imp"];
    var OP = new enemy("Lesser", RandomString(RacesCave), RandomInt(7, 10), RandomInt(7, 10), RandomInt(7, 10), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(6, 15), 120, 150, RandomInt(25, 35), RandomInt(15, 30),
        'red', grid, RandomInt(120, 140));
    OP.EssenceGiver(350);
    OP.FatMuscle(8, 40);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave2() {
    var RacesCave2 = ["Goblin", "Demon"];
    var OP = new enemy("Cave", RandomString(RacesCave2), RandomInt(12, 18), RandomInt(12, 18), RandomInt(12, 18), RandomInt(8, 12),
        RandomInt(5, 8), RandomInt(16, 25), 190, 210, RandomInt(40, 60), RandomInt(35, 60),
        'red', grid, RandomInt(150, 180));
    OP.EssenceGiver(600);
    OP.FatMuscle(8, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave3() {
    var RacesCave3 = ["Dhampir", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(25, 40), RandomInt(25, 40), RandomInt(22, 38), RandomInt(18, 22),
        RandomInt(15, 18), RandomInt(50, 70), 370, 400, RandomInt(65, 85), RandomInt(55, 80),
        'red', grid, RandomInt(160, 190));
    OP.EssenceGiver(850);
    OP.FatMuscle(8, 70);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave4() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Lesser", RandomString(RacesCave4), RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 420, 550, RandomInt(85, 110), RandomInt(70, 120),
        'purple', grid, RandomInt(150, 180));
    OP.EssenceGiver(2200);
    OP.FatMuscle(10, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}
//var MountainHalfRaces = ["human", "elf"]
//var MountainRaces = ["dragon", "giant", "human", "harpy", ""]

// Mountain opponents
function DragonNameGiver(who) {
    const FemaleFirstNames = ["Adhonth", "Rindyth", "Hendro", "Frarlei", "Fukyss", "Fover", "Chaghess", "Indarrass", "Aeghentanth", "Dodhisser", "Nisses", "Rephes", "Eny", "Qierleo", "Qirass", "Zevno", "Persoan", "Frairmossolth", "Bayzassath", "Pullontinth"];
    const MaleFirstNames = ["Kalzreot", "Pendryss", "Xierdiss", "Frayvrag", "Cyddrunth", "Zergyr", "Cennir", "Akosdiat", "Jygoda", "Qothasdyr", "Bryrgusdirth", "Frorvedeg", "Kytidum", "Jialdrum", "Pegis", "Ymrirth", "Dayddrog", "Byrvog", "Brenneg", "Kairranth"];
    const LastNames = [""];
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "dickgirl":
        case "doll":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}


function EncounterMaiden() {
    const MountainHalfRaces = ["human", "elf"]; //
    var OP = new enemy("Maiden", RandomString(MountainHalfRaces), RandomInt(1, 10), RandomInt(1, 10), RandomInt(20, 50), RandomInt(0, 5),
        RandomInt(5, 20), RandomInt(0, 5), 1500, 2000, RandomInt(50, 250), RandomInt(30, 100),
        "Pink", grid, RandomInt(150, 170));
    OP.GenderLock(1500, "female");
    OP.FatMuscle(15, 55);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
    /* Strong virgins, they are not virgin by choice it's their culture to not offer themself to anyone weaker
    which have made them very strong over generation but there is a lot of desire to be dominated.
    After beating them change their title to depraved or something.
    update: I think I prefer to say they are pure after thay have had say, feels odd to say they are 
    not pure by having sex when their religion is based on sex & breeding.
    */

}

function EncounterDragonKind() {
    const MountainHalfRaces = ["human", "elf"]; //
    var OP = new enemy("Young", "Dragonkind", RandomInt(10, 50), RandomInt(10, 50), RandomInt(10, 30), RandomInt(30, 50),
        RandomInt(10, 50), RandomInt(10, 60), 5000, 5000, RandomInt(50, 500), RandomInt(50, 500),
        "Red", grid, RandomInt(160, 240), RandomString(MountainHalfRaces));
    OP.EssenceGiver(1500);
    OP.FatMuscle(12, 70);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterHarpy() {
    var OP = new enemy("Young", "Harpy", RandomInt(10, 30), RandomInt(30, 70), RandomInt(0, 20), RandomInt(10, 60),
        RandomInt(0, 10), RandomInt(20, 80), 6000, 4500, RandomInt(50, 500), RandomInt(50, 500),
        "Yellow", grid, RandomInt(70, 140));
    OP.EssenceGiver(1500);
    OP.FatMuscle(8, 45);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterAnthroDragon() {
    var OP = new enemy("Young", "Anthro dragon", RandomInt(30, 50), RandomInt(20, 50), RandomInt(25, 50), RandomInt(10, 30),
        RandomInt(20, 60), RandomInt(20, 70), 8000, 8000, RandomInt(100, 400), RandomInt(100, 300),
        "Red", grid, RandomInt(160, 220));
    OP.EssenceGiver(1500);
    OP.FatMuscle(12, 80);
    StandardEnemy(OP);
    DragonNameGiver(OP);
    return OP;
}

function EncounterAnthroDragon2() {
    var OP = new enemy("", "Anthro dragon", RandomInt(40, 60), RandomInt(30, 60), RandomInt(35, 60), RandomInt(15, 35),
        RandomInt(25, 65), RandomInt(25, 75), 8500, 8500, RandomInt(150, 470), RandomInt(140, 380),
        "Red", grid, RandomInt(170, 230));
    OP.EssenceGiver(2300);
    OP.FatMuscle(12, 80);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterShapeDragon() {
    var OP = new enemy("", "Dragon", RandomInt(60, 100), RandomInt(40, 80), RandomInt(40, 70), RandomInt(30, 50), RandomInt(20, 80),
        RandomInt(20, 70), 12000, 12000, RandomInt(200, 500), RandomInt(160, 450),
        "Red", grid * 1.1, RandomInt(300, 600));
    // Feral dragon when fighting Shapeshift to anthro when having sex.
    OP.EssenceGiver(3500);
    OP.FatMuscle(10, 220);
    StandardEnemy(OP);
    NameGiver(OP);
}
class enemy {
    constructor(
        EnemyName, EnemyRace, Strength, Endurance, Willpower, Charm,
        Intelligence, SexSkill, EnemyHealth, EnemyWillHealth, ExpDrop, GoldDrop,
        Color, Size, Height, EnemySecondRace = EnemyRace) {
        this.Name = EnemyName;
        this.Race = EnemyRace;
        this.Str = Strength;
        this.End = Endurance;
        this.Will = Willpower;
        this.Charm = Charm;
        this.Int = Intelligence;
        this.SexSkill = SexSkill;
        this.Health = EnemyHealth;
        this.WillHealth = EnemyWillHealth;
        this.Exp = ExpDrop;
        this.Gold = GoldDrop;
        this.Color = Color;
        this.Size = Size;
        this.Height = Height;
        this.SecondRace = EnemySecondRace;
        // Under is non input values
        this.FullHealth = EnemyHealth;
        this.FullWillHealth = EnemyWillHealth;
        this.Arousal = 0;
        this.Orgasm = 0;
        this.Dicks = [];
        this.Balls = [];
        this.Boobies = [Boob = {
            Size: 0,
            Type: this.Race,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 0
        }];
        this.Anal = [];
        this.Pussies = [];
        this.Cumin = {
            Stomach: 0,
            Pussy: 0,
            Anal: 0
        };
    };
    // Testing class prototypes... Think I prefer this method over functions maninly becasue use of "this"
    FatMuscle(minfatprocent, minweight) {
        const fatratio = RandomInt(minfatprocent, minfatprocent + 10),
            muscleration = 100 - fatratio;
        this.Fat = minweight / 200 * fatratio;
        this.Muscle = minweight / 200 * muscleration;
        this.Weight = minweight + this.Fat + this.Muscle;
    };

    GenderLock(amount, Genderlock) { // gives exact gender
        const Dick = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                Virgin: true
            };
        };
        const Ball = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                CumMax: 1 / 3 * Math.PI * Math.pow(Math.ceil(Math.sqrt(v)), 3),
                Cum: 1 / 6 * Math.PI * Math.pow(Math.ceil(Math.sqrt(v)), 3),
                CumRate: 0,
                CumBaseRate: 0.5
            };
        };
        const Boob = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                Milk: 0,
                MilkBaseRate: 0,
                MilkRate: 0,
                MilkMax: 1 / 3 * Math.PI * Math.pow(Math.ceil(Math.sqrt(v)), 3)
            };
        };
        const Pussy = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                Virgin: true
            }
        }
        if (Genderlock == "male") {
            this.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Femi = 0;
        } else if (Genderlock == "cuntboy") {
            this.Femi = RandomInt(0, 25);
            this.Masc = RandomInt(0, 25);
            this.Pussies.push(Pussy(Math.round(Math.max(amount / 3, Math.random() * amount))));
        } else if (Genderlock == "herm") {
            this.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            this.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        } else if (Genderlock == "dickgirl") {
            this.Femi = RandomInt(0, 25);
            this.Masc = RandomInt(0, 25);
            this.Dicks.push(Dick(Math.round(Math.max(amount / 3, Math.random() * amount))));
            if (this.Boobies.length > 0) {
                this.Boobies.pop()
            };
            this.Boobies.push(Boob(Math.round(Math.max(amount / 3, Math.random() * amount))));
        } else if (Genderlock == "female") {
            this.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Masc = 0;
        }
    }

    EssenceGiver(amount, GenderPref = 0) { // Gives random gender
        const a = RandomInt(1, 14) + GenderPref;
        /** Negative Genderpref gives more males and postive more girls. 
               e.g. -5 makes it's so only males to herm can spawn */
        if (a < 4) { // Boy
            this.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Femi = 0;
        } else if (a < 6) { // Dickgirl
            this.GenderLock(amount, "dickgirl");
        } else if (a < 9) { // Herm
            this.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            this.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        } else if (a < 11) { // Cuntboy
            this.GenderLock(amount, "cuntboy");
        } else { // Girl
            this.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Masc = 0;
        };
    };
}

// Feral concept list
//var FeralEnemy = ["Squirrel", "Rabbit", "Cat", "Wolf", "Boar", "Deer", "Horse", "Lion", "Bear", "Rhino", "Elephant", "Dragon"];
function NameGiver(who) {
    const FemaleFirstNames = ["Jaiden", "Judy", "Nia", "Kelis", "Chelsea", "Amani", "Veronica", "Kyra", "Lauryn", "Alicja", "Tate", "Colleen", "Melody", "Pippa", "Keziah", "Melissa", "Lana", "Marie", "Molly", "Sandra", "Dannielle", "Yusra", "Laiba", "Gabrielle", "Syeda", "Amirah",
            "Lindsay", "Karly", "Itzel", "Clarissa", "Ansley", "Leanna", "Briley", "Cara", "Katelynn", "Susan", "Alexis", "Kaia", "Marlee", "Emmy", "Genevieve", "Melany", "Jaylynn", "Amari", "Sharon", "Miah", "Karen", "Kylie"
        ],
        MaleFirstNames = ["Jerome", "Napoleon", "Duncan", "Brant", "Chance", "Dewitt", "Brendan", "Asim", "Faith", "Macy", "Landon", "Sulaiman", "Iestyn", "Gordon", "Hector", "Haris", "Lee", "Simran", "Ronnie", "Rishi", "Bartosz", "Shelley", "Virgil", "Howard", "Rio", "Prince",
            "Glenn", "Daniel", "Felipe", "Willie", "Aden", "Brennen", "Cale", "Arnav", "Quentin", "River", "Clarence", "Jamal", "Luca", "Brent", "Tyrone", "Ryan", "Damien", "Carmelo", "Reese", "Braiden", "Beckham"
        ],
        LastNames = ["Paine", "Ward", "Bostock", "Devine", "Heath", "Bone", "Dupont", "Patterson", "Garza", "Stein", "Madden", "Francis", "Villanueva", "Perry", "Lyssa", "Beach", "Crouch", "Sharp", "Clifford", "Wade", "Vargas", "Hatfield", "Mata", "Lozano", "Everett",
            "Krueger", "Jimenez", "Fitzpatrick", "Nelson", "Scott", "Vaughn", "Lee", "Hodge", "Blackburn", "Wall", "Hernandez", "Valdez", "Summers", "Mercado", "Villarreal", "Mitchell", "Duran", "David", "Black", "Hopkins", "Hughes", "Rangel"
        ];
    //LastNames.RemoveDup();
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "dickgirl":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
        case "doll":
            who.FirstName = RandomInt(0, 10) < 5 ? RandomString(FemaleFirstNames) : RandomString(MaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}

function EvilNameGiver(who) {
    const EvilMaleFirstNames = [
            "Neclord", "Virion", "Dario", "Grumio", "Auron", "Jaymes", "Fark", "Cidolfus", "Bartholomew", "Arthur"
        ],
        EvilFemaleFirstNames = [
            "Autumn", "Imeena", "Margorie", "Draven", "Lauden", "Ethel", "Cat", "Raven", "Senka", "Jinx"
        ],
        EvilLastNames = [
            "Crimson", "Kane", "Duke", "Interfector", "Geulimja", "Ebonywood", "Grove", "Helion", "Church", "Geulimja", "Moonfall", "Winter", "Hart", "Calarook", "Crypt", "Wolf", "Rex", "Fadington", "Maganti", "Hook"
        ];
    //EvilMaleFirstNames.RemoveDup();
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(EvilMaleFirstNames);
            break;
        case "hermaphrodite":
        case "dickgirl":
        case "female":
            who.FirstName = RandomString(EvilFemaleFirstNames);
            break;
        case "doll":
            who.FirstName = RandomInt(0, 10) < 5 ? RandomString(EvilFemaleFirstNames) : RandomString(EvilMaleFirstNames);
            break;
    }
    who.LastName = RandomString(EvilLastNames);
}

function RandomPos(who) {
    who.XPos = RandomInt(2, 18) * grid;
    who.YPos = RandomInt(2, 18) * grid;
}

function StandardEnemy(who) {
    RandomPos(who);
    RaceBonus(who);
    EssenceCheck(who);
    if (who.Pussies.length > 0) {
        if (RandomInt(1, 5) < 5) {
            who.Pussies[0].Virgin = false;
        }
    }
    if (who.Dicks.length > 0) {
        if (RandomInt(1, 5) < 5) {
            who.Dicks[0].Virgin = false;
        }
    }
}

// Encounter function
function EncounterStart() {
    const Races = ["Human", "Halfling"],
        Names = ["Commoner", "Farmer", "Thug"]
    let OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    OP.EssenceGiver(70);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function RespawnBlocker() {
    var Races = ["Human", "Halfling"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    OP.EssenceGiver(50);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    NameGiver(OP);
    OP.XPos = 99 * grid;
    OP.YPos = 99 * grid;
    return OP;
}

function animalSpawn(maxSize) { // Here's the mess of concept code
    var randomAnimalScore = RandomInt(0, Math.floor(Math.min(Math.pow(maxSize / 10, 0.5), FeralEnemy.length))); // Spawns animals based on height - wolves and lower at start of the game
    console.log("RandScore: " + randomAnimalScore);
    var essence = 10 * Math.max(1, Math.pow(randomAnimalScore, 2)); //The larger the creature, the greater its essence
    console.log("Essence: " + essence);
    var M = 0;
    var F = 0; //Only males or females, no intersex
    console.log("M: " + M + " F: " + F);
    if (Math.random() > 0.5)
        M = essence;
    else F = essence;
    var OP = new enemy("Feral", // Always named feral for description
        FeralEnemy[randomAnimalScore], // Race is their species 
        M, F, //Essence!
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Strength based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Endurance based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Unused willpower based on size
        0, 0, 0, 0, 0, // No charm, Intelligence, SexSkill, Arousal, or Orgasm
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore),
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore), // HP and Will based on size
        RandomInt(2, 18) * grid, RandomInt(2, 18) * grid, // Same positioning
        RandomInt(Math.floor(randomAnimalScore / 2), Math.floor(randomAnimalScore * 1.5)), RandomInt(randomAnimalScore + 1, (randomAnimalScore + 1) * 10), // XP and gold based on size 
        'Chocolate', // Why not
        grid * (Math.floor(randomAnimalScore / 4) + 0.4), // Thought this determined dimensions, was supposed to be steps based on size
        Math.max(0.5, Math.pow(3, randomAnimalScore / 2)), // Why does weight affect size appearance?
        Math.pow(5, randomAnimalScore), // Massive sizes!
        Math.pow(2, randomAnimalScore), // Muscle?
        Math.pow(2, randomAnimalScore)); // Fat?
    EssenceCheck(OP); // They still have genitals
    OP.LastName = ""; // No named animals
    return OP;
}

function EncounterPath1() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6),
        RandomInt(3, 6), RandomInt(7, 10), 80, 80, RandomInt(20, 25), RandomInt(8, 18),
        'Chocolate', grid, RandomInt(140, 180));
    OP.EssenceGiver(80);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPath2() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7),
        RandomInt(4, 7), RandomInt(8, 12), 100, 100, RandomInt(23, 30), RandomInt(12, 25),
        'green', grid, RandomInt(140, 180));
    OP.EssenceGiver(100);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBandit() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Bandit", RandomString(RacesBandit), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15),
        RandomInt(8, 15), RandomInt(10, 15), 170, 170, RandomInt(30, 45), RandomInt(30, 55),
        'tomato ', grid, RandomInt(140, 180));
    OP.GenderLock(600, "male");
    OP.FatMuscle(7, 70);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBanditLord() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Banditlord", RandomString(RacesBandit), RandomInt(20, 35), RandomInt(10, 15), RandomInt(20, 35), RandomInt(20, 35),
        RandomInt(20, 35), RandomInt(40, 60), 350, 300, RandomInt(55, 85), RandomInt(75, 150),
        'tomato', grid * 1.5, RandomInt(160, 200));
    OP.GenderLock(1200, "male");
    OP.FatMuscle(7, 80);
    StandardEnemy(OP);
    var startarea = document.getElementById("hem");
    OP.XPos = startarea.width / 2 - grid;
    OP.YPos = grid;
    NameGiver(OP);
    return OP;
}

function EncounterForest() {
    var RacesForest = ["Elf", "Amazon"];
    var OP = new enemy("Forest", RandomString(RacesForest), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    OP.EssenceGiver(400, 5);
    OP.FatMuscle(11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest2() {
    var RacesForest2 = ["Elf", "Fairy"];
    var OP = new enemy("Forest", RandomString(RacesForest2), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    OP.EssenceGiver(500, 5);
    OP.FatMuscle(11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPathToWitch2() {
    var RacesWitch = ["Human", "Elf", "Dark elf"];
    var OP = new enemy("Witch", RandomString(RacesWitch), RandomInt(1, 5), RandomInt(3, 7), RandomInt(7, 16), RandomInt(10, 40),
        RandomInt(30, 70), RandomInt(20, 80), 150, 300, RandomInt(30, 60), RandomInt(30, 70),
        'IndianRed', grid, RandomInt(140, 170));
    OP.EssenceGiver(450);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    switch (CheckGender(OP)) {
        case "male":
        case "cuntboy":
        case "doll":
            OP.Name = "Wizard"
            break;
        default:
            OP.Name = "Witch"
            break;
    }
    return OP;
}
function EnemyImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {},
        loaded = 0;
    if (Array.isArray(arr)) {
        for (let e of arr) {
            let img = new Image();
            img.onload = EmageLoaded;
            img.src = "Res/" + e + ".png";
            images[e] = img;
        }
    } else {
        return
    }

    function EmageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}
var Enemy_SpriteImages = {};
const EnemySpriteLoader = EnemyImageLoad(["orc", "troll", "witch", "wizard"], function (images) {
    Enemy_SpriteImages = images;
});

function PrintEnemies() {
    const startarea = document.getElementById("hem"),
        ctx = startarea.getContext("2d");
    for (let e = 0; e < enemies.length; e++) {
        const ee = enemies[e],
            imageRace = ee.Race.toLowerCase(),
            imageName = ee.Name.toLowerCase(); // + gender?
        function Color() {
            const grd = ctx.createLinearGradient(ee.XPos + ee.Size / 3, 0, ee.XPos + ee.Size * 0.6, 0);
            switch (CheckGender(ee)) {
                case "cuntboy":
                    grd.addColorStop(0, "blue");
                    grd.addColorStop(1, "pink");
                    return grd;
                case "female":
                    return "rgb(231, 84, 128)";
                case "dickgirl":
                    grd.addColorStop(0, "pink");
                    grd.addColorStop(1, "purple");
                    return grd;
                case "male":
                    return "Blue";
                case "hermaphrodite":
                    return "Purple";
                case "doll":
                    return "Beige";
            }
            return color
        }
        for (let i = e + 1; i < enemies.length; i++) {
            if (ee.XPos == enemies[i].XPos) {
                ee.XPos = RandomInt(2, 18) * grid;
            }
        }
        ctx.fillStyle = ee.Color;
        if (typeof Enemy_SpriteImages[imageRace] !== "undefined" || typeof Enemy_SpriteImages[imageName] !== 'undefined') {
            const image = typeof Enemy_SpriteImages[imageName] !== 'undefined' ? Enemy_SpriteImages[imageName] : Enemy_SpriteImages[imageRace];
            ctx.drawImage(image, ee.XPos, ee.YPos, ee.Size * 2, ee.Size * 2); // Banditlord becomes huge... maybe insert a math.min?
            ctx.fillStyle = Color();
            ctx.fillRect(ee.XPos + ee.Size * 0.75, ee.YPos - ee.Size * 0.4, ee.Size / 3, ee.Size / 3);
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "2vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(ee.Name + " " + ee.Race, ee.XPos + ee.Size * 0.75, ee.YPos - ee.Size * 0.5);
        } else {
            ctx.fillRect(ee.XPos, ee.YPos, ee.Size, ee.Size);
            ctx.fillStyle = Color();
            ctx.fillRect(ee.XPos + ee.Size / 3, ee.YPos + ee.Size / 3, ee.Size / 3, ee.Size / 3);
            ctx.fillStyle = "Black";
            ctx.strokeRect(ee.XPos + ee.Size / 3, ee.YPos + ee.Size / 3, ee.Size / 3, ee.Size / 3);
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "2vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(ee.Name + " " + ee.Race, ee.XPos + ee.Size / 2, ee.YPos);
        }
    }
};
function FirstWave() {
    const RacesCave = ["Goblin", "Imp"];
    const OP = new enemy("Guard", RandomString(RacesCave), RandomInt(10, 13), RandomInt(10, 13), RandomInt(10, 13), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(9, 18), 150, 180, RandomInt(30, 40), RandomInt(20, 35),
        'red', grid, RandomInt(120, 140));
    OP.EssenceGiver(250);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SecondWave() {
    const RacesCave2 = ["Goblin", "Demon"];
    const OP = new enemy("Guard", RandomString(RacesCave2), RandomInt(15, 21), RandomInt(15, 21), RandomInt(15, 21), RandomInt(11, 15),
        RandomInt(8, 11), RandomInt(19, 28), 220, 240, RandomInt(45, 65), RandomInt(40, 65),
        'red', grid, RandomInt(150, 180));
    OP.EssenceGiver(270);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function ThirdWave() {
    const RacesCave3 = ["Dhampir", "Demon"];
    const OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(30, 45), RandomInt(30, 45), RandomInt(27, 43), RandomInt(23, 27),
        RandomInt(20, 23), RandomInt(55, 75), 420, 450, RandomInt(75, 95), RandomInt(65, 85),
        'red', grid, RandomInt(160, 190));
    OP.EssenceGiver(300);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function FourthWave() {
    const RacesCave4 = ["Succubus", "Incubus"];
    const OP = new enemy("Guard", RandomString(RacesCave4), RandomInt(10, 15), RandomInt(50, 65), RandomInt(55, 70), RandomInt(55, 70),
        RandomInt(35, 55), RandomInt(95, 135), 500, 600, RandomInt(110, 140), RandomInt(90, 140),
        'purple', grid, RandomInt(150, 180));
    OP.EssenceGiver(2000);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SuccubusBoss() {
    const RacesCave4 = ["Succubus", "Incubus"];
    const OP = new enemy("Mistress", RandomString(RacesCave4), RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    StandardEnemy(OP);
    if (OP.Race == "Succubus") {
        OP.FatMuscle(11, 50);
        OP.Femi = RandomInt(4500, 7000);
        OP.Masc = 0;
        OP.Name = "Mistress";
    } else {
        OP.FatMuscle(7, 70);
        OP.Femi = 0;
        OP.Masc = RandomInt(4500, 7000);
        OP.Name = "Master";
    }
    EvilNameGiver(OP);
    return OP;
}

function SuccubusBossUnique() {
    const OP = new enemy("Dungeon Mistress", "Succubus", RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    OP.GenderLock(13000, "female");
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}
var Dungeon = false,
    Wave = 0;

function SuccubusDungeonFunc() {
    const dungeon = document.getElementById("DungeonSystem")
    while (dungeon.hasChildNodes()) {
        dungeon.removeChild(dungeon.lastChild);
    };

    const div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        div.appendChild(TitleText("Cave dungeon"));
    }

    const p = TextBox();
    div.appendChild(p);
    if (Wave === 5) {
        Wave = 0;
        p.innerHTML = "You beat the dungeon more to come!"
    } else {
        p.innerHTML = `Wave ${Wave + 1}`;
    }

    const input1 = InputButton("Go deeper")
    input1.addEventListener("click", function () {
        enemies = [];
        Dungeon = true;
        if (false) {
            enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBossUnique()];
        } else {
            enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBoss()];
        }
        EnemyIndex = Wave;
        EssenceCheck(enemies[Wave]);
        BattleSetup(enemies[Wave]);
        dungeon.style.display = 'none';
    });
    div.appendChild(input1);
    div.appendChild(LeaveDungeon());

    dungeon.appendChild(div);
    dungeon.style.display = 'block';
}

function DungeonStopButton() {
    DocId("AfterBattle").style.display = 'none';
    Wave++;
    EnemyIndex = Wave;
    if (Wave == 4 && !Flags.BeatSuccubus && false) {
        Flags.BeatSuccubus = true;
        DocId("FirstDungeonText").innerHTML = "Having beaten her you found a teleport shard to a new world,"
        if (House.Portal) {
            DocId("FirstDungeonText").innerHTML += " you can use it at your portal at home!"
        } else {
            DocId("FirstDungeonText").innerHTML += " you should build a portal at your mansion so you can use it."
        }
    }
    SuccubusDungeonFunc();
    return;
};

function DungeonCapture() {
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'none';
    DocId("EmptyButtons").style.display = 'block';
    DocId("EventLog").style.display = 'block';
    DocId("AfterBattle").style.display = 'none';

    House.Dormmates.push(enemies[Wave]);
    Wave++;
    EnemyIndex = Wave;
    SuccubusDungeonFunc();
    return;
};
DocId("DungeonLose").addEventListener("click", function () {
    DocId("Lose").style.display = 'none';
    DocId("LoseStruggle").style.display = 'inline-block';
    DocId("LoseSubmit").style.display = 'inline-block';
    DocId("LosePlayerOrgasm").innerHTML = " ";
    enemies = [RespawnBlocker()];
    Dungeon = false;
    Wave = 0;
    DisplayGame();
});

// change these to document.get... adventlistners
function MakeHerEqual() {
    // Some friendly sex
    Partners.Succubus.Equal = true;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Like += 100;
}

function MakeHerSubmit() {
    // Some rougher sex
    Partners.Succubus.Equal = false;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Submit += 100; // Points so it's possible to change route, but 100 is a lot so this choice matters
}

function UseAndIgonore() {
    // Sex where you skip taking her as partner
}
// Changeing perk menu to a func so I can make a more advanced perk menu e.g. unlocked perk etc..
function PerkMenuFunc() {
    function PerkHandler(perket) {
        player.PerkPoints--;
        player.Perks[perket].Count++
    }
    const div = document.getElementById("LevelMenu");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    const {
        Perks,
        PerkPoints
    } = player;

    const innerdiv = document.createElement("div");
    innerdiv.classList.add("LPMenuInner");

    if (window.innerHeight > 600) { // Testing spawning titles only when screen is big to help mobile users.
        const h1 = document.createElement("h1"),
            h1text = document.createTextNode("Perk menu");
        h1.appendChild(h1text);
        innerdiv.appendChild(h1);
    }

    const p = document.createElement("p");
    p.classList.add("MenuText");

    const pp = document.createElement("p");
    pp.innerHTML = `You have ${PerkPoints} perk points left.`;

    const active = document.createElement("div");
    active.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });
    const activeh3 = document.createElement("h3"),
        activeh3Text = document.createTextNode("Active");
    activeh3.appendChild(activeh3Text);

    const passive = document.createElement("div");
    passive.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })
    const passiveh3 = document.createElement("h3"),
        passiveh3Text = document.createTextNode("Passive");
    passiveh3.appendChild(passiveh3Text);

    const ExtraHealth = InputButton(Perks.ExtraHealth.Count > 0 ?
        `Extra Health +${Perks.ExtraHealth.Count}` : `Extra Health`, `Increase max health by 20`);
    ExtraHealth.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("ExtraHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraHealth);

    const ExtraWillHealth = InputButton(Perks.ExtraWillHealth.Count > 0 ?
        `Extra Willhealth +${Perks.ExtraWillHealth.Count}` : "Extra Willhealth", "Increase willpower by 20");
    ExtraWillHealth.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("ExtraWillHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraWillHealth);

    const FasterRest = InputButton(Perks.FasterRest.Count > 0 ?
        `Faster Rest +${Perks.FasterRest.Count}` : "Faster Rest",
        "Increases your passive rest with +0.01hp/tick. This will also increase rate burning fat.");
    FasterRest.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("FasterRest");
            PerkMenuFunc();
        }
    });
    passive.appendChild(FasterRest);

    const StealMore = InputButton(Perks.StealMore.Count > 0 ?
        `More essence +${Perks.StealMore.Count}` : "More essence",
        `Increases the amount of essence you take when your enemy orgasms`);
    StealMore.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("StealMore");
            PerkMenuFunc();
        }
    });
    active.appendChild(StealMore);

    const GiveEssence = InputButton(Perks.GiveEssence.Count > 0 ?
        `Give essence +${Perks.GiveEssence.Count}` : "Give essence",
        `Gives your enemy your femininity and/or masculinity when you orgasm`);
    GiveEssence.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("GiveEssence");
            PerkMenuFunc();
        }
    });
    active.appendChild(GiveEssence);

    const back = InputButton("Back");
    back.addEventListener("click", function () {
        LevelMenuFunc();
    });

    const close = InputButton("Close");
    close.addEventListener("click", function () {
        DisplayNone();
        DisplayGame();
    });

    [p, pp, passiveh3, passive, activeh3, active, document.createElement("br"), back, close].forEach((src) => {
        innerdiv.appendChild(src);
    })
    div.appendChild(innerdiv);
}
DocId("Children").addEventListener("click", function () {
    DisplayNone();
    DocId("ChildrenMenu").style.display = 'block';
    Childs();
});
DocId("LeaveChildrenMenu").addEventListener("click", function () {
    DisplayNone();
    DocId("DetailedInfo").style.display = 'block';
})

function Childs() {
    var Children = [];
    Children += "<div>By you<br>"
    for (var e = 0; e < player.Children.length; e++) {
        var age = Math.round(player.Children[e].AgeCounter / 365);
        if (age < 1) {
            age = Math.round(player.Children[e].AgeCounter / 30) + " months";
        } else {
            age += " years"
        }
        var Child = "<button type=\"button\">Child " + (e + 1) + "<br>Father: " + player.Children[e].Father +
            "<br>" + age + " old</button>"
        Children += Child;
    }
    Children += "</div>"
    if (House.Dormmates.length > 0) {
        for (var e of House.Dormmates) {
            if (e.Children.length > 0) {
                Children += "<div>" + e.FirstName + " " + e.LastName + "<br>"
                for (var i = 0; i < e.Children.length; i++) {
                    var age = Math.round(e.Children[i].AgeCounter / 365);
                    if (age < 1) {
                        age = Math.round(e.Children[i].AgeCounter / 30) + " months";
                    } else {
                        age += " years"
                    }
                    Child = "<button type=\"button\">Child " + (i + 1) + "<br>" + age + " old </button>"
                    Children += Child;
                }
                Children += "</div>"
            }
        }
    }
    DocId("ChildCorner").innerHTML = Children;
}
function Impregnate(who, by, mode = "A", where = "") {
    if (!who.hasOwnProperty("Pregnant")) {
        who.Pregnant = {};
        who.Pregnant.Status = false;
    }

    function Twins() {
        // The +1 gives a 1% or less chance for non blessed to birth twins 
        // Old saves might fail totaly
        const Twins = typeof (player.Blessings.Broodmother) === Number ? 1 + player.Blessings.Broodmother * 1 : 1,
            NoTwins = RandomInt(0, 100);
        switch (who.Race) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        switch (who.SecondRace) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        switch (by.Race) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        switch (by.SecondRace) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        // Some races will have higher chance
        if (NoTwins < Twins * 2) {
            return 3;
        } else if (NoTwins < Twins) {
            return 2;
        } else {
            return 1;
        }
    }

    function BabyMaker() {
        who.Pregnant.Status = true;
        Flags.Impregnations++;
        if (!Array.isArray(who.Pregnant.Babies)) {
            who.Pregnant.Babies = [];
        }
        if (player.Quests.some(e => e.Name === "Impregnate maidens") && who.Name == "Maiden") {
            var i = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
            player.Quests[i].Count++;
            player.Quests[i].Completed = true;
            who.Name = "Priestess";
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Baby = {
                    BabyAge: 0,
                    BabyRace: player.Race,
                    Father: by.Name + " " + by.LastName,
                    Mother: who.FirstName + " " + who.LastName,
                    Blessed: "Fertility" // Not in use for the moment, but I want it so children made during quest is different. 
                    //Maybe they leave house to join the shrine
                }
                who.Pregnant.Babies.push(Baby);
            }
        } else {
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Father = RandomInt(1, 4);
                if (Father > 2) {
                    Father = by;
                } else {
                    Father = who;
                }
                var Baby = {
                    BabyAge: 0,
                    BabyRace: Father.Race,
                    Father: by.Name + " " + by.LastName,
                    Mother: who.FirstName + " " + who.LastName
                }
                who.Pregnant.Babies.push(Baby);
            }
        }
    }

    function playerBabyMaker() {
        Flags.Pregnations++;
        player.Pregnant.Status = true;
        if (player.Quests.some(e => e.Name === "Get Impregnated")) {
            var i = player.Quests.findIndex(e => e.Name == "Get Impregnated");
            player.Quests[i].Completed = true;
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Baby = {
                    BabyAge: 0,
                    BabyRace: who.Race,
                    Father: by.FirstName + " " + by.LastName,
                    Mother: player.Name + " " + player.LastName,
                    Blessed: "Fertility"
                }
                player.Pregnant.Babies.push(Baby);
                player.Quests[i].Count++;
            }
        } else {
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Father = RandomInt(1, 4);
                if (Father > 2) {
                    Father = by;
                } else {
                    Father = player;
                }
                var Baby = {
                    BabyAge: 0,
                    BabyRace: Father.Race,
                    Father: by.FirstName + " " + by.LastName,
                    Mother: player.Name + " " + player.LastName
                }
                player.Pregnant.Babies.push(Baby);
            }
        }
    }
    if (who.hasOwnProperty("Pregnant")) {
        if (who.Pregnant.Status) {
            return;
        }
    }
    if (mode == "A") {
        const Impregnation = RandomInt(0, 100);
        switch (CheckGender(who)) {
            case "cuntboy":
                if (by.Virility >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "You have impregnated him!"
                }
                break;
            case "female":
                if (by.Virility >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexStats").innerHTML = "You have impregnated her!"
                }
                break;
            case "hermaphrodite":
                if (by.Virility >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "You have impregnated hir!"
                }
                break;
            case "male":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate him!"
                }
                break;
            case "dickgirl":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate her!"
                }
                break;
            default:
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnated the doll!"
                }
                break;
        }
    } else if (mode == "B") {
        const Impregnation = RandomInt(0, (500 - by.Masc));
        switch (CheckGender(who)) {
            case "cuntboy":
            case "female":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker();
                    DocId(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "hermaphrodite":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker();
                    DocId(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "dickgirl":
            case "male":
                if (player.Blessings.hasOwnProperty("MountainShrine")) { //Need to make a way to enable make impreg (item/blessing/curse)
                    if (player.Blessings.MountainShrine.Malepreg > 0) {
                        if (who.Fertility - 50 >= Impregnation) {
                            playerBabyMaker();
                            DocId(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                        }
                    }
                }
                break;
            default:
                if (false) {
                    if (who.Fertility - 50 >= Impregnation) {
                        playerBabyMaker();
                        DocId(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                }
                break;
        }
    }
    return;
}
function PregnanyEngine() {
    if (player.Children.length > 0) {
        for (let e of player.Children) {
            e.AgeCounter++;
            if (e.AgeCounter % 365 == 0) {
                const age = Math.round(e.AgeCounter / 365);
                EventLog(`Your child has grown ${IntToAge(age)} old.`);
            }
        }
    }
    if (player.Pregnant.Babies.length > 0) {
        for (let i in player.Pregnant.Babies) {
            const e = player.Pregnant.Babies[i],
                reduction = player.Blessings.hasOwnProperty("MountainShrine") ?
                player.Blessings.MountainShrine.Incubator * 5 : 0;

            e.BabyAge++;
            if (e.BabyAge > Math.max(2, 274 - reduction)) {
                const Child = e.hasOwnProperty("Blessed") ? {
                    AgeCounter: 0,
                    Race: e.BabyRace,
                    Mother: e.Mother,
                    Father: e.Father,
                    Blessed: e.Blessed
                } : {
                    AgeCounter: 0,
                    Race: e.BabyRace,
                    Mother: e.Mother,
                    Father: e.Father
                };
                player.Children.push(Child);
                EventLog("You have given birth!")
                player.Pregnant.Babies.splice(i, 1);
                if (player.Pregnant.Babies.length < 1) {
                    player.Pregnant.Status = false;
                }
            }
        }

        for (let b of player.Boobies) {
            if (b.Milk < b.MilkMax) {
                b.MilkBaseRate = b.MilkMax / 50000;
                b.Milk += b.MilkBaseRate;
            }
        }
    } else {
        player.Pregnant.Status = false;
    }
    for (let e of House.Dormmates) {
        if (!e.hasOwnProperty("Pregnant")) {
            e.Pregnant = {
                Status: false,
                Babies: []
            };
        }
        if (!Array.isArray(e.Children)) {
            e.Children = [];
        }
        const {
            Status,
            Babies
        } = e.Pregnant;
        if (Status) {
            for (let b in Babies) {
                Babies[b].BabyAge++;
                const reduction = player.Blessings.hasOwnProperty("MountainShrine") ?
                    player.Blessings.MountainShrine.IncubatorSeed * 5 : 0;
                if (Babies[b].BabyAge > Math.max(2, 274 - reduction)) {
                    const Child = {
                        AgeCounter: 0,
                        Race: e.Race,
                        Mother: Babies[b].Mother,
                        Father: Babies[b].Father
                    };
                    e.Children.push(Child);
                    Babies.splice(b, 1);
                    if (Babies.length < 1) {
                        e.Pregnant.Status = false;
                    }
                    EventLog(e.FirstName + " " + e.LastName + " have given birth!");
                }
            }
        }
        if (e.Children.length > 0) {
            for (let b of e.Children) {
                const age = Math.round(b.AgeCounter / 365);
                b.AgeCounter++;
                if (b.AgeCounter % 365 == 0) {
                    EventLog(`Your child with ${e.FirstName} ${e.LastName} has grown ${age} years old.`);
                }
                if (House.Nursery > 0 && age < 18) {
                    if (!b.hasOwnProperty("NuseryBoost")) {
                        b.NuseryBoost = 0;
                    } else {
                        b.NuseryBoost += House.Nursery
                        if (b.NuseryBoost > 40) {
                            b.NuseryBoost = 0;
                            b.AgeCounter++; //Faster aging with nusery
                            if (b.AgeCounter % 365 == 0) {
                                EventLog(`Your child with ${e.FirstName} ${e.LastName} has grown ${age} years old.`);
                            }
                        }
                    }
                }
                // Need to add death of age.
            }
        }
    }
}
// Get a random int number(no decimals)
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomString(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function StringCounter(array, string) {
    var counts = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            counts++;
        }
    }
    return counts;
}

// Capitalize first letter of a string
String.prototype.Capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function Last(arr) {
    return arr[arr.length - 1];
}

/* Checks if a array has duplicate value and if it does output a array without duplicate value
 to console so I can paste new array into code #Note keep it out commeted unless needed
Array.prototype.RemoveDup = function () {
    this.sort();
    var removed = [];
    for (var e = 0; e < this.length; e++) {
        if (this[e] == this[e + 1]) {
            console.log("Array contains duplicates");
            removed.push(this.splice(e, 1));
            this.splice(e, 1);
        }
    }
    if (removed.length > 0) {
        console.log(this)
        console.log("Duplicates: " + removed);
    }
}*/

function InputButton(Value, Title = "") { // Save space and stop repeating same lines
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", Value);
    button.setAttribute("title", Title);
    return button;
}

function InputText(value, id) {
    const IText = document.createElement("input");
    IText.setAttribute("type", "text");
    IText.setAttribute("value", value);
    IText.setAttribute("id", id);
    return IText;
}

function ButtonButton(inner = "", Title = "") { // Same as above but for <button>
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("title", Title);
    button.innerHTML = inner;
    return button;
}

function LabelFor(forid, inner) {
    const Label = document.createElement("label");
    Label.setAttribute("for", forid);
    Label.innerHTML = (inner)
    return Label
}

function MakeSlider(StartValue, MaxValue, MinValue = 0) {
    const Slider = document.createElement("input");
    Slider.setAttribute("type", "range");
    Slider.min = MinValue;
    Slider.max = MaxValue;
    Slider.value = StartValue;
    return Slider
}

function LeaveBuilding() {
    const Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        GamePaused = false;
        DocId("map").style.display = 'block';
        DocId("buttons").style.display = 'block';
        DocId("EmptyButtons").style.display = 'none';
        DocId("status").style.display = 'block';
        const Buildings = DocId("Buildings");
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    return Leave;
};

function LeaveNpc() {
    const Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        GamePaused = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        const Npcs = DocId("Npcs")
        Npcs.style.display = 'none';
        while (Npcs.hasChildNodes()) {
            Npcs.removeChild(Npcs.firstChild);
        }
        return;
    });
    return Leave;
};

function LeaveDungeon() {
    const Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        Wave = 0;
        enemies = [RespawnBlocker()];
        Dungeon = false;
        DisplayGame();
        const DungeonSys = DocId("DungeonSystem")
        DungeonSys.style.display = 'none';
        while (DungeonSys.hasChildNodes()) {
            DungeonSys.removeChild(DungeonSys.firstChild);
        }
        return;
    });
    return Leave;
};

function TitleText(text) {
    const h1 = document.createElement("h1"),
        h1text = document.createTextNode(text);
    h1.appendChild(h1text);
    return h1
};

function TextBox() {
    const p = document.createElement("p");
    p.classList.add("TextBox");
    return p;
};

function CleanNpcs() {
    const Npc = document.getElementById("Npcs")
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.firstChild);
    }
}

function CleanBuildings() {
    const Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
}

window.mobilecheck = function () { // Check if mobile device from detectmobile
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

console.log(mobilecheck())
function RaceBonus(who) {
    // 
    switch (who.Race) {
        case "Halfling":
            who.Height = who.Height / 2;
            who.Weight = who.Weight / 2;
            who.Size = who.Size * 0.8;
            break;
        case "Orc":
            who.Str += 1;
            break;
        case "Fairy":
            who.Height = Math.ceil(who.Height / 9);
            who.Weight = Math.ceil(who.Weight / 9);
            who.Size = who.Size * 0.4;
            break;
        case "Elf":
            who.Int += 1;
            who.Charm += 1;
            break;
        case "Dark elf":
            who.SexSkill += 1;
            who.Charm += 1;
            break;
        case "Amazon":
            who.Str += 1;
            who.SexSkill += 2;
            break;
        case "Imp":
            if (who.Femi > who.Masc) {
                who.Masc = who.Femi;
            }
            who.Femi = 0;
            break;
        case "Demon":
            who.WillHealth += 20;
            who.FullWillHealth += 20;
            break;
        case "Dhampir":
            who.WillHealth += 40;
            who.WillFullHealth += 40;
            who.Will += 1;
            break;
        case "Succubus":
            who.Femi += who.Masc;
            who.Masc = 0;
            break;
        case "Incubus":
            who.Masc += who.Femi;
            who.Femi = 0;
            break;
    }
    return who;
};
DocId("Save").addEventListener("click", function () {
    DisplayNone();
    DocId("SaveMenu").style.display = 'block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            DocId("SavePlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});

DocId("SaveLeave").addEventListener("click", function () {
    DocId("SaveMenu").style.display = 'none';
    DisplayGame();
});

for (let e = 1; e < 6; e++) {
    DocId("SavePlayer" + e).addEventListener("click", function () {
        const SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer' + e, JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate' + e, Date());
        DocId("SavePlayer" + e).value = Date();
        DocId("LoadPlayer" + e).value = Date();
    });
}

DocId("SaveText").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
    newWindow = window.open(uriContent, 'neuesDokument');
});
DocId("Options").addEventListener("click", function () {
    DisplayNone();
    const {
        ImgPack,
        LogLength,
        FontSize,
        Inch,
        HighLightDoors,
        BackColor,
        MapColor,
        TextColor,
        TextFont
    } = Settings
    DocId("optionpage").style.display = 'block';
    DocId("ImgPack").value = `Img pack: ${ImgPack}`;
    DocId("LogLength").innerHTML = LogLength;
    DocId("FontSize").innerHTML = `${Math.round(FontSize * 100) / 100}em`
    DocId("Inch").value = `Inch ${Inch}`;
    DocId("HighLightDoors").value = `Highlight doors ${HighLightDoors}`;
    DocId("backcolor").value = BackColor;
    DocId("MapColor").value = MapColor;
    DocId("textcolor").value = TextColor;
    DocId("textfont").value = TextFont;
});

DocId("FontSmaller").addEventListener("click", function () {
    Settings.FontSize -= 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    DocId("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

DocId("FontBigger").addEventListener("click", function () {
    Settings.FontSize += 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    DocId("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

DocId("SetPronoun").addEventListener("click", function () {
    DisplayNone();
    DocId("PronounForm").style.display = 'block'
});

DocId("Log+10").addEventListener("click", function () {
    Settings.LogLength += 10;
    DocId("LogLength").innerHTML = Settings.LogLength;
});

DocId("Log-10").addEventListener("click", function () {
    Settings.LogLength -= 10;
    DocId("LogLength").innerHTML = Settings.LogLength;
});

DocId("AcceptPronoun").addEventListener("click", function () {
    DisplayNone();
    DocId("optionpage").style.display = 'block';
    Settings.Pronoun = {
        Herm: DocId("Herm").value,
        Male: DocId("Male").value,
        Female: DocId("Female").value,
        Doll: DocId("Doll").value,
        DickGirl: DocId("DickGirl").value,
        CuntBoy: DocId("CuntBoy").value,
        Status: true
    };
});
DocId("DisablePronoun").addEventListener("click", function () {
    DisplayNone();
    DocId("optionpage").style.display = 'block';
    Settings.Pronoun.Status = false;
});

DocId("Inch").addEventListener("click", function () {
    Settings.Inch = Settings.Inch ? false : true;
    DocId("Inch").value = "Inch " + Settings.Inch;
});

DocId("FullScreen").addEventListener("click", function () {
    const elem = document.body,
        button = DocId("FullScreen");
    if (document.fullscreenElement === null) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
        button.value = "W";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
        button.value = "F"
    }
});

// Save options
DocId("saveoptions").addEventListener("click", function () {
    DocId("optionpage").style.display = 'none';
    DisplayGame();

    document.body.style.backgroundColor = DocId("backcolor").value;
    MapColor = DocId("MapColor").value;
    document.body.style.color = DocId("textcolor").value;
    document.body.style.fontFamily = DocId("textfont").value;

    DocId("status").style.backgroundColor = DocId("SideBarColor").value;
    DocId("buttons").style.backgroundColor = DocId("SideBarColor").value

    Settings.MapPercent = DocId("MapScale").value;
    Settings.BackColor = DocId("backcolor").value;
    Settings.MapColor = DocId("MapColor").value;
    Settings.TextColor = DocId("textcolor").value;
    Settings.TextFont = DocId("textfont").value;
    Settings.BorderColor = DocId("BorderColor").value;

    HemScale();
});

DocId("PerkOptions").addEventListener("click", function () {
    DisplayNone();
    DocId("PerkOptionsMenu").style.display = 'block';
    DocId("Skip").value = "Skip " + Settings.Skip;
    DocId("Vore").value = "Vore " + Settings.Vore;
});

DocId("Skip").addEventListener("click", function () {
    Settings.Skip = Settings.Skip ? false : true;
    DocId("Skip").value = "Skip " + Settings.Skip;
});

DocId("PlayerSpriteEnable").addEventListener("click", function () {
    Settings.PlayerSpriteEnable = Settings.PlayerSpriteEnable ? false : true;
    DocId("PlayerSpriteEnable").value = Settings.PlayerSpriteEnable;
})

DocId("OptionGiveEssence").addEventListener("click", function () {
    switch (Settings.GiveEssence) {
        case "Both":
            Settings.GiveEssence = "Femininity";
            break;
        case "Femininity":
            Settings.GiveEssence = "Masculinity";
            break;
        case "Masculinity":
            Settings.GiveEssence = "None";
            break;
        default:
            Settings.GiveEssence = "Both";
            break;
    }
    DocId("OptionGiveEssence").value = Settings.GiveEssence;
});

DocId("PerkOptionsLeave").addEventListener("click", function () {
    DocId("PerkOptionsMenu").style.display = 'none';
    DisplayGame();
});

DocId("HighLightDoors").addEventListener("click", function () {
    Settings.HighLightDoors = Settings.HighLightDoors ? false : true;
    DocId("HighLightDoors").value = "Highlight doors " + Settings.HighLightDoors;
});
function AfterBattleButtons(Sex = true, Vored = false) {
    const div = document.getElementById("SexButtons");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }

    function SexButton(value, func) {
        const button = InputButton(value);
        button.addEventListener("click", func);
        button.classList.add("SexButtons");
        return button
    }

    // Main Collumns 
    const Mouth = document.createElement("div"),
        Pussy = document.createElement("div"),
        Dick = document.createElement("div"),
        Anal = document.createElement("div"),
        Breast = document.createElement("div"),
        Siphon = document.createElement("div"),
        Right = document.createElement("div"); // Container for stop & capture

    const DickOne = document.createElement("div"),
        DickTwo = document.createElement("div");
    Dick.appendChild(DickOne);
    Dick.appendChild(DickTwo);
    const PlayerMaxOrgasm = Math.round(player.End / 8),
        ee = enemies[EnemyIndex];

    if (Sex) {
        if (PlayerMaxOrgasm >= player.Orgasm) {
            Anal.appendChild(SexButton("Receive rimjob", SexActGetRimjob));
            Anal.appendChild(SexButton("Give rimjob", SexActGiveRimjob));
            // TODO ride anal
            if (ee.Pussies.length > 0) {
                Mouth.appendChild(SexButton("Give Cunnilingus", SexActGiveCunnilingus));
                if (player.Pussies.length > 0) {
                    Pussy.appendChild(SexButton("Scissoring", SexActScissoring));
                };
            };
            if (ee.Dicks.length > 0) {
                Mouth.appendChild(SexButton("Give blowjob", SexActGiveBlowjob));
                if (player.Pussies.length > 0) {
                    Pussy.appendChild(SexButton("Ride cowgirl", SexActRideCowgirl));
                };
            };
            if (player.Pussies.length > 0) {
                Mouth.appendChild(SexButton("Receive cunnilingus", SexActGetCunnilingus));
                if (ee.Dicks.length > 1) {
                    // Dual pen old value Get dual penetrated
                    const DualFuckt = InputButton("");
                    Pussy.appendChild(DualFuckt);
                };
                if (ee.Height * 9 < player.Height) {
                    Pussy.appendChild(SexButton("Insertion", SexActInsertion));
                };
            };
            if (player.Dicks.length > 0) {
                DickOne.appendChild(SexButton("Receive blowjob", SexActGetBlowjob));
                if (player.Dicks.length > 1 && ee.Pussies.length > 0) {
                    // Dual pen
                    DickTwo.appendChild(SexButton("", SexActDualPen));
                };
                if (player.Dicks.length > 2 && ee.Pussies.length > 1) {
                    // Multi pen
                    DickTwo.appendChild(SexButton("", SexActMultiPen));
                };
                if (ee.Pussies.length > 0) {
                    DickOne.appendChild(SexButton("Missionary", SexActMissionary));
                    DickOne.appendChild(SexButton("Doggy style", SexActDoggyStyle));
                };
                DickTwo.appendChild(SexButton("Anal doggy style", SexActDoggyStyleAnal));
            }
            const Milktotal = player.Boobies.length > 0 ? player.Boobies.some(b => b.hasOwnProperty("Milk")) ? player.Boobies.map(v => v.Milk).reduce((acc, cur) => acc + cur) : 0 : 0;
            if (Milktotal > 100) {
                Breast.appendChild(SexButton("Breast feed", SexActBreastFeed));
            }
            const dickCount = DickOne.childElementCount + DickTwo.childElementCount
            if (window.innerHeight < 800 && dickCount > 3) {
                DickTwo.style.display = "none";
                const DickAction = InputButton("More");
                DickAction.addEventListener("click", function () {
                    if (DickTwo.style.display === "none") {
                        DickOne.style.display = "none";
                        DickTwo.style.display = "block";
                    } else {
                        DickOne.style.display = "block";
                        DickTwo.style.display = "none";
                    }
                });
                Dick.appendChild(DickAction);
            }
        }
    }
    const Stop = InputButton("Stop sex");
    Dungeon ? Stop.addEventListener("click", DungeonStopButton) :
        Stop.addEventListener("click", StopSexButton);
    Right.appendChild(Stop);
    if (!Vored) {
        if (ee.Orgasm > 4 && House.Dormmates.length < (House.Dorm * 3)) {
            const Capture = InputButton("Take them home");
            Dungeon ? Capture.addEventListener("click", DungeonCapture) :
                Capture.addEventListener("click", SexActCapture);
            Right.appendChild(Capture);
        }
        if (player.SessionOrgasm > 0 && player.Perks.GiveEssence.Count > 0) {
            const InfuseDiv = document.createElement("div");
            InfuseDiv.classList.add("MascFemi");
            if (player.Masc > 0) {
                const InjectM = ButtonButton("Infuse Masc");
                InjectM.addEventListener("click", DrainInjectM);
                InjectM.style.background = "linear-gradient(to right,rgba(245, 245, 220),blue)";
                InfuseDiv.appendChild(InjectM);
            } else { //filler button to stop player from missclicking
                const InjectM = InputButton("Empty");
                InfuseDiv.appendChild(InjectM);
            }
            if (player.Femi > 0) {
                const InjectF = ButtonButton("Infuse Femi");
                InjectF.addEventListener("click", DrainInjectF);
                InjectF.style.background = "linear-gradient(to right,rgba(245, 245, 220),#C12970)";
                InfuseDiv.appendChild(InjectF);
            } else {
                const InjectF = InputButton("Empty");
                InfuseDiv.appendChild(InjectF);
            }
            Siphon.appendChild(InfuseDiv);

        }
        if (ee.SessionOrgasm > 0) {
            const SiphonDiv = document.createElement("div");
            SiphonDiv.classList.add("MascFemi");
            if (ee.Masc > 0 || ee.Balls.length > 0 || ee.Dicks.length > 0) {
                const DrainM = ButtonButton("Siphon Masc");
                DrainM.addEventListener("click", DrainDrainM);
                DrainM.style.background = "linear-gradient(to right,blue,rgba(245, 245, 220))";
                SiphonDiv.appendChild(DrainM);
            } else {
                const DrainM = InputButton("Drained");
                SiphonDiv.appendChild(DrainM);
            }

            if (ee.Femi > 0 || ee.Pussies.length > 0 || (ee.Boobies.length > 1 ? true : (ee.Boobies.length > 0 ? ee.Boobies[0].Size > 0 : false))) {
                const DrainF = ButtonButton("Siphon Femi");
                DrainF.addEventListener("click", DrainDrainF);
                DrainF.style.background = "linear-gradient(to right, #C12970,rgba(245, 245, 220))";

                SiphonDiv.appendChild(DrainF);
            } else {
                const DrainF = InputButton("Drained");
                SiphonDiv.appendChild(DrainF);
            }
            Siphon.appendChild(SiphonDiv);
            if (player.Dicks.length > 0 ? EssenceCost(Last(player.Dicks)) <= player.Masc : false || (player.Masc >= 30 && player.Dicks.length === 0)) {
                SiphonDiv.appendChild(SexButton("Grow dick", GrowDick));
            };
            if (player.Balls.length > 0 ? EssenceCost(Last(player.Balls)) <= player.Masc : false || (player.Masc >= 50 && player.Balls.length === 0)) {
                SiphonDiv.appendChild(SexButton("Grow balls", GrowBalls));
            };
            if (player.Pussies.length > 0 ? EssenceCost(Last(player.Pussies)) <= player.Femi : false || (player.Femi >= 30 && player.Pussies.length === 0)) {
                SiphonDiv.appendChild(SexButton("Grow pussy", GrowPussy));
            };
            if (player.Boobies.length > 0 ? EssenceCost(Last(player.Boobies)) <= player.Femi : false || player.Boobies.length === 0) {
                SiphonDiv.appendChild(SexButton("Grow boobs", GrowBoobs));
            };
        };
        if (Settings.Vore) {
            const {
                Weight
            } = ee;
            if (StomachCapacity() > Weight) {
                Mouth.appendChild(SexButton("Eat them", VoreActionsOralVore));
            }
            if (VaginaCapacity() > Weight) {
                Pussy.appendChild(SexButton("Unbirth", VoreActionsUnbirth));
            }
            if (BallsCapacity() > Weight) {
                DickOne.appendChild(SexButton("Cock vore", VoreActionsCockVore));
            }
            if (BreastCapacity() > Weight) {
                Breast.appendChild(SexButton("Breast vore", VoreActionsBreastVore));
            }
            if (AnalCapacity() > Weight) {
                Anal.appendChild(SexButton("Anal vore", VoreActionsAnalVore));
            }
        }
    }
    const Frag = document.createDocumentFragment(),
        divs = [Mouth, Pussy, Dick, Anal, Breast, Siphon, Right].forEach(function (div) {
            Frag.appendChild(div);
        });
    div.appendChild(Frag);

}
function CheckArousal() {
    const ee = enemies[EnemyIndex],
        SexText = document.getElementById("SexText");
    if (ee.Arousal >= 100) {
        ee.Orgasm++;
        ee.SessionOrgasm++;
        ee.Arousal = 0;
        if (LastPressed == "RideCowgirl" && !player.Pregnant.Status) {
            Impregnate(player, ee, "B", "");
        }
        if (LastPressed == "GiveBlowjob") {
            const cum = Cumming(ee);
            SexText.innerHTML = "Your opponent’s grip on your head tightens as they start humping you mouth in earnest. You gladly oblige their request starting to deepthroat them to the base of their cock. Their rhythm starts to falter as you push their cock to the back of your throat." +
                " You push your head deep into their crotch as they make one last desperate thrust"
            SexText.innerHTML += cum > 0 ? ", depositing " + LToGal(cum) + " deep into your gullet." : "."
            SexText.innerHTML += "Your opponent takes deep breathes as they lie completely spent. You rise from between their legs admiring your work and begin to plan your next move."
        } else if (LastPressed == "RideCowgirl") {
            const cum = Cumming(ee);
            SexText.innerHTML += "<br>Reading their body language, you know they are close to cumming."
            SexText.innerHTML += cum > 0 ?
                " Pulling them deep inside you, they release " + LToGal(cum) + " of cum into your pussy." :
                " Nothing comes out, as they're already drained."
        } else if (LastPressed == "GiveCunnilingus") {
            SexText.innerHTML += "<br>Reading their body language, you know they are close to cumming. Shoving your tongue as deep as you can into them, your face gets splashed with their nectar."
        } else if (false) {
            SexText.innerHTML += " Nothing comes out, as they're already drained."
        }
    }
    if (player.Arousal >= 100) {
        player.Orgasm++;
        player.Arousal = 0;
        player.SessionOrgasm++;
        switch (Settings.GiveEssence) {
            case "Both":
                ee.Masc += Math.round(player.GiveEssence / 2);
                ee.Femi += Math.round(player.GiveEssence / 2);
                break;
            case "Masculinity":
                ee.Masc += Math.round(player.GiveEssence);
                break;
            case "Femininity":
                ee.Femi += Math.round(player.GiveEssence);
                break;
            case "None":
                break;
        }
        EssenceCheck(ee);
        const ImpregActions = ["DoggyStyle", "Missionary", "DualPen", "MultiPen"],
            AnalImpregActions = ["DoggyStyleAnal"];
        if (ImpregActions.indexOf(LastPressed) != -1) {
            if (!ee.hasOwnProperty("Pregnant")) {
                ee.Pregnant = {
                    Status: false
                }
            }
            if (!ee.Pregnant.Status) {
                for (let b of player.Balls) {
                    if (b.Cum > 10) {
                        Impregnate(ee, player);
                        b.Cum -= 10;
                    }
                }
            }
        } else if (AnalImpregActions.indexOf(LastPressed) != -1 && player.Blessings.MountainShrine.Malepreg > 0) {
            if (!ee.hasOwnProperty("Pregnant")) {
                ee.Pregnant = {
                    Status: false
                }
            }
            if (!ee.Pregnant.Status) {
                for (var b of player.Balls) {
                    if (b.Cum > 10) {
                        Impregnate(ee, player);
                        b.Cum -= 10;
                    }
                }
            }
        }
        if (LastPressed == "GetBlowjob") {
            const cum = Cumming(player);
            SexText.innerHTML = "You reach down and grab your opponent’s head, giving a bestial grunt as you approach your climax. You ram your cock as far as you can into " + enemies[EnemyIndex].FirstName + "'s throat."
            if (player.Balls.length > 0) {
                SexText.innerHTML += "Your balls tense up as you pump your " + LToGal(cum) + " load down their gullet, thrusting erratically, holding your opponent tight as you empty your sac into them. You bend over their head, making small jabs into their mouth as each wave of cum is sent to their stomach."
            }
            SexText.innerHTML += "You stand there for a while, enjoying your afterglow, before you pull out, causing your opponent to fall over, gasping for air. You smile deviously as you ponder how you should use them next.";
            ee.Cumin.Stomach += cum;
            if (ee.Cumin.Stomach > (ee.Height / 100) * 2) {
                SexText.innerHTML += "<br><br> Their stomach is overflowing with your cum; as you pull out, your excess cum follows.";
                player.cumGround += ee.Cumin.Stomach - (ee.Height / 100) * 2;
                ee.Cumin.Stomach = (ee.Height / 100) * 2;
            } else if (ee.Cumin.Stomach > ee.Height / 100) {
                SexText.innerHTML += "<br><br> Their stomach bulges visibly, filled with your cum."
            }
        } else if (LastPressed == "Missionary") {
            const cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            SexText.innerHTML = "<br>Feeling close you thrust deep inside them";
            if (cum > 0) {
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    SexText.innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else {
                SexText.innerHTML += ", but nothing comes out of your dick."
            }
        } else if (LastPressed == "DoggyStyle") {
            const cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            SexText.innerHTML = "<br>Feeling close, you firmly grab their hips, and thrust deep into their pussy"
            if (cum > 0) {
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    SexText.innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out."
        } else if (LastPressed == "DoggyStyleAnal") {
            const cum = Cumming(player);
            SexText.innerHTML = "<br>Feeling close, you firmly grab their waist, and thrust deep into their bowels"
            if (cum > 0) {
                ee.Cumin.Ass += cum;
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their ass."
                if (ee.Cumin.Ass > (ee.Height / 50)) {
                    SexText.innerHTML += "<br><br> Their ass is overflowing with your cum; as you pull out, your excess seed leaks out."
                    player.cumGround += ee.Cumin.Ass - ee.Height / 50;
                    ee.Cumin.Ass = ee.Height / 50;
                } else if (ee.Cumin.Stomach > ee.Height / 100) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            }
        } else if (false) {
            SexText.innerHTML += ", but nothing comes out."
        }
        SexText.innerHTML += (player.cumGround > 20000 ? // If 
            "<br><br>Your opponent is caked white and heavily panting, cum still flowing out of their overfilled holes. Your extreme output has covered them, and all of the ground nearby, in your semen. You're glad that you don't have to clean this up..." :
            player.cumGround > 5000 ? // if else
            "<br><br>You've covered your (ex-)opponent in your cum, and left a sizable puddle underneath them. They're still dripping..." :
            player.cumGround > 500 ?
            "<br><br>You've made quite a mess; they weren't able to handle your output, and have been covered in what their body couldn't handle." :
            player.cumGround > 0 ?
            "<br><br>Their body bulges with your load, but it's not enough - what they couldn't keep inside, they're now wearing outside." :
            "" // else
        )
        CheckArousal();
    }
    const PlayerLooks = document.getElementById("PlayerLooks"),
        EnemyLooks = document.getElementById("EnemyLooks");

    PlayerLooks.innerHTML = window.innerHeight > 800 ?
        BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player) : "";
    EnemyLooks.innerHTML = window.innerHeight > 800 ?
        BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee) : "";

    if (player.Pregnant.Babies.length > 0) {
        let age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        age < 0 ? age = "Impregnated" : age = age + " months pregnant";
        PlayerLooks.innerHTML += "<br>" + age;
    }
    if (ee.hasOwnProperty("Pregnant")) {
        if (ee.Pregnant.Status) {
            EnemyLooks.innerHTML += "<br>Pregnant";
        }
    }


    const BaseSexAttack = Math.round((RandomInt(4, 7) * player.SexSkill) / 2),
        BaseESexAttack = Math.round((RandomInt(4, 7) * enemies[EnemyIndex].SexSkill) / 2);
    // SexAttack is a global should probably change that, but how?
    SexAttack = Math.min(RandomInt(45, 77), BaseSexAttack * (BaseSexAttack / BaseESexAttack));
    ESexAttack = Math.max(RandomInt(15, 32), BaseESexAttack * (BaseESexAttack / BaseSexAttack));


    DocId("PName").innerHTML = `${player.Name} ${player.LastName}<br>${player.Race} ${Pronoun(CheckGender(player))}`;
    DocId("EName").innerHTML = `${ee.FirstName} ${ee.LastName}<br>${ee.Name} ${ee.Race} ${Pronoun(CheckGender(ee))}`;
    DocId("Mascu").innerHTML = Math.round(player.Masc);
    DocId("Femin").innerHTML = Math.round(player.Femi);
    DocId("PArousal").innerHTML = Math.round(player.Arousal);
    DocId("EMascu").innerHTML = ee.Masc;
    DocId("EFemin").innerHTML = ee.Femi;
    DocId("EArousal").innerHTML = Math.round(ee.Arousal);
    // Divide by bigest value amoung both player and enemy
    let DelatMed = (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) ?
        (100 / player.Masc) : (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) ?
        (100 / player.Femi) : (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) ?
        (100 / ee.Masc) : (100 / ee.Femi);

    DocId("Mascu").style.width = player.Masc * DelatMed + "%";
    DocId("Femin").style.width = player.Femi * DelatMed + "%";
    DocId("PArousal").style.width = Math.max(1, player.Arousal) + "%";
    DocId("EMascu").style.width = ee.Masc * DelatMed + "%";
    DocId("EFemin").style.width = ee.Femi * DelatMed + "%";
    DocId("EArousal").style.width = Math.max(1, ee.Arousal) + "%";

    DocId("SexStats").innerHTML = " ";
    DocId("EnemyOrgasm").style.display = 'block';
    DocId("EnemyOrgasm").innerHTML = ee.Orgasm;
    DocId("PlayerOrgasm").style.display = 'block';
    DocId("PlayerOrgasm").innerHTML = player.Orgasm;

    SexColor(player, "Player");
    SexColor(ee, "Enemy");
    AfterBattleButtons();
}

function Cumming(who) {
    if (who.Balls.length > 0) {
        let Cum = 0;
        for (let b of who.Balls) {
            Cum += Math.min(b.Cum, Math.max(10, b.Cum / 8));
            b.Cum -= Math.min(b.Cum, Math.max(100, b.Cum / 8));
        }
        Cum = Math.round((Cum / 1000) * 100) / 100;
        return Cum;
    }
}

function SexLooksExactAndKinda() { // A function to be able to enter a bunch of "local global consts"
    const EnemyKinda = DocId("EnemyKinda"),
        EnemyExact = DocId("EnemyExact"),
        SexStats = DocId("SexStats"),
        playerKinda = DocId("playerKinda"),
        playerExact = DocId("playerExact"),
        EnemySex = DocId("EnemySex"),
        PlayerSex = DocId("PlayerSex");

    function PlayerExactFunc() {
        playerKinda.style.display = 'none';
        playerExact.style.display = 'block';
        playerExact.innerHTML = `${player.Name} ${player.LastName}<br>${player.Race} ${Pronoun(CheckGender(player))}<br>
        <p>${ExactBoobLook(player) + ExactPussyLook(player) + ExactDickLook(player) + ExactBallLook(player)}</p>`
    };

    function PlayerKindaFunc() {
        playerKinda.style.display = 'block';
        playerExact.style.display = 'none';
        playerExact.innerHTML = "";
    }

    function EnemyKindaFunc() {
        SexStats.innerHTML = " ";
        EnemyKinda.style.display = 'block';
        EnemyExact.style.display = 'none';
        EnemyExact.innerHTML = "";
    }

    function EnemyExactFunc() {
        const ee = enemies[EnemyIndex];
        SexStats.innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
        EnemyKinda.style.display = 'none';
        EnemyExact.style.display = 'block';
        EnemyExact.innerHTML = `${ee.FirstName} ${ee.LastName}<br>${ee.Name} ${ee.Race} ${Pronoun(CheckGender(ee))}<br>
        <p>${ExactBoobLook(ee)+ExactPussyLook(ee)+ExactDickLook(ee)+ExactBallLook(ee)}</p>`;
    }
    EnemySex.addEventListener("click", function () {
        if (EnemyKinda.style.display == 'none') {
            EnemyKindaFunc();
        } else {
            EnemyExactFunc();
        }
    });
    EnemySex.addEventListener("mouseenter", EnemyExactFunc);
    EnemySex.addEventListener("mouseleave", EnemyKindaFunc);
    PlayerSex.addEventListener("click", function () {
        if (playerKinda.style.display == 'none') {
            PlayerKindaFunc();
        } else {
            PlayerExactFunc();
        }
    });
    PlayerSex.addEventListener("mouseenter", PlayerExactFunc);
    PlayerSex.addEventListener("mouseleave", PlayerKindaFunc);
}
SexLooksExactAndKinda();
function DrainDrainM() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex];
    //disabled (player.ForcedFemale) ? (player.Femi += ee.Masc) : (player.Masc += ee.Masc);
    // If masc is zero check if sexual organs exist to recyle for more masc
    const Need = player.EssenceDrain;
    let Have = ee.Masc;
    ee.Masc = Math.max(0, ee.Masc - Need);
    while (Have < Need && (ee.Balls.length > 0 || ee.Dicks.length > 0)) {
        if (ee.Balls.length > 0) {
            const ball = ee.Balls[ee.Balls.length - 1];
            ball.Size--;
            Have += EssenceCost(ball);
            if (ball.Size <= 1) {
                ee.Balls.pop();
            };
        };
        if (ee.Dicks.length > 0) {
            const dick = ee.Dicks[ee.Dicks.length - 1];
            dick.Size--;
            Have += EssenceCost(dick);
            if (dick.Size <= 1) {
                ee.Dicks.pop();
            }
        }
    }
    const Got = Math.min(Need, Have),
        left = Math.max(0, Have - Need);
    player.Masc += Got;
    ee.Masc = left;

    EssenceCheck(ee);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("SexText").innerHTML = `You siphon essence of masculinity from them.<br>${DrainChanges(old, player, eold, ee)}`;
    //        `You siphon the last essence of masculinity from them leaving them with no signs of masculinity left.<br>${DrainChanges(old, player, eold, ee)}` :
    ee.SessionOrgasm--;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
    return
};

function DrainDrainF() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex];
    //player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
    const Need = player.EssenceDrain;
    let Have = ee.Femi;
    ee.Femi = Math.max(0, ee.Femi - Need);
    while (Have < Need && (ee.Pussies.length > 0 || ee.Boobies.length > 1 ? true : ee.Boobies[0].Size > 0)) {
        if (ee.Pussies.length > 0) {
            const pussy = ee.Pussies[ee.Pussies.length - 1];
            pussy.Size--;
            Have += EssenceCost(pussy);
            if (pussy.Size <= 1) {
                ee.Pussies.pop();
            };
        };
        if (ee.Boobies.length > 1 ? true : ee.Boobies[0].Size > 0) {
            const boobs = ee.Boobies[ee.Boobies.length - 1];
            boobs.Size--;
            Have += EssenceCost(boobs);
            if (boobs.Size <= 1 && ee.Boobies.length > 1) {
                ee.Boobies.pop();
            };
        };
    };
    const Got = Math.min(Need, Have),
        left = Math.max(0, Have - Need);
    player.Femi += Got;
    ee.Femi = left;
    EssenceCheck(ee);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("SexText").innerHTML = `You siphon essence of femininity from them.<br>${DrainChanges(old, player, eold, ee)}`;
    //  `You siphon the last essence of femininity from them leaving them with no signs of femininity left.<br>${DrainChanges(old, player, eold, ee)}` :
    ee.SessionOrgasm--;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
    return;
};

function DrainInjectM() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(player.GiveEssence * 33, player.Masc);
    if (player.Masc > 0) {
        player.SessionOrgasm--;
        player.Masc -= Ess;
        ee.Masc += Ess;
        EssenceCheck(ee);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DocId("SexText").innerHTML = (Ess >= player.Masc) ?
            `You inject them with your last essence of masculinity, leaving yourself male-free.<br>${DrainChanges(old, player, eold, ee)}` :
            `You inject essence of masculinity into them.<br>${DrainChanges(old, player, eold, ee)}`;
    }
    AfterBattleButtons();
    CheckArousal();
    return;
};

function DrainInjectF() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(player.GiveEssence * 33, player.Femi);
    if (player.Femi > 0) {
        player.SessionOrgasm--;
        player.Femi -= Ess;
        ee.Femi += Ess;
        EssenceCheck(ee);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DocId("SexText").innerHTML = (Ess >= player.Femi) ?
            `You give them the last of your femininity, leaving yourself female-free.<br>${DrainChanges(old, player, eold, ee)}` :
            `You inject essence of femininity into them.<br>${DrainChanges(old, player, eold, ee)}`;
        AfterBattleButtons();
        CheckArousal();
        return;
    }
};

function GrowDick() {
    const old = JSON.parse(JSON.stringify(player)),
        pd = player.Dicks.length > 0 ? player.Dicks[player.Dicks.length - 1] : 0;

    if (player.Dicks.length === 0 && player.Masc >= 30) {
        const Dick = {
            Size: 2,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Dicks.push(Dick);
        player.Masc -= 30;
    } else if (player.Dicks.length > 0 ? EssenceCost(pd) <= player.Masc : false) {
        pd.Size++;
        player.Masc -= EssenceCost(pd);
    };
    AfterBattleButtons();
    CheckArousal();
};

function GrowBalls() {
    const old = JSON.parse(JSON.stringify(player)),
        pb = player.Balls.length > 0 ? player.Balls[player.Balls.length - 1] : 0;

    if (player.Balls.length === 0 && player.Masc >= 50) {
        const Ball = {
            Size: 2,
            Type: player.SecondRace,
            CumMax: 1 / 3 * Math.PI * Math.pow(1, 3),
            Cum: 1 / 6 * Math.PI * Math.pow(1, 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        player.Balls.push(Ball);
        player.Masc -= 50;
    } else if (player.Balls.length > 0 ? EssenceCost(pb) <= player.Masc : false) {
        pb.Size++;
        player.Masc -= EssenceCost(pb);
    };
    AfterBattleButtons();
    CheckArousal();
};

function GrowPussy() {
    const old = JSON.parse(JSON.stringify(player)),
        pp = player.Pussies.length > 0 ? player.Pussies[player.Pussies.length - 1] : 0;

    if (player.Pussies.length === 0 && player.Femi >= 30) {
        const Pussy = {
            Size: 2,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Pussies.push(Pussy);
        player.Femi -= 30;
    } else if (EssenceCost(pp) <= player.Femi) {
        pp.Size++;
        player.Femi -= EssenceCost(pp);
    };
    AfterBattleButtons();
    CheckArousal();
};

function GrowBoobs() {
    const old = JSON.parse(JSON.stringify(player)),
        pb = player.Boobies.length > 0 ? player.Boobies[player.Boobies.length - 1] : 0;
    if (player.Boobies.length === 0) {
        const Boob = {
            Size: 0,
            Type: player.SecondRace,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(1, 3)
        }
        player.Boobies.push(Boob);
        player.Femi -= 30;
    } else if (EssenceCost(pb) <= player.Femi) {
        pb.Size++;
        player.Femi -= EssenceCost(pb);
    };
    AfterBattleButtons();
    CheckArousal();
};
function RaceDrain(whose) {
    const RaceEss = player.RaceEssence,
        a = RaceEss.findIndex(e => e.Race == whose.Race);
    if (a > -1) {
        RaceEss[a].amount += RandomInt(2, 10);
    } else {
        const Race = {
            Race: whose.Race,
            amount: RandomInt(2, 10)
        }
        RaceEss.push(Race);
    }
    const b = RaceEss.findIndex(e => e.Race == whose.SecondRace);
    if (b > -1) {
        RaceEss[b].amount += RandomInt(1, 5);
    } else {
        const Race = {
            Race: whose.SecondRace,
            amount: RandomInt(1, 5)
        }
        RaceEss.push(Race);
    }
};

function IntToAge(int) {
    switch (int) {
        case 1:
            return "one year";
        case 2:
            return "two years";
        case 3:
            return "three years";
        case 4:
            return "four years";
        case 5:
            return "five years";
        case 6:
            return "six years";
        default:
            return int + "years";
    }
}

function DrainChangesEnemy(eold, ecurrent) {
    var b = "";
    if (eold.Dicks.length > ecurrent.Dicks.length) {
        if (ecurrent.Dicks.length < 1) {
            b += "You see their dick shrinking completely into their body, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "They lost a dick"
        }
    } else if (eold.Dicks.length < ecurrent.Dicks.length) {
        b += "They have grown a dick"
    } else if (ecurrent.Dicks.length > 0) {
        for (var e = 0; e < eold.Dicks.length; e++) {
            if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick shrinking" //Need to add what dick e.g. their second dick shrinks etc
            } else if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick growing"
            }
        }
    }

    if (eold.Balls.length > ecurrent.Balls.length) {
        if (ecurrent.Balls.length < 1) {
            b += "<br>They lost a pair of balls"
        } else {
            b += "<br>They lost a pair of balls"
        }
    } else if (eold.Balls.length < ecurrent.Balls.length) {
        b += "<br>They have grown a pair of balls"
    } else if (ecurrent.Balls.length > 0) {
        for (var e = 0; e < ecurrent.Balls.length; e++) {
            if (Math.round(eold.Balls[e].Size) > Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls shrinking"
            } else if (Math.round(eold.Balls[e].Size) < Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls growing"
            }
        }
    }

    if (eold.Boobies.length > ecurrent.Boobies.length) {
        b += "<br>They loost a pair of breasts";
    } else if (eold.Boobies.length < ecurrent.Boobies.length) {
        b += "<br>They have grown a pair of breasts";
    } else {
        for (var e = 0; e < eold.Boobies.length; e++) {
            if (Math.round(eold.Boobies[e].Size) > Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts shrinking."
            } else if (Math.round(eold.Boobies[e].Size) < Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts growing."
            }
        }
    }

    if (eold.Pussies.length > ecurrent.Pussies.length) {
        if (ecurrent.Pussies.length < 1) {
            b += "<br>You see their pussy closing completely and disappear, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "<br>They a lost a pussy"
        }
    } else if (eold.Pussies.length < ecurrent.Pussies.length) {
        b += "<br>They a have grown a pussy"
    } else if (ecurrent.Pussies.length > 0) {
        for (var e = 0; e < eold.Pussies.length; e++) {
            if (Math.round(eold.Pussies[e].Size) > Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy tightening"
            } else if (Math.round(eold.Pussies[e].Size) < Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy growing" //Need better word/phrase than growing
            }
        }
    }
    return b;
}

//Need to do same for player
function DrainChanges(old, current, eold, ecurrent) {
    var a = " ";
    var b = " ";

    if (old.Dicks.length < current.Dicks.length) {
        a = "You have grown a dick!";
    } else if (current.Dicks.length < old.Dicks.length) {
        if (current.Dicks.length < 1) {

        } else {
            a = "You have lost a dick";
        }

    } else if (current.Dicks.length > 0) {
        for (var e = 0; e < current.Dicks.length; e++) {
            if (Math.round(old.Dicks[e].Size) < Math.round(current.Dicks[e].Size)) {
                a += "<br>You feel your dick growing.";
            } else if (Math.round(current.Dicks[e].Size) < Math.round(old.Dicks[e].Size)) {
                a += "<br>You feel your dick shrinking.";
            }
        }
    }

    if (old.Balls.length < current.Balls.length) {
        a += "<br>you have grown a pair of balls"
    } else if (current.Balls.length < old.Balls.length) {
        a += "<br>you have lost a pair of balls"
    } else if (current.Balls.length > 0) {
        for (var e = 0; e < current.Balls.length; e++) {
            if (Math.round(old.Balls[e].Size) < Math.round(current.Balls[e].Size)) {
                a += "<br>you feel you balls growing"
            } else if (Math.round(current.Balls[e].Size) < Math.round(old.Balls[e].Size)) {
                a += "<br>you feel you balls shrinking"
            }
        }
    }

    if (old.Boobies.length < current.Boobies.length) {
        a += "<br>You have grown a new pair of breasts."
    } else if (current.Boobies.length < old.Boobies.length) {
        a += "<br>You have lost a pair of breasts"
    } else if (current.Boobies.length > 0) {
        for (var e = 0; e < current.Boobies.length; e++) {
            if (Math.round(old.Boobies[e].Size) < Math.round(current.Boobies[e].Size)) {
                a += "<br>You feel your breasts grow bigger.";
            } else if (Math.round(current.Boobies[e].Size) < Math.round(old.Boobies[e].Size)) {
                a += "<br>You feel your breasts shrinking.";
            }
        }
    }

    if (old.Pussies.length < current.Pussies.length) {
        a += "<br>You gave grown a pussy";
    } else if (current.Pussies.length < old.Pussies.length) {
        a += "<br>You have lost a pussy";
    } else if (current.Pussies.length > 0) {
        for (var e = 0; e < current.Pussies.length; e++) {
            if (Math.round(old.Pussies[e].Size) < Math.round(current.Pussies[e].Size)) {
                a += "<br>You feel your pussy grow";
            } else if (Math.round(current.Pussies[e].Size) < Math.round(old.Pussies[e].Size)) {
                a += "<br>You feel your pussy tighten";
            }
        }
    }
    if (CheckGender(old) != CheckGender(current)) {
        a += "<br><br>You have become a " + Pronoun(CheckGender(current)) + "!<br>";
    }
    b = DrainChangesEnemy(eold, ecurrent);
    return "<br>" + a + "<br>" + b;
}
DocId("EnemyLoseSex").addEventListener("click", function () {
	if (DocId("LoseEnemyKinda").style.display === 'none') {
		DocId("LoseSexStats").innerHTML = " ";
		DocId("LoseEnemyKinda").style.display = 'block';
		DocId("LoseEnemyExact").style.display = 'none';
		DocId("LoseEnemyExact").innerHTML = "";
	} else {
		const ee = enemies[EnemyIndex];
		DocId("LoseSexStats").innerHTML = `Looking at them you estimate that they are about ${CmToInch(ee.Height)} tall and look to weigh around ${KgToPound(ee.Weight)}`;
		DocId("LoseEnemyKinda").style.display = 'none';
		DocId("LoseEnemyExact").style.display = 'block';
		DocId("LoseEnemyExact").innerHTML = `<p>${ExactBoobLook(ee) + ExactPussyLook(ee) + ExactDickLook(ee) + ExactBallLook(ee)}</p>`;
	}
});
DocId("PlayerLoseSex").addEventListener("click", function () {
	if (DocId("LoseplayerKinda").style.display === 'none') {
		DocId("LoseplayerKinda").style.display = 'block';
		DocId("LoseplayerExact").style.display = 'none';
		DocId("LoseplayerExact").innerHTML = "";
	} else {
		DocId("LoseplayerKinda").style.display = 'none';
		DocId("LoseplayerExact").style.display = 'block';
		DocId("LoseplayerExact").innerHTML = `<p>${ExactBoobLook(player) + ExactPussyLook(player) + ExactDickLook(player) + ExactBallLook(player)}</p>`;
	}
});

function Lose(sex = true) {
	const ee = enemies[EnemyIndex],
		LPL = DocId("LosePlayerLooks"),
		LoseText = DocId("LoseSexStats");

	LPL.innerHTML = ""; // BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player);
	if (player.Pregnant.Babies.length > 0) {
		const age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
		LPL.innerHTML += "<br>" + (age < 1) ? "Impregnated" : age + " months pregnant";
	}
	DocId("LoseEnemyLooks").innerHTML = ""; //BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee);
	if (ee.hasOwnProperty("Pregnant")) {
		if (ee.Pregnant.Status) {
			DocId("LoseEnemyLooks").innerHTML += "<br>Pregnant";
		}
	}
	Winner = false;
	DocId("LosePName").innerHTML = player.Name + " " + player.LastName;
	DocId("LoseEName").innerHTML = ee.Name + "<br>" + ee.Race + " " + Pronoun(CheckGender(ee));
	DocId("LoseMascu").innerHTML = Math.round(player.Masc);
	DocId("LoseFemin").innerHTML = Math.round(player.Femi);
	DocId("LoseEMascu").innerHTML = Math.round(ee.Masc);
	DocId("LoseEFemin").innerHTML = Math.round(ee.Femi);
	SexColor(player, "PlayerLose");
	SexColor(ee, "EnemyLose");
	const DelatMed = (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) ? 100 / player.Masc :
		(player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) ? 100 / player.Femi :
		(ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) ? 100 / ee.Masc :
		100 / ee.Femi;

	DocId("LoseMascu").style.width = player.Masc * DelatMed + "%";
	DocId("LoseFemin").style.width = player.Femi * DelatMed + "%";
	DocId("LoseEMascu").style.width = ee.Masc * DelatMed + "%";
	DocId("LoseEFemin").style.width = ee.Femi * DelatMed + "%";

	DocId("Encounter").style.display = 'none';
	DocId("Lose").style.display = 'grid';
	DocId("LeaveLose").style.display = 'none';
	DocId("DungeonLose").style.display = 'none';
	if (sex) {
		if (LoseText.style.display = 'none') {
			LoseText.style.display = 'block';
		}
		LoseText.innerHTML = `You lost to a ${Pronoun(CheckGender(ee))} ${ee.Race} ${ee.Name}`;
		NameConq(ee);
	} else {
		LoseText.style.display = 'none';
		DocId("LoseStruggle").style.display = 'none';
		DocId("LoseSubmit").style.display = 'none';
		if (Dungeon) {
			DocId("DungeonLose").style.display = 'inline-block';
		} else {
			DocId("LeaveLose").style.display = 'inline-block';
		}
	}
	return;

	function NameConq() { // Name/title/type e.g. witch, maiden
		const Name = ee.Name.toLowerCase(),
			LoseText = DocId("LoseSexStats");
		switch (Name) {
			case "wizard":
				const Organs = ["Dicks", "Balls", "Boobies", "Pussies"],
					a = RandomString(Organs);
				if (player[a].length > 0) {
					for (let e of player[a]) {
						if (e.Size > 0) {
							e.Size--;
						}
					}
					LoseText.innerHTML = "Something doesn't feel right..."; // 
				} else {
					LoseText.innerHTML = ""; // He failed
				}
			case "witch":
				PotionDrunk("Amphibian", RandomInt(1, 5));
				RaceConq();
				break;
			case "maiden":
				Lose(false); // "No sex"
				LoseText.innerHTML = "Your defeat proves you unworthy to father her children, " +
					"she walks away avoiding wasting more time on you."
				break;
			default:
				RaceConq(); // Some enemies don't trigger race conq like e.g. maiden.
				break;
		}
	};

	function RaceConq() {
		const race = ee.Race.toLowerCase(),
			enemy = ee,
			LoseText = DocId("LoseSexText");
		switch (race) {
			case "human":
				const steal = Math.min(RandomInt(25, 200), player.Gold)
				player.Gold -= steal; // Robbed, why not. #Nerfed
				LoseText.innerHTML += "They steal " + steal + " gold from you.";
				break;
			case "orc":
				const Steal = Math.min(30, player.Masc);
				player.Femi += 30;
				player.Masc -= Steal;
				enemy.Masc += Steal;
				// player.Mind.Sub++
				if (enemy.Balls.length > 0) {
					let i = 0;
					while (i < 3 && !player.Pregnant.Status) { // try more than once
						Impregnate(player, enemy, "B");
					}
				}
				// LoseText.innerHTML = "Following their natrual instincts the orc try to breed you, " +
				// "while also transforminng you to better suit their preference."
				break;
			case "fairy":
				if (player.Height > 30) {
					player.Height -= Math.min(RandomInt(7, player.Height / 10), 50);
				}
				PotionDrunk("Fairy", RandomInt(10, 20));
				LoseText.innerHTML += "Attempting to transform you into a fairy they shrunk you"
				break;
			case "elf":
				break;
			case "dark elf":
				break;
			case "amazon":
				break;
			case "goblin":
				if (player.Balls.length > 0) {
					Impregnate(player, enemy, "B"); // Breeding stereotype
					// = "Stradling you they ride you, drain your balls trying to impregnate themself."
					if (enemy.Balls.length > 0) {
						Impregnate(enemy, player);
						// = " Once satisfied they move on to fucking with "
					}
				} else if (enemy.Balls.length > 0) {
					Impregnate(enemy, player);
					// = "They "
				}
				break;
			case "incubus":
				if (player.Masc > 0) {
					const take = Math.min(400, player.Masc * Math.min(0.15, Math.random())); // Up to 15% or 400ess
					player.Masc -= take;
					enemy.Masc += take;
				}
				Impregnate(player, enemy, "B");
				// "drainging your masculinity "
				break;
			case "succubus":
				if (player.Femi > 0) {
					const take = Math.min(400, player.Femi * Math.min(0.15, Math.random())); // Up to 15% or 400ess
					console.log(take)
					player.Femi -= take;
					enemy.Femi += take;
				}
				Impregnate(enemy, player);
				// "draining your feminity"
				break;
			case "dragon":
				if (player.RaceEssence.some(e => e.Race == "Dragon")) { // Dragon doesn't like weaklings being dragons. 
					const b = player.RaceEssence.findIndex(e => e.Race == "Dragon");
					player.RaceEssence[b].amount -= Math.min(RandomInt(1, 25), player.RaceEssence[b].amount)
				}
				break;
			case "demon":
				// player.Mind.Corruption++;
			default:
				break;
		}
	};
}
DocId("LoseSubmit").addEventListener("click", function () {
	const ee = enemies[EnemyIndex],
		takeM = Math.round(ee.SexSkill * RandomInt(3, 5)),
		takeF = Math.round(ee.SexSkill * RandomInt(3, 5)),
		selectScene = SnowScenes(),
		a = ["forcedBJ", "getBJ", "getRidden", "getRiddenAnal"],
		b = ["forcedCunn", "getCunn", "getFucked", "getFuckedAnal"]
	DocId("LosePlayerOrgasm").innerHTML = loseScene(false, selectScene);
	if (a.indexOf(selectScene) > -1) {
		DrainMascFromPlayer(takeM);
	} else if (b.indexOf(selectScene) > -1) {
		DrainFemiFromPlayer(takeF);
	} else {
		DrainMascFromPlayer(takeM / 2);
		DrainFemiFromPlayer(takeF / 2);
	}
	Lose(false);
});
DocId("LoseStruggle").addEventListener("click", function () {
	const takeM = Math.min(Math.round(enemies[EnemyIndex].SexSkill * RandomInt(1, 7)), player.Masc),
		takeF = Math.min(Math.round(enemies[EnemyIndex].SexSkill * RandomInt(1, 7)), player.Femi),
		selectScene = SnowScenes();
	DocId("LosePlayerOrgasm").innerHTML = loseScene(true, selectScene);
	if (selectScene === "forcedBJ" || selectScene === "getBJ" || selectScene === "getRidden" || selectScene === "getRiddenAnal") {
		DrainMascFromPlayer(takeM);
	} else if (selectScene === "forcedCunn" || selectScene === "getCunn" || selectScene === "getFucked" || selectScene === "getFuckedAnal") {
		DrainFemiFromPlayer(takeF);

	} else if (selectScene === "forcedRim" || selectScene === "getRim") {
		DrainMascFromPlayer(takeM / 2);
		DrainFemiFromPlayer(takeF / 2);
	} else {
		const shift = player.height / 2;
		player.height -= shift;
		enemies[EnemyIndex].height += shift;
	}
	Lose(false);
});
DocId("LeaveLose").addEventListener("click", function () {
	DisplayGame();
	DocId("Lose").style.display = 'none';
	DocId("LoseStruggle").style.display = 'inline-block';
	DocId("LoseSubmit").style.display = 'inline-block';
	DocId("LosePlayerOrgasm").innerHTML = " ";
	LastPressed = " ";
});

//Testing all scenes
/*DocId("Cycle").addEventListener("click", function () {
	var sub = [true, false];
	var action = ["forcedBJ", "forcedCunn", "forcedRim", "getBJ", "getCunn", "getRim", "getFucked", "getFuckedAnal", "getRidden", "getRiddenAnal", "getVoreStomach", "getVoreBalls", "getVoreBoobs", "getVoreVagina", "getVoreAnal"];
	var gender = ["hermaphrodite", "cuntboy", "male", "female", "dickgirl", "doll"]
	console.log("Let's do this.");
    for(var a = 0; a < sub.length; a++)
	{
		for(var b = 0; b < action.length; b++)
		{
			for(var c = 0; c < gender.length; c++)
			{
				for(var d = 0; d < gender.length; d++)
				{
				try{
					console.log(loseScene(sub[a], action[b], gender[c], gender[d]));
				}
				catch {
					console.log("Error at "+sub[a]+ action[b]+ gender[c]+ gender[d]);
				}
				}
			}
		}
	}
});*/

function loseScene(struggle, selectScene) {
	const Player = player,
		Enemy = enemies[EnemyIndex]; // bad fix for now wanting to rename all Player to player
	function DrainBalls() {
		if (player.Balls.length > 0) {
			player.Balls.forEach((b) => {
				b.Cum = 0;
			})
		}
	}
	// Shrunk the for loops into map && reduce consts, also made them a function so they only run if needed
	const enemyCum = () => Enemy.hasOwnProperty("Balls") ? Enemy.Balls.length > 0 ? `${LToGal(Enemy.Balls.map(b => b.Size/4).reduce((acc,cur) => acc + cur))} down your throat.` : `.` : `.`;
	const playerCum = () => player.hasOwnProperty("Balls") ? player.Balls.length > 0 ? LToGal(player.Balls.map(b => b.Cum).reduce((acc, cur) => acc + cur)) : 0 : 0;

	// Tested replacing returnText with a return plus some ?'s but readablity suffered a lot 
	var returnText;
	if (struggle) {
		switch (selectScene) {
			case "forcedBJ":
				return `${Enemy.FirstName} forces your head to their crotch, and starts thrusting their ${CmToInch(Enemy.Dicks[0].Size)} dick into your mouth. Despite your intentions, your body betrays you and orgasms as they cum ${enemyCum()}`;
			case "forcedCunn":
				returnText = `${Enemy.FirstName} forces your head to their crotch, forcing you to start eating them out. `
				if (Enemy.Balls.length > 0) {
					returnText += `Their ${CmToInch(Enemy.Balls[0].Size)} balls cover your face, forcing their musky scent into your nose. `
				}
				returnText += `Despite your intentions, your body betrays you and orgasms as they cover your face in girlcum.`
				if (CheckGender(Enemy) === "hermaphrodite") {
					returnText += `<br>You feel their balls twitch on your face, shooting cum over your back, eventually dripping into your hair.`
				}
				break;
			case "forcedRim":
				if (CheckGender(Enemy) != "doll") {
					returnText = `Despite having more sensitive erogenous zones, ${Enemy.FirstName} wants to maximize your humiliation by forcing you to eat their ass out. 
					They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure.`
				} else if (CheckGender(Enemy) === "doll" && player.Dicks.length <= 0) {
					returnText = "With no other way to get pleasure, " + Enemy.FirstName + " forces you to the ground and sit on your face, giving you no other option than to eat their ass out for pleasure. "
				} else {
					returnText = `Rather that let you use your dick on their only hole, ${Enemy.FirstName} decides to force you to use your tongue. 
					They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure.`
				}
				returnText += "<br>Despite your humiliating position, you find your body responding, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Forcing you onto your back, " + Enemy.FirstName + " expertly massages your cock and balls, quickly bringing you erect. "
				if (player.Pussies.length > 0) {
					returnText += "They even tease your pussy a bit, all to make you cum quicker. "
				}
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming " + playerCum() + " down their throat seconds after their lips meet your dick's head.";
				DrainBalls()
				break;
			case "getCunn":
				returnText = "Forcing you onto your back, " + Enemy.FirstName + " expertly fingers your pussy, quickly making you wet. "
				if (player.Balls.length > 0) {
					returnText += "They even tease your balls a bit, all to make you cum quicker. "
				}
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming around their tongue seconds after it penetrates your lower lips."
				break;
			case "getRim":
				if (CheckGender(Player) === "doll" && enemies[EnemyIndex].Dicks.length > 0) {
					returnText = "Rather than use their penis on your ass, they'd rather find a pussy instead. "
				} else if (CheckGender(Player) != "doll") {
					returnText = "Rather than pleasuring your more sensitive organs, they've decided to humiliate you instead. "
				}
				returnText += "<br>Forcing you onto your stomach, your enemy repeatedly smacks your ass, bringing a blush to both sets of cheeks. Despite your humiliation (and your ass getting sore), you soon orgasm"
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				} else if (player.Dicks.length > 0) {
					returnText += ", spurting cum from your dick onto your belly."
				} else if (player.Pussies.length > 0) {
					returnText += ",  soaking your thighs."
				} else {
					returnText += ", shuddering in unwanted pleasure."
				}
				break;
			case "getFucked":
				returnText = "Forcing you on your back, your enemy fondles your clit just enough for your body to betray you and your pussy to get wet. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "Moving your balls to the side, they thrust in to you."
				} else {
					returnText += "Spreading your lips with one hand, they thrust into you."
				}
				returnText += "<br>Knowing how to handle someone with as little experience as you, they pin your arms above your head and quickly bring you to orgasm, your shuddering walls causing them to cum inside you. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "Fortunately, you're alredy pregnant, and won't have to carry their child."
				else {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
						else
							returnText += "At least you weren't impregnated..."
				}*/
				break;
			case "getFuckedDoggy":
				returnText = "Your enemy forces your beaten body to its hands and knees; you can't even muster the energy to collapse. Your body, however, has other plans, and you feel your pussy start to drip. Your opponent wastes little time, and quickly gets into position, soon thrusting deeply into you. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				}
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				}
				returnText += "Your enemy cums soon after, quickly filling your pussy and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "Fortunately, you're alredy pregnant, and won't have to carry their child."
				else {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
						else
							returnText += "At least you weren't impregnated..."
				}*/
				break;
			case "getFuckedAnal":
				returnText = "Your enemy forces your beaten body to its hands and knees; you can't even muster the energy to collapse. "
				if (player.Pussies.length > 0) {
					returnText += "Your body, however, has other plans, and you feel your pussy start to drip. Even with such a clear signal, though, your enemy positions themselves a little higher. "
				}
				returnText += "Having gotten into position, your enemy spreads your ass cheeks, and slowly works their dick into your bowels. Unable to respond, you feel your ass getting stretched. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "With every thrust, you feel their balls tapping your balls and clit, sending little bursts of unintended pleasure through your organs.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				} else if (player.Pussies.length > 0) {
					returnText += "With every thrust, you feel their balls tapping your clit, sending little bursts of unintended pleasure through your pussy.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. "
				} else if (player.Balls.length > 0) {
					returnText += "With every thrust, you feel their balls tapping yours, sending little bursts of unintended pleasure through your dick.<br>It doesn't take long for you to orgasm, your balls unloading themselves onto your stomach and the ground. "
				} else {
					returnText += "<br>It doesn't take long for you to orgasm, a pleasurable heat spreading from your ass. "
				}
				returnText += "Your enemy cums soon after, quickly filling your ass and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
					if(player.Pussies.length > 0) {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
					}
					else {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... But you couldn't be pregnant - you don't have a pussy!"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."

					}
				}*/
				break;
			case "getRidden":
				returnText = "Pushing you over, your enemy fondles your balls, quickly giving you an erection. Straddling your groin, they quickly thrust down, riding your dick. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3) {
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				}
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their pussy. They're not satisfied yet, though, and continue to ride you for several orgasms. "
				/*if(enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
				} else {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
						returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You wish you could've chosen your partner..."
				}*/
				break;
			case "getRiddenAnal":
				returnText = "Pushing you over, your enemy fondles your balls, quickly giving you an erection. Straddling your groin, they quickly thrust down, riding your dick. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3) {
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				}
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their ass. They're not satisfied yet, though, and continue to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You wish you could've chosen your partner..."
				}*/
				break;
			case "getVoreStomach":
				returnText = "Grabbing your arms, they try to shove you down their throat, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBalls":
				returnText = "Grabbing your arms, they try to shove you down their dick, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBoobs":
				returnText = "Grabbing your arms, they try to shove you into their tits, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreVagina":
				returnText = "Grabbing your arms, they try to shove you into their vagina, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreAnal":
				returnText = "Grabbing your arms, they try to shove you into their ass, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			default:
				returnText = "This shouldn't be here - send snowspider a message, saying \"Loss: " + struggle + ", " + selectScene + "\""
				break;
		}
	} else {
		switch (selectScene) {
			case "forcedBJ":
				return `They force your head to their crotch, and start thrusting their dick into you. You eagerly give them head, orgasming as they cum down your throat.`
			case "forcedCunn":
				returnText = "They force your head to their crotch and you dive in, eagerly eating them out. "
				if (CheckGender(Enemy) === "hermaphrodite") {
					returnText += "Their balls cover your nose, forcing their musky scent into your nose. "
				}
				returnText += "As they cover your face in girlcum, your body orgasms, proud of its job. "
				if (CheckGender(Enemy) === "hermaphrodite") {
					returnText += "<br>As they cover your face, you feel their balls twitch, shooting cum over your back. As they wind down, their cum drips into your hair, arousing you further."
				}
				break;
			case "forcedRim":
				if (CheckGender(Enemy).toLowerCase() != "doll") {
					returnText = "Despite having more sensitive erogenous zones, they want to maximize your humiliation by forcing you to eat their ass out. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				} else if (CheckGender(Enemy).toLowerCase() === "doll" && player.Dicks.length <= 0) {
					returnText = "With no other way to get pleasure, they force you to the ground and sit on your face, giving you no other option than to eat their ass out. "
				} else {
					returnText = "Rather that let you use your dick on their only hole, they decide to force you to use your tongue. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				}
				returnText += "<br>You find your body responding well to the harsh treatment, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Motioning you to lie down on your back, they expertly massage your cock and balls, quickly bringing you erect. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "They even tease your pussy a bit, adding to your growing pleasure. "
				}
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming before they start blowing you, coating your stomach with your seed. Before you can go soft, though, they wrap their lips around your dick, giving you immense pleasure. Seconds later, you cum again, this time down their throat."
				break;
			case "getCunn":
				returnText = "Motioning you to lie down on your back, they expertly finger your pussy, quickly making you wet. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "They even tease your balls a bit, adding to your growing pleasure. "
				}
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming as their tongue approachess your cunt. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "<br>Your dick, refusing to be left out, coats your stomach with your seed. "
				}
				returnText += "Before you can recover, though, they start eating you out, quickly driving you to several more orgasms."
				break;
			case "getRim":
				returnText = "<br>Motioning you onto your stomach, your enemy massages your butt cheeks, bringing you a surprising amount of pleasure. As they stick a finger up your ass, you orgasm"
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				} else if (player.Dicks.length > 0) {
					returnText += ", spurting cum from your dick onto your belly."
				} else if (player.Pussies.length > 0) {
					returnText += ", soaking your thighs."
				} else {
					returnText += ", shuddering in pleasure."
				}
				break;
			case "getFucked":
				returnText = "Motioning you onto your back, your enemy fondles your clit and lower lips, giving you a mini-orgasm. Appreciating your lack of resistance, they tenderly move above you. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "Shifting your balls to the side, they gently ease in to you."
				} else {
					returnText += "Spreading your lips with one hand, they gently ease in to you."
				}
				returnText += "<br>Tenderly fucking your pussy, you're brought into a world of pleasure. Pinching your clit, you cum hard, soaking their crotch with your juices. Your quivering lips stimulate their dick, making them cum into you."
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "You're alredy pregnant, and feel a twinge of regret that you won't carry their child."
				if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
						else
							returnText += "You weren't impregnated, and you find yourself disappointed..."
				}*/
				break;
			case "getFuckedDoggy":
				returnText = "Your enemy eases your beaten body to its hands and knees, making sure you can keep your balance. Your body instincively responds to the position, and you feel your pussy start to drip. Your opponent teases your cunt, causing your body to shudder, before getting into position and thrusting deeply into you. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				}
				if (player.Boobies[0].size > 3) {
					returnText += "Bending over your back, they reach down and fondle your nipples, not stopping their thrusts. You let out a low moan, your pleasure mounting ever higher. "
				}
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				returnText += "Your enemy cums soon after, quickly filling your pussy and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "You're alredy pregnant, and feel a twinge of regret that you won't carry their child."
				else if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
						else
							returnText += "You weren't impregnated, and you find yourself disappointed..."
				}*/
				break;
			case "getFuckedAnal":
				returnText = "Your enemy eases your beaten body to its hands and knees, making sure you can keep your balance. "
				if (player.Pussies.length > 0)
					returnText += "Your body instincively responds to the position, and you feel your pussy start to drip. Your opponent teases your cunt, causing your body to shudder. Even with such a clear signal, though, your enemy positions themselves a little higher. "
				else
					"They massage your cheeks, causing your body to shudder, as your enemy positions their dick at your ass. "
				returnText += "Easing forwards, your enemy spreads your ass cheeks, and slowly works their dick into your bowels. Letting out a moan, you feel your ass getting stretched. "
				if (player.Boobies[0].size > 3)
					returnText += "Bending over your back, they reach down and fondle your nipples, not stopping their thrusts. You let out a low moan, your pleasure mounting ever higher. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping your balls and clit, sending little bursts of delicious pleasure through your organs.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				else if (player.Pussies.length > 0)
					returnText += "With every thrust, you feel their balls tapping your clit, sending little bursts of delicious pleasure through your pussy.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. "
				else if (player.Balls.length > 0)
					returnText += "With every thrust, you feel their balls tapping yours, sending little bursts of delicious pleasure through your dick.<br>It doesn't take long for you to orgasm, your balls unloading themselves onto your stomach and the ground. "
				else
					returnText += "<br>It doesn't take long for you to orgasm, a pleasurable heat spreading from your ass. "
				returnText += "Your enemy cums soon after, quickly filling your ass and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
					if(player.Pussies.length > 0) {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
					} else {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... But you couldn't be pregnant - you don't have a pussy!"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
					}
				}*/
				break;
			case "getRidden":
				returnText = "Telling you to sit down, your enemy kisses you deeply as they fondle your balls, quickly giving you an erection. Hugging your shoulders, they ease their pussy onto your dick, causing both of you to moan out loud. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their pussy. They're not satisfied yet, though, and give you a few seconds to recover, before continuing to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You hope they're alright with you being the father..."
				}*/
				break;
			case "getRiddenAnal":
				returnText = "Telling you to sit down, your enemy kisses you deeply as they fondle your balls, quickly giving you an erection. Hugging your shoulders, they ease their asshole onto your dick, causing both of you to moan out loud. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3) {
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				}
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their ass. They're not satisfied yet, though, and give you a few seconds to recover, before continuing to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You hope they're alright with you being the father..."
				}*/
				break;
			case "getVoreStomach":
				return `Grabbing your arms, they try to shove you down their throat, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreBalls":
				return `Grabbing your arms, they try to shove you down their dick, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreBoobs":
				return `Grabbing your arms, they try to shove you into their tits, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreVagina":
				return `Grabbing your arms, they try to shove you into their vagina, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreAnal":
				return `Grabbing your arms, they try to shove you into their ass, then realize they aren't stretching enough. Maybe in a later update...`
			default:
				return `This shouldn't be here - send snowspider a message, saying \"Loss:${struggle}, ${selectScene}"`
		}
	}
	return returnText;
}

function SnowScenes() {
	const ee = enemies[EnemyIndex],
		sceneList = ["forcedRim", "getRim", ];
	//Which scenes are possible? 
	// Need settings options if Player prey is enabled.
	if (Settings.Vore && false) {
		sceneList.getVoreAnal = true;
		sceneList.getVoreStomach = true;
		if (enemies[EnemyIndex].Dicks.length > 0 && enemies[EnemyIndex].Balls.length > 0)
			sceneList.getVoreBalls = true;
		if (enemies[EnemyIndex].Boobies.length > 0)
			sceneList.getVoreBoobs = true;
		if (enemies[EnemyIndex].Pussies.length > 0)
			sceneList.getVoreVagina = true;
	}
	if (ee.Dicks.length > 0) {
		sceneList.push("forcedBJ", "getFuckedAnal");
	}
	if (ee.Pussies.length > 0) {
		sceneList.push("forcedCunn");
	}
	if (player.Dicks.length > 0) {
		sceneList.push("getRiddenAnal", "getBJ");
		if (ee.Pussies.length > 0) {
			sceneList.push("getRidden");
		}
	}
	if (player.Pussies.length > 0) {
		sceneList.push("getCunn");
		if (ee.Dicks.length > 0) {
			sceneList.push("getFucked");
		}
	}
	return RandomString(sceneList);
}

function DrainMascFromPlayer(amount) {
	const old = JSON.parse(JSON.stringify(player)),
		eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
		ee = enemies[EnemyIndex];
	//player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
	const Need = amount;
	let Have = player.Masc;
	player.Masc = Math.max(0, player.Masc - Need);
	while (Have < Need && (player.Dicks.length > 0 || player.Balls.length > 0)) {
		if (player.Dicks.length > 0) {
			const dick = Last(player.Dicks);
			dick.Size--;
			Have += EssenceCost(dick);
			if (dick.Size <= 1) {
				player.Dicks.pop();
			};
		};
		if (player.Balls.length > 0) {
			const balls = Last(player.Balls);
			balls.Size--;
			Have += EssenceCost(balls);
			if (balls.Size <= 1) {
				player.balls.pop();
			};
		};
	};
	const Got = Math.min(Need, Have),
		left = Math.max(0, Have - Need);
	ee.Masc += Got;
	player.Masc = left;
	EssenceCheck(ee);
	if (Settings.EssenceAuto) {
		EssenceCheck(player);
	}
	return;
};

function DrainFemiFromPlayer(amount) {
	const old = JSON.parse(JSON.stringify(player)),
		eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
		ee = enemies[EnemyIndex];
	//player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
	const Need = amount;
	let Have = player.Femi;
	player.Femi = Math.max(0, player.Femi - Need);
	while (Have < Need && (player.Pussies.length > 0 || player.Boobies.length > 0)) {
		if (player.Pussies.length > 0) {
			const pussy = Last(player.Pussies);
			pussy.Size--;
			Have += EssenceCost(pussy);
			if (pussy.Size <= 1) {
				player.Pussies.pop();
			};
		};
		if (player.Boobies.length > 0 ? player.Boobies[0].Size > 0 : false) {
			const boobs = Last(player.Boobies);
			boobs.Size--;
			Have += EssenceCost(boobs);

			if (boobs.Size <= 1 && player.Boobies.length > 1) {
				player.Boobies.pop();
			};
		};
	};
	const Got = Math.min(Need, Have),
		left = Math.max(0, Have - Need);
	ee.Femi += Got;
	player.Femi = left;
	EssenceCheck(ee);
	if (Settings.EssenceAuto) {
		EssenceCheck(player);
	}
	return;
}
var PRL,
    RL,
    LastPressed;
// Mouth
function SexActGiveBlowjob() {
    const Text = DocId("SexText"),
        ee = enemies[EnemyIndex];
    if (Settings.ImgPack) {
        ImgChose("GiveBlowjob", ee);
    }
    ee.Arousal += SexAttack / 2
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveBlowjob") {
        Text.innerHTML = `Your head continues to bob on their length as your tongue plays with their tip, 
        electing soft moans from your opponent. As ${enemies[EnemyIndex].FirstName} begins to softly hump into your throat, 
        you meet each thrust by pushing your head down as far as you can. You emphasize their thrusts by sucking hard on their throbbing length. You feel their hand being placed on your head, pushing you deeper into their crotch.`
        if (ee.Balls.length > 0) {
            Text.innerHTML += ` Your lips meet their crotch as their ${CmToInch(enemies[EnemyIndex].Balls[0].Size)} nuts start to bump into your chin with each hump.`
        }
        Text.innerHTML += ` Their breathing becomes deep and labored as you milk their cock for all it’s worth.`
    } else {
        RL = RandomInt(0, ee.Dicks.length - 1);
        Text.innerHTML = `Your foe lays on their back, chest heaving with exhaustion from the recent fight. 
        You make your way up to ${enemies[EnemyIndex].FirstName}'s body and crouch between their legs, 
        spreading them apart. In-between lies their ${CmToInch(enemies[EnemyIndex].Dicks[RL].Size)} ${enemies[EnemyIndex].Dicks[RL].Type} cock lewdly pulsing as it bobs side-to-side with each breath of your foe. You lick your lips in anticipation as you lower your head to your prize, wrapping your lips around the head of their dick and start sucking.` // They still lies on their stomach still spent from the battle. You grab their torso and flip them on their back for your viewing pleasure. Their dick lays flat against their stomach twitching almost expectantly. You lower your head between their legs and just before the they has time to protest you begin tending to their cock causing them to gasp.
    }
    CheckArousal();
    LastPressed = "GiveBlowjob";
    return;
};

function SexActGiveCunnilingus() {
    if (Settings.ImgPack) {
        ImgChose("GiveCunnilingus", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 2;
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveCunnilingus") {
        DocId("SexText").innerHTML = "Keeping them in place, you continue your tongue-lashing, electing soft moans from your opponent. Barely able to move, all " + enemies[EnemyIndex].FirstName + "can do is rest their hand on your head. You reach one hand to their clit and gently pinch it, sending a fresh wave of pleasure through their body.";
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Pussies.length - 1);
        DocId("SexText").innerHTML = "Your foe lays on their back, chest heaving with exhaustion from the recent fight. You make your way up to " + enemies[EnemyIndex].FirstName + "'s body and crouch between their legs, spreading them apart. In-between lies their " + enemies[EnemyIndex].Pussies[RL].type + " pussy, engorged and dripping slightly, their clit twitching lewdly with each breath of your foe." +
            " You lick your lips in anticipation as you lower your head to your prize, spreading their lower lips with your fingers, and start eating them out.";
    }
    CheckArousal();
    LastPressed = "GiveCunnilingus";
    return;
};

function SexActGiveRimjob() {
    if (Settings.ImgPack) {
        ImgChose("GiveRimjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 2;
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveRimjob") {
        DocId("SexText").innerHTML = "You continue eating their ass out.";
    } else {
        DocId("SexText").innerHTML = "You eat their ass out.";
    }
    CheckArousal();
    LastPressed = "GiveRimjob";
    return;
};
// Vagina
function SexActScissoring() {
    if (Settings.ImgPack) {
        ImgChose("Scissoring", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Scissoring") {
        DocId("SexText").innerHTML = "As you continue to grind your pussy against " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy, you reach down and toy with their clit, bringing more pleasure-filled moans to your ears.";
    } else {
        DocId("SexText").innerHTML = "Looking down at " + enemies[EnemyIndex].FirstName + ", you feel a twinge of arousal pulse through your crotch. Straddling your opponent's thigh, you lift their other leg and bring your crotches together, grinding your pussy against theirs. Not leaving it at that, you bring their hand to your clit, and moan as they start playing with it.";
    }
    CheckArousal();
    LastPressed = "Scissoring";
    return;
};

function SexActGetCunnilingus() {
    if (Settings.ImgPack) {
        ImgChose("GetCunnilingus", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetCunnilingus") {
        DocId("SexText").innerHTML = "Keeping them in place, you force them to continue eating you out, electing soft moans from your throat. Barely able to move, all " + enemies[EnemyIndex].FirstName + "can do is continue eating you out. You reach one hand to their head and gently pet it, telling them they're doing a good job.";
    } else {
        RL = RandomInt(0, player.Pussies.length - 1);
        DocId("SexText").innerHTML = "Your foe lays on their back, chest heaving with exhaustion from the recent fight. You make your way up " + enemies[EnemyIndex].FirstName + "'s body, licking your lips in anticipation. Squatting above their head, you line your crotch up with their mouth. Grabbing their head, you grind their face against your " + player.Pussies[RL].Type + " pussy, until they " +
            "start eating you out with " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Race + " tounge.";
    }
    CheckArousal();
    LastPressed = "GetCunnilingus";
    return;
};

function SexActRideCowgirl() {
    if (Settings.ImgPack) {
        ImgChose("RideCowgirl", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "RideCowgirl") {
        DocId("SexText").innerHTML = "Planting one hand on their chest, you continue riding " + HisHer(enemies[EnemyIndex]) + " " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick at an erratic pace, enjoying their groans of pleasure with each thrust."
        if (enemies[EnemyIndex].Balls.length > 0) {
            DocId("SexText").innerHTML += " Every time your crotch meets theirs, you can feel their balls twitch, getting ready to cum."
        }
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
        PRL = RandomInt(0, player.Pussies.length - 1);
        DocId("SexText").innerHTML = "Looking down at your defeated opponent, lying on " + HisHer(enemies[EnemyIndex]) + " back, you position yourself above their crotch. Spreading your lower lips with one hand and positioning " + HisHer(enemies[EnemyIndex]) + " " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick with your other, you wrap your " + player.Pussies[PRL].Type + " pussy around them.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
    }
    if (player.Pussies[PRL].Virgin) {
        player.Pussies[PRL].Virgin = false;
        DocId("SexText").innerHTML += "<br>You have lost your virginity!"
    }
    CheckArousal();
    LastPressed = "RideCowgirl";
    return;
};

function SexActInsertion() {
    if (Settings.ImgPack) {
        ImgChose("Insertion", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Insertion") {
        DocId("SexText").innerHTML = "Allowing them only short breaks, you continue masturbating with your living dildo. Judging from their cute squeaks of pleasure, you're not the only one enjoying this.";
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
        PRL = RandomInt(0, player.Pussies.length - 1);

        DocId("SexText").innerHTML = "Due to their small size, conventional sex would be difficult; looking closer at their small form, however, you realize they are about the size of a dildo. to your much larger body. " +
            "Grabbing them you bring them to your " + CmToInch(player.Pussies[PRL].Size) + " deep " + player.Pussies[PRL].Type + " vagina, telling them look closely at the wet folds they are about to be better acquainted with. Feet first, you gently insert them into your pussy with a soft moan of pleasure. Once you're sure they can survive it, you pick up the pace."
    }
    if (player.Pussies[PRL].Virgin) {
        player.Pussies[PRL].Virgin = false;
        DocId("SexText").innerHTML += "<br>You have lost your virginity to your little dildo!"
    }
    CheckArousal();
    LastPressed = "Insertion";
    return;
};
// Dick
function SexActMissionary() {
    if (Settings.ImgPack) {
        ImgChose("Missionary", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Missionary") {
        DocId("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        DocId("SexText").innerHTML = "Positioning your opponent on " + HisHer(enemies[EnemyIndex]) + " back you fuck " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        DocId("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "Missionary";
    return;
};

function SexActDualPen() {
    enemies[EnemyIndex].Arousal += 2 * SexAttack;
    player.Arousal += 3 * ESexAttack;
    if (Settings.ImgPack) { //Going to need to split this, unless it's only for multiple orifices
        ImgChose("DualPen", enemies[EnemyIndex]);
    }
    if (enemies[EnemyIndex].Pussies.length > 0) {
        if (LastPressed === "DualPen") {
            DocId("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy and ass with your " + player.Dicks[PRL].Type + " dicks, enjoying the contrast between their ass and pussy's tightness and flexibility, and your rods separated by a thin wall of their flesh.";
            //Text 2: DocId("SexText").innerHTML = "You pull your dicks out of " + HisHer(enemies[EnemyIndex]) + " holes slowly, enjoying the feeling of their pussy and ass trying to pull you back in. Without warning, you thrust forward suddenly, bottoming out again in an instant and forcing a shout of pleasure from their throat. You resume thrusting, a pleasured look on both of your faces."
        } else {
            DocId("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you smile to yourself; they've got enough holes to use more than one dick. Spreading their legs, you line up your " + player.Dicks[0].Type + " with their " + enemies[EnemyIndex].Pussies[0].Type + " pussy and ass, and press in slowly. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        }
    } else {
        if (LastPressed === "DualPen") {
            DocId("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        } else {
            DocId("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you notice a lack of vagina. Not willing to give one dick priority over the other, you spread their legs and line up your " + player.Dicks[0].Type + " dicks with their ass, and press in slowly. To your surprise, they stretch around your dicks with only mild (vocalized) discomfort. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.";
        }
    }
    if (player.Dicks[0].Virgin || player.Dicks[1].Virgin) {
        player.Dicks[0].Virgin = false;
        player.Dicks[1].Virgin = false;
        DocId("SexText").innerHTML += "<br>Your dicks are no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DualPen";
    return;
};

function SexActMultiPen() {
    if (enemies[EnemyIndex].Pussies.length * SexAttack > 200) {
        enemies[EnemyIndex].Arousal = 100;
        enemies[EnemyIndex].Orgasm += Math.floor(enemies[EnemyIndex].Pussies.length * SexAttack) - 1;
    } else
        enemies[EnemyIndex].Arousal += enemies[EnemyIndex].Pussies.length * SexAttack;
    if (player.Dicks.length * 2 * ESexAttack > 200) {
        player.Arousal = 100;
        player.Orgasm += Math.floor(enemies[EnemyIndex].Pussies.length * SexAttack) - 1;
    } else
        player.Arousal += player.Dicks.length * 2 * ESexAttack;
    if (Settings.ImgPack) { //Going to need to split this, surprise surprise.
        ImgChose("MultiPen", enemies[EnemyIndex]);
    }
    if (LastPressed === "MultiPen") {
        DocId("SexText").innerHTML = "Your mind's unable to handle the insane amount of pleasure, and you thrust wildly. Your entire world is focused on the pleasure your dicks are experiencing, fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " holes with your many dicks. Had you more awareness, you would've seen " + enemies[EnemyIndex].FirstName + "'s face in a state of ecstasy, unable to make a sound.";
    } else if (player.Dicks.length > enemies[EnemyIndex].Pussies.length + 1) //1st case: more dicks than all holes 
    {
        DocId("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you are disheartened to see them lack enough holes for your arsenal of penises. Resolved to make the best of it, you pair them up and shove them into any orifice they can reach. Pressing in slowly, you're amazed at how much they stretch around your dicks, and how good it feels. Unable to control your body any longer, your mind takes a back seat as your hips thrust at a manic pace, drowning you in pleasure.";
    } else { //if(player.Dicks.length == enemies[EnemyIndex].Pussies.length + 1) {//2nd case: enough dicks for all holes
        DocId("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you're ecstatic to see enough holes for your arsenal of penises. Resolved to make this an unforgettable experience, you line up your dicks and slowly ease in. Amazed at how much they stretch around your dicks, and how good it feels, your mind barely registers their hips meeting yours. Unable to control your body any longer, your conscious thoughts takes a back seat as your hips thrust at a manic pace, drowning you in pleasure.";
    }
    /*else {//3rd case: They've got enough pussies for your dicks 
    	if (LastPressed === "MultiPen") {
    		DocId("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
    	} else {
    		DocId("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you notice a lack of vagina. Not willing to give one dick priority over the other, you spread their legs and line up your " + player.Dicks[0].Type" dicks with their ass, and press in slowly. To your surprise, they stretch around your dicks with only mild (vocalized) discomfort. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.";
    	}
    }*/
    var v = false;
    for (var i = 0; i < player.Dicks.length; i++) {
        if (player.Dicks[i].Virgin) {
            player.Dicks[i].Virgin = false;
            v = true;
        }
    }
    CheckArousal();
    LastPressed = "DualPen";
    return;
};

function SexActDoggyStyle() {
    if (Settings.ImgPack) {
        ImgChose("DoggyStyle", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "DoggyStyle") {
        DocId("SexText").innerHTML = "You continue fucking them from behind.<br>Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        DocId("SexText").innerHTML = "Commanding " + HisHer(enemies[EnemyIndex]) + " to get down on their all fours you fuck " + HisHer(enemies[EnemyIndex]) + " from behind.<br> Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        DocId("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyle";
    return;
};

function SexActGetBlowjob() {
    if (Settings.ImgPack) {
        ImgChose("GetBlowjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetBlowjob") {
        // DocId("SexText").innerHTML = "You continue humping your new toy at a constant pace. Your rhythm doesn’t falter as you use your muscles to the best of their ability. You lean back as you hilt into the back of their throat, eliciting a moan from you as you start breeding deep."
        if (player.Balls.length > 0) {
            DocId("SexText").innerHTML = "Continuing to thrust, your " + CmToInch(player.Balls[0].Size) + " balls slap repeatedly against your foe, causing them to grunt in annoyance." +
                "Your thrusting continues as you make proper use of your opponent’ s mouth. You grab your foe 's forearm and guide it to your sac, grunting in demand as they start to fondle you.<br><br>"
        }
        DocId("SexText").innerHTML = "Your thrusting continues as you make proper use of your opponent’s mouth. Your pounding of their throat continues even as your abdomen starts bumping into their nose with each thrust. Muffled groans escape from your mouth as " + enemies[EnemyIndex].FirstName + "’s mouth is pumped by your throbbing cock." //They moan as your cock snakes its way through their mouth greedily humps their throat."
    } else {
        DocId("SexText").innerHTML = "You walk up to your defeated adversary as they attempt to get back on their feet. You stop them by catching their head and tilting it up to your face. You look back down at your crotch and nod to your " + CmToInch(player.Dicks[0].Size) + " cock expectantly." +
            " Just as your prize gets the idea and moves closer you eagerly thrust your hips into their mouth. You hold their head close starting a steady rhythm as you use their hole."
        // "Your last blow sends your foe recoiling back losing their footing and crashing to the floor. You make your way up to them until you cast a shadow of their body. Your adversary groans as they start to rise, only to be met with the sight of your (insert player dick size. small, average, hefty, enormous) member. Stunned by the position they are in you grab the back of their head and guide their mouth to its rightful place and begin to enjoy your prize"

    }
    CheckArousal();
    LastPressed = "GetBlowjob";
    return;
};
// Anal
function SexActDoggyStyleAnal() {
    if (Settings.ImgPack) {
        ImgChose("DoggyStyleAnal", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "DoggyStyleAnal") {
        DocId("SexText").innerHTML = "You keep " + HisHer(enemies[EnemyIndex]) + " head down and fuck " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        DocId("SexText").innerHTML = "You order you opponent down on " + HisHer(enemies[EnemyIndex]) + " knees, and position yourself behind them. Pushing " + HisHer(enemies[EnemyIndex]) + " head down, you start fucking " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        DocId("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyleAnal";
    return;
};

function SexActMultiPen() {

};

function SexActGetRimjob() {
    if (Settings.ImgPack) {
        ImgChose("GetRimjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetRimjob") {
        DocId("SexText").innerHTML = "You force your opponent to continue eating out your ass.";
    } else {
        DocId("SexText").innerHTML = "You command your opponent to eat out your ass.";
    }
    CheckArousal();
    LastPressed = "GetRimjob";
    return;
};

function SexActBreastFeed() {
    if (Settings.ImgPack) {
        ImgChose("BreastFeed", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack * 1.2;
    player.Arousal += ESexAttack;
    for (var b = 0; b < player.Boobies.length; b++) {
        player.Boobies[b].Milk -= 100 / player.Boobies.length;
    }
    if (LastPressed === "BreastFeed") {
        DocId("SexText").innerHTML = "You continue feeding them your milk, releiving the pressure in your chest.";
    } else {
        DocId("SexText").innerHTML = "The urge to nurture is strong due the hormones released from your lactating breasts. Wanting release, you take them into your lap and guide " + HisHer(enemies[EnemyIndex]) + " head to your fullest breast. " +
            "At first they assumed you wanted them you suck on your nipples for pleasure, but once their mouth was full they had no choice but to swallow. As they quickly fell in love with the taste, you remove your hand from their head unnoticed, they don't think about stopping their feeding."
    }
    CheckArousal();
    LastPressed = "BreastFeed";
    return;
};

function StopSexButton() {
    battle = false;
    GamePaused = false;
    player.Orgasm = 0;
    player.cumGround = 0;
    DocId("map").style.display = 'block';
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'block';
    DocId("EventLog").style.display = 'block';
    DocId("AfterBattle").style.display = 'none';
    LastPressed = " ";
    // Trying to have ferals disappear after combat	
    /*	console.log(enemies[EnemyIndex].FirstName);
    	if(enemies[EnemyIndex].FirstName === "Feral")
    	{
    		console.log("Removed");
    		enemies.splice(EnemyIndex, 1);
    	}*/
    return;
};

function SexActCapture() {
    House.Dormmates.push(enemies[EnemyIndex]);
    enemies.splice(EnemyIndex, 1);
    battle = false;
    GamePaused = false;
    player.Orgasm = 0;
    player.cumGround = 0;
    DocId("AfterBattle").style.display = 'none';
    DocId("map").style.display = 'block';
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'block';
    DocId("EventLog").style.display = 'block';
    LastPressed = " ";
    return;
}

function Tightness(pipe, hole, mode) {
    if (mode == "A") {
        if (pipe.Dicks[0].Size > hole.Pussies[0].Size + 1) {
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size * 2) {
                return "feels extremly tight";
            } else {
                return "feels tight";
            }
        } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size - 1) {
            if (pipe.Dicks[0].Size * 2 < hole.Pussies[0].Size) {
                return "feels very loose"
            } else {
                return "feels loose";
            }
        } else {
            return "feels like a perfect fit";

        }
    } else if (mode == "B") {
        if (pipe.Dicks[0].Size > hole.Pussies[0].Size - 1) {
            return "feels big in";
        } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size + 1) {
            return "feels small in";
        } else {
            return "feels like a perfect fit to";
        }
    }
}

function HisHer(Gender) {
    switch (CheckGender(Gender)) {
        case "male":
            return "his";
        case "female":
            return "her";
        case "hermaphrodite":
            return "their";
        default:
            return "their";
    }
}
const SpellDict = {
    Template: {
        Name: "Template", // Display Name
        Type: "Temp", // Spell "Type" 
        ManaCost: function () {
            return Math.ceil(40 * 100 / (100 + player.MagicAffinity.Temp))
        }, // Mana cost should maybe be lowerd here?
        Does: function (exp) {

        }, // short description of spell & value of action in this case "40 fire type dmg" 
        Succes: function () {},
        Fail: function () {
            AddToBattleLog(``); // So it doesn't look like enemy attacked you.
            return "" // e.g you are to exhausted to cast template.
        },
        Cast: function (index, ee) {
            AddToBattleLog(this.Succes());
        }
    },
    Fireball: {
        Name: "Fireball",
        Type: "Fire",
        ManaCost: function () {
            return Math.ceil(40 * 100 / (100 + player.MagicAffinity.Fire))
        },
        Does: function (Exp) {
            return Math.floor(20 * (player.Int / 20) + (Exp / 100))
        },
        Succes: function (dmg) {
            AddToBattleLog(`You threw a ball covered in fire, dealing ${dmg} damage to their health!`);
            player.Mana -= this.ManaCost();
            if (typeof player.MagicAffinity[this.Type] !== 'undefined') {
                player.MagicAffinity[this.Type]++;
            }
        },
        Fail: function () {
            AddToBattleLog(`You're exhausted, and can't cast another fireball...`)
        },
        Cast: function (index, ee) {
            if (player.Mana >= this.ManaCost()) {
                const that = player.Spells[index],
                    PAttack = Math.floor(RandomInt(3, 5) * this.Does(that.Exp) / 4)
                ee.Health -= PAttack; // * MagRes(ee);
                that.Exp++;
                this.Succes(PAttack);
            } else {
                this.Fail();
            }
        }
    },
    MinorHealing: {
        Name: "Minor healing",
        Type: "Restoration",
        ManaCost: function () {
            return Math.ceil(30 * 100 / (100 + player.MagicAffinity.Restoration))
        },
        Does: function (Exp) {
            return Math.floor(25 * (player.Int / 20) + (Exp / 100))
        },
        Succes: function (Heal) {
            AddToBattleLog(`You healed for ${Heal}`);
            player.Mana -= this.ManaCost();
            if (typeof player.MagicAffinity[this.Type] !== 'undefined') {
                player.MagicAffinity[this.Type]++;
            }
        },
        Fail: function () {
            AddToBattleLog(`Fail`);
        },
        Cast: function (index, ee) {
            const that = player.Spells[index],
                ManaCost = this.ManaCost(), // Affinity will lower cost
                Heal = this.Does(that.Exp)
            if (player.Mana > ManaCost) {
                if (player.Health > player.MaxHealth) {
                    AddToBattleLog(`You already have full health.`)
                } else if (player.Health + Heal > player.MaxHealth) {
                    player.Mana -= ManaCost;
                    player.Health = player.MaxHealth;
                    this.Succes(Heal);
                } else {
                    player.Mana -= ManaCost;
                    player.Health += Heal;
                    this.Succes(Heal);
                }
            } else {
                this.Fail();
            }
        }
    }
}
const SpellDictLite = { // Add spells from here no need to save what it does
    Template: {
        Name: "",
        Exp: 0,
        Title: ""
    },
    Fireball: {
        Name: "Fireball",
        Exp: 0, // I think I want magic to be a thing which gets better with use
        Title: "Cast a fire ball dealing phyical damage to your enemies."
    },
    MinorHealing: {
        Name: "MinorHealing",
        Exp: 0,
        Title: "Basic first aid spell, to heal minor wounds."
    }
}
function TotalStr() { // Testing order
    var Str = player.Str;
    // Add precent buffs to player raw stats 
    // Maybe negative?
    // Maybe precent negative?
    // #TODO Add bonus for player with alot of muscle and a negative for little, should add a negative impacted stats to like agility?
    //Str += EquipMent(); // Add raw buffs e.g. +3 str weapon work for negative values to.
    switch (player.Race.toLowerCase()) { // Race buffs
        case "orc":
            Str += 4; // Maybe multiple by race ess amount / 100 ?
            break;
        case "equine":
            Str += 3;
            break;
        case "fairy":
            Str -= 7;
            break;
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        case "orc":
            Str += 2;
            break;
        case "fairy":
            Str -= 2;
            break;
        case "equine":
            Str += 1;
            break;
        default:
            break;
    }
    return Str;
}

function TotalInt() {
    var Int = player.Int;
    //Int += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Int
}

function TotalCharm() {
    var Charm = player.Charm;
    //Charm += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Charm
}

function TotalWill() {
    var Will = player.Will;
    //Will += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Will;
}

function TotalEnd() {
    var End = player.End;
    //End += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return End;
}

function TotalSexSkill() {
    var SexSkill = player.SexSkill; // Should I keep this as a basic stat? Maybe change it so it's own skill system?
    //SexSkill += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return SexSkill;
}
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
            DocId(str).value = VorePerks.hasOwnProperty(str) ? VorePerks[str].Count > 0 ?
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
    DocId("AbsorbEssenceSetting").value = `Absorb Essence ${VoreSettings.AbsorbEssence}`;
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
                    console.log("Stomach")
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
                    console.log("Vagina")
                }
                EventLog(`The only trace left of ${e.Name} ${e.Race} ${e.FirstName} ${e.LastName} is a trail of pussy discharge traveling down your legs.`);
                Vore.Vagina.splice(Vore.Vagina.findIndex(i => i === e), 1);
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
                    console.log("Breast")
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
                    console.log("Balls")
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
                Vore.Anal.splice(Vore.Anal.findIndex(i => i === e), 1);
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
 function VoreActionsOralVore() {
     if (enemies[EnemyIndex].Weight < StomachCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("OralVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Stomach.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         DocId("SexText").innerHTML = "You walk up to your foe with a primal hunger in your abdomen. Your foe is still groggy from the beating you gave them, will fulfill your stomach's desire." +
             " You swiftly grab their head with your hands and bring their face to yours. They grunt, expecting a make-out session, only for their eyes to widen as your mouth does the same. You take in their head in one motion and " +
             "pin their arms to their waist, holding them in place. You lick their face, enjoying their taste, as you lean forward, pushing their head and neck into your greedy throat.<br><br> Loud gulping noises can be heard as you stretch your mouth even further " +
             "and take in their shoulders. Your muscles strain and bulge as you lift your meal off the ground, suspending them in the air, allowing their torso to slide down into your stomach, leaving only their weakly-flailing legs outside." +
             " Your stomach bulges as they enter your guts, which give a rumble of approval and anticipation for the rest of its meal. Your hands make their way up to their calves as you grip tightly and give a hard shove, pushing them in to their ankles." +
             "<br><br>You open wide and let their feet slide in, your jaws snapping shut as your food is forced to accept its fate. Your filled stomach stretches and heaves as your prey struggles and pushes in futile attempts to free itself.";
         if (StomachCapacity() / MaxStomachCapacity() > 0.5) {
             DocId("SexText").innerHTML += " You struggle to get back to your feet, your distended stomach sagging heavily with its weight. You wince in discomfort, walking bow-legged for a little to handle its weight.";
         }
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit more into your stomach!";
     }
     return;
 };

 function VoreActionsUnbirth() {
     if (enemies[EnemyIndex].Weight < VaginaCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("Unbirth", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Vagina.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         DocId("SexText").innerHTML = "Grabbing your opponent, you shove into your pussy!";
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit more into your vagina!";
     }
     return;
 };

 function VoreActionsCockVore() {
     if (enemies[EnemyIndex].Weight < BallsCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("CockVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Balls.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         if (player.SecondRace !== "centaur") { // Isn't it !=
             DocId("SexText").innerHTML = "Your confidently stride up to your opponent, looking at your next meal's form as your reach for your waist. They bend their head forward, and aren't surprised when they are greeted with your erect cock." +
                 " They open their mouth to start sucking, only for your dick to stretch wide as well. Before they have time to react, you thrust forward, quickly enveloping their head within your dick. You use your hands to squeeze the newest bulge in your member as you eagerly thrust around your foe, slowly forcing them deeper with each hump." +
                 " <br><br>Your breathing deepens as their shoulders begin their journey to your sac, stretching your dick wide to accommodate its food. Both of your hands reach around your massively-distended dick as you rub over the bulge its food is making." +
                 " Your sac churns audibly with hunger for its meal, salivating precum to speed up your foe's descent. Your massaging actions causes squelching sounds as your now-massive member greedily sucks in their waist." +
                 " Having recovered slightly from their initial shock they frantically wiggle, causing their body to twist and squirm within your member, their struggles bringing you waves of pleasure as you shiver from their protests. <br><br>You lift your cock with both hands, giving it long, slow strokes to speed up its meal." + // Both hands; your enemy's too heavy for one arm still
                 " You sigh, giving soft humps as all that remains of your foe is a bulge in your shaft, sliding down. Loud sloshing sounds can be heard as your cock's recent meal ends its journey and is deposited in your sac. Your nuts heave and drag against the floor as you haul your soon-to-be load off with you.";
         } else {
             DocId("SexText").innerHTML = "Seeing your opponent lying there defeated gives you an idea; your cock stiffening in anticipation as you make your way to your soon-to-be prey. Your foe looks up from their position and jumps from your large equine form blocking out the sun." +
                 " Standing over your foe you convey your desires as your cock makes a loud 'thwap' against your stomach. Your opponent gets the idea, slowly approaching your shaft(s) and hesitantly stretching their hands forward." +
                 "<br><br> Sensing their hesitation, you made a deafening stomp with your hooves, causing your foe to quickly stroke your dick. You pull your hips back away from your foe, confusing their expectations - they thought you wanted a simple blowjob." +
                 " An excited whip of your tail and a small grunt of dominance are the only signs your prey receive - you make a single thrust at your opponent’s head, your equine shaft hungrily grabbing them up to their chest." +
                 " You instinctively snort as you claim your foe with your cock, its muscles sucking on their form, as if tasting them. Desperate for more, you flex your groin with immense strength and pull your prey in up to their crotch." +
                 "<br><br> Gasps of nerve-wracking pleasure escape you as your prey begins its fruitless struggles inside your monstrous shaft. Not wanting to risk an early orgasm (and releasing them), you repeatedly flex your cock, causing it to beat your meal into submission against your stomach." +
                 " Pleased with your display of power over your meal, you pull in their legs with little effort and seal your cock head around their feet. You sigh in relief as you feel the rest of your prey deposited in your sac. Feeling sated, you make your way back to the road, your nuts sagging heavily between your legs."
         }
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You can't fit any more into your balls!";
     }
     return;
 };

 function VoreActionsBreastVore() {
     if (enemies[EnemyIndex].Weight < BreastCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("BreastVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Breast.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         var i = "left";
         if (Math.random() > 0.5)
             i = "right";
         DocId("SexText").innerHTML = "Grabbing your opponent, you shove them into your " + i + " nipple.";
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit them into your breasts!";
     }
     return;
 };

 function VoreActionsAnalVore() {
     if (enemies[EnemyIndex].Weight < AnalCapacity() + 100) {
         if (Settings.ImgPack) {
             ImgChose("AnalVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Anal.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         if (player.SecondRace !== "centaur") {
             DocId("SexText").innerHTML = "Seeing your foe fall, you eagerly make your way up to them as you unbutton your pants and undergarments. Your foe sighs as they imagine what you’re going to do next. " +
                 "You turn your body around and lower your ass cheeks to their face. They grab your ass with their hands and bring their mouth to your hole, seeing no other option. Your alternative plan starts as you push your ass forcefully against their face." +
                 " Your foe gasps in surprise as your hole touches their nose and stretches, enveloping their head.<br><br> Muffled protests come from your waist as they instinctively push against your cheeks, attempting to free themselves." +
                 " You squat down and grunt as your rectum pulls hard, forcing your meal up to their chest. As their shoulders get pulled in, their arms can't push against your ass, making it easier to pull them in." +
                 " Your wince as your food makes its way through your gut, stretching it as you pull them in.<br><br> You notice that only their legs are left; you grin and straighten your back, using their limbs as a pseudo-chair." +
                 " You bounce your hips, hammering them further into your bowels. Your cheeks make contact with the ground as they hungrily shove the last of your foe into your depths." +
                 " Rough shoves and struggles in your gut are all that is left of them as your gut conforms and kneads its meal.";
         } else {
             DocId("SexText").innerHTML = "As your foe crumbles from your back hooves' last kick, you decide to keep your back turned and slowly back into them." +
                 " Rubbing their head from the final blow, your opponent has only a second to notice your large equine rear descending on them, trapping them in darkness. Rough grunting and the sounds of squeezing accompany this surprise as you lift your foe up to their chest with your twisted strength." +
                 "<br><br> Your tail flicks upward sharply with each contraction of your anal muscles, your ass feasting upon the poor soul trapped inside. The impressive display of control you have over your rear continues as your prey suddenly disappears up to their waist into your bowels." +
                 " Pleasurable struggles are given to you from inside your equine half as your conquest twists and pushes your sensitive walls, encouraging you to finish your meal.<br><br> Not wanting to disappoint your gut, you make one last effort to envelop your foe with your rectum." +
                 " With immense force, their legs are pulled in, leaving their ankles and feet squeezed harshly by your ass. With a loud \"schluck\" their ankles are pulled in, their feet following close behind." +
                 " A satisfied sigh leaves your mouth, and your ass, as you wiggle your hips in victory over your foe. You head back on your journey, your intestines beginning their work on the fresh meat you've conquered."
         }
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit any more into your bowels!";
     }
     return;
 };

 function HideVore() {
     AfterBattleButtons(false, true)
 }
DocId("VoreLooks").addEventListener("click", function () {
    DisplayNone();
    DocId("ShowVore").style.display = 'grid';
    DocId("VorePerkMenu").style.display = 'none';
    DocId("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
    VoreButtonsFunc();
});

function VoreButtonsFunc() {
    const con = DocId("VoreButtons");
    while (con.hasChildNodes()) {
        con.removeChild(con.lastChild);
    };
    // Local functions for repeting actions
    const Back = () => {
        const temp = InputButton("Back");
        temp.addEventListener("click", function () {
            VoreButtonsFunc();
        });
        return temp;
    };
    const innerConFunc = () => {
        const temp = document.createElement("div");
        temp.classList.add("VoreButtons");
        return temp;
    };
    const Preys = (arr) => {
        const Frag = document.createDocumentFragment();
        for (let e of arr) {
            EssenceCheck(e);
            Frag.appendChild(PreyButton(e, arr));
        };
        return Frag
    }
    const Capacity = (cap, maxcap) => {
        return `${KgToPound(maxcap - cap)} prey<br>${KgToPound(maxcap)} Max`
    }
    const {
        VoreSettings
    } = Settings, {
        Vore
    } = player;

    const innerCon = innerConFunc(),
        ShowStomach = ButtonButton(`Stomach<br>${Capacity(StomachCapacity(),MaxStomachCapacity())}`),
        ShowVagina = ButtonButton(`Pussy<br>${Capacity(VaginaCapacity(), MaxVaginaCapacity())}`),
        ShowBreast = ButtonButton(`Breast<br>${Capacity(BreastCapacity(), MaxBreastCapacity())}`),
        ShowBalls = ButtonButton(`Balls<br>${Capacity(BallsCapacity(), MaxBallsCapacity())}`),
        ShowAnal = ButtonButton(`Anal<br>${Capacity(AnalCapacity(), MaxAnalCapacity())}`),
        VorePerks = ButtonButton(`Vore perks<br>(${Vore.VorePoints}p)`);

    ShowStomach.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Stomach));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const StomachDigestion = InputButton(`Stomach digestion ${VoreSettings.StomachDigestion}`);
        StomachDigestion.addEventListener("click", function () {
            VoreSettings.StomachDigestion = VoreSettings.StomachDigestion ? false : true;
            StomachDigestion.setAttribute("value", `Stomach digestion ${VoreSettings.StomachDigestion}`);
        });
        con.appendChild(StomachDigestion);
        con.appendChild(Back());
    });

    ShowVagina.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Vagina));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const ChildTF = InputButton(`Child tf/Age reduc ${VoreSettings.ChildTF}`);
        ChildTF.addEventListener("click", function () {
            VoreSettings.ChildTF = VoreSettings.ChildTF ? false : true;
            VoreSettings.VCumDigestion = false;
            VCumDigestion.setAttribute("value", `Digestion ${VoreSettings.VCumDigestion}`);
            ChildTF.setAttribute("value", `Child tf/Age reduc ${VoreSettings.ChildTF}`);
        });
        con.appendChild(ChildTF);
        const VCumDigestion = InputButton(`Digestion ${VoreSettings.VCumDigestion}`);
        VCumDigestion.addEventListener("click", function () {
            VoreSettings.VCumDigestion = VoreSettings.VCumDigestion ? false : true;
            VoreSettings.ChildTF = false;
            VCumDigestion.setAttribute("value", `Digestion ${VoreSettings.VCumDigestion}`);
            ChildTF.setAttribute("value", `Child tf/Age reduc ${VoreSettings.ChildTF}`);
        });
        con.appendChild(VCumDigestion);
        con.appendChild(Back());
    });

    ShowBreast.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Breast));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const MilkTF = InputButton(`Milk transformation ${VoreSettings.MilkTF}`);
        MilkTF.addEventListener("click", function () {
            VoreSettings.MilkTF = VoreSettings.MilkTF ? false : true;
            MilkTF.setAttribute("value", `Milk transformation ${VoreSettings.MilkTF}`);
        });
        con.appendChild(MilkTF);
        con.appendChild(Back());
    });

    ShowBalls.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Balls));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const CumDigestion = InputButton(`Cum transformation ${VoreSettings.CumTF}`);
        CumDigestion.addEventListener("click", function () {
            VoreSettings.CumTF = VoreSettings.CumTF ? false : true;
            CumDigestion.setAttribute("value", `Cum transformation ${VoreSettings.CumTF}`);
        });
        con.appendChild(CumDigestion);
        con.appendChild(Back());
    });

    ShowAnal.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Anal));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const CumDigestion = InputButton(`Anal Digestion ${VoreSettings.AnalDigestion}`);
        CumDigestion.addEventListener("click", function () {
            VoreSettings.AnalDigestion = VoreSettings.AnalDigestion ? false : true;
            CumDigestion.setAttribute("value", `Anal Digestion ${VoreSettings.AnalDigestion}`);
        });
        con.appendChild(CumDigestion);
        con.appendChild(Back());
    });

    VorePerks.addEventListener("click", function () {
        VorePerkFunc();
    });

    [ShowStomach, ShowVagina, ShowBreast, ShowBalls, ShowAnal, VorePerks].forEach((button) => {
        if (button instanceof HTMLElement) {
            innerCon.appendChild(button);
        };
    });
    con.appendChild(innerCon);
    console.log(con)
    con.style.display = 'block';
}

function PreyButton(e, arr) {
    const color = () => {
        switch (CheckGender(e)) {
            case "female":
                return "Pink";
            case "male":
                return "Blue";
            case "hermaphrodite":
                return "Purple";
            case "doll":
                return "Beige";
        }
    };
    const prey = ButtonButton(`${e.Name} ${e.Race}<br>${Pronoun(CheckGender(e))}<br>
    <br>Height:${CmToInch(e.Height)}<br>Weight:${KgToPound(e.Weight)}`);
    prey.addEventListener("click", function () {
        //ThePrey(e);
        console.log(arr.findIndex(i => i === e));
        const con = DocId("VoreButtons");
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const h3 = document.createElement("h3"),
            h3Text = document.createTextNode(`${e.Name} ${e.Race}`);
        h3.appendChild(h3Text);
        con.appendChild(h3);
        const regulate = InputButton("Regurgitate");
        regulate.addEventListener("click", function () {
            console.log(arr.findIndex(i => i === e));
            // Check so that prey haven't already been digested.
            if (arr.findIndex(i => i === e) > -1) {
                arr.splice(arr.findIndex(i => i === e), 1);
            }
            VoreButtonsFunc();
        });
        con.appendChild(regulate)
        const back = InputButton("Back");
        back.addEventListener("click", function () {
            VoreButtonsFunc();
        });
        con.appendChild(back);
    });
    prey.style.backgroundColor = color();
    if (e.hasOwnProperty("StartWeight")) {
        prey.style.opacity = 0.5 + (0.5 * (e.Weight / e.StartWeight));
    }
    return prey
};

var PreyIndex;
