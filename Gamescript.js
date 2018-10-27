    // player variable
    var player = {
        Str: 10,
        Int: 10,
        Charm: 10,
        Will: 10,
        End: 10,
        SexSkill: 10,
        Orgasm: 0,
        Arousal: 0,
        Gold: 0,
        Exp: 0,
        level: 1,
        SkillPoints: 0,
        PerkPoints: 0,
        Race: "human",
        Dicks: [],
        Balls: [],
        Pussies: [],
        Boobies: [
            Boob = {
                Size: 1,
                Type: "human"
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
            HairLength: "shoulder"
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
        Dormmates: []
    };

    // Flag variables
    var Flags = {
        BanditLord: false,
        Impregnations: 0,
        Pregnations: 0,
        Date: {
            Year: 1200,
            Month: 0,
            Day: 0
        }
    };

    // Settings variables
    var Settings = {
        BackColor: "#9099a7",
        MapColor: "#808080",
        TextColor: "#000000",
        BorderColor: "#B22222",
        TextFont: "Verdana, Geneva, sans-serif",
        GiveEssence: "Both",
        Skip: false,
        Vore: false,
        ImgPack: false,
        EssenceAuto: true,
        Pronun: {
            Status: false,
            Herm: "hermaphrodite",
            Male: "male",
            Female: "female",
            Doll: "doll"
        },
        MaxLimbs: {
            MaxBoobs: 5,
            MaxVaginas: 5,
            MaxDicks: 5,
            MaxBalls: 5
        }
    }

    // Start values for canvas
    var medium = Math.ceil((document.documentElement.clientHeight / 20) * 0.8) * 20;
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    startarea.width = medium;
    startarea.height = medium;
    var MapColor = "Gray";
    var grid = (medium / 20);
    var sprite = {
        x: grid,
        y: grid,
        karta: "Start"
    };

    document.getElementById("VoreLooks").style.display = 'none';

    // Start page
    document.getElementById("GoToCharCreator").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'Block';
        document.getElementById("StartPage").style.display = 'none';
    });

    // Game load button
    document.getElementById("LoadButton").addEventListener("click", function () {
        document.getElementById("LoadMenu").style.display = 'block';
        document.getElementById("StartPage").style.display = 'none';
        document.getElementById("StartLoad").style.display = 'block';
        if (localStorage.getItem('SaveDate1') !== null) {
            document.getElementById("LoadPlayer1").value = localStorage.getItem('SaveDate1');
        }
        if (localStorage.getItem('SaveDate2') !== null) {
            document.getElementById("LoadPlayer2").value = localStorage.getItem('SaveDate2');
        }
        if (localStorage.getItem('SaveDate3') !== null) {
            document.getElementById("LoadPlayer3").value = localStorage.getItem('SaveDate3');
        }
        if (localStorage.getItem('SaveDate4') !== null) {
            document.getElementById("LoadPlayer4").value = localStorage.getItem('SaveDate4');
        }
        if (localStorage.getItem('SaveDate5') !== null) {
            document.getElementById("LoadPlayer5").value = localStorage.getItem('SaveDate5');
        }
    });
    // Start page load button
    document.getElementById("StartLoad").addEventListener("click", function () {
        document.getElementById("LoadMenu").style.display = 'none';
        document.getElementById("StartPage").style.display = 'block';
    })

    // Load handler
    function Loader(Load) {
        battle = false;
        document.getElementById("StartPage").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("LoadMenu").style.display = 'none';
        document.getElementById("EventLog").style.display = 'block';
        var LoadArray = JSON.parse(localStorage.getItem(Load));
        player = LoadArray[0];
        House = LoadArray[1];
        Flags = LoadArray[2];
        Settings = LoadArray[3];
        CheckFlags();
        requestAnimationFrame(loop);
        return;
    }
    document.getElementById("LoadPlayer1").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer1') === null) {
            return;
        } else {
            Loader('SavedPlayer1');
        }
        return;
    });
    document.getElementById("LoadPlayer2").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer2') === null) {
            return;
        } else {
            Loader('SavedPlayer2');
        }
        return;
    });
    document.getElementById("LoadPlayer3").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer3') === null) {
            return;
        } else {
            Loader('SavedPlayer3');
        }
        return;
    });
    document.getElementById("LoadPlayer4").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer4') === null) {
            return;
        } else {
            Loader('SavedPlayer4');
        }
        return;
    });
    document.getElementById("LoadPlayer5").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer5') === null) {
            return;
        } else {
            Loader('SavedPlayer5');
        }
        return;
    });
    document.getElementById("LoadFile").addEventListener("input", function () {
        var test = document.getElementById("LoadFile");
        var reader = new FileReader();
        reader.readAsText(test.files[0]);
        reader.onload = function () {
            var parseplayer = JSON.parse(reader.result);
            var LoadArray = [];
            LoadArray = parseplayer;
            player = LoadArray[0];
            House = LoadArray[1];
            Flags = LoadArray[2];
            Settings = LoadArray[3];
            battle = false;
            document.getElementById("StartPage").style.display = 'none';
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("status").style.display = 'block';
            document.getElementById("LoadMenu").style.display = 'none';
            CheckFlags();
            requestAnimationFrame(loop);
        }
    });
    // End Load handler

    // New game+

    document.getElementById("NewGamePlus").addEventListener("click", function () {
        document.getElementById("NewGamePlusMenu").style.display = 'block';
        document.getElementById("StartPage").style.display = 'none';
        if (localStorage.getItem('SaveDate1') !== null) {
            document.getElementById("NGPLoadPlayer1").value = localStorage.getItem('SaveDate1');
        }
        if (localStorage.getItem('SaveDate2') !== null) {
            document.getElementById("NGPLoadPlayer2").value = localStorage.getItem('SaveDate2');
        }
        if (localStorage.getItem('SaveDate3') !== null) {
            document.getElementById("NGPLoadPlayer3").value = localStorage.getItem('SaveDate3');
        }
        if (localStorage.getItem('SaveDate4') !== null) {
            document.getElementById("NGPLoadPlayer4").value = localStorage.getItem('SaveDate4');
        }
        if (localStorage.getItem('SaveDate5') !== null) {
            document.getElementById("NGPLoadPlayer5").value = localStorage.getItem('SaveDate5');
        }
    });
    document.getElementById("NGPLoadPlayer1").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer1') === null) {
            return;
        } else {
            NewGamePlus('SavedPlayer1');
        }
        return;
    });
    document.getElementById("NGPLoadPlayer2").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer2') === null) {
            return;
        } else {
            NewGamePlus('SavedPlayer2');
        }
        return;
    });
    document.getElementById("NGPLoadPlayer3").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer3') === null) {
            return;
        } else {
            NewGamePlus('SavedPlayer3');
        }
        return;
    });
    document.getElementById("NGPLoadPlayer4").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer4') === null) {
            return;
        } else {
            NewGamePlus('SavedPlayer4');
        }
        return;
    });
    document.getElementById("NGPLoadPlayer5").addEventListener("click", function () {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer5') === null) {
            return;
        } else {
            NewGamePlus('SavedPlayer5');
        }
        return;
    });
    document.getElementById("NGPLoadFile").addEventListener("input", function () {
        var test = document.getElementById("LoadFile");
        var reader = new FileReader();
        reader.readAsText(test.files[0]);
        reader.onload = function () {
            var parseplayer = JSON.parse(reader.result);
            var LoadArray = [];
            LoadArray = parseplayer;
            NewGamePlus(LoadArray);
            battle = false;
            document.getElementById("StartPage").style.display = 'none';
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("status").style.display = 'block';
            document.getElementById("LoadMenu").style.display = 'none';
            requestAnimationFrame(loop);
        }
    });


    document.getElementById("NGPLoadLeaveStart").addEventListener("click", function () {
        document.getElementById("NewGamePlusMenu").style.display = 'none';
        document.getElementById("StartPage").style.display = 'block';
    });

    function NewGamePlus(LoadArrays) {
        var LoadArray = JSON.parse(localStorage.getItem(LoadArrays));
        battle = false;
        document.getElementById("StartPage").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("LoadMenu").style.display = 'none';
        document.getElementById("EventLog").style.display = 'block';
        var Oldplayer = LoadArray[0];
        var OldHouse = LoadArray[1];
        var OldFlags = LoadArray[2];
        var OldSettings = LoadArray[3];

        player.Str = Oldplayer.Str;
        player.Int = Oldplayer.Int;
        player.Charm = Oldplayer.Charm;
        player.Will = Oldplayer.Will;
        player.End = Oldplayer.End;
        player.SexSkill = Oldplayer.SexSkill;
        player.Gold = Oldplayer.Gold;
        player.Exp = Oldplayer.Exp;
        player.Level = Oldplayer.Level;
        player.SkillPoints = Oldplayer.SkillPoints;
        player.PerkPoints = Oldplayer.PerkPoints;
        player.Race = Oldplayer.Race;

        if (Array.isArray(Oldplayer.Dicks)) {
            if (Oldplayer.Dicks.length > 0) {
                player.Dicks = Oldplayer.Dicks;
            }
        };
        if (Array.isArray(Oldplayer.Balls)) {
            if (Oldplayer.Balls.length > 0) {
                player.Balls = Oldplayer.Dicks;
            }
        };
        if (Array.isArray(Oldplayer.Pussies)) {
            if (Oldplayer.Pussies.length > 0) {
                player.Pussies = Oldplayer.Pussies;
            }
        };
        if (Array.isArray(Oldplayer.Boobies)) {
            if (Oldplayer.Boobies.length > 0) {
                player.Boobies = Oldplayer.Boobies;
            }
        };
        if (Array.isArray(Oldplayer.Anal)) {
            if (Oldplayer.Anal.length > 0) {
                player.Anal = Oldplayer.Anal;
            }
        }
        if (Oldplayer.hasOwnProperty("Perks")) {
            if (Oldplayer.Perks.hasOwnProperty("ExtraHealth")) {
                if (Oldplayer.Perks.ExtraHealth.hasOwnProperty("Count")) {
                    player.Perks.ExtraHealth.Count = Oldplayer.Perks.ExtraHealth.Count;
                }
            }
            if (Oldplayer.Perks.hasOwnProperty("ExtraWillHealth")) {
                if (Oldplayer.Perks.ExtraWillHealth.hasOwnProperty("Count")) {
                    player.Perks.ExtraWillHealth.Count = Oldplayer.Perks.ExtraWillHealth.Count;
                }
            }

            if (Oldplayer.Perks.hasOwnProperty("FasterRest")) {
                if (Oldplayer.Perks.FasterRest.hasOwnProperty("Count")) {
                    player.Perks.FasterRest.Count = Oldplayer.Perks.FasterRest.Count;
                }
            }

            if (Oldplayer.Perks.hasOwnProperty("StealMore")) {
                if (Oldplayer.Perks.StealMore.hasOwnProperty("Count")) {
                    player.Perks.StealMore.Count = Oldplayer.Perks.StealMore.Count;
                    player.EssenceDrain = 5 + player.Perks.StealMore.Count * 3;
                }
            }
            if (Oldplayer.Perks.hasOwnProperty("GiveEssence")) {
                if (Oldplayer.Perks.GiveEssence.hasOwnProperty("Count")) {
                    player.Perks.GiveEssence.Count = Oldplayer.Perks.GiveEssence.Count;
                    player.GiveEssence = player.Perks.GiveEssence.Count * 3;
                }
            }
        }
        if (Array.isArray(Oldplayer.Quests)) {
            player.Quests = Oldplayer.Quests
        }
        player.Weight = Oldplayer.Weight;
        player.Height = Oldplayer.Height;
        player.Fat = Oldplayer.Fat;
        player.Masc = Oldplayer.Masc;
        player.Femi = Oldplayer.Femi;
        player.Fertility = Oldplayer.Fertility;
        player.Virility = Oldplayer.Virility;
        if (Oldplayer.hasOwnProperty("Pregnant")) {
            if (Array.isArray(Oldplayer.Pregnant.Babies)) {
                for (var e = 0; e < Oldplayer.Pregnant.Babies.length; e++) {
                    player.Pregnant.Babies.push(Oldplayer.Pregnant.Babies[e])
                    player.Pregnant.Status = true;
                }
            }
        }
        if (Array.isArray(Oldplayer.Children)) {
            for (var e = 0; e < Oldplayer.Children.length; e++) {
                player.Children.push(Oldplayer.Children[e]);
            }
        }
        if (Array.isArray(Oldplayer.Inventory)) {
            for (var e = 0; e < Oldplayer.Inventory.length; e++) {
                player.Inventory.push(Oldplayer.Inventory[e])
            }
        }

        //    House.Owned = OldHouse.Owned;
        House.BedLevel = OldHouse.BedLevel;
        House.Dorm = OldHouse.Dorm;
        if (OldHouse.hasOwnProperty("Kitchen")) {
            House.Kitchen = OldHouse.Kitchen;
        }
        if (OldHouse.hasOwnProperty("Gym")) {
            House.Gym = OldHouse.Gym;
        }
        if (OldHouse.hasOwnProperty("Brothel")) {
            House.Brothel = OldHouse.Brothel;
        }
        if (Array.isArray(OldHouse.Dormmates)) {

            for (var e = 0; e < OldHouse.Dormmates; e++) {
                House.Dormmates.push(OldHouse.Dormmates[e]);
            }
        }
        console.log(player);
        requestAnimationFrame(loop);
        DateEngine();
    };




    // end New game+


    // Checks flags, settings, etc at load
    function CheckFlags() {
        // Flags
        if (Flags.BanditLord && !House.Owned) {
            document.getElementById("BuyHouse").style.display = 'inline-block'
        } else {
            document.getElementById("BuyHouse").style.display = 'none'
        };

        // load Settings
        document.body.style.backgroundColor = Settings.BackColor;
        MapColor = Settings.MapColor
        document.body.style.color = Settings.TextColor
        document.body.style.fontFamily = Settings.TextFont

        document.getElementById("backcolor").value = Settings.BackColor;
        document.getElementById("MapColor").value = Settings.MapColor;
        document.getElementById("textcolor").value = Settings.TextColor;
        document.getElementById("textfont").value = Settings.TextFont;

        if (Settings.Vore) {
            if (!Settings.hasOwnProperty("VoreSettings")) {
                Settings.VoreSettings = {
                    StomachDigestion: false,
                    CumTF: false,
                    ChildTF: false,
                    VCumDigestion: false,
                    MilkTF: false

                }
            }
        }
        if (!Settings.hasOwnProperty("EssenceAuto")) {
            Settings.EssenceAuto = true;
            console.log("Added EssenceAuto");
        }
        if (!Settings.ImgPack) {
            Settings.ImgPack = false;
            console.log("Set imgpack: false");
        }
        if (!Settings.hasOwnProperty("Pronun")) {
            Settings.Pronun = {
                Status: false,
                Herm: "hermaphrodite",
                Male: "male",
                Female: "female",
                Doll: "doll"
            }
            console.log("Added Settings pronun");
        }
        // Makes old saves work?
        if (player.Balls.length > 0) {
            if (!player.Balls[0].hasOwnProperty("Cum")) {
                for (var e = 0; e < player.Balls.length; e++) {
                    player.Balls[e] = {
                        CumMax: Math.round(player.Masc / 70) * 400,
                        Cum: 0,
                        CumRate: 0.01,
                        CumBaseRate: 0.1
                    }
                }
            }
        }
        for (var b = 0; b < player.Boobies.length; b++) {
            if (!player.Boobies[b].hasOwnProperty("Milk")) {
                player.Boobies[b].Milk = 0;
                player.Boobies[b].MilkMax = Math.round(player.Boobies[b].Size * 600);
                player.Boobies[b].MilkRate = 0;
                player.Boobies[b].MilkBaseRate = 0;

            }
        }
        if (!player.Pregnant.hasOwnProperty("Babies")) {
            player.Pregnant = {};
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

        if (window.innerHeight < 800) {
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("SecondButtnos").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
        } else {
            document.getElementById("SecondButtnos").style.display = 'block';
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MoreButtons").style.display = 'none';
            document.getElementById("LessButtons").style.display = 'none';
        }

        if (Array.isArray(player.Inventory)) {
            if (player.Inventory.length < 1) {
                var Blade = {
                    Name: "Blade",
                    Use: "Yes",
                    Equip: "Yes",
                    Drop: "Yes",
                    Does: "Temp+5",
                    Title: "Temp_Tempsson legendary temp sword gives +999 to testing."
                }
                player.Inventory.push(Blade);
            }
        } else {
            player.Inventory = [];
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

    }

    // Start på char creator
    document.getElementById("Begin").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'none';
        document.getElementById("page2").style.display = 'block';
        document.getElementById("startgame").style.display = 'none';
        player.Name = document.getElementById("firstname").value;
        player.Lastname = document.getElementById("lastname").value;
        player.Haircolor = document.getElementById("haircolor").value;
        player.Skincolor = document.getElementById("skincolor").value;
        player.MaxHealth = 100;
        player.MaxWillHealth = 100;
        player.Health = player.MaxHealth;
        player.WillHealth = player.MaxWillHealth;
    });

    document.getElementById("BackHome").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'none';
        document.getElementById("StartPage").style.display = 'block';
    });

    // Ge karaktär start värden
    document.getElementById("Begin").addEventListener("click", function () {
        document.getElementById("startgame").style.display = 'inline-block';
        document.getElementById("looks").innerHTML = "You are " + player.Name + " " + player.Lastname + " a " + Math.round(player.Height) + "cm tall " + Pronun(CheckGender(player)) +
            ", weighs " + player.Weight + "kg. Looking at yourself in a mirror you see " + player.Haircolor + " hair and a " + player.Skincolor + " skin color.";

        requestAnimationFrame(loop);
        DateEngine();

    });
    document.getElementById("StartAutoEssence").addEventListener("click", function () {
        Settings.EssenceAuto = !Settings.EssenceAuto;
        document.getElementById("StartAutoEssence").value = "Auto TF " + Settings.EssenceAuto;
    });

    document.getElementById("startgame").addEventListener("click", function () {
        document.getElementById("page2").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
        if (window.innerHeight < 800) {
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("SecondButtnos").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
        } else {
            document.getElementById("SecondButtnos").style.display = 'block';
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MoreButtons").style.display = 'none';
            document.getElementById("LessButtons").style.display = 'none';
        }
    });

    function DickLook(who) {
        if (who.Dicks.length > 0) {
            var dicks = "";
            var virgin = " ";
            for (var d = 0; d < who.Dicks.length; d++) {
                if (who.Dicks[d].Virgin) {
                    virgin = " virgin"
                }
                dicks += who.Dicks[d].Size + "cm long " + who.Dicks[d].Type + virgin + " dick. <br>";
            }
            return dicks;
        } else {
            return "";
        }
    }

    function BallLook(who) {
        if (who.Balls.length > 0) {
            var balls = "";
            for (var b = 0; b < who.Balls.length; b++) {
                balls += "A pair of " + who.Balls[b].Size + "cm in diameter balls, ";
                var cum = "which are filled with " + Math.round((who.Balls[b].Cum / 1000) * 100) / 100 + "Liters of cum.<br>"
            }
            return balls + cum;
        } else {
            return "";
        }
    }

    function PussyLook(who) {
        if (who.Pussies.length > 0) {
            var pussies = "";
            var virgin = " "
            for (var p = 0; p < who.Pussies.length; p++) {
                if (who.Pussies[p].Virgin) {
                    virgin = " virgin"
                }
                pussies += who.Pussies[p].Size + "cm deep " + who.Pussies[p].Type + virgin + " pussy <br>";
            }
            return pussies;
        } else {
            return "";
        }
    }

    function BoobLook(who) {
        if (who.Boobies.length > 0) {
            var boobies = "";
            for (var b = 0; b < who.Boobies.length; b++) {
                boobies += BoobSizeConvertor(who.Boobies[b].Size) + " chest. <br>";
            }
            return boobies;
        } else {
            return "";
        }
    }

    function AnalLook(who) {

    }

    function BoobSizeConvertor(Size) {
        switch (Size) {
            case 0:
            case 1:
                return "flat";
            case 2:
                return "AA size";
            case 3:
                return "A size";
            case 4:
                return "B size";
            case 5:
                return "C size";
            case 6:
                return "D size";
            case 7:
                return "DD size";
            case 8:
                return "F size";
            case 9:
                return "G size";
            case 10:
                return "H size";
            case 11:
                return "I size";
            case 12:
                return "J size";
            case 13:
                return "K size";
            case 14:
                return "L size";
            case 15:
                return "M size";
            case 16:
                return "N size";
            case 17:
                return "O size";
            default:
                return "Huge"
        }
    }

    function PussySizeConvetor(Size) {
        if (Size <= 1) {
            return "extremely tight";
        } else if (Size >= 2 && Size < 4) {
            return "very tight";
        } else if (Size >= 4 && Size < 6) {
            return "tight";
        } else if (Size >= 6 && Size < 8) {
            return "tight";
        } else if (Size >= 8 && Size < 10) {
            return "tight";
        } else {
            return "loose";
        }
    }

    function Fitness(who) {
        var a, b;
        if ((who.Fat / who.Weight) * 100 <= 2) {
            a = "You look malnourished ";
        } else if ((who.Fat / who.Weight) * 100 <= 14) {
            a = "You have a athletic body ";
        } else if ((who.Fat / who.Weight) * 100 <= 18) {
            a = "You have a fit body ";
        } else if ((who.Fat / who.Weight) * 100 <= 26) {
            a = "You have a healthy body ";
        } else if ((who.Fat / who.Weight) * 100 <= 31) {
            a = "You have a slighty obese body ";
        } else if ((who.Fat / who.Weight) * 100 <= 36) {
            a = "You have a obese body ";
        } else {
            a = "You have a morbidly obese body ";
        }

        if (who.Muscle < who.Height * 0.18) {
            b = "with weak looking muscle.";
        } else if (who.Muscle < who.Height * 0.20) {
            b = "with average looking muscle.";
        } else if (who.Muscle < who.Height * 0.22) {
            b = "with strong looking muscle.";
        } else {
            b = "with huge looking of muscle.";
        }

        return a + b;
    }

    // Sets display to none used for menu buttons
    function DisplayNone() {
        battle = true;
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
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("EssenceOptionsMenu").style.display = 'none';
        document.getElementById("PronunForm").style.display = 'none';
        document.getElementById("Inventory").style.display = 'none';
    }

    document.getElementById("Options").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("optionpage").style.display = 'block';
        document.getElementById("ImgPack").value = "Img pack: " + Settings.ImgPack;
    });
    var FontSize = 1;
    document.getElementById("FontSmaller").addEventListener("click", function () {
        FontSize -= 0.05;
        document.body.style.fontSize = FontSize + "em";
    });
    document.getElementById("FontBigger").addEventListener("click", function () {
        FontSize += 0.05;
        document.body.style.fontSize = FontSize + "em";
    });
    var OldMap;
    var MapProcent = 0.9;

    document.getElementById("SetPronun").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("PronunForm").style.display = 'block'
    });
    document.getElementById("AcceptPronun").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("optionpage").style.display = 'block';
        Settings.Pronun.Herm = document.getElementById("Herm").value;
        Settings.Pronun.Male = document.getElementById("Male").value;
        Settings.Pronun.Female = document.getElementById("Female").value;
        Settings.Pronun.Doll = document.getElementById("Doll").value;
        Settings.Pronun.Status = true;
    });

    // Makes sure map scales correctly when user change screen size.
    function HemScale() {

        if (window.innerHeight < 800) {
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("SecondButtnos").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
        } else {
            document.getElementById("SecondButtnos").style.display = 'block';
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MoreButtons").style.display = 'none';
            document.getElementById("LessButtons").style.display = 'none';
        }

        OldMap = medium;
        medium = Math.ceil((document.documentElement.clientHeight * MapProcent) / 20) * 20;
        startarea.width = medium;
        startarea.height = medium;
        var NewMap = medium;
        grid = (startarea.height / 20);
        sprite.x = sprite.x * NewMap / OldMap;
        sprite.y = sprite.y * NewMap / OldMap;
        for (var j = 0; j < enemies.length; j++) {
            enemies[j].Size = enemies[j].Size * (NewMap / OldMap);
            enemies[j].XPos = enemies[j].XPos * (NewMap / OldMap);
            enemies[j].YPos = enemies[j].YPos * (NewMap / OldMap);
        }

        DoorE = new MakeDoor(startarea.width - 2 * grid, startarea.height / 2 - 3 * grid, grid, 5 * grid, "E");
        DoorS = new MakeDoor(startarea.width / 2 - 3 * grid, startarea.height - 2 * grid, grid * 5, grid, "S");
        DoorW = new MakeDoor(0, startarea.height / 2 - 3 * grid, grid, 5 * grid, "W");
        DoorN = new MakeDoor(startarea.width / 2 - 3 * grid, 0, grid * 5, grid, "N");
        Doors = [DoorE, DoorS, DoorN, DoorW];
        Npcs = [];
        Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)");
        Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)");
        Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)")
        Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
        WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
        WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)");
        Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)");
        Portal = new Npc("LocalPortal", "Portal", grid * 12, grid * 8, grid * 4, grid * 4, "RGB(96, 47, 107)");
        BlackMartket = new Npc("BlackMarket", "Black market", grid * 12, grid * 5, grid * 5, grid * 3, "RGB(133,94,66)");
        return;
    }

    // LocalPotal
    document.getElementById("TeleportHome").addEventListener("click", function () {
        player.Area = "First";
        player.Map = "RoadToHome";
        battle = false;
        document.getElementById("LocalPortal").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
    });


    // More buttons for small screen height
    document.getElementById("MoreButtons").addEventListener("click", function () {
        document.getElementById("FirstButtons").style.display = 'none';
        document.getElementById("SecondButtnos").style.display = 'block';
    });
    document.getElementById("LessButtons").addEventListener("click", function () {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtnos").style.display = 'none';
    });

    // Save options
    document.getElementById("saveoptions").addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("optionpage").style.display = 'none';
        document.body.style.backgroundColor = document.getElementById("backcolor").value;
        MapColor = document.getElementById("MapColor").value;
        document.body.style.color = document.getElementById("textcolor").value;
        document.body.style.fontFamily = document.getElementById("textfont").value;
        MapProcent = document.getElementById("MapScale").value;

        Settings.BackColor = document.getElementById("backcolor").value;
        Settings.MapColor = document.getElementById("MapColor").value;
        Settings.TextColor = document.getElementById("textcolor").value;
        Settings.TextFont = document.getElementById("textfont").value;
        Settings.BorderColor = document.getElementById("BorderColor").value;

        HemScale();
    });
    document.getElementById("EssenceOptions").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("EssenceOptionsMenu").style.display = 'block';
        document.getElementById("MaxMenu").style.display = 'none';
        if (Settings.EssenceAuto) {
            document.getElementById("EssenceAuto").value = "Essence Auto";
            document.getElementById("ManualGrowth").style.display = 'none';
        } else {
            document.getElementById("EssenceAuto").value = "Essence Manual";
            document.getElementById("ManualGrowth").style.display = 'block';
            document.getElementById("GrowExtraBreast").value = "Extra breast " + EssenceExtraCost(player.Boobies)
            document.getElementById("GrowExtraPussy").value = "Extra pussy " + EssenceExtraCost(player.Pussies) + "F";
            document.getElementById("GrowExtraDick").value = "Extra dick " + EssenceExtraCost(player.Dicks) + "M";
            document.getElementById("GrowExtraBalls").value = "Extra balls " + EssenceExtraCost(player.Balls) + "M";
        }
        document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
        document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
        document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
        document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
        document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
        document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
        document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
        document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
    });

    document.getElementById("BoobsLess").addEventListener("click", function () {
        if (Settings.MaxLimbs.MaxBoobs > 0) {
            Settings.MaxLimbs.MaxBoobs--;
        }
        document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
        document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
    });
    document.getElementById("BoobsMore").addEventListener("click", function () {
        Settings.MaxLimbs.MaxBoobs++;
        document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
        document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
    });
    document.getElementById("VaginasLess").addEventListener("click", function () {
        if (Settings.MaxLimbs.MaxVaginas > 0) {
            Settings.MaxLimbs.MaxVaginas--;
        }
        document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
        document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
    });
    document.getElementById("VaginasMore").addEventListener("click", function () {
        Settings.MaxLimbs.MaxVaginas++;
        document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
        document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
    });
    document.getElementById("DicksLess").addEventListener("click", function () {
        if (Settings.MaxLimbs.MaxDicks > 0) {
            Settings.MaxLimbs.MaxDicks--;
        }
        document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
        document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
    });
    document.getElementById("DicksMore").addEventListener("click", function () {
        Settings.MaxLimbs.MaxDicks++;
        document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
        document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
    });
    document.getElementById("BallsLess").addEventListener("click", function () {
        if (Settings.MaxLimbs.MaxBalls > 0) {
            Settings.MaxLimbs.MaxBalls--;
        }
        document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
        document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
    });
    document.getElementById("BallsMore").addEventListener("click", function () {
        Settings.MaxLimbs.MaxBalls++;
        document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
        document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
    });


    document.getElementById("NoExtra").addEventListener("click", function () {
        if (document.getElementById("MaxMenu").style.display == 'none') {
            document.getElementById("MaxMenu").style.display = 'block';
            document.getElementById("NoExtra").value = "Hide";
        } else {
            document.getElementById("MaxMenu").style.display = 'none';
            document.getElementById("NoExtra").value = "Max boobs/dicks etc";
        }
    });


    function EssenceCost(what) {
        return Math.round((10 * Math.pow(1.1, what.Size)));
    };

    function EssenceExtraCost(what) {
        return Math.round((30 * Math.pow(5, what.length)));
    };

    document.getElementById("EssenceAuto").addEventListener("click", function () {
        Settings.EssenceAuto = !Settings.EssenceAuto;
        if (Settings.EssenceAuto) {
            document.getElementById("EssenceAuto").value = "Essence Auto";
            document.getElementById("ManualGrowth").style.display = 'none';
        } else {
            document.getElementById("EssenceAuto").value = "Essence Manual";
            document.getElementById("ManualGrowth").style.display = 'block';
            document.getElementById("GrowExtraBreast").value = "Extra breast " + EssenceExtraCost(player.Boobies)
            document.getElementById("GrowExtraPussy").value = "Extra pussy " + EssenceExtraCost(player.Pussies) + "F";
            document.getElementById("GrowExtraDick").value = "Extra dick " + EssenceExtraCost(player.Dicks) + "M";
            document.getElementById("GrowExtraBalls").value = "Extra balls " + EssenceExtraCost(player.Balls) + "M";
        }
    });
    document.getElementById("GrowBreast").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'none';
        document.getElementById("BreastMenu").style.display = 'block';
        BreastButtons();
    });
    document.getElementById("GrowBreastBack").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'block';
        document.getElementById("BreastMenu").style.display = 'none';
    });
    document.getElementById("GrowExtraBreast").addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Boobies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Boob = {
                Size: 0,
                Type: player.Race
            }
            player.Boobies.push(Boob);
        }
        document.getElementById("GrowExtraBreast").value = "Extra Breast " + EssenceExtraCost(player.Boobies) + "F";
        BreastButtons();
    });

    function BreastButtons() {
        var Inputs = [];
        for (var e = 0; e < player.Boobies.length; e++) {
            var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerChest(" + e + "); BreastButtons();\">" +
                BoobSizeConvertor(player.Boobies[e].Size) + " " + EssenceCost(player.Boobies[e]) + "Feminity</button  >"
            Inputs += Input;
        }
        document.getElementById("BreastButtons").innerHTML = Inputs;
    }

    function BiggerChest(index) {
        var cost = EssenceCost(player.Boobies[index]);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            player.Boobies[index].Size++;
        }
    }
    document.getElementById("GrowPussy").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'none';
        document.getElementById("PussyMenu").style.display = 'block';
        PussyButtons();
    });
    document.getElementById("GrowPussyBack").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'block';
        document.getElementById("PussyMenu").style.display = 'none';
    });
    document.getElementById("GrowExtraPussy").addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Pussies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Pussy = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Pussies.push(Pussy);
            document.getElementById("GrowExtraPussy").value = "Extra pussy " + EssenceExtraCost(player.Pussies) + "F";
            PussyButtons();
        }
    });

    function PussyButtons() {
        var Inputs = [];
        for (var e = 0; e < player.Pussies.length; e++) {
            var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerPussy(" + e + "); PussyButtons();\">" +
                player.Pussies[e].Size + "cm " + EssenceCost(player.Pussies[e]) + "Feminity</button  >"
            Inputs += Input;
        }
        document.getElementById("PussyButtons").innerHTML = Inputs;
    }

    function BiggerPussy(index) {
        var cost = EssenceCost(player.Pussies[index]);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            player.Pussies[index].Size++;
        }
    }
    document.getElementById("GrowDick").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'none';
        document.getElementById("DickMenu").style.display = 'block';
        DickButtons();
    });
    document.getElementById("GrowDickBack").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'block';
        document.getElementById("DickMenu").style.display = 'none';
    });
    document.getElementById("GrowExtraDick").addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Dicks);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            var Dick = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Dicks.push(Dick);
            document.getElementById("GrowExtraDick").value = "Extra dick " + EssenceExtraCost(player.Dicks) + "M";
            DickButtons();
        }
    });

    function BiggerDick(index) {
        var cost = EssenceCost(player.Dicks[index]);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            player.Dicks[index].Size++;
        }
    }

    function DickButtons() {
        var Inputs = [];
        for (var e = 0; e < player.Dicks.length; e++) {
            var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerDick(" + e + "); DickButtons();\">" +
                player.Dicks[e].Size + "cm " + EssenceCost(player.Dicks[e]) + "Masculinity</button  >"
            Inputs += Input;
        }
        document.getElementById("DickButtons").innerHTML = Inputs;
    }
    document.getElementById("GrowBalls").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'none';
        document.getElementById("BallsMenu").style.display = 'block';
        BallsButtons();
    });
    document.getElementById("GrowBallsBack").addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'block';
        document.getElementById("BallsMenu").style.display = 'none';
    });
    document.getElementById("GrowExtraBalls").addEventListener("click", function () {
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
            document.getElementById("GrowExtraBalls").value = "Extra balls " + EssenceExtraCost(player.Balls) + "M";
            BallsButtons();
        }
    });

    function BiggerBalls(index) {
        var cost = EssenceCost(player.Balls[index]);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            player.Balls[index].Size++;
        }
    };

    function BallsButtons() {
        var Inputs = [];
        for (var e = 0; e < player.Balls.length; e++) {
            var Input = "<button type=\"button\" class=\"\" onclick=\"BiggerBalls(" + e + "); BallsButtons();\">" +
                player.Balls[e].Size + "cm " + EssenceCost(player.Balls[e]) + "Masculinity</button  >"
            Inputs += Input;
        }
        document.getElementById("BallsButtons").innerHTML = Inputs;
    }

    document.getElementById("EssenceOptionsLeave").addEventListener("click", function () {
        DisplayNone();
        battle = false;
        document.getElementById("map").style.display = 'block'
    });
    document.getElementById("PerkOptions").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("PerkOptionsMenu").style.display = 'block';
        document.getElementById("Skip").value = "Skip " + Settings.Skip;
        document.getElementById("OptionGiveEssence").value = Settings.GiveEssence;
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
    });
    document.getElementById("Skip").addEventListener("click", function () {
        Settings.Skip = !Settings.Skip;
        document.getElementById("Skip").value = "Skip " + Settings.Skip;
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
        battle = false;
        document.getElementById("PerkOptionsMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block'
    });
    document.getElementById("Looks").addEventListener("click", function () {
        DisplayNone();
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("ShowLooks").style.display = 'block';
    });

    document.getElementById("CloseLooks").addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("ShowLooks").style.display = 'none';
    });
    document.getElementById("ExtraInfo").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("DetailedInfo").style.display = 'block';
        document.getElementById("Pregnancy").innerHTML = "Times you have impregnated: " + Flags.Impregnations + "<br> Times you have been pregnant: " + Flags.Pregnations;
        document.getElementById("ExtraStats").innerHTML = "Virility: " + player.Virility + "<br>Fertility: " + player.Fertility + "<br>Essence drain: " + player.EssenceDrain +
            "<br>Give essence: " + player.GiveEssence + "<br> passive rest rate: " + player.RestRate;
    });
    document.getElementById("CloseExtra").addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("DetailedInfo").style.display = 'none';
    });

    document.getElementById("Quests").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("ShowQuests").style.display = 'block';

        var questText = " ";
        for (var e = 0; e < player.Quests.length; e++) {
            questText += "<div><h4>" + player.Quests[e].Name + "</h4>" + "Completed: " + player.Quests[e].Completed + " <br>Count: " +
                player.Quests[e].Count + "<br><br></div>";
        }
        document.getElementById("QuestTexts").innerHTML = questText;
    });
    document.getElementById("QuestsLeave").addEventListener("click", function () {
        battle = false;
        document.getElementById("ShowQuests").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    });
    document.getElementById("ShowInventory").addEventListener("click", function () {
        DisplayNone();
        console.log(player.Inventory)
        document.getElementById("Inventory").style.display = 'block';
        document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
    });

    function Items(Things) {
        var Bag = "";
        Things.sort();
        for (var e = 0; e < Things.length; e++) {
            var Thing = Things[e];
            console.log(Thing);
            var item = "<div title=\"" + Thing.Title + "\">" + Thing.Name
            switch (Thing.Use) {
                case "Yes":
                    item += "<input type=\"button\" onclick=\"Use(" + e + ")\" value=\"Use\">"
                    break;
                default:
                    break
            }
            switch (Thing.Equip) {
                case "Yes":
                    item += "<input type=\"button\" onclick=\"Equip(" + e + ")\" value=\"Equip\">"
                    break;
                default:
                    break;
            }
            switch (Thing.Drop) {
                case "No":
                    break;
                default:
                    item += "<input type=\"button\" onclick=\"Drop(" + e + ")\" value=\"Drop\">"
                    break;
            }
            item += "</div>";
            Bag += item;
        }
        return Bag;

    }

    function Use(item) {
        var thing = player.Inventory[item];
        if (thing.Name == "Orc cum") {
            player.Masc += 50;
            player.Inventory.splice(item, 1);
            EventLog("After drinking the orc cum, you body absorbs the manly essence of it.");
        } else if (thing.Name == "Fairy dust") {
            player.Height -= 5;
            player.Inventory.splice(item, 1);
            EventLog("Inhaling the fairy dust you see the world grow before you, or maybe it's you who became shorter?");
        }
        document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
        return console.log(player.Inventory[item]);
    }

    function Equip(item) {
        return console.log(player.Inventory[item]);
    }

    function Drop(item) {
        player.Inventory.splice(item, 1);
        document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)

    }
    document.getElementById("InventoryLeave").addEventListener("click", function () {
        battle = false;
        document.getElementById("Inventory").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    });

    document.getElementById("Save").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("SaveMenu").style.display = 'block';

        if (localStorage.getItem('SaveDate1') !== null) {
            document.getElementById("SavePlayer1").value = localStorage.getItem('SaveDate1');
        }
        if (localStorage.getItem('SaveDate2') !== null) {
            document.getElementById("SavePlayer2").value = localStorage.getItem('SaveDate2');
        }
        if (localStorage.getItem('SaveDate3') !== null) {
            document.getElementById("SavePlayer3").value = localStorage.getItem('SaveDate3');
        }
        if (localStorage.getItem('SaveDate4') !== null) {
            document.getElementById("SavePlayer4").value = localStorage.getItem('SaveDate4');
        }
        if (localStorage.getItem('SaveDate5') !== null) {
            document.getElementById("SavePlayer5").value = localStorage.getItem('SaveDate5');
        }
    });
    document.getElementById("SaveLeave").addEventListener("click", function () {
        battle = false;
        document.getElementById("SaveMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    })
    document.getElementById("SavePlayer1").addEventListener("click", function () {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer1', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate1', Date());
        document.getElementById("SavePlayer1").value = Date();
        document.getElementById("LoadPlayer1").value = Date();
    });
    document.getElementById("SavePlayer2").addEventListener("click", function () {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer2', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate2', Date());
        document.getElementById("SavePlayer2").value = Date();
        document.getElementById("LoadPlayer2").value = Date();
    });
    document.getElementById("SavePlayer3").addEventListener("click", function () {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer3', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate3', Date());
        document.getElementById("SavePlayer3").value = Date();
        document.getElementById("LoadPlayer3").value = Date();
    });
    document.getElementById("SavePlayer4").addEventListener("click", function () {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer4', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate4', Date());
        document.getElementById("SavePlayer4").value = Date();
        document.getElementById("LoadPlayer4").value = Date();
    });
    document.getElementById("SavePlayer5").addEventListener("click", function () {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer5', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate5', Date());
        document.getElementById("SavePlayer5").value = Date();
        document.getElementById("LoadPlayer5").value = Date();
    });
    document.getElementById("SaveText").addEventListener("click", function () {
        var SaveArray = [player, House, Flags, Settings];
        var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
        newWindow = window.open(uriContent, 'neuesDokument');
    });

    document.getElementById("Load").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("MapLoad").style.display = 'block';
        document.getElementById("LoadMenu").style.display = 'block';
        document.getElementById("StartLoad").style.display = 'none';

        if (localStorage.getItem('SaveDate1') !== null) {
            document.getElementById("LoadPlayer1").value = localStorage.getItem('SaveDate1');
        }
        if (localStorage.getItem('SaveDate2') !== null) {
            document.getElementById("LoadPlayer2").value = localStorage.getItem('SaveDate2');
        }
        if (localStorage.getItem('SaveDate3') !== null) {
            document.getElementById("LoadPlayer3").value = localStorage.getItem('SaveDate3');
        }
        if (localStorage.getItem('SaveDate4') !== null) {
            document.getElementById("LoadPlayer4").value = localStorage.getItem('SaveDate4');
        }
        if (localStorage.getItem('SaveDate5') !== null) {
            document.getElementById("LoadPlayer5").value = localStorage.getItem('SaveDate5');
        }
    });
    document.getElementById("LoadLeave").addEventListener("click", function () {
        battle = false;
        document.getElementById("LoadMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    })

    function RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function RandomString(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function enemy(EnemyName, EnemyRace, EnemyMasculinity, EnemmyFemininity, Strength,
        Endurance, Willpower, Charm, Intelegence, SexSkill, Arousal, Orgasm, EnemyHealth, EnemyFullHealth,
        EnemyWillHealth, EnemyFullWillHealth, EnemyXPos, EnemyYPos, ExpDrop, GoldDrop, Color, Size, Weight,
        Height, Muscle, Fat) {
        this.Name = EnemyName;
        this.Race = EnemyRace;
        this.Masc = EnemyMasculinity;
        this.Femi = EnemmyFemininity
        this.Str = Strength;
        this.End = Endurance;
        this.Willpower = Willpower;
        this.Charm = Charm;
        this.Int = Intelegence;
        this.SexSkill = SexSkill;
        this.Health = EnemyHealth;
        this.FullHealth = EnemyFullHealth;
        this.WillHealth = EnemyWillHealth;
        this.FullWillHealth = EnemyFullWillHealth;
        this.Arousal = Arousal;
        this.Orgasm = Orgasm;
        this.XPos = EnemyXPos;
        this.YPos = EnemyYPos;
        this.Exp = ExpDrop;
        this.Gold = GoldDrop;
        this.Color = Color;
        this.Size = Size;
        this.Weight = Weight;
        this.Height = Height;
        this.Fat = Fat;
        this.Muscle = Muscle;
    }

    var Races = ["Human", "Halfling"];
    var RacesBandit = ["Orc", "Troll"]
    var RacesRoad = ["Human"];
    var RacesForest = ["Elf", "Amazon"];
    var RacesForest2 = ["Elf", "Fairy"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var RacesWitch = ["Human", "Elf", "Dark elf"];
    var RacesCave = ["Goblin", "Imp"];
    var RacesCave2 = ["Goblin", "Demon"];
    var RacesCave3 = ["Dhampir", "Demon"];



    var FemaleFirstNames = ["Veronica", "Kyra", "Lauryn", "Alicja", "Tate", "Colleen", "Melody", "Pippa", "Keziah", "Melissa", "Lana", "Marie", "Molly", "Sandra", "Dannielle", "Yusra", "Laiba", "Gabrielle", "Syeda", "Amirah"];
    var MaleFirstNames = ["Asim", "Faith", "Macy", "Landon", "Sulaiman", "Iestyn", "Gordon", "Hector", "Haris", "Lee", "Simran", "Ronnie", "Rishi", "Bartosz", "Shelley", "Virgil", "Howard", "Rio"];
    var LastNames = ["Heath", "Bone", "Dupont", "Patterson", "Garza", "Stein", "Madden", "Francis", "Villanueva", "Perry", "Lyssa", "Beach", "Crouch", "Sharp", "Clifford", "Wade", "Vargas", "Hatfield", "Mata", "Lozano", "Everett"];

    var EvilMaleFirstNames = ["Neclord", "Virion", "Dario", "Grumio", "Auron", "Jaymes", "Fark", "Cidolfus", "Bartholomew", "Arthur"];
    var EvilFemaleFirstNames = ["Autumn", "Imeena", "Margorie", "Draven", "Lauden", "Ethel", "Cat", "Raven", "Senka", "Jinx"];
    var EvilLastNames = ["Crimson", "Kane", "Duke", "Interfector", "Geulimja", "Ebonywood", "Grove", "Helion", "Church", "Geulimja", "Moonfall", "Winter", "Hart", "Calarook", "Crypt", "Wolf", "Rex", "Fadington", "Maganti", "Hook"];

    var battle = false;
    var FirstRound = true;

    function Pronun(gender) {
        switch (gender) {
            case "hermaphrodite":
                if (Settings.Pronun.Status) {
                    return Settings.Pronun.Herm
                } else {
                    return gender;
                }
            case "male":
                if (Settings.Pronun.Status) {
                    return Settings.Pronun.Male
                } else {
                    return gender;
                }
            case "female":
                if (Settings.Pronun.Status) {
                    return Settings.Pronun.Female
                } else {
                    return gender;
                }
            case "doll":
                if (Settings.Pronun.Status) {
                    return Settings.Pronun.Doll
                } else {
                    return gender;
                }
        }
    }

    function CheckGender(who) {
        var gender;
        if (who.Dicks.length > 0 && who.Pussies.length > 0) {
            gender = "hermaphrodite";
        } else if (who.Dicks.length > 0) {
            gender = "male";
        } else if (who.Pussies.length > 0) {
            gender = "female";
        } else {
            gender = "doll"
        }
        return gender;
    }
    // Level System
    var MaxExp = 30 * Math.pow(1.05, player.level - 1);

    function ExpCheck() {
        MaxExp = 30 * Math.pow(1.05, player.level - 1);
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
    // Level Menu
    document.getElementById("LevelButton").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("LevelMenu").style.display = 'block';

        document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        document.getElementById("GainStr").value = "Strength " + player.Str;
        document.getElementById("GainCha").value = "Charm: " + player.Charm;
        document.getElementById("GainEnd").value = "Endurance: " + player.End;
        document.getElementById("GainInt").value = "Intelegence: " + player.Int;
        document.getElementById("GainWill").value = "Willpower: " + player.Will;
        document.getElementById("GainSex").value = "Sex Skill: " + player.SexSkill;
    });
    // Incraese stats
    document.getElementById("GainStr").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Str++;
            player.SkillPoints--;
            document.getElementById("GainStr").value = "Strength: " + player.Str;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainStr").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainCha").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Charm++;
            player.SkillPoints--;
            document.getElementById("GainCha").value = "Charm: " + player.Charm;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainCha").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainEnd").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.End++;
            player.SkillPoints--;
            player.MaxHealth += 5;
            document.getElementById("GainEnd").value = "Endurance: " + player.End;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainEnd").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainInt").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Int++;
            player.SkillPoints--;
            document.getElementById("GainInt").value = "Intelegence: " + player.Int;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainInt").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainWill").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Will++;
            player.MaxWillHealth += 5;
            player.SkillPoints--;
            document.getElementById("GainWill").value = "Willpower: " + player.Will;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainWill").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainSex").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.SexSkill++;
            player.SkillPoints--;
            document.getElementById("GainSex").value = "Sex Skill: " + player.SexSkill;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainSex").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    // level menu return
    document.getElementById("No").addEventListener("click", function () {
        battle = false;
        document.getElementById("LevelMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    });

    function StringCounter(array, string) {
        var counts = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === string) {
                counts++;
            }
        }
        return counts;
    }

    document.getElementById("PerkMenu").addEventListener("click", function () {
        document.getElementById("LevelMenu").style.display = 'none';
        document.getElementById("PerksMenu").style.display = 'block';
        document.getElementById("PerkPointsLeft").innerHTML = "You have " + player.PerkPoints + " perk points left.";
        if (player.Perks.ExtraHealth.Count > 0) {
            document.getElementById("ExtraHealth").value = "ExtraHealth +" + player.Perks.ExtraHealth.Count;
        }
        if (player.Perks.ExtraWillHealth.Count > 0) {
            document.getElementById("ExtraWillHealth").value = "ExtraWillHealth +" + player.Perks.ExtraWillHealth.Count;
        }
        if (player.Perks.FasterRest.Count > 0) {
            document.getElementById("FasterRest").value = "Faster Rest +" + player.Perks.FasterRest.Count;
        }
        if (player.Perks.StealMore.Count > 0) {
            document.getElementById("StealMore").value = "More essence +" + player.Perks.StealMore.Count;
        }
        if (player.Perks.GiveEssence.Count > 0) {
            document.getElementById("GiveEssence").value = "Give essence +" + player.Perks.GiveEssence.Count;
        }
    });
    document.getElementById("LeavePerkMenu").addEventListener("click", function () {
        document.getElementById("PerksMenu").style.display = 'none';
        document.getElementById("LevelMenu").style.display = 'block';
    });

    function PerkHandler(perket) {
        player.PerkPoints--;
        player.Perks[perket].Count++
        document.getElementById(perket).value = perket + " +" + player.Perks[perket].Count;
        document.getElementById("PerkPointsLeft").innerHTML = "You have " + player.PerkPoints + " perk points left.";
    }
    document.getElementById("ExtraHealth").addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraHealth");
        } else {
            return;
        }
    });
    document.getElementById("ExtraHealth").addEventListener("mouseover", function (e) {
        document.getElementById("PerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("ExtraWillHealth").addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraWillHealth");
        } else {
            return;
        }
    });
    document.getElementById("ExtraWillHealth").addEventListener("mouseover", function (e) {
        document.getElementById("PerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("FasterRest").addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("FasterRest");
        } else {
            return;
        }
    });
    document.getElementById("FasterRest").addEventListener("mouseover", function (e) {
        document.getElementById("PerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("StealMore").addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("StealMore");
            player.EssenceDrain = 5 + player.Perks.StealMore.Count * 3;
        } else {
            return;
        }
    });
    document.getElementById("StealMore").addEventListener("mouseover", function (e) {
        document.getElementById("PerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GiveEssence").addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("GiveEssence");
            player.GiveEssence = player.Perks.GiveEssence.Count * 3;
        } else {
            return;
        }
    });
    document.getElementById("GiveEssence").addEventListener("mouseover", function (e) {
        document.getElementById("PerkMenuText").innerHTML = e.target.title;
    });


    // function to update player & enemy stats, check if you won or lose and deal damage to player
    function UpdateStats() {
        document.getElementById("status").style.display = 'none';
        document.getElementById("buttons").style.display = 'none';
        document.getElementById("EventLog").style.display = 'none';
        document.getElementById("BattleEnemy").innerHTML = enemies[EnemyIndex].Name + "<br>" + enemies[EnemyIndex].Race + " " + Pronun(CheckGender(enemies[EnemyIndex]));
        document.getElementById("EnemyStatusHealth").innerHTML = enemies[EnemyIndex].Health;
        document.getElementById("EnemyStatusHealth").style.width = 100 * (enemies[EnemyIndex].Health / enemies[EnemyIndex].FullHealth) + "%";
        document.getElementById("EnemyStatusWillHealth").innerHTML = enemies[EnemyIndex].WillHealth;
        document.getElementById("EnemyStatusWillHealth").style.width = 100 * (enemies[EnemyIndex].WillHealth / enemies[EnemyIndex].FullWillHealth) + "%";
        document.getElementById("StatusName2").innerHTML = player.Name + " " + player.Lastname;

        document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
        if (player.Health <= player.MaxHealth) {
            document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
        } else {
            document.getElementById("StatusHealth2").style.width = 103 + "%";
        }
        document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
        if (player.WillHealth <= player.MaxWillHealth) {
            document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
        } else {
            document.getElementById("StatusWillHealth2").style.width = 103 + "%";
        }

        if (enemies[EnemyIndex].Health <= 0) {
            WinBattle();
            return;
        } else if (enemies[EnemyIndex].WillHealth <= 0) {
            WinBattle();
            return;
        } else if (player.Health <= 0) {
            Lose();
            player.Health = 0;
            return;
        } else if (player.WillHealth <= 0) {
            Lose();
            player.WillHealth = 0;
            return;
        } else if (!FirstRound) {
            EnemyAttack();
            return;
        } else {
            FirstRound = false;
            return;
        }
    }
    var Winner = false;

    function Lose() {
        Winner = false;
        document.getElementById("LosePName").innerHTML = player.Name + " " + player.Lastname;
        document.getElementById("LoseEName").innerHTML = enemies[EnemyIndex].Name + "<br>" + enemies[EnemyIndex].Race + " " + Pronun(CheckGender(enemies[EnemyIndex]));
        document.getElementById("LoseMascu").innerHTML = Math.round(player.Masc);
        document.getElementById("LoseFemin").innerHTML = Math.round(player.Femi);
        document.getElementById("LoseEMascu").innerHTML = enemies[EnemyIndex].Masc;
        document.getElementById("LoseEFemin").innerHTML = enemies[EnemyIndex].Femi;
        SexColor(player, "PlayerLose");
        SexColor(enemies[EnemyIndex], "EnemyLose");
        var DelatMed = 2;
        if (player.Masc >= enemies[EnemyIndex].Masc && player.Masc >= enemies[EnemyIndex].Femi && player.Masc >= player.Femi) {
            DelatMed = 100 / player.Masc;
        } else if (player.Femi >= enemies[EnemyIndex].Masc && player.Femi >= enemies[EnemyIndex].Femi && player.Femi >= player.Masc) {
            DelatMed = 100 / player.Femi;
        } else if (enemies[EnemyIndex].Masc >= player.Masc && enemies[EnemyIndex].Masc >= enemies[EnemyIndex].Femi && enemies[EnemyIndex].Masc >= player.Femi) {
            DelatMed = 100 / enemies[EnemyIndex].Masc;
        } else {
            DelatMed = 100 / enemies[EnemyIndex].Femi;
        }

        document.getElementById("LoseMascu").style.width = player.Masc * DelatMed + "%";
        document.getElementById("LoseFemin").style.width = player.Femi * DelatMed + "%";
        document.getElementById("LoseEMascu").style.width = enemies[EnemyIndex].Masc * DelatMed + "%";
        document.getElementById("LoseEFemin").style.width = enemies[EnemyIndex].Femi * DelatMed + "%";

        document.getElementById("Encounter").style.display = 'none';
        document.getElementById("Lose").style.display = 'grid';
        document.getElementById("LeaveLose").style.display = 'none';
        document.getElementById("LoseSexText").innerHTML = "You lost to a " + Pronun(CheckGender(enemies[EnemyIndex])) + " " + enemies[EnemyIndex].Race + " " + enemies[EnemyIndex].Name;
        return;
    }
    document.getElementById("LoseSubmit").addEventListener("click", function () {
        document.getElementById("LoseSexText").innerHTML = "You submit";
        var a = RandomInt(1, 5);
        var take = Math.round(enemies[EnemyIndex].SexSkill);
        switch (a) {
            case 1:
            case 4:
                if ((player.Masc - take) <= 0) {
                    player.Masc = 0;
                } else {
                    player.Masc -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " maculinity.";
                break;
            case 2:
            case 5:
                if ((player.Femi - take) <= 0) {
                    player.Femi = 0;
                } else {
                    player.Femi -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " femininity.";
                break;
            default:
            case 3:
                if ((player.Femi - take / 2) <= 0) {
                    player.Femi = 0;
                } else {
                    player.Femi -= Math.round(take / 2);
                }
                if ((player.Masc - take) <= 0) {
                    player.Masc = 0;
                } else {
                    player.Masc -= Math.round(take / 2);
                    document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take / 2 + " femininity and maculinity.";
                }
                break;
        }
        switch (CheckGender(enemies[EnemyIndex])) {
            case "hermaphrodite":
            case "male":
                Impregnate(player, enemies[EnemyIndex], "B", "");
                break;
            default:
                break;
        }
        Lose();
        document.getElementById("LoseStruggle").style.display = 'none';
        document.getElementById("LoseSubmit").style.display = 'none';
        document.getElementById("LeaveLose").style.display = 'inline-block';
    });
    document.getElementById("LoseStruggle").addEventListener("click", function () {
        document.getElementById("LoseSexText").innerHTML = "You struggle";
        var a = RandomInt(1, 5);
        var take = Math.round((RandomInt(1, 4) * enemies[EnemyIndex].SexSkill) / 3);
        switch (a) {
            case 1:
            case 4:
                if ((player.Masc - take) <= 0) {
                    player.Masc = 0;
                } else {
                    player.Masc -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " maculinity.";
                break;
            case 2:
            case 5:
                if ((player.Femi - take) <= 0) {
                    player.Femi = 0;
                } else {
                    player.Femi -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " femininity.";
                break;
            default:
            case 3:
                if ((player.Femi - take / 2) <= 0) {
                    player.Femi = 0;
                } else {
                    player.Femi -= Math.round(take / 2);
                }
                if ((player.Masc - take) <= 0) {
                    player.Masc = 0;
                } else {
                    player.Masc -= Math.round(take / 2);
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take / 2 + " femininity and maculinity.";
                break;
        }
        switch (CheckGender(enemies[EnemyIndex])) {
            case "hermaphrodite":
            case "male":
                Impregnate(player, enemies[EnemyIndex], "B", "");
                break;
            default:
                break;
        }
        Lose();
        document.getElementById("LoseStruggle").style.display = 'none';
        document.getElementById("LoseSubmit").style.display = 'none';
        document.getElementById("LeaveLose").style.display = 'inline-block';
    })
    document.getElementById("LeaveLose").addEventListener("click", function () {
        battle = false;
        document.getElementById("Lose").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("LoseStruggle").style.display = 'inline-block';
        document.getElementById("LoseSubmit").style.display = 'inline-block';
        document.getElementById("LosePlayerOrgasm").innerHTML = " ";
    });

    function EnemyAttack() {

        if (enemies[EnemyIndex].Str >= enemies[EnemyIndex].Charm) {
            var EAttack = (RandomInt(1, 5) * enemies[EnemyIndex].Str) / 2;
            player.Health -= EAttack;
            document.getElementById("BattleText2").innerHTML = "Your opponent hits you for " + EAttack + " dmg.";
            document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
            if (player.Health <= player.MaxHealth) {
                document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
            } else {
                document.getElementById("StatusHealth2").style.width = 103 + "%";
            }
            document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
            if (player.WillHealth <= player.MaxWillHealth) {
                document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
            } else {
                document.getElementById("StatusWillHealth2").style.width = 103 + "%";
            }
            if (player.Health <= EAttack) {
                UpdateStats();
                return;
            }
            return;
        } else if (enemies[EnemyIndex].Str < enemies[EnemyIndex].Charm) {
            var EAttack = (RandomInt(1, 5) * enemies[EnemyIndex].Charm) / 2;
            player.WillHealth -= EAttack;
            document.getElementById("BattleText2").innerHTML = "Your opponent tease you for " + EAttack + " will dmg.";
            document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
            if (player.Health <= player.MaxHealth) {
                document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
            } else {
                document.getElementById("StatusHealth2").style.width = 103 + "%";
            }
            document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
            if (player.WillHealth <= player.MaxWillHealth) {
                document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
            } else {
                document.getElementById("StatusWillHealth2").style.width = 103 + "%";
            }
            if (player.WillHealth <= EAttack) {
                UpdateStats();
                return;
            }
            return;
        }
    }

    // Function Race Bonus
    function RaceBonus(who) {
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
                who.Height = who.Height / 9;
                who.Weight = who.Weight / 9;
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
        }
        return who;
    };

    // Give opponents names
    function NameGiver(who) {
        switch (CheckGender(who)) {
            case "male":
                who.FirstName = RandomString(MaleFirstNames);
                break;
            case "hermaphrodite":
            case "female":
            case "doll":
                who.FirstName = RandomString(FemaleFirstNames);
                break;
        }
        who.LastName = RandomString(LastNames);
    }

    function EvilNameGiver(who) {
        switch (CheckGender(who)) {
            case "male":
                who.FirstName = RandomString(EvilMaleFirstNames);
                break;
            case "hermaphrodite":
            case "female":
            case "doll":
                who.FirstName = RandomString(EvilFemaleFirstNames);
                break;
        }
        who.LastName = RandomString(EvilLastNames);
    }

    // Encounter function
    function EncounterStart() {
        var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(0, 100), RandomInt(0, 100), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
            RandomInt(2, 5), RandomInt(6, 9), 0, 0, 70, 70, 70, 70, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(15, 20), RandomInt(5, 15), 'Chocolate', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterPath1() {
        var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(0, 120), RandomInt(0, 120), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6),
            RandomInt(3, 6), RandomInt(7, 10), 0, 0, 80, 80, 80, 80, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(20, 25), RandomInt(8, 18), 'Chocolate', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterPath2() {
        var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(0, 130), RandomInt(0, 130), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7),
            RandomInt(4, 7), RandomInt(8, 12), 0, 0, 100, 100, 100, 100, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(23, 30), RandomInt(12, 25), 'green', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterBandit() {
        var OP = new enemy("Bandit", RandomString(RacesBandit), RandomInt(50, 200), RandomInt(0, 100), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15),
            RandomInt(8, 15), RandomInt(10, 15), 0, 0, 170, 170, 170, 170, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(30, 45), RandomInt(30, 55), 'tomato ', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterBanditLord() {
        var OP = new enemy("Banditlord", RandomString(RacesBandit), RandomInt(50, 500), RandomInt(0, 0), RandomInt(20, 35), RandomInt(10, 15), RandomInt(20, 35), RandomInt(20, 35),
            RandomInt(20, 35), RandomInt(40, 60), 0, 0, 350, 350, 300, 300, startarea.width / 2 - grid, grid,
            RandomInt(55, 85), RandomInt(75, 150), 'tomato', 1.5 * grid, RandomInt(70, 90), RandomInt(160, 200), RandomInt(20, 40), RandomInt(30, 50));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterForest() {
        var OP = new enemy("Forest", RandomString(RacesForest), RandomInt(0, 100), RandomInt(50, 300), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
            RandomInt(6, 13), RandomInt(8, 18), 0, 0, 150, 150, 150, 150, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(25, 40), RandomInt(25, 45), 'darkgreen', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterForest2() {
        var OP = new enemy("Forest", RandomString(RacesForest2), RandomInt(0, 100), RandomInt(50, 300), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
            RandomInt(6, 13), RandomInt(8, 18), 0, 0, 150, 150, 150, 150, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(25, 40), RandomInt(25, 45), 'darkgreen', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterPathToWitch2() {
        var OP = new enemy("Witch", RandomString(RacesWitch), RandomInt(0, 300), RandomInt(0, 300), RandomInt(1, 5), RandomInt(3, 7), RandomInt(7, 16), RandomInt(10, 40),
            RandomInt(30, 70), RandomInt(20, 80), 0, 0, 150, 150, 300, 300, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(30, 60), RandomInt(30, 70), 'IndianRed', grid, RandomInt(50, 60), RandomInt(140, 170), RandomInt(5, 15), RandomInt(25, 40))
        EssenceCheck(OP);

        switch (CheckGender(OP)) {
            case "male":
            case "doll":
                OP.Name = "Wizard"
                break;
            default:
                OP.Name = "Witch"
                break;
        }
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        NameGiver(OP);
        return OP;
    }

    function EncounterCave1() {
        var OP = new enemy("Lesser", RandomString(RacesCave), RandomInt(50, 150), RandomInt(0, 150), RandomInt(7, 10), RandomInt(7, 10), RandomInt(7, 10), RandomInt(0, 2),
            RandomInt(1, 3), RandomInt(6, 15), 0, 0, 120, 120, 150, 150, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(25, 35), RandomInt(15, 30), 'red', grid, RandomInt(40, 60), RandomInt(120, 140), RandomInt(10, 25), RandomInt(15, 35));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        EvilNameGiver(OP);
        return OP;
    }

    function EncounterCave2() {
        var OP = new enemy("Cave", RandomString(RacesCave2), RandomInt(50, 250), RandomInt(0, 150), RandomInt(12, 18), RandomInt(12, 18), RandomInt(12, 18), RandomInt(8, 12),
            RandomInt(5, 8), RandomInt(16, 25), 0, 0, 190, 190, 210, 210, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(40, 60), RandomInt(35, 60), 'red', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(15, 35), RandomInt(15, 35));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        EvilNameGiver(OP);
        return OP;
    }

    function EncounterCave3() {
        var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(200, 700), RandomInt(50, 350), RandomInt(25, 40), RandomInt(25, 40), RandomInt(22, 38), RandomInt(18, 22),
            RandomInt(15, 18), RandomInt(50, 70), 0, 0, 370, 370, 400, 400, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
            RandomInt(65, 85), RandomInt(55, 80), 'red', grid, RandomInt(50, 80), RandomInt(160, 190), RandomInt(25, 35), RandomInt(15, 35));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt(1, 5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1, 5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        EvilNameGiver(OP);
        return OP;
    }

    var enemies = [];

    // Battle attack buttons
    document.getElementById("Hit").addEventListener("click", function () {
        var PAttack = (RandomInt(1, 5) * player.Str) / 2;
        enemies[EnemyIndex].Health -= PAttack;
        document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " dmg.";
        UpdateStats();
        return;
    });
    document.getElementById("Tease").addEventListener("click", function () {
        var PAttack = (RandomInt(1, 5) * player.Charm) / 2;
        enemies[EnemyIndex].WillHealth -= PAttack;
        document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " will dmg."
        UpdateStats();
        return;
    });


    function DropSystem(who) {
        var e = who;
        switch (e.Name) {
            case "Banditlord":
                var OrcCum = {
                    Name: "Orc cum",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Masc+50",
                    Title: "Quite nasty but it will give you extra masculinity."
                }
                player.Inventory.push(OrcCum);
                break;
            default:
                break;
        }
        switch (e.Race) {
            case "Fairy":
                var FairyDust = {
                    Name: "Fairy dust",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Size minus 5cm",
                    Title: "Sparkly, commonly used as prank item to shrink people."
                }
                player.Inventory.push(FairyDust);
            default:
                break;
        }
    }

    // Function to call when battle is won
    var SexAttack;
    var ESexAttack;

    function WinBattle() {
        FirstRound = true;
        Winner = true;
        player.Exp += enemies[EnemyIndex].Exp;
        player.Gold += enemies[EnemyIndex].Gold;
        enemies[EnemyIndex].SessionOrgasm = 0;
        document.getElementById("Encounter").style.display = 'none';
        for (var i = 0; i < player.Quests.length; i++) {
            if (player.Quests[i].Name == "ElfHunt" && !player.Quests[i].Completed) {
                if (enemies[EnemyIndex].Race == "Elf") {
                    player.Quests[i].Count++;
                    if (player.Quests[i].Count >= 3) {
                        player.Quests[i].Completed = true;
                    }
                }
            }
            if (player.Quests[i].Name == "BanditLord" && !player.Quests[i].Completed) {
                if (enemies[EnemyIndex].Name == "Banditlord") {
                    player.Quests[i].Completed = true;
                }
            }
        }
        DropSystem(enemies[EnemyIndex]);
        if (Settings.Skip) {
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("status").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
        } else {
            document.getElementById("SexText").innerHTML = HeightSystem(player, enemies[EnemyIndex]);
            document.getElementById("AfterBattle").style.display = 'grid';
            document.getElementById("SexButtons").style.display = 'grid';
            if (Settings.ImgPack) {
                document.getElementById("AfterBattle").classList.remove("AfterBattle");
                document.getElementById("AfterBattle").classList.add("AfterBattleImg");
                document.getElementById("MyImg").style.display = 'block';

            } else {
                document.getElementById("AfterBattle").classList.add("AfterBattle");
                document.getElementById("AfterBattle").classList.remove("AfterBattleImg");
                document.getElementById("MyImg").style.display = 'none';
            }
            CheckArousal();
            AfterBattleButtons();
        }
    }

    var PRL;
    var RL;
    var LastPressed;
    // Mouth
    document.getElementById("GiveBlowjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GiveBlowjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 2
        player.Arousal += ESexAttack / 3;
        if (LastPressed == "GiveBlowjob") {
            document.getElementById("SexText").innerHTML = "You suck your opponents " + enemies[EnemyIndex].Dicks[RL].Type + " " + enemies[EnemyIndex].Dicks[RL].Size + "cm dick.";
        } else {
            RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "You go down on your knees you and suck your opponents " + enemies[EnemyIndex].Dicks[RL].Type + " " + enemies[EnemyIndex].Dicks[RL].Size + "cm dick.";
        }
        CheckArousal();
        LastPressed = "GiveBlowjob";
        console.log(a);
        return;
    });
    document.getElementById("GiveCunniglus").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GiveCunniglus", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 2;
        player.Arousal += ESexAttack / 3;
        if (LastPressed == "GiveCunniglus") {
            document.getElementById("SexText").innerHTML = "You eat their " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
        } else {
            document.getElementById("SexText").innerHTML = "You go between the opponent legs and eat their " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
        }
        CheckArousal();
        LastPressed = "GiveCunniglus";
        return;
    });
    document.getElementById("GiveRimjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GiveRimjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 2;
        player.Arousal += ESexAttack / 3;
        if (LastPressed == "GiveRimjob") {
            document.getElementById("SexText").innerHTML = "You eat ass.";
        } else {
            document.getElementById("SexText").innerHTML = "You eat ass.";
        }
        CheckArousal();
        LastPressed = "GiveRimjob";
        return;
    });
    // Vagina
    document.getElementById("Scissoring").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "Scissoring", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "Scissoring") {
            document.getElementById("SexText").innerHTML = "You grind your pussy against theirs " + enemies[EnemyIndex].Pussies[0].Type + "   pussy.";
        } else {
            document.getElementById("SexText").innerHTML = "You straddle the  opponent and grind your pussy against their " + enemies[EnemyIndex].Pussies[0].Type + "   pussy.";
        }
        CheckArousal();
        LastPressed = "Scissoring";
        return;
    });
    document.getElementById("GetCunniglus").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GetCunniglus", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 3;
        player.Arousal += ESexAttack / 2;
        if (LastPressed == "GetCunniglus") {
            document.getElementById("SexText").innerHTML = "Holding their head agianst your " + player.Pussies[0].Type + " pussy they " +
                "eat you out with thier " + enemies[EnemyIndex].Race + " tounge.";
        } else {
            document.getElementById("SexText").innerHTML = "You command your  opponent to get down on their knees, then you grab their head using it to grind your " + player.Pussies[0].Type + " pussy agianst until they " +
                "understands what you want and start eating you what with thier " + enemies[EnemyIndex].Race + " tounge.";
        }
        CheckArousal();
        LastPressed = "GetCunniglus";
        return;
    });
    document.getElementById("RideCowgirl").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "RideCowgirl", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "RideCowgirl") {
            document.getElementById("SexText").innerHTML = "You ride their " + enemies[EnemyIndex].Dicks[RL].Size + "cm " + enemies[EnemyIndex].Dicks[RL].Type + " dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        } else {
            RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
            PRL = RandomInt(0, player.Pussies.length - 1);

            document.getElementById("SexText").innerHTML = "Laying your  opponent down on thier back, you position yourself ontop of them and ride their " + enemies[EnemyIndex].Dicks[RL].Size + "cm " + enemies[EnemyIndex].Dicks[RL].Type + " dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        }
        if (player.Pussies[PRL].Virgin) {
            player.Pussies[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You have lost your virginity!"
        }
        CheckArousal();
        LastPressed = "RideCowgirl";
        return;
    });
    // Dick
    document.getElementById("Missionary").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "Missionary", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "Missionary") {
            document.getElementById("SexText").innerHTML = "You continue fucking their " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "Positioning your  opponent on thier back you fuck their " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.<br> Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        }
        if (player.Dicks[PRL].Virgin) {
            player.Dicks[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
        }

        CheckArousal();
        LastPressed = "Missionary";
        return;
    });
    document.getElementById("DoggyStyle").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "DoggyStyle", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "DoggyStyle") {
            document.getElementById("SexText").innerHTML = "You continue fucking them from behind.<br>Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "Commanding the defeated to get down on their all fours you fuck them from behind.<br> Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
        }
        if (player.Dicks[PRL].Virgin) {
            player.Dicks[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
        }

        CheckArousal();
        LastPressed = "DoggyStyle";
        return;
    });
    document.getElementById("GetBlowjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GetBlowjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 3;
        player.Arousal += ESexAttack / 2;
        if (LastPressed == "GetBlowjob") {
            document.getElementById("SexText").innerHTML = "You hold their head guiding them sucking your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        } else {
            document.getElementById("SexText").innerHTML = "Commanding your  opponent on their knees you grab their head guiding them sucking your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        }
        CheckArousal();
        LastPressed = "GetBlowjob";
        return;
    });
    // Anal
    document.getElementById("DoggyStyleAnal").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "DoggyStyleAnal", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "DoggyStyleAnal") {
            document.getElementById("SexText").innerHTML = "You hold their head down and fuck their ass with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "You order you opponent down on their kees and position yourself behind them you push their head down and fuck their ass with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
        }
        if (player.Dicks[PRL].Virgin) {
            player.Dicks[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
        }

        CheckArousal();
        LastPressed = "DoggyStyleAnal";
        return;
    });
    document.getElementById("GetRimjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GetRimjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 3;
        player.Arousal += ESexAttack / 2;
        if (LastPressed == "GetRimjob") {
            document.getElementById("SexText").innerHTML = "Your opponent eat your ass.";
        } else {
            document.getElementById("SexText").innerHTML = "You command your opponent to eat your ass.";
        }
        CheckArousal();
        LastPressed = "GetRimjob";
        return;
    });

    document.getElementById("StopSexButton").addEventListener("click", function () {
        battle = false;
        player.Orgasm = 0;
        document.getElementById("AfterBattle").style.display = 'none';
        document.getElementById("PlayerMouth").style.display = 'block';
        document.getElementById("PlayerVagina").style.display = 'block';
        document.getElementById("PlayerDick").style.display = 'block';
        document.getElementById("Anal").style.display = 'block';
        document.getElementById("EnemyVagina").style.display = 'block';
        document.getElementById("EnemyDick").style.display = 'block';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("DrainMenu").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
        LastPressed = " ";
        return;
    });
    document.getElementById("Capture").addEventListener("click", function () {
        House.Dormmates.push(enemies[EnemyIndex]);
        enemies.splice(EnemyIndex, 1);
        battle = false;
        player.Orgasm = 0;
        document.getElementById("AfterBattle").style.display = 'none';
        document.getElementById("PlayerMouth").style.display = 'block';
        document.getElementById("PlayerVagina").style.display = 'block';
        document.getElementById("PlayerDick").style.display = 'block';
        document.getElementById("Anal").style.display = 'block';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("DrainMenu").style.display = 'block';
        return;
    });

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
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size) {
                return "feels big in";
            } else if (pipe.Dicks[0].Size == hole.Pussies[0].Size) {
                return "feels like a perfect fit to";
            } else {
                return "feels small in";
            }
        }
    }

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
        myimg.src = "../imgPack/" + source + ".jpg";
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

    function AfterBattleButtons() {
        if (enemies[EnemyIndex].Orgasm > 4 && House.Dormmates.length < (House.Dorm * 3)) {
            document.getElementById("CaptureOpponent").style.display = "block"
        } else {
            document.getElementById("CaptureOpponent").style.display = "none"
        }

        switch (CheckGender(enemies[EnemyIndex])) {
            case "female":
                document.getElementById("GiveCunniglus").style.display = 'block';
                document.getElementById("GiveBlowjob").style.display = 'none';
                if (player.Dicks.length > 0) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'block';
                    document.getElementById("DoggyStyle").style.display = 'block';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                } else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }

                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'block';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'none';
                } else {
                    document.getElementById("PlayerVagina").style.display = 'none';
                }
                break;
            case "hermaphrodite":
                document.getElementById("GiveCunniglus").style.display = 'block';
                document.getElementById("GiveBlowjob").style.display = 'block';
                if (player.Dicks.length > 0) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'block';
                    document.getElementById("DoggyStyle").style.display = 'block';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                } else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }

                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'block';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'block';
                } else {
                    document.getElementById("PlayerVagina").style.display = 'none';
                }
                break;
            case "male":
            console.log(true)
                document.getElementById("GiveBlowjob").style.display = 'block';
                document.getElementById("GiveCunniglus").style.display = 'none';
                if (player.Dicks.length > 0) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'none';
                    document.getElementById("DoggyStyle").style.display = 'none';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                } else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }

                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'none';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'block';
                } else {
                    document.getElementById("PlayerVagina").style.display = 'none';
                }
                break;
            case "doll":
                document.getElementById("GiveCunniglus").style.display = 'none';
                document.getElementById("GiveBlowjob").style.display = 'none';
                if (player.Dicks.length > 0) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'none';
                    document.getElementById("DoggyStyle").style.display = 'none';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                } else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }
                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'none';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'none';
                } else {
                    document.getElementById("PlayerVagina").style.display = 'none';
                }
        }

        document.getElementById("GetRimjob").style.display = 'block';
        document.getElementById("GiveRimjob").style.display = 'block';

        if (Settings.Vore) {
            if (StomachCapacity() > enemies[EnemyIndex].Weight) {
                document.getElementById("OralVore").style.display = 'block';
            } else {
                document.getElementById("OralVore").style.display = 'none';
            }
            if (VaginaCapacity() > enemies[EnemyIndex].Weight) {
                document.getElementById("Unbirth").style.display = 'block';
            } else {
                document.getElementById("Unbirth").style.display = 'none';
            }
            if (BallsCapacity() > enemies[EnemyIndex].Weight) {
                document.getElementById("CockVore").style.display = 'block';
            } else {
                document.getElementById("CockVore").style.display = 'none';
            }
            if (BreastCapacity() > enemies[EnemyIndex].Weight) {
                document.getElementById("BreastVore").style.display = 'block';
            } else {
                document.getElementById("BreastVore").style.display = 'none'
            }
            if (AnalCapacity() > enemies[EnemyIndex].Weight) {
                document.getElementById("AnalVore").style.display = 'block';
            } else {
                document.getElementById("AnalVore").style.display = 'none';
            }
        } else {
            document.getElementById("OralVore").style.display = 'none';
            document.getElementById("Unbirth").style.display = 'none';
            document.getElementById("CockVore").style.display = 'none';
            document.getElementById("BreastVore").style.display = 'none'
            document.getElementById("AnalVore").style.display = 'none';
        }


    }

    function CheckArousal() {
        var ee = enemies[EnemyIndex];
        if (ee.Arousal >= 100) {
            ee.Orgasm++;
            ee.SessionOrgasm++;
            ee.Arousal = 0;
            if (LastPressed == "RideCowgirl" && !player.Pregnant.Status) {
                Impregnate(player, ee, "B", "");
            }
        }
        if (player.Arousal > 100) {
            player.Orgasm++;
            player.Arousal = 0;
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

            if (LastPressed == ("DoggyStyle" || "DoggyStyleAnal" || "Missionary")) {

                if (!ee.hasOwnProperty("Pregnant")) {
                    ee.Pregnant = {}
                    ee.Pregnant.Status = false;
                } else if (!ee.Pregnant.Status) {
                    for (var b = 0; b < player.Balls.length; b++) {
                        if (player.Balls[b].Cum > 50) {
                            Impregnate(ee, player, "A", "");
                            player.Balls[b].Cum -= 50;
                        }
                    }
                }
            }
            if (LastPressed == ("DoggyStyle" || "Missionary")) {
                document.getElementById("SexText").innerHTML = "Feeling that you are close you push yourself as deep as you can in their sweet pussy."
                if (player.Balls.length > 0) {
                    var Cum = 0;
                    for (var b = 0; b < player.Balls.length; b++) {
                        Cum += player.Balls[b].Cum / 10;
                        player.Balls[b].Cum -= player.Balls[b].Cum / 10;
                    }
                    Cum = Math.round((Cum / 1000) * 100) / 100;
                    document.getElementById("SexText").innerHTML += "<br>You release " + Cum + "L of cum into their pussy.";
                }
            }
            AfterBattleButtons();
            CheckArousal();
        }

        document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + PussyLook(player) + DickLook(player);
        if (player.Pregnant.Babies.length > 0) {
            var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
            if (age < 1) {
                age = "Impregnated";
            } else {
                age = age + " months pregnant";
            }
            document.getElementById("PlayerLooks").innerHTML += "<br>" + age;
        }
        document.getElementById("EnemyLooks").innerHTML = BoobLook(ee) + PussyLook(ee) + DickLook(ee);
        if (ee.hasOwnProperty("Pregnant")) {
            if (ee.Pregnant.Status) {
                document.getElementById("EnemyLooks").innerHTML += "<br>Pregnant";
            }
        }


        var PlayerMaxOrgasm = Math.round(player.End / 8);
        SexAttack = Math.round((RandomInt(4, 7) * player.SexSkill) / 2);
        ESexAttack = Math.round((RandomInt(4, 7) * enemies[EnemyIndex].SexSkill) / 2);
        document.getElementById("PName").innerHTML = player.Name + " " + player.Lastname + "<br>" + player.Race + " " + Pronun(CheckGender(player));
        document.getElementById("EName").innerHTML = " " + ee.FirstName + " " + ee.LastName + "<br>" + ee.Name + " " + ee.Race + " " + Pronun(CheckGender(ee));
        document.getElementById("Mascu").innerHTML = Math.round(player.Masc);
        document.getElementById("Femin").innerHTML = Math.round(player.Femi);
        document.getElementById("PArousal").innerHTML = Math.round(player.Arousal);
        document.getElementById("EMascu").innerHTML = ee.Masc;
        document.getElementById("EFemin").innerHTML = ee.Femi;
        document.getElementById("EArousal").innerHTML = Math.round(ee.Arousal);
        var DelatMed = 2;
        if (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) {
            DelatMed = 100 / player.Masc;
        } else if (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) {
            DelatMed = 100 / player.Femi;
        } else if (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) {
            DelatMed = 100 / ee.Masc;
        } else {
            DelatMed = 100 / ee.Femi;
        }

        document.getElementById("Mascu").style.width = player.Masc * DelatMed + "%";
        document.getElementById("Femin").style.width = player.Femi * DelatMed + "%";
        document.getElementById("PArousal").style.width = Math.max(1, player.Arousal) + "%";
        document.getElementById("EMascu").style.width = ee.Masc * DelatMed + "%";
        document.getElementById("EFemin").style.width = ee.Femi * DelatMed + "%";
        document.getElementById("EArousal").style.width = Math.max(1, ee.Arousal) + "%";


        document.getElementById("SexStats").innerHTML = " ";
        if (ee.Orgasm > 0) {
            document.getElementById("EnemyOrgasm").style.display = 'block';
            document.getElementById("EnemyOrgasm").innerHTML = "Enemy have orgasmed: " + ee.Orgasm + " times";
        } else {
            document.getElementById("EnemyOrgasm").style.display = 'none';
        }
        if (player.Orgasm > 0) {
            document.getElementById("PlayerOrgasm").style.display = 'block';
            document.getElementById("PlayerOrgasm").innerHTML = "You have orgasmed: " + player.Orgasm + " times"
        } else {
            document.getElementById("PlayerOrgasm").style.display = 'none';
        }

        if (enemies[EnemyIndex].SessionOrgasm > 0) {
            document.getElementById("DrainMenu").style.display = 'block';
        } else {
            document.getElementById("DrainMenu").style.display = 'none';
        }
        SexColor(player, "Player");
        SexColor(ee, "Enemy");
        if (PlayerMaxOrgasm <= player.Orgasm) {
            document.getElementById("EnemyVagina").style.display = 'none';
            document.getElementById("EnemyDick").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            return;
        }
    }

    function SexColor(who, where) {
        switch (CheckGender(who)) {
            case "female":
                document.getElementById(where + "Sex").style.backgroundColor = "rgba(255, 192, 203, 0.7)";
                document.getElementById(where + "Sex").style.border = "1px solid rgba(255, 192, 203)";
                break;
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

    function DrainChangesEnemy(eold, ecurrent) {
        var b = " ";
        switch (CheckGender(eold)) {
            case "male":
                if (ecurrent.Dicks.length > 0) {
                    if (eold.Dicks[0].Size > ecurrent.Dicks[0].Size) {
                        b = "You see their dick shrinking."
                    }
                } else {
                    b = "You see their dick shrinking completely into their body, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
                }
                break;
            case "female":
                if (ecurrent.Pussies.length > 0) {
                    if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size && eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking and feel their pussy tightening."
                    } else if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size) {
                        b = "You feel their pussy tightening."
                    } else if (eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking."
                    }
                } else {
                    b = "You see their pussy closing completely and disappear, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
                }
                break;
            case "hermaphrodite":
                if (ecurrent.Dicks.length > 0) {
                    if (eold.Dicks[0].Size > ecurrent.Dicks[0].Size) {
                        b = "You see their dick shrinking."
                    }
                } else {
                    b = "You see their dick shrinking completely into their body, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
                }
                if (ecurrent.Pussies.length > 0) {
                    if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size && eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking and feel their pussy tightening."
                    } else if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size) {
                        b = "You feel their pussy tightening."
                    } else if (eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking."
                    }
                } else {
                    b = "You see their pussy closing completely and disappear, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
                }
                break;
            default:
                b = " "
        }
        return b;
    }

    function DrainChanges(old, current, eold, ecurrent) {
        var a = " ";
        var b = " ";

        switch (CheckGender(old)) {
            case "male":
                if (old.Dicks[0].Size < current.Dicks[0].Size) {
                    a = "You feel your dick growing.";
                }
                if (old.Boobies[0].Size < current.Boobies[0].Size) {
                    a = "You feel your breast grow bigger.";
                }
                if (current.Pussies.length > 0) {
                    a = "You gave grown a pussy!"
                }
                b = DrainChangesEnemy(eold, ecurrent);
                break;
            case "female":
                if (old.Pussies[0].Size < current.Pussies[0].Size && old.Boobies[0].Size < current.Boobies[0].Size) {
                    a = "You feel both your breast growing bigger and your pussy growing.";
                } else if (old.Pussies[0].Size < current.Pussies[0].Size) {
                    a = "You feel your pussy grow.";
                } else if (old.Boobies[0].Size < current.Boobies[0].Size) {
                    a = "You feel your breast grow bigger.";
                }
                if (current.Dicks.length > 0) {
                    a = "You have grown a dick!";
                }
                b = DrainChangesEnemy(eold, ecurrent);
                break;
            case "hermaphrodite":
                if (old.Dicks[0].Size < current.Dicks[0].Size) {
                    a = "You feel your dick growing.";
                }
                if (old.Pussies[0].Size < current.Pussies[0].Size && old.Boobies[0].Size < current.Boobies[0].Size) {
                    a = "You feel your both breast growing bigger and your pussy growing.";
                } else if (old.Pussies[0].Size < current.Pussies[0].Size) {
                    a = "You feel your pussy grow.";
                } else if (old.Boobies[0].Size < current.Boobies[0].Size) {
                    a = "You feel your breast grow bigger.";
                }
                b = DrainChangesEnemy(eold, ecurrent);
                break;
            case "doll":
                if (current.Dicks.length > 0) {
                    a = "You have grown a dick!";
                }
                if (current.Pussies.length > 0) {
                    a = "You gave grown a pussy!"
                }
                if (old.Boobies[0].Size < current.Boobies[0].Size) {
                    a = "You feel your breast grow bigger.";
                }
                b = DrainChangesEnemy(eold, ecurrent);
                break;

        }
        if (CheckGender(old) != CheckGender(current)) {
            b += "<br>You have become a " + Pronun(CheckGender(current)) + "!";
        }
        return "<br>" + a + "<br>" + b;
    }

    document.getElementById("DrainM").addEventListener("click", function () {
        var old = JSON.parse(JSON.stringify(player));
        var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
        if (player.EssenceDrain >= enemies[EnemyIndex].Masc && enemies[EnemyIndex].Masc > 0) {
            enemies[EnemyIndex].SessionOrgasm--;
            player.Masc += enemies[EnemyIndex].Masc;
            enemies[EnemyIndex].Masc = 0;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You siphon the last essence of masculinity from them leaving them with no signs of masculinity left." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        } else if (player.EssenceDrain < enemies[EnemyIndex].Masc) {
            enemies[EnemyIndex].SessionOrgasm--;
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
            player.Femi += enemies[EnemyIndex].Femi;
            enemies[EnemyIndex].Femi = 0;
            EssenceCheck(enemies[EnemyIndex]);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            document.getElementById("SexText").innerHTML = "You siphon the last essence of femininity from them leaving them with no signs of femininity left. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        } else if (player.EssenceDrain < enemies[EnemyIndex].Femi) {
            enemies[EnemyIndex].SessionOrgasm--;
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

    // Start Vore
    document.getElementById("Vore").addEventListener("click", function () {
        Settings.Vore = !Settings.Vore;
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
        if (!Settings.Vore) {
            document.getElementById("VoreLooks").style.display = 'none';

        }
        if (!player.hasOwnProperty("Vore")) {
            player.Vore = {
                Level: 0,
                Exp: 0,
                VorePoints: 0,
                VorePerks: {},
                Stomach: [],
                StomachExp: 0,
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
                MilkTF: true
            }
        }
    });

    document.getElementById("OralVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < StomachCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "OralVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeigth = enemies[EnemyIndex].Weight;
            player.Vore.Stomach.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them down your throat.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your stomach.";
        }
        return;
    });
    document.getElementById("Unbirth").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < VaginaCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "Unbirth", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeigth = enemies[EnemyIndex].Weight;
            player.Vore.Vagina.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove into your pussy.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your vagina.";
        }
        return;
    });
    document.getElementById("CockVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < BallsCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "CockVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeigth = enemies[EnemyIndex].Weight;
            player.Vore.Balls.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them down into your cockslit, you watching the bulge travel down your shaft.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your balls.";
        }
        return;
    });
    document.getElementById("BreastVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < BreastCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "BreastVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeigth = enemies[EnemyIndex].Weight;
            player.Vore.Breast.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them into your nipple.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your breasts.";
        }
        return;
    });
    document.getElementById("AnalVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < AnalCapacity() + 100) {
            if (Settings.ImgPack) {
                ImgChose(player, "AnalVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeigth = enemies[EnemyIndex].Weight;
            player.Vore.Anal.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them into your bowels.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your bowels.";
        }
        return;
    });

    function HideVore() {
        document.getElementById("OralVore").style.display = 'none';
        document.getElementById("Unbirth").style.display = 'none';
        document.getElementById("CockVore").style.display = 'none';
        document.getElementById("AnalVore").style.display = 'none';
        document.getElementById("BreastVore").style.display = 'none';
    }

    function PreyButton(ps, from, index) {
        var color;
        switch (CheckGender(ps)) {
            case "female":
                color = "Pink";
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
        return "<button type=\"button\" class=\"" + color + "\" onclick=\"Show" + from + "Prey(" + index + ")\">" + ps.Name + " " + ps.Race +
            " <br> " + Pronun(CheckGender(ps)) + "<br><br>Height:" + Math.round(ps.Height) + "<br>Weight:" +
            Math.round(ps.Weight) + "</button>";
    }

    function ShowAnalPrey(e) {
        var Prey = player.Vore.Anal[e];
        PreyIndex = e;
        document.getElementById("AnalContent").style.display = 'none';
        document.getElementById("AnalPrey").style.display = 'block';
        document.getElementById("AnalLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveAnalPrey").style.display = 'inline-block';
        document.getElementById("regurgitateAnal").style.display = 'inline-block';
        document.getElementById("AnalPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveAnalPrey").addEventListener("click", function () {
        document.getElementById("AnalContent").style.display = 'grid';
        document.getElementById("AnalPrey").style.display = 'none';
        document.getElementById("AnalLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveAnalPrey").style.display = 'none';
        document.getElementById("regurgitateAnal").style.display = 'none';
    });
    document.getElementById("regurgitateAnal").addEventListener("click", function () {
        var who = player.Vore.Anal[PreyIndex];
        enemies.push(who);
        player.Vore.Anal.splice(PreyIndex, 1);
        document.getElementById("AnalContent").style.display = 'grid';
        document.getElementById("AnalPrey").style.display = 'none';
        document.getElementById("AnalLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveAnalPrey").style.display = 'none';
        document.getElementById("regurgitateAnal").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            var ps = player.Vore.Anal[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Anal", e);
        }
        document.getElementById("AnalContent").innerHTML = food;
    });

    function ShowBallsPrey(e) {
        var Prey = player.Vore.Balls[e];
        PreyIndex = e;
        document.getElementById("BallsContent").style.display = 'none';
        document.getElementById("BallsPrey").style.display = 'block';
        document.getElementById("BallsLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveBallsPrey").style.display = 'inline-block';
        document.getElementById("regurgitateBalls").style.display = 'inline-block';
        document.getElementById("BallsPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveBallsPrey").addEventListener("click", function () {
        document.getElementById("BallsContent").style.display = 'grid';
        document.getElementById("BallsPrey").style.display = 'none';
        document.getElementById("BallsLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBallsPrey").style.display = 'none';
        document.getElementById("regurgitateBalls").style.display = 'none';
    });
    document.getElementById("regurgitateBalls").addEventListener("click", function () {
        var who = player.Vore.Balls[PreyIndex];
        enemies.push(who);
        player.Vore.Balls.splice(PreyIndex, 1);
        document.getElementById("BallsContent").style.display = 'grid';
        document.getElementById("BallsPrey").style.display = 'none';
        document.getElementById("BallsLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBallsPrey").style.display = 'none';
        document.getElementById("regurgitateBalls").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            var ps = player.Vore.Balls[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Balls", e);
        }
        document.getElementById("BallsContent").innerHTML = food;
    });

    function ShowVaginaPrey(e) {
        var Prey = player.Vore.Vagina[e];
        PreyIndex = e;
        document.getElementById("VaginaContent").style.display = 'none';
        document.getElementById("VaginaPrey").style.display = 'block';
        document.getElementById("VaginaLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveVaginaPrey").style.display = 'inline-block';
        document.getElementById("regurgitateVagina").style.display = 'inline-block';
        document.getElementById("VaginaPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveVaginaPrey").addEventListener("click", function () {
        document.getElementById("VaginaContent").style.display = 'grid';
        document.getElementById("VaginaPrey").style.display = 'none';
        document.getElementById("VaginaLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveVaginaPrey").style.display = 'none';
        document.getElementById("regurgitateVagina").style.display = 'none';
    });
    document.getElementById("regurgitateVagina").addEventListener("click", function () {
        var who = player.Vore.Vagina[PreyIndex];
        enemies.push(who);
        player.Vore.Vagina.splice(PreyIndex, 1);
        document.getElementById("VaginaContent").style.display = 'grid';
        document.getElementById("VaginaPrey").style.display = 'none';
        document.getElementById("VaginaLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveVaginaPrey").style.display = 'none';
        document.getElementById("regurgitateVagina").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            var ps = player.Vore.Vagina[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Vagina", e);
        }
        document.getElementById("VaginaContent").innerHTML = food;
    });


    function ShowBreastPrey(e) {
        var Prey = player.Vore.Breast[e];
        PreyIndex = e;
        document.getElementById("BreastContent").style.display = 'none';
        document.getElementById("BreastPrey").style.display = 'block';
        document.getElementById("BreastLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveBreastPrey").style.display = 'inline-block';
        document.getElementById("regurgitateBreast").style.display = 'inline-block';
        document.getElementById("BreastPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveBreastPrey").addEventListener("click", function () {
        document.getElementById("BreastContent").style.display = 'grid';
        document.getElementById("BreastPrey").style.display = 'none';
        document.getElementById("BreastLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBreastPrey").style.display = 'none';
        document.getElementById("regurgitateBreast").style.display = 'none';
    });
    document.getElementById("regurgitateBreast").addEventListener("click", function () {
        var who = player.Vore.Breast[PreyIndex];
        enemies.push(who);
        player.Vore.Breast.splice(PreyIndex, 1);
        document.getElementById("BreastContent").style.display = 'grid';
        document.getElementById("BreastPrey").style.display = 'none';
        document.getElementById("BreastLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBreastPrey").style.display = 'none';
        document.getElementById("regurgitateBreast").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            var ps = player.Vore.Breast[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Breast", e);
        }
        document.getElementById("BreastContent").innerHTML = food;
    });


    var PreyIndex;

    function ShowStomachPrey(e) {
        var Prey = player.Vore.Stomach[e];
        PreyIndex = e;
        document.getElementById("StomachContent").style.display = 'none';
        document.getElementById("StomachPrey").style.display = 'block';
        document.getElementById("StomachLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveStomachPrey").style.display = 'inline-block';
        document.getElementById("regurgitateStomach").style.display = 'inline-block';
        document.getElementById("StomachPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };
    document.getElementById("LeaveStomachPrey").addEventListener("click", function () {
        document.getElementById("StomachContent").style.display = 'grid';
        document.getElementById("StomachPrey").style.display = 'none';
        document.getElementById("StomachLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveStomachPrey").style.display = 'none';
        document.getElementById("regurgitateStomach").style.display = 'none'
    });
    document.getElementById("regurgitateStomach").addEventListener("click", function () {
        var who = player.Vore.Stomach[PreyIndex];
        enemies.push(who);
        player.Vore.Stomach.splice(PreyIndex, 1);

        document.getElementById("StomachContent").style.display = 'grid';
        document.getElementById("StomachPrey").style.display = 'none';
        document.getElementById("StomachLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveStomachPrey").style.display = 'none';
        document.getElementById("regurgitateStomach").style.display = 'none'
        var food = "";
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            var ps = player.Vore.Stomach[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Stomach", e);
        }
        document.getElementById("StomachContent").innerHTML = food;
    });


    document.getElementById("VoreLooks").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("ShowVore").style.display = 'block';
        document.getElementById("VorePerkMenu").style.display = 'none';
    });
    document.getElementById("ShowStomach").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreStomach").style.display = 'block';
        document.getElementById("LeaveStomachPrey").style.display = 'none';
        document.getElementById("regurgitateStomach").style.display = 'none';
        document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
        var food = "";
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            var ps = player.Vore.Stomach[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Stomach", e);
        }
        document.getElementById("StomachContent").innerHTML = food;

    });
    document.getElementById("StomachDigestion").addEventListener("click", function () {
        Settings.VoreSettings.StomachDigestion = !Settings.VoreSettings.StomachDigestion
        document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
    });
    document.getElementById("ShowVagina").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreVagina").style.display = 'block';
        document.getElementById("LeaveVaginaPrey").style.display = 'none';
        document.getElementById("regurgitateVagina").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            var ps = player.Vore.Vagina[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Vagina", e);
        }
        document.getElementById("VaginaContent").innerHTML = food;
        document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
        document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
    });
    document.getElementById("ChildTF").addEventListener("click", function () {
        if (Settings.VoreSettings.ChildTF) {
            Settings.VoreSettings.ChildTF = false;
        } else {
            Settings.VoreSettings.ChildTF = true;
            Settings.VoreSettings.VCumDigestion = false;
        }
        document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
        document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
    });
    document.getElementById("VCumDigestion").addEventListener("click", function () {
        if (Settings.VoreSettings.VCumDigestion) {
            Settings.VoreSettings.VCumDigestion = false;
        } else {
            Settings.VoreSettings.ChildTF = false;
            Settings.VoreSettings.VCumDigestion = true;
        }
        document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
        document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
    })

    document.getElementById("ShowBreast").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreBreast").style.display = 'block';
        document.getElementById("LeaveBreastPrey").style.display = 'none';
        document.getElementById("regurgitateBreast").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            var ps = player.Vore.Breast[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Breast", e);
        }
        document.getElementById("BreastContent").innerHTML = food;
        document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
    });
    document.getElementById("MilkTransformation").addEventListener("click", function () {
        Settings.VoreSettings.MilkTF = !Settings.VoreSettings.MilkTF;
        document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
    });
    document.getElementById("ShowBalls").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'block';
        document.getElementById("LeaveBallsPrey").style.display = 'none';
        document.getElementById("regurgitateBalls").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            var ps = player.Vore.Balls[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Balls", e);
        }
        document.getElementById("BallsContent").innerHTML = food;
        document.getElementById("CumDigestion").innerHTML = "Cum transformation " + Settings.VoreSettings.CumTF;

    });
    document.getElementById("CumDigestion").addEventListener("click", function () {
        Settings.VoreSettings.CumTF = !Settings.VoreSettings.CumTF;
        document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
    });
    document.getElementById("ShowAnal").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'block';
        document.getElementById("LeaveAnalPrey").style.display = 'none';
        document.getElementById("regurgitateAnal").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            var ps = player.Vore.Anal[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Anal", e);
        }
        document.getElementById("AnalContent").innerHTML = food;
        document.getElementById("AnalDigestion").innerHTML = "Anal digestion " + Settings.VoreSettings.AnalDigestion;
    });
    document.getElementById("AnalDigestion").addEventListener("click", function () {
        Settings.VoreSettings.AnalDigestion = !Settings.VoreSettings.AnalDigestion;
        document.getElementById("AnalDigestion").value = "Anal Digestion " + Settings.VoreSettings.AnalDigestion;
    });

    document.getElementById("StomachLeave").addEventListener("click", function () {
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("VaginaLeave").addEventListener("click", function () {
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("BreastLeave").addEventListener("click", function () {
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("BallsLeave").addEventListener("click", function () {
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("AnalLeave").addEventListener("click", function () {
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("VorePerks").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VorePerkMenu").style.display = 'block';
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
            document.getElementById("AbsorbEssence").value = "AbsorbEssence +" + player.Vore.VorePerks.AbsorbEssence.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
            document.getElementById("FasterDigestion").value = "Faster digestion +" + player.Vore.VorePerks.FasterDigestion.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            document.getElementById("HigerCapacity").value = "Higer capacity +" + player.Vore.VorePerks.HigerCapacity.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
            document.getElementById("AbsorbHeight").value = "Absorb height +" + player.Vore.VorePerks.AbsorbHeight.Count;
        }
        return;
    });

    function VorePerkHandler(perket) {
        player.Vore.VorePoints--;
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
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("AbsorbEssence");
        } else {
            return;
        }
    });
    document.getElementById("AbsorbEssence").addEventListener("mouseover", function (e) {
        document.getElementById("VorePerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("FasterDigestion").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("FasterDigestion");
        } else {
            return;
        }
    });
    document.getElementById("FasterDigestion").addEventListener("mouseover", function (e) {
        document.getElementById("VorePerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("HigerCapacity").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("HigerCapacity");
        } else {
            return;
        }
    });
    document.getElementById("HigerCapacity").addEventListener("mouseover", function (e) {
        document.getElementById("VorePerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("AbsorbHeight").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("AbsorbHeight");
        } else {
            return;
        }
    });
    document.getElementById("AbsorbHeight").addEventListener("mouseover", function (e) {
        document.getElementById("VorePerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("LeaveVorePerkMenu").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'grid';
        document.getElementById("VorePerkMenu").style.display = 'none';
    });

    document.getElementById("LeaveVore").addEventListener("click", function () {
        battle = false;
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("VoreButtons").style.display = 'grid';

    });

    function VoreEngine() {
        var VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level - 1);
        if (player.Vore.Exp >= VoreMaxExp) {
            player.Vore.Exp = player.Vore.Exp - VoreMaxExp;
            player.Vore.Level++;
            player.Vore.VorePoints++;
        }
        document.getElementById("VoreLevel").innerHTML = player.Vore.Level;
        document.getElementById("VoreLevel").style.width = 100 * (player.Vore.Exp / VoreMaxExp) + "%";
        document.getElementById("ShowStomach").innerHTML = "Stomach<br>" + Math.round(MaxStomachCapacity() - StomachCapacity()) + "kg prey <br> " + Math.round(MaxStomachCapacity()) + "kg Max";
        document.getElementById("ShowVagina").innerHTML = "Pussy<br>" + Math.round(MaxVaginaCapacity() - VaginaCapacity()) + "kg prey <br> " + Math.round(MaxVaginaCapacity()) + "kg Max";
        document.getElementById("ShowBreast").innerHTML = "Breast<br>" + Math.round(MaxBreastCapacity() - BreastCapacity()) + "kg prey <br> " + Math.round(MaxBreastCapacity()) + "kg Max";
        document.getElementById("ShowBalls").innerHTML = "Balls<br>" + Math.round(MaxBallsCapacity() - BallsCapacity()) + "kg prey <br> " + Math.round(MaxBallsCapacity()) + "kg Max";
        document.getElementById("ShowAnal").innerHTML = "Anal<br>" + Math.round(MaxAnalCapacity() - AnalCapacity()) + "kg prey <br> " + Math.round(MaxAnalCapacity()) + "kg Max";

        if (player.Vore.VorePoints > 0) {
            document.getElementById("VorePerks").style.display = 'inline-block';
        } else {
            document.getElementById("VorePerks").style.display = 'none';
        }

        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                if (player.Vore.Stomach[e].Masc > 0) {
                    player.Vore.Stomach[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
                if (player.Vore.Stomach[e].Femi > 0) {
                    player.Vore.Stomach[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Stomach[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Stomach[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }

            }
            if (Settings.VoreSettings.StomachDigestion) {
                player.Vore.Stomach[e].Weight -= 0.001;
                player.Vore.StomachExp += 0.001;
                player.Vore.Exp += 0.001;
                player.Fat += 0.0005;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Stomach[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.StomachExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Fat += 0.0005 * player.Vore.VorePerks.FasterDigestion.Count;
                }

                if (player.Vore.Stomach[e].Weight < 0) {
                    EventLog("You have digested " + player.Vore.Stomach[e].Name + " " + player.Vore.Stomach[e].Race + " " + player.Vore.Stomach[e].FirstName + " " + player.Vore.Stomach[e].LastName);
                    player.Vore.Stomach.splice(e, 1);
                }
            } else {
                player.Vore.StomachExp += 0.0005;
                player.Vore.Exp += 0.0005;
            }
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                if (player.Vore.Vagina[e].Masc > 0) {
                    player.Vore.Vagina[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
                if (player.Vore.Vagina[e].Femi > 0) {
                    player.Vore.Vagina[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Vagina[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Vagina[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }
            }
            if (Settings.VoreSettings.VCumDigestion) {
                player.Vore.Vagina[e].Weight -= 0.001;
                player.Vore.Vagina[e].VaginaExp += 0.001;
                player.Vore.Exp += 0.001;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Vagina[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Vagina[e].VaginaExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
                if (player.Vore.Vagina[e].Weight < 0) {
                    EventLog("The only trace left of " + player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].Lastname + " is a trail of pussy discharge traveling down your legs.");
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
                        EventLog(player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].Lastname + " have been reduced to infant who now rests in your womb.")
                        player.Vore.Vagina.splice(e, 1);
                    }
                }
            } else {
                player.Vore.VaginaExp += 0.0005;
                player.Vore.Exp += 0.0005;
            }
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                if (player.Vore.Breast[e].Masc > 0) {
                    player.Vore.Breast[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
                if (player.Vore.Breast[e].Femi > 0) {
                    player.Vore.Breast[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Breast[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Breast[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }

            }
            if (Settings.VoreSettings.MilkTF) {
                player.Vore.Breast[e].Weight -= 0.001;
                player.Vore.BreastExp += 0.001;
                player.Vore.Exp += 0.001;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Breast[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Breast[e].BreastExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
                for (var b = 0; b < player.Boobies.length; b++) {
                    if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                        player.Boobies[b].Milk += 0.001;
                        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                            player.Boobies[b].Milk += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                        };
                    }
                }
                if (player.Vore.Breast[e].Weight < 0) {
                    EventLog("There is nothing but milk left of " + player.Vore.Breast[e].Name + " " + player.Vore.Breast[e].Race + " " + player.Vore.Breast[e].FirstName + " " + player.Vore.Breast[e].Lastname);
                    player.Vore.Breast.splice(e, 1);
                }
            } else {
                player.Vore.BreastExp += 0.0005;
                player.Vore.Exp += 0.0005;
            }
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                if (player.Vore.Balls[e].Masc > 0) {
                    player.Vore.Balls[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
                if (player.Vore.Balls[e].Femi > 0) {
                    player.Vore.Balls[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Balls[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Balls[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }

            }
            if (Settings.VoreSettings.CumTF) {
                player.Vore.Balls[e].Weight -= 0.001;
                player.Vore.BallsExp += 0.001;
                player.Vore.Exp += 0.001;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Balls[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Balls[e].BallsExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
                for (var b = 0; b < player.Balls.length; b++) {
                    if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                        player.Balls[b].Cum += 0.1;
                        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                            player.Balls[b].Cum += 0.1 * player.Vore.VorePerks.FasterDigestion.Count;

                        }
                    }
                }
                if (player.Vore.Balls[e].Weight < 0) {
                    EventLog("There is nothing but cum left of the " + player.Vore.Balls[e].Name + " " + player.Vore.Balls[e].Race + " " + player.Vore.Balls[e].FirstName + " " + player.Vore.Balls[e].Lastname);
                    player.Vore.Balls.splice(e, 1);
                }
            } else {
                player.Vore.BallsExp += 0.0005;
                player.Vore.Exp += 0.001;
            }
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                if (player.Vore.Anal[e].Masc > 0) {
                    player.Vore.Anal[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
                if (player.Vore.Anal[e].Femi > 0) {
                    player.Vore.Anal[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                    player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Anal[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Anal[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }
            }
            if (Settings.VoreSettings.AnalDigestion) {
                player.Vore.Anal[e].Weight -= 0.001;
                player.Vore.AnalExp += 0.001;
                player.Vore.Exp += 0.001;
                player.Fat += 0.0005;

                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Anal[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Anal[e].AnalExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
                if (player.Vore.Anal[e].Weight < 0) {
                    player.Vore.Anal.splice(e, 1);
                }
            } else {
                player.Vore.AnalExp += 0.0005;
                player.Vore.Exp += 0.001;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
        }
        return capacity * bonus - sub;
    }

    function MaxStomachCapacity() {
        var capacity = player.Height / 3
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigerCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigerCapacity.Count;
        }
        return capacity * bonus;
    }
    // End vore

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

    function PregnanyEngine() {
        if (player.Children.length > 0) {
            for (var e = 0; e < player.Children.length; e++) {
                player.Children[e].AgeCounter++;
                if (player.Children[e].AgeCounter % 365 == 0) {
                    var age = Math.round(player.Children[e].AgeCounter / 365);
                    EventLog("Your child has grown " + IntToAge(age) + " old.");
                }
            }
        }

        if (player.Pregnant.Babies.length < 1) {
            player.Pregnant.Status = false;
        }
        if (player.Pregnant.Babies.length > 0) {
            for (var e = 0; e < player.Pregnant.Babies.length; e++) {
                player.Pregnant.Babies[e].BabyAge++;
                if (player.Pregnant.Babies[e].BabyAge > 274) {
                    if (player.hasOwnProperty("Children")) {
                        var Child = {
                            AgeCounter: 0,
                            Race: player.Pregnant.Babies[e].BabyRace
                        };
                        player.Children.push(Child);
                        EventLog("You have given birth!")
                        player.Pregnant.Babies.splice(e, 1);
                        if (player.Pregnant.Babies.length > 1) {
                            player.Pregnant.Status = false;
                        }
                    } else {
                        player.Children = [];
                    }
                }
            }
            for (var b = 0; b < player.Boobies.length; b++) {
                if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                    player.Boobies[b].MilkBaseRate = player.Boobies[b].MilkMax / 50000;
                    player.Boobies[b].Milk += player.Boobies[b].MilkBaseRate + player.Boobies[b].MilkRate;
                }
            }
        } else {
            player.Pregnant.Status = false;
        }
        for (var e = 0; e < House.Dormmates.length; e++) {
            if (House.Dormmates[e].hasOwnProperty("Pregnant")) {
                if (House.Dormmates[e].Pregnant.Status) {
                    House.Dormmates[e].Pregnant.Baby++;
                    if (House.Dormmates[e].Pregnant.Baby > 274) {
                        if (Array.isArray(House.Dormmates[e].Children)) {
                            var Child = {
                                AgeCounter: 0,
                                Race: House.Dormmates[e].Race
                            };
                            House.Dormmates[e].Children.push(Child);
                            House.Dormmates[e].Pregnant.Baby = 0;
                            House.Dormmates[e].Pregnant.Status = false;
                            EventLog(House.Dormmates[e].FirstName + " " + House.Dormmates[e].LastName + " have given birth!");
                        } else {
                            House.Dormmates[e].Children = [];
                        }
                    }
                }
            }
            if (Array.isArray(House.Dormmates[e].Children)) {
                if (House.Dormmates[e].Children.length > 0) {
                    for (var b = 0; b < House.Dormmates[e].Children.length; b++) {
                        House.Dormmates[e].Children[b].AgeCounter++;
                        if (House.Dormmates[e].Children[b].AgeCounter % 365 == 0) {
                            var age = Math.round(House.Dormmates[e].Children[b].AgeCounter / 365);
                            EventLog("Your child with " + House.Dormmates[e].FirstName + " " + House.Dormmates[e].LastName + " has grown " + age + " years old.");
                        }
                    }
                }
            } else {
                House.Dormmates[e].Children = [];
            }
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
    };

    function FluidsEngine() {
        if (player.Balls.length > 0) {
            for (var b = 0; b < player.Balls.length; b++) {
                player.Balls[b].CumMax = Math.round(player.Balls[b].Size * 400);
                player.Balls[b].CumBaseRate = player.Balls[b].CumMax / 50000;
                if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                    player.Balls[b].Cum += player.Balls[b].CumRate + player.Balls[b].CumBaseRate;
                }
            }
        }
        if (player.Balls.length > 0) {
            document.getElementById("CumBar").style.display = 'block';
            var TotalCum = 0,
                TotalCumMax = 0;
            for (var e = 0; e < player.Balls.length; e++) {
                TotalCum += player.Balls[e].Cum;
                TotalCumMax += player.Balls[e].CumMax
            }
            var CumProcent = TotalCum / TotalCumMax;
            if (false) {
                EventLog("Your balls are so full that you can barely hold it!")
            }
            document.getElementById("FluidCum").innerHTML = Math.round((Math.round(TotalCum) / 1000) * 10) / 10 + "L";
            document.getElementById("FluidCum").style.width = CumProcent * 100 + "%";

        } else {
            document.getElementById("CumBar").style.display = 'none';
        }
        var TotalMilk = 0,
            TotalMilkMax = 0;
        for (var b = 0; b < player.Boobies.length; b++) {
            if (player.Boobies[b].Milk > 1) {
                TotalMilk += player.Boobies[b].Milk;
                TotalMilkMax += player.Boobies[b].MilkMax;
                document.getElementById("MilkBar").style.display = 'block';
            } else {
                document.getElementById("MilkBar").style.display = 'none';
            }
        }
        var MilkProcent = TotalMilk / TotalMilkMax;
        document.getElementById("FluidMilk").innerHTML = Math.round((Math.round(TotalMilk) / 1000) * 10) / 10 + "L";
        document.getElementById("FluidMilk").style.width = MilkProcent * 100 + "%";

        if (false) {
            EventLog("You breast are so full that they have started leaking.")
        }


    }

    var TF = {
        Status: false,
        Counter: 0,
        To: "human"
    }

    function TfEngine(Tf_to) {
        if (!TF.Status) {
            TF.Status = true;
            TF.To = Tf_to;
            TF.Counter = 0;
        } else {
            TF.Counter++;
            switch (TF.To) {
                case "elf":
                    if (TF.Counter > 1000) {
                        EventLog("You are now a elf!");
                        player.Race = "elf";
                        TF.Status = false;
                        TF.Counter = 0;
                    } else if (TF.Counter == 500) {
                        EventLog("You are have grown pointy ears!");
                    }
                    break;
                case "human":
                    if (TF.Counter > 1000) {
                        EventLog("You are now a human!");
                        player.Race = "human";
                        TF.Status = false;
                        TF.Counter = 0;
                    } else if (TF.Counter == 500) {
                        EventLog("Your body starts to feel familiar.");
                    }
                    break;

            }

        }
    }

    function DateEngine() {
        setInterval(DateTracker, 5000);
    }

    var PlayerDay = 0;

    function DateTracker() {
        if (!battle) {
            Flags.Date.Day++;
            PlayerDay++;
            if (Flags.Date.Day > 30) {
                Flags.Date.Day = 1;
                Flags.Date.Month++;
                if (Flags.Date.Month > 12) {
                    Flags.Date.Month = 1;
                    Flags.Date.Year++;
                    player.Age++;
                }
            }
            document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
            PregnanyEngine();
            HouseEngine();

            // health/will && fat burn
            player.RestRate = 2 + player.Perks.FasterRest.Count * 2;
            if (player.Health < player.MaxHealth && !battle && player.Fat >= player.Height / 100) {
                if ((player.Health + player.RestRate) > player.MaxHealth) {
                    player.Health = player.MaxHealth;
                } else {
                    player.Health += player.RestRate;
                    player.Fat -= player.RestRate / 50;
                }
            } else if (!battle) {
                player.Fat -= 0.2;
            }
            if (player.WillHealth < player.MaxWillHealth && !battle && player.Fat >= player.Height / 100) {
                if ((player.WillHealth + player.RestRate) > player.MaxWillHealth) {
                    player.WillHealth = player.MaxWillHealth;
                } else {
                    player.WillHealth += player.RestRate;
                    player.Fat -= player.RestRate / 50;
                }
            } else if (!battle) {
                player.Fat -= 0.2;
            }
            if (player.Fat <= player.Height / 100 && !battle) {
                player.Health -= 1;
                player.WillHealth -= 1;

            }
        }
    }

    function Impregnate(who, by, mode, where) {
        var Father = RandomInt(1, 4);
        if (Father > 2) {
            Father = by;
        } else {
            Father = who;
        }

        if (mode == "A") {
            var Impregnation = RandomInt(0, 100);
            switch (CheckGender(who)) {
                case "female":
                    if (by.Virility >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        who.Pregnant.BabyRace = Father.Race;
                        who.Pregnant.Father = by.Name + " " + by.Lastname;
                        who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                        Flags.Impregnations++;
                        document.getElementById(where + "SexText").innerHTML = "You have impregnated her!"
                    }
                    break;
                case "hermaphrodite":
                    if (by.Virility >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        who.Pregnant.BabyRace = Father.Race;
                        who.Pregnant.Father = by.Name + " " + by.Lastname;
                        who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                        Flags.Impregnations++;
                        document.getElementById(where + "SexText").innerHTML = "You have impregnated hir!"
                    }
                    break;
                case "male":
                    if (by.Virility - 60 >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        who.Pregnant.BabyRace = Father.Race;
                        who.Pregnant.Father = by.Name + " " + by.Lastname;
                        who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                        Flags.Impregnations++;
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate him!"
                    }
                    break;
                default:
                    if (by.Virility - 60 >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        who.Pregnant.BabyRace = Father.Race;
                        who.Pregnant.Father = by.Name + " " + by.Lastname;
                        who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                        Flags.Impregnations++;
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnated the doll!"
                    }
                    break;
            }
        } else if (mode == "B") {
            var Impregnation = RandomInt(0, (500 - by.Masc));
            var Baby = {
                BabyAge: 0,
                BabyRace: Father.Race,
                Father: by.FirstName + " " + by.LastName,
                Mother: who.Name + " " + who.Lastname
            }
            switch (CheckGender(who)) {
                case "female":
                    if (who.Fertility >= Impregnation) {
                        who.Pregnant.Status = true;
                        player.Pregnant.Babies.push(Baby);
                        Flags.Pregnations++;
                        document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                    }
                    break;
                case "hermaphrodite":
                    if (who.Fertility >= Impregnation) {
                        who.Pregnant.Status = true;
                        player.Pregnant.Babies.push(Baby);
                        Flags.Pregnations++;
                        document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                    }
                    break;
                case "male":
                    if (who.Fertility - 50 >= Impregnation) {
                        who.Pregnant.Status = true;
                        player.Pregnant.Babies.push(Baby);
                        Flags.Pregnations++;
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                    break;
                default:
                    if (who.Fertility - 50 >= Impregnation) {
                        who.Pregnant.Status = true;
                        player.Pregnant.Babies.push(Baby);
                        Flags.Pregnations++;
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                    break;
            }
        }
        console.log(who.Pregnant)
        return;
    }

    function EssenceCheck(who) {
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
            var Boob = {
                Size: 0,
                Type: who.Race
            }
            who.Boobies.push(Boob);
        }
        if (!who.hasOwnProperty("Anal")) {
            who.Anal = []
            var Anal = {
                Size: 0,
                Type: who.Race,
                Virgin: true,
                stretch: 1,
            }
            who.Anal.push(Anal);
        }

        if (who.Masc < 30 && who.Dicks.length > 0) {
            who.Dicks.pop();
        } else if (who.Masc >= 30 && who.Dicks.length == 0) {
            var Dick = {
                Size: Math.max(Math.round(player.Height * 0.03), Math.round(who.Masc / 30)),
                Type: who.Race,
                Virgin: true
            }
            who.Dicks.push(Dick);
        } else if (who.Dicks.length > 0) {
            var dicktotal = 0;
            for (var e = 0; e < who.Dicks.length; e++) {
                who.Dicks[e].Type = who.Race;
                who.Dicks[e].Size = Math.round(Math.min(who.Height / 3, Math.max(who.Masc / 30 - dicktotal, who.Height * 0.03)));
                if (e == who.Dicks.length - 1 && who.Masc / 30 - dicktotal > who.Height / 3 && Settings.MaxLimbs.MaxDicks > e) {
                    var Dick = {
                        Size: 5,
                        Type: who.Race,
                        Virgin: true
                    }
                    who.Dicks.push(Dick);
                }
                if (who.Masc / 30 - dicktotal < 0 || e >= Settings.MaxLimbs.MaxDicks) {
                    who.Dicks.pop();
                } else {
                    dicktotal += who.Dicks[e].Size;
                }
            }
        }

        if (who.Masc < 50 && who.Balls.length > 0) {
            who.Balls.pop();
        } else if (who.Masc >= 50 && who.Balls.length == 0) {
            var Ball = {
                Size: 2,
                Type: who.Race,
                CumMax: 2,
                Cum: 0,
                CumRate: 0,
                CumBaseRate: 0.5
            }
            who.Balls.push(Ball);
        } else if (who.Balls.length > 0) {
            var ballstotal = 0;
            for (var e = 0; e < who.Balls.length; e++) {
                who.Balls[e].Type = who.Race;
                who.Balls[e].Size = Math.round(Math.min(who.Height / 4, Math.max(who.Masc / 50 - ballstotal, who.Height * 0.02)));
                if (e == who.Balls.length - 1 && who.Masc / 50 - ballstotal > who.Height / 3 && Settings.MaxLimbs.MaxBalls > e) {
                    var Ball = {
                        Size: 2,
                        Type: who.Race,
                        CumMax: 2,
                        Cum: 0,
                        CumRate: 0,
                        CumBaseRate: 0.5
                    }
                    who.Balls.push(Ball);
                }
                if (who.Masc / 50 - ballstotal < 0 || e >= Settings.MaxLimbs.MaxBalls) {
                    who.Balls.pop();
                } else {
                    ballstotal += who.Balls[e].Size;
                }
            }
        }

        if (who.Femi < 30 && who.Pussies.length > 0) {
            who.Pussies.pop();
            who.Boobies[0].Size = 0;
        } else if (who.Femi >= 30 && who.Pussies.length == 0) {
            var Pussy = {
                Size: Math.max(Math.round(who.Height * 0.03), Math.round(who.Femi / 25)),
                Type: who.Race,
                Virgin: true
            }
            who.Pussies.push(Pussy);
        } else if (who.Pussies.length > 0) {
            var pussytotal = 0;
            for (var e = 0; e < who.Pussies.length; e++) {
                who.Pussies[e].Type = who.Race;
                who.Pussies[e].Size = Math.round(Math.min(who.Height / 3, Math.max(who.Femi / 30 - pussytotal, who.Height * 0.03)));
                if (e == who.Pussies.length - 1 && who.Femi / 30 - pussytotal > who.Height / 3 && Settings.MaxLimbs.MaxVaginas > e) {
                    var Pussy = {
                        Size: 5,
                        Type: who.Race,
                        Virgin: true
                    }
                    who.Pussies.push(Pussy);
                }
                if (who.Femi / 30 - pussytotal < 0 || e >= Settings.MaxLimbs.MaxVaginas) {
                    who.Pussies.pop();
                } else {
                    pussytotal += who.Pussies[e].Size
                }
            }
        }

        var boobtotal = 0;
        for (var e = 0; e < who.Boobies.length; e++) {
            who.Boobies[e].Type = who.Race;
            who.Boobies[e].Size = Math.round(Math.min(who.Height / 3, Math.max(who.Femi / 60 - boobtotal, 0)));
            if (e == who.Boobies.length - 1 && who.Femi / 60 - boobtotal > who.Height / 3 && Settings.MaxLimbs.MaxBoobs > e) {
                var Boob = {
                    Size: 0,
                    Type: who.Race
                }
                who.Boobies.push(Boob);
            }
            if (who.Femi / 60 - boobtotal < 0 && e > 0 || e >= Settings.MaxLimbs.MaxBoobs) {
                who.Boobies.pop();
            } else {
                boobtotal += who.Boobies[e].Size;
            }
        }
        if (who.Anal.length == 0) {
            var Anal = {
                Size: 0,
                Type: who.Race,
                Virgin: true,
                stretch: 1,
            }
            who.Anal.push(Anal);
        } else {
            who.Anal[0].Size = Math.round(who.Height / 12);
        }
        return;
    }


    // Event log
    var LogHistory = "";

    function EventLog(LogText) {
        var newText = LogText + "<br>";
        LogHistory = newText + LogHistory;
        document.getElementById("EventText").innerHTML = LogHistory;
    }
    document.getElementById("HideEventLog").addEventListener("click", function () {
        if (document.getElementById("EventLogPart").style.display == 'none') {
            document.getElementById("EventLogPart").style.display = 'block';
            document.getElementById("HideEventLog").value = "Hide";
        } else {
            document.getElementById("EventLogPart").style.display = 'none';
            document.getElementById("HideEventLog").value = "Show";
        }
    });
    document.getElementById("HideFuilds").addEventListener("click", function () {
        if (document.getElementById("FluidPart").style.display == 'none') {
            document.getElementById("FluidPart").style.display = 'block';
            document.getElementById("HideFuilds").value = "Hide";
        } else {
            document.getElementById("FluidPart").style.display = 'none';
            document.getElementById("HideFuilds").value = 'Show';
        }
    });

    // End Event log


    function MakeDoor(x, y, width, height, NESW) {
        this.x = x,
            this.y = y,
            this.width = width,
            this.height = height,
            this.NESW = NESW

    };

    var Doors = [];


    function CheckDoor() {
        for (var i = 0; i < Doors.length; i++) {
            if (sprite.x >= Doors[i].x && sprite.x <= Doors[i].x + Doors[i].width &&
                sprite.y >= Doors[i].y && sprite.y <= Doors[i].y + Doors[i].height) {
                switch (player.Map) {
                    case "Start":
                        if (Doors[i].NESW == "E") {
                            sprite.x = grid * 2;
                            player.Map = "RoadToCity1";
                            enemies = [];
                        }
                        break;
                    case "RoadToCity1":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToCity2";
                            sprite.y = grid * 2;
                            enemies = [];
                        } else if (Doors[i].NESW == "W") {
                            player.Map = "Start";
                            sprite.x = startarea.width - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "N") {
                            player.Map = "Bandit";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        }
                        break;
                    case "Bandit":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToCity1";
                            sprite.y = 2 * grid;
                            enemies = [];
                        }
                        break;
                    case "RoadToCity2":
                        if (Doors[i].NESW == "N") {
                            player.Map = "RoadToCity1";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "E") {
                            player.Map = "City";
                            sprite.x = 2 * grid;
                            enemies = [];
                        }
                        break;
                    case "City":
                        if (Doors[i].NESW == "W") {
                            player.Map = "RoadToCity2";
                            sprite.x = startarea.width - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "E") {
                            player.Map = "RoadToHome";
                            sprite.x = 2 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "S") {
                            player.Map = "Forest";
                            sprite.y = grid * 2;
                            enemies = [];
                        }
                        break;
                    case "RoadToHome":
                        if (Doors[i].NESW == "W") {
                            player.Map = "City";
                            sprite.x = startarea.width - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "E" && House.Owned == true) {
                            battle = true;
                            sprite.x = startarea.width - 3 * grid;
                            document.getElementById("map").style.display = 'none';
                            document.getElementById("buttons").style.display = 'none';
                            document.getElementById("EmptyButtons").style.display = 'block';
                            document.getElementById("Home").style.display = 'block';
                            if (House.Dorm > 0) {
                                document.getElementById("Dorm").style.display = "inline-block";
                            } else {
                                document.getElementById("Dorm").style.display = "none"
                            }
                            if (House.hasOwnProperty("Portal")) {
                                document.getElementById("Portal").style.display = 'inline-block'
                            } else {
                                document.getElementById("Portal").style.display = 'none'
                            }
                        } else if (Doors[i].NESW == "N") {
                            player.Map = "RoadToWitch";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        }
                        break;
                    case "RoadToWitch":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToHome";
                            sprite.y = 2 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "N") {
                            player.Map = "RoadToWitch2"
                            sprite.y = startarea.height - 3 * grid
                            enemies = [];
                        }
                        break;
                    case "RoadToWitch2":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToWitch";
                            sprite.y = 2 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "E") {
                            player.Map = "Witch";
                            sprite.x = 2 * grid;
                            enemies = [];
                        }
                        break;
                    case "Witch":
                        {
                            if (Doors[i].NESW == "W") {
                                player.Map = "RoadToWitch2";
                                sprite.x = startarea.width - 3 * grid;
                                enemies = [];
                            }
                            break;
                        }
                    case "Forest":
                        if (Doors[i].NESW == "N") {
                            player.Map = "City";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "S") {
                            player.Map = "Forest2";
                            sprite.y = grid * 2;
                            enemies = [];
                        }
                        break;
                    case "Forest2":
                        if (Doors[i].NESW == "N") {
                            player.Map = "Forest";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "S") {
                            player.Map = "PathToOutlaws";
                            player.Area = "Second";
                            sprite.y = 2 * grid;
                            enemies = [];
                        }
                        break;
                    case "PathToOutlaws":
                        if (Doors[i].NESW == "N") {
                            player.Map = "Forest2";
                            player.Area = "First";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "W") {
                            player.Map = "Cave1";
                            sprite.x = startarea.width - 3 * grid;
                            enemies = []
                        } else if (Doors[i].NESW == "S") {
                            player.Map = "PathToOutlaws2";
                            sprite.y = 2 * grid;
                            enemies = []
                        }
                        break;
                    case "PathToOutlaws2":
                        if (Doors[i].NESW == "N") {
                            player.Map = "PathToOutlaws";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "S") {
                            player.Map = "Outlaws";
                            sprite.y = 2 * grid;
                            enemies = []
                        }
                        break;
                    case "Outlaws":
                        if (Doors[i].NESW == "N") {
                            player.Map = "PathToOutlaws2";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        }
                        break;
                    case "Cave1":
                        if (Doors[i].NESW == "E") {
                            player.Map = "PathToOutlaws";
                            sprite.x = 2 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "W") {
                            player.Map = "Cave2";
                            sprite.x = startarea.width - 3 * grid;
                            enemies = [];
                        }
                        break;
                    case "Cave2":
                        if (Doors[i].NESW == "E") {
                            player.Map = "Cave1";
                            sprite.x = 2 * grid;
                            enemies = [];
                        } else if (Doors[i].NESW == "S") {
                            player.Map = "Cave3";
                            sprite.y = 2 * grid;
                            enemies = [];
                        }
                        break;
                    case "Cave3":
                        if (Doors[i].NESW == "N") {
                            player.Map = "Cave2";
                            sprite.y = startarea.height - 3 * grid;
                            enemies = [];
                        }
                        break;

                }
            }
        }
    };

    function Npc(Name, RealName, X, Y, width, height, Color) {
        this.Name = Name,
            this.RealName = RealName,
            this.X = X,
            this.Y = Y,
            this.Width = width,
            this.Height = height,
            this.Color = Color
    };
    var Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)");
    var Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)");
    var Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)")
    var Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
    var WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
    var WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)");
    var Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)");
    var Portal = new Npc("LocalPortal", "Portal", grid * 12, grid * 8, grid * 4, grid * 4, "RGB(96, 47, 107)");
    var BlackMartket = new Npc("BlackMarket", "Black market", grid * 12, grid * 5, grid * 5, grid * 3, "RGB(133,94,66)");


    var Npcs = [];

    var NpcName;
    var EnemyIndex;

    function Touching() {
        for (var j = 0; j < enemies.length; j++) {
            if (sprite.x >= enemies[j].XPos && sprite.x < enemies[j].XPos + enemies[j].Size &&
                sprite.y >= enemies[j].YPos && sprite.y < enemies[j].YPos + enemies[j].Size && battle == false) {
                document.getElementById("map").style.display = 'none';
                document.getElementById("Encounter").style.display = 'grid';
                document.getElementById("BattleText").innerHTML = null;
                document.getElementById("BattleText2").innerHTML = null;
                battle = true;
                EnemyIndex = enemies.indexOf(enemies[j]);
                enemies[j].Health = enemies[j].FullHealth;
                enemies[j].WillHealth = enemies[j].FullWillHealth;
                EssenceCheck(enemies[j]);
                enemies[j].XPos = RandomInt(2, 18) * grid;
                enemies[j].YPos = RandomInt(2, 18) * grid;
                UpdateStats();
            }
        }
        for (var n = 0; n < Npcs.length; n++) {
            if (sprite.x >= Npcs[n].X && sprite.x < Npcs[n].X + Npcs[n].Width &&
                sprite.y >= Npcs[n].Y && sprite.y < Npcs[n].Y + Npcs[n].Height) {
                battle = true;
                sprite.x = startarea.width / 2 - grid;
                sprite.y = startarea.height / 2;
                UpdateNpc(Npcs[n].Name);
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
    document.getElementById("RestBar").addEventListener("click", function () {
        if (player.Gold > 25 && (player.Health < player.MaxHealth || player.WillHealth < player.MaxWillHealth)) {
            player.Gold -= 25;
            player.Health = player.MaxHealth;
            player.WillHealth = player.MaxWillHealth;
            return;
        } else {
            return;
        }
    });
    document.getElementById("EatBar").addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 12;
            player.Gold -= 10;
            player.Health += 20;
            player.WillHealth += 20;
            return;
        } else {
            return;
        }
    });

    // Questsystem

    var ChosenQuest
    document.getElementById("QuestMenu").addEventListener("click", function () {
        document.getElementById("TownhallStart").style.display = 'none';
        document.getElementById("Quest").style.display = 'block';
        document.getElementById("QuestStart").style.display = 'block';
        document.getElementById("QuestButtons").style.display = 'none';
        document.getElementById("ElfHuntReward").style.display = 'none';
        document.getElementById("BanditLordReward").style.display = 'none';
        document.getElementById("QuestReward").style.display = 'none';
        if (player.Quests.length > 0) {
            for (var i = 0; i < player.Quests.length; i++) {
                document.getElementById(player.Quests[i].Name).style.display = 'none';
                if (player.Quests[i].Completed) {
                    document.getElementById("QuestReward").style.display = 'block';
                    document.getElementById(player.Quests[i].Name + "Reward").style.display = 'inline-block';
                }
            }
        };
    });
    document.getElementById("BanditLord").addEventListener("click", function () {
        document.getElementById("LeaveQuest").style.display = 'none';
        if (Flags.BanditLord) {
            document.getElementById("QuestText").innerHTML = "The bandit are still humiliated from the defeat of their lord, but if you are willing please defeat them again to make sure they don't regain their confidence."
        } else {
            document.getElementById("QuestText").innerHTML = "The bandits up to the north has become braver with their new leader, if you are strong enough please beat them into submission. <br> <br>" +
                "You will be greatly awarded for your effort and we will grant you the right to buy the old mansion located east from the city."
        }
        ChosenQuest = "BanditLord";
        document.getElementById("QuestButtons").style.display = 'block';
        document.getElementById("QuestStart").style.display = 'none';
        document.getElementById("QuestReward").style.display = 'none';
    });
    document.getElementById("ElfHunt").addEventListener("click", function () {
        document.getElementById("QuestText").innerHTML = "The elves to the south is becoming a problem, defeat atleast three of them and you will be awarded."
        document.getElementById("QuestButtons").style.display = 'block';
        document.getElementById("QuestStart").style.display = 'none';
        document.getElementById("QuestReward").style.display = 'none';
        ChosenQuest = "ElfHunt";
    });
    document.getElementById("BanditLordReward").addEventListener("click", function () {
        if (Flags.BanditLord) {
            document.getElementById("QuestText").innerHTML = "You are rewared: 300Exp and 500gold";
        } else {
            if (!Flags.BanditLord) {
                Flags.BanditLord = true
            };
            document.getElementById("QuestText").innerHTML = "You are now allowed to buy a house. <br> You are rewared: 300Exp and 500gold";
            document.getElementById("BuyHouse").style.display = 'inline-block';
        }
        player.Exp += 300;
        player.Gold += 500;
        for (var i = 0; i < player.Quests.length; i++) {
            if (player.Quests[i].Name == "BanditLord") {
                player.Quests.splice(i, 1);
            }
        }
        document.getElementById("BanditLord").style.display = 'inline-block';
        document.getElementById("BanditLordReward").style.display = 'none';
    });
    document.getElementById("ElfHuntReward").addEventListener("click", function () {
        document.getElementById("QuestText").innerHTML = "You are rewared: 100Exp and 200gold";
        player.Exp += 100;
        player.Gold += 200;
        for (var i = 0; i < player.Quests.length; i++) {
            if (player.Quests[i].Name == "ElfHunt") {
                player.Quests.splice(i, 1);
            }
        }
        document.getElementById("ElfHunt").style.display = 'inline-block';
        document.getElementById("ElfHuntReward").style.display = 'none';
    });
    document.getElementById("QuestAccept").addEventListener("click", function () {
        document.getElementById("Quest").style.display = 'none';
        document.getElementById("TownhallStart").style.display = 'block';
        var Quest = {
            Name: ChosenQuest,
            Count: 0,
            Completed: false
        }
        player.Quests.push(Quest);
        document.getElementById("QuestText").innerHTML = "";
        document.getElementById("LeaveQuest").style.display = 'inline-block';

    });
    document.getElementById("QuestDecline").addEventListener("click", function () {
        document.getElementById("QuestButtons").style.display = 'none';
        document.getElementById("QuestStart").style.display = 'block';
        document.getElementById("QuestReward").style.display = 'block';
        document.getElementById("LeaveQuest").style.display = 'inline-block';
        document.getElementById("QuestText").innerHTML = "";
    });
    document.getElementById("LeaveQuest").addEventListener("click", function () {
        document.getElementById("Quest").style.display = 'none';
        document.getElementById("TownhallStart").style.display = 'block';
        document.getElementById("LeaveQuest").style.display = 'inline-block';
        document.getElementById("QuestText").innerHTML = "";
    });
    // Slut på questsystem

    document.getElementById("BuyHouse").addEventListener("click", function () {
        if (player.Gold > 100) {
            document.getElementById("BuyHouse").style.display = 'none';
            House.Owned = true;
            return;
        } else {
            return;
        }
    });
    document.getElementById("Services").addEventListener("click", function () {
        document.getElementById("TownhallStart").style.display = 'none';
        document.getElementById("Service").style.display = 'block';
    });
    document.getElementById("NameChange").addEventListener("click", function () {
        document.getElementById("NameChangeForm").style.display = 'block';
        document.getElementById("firstname2").value = player.Name;
        document.getElementById("lastname2").value = player.Lastname;
    });
    document.getElementById("AcceptName").addEventListener("click", function () {
        player.Name = document.getElementById("firstname2").value;
        player.Lastname = document.getElementById("lastname2").value;
        document.getElementById("NameChangeForm").style.display = 'none';
    });
    document.getElementById("ServicesLeave").addEventListener("click", function () {
        document.getElementById("TownhallStart").style.display = 'block';
        document.getElementById("Service").style.display = 'none';
        document.getElementById("NameChangeForm").style.display = 'none';
    });

    // Items
    document.getElementById("ItemsShop").addEventListener("click", function (e) {
        if (e.target.type == "button") {
            Chosen = String(e.target.id);
            if (Chosen == "StrPotion" && player.Gold > 100) {
                player.Str++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body becoming stronger."
            } else if (Chosen == "ChaPotion" && player.Gold > 100) {
                player.Charm++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your charms grow."
            } else if (Chosen == "EndPotion" && player.Gold > 100) {
                player.End++
                player.MaxHealth += 5;
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your endurance growing."
            } else if (Chosen == "IntPotion" && player.Gold > 100) {
                player.Int++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your mind becoming sharper."
            } else if (Chosen == "WillPotion" && player.Gold > 100) {
                player.Will++
                player.MaxWillHealth += 5;
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your willpower growing."
            } else if (Chosen == "SexPotion" && player.Gold > 100) {
                player.SexSkill++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you get a feeling that somehow your bedskills have grown."
            } else {
                document.getElementById("ShopText").innerHTML = "";
            }
        }
    });

    document.getElementById("WitchShop").addEventListener("click", function (e) {
        var Chosen;
        if (e.target.type == "button") {
            Chosen = String(e.target.id);
            if (Chosen == "Grow" && player.Gold >= 50) {
                var growth = Math.round((180 / player.Height) * 100) / 100;
                player.Gold -= 50;
                player.Height += growth;
                document.getElementById("WitchShopText").innerHTML = "You grow " + growth + "cm.";
            } else if (Chosen == "Shrink" && player.Gold >= 50) {
                var shrunk = Math.round((player.Height / 100) * 100) / 100;
                player.Gold -= 50;
                player.Height -= shrunk;
                document.getElementById("WitchShopText").innerHTML = "You shrink " + shrunk + "cm.";
            } else if (Chosen == "FertilityAdd" && player.Gold >= 30) {
                player.Gold -= 30;
                player.Fertility++;
                document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more fertil.";
            } else if (Chosen == "FertilitySub" && player.Gold >= 70) {
                player.Gold -= 70;
                player.Fertility -= 3;
                document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more barren."
            } else if (Chosen == "VirilityAdd" && player.Gold >= 70) {
                player.Gold -= 70;
                player.Virility++;
                document.getElementById("WitchShopText").innerHTML = "You feel your virility increasing.";
            } else if (Chosen == "VirilitySub" && player.Gold >= 30) {
                player.Gold -= 30;
                player.Virility -= 3;
                document.getElementById("WitchShopText").innerHTML = "You feel your virility decreasing";
            } else if (Chosen == "CumRateAdd" && player.Gold >= 100 && player.Balls.length > 0) {
                player.Gold -= 100;
                for (var e = 0; e < player.Balls.length; e++) {
                    player.Balls[e].CumRate += 0.1;
                }
                document.getElementById("WitchShopText").innerHTML = "You get a tingling feeling in your balls, you think it works!"
            } else if (Chosen == "CumRateSub" && player.Gold >= 20 && player.Balls.length > 0) {
                player.Gold -= 20;
                for (var e = 0; e < player.Balls.length; e++) {
                    player.Balls[e].CumRate -= 0.5;
                }
                document.getElementById("WitchShopText").innerHTML = "You get a strange feeling in your balls, you think it works!"
            }
        }
    });
    document.getElementById("WitchShop").addEventListener("mouseover", function (e) {
        var Chosen;
        if (e.target.type == "button") {
            Chosen = String(e.target.id);
            if (Chosen == "Grow") {
                document.getElementById("WitchShopText").innerHTML = e.target.title;
            } else if (Chosen == "Shrink") {
                document.getElementById("WitchShopText").innerHTML = e.target.title
            } else if (Chosen == "FertilityAdd") {
                document.getElementById("WitchShopText").innerHTML = e.target.title
            } else if (Chosen == "FertilitySub") {
                document.getElementById("WitchShopText").innerHTML = e.target.title
            } else if (Chosen == "VirilityAdd") {
                document.getElementById("WitchShopText").innerHTML = e.target.title
            } else if (Chosen == "VirilitySub") {
                document.getElementById("WitchShopText").innerHTML = e.target.title
            } else if (Chosen == "CumRateAdd") {
                document.getElementById("WitchShopText").innerHTML = e.target.title
            } else if (Chosen == "CumRateSub") {
                document.getElementById("WitchShopText").innerHTML = e.target.title
            }
        }
    });
    document.getElementById("ElfTF").addEventListener("click", function () {
        if (player.Race == "elf") {
            document.getElementById("WitchHutText").innerHTML = "You are already a elf!";
            return;
        }
        if (TF.Status) {
            document.getElementById("WitchHutText").innerHTML = "Your body is currently transforming!";
            return;
        }
        if (player.Gold >= 200) {
            player.Gold -= 200;
            TfEngine("elf");
            document.getElementById("WitchHutText").innerHTML = "You drink the potion and get a strange feeling running trough your entire body.";
        } else {
            document.getElementById("WitchHutText").innerHTML = "You can't afford the potion";
        }
    });
    document.getElementById("ElfTF").addEventListener("mouseover", function (e) {
        document.getElementById("WitchHutText").innerHTML = e.target.title;
    });
    document.getElementById("HumanTF").addEventListener("click", function () {
        if (player.Race == "human") {
            document.getElementById("WitchHutText").innerHTML = "You are already a human!";
            return;
        }
        if (TF.Status) {
            document.getElementById("WitchHutText").innerHTML = "Your body is currently transforming!";
            return;
        }
        if (player.Gold >= 250) {
            player.Gold -= 250;
            TfEngine("human");
            document.getElementById("WitchHutText").innerHTML = "You drink the potion and get a familiar feeling running trough your entire body.";
        } else {
            document.getElementById("WitchHutText").innerHTML = "You can't afford the potion";
        }
    });
    document.getElementById("HumanTF").addEventListener("mouseover", function (e) {
        document.getElementById("WitchHutText").innerHTML = e.target.title;
    });


    document.getElementById("Train").addEventListener("click", function () {
        if (player.Fat > (player.Weight * 0.1)) {
            var gains = Math.round((player.Height / 160) * (30 / player.Muscle) * (player.Str / 10));
            var burn = Math.round(gains * 4);
            player.Muscle += gains;
            player.Fat -= burn;
            document.getElementById("GymText").innerHTML = "You burn " + burn + "kg of fat and gain " + gains + "kg of muscle."
            LastTrainDay = Flags.Date.Day;
            LastTrainMonth = Flags.Date.Month;

        } else {
            document.getElementById("GymText").innerHTML = "You are to skinny."
        }


    });
    document.getElementById("BurnFat").addEventListener("click", function () {
        if (player.Fat > player.Weight * 0.1) {
            var burn = Math.round(player.Fat * 0.08);
            player.Fat -= burn;
            document.getElementById("GymText").innerHTML = "You speent an hour doing cardio, when stepping on the scale in the shower room you are happy to see you lost " + burn + "kg.";
        } else {
            document.getElementById("GymText").innerHTML = "Buring more fat would be dangerous!";
        }
    });

    // Slut på Items 

    // Home
    document.getElementById("Sleep").addEventListener("click", function () {
        if (player.Health < player.MaxHealth + House.BedLevel * 5) {
            player.Health = player.MaxHealth + House.BedLevel * 5;
        }
        if (player.WillHealth < player.MaxWillHealth + House.BedLevel * 5) {
            player.WillHealth = player.MaxWillHealth + House.BedLevel * 5;
        }
        document.getElementById("HomeText").innerHTML = "You sleept.";
    });
    document.getElementById("UpgradeHome").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("Upgrades").style.display = 'block';
        document.getElementById("HomeText").innerHTML = "";
        if (House.hasOwnProperty("Portal")) {
            document.getElementById("BuildPortal").style.display = 'none';
        }
        var BedCost = Math.round(50 * Math.pow(1.2, House.BedLevel));
        document.getElementById("UpgradeBed").value = "Upgrade bedroom " + BedCost + "g";
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        document.getElementById("BuildDorm").value = "Build dorm " + DormCost + "g";
        var Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
        document.getElementById("BuildGym").value = "Build gym " + Gymcost + "g";
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        document.getElementById("BuildKitchen").value = "Build kitchen " + Kitchencost + "g";
        var Brothelcost = Math.round(500 * Math.pow(1.2, House.Brothel));
        document.getElementById("BuildBrothel").value = "Build brothel " + Brothelcost + "g(Concept)";
    });
    document.getElementById("UpgradeBed").addEventListener("click", function () {
        var BedCost = Math.round(50 * Math.pow(1.2, House.BedLevel));
        if (player.Gold > BedCost) {
            House.BedLevel++;
            player.Gold -= BedCost;
            var BedCost = Math.round(50 * Math.pow(1.2, House.BedLevel));
            if (House.BedLevel < 5) {
                document.getElementById("HomeText").innerHTML = "You have built a bedroom. The bedroom will allow you to wake up with extra health and will."
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your bedroom.";
            }
        } else {
            document.getElementById("HomeText").innerHTML = "You can't afford to upgrade your bedroom.";
        }
        document.getElementById("UpgradeBed").value = "Upgrade bedroom " + BedCost + "g";
    });
    document.getElementById("UpgradeBed").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildDorm").addEventListener("click", function () {
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        if (player.Gold > DormCost) {
            House.Dorm++;
            player.Gold -= DormCost;
            if (House.Dorm < 1) {
                document.getElementById("Dorm").style.display = "inline-block";
                document.getElementById("HomeText").innerHTML = "Hiring construction workers you give orders to build a dorm to house servants. <br><br>" +
                    "Wow that's fast looking outside you see the newly built dorm. You can now take home opponent you have made orgasm five times."

            } else {
                document.getElementById("HomeText").innerHTML = "You expand your dorm to house three more servants.(" + House.Dorm * 3 + ")";
            }
        }
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        document.getElementById("BuildDorm").value = "Build dorm " + DormCost + "g";
    });

    document.getElementById("BuildDorm").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });

    document.getElementById("BuildGym").addEventListener("click", function () {
        var Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
        if (player.Gold > Gymcost) {
            if (House.Gym < 1) {
                document.getElementById("HomeText").innerHTML = "You built a gym for your servants, they can now go there in order to burn fat and build muscle.";
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your gym so your servants can gain more muscle."
            }
            House.Gym++;
            player.Gold -= Gymcost;
            Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
            document.getElementById("BuildGym").value = "Build gym " + Gymcost + "g";
        }
    });
    document.getElementById("BuildGym").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildKitchen").addEventListener("click", function () {
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        if (player.Gold > Kitchencost) {
            if (House.Kitchen < 1) {
                document.getElementById("HomeText").innerHTML = "You have built a kitchen where your servant can go and eat. Be aware that if you don't build a gym they will get fat, unless that's what you are into to."
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your kitchen servants can now gain more fat.";
            }
            House.Kitchen++;
            player.Gold -= Kitchencost;
        }
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        document.getElementById("BuildKitchen").value = "Build kitchen " + Kitchencost + "g";
    });
    document.getElementById("BuildKitchen").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildPortal").addEventListener("click", function () {
        if (player.Gold > 1000 && !House.hasOwnProperty("Portal")) {
            player.Gold -= 1000;
            House.Portal = true;
            document.getElementById("HomeText").innerHTML = "Congratulations you now own a personal portal, a true sign of wealth for peasants to envy!"
            document.getElementById("BuildPortal").style.display = 'none';
            document.getElementById("Portal").style.display = 'inline-block';
        } else {
            document.getElementById("HomeText").innerHTML = "You are to poor to buy a portal you peasant!"
        }
    });
    document.getElementById("BuildPortal").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildBrothel").addEventListener("click", function () {
        var Brothelcost = Math.round(500 * Math.pow(1.2, House.Brothel))
        if (player.Gold > Brothelcost) {
            player.Gold -= Brothelcost;
            if (House.Brothel < 1) {
                document.getElementById("HomeText").innerHTML = "You have built a brothel where your servants will whore themself out, allowing you to gain extra income."
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your brothel for extra income.";
            }
            House.Brothel++;
        }
        Brothelcost = Math.round(500 * Math.pow(1.2, House.Brothel));
        document.getElementById("BuildBrothel").value = "Upgrade brothel " + Brothelcost + "g";
    });
    document.getElementById("BuildBrothel").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("LeaveUpgradeHome").addEventListener("click", function () {
        document.getElementById("Upgrades").style.display = 'none';
        document.getElementById("HomeStart").style.display = 'block';
    });
    document.getElementById("Dorm").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("TheDorm").style.display = 'block';
        document.getElementById("ButtonMates").style.display = 'grid';
        document.getElementById("DivMates").style.display = 'none';
        document.getElementById("LeaveDorm").style.display = 'inline-block'
        document.getElementById("flex").style.display = 'none';
        ButtonMates();
    });

    function ButtonMates() {
        var Inputs = [];
        for (var e = 0; e < House.Dormmates.length; e++) {
            var color;
            switch (CheckGender(House.Dormmates[e])) {
                case "female":
                    color = "Pink";
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
            var DormName = "";
            if (House.Dormmates[e].hasOwnProperty("FirstName")) {
                DormName += House.Dormmates[e].FirstName;
            };
            if (House.Dormmates[e].hasOwnProperty("LastName")) {
                DormName += " " + House.Dormmates[e].LastName;
            };
            var Input = "<button type=\"button\" class=\"" + color + "\" onclick=\"MateDiv(" + e + ")\">" + DormName + "<br>" +
                House.Dormmates[e].Name + " " + House.Dormmates[e].Race + "</button  >"
            Inputs += Input;
        }
        document.getElementById("ButtonMates").innerHTML = Inputs;
    }

    var MateIndex;

    function MateDiv(e) {
        MateIndex = e;
        var rm = House.Dormmates[e];
        document.getElementById("ButtonMates").style.display = 'none';
        document.getElementById("DivMates").style.display = 'flex';
        document.getElementById("flex").style.display = 'grid';
        var RoomMate = "<div id=\"" + e + "\"></div>"
        document.getElementById("DivMates").innerHTML = RoomMate;
        var PregnantStatus = "";
        if (rm.hasOwnProperty("Pregnant")) {
            if (rm.Pregnant.Status) {
                var age = Math.round(rm.Pregnant.Baby / 10000);
                if (age < 1) {
                    PregnantStatus = "<br>Impregnated";
                } else {
                    PregnantStatus = "<br>" + age + " months pregnant";
                }
            }
        }
        var DormName = "";
        if (rm.hasOwnProperty("FirstName")) {
            DormName += rm.FirstName;
        };
        if (rm.hasOwnProperty("LastName")) {
            DormName += " " + rm.LastName;
        };
        document.getElementById(e).innerHTML = "<div>" + DormName + "<br>" + rm.Name + " " + rm.Race + "<br>" + Pronun(CheckGender(rm)) +
            "<br><br>Height: " + Math.round(rm.Height) + "cm<br>Weight: " + Math.round(rm.Weight) + "kg<br>Muscle: " + Math.round(rm.Muscle) + "kg<br>Fat: " + Math.round(rm.Fat) +
            "kg<br>" + PregnantStatus + "<br><br>" + BoobLook(rm) + DickLook(rm) + PussyLook(rm) + "</div>" + "<div> Strength: " + rm.Str +
            "<br>Charm: " + rm.Charm + "<br>Endurance: " + rm.End + "<br>Int: " + rm.Int + "<br>Sexskill: " + rm.SexSkill +
            "<br> Willpower: " + rm.Willpower + "</div>"
        document.getElementById(e).style.display = 'block'
        document.getElementById("LeaveRoom").style.display = 'block';
        document.getElementById("LeaveDorm").style.display = 'none';
        document.getElementById("KickOut").style.display = 'block';
        document.getElementById("Fuck").style.display = 'block';
        document.getElementById("Rename").style.display = 'block';
    }
    document.getElementById("KickYes").addEventListener("click", function () {
        document.getElementById("flex").style.display = 'grid';
        document.getElementById("KickYesNo").style.display = 'none';
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("TheDorm").style.display = 'none';
        House.Dormmates.splice(MateIndex, 1);
        return;
    });
    document.getElementById("KickNo").addEventListener("click", function () {
        document.getElementById("flex").style.display = 'grid';
        document.getElementById("KickYesNo").style.display = 'none';
    });
    document.getElementById("Fuck").addEventListener("click", function () {
        document.getElementById("Home").style.display = 'none';
        document.getElementById("FuckDorm").style.display = 'grid';
        document.getElementById("status").style.display = 'none';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("EventLog").style.display = 'none';
        DormSex();
    });
    document.getElementById("Rename").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (e.hasOwnProperty("FirstName")) {
            document.getElementById("DormFirstName").value = e.FirstName;
        }
        if (e.hasOwnProperty("LastName")) {
            document.getElementById("DormLastName").value = e.LastName
        }
        document.getElementById("DormNameChangeForm").style.display = 'block';
        document.getElementById(MateIndex).style.display = 'none';
        document.getElementById("flex").style.display = 'none';
    });
    document.getElementById("AcceptDormName").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        e.FirstName = document.getElementById("DormFirstName").value;
        e.LastName = document.getElementById("DormLastName").value;
        document.getElementById("DormNameChangeForm").style.display = 'none';
        MateDiv(MateIndex);
    });

    function DormSex() {
        var e = House.Dormmates[MateIndex];
        document.getElementById("DormPName").innerHTML = player.Name + " " + player.Lastname;
        document.getElementById("DormEName").innerHTML = e.Name + "<br>" + e.Race + " " + Pronun(CheckGender(e));
        document.getElementById("DormMascu").innerHTML = player.Masc;
        document.getElementById("DormFemin").innerHTML = player.Femi;
        document.getElementById("DormEMascu").innerHTML = Math.round(e.Masc);
        document.getElementById("DormEFemin").innerHTML = Math.round(e.Femi);
        document.getElementById("DormPlayerLooks").innerHTML = BoobLook(player) + DickLook(player) + PussyLook(player);
        document.getElementById("DormEnemyLooks").innerHTML = BoobLook(e) + DickLook(e) + PussyLook(e);
        if (e.Pregnant.Status || player.Dicks.length == 0) {
        document.getElementById("Impregnate").style.display = 'none';
        console.log(e.Pregnant)
        console.log(player.Dicks.length == 0)
        } else {
            document.getElementById("Impregnate").style.display = 'inline-block';
        }

        if (e.hasOwnProperty("Pregnant")) {
            if (e.Pregnant.Status) {
                var age = Math.round(e.Pregnant.Baby / 10000);
                if (age < 1) {
                    document.getElementById("DormEnemyLooks").innerHTML += "<br>Impregnated";
                } else {
                    document.getElementById("DormEnemyLooks").innerHTML += "<br>" + age + " months pregnant";
                }
            }
        }
        var DelatMed = 2;
        if (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) {
            DelatMed = 100 / player.Masc;
        } else if (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc) {
            DelatMed = 100 / player.Femi;
        } else if (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) {
            DelatMed = 100 / e.Masc;
        } else {
            DelatMed = 100 / e.Femi;
        }

        document.getElementById("DormMascu").style.width = player.Masc * DelatMed + "%";
        document.getElementById("DormFemin").style.width = player.Femi * DelatMed + "%";
        document.getElementById("DormEMascu").style.width = e.Masc * DelatMed + "%";
        document.getElementById("DormEFemin").style.width = e.Femi * DelatMed + "%";
        return;
    };
    document.getElementById("DormDrainMasc").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (player.EssenceDrain >= e.Masc && e.Masc > 0) {
            player.Masc += e.Masc;
            e.Masc = 0;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon masc";
            return;
        } else if (player.EssenceDrain < e.Masc) {
            player.Masc += player.EssenceDrain;
            e.Masc -= player.EssenceDrain;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon masc";
            return;
        } else {
            return;
        }
    });
    document.getElementById("DormDrainFemi").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (player.EssenceDrain >= e.Femi && e.Femi > 0) {
            player.Femi += e.Femi;
            e.Femi = 0;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon femi";
            return;
        } else if (player.EssenceDrain < e.Femi) {
            player.Femi += player.EssenceDrain;
            e.Femi -= player.EssenceDrain;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon femi";
            return;
        } else {
            return;
        }
    });
    document.getElementById("Impregnate").addEventListener("click", function () {
        document.getElementById("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
        var e = House.Dormmates[MateIndex];
        if (e.hasOwnProperty("Pregnant")) {
            if (e.Pregnant.Status) {
                document.getElementById("DormSexText").innerHTML = "You have already impregnated her!"
                DormSex();
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
                break;
            } else {
                document.getElementById("DormSexText").innerHTML = "You try but there is to little cum in your balls."
            }

        }
        DormSex();
    });
    document.getElementById("LeaveDormSex").addEventListener("click", function () {
        document.getElementById("Home").style.display = 'block';
        document.getElementById("FuckDorm").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'block';
        document.getElementById("DormSexText").innerHTML = " "
        MateDiv(MateIndex);
    });
    document.getElementById("LeaveRoom").addEventListener("click", function () {
        document.getElementById("DivMates").style.display = 'none';
        document.getElementById("ButtonMates").style.display = 'grid';
        document.getElementById("LeaveRoom").style.display = 'none';
        document.getElementById("LeaveDorm").style.display = 'inline-block'
        document.getElementById("KickOut").style.display = 'none';
        document.getElementById("Fuck").style.display = 'none';
        document.getElementById("Rename").style.display = 'none';
        document.getElementById("DormChildren").style.display = 'none';
        ButtonMates();
        return;
    });
    document.getElementById("KickOut").addEventListener("click", function () {
        document.getElementById("flex").style.display = 'none';
        document.getElementById("KickYesNo").style.display = 'block';
    });
    document.getElementById("LeaveDorm").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("TheDorm").style.display = 'none';
        return;
    });
    // Portal
    document.getElementById("Portal").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("PortalMenu").style.display = 'block';
    });
    document.getElementById("LeavePortal").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("PortalMenu").style.display = 'none';
    });
    document.getElementById("Portals").addEventListener("click", function (e) {
        Npcs = [];
        var Chosen;
        if (e.target.type == "button") {
            Chosen = String(e.target.id);
            if (Chosen == "TempLand") {
                player.Area = "TempLand";
                player.Map = "TempCity";
                LeaveHome();
            }
        }
    });


    document.getElementById("LeaveHome").addEventListener("click", function () {
        LeaveHome();
        return;
    });

    function LeaveHome() {
        battle = false;
        document.getElementById("Home").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
    }

    // End home

    // Black market code
    document.getElementById("SellLimbs").addEventListener("click", function () {
        document.getElementById("LimbSale").style.display = 'block';
        document.getElementById("SellLimbs").style.display = 'none';
        LimbSale();
    });

    function LimbSale() {
        var SellDicks = [];
        for (var e = 0; e < player.Dicks.length; e++) {
            var temp = "<button onclick=\"SellDicks(" + e + "); LimbSale()\">Dick: " + (e + 1) + ", " + player.Dicks[e].Size + "cm</button>";
            SellDicks += temp;
        }
        document.getElementById("SellDicks").innerHTML = SellDicks;
        var SellDickSize = [];
        for (var e = 0; e < player.Dicks.length; e++) {
            var temp = "<button onclick=\"SellDickSize(" + e + "); LimbSale()\">Dick: " + (e + 1) + ", " + player.Dicks[e].Size + "cm</button>";
            SellDickSize += temp;
        }
        document.getElementById("SellDickSize").innerHTML = SellDickSize;

        var SellBalls = [];
        for (var e = 0; e < player.Balls.length; e++) {
            var temp = "<button onclick=\"SellBalls(" + e + "); LimbSale()\">Ball: " + (e + 1) + ", " + player.Balls[e].Size + "cm</button>";
            SellBalls += temp;
        }
        document.getElementById("SellBalls").innerHTML = SellBalls;
        var SellBallSize = [];
        for (var e = 0; e < player.Balls.length; e++) {
            var temp = "<button onclick=\"SellBallSize(" + e + "); LimbSale()\">Ball: " + (e + 1) + ", " + player.Balls[e].Size + "cm</button>";
            SellBallSize += temp;
        }
        document.getElementById("SellBallSize").innerHTML = SellBallSize;

        var SellBreasts = [];
        for (var e = 1; e < player.Boobies.length; e++) {
            var temp = "<button onclick=\"SellBreasts(" + e + "); LimbSale()\">Boobs: " + (e + 1) + ", " + player.Boobies[e].Size + "cm</button>";
            SellBreasts += temp;
        }
        document.getElementById("SellBreasts").innerHTML = SellBreasts;
        var SellBreastSize = [];
        for (var e = 0; e < player.Boobies.length; e++) {
            var temp = "<button onclick=\"SellBreastSize(" + e + "); LimbSale()\">Boobs: " + (e + 1) + ", " + player.Boobies[e].Size + "cm</button>";
            SellBreastSize += temp;
        }
        document.getElementById("SellBreastSize").innerHTML = SellBreastSize;

        var SellVaginas = [];
        for (var e = 0; e < player.Pussies.length; e++) {
            var temp = "<button onclick=\"SellVaginas(" + e + "); LimbSale()\">Pussy: " + (e + 1) + ", " + player.Pussies[e].Size + "cm</button>";
            SellVaginas += temp;
        }
        document.getElementById("SellVaginas").innerHTML = SellVaginas;
        var SellVaignaSize = [];
        for (var e = 0; e < player.Pussies.length; e++) {
            var temp = "<button onclick=\"SellVaignaSize(" + e + "); LimbSale()\">Pussy: " + (e + 1) + ", " + player.Pussies[e].Size + "cm</button>";
            SellVaignaSize += temp;
        }
        document.getElementById("SellVaignaSize").innerHTML = SellVaignaSize;
    }

    function SellDicks(e) {
        player.Gold += player.Dicks[e].Size * 30;
        player.Dicks.splice(e, 1);
    }

    function SellDickSize(e) {
        player.Gold += 25;
        player.Dicks[e].Size--;
    }

    function SellBalls(e) {
        player.Gold += player.Balls[e].Size * 30;
        player.Balls.splice(e, 1);
    }

    function SellBallSize(e) {
        player.Gold += 25;
        player.Balls[e].Size--;
    }

    function SellBreasts(e) {
        player.Gold += player.Boobies[e].Size * 30;
        player.Boobies.splice(e, 1);
    }

    function SellBreastSize(e) {
        player.Gold += 25;
        player.Boobies[e].Size--;
    }

    function SellVaginas(e) {
        player.Gold += player.Pussies[e].Size * 30;
        player.Pussies.splice(e, 1);
    }

    function SellVaignaSize(e) {
        player.Gold += 25;
        player.Pussies[e].Size--;
    }

    document.getElementById("SellFemininity").addEventListener("click", function () {
        if (player.Femi >= 50) {
            player.Femi -= 50;
            player.Gold += 100;
        }
    });
    document.getElementById("SellMasculinity").addEventListener("click", function () {
        if (player.Masc >= 50) {
            player.Masc -= 50;
            player.Gold += 50;
        }
    });
    document.getElementById("BlackMarketWhy").addEventListener("mouseover", function (e) {
        document.getElementById("BlackMarketText").innerHTML = e.target.title;
    });
    document.getElementById("BlackMarketWhy").addEventListener("click", function () {
        document.getElementById("BlackMarketText").innerHTML = "Yeah we are only buying essence here, you see we have a contract with guys in the capital where we can sell for a lot more to nobles.  Nobles you might ask aren’t they the ones who preach about how you should only have as much essence you can conquer!" +
            " The thing is though while they say trading essence are forbidden and for the weak, the rich don’t follow the rules they only pretend to in order to maintain their image. ";
    });


    document.getElementById("LeaveBlackMarket").addEventListener("click", function () {
        document.getElementById("LimbSale").style.display = 'none';
        document.getElementById("SellLimbs").style.display = 'inline-block';
    });



    // End Black market

    function PrintDoor(NESW) {
        this.NESW = NESW;
        if (NESW == "E") {
            ctx.fillStyle = MapColor;
            ctx.fillRect(startarea.width - grid, startarea.height / 2 - 3 * grid, grid, grid * 6);
        } else if (NESW == "S") {
            ctx.fillStyle = MapColor;
            ctx.fillRect(startarea.width / 2 - 3 * grid, startarea.height - grid, grid * 6, grid);
        } else if (NESW == "W") {
            ctx.fillStyle = MapColor;
            ctx.fillRect(0, startarea.height / 2 - 3 * grid, grid, grid * 6);
        } else if (NESW == "N") {
            ctx.fillStyle = MapColor;
            ctx.fillRect(startarea.width / 2 - 3 * grid, 0, grid * 6, grid);
        }
    }

    function testsa(e) {
        for (var b = e; b < enemies.length; b++) {
            return enemies[b].XPos;
        }
    }

    function PrintEnemies() {
        for (var e = 0; e < enemies.length; e++) {
            ctx.fillStyle = enemies[e].Color;
            ctx.fillRect(enemies[e].XPos, enemies[e].YPos, enemies[e].Size, enemies[e].Size);
            var color;
            switch (CheckGender(enemies[e])) {
                case "female":
                    color = "Pink";
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
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "1vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(enemies[e].Name + " " + enemies[e].Race, enemies[e].XPos + enemies[e].Size / 2, enemies[e].YPos);
        }
    };

    function PrintNpcs() {
        for (var e = 0; e < Npcs.length; e++) {
            //ctx.fillStyle = Npcs[e].Color;
            //ctx.fillRect(Npcs[e].X, Npcs[e].Y, Npcs[e].Width, Npcs[e].Height);
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "4vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(Npcs[e].RealName, Npcs[e].X + Npcs[e].Width / 2, Npcs[e].Y + Npcs[e].Height / 1.8);
        }
    }
    var a = document.documentElement.clientHeight;

    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");

    function TilePainter(x, y, w, h) {
        World.fillStyle = Settings.MapColor;
        World.fillRect(x, y, w, h);

        World.fillStyle = Settings.BorderColor;
        World.strokeRect(x, y, w, h);

    }

    function PrintMap(karta) {
        World.fillStyle = "#404040";
        World.fillRect(0, 0, WorldMap.width, WorldMap.height);

        World.fillStyle = Settings.BorderColor;
        World.strokeStyle = Settings.BorderColor;
        switch (player.Area) {
            case "First":
                World.fillStyle = Settings.MapColor;
                TilePainter(0, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2); //Start
                TilePainter(WorldMap.width * 0.2, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2); //RTC1
                TilePainter(WorldMap.width * 0.2, 0, WorldMap.width * 0.2, WorldMap.height * 0.2); //Bandit
                TilePainter(WorldMap.width * 0.2, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2); //RTC2
                TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2); //City
                TilePainter(WorldMap.width * 0.6, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2); //RTH
                TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.6, WorldMap.width * 0.2, WorldMap.height * 0.2); //Forest
                TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.8, WorldMap.width * 0.2, WorldMap.height * 0.2); //Forest2
                TilePainter(WorldMap.width * 0.6, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2); //RTW
                TilePainter(WorldMap.width * 0.6, 0, WorldMap.width * 0.2, WorldMap.height * 0.2); //RTW2
                TilePainter(WorldMap.width * 0.8, 0, WorldMap.width * 0.2, WorldMap.height * 0.2); //Witch

                World.font = "2em Arial";
                World.strokeText("B", WorldMap.width * 0.27, WorldMap.height * 0.17);
                World.strokeText("C", WorldMap.width * 0.46, WorldMap.height * 0.57);
                World.strokeText("W", WorldMap.width * 0.85, WorldMap.height * 0.17);
                if (House.Owned == true) {
                    TilePainter(WorldMap.width * 0.8, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);
                    World.strokeText("H", WorldMap.width * 0.87, WorldMap.height * 0.57);
                }

                World.font = "1em Arial";
                World.strokeText("v", WorldMap.width * 0.485, WorldMap.height)


                switch (player.Map) {
                    case "Start":
                        World.fillRect(0, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "RoadToCity1":
                        World.fillRect(WorldMap.width * 0.2, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2)
                        break;
                    case "Bandit":
                        World.fillRect(WorldMap.width * 0.2, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "RoadToCity2":
                        World.fillRect(WorldMap.width * 0.2, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "City":
                        World.fillRect(WorldMap.width * 0.4, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "RoadToHome":
                        World.fillRect(WorldMap.width * 0.6, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "RoadToWitch":
                        World.fillRect(WorldMap.width * 0.6, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "RoadToWitch2":
                        World.fillRect(WorldMap.width * 0.6, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "Witch":
                        World.fillRect(WorldMap.width * 0.8, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "Forest":
                        World.fillRect(WorldMap.width * 0.4, WorldMap.height * 0.6, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "Forest2":
                        World.fillRect(WorldMap.width * 0.4, WorldMap.height * 0.8, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                }
                break;
            case "Second":
                TilePainter(WorldMap.width * 0.4, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                TilePainter(WorldMap.width * 0.2, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                TilePainter(0, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                TilePainter(0, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                TilePainter(0, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);
                TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);

                World.font = "2em Arial";
                World.strokeText("O", WorldMap.width * 0.46, WorldMap.height * 0.57);

                switch (player.Map) {
                    case "PathToOutlaws":
                        World.fillRect(WorldMap.width * 0.4, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "PathToOutlaws2":
                        World.fillRect(WorldMap.width * 0.4, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "Outlaws":
                        World.fillRect(WorldMap.width * 0.4, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "Cave1":
                        World.fillRect(WorldMap.width * 0.2, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "Cave2":
                        World.fillRect(0, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                    case "Cave3":
                        World.fillRect(0, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                        break;
                }
                break;

        }
    };

    var backmap;

    function CurrentMap() {
        switch (player.Map) {
            case "Start":
                if (enemies.length < 1) {
                    enemies = [EncounterStart(), EncounterStart(), EncounterStart()];
                }
                PrintMap("Start");
                backmap = new Image;
                backmap.src = "Tiles/Start.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "RoadToCity1":
                if (enemies.length < 1) {
                    enemies = [EncounterPath1(), EncounterPath1(), EncounterPath1()];
                }
                PrintMap("RoadToCity1");
                backmap = new Image;
                backmap.src = "Tiles/RoadToCity.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "Bandit":
                if (enemies.length < 1) {
                    enemies = [EncounterBandit(), EncounterBandit(), EncounterBandit(), EncounterBanditLord()];
                }
                PrintMap("Bandit");
                backmap = new Image;
                backmap.src = "Tiles/Bandit.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "RoadToCity2":
                if (enemies.length < 1) {
                    enemies = [EncounterPath2(), EncounterPath2(), EncounterPath2()];
                }
                Npcs = [];
                PrintMap("RoadToCity2");
                backmap = new Image;
                backmap.src = "Tiles/RoadToCity2.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "City":
                enemies = [];
                if (Npcs.length < 1) {
                    Npcs = [Townhall, Bar, Shop];
                }
                PrintMap("City");
                var backmap = new Image;
                backmap.src = "Tiles/City.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "RoadToHome":
                enemies = [];
                Npcs = [];
                PrintMap("RoadToHome");
                backmap = new Image;
                backmap.src = "Tiles/RoadToHome.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "RoadToWitch":
                enemies = [];
                if (Npcs.length < 1) {
                    Npcs = [Gym, WitchShop];
                }
                PrintMap("RoadToWitch");
                backmap = new Image;
                backmap.src = "Tiles/RoadToWitch.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "RoadToWitch2":
                Npcs = [];
                if (enemies.length < 1) {
                    enemies = [EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2()];
                }
                PrintMap("RoadToWitch2");
                backmap = new Image;
                backmap.src = "Tiles/RoadToWitch2.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "Witch":
                enemies = [];
                if (Npcs.length < 1) {
                    Npcs = [WitchHut];
                }
                PrintMap("Witch");
                backmap = new Image;
                backmap.src = "Tiles/Witchhut.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "Forest":
                if (enemies.length < 1) {
                    enemies = [EncounterForest(), EncounterForest(), EncounterForest()];
                }
                Npcs = [];
                PrintMap("Forest");
                backmap = new Image;
                backmap.src = "Tiles/Forest.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break
            case "Forest2":
                if (enemies.length < 1) {
                    enemies = [EncounterForest2(), EncounterForest2(), EncounterForest2(), EncounterForest2()];
                }
                Npcs = []
                PrintMap("Forest2");
                backmap = new Image;
                backmap.src = "Tiles/Forest2.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "PathToOutlaws":
                if (enemies.length < 1) {

                }
                Npcs = []
                PrintMap("PathToOutlaws");
                backmap = new Image;
                backmap.src = "Tiles/PathToOutlaws.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "PathToOutlaws2":
                if (enemies.length < 1) {

                }
                Npcs = []
                PrintMap("PathToOutlaws2");
                backmap = new Image;
                backmap.src = "Tiles/PathToOutlaws2.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "Outlaws":
                if (enemies.length < 1) {

                }
                if (Npcs.length < 1) {
                    Npcs = [BlackMartket]
                }
                PrintMap("Outlaws");
                backmap = new Image;
                backmap.src = "Tiles/Outlaws.png";
                ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                break;
            case "Cave1":
                PrintDoor("W");
                PrintDoor("E");
                if (enemies.length < 1) {
                    enemies = [EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1()]
                }
                Npcs = []
                PrintMap("Cave1");
                break;
            case "Cave2":
                PrintDoor("S");
                PrintDoor("E");
                if (enemies.length < 1) {
                    enemies = [EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2()]
                }
                Npcs = []
                PrintMap("Cave2");
                break;
            case "Cave3":
                PrintDoor("N");
                if (enemies.length < 1) {
                    enemies = [EncounterCave3(), EncounterCave3(), EncounterCave3()]
                }
                if (Npcs.length < 1) {
                    Npcs = [Tempsson];
                }
                PrintMap("Cave3");
                break;
            case "TempCity":
                if (enemies.length < 1) {

                }
                if (Npcs.length < 1) {
                    Npcs = [Portal];
                }
                break;
        }


    }


    function PaintBackground() {
        ctx.fillStyle = MapColor;
        World.fillStyle = MapColor;
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
    var timer = 0;

    function loop() {
        requestAnimationFrame(loop);
        var d = new Date();
        var n = d.getTime();
        fps.push(n);
        if (fps.length > 1) {
            var Thefps = fps[1] - fps[0];
            fps.pop();
            fps.pop();
            timer++;
            if (timer > 20) {
                document.getElementById("Fps").innerHTML = Math.round(1000 / Thefps) + "fps";
                timer = 0;
            }
        }
        if (a != document.documentElement.clientHeight) {
            HemScale();
            a = document.documentElement.clientHeight
        };

        switch (player.Map) {
            case "Cave1":
            case "Cave2":
            case "Cave3":
            case "TempCity":
                PaintBackground();
                break;
            default:
                break;
        }
        CurrentMap();
        document.getElementById("StatusArea").innerHTML = "Area: " + player.Area + " and Map: " + player.Map;
        if (enemies.length > 0) {
            PrintEnemies();
        };
        if (Npcs.length > 0) {
            PrintNpcs();
        }
        ctx.fillStyle = "BlueViolet";
        ctx.fillRect(sprite.x, sprite.y, grid, grid);

        player.MaxHealth = player.End * 10 + player.Perks.ExtraHealth.Count * 20;
        player.MaxWillHealth = player.Will * 10 + player.Perks.ExtraWillHealth.Count * 20;
        document.getElementById("StatusName").innerHTML = player.Name + " " + player.Lastname;
        document.getElementById("StatusHealth").innerHTML = Math.round(player.Health);
        if (player.Health <= player.MaxHealth) {
            document.getElementById("StatusHealth").style.width = 100 * (player.Health / player.MaxHealth) + "%";
        } else {
            document.getElementById("StatusHealth").style.width = 103 + "%";
        }
        document.getElementById("StatusWillHealth").innerHTML = Math.round(player.WillHealth);
        if (player.WillHealth <= player.MaxWillHealth) {
            document.getElementById("StatusWillHealth").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
        } else {
            document.getElementById("StatusWillHealth").style.width = 103 + "%";
        }
        document.getElementById("StatusLevel").innerHTML = player.level;
        document.getElementById("StatusLevel").style.width = 100 * (player.Exp / MaxExp) + "%";
        document.getElementById("Gold").innerHTML = "Gold: " + Math.round(player.Gold);
        if (player.Fat <= player.Height / 100 && !battle) {
            document.getElementById("Hunger").innerHTML = "You are starving";
        } else {
            document.getElementById("Hunger").innerHTML = null;
        }

        // Live update for Looksmenu
        document.getElementById("StatusMascFemi").innerHTML = "Masculinity: " + Math.round(player.Masc) + "<br> Femininity: " + Math.round(player.Femi);
        document.getElementById("looks2").innerHTML = "You are " + player.Name + " " + player.Lastname + " a " + Math.round(player.Height) + "cm tall " + player.Race + " " + Pronun(CheckGender(player)) +
            ". Looking at yourself in a mirror you see " + player.Haircolor + " hair and a " + player.Skincolor + " skin color.";

        if (player.Pregnant.Babies.length > 0) {
            if (player.Pregnant.Babies[0].BabyAge < 30) {
                document.getElementById("looks2").innerHTML += "<br><br> You are pregnant"

            } else {
                document.getElementById("looks2").innerHTML += "<br><br> You are " + Math.round(player.Pregnant.Babies[0].BabyAge / 30) + " months pregnant."
            }
        }
        document.getElementById("StatusFitness").innerHTML = "Age: " + player.Age + "years old<br>Weight: " + Math.round(player.Weight) + "kg<br>" + "Fat: " + Math.round(player.Fat) + "kg<br>Muscle: " + Math.round(player.Muscle) + "kg<br>" + Fitness(player);
        document.getElementById("genitals2").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
        // End live update Looksmenu

        document.getElementById("EssenceTracker").innerHTML = "Masculinity: " + Math.round(player.Masc) + " and Femininity: " + Math.round(player.Femi);
        document.getElementById("BlackMarketEssence").innerHTML = "Masculinity: " + Math.round(player.Masc) + " and Femininity: " + Math.round(player.Femi);
        if (Settings.EssenceAuto) {
            document.getElementById("SellLimbs").style.display = 'none';
        } else {
            document.getElementById("SellLimbs").style.display = 'inline-block';
        }

        ExpCheck();
        player.Fat = Math.max(0.1, player.Fat);
        player.Muscle = Math.max(1, player.Muscle);
        player.Weight = Math.round(player.Height * 0.15 + player.Fat + player.Muscle);
        player.Health = Math.max(1, player.Health);
        player.WillHealth = Math.max(1, player.WillHealth);

        if (Doors.length < 1) {
            DoorE = new MakeDoor(startarea.width - 2 * grid, startarea.height / 2 - 3 * grid, grid, 5 * grid, "E");
            DoorS = new MakeDoor(startarea.width / 2 - 3 * grid, startarea.height - 2 * grid, grid * 5, grid, "S");
            DoorW = new MakeDoor(0, startarea.height / 2 - 3 * grid, grid, 5 * grid, "W");
            DoorN = new MakeDoor(startarea.width / 2 - 3 * grid, 0, grid * 5, grid, "N");
            Doors = [DoorE, DoorS, DoorN, DoorW];
        }

        if (House.Dormmates.length > 0) {
            player.Gold += 0.001 * House.Dormmates.length;
            for (var esf = 0; House.Dormmates.length > esf; esf++) {
                House.Dormmates[esf].Masc += 0.0001;
                House.Dormmates[esf].Femi += 0.0001;
            }
            if (House.hasOwnProperty("Brothel")) {
                player.Gold += 0.001 * House.Dormmates.length * House.Brothel;
            }
        }
        if (Settings.Vore) {
            document.getElementById("VoreLooks").style.display = 'inline-block';
            VoreEngine();
        }

        HouseEngine();
        FluidsEngine();
        if (TF.Status) {
            TfEngine();
        }
        if (!battle && Settings.EssenceAuto) {
            Laglimiter++;
            if (Laglimiter % 80 == 0) {
                EssenceCheck(player);
            }
        };
    };
    var Laglimiter = 0;

    // Movement buttons
    document.addEventListener('keydown', function (e) {

        if ((e.which === 37 || e.which === 65) && sprite.x > grid + 1 && battle == false) {
            sprite.x -= grid;
            sprite.y += 0;
        } else if ((e.which === 39 || e.which === 68) && sprite.x < (startarea.width - 2 * grid - 1) && battle == false) {
            sprite.x += grid;
            sprite.y += 0;
        }
        if ((e.which === 38 || e.which === 87) && sprite.y > grid + 1 && battle == false) {
            sprite.y -= grid;
            sprite.x += 0;
        } else if ((e.which === 40 || e.which === 83) && sprite.y < (startarea.height - 2 * grid - 1) && battle == false) {
            sprite.y += grid;
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

    startarea.addEventListener('mousedown', function (e) {
        var MapRect = startarea.getBoundingClientRect();
        var cx = e.pageX;
        var cy = e.pageY;
        if (cx - MapRect.left > sprite.x + 1.5 * grid && sprite.x < (startarea.width - 2 * grid) && battle == false) {
            sprite.x += grid;
        } else if (cx - MapRect.left + grid / 2 < sprite.x && sprite.x > grid && battle == false) {
            sprite.x -= grid;
        }
        if (cy - MapRect.top > sprite.y + 1.5 * grid && sprite.y < (startarea.height - 2 * grid) && battle == false) {
            sprite.y += grid;
        } else if (cy - MapRect.top + grid / 2 < sprite.y && sprite.y > grid && battle == false) {
            sprite.y -= grid;
        }

        Touching();
        CheckDoor();
    });