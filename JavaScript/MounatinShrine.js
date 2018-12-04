document.getElementById("Blessings").addEventListener("click", function () {
    if (document.getElementById("BlessingsMenu").style.display === 'block') {
        document.getElementById("BlessingsMenu").style.display = 'none';
    } else {
        var PregPoints = Flags.Impregnations + Flags.Pregnations;
        document.getElementById("BlessingsPoints").innerHTML = PregPoints + " Faith";
        document.getElementById("BlessingsMenu").style.display = 'block';
        var Incubator = document.getElementById("Incubator");
        Incubator.value = "Incubator: " + FertFaithCost("Incubator");
        Incubator.addEventListener("click" ,function() {
            BlessingHandler("Incubator");
        });
        var IncubatorSeed = document.getElementById("IncubatorSeed");
        IncubatorSeed.value = "IncubatorSeed: " + FertFaithCost("IncubatorSeed");
        IncubatorSeed.addEventListener("click", function() {
            BlessingHandler("IncubatorSeed")
        });
        var Broodmother = document.getElementById("Broodmother");
        Broodmother.value = "Broodmother: " + FertFaithCost("Broodmother");
        Broodmother.addEventListener("click", function() {
            BlessingHandler("Broodmother");
        });
        var BroodmotherSeed = document.getElementById("BroodmotherSeed");
        BroodmotherSeed.value = "BroodmotherSeed: " + FertFaithCost("BroodmotherSeed");
        BroodmotherSeed.addEventListener("click", function() {
            BlessingHandler("BroodmotherSeed");
        });
        var MalePreg = document.getElementById("MalePreg");
        MalePreg.value = "MalePreg: " + FertFaithCost("MalePreg");
        MalePreg.addEventListener("click", function() {
            BlessingHandler("MalePreg");
        });
    }
});

function FertFaithCost(Blessing) {
    switch (Blessing) {
        case "Incubator":
            return player.Blessings.Incubator + 1;
        case "IncubatorSeed":
            return player.Blessings.IncubatorSeed + 1;
        case "Broodmother":
            return player.Blessings.Broodmother + 1;
        case "BroodmotherSeed":
            return player.Blessings.BroodmotherSeed + 1;
        case "MalePreg":
            return player.Blessings.MalePreg + 1;

    }
}

function BlessingHandler(what) {
    var PregPoints = Flags.Impregnations + Flags.Pregnations;
    if (PregPoints > FertFaithCost(what)) {
        player.Blessings[what]++;
    } else {
        // not enough
        console.log(what + " " + player.Blessings[what])
    }
}

document.getElementById("ShrineQuests").addEventListener("click", function () {
    if (!Flags.hasOwnProperty("FertilityPoints")) {
        Flags.FertilityPoints = 0;
    }
    if (document.getElementById("ShrineQuestsMenu").style.display === 'block') {
        document.getElementById("ShrineQuestsMenu").style.display = 'none';
        document.getElementById("Blessings").style.display = 'inline-block';
        document.getElementById("LeaveMountainShrine").style.display = 'inline-block';
        document.getElementById("ShrineQuests").value = "Quests";

    } else {
        document.getElementById("ShrineQuestsMenu").style.display = 'block';
        document.getElementById("Blessings").style.display = 'none';
        document.getElementById("LeaveMountainShrine").style.display = 'none';
        document.getElementById("ShrineQuests").value = "Leave quests";
        PregQuests();
    }
});
document.getElementById("ShrineQuestsMenu").addEventListener("mouseover", function (e) {
    document.getElementById("MountainShrineText").innerHTML = e.target.title;
})

// Test of new way to add quests, in order to avoid public vars.
function PregQuests() {
    var x = document.getElementById("ShrineQuestsMenu");
    console.log(x.hasChildNodes())
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }

    var Impreg = document.createElement("INPUT");
    Impreg.setAttribute("type", "button");
    Impreg.setAttribute("value", "Impreg");
    Impreg.setAttribute("title", "Impregnate our maidens.");
    Impreg.addEventListener("click", function () {
        Impreg.style.display = 'none';
        GetImpreg.style.display = 'none';
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
    var GetImpreg = document.createElement("INPUT");
    GetImpreg.setAttribute("type", "button");
    GetImpreg.setAttribute("value", "Get Impreg");
    GetImpreg.setAttribute("title", "Get impregnated.");
    GetImpreg.addEventListener("click", function () {
        Impreg.style.display = 'none';
        GetImpreg.style.display = 'none';
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
    var Quests = ["Get Impregnated", "Impregnate maidens"];
    if (!player.Quests.some(e => e.Name === "Get Impregnated")) {
        document.getElementById("ShrineQuestsMenu").appendChild(GetImpreg);
    } else if (player.Quests.some(e => e.Name === "Get Impregnated") && e.Completed) {}
    if (!player.Quests.some(e => e.Name === "Impregnate maidens")) {
        document.getElementById("ShrineQuestsMenu").appendChild(Impreg);
    } else if (player.Quests.some(e => e.Name === "Impregnate maidens") && e.Completed) {}
}