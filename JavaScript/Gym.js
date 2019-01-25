function GymFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Tribe shop");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var ShopMenu = document.createElement("div");
    var row1 = document.createElement("div");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "Train muscle");
    input1.addEventListener("click", function () {
        if (Flags.LastTrain.Day == Flags.Date.Day && Flags.LastTrain.Month == Flags.Date.Month && Flags.LastTrain.Year == Flags.Date.Year) {
            p.innerHTML = "You have already trained today.";
        } else {
            if (player.Fat > (player.Weight * 0.1)) {
                var gains = Math.min(player.Height / 80, Math.round((player.Height / (player.Muscle * 4)) * (player.Str / 20)));
                var burn = 0 * Math.round(gains * 4);
                player.Muscle += gains;
                player.Fat -= burn;
                p.innerHTML = "You burn " + KgToPound(burn) + " of fat and gain " + KgToPound(gains) + " of muscle." +
                "<br>" + Math.round(player.Muscle);
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
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "Cardio");
    input2.addEventListener("click", function () {
        if (player.Fat > player.Weight * 0.1) {
            var burn = Math.round(player.Fat * 0.09);
            player.Fat -= burn;
            p.innerHTML = "You speent an hour doing cardio, when stepping on the scale in the shower room you are happy to see you lost " + KgToPound(burn) + "." +
            "<br>" + Math.round(player.Fat);
        } else {
            p.innerHTML = "Buring more fat would be dangerous!";
        }
    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    var input3 = document.createElement("input");
    input3.setAttribute("type", "button");
    input3.setAttribute("value", "Lose muscle");
    input3.addEventListener("click", function () {
        var Sacrifice = Math.round(player.Muscle / 10 * 10) / 10;
        console.log(Sacrifice)
        player.Muscle -= Sacrifice;
        document.getElementById("GymText").innerHTML = "Mesmerized by the swole bro’s flexing you cannot look away from " +
            "show of displaying his sculpted muscle in a routine of poses, once finished he thanks for " +
            "the audience.<br><br> Looking at him walking away he seems to have gained muscle," +
            " looking at yourself in the mirror you seems to have lost muscle?(" + KgToPound(Sacrifice) + ")";
    });
    input3.addEventListener("mouseover", function () {
        p.innerHTML = "Sacrifice your gains to the shining swole bro."
    });
    row1.appendChild(input3);

    div.appendChild(row1);
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}