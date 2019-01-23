document.getElementById("WorldMapContainer").addEventListener("click", function () {
    if (document.getElementById("WorldMapPart").style.display == 'none') {
        document.getElementById("WorldMapPart").style.display = 'block';
        PrintMap();
    } else {
        document.getElementById("WorldMapPart").style.display = 'none';
    }
});

// Tool to print mini-map
function TilePainter(x, y) {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    var Width = WorldMap.width * 0.2;
    var Height = WorldMap.height * 0.2;

    World.fillStyle = Settings.MapColor;
    World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);

    World.fillStyle = Settings.BorderColor;
    World.strokeRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
}

// Tool to highlight current map on mini-map
function CurrentTile(x, y) {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    var Width = WorldMap.width * 0.2;
    var Height = WorldMap.height * 0.2;

    World.fillStyle = Settings.BorderColor;
    World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
}

function PrintMap(karta = null) {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    World.fillStyle = "#404040";
    World.fillRect(0, 0, WorldMap.width, WorldMap.height);

    World.strokeStyle = Settings.BorderColor;
    switch (player.Area) {
        case "First":
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

            World.font = "2em Arial";
            World.strokeText("B", WorldMap.width * 0.27, WorldMap.height * 0.17);
            World.strokeText("C", WorldMap.width * 0.46, WorldMap.height * 0.57);
            World.strokeText("W", WorldMap.width * 0.85, WorldMap.height * 0.17);
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
                case "RoadToCity1":
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
            TilePainter(2, 0);
            TilePainter(1, 0);
            TilePainter(0, 0);
            TilePainter(0, 1);
            TilePainter(0, 2);
            TilePainter(2, 1);
            TilePainter(2, 2);
            TilePainter(3, 1);


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
            World.font = "1em Arial";
            World.strokeText("⇧", WorldMap.width * 0.485, WorldMap.height * 0.07)
            World.strokeText("⇦", 0, WorldMap.height * 0.525)

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
            }
            break;
    }
};

// ⇦ ⇨ ⇩ ⇧ Unicode arrows