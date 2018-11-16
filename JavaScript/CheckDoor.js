function CheckDoor() {
    for (var i = 0; i < Doors.length; i++) {
        if (sprite.x >= Doors[i].x && sprite.x <= Doors[i].x + Doors[i].width &&
            sprite.y >= Doors[i].y && sprite.y <= Doors[i].y + Doors[i].height) {
            switch (player.Map) {
                case "Start":
                    if (Doors[i].NESW == "E") {
                        sprite.x = grid * 2;
                        player.Map = "RoadToCity1";
                        enemies = [];
                    }
                    break;
                case "RoadToCity1":
                    if (Doors[i].NESW == "S") {
                        player.Map = "RoadToCity2";
                        sprite.y = grid * 2;
                        enemies = [];
                    } else if (Doors[i].NESW == "W") {
                        player.Map = "Start";
                        sprite.x = startarea.width - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "N") {
                        player.Map = "Bandit";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    }
                    break;
                case "Bandit":
                    if (Doors[i].NESW == "S") {
                        player.Map = "RoadToCity1";
                        sprite.y = 2 * grid;
                        enemies = [];
                    }
                    break;
                case "RoadToCity2":
                    if (Doors[i].NESW == "N") {
                        player.Map = "RoadToCity1";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "E") {
                        player.Map = "City";
                        sprite.x = 2 * grid;
                        enemies = [];
                    }
                    break;
                case "City":
                    if (Doors[i].NESW == "W") {
                        player.Map = "RoadToCity2";
                        sprite.x = startarea.width - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "E") {
                        player.Map = "RoadToHome";
                        sprite.x = 2 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "S") {
                        player.Map = "Forest";
                        sprite.y = grid * 2;
                        enemies = [];
                    }
                    break;
                case "RoadToHome":
                    if (Doors[i].NESW == "W") {
                        player.Map = "City";
                        sprite.x = startarea.width - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "E" && House.Owned == true) {
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
                        if (House.hasOwnProperty("Portal")) {
                            document.getElementById("Portal").style.display = 'inline-block'
                        } else {
                            document.getElementById("Portal").style.display = 'none'
                        }
                        if (House.Brothel > 0) {
                            document.getElementById("Brothel").style.display = 'inline-block';
                        } else {
                            document.getElementById("Brothel").style.display = 'none';
                        }
                    } else if (Doors[i].NESW == "N") {
                        player.Map = "RoadToWitch";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    }
                    break;
                case "RoadToWitch":
                    if (Doors[i].NESW == "S") {
                        player.Map = "RoadToHome";
                        sprite.y = 2 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "N") {
                        player.Map = "RoadToWitch2"
                        sprite.y = startarea.height - 3 * grid
                        enemies = [];
                    }
                    break;
                case "RoadToWitch2":
                    if (Doors[i].NESW == "S") {
                        player.Map = "RoadToWitch";
                        sprite.y = 2 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "E") {
                        player.Map = "Witch";
                        sprite.x = 2 * grid;
                        enemies = [];
                    }
                    break;
                case "Witch":
                    {
                        if (Doors[i].NESW == "W") {
                            player.Map = "RoadToWitch2";
                            sprite.x = startarea.width - 3 * grid;
                            enemies = [];
                        }
                        break;
                    }
                case "Forest":
                    if (Doors[i].NESW == "N") {
                        player.Map = "City";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "S") {
                        player.Map = "Forest2";
                        sprite.y = grid * 2;
                        enemies = [];
                    }
                    break;
                case "Forest2":
                    if (Doors[i].NESW == "N") {
                        player.Map = "Forest";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "S") {
                        player.Map = "PathToOutlaws";
                        player.Area = "Second";
                        sprite.y = 2 * grid;
                        enemies = [];
                    }
                    break;
                case "PathToOutlaws":
                    if (Doors[i].NESW == "N") {
                        player.Map = "Forest2";
                        player.Area = "First";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "W") {
                        player.Map = "Cave1";
                        sprite.x = startarea.width - 3 * grid;
                        enemies = []
                    } else if (Doors[i].NESW == "S") {
                        player.Map = "PathToOutlaws2";
                        sprite.y = 2 * grid;
                        enemies = []
                    }
                    break;
                case "PathToOutlaws2":
                    if (Doors[i].NESW == "N") {
                        player.Map = "PathToOutlaws";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "S") {
                        player.Map = "Outlaws";
                        sprite.y = 2 * grid;
                        enemies = []
                    } else if (Doors[i].NESW == "E") {
                        player.Map = "Farm";
                        sprite.x = 2 * grid;
                        enemies = [];
                    }
                    break;
                case "Farm":
                    if (Doors[i].NESW == "W") {
                        player.Map = "PathToOutlaws2";
                        sprite.x = startarea.width - 3 * grid;
                    }
                case "Outlaws":
                    if (Doors[i].NESW == "N") {
                        player.Map = "PathToOutlaws2";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    }
                    break;
                case "Cave1":
                    if (Doors[i].NESW == "E") {
                        player.Map = "PathToOutlaws";
                        sprite.x = 2 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "W") {
                        player.Map = "Cave2";
                        sprite.x = startarea.width - 3 * grid;
                        enemies = [];
                    }
                    break;
                case "Cave2":
                    if (Doors[i].NESW == "E") {
                        player.Map = "Cave1";
                        sprite.x = 2 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "S") {
                        player.Map = "Cave3";
                        sprite.y = 2 * grid;
                        enemies = [];
                    }
                    break;
                case "Cave3":
                    if (Doors[i].NESW == "N") {
                        player.Map = "Cave2";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    } else if (Doors[i].NESW == "S") {
                        player.Map = "Cave4";
                        sprite.y = 2 * grid;
                        enemies = [];
                    }
                    break;
                case "Cave4":
                    if (Doors[i].NESW == "N") {
                        player.Map = "Cave3";
                        sprite.y = startarea.height - 3 * grid;
                        enemies = [];
                    }
            }
        }
    }
};