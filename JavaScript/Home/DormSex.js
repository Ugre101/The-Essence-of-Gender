DocId("GetImpregOrgy").addEventListener("click", function () {
    DocId("HomeText").innerHTML = "Orgy";
    var CumTotal = 0;
    for (var a = 0; a < House.Dormmates.length; a++) {
        for (var b = 0; b < House.Dormmates[a].Balls.length; b++) {
            CumTotal += House.Dormmates[a].Balls[b].Cum;
            while (House.Dormmates[a].Balls[b].Cum >= 10) {
                if (player.Pregnant.Status) {
                    break;
                } else {
                    Impregnate(player, House.Dormmates[a], "B", "Dorm")
                    House.Dormmates[a].Balls[b].Cum -= 10;
                }
            }
        }
    }
    DocId("HomeText").innerHTML += "<br><br> By the end of the night they have cummed " + (Math.round(CumTotal / 1000 * 100) / 100) + "L into you.";
});


DocId("ImpregOrgy").addEventListener("click", function () {
    DocId("HomeText").innerHTML = "Orgy<br>"
    var CumTotal = 0;
    for (var b = 0; b < player.Balls.length; b++) {
        CumTotal += player.Balls[b].Cum;
    }
    while (CumTotal >= 10) {
        for (var non = 0; non < House.Dormmates.length; non++) {
            if (House.Dormmates[non].Pregnant.Status) {
                CumTotal--;
                continue;
            } else {
                Impregnate(House.Dormmates[non], player, "A", "Dorm");
                CumTotal -= 10;
                if (House.Dormmates[non].Pregnant.Status) {
                    DocId("HomeText").innerHTML += House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + " is impregnated! "
                }
            }
        }
    }
    for (var non = 0; non < House.Dormmates.length; non++) {
        if (!House.Dormmates[non].Pregnant.Status) {
            DocId("HomeText").innerHTML += "You failed to impregnate " + House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + "...";

        }
    }
    for (var b = 0; b < player.Balls.length; b++) {
        player.Balls[b].Cum = 0;
    }
    FluidsEngine();
});