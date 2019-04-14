function TribeQuests() {
    const x = DocId("TribeQuestsMenu");
    while (x.hasChildNodes()) {
        x.removeChild(x.lastChild);
    }

    const TribeDragon = ButtonButton("Dragon", "Prove you worth.");
    TribeDragon.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }
        const Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            const Quest = {
                Name: "",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TribeQuests();
        });
        const Decline = InputButton("Decline");
        Decline.addEventListener("click", function () {
            TribeQuests();
        });
        document.getElementById("ShrineQuestsMenu").appendChild(Accept);
        document.getElementById("ShrineQuestsMenu").appendChild(Decline);
    });

    const TribeDragonReward = ButtonButton("-reward");
    TribeDragonReward.addEventListener("click", function () {
        const index = player.Quests.findIndex(e => e.Name == "");
        player.Quests.splice(index, 1);
        TribeQuests();
    });
};

function TribeShopFunc() {
    const Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div"),
        h1 = document.createElement("h1"),
        h1text = document.createTextNode("Tribe shop");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    const ShopMenu = document.createElement("div"),
        row1 = document.createElement("div"),
        input1 = ButtonButton("input");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    const input2 = ButtonButton("input");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    ShopMenu.appendChild(row1);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}

function TribeChiefFunc() {
    const Npc = document.getElementById("Npcs")
    CleanNpcs();

    const div = document.createElement("div");
    // Title / Name
    div.appendChild(TitleText("Tribe chief"));
    // Textbox
    const p = TextBox();
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    const input1 = ButtonButton("input");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    const input2 = ButtonButton("input");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    div.appendChild(LeaveNpc());

    Npc.appendChild(div);
    Npc.style.display = 'block';
}

function TribeChiefWifeFunc() {
    const Npc = document.getElementById("Npcs")
    CleanNpcs();

    const div = document.createElement("div");
    // Title / Name
    div.appendChild(TitleText("Tribe chief's Wife"));
    // Textbox
    const p = TextBox();
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    const input1 = ButtonButton("input");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    const input2 = ButtonButton("input");
    input2.addEventListener("click", function () {
        TestDialog();
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    div.appendChild(LeaveNpc());

    Npc.appendChild(div);
    Npc.style.display = 'block';

}

function TestDialog() {
    const Npc = document.getElementById("Npc");
    CleanNpcs();

    h1.appendChild(TitleText("Testsson"));
    Npc.appendChild(h1);

    const p = TextBox();
    Npc.appendChild(p);

    const Inputs = document.createElement("div");

    const Option1 = ButtonButton("Option 1");
    Option1.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        const Option11 = ButtonButton("Option 1-1");
        Option11.addEventListener("click", function () {

        });
        Inputs.appendChild(Option11);

        const Option12 = ButtonButton("Option 1-2");
        Option12.addEventListener("click", function () {

        });
        Inputs.appendChild(Option12);
    });
    Inputs.appendChild(Option1);

    const Option2 = ButtonButton("Option 2a");
    Option2.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        const Option21 = ButtonButton("Option 2-1");
        Option21.addEventListener("click", function () {

        });
        Inputs.appendChild(Option21);

        const Option22 = ButtonButton("Option 2-2");
        Option22.addEventListener("click", function () {

        });
        Inputs.appendChild(Option22);
    });
    Inputs.appendChild(Option2);

    Npc.appendChild(Inputs);
}