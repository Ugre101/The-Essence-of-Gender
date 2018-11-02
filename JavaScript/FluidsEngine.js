function FluidsEngine() {
    if (player.Balls.length > 0) {
        for (var b = 0; b < player.Balls.length; b++) {
            player.Balls[b].CumMax = Math.round(player.Balls[b].Size * 400);
            player.Balls[b].CumBaseRate = player.Balls[b].CumMax / 500;
            if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                player.Balls[b].Cum += Math.max(0, player.Balls[b].CumRate + player.Balls[b].CumBaseRate);
            }
        }
    }
    if (player.Balls.length > 0) {
        document.getElementById("CumBar").style.display = 'block';
        var TotalCum = 0,
            TotalCumMax = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            TotalCum += player.Balls[e].Cum;
            TotalCumMax += player.Balls[e].CumMax
        }
        var CumProcent = TotalCum / TotalCumMax;
        if (false) {
            EventLog("Your balls are so full that you can barely hold it!")
        }
        document.getElementById("FluidCum").innerHTML = Math.round((Math.round(TotalCum) / 1000) * 10) / 10 + "L";
        document.getElementById("FluidCum").style.width = CumProcent * 100 + "%";

    } else {
        document.getElementById("CumBar").style.display = 'none';
    }
    var TotalMilk = 0,
        TotalMilkMax = 0;
    for (var b = 0; b < player.Boobies.length; b++) {
        if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
            player.Boobies[b].Milk += player.Boobies[b].MilkBaseRate + player.Boobies[b].MilkRate;
        }
        if (player.Boobies[b].Milk > 0.1) {
            player.Boobies[b].Milk = Math.max(0, player.Boobies[b].Milk);
            TotalMilk += player.Boobies[b].Milk;
            TotalMilkMax += player.Boobies[b].MilkMax;
            document.getElementById("MilkBar").style.display = 'block';
        } else {
            document.getElementById("MilkBar").style.display = 'none';
        }
    }
    var MilkProcent = TotalMilk / TotalMilkMax;
    document.getElementById("FluidMilk").innerHTML = Math.round((Math.round(TotalMilk) / 1000) * 10) / 10 + "L";
    document.getElementById("FluidMilk").style.width = MilkProcent * 100 + "%";

    if (false) {
        EventLog("You breasts are so full that they have started leaking.")
    }

    if (House.Dormmates.length > 0) {
        for (var e = 0; e < House.Dormmates.length; e++) {
            EssenceCheck(House.Dormmates[e]);
            if (House.Dormmates[e].Balls.length > 0) {
                for (var b = 0; b < House.Dormmates[e].Balls.length; b++) {
                    House.Dormmates[e].Balls[b].CumMax = Math.round(House.Dormmates[e].Balls[b].Size * 400);
                    House.Dormmates[e].Balls[b].CumBaseRate = House.Dormmates[e].Balls[b].CumMax / 500;
                    if (House.Dormmates[e].Balls[b].Cum < House.Dormmates[e].Balls[b].CumMax) {
                        House.Dormmates[e].Balls[b].Cum += Math.max(0, House.Dormmates[e].Balls[b].CumRate + House.Dormmates[e].Balls[b].CumBaseRate);
                    }
                }
            }

        }
    }

}