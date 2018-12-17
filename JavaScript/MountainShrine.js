function ShowBlessings() {
    var PregPoints = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points;
    document.getElementById("BlessingsPoints").innerHTML = PregPoints + " Faith";
    BlessingsMenu.style.display = 'block';
    var Incubator = document.getElementById("Incubator");
    Incubator.value = "Incubator: " + FertFaithCost("Incubator");
    var IncubatorSeed = document.getElementById("IncubatorSeed");
    IncubatorSeed.value = "IncubatorSeed: " + FertFaithCost("IncubatorSeed");
    var Broodmother = document.getElementById("Broodmother");
    Broodmother.value = "Broodmother: " + FertFaithCost("Broodmother");
    var BroodmotherSeed = document.getElementById("BroodmotherSeed");
    BroodmotherSeed.value = "BroodmotherSeed: " + FertFaithCost("BroodmotherSeed");
    var MalePreg = document.getElementById("MalePreg");
    MalePreg.value = "MalePreg: " + FertFaithCost("MalePreg");
}

document.getElementById("Blessings").addEventListener("click", function () {
    var BlessingsMenu = document.getElementById("BlessingsMenu");
    if (BlessingsMenu.style.display === 'block') {
        BlessingsMenu.style.display = 'none';
    } else {
        ShowBlessings();
        var Incubator = document.getElementById("Incubator");
        Incubator.addEventListener("click", function () {
            BlessingHandler("Incubator");
        });
        var IncubatorSeed = document.getElementById("IncubatorSeed");
        IncubatorSeed.addEventListener("click", function () {
            BlessingHandler("IncubatorSeed")
        });
        var Broodmother = document.getElementById("Broodmother");
        Broodmother.addEventListener("click", function () {
            BlessingHandler("Broodmother");
        });
        var BroodmotherSeed = document.getElementById("BroodmotherSeed");
        BroodmotherSeed.addEventListener("click", function () {
            BlessingHandler("BroodmotherSeed");
        });
        var MalePreg = document.getElementById("MalePreg");
        MalePreg.addEventListener("click", function () {
            BlessingHandler("MalePreg");
        });
    }
});

function FertFaithCost(Blessing) {
    switch (Blessing) {
        case "Incubator":
            return player.Blessings.MountainShrine.Incubator + 1;
        case "IncubatorSeed":
            return player.Blessings.MountainShrine.IncubatorSeed + 1;
        case "Broodmother":
            return player.Blessings.MountainShrine.Broodmother * 2 + 2;
        case "BroodmotherSeed":
            return player.Blessings.MountainShrine.BroodmotherSeed * 2 + 2;
        case "MalePreg":
            return player.Blessings.MountainShrine.MalePreg * 5;
    }
}

function BlessingHandler(what) {
    var PregPoints = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points;
    if (PregPoints > FertFaithCost(what)) {
        player.Blessings.MountainShrine[what]++;
        document.getElementById("MountainShrineText").innerHTML = "May your children be strong.";
        ShowBlessings();
    } else {
        // not enough
        document.getElementById("MountainShrineText").innerHTML = "Sorry, you have not served our goddess enough to deserve that."
    }
}

document.getElementById("ShrineQuests").addEventListener("click", function () {
    if (document.getElementById("ShrineQuestsMenu").style.display === 'block') {
        document.getElementById("ShrineQuestsMenu").style.display = 'none';
        document.getElementById("Blessings").style.display = 'inline-block';
        document.getElementById("LeaveMountainShrine").style.display = 'inline-block';
        document.getElementById("ShrineQuests").value = "Quests";

    } else {
        document.getElementById("ShrineQuestsMenu").style.display = 'block';
        document.getElementById("Blessings").style.display = 'none';
        document.getElementById("LeaveMountainShrine").style.display = 'none';
        document.getElementById("BlessingsMenu").style.display = 'none';
        document.getElementById("ShrineQuests").value = "Leave quests";
        PregQuests();
    }
});
document.getElementById("ShrineQuestsMenu").addEventListener("mouseover", function (e) {
    document.getElementById("MountainShrineText").innerHTML = e.target.title;
});
document.getElementById("BlessingsMenu").addEventListener("mouseover", function (e) {
    document.getElementById("MountainShrineText").innerHTML = e.target.title;
});

// Test of new way to add quests, in order to avoid public vars.
function PregQuests() {
    var x = document.getElementById("ShrineQuestsMenu");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }

    var Impreg = document.createElement("INPUT");
    Impreg.setAttribute("type", "button");
    Impreg.setAttribute("value", "Impreg");
    Impreg.setAttribute("title", "Impregnate our maidens.");
    Impreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "Impregnate maidens",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        document.getElementById("ShrineQuestsMenu").appendChild(Accept);
        document.getElementById("ShrineQuestsMenu").appendChild(Decline);
    });

    var ImpregReward = document.createElement("INPUT");
    ImpregReward.setAttribute("type", "button");
    ImpregReward.setAttribute("value", "Impreg reward");
    ImpregReward.setAttribute("title", "Impregnate our maidens.");
    ImpregReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
        console.log(player.Quests[index])
        player.Blessings.MountainShrine.Points += player.Quests[index].Count;
        player.Quests.splice(index, 1);
        PregQuests();
    });

    var GetImpreg = document.createElement("INPUT");
    GetImpreg.setAttribute("type", "button");
    GetImpreg.setAttribute("value", "Get Impreg");
    GetImpreg.setAttribute("title", "Get impregnated.");
    GetImpreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "Get Impregnated",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        document.getElementById("ShrineQuestsMenu").appendChild(Accept);
        document.getElementById("ShrineQuestsMenu").appendChild(Decline);
    });

    var GetImpregReward = document.createElement("INPUT");
    GetImpregReward.setAttribute("type", "button");
    GetImpregReward.setAttribute("value", "Get Impreg");
    GetImpregReward.setAttribute("title", "Get impregnated.");
    GetImpregReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "Get Impregnated");
        console.log(player.Quests[index])
        player.Blessings.MountainShrine.Points += player.Quests[index].Count * 7;// Getting yourself pregnant is harder to repeat therefore higher reward.
        player.Quests.splice(index, 1);
        PregQuests();
    });
    if (!player.Quests.some(e => e.Name === "Get Impregnated")) {
        document.getElementById("ShrineQuestsMenu").appendChild(GetImpreg);
    } else if (player.Quests.some(e => e.Name === "Get Impregnated" && e.Completed)) {
        document.getElementById("ShrineQuestsMenu").appendChild(GetImpregReward);
    }
    if (!player.Quests.some(e => e.Name === "Impregnate maidens")) {
        document.getElementById("ShrineQuestsMenu").appendChild(Impreg);
    } else if (player.Quests.some(e => e.Name === "Impregnate maidens" && e.Completed)) {
        document.getElementById("ShrineQuestsMenu").appendChild(ImpregReward);
    }
}