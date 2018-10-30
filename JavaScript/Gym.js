document.getElementById("Train").addEventListener("click", function () {
    if (player.Fat > (player.Weight * 0.1)) {
        var gains = Math.round((player.Height / 160) * (30 / player.Muscle) * (player.Str / 10));
        var burn = Math.round(gains * 4);
        player.Muscle += gains;
        player.Fat -= burn;
        document.getElementById("GymText").innerHTML = "You burn " + burn + "kg of fat and gain " + gains + "kg of muscle."
        LastTrainDay = Flags.Date.Day;
        LastTrainMonth = Flags.Date.Month;
    } else {
        document.getElementById("GymText").innerHTML = "You are to skinny."
    }
});
document.getElementById("BurnFat").addEventListener("click", function () {
    if (player.Fat > player.Weight * 0.1) {
        var burn = Math.round(player.Fat * 0.09);
        player.Fat -= burn;
        document.getElementById("GymText").innerHTML = "You speent an hour doing cardio, when stepping on the scale in the shower room you are happy to see you lost " + burn + "kg.";
    } else {
        document.getElementById("GymText").innerHTML = "Buring more fat would be dangerous!";
    }
});