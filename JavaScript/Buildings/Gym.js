function GymFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    if (window.innerHeight > 600) {
        div.appendChild(TitleText("Gym"));
    }
    const p = TextBox();

    div.appendChild(p);

    const row1 = document.createElement("div");
    row1.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });

    const input1 = ButtonButton("Train muscle", "Gain muscle.");
    input1.addEventListener("click", function () {
        if (Flags.LastTrain.Day === Flags.Date.Day && Flags.LastTrain.Month === Flags.Date.Month && Flags.LastTrain.Year === Flags.Date.Year) {
            p.innerHTML = "You have already trained today.";
        } else {
            if (player.Fat > (player.Weight * 0.1)) {
                const gains = Math.min(player.Height / 80, Math.round((player.Height / (player.Muscle * 4)) * (player.Str / 20)));
                const burn = Math.round(gains / 4);
                player.Muscle += gains;
                player.Fat -= burn;
                p.innerHTML = `You burn ${KgToPound(burn)} of fat and gain ${KgToPound(gains)} of muscle.
                <br>${Math.round(player.Muscle)}`;
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
                p.innerHTML = "You are to skinny."
            }
        }
    });
    row1.appendChild(input1);

    const input2 = ButtonButton("Cardio", "Lose some fat.");
    input2.addEventListener("click", function () {
        if (player.Fat > player.Weight * 0.1) {
            const burn = Math.round(player.Fat * 0.09);
            player.Fat -= burn;
            p.innerHTML = `You speent an hour doing cardio, when stepping on the scale in the shower room you are 
            happy to see you lost ${KgToPound(burn)}.<br>`; //${Math.round(player.Fat)}`;
        } else {
            p.innerHTML = "Buring more fat would be dangerous!";
        }
    });
    row1.appendChild(input2);

    const input3 = ButtonButton("Lose muscle", "Sacrifice your gains to the shining swole bro.")
    input3.addEventListener("click", function () {
        const Sacrifice = Math.round(player.Muscle / 10 * 10) / 10;
        player.Muscle -= Sacrifice;
        p.innerHTML = `Mesmerized by the swole bro’s flexing you cannot look away from show of displaying 
         his sculpted muscle in a routine of poses, once finished he thanks for the audience.<br><br>
         Looking at him walking away he seems to have gained muscle, looking at yourself in the mirror you
          seems to have lost muscle? (${KgToPound(Sacrifice)})`
    });
    row1.appendChild(input3);

    div.appendChild(row1);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}