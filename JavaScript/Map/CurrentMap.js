function ImageLoad(arr, callback) { // Preload images to stop flickering
    this.images = {};
    var loaded = 0;

    if (Array.isArray(arr)) {
        for (var e of arr) {
            var img = new Image();
            img.onload = ImageLoaded;
            img.src = "Tiles/" + e + ".png";
            images[e] = img;
        }
    } else {
        return
    }

    function ImageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback();
        }
    }
}
var _images = {};
var loader = ImageLoad(["Bandit", "Cave1", "Cave2", "Cave3", "Cave4", "City", "Forest", "Forest2", "Outlaws",
    "PathToOutlaws", "PathToOutlaws2", "RoadToCity", "RoadToCity2", "RoadToHome", "RoadToWitch", "RoadToWitch2",
    "rtb2", "Start", "Witch", "MountainStart", "MountainShrinePath", "MountainShrine", "MountainClimb", "MountainClimb2",
    "MountainClimb3", "MountainClimb4", "MountainClimb5", "MountainClimb6", "MountainClimb7", "MountainClimb8",
    "MountainClimb9", "MountainPlateau"
], function () {
    _images = this.images;
    // Stop player from starting before tiles are loaded
    document.getElementById("LoadingImagesProgress").innerHTML = "Tiles loaded";
    document.getElementById("LoadingImagesProgress").classList.remove("visible");
    document.getElementById("LoadingImagesProgress").classList.add("hidden");

});

function PrintImage() { // New and improved
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    if (typeof _images[player.Map] !== "undefined") {
        ctx.clearRect(0, 0, startarea.width, startarea.height);
        ctx.fillRect(0, 0, 20 * grid, 20 * grid)
        ctx.drawImage(_images[player.Map], 0, 0, startarea.width, startarea.height);
        if (Settings.HighLightDoors) {
            PrintDoors();
        }
    } else {
        PaintBackground();
        PrintDoors();
    }
};

function CurrentMap() {
    var Npcs = []; // Moved here to avoid public handling of npcs, need to double check so I haven't
    // forgoten avoid any refernce to Npcs somewhere
    PrintImage()
    //First Town
    var Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)");
    var Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)");
    var Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)")
    // RtW
    var Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
    var WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 6, grid * 4.5, grid * 10, "RGB(133,94,66)");
    // Witch
    var WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)");
    var ChimeraShrine = new Npc("ChimeraShrine", "Chimera shrine", grid * 3, grid * 17, grid * 2, grid * 2, "RGB(133,94,66)");
    // Misc
    var Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)");

    function Portal(Xpos, Ypos) { // Portal is function so I can change X-position & Y-position
        return new Npc("LocalPortal", "Portal", grid * Xpos, grid * Ypos, grid * 4, grid * 4, "RGB(96, 47, 107)")
    }
    var Barber = new Npc("Barber", "Hair salon", grid * 15, grid, grid * 5, grid * 4, "RGB(133,94,66)");
    var PortalShop = new Npc("PortalShop", "Portal shop", grid, grid * 15, grid * 4, grid * 4, "RGB(133,94,66)");
    //Outlaw
    var BlackMarket = new Npc("BlackMarket", "Black market", grid * 12, grid * 5, grid * 5, grid * 3, "RGB(133,94,66)");
    // Dungeons
    var FirstDungeon = new Npc("FirstDungeon", "Dungeon", grid * 8, grid * 18, grid * 4, grid * 2, "RGB(133,94,66)");
    // Farm
    var FarmOwner = new Npc("FarmOwner", "Teoviz", grid * 5, grid * 2, grid, grid, "RGB(133,94,66)");
    var FarmBarn = new Npc("FarmBarn", "Barn", grid * 13, grid, grid * 5, grid * 7, "RGB(133,94,66)");
    // Shrine
    var MountainShrine = new Npc("MountainShrine", "Shrine", grid * 5.5, grid * 2.5, grid * 2.4, grid * 2.4, "Pink");
    var ShrinePriestess = new Npc("ShrinePriestess", "Priestess", grid * 15, grid, grid, grid, "Pink");
    // Dragons
    var TribeChief = new Npc("TribeChief", "", grid * 2, grid * 8, grid, grid, "#841A31");
    var TribeChiefWife = new Npc("TribeChiefWife", "", grid * 2, grid * 10, grid, grid, "#841A31");
    var TribeShop = new Npc("TribeShop", "", grid * 12, grid * 15, grid * 4, grid * 5, "RGB(133,94,66)");

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
                    PrintImage("Start");
                    break;
                case "RoadToCity":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath1(), EncounterPath1(), EncounterPath1()];
                    }
                    PrintImage("RoadToCity")
                    break;
                case "Bandit":
                    if (enemies.length < 1) {
                        enemies = [EncounterBandit(), EncounterBandit(), EncounterBandit(), EncounterBanditLord()];
                    }
                    PrintImage("Bandit");
                    break;
                case "RoadToCity2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath2(), EncounterPath2(), EncounterPath2()];
                    }
                    PrintImage("RoadToCity2");
                    break;
                case "City":
                    enemies = [];
                    Npcs = [Townhall, Bar, Shop];
                    PrintImage("City");
                    break;
                case "RoadToHome":
                    enemies = [];
                    Npcs = [ChimeraShrine];
                    PrintImage("RoadToHome");
                    break;
                case "RoadToWitch":
                    enemies = [];
                    Npcs = [Gym, WitchShop, Barber];
                    PrintImage("RoadToWitch");
                    break;
                case "RoadToWitch2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2()];
                    }
                    PrintImage("RoadToWitch2");
                    break;
                case "Witch":
                    enemies = [];
                    Npcs = [WitchHut];
                    PrintImage("Witchhut");
                    break;
                case "Forest":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest(), EncounterForest(), EncounterForest(), RespawnBlocker()];
                    }
                    PrintImage("Forest");
                    break
                case "Forest2":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest2(), EncounterForest2(), EncounterForest2(), EncounterForest2(), RespawnBlocker()];
                    }
                    PrintImage("Forest2");
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    if (enemies.length < 1) {

                    }
                    PrintImage("PathToOutlaws");
                    break;
                case "PathToOutlaws2":
                    if (enemies.length < 1) {

                    }
                    PrintImage("PathToOutlaws2");
                    break;
                case "Farm":
                    PrintDoor("W");
                    if (enemies.length < 1) {}
                    Npcs = [FarmOwner, FarmBarn]
                    break;
                case "Outlaws":
                    if (enemies.length < 1) {

                    }
                    Npcs = [BlackMarket, PortalShop, Portal(15, 15)]
                    PrintImage("Outlaws");
                    break;
                case "Cave1":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1()]
                    }
                    PrintImage("Cave1");
                    break;
                case "Cave2":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2()]
                    }
                    PrintImage("Cave2");
                    break;
                case "Cave3":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave3(), EncounterCave3(), EncounterCave3()]
                    }
                    PrintImage("Cave3");
                    break;
                case "Cave4":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave4(), EncounterCave4(), EncounterCave4(), EncounterCave4()]
                    }
                    Npcs = [FirstDungeon];
                    PrintImage("Cave4");
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
    Npcs.length > 0 ? (PrintNpcs(Npcs), TouchNpc(Npcs)) : false;
}

