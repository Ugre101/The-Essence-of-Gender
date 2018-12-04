document.getElementById("ElfTF").addEventListener("click", function () {
    if (player.Race == "elf") {
        document.getElementById("WitchHutText").innerHTML = "You are already a elf!";
        return;
    }
    if (TF.Status) {
        document.getElementById("WitchHutText").innerHTML = "Your body is currently transforming!";
        return;
    }
    if (player.Gold >= 200) {
        player.Gold -= 200;
        TfEngine("elf");
        document.getElementById("WitchHutText").innerHTML = "You drink the potion and get a strange feeling running through your entire body.";
    } else {
        document.getElementById("WitchHutText").innerHTML = "You can't afford the potion";
    }
});
document.getElementById("PerkUp").addEventListener("click", function () {
    if (player.Gold >= 1000) {
        player.Gold -= 1000;
        player.PerkPoints++;
        document.getElementById("WitchHutText").innerHTML = "You eat the pill, and hear something like a bell ringing in your ears.";
    } else {
        document.getElementById("WitchHutText").innerHTML = "You can't afford the pill, and you don't have any emeralds to barter with.";
    }
});
document.getElementById("VoreUp").addEventListener("click", function () {
    if (player.Gold >= 1000) {
        player.Gold -= 1000;
		player.Vore.VorePoints++;
        document.getElementById("WitchHutText").innerHTML = "You eat the pill, and get a strange feeling running through your entire body.";
    } else {
        document.getElementById("WitchHutText").innerHTML = "You can't afford the pill, and it looks so tasty...";
    }
});
document.getElementById("FireSpell").addEventListener("click", function () {
    if (player.Gold >= 500) {
        player.Gold -= 500;
		if (!player.hasOwnProperty("Spells"))
			player.Spells = {FireballMax: 0, Fireball: 0};
		player.Spells.FireballMax++;
        document.getElementById("WitchHutText").innerHTML = "Putting the ball in your pocket, you hope it works as advertised.";
    } else {
        document.getElementById("WitchHutText").innerHTML = "You can't afford the ball; probably for the best, based on your pyromania...";
    }
});
document.getElementById("WitchHut").addEventListener("mouseover", function (e) {
    document.getElementById("WitchHutText").innerHTML = e.target.title;
});
document.getElementById("HumanTF").addEventListener("click", function () {
    if (player.Race == "human" && player.SecondRace == "human") {
        document.getElementById("WitchHutText").innerHTML = "You are already a human!";
        return;
    }
    if (TF.Status) {
        document.getElementById("WitchHutText").innerHTML = "Your body is currently transforming!";
        return;
    }
    if (player.Gold >= 250) {
        player.Gold -= 250;
        TfEngine("human");
        document.getElementById("WitchHutText").innerHTML = "You drink the potion and get a familiar feeling running through your entire body.";
    } else {
        document.getElementById("WitchHutText").innerHTML = "You can't afford the potion";
    }
});
document.getElementById("EyeColor").addEventListener("click", function () {
    if (document.getElementById("EyeColorShop").style.display == 'block') {
        document.getElementById("EyeColorShop").style.display = 'none';
    } else {
        document.getElementById("EyeColorShop").style.display = 'block';
    }
});
document.getElementById("BrownEye").addEventListener("click", function () {
    if (player.Gold >= 50) {
        player.Face.Eyes = "brown"
    } else {
        document.getElementById("WitchHutText").innerHTML = "Insufficient gold!"
    }
});
document.getElementById("HazelEye").addEventListener("click", function () {
    if (player.Gold >= 50) {
        player.Face.Eyes = "hazel"
    } else {
        document.getElementById("WitchHutText").innerHTML = "Insufficient gold!"
    }
});
document.getElementById("BlueEye").addEventListener("click", function () {
    if (player.Gold >= 50) {
        player.Face.Eyes = "blue"
    } else {
        document.getElementById("WitchHutText").innerHTML = "Insufficient gold!"
    }
});
document.getElementById("GreenEye").addEventListener("click", function () {
    if (player.Gold >= 50) {
        player.Face.Eyes = "green"
    } else {
        document.getElementById("WitchHutText").innerHTML = "Insufficient gold!"
    }
});
document.getElementById("SilverEye").addEventListener("click", function () {
    if (player.Gold >= 50) {
        player.Face.Eyes = "silver"
    } else {
        document.getElementById("WitchHutText").innerHTML = "Insufficient gold!"
    }
});
document.getElementById("AmberEye").addEventListener("click", function () {
    if (player.Gold >= 50) {
        player.Face.Eyes = "amber"
    } else {
        document.getElementById("WitchHutText").innerHTML = "Insufficient gold!"
    }
});