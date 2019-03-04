// Start Farm
document.getElementById("EquineTaurTF").addEventListener("click", function () {
    if (player.SecondRace == "centaur") {
        document.getElementById("FarmOwnerText").innerHTML = "You're already a centaur!"
        return;
    }
    if (TF.Status) {
        document.getElementById("FarmOwnerText").innerHTML = "Your body is already ongoing transformation."
        return;
    }
    if (player.Gold >= 250) {
        player.Gold -= 250;
        PotionDrunk("centaur")
        //TfEngine("centaur");
    } else {
        document.getElementById("FarmOwnerText").innerHTML = "Insufficient gold.";
        return;
    }
});
document.getElementById("FarmTitles").addEventListener("mouseover", function (e) {
    document.getElementById("FarmOwnerText").innerHTML = e.target.title;
});
document.getElementById("EquineTF").addEventListener("click", function () {
    if (player.SecondRace == "equine" && player.Race == "equine") {
        document.getElementById("FarmOwnerText").innerHTML = "You already are a equine!"
        return;
    }
    if (TF.Status) {
        document.getElementById("FarmOwnerText").innerHTML = "Your body is already ongoing transformation."
        return;
    }
    if (player.Gold >= 250) {
        player.Gold -= 250;
        TfEngine("equine");
    } else {
        document.getElementById("FarmOwnerText").innerHTML = "Insufficient gold.";
        return;
    }
});
document.getElementById("FarmOwnerLooks").addEventListener("click", function () {
    document.getElementById("FarmOwnerText").innerHTML = "Standing before you, a centaur who introduce himself as Teoivz, looking at him it’s evident he spends many hours working on the farm. His human upper body possess muscle forged from years of work, " +
        "his equine lower body is not one from a race horse but a work horse.<br>Throwing an eye towards his genitals, it’s	hard to guess the exact size his two members retracted inside their penile sheath but it's obvious that they are well capable of stretching a maiden."
});
// End FarmOwner

// The FarmBarn

/*document.getElementById("InfinityMilker").addEventListener("click", function () {
    if (player.Gold >= 7000) {
        player.Gold -= 7000;
        SnowInventoryAdd(ItemDict.Milker, Infinity);
        // Add milker
    } else {
        // You can't afford 
    }
});*/

function FarmBarnFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        var h1 = document.createElement("h1");
        var h1text = document.createTextNode("");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var input1 = InputButton("Milker500 499g", "Are your breasts constantly leaking? Does it feel like a waste, seeing your milk drip away? Buy today; a portable milker!");
    input1.addEventListener("click", function () {
        if (player.Gold >= 499) {
            player.Gold -= 499;
            SnowInventoryAdd(ItemDict.Milker, 500);
            p.innerHTML = ""
        } else {
            p.innerHTML = ""
        }
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    var input2 = InputButton("Milk booster 30g", "Can't produce enough milk to feed a baby? Or maybe you want to feed your whole family, or even your town?! Well, this is for your humble (or crazy) needs!")
    input2.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            for (var e of player.Boobies) {
                e.MilkRate++;
                if (false) {
                    // if milkrate is over certain value say stuff like wow godly amounts etc...
                }
            }
            p.innerHTML = "Your breasts milk production increases."
        } else {
            p.innerHTML = "Sorry you can't afford this."
        }
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    var input3 = InputButton("Milk stopper 50g", "Sick and tired of your breasts leaving milk spots on your clothes? Just one of these will reduce future 'accidents.' #Note this does not affect lacation rate from pregnancy.")
    input3.addEventListener("click", function () {
        // Lower milkrate
        if (player.Gold >= 50) {
            player.Gold -= 50;
            for (var e of player.Boobies) {
                if (e.MilkRate - 1 < 0) {
                    e.MilkRate = 0;
                    p.innerHTML = "Your " //Milk stops
                } else {
                    e.MilkRate--;
                    p.innerHTML = ""
                }
                if (false) {
                    // if milkrate is over certain value say stuff like wow gogly amounts etc...
                }
            }
        } else {
            // you are broke
            p.innerHTML = "Sorry you can't afford this."
        }
    })
    input3.addEventListener("mouseover", function () {

    })
    div.appendChild(input3);

    if (false) { // TODO
        var DrinkFresh = InputButton("Drink fresh milk", "It's not yours. You think.");
        DrinkFresh.addEventListener("click", function () {
            // Drink milk Maybe fuck a bovine furry? 
            // Get healed + temp boost to hp & will stronger than bar meal
            var a = RandomInt(1, 20);
            if (a > 15) {
                if (player.Int > 20) {
                    if (false) {
                        Partners.FarmOwner.Submit += 1; // ask Bovine to help you dom farmowner
                        // Flags.BovineSometing = true;
                    }
                    // Fuck bovine
                } else {
                    // The horny bovine staddles you before you mangage to figure out what's happening.
                }
            }
        })
        var GetMilked = InputButton("Get milked", "Mooooooooooooo!");
        GetMilked.addEventListener("click", function () {
            // Sell milk(maybe cum to?), this can trigger a event where farmowner tries to fuck you
            // depenent on your stats you can turn it around or get away, if your stats are to weak you get fucked.
            var MilkTotal = 0;
            for (var e of player.Boobies) {
                MilkTotal += e.Milk * 0.9;
                e.Milk = e.Milk * 0.1;
            }
            if (MilkTotal > 0) {
                if (MilkTotal > 10) {
                    var a = RandomInt(1, 20);
                    if (a > 10) {
                        // if (Flags.Bovine) {};
                    }
                }

            } else {

            }
        })
    }

    // TODO add a milking event with farm owner
    /**
     * // Barn Milk Event
    // Let him fuck you
    Partners.FarmOwner.Submit -= 5;
    Partners.FarmOwner.Like += 5;
    // Turn it around if you have enough strength
    Partners.FarmOwner.Submit += 5;
    Partners.FarmOwner.Like -= 5;
    // Get away
    Partners.FarmOwner.Like += 3;
     */

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}