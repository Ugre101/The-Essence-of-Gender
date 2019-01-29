// Test of new way to add quests, in order to avoid public vars.
function TownHallQuests() {
    var div = document.getElementById("Buildings");
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

    var buttons = document.createElement("div");

    var BanditLord = document.createElement("INPUT");
    BanditLord.setAttribute("type", "button");
    BanditLord.setAttribute("value", "BanditLord");
    BanditLord.addEventListener("click", function () {
        if (Flags.BanditLord) {
            p.innerHTML = "The bandit are still humiliated from the defeat of their lord, but if you are willing please defeat them again to make sure they don't regain their confidence."
        } else {
            p.innerHTML = "The bandits up to the north has become braver with their new leader, if you are strong enough please beat them into submission. <br> <br>" +
                "You will be greatly awarded for your effort and we will grant you the right to buy the old mansion located east from the city."
        }
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "BanditLord",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    var ElfHunt = document.createElement("INPUT");
    ElfHunt.setAttribute("type", "button");
    ElfHunt.setAttribute("value", "ElfHunt");
    ElfHunt.addEventListener("click", function () {
        p.innerHTML = "The elves to the south is becoming a problem, defeat atleast three of them and you will be awarded."
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "ElfHunt",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    if (!player.Quests.some(e => e.Name === "ElfHunt")) {
        buttons.appendChild(ElfHunt);
    } else if (player.Quests.some(e => e.Name === "ElfHunt" && e.Completed)) {
        var ElfHuntReward = document.createElement("INPUT");
        ElfHuntReward.setAttribute("type", "button");
        ElfHuntReward.setAttribute("value", "ElfHuntReward");
        ElfHuntReward.addEventListener("click", function () {
            var Tier = 1;
            for (var i = 0; i < player.Quests.length; i++) {
                if (player.Quests[i].Name === "ElfHunt") {
                    if (player.Quests[i].hasOwnProperty("Tier")) {
                        Tier += Math.pow(2, player.Quests[i].Tier - 1)
                    }
                    player.Quests.splice(i, 1);
                }
            }
            p.innerHTML = "You are rewarded: " + 50 * Tier + "Exp and " + 100 * Tier + "gold";
            player.Exp += 50 * Tier;
            player.Gold += 100 * Tier;
            Flags.FirstCityLike += 1 * Tier;
            TownHallQuests();
        });
        buttons.appendChild(ElfHuntReward);

    }
    if (!player.Quests.some(e => e.Name === "BanditLord")) {
        buttons.appendChild(BanditLord);
    } else if (player.Quests.some(e => e.Name === "BanditLord" && e.Completed)) {
        var BanditLordReward = document.createElement("INPUT");
        BanditLordReward.setAttribute("type", "button");
        BanditLordReward.setAttribute("value", "BanditLordReward");
        BanditLordReward.addEventListener("click", function () {
            if (Flags.BanditLord) {
                p.innerHTML = "You are rewared: 300Exp and 500gold";
            } else {
                if (!Flags.BanditLord) {
                    Flags.BanditLord = true
                    p.innerHTML = "You are now allowed to buy a house. <br> You are rewared: 300Exp and 500gold";
                };
            }
            player.Exp += 300;
            player.Gold += 500;
            for (var i = 0; i < player.Quests.length; i++) {
                if (player.Quests[i].Name === "BanditLord") {
                    player.Quests.splice(i, 1);
                }
            }
            TownHallQuests();
        });
        buttons.appendChild(BanditLordReward);
    };

    var back = document.createElement("input");
    back.setAttribute("type", "button");
    back.setAttribute("value", "Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    div.appendChild(buttons);
    div.appendChild(back);
}

function TownhallFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }

    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Townhall");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    p.innerHTML = "Inside the local town hall there isn’t much to see, for being a town hall it’s honestly not" +
        " that impressive at all. But this is just a small outpost after all, hopefully they do at least have work for you."
    div.appendChild(p);

    var row1 = document.createElement("div");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "Quest");
    input1.addEventListener("click", function () {
        TownHallQuests();
    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);

    if (House.Owned === false && Flags.BanditLord) {
        var input2 = document.createElement("input");
        input2.setAttribute("type", "button");
        input2.setAttribute("value", "Buy house 100g");
        input2.addEventListener("click", function () {
            if (player.Gold >= 100) {
                House.Owned = true;
                TownhallFunc();
                return;
            } else {
                return;
            }
        });
        input2.addEventListener("mouseover", function () {

        });
        row1.appendChild(input2);
    }

    var input3 = document.createElement("input");
    input3.setAttribute("type", "button");
    input3.setAttribute("value", "Services");
    input3.addEventListener("click", function () {
        TownHallService();
    });
    input3.addEventListener("mouseover", function () {

    });
    row1.appendChild(input3);

    var input4 = document.createElement("input");
    input4.setAttribute("type", "button");
    input4.setAttribute("value", "(placeholder)Reputation");
    input4.addEventListener("click", function () {
        p.innerHTML = Flags.FirstCityLike + "<br> They temp temp you.";
    });
    input4.addEventListener("mouseover", function () {

    });
    row1.appendChild(input4);
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
}

function TownHallService() {
    var div = document.getElementById("Buildings");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    // Container for services, atm there is only name change
    var inputs = document.createElement("div");

    // Container for accept and back [Yes/No]
    var YN = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Service");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var CN = document.createElement("input");
    CN.setAttribute("type", "button");
    CN.setAttribute("value", "Change name");
    CN.addEventListener("click", function () {
        while (inputs.hasChildNodes()) {
            inputs.removeChild(inputs.firstChild);
        }
        var FName = document.createElement("input");
        FName.setAttribute("type", "text");
        FName.setAttribute("value", player.Name);
        FName.setAttribute("id", "ServiceFName724");

        var FNameLabel = document.createElement("label");
        FNameLabel.setAttribute("for", "ServiceFName724");
        FNameLabel.innerHTML = ("First name:")
        inputs.appendChild(FNameLabel);
        inputs.appendChild(FName);

        var LName = document.createElement("input");
        LName.setAttribute("type", "text");
        LName.setAttribute("value", player.LastName);
        LName.setAttribute("id", "ServiceLName244");

        var LNameLabel = document.createElement("label");
        LNameLabel.setAttribute("for", "ServiceLName244")
        LNameLabel.innerHTML = "Last name:";
        inputs.appendChild(LNameLabel);
        inputs.appendChild(LName);

        var Accept = document.createElement("input");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            player.Name = FName.value;
            player.LastName = LName.value;
            TownHallService();
        });
        YN.appendChild(Accept);
    });
    inputs.appendChild(CN);

    var back = document.createElement("input");
    back.setAttribute("type", "button");
    back.setAttribute("value", "Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    YN.appendChild(back);

    div.appendChild(inputs);
    div.appendChild(YN);
}