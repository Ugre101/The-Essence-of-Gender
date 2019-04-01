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
    NpcImageLoader = NpcImageLoad(["LocalPortal", "FarmBarn","BlackMarket"], function (images) {
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
        FirstDungeon = new Npc("FirstDungeon", "Dungeon", grid * 8, grid * 18, grid * 4, grid * 2, "RGB(133,94,66)"),
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
                    Npcs = [FirstDungeon];
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
            HasSprite = ["LocalPortal", "FarmBarn","BlackMarket"];
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
                    clearInterval(mFunction);
                    mousedowner = false;
                }
                battle = true;
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