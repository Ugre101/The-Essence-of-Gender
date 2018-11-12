var backmap;

function CurrentMap() {
    switch (player.Area) {
        case "First":
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
            }
            break;
        case "Second":
            switch (player.Map) {
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
                        Npcs = [BlackMarket]
                    }
                    PrintMap("Outlaws");
                    backmap = new Image;
                    backmap.src = "Tiles/Outlaws.png";
                    ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                    break;
                case "Cave1":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1()]
                    }
                    Npcs = []
                    PrintMap("Cave1");
                    backmap = new Image;
                    backmap.src = "Tiles/Cave1.png";
                    ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                    break;
                case "Cave2":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2()]
                    }
                    Npcs = []
                    PrintMap("Cave2");
                    backmap = new Image;
                    backmap.src = "Tiles/Cave2.png";
                    ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                    break;
                case "Cave3":
                    PrintDoor("N");
                    if (enemies.length < 1) {
                        enemies = [EncounterCave3(), EncounterCave3(), EncounterCave3()]
                    }
                    Npcs.length = [];
                    PrintMap("Cave3");
                    backmap = new Image;
                    backmap.src = "Tiles/Cave3.png";
                    ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                    break;
                case "Cave4":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave4(), EncounterCave4(), EncounterCave4(), EncounterCave4()]
                    }
                    if (Npcs.length < 1) {
                        Npcs = [FirstDungeon];
                    }
                    backmap = new Image;
                    backmap.src = "Tiles/Cave3.png";
                    ctx.drawImage(backmap, 0, 0, 20 * grid, 20 * grid);
                    PrintMap("Cave4")
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