// Test of new way to add quests, in order to avoid public vars.
function PregQuests() {
    var div = document.getElementById("Buildings")
    var x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var Impreg = document.createElement("INPUT");
    Impreg.setAttribute("type", "button");
    Impreg.setAttribute("value", "Impreg");
    Impreg.setAttribute("title", "Impregnate our maidens.");
    Impreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        p.innerHTML = `Get impregnated while carrying our goddesses blessing, when the child is born we will send a cartage to collect so it can be raised here at our temple.
        <br><br>
        I wish of you to impregnate our local maidens, our scripture only allows temple maidens to copulate with those who can defeat them in battle. Usually they would find a mate among the local dragons, but after their new tribe leader got defeated by our strongest maiden his pride got wounded and our relationship has soured. 
        <br><br>
        It’s a shame he could not defeat her, she has grown bitter over the years and I believe that finally losing her virginity and learning the joys of motherhood would greatly improve her personalty.`;

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
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    var ImpregReward = document.createElement("INPUT");
    ImpregReward.setAttribute("type", "button");
    ImpregReward.setAttribute("value", "Impreg reward");
    ImpregReward.setAttribute("title", "Impregnate our maidens.");
    ImpregReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
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

        p.innerHTML = "Get impregnated while carrying our goddesses blessing," +
            " when the child is born we will send a cartage to collect so it can be raised here at our temple."

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
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    var GetImpregReward = document.createElement("INPUT");
    GetImpregReward.setAttribute("type", "button");
    GetImpregReward.setAttribute("value", "Get Impreg");
    GetImpregReward.setAttribute("title", "Get impregnated.");
    GetImpregReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "Get Impregnated");
        player.Blessings.MountainShrine.Points += player.Quests[index].Count * 7; // Getting yourself pregnant is harder to repeat therefore higher reward.
        player.Quests.splice(index, 1);
        PregQuests();
    });
    if (!player.Quests.some(e => e.Name === "Get Impregnated")) {
        x.appendChild(GetImpreg);
    } else if (player.Quests.some(e => e.Name === "Get Impregnated" && e.Completed)) {
        x.appendChild(GetImpregReward);
    }
    if (!player.Quests.some(e => e.Name === "Impregnate maidens")) {
        x.appendChild(Impreg);
    } else if (player.Quests.some(e => e.Name === "Impregnate maidens" && e.Completed)) {
        x.appendChild(ImpregReward);
    }

    var back = document.createElement("input");
    back.setAttribute("type", "button");
    back.setAttribute("value", "Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    })

    var row1 = document.createElement("div");
    row1.appendChild(x);
    div.appendChild(row1);
    var row2 = document.createElement("div");
    row2.appendChild(back);
    div.appendChild(row2);
}

function MountainShrineFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Shrine");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var row1 = document.createElement("div");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "Blessings");
    input1.addEventListener("click", function () {
        FertTempleBlessings();
    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "Quests");
    input2.addEventListener("click", function () {
        PregQuests();
    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

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
};

function FertTempleBlessings(text = "") {
    var div = document.getElementById("Buildings")
    var x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var h5 = document.createElement("h5");
    h5.innerHTML = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points + " faith";
    div.appendChild(h5);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    p.innerHTML = text;

    div.appendChild(p);

    var PregPoints = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points;

    var Incubator = document.createElement("input");
    Incubator.setAttribute("value", "Incubator");
    Incubator.setAttribute("type", "button");
    Incubator.setAttribute("title", "Makes your pregnancy faster.");
    Incubator.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.Incubator + 1
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Incubator++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Incubator);

    var IncubatorSeed = document.createElement("input");
    IncubatorSeed.setAttribute("value", "Mature seeds");
    IncubatorSeed.setAttribute("type", "button");
    IncubatorSeed.setAttribute("title", "Makes your servant's pregnancies faster.");
    IncubatorSeed.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.IncubatorSeed + 1;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.IncubatorSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    })
    div.appendChild(IncubatorSeed);

    var Broodmother = document.createElement("input");
    Broodmother.setAttribute("value", "Broodmother");
    Broodmother.setAttribute("type", "button");
    Broodmother.setAttribute("title", "Chance for twins or more for player.");
    Broodmother.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.Broodmother * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Broodmother++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Broodmother);

    var BroodmotherSeed = document.createElement("input");
    BroodmotherSeed.setAttribute("value", "Branching seeds");
    BroodmotherSeed.setAttribute("type", "button");
    BroodmotherSeed.setAttribute("title", "Chance for twins or more for others.");
    BroodmotherSeed.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.BroodmotherSeed * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.BroodmotherSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(BroodmotherSeed);

    var MalePreg = document.createElement("input");
    MalePreg.setAttribute("value", "Anal Incubator");
    MalePreg.setAttribute("type", "button");
    MalePreg.setAttribute("title", "Enables player non-female pregnancy.");
    MalePreg.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.Malepreg * 5;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Malepreg++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(MalePreg);

    var back = document.createElement("input");
    back.setAttribute("type", "button");
    back.setAttribute("value", "Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    });
    div.appendChild(back);
}