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
        TfEngine("centaur");
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
        "his equine lower body is not one from a race horse but a work horse.<br>Throwing an eye towards his genitals, it’s    hard to guess the exact size his two members retracted inside their penile sheath but it's obvious that they are well capable of stretching a maiden."
});
// End FarmOwner

// The FarmBarn
document.getElementById("Milker500").addEventListener("click", function () {
    if (player.Gold >= 500) {
        // Add milker
    } else {
        // You can't afford 
    }
});
document.getElementById("MilkAdd").addEventListener("click", function () {
    // extra non-preg milkrate
    if (player.Gold >= 50) {
        player.Gold -= 50;
        for (var e of player.Boobies) {
            e.MilkRate++;
            if (false) {
                // if milkrate is over certain value say stuff like wow gogly amounts etc...
            }
        }
        document.getElementById("FarmBarnText").innerHTML = "Your breasts natrual milk productions increases."
    } else {
        // you are broke
        document.getElementById("FarmBarnText").innerHTML = "Sorry you can't afford this."
    }
});
document.getElementById("MilkSub").addEventListener("click", function () {
    // Lower milkrate
    if (player.Gold >= 50) {
        player.Gold -= 50;
        for (var e of player.Boobies) {
            if (e.MilkRate - 1 < 0) {
                e.MilkRate = 0;
            } else {
                e.MilkRate--;
            }
            if (false) {
                // if milkrate is over certain value say stuff like wow gogly amounts etc...
            }
        }
        document.getElementById("FarmBarnText").innerHTML = "Your breasts natrual milk productions increases."
    } else {
        // you are broke
        document.getElementById("FarmBarnText").innerHTML = "Sorry you can't afford this."
    }
});
document.getElementById("DrinkFresh").addEventListener("click", function () {
    // Drink milk Maybe fuck a bovine furry?
    // Get healed + temp boost to hp & will stronger than bar meal
});
document.getElementById("GetMilked").addEventListener("click", function () {
    // Sell milk(maybe cum to?), this can trigger a event where farmowner tries to fuck you
    // depenent on your stats you can turn it around or get away, if your stats are to weak you get fucked.
});
// Barn Milk Event
document.getElementById("BarnAccept").addEventListener("click", function () {
    // Let him fuck you
});
document.getElementById("BarnDom").addEventListener("click", function () {
    // Turn it around if you have enough strength
});
document.getElementById("BarnTease").addEventListener("click", function () {
    // Get away
})
// End FarmBarn