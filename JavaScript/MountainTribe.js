function TribeQuests() {
    var x = DocId("TribeQuestsMenu");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }

    var TribeDragon = document.createElement("INPUT");
    TribeDragon.setAttribute("type", "button");
    TribeDragon.setAttribute("value", "Dragon");
    TribeDragon.setAttribute("title", "Prove you worth.");
    TribeDragon.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TribeQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            TribeQuests();
        });
        document.getElementById("ShrineQuestsMenu").appendChild(Accept);
        document.getElementById("ShrineQuestsMenu").appendChild(Decline);
    });

    var TribeDragonReward = document.createElement("INPUT");
    TribeDragonReward.setAttribute("type", "button");
    TribeDragonReward.setAttribute("value", "reward");
    TribeDragonReward.setAttribute("title", "");
    TribeDragonReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "");
        player.Quests.splice(index, 1);
        TribeQuests();
    });
};

function TribeShopFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Tribe shop");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var ShopMenu = document.createElement("div");
    var row1 = document.createElement("div");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    ShopMenu.appendChild(row1);
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

function TribeChiefFunc() {
    var Npc = document.getElementById("Npc")
    Npc.style.display = 'none';
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.firstChild);
    }

    var div = document.createElement("div");
    // Title / Name
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Tribe chief");
    h1.appendChild(h1text);
    div.appendChild(h1);
    // Textbox
    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Npc.style.display = 'none';
        while (Npc.hasChildNodes()) {
            Npc.removeChild(Npc.firstChild);
        }
        return;
    });
    div.appendChild(Leave);

    Npc.appendChild(div);
    document.getElementById("Npc").style.display = 'block';
}

function TribeChiefWifeFunc() {
    var Npc = document.getElementById("Npc")
    Npc.style.display = 'none';
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.firstChild);
    }

    var div = document.createElement("div");
    // Title / Name
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Tribe chief's Wife");
    h1.appendChild(h1text);
    div.appendChild(h1);
    // Textbox
    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "");
    input2.addEventListener("click", function () {
        TestDialog();
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Npc.style.display = 'none';
        while (Npc.hasChildNodes()) {
            Npc.removeChild(Npc.firstChild);
        }
        return;
    });
    div.appendChild(Leave);

    Npc.appendChild(div);
    document.getElementById("Npc").style.display = 'block';

}

function TestDialog() {
    var Npc = document.getElementById("Npc");
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.lastChild)
    };

    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode("Testsson");
    h1.appendChild(h1Text);
    Npc.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    Npc.appendChild(p);

    var Inputs = document.createElement("div");

    var Option1 = InputButton("Option 1");
    Option1.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option11 = InputButton("Option 1-1");
        Option11.addEventListener("click", function () {

        });
        Inputs.appendChild(Option11);

        var Option12 = InputButton("Option 1-2");
        Option12.addEventListener("click", function () {

        });
        Inputs.appendChild(Option12);
    });
    Inputs.appendChild(Option1);

    var Option2 = InputButton("Option 2a");
    Option2.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option21 = InputButton("Option 2-1");
        Option21.addEventListener("click", function () {

        });
        Inputs.appendChild(Option21);

        var Option22 = InputButton("Option 2-2");
        Option22.addEventListener("click", function () {

        });
        Inputs.appendChild(Option22);
    });
    Inputs.appendChild(Option2);

    Npc.appendChild(Inputs);
}