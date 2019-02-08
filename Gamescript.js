    // player variable
    var player = {
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
        isTaur: "false", // Testing, Not sure if useless or not
        OrganMod: {
            Dick: {
                Size: 0
            },
            Boobies: {
                Size: 0
            },
            Balls: {
                Size: 0
            },
            Pussy: {
                Size: 0
            },
            Anal: {
                Size: 0
            }
        },
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
        Masc: 25,
        Femi: 25,
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
            Mountain: false
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
            AnalDigestion: true
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
        }
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

    // Start values for canvas
    var medium = Math.ceil((document.documentElement.clientHeight / 20) * Settings.MapPercent) * 20;
    var grid = (medium / 20);
    var sprite = {
        x: grid,
        y: grid,
        Size: grid
    };

    // Start page
    document.getElementById("GoToCharCreator").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'Block';
        document.getElementById("StartPage").style.display = 'none';
    });

    // Start på char creator
    document.getElementById("Begin").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'none';
        document.getElementById("page2").style.display = 'block';
        document.getElementById("startgame").style.display = 'none';
        player.Name = document.getElementById("firstname").value;
        player.LastName = document.getElementById("lastname").value;
        player.Face.HairColor = document.getElementById("haircolor").value;
        player.Skincolor = document.getElementById("skincolor").value;
        player.MaxHealth = 100;
        player.MaxWillHealth = 100;
        player.Health = player.MaxHealth;
        player.WillHealth = player.MaxWillHealth;
        player.Mana = 100;
        player.Spells.push(SpellDictLite.MinorHealing);
        document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
    });

    document.getElementById("BackHome").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'none';
        document.getElementById("StartPage").style.display = 'block';
    });

    // Ge karaktär start värden
    document.getElementById("Begin").addEventListener("click", function () {
        document.getElementById("startgame").style.display = 'inline-block';
        document.getElementById("looks").innerHTML = "You are  " + player.Name + " " + player.LastName + ", a " + Math.round(player.Height) + "cm tall " + Pronoun(CheckGender(player)) +
            ", who weighs " + KgToPound(player.Weight) + ". Looking at yourself in a mirror you see " + player.Haircolor + " hair and " + player.Skincolor +
            " skin; hopefully the last time you see your body absent of any other details or personality.<br><br>For today, you will forge your own way in this world.";

        requestAnimationFrame(loop);
        DateEngine();

    });

    document.getElementById("StartAutoEssence").addEventListener("click", function () {
        Settings.EssenceAuto = !Settings.EssenceAuto;
        document.getElementById("StartAutoEssence").value = "Auto TF " + Settings.EssenceAuto;
        if (Settings.BalanceParts) {
            Settings.BalanceParts = false;
            document.getElementById("Balance").value = "Balance " + Settings.BalanceParts;
        }
    });

    /**
     *     document.getElementById("Balance").addEventListener("click", function () {
            if (Settings.EssenceAuto) {
                Settings.BalanceParts = !Settings.BalanceParts;
                document.getElementById("Balance").value = "Balance " + Settings.BalanceParts;
            }
        });
     */

    document.getElementById("startgame").addEventListener("click", function () {
        document.getElementById("page2").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
    });

    // Sets display to none used for menu buttons
    function DisplayNone() {
        battle = true;
        if (player.hasOwnProperty("Spells"))
            player.Spells.Fireball = player.Spells.FireballMax;
        document.getElementById("map").style.display = 'none'
        document.getElementById("optionpage").style.display = 'none';
        document.getElementById("ShowLooks").style.display = 'none';
        document.getElementById("LevelMenu").style.display = 'none';
        document.getElementById("LoadMenu").style.display = 'none';
        document.getElementById("SaveMenu").style.display = 'none';
        document.getElementById("PerksMenu").style.display = 'none';
        document.getElementById("PerkOptionsMenu").style.display = 'none';
        document.getElementById("ShowQuests").style.display = 'none';
        document.getElementById("DetailedInfo").style.display = 'none';
        document.getElementById("Levels").style.display = 'none';
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("EssenceOptionsMenu").style.display = 'none';
        document.getElementById("PronounForm").style.display = 'none';
        document.getElementById("Inventory").style.display = 'none';
        document.getElementById("ChildrenMenu").style.display = 'none';
        document.getElementById("SpellBook").style.display = 'none';
        if (window.innerHeight < 600) {
            document.getElementById("map").style.display = 'none';
            document.getElementById("buttons").style.display = 'none';
            document.getElementById("status").style.display = 'none';
            document.getElementById("EventLog").style.display = 'none';
        }
    }

    function DisplayGame() {
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        battle = false;
        if (MobileButtons) {
            document.getElementById("buttons").style.width = 17 + "%";
            document.getElementById("buttons").style.maxWidth = 260 + "px";
            document.getElementById("FirstButtons").style.display = 'none';
            document.getElementById("SecondButtons").style.display = 'none';
            MobileButtons = false;
        }
    }

    document.getElementById("Options").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("optionpage").style.display = 'block';
        document.getElementById("ImgPack").value = "Img pack: " + Settings.ImgPack;
        document.getElementById("LogLength").innerHTML = Settings.LogLength;
        document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
        document.getElementById("Inch").value = "Inch " + Settings.Inch;
    });

    document.getElementById("FontSmaller").addEventListener("click", function () {
        Settings.FontSize -= 0.05;
        document.body.style.fontSize = Settings.FontSize + "em";
        document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
    });

    document.getElementById("FontBigger").addEventListener("click", function () {
        Settings.FontSize += 0.05;
        document.body.style.fontSize = Settings.FontSize + "em";
        document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
    });

    document.getElementById("SetPronoun").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("PronounForm").style.display = 'block'
    });

    document.getElementById("Log+10").addEventListener("click", function () {
        Settings.LogLength += 10;
        document.getElementById("LogLength").innerHTML = Settings.LogLength;
    });

    document.getElementById("Log-10").addEventListener("click", function () {
        Settings.LogLength -= 10;
        document.getElementById("LogLength").innerHTML = Settings.LogLength;
    });

    document.getElementById("AcceptPronoun").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("optionpage").style.display = 'block';
        Settings.Pronoun.Herm = document.getElementById("Herm").value;
        Settings.Pronoun.Male = document.getElementById("Male").value;
        Settings.Pronoun.Female = document.getElementById("Female").value;
        Settings.Pronoun.Doll = document.getElementById("Doll").value;
        Settings.Pronoun.DickGirl = document.getElementById("DickGirl").value;
        Settings.Pronoun.CuntBoy = document.getElementById("CuntBoy").value;
        Settings.Pronoun.Status = true;
    });

    document.getElementById("Inch").addEventListener("click", function () {
        switch (Settings.Inch) {
            case true:
                Settings.Inch = false;
                break;
            default:
                Settings.Inch = true;
                break;
        }
        document.getElementById("Inch").value = "Inch " + Settings.Inch;
    });

    // LocalPortal
    document.getElementById("TeleportHome").addEventListener("click", function () {
        player.Area = "First";
        player.Map = "RoadToHome";
        document.getElementById("LocalPortal").style.display = 'none';
        DisplayGame();
    });


    // More buttons for small screen height
    document.getElementById("MoreButtons").addEventListener("click", function () {
        document.getElementById("FirstButtons").style.display = 'none';
        document.getElementById("SecondButtons").style.display = 'block';
    });

    document.getElementById("LessButtons").addEventListener("click", function () {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtons").style.display = 'none';
    });

    // Save options
    document.getElementById("saveoptions").addEventListener("click", function () {
        document.getElementById("optionpage").style.display = 'none';
        DisplayGame();

        document.body.style.backgroundColor = document.getElementById("backcolor").value;
        MapColor = document.getElementById("MapColor").value;
        document.body.style.color = document.getElementById("textcolor").value;
        document.body.style.fontFamily = document.getElementById("textfont").value;

        Settings.MapPercent = document.getElementById("MapScale").value;
        Settings.BackColor = document.getElementById("backcolor").value;
        Settings.MapColor = document.getElementById("MapColor").value;
        Settings.TextColor = document.getElementById("textcolor").value;
        Settings.TextFont = document.getElementById("textfont").value;
        Settings.BorderColor = document.getElementById("BorderColor").value;

        HemScale();
    });

    document.getElementById("PerkOptions").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("PerkOptionsMenu").style.display = 'block';
        document.getElementById("Skip").value = "Skip " + Settings.Skip;
        document.getElementById("OptionGiveEssence").value = Settings.GiveEssence;
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
        document.getElementById("MBalance").value = "Balance " + Settings.BalanceParts;
    });

    document.getElementById("Skip").addEventListener("click", function () {
        Settings.Skip = !Settings.Skip;
        document.getElementById("Skip").value = "Skip " + Settings.Skip;
    });

    document.getElementById("MBalance").addEventListener("click", function () {
        if (Settings.EssenceAuto) {
            Settings.BalanceParts = !Settings.BalanceParts;
            document.getElementById("MBalance").value = "Balance " + Settings.BalanceParts;
        }
        EssenceCheck(player);
        for (var q = 0; q < enemies.length; q++)
            EssenceCheck(enemies[q]);
    });

    document.getElementById("OptionGiveEssence").addEventListener("click", function () {
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
        document.getElementById("OptionGiveEssence").value = Settings.GiveEssence;
    });

    document.getElementById("PerkOptionsLeave").addEventListener("click", function () {
        document.getElementById("PerkOptionsMenu").style.display = 'none';
        DisplayGame();
    });

    document.getElementById("Looks").addEventListener("click", function () {
        DisplayNone();
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("ShowLooks").style.display = 'block';
        // Update for Looksmenu #Moved it here because there is no need to have it update every loop.
        document.getElementById("StatusMascFemi").innerHTML = "Masculinity: " + Math.round(player.Masc) + "<br> Femininity: " + Math.round(player.Femi);

        document.getElementById("looks2").innerHTML = "You are " + player.Name + " " + player.LastName + ", a " + CmToInch(Math.round(player.Height)) + " tall " + RaceDesc(player) + " " + Pronoun(CheckGender(player)) +
            ". Looking at yourself in a mirror you see " + player.Face.HairColor + " " + player.Face.HairLength + " hair, " + player.Face.Eyes + " eyes and " + player.Skincolor + " skin.";

        if (player.Pregnant.Babies.length > 0) {
            if (player.Pregnant.Babies[0].BabyAge < 30) {
                document.getElementById("looks2").innerHTML += "<br><br> You are pregnant"

            } else {
                document.getElementById("looks2").innerHTML += "<br><br> You are " + Math.round(player.Pregnant.Babies[0].BabyAge / 30) + " months pregnant."
            }
        }
        document.getElementById("StatusFitness").innerHTML = "Age: " + player.Age + "years old<br>Weight: " + KgToPound(player.Weight) + "<br>" + "Fat: " + KgToPound(player.Fat) + "<br>Muscle: " + KgToPound(player.Muscle) + "<br>" + Fitness(player);
        document.getElementById("genitals2").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
        // End update Looksmenu

    });

    document.getElementById("CloseLooks").addEventListener("click", function () {
        document.getElementById("ShowLooks").style.display = 'none';
        DisplayGame();
    });

    document.getElementById("ExtraInfo").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("DetailedInfo").style.display = 'block';
        document.getElementById("FullRace").innerHTML = player.Race + " " + player.SecondRace + "<br><br>" + DetailedRaceDesc();
        document.getElementById("Pregnancy").innerHTML = "Times you have impregnated: " + Flags.Impregnations + "<br> Times you have been pregnant: " + Flags.Pregnations;
        document.getElementById("ExtraStats").innerHTML = "Virility: " + player.Virility + "<br>Fertility: " + player.Fertility + "<br>Essence drain: " + player.EssenceDrain +
            "<br>Give essence: " + player.GiveEssence + "<br> passive rest rate: " + player.RestRate;
    });

    document.getElementById("Perks").addEventListener("click", function () {
        // Moved everything to the button to clean up the player var.
        DisplayNone();
        document.getElementById("Levels").style.display = 'block';
        var printStats = "<h3>Stats:</h3><br> Str: " + player.Str + "<br>End: " + player.End + "<br>Will: " +
            player.Will + "<br>Charm: " + player.Charm + "<br>Int: " + player.Int + "<br>Skill: " + player.SexSkill + "<br>";
        document.getElementById("StatLevels").innerHTML = printStats;

        var printPerks = "<h3>Perks:</h3><br>";
        for (var i = 0; i < Object.keys(player.Perks).length; i++) {
            if (player.Perks[Object.keys(player.Perks)[i]].Count > 0) {
                printPerks += Object.keys(player.Perks)[i] + ": " + player.Perks[Object.keys(player.Perks)[i]].Count + "<br>";
            }
        }
        document.getElementById("PerkLevels").innerHTML = printPerks;
        var Races = "<h3>Race:</h3><br>";
        var RaceTotal = 0;
        for (var e = 0; e < player.RaceEssence.length; e++) {
            RaceTotal += player.RaceEssence[e].amount;
        }
        for (var e = 0; e < player.RaceEssence.length; e++) {
            Races += player.RaceEssence[e].Race + ": " + Math.round(player.RaceEssence[e].amount / RaceTotal * 100) + "%  (" + player.RaceEssence[e].amount + ")<br>"
        }
        document.getElementById("RaceEssences").innerHTML = Races;

        if (Settings.Vore) {
            var printVore = "<h3>Vore:</h3><br>";
            var v = player.Vore.VorePerks;
            if (Object.keys(v).length > 0) {
                for (var i = 0; i < Object.keys(v).length; i++) {
                    printVore += Object.keys(v)[i] + ": " + v[Object.keys(v)[i]].Count + "<br>";
                }
            }
            document.getElementById("VLevels").innerHTML = printVore;
        } else
            document.getElementById("VLevels").innerHTML = "";
    });

    document.getElementById("CloseExtra").addEventListener("click", function () {
        document.getElementById("DetailedInfo").style.display = 'none';
        DisplayGame();
    });

    document.getElementById("CloseLevel").addEventListener("click", function () {
        document.getElementById("Levels").style.display = 'none';
        DisplayGame();
    });

    document.getElementById("Quests").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("ShowQuests").style.display = 'block';

        var questText = " ";
        for (var e = 0; e < player.Quests.length; e++) {
            var Tier = "";
            if (player.Quests[e].hasOwnProperty("Tier")) {
                Tier = "<br>Tier: " + player.Quests[e].Tier;
                if (player.Quests[e].Tier > 4) {
                    Tier += " max";
                }
            }
            questText += "<div><h4>" + player.Quests[e].Name + "</h4>" + "Completed: " + player.Quests[e].Completed + " <br>Count: " +
                player.Quests[e].Count + Tier + "<br><br></div>";
        }
        document.getElementById("QuestTexts").innerHTML = questText;
    });

    document.getElementById("QuestsLeave").addEventListener("click", function () {
        document.getElementById("ShowQuests").style.display = 'none';
        DisplayGame();
    });

    function RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function RandomString(array) {
        return array[Math.floor(Math.random() * array.length)];
    }


    var battle = false;

    function Pronoun(gender) {
        switch (gender) {
            case "hermaphrodite":
                if (Settings.Pronoun.Status) {
                    return Settings.Pronoun.Herm
                } else {
                    return gender;
                }
            case "cuntboy":
                if (Settings.Pronoun.Status) {
                    return Settings.Pronoun.CuntBoy;
                } else {
                    return gender;
                }
            case "male":
                if (Settings.Pronoun.Status) {
                    return Settings.Pronoun.Male
                } else {
                    return gender;
                }
            case "female":
                if (Settings.Pronoun.Status) {
                    return Settings.Pronoun.Female
                } else {
                    return gender;
                }
            case "dickgirl":
                if (Settings.Pronoun.Status) {
                    return Settings.Pronoun.DickGirl;
                } else {
                    return gender;
                }
            case "doll":
                if (Settings.Pronoun.Status) {
                    return Settings.Pronoun.Doll
                } else {
                    return gender;
                }
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
        var gender;
        if (who.Dicks.length > 0 && who.Pussies.length > 0) {
            gender = "hermaphrodite";
        } else if (who.Dicks.length > 0 && Math.floor(who.Boobies[0].Size) > 0) {
            gender = "dickgirl";
        } else if (who.Dicks.length > 0) {
            gender = "male";
        } else if (who.Pussies.length > 0 && who.Boobies[0].Size < 1) {
            gender = "cuntboy";
        } else if (who.Pussies.length > 0) {
            gender = "female";
        } else {
            gender = "doll"
        }
        return gender;
    }
    // Level System

    function ExpCheck() {
        var MaxExp = 30 * Math.pow(1.05, player.level - 1);
        document.getElementById("StatusLevel").style.width = Math.min(100 * (player.Exp / MaxExp), 100) + "%";
        if (player.SkillPoints > 0 || player.PerkPoints > 0) {
            document.getElementById("LevelButton").style.display = 'inline-block';
        } else {
            document.getElementById("LevelButton").style.display = 'none';
        }
        if (player.Exp >= MaxExp) {
            player.Exp = player.Exp - MaxExp;
            player.level++;
            player.SkillPoints += 3;
            player.PerkPoints += 1;
            return;
        }
    }

    function StringCounter(array, string) {
        var counts = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === string) {
                counts++;
            }
        }
        return counts;
    }

    // function to update player & enemy stats, check if you win or lose and deal damage to player

    var enemies = [];

    document.getElementById("ImgPack").addEventListener("click", function () {
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
            case true:
                Settings.ImgPack = false;
                break;
        }

        document.getElementById("ImgPack").value = "Img pack: " + Settings.ImgPack;
    });

    function ImgChose(who, what, who2) {
        var myimg = new Image();
        var a = who.Race;
        var b = CheckGender(who);
        var c = what;
        var d = who2.Race;
        var e = CheckGender(who2);
        var source;
        switch (Settings.ImgPack) {
            case "Mode1":
                source = a + b + c;
                break;
            case "Mode2":
                source = d + e + c;
                break;
            case "Mode3":
                source = a + b + c + d + e;
                break;
            default:
                break;
        }
        console.log(source);
        myimg.src = "imgPack/" + source + ".jpg";
        myimg.onload = function () {
            document.getElementById("MyImg").src = "imgPack/" + source + ".jpg";
        }
        myimg.onerror = function () {
            document.getElementById("MyImg").src = "imgPack/Default.jpg";
        }
    }

    function checkImageExists(src, callback) {
        var myimg = new Image();
        myimg.src = "../imgPack/" + src + ".jpg";
        myimg.onload = function () {
            var a = true;
            return true;
        }
        myimg.onerror = function () {
            return false;
        }
    }

    //    document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + "<br>" + PussyLook(player) + "<br>" + DickLook(player);
    //    document.getElementById("EnemyLooks").innerHTML = BoobLook(enemies[EnemyIndex]) + "<br>" + PussyLook(enemies[EnemyIndex]) + "<br>" + DickLook(enemies[EnemyIndex]);

    function HeightSystem(me, they) {
        var a;
        if (me.Height > they.Height) {
            if (me.Height * 0.95 < they.Height) {
                a = "Your opponent is almost as tall as you.";
            } else if (me.Height * 0.9 < they.Height) {
                a = "You are a head taller than your opponent.";
            } else if (me.Height * 0.8 < they.Height) {
                a = "You are taller than your opponent."
            } else if (me.Height * 0.7 < they.Height) {
                a = "You are taller than your opponent."
            } else if (me.Height * 0.6 < they.Height) {
                a = "You are taller than your opponent."
            } else if (me.Height * 0.5 < they.Height) {
                a = "You are taller than your opponent."
            } else if (me.Height * 0.4 < they.Height) {
                a = "Your opponent is short enough for their head to be almost be in level with your groin, how convenient.";
            } else if (me.Height * 0.3 < they.Height) {
                a = "Looking down at your opponent you see that they are almost tall enough to reach your groin.";
            } else if (me.Height * 0.2 < they.Height) {
                a = "Looking down at your opponent you see that they are just tall enough to reach over your knees.";
            } else if (me.Height * 0.1 < they.Height) {
                a = "Your opponent is so short, that they can't reach over your knees!";
            } else {
                a = "Your opponent is so small than you could hold them in one hand."
            }
        } else if (me.Height == they.Height) {
            a = "You and your opponent exact same height! What are the odds?"
        } else {
            if (they.Height * 0.95 < me.Height) {
                a = "You are almost as tall as your opponent."
            } else if (they.Height * 0.9 < me.Height) {
                a = "You are a head shorter than your opponent."
            } else {
                a = "Your opponent is taller than you."
            }
        }
        return a;
    };

    function SexColor(who, where) {
        switch (CheckGender(who)) {
            case "cuntboy":
            case "female":
                document.getElementById(where + "Sex").style.backgroundColor = "rgba(255, 192, 203, 0.7)";
                document.getElementById(where + "Sex").style.border = "1px solid rgba(255, 192, 203)";
                break;
            case "dickgirl":
            case "male":
                document.getElementById(where + "Sex").style.backgroundColor = "rgba(0, 0, 255, 0.3)";
                document.getElementById(where + "Sex").style.border = "1px solid rgba(0, 0, 255)";
                break;
            case "hermaphrodite":
                document.getElementById(where + "Sex").style.backgroundColor = "rgba(128, 0, 128, 0.3)";
                document.getElementById(where + "Sex").style.border = "1px solid rgba(128, 0, 128)";
                break;
            case "doll":
                document.getElementById(where + "Sex").style.backgroundColor = "rgba(245, 245, 220)";
                document.getElementById(where + "Sex").style.border = "1px solid rgb(201, 201, 182)";
                break;
        }
    }

    function HouseEngine() {
        if (House.Gym > 0) {
            var maxMuscle;
            for (var e = 0; e < House.Dormmates.length; e++) {
                maxMuscle = (House.Dormmates[e].Height / 3) * (House.Gym * 0.1);
                if (House.Dormmates[e].Fat > 1 && (House.Dormmates[e].Muscle < maxMuscle)) {
                    House.Dormmates[e].Muscle += 0.1;
                    House.Dormmates[e].Fat -= 0.4;
                }
            }
        }
        if (House.Kitchen > 0) {
            var maxFat;
            for (var e = 0; e < House.Dormmates.length; e++) {
                maxFat = (House.Dormmates[e].Height / 2) * (House.Kitchen * 0.1);
                if (House.Dormmates[e].Fat < maxFat) {
                    House.Dormmates[e].Fat += 0.4;
                }
            }
        }
        if (House.Dormmates.length > 0) {
            player.Gold += 0.001 * House.Dormmates.length;
            for (var esf = 0; House.Dormmates.length > esf; esf++) {
                if (Settings.Brothel.ServeMasc && Settings.Brothel.ServeFemi) {
                    House.Dormmates[esf].Masc += 0.05 * House.Brothel;
                    House.Dormmates[esf].Femi += 0.05 * House.Brothel;
                } else if (Settings.Brothel.ServeFemi) {
                    House.Dormmates[esf].Femi += 0.1 * House.Brothel;
                } else if (Settings.Brothel.ServeMasc) {
                    House.Dormmates[esf].Masc += 0.1 * House.Brothel;
                }
            }
            if (House.hasOwnProperty("Brothel")) {
                player.Gold += 0.01 * House.Dormmates.length * House.Brothel;
            }
        }
    };

    function GenitalChange(what) {
        for (var e = 0; e < player.Dicks.length; e++) {
            player.Dicks[e].Type = what;
        }
        for (var e = 0; e < player.Balls.length; e++) {
            player.Balls[e].Type = what;
        }
        for (var e = 0; e < player.Boobies.length; e++) {
            player.Boobies[e].Type = what;
        }
        for (var e = 0; e < player.Pussies.length; e++) {
            player.Pussies[e].Type = what;
        }
        for (var e = 0; e < player.Anal.length; e++) {
            player.Anal[e].Type = what;
        }
    }

    function addMilk(amount) {
        for (var b = 0; b < player.Boobies.length; b++) {
            if (player.Boobies[b].Milk <= player.Boobies[b].MilkMax)
                player.Boobies[b].Milk += Math.min(player.Boobies[b].MilkMax - player.Boobies[b].Milk, amount);
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
        player.Fat -= 0.002;
    }

    function Npc(Name, RealName, X, Y, width, height, Color) {
        this.Name = Name,
            this.RealName = RealName,
            this.X = X,
            this.Y = Y,
            this.Width = width,
            this.Height = height,
            this.Color = Color
    };

    var Npcs = [];

    var EnemyIndex;

    function BattleSetup(who) {
        document.getElementById("map").style.display = 'none';
        document.getElementById("Encounter").style.display = 'grid';
        document.getElementById("status").style.display = 'none';
        document.getElementById("buttons").style.display = 'none';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("EventLog").style.display = 'none';
        document.getElementById("BattleText").innerHTML = null;
        document.getElementById("BattleText2").innerHTML = null;
        battle = true;
        who.Health = who.FullHealth;
        who.WillHealth = who.FullWillHealth;
        player.Mana = 100; // Remember to Change
        UpdateStats(true);
    }



    function Touching() {
        if (battle === true) {
            return;
        }
        for (var j = 0; j < enemies.length; j++) {
            if (sprite.x + grid * sprite.Size >= enemies[j].XPos && sprite.x < enemies[j].XPos + enemies[j].Size &&
                sprite.y + grid * sprite.Size >= enemies[j].YPos && sprite.y < enemies[j].YPos + enemies[j].Size) {
                if (mousedowner) {
                    clearInterval(mFunction);
                    mousedowner = false;
                }
                EnemyIndex = j;
                EssenceCheck(enemies[j]);
                enemies[j].XPos = RandomInt(2, 18) * grid;
                enemies[j].YPos = RandomInt(2, 18) * grid;

                BattleSetup(enemies[j]);
            }
        }
        for (var n = 0; n < Npcs.length; n++) {
            if (sprite.x + grid * sprite.Size >= Npcs[n].X && sprite.x < Npcs[n].X + Npcs[n].Width &&
                sprite.y + grid * sprite.Size >= Npcs[n].Y && sprite.y < Npcs[n].Y + Npcs[n].Height) {
                if (mousedowner) {
                    clearInterval(mFunction);
                    mousedowner = false;
                }
                battle = true;
                if (player.hasOwnProperty("Spells")) {
                    player.Spells.Fireball = player.Spells.FireballMax;
                }
                var startarea = document.getElementById("hem");
                sprite.x = startarea.width / 2 - grid;
                sprite.y = startarea.height / 2;
                UpdateNpc(Npcs[n].Name);
                if (Settings.EssenceAuto) {
                    document.getElementById("SellLimbs").style.display = 'none';
                } else {
                    document.getElementById("SellLimbs").style.display = 'inline-block';
                }
            }
        }
    };

    function UpdateNpc(name) {
        var isfunction = window[name + "Func"];
        if (typeof isfunction === "function") { // Start replacing html building/npcs with javascript functions
            document.getElementById("map").style.display = 'none';
            document.getElementById("buttons").style.display = 'none';
            document.getElementById("EmptyButtons").style.display = 'block';
            isfunction();
        } else {
            document.getElementById(name).style.display = 'block';
            document.getElementById("map").style.display = 'none';
            document.getElementById("buttons").style.display = 'none';
            document.getElementById("EmptyButtons").style.display = 'block';
            document.getElementById("Leave" + name).addEventListener("click", function () {
                battle = false;
                document.getElementById(name).style.display = 'none';
                document.getElementById("map").style.display = 'block';
                document.getElementById("buttons").style.display = 'block';
                document.getElementById("EmptyButtons").style.display = 'none';
                document.getElementById("status").style.display = 'block';
                document.getElementById(name + "Text").innerHTML = null;
                return;
            });
        }
    }

    function PrintNpcs() {
        var startarea = document.getElementById("hem");
        var ctx = startarea.getContext("2d");
        var needPrint = ["FarmBarn", "FarmOwner", "LocalPortal", "PortalShop", "Barber", "MountainShrine", "ChimeraShrine"];
        // Switched it so new npcs always print
        var DontneedPrint = ["Townhall", "Shop", "Bar", "Gym", "WitchShop", "WitchHut", "BlackMarket"];
        for (var e of Npcs) {
            if (DontneedPrint.indexOf(e.Name) == -1) {
                ctx.fillStyle = e.Color;
                ctx.fillRect(e.X, e.Y, e.Width, e.Height);
            }
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "4vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(e.RealName, e.X + e.Width / 2, e.Y + e.Height / 1.8);
        }
    }

    function testsa(e) { // Does  y
        for (var b = e; b < enemies.length; b++) {
            return enemies[b].XPos;
        }
    }

    function PrintEnemies() {
        var startarea = document.getElementById("hem");
        var ctx = startarea.getContext("2d");
        for (var e = 0; e < enemies.length; e++) {
            for (var i = e + 1; i < enemies.length; i++) {
                if (enemies[e].XPos == enemies[i].XPos) {
                    enemies[e].XPos = RandomInt(2, 18) * grid;
                }
            }

            ctx.fillStyle = enemies[e].Color;
            ctx.fillRect(enemies[e].XPos, enemies[e].YPos, enemies[e].Size, enemies[e].Size);

            var color;
            switch (CheckGender(enemies[e])) {
                case "cuntboy":
                    color = "blue";
                    break;
                case "female":
                    color = "rgb(231, 84, 128)";
                    break;
                case "dickgirl":
                    color = "rgb(231, 84, 128)";
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
            ctx.fillStyle = color;
            ctx.fillRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
            ctx.fillStyle = "Black";
            ctx.strokeRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "1vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(enemies[e].Name + " " + enemies[e].Race, enemies[e].XPos + enemies[e].Size / 2, enemies[e].YPos);
        }
    };

    function PaintBackground() {
        var WorldMap = document.getElementById("WorldMap");
        var World = WorldMap.getContext("2d");
        var startarea = document.getElementById("hem");
        var ctx = startarea.getContext("2d");
        ctx.fillStyle = Settings.MapColor;
        World.fillStyle = Settings.MapColor;
        ctx.fillRect(0, 0, startarea.width, startarea.height);
        World.fillRect(0, 0, WorldMap.width, WorldMap.height);

        // Wall around map
        ctx.fillStyle = Settings.BorderColor;
        ctx.fillRect(0, 0, grid / 2, startarea.height);
        ctx.fillRect(0, 0, startarea.width, grid / 2);
        ctx.fillRect(startarea.width - (grid / 2), 0, grid / 2, startarea.height);
        ctx.fillRect(0, startarea.height - (grid / 2), startarea.width, grid / 2);
    }

    var fps = [];

    function loop() {
        requestAnimationFrame(loop);
        var d = new Date();
        var n = d.getTime();
        fps.push(n);
        if (fps.length > 1) {
            var Thefps = fps[1] - fps[0];
            fps.pop();
            fps.pop();
        }
        var startarea = document.getElementById("hem");
        var ctx = startarea.getContext("2d");
        startarea.width = medium;
        startarea.height = medium;


        if (Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20 !== medium) {
            HemScale();
            Npcs = [];
        };

        document.getElementById("StatusArea").innerHTML = "Area: " + player.Area + " and Map: " + player.Map;

        player.MaxHealth = player.End * 10 + player.Perks.ExtraHealth.Count * 20;
        player.MaxWillHealth = player.Will * 10 + player.Perks.ExtraWillHealth.Count * 20;
        document.getElementById("StatusName").innerHTML = player.Name + " " + player.LastName;
        document.getElementById("StatusHealth").innerHTML = Math.round(player.Health);
        document.getElementById("StatusHealth").style.width = Math.min(100 * (player.Health / player.MaxHealth), 103) + "%";
        document.getElementById("StatusWillHealth").innerHTML = Math.round(player.WillHealth);
        document.getElementById("StatusWillHealth").style.width = Math.min(100 * (player.WillHealth / player.MaxWillHealth), 103) + "%";
        document.getElementById("StatusLevel").innerHTML = player.level;
        document.getElementById("Gold").innerHTML = "Gold: " + Math.floor(player.Gold);
        if (player.Fat <= player.Height / 100) {
            document.getElementById("Hunger").innerHTML = "You are starving";
        } else {
            document.getElementById("Hunger").innerHTML = null;
        }
        document.getElementById("EssenceTracker").innerHTML = "Masculinity: " + Math.round(player.Masc) + " and Femininity: " + Math.round(player.Femi);
        document.getElementById("BlackMarketEssence").innerHTML = "Masculinity: " + Math.round(player.Masc) + " and Femininity: " + Math.round(player.Femi);
        if (Settings.Vore) {
            document.getElementById("VoreLooks").style.display = 'inline-block';
        }
        //		if (BonusTF.Status) {TfBoost();}
        ExpCheck();
        if (Settings.Cheats.Enabled) { // Cheats
            CheatEngine();
        }
        if (!battle) {
            var needPaint = ["Farm", "TempCity", "MountainStart", "MountainClimb", "MountainClimb2", "MountainClimb3",
                "MountainClimb4", "MountainClimb5", "MountainClimb6", "MountainClimb7", "MountainClimb8", "MountainClimb9",
                "MountainClimb10", "MountainShrinePath", "MountainShrine", "MountainTribe"
            ];
            if (needPaint.indexOf(player.Map) > -1) {
                PaintBackground();
            }
            CurrentMap();
            if (Settings.Vore) {
                VoreEngine();
            }
            if (enemies.length > 0) {
                PrintEnemies();
            };
            if (Npcs.length > 0) {
                PrintNpcs();
            }
            var startarea = document.getElementById("hem");
            var ctx = startarea.getContext("2d");
            ctx.fillStyle = "BlueViolet";
            sprite.Size = 1 //Math.min(0.8 + player.Height / 320, 1.2);
            ctx.fillRect(sprite.x, sprite.y, grid * sprite.Size, grid * sprite.Size);
            Laglimiter++;
            if (Laglimiter % 80 == 0) {
                if (Settings.EssenceAuto) {
                    EssenceCheck(player);
                }
                EssenceBalance();
                // Moved more stuff inside here to boost performance
                player.Fat = Math.max(0.1, player.Fat);
                player.Muscle = Math.max(1, player.Muscle);
                player.Weight = Math.round(player.Height * 0.15 + player.Fat + player.Muscle);

                player.Height = Math.max(5, player.Height);
                player.Health = Math.max(1, player.Health);
                player.WillHealth = Math.max(1, player.WillHealth);
                document.getElementById("Fps").innerHTML = Math.round(1000 / Thefps) + "fps";
            }
        };
    };
    var Laglimiter = 0;