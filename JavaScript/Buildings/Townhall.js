// Test of new way to add quests, in order to avoid public consts.
function TownHallQuests(text = "") {
    const div = document.getElementById("Buildings");
    CleanBuildings();

    div.appendChild(TitleText("Quests"));

    const p = TextBox();
    div.appendChild(p);
    p.innerHTML = text;

    const buttons = document.createElement("div");

    const BanditLord = ButtonButton("BanditLord");
    BanditLord.addEventListener("click", function () {
        if (Flags.BanditLord) {
            p.innerHTML = "The bandit are still humiliated from the defeat of their lord, but if you are willing please defeat them again to make sure they don't regain their confidence."
        } else {
            p.innerHTML = `The bandits up to the north has become braver with their new leader, if you are strong enough please beat them into submission. <br> <br>
            You will be greatly awarded for your effort and we will grant you the right to buy the old mansion located east from the city.`
        }
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        const Accept = ButtonButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "BanditLord",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        const Decline = ButtonButton("Decline");
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    const ElfHunt = ButtonButton("Elf hunt")
    ElfHunt.addEventListener("click", function () {
        p.innerHTML = "The elves to our south have lately become a problem, defeat atleast three of them and you will be awarded."
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        const Accept = ButtonButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "ElfHunt",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        const Decline = ButtonButton("Decline")
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    if (!player.Quests.some(e => e.Name === "ElfHunt")) {
        buttons.appendChild(ElfHunt);
    } else if (player.Quests.some(e => e.Name === "ElfHunt" && e.Completed)) {
        const ElfHuntReward = ButtonButton("Elf hunt reward")
        ElfHuntReward.addEventListener("click", function () {
            const ElfIndex = player.Quests.findIndex((src) => src.Name === "ElfHunt");
            Tier = player.Quests[ElfIndex].hasOwnProperty("Tier") ?
                player.Quests[ElfIndex].Tier : 0,
                Multi = Math.pow(2, Tier - 1)

            player.Quests.splice(ElfIndex, 1);
            player.Exp += 50 * Multi;
            player.Gold += 100 * Multi;
            Flags.FirstCityLike += 1 * Multi;
            TownHallQuests(`You are rewarded: ${50 * Multi} Exp and ${100 * Multi} gold`);
        });
        buttons.appendChild(ElfHuntReward);
    };
    if (!player.Quests.some(e => e.Name === "BanditLord")) {
        buttons.appendChild(BanditLord);
    } else if (player.Quests.some(e => e.Name === "BanditLord" && e.Completed)) {
        const BanditLordReward = ButtonButton("Banditlord reward")
        BanditLordReward.addEventListener("click", function () {
            player.Exp += 300;
            player.Gold += 500;
            const BanditIndex = player.Quests.findIndex((src) => src.Name === "BanditLord");
            player.Quests.splice(BanditIndex, 1);
            if (Flags.BanditLord) {
                TownHallQuests("You are rewared: 300Exp and 500gold");
            } else {
                if (!Flags.BanditLord) {
                    Flags.BanditLord = true
                    TownHallQuests("You are now allowed to buy a house. <br> You are rewared: 300Exp and 500gold");
                };
            }
        });
        buttons.appendChild(BanditLordReward);
    };

    const back = ButtonButton("Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    div.appendChild(buttons);
    div.appendChild(back);
}

function TownhallFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();

    const div = document.createElement("div");
    div.appendChild(TitleText("Townhall"));

    const p = TextBox();
    p.innerHTML = `Inside the local town hall there isn’t much to see, for being a town hall it’s honestly not that 
    impressive at all. But this is just a small outskirt village after all, hopefully they do at least have work for you.`;
    div.appendChild(p);

    const row1 = document.createElement("div"),
        input1 = ButtonButton("Quests")
    input1.addEventListener("click", function () {
        TownHallQuests();
    });
    row1.appendChild(input1);

    if (House.Owned === false && Flags.BanditLord) {
        const input2 = ButtonButton("Buy house 100g")
        input2.addEventListener("click", function () {
            if (player.Gold >= 100) {
                House.Owned = true;
                TownhallFunc();
                return;
            } else {
                return;
            }
        });
        row1.appendChild(input2);
    }

    const input3 = ButtonButton("Services")
    input3.addEventListener("click", function () {
        TownHallService();
    });
    row1.appendChild(input3);

    const input4 = ButtonButton("(placeholder)Reputation");
    input4.addEventListener("click", function () {
        p.innerHTML = `${Flags.FirstCityLike}<br> They temp temp you.`;
    });
    row1.appendChild(input4);
    div.appendChild(row1);

    div.appendChild(LeaveBuilding());

    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}

function TownHallService() {
    const div = document.getElementById("Buildings");
    CleanBuildings();

    // Container for services, atm there is only name change
    const inputs = document.createElement("div");

    // Container for accept and back [Yes/No]
    const YN = document.createElement("div");
    div.appendChild(TitleText("Service"));

    const p = TextBox();
    div.appendChild(p);

    const CN = ButtonButton("Change name");
    CN.addEventListener("click", function () {
        while (inputs.hasChildNodes()) {
            inputs.removeChild(inputs.firstChild);
        }
        const FName = InputText(player.Name, "ServiceFName724");
        inputs.appendChild(LabelFor("ServiceFName724", "First name:"));
        inputs.appendChild(FName);

        const LName = InputText(player.LastName, "ServiceLName244");
        inputs.appendChild(LabelFor("ServiceLName244", "Last name:"));
        inputs.appendChild(LName);

        const Accept = ButtonButton("Accept");
        Accept.addEventListener("click", function () {
            player.Name = FName.value;
            player.LastName = LName.value;
            TownHallService();
        });
        YN.appendChild(Accept);
    });
    inputs.appendChild(CN);

    const back = ButtonButton("Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    YN.appendChild(back);

    div.appendChild(inputs);
    div.appendChild(YN);
}