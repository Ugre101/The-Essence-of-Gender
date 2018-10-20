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
        Dicks: [],
        Balls: [],
        Pussies: [],
        Boobies: [
            Boob = {Size: 1, Type: "Human"}
        ],
        Anal: [],
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
        RestRate: 0.01,
        EssenceDrain: 5,
        GiveEssence: 0,
        Map: "Start",
        Area: "First",
        Quests: [],
        Race: "human",
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
            Baby: 0
        },
        Inventory: {}
    };

    // House variable
    var House = {
        Owned: false,
        BedLevel: 0,
        Dorm: 0,
        Kitchen: 0,
        Gym: 0,
        Dormmates: []
    };

    // Flag variables
    var Flags = {
        BanditLord: false,
        Impregnations: 0,
        Pregnations: 0
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
        ImgPack: false
    }

    // Start värden för canvas
    var medium = Math.ceil((document.documentElement.clientHeight/20)*0.8) * 20;
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    startarea.width = medium;
    startarea.height = medium;
    var MapColor = "Gray";
    var grid = (medium/20);
    var sprite = {
        x: grid,
        y: grid,
        karta: "Start"  
    };

    document.getElementById("VoreLooks").style.display = 'none';

    // Startsidan
    document.getElementById("GoToCharCreator").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'Block';
        document.getElementById("StartPage").style.display = 'none';
    });

    document.getElementById("LoadButton").addEventListener("click", function() {
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
    document.getElementById("StartLoad").addEventListener("click", function() {
        document.getElementById("LoadMenu").style.display = 'none';
        document.getElementById("StartPage").style.display = 'block';
    })
    function Loader(Load) {
        battle = false;
        document.getElementById("StartPage").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("LoadMenu").style.display = 'none';
        var LoadArray = JSON.parse(localStorage.getItem(Load));
        player = LoadArray[0];
        House = LoadArray[1];
        Flags = LoadArray[2];
        Settings = LoadArray[3];
        CheckFlags();            
        requestAnimationFrame(loop);
        return;   
    }
    document.getElementById("LoadPlayer1").addEventListener("click", function() {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer1') === null) {
            return;
        }
        else {
            Loader('SavedPlayer1');
        }
        return;
    });
    document.getElementById("LoadPlayer2").addEventListener("click", function() {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer2') === null) {
            return;
        }
        else {
            Loader('SavedPlayer2');
        }
        return;
    });
    document.getElementById("LoadPlayer3").addEventListener("click", function() {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer3') === null) {
            return;
        }
        else {
            Loader('SavedPlayer3');
        }
        return;
    });
    document.getElementById("LoadPlayer4").addEventListener("click", function() {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer4') === null) {
            return;
        }
        else {
            Loader('SavedPlayer4');
        }
        return;
    });
    document.getElementById("LoadPlayer5").addEventListener("click", function() {
        enemies = [];
        Npcs = [];
        if (localStorage.getItem('SavedPlayer5') === null) {
            return;
        }
        else {
            Loader('SavedPlayer5');
        }
        return;
    });
    document.getElementById("LoadFile").addEventListener("input", function() {
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

    function CheckFlags() {
        // Flags
        if (Flags.BanditLord && !House.Owned){document.getElementById("BuyHouse").style.display = 'inline-block'}
        else {document.getElementById("BuyHouse").style.display = 'none'};

        if (House.Dorm > 0) {document.getElementById("Dorm").style.display = "inline-block";}
        else {document.getElementById("Dorm").style.display = "none"}

        // Settings
        document.body.style.backgroundColor = Settings.BackColor;
        MapColor = Settings.MapColor
        document.body.style.color = Settings.TextColor
        document.body.style.fontFamily = Settings.TextFont

        document.getElementById("backcolor").value = Settings.BackColor;
        document.getElementById("MapColor").value = Settings.MapColor;
        document.getElementById("textcolor").value = Settings.TextColor;
        document.getElementById("textfont").value = Settings.TextFont;
        
        if (Settings.Vore){
            if (!Settings.hasOwnProperty("VoreSettings")) {
                Settings.VoreSettings = {
                    StomachDigestion: true,
                    CumTF: true
                }
            }
        }
        if (!player.Balls[0].hasOwnProperty("Cum")) {
            for (var e = 0; e < player.Balls.length; e++) {
                player.Balls[e] = {
                    CumMax: Math.round(player.Masc/70),
                    Cum: 0,
                    CumRate: 0.01
                }
            } 
        }
    }


    document.getElementById("BackHome").addEventListener("click", function () {
        document.getElementById("CharCreator").style.display = 'none';
        document.getElementById("StartPage").style.display = 'block';
    });
    //slu på start sida



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
        CheckFlags();
    });

    // Ge karaktär start värden
    document.getElementById("Begin").addEventListener("click", function () {
    document.getElementById("startgame").style.display = 'block';
    document.getElementById("looks").innerHTML = "You are " + player.Name + " " + player.Lastname + " a " + Math.round(player.Height) + "cm tall " + CheckGender(player.Masc, player.Femi)
    + ", weighs " + player.Weight + "kg. Looking at yourself in a mirror you see " + player.Haircolor + " hair and a " + player.Skincolor + " skin color.";

    requestAnimationFrame(loop);

    });

    function DickLook(who){
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
        }
        else {
            return "";
        }
    }
    function BallLook(who){
        if (who.Balls.length > 0) {
            var balls = "";
            for (var b = 0; b < who.Balls.length; b++) {
                balls += "A pair of " + who.Balls[b].Size + "cm in diameter balls, ";
                var cum = "which filled to " + Math.round(who.Balls[b].Cum/who.Balls[b].CumMax)  + "% with cum.<br>"
            }
            return balls + cum;
        }
        else {
            return "";
        }
    }
    function PussyLook(who){
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
        }
        else {
            return "";
        }
    }
    function BoobLook(who){
        if (who.Boobies.length > 0) {
            var boobies = "";
            for (var b = 0; b < who.Boobies.length; b++) {
                boobies += BoobSizeConvertor(who.Boobies[b].Size) + " chest. <br>";
            }
            return boobies;
        }
        else {
            return "";
        }
    }
    function AnalLook(who) {

    }
    function BoobSizeConvertor(Size) {
        if (Size == 0) {
            return "flat";
        }
        else if (Size == 1) {
            return "AA size";
        }
        else if (Size == 2) {
            return "A size";
        }
        else if (Size == 3) {
            return "B size";
        }
        else if (Size == 4) {
            return "C size";
        }
        else if (Size == 5) {
            return "D size";
        }
        else if (Size == 6) {
            return "DD size"
        }
        else if (Size == 7) {
            return "F size"
        }
        else if (Size == 8) {
            return "G size"
        }
        else if (Size == 9) {
            return "H size"
        }
        else if (Size == 10) {
            return "I size"
        }
        else if (Size == 11) {
            return "J size"
        }
        else {
            return "Huge"
        }
    }
    function PussySizeConvetor(Size) {
        if (Size <= 1) {
            return "extremely tight";
        } 
        else if (Size >= 2 && Size < 4) {
            return "very tight";
        }
        else if (Size >= 4 && Size < 6) {
            return "tight";
        }
        else if (Size >= 6 && Size < 8) {
            return "tight";
        }
        else if (Size >= 8 && Size < 10) {
            return "tight";
        }
        else {
            return "loose";
        }
    }
    function Fitness(who) {
        var a,b;
        if ((who.Fat/who.Weight)*100 <= 5) {
            a = "You have a anoretix body ";
        }
        else if ((who.Fat/who.Weight)*100 <= 13) {
            a = "You have a athletic body ";
        }
        else if ((who.Fat/who.Weight)*100 <= 17) {
            a = "You have a fit body ";
        }
        else if ((who.Fat/who.Weight)*100 <= 25) {
            a = "You have a healthy body ";
        }
        else if ((who.Fat/who.Weight)*100 <= 30) {
            a = "You have a slighty obese body ";
        }
        else if ((who.Fat/who.Weight)*100 <= 35) {
            a = "You have a obese body ";
        }
        else {
            a = "You have a morbidly obese body ";
        }

        if ((who.Muscle/(who.Height-100))*100 <= 35) {
            b = "with weak looking muscle.";
        }
        else if ((who.Muscle/(who.Height-100))*100 <= 41) {
            b = "with average looking muscle.";
        }
        else if ((who.Muscle/(who.Height-100))*100 <= 46) {
            b = "with strong looking muscle.";
        }
        else {
            b = "with huge amount of muscle.";
        }

        return a + b;
    }



    document.getElementById("startgame").addEventListener("click", function () {
        document.getElementById("page2").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
    });

    function DisplayNone(){
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
    }

    document.getElementById("Options").addEventListener("click", function (){
        DisplayNone();
        document.getElementById("optionpage").style.display = 'block';
        document.getElementById("ImgPack").value = "Img pack: " + Settings.ImgPack;
    });
    var FontSize = 1;
    document.getElementById("FontSmaller").addEventListener("click", function() {
        FontSize -= 0.05;
        document.body.style.fontSize = FontSize + "em";
    });
    document.getElementById("FontBigger").addEventListener("click", function() {
        FontSize += 0.05;
        document.body.style.fontSize = FontSize + "em";
    });
    var OldMap;
    var MapProcent = 0.9;
    function HemScale() {
        OldMap = medium;
        medium = Math.ceil((document.documentElement.clientHeight*MapProcent)/20) * 20;
        startarea.width = medium;
        startarea.height = medium;
        var NewMap = medium;
        grid = (startarea.height / 20);
        sprite.x = sprite.x * NewMap/OldMap;
        sprite.y = sprite.y * NewMap/OldMap;
        for (var j = 0; j < enemies.length; j++){
            enemies[j].Size = enemies[j].Size * (NewMap/OldMap);
            enemies[j].XPos = enemies[j].XPos * (NewMap/OldMap);
            enemies[j].YPos = enemies[j].YPos * (NewMap/OldMap);
        }

        DoorE = new MakeDoor(startarea.width-2*grid, startarea.height/2-3*grid, grid, 5*grid, "E");
        DoorS = new MakeDoor(startarea.width/2-3*grid, startarea.height-2*grid, grid*5, grid, "S");
        DoorW = new MakeDoor(0, startarea.height/2-3*grid, grid, 5*grid, "W");
        DoorN = new MakeDoor(startarea.width/2-3*grid, 0, grid*5, grid, "N");
        Doors = [DoorE, DoorS, DoorN, DoorW];
        Npcs = [];
        Townhall = new Npc("Townhall", startarea.width/2-4*grid, grid/2, grid*8, grid*5.5, "RGB(133,94,66)");
        Shop = new Npc("Shop", grid/2, startarea.height-grid*6, grid*5.5, grid*5.5, "RGB(133,94,66)");
        Bar = new Npc("Bar", startarea.width-6*grid, startarea.height-6*grid, grid*5.5 , grid*5.5, "RGB(133,94,66)")
        Gym = new Npc("Gym", grid/2, grid*5, grid*4.5, grid*10 ,"RGB(133,94,66)");
        WitchShop = new Npc("WitchShop", grid*15, grid*5, grid*4.5, grid*10, "RGB(133,94,66)");
        return;
    }
    document.getElementById("ImgPack").addEventListener("click", function() {
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
                Settings.ImgPack = false;
                break;
        }

        document.getElementById("ImgPack").value = "Img pack: " + Settings.ImgPack;
    });
    document.getElementById("saveoptions").addEventListener("click", function (){
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
    document.getElementById("PerkOptions").addEventListener("click", function (){
        DisplayNone();
        document.getElementById("PerkOptionsMenu").style.display = 'block';
        document.getElementById("Skip").value = "Skip " + Settings.Skip;
        document.getElementById("OptionGiveEssence").value = Settings.GiveEssence;
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
    });
    document.getElementById("Skip").addEventListener("click", function() {
        Settings.Skip = !Settings.Skip;
        document.getElementById("Skip").value = "Skip " + Settings.Skip;
    });
    document.getElementById("OptionGiveEssence").addEventListener("click", function() {
        if (Settings.GiveEssence == "Both") {
            Settings.GiveEssence = "Femininity";
        }
        else if (Settings.GiveEssence == "Femininity") {
            Settings.GiveEssence = "Masculinity";
        }
        else if (Settings.GiveEssence == "Masculinity") {
            Settings.GiveEssence = "None";
        }
        else {
            Settings.GiveEssence = "Both";
        }
        document.getElementById("OptionGiveEssence").value = Settings.GiveEssence;
    });
    document.getElementById("Vore").addEventListener("click", function() {
        Settings.Vore = !Settings.Vore;
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
        if (!Settings.Vore){
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
        if (!Settings.hasOwnProperty("VoreSettings")){
            Settings.VoreSettings = {
                StomachDigestion: true,
                CumTF: true
            }
        }
    });
    document.getElementById("PerkOptionsLeave").addEventListener("click", function (){
        battle = false;
        document.getElementById("PerkOptionsMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block'
    });
    document.getElementById("Looks").addEventListener("click", function () {
        DisplayNone();
        EssenceCheck(player);
        document.getElementById("ShowLooks").style.display = 'block';

        document.getElementById("looks2").innerHTML = "You are " + player.Name + " " + player.Lastname + " a " + Math.round(player.Height) + "cm tall " + CheckGender(player.Masc, player.Femi) 
        + ", weighs " + Math.round(player.Weight) + "kg. Looking at yourself in a mirror you see " + player.Haircolor + " hair and a " + player.Skincolor + " skin color.";

        document.getElementById("StatusFitness").innerHTML = "Fat: " + Math.round(player.Fat) + "kg<br>Muscle: " + Math.round(player.Muscle) + "kg<br>" + Fitness(player);
        document.getElementById("genitals2").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
    });

    document.getElementById("CloseLooks").addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("ShowLooks").style.display = 'none';
    });
    document.getElementById("ExtraInfo").addEventListener("click", function() {
        DisplayNone();
        document.getElementById("DetailedInfo").style.display = 'block';
        document.getElementById("Pregnancy").innerHTML = "Times you have impregnated: " + Flags.Impregnations + "<br> Times you have been pregnant: " + Flags.Pregnations;
        document.getElementById("ExtraStats").innerHTML = "Virility: " + player.Virility + "<br>Fertility: " + player.Fertility + "<br>Essence drain: " + player.EssenceDrain
        + "<br>Give essence: " + player.GiveEssence + "<br> passive rest rate: " + player.RestRate;
    });
    document.getElementById("CloseExtra").addEventListener("click", function() {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("DetailedInfo").style.display = 'none';
    });

    document.getElementById("Quests").addEventListener("click", function() {
        DisplayNone();
        document.getElementById("ShowQuests").style.display = 'block';

        var questText = " ";
        for (var e = 0; e < player.Quests.length; e++) {
            questText += "<div><h4>" + player.Quests[e].Name + "</h4>" + "Completed: " + player.Quests[e].Completed + " <br>Count: "+
            player.Quests[e].Count + "<br><br></div>";
        }
        document.getElementById("QuestTexts").innerHTML = questText;
    });
    document.getElementById("QuestsLeave").addEventListener("click", function() {
        battle = false;
        document.getElementById("ShowQuests").style.display = 'none';
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
    document.getElementById("SaveLeave").addEventListener("click", function(){
        battle = false;
        document.getElementById("SaveMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    })
    document.getElementById("SavePlayer1").addEventListener("click", function() {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer1', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate1', Date());
        document.getElementById("SavePlayer1").value = Date();
        document.getElementById("LoadPlayer1").value = Date();
    });
    document.getElementById("SavePlayer2").addEventListener("click", function() {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer2', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate2', Date());
        document.getElementById("SavePlayer2").value = Date();
        document.getElementById("LoadPlayer2").value = Date();
    });
    document.getElementById("SavePlayer3").addEventListener("click", function() {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer3', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate3', Date());
        document.getElementById("SavePlayer3").value = Date();
        document.getElementById("LoadPlayer3").value = Date();
    });
    document.getElementById("SavePlayer4").addEventListener("click", function() {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer4', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate4', Date());
        document.getElementById("SavePlayer4").value = Date();
        document.getElementById("LoadPlayer4").value = Date();
    });
    document.getElementById("SavePlayer5").addEventListener("click", function() {
        var SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer5', JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate5', Date());
        document.getElementById("SavePlayer5").value = Date();
        document.getElementById("LoadPlayer5").value = Date();
    });
    document.getElementById("SaveText").addEventListener("click", function() {
        var SaveArray = [player, House, Flags, Settings];
        var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
        newWindow = window.open(uriContent, 'neuesDokument');
    });

    document.getElementById("Load").addEventListener("click", function() {
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
    document.getElementById("LoadLeave").addEventListener("click", function() {
        battle = false;
        document.getElementById("LoadMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    })

    function RandomInt(min, max) {
        return Math.floor(Math.random()*(max - min)) + min;
    }
    function RandomString(array) {
        return array[Math.floor(Math.random()*array.length)];
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
    var RacesWitch = ["Human", "Elf","Dark elf"]


    var battle = false;
    var FirstRound = true;
    
    function CheckGender (Masc, Femi) {
        var gender;
        var masc = Masc;
        var femi = Femi;
        if (masc >= 30 && femi >= 30) {
            gender = "hermaphrodite";
        }
        else if (masc >= 30 && femi < 30) {
            gender = "male";
        }
        else if (masc < 30 && femi >= 30) {
            gender = "female";
        }
        else {
            gender = "doll"
        }
        return gender;
    }
    // Level System
    var MaxExp = 30 * Math.pow(1.05, player.level-1);
    function ExpCheck() {
        MaxExp = 30 * Math.pow(1.05, player.level-1);
        if (player.SkillPoints > 0 || player.PerkPoints > 0) {
            document.getElementById("LevelButton").style.display = 'inline-block';
        }
        else {
            document.getElementById("LevelButton").style.display = 'none';
        }
        if (player.Exp >= MaxExp) {
            player.Exp = player.Exp-MaxExp;
            player.level++;
            player.SkillPoints += 3;
            player.PerkPoints += 1;
            return;
        }
    }
    // Level Menu
    document.getElementById("LevelButton").addEventListener("click", function() {
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
    document.getElementById("GainStr").addEventListener("click", function(){
        if (player.SkillPoints > 0){
            player.Str++;
            player.SkillPoints--;
            document.getElementById("GainStr").value = "Strength: " + player.Str;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        }
        else {
            return;
        }
    });
    document.getElementById("GainCha").addEventListener("click", function(){
        if (player.SkillPoints > 0){
            player.Charm++;
            player.SkillPoints--;
            document.getElementById("GainCha").value = "Charm: " + player.Charm;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        }
        else {
            return;
        }
    });
    document.getElementById("GainEnd").addEventListener("click", function(){
        if (player.SkillPoints > 0){
            player.End++;
            player.SkillPoints--;
            player.MaxHealth += 5;
            document.getElementById("GainEnd").value = "Endurance: " + player.End;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        }
        else {
            return;
        }
    });
    document.getElementById("GainInt").addEventListener("click", function(){
        if (player.SkillPoints > 0){
            player.Int++;
            player.SkillPoints--;
            document.getElementById("GainInt").value = "Intelegence: " + player.Int;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        }
        else {
            return;
        }
    });
    document.getElementById("GainWill").addEventListener("click", function(){
        if (player.SkillPoints > 0){
            player.Will++;
            player.MaxWillHealth += 5;
            player.SkillPoints--;
            document.getElementById("GainWill").value = "Willpower: " + player.Will;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        }
        else {
            return;
        }
    });
    document.getElementById("GainSex").addEventListener("click", function(){
        if (player.SkillPoints > 0){
            player.SexSkill++;
            player.SkillPoints--;
            document.getElementById("GainSex").value = "Sex Skill: " + player.SexSkill;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        }
        else {
            return;
        } 
    }); 
    // level menu return
    document.getElementById("No").addEventListener("click", function(){
        battle = false;
        document.getElementById("LevelMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    });

    function StringCounter(array, string){
        var counts = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === string) {
                    counts++;
                }
            }
        return counts;
    }

    document.getElementById("PerkMenu").addEventListener("click", function() {
        document.getElementById("LevelMenu").style.display = 'none';
        document.getElementById("PerksMenu").style.display = 'block';
        document.getElementById("PerkPointsLeft").innerHTML = "You have " + player.PerkPoints + " perk points left.";
        if (player.Perks.ExtraHealth.Count > 0){document.getElementById("ExtraHealth").value = "ExtraHealth +" + player.Perks.ExtraHealth.Count;}
        if (player.Perks.ExtraWillHealth.Count > 0){document.getElementById("ExtraWillHealth").value = "ExtraWillHealth +" + player.Perks.ExtraWillHealth.Count;}
        if (player.Perks.FasterRest.Count > 0){document.getElementById("FasterRest").value = "Faster Rest +" + player.Perks.FasterRest.Count;}
        if (player.Perks.StealMore.Count > 0) {document.getElementById("StealMore").value = "More essence +" + player.Perks.StealMore.Count;}
        if (player.Perks.GiveEssence.Count > 0){document.getElementById("GiveEssence").value = "Give essence +" + player.Perks.GiveEssence.Count;}
    });
    document.getElementById("LeavePerkMenu").addEventListener("click", function() {
        document.getElementById("PerksMenu").style.display = 'none';
        document.getElementById("LevelMenu").style.display = 'block';
    });
    function PerkHandler(perket) {
        player.PerkPoints--;
        player.Perks[perket].Count++
        document.getElementById(perket).value = perket + " +" + player.Perks[perket].Count;
        document.getElementById("PerkPointsLeft").innerHTML = "You have " + player.PerkPoints + " perk points left.";        
    }
    document.getElementById("ExtraHealth").addEventListener("click", function() {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraHealth");
        }
        else {
            return;
        }
    });
    document.getElementById("ExtraWillHealth").addEventListener("click", function() {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraWillHealth");
        }
        else {
            return;
        }
    });
    document.getElementById("FasterRest").addEventListener("click", function() {
        if (player.PerkPoints > 0) {
            PerkHandler("FasterRest");
            player.RestRate = 0.01 + player.Perks.FasterRest.Count*0.01;
        }
        else {
            return;
        }
    });
    document.getElementById("StealMore").addEventListener("click", function() {
        if (player.PerkPoints > 0) {
            PerkHandler("StealMore");
            player.EssenceDrain = 5 + player.Perks.StealMore.Count*3;
        }
        else {
            return;
        }
    });
    document.getElementById("GiveEssence").addEventListener("click", function() {
        if (player.PerkPoints > 0) {
            PerkHandler("GiveEssence");
            player.GiveEssence = player.Perks.GiveEssence.Count*3;
        }
        else  {
            return;
        }
    });
 

    // function to update player & enemy stats, check if you won or lose and deal damage to player
    function UpdateStats() {
        document.getElementById("status").style.display = 'none';
        document.getElementById("buttons").style.display = 'none';
        document.getElementById("BattleEnemy").innerHTML = enemies[EnemyIndex].Name + "<br>" + enemies[EnemyIndex].Race + " " + CheckGender(enemies[EnemyIndex].Masc, enemies[EnemyIndex].Femi);
        document.getElementById("EnemyStatusHealth").innerHTML = enemies[EnemyIndex].Health;
        document.getElementById("EnemyStatusHealth").style.width = 100 * (enemies[EnemyIndex].Health / enemies[EnemyIndex].FullHealth) + "%";
        document.getElementById("EnemyStatusWillHealth").innerHTML = enemies[EnemyIndex].WillHealth;
        document.getElementById("EnemyStatusWillHealth").style.width = 100 * (enemies[EnemyIndex].WillHealth / enemies[EnemyIndex].FullWillHealth) + "%";
        document.getElementById("StatusName2").innerHTML = player.Name + " " + player.Lastname;

        document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
        if (player.Health <= player.MaxHealth) {
            document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
        }
        else {
            document.getElementById("StatusHealth2").style.width = 103 + "%";
        }
        document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
        if (player.WillHealth <= player.MaxWillHealth) {
            document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
        }
        else {
            document.getElementById("StatusWillHealth2").style.width = 103 + "%";
        }
    
        if (enemies[EnemyIndex].Health <= 0) {
            WinBattle();
            return;
        }
        else if (enemies[EnemyIndex].WillHealth <= 0) {
            WinBattle();
            return;
        }
        else if (player.Health <= 0) {
            Lose();
            player.Health = 0;
            return;
        }
        else if (player.WillHealth <= 0) {
            Lose();
            player.WillHealth = 0;
            return;
        }
        else if (!FirstRound) {
            EnemyAttack();
            return;
        }
        else {
            FirstRound = false;
            return;
        }
    }
    var Winner = false;
    function Lose() {
        Winner = false;
        document.getElementById("LosePName").innerHTML = player.Name + " " + player.Lastname;
        document.getElementById("LoseEName").innerHTML = enemies[EnemyIndex].Name + "<br>" + enemies[EnemyIndex].Race + " " + CheckGender(enemies[EnemyIndex].Masc, enemies[EnemyIndex].Femi);
        document.getElementById("LoseMascu").innerHTML = player.Masc;
        document.getElementById("LoseFemin").innerHTML = player.Femi;
        document.getElementById("LoseEMascu").innerHTML = enemies[EnemyIndex].Masc;
        document.getElementById("LoseEFemin").innerHTML = enemies[EnemyIndex].Femi;
        var DelatMed = 2;
        if (player.Masc >= enemies[EnemyIndex].Masc && player.Masc >= enemies[EnemyIndex].Femi && player.Masc >= player.Femi) {
            DelatMed = 100/player.Masc;
        }
        else if (player.Femi >= enemies[EnemyIndex].Masc && player.Femi >= enemies[EnemyIndex].Femi && player.Femi >= player.Masc){
            DelatMed = 100/player.Femi;
        }
        else if (enemies[EnemyIndex].Masc >= player.Masc && enemies[EnemyIndex].Masc >= enemies[EnemyIndex].Femi && enemies[EnemyIndex].Masc >= player.Femi) {
            DelatMed = 100/enemies[EnemyIndex].Masc;
        }
        else {
            DelatMed = 100/enemies[EnemyIndex].Femi;
        }

        document.getElementById("LoseMascu").style.width = player.Masc*DelatMed + "%";
        document.getElementById("LoseFemin").style.width = player.Femi*DelatMed + "%";
        document.getElementById("LoseEMascu").style.width = enemies[EnemyIndex].Masc*DelatMed + "%";
        document.getElementById("LoseEFemin").style.width = enemies[EnemyIndex].Femi*DelatMed + "%";

        document.getElementById("Encounter").style.display = 'none';
        document.getElementById("Lose").style.display = 'grid';
        document.getElementById("LeaveLose").style.display = 'none';
        document.getElementById("LoseSexText").innerHTML = "You lost to a " + CheckGender(enemies[EnemyIndex].Masc, enemies[EnemyIndex].Femi) + " " + enemies[EnemyIndex].Race + " " + enemies[EnemyIndex].Name;
        return;
    }
    document.getElementById("LoseSubmit").addEventListener("click", function() {
        document.getElementById("LoseSexText").innerHTML = "You submit";
        var a  = RandomInt(1,5);
        var take = Math.round(enemies[EnemyIndex].SexSkill);
        switch (a) {
            case 1:
            case 4:
                if ((player.Masc - take) <= 0 ) {
                    player.Masc = 0;
                }
                else {
                player.Masc -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " maculinity.";
                break;
            case 2:
            case 5:
                if ((player.Femi - take) <= 0 ) {
                    player.Femi = 0;
                }
                else {
                player.Femi -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " femininity.";
                break;
            default:
            case 3:
                if ((player.Femi - take/2) <= 0 ) {
                    player.Femi = 0;
                }
                else {
                player.Femi -= Math.round(take/2);
                }
                if ((player.Masc - take) <= 0 ) {
                    player.Masc = 0;
                }
                else {
                    player.Masc -= Math.round(take/2);
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take/2 + " femininity and maculinity.";
                }
                break;
        }
        switch (CheckGender(enemies[EnemyIndex].Masc, enemies[EnemyIndex].Femi)) {
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
    document.getElementById("LoseStruggle").addEventListener("click", function() {
        document.getElementById("LoseSexText").innerHTML = "You struggle";
        var a  = RandomInt(1,5);
        var take = Math.round((RandomInt(1,4)*enemies[EnemyIndex].SexSkill)/3);
        switch (a) {
            case 1:
            case 4:
                if ((player.Masc - take) <= 0 ) {
                    player.Masc = 0;
                }
                else {
                player.Masc -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " maculinity.";
                break;
            case 2:
            case 5:
                if ((player.Femi - take) <= 0 ) {
                    player.Femi = 0;
                }
                else {
                player.Femi -= take;
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take + " femininity.";
                break;
            default:
            case 3:
                if ((player.Femi - take/2) <= 0 ) {
                    player.Femi = 0;
                }
                else {
                    player.Femi -= Math.round(take/2);
                }
                if ((player.Masc - take) <= 0 ) {
                    player.Masc = 0;
                }
                else {
                    player.Masc -= Math.round(take/2);
                }
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fuckt you until you had a orgasm, allowing them to siphon " + take/2 + " femininity and maculinity.";
                break;
        }
        switch (CheckGender(enemies[EnemyIndex].Masc, enemies[EnemyIndex].Femi)) {
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
    document.getElementById("LeaveLose").addEventListener("click", function() {
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
            var EAttack = (RandomInt(1,5) * enemies[EnemyIndex].Str)/2;
            player.Health -= EAttack;
            document.getElementById("BattleText2").innerHTML = "Your opponent hits you for " + EAttack + " dmg.";
            document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
            if (player.Health <= player.MaxHealth) {
                document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
            }
            else {
                document.getElementById("StatusHealth2").style.width = 103 + "%";
            }
            document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
            if (player.WillHealth <= player.MaxWillHealth) {
                document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
            }
            else {
                document.getElementById("StatusWillHealth2").style.width = 103 + "%";
            }
            if (player.Health <= EAttack) {
                UpdateStats();
                return;
            }
            return;
        }
        else if (enemies[EnemyIndex].Str < enemies[EnemyIndex].Charm) {
            var EAttack = (RandomInt(1,5) * enemies[EnemyIndex].Charm)/2;
            player.WillHealth -= EAttack;
            document.getElementById("BattleText2").innerHTML = "Your opponent tease you for " + EAttack + " will dmg.";
            document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
            if (player.Health <= player.MaxHealth) {
                document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
            }
            else {
                document.getElementById("StatusHealth2").style.width = 103 + "%";
            }
            document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
            if (player.WillHealth <= player.MaxWillHealth) {
                document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
            }
            else {
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
                who.Height = who.Height/2;
                who.Weight = who.Weight/2;
                who.Size = who.Size*0.8;
                break;
            case "Orc":
                who.Str += 1;
                break;
            case "Fairy":
                who.Height = who.Height/9;
                who.Weight = who.Weight/9;
                who.Size = who.Size*0.4;
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
            }
        return who;
    }

    // Encounter function
    function EncounterStart() {
        var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(0, 100), RandomInt(0, 100), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),  
        RandomInt(2,5), RandomInt(6, 9), 0, 0, 70, 70, 70, 70, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(15,20), RandomInt(5,15), 'green', grid, RandomInt(50,70),RandomInt(140,180),RandomInt(10,30), RandomInt(20,40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);


        return OP;
    }
    function EncounterPath1() {
        var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(0, 120), RandomInt(0, 120), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6),  
        RandomInt(3,6), RandomInt(7, 10), 0, 0, 80, 80, 80, 80, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(20,25), RandomInt(8,18), 'green', grid, RandomInt(50,70),RandomInt(140,180),RandomInt(10,30), RandomInt(20,40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        return OP;
    }
    function EncounterPath2() {
        var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(0, 130), RandomInt(0, 130), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7),  
        RandomInt(4,7), RandomInt(8, 12), 0, 0, 100, 100, 100, 100, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(23,30), RandomInt(12,25), 'green', grid, RandomInt(50,70),RandomInt(140,180),RandomInt(10,30), RandomInt(20,40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        return OP;
    }
    function EncounterBandit() {
        var OP = new enemy("Bandit", RandomString(RacesBandit), RandomInt(50, 200), RandomInt(0, 100), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15),  
        RandomInt(8,15), RandomInt(10, 20), 0, 0, 170, 170, 170, 170, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(30,45), RandomInt(30,55), 'tomato ', grid, RandomInt(50,70),RandomInt(140,180),RandomInt(10,30), RandomInt(20,40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        return OP;
    }
    function EncounterBanditLord() {
        var OP = new enemy("Banditlord", RandomString(RacesBandit), RandomInt(50,500), RandomInt(0,0), RandomInt(20,35), RandomInt(10,15), RandomInt(20,35), RandomInt(20,35),
        RandomInt(20,35), RandomInt(40,60), 0, 0, 350, 350, 300, 300, startarea.width/2 - grid, grid,
        RandomInt(55,85), RandomInt(75,150), 'tomato', 1.5*grid, RandomInt(70,90),RandomInt(160,200),RandomInt(20,40), RandomInt(30,50));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        return OP;
    }
    function EncounterForest() {
        var OP = new enemy("Forest", RandomString(RacesForest), RandomInt(0,100), RandomInt(50,300), RandomInt(6,13), RandomInt(6,13), RandomInt(6,13), RandomInt(6,13),
        RandomInt(6,13), RandomInt(8,18), 0, 0, 150, 150, 150, 150, RandomInt(2,18) * grid, RandomInt(2,18)  * grid, 
        RandomInt(25,40), RandomInt(25,45), 'darkgreen', grid, RandomInt(50,70),RandomInt(140,180),RandomInt(10,30), RandomInt(20,40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        return OP;
    }
    function EncounterForest2() {
        var OP = new enemy("Forest", RandomString(RacesForest2), RandomInt(0,100), RandomInt(50,300), RandomInt(6,13), RandomInt(6,13), RandomInt(6,13), RandomInt(6,13),
        RandomInt(6,13), RandomInt(8,18), 0, 0, 150, 150, 150, 150, RandomInt(2,18) * grid, RandomInt(2,18)  * grid, 
        RandomInt(25,40), RandomInt(25,45), 'darkgreen', grid, RandomInt(50,70),RandomInt(140,180),RandomInt(10,30), RandomInt(20,40));
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        return OP;
    }
    function EncounterPathToWitch2() {
        var OP = new enemy("Witch", RandomString(RacesWitch), RandomInt(0,300), RandomInt(0,300), RandomInt(1,5), RandomInt(3,7), RandomInt(7,16), RandomInt(10,40),
        RandomInt(30,70), RandomInt(20,80), 0, 0 ,150, 150, 300, 300, RandomInt(2,18)*grid, RandomInt(2,18)*grid,
        RandomInt(30,60), RandomInt(30,70), 'IndianRed', grid, RandomInt(50,60), RandomInt(140,170), RandomInt(5,15), RandomInt(25,40))
        switch (CheckGender(OP.Masc, OP.Femi)) {
            case "male":
            case "doll":
                OP.Name = "Wizard"
                break;
            default:
                OP.Name = "Witch"
                break;
        }
        EssenceCheck(OP);
        if (OP.Pussies.length > 0) {
            var a = RandomInt (1,5);
            if (a < 5) {
                OP.Pussies[0].Virgin = false;
            }
        }
        if (OP.Dicks.length > 0) {
            var b = RandomInt(1,5);
            if (b < 5) {
                OP.Dicks[0].Virgin = false;
            }
        }
        RaceBonus(OP);
        return OP;      
    }

    var enemies = [];

    // Battle attack buttons
    document.getElementById("Hit").addEventListener("click", function () {
        var PAttack = (RandomInt(1,5) * player.Str)/2;
        enemies[EnemyIndex].Health -= PAttack;
        document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " dmg.";
        UpdateStats();
        return;
    });
    document.getElementById("Tease").addEventListener("click", function() {
        var PAttack = (RandomInt(1,5) * player.Charm)/2;
        enemies[EnemyIndex].WillHealth -= PAttack;
        document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " will dmg."
        UpdateStats();
        return;
    });
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
        for (var i = 0; i<player.Quests.length; i++) {
            if(player.Quests[i].Name == "ElfHunt" && !player.Quests[i].Completed) {
                if (enemies[EnemyIndex].Race == "Elf") {
                    player.Quests[i].Count++;
                    if (player.Quests[i].Count >= 3) {
                        player.Quests[i].Completed = true;
                    }
                }
            }
            if(player.Quests[i].Name == "BanditLord" && !player.Quests[i].Completed) {
                if (enemies[EnemyIndex].Name == "Banditlord") {
                    player.Quests[i].Completed = true;
                }
            }
        }
        if (Settings.Skip) {
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("status").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
        }
        else {
            document.getElementById("SexText").innerHTML = " ";
            document.getElementById("AfterBattle").style.display = 'grid';
            document.getElementById("SexButtons").style.display = 'grid';
            if (Settings.ImgPack) {
                document.getElementById("AfterBattle").classList.remove("AfterBattle");
                document.getElementById("AfterBattle").classList.add("AfterBattleImg");
                document.getElementById("MyImg").style.display = 'block';

            }
            else{
                document.getElementById("AfterBattle").classList.add("AfterBattle");
                document.getElementById("AfterBattle").classList.remove("AfterBattleImg");
                document.getElementById("MyImg").style.display = 'none';
            }
            CheckArousal();
            AfterBattleButtons();
        }
        return;
    }

    var LastPressed;
    // Mouth
    document.getElementById("GiveBlowjob").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"GiveBlowjob",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack/2
        player.Arousal += ESexAttack/3;
        if (LastPressed == "GiveBlowjob"){
            document.getElementById("SexText").innerHTML =  "You suck your opponents " + enemies[EnemyIndex].Dicks[0].Type + " " + enemies[EnemyIndex].Dicks[0].Size + "cm dick.";
        }
        else {
            document.getElementById("SexText").innerHTML = "You go down on your knees you and suck your opponents " + enemies[EnemyIndex].Dicks[0].Type + " " + enemies[EnemyIndex].Dicks[0].Size + "cm dick.";
        }
        CheckArousal();
        LastPressed = "GiveBlowjob";
        return;
    });
    document.getElementById("GiveCunniglus").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"GiveCunniglus",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack/2;
        player.Arousal += ESexAttack/3;
        if (LastPressed == "GiveCunniglus") {
            document.getElementById("SexText").innerHTML = "You eat their " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
        }
        else {
            document.getElementById("SexText").innerHTML = "You go between the opponent legs and eat their " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
        }
        CheckArousal();
        LastPressed = "GiveCunniglus";
        return;
    });
    document.getElementById("GiveRimjob").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"GiveRimjob",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack/2;
        player.Arousal += ESexAttack/3;
        if (LastPressed == "GiveRimjob") {
            document.getElementById("SexText").innerHTML = "You eat ass.";
        }
        else {
            document.getElementById("SexText").innerHTML = "You eat ass.";
        }
        CheckArousal();
        LastPressed = "GiveRimjob";
        return;
    });
        // Vagina
    document.getElementById("Scissoring").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"Scissoring",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "Scissoring") {
            document.getElementById("SexText").innerHTML = "You grind your pussy against theirs " + enemies[EnemyIndex].Pussies[0].Type + "   pussy.";
        }
        else {
            document.getElementById("SexText").innerHTML = "You straddle the  opponent and grind your pussy against their " + enemies[EnemyIndex].Pussies[0].Type + "   pussy.";
        }
        CheckArousal();
        LastPressed = "Scissoring";
        return;
    });
    document.getElementById("GetCunniglus").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"GetCunniglus",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack/3;
        player.Arousal += ESexAttack/2;
        if (LastPressed == "GetCunniglus") {
            document.getElementById("SexText").innerHTML = "Holding their head agianst your " + player.Pussies[0].Type + " pussy they "+
            "eat you out with thier " + enemies[EnemyIndex].Race + " tounge.";
        }
        else {
            document.getElementById("SexText").innerHTML = "You command your  opponent to get down on their knees, then you grab their head using it to grind your " + player.Pussies[0].Type + " pussy agianst until they "+
            "understands what you want and start eating you what with thier " + enemies[EnemyIndex].Race + " tounge.";
        }
        CheckArousal();
        LastPressed = "GetCunniglus";
        return;
    });
    document.getElementById("RideCowgirl").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"RideCowgirl",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "RideCowgirl") {
            document.getElementById("SexText").innerHTML = "You ride their " + enemies[EnemyIndex].Dicks[0].Size + "cm " + enemies[EnemyIndex].Dicks[0].Type +" dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        }
        else {
            document.getElementById("SexText").innerHTML = "Laying your  opponent down on thier back, you position yourself ontop of them and ride their " + enemies[EnemyIndex].Dicks[0].Size + "cm " + enemies[EnemyIndex].Dicks[0].Type +" dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        }
        if (player.Pussies[0].Virgin) {
            player.Pussies[0].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You have lost your virginity!"
        }
        CheckArousal();
        LastPressed = "RideCowgirl";
        return;
    });
        // Dick
    document.getElementById("Missionary").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"Missionary",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "Missionary") {
            document.getElementById("SexText").innerHTML = "You continue fucking their " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        }
        else {
            document.getElementById("SexText").innerHTML = "Positioning your  opponent on thier back you fuck their " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.<br> Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        }
        if (player.Dicks[0].Virgin) {
            player.Dicks[0].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You have taken her virginity!"
        }

        CheckArousal();
        LastPressed = "Missionary";
        return;
    });
    document.getElementById("DoggyStyle").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"DoggyStyle",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "DoggyStyle") {
            document.getElementById("SexText").innerHTML = "You continue fucking them from behind.<br>Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " +  Tightness(player, enemies[EnemyIndex], "A") + " to your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        }
        else {
            document.getElementById("SexText").innerHTML = "Commanding the defeated to get down on their all fours you fuck them from behind.<br> Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " +  Tightness(player, enemies[EnemyIndex], "A") + " to your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        }
        if (player.Dicks[0].Virgin) {
            player.Dicks[0].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You have taken her virginity!"
        }

        CheckArousal();
        LastPressed = "DoggyStyle";
        return;
    });
    document.getElementById("GetBlowjob").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"GetBlowjob",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack/3;
        player.Arousal += ESexAttack/2;
        if (LastPressed == "GetBlowjob") {
            document.getElementById("SexText").innerHTML = "You hold their head guiding them sucking your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        }
        else {
            document.getElementById("SexText").innerHTML = "Commanding your  opponent on their knees you grab their head guiding them sucking your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        }
        CheckArousal();
        LastPressed = "GetBlowjob";
        return; 
    });
        // Anal
    document.getElementById("DoggyStyleAnal").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"DoggyStyleAnal",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "DoggyStyleAnal") {
            document.getElementById("SexText").innerHTML = "You hold their head down and fuck their ass with your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        }
        else {
            document.getElementById("SexText").innerHTML = "You order you opponent down on their kees and position yourself behind them you push their head down and fuck their ass with your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        }
        if (player.Dicks[0].Virgin) {
            player.Dicks[0].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You are no longer a virgin!"
        }

        CheckArousal();
        LastPressed = "DoggyStyleAnal";
        return;
    });
    document.getElementById("GetRimjob").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player,"GetRimjob",enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack/3;
        player.Arousal += ESexAttack/2;
        if (LastPressed == "GetRimjob") {
            document.getElementById("SexText").innerHTML = "Your opponent eat your ass.";
        }
        else {
            document.getElementById("SexText").innerHTML = "You command your opponent to eat your ass.";
        }
        CheckArousal();
        LastPressed = "GetRimjob";
        return;
    });

    document.getElementById("StopSexButton").addEventListener("click", function() {
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
        LastPressed = " ";
        return;
    });
    document.getElementById("Capture").addEventListener("click", function() {
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
    document.getElementById("OralVore").addEventListener("click", function() {
        if (enemies[EnemyIndex].Weight < StomachCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player,"OralVore",enemies[EnemyIndex]);
            }
            player.Vore.Stomach.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them down your throat.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        }
        else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your stomach.";
        }
        return;
    });
    document.getElementById("Unbirth").addEventListener("click", function() {
        if (enemies[EnemyIndex].Weight < VaginaCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player,"Unbirth",enemies[EnemyIndex]);
            }
            player.Vore.Vagina.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove into your pussy.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        }
        else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your vagina.";
        }
        return;
    });
    document.getElementById("CockVore").addEventListener("click", function() {
        if (enemies[EnemyIndex].Weight < BallsCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player,"CockVore",enemies[EnemyIndex]);
            }
            player.Vore.Balls.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them down into your cockslit, you watching the bulge travel down your shaft.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        }
        else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your balls.";
        }
        return;
    });
    document.getElementById("BreastVore").addEventListener("click", function() {
        if (enemies[EnemyIndex].Weight < BreastCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player,"BreastVore",enemies[EnemyIndex]);
            }
            player.Vore.Breast.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them into your nipple.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        }
        else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your breasts.";
        }
        return;
    });
    document.getElementById("AnalVore").addEventListener("click", function() {
        if (enemies[EnemyIndex].Weight < AnalCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player,"AnalVore",enemies[EnemyIndex]);
            }
            player.Vore.Anal.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent you shove them into your bowels.";
            document.getElementById("PlayerMouth").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            HideVore();
        }
        else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your ass.";
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

    function Tightness(pipe, hole, mode) {
        if (mode == "A") {
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size+1) {
                if (pipe.Dicks[0].Size > hole.Pussies[0].Size*2) {
                    return "feels extremly tight";
                }
                else {
                    return "feels tight";
                }
            }
            else if (pipe.Dicks[0].Size < hole.Pussies[0].Size-1) {
                if (pipe.Dicks[0].Size*2 < hole.Pussies[0].Size) {
                    return "feels very loose"
                }
                else {
                    return "feels loose";
                }
            }
            else {
                return "feels like a perfect fit";

            }
        }
        else if (mode == "B") {
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size) {
                return "feels big in";
            }
            else if (pipe.Dicks[0].Size == hole.Pussies[0].Size) {
                return "feels like a perfect fit to";
            }
            else {
                return "feels small in";
            }
        }
    } 

    function ImgChose(who,what,who2) {
        var myimg = new Image();
        var a = who.Race;
        var b = CheckGender(who.Masc, who.Femi);
        var c = what;
        var d = who2.Race;
        var e = CheckGender(who2.Masc, who2.Femi);
        var source;
        switch (Settings.ImgPack) {
            case "Mode1":
                source = a+b+c;
                break;
            case "Mode2":
                source = d+e+c;
                break;
            case "Mode3":
                source = a+b+c+d+e;
                break;
            default:
                break;
        }
        console.log(source);
        myimg.src = "../imgPack/"+source+".jpg";  
        myimg.onload = function() {
            document.getElementById("MyImg").src = "../imgPack/"+source+".jpg";
        }
        myimg.onerror = function() {
            document.getElementById("MyImg").src = "../imgPack/Default.jpg";
        }   
    }
    function checkImageExists(src, callback) {
        var myimg = new Image();
        myimg.src = "../imgPack/"+src+".jpg";
        myimg.onload = function() {
            var a = true;
            return true;
        }
        myimg.onerror = function() {
            return false;
        }
    }

