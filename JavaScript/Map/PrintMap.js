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
    MapIconsToLoad = MapIconsLoader(["skull_01"])

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
// Tool to print mini-map
function PrintMap() {
    const WorldMap = document.getElementById("WorldMap"),
        World = WorldMap.getContext("2d"),
        Width = WorldMap.width * 0.2,
        Height = WorldMap.height * 0.2;
    World.globalAlpha = 1;

    function TileImagePainter(x, y, image) {
        World.drawImage(Tiles_images[image], WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
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
            if (true) {
                TileImagePainter(0, 1, "Start");
                TileImagePainter(1, 1, "RoadToCity"); //RTC1
                TileImagePainter(1, 0, "Bandit"); //Bandit
                TileImagePainter(1, 2, "RoadToCity2"); //RTC2
                TileImagePainter(2, 2, "City"); //City
                TileImagePainter(3, 2, "RoadToHome"); //RTH
                TileImagePainter(2, 3, "Forest"); //Forest
                TileImagePainter(2, 4, "Forest2"); //Forest2
                TileImagePainter(3, 1, "RoadToWitch"); //RTW
                TileImagePainter(3, 0, "RoadToWitch2"); //RTW2
                TileImagePainter(4, 0, "Witch"); //Witch

            } else if (false) {
                TilePainter(0, 1); //Start
                TilePainter(1, 1); //RTC1
                TilePainter(1, 0); //Bandit
                TilePainter(1, 2); //RTC2
                TilePainter(2, 2); //City
                TilePainter(3, 2); //RTH
                TilePainter(2, 3); //Forest
                TilePainter(2, 4); //Forest2
                TilePainter(3, 1); //RTW
                TilePainter(3, 0); //RTW2
                TilePainter(4, 0); //Witch
            }
            World.font = "2em Arial";
            World.drawImage(MapIcons.skull_01, WorldMap.width * 0.25, WorldMap.height * 0.05, Width / 2, Height / 2);
            if (House.Owned == true) {
                TilePainter(4, 2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                World.strokeText("H", WorldMap.width * 0.87, WorldMap.height * 0.57);
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
            if (true) {
                TileImagePainter(2, 0, "PathToOutlaws");
                TileImagePainter(1, 0, "Cave1");
                TileImagePainter(0, 0, "Cave2");
                TileImagePainter(0, 1, "Cave3");
                TileImagePainter(0, 2, "Cave4");
                TileImagePainter(2, 1, "PathToOutlaws2");
                TileImagePainter(2, 2, "Outlaws");
                TileImagePainter(3, 1, "Farm");
            } else if (false) {
                TilePainter(2, 0); //PTO
                TilePainter(1, 0); //Cave1
                TilePainter(0, 0);
                TilePainter(0, 1);
                TilePainter(0, 2);
                TilePainter(2, 1);
                TilePainter(2, 2);
                TilePainter(3, 1);
            }

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
            if (true) {
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
            } else if (false) {
                TilePainter(1, 2);
                TilePainter(0, 2);
                TilePainter(2, 2);
                TilePainter(2, 3);
                TilePainter(2, 4);
                TilePainter(3, 4);
                TilePainter(4, 4);
                TilePainter(4, 3);
                TilePainter(4, 2);
                TilePainter(4, 1);
                TilePainter(4, 0);
                TilePainter(3, 0);
                TilePainter(2, 0);
            }
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