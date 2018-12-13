document.getElementById("Train").addEventListener("click", function () {
    if (Flags.LastTrain.Day == Flags.Date.Day && Flags.LastTrain.Month == Flags.Date.Month && Flags.LastTrain.Year == Flags.Date.Year) {
        document.getElementById("GymText").innerHTML = "You have already trained today.";
    } else {
        if (player.Fat > (player.Weight * 0.1)) {
            var gains = Math.min(player.Height / 80, Math.round((player.Height / (player.Muscle * 4)) * (player.Str / 20)));
            var burn = 0 * Math.round(gains * 4);
            player.Muscle += gains;
            player.Fat -= burn;
            document.getElementById("GymText").innerHTML = "You burn " + KgToPound(burn) + " of fat and gain " + KgToPound(gains) + " of muscle."
            Flags.LastTrain = {
                Day: Flags.Date.Day,
                Month: Flags.Date.Month,
                Year: Flags.Date.Year,
                Count: Flags.LastTrain.Count + 1
            };
            if (Flags.LastTrain.Count > 10 && false) {
                // Event to buy steriods or similiar
            }
        } else {
            document.getElementById("GymText").innerHTML = "You are to skinny."
        }
    }
});
document.getElementById("BurnFat").addEventListener("click", function () {
    if (player.Fat > player.Weight * 0.1) {
        var burn = Math.round(player.Fat * 0.09);
        player.Fat -= burn;
        document.getElementById("GymText").innerHTML = "You speent an hour doing cardio, when stepping on the scale in the shower room you are happy to see you lost " + KgToPound(burn) + ".";
    } else {
        document.getElementById("GymText").innerHTML = "Buring more fat would be dangerous!";
    }
});
document.getElementById("SacrificeMuscle").addEventListener("click", function () {
    var Sacrifice = Math.round(player.Muscle / 10 * 10) / 10;
    console.log(Sacrifice)
    player.Muscle -= Sacrifice;
    document.getElementById("GymText").innerHTML = "Mesmerized by the swole bro’s flexing you cannot look away from " +
        "show of displaying his sculpted muscle in a routine of poses, once finished he thanks for " +
        "the audience.<br><br> Looking at him walking away he seems to have gained muscle," +
        " looking at yourself in the mirror you seems to have lost muscle?(" + KgToPound(Sacrifice) + ")";
});