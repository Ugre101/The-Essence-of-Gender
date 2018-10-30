function PregnanyEngine() {
    if (player.Children.length > 0) {
        for (var e = 0; e < player.Children.length; e++) {
            player.Children[e].AgeCounter++;
            if (player.Children[e].AgeCounter % 365 == 0) {
                var age = Math.round(player.Children[e].AgeCounter / 365);
                EventLog("Your child has grown " + IntToAge(age) + " old.");
            }
        }
    }

    if (player.Pregnant.Babies.length < 1) {
        player.Pregnant.Status = false;
    }
    if (player.Pregnant.Babies.length > 0) {
        for (var e = 0; e < player.Pregnant.Babies.length; e++) {
            player.Pregnant.Babies[e].BabyAge++;
            if (player.Pregnant.Babies[e].BabyAge > 274) {
                if (player.hasOwnProperty("Children")) {
                    var Child = {
                        AgeCounter: 0,
                        Race: player.Pregnant.Babies[e].BabyRace
                    };
                    player.Children.push(Child);
                    EventLog("You have given birth!")
                    player.Pregnant.Babies.splice(e, 1);
                    if (player.Pregnant.Babies.length > 1) {
                        player.Pregnant.Status = false;
                    }
                } else {
                    player.Children = [];
                }
            }
        }
        for (var b = 0; b < player.Boobies.length; b++) {
            if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                player.Boobies[b].MilkBaseRate = player.Boobies[b].MilkMax / 50000;
                player.Boobies[b].Milk += player.Boobies[b].MilkBaseRate + player.Boobies[b].MilkRate;
            }
        }
    } else {
        player.Pregnant.Status = false;
    }
    for (var e = 0; e < House.Dormmates.length; e++) {
        if (House.Dormmates[e].hasOwnProperty("Pregnant")) {
            if (House.Dormmates[e].Pregnant.Status) {
                House.Dormmates[e].Pregnant.Baby++;
                if (House.Dormmates[e].Pregnant.Baby > 274) {
                    if (Array.isArray(House.Dormmates[e].Children)) {
                        var Child = {
                            AgeCounter: 0,
                            Race: House.Dormmates[e].Race
                        };
                        House.Dormmates[e].Children.push(Child);
                        House.Dormmates[e].Pregnant.Baby = 0;
                        House.Dormmates[e].Pregnant.Status = false;
                        EventLog(House.Dormmates[e].FirstName + " " + House.Dormmates[e].LastName + " have given birth!");
                    } else {
                        House.Dormmates[e].Children = [];
                    }
                }
            }
        }
        if (Array.isArray(House.Dormmates[e].Children)) {
            if (House.Dormmates[e].Children.length > 0) {
                for (var b = 0; b < House.Dormmates[e].Children.length; b++) {
                    House.Dormmates[e].Children[b].AgeCounter++;
                    if (House.Dormmates[e].Children[b].AgeCounter % 365 == 0) {
                        var age = Math.round(House.Dormmates[e].Children[b].AgeCounter / 365);
                        EventLog("Your child with " + House.Dormmates[e].FirstName + " " + House.Dormmates[e].LastName + " has grown " + age + " years old.");
                    }
                }
            }
        } else {
            House.Dormmates[e].Children = [];
        }
    }
}