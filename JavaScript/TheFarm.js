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
    document.getElementById("FarmOwnerLooks").addEventListener("mouseover", function() {
        document.getElementById("FarmOwnerText").innerHTML = "Standing before you, a centaur who introduce himself as Teoivz, looking at him it’s evident he spends many hours working on the farm. His human upper body possess muscle forged from years of work, "+
	    "his equine lower body is not one from a race horse but a work horse.<br>Throwing an eye towards his genitals, it’s	hard to guess the exact size his two members retracted inside their penile sheath but it's obvious that they are well capable of stretching a maiden."
    });
    // End Farm