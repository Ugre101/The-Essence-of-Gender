function PrintDoors() {
    function PrintDoor(NESW) {
        const startarea = document.getElementById("hem"),
            ctx = startarea.getContext("2d");
        ctx.fillStyle = Settings.MapColor;
        switch (NESW.toUpperCase()) {
            case "E":
                ctx.fillRect(startarea.width - grid, startarea.height / 3, grid, grid * 6);
                break;
            case "S":
                ctx.fillRect(startarea.width / 3, startarea.height - grid, grid * 6, grid);
                break;
            case "W":
                ctx.fillRect(0, startarea.height / 3, grid, grid * 6);
                break;
            case "N":
                ctx.fillRect(startarea.width / 3, 0, grid * 6, grid);
                break;
        }
    }
    switch (player.Area) {
        case "First":
            switch (player.Map) {
                case "Start":
                    PrintDoor("E");
                    break;
                case "RoadToCity":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
                case "Bandit":
                    PrintDoor("S");
                    break;
                case "RoadToCity2":
                    PrintDoor("N");
                    PrintDoor("E");
                    break;
                case "City":
                    PrintDoor("E");
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "RoadToHome":
                    PrintDoor("N");
                    PrintDoor("W");
                    break;
                case "RoadToWitch":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "RoadToWitch2":
                    PrintDoor("S");
                    PrintDoor("E");
                    break;
                case "Witch":
                    PrintDoor("W");
                    break;
                case "Forest":
                    PrintDoor("N");
                    PrintDoor("S");
                    break
                case "Forest2":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    PrintDoor("S");
                    PrintDoor("N");
                    PrintDoor("W");
                    break;
                case "PathToOutlaws2":
                    PrintDoor("N");
                    PrintDoor("S");
                    PrintDoor("E");
                    break;
                case "Farm":
                    PrintDoor("W");
                    break;
                case "Outlaws":
                    PrintDoor("N");
                    break;
                case "Cave1":
                    PrintDoor("W");
                    PrintDoor("E");
                    break;
                case "Cave2":
                    PrintDoor("E");
                    PrintDoor("S");
                    break;
                case "Cave3":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "Cave4":
                    PrintDoor("N");
                    break;
            }
            break;
        case "Mountain":
            switch (player.Map) {
                case "MountainStart":
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "MountainShrinePath":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainShrine":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainClimb":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
                case "MountainClimb2":
                    PrintDoor("E");
                    PrintDoor("N");
                    break;
                case "MountainClimb3":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainClimb4":
                    PrintDoor("W");
                    PrintDoor("N");
                    break;
                case "MountainClimb5":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainClimb6":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainClimb7":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainTribe":
                    PrintDoor("E");
                    PrintDoor("N");
                    break;
                case "MountainClimb8":
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "MountainClimb9":
                    PrintDoor("W");
                    PrintDoor("E");
                    break;
                case "MountainPlateau":
                    PrintDoor("N");
                    PrintDoor("E");
                    break;
            }
            break;
        default:
            switch (player.Map) {
                case "TempCity":
                    break;
            }
    }
}