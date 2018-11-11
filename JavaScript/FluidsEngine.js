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
        var CumPercent = TotalCum / TotalCumMax;
        if (false) {
            EventLog("Your balls are so full that you can barely hold it!")
        }
        document.getElementById("FluidCum").innerHTML = Math.round((Math.round(TotalCum) / 1000) * 10) / 10 + "L";
        document.getElementById("FluidCum").style.width = CumPercent * 100 + "%";

    } else {
        document.getElementById("CumBar").style.display = 'none';
    }
    if (player.Boobies.length > 0 && player.Boobies[0].MilkMax > 0) {
        document.getElementById("MilkBar").style.display = 'block';
		var milkPenalty = 10;
		if(player.Pregnant.Status)
			milkPenalty = 0;
        var TotalMilk = 0,
            TotalMilkMax = 0;
		for (var b = 0; b < player.Boobies.length; b++) {
            player.Boobies[b].MilkMax = Math.round(player.Boobies[b].Size * 400);
			if(player.Boobies[b].MilkRate > milkPenalty)
			{
				player.Boobies[b].Milk += player.Boobies[b].MilkRate - milkPenalty;
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
        document.getElementById("FluidMilk").innerHTML = Math.round((Math.round(TotalMilk) / 1000) * 10) / 10 + "L";
        document.getElementById("FluidMilk").style.width = MilkPercent * 100 + "%";

    } else {
        document.getElementById("MilkBar").style.display = 'none';
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