//    document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + "<br>" + PussyLook(player) + "<br>" + DickLook(player);
//    document.getElementById("EnemyLooks").innerHTML = BoobLook(enemies[EnemyIndex]) + "<br>" + PussyLook(enemies[EnemyIndex]) + "<br>" + DickLook(enemies[EnemyIndex]);

    function AfterBattleButtons() {
        if (enemies[EnemyIndex].Orgasm > 4 && House.Dormmates.length < (House.Dorm*3)) {
            document.getElementById("CaptureOpponent").style.display = "block"
        }
        else {
            document.getElementById("CaptureOpponent").style.display = "none"
        }

        switch (CheckGender(enemies[EnemyIndex].Masc, enemies[EnemyIndex].Femi)) {
            case "female":
                document.getElementById("GiveCunniglus").style.display = 'block';
                document.getElementById("GiveBlowjob").style.display = 'none';
                if (player.Dicks.length > 0 ) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'block';
                    document.getElementById("DoggyStyle").style.display = 'block';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                    }
                else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }
                
                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'block';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'none';
                }
                else {
                    document.getElementById("PlayerVagina").style.display = 'none';
                }
                break;
            case "hermaphrodite":
                document.getElementById("GiveCunniglus").style.display = 'block';
                document.getElementById("GiveBlowjob").style.display = 'block';
                if (player.Dicks.length > 0 ) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'block';
                    document.getElementById("DoggyStyle").style.display = 'block';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                    }
                else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }
            
                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'block';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'block';
                }
                else {
                    document.getElementById("PlayerVagina").style.display = 'none';
                }
                break;
            case "male":
                document.getElementById("GiveBlowjob").style.display = 'block';
                document.getElementById("GiveCunniglus").style.display = 'none';
                if (player.Dicks.length > 0) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'none';
                    document.getElementById("DoggyStyle").style.display = 'none';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                    }
                else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }
            
                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'none';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'block';
                }
                else {
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
                    }
                else {
                    document.getElementById("PlayerDick").style.display = 'none';
                }
                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'none';
                    document.getElementById("GetCunniglus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'none';
                }
                else {
                    document.getElementById("PlayerVagina").style.display = 'none';
                }
        }

        document.getElementById("GetRimjob").style.display = 'block';
        document.getElementById("GiveRimjob").style.display = 'block';

        if (Settings.Vore && (StomachCapacity() > enemies[EnemyIndex].Weight)) {
            document.getElementById("OralVore").style.display = 'block';
        }
        else {
            document.getElementById("OralVore").style.display = 'none';
        }
        if (Settings.Vore && VaginaCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("Unbirth").style.display = 'block';
        }
        else {
            document.getElementById("Unbirth").style.display = 'none';
        }
        if (Settings.Vore && BallsCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("CockVore").style.display = 'block';
        }
        else {
            document.getElementById("CockVore").style.display = 'none';
        }
        if(Settings.Vore && BreastCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("BreastVore").style.display = 'block';
        }
        else {
            document.getElementById("BreastVore").style.display = 'none'
        }
        if(Settings.Vore && AnalCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("AnalVore").style.display = 'block';
        }
        else {
            document.getElementById("AnalVore").style.display = 'none';
        }
        
        
    }

    function CheckArousal () {
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
            switch(Settings.GiveEssence){
                case "Both":
                    ee.Masc += Math.round(player.GiveEssence/2);
                    ee.Femi += Math.round(player.GiveEssence/2);
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

            if (LastPressed == ("DoggyStyle" || "DoggyStyleAnal" || "Missionary")){
               
                if (!ee.hasOwnProperty("Pregnant")){
                    ee.Pregnant = {}
                    ee.Pregnant.Status = false;
                }
                else if (!ee.Pregnant.Status) {
                    Impregnate(ee, player, "A", "");
                }    
            }
            AfterBattleButtons();
            CheckArousal();
        }

        document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + PussyLook(player) + DickLook(player);
        if (player.Pregnant.Status){
            var age = Math.round(player.Pregnant.Baby/10000);
            if (age < 1) {age = ""}
            document.getElementById("PlayerLooks").innerHTML += "<br>"+ age +"Pregnant";
        }
        document.getElementById("EnemyLooks").innerHTML = BoobLook(ee) + PussyLook(ee) + DickLook(ee);
        if (ee.hasOwnProperty("Pregnant")){
            if (ee.Pregnant.Status) {
                document.getElementById("EnemyLooks").innerHTML += "<br>Pregnant";
            }
        }


        var PlayerMaxOrgasm = Math.round(player.End/8);
        SexAttack = Math.round((RandomInt(4,7) * player.SexSkill)/2);
        ESexAttack = Math.round((RandomInt(4,7) * enemies[EnemyIndex].SexSkill)/2);
        document.getElementById("PName").innerHTML = player.Name + " " + player.Lastname + "<br>" + player.Race + " " + CheckGender(player.Masc, player.Femi);
        document.getElementById("EName").innerHTML = ee.Name + "<br>" + ee.Race + " " + CheckGender(ee.Masc, ee.Femi);
        document.getElementById("Mascu").innerHTML = player.Masc;
        document.getElementById("Femin").innerHTML = player.Femi;
        document.getElementById("PArousal").innerHTML = Math.round(player.Arousal);
        document.getElementById("EMascu").innerHTML = ee.Masc;
        document.getElementById("EFemin").innerHTML = ee.Femi;
        document.getElementById("EArousal").innerHTML = Math.round(ee.Arousal);
        var DelatMed = 2;
        if (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) {
            DelatMed = 100/player.Masc;
        }
        else if (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc){
            DelatMed = 100/player.Femi;
        }
        else if (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) {
            DelatMed = 100/ee.Masc;
        }
        else {
            DelatMed = 100/ee.Femi;
        }

        document.getElementById("Mascu").style.width = player.Masc*DelatMed + "%";
        document.getElementById("Femin").style.width = player.Femi*DelatMed + "%";
        document.getElementById("PArousal").style.width = player.Arousal + "%";
        document.getElementById("EMascu").style.width = ee.Masc*DelatMed + "%";
        document.getElementById("EFemin").style.width = ee.Femi*DelatMed + "%";
        document.getElementById("EArousal").style.width = ee.Arousal + "%";
         
        
        document.getElementById("SexStats").innerHTML = " ";
        if (ee.Orgasm > 0) {
            document.getElementById("EnemyOrgasm").style.display = 'block';
            document.getElementById("EnemyOrgasm").innerHTML = "Enemy have orgasmed: " + ee.Orgasm + " times";
        }
        else {
            document.getElementById("EnemyOrgasm").style.display = 'none';
        }
        if (player.Orgasm > 0) {
            document.getElementById("PlayerOrgasm").style.display = 'block';
            document.getElementById("PlayerOrgasm").innerHTML = "You have orgasmed: " + player.Orgasm + " times"
        }
        else {
            document.getElementById("PlayerOrgasm").style.display = 'none';            
        }

        if (enemies[EnemyIndex].SessionOrgasm > 0) {
            document.getElementById("DrainMenu").style.display = 'block';
        }
        else {
            document.getElementById("DrainMenu").style.display = 'none';
        }

        if (PlayerMaxOrgasm <= player.Orgasm) {
            document.getElementById("EnemyVagina").style.display = 'none';
            document.getElementById("EnemyDick").style.display = 'none';
            document.getElementById("PlayerVagina").style.display = 'none';
            document.getElementById("PlayerDick").style.display = 'none';
            document.getElementById("Anal").style.display = 'none';
            return;
        }
        SexColor(player, "Player");
        SexColor(ee, "Enemy");
    }
    function SexColor (who, where) {
        switch (CheckGender(who.Masc, who.Femi)) {
            case "female":
                document.getElementById(where+"Sex").style.backgroundColor = "rgba(255, 192, 203, 0.7)";
                document.getElementById(where+"Sex").style.border = "1px solid rgba(255, 192, 203)";    
                break;
            case "male":
                document.getElementById(where+"Sex").style.backgroundColor = "rgba(0, 0, 255, 0.3)";
                document.getElementById(where+"Sex").style.border = "1px solid rgba(0, 0, 255)";
                break;
            case "hermaphrodite":
                document.getElementById(where+"Sex").style.backgroundColor = "rgba(128, 0, 128, 0.3)";
                document.getElementById(where+"Sex").style.border = "1px solid rgba(128, 0, 128)";
                break;
            case "doll":
                document.getElementById(where+"Sex").style.backgroundColor = "rgba(245, 245, 220)";
                document.getElementById(where+"Sex").style.border = "1px solid rgb(201, 201, 182)";
                break;
        }
    }

    function DrainChangesEnemy(eold, ecurrent) {
        var b = " ";
        switch (CheckGender(eold.Masc, eold.Femi)) {
            case "male":
                if (ecurrent.Dicks.length > 0) {
                    if (eold.Dicks[0].Size > ecurrent.Dicks[0].Size) {
                        b = "You see their dick shrinking."
                    }
                }
                else {
                    b = "You see their dick shrinking completely into their body, turning them into a " + CheckGender(ecurrent.Masc, ecurrent.Femi) + ".";
                }
                break;
            case "female":
                if (ecurrent.Pussies.length > 0) {
                    if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size && eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking and feel their pussy tightening."
                    }
                    else if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size) {
                        b = "You feel their pussy tightening."
                    }
                    else if (eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking."
                    }
                }
                else {
                    b = "You see their pussy closing completely and disappear, turning them into a " + CheckGender(ecurrent.Masc, ecurrent.Femi) + ".";
                }
                break;
            case "hermaphrodite":
                if (ecurrent.Dicks.length > 0) {
                    if (eold.Dicks[0].Size > ecurrent.Dicks[0].Size) {
                        b = "You see their dick shrinking."
                    }
                }
                else {
                    b = "You see their dick shrinking completely into their body, turning them into a " + CheckGender(ecurrent.Masc, ecurrent.Femi) + ".";
                }
                if (ecurrent.Pussies.length > 0) {
                    if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size && eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking and feel their pussy tightening."
                    }
                    else if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size) {
                        b = "You feel their pussy tightening."
                    }
                    else if (eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                        b = "You see their breast shrinking."
                    }
                }
                else {
                    b = "You see their pussy closing completely and disappear, turning them into a " + CheckGender(ecurrent.Masc, ecurrent.Femi) + ".";
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
        
        switch (CheckGender(old.Masc, old.Femi)) {
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
                }
                else if (old.Pussies[0].Size < current.Pussies[0].Size) {
                    a = "You feel your pussy grow.";
                }
                else if (old.Boobies[0].Size < current.Boobies[0].Size) {
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
                }
                else if (old.Pussies[0].Size < current.Pussies[0].Size) {
                    a = "You feel your pussy grow.";
                }
                else if (old.Boobies[0].Size < current.Boobies[0].Size) {
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
        if (CheckGender(old.Masc, old.Femi) != CheckGender(current.Masc, current.Femi)) {
            b += "<br>You have become a " + CheckGender(current.Masc, current.Femi) + "!";
        }
        return "<br>" + a + "<br>" + b;
    }

    document.getElementById("DrainM").addEventListener("click", function() {
        var old = JSON.parse(JSON.stringify(player));
        var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
        if (player.EssenceDrain >= enemies[EnemyIndex].Masc && enemies[EnemyIndex].Masc >0) {
            enemies[EnemyIndex].SessionOrgasm--;
            player.Masc += enemies[EnemyIndex].Masc;
            enemies[EnemyIndex].Masc = 0;
            EssenceCheck(enemies[EnemyIndex]);
            EssenceCheck(player);
            document.getElementById("SexText").innerHTML = "You siphon the last essence of masculinity from them leaving them with no signs of masculinity left." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }
        else if (player.EssenceDrain < enemies[EnemyIndex].Masc) {
            enemies[EnemyIndex].SessionOrgasm--;
            player.Masc += player.EssenceDrain;
            enemies[EnemyIndex].Masc -= player.EssenceDrain;
            EssenceCheck(enemies[EnemyIndex]);
            EssenceCheck(player);
            document.getElementById("SexText").innerHTML = "You siphon essence of masculinity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }

        AfterBattleButtons();
        CheckArousal();
        return;
    });
    document.getElementById("DrainF").addEventListener("click", function() {
        var old = JSON.parse(JSON.stringify(player));
        var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
        if (player.EssenceDrain >= enemies[EnemyIndex].Femi && enemies[EnemyIndex].Femi >0) {
            enemies[EnemyIndex].SessionOrgasm--;
            player.Femi += enemies[EnemyIndex].Femi;
            enemies[EnemyIndex].Femi = 0;
            EssenceCheck(enemies[EnemyIndex]);
            EssenceCheck(player);
            document.getElementById("SexText").innerHTML = "You siphon the last essence of femininity from them leaving them with no signs of femininity left. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }
        else if (player.EssenceDrain < enemies[EnemyIndex].Femi) {
            enemies[EnemyIndex].SessionOrgasm--;
            player.Femi += player.EssenceDrain;
            enemies[EnemyIndex].Femi -= player.EssenceDrain;
            EssenceCheck(enemies[EnemyIndex]);
            EssenceCheck(player);
            document.getElementById("SexText").innerHTML = "You siphon essence of femininity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
        }
        AfterBattleButtons();
        CheckArousal();
        return;
    })

    document.getElementById("VoreLooks").addEventListener("click", function() {
        DisplayNone();
        document.getElementById("ShowVore").style.display = 'block';
    });
    document.getElementById("ShowStomach").addEventListener("click", function() {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreStomach").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            var ps = player.Vore.Stomach[e];
            food += "<button type=\"button\">" + ps.Name + " " + ps.Race + "<br>" + CheckGender(ps.Masc, ps.Femi) 
            + "<br><br>Height:" + Math.round(ps.Height) + "<br>Weight:" + Math.round(ps.Weight) +"</button>"
        }
        document.getElementById("StomachContent").innerHTML = food;
        
    });
    document.getElementById("StomachDigestion").addEventListener("click", function() {
        Settings.VoreSettings.StomachDigestion = !Settings.VoreSettings.StomachDigestion
        document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
    });
    document.getElementById("ShowVagina").addEventListener("click", function() {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreVagina").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            var ps = player.Vore.Vagina[e];
            food += "<button type=\"button\">" + ps.Name + " " + ps.Race + "<br>" + CheckGender(ps.Masc, ps.Femi) 
            + "<br><br>Height:" + Math.round(ps.Height) + "<br>Weight:" + Math.round(ps.Weight) +"</button>"
        }
        document.getElementById("VaginaContent").innerHTML = food;
        
    });
    document.getElementById("ShowBreast").addEventListener("click", function() {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreBreast").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            var ps = player.Vore.Breast[e];
            food += "<button type=\"button\">" + ps.Name + " " + ps.Race + "<br>" + CheckGender(ps.Masc, ps.Femi) 
            + "<br><br>Height:" + Math.round(ps.Height) + "<br>Weight:" + Math.round(ps.Weight) +"</button>"
        }
        document.getElementById("BreastContent").innerHTML = food;
        
    });
    document.getElementById("ShowBalls").addEventListener("click", function() {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreBalls").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            var ps = player.Vore.Balls[e];
            food += "<button type=\"button\">" + ps.Name + " " + ps.Race + "<br>" + CheckGender(ps.Masc, ps.Femi) 
            + "<br><br>Height:" + Math.round(ps.Height) + "<br>Weight:" + Math.round(ps.Weight) +"</button>"
        }
        document.getElementById("BallsContent").innerHTML = food;
        
    });
    document.getElementById("CumDigestion").addEventListener("click", function() {
        Settings.VoreSettings.CumTF = !Settings.VoreSettings.CumTF;
        document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
    });
    document.getElementById("ShowAnal").addEventListener("click", function() {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreAnal").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            var ps = player.Vore.Anal[e];
            food += "<button type=\"button\">" + ps.Name + " " + ps.Race + "<br>" + CheckGender(ps.Masc, ps.Femi) 
            + "<br><br>Height:" + Math.round(ps.Height) + "<br>Weight:" + Math.round(ps.Weight) +"</button>"
        }
        document.getElementById("AnalContent").innerHTML = food;
        
    });
    document.getElementById("StomachLeave").addEventListener("click", function() {
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'block';
    });
    document.getElementById("VaginaLeave").addEventListener("click", function() {
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'block';
    });
    document.getElementById("BreastLeave").addEventListener("click", function() {
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'block';
    });
    document.getElementById("BallsLeave").addEventListener("click", function() {
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'block';
    });
    document.getElementById("AnalLeave").addEventListener("click", function() {
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'block';
    });

    document.getElementById("LeaveVore").addEventListener("click", function() {
        battle = false;
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("VoreButtons").style.display = 'block';

    });

    function VoreEngine(){
        var VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level-1);
        if (player.Vore.Exp >= VoreMaxExp) {
            player.Vore.Exp = player.Vore.Exp-VoreMaxExp;
            player.Vore.Level++;
            player.Vore.VorePoints++;
        }
        document.getElementById("VoreLevel").innerHTML = player.Vore.Level;
        document.getElementById("VoreLevel").style.width = 100 * (player.Vore.Exp / VoreMaxExp) + "%";

        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            if (Settings.VoreSettings.StomachDigestion) {
                player.Vore.Stomach[e].Weight -= 0.001;
                player.Vore.StomachExp += 0.001;
                player.Vore.Exp += 0.001;
                player.Fat += 0.001;
                if (player.Vore.Stomach[e].Weight < 0) {
                    player.Vore.Stomach.splice(e, 1);
                }
            }
            else {
                player.Vore.StomachExp += 0.0005;
                player.Vore.Exp += 0.0005;
            }
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            if (player.Vore.Vagina[e].Weight < 0) {
                player.Vore.Vagina.splice(e, 1);
            }
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            if (player.Vore.Breast[e].Weight < 0) {
                player.Vore.Breast.splice(e, 1);
            }
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            if (Settings.VoreSettings.CumTF) {
                player.Vore.Balls[e].Weight -= 0.001;
                player.Vore.BallsExp += 0.001;
                player.Vore.Exp += 0.001;
                for (var b = 0; b < player.Balls.length; b++) {
                    if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                        player.Balls[b].Cum += 0.001;
                    }
                }
                if (player.Vore.Balls[e].Weight < 0) {
                    player.Vore.Balls.splice(e, 1);
                }
            }
            else {
                player.Vore.BallsExp += 0.0005;
                player.Vore.Exp += 0.001;
            }
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            if (player.Vore.Anal[e].Weight < 0) {
                player.Vore.Anal.splice(e, 1);
            }
        }

    }
    function StomachCapacity() {
        var capacity = player.Height/3
        var sub = 0;
        if (player.hasOwnProperty("Vore")){
            var bonus = 1 + player.Vore.StomachExp/100;
        }
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            sub += player.Vore.Stomach[e].Weight;
        }
        return capacity*bonus-sub;
    }
    function VaginaCapacity() {
        if (player.Pussies.length < 1) {return 0;}
        var capacity = player.Pussies[0].Size;
        var sub = 0;
        if (player.hasOwnProperty("Vore")){
            var bonus = 1 + player.Vore.VaginaExp/100;
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            sub += player.Vore.Vagina[e].Weight;
        }
        return capacity * bonus -sub;
    }

    function BreastCapacity() {
        var capacity = player.Boobies[0].Size;
        var sub = 0;
        if (player.hasOwnProperty("Vore")){
            var bonus = 1 + player.Vore.BreastExp/100;
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            sub += player.Vore.Breast[e].Weight;
        }
        return capacity * bonus - sub;
    }
    
    function BallsCapacity() {
        if (player.Balls.length < 1) {return 0;}
        var capacity = player.Balls[0].Size;
        var sub = 0;
        if (player.hasOwnProperty("Vore")){
            var bonus = 1 + player.Vore.BallsExp/100;
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            sub += player.Vore.Balls[e].Weight;
        }
        return capacity * bonus - sub;
    }

    function AnalCapacity() {
        var capacity = player.Anal[0].Size;
        var sub = 0;
        if (player.hasOwnProperty("Vore")){
            var bonus = 1 + player.Vore.AnalExp/100;
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            sub += player.Vore.Anal[e].Weight;
        }
        return capacity * bonus - sub;
    }

    function PregnanyEngine(){
        if (player.hasOwnProperty("Pregnant")){
            if (player.Pregnant.Status){
                player.Pregnant.Baby++;
                if (player.Pregnant.Baby > 90000) {
                    player.Pregnant.Baby = 0;
                    player.Pregnant.Status = false;
                    if (player.hasOwnProperty("Children")) {
                        var Child = {
                            AgeCounter: 0,
                            Race: player.Race
                        };
                        player.Children.push(Child);
                    }
                    else {
                        player.Children = [];
                    }
                }
            }
        }
        else {
            player.Pregnant = false;
        }
        for (var e = 0; e < House.Dormmates.length; e++) {
            if (House.Dormmates[e].hasOwnProperty("Pregnant")){
                if (House.Dormmates[e].Pregnant.Status){
                    House.Dormmates[e].Pregnant.Baby++;
                    if (House.Dormmates[e].Pregnant.Baby > 90000) {
                        House.Dormmates[e].Pregnant.Baby = 0;
                        House.Dormmates[e].Pregnant.Status = false;
                        if(House.Dormmates[e].hasOwnProperty("Children")){
                            var Child = {
                                AgeCounter: 0,
                                Race: House.Dormmates[e].Race
                            };
                            House.Dormmates[e].Children.push(Child);               
                        }
                        else {
                            House.Dormmates[e].Children = [];
                        }
                    }
                }
            }
        }
    }

    function HouseEngine() {
        if (House.Gym > 0) {
            var maxMuscle;
            for (var e = 0; e < House.Dormmates.length; e++) {
                maxMuscle = (House.Dormmates[e].Height/3)*(House.Gym*0.1);
                if (House.Dormmates[e].Fat > 1 && (House.Dormmates[e].Muscle < maxMuscle)) {
                    House.Dormmates[e].Muscle += 0.001;
                    House.Dormmates[e].Fat -= 0.004;
                }
            }
        }
        if (House.Kitchen > 0) {
            var maxFat;
            for (var e = 0; e < House.Dormmates.length; e++) {
                maxFat = (House.Dormmates[e].Height/2)*(House.Kitchen*0.1);
                if (House.Dormmates[e].Fat < maxFat) {
                    House.Dormmates[e].Fat += 0.001;
                }
            }
        }
    };


    function Impregnate(who, by ,mode, where) {
        if (mode == "A") {
            var Impregnation = RandomInt(0,100);
            switch(CheckGender(who.Masc, who.Femi)){
                case "female":
                    if (by.Virility >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Impregnations++;
                        document.getElementById(where+"SexText").innerHTML = "You have impregnated her!"
                    }
                    break;
                case "hermaphrodite":
                    if (by.Virility >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Impregnations++;
                        document.getElementById(where+"SexText").innerHTML = "You have impregnated hir!"
                    }
                    break;
                case "male":
                    if (by.Virility-30 >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Impregnations++;
                        document.getElementById(where+"SexText").innerHTML = "Due your extreme virility you have managed to impregnate him!"
                    }
                    break;
                default:
                    if (by.Virility-30 >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Impregnations++;
                        document.getElementById(where+"SexText").innerHTML = "Due your extreme virility you have managed to impregnated the doll!"
                    }
                    break;
            }
        }
        else if (mode == "B") {
            var Impregnation = RandomInt(0,(500-by.Masc));
            switch(CheckGender(who.Masc, who.Femi)){
                case "female":
                    if (who.Fertility >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Pregnations++;
                        document.getElementById(where+"SexText").innerHTML = "You have been impregnated!"
                    }
                    break;
                case "hermaphrodite":
                    if (who.Fertility >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Pregnations++;
                        document.getElementById(where+"SexText").innerHTML = "You have been impregnated!"
                    }
                    break;
                case "male":
                    if (who.Fertility-50 >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Pregnations++;
                        document.getElementById(where+"SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                    break;
                default:
                    if (who.Fertility-50 >= Impregnation) {
                        who.Pregnant.Status = true;
                        who.Pregnant.Baby = 0;
                        Flags.Pregnations++;
                        document.getElementById(where+"SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                    break;
            }
        }
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
        }
        else if (who.Masc >= 30 && who.Dicks.length == 0){
            var Dick = {
                Size: Math.round(who.Masc/30),
                Type: who.Race,
                Virgin: true
            }
            who.Dicks.push(Dick);
        }
        else if (who.Dicks.length > 0) {
            for (var e = 0; e < who.Dicks.length; e++) {
                if (who.Dicks[e].Size < Math.round(who.Height/3)) {
                    if (who.Dicks.length > 1 && e > 0) {
                        who.Dicks[e].Size = Math.round(who.Masc/30) - who.Dicks[e-1].Size;
                    }
                    else {
                        who.Dicks[e].Size = Math.round(who.Masc/30);
                    }
                    if (who.Dicks[e].Size < 1) {
                        who.Dicks.pop();
                    }
                }
                else {
                    if (who.Dicks[e].Size > Math.round(who.Height/3+1)) {
                        who.Dicks[e].Size = Math.round(who.Height/3);
                    }
                    if (e+1 < who.Dicks.length) {
                        continue;
                    }
                    else {
                        var Dick = {
                            Size: 2,
                            Type: who.Race,
                            Virgin: true
                        }
                        who.Dicks.push(Dick);
                    }
                }

            }
        }
        if (who.Masc < 50 && who.Balls.length > 0) {
            who.Balls.pop();
        }
        else if (who.Masc >= 50 && who.Balls.length == 0) {
            var Ball = {
                Size: Math.round(who.Masc/60),
                Type: who.Race,
                CumMax: Math.round(who.Masc/70),
                Cum: 0,
                CumRate: 0.01
            }
            who.Balls.push(Ball);
        }
        else if (who.Balls.length > 0) {
            for (var b = 0; b < who.Balls.length; b++) {
                who.Balls[b].Size = Math.round(who.Masc/60);
                who.Balls[b].CumMax = Math.round(who.Masc/65);
                if (who.Balls[b].Cum < who.Balls[b].CumMax) {
                    who.Balls[b].Cum += who.Balls[b].CumRate;
                }
            }

        }
        if (who.Femi < 30 && who.Pussies.length > 0) {
            who.Pussies.pop();
            who.Boobies[0].Size = 0;
        }
        else if (who.Femi >= 30 && who.Pussies.length == 0) {
            var Pussy = {
                Size: Math.round(who.Femi/25),
                Type: who.Race,
                Virgin: true
            }
            who.Pussies.push(Pussy);
        }
        else if (who.Pussies.length > 0){
            for (var e = 0; e < who.Pussies.length; e++) {
                if (who.Pussies[e].Size < Math.round(player.Height/3)) {
                    if (who.Pussies.length > 1 && e > 0) {
                        who.Pussies[e].Size = Math.round(who.Femi/30) - who.Pussies[e-1].Size;
                    }
                    else {
                        who.Pussies[e].Size = Math.round(who.Femi/30);
                    }
                    if (who.Pussies[e].Size < 1) {
                        who.Pussies.pop();
                    }
                }
                else {
                    if (who.Pussies[e].Size > Math.round(player.Height/3+1)) {
                        who.Pussies[e].Size = Math.round(player.Height/3);
                    }
                    if (e+1 < who.Pussies.length) {
                        continue;
                    }
                    else {
                        var Pussy = {
                            Size: 1,
                            Type: who.Race,
                            Virgin: true
                        }
                        who.Pussies.push(Pussy);
                    }

                }

            }
        }
        who.Boobies[0].Size = Math.round(who.Femi/60);
        if (who.Anal.length == 0) {
            var Anal = {
                Size: 0,
                Type: who.Race,
                Virgin: true,
                stretch: 1,
            }
            who.Anal.push(Anal);
        }
        else {
            who.Anal[0].Size = Math.round(who.Height/12);
        }
        return;
    }


    function MakeDoor(x ,y ,width, height, NESW) {
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
                switch(player.Map) {
                    case "Start":
                        if (Doors[i].NESW == "E") {
                            sprite.x = grid*2;
                            player.Map = "RoadToCity1";
                            enemies = [];
                        }
                        break;
                    case "RoadToCity1":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToCity2";
                            sprite.y = grid*2;
                            enemies = [];  
                        }
                        else if (Doors[i].NESW == "W") {
                            player.Map = "Start";
                            sprite.x = startarea.width - 3*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "N") {
                            player.Map = "Bandit";
                            sprite.y = startarea.height - 3*grid;
                            enemies = [];
                        }
                        break;
                    case "Bandit":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToCity1";
                            sprite.y = 2*grid;
                            enemies = [];
                        }
                        break;
                    case "RoadToCity2":
                        if (Doors[i].NESW == "N") {
                            player.Map = "RoadToCity1";
                            sprite.y = startarea.height - 3*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "E") {
                            player.Map = "City";
                            sprite.x = 2*grid;
                            enemies = [];
                        }
                        break;
                    case "City":
                        if (Doors[i].NESW == "W") {
                            player.Map = "RoadToCity2";
                            sprite.x = startarea.width - 3*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "E") {
                            player.Map = "RoadToHome";
                            sprite.x = 2*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "S") {
                            player.Map = "Forest";
                            sprite.y = grid*2;
                            enemies = [];
                        }
                        break;
                    case "RoadToHome":
                        if (Doors[i].NESW == "W") {
                            player.Map = "City";
                            sprite.x = startarea.width - 3*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "E" && House.Owned == true) {
                            battle = true;
                            sprite.x = startarea.width-3*grid;
                            document.getElementById("map").style.display = 'none';
                            document.getElementById("buttons").style.display = 'none';
                            document.getElementById("EmptyButtons").style.display = 'block';
                            document.getElementById("Home").style.display = 'block';
                        }
                        else if (Doors[i].NESW == "N") {
                            player.Map = "RoadToWitch";
                            sprite.y = startarea.height - 3*grid;
                            enemies = [];
                        }
                        break;
                    case "RoadToWitch":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToHome";
                            sprite.y = 2*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "N") {
                            player.Map = "RoadToWitch2"
                            sprite.y = startarea.height - 3*grid
                            enemies = [];
                        }
                        break;
                    case "RoadToWitch2":
                        if (Doors[i].NESW == "S") {
                            player.Map = "RoadToWitch";
                            sprite.y = 2*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "E") {
                            player.Map = "Witch";
                            sprite.x = 2*grid;
                            enemies = [];
                        }
                        break;
                    case "Witch": {
                        if (Doors[i].NESW == "W") {
                            player.Map = "RoadToWitch2";
                            sprite.x = startarea.width - 3*grid;
                            enemies = [];
                        }
                        break;
                    }
                    case "Forest":
                        if (Doors[i].NESW == "N") {
                            player.Map = "City";
                            sprite.y = startarea.height-3*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "S") {
                            player.Map = "Forest2";
                            sprite.y = grid*2;
                            enemies = [];
                        }
                        break;
                    case "Forest2":
                        if (Doors[i].NESW == "N") {
                            player.Map = "Forest";
                            sprite.y = startarea.height-3*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "S") {
                            player.Map = "Temp";
                            player.Area = "Second";
                            sprite.y = 2*grid;
                            enemies = [];
                        }
                        break;
                    case "Temp":
                        if (Doors[i].NESW == "N") {
                            player.Map = "Forest2";
                            player.Area = "First";
                            sprite.y = startarea.height-3*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "W") {
                            player.Map = "Cave1";
                            sprite.x = startarea.width-3*grid;
                            enemies = []
                        }
                        break;
                    case "Cave1":
                        if (Doors[i].NESW == "E") {
                            player.Map = "Temp";
                            sprite.x = 2*grid;
                            enemies = [];
                        }
                        else if (Doors[i].NESW == "W") {
                            player.Map = "Cave2";
                            sprite.x = startarea.width-3*grid;
                            enemies = [];
                        }
                        break;
                    case "Cave2":
                        if (Doors[i].NESW == "E") {
                            player.Map = "Cave1";
                            sprite.x = 2*grid;
                            enemies =  [];
                        }
                        else if (Doors[i].NESW == "S") {
                            player.Map = "Cave3";
                            sprite.y = 2*grid;
                            enemies = [];
                        }
                        break;
                    case "Cave3":
                        if (Doors[i].NESW == "N") {
                            player.Map = "Cave2";
                            sprite.y = startarea.height-3*grid;
                            enemies = [];
                        }
                        break;

                }
            }
    }};

    function Npc(Name,X,Y,width,height, Color) {
        this.Name = Name,
        this.X = X,
        this.Y = Y,
        this.Width = width,
        this.Height = height,
        this.Color = Color
    };
    var Townhall = new Npc("Townhall", grid*6, grid/2, grid*8, grid*5.5, "RGB(133,94,66)");
    var Shop = new Npc("Shop", grid/2, grid*14, grid*5.5, grid*5.5, "RGB(133,94,66)");
    var Bar = new Npc("Bar", 14*grid, 14*grid, grid*5.5 , grid*5.5, "RGB(133,94,66)")
    var Gym = new Npc("Gym", grid/2, grid*5, grid*4.5, grid*10 ,"RGB(133,94,66)");
    var WitchShop = new Npc("WitchShop", grid*15, grid*5, grid*4.5, grid*10, "RGB(133,94,66)");
    var WitchHut = new Npc("WitchHut", grid*11, grid*5, grid*8.5, grid*10, "RGB(133,94,66)");
    
    var Npcs = [];

    var NpcName;
    var EnemyIndex;
    function Touching() {
        for (var j = 0; j < enemies.length; j++){
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
        for (var n = 0; n < Npcs.length; n++){
            if (sprite.x >= Npcs[n].X && sprite.x < Npcs[n].X + Npcs[n].Width &&
                sprite.y >= Npcs[n].Y && sprite.y < Npcs[n].Y + Npcs[n].Height) {
                battle = true;
                sprite.x = startarea.width/2-grid       ;
                sprite.y = startarea.height/2;
                UpdateNpc(Npcs[n].Name);
            }
        } };
    
    function UpdateNpc(name) {
        document.getElementById(name).style.display = 'block';
        document.getElementById("map").style.display = 'none';
        document.getElementById("buttons").style.display = 'none';
        document.getElementById("EmptyButtons").style.display = 'block';
        document.getElementById("Leave" + name).addEventListener("click", function(){
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
    document.getElementById("RestBar").addEventListener("click", function() {
        if (player.Gold > 25 && (player.Health < player.MaxHealth || player.WillHealth < player.MaxWillHealth)) {
            player.Gold -= 25;
                player.Health = player.MaxHealth;
            player.WillHealth = player.MaxWillHealth;
            return;
        }
        else {
            return;
        }
    });
    document.getElementById("EatBar").addEventListener("click", function() {
        if (player.Gold > 10) {
            player.Fat += 20/player.Fat +5;
            player.Gold -= 10;
            player.Health += 20;
            player.WillHealth += 20;
            return;
        }
        else {
            return;
        }
    }); 

    // Questsystem

    var ChosenQuest
    document.getElementById("QuestMenu").addEventListener("click", function() {
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
        }};
    });
        document.getElementById("BanditLord").addEventListener("click", function() {
            document.getElementById("LeaveQuest").style.display = 'none'; 
            if (Flags.BanditLord) {
                document.getElementById("QuestText").innerHTML = "The bandit are still humiliated from the defeat of their lord, but if you are willing please defeat them again to make sure they don't regain their confidence."
            }
            else {
                document.getElementById("QuestText").innerHTML = "The bandits up to the north has become braver with their new leader, if you are strong enough please beat them into submission. <br> <br>" + 
                "You will be greatly awarded for your effort and we will grant you the right to buy the old mansion located east from the city."
            }
            ChosenQuest = "BanditLord";
            document.getElementById("QuestButtons").style.display = 'block';
            document.getElementById("QuestStart").style.display = 'none';
            document.getElementById("QuestReward").style.display = 'none';
        });
        document.getElementById("ElfHunt").addEventListener("click", function() {
            document.getElementById("QuestText").innerHTML = "The elves to the south is becoming a problem, defeat atleast three of them and you will be awarded."
            document.getElementById("QuestButtons").style.display = 'block';
            document.getElementById("QuestStart").style.display = 'none';
            document.getElementById("QuestReward").style.display = 'none';
            ChosenQuest = "ElfHunt";
        });
        document.getElementById("BanditLordReward").addEventListener("click", function() {
            if (Flags.BanditLord) {
                document.getElementById("QuestText").innerHTML = "You are rewared: 300Exp and 500gold";
            } 
            else {
                if (!Flags.BanditLord) {Flags.BanditLord = true};
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
    document.getElementById("ElfHuntReward").addEventListener("click", function() {
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
    document.getElementById("QuestAccept").addEventListener("click", function() {
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

    })
    document.getElementById("QuestDecline").addEventListener("click", function() {
        document.getElementById("QuestButtons").style.display = 'none';
        document.getElementById("QuestStart").style.display = 'block';
        document.getElementById("QuestReward").style.display = 'block';
        document.getElementById("LeaveQuest").style.display = 'inline-block'; 
        document.getElementById("QuestText").innerHTML = "";
    })
    document.getElementById("LeaveQuest").addEventListener("click", function() {
        document.getElementById("Quest").style.display = 'none';
        document.getElementById("TownhallStart").style.display = 'block';
        document.getElementById("LeaveQuest").style.display = 'inline-block'; 
        document.getElementById("QuestText").innerHTML = "";
    });
    // Slut på questsystem

    document.getElementById("BuyHouse").addEventListener("click", function() {
        if (player.Gold > 100) {
            document.getElementById("BuyHouse").style.display = 'none';
            House.Owned = true;
            return;
        }
        else {
            return;
        }
    });
    document.getElementById("Services").addEventListener("click", function() {
        document.getElementById("TownhallStart").style.display = 'none';
        document.getElementById("Service").style.display = 'block';
    });
    document.getElementById("NameChange").addEventListener("click", function() {
        document.getElementById("NameChangeForm").style.display = 'block';
        document.getElementById("firstname2").value = player.Name;
        document.getElementById("lastname2").value = player.Lastname;
    });
    document.getElementById("AcceptName").addEventListener("click", function() {
        player.Name = document.getElementById("firstname2").value;
        player.Lastname = document.getElementById("lastname2").value;
        document.getElementById("NameChangeForm").style.display = 'none';
    });
    document.getElementById("ServicesLeave").addEventListener("click", function() {
        document.getElementById("TownhallStart").style.display = 'block';
        document.getElementById("Service").style.display = 'none';
        document.getElementById("NameChangeForm").style.display = 'none';
    });

    // Items
    document.getElementById("ItemsShop").addEventListener("click", function(e) {
        if (e.target.type == "button") {
        Chosen = String(e.target.id);
            if(Chosen == "StrPotion" && player.Gold > 100) {
                player.Str++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body becoming stronger."
            }
            else if(Chosen == "ChaPotion" && player.Gold > 100) {
                player.Charm++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your charms grow."
            }
            else if(Chosen == "EndPotion" && player.Gold > 100) {
                player.End++
                player.MaxHealth += 5;
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your endurance growing."
            }
            else if(Chosen == "IntPotion" && player.Gold > 100) {
                player.Int++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your mind becoming sharper."
            }
            else if(Chosen == "WillPotion" && player.Gold > 100) {
                player.Will++
                player.MaxWillHealth += 5;
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your willpower growing."
            }
            else if(Chosen == "SexPotion" && player.Gold > 100) {
                player.SexSkill++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you get a feeling that somehow your bedskills have grown."
            }
            else {
                document.getElementById("ShopText").innerHTML = "";
            }
        }});

    document.getElementById("WitchShop").addEventListener("click", function(e) {
        var Chosen;
        if (e.target.type == "button") {Chosen = String(e.target.id);}
            if (Chosen == "Grow" && player.Gold >= 50) {
                var growth = Math.round((180/player.Height)*100)/100;
                player.Gold -= 50;
                player.Height += growth;
                document.getElementById("WitchShopText").innerHTML = "You grow " + growth + "cm.";
            }
            else if (Chosen == "Shrink" && player.Gold >= 50) {
                var shrunk = Math.round((player.Height/100)*100)/100;
                player.Gold-= 50;
                player.Height -= shrunk;
                document.getElementById("WitchShopText").innerHTML = "You shrink " + shrunk + "cm.";
            }
            else if (Chosen == "FertilityAdd" && player.Gold >= 30) {
                player.Gold -= 30;
                player.Fertility++;
                document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more fertil.";
            }
            else if (Chosen == "FertilitySub" && player.Gold >= 70){
                player.Gold -= 70;
                player.Fertility--;
                document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more barren."
            }
            else if (Chosen == "VirilityAdd" && player.Gold >= 70) {
                player.Gold -= 70;
                player.Virility++;
                document.getElementById("WitchShopText").innerHTML = "You feel your virility increasing.";
            }
            else if (Chosen == "VirilitySub" && player.Gold >= 30) {
                player.Gold -= 30;
                player.Virility--;
                document.getElementById("WitchShopText").innerHTML = "You feel your virility decreasing";
            }
        });
    document.getElementById("Train").addEventListener("click", function() {
        if (player.Fat > (player.Weight*0.1)) {
            var gains = Math.round((player.Height/220)*(20/player.Muscle)*(player.Str/20));
            var burn = Math.round(gains*4);
            player.Muscle += gains;
            player.Fat -= burn;
            if (gains == 0) {
                document.getElementById("GymText").innerHTML = "You are to weak."
            }
            else {
                document.getElementById("GymText").innerHTML = "You burn " + burn + "kg of fat and gain " + gains + "kg of muscle."
            }
        }
        else {
            document.getElementById("GymText").innerHTML = "You are to skinny."
        }

    });

    // Slut på Items 

    // Home
    document.getElementById("Sleep").addEventListener("click", function() {
        if (player.Health < player.MaxHealth + House.BedLevel*5) {
            player.Health = player.MaxHealth + House.BedLevel*5;
        }
        if (player.WillHealth < player.MaxWillHealth + House.BedLevel*5) {
            player.WillHealth = player.MaxWillHealth + House.BedLevel*5;
        }
        document.getElementById("HomeText").innerHTML = "You sleept.";
    });
    document.getElementById("UpgradeHome").addEventListener("click", function() {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("Upgrades").style.display = 'block';
        document.getElementById("HomeText").innerHTML = "";

        var BedCost = Math.round(50 * Math.pow(1.2,House.BedLevel));
        document.getElementById("UpgradeBed").value = "Upgrade bed " + BedCost + "g";
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        document.getElementById("BuildDorm").value = "Build dorm " + DormCost + "g";

    });
    document.getElementById("UpgradeBed").addEventListener("click", function() {
        var BedCost = Math.round(50 * Math.pow(1.2,House.BedLevel)); 
        House.BedLevel++;
        player.Gold -= BedCost;
        var BedCost = Math.round(50 * Math.pow(1.2,House.BedLevel)); 
        document.getElementById("HomeText").innerHTML = "You upgrades your bed to level " + House.BedLevel;
        document.getElementById("UpgradeBed").value = "Upgrade bed " + BedCost + "g";
    });
    document.getElementById("BuildDorm").addEventListener("click", function() {
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        if (player.Gold > DormCost) {
            if (House.Dorm == 0){document.getElementById("Dorm").style.display = "inline-block";}
            House.Dorm++;
            player.Gold -= DormCost;
        }
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        document.getElementById("BuildDorm").value = "Build dorm " + DormCost + "g";
    });
    document.getElementById("BuildGym").addEventListener("click", function () {
        var Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
        if (player.Gold > Gymcost) {
            House.Gym++;
            player.Gold -= Gymcost;
        }
        var Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
        document.getElementById("BuildGym").value = "Build gym " + Gymcost + "g"
    });
    document.getElementById("BuildKitchen").addEventListener("click", function () {
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        if (player.Gold > Kitchencost) {
            House.Kitchen++;
            player.Gold -= Kitchencost;
        }
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        document.getElementById("BuildKitchen").value = "Build kitchen " + Kitchencost + "g"
    });
    document.getElementById("LeaveUpgradeHome").addEventListener("click", function() {
        document.getElementById("Upgrades").style.display = 'none';
        document.getElementById("HomeStart").style.display = 'block';
    });
    document.getElementById("Dorm").addEventListener("click", function() {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("TheDorm").style.display = 'block';
        document.getElementById("ButtonMates").style.display = 'grid';
        document.getElementById("DivMates").style.display = 'none';
        document.getElementById("LeaveDorm").style.display = 'inline-block'
        document.getElementById("flex").style.display = 'none';
        var Inputs = [];
        for (var e = 0; e < House.Dormmates.length; e++) {
            var color;
            switch (CheckGender(House.Dormmates[e].Masc, House.Dormmates[e].Femi)) {
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
            var Input = "<button type=\"button\" class=\""+color+"\" onclick=\"MateDiv("+e+")\">"+House.Dormmates[e].Name+"<br>" + 
            House.Dormmates[e].Race + "</button  >"
            Inputs += Input;
        }
        document.getElementById("ButtonMates").innerHTML = Inputs;
    });
    var MateIndex;
    function MateDiv(e){
        MateIndex = e;
        var rm = House.Dormmates[e];
        document.getElementById("ButtonMates").style.display = 'none';
        document.getElementById("DivMates").style.display = 'flex';
        document.getElementById("flex").style.display = 'grid';
        var RoomMate = "<div id=\""+e+"\"></div>"
        document.getElementById("DivMates").innerHTML = RoomMate;
        document.getElementById(e).innerHTML = "<div>" +rm.Name + " " + rm.Race + "<br>" + CheckGender(rm.Masc, rm.Femi) 
        + "<br><br>Height: " + Math.round(rm.Height) + "cm<br>Weight: " + Math.round(rm.Weight) + "kg<br>Muscle: " + Math.round(rm.Muscle) + "kg<br>Fat: " + Math.round(rm.Fat) + "kg<br><br>" + BoobLook(rm) + DickLook(rm) + PussyLook(rm) + "</div>" + "<div> Strength: " + rm.Str 
        + "<br>Charm: " + rm.Charm + "<br>Endurance: " + rm.End + "<br>Int: " + rm.Int + "<br>Sexskill: " 
        + rm.SexSkill + "<br> Willpower" + rm.Willpower + "</div>"
        document.getElementById(e).style.display = 'block'
        var gendercolor;

        document.getElementById("LeaveRoom").style.display = 'block';
        document.getElementById("LeaveDorm").style.display = 'none';
        document.getElementById("KickOut").style.display = 'block';
        document.getElementById("Fuck").style.display = 'block';
    }
    document.getElementById("KickYes").addEventListener("click", function() {
        document.getElementById("flex").style.display = 'grid';
        document.getElementById("KickYesNo").style.display = 'none';
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("TheDorm").style.display = 'none';
        House.Dormmates.splice(MateIndex,1);
        return;
    });
    document.getElementById("KickNo").addEventListener("click", function() {
        document.getElementById("flex").style.display = 'grid';
        document.getElementById("KickYesNo").style.display = 'none';
    });
    document.getElementById("Fuck").addEventListener("click", function() {
        document.getElementById("Home").style.display = 'none';
        document.getElementById("FuckDorm").style.display = 'grid';
        document.getElementById("status").style.display = 'none';
        document.getElementById("EmptyButtons").style.display = 'none';
        DormSex();
    });
    function DormSex() {
        var e = House.Dormmates[MateIndex];
        document.getElementById("DormPName").innerHTML = player.Name + " " + player.Lastname;
        document.getElementById("DormEName").innerHTML = e.Name + "<br>" + e.Race + " " + CheckGender(e.Masc, e.Femi);
        document.getElementById("DormMascu").innerHTML = player.Masc;
        document.getElementById("DormFemin").innerHTML = player.Femi;
        document.getElementById("DormEMascu").innerHTML = Math.round(e.Masc);
        document.getElementById("DormEFemin").innerHTML = Math.round(e.Femi);
        document.getElementById("DormPlayerLooks").innerHTML = BoobLook(player) + DickLook(player) + PussyLook(player);
        document.getElementById("DormEnemyLooks").innerHTML = BoobLook(e) + DickLook(e) + PussyLook(e);
        if (e.hasOwnProperty("Pregnant")){
            if (e.Pregnant.Status) {
                var age = Math.round(e.Pregnant.Baby/10000);
                if (age < 1) {
                    document.getElementById("DormEnemyLooks").innerHTML += "<br>Impregnated";
                }
                else {
                    document.getElementById("DormEnemyLooks").innerHTML += "<br>"+age+ " months pregnant";
                }
            } 
        }
        var DelatMed = 2;
        if (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) {
            DelatMed = 100/player.Masc;
        }
        else if (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc){
            DelatMed = 100/player.Femi;
        }
        else if (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) {
            DelatMed = 100/e.Masc;
        }
        else {
            DelatMed = 100/e.Femi;
        }

        document.getElementById("DormMascu").style.width = player.Masc*DelatMed + "%";
        document.getElementById("DormFemin").style.width = player.Femi*DelatMed + "%";
        document.getElementById("DormEMascu").style.width = e.Masc*DelatMed + "%";
        document.getElementById("DormEFemin").style.width = e.Femi*DelatMed + "%";
        return;
    };
    document.getElementById("DormDrainMasc").addEventListener("click", function() {
        var e = House.Dormmates[MateIndex];
        if (player.EssenceDrain >= e.Masc && e.Masc >0) {
            player.Masc += e.Masc;
            e.Masc = 0;
            EssenceCheck(e);
            EssenceCheck(player);
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon masc";
            return;
        }
        else if (player.EssenceDrain < e.Masc) {
            player.Masc += player.EssenceDrain;
            e.Masc -= player.EssenceDrain;
            EssenceCheck(e);
            EssenceCheck(player);
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon masc";
            return;
        }
        else {
            return;
        }
    });
    document.getElementById("DormDrainFemi").addEventListener("click", function() {
        var e = House.Dormmates[MateIndex];
        if (player.EssenceDrain >= e.Femi && e.Femi >0) {
            player.Femi += e.Femi;
            e.Femi = 0;
            EssenceCheck(e);
            EssenceCheck(player);
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon femi";
            return;
        }
        else if (player.EssenceDrain < e.Femi) {
            player.Femi += player.EssenceDrain;
            e.Femi -= player.EssenceDrain;
            EssenceCheck(e);
            EssenceCheck(player);
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon femi";
            return;
        }
        else {
            return;
        }
    });
    document.getElementById("Impregnate").addEventListener("click", function() {
        document.getElementById("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
        var e = House.Dormmates[MateIndex];
        if (e.hasOwnProperty("Pregnant")){
            if (e.Pregnant.Status){
                document.getElementById("DormSexText").innerHTML = "You have already impregnated her!"
                DormSex();
                return;
            }
        }
        else {
            e.Pregnant = {};
            e.Pregnant.Status = false;
        }
        Impregnate(e, player, "A", "Dorm");
        DormSex();
    });
    document.getElementById("LeaveDormSex").addEventListener("click", function() {
        document.getElementById("Home").style.display = 'block';
        document.getElementById("FuckDorm").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'block';
        MateDiv(MateIndex);
    });
    document.getElementById("LeaveRoom").addEventListener("click", function() {
        document.getElementById("DivMates").style.display = 'none';
        document.getElementById("ButtonMates").style.display = 'grid';
        document.getElementById("LeaveRoom").style.display = 'none';
        document.getElementById("LeaveDorm").style.display = 'inline-block'
        document.getElementById("KickOut").style.display = 'none';
        document.getElementById("Fuck").style.display = 'none';
        return;
    })
    document.getElementById("KickOut").addEventListener("click", function() {
        document.getElementById("flex").style.display = 'none';
        document.getElementById("KickYesNo").style.display = 'block';
    });
    document.getElementById("LeaveDorm").addEventListener("click", function() {
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("TheDorm").style.display = 'none';
        return;
    })
    document.getElementById("LeaveHome").addEventListener("click", function() {
        battle = false;
        document.getElementById("Home").style.display = 'none'; 
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("buttons").style.display = 'block';
        return;
    });

    function PrintDoor (NESW) {
        this.NESW = NESW;
        if (NESW == "E") {
            ctx.fillStyle= MapColor;
            ctx.fillRect(startarea.width-grid, startarea.height/2-3*grid, grid, grid*6);
        }
        else if (NESW == "S") {
            ctx.fillStyle= MapColor;
            ctx.fillRect(startarea.width/2-3*grid, startarea.height-grid, grid*6, grid);
        }
        else if (NESW == "W") {
            ctx.fillStyle= MapColor;
            ctx.fillRect(0, startarea.height/2-3*grid, grid, grid*6);
        }
        else if (NESW == "N") {
            ctx.fillStyle= MapColor;
            ctx.fillRect(startarea.width/2-3*grid, 0, grid*6, grid);
        }
    }
    function PrintEnemies() {
        for (var e = 0; e < enemies.length; e++) {
            ctx.fillStyle = enemies[e].Color;
            ctx.fillRect(enemies[e].XPos, enemies[e].YPos, enemies[e].Size, enemies[e].Size);
        }
    }
    function PrintNpcs(){
        for (var e = 0; e < Npcs.length; e++) {
            ctx.fillStyle = Npcs[e].Color;
            ctx.fillRect(Npcs[e].X, Npcs[e].Y, Npcs[e].Width, Npcs[e].Height);
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
                TilePainter(0, WorldMap.height*0.2, WorldMap.width*0.2, WorldMap.height*0.2);//Start
                TilePainter(WorldMap.width*0.2, WorldMap.height*0.2, WorldMap.width*0.2, WorldMap.height*0.2);//RTC1
                TilePainter(WorldMap.width*0.2, 0, WorldMap.width*0.2, WorldMap.height*0.2);//Bandit
                TilePainter(WorldMap.width*0.2, WorldMap.height*0.4, WorldMap.width*0.2, WorldMap.height*0.2);//RTC2
                TilePainter(WorldMap.width*0.4, WorldMap.height*0.4, WorldMap.width*0.2, WorldMap.height*0.2);//City
                TilePainter(WorldMap.width*0.6, WorldMap.height*0.4, WorldMap.width*0.2, WorldMap.height*0.2);//RTH
                TilePainter(WorldMap.width*0.4, WorldMap.height*0.6, WorldMap.width*0.2, WorldMap.height*0.2);//Forest
                TilePainter(WorldMap.width*0.4, WorldMap.height*0.8, WorldMap.width*0.2, WorldMap.height*0.2);//Forest2
                TilePainter(WorldMap.width*0.6, WorldMap.height*0.2, WorldMap.width*0.2, WorldMap.height*0.2);//RTW
                TilePainter(WorldMap.width*0.6, 0, WorldMap.width*0.2, WorldMap.height*0.2);//RTW2
                TilePainter(WorldMap.width*0.8, 0, WorldMap.width*0.2, WorldMap.height*0.2);//Witch

                World.font = "2em Arial";
                World.strokeText("B",WorldMap.width*0.27, WorldMap.height*0.17);
                World.strokeText("C",WorldMap.width*0.46, WorldMap.height*0.57);
                World.strokeText("W",WorldMap.width*0.85, WorldMap.height*0.17);
                if (House.Owned == true) {
                    TilePainter(WorldMap.width*0.8, WorldMap.height*0.4,WorldMap.width*0.2,WorldMap.height*0.2);
                    World.strokeText("H",WorldMap.width*0.87,WorldMap.height*0.57);
                }

                World.font = "1em Arial";
                World.strokeText("v", WorldMap.width*0.485 , WorldMap.height)


                switch (player.Map) {
                    case "Start":
                        World.fillRect(0, WorldMap.height*0.2,WorldMap.width*0.2,WorldMap.height*0.2);
                        break;
                    case "RoadToCity1":
                        World.fillRect(WorldMap.width*0.2,WorldMap.height*0.2, WorldMap.width*0.2, WorldMap.height*0.2)
                        break;
                    case "Bandit":
                        World.fillRect(WorldMap.width*0.2,0, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "RoadToCity2":
                        World.fillRect(WorldMap.width*0.2,WorldMap.height*0.4,WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "City":
                       World.fillRect(WorldMap.width*0.4, WorldMap.height*0.4,WorldMap.width*0.2,WorldMap.height*0.2);
                        break;
                    case "RoadToHome":
                        World.fillRect(WorldMap.width*0.6,WorldMap.height*0.4, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "RoadToWitch":
                        World.fillRect(WorldMap.width*0.6, WorldMap.height*0.2, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "RoadToWitch2":
                        World.fillRect(WorldMap.width*0.6, 0, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "Witch":
                        World.fillRect(WorldMap.width*0.8, 0, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "Forest":
                        World.fillRect(WorldMap.width*0.4, WorldMap.height*0.6, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "Forest2":
                        World.fillRect(WorldMap.width*0.4, WorldMap.height*0.8, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                }
                break;
            case "Second":
                TilePainter(WorldMap.width*0.4, 0,WorldMap.width*0.2,WorldMap.height*0.2);
                TilePainter(WorldMap.width*0.2, 0, WorldMap.width*0.2, WorldMap.height*0.2);
                TilePainter(0, 0, WorldMap.width*0.2, WorldMap.height*0.2);
                TilePainter(0, WorldMap.height*0.2, WorldMap.width*0.2, WorldMap.height*0.2);
                TilePainter(0, WorldMap.height*0.4, WorldMap.width*0.2, WorldMap.height*0.2);

                switch(player.Map) {
                    case "Temp":
                        World.fillRect(WorldMap.width*0.4, 0, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "Cave1":
                        World.fillRect(WorldMap.width*0.2, 0, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "Cave2":
                        World.fillRect(0, 0, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                    case "Cave3":
                        World.fillRect(0, WorldMap.height*0.2, WorldMap.width*0.2, WorldMap.height*0.2);
                        break;
                }
                break;
                
        }
    };

    function CurrentMap() {
        switch(player.Map   ) {
            case "Start": 
                PrintDoor("E");
                if (enemies.length < 1) {
                    enemies = [EncounterStart(), EncounterStart(), EncounterStart()];
                }
                PrintMap("Start");
                break;
            case "RoadToCity1":
                PrintDoor("S");
                PrintDoor("W");
                PrintDoor("N");
                if (enemies.length < 1) {
                    enemies = [EncounterPath1(), EncounterPath1(), EncounterPath1()];
                }
                PrintMap("RoadToCity1");
                break;
            case "Bandit":
                PrintDoor("S");
                if (enemies.length < 1) {
                    enemies = [EncounterBandit(), EncounterBandit(), EncounterBandit(), EncounterBanditLord()];
                }
                PrintMap("Bandit");
                break;
            case "RoadToCity2":
                PrintDoor("N");
                PrintDoor("E");
                if (enemies.length < 1) {
                    enemies = [EncounterPath2(), EncounterPath2(), EncounterPath2()];
                }
                Npcs = [];
                PrintMap("RoadToCity2");
                break;
            case "City":
                PrintDoor("E");
                PrintDoor("W");
                PrintDoor("S");
                enemies = [];
                if (Npcs.length < 1) {
                    Npcs = [Townhall, Bar, Shop];
                }
                PrintMap("City");
                break;
            case "RoadToHome":
                PrintDoor("W");
                PrintDoor("N");
                enemies = [];
                Npcs = [];
                if (House.Owned == true) {
                    PrintDoor("E");
                }
                PrintMap("RoadToHome");
                break;
            case "RoadToWitch":
                PrintDoor("S");
                PrintDoor("N");
                enemies = [];
                if (Npcs.length < 1) {
                    Npcs = [Gym, WitchShop];
                }            
                PrintMap("RoadToWitch");
                break;
            case "RoadToWitch2":
                PrintDoor("S");
                PrintDoor("E");
                Npcs = [];
                if (enemies.length < 1) {
                    enemies = [EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2()];
                }            
                PrintMap("RoadToWitch2");
                break;
            case "Witch":
                PrintDoor("W");
                enemies = [];
                if (Npcs.length < 1) {
                    Npcs = [WitchHut];
                }            
                PrintMap("Witch");
                break;
            case "Forest":
                PrintDoor("N");
                PrintDoor("S");
                if (enemies.length < 1) {
                    enemies = [EncounterForest(), EncounterForest(), EncounterForest()];
                }
                Npcs = [];
                PrintMap("Forest");
                break
            case "Forest2":
                PrintDoor("N");
                PrintDoor("S");
                if (enemies.length <1) {
                    enemies = [EncounterForest2(), EncounterForest2(), EncounterForest2(), EncounterForest2()];
                }
                Npcs = []
                PrintMap("Forest2");
                break;
            case "Temp":
                PrintDoor("N");
                PrintDoor("W");
                if (enemies.length <1) {
            
                }
                Npcs = []
                PrintMap("Temp");
                break;
            case "Cave1":
                PrintDoor("W");
                PrintDoor("E");
                if (enemies.length <1) {
            
                }
                Npcs = []
                PrintMap("Cave1");
                break;
            case "Cave2":
                PrintDoor("S");
                PrintDoor("E");
                if (enemies.length <1) {
            
                }
                Npcs = []
                PrintMap("Cave2");
                break;
            case "Cave3":
                PrintDoor("N");
                if (enemies.length <1) {
            
                }
                Npcs = []
                PrintMap("Cave3");
                break;
        }


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
                document.getElementById("Fps").innerHTML = Math.round(1000/Thefps) + "fps";
                timer = 0;
            }
        }

        if (a != document.documentElement.clientHeight){HemScale(); a = document.documentElement.clientHeight};
        ctx.clearRect(0, 0, startarea.width, startarea.height);
        World.clearRect(0, 0, World.width, World.height);

        ctx.fillStyle = MapColor;
        World.fillStyle = MapColor;
        ctx.fillRect(0, 0, startarea.width, startarea.height);
        World.fillRect(0, 0, WorldMap.width, WorldMap.height);

        // Wall around map
        ctx.fillStyle = Settings.BorderColor;
        ctx.fillRect(0, 0, grid/2, startarea.height);
        ctx.fillRect(0, 0, startarea.width, grid/2);
        ctx.fillRect(startarea.width-(grid/2), 0, grid/2, startarea.height);
        ctx.fillRect(0, startarea.height-(grid/2), startarea.width, grid/2);

        CurrentMap();
        if (enemies.length > 0) {PrintEnemies();};
        if (Npcs.length > 0) {PrintNpcs();};

        ctx.fillStyle = "BlueViolet";
        ctx.fillRect(sprite.x, sprite.y, grid, grid);

        player.MaxHealth = player.End*10 + player.Perks.ExtraHealth.Count*20;
        player.MaxWillHealth = player.Will*10 + player.Perks.ExtraWillHealth.Count*20;

        document.getElementById("StatusName").innerHTML = player.Name + " " + player.Lastname;
        document.getElementById("StatusHealth").innerHTML = Math.round(player.Health);
        if (player.Health <= player.MaxHealth) {
            document.getElementById("StatusHealth").style.width = 100 * (player.Health / player.MaxHealth) + "%";
        }
        else {
            document.getElementById("StatusHealth").style.width = 103 + "%";
        }
        document.getElementById("StatusWillHealth").innerHTML = Math.round(player.WillHealth);
        if (player.WillHealth <= player.MaxWillHealth) {
            document.getElementById("StatusWillHealth").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
        }
        else {
            document.getElementById("StatusWillHealth").style.width = 103 + "%";
        }
        document.getElementById("StatusLevel").innerHTML = player.level;
        document.getElementById("StatusLevel").style.width = 100 * (player.Exp / MaxExp) + "%";
        document.getElementById("StatusMascFemi").innerHTML = "Masculinity: " + player.Masc + "<br> Femininity: " + player.Femi;
        document.getElementById("Gold").innerHTML = "Gold: " + Math.round(player.Gold);

        if (player.Health < player.MaxHealth && battle == false && player.Fat > 1) {
            if ((player.Health + player.RestRate) > player.MaxHealth){
                player.Health = player.MaxHealth;
            }
            else {
                player.Health += player.RestRate;
                player.Fat -= player.RestRate/50;
            }
        }
        if (player.WillHealth < player.MaxWillHealth && battle == false && player.Fat > 1) {
            if ((player.WillHealth + player.RestRate) > player.MaxWillHealth) {
                player.WillHealth = player.MaxWillHealth;
            }
            else {
                player.WillHealth += player.RestRate;
                player.Fat -= player.RestRate/50;
            }
        }
        if (player.Fat <= 1) {
            player.Health -= 0.001;
            player.WillHealth -= 0.001;
            document.getElementById("Hunger").innerHTML = "You are starving";
        }
        else {
            document.getElementById("Hunger").innerHTML = null;
        }
        ExpCheck();
        player.Fat = Math.max(1,player.Fat);
        player.Muscle = Math.max(1, player.Muscle);
        player.Weight = Math.round(player.Height*0.15 + player.Fat + player.Muscle);

        if (Doors.length < 1) {
            DoorE = new MakeDoor(startarea.width-2*grid, startarea.height/2-3*grid, grid, 5*grid, "E");
            DoorS = new MakeDoor(startarea.width/2-3*grid, startarea.height-2*grid, grid*5, grid, "S");
            DoorW = new MakeDoor(0, startarea.height/2-3*grid, grid, 5*grid, "W");
            DoorN = new MakeDoor(startarea.width/2-3*grid, 0, grid*5, grid, "N");
            Doors = [DoorE, DoorS, DoorN, DoorW];
        }

        if (House.Dormmates.length > 0) {
            player.Gold += 0.001 * House.Dormmates.length;
            for (var esf = 0; House.Dormmates.length > esf; esf++) {
                House.Dormmates[esf].Masc += 0.0001;
                House.Dormmates[esf].Femi += 0.0001;
            }
        }
        if (Settings.Vore){
            document.getElementById("VoreLooks").style.display = 'inline-block';
            VoreEngine();
        } 
        PregnanyEngine();
        HouseEngine();
        if (!battle){EssenceCheck(player);};
    };

    // Movement buttons
    document.addEventListener('keydown', function(e) {

        if ((e.which === 37 || e.which === 65) && sprite.x > grid + 1 && battle == false) {
            sprite.x -= grid;
            sprite.y += 0;
        }
        else if ((e.which === 39 || e.which === 68) && sprite.x < (startarea.width - 2*grid - 1) && battle == false) {
            sprite.x += grid;
            sprite.y += 0;
        }
        if ((e.which === 38 || e.which === 87) && sprite.y > grid + 1 && battle == false) {
            sprite.y -= grid;
            sprite.x += 0;
        }
        else if ((e.which === 40 || e.which === 83) && sprite.y < (startarea.height - 2*grid - 1) && battle == false) {
            sprite.y += grid;
            sprite.x += 0;
        }

        Touching();
        CheckDoor();
    });



 
     startarea.addEventListener('mousedown', function(e) {
        var MapRect = startarea.getBoundingClientRect();        
        var cx = e.pageX;
        var cy = e.pageY;
        if (cx - MapRect.left > sprite.x + 1.5 * grid && sprite.x < (startarea.width - 2*grid) && battle == false) {
            sprite.x += grid;
        }
        else if (cx - MapRect.left + grid/2 < sprite.x && sprite.x > grid && battle == false) {
            sprite.x -= grid;
        }
        if (cy - MapRect.top > sprite.y + 1.5 * grid && sprite.y < (startarea.height - 2*grid ) && battle == false) {
            sprite.y += grid;
        }
        else if (cy - MapRect.top + grid/2 < sprite.y && sprite.y > grid && battle == false) {
            sprite.y -= grid;
        }
        
        Touching();
        CheckDoor();
    });



    