function PrintNpcs(Npcs) {
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    var needPrint = ["FarmBarn", "FarmOwner", "LocalPortal", "PortalShop", "Barber", "MountainShrine", "ChimeraShrine"];
    // Switched it so new npcs always print
    var DontneedPrint = ["Townhall", "Shop", "Bar", "Gym", "WitchShop", "WitchHut", "BlackMarket"];
    for (var e of Npcs) {
        if (DontneedPrint.indexOf(e.Name) === -1) {
            ctx.fillStyle = e.Color;
            ctx.fillRect(e.X, e.Y, e.Width, e.Height);
        }
        ctx.fillStyle = Settings.TextColor;
        ctx.font = "4vh Arial";
        ctx.textAlign = "center";
        ctx.fillText(e.RealName, e.X + e.Width / 2, e.Y + e.Height / 1.8);
    }
};

function TouchNpc(Npcs) {
    for (var n of Npcs) {
        if (sprite.x + grid * sprite.Size >= n.X && sprite.x < n.X + n.Width &&
            sprite.y + grid * sprite.Size >= n.Y && sprite.y < n.Y + n.Height) {
            if (mousedowner) {
                clearInterval(mFunction);
                mousedowner = false;
            }
            battle = true;
            var startarea = document.getElementById("hem");
            sprite.x = startarea.width / 2 - grid;
            sprite.y = startarea.height / 2;
            UpdateNpc(n.Name);
            document.getElementById("SellLimbs").style.display = Settings.EssenceAuto ? 'none' : 'inline-block';
        }
    }
}

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

function PaintBackground() {
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    ctx.fillStyle = Settings.MapColor;
    ctx.fillRect(0, 0, startarea.width, startarea.height);

    // Wall around map
    ctx.fillStyle = Settings.BorderColor;
    ctx.fillRect(0, 0, grid / 2, startarea.height);
    ctx.fillRect(0, 0, startarea.width, grid / 2);
    ctx.fillRect(startarea.width - (grid / 2), 0, grid / 2, startarea.height);
    ctx.fillRect(0, startarea.height - (grid / 2), startarea.width, grid / 2);
}