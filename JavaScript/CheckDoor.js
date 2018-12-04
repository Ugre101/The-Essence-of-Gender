function DoorHandler(NESW) {
    if (NESW === "N") {
        sprite.y = startarea.height - 3 * grid;
        enemies = [];
    } else if (NESW === "E") {
        sprite.x = 2 * grid;
        enemies = [];
    } else if (NESW === "S") {
        sprite.y = 2 * grid;
        enemies = [];
    } else if (NESW === "W") {
        sprite.x = startarea.width - 3 * grid;
        enemies = [];
    }
}

function MakeDoor(x, y, width, height, NESW) {
    this.x = x,
        this.y = y,
        this.width = width,
        this.height = height,
        this.NESW = NESW
};

function CheckDoor() {
    var SizeMod = 0.5 + player.Height/320;
    DoorE = new MakeDoor(startarea.width - 2 * grid, startarea.height / 2 - 3 * grid, grid, 5 * grid, "E");
    DoorS = new MakeDoor(startarea.width / 2 - 3 * grid, startarea.height - 2 * grid, grid * 5, grid, "S");
    DoorW = new MakeDoor(0, startarea.height / 2 - 3 * grid, grid, 5 * grid, "W");
    DoorN = new MakeDoor(startarea.width / 2 - 3 * grid, 0, grid * 5, grid, "N");
    var Doors = [DoorE, DoorS, DoorN, DoorW];
    for (var i = 0; i < Doors.length; i++) {
        var Door = Doors[i].NESW;
        if (sprite.x + grid * SizeMod >= Doors[i].x && sprite.x <= Doors[i].x + Doors[i].width &&
            sprite.y + grid * SizeMod >= Doors[i].y && sprite.y <= Doors[i].y + Doors[i].height) {
            switch (player.Area) {
                case "First":
                    switch (player.Map) {
                        case "Start":
                            if (Door == "E") {
                                player.Map = "RoadToCity1";
                                DoorHandler("E");
                            }
                            break;
                        case "RoadToCity1":
                            if (Door == "S") {
                                player.Map = "RoadToCity2";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "Start";
                                DoorHandler("W");
                            } else if (Door == "N") {
                                player.Map = "Bandit";
                                DoorHandler("N");
                            }
                            break;
                        case "Bandit":
                            if (Door == "S") {
                                player.Map = "RoadToCity1";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToCity2":
                            if (Door == "N") {
                                player.Map = "RoadToCity1";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "City";
                                DoorHandler("E");
                            }
                            break;
                        case "City":
                            if (Door == "W") {
                                player.Map = "RoadToCity2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "RoadToHome";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Forest";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToHome":
                            if (Door == "W") {
                                player.Map = "City";
                                DoorHandler("W");
                            } else if (Door == "E" && House.Owned == true) {
                                battle = true;
                                sprite.x = startarea.width - 3 * grid;
                                document.getElementById("map").style.display = 'none';
                                document.getElementById("buttons").style.display = 'none';
                                document.getElementById("EmptyButtons").style.display = 'block';
                                document.getElementById("Home").style.display = 'block';
                                if (House.Dorm > 0) {
                                    document.getElementById("Dorm").style.display = "inline-block";
                                } else {
                                    document.getElementById("Dorm").style.display = "none"
                                }
                                if (House.Portal.Owned) {
                                    document.getElementById("Portal").style.display = 'inline-block'
                                } else {
                                    document.getElementById("Portal").style.display = 'none'
                                }
                                if (House.Brothel > 0) {
                                    document.getElementById("Brothel").style.display = 'inline-block';
                                } else {
                                    document.getElementById("Brothel").style.display = 'none';
                                }
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch";
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch":
                            if (Door == "S") {
                                player.Map = "RoadToHome";
                                DoorHandler("S");
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch2"
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch2":
                            if (Door == "S") {
                                player.Map = "RoadToWitch";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Witch";
                                DoorHandler("E");
                            }
                            break;
                        case "Witch":
                            if (Door == "W") {
                                player.Map = "RoadToWitch2";
                                DoorHandler("W");
                            }
                            break;
                        case "Forest":
                            if (Door == "N") {
                                player.Map = "City";
                                DoorHandler("N");
                            } else if (Doors[i].NESW == "S") {
                                player.Map = "Forest2";
                                DoorHandler("S");
                            }
                            break;
                        case "Forest2":
                            if (Door == "N") {
                                player.Map = "Forest";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws";
                                player.Area = "Second";
                                DoorHandler("S");
                            }
                            break;
                    }
                    break;
                case "Second":
                    switch (player.Map) {
                        case "PathToOutlaws":
                            if (Door == "N") {
                                player.Map = "Forest2";
                                player.Area = "First";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "Cave1";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("S");
                            }
                            break;
                        case "PathToOutlaws2":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Outlaws";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Farm";
                                DoorHandler("E");
                            }
                            break;
                        case "Farm":
                            if (Door == "W") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("W");
                            }
                            break;
                        case "Outlaws":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("N");
                            }
                            break;
                        case "Cave1":
                            if (Door == "E") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "Cave2";
                                DoorHandler("W");
                            }
                            break;
                        case "Cave2":
                            if (Door == "E") {
                                player.Map = "Cave1";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Cave3";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave3":
                            if (Door == "N") {
                                player.Map = "Cave2";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Cave4";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave4":
                            if (Door == "N") {
                                player.Map = "Cave3";
                                DoorHandler("N");
                            }
                    }
                    break;
                case "Mountain":
                    switch (player.Map) {
                        case "MountainStart":
                            if (Door == "S") {
                                player.Map = "MountainClimb";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrinePath":
                            if (Door == "E") {
                                player.Map = "MountainStart";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "MountainShrine";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrine":
                            if (Door == "E") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                //player.Map = "";
                                //DoorHandler("W");
                            }
                            break;
                        case "MountainClimb":
                            if (Door == "N") {
                                player.Map = "MountainStart";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb2";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb2":
                            if (Door == "N") {
                                player.Map = "MountainClimb";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb3";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb3":
                            if (Door == "W") {
                                player.Map = "MountainClimb2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb4";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb4":
                            if (Door == "N") {
                                player.Map = "MountainClimb5";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "MountainClimb3";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainClimb5":
                            if (Door == "N") {
                                player.Map = "MountainClimb6";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb4";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb6":
                            if (Door == "N") {
                                player.Map = "MountainClimb7";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb5";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb7":
                            if (Door == "N") {
                                player.Map = "MountainClimb8";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb6";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb8":
                            if (Door == "W") {
                                player.Map = "MountainClimb9";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb7";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb9":
                            if (Door == "W") {
                                player.Map = "MountainClimb10";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb8";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb10":
                            if (Door == "N") {
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb9";
                                DoorHandler("E");
                            }
                            break;
                    }
                    break
            }
        }
    }
};