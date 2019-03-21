function FluidsEngine() {
    DocId("FemcumBar").style.display = 'none';
    if (player.Balls.length > 0) {
        for (var b = 0; b < player.Balls.length; b++) {
            player.Balls[b].CumMax = 1 / 3 * Math.PI * Math.pow(player.Balls[b].Size, 3),
                player.Balls[b].CumBaseRate = player.Balls[b].CumMax / 500;
            if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                player.Balls[b].Cum += Math.max(0, player.Balls[b].CumRate + player.Balls[b].CumBaseRate);
            }
        }
        DocId("CumBar").style.display = 'block';
        var TotalCum = 0,
            TotalCumMax = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            TotalCum += player.Balls[e].Cum;
            TotalCumMax += player.Balls[e].CumMax
        }
        var CumPercent = TotalCum / TotalCumMax;
        if (false) {
            EventLog("Your balls are so full that you can barely hold it!")
        }
        DocId("FluidCum").innerHTML = Math.round((Math.round(TotalCum) / 1000) * 10) / 10 + "L";
        DocId("FluidCum").style.width = Math.min(1, CumPercent) * 100 + "%";

    } else {
        DocId("CumBar").style.display = 'none';
    }
    if (player.Boobies.length > 0 && GotMilk(player)) {
        DocId("MilkBar").style.display = 'block';
        var TotalMilk = 0,
            TotalMilkMax = 0;
        for (var b = 0; b < player.Boobies.length; b++) {
            if (!Settings.EssenceAuto) {
                player.Boobies[b].MilkMax = 1 / 3 * Math.PI * Math.pow(player.Boobies[b].Size, 3);
            }
            if (player.Boobies[b].MilkRate > 0) {
                player.Boobies[b].Milk += player.Boobies[b].MilkRate;
            }
        }
        for (var e = 0; e < player.Boobies.length; e++) {
            TotalMilk += player.Boobies[e].Milk;
            TotalMilkMax += player.Boobies[e].MilkMax
        }
        var MilkPercent = TotalMilk / TotalMilkMax;
        if (false) {
            EventLog("You breasts are so full that they have started leaking!")
        }
        DocId("FluidMilk").innerHTML = Math.round((Math.round(TotalMilk) / 1000) * 10) / 10 + "L";
        DocId("FluidMilk").style.width = Math.min(1, MilkPercent) * 100 + "%";

    } else {
        DocId("MilkBar").style.display = 'none';
    }
    if (House.Dormmates.length > 0) {
        for (var e = 0; e < House.Dormmates.length; e++) {
            EssenceCheck(House.Dormmates[e]);
            if (House.Dormmates[e].Balls.length > 0) {
                for (var b = 0; b < House.Dormmates[e].Balls.length; b++) {
                    House.Dormmates[e].Balls[b].CumMax = 1 / 3 * Math.PI * Math.pow(House.Dormmates[e].Balls[b].Size, 3),
                        House.Dormmates[e].Balls[b].CumBaseRate = House.Dormmates[e].Balls[b].CumMax / 500;
                    if (House.Dormmates[e].Balls[b].Cum < House.Dormmates[e].Balls[b].CumMax) {
                        House.Dormmates[e].Balls[b].Cum += Math.max(0, House.Dormmates[e].Balls[b].CumRate + House.Dormmates[e].Balls[b].CumBaseRate);
                    }
                }
            }

        }
    }
}
//Well, this disables *everything* below. Moving it out of the function.
function GotMilk(who) {
    for (var e of who.Boobies) {
        if (e.MilkRate > 0) {
            return true;
        }
    }
    return false;
}