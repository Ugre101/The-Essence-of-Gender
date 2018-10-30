    // Start Farm
    document.getElementById("EquineTaurTF").addEventListener("click", function () {
        if (player.SecondRace == "equine taur") {
            document.getElementById("FarmOwnerText").innerHTML = "You already are a equine taur!"
            return;
        }
        if (TF.Status) {
            document.getElementById("FarmOwnerText").innerHTML = "Your body is already ongoing transformation."
            return;
        }
        if (player.Gold >= 250) {
            player.Gold -= 250;
            TfEngine("equine taur");
        } else {
            document.getElementById("FarmOwnerText").innerHTML = "Insufficient gold.";
            return;
        }
    });
    document.getElementById("EquineTaurTF").addEventListener("mouseover", function (e) {
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
    document.getElementById("EquineTF").addEventListener("mouseover", function (e) {
        document.getElementById("FarmOwnerText").innerHTML = e.target.title;
    });
    // End Farm