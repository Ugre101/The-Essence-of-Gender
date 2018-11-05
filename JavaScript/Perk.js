document.getElementById("PerkMenu").addEventListener("click", function () {
    document.getElementById("LevelMenu").style.display = 'none';
    document.getElementById("PerksMenu").style.display = 'block';
    document.getElementById("PerkPointsLeft").innerHTML = "You have " + player.PerkPoints + " perk points left.";
    if (player.Perks.ExtraHealth.Count > 0) {
        document.getElementById("ExtraHealth").value = "ExtraHealth +" + player.Perks.ExtraHealth.Count;
    }
    if (player.Perks.ExtraWillHealth.Count > 0) {
        document.getElementById("ExtraWillHealth").value = "ExtraWillHealth +" + player.Perks.ExtraWillHealth.Count;
    }
    if (player.Perks.FasterRest.Count > 0) {
        document.getElementById("FasterRest").value = "Faster Rest +" + player.Perks.FasterRest.Count;
    }
    if (player.Perks.StealMore.Count > 0) {
        document.getElementById("StealMore").value = "More essence +" + player.Perks.StealMore.Count;
    }
    if (player.Perks.GiveEssence.Count > 0) {
        document.getElementById("GiveEssence").value = "Give essence +" + player.Perks.GiveEssence.Count;
    }
});
document.getElementById("LeavePerkMenu").addEventListener("click", function () {
    document.getElementById("PerksMenu").style.display = 'none';
    document.getElementById("LevelMenu").style.display = 'block';
});

function PerkHandler(perket) {
    player.PerkPoints--;
    player.Perks[perket].Count++
    document.getElementById(perket).value = perket + " +" + player.Perks[perket].Count;
    document.getElementById("PerkPointsLeft").innerHTML = "You have " + player.PerkPoints + " perk points left.";
}
document.getElementById("ExtraHealth").addEventListener("click", function () {
    if (player.PerkPoints > 0) {
        PerkHandler("ExtraHealth");
    } else {
        return;
    }
});
document.getElementById("PerksMenu").addEventListener("mouseover", function (e) {
    document.getElementById("PerkMenuText").innerHTML = e.target.title;
});
document.getElementById("ExtraWillHealth").addEventListener("click", function () {
    if (player.PerkPoints > 0) {
        PerkHandler("ExtraWillHealth");
    } else {
        return;
    }
});
document.getElementById("FasterRest").addEventListener("click", function () {
    if (player.PerkPoints > 0) {
        PerkHandler("FasterRest");
    } else {
        return;
    }
});
document.getElementById("StealMore").addEventListener("click", function () {
    if (player.PerkPoints > 0) {
        PerkHandler("StealMore");
        player.EssenceDrain = 5 + player.Perks.StealMore.Count * 3;
    } else {
        return;
    }
});
document.getElementById("GiveEssence").addEventListener("click", function () {
    if (player.PerkPoints > 0) {
        PerkHandler("GiveEssence");
        player.GiveEssence = player.Perks.GiveEssence.Count * 3;
    } else {
        return;
    }
});