// Test of new way to add quests, in order to avoid public consts.
function PregQuests() {
    const div = document.getElementById("Buildings"),
        x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    const h1 = document.createElement("h1"),
        h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    const Impreg = ButtonButton("Impreg", "Impregnate our maidens.");
    Impreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        p.innerHTML = `Get impregnated while carrying our goddesses blessing, when the child is born we will send a cartage to collect so it can be raised here at our temple.
        <br><br>
        I wish of you to impregnate our local maidens, our scripture only allows temple maidens to copulate with those who can defeat them in battle. Usually they would find a mate among the local dragons, but after their new tribe leader got defeated by our strongest maiden his pride got wounded and our relationship has soured. 
        <br><br>
        It’s a shame he could not defeat her, she has grown bitter over the years and I believe that finally losing her virginity and learning the joys of motherhood would greatly improve her personalty.`;

        const Accept = ButtonButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "Impregnate maidens",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        const Decline = ButtonButton("Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    const ImpregReward = ButtonButton("Impreg reward", "Impregnate our maidens.");
    ImpregReward.addEventListener("click", function () {
        const index = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
        player.Blessings.MountainShrine.Points += player.Quests[index].Count;
        player.Quests.splice(index, 1);
        PregQuests();
    });

    const GetImpreg = ButtonButton("Get Impreg", "Get impregnated.");
    GetImpreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        p.innerHTML = `Get impregnated while carrying our goddesses blessing, 
        when the child is born we will send a cartage to collect so it can be raised here at our temple.`

        const Accept = ButtonButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "Get Impregnated",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        const Decline = ButtonButton("Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    const GetImpregReward = ButtonButton("Get Impreg", "Get impregnated.");
    GetImpregReward.addEventListener("click", function () {
        const index = player.Quests.findIndex(e => e.Name == "Get Impregnated");
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

    const back = ButtonButton("Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    })

    const row1 = document.createElement("div");
    row1.appendChild(x);
    div.appendChild(row1);
    const row2 = document.createElement("div");
    row2.appendChild(back);
    div.appendChild(row2);
}

function MountainShrineFunc() {
    const Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div"),
        h1 = document.createElement("h1"),
        h1text = document.createTextNode("Shrine");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    const row1 = document.createElement("div"),
        input1 = ButtonButton("Blessings");
    input1.addEventListener("click", function () {
        FertTempleBlessings();
    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    const input2 = ButtonButton("Quests");
    input2.addEventListener("click", function () {
        PregQuests();
    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    div.appendChild(row1);

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
};

function FertTempleBlessings(text = "") {
    const div = document.getElementById("Buildings"),
        x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    const h1 = document.createElement("h1"),
        h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const PregPoints = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points;

    const h5 = document.createElement("h5");
    h5.innerHTML = `${PregPoints} faith`;
    div.appendChild(h5);

    const p = document.createElement("p");
    p.classList.add("TextBox");
    p.innerHTML = text;

    div.appendChild(p);


    const Incubator = ButtonButton("Incubator +" + player.Blessings.MountainShrine.Incubator, "Makes your pregnancy faster.");
    Incubator.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.Incubator + 1
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Incubator++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Incubator);

    const IncubatorSeed = ButtonButton("Mature seeds +" + player.Blessings.MountainShrine.IncubatorSeed, "Makes your servant's pregnancies faster.");
    IncubatorSeed.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.IncubatorSeed + 1;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.IncubatorSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    })
    div.appendChild(IncubatorSeed);

    const Broodmother = ButtonButton("Broodmother +" + player.Blessings.MountainShrine.Broodmother, "Chance for twins or more for player.");
    Broodmother.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.Broodmother * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Broodmother++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Broodmother);

    const BroodmotherSeed = ButtonButton("Branching seeds +" + player.Blessings.MountainShrine.BroodmotherSeed, "Chance for twins or more for others.");
    BroodmotherSeed.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.BroodmotherSeed * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.BroodmotherSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(BroodmotherSeed);

    const MalePreg = ButtonButton("Anal Incubator +" + player.Blessings.MountainShrine.Malepreg, "Enables player non-female pregnancy.");
    MalePreg.addEventListener("click", function () {
        const cost = player.Blessings.MountainShrine.Malepreg * 5;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Malepreg++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(MalePreg);

    const back = ButtonButton("Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    });
    div.appendChild(back);
}