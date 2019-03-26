function PregnanyEngine() {
    if (player.Children.length > 0) {
        for (let e of player.Children) {
            e.AgeCounter++;
            if (e.AgeCounter % 365 == 0) {
                const age = Math.round(e.AgeCounter / 365);
                EventLog(`Your child has grown ${IntToAge(age)} old.`);
            }
            console.log(e)
        }
    }
    if (player.Pregnant.Babies.length > 0) {
        for (let i in player.Pregnant.Babies) {
            const e = player.Pregnant.Babies[i],
                reduction = player.Blessings.hasOwnProperty("MountainShrine") ?
                player.Blessings.MountainShrine.Incubator * 5 : 0;

            e.BabyAge++;
            if (e.BabyAge > Math.max(2, 274 - reduction)) {
                const Child = e.hasOwnProperty("Blessed") ? {
                    AgeCounter: 0,
                    Race: e.BabyRace,
                    Mother: e.Mother,
                    Father: e.Father,
                    Blessed: e.Blessed
                } : {
                    AgeCounter: 0,
                    Race: e.BabyRace,
                    Mother: e.Mother,
                    Father: e.Father
                };
                player.Children.push(Child);
                EventLog("You have given birth!")
                player.Pregnant.Babies.splice(i, 1);
                if (player.Pregnant.Babies.length < 1) {
                    player.Pregnant.Status = false;
                }
            }
        }

        for (let b of player.Boobies) {
            if (b.Milk < b.MilkMax) {
                b.MilkBaseRate = b.MilkMax / 50000;
                b.Milk += b.MilkBaseRate;
            }
        }
    } else {
        player.Pregnant.Status = false;
    }
    for (let e of House.Dormmates) {
        if (!e.hasOwnProperty("Pregnant")) {
            e.Pregnant = {
                Status: false,
                Babies: []
            };
        }
        if (!Array.isArray(e.Children)) {
            e.Children = [];
        }
        const {
            Status,
            Babies
        } = e.Pregnant;
        if (Status) {
            for (let b in Babies) {
                Babies[b].BabyAge++;
                const reduction = player.Blessings.hasOwnProperty("MountainShrine") ?
                    player.Blessings.MountainShrine.IncubatorSeed * 5 : 0;
                if (Babies[b].BabyAge > Math.max(2, 274 - reduction)) {
                    const Child = {
                        AgeCounter: 0,
                        Race: e.Race,
                        Mother: Babies[b].Mother,
                        Father: Babies[b].Father
                    };
                    e.Children.push(Child);
                    Babies.splice(b, 1);
                    if (Babies.length < 1) {
                        e.Pregnant.Status = false;
                    }
                    EventLog(e.FirstName + " " + e.LastName + " have given birth!");
                }
            }
        }
        if (e.Children.length > 0) {
            for (let b of e.Children) {
                const age = Math.round(b.AgeCounter / 365);
                b.AgeCounter++;
                if (b.AgeCounter % 365 == 0) {
                    EventLog(`Your child with ${e.FirstName} ${e.LastName} has grown ${age} years old.`);
                }
                if (House.Nursery > 0 && age < 18) {
                    if (!b.hasOwnProperty("NuseryBoost")) {
                        b.NuseryBoost = 0;
                    } else {
                        b.NuseryBoost += House.Nursery
                        if (b.NuseryBoost > 40) {
                            b.NuseryBoost = 0;
                            b.AgeCounter++; //Faster aging with nusery
                            if (b.AgeCounter % 365 == 0) {
                                EventLog(`Your child with ${e.FirstName} ${e.LastName} has grown ${age} years old.`);
                            }
                        }
                    }
                }
                // Need to add death of age.
            }
        }
    }
}