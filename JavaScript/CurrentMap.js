function PrintDoor(NESW) {
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    this.NESW = NESW;
    if (NESW == "E") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(startarea.width - grid, startarea.height / 2 - 3 * grid, grid, grid * 6);
    } else if (NESW == "S") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(startarea.width / 2 - 3 * grid, startarea.height - grid, grid * 6, grid);
    } else if (NESW == "W") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(0, startarea.height / 2 - 3 * grid, grid, grid * 6);
    } else if (NESW == "N") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(startarea.width / 2 - 3 * grid, 0, grid * 6, grid);
    }
}

function PrintImage(ImageSrc) {
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    var backmap = new Image;
    backmap.src = "Tiles/" + ImageSrc + ".png";
    ctx.clearRect(0,0, startarea.width, startarea.height);
    ctx.drawImage(backmap, 0, 0, startarea.width, startarea.height);
};

function CurrentMap() {
    //First Town
    var Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)");
    var Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)");
    var Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)")
    // RtW
    var Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
    var WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
    // Witch
    var WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)");
    var ChimeraShrine = new Npc("ChimeraShrine", "Chimera shrine", grid * 3, grid * 17, grid * 2, grid * 2, "RGB(133,94,66)");
    // Misc
    var Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)");
    var Portal = new Npc("LocalPortal", "Portal", grid * 12, grid * 8, grid * 4, grid * 4, "RGB(96, 47, 107)");
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
    var MountainShrine = new Npc("MountainShrine", "Shrine", grid * 5, grid * 1, grid * 2, grid * 2, "Pink");
    var ShrinePriestess = new Npc("ShrinePriestess", "Priestess", grid * 15, grid, grid, grid, "Pink");
    // Dragons
    var TribeChief = new Npc("TribeChief", "", grid *2, grid * 8, grid, grid, "#841A31");
    var TribeChiefWife = new Npc("TribeChiefWife", "", grid * 2, grid * 10, grid, grid, "#841A31");
    var TribeShop = new Npc("TribeShop", "", grid * 12, grid * 15, grid * 4, grid * 5, "RGB(133,94,66)");

    //Animal testing
    /*	var aSpawn = Math.random();
    	if (enemies.length < 1 && Settings.AnimalSpawn)
    	{
    		console.log("Animal?");
    		enemies = [animalSpawn(player.Height), animalSpawn(player.Height)];
    		return;
        }*/
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    var backmap = new Image;
    switch (player.Area) {
        case "First":
            switch (player.Map) {
                case "Start":
                    if (enemies.length < 1) {
                        enemies = [EncounterStart(), EncounterStart(), EncounterStart()];
                    }
                    PrintMap("Start");
                    PrintImage("Start");
                    break;
                case "RoadToCity1":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath1(), EncounterPath1(), EncounterPath1()];
                    }
                    PrintMap("RoadToCity1");
                    PrintImage("RoadToCity")
                    break;
                case "Bandit":
                    if (enemies.length < 1) {
                        enemies = [EncounterBandit(), EncounterBandit(), EncounterBandit(), EncounterBanditLord()];
                    }
                    PrintMap("Bandit");
                    PrintImage("Bandit");
                    break;
                case "RoadToCity2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath2(), EncounterPath2(), EncounterPath2()];
                    }
                    Npcs = [];
                    PrintMap("RoadToCity2");
                    PrintImage("RoadToCity2");
                    break;
                case "City":
                    Npcs = [];
                    enemies = [];
                    if (Npcs.length < 1) {
                        Npcs = [Townhall, Bar, Shop];
                    }
                    PrintMap("City");
                    PrintImage("City");
                    break;
                case "RoadToHome":
                    Npcs = [];
                    enemies = [];
                    if (Npcs.length < 1) {
                        Npcs = [ChimeraShrine];
                    }
                    PrintMap("RoadToHome");
                    PrintImage("RoadToHome");
                    break;
                case "RoadToWitch":
                    Npcs = [];
                    enemies = [];
                    if (Npcs.length < 1) {
                        Npcs = [Gym, WitchShop, Barber];
                    }
                    PrintMap("RoadToWitch");
                    PrintImage("RoadToWitch");
                    break;
                case "RoadToWitch2":
                    Npcs = [];
                    if (enemies.length < 1) {
                        enemies = [EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2()];
                    }
                    PrintMap("RoadToWitch2");
                    PrintImage("RoadToWitch2");
                    break;
                case "Witch":
                    Npcs = [];
                    enemies = [];
                    if (Npcs.length < 1) {
                        Npcs = [WitchHut];
                    }
                    PrintMap("Witch");
                    PrintImage("Witchhut");
                    break;
                case "Forest":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest(), EncounterForest(), EncounterForest(), RespawnBlocker()];
                    }
                    Npcs = [];
                    PrintMap("Forest");
                    PrintImage("Forest");
                    break
                case "Forest2":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest2(), EncounterForest2(), EncounterForest2(), EncounterForest2(), RespawnBlocker()];
                    }
                    Npcs = []
                    PrintMap("Forest2");
                    PrintImage("Forest2");
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    if (enemies.length < 1) {

                    }
                    Npcs = []
                    PrintMap("PathToOutlaws");
                    PrintImage("PathToOutlaws");
                    break;
                case "PathToOutlaws2":
                    if (enemies.length < 1) {

                    }
                    Npcs = []
                    PrintMap("PathToOutlaws2");
                    PrintImage("PathToOutlaws2");
                    break;
                case "Farm":
                    PrintDoor("W");
                    if (enemies.length < 1) {}
                    if (Npcs.length < 1) {
                        Npcs = [FarmOwner, FarmBarn]
                    }
                    PrintMap("Farm");
                    break;
                case "Outlaws":
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {
                        Npcs = [BlackMarket, PortalShop]
                    }
                    PrintMap("Outlaws");
                    PrintImage("Outlaws");
                    break;
                case "Cave1":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1()]
                    }
                    Npcs = []
                    PrintMap("Cave1");
                    PrintImage("Cave1");
                    break;
                case "Cave2":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2()]
                    }
                    Npcs = []
                    PrintMap("Cave2");
                    PrintImage("Cave2");
                    break;
                case "Cave3":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave3(), EncounterCave3(), EncounterCave3()]
                    }
                    Npcs.length = [];
                    PrintMap("Cave3");
                    PrintImage("Cave3");
                    break;
                case "Cave4":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave4(), EncounterCave4(), EncounterCave4(), EncounterCave4()]
                    }
                    if (Npcs.length < 1) {
                        Npcs = [FirstDungeon];
                    }
                    PrintMap("Cave4");
                    PrintImage("Cave4");
                    break;
            }
            break;
        case "Mountain":
            switch (player.Map) {
                case "MountainStart":
                    PrintDoor("S");
                    PrintDoor("W");
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {
                        Npcs = [Portal];
                    }
                    PrintMap()
                    break;
                case "MountainShrinePath":
                    PrintDoor("E");
                    PrintDoor("W");
                    Npcs = [];
                    if (enemies.length < 1) {
                        var a = RandomInt(2, 4);
                        enemies = [];
                        for (var e = 0; e < a; e++) {
                            enemies.push(EncounterMaiden());
                        }
                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainShrine":
                    PrintDoor("E");
                    PrintDoor("W");
                    Npcs = [];
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {
                        Npcs = [MountainShrine];
                    }
                    PrintMap()
                    break;
                case "MountainClimb":
                    PrintDoor("S");
                    PrintDoor("N");
                    Npcs = [];
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {

                    }
                    PrintMap()
                    break;
                case "MountainClimb2":
                    PrintDoor("E");
                    PrintDoor("N");
                    Npcs = [];
                    if (enemies.length < 1) {
                        enemies = [EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy()]
                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainClimb3":
                    PrintDoor("E");
                    PrintDoor("W");
                    Npcs = [];
                    if (enemies.length < 1) {
                        enemies = [];
                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainClimb4":
                    PrintDoor("W");
                    PrintDoor("N");
                    Npcs = [];
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind()];
                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainClimb5":
                    PrintDoor("S");
                    PrintDoor("N");
                    Npcs = [];
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterAnthroDragon()];
                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainClimb6":
                    PrintDoor("S");
                    PrintDoor("N");
                    Npcs = [];
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterAnthroDragon(), EncounterAnthroDragon()]
                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainClimb7":
                    PrintDoor("S");
                    PrintDoor("N");
                    Npcs = [];
                    if (enemies.length < 1) {
                        enemies = [EncounterAnthroDragon(), EncounterAnthroDragon(), EncounterAnthroDragon()];
                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainTribe":
                    PrintDoor("E");
                    PrintDoor("N");
                    if (Npcs.length < 1) {
                        Npcs = [TribeChief, TribeChiefWife, TribeShop];
                    }
                    enemies = [];
                    PrintMap("MountainTribe")
                    break;
                case "MountainClimb8":
                    PrintDoor("S");
                    PrintDoor("W");
                    Npcs = [];
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainClimb9":
                    PrintDoor("W");
                    PrintDoor("E");
                    Npcs = [];
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {}
                    PrintMap()
                    break;
                case "MountainClimb10":
                    PrintDoor("N");
                    PrintDoor("E");
                    Npcs = []
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {
                        Npcs = [Portal];
                    }
                    PrintMap()
                    break;
            }
            break;
        default:
            switch (player.Map) {
                case "TempCity":
                    if (enemies.length < 1) {

                    }
                    if (Npcs.length < 1) {
                        Npcs = [Portal];
                    }
                    break;
            }
    }
}