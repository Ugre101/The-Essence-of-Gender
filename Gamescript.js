    // player variable
    var player = {
        Str: 10,
        Int: 10,
        Charm: 10,
        Will: 10,
        End: 10,
        SexSkill: 10,
        printStats: "",
        printPerks: "",
        printVore: "",
        Orgasm: 0,
        Arousal: 0,
        Gold: 0,
        Exp: 0,
        level: 1,
        SkillPoints: 0,
        PerkPoints: 0,
        Race: "human",
        SecondRace: "human",
        isTaur: "false", // Testing
        raceBonus: [{
                type: "Height",
                amount: 1
            },
            {
                type: "Weight",
                amount: 1
            },
            {
                type: "Size",
                amount: 1
            },
            {
                type: "Str",
                amount: 0
            },
            {
                type: "Int",
                amount: 0
            },
            {
                type: "Charm",
                amount: 0
            },
            {
                type: "SexSkill",
                amount: 0
            },
            {
                type: "Will",
                amount: 0
            },
            {
                type: "WillHealth",
                amount: 0
            }
        ],
        ForcedMale: false,
        ForcedFemale: false,
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
        FoodStomach: [],
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
        cumGround: 0,
        Spells: {
            Fireball: 0,
            FireballMax: 0
        },
        Blessings: {
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            Malepreg: 0
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
        BeatSuccubus: false,
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
        }
    }

    var Partners = {
        Succubus: {
            FirstName: "Lynnlea",
            LastName: "Qinienne",
            Equal: false,
            Yours: false,
            Like: 0,
            Submit: 0
        },
        FarmOwner: {
            FirstName: "Teoviz",
            LastName: "",
            Equal: false,
            Yours: false,
            Like: 0,
            Submit: 0
        }
    }

    // Start values for canvas
    var medium = Math.ceil((document.documentElement.clientHeight / 20) * Settings.MapPercent) * 20;
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    startarea.width = medium;
    startarea.height = medium;
    var grid = (medium / 20);
    var sprite = {
        x: grid,
        y: grid,
    };

    document.getElementById("VoreLooks").style.display = 'none';

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
        document.getElementById("BuyHouse").style.display = 'none'
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
        if (player.Race != player.SecondRace)
            document.getElementById("FullRace").innerHTML = player.Race + " " + player.SecondRace;
        else
            document.getElementById("FullRace").innerHTML = "Fully " + player.SecondRace;
        document.getElementById("Pregnancy").innerHTML = "Times you have impregnated: " + Flags.Impregnations + "<br> Times you have been pregnant: " + Flags.Pregnations;
        document.getElementById("ExtraStats").innerHTML = "Virility: " + player.Virility + "<br>Fertility: " + player.Fertility + "<br>Essence drain: " + player.EssenceDrain +
            "<br>Give essence: " + player.GiveEssence + "<br> passive rest rate: " + player.RestRate;
    });

    document.getElementById("Perks").addEventListener("click", function () {
        printS();
        DisplayNone();
        document.getElementById("Levels").style.display = 'block';
        document.getElementById("StatLevels").innerHTML = player.printStats;
        document.getElementById("PerkLevels").innerHTML = player.printPerks;
        if (Settings.Vore) {
            document.getElementById("VLevels").innerHTML = player.printVore;
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

    document.getElementById("DrainM").addEventListener("click", function () {
        var old = JSON.parse(JSON.stringify(player));
        var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
        if (player.EssenceDrain >= enemies[EnemyIndex].Masc && enemies[EnemyIndex].Masc > 0) {
            enemies[EnemyIndex].SessionOrgasm--;
            if (player.ForcedFemale)
                player.Femi += enemies[EnemyIndex].Masc;
            else
                player.Masc += enemies[EnemyIndex].Masc;
            enemies[EnemyIndex].Masc = 0;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You siphon the last essence of masculinity from them leaving them with no signs of masculinity left." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        } else if (player.EssenceDrain < enemies[EnemyIndex].Masc) {
            enemies[EnemyIndex].SessionOrgasm--;
            if (player.ForcedFemale)
                player.Femi += player.EssenceDrain;
            else
                player.Masc += player.EssenceDrain;
            enemies[EnemyIndex].Masc -= player.EssenceDrain;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You siphon essence of masculinity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }

        AfterBattleButtons();
        CheckArousal();
        return;
    });

    document.getElementById("DrainF").addEventListener("click", function () {
        var old = JSON.parse(JSON.stringify(player));
        var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
        if (player.EssenceDrain >= enemies[EnemyIndex].Femi && enemies[EnemyIndex].Femi > 0) {
            enemies[EnemyIndex].SessionOrgasm--;
            if (player.ForcedMale)
                player.Masc += enemies[EnemyIndex].Femi;
            else
                player.Femi += enemies[EnemyIndex].Femi;
            enemies[EnemyIndex].Femi = 0;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You siphon the last essence of femininity from them leaving them with no signs of femininity left. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        } else if (player.EssenceDrain < enemies[EnemyIndex].Femi) {
            enemies[EnemyIndex].SessionOrgasm--;
            if (player.ForcedMale)
                player.Masc += player.EssenceDrain;
            else
                player.Femi += player.EssenceDrain;
            enemies[EnemyIndex].Femi -= player.EssenceDrain;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You siphon essence of femininity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }
        AfterBattleButtons();
        CheckArousal();
        return;
    })

    document.getElementById("InjectM").addEventListener("click", function () {
        var q = Math.min(player.GiveEssence, player.Masc);
        var old = JSON.parse(JSON.stringify(player));
        var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
        if (player.GiveEssence >= player.Masc && player.Masc > 0) {
            player.SessionOrgasm--;
            player.Masc -= q;
            enemies[EnemyIndex].Masc += q;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You inject them with your last essence of masculinity, leaving yourself male-free." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        } else if (player.GiveEssence < player.Masc) {
            player.SessionOrgasm--;
            player.Masc -= q;
            enemies[EnemyIndex].Masc += q;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You inject essence of masculinity into them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }

        AfterBattleButtons();
        CheckArousal();
        return;
    });

    document.getElementById("InjectF").addEventListener("click", function () {
        var q = Math.min(player.GiveEssence, player.Femi);
        var old = JSON.parse(JSON.stringify(player));
        var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
        if (player.GiveEssence >= player.Femi && player.Femi > 0) {
            player.SessionOrgasm--;
            player.Femi -= q;
            enemies[EnemyIndex].Femi += q;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You give them the last of your femininity, leaving yourself female-free. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        } else if (player.GiveEssence < player.Femi) {
            player.SessionOrgasm--;
            player.Femi -= q;
            enemies[EnemyIndex].Femi += q;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You inject essence of femininity into them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }
        AfterBattleButtons();
        CheckArousal();
        return;
    })

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

    function RaceDesc(who) {
        switch (who.Race) {
            case "human":
                if (who.SecondRace == "human") {
                    return "human";
                } else if (who.SecondRace == "elf") {
                    return "half elf";
                } else if (who.SecondRace == "centaur") {
                    return "centaur";
                } else if (who.SecondRace == "equine") {
                    return "satyr";
                }
            case "elf":
                if (who.SecondRace == "human") {
                    return "half elf";
                } else if (who.SecondRace == "elf") {
                    return "elf";
                } else if (who.SecondRace == "centaur") {
                    return "centaur";
                } else if (who.SecondRace == "equine") {
                    return "satyr";
                }
            case "equine":
                if (who.SecondRace == "human") {
                    return "humanoid equine";
                } else if (who.SecondRace == "elf") {
                    return "humanoid equine";
                } else if (who.SecondRace == "centaur") {
                    return "anthropomorphic centaur";
                } else if (who.SecondRace == "equine") {
                    return "equine";
                }
            default:
                return player.Race;
        }
    }

    function DateEngine() {
        setInterval(DateTracker, 1000);
    }

    var PlayerDay = 0;

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
    var mousedowner = false;
    var mFunction;
    var mouseX;
    var mouseY;

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
        if (player.hasOwnProperty("Spells")) {
            document.getElementById("SpellBook").style.display = 'block';
            if (player.Spells.FireballMax > 0) {
                document.getElementById("Fireball").style.display = 'inline-block';
                player.Spells.Fireball = player.Spells.FireballMax;
            } else {
                document.getElementById("Fireball").style.display = 'none';
                document.getElementById("SpellBook").style.display = 'none';
                console.log("NO Ball")
            }
        } else {
            console.log("NO Spell")
            document.getElementById("SpellBook").style.display = 'none';
        }
        if (who.FirstName === "Feral") {
            document.getElementById("Tease").style.display = 'none'
        } else {
            document.getElementById("Tease").style.display = 'inline-block'
        }
        who.Health = who.FullHealth;
        who.WillHealth = who.FullWillHealth;
        UpdateStats(true);
    }



    function Touching() {
        if (battle === true) {
            return;
        }
        var SizeMod = 0.5 + player.Height / 320;
        for (var j = 0; j < enemies.length; j++) {
            if (sprite.x + grid * SizeMod >= enemies[j].XPos && sprite.x < enemies[j].XPos + enemies[j].Size &&
                sprite.y + grid * SizeMod >= enemies[j].YPos && sprite.y < enemies[j].YPos + enemies[j].Size) {
                if (mousedowner) {
                    clearInterval(mFunction);
                    mousedowner = false;
                }
                EnemyIndex = enemies.indexOf(enemies[j]);
                EssenceCheck(enemies[j]);
                enemies[j].XPos = RandomInt(2, 18) * grid;
                enemies[j].YPos = RandomInt(2, 18) * grid;

                BattleSetup(enemies[j]);
            }
        }
        for (var n = 0; n < Npcs.length; n++) {
            if (sprite.x + grid * SizeMod >= Npcs[n].X && sprite.x < Npcs[n].X + Npcs[n].Width &&
                sprite.y + grid * SizeMod >= Npcs[n].Y && sprite.y < Npcs[n].Y + Npcs[n].Height) {
                if (mousedowner) {
                    clearInterval(mFunction);
                    mousedowner = false;
                }
                battle = true;
                if (player.hasOwnProperty("Spells"))
                    player.Spells.Fireball = player.Spells.FireballMax;
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

    function PrintNpcs() {
        var needPrint = ["FarmBarn", "FarmOwner", "LocalPortal", "PortalShop", "Barber", "MountainShrine"]
        for (var e of Npcs) {
            if (needPrint.indexOf(e.Name) > -1) {
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
                case "female":
                    color = "Pink";
                    break;
                case "dickgirl":
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
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "1vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(enemies[e].Name + " " + enemies[e].Race, enemies[e].XPos + enemies[e].Size / 2, enemies[e].YPos);
        }
    };

    function PaintBackground() {
        var WorldMap = document.getElementById("WorldMap");
        var World = WorldMap.getContext("2d");
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
        if (Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20 !== medium) {
            console.log(true)
            HemScale();
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

        if (!battle) {
            var needPaint = ["Farm", "TempCity", "MountainStart", "MountainClimb", "MountainClimb2", "MountainClimb3",
                "MountainClimb4", "MountainClimb5", "MountainClimb6", "MountainClimb7", "MountainClimb8", "MountainClimb9",
                "MountainClimb10", "MountainShrinePath", "MountainShrine"
            ];
            if (needPaint.indexOf(player.Map) > -1) {
                PaintBackground();
            }
            CurrentMap();
            if (Settings.Vore) {
                VoreEngine();
                CheckSplit();
            }
            if (enemies.length > 0) {
                PrintEnemies();
            };
            if (Npcs.length > 0) {
                PrintNpcs();
            }
            ctx.fillStyle = "BlueViolet";
            var SizeMod = 0.5 + player.Height / 320;
            ctx.fillRect(sprite.x, sprite.y, grid * SizeMod, grid * SizeMod);
            if (TF.Status) {
                TfEngine();
            }
            Laglimiter++;
            if (Laglimiter % 80 == 0) {
                if (Settings.EssenceAuto) {
                    EssenceCheck(player);
                }
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

    // Movement buttons
    document.addEventListener('keydown', function (e) {
        if (battle === true) {
            return;
        }
        var SizeMod = 0.5 + player.Height / 320;
        if ((e.which === 37 || e.which === 65) && sprite.x - grid * SizeMod > 0) {
            sprite.x -= grid * SizeMod;
            sprite.y += 0;
        } else if ((e.which === 39 || e.which === 68) && sprite.x + 2 * grid * SizeMod < startarea.width) {
            sprite.x += grid * SizeMod;
            sprite.y += 0;
        }
        if ((e.which === 38 || e.which === 87) && sprite.y - grid * SizeMod > 0) {
            sprite.y -= grid * SizeMod;
            sprite.x += 0;
        } else if ((e.which === 40 || e.which === 83) && sprite.y + 2 * grid * SizeMod < startarea.height) {
            sprite.y += grid * SizeMod;
            sprite.x += 0;
        }
        Touching();
        CheckDoor();
    });

    /*
    startarea.addEventListener("click", function (e) {
        var MapFarm = startarea.getBoundingClientRect();
        var Xtile = Math.round((e.pageX - MapFarm.left) / 20) * 20;
        var Ytile = Math.round((e.pageY - MapFarm.top) / 20) * 20;
        if (player.Map == "RoadToHome") {
            if (Xtile > 2 * grid && Xtile < 7 * grid && Ytile < 19 * grid && Ytile > 14 * grid) {
                console.log(Xtile + " " + Ytile);
            }
        }
    });
*/

    function mousedownfunc() {
        var SizeMod = 0.5 + player.Height / 320;
        var MapRect = startarea.getBoundingClientRect();
        if (mouseX - MapRect.left > sprite.x + 1.5 * grid && sprite.x + 2 * grid * SizeMod < startarea.width) {
            sprite.x += grid * SizeMod;
        } else if (mouseX - MapRect.left + grid / 2 < sprite.x && sprite.x > grid * SizeMod) {
            sprite.x -= grid * SizeMod;
        }
        if (mouseY - MapRect.top > sprite.y + 1.5 * grid && sprite.y + 2 * grid * SizeMod < startarea.height) {
            sprite.y += grid * SizeMod;
        } else if (mouseY - MapRect.top + grid / 2 < sprite.y && sprite.y > grid * SizeMod) {
            sprite.y -= grid * SizeMod;
        }
        Touching();
        CheckDoor();
    }

    startarea.addEventListener('mousedown', function (e) {
        if (!mousedowner) {
            mousedowner = true;
            mouseX = e.pageX;
            mouseY = e.pageY;
            mFunction = setInterval(mousedownfunc, 100);
        }
    });

    startarea.addEventListener('touchstart', function (e) {
        if (!mousedowner) {
            mousedowner = true;
            mouseX = e.touches[e.touches.length - 1].clientX;
            mouseY = e.touches[e.touches.length - 1].clientY;
            mFunction = setInterval(mousedownfunc, 100);
        }
    });

    document.addEventListener('mouseup', function () {
        if (mousedowner) {
            clearInterval(mFunction);
            mousedowner = false;
        }
    });

    document.addEventListener('touchend', function () {
        if (mousedowner) {
            clearInterval(mFunction);
            mousedowner = false;
        }
    });

    startarea.addEventListener('mousemove', function (e) {
        if (mousedowner) {
            if (mouseX != e.pageX || mouseY != e.pageY) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            }
        }
    });

    startarea.addEventListener('touchmove', function (e) {
        if (mousedowner) {
            if (mouseX != e.touches[e.touches.length - 1].clientX || e.touches[e.touches.length - 1].clientY) {
                mouseX = e.touches[e.touches.length - 1].clientX;
                mouseY = e.touches[e.touches.length - 1].clientY;
            }
        }
    });

    function printS() {
        player.printStats = "Str: " + player.Str + "<br>End: " + player.End + "<br>Will: " + player.Will + "<br>Charm: " + player.Charm + "<br>Int: " + player.Int + "<br>Skill: " + player.SexSkill + "<br>";
        player.printPerks = "";
        for (var i = 0; i < Object.keys(player.Perks).length; i++) {
            if (player.Perks[Object.keys(player.Perks)[i]].Count > 0) {
                player.printPerks += Object.keys(player.Perks)[i] + ": " + player.Perks[Object.keys(player.Perks)[i]].Count + "<br>";
            }
        }
        if (Settings.Vore) {
            player.printVore = "";
            var v = player.Vore.VorePerks;
            if (Object.keys(v).length > 0) {
                for (var i = 0; i < Object.keys(v).length; i++) {
                    player.printVore += Object.keys(v)[i] + ": " + v[Object.keys(v)[i]].Count + "<br>";
                }
            }
        }
    }