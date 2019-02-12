document.getElementById("WitchShop").addEventListener("click", function (e) {
    var Chosen;
    if (e.target.type == "button") {
        Chosen = String(e.target.id);
        if (Chosen == "Grow" && player.Gold >= 50) {
            var growth = Math.round((180 / player.Height) * 100) / 100;
            player.Gold -= 50;
            player.Height += growth;
            document.getElementById("WitchShopText").innerHTML = "You grow " + growth + "cm.";
        } else if (Chosen == "Shrink" && player.Gold >= 50) {
            var shrunk = Math.round((player.Height / 100) * 100) / 100;
            player.Gold -= 50;
            player.Height -= shrunk;
            document.getElementById("WitchShopText").innerHTML = "You shrink " + shrunk + "cm.";
        } else if (Chosen == "FertilityAdd" && player.Gold >= 30) {
            player.Gold -= 30;
            player.Fertility++;
            document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more fertil.";
        } else if (Chosen == "FertilitySub" && player.Gold >= 70) {
            player.Gold -= 70;
            player.Fertility -= 3;
            document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more barren."
        } else if (Chosen == "VirilityAdd" && player.Gold >= 70) {
            player.Gold -= 70;
            player.Virility++;
            document.getElementById("WitchShopText").innerHTML = "You feel your virility increasing.";
        } else if (Chosen == "VirilitySub" && player.Gold >= 30) {
            player.Gold -= 30;
            player.Virility -= 3;
            document.getElementById("WitchShopText").innerHTML = "You feel your virility decreasing";
        } else if (Chosen == "CumRateAdd" && player.Gold >= 100 && player.Balls.length > 0) {
            player.Gold -= 100;
            for (var e = 0; e < player.Balls.length; e++) {
                player.Balls[e].CumRate += 0.1;
            }
            document.getElementById("WitchShopText").innerHTML = "You get a tingling feeling in your balls, you think it works!"
        } else if (Chosen == "CumRateSub" && player.Gold >= 20 && player.Balls.length > 0) {
            player.Gold -= 20;
            for (var e = 0; e < player.Balls.length; e++) {
                player.Balls[e].CumRate -= 0.5;
            }
            document.getElementById("WitchShopText").innerHTML = "You get a strange feeling in your balls, you think it works!"
        }
    }
});
document.getElementById("WitchShop").addEventListener("mouseover", function (e) {
    document.getElementById("WitchShopText").innerHTML = e.target.title;
});