document.getElementById("WorldMapContainer").addEventListener("click", function () {
    if (document.getElementById("WorldMapPart").style.display == 'none') {
        document.getElementById("WorldMapPart").style.display = 'block';
        PrintMap();
    } else {
        document.getElementById("WorldMapPart").style.display = 'none';
    }
});
var WorldMap = document.getElementById("WorldMap");
var World = WorldMap.getContext("2d");

function TilePainter(x, y, w, h) {
    World.fillStyle = Settings.MapColor;
    World.fillRect(x, y, w, h);

    World.fillStyle = Settings.BorderColor;
    World.strokeRect(x, y, w, h);

}

function PrintMap(karta=null) {
    World.fillStyle = "#404040";
    World.fillRect(0, 0, WorldMap.width, WorldMap.height);

    World.fillStyle = Settings.BorderColor;
    World.strokeStyle = Settings.BorderColor;

    var Width = WorldMap.width * 0.2;
    var Height = WorldMap.height * 0.2;

    switch (player.Area) {
        case "First":
            World.fillStyle = Settings.MapColor;
            TilePainter(0, WorldMap.height * 0.2, Width, Height); //Start
            TilePainter(WorldMap.width * 0.2, WorldMap.height * 0.2, Width, Height); //RTC1
            TilePainter(WorldMap.width * 0.2, 0, Width, Height); //Bandit
            TilePainter(WorldMap.width * 0.2, WorldMap.height * 0.4, Width, Height); //RTC2
            TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.4, Width, Height); //City
            TilePainter(WorldMap.width * 0.6, WorldMap.height * 0.4, Width, Height); //RTH
            TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.6, Width, Height); //Forest
            TilePainter(WorldMap.width * 0.4, WorldMap.height * 0.8, Width, Height); //Forest2
            TilePainter(WorldMap.width * 0.6, WorldMap.height * 0.2, Width, Height); //RTW
            TilePainter(WorldMap.width * 0.6, 0, Width, Height); //RTW2
            TilePainter(WorldMap.width * 0.8, 0, Width, Height); //Witch

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
            TilePainter(WorldMap.width * 0.6, WorldMap.height * 0.2, Width, Height);


            World.font = "2em Arial";
            World.strokeText("O", WorldMap.width * 0.46, WorldMap.height * 0.57);
            World.strokeText("F", WorldMap.width * 0.66, WorldMap.height * 0.37);

            switch (player.Map) {
                case "PathToOutlaws":
                    World.fillRect(WorldMap.width * 0.4, 0, WorldMap.width * 0.2, WorldMap.height * 0.2);
                    break;
                case "PathToOutlaws2":
                    World.fillRect(WorldMap.width * 0.4, WorldMap.height * 0.2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                    break;
                case "Farm":
                    World.fillRect(WorldMap.width * 0.6, WorldMap.height * 0.2, Width, Height);
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
                case "Cave4":
                    World.fillRect(0, WorldMap.height * 0.4, WorldMap.width * 0.2, WorldMap.height * 0.2);
                    break;
            }
            break;
    }
};