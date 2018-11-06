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
            if (!Settings.VoreSettings.hasOwnProperty("AbsorbEssence")) {
                Settings.VoreSettings.AbsorbEssence = "Both";
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
                player.Inventory.push(ItemDict.blade);
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
        if (!player.hasOwnProperty("SecondRace")) {
            player.SecondRace = "human";
        }
        if (!Flags.Date.hasOwnProperty("Hour")) {
            Flags.Date.Hour = 0;
            console.log("Added hour")
        }
        if (!player.hasOwnProperty("FoodStomach")) {
            player.FoodStomach = [];
            console.log("Added food stomach")
        }
        document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
        if (!player.hasOwnProperty("Face")) {
            player.Face = {
                Eyes: "brown",
                HairStyle: "curly",
                HairColor: player.Haircolor,
                HairLength: "shoulder length "
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
            console.log("Added Settings loglengt");
        }
        if (!Settings.hasOwnProperty("Inch")) {
            Settings.Inch = false;
            console.log("Added Inch")
        }
        if (!Flags.hasOwnProperty("BeatSuccubus")) {
            Flags.BeatSuccubus = false;
            console.log("Added beat succubus");
        }
        for (var e = 0; e < player.Inventory.length; e++) {
            switch (player.Inventory[e].Name) {
                case "Amazon's Girdle":
                    player.Inventory[e].Use = ItemDict.amazonGirdle.Use;
                    break;
                case "Orc cum":
                    player.Inventory[e].Use = ItemDict.orcCum.Use;
                    break;
                case "Fairy dust":
                    player.Inventory[e].Use = ItemDict.fairyDust.Use;
                    break;
                case "Humanity":
                    player.Inventory[e].Use = ItemDict.humanity.Use;
                    break;
                case "Pouch":
                    player.Inventory[e].Use = ItemDict.pouch.Use;
                    break;
                case "Small Pouch":
                    player.Inventory[e].Use = ItemDict.halfPouch.Use;
                    break;
                case "Orc brew":
                    player.Inventory[e].Use = ItemDict.orcBrew.Use;
                    break;
                case "Troll Milk":
                    player.Inventory[e].Use = ItemDict.trollMilk.Use;
                    break;
                case "Elven hair":
                    player.Inventory[e].Use = ItemDict.elvenHair.Use;
                    break;
                case "Milk Jug":
                    player.Inventory[e].Use = ItemDict.milkJug.Use;
                    break;
                case "Fertility idol":
                    player.Inventory[e].Use = ItemDict.fertilityIdol.Use;
                    break;
                case "Cocky rock":
                    player.Inventory[e].Use = ItemDict.cockyRock.Use;
                    break;
                case "Infernal semen":
                    player.Inventory[e].Use = ItemDict.infernalSemen.Use;
                    break;
                case "Infernal milk":
                    player.Inventory[e].Use = ItemDict.infernalMilk.Use;
                    break;
            }
        }
    }