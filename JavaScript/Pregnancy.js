function PregnanyEngine() {
    if (!Array.isArray(player.Children)) {
        player.Children = [];
    }
    if (player.Children.length > 0) {
        for (var e = 0; e < player.Children.length; e++) {
            player.Children[e].AgeCounter++;
            if (player.Children[e].AgeCounter % 365 == 0) {
                var age = Math.round(player.Children[e].AgeCounter / 365);
                EventLog("Your child has grown " + IntToAge(age) + " old.");
            }
        }
    }
    if (player.Pregnant.Babies.length > 0) {
        for (var e = 0; e < player.Pregnant.Babies.length; e++) {
            player.Pregnant.Babies[e].BabyAge++;
            if (player.Pregnant.Babies[e].BabyAge > Math.max(2, 274 - player.Blessings.MountainShrine.Incubator * 5)) {
                var Child = {
                    AgeCounter: 0,
                    Race: player.Pregnant.Babies[e].BabyRace,
                    Mother: player.Pregnant.Babies[e].Mother,
                    Father: player.Pregnant.Babies[e].Father
                };
                player.Children.push(Child);
                EventLog("You have given birth!")
                player.Pregnant.Babies.splice(e, 1);
                if (player.Pregnant.Babies.length < 1) {
                    player.Pregnant.Status = false;
                }
            }
        }
        for (var b = 0; b < player.Boobies.length; b++) {
            if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                player.Boobies[b].MilkBaseRate = player.Boobies[b].MilkMax / 50000;
                player.Boobies[b].Milk += player.Boobies[b].MilkBaseRate;
            }
        }
    } else {
        player.Pregnant.Status = false;
    }
    for (var e of House.Dormmates) {
        if (!e.hasOwnProperty("Pregnant")) {
            e.Pregnant = {
                Status: false,
                Babies: []
            };
        }
        if (!Array.isArray(e.Children)) {
            e.Children = [];
        }
        if (e.Pregnant.Status) {
            for (var b = 0; b < e.Pregnant.Babies.length; e++) {
                e.Pregnant.Babies[e].BabyAge++;
                if (e.Pregnant.Babies.BabyAge > Math.max(2, 274 - player.Blessings.MountainShrine.IncubatorSeed * 5)) {
                    var Child = {
                        AgeCounter: 0,
                        Race: e.Race,
                        Mother: e.Pregnant.Mother,
                        Father: e.Pregnant.Father
                    };
                    e.Children.push(Child);
                    e.Babies.splice(e, 1);
                    if (e.Pregnant.Babies.length < 1) {
                        e.Pregnant.Status = false;
                    }
                    EventLog(e.FirstName + " " + e.LastName + " have given birth!");
                }
            }
        }
        if (e.Children.length > 0) {
            for (var b of e.Children) {
                var age = Math.round(b.AgeCounter / 365);
                b.AgeCounter++;
                if (b.AgeCounter % 365 == 0) {
                    EventLog("Your child with " + e.FirstName + " " + e.LastName + " has grown " + age + " years old.");
                }
                if (House.Nursery > 0 && age < 18) {
                    if (!b.hasOwnProperty("NuseryBoost")) {
                        b.NuseryBoost = 0;
                    } else {
                        b.NuseryBoost += House.Nursery
                        if (b.NuseryBoost > 40) {
                            console.log("Extra day")
                            b.NuseryBoost = 0;
                            b.AgeCounter++ //Faster aging with nusery
                            if (b.AgeCounter % 365 == 0) {
                                EventLog("Your child with " + e.FirstName + " " + e.LastName + " has grown " + age + " years old.");
                            }
                        }
                    }
                }
                // Need to add death of age.
            }
        }
    }
}