function ShopFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Shop");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var innerdiv = document.createElement("div");

    var row1 = document.createElement("div");
    var StrPotion = document.createElement("input");
    StrPotion.setAttribute("value", "Potion of Strength 100g");
    StrPotion.setAttribute("type", "button");
    StrPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Str++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body becoming stronger."
            p.innerHTML += "<br>" + player.Str;
        }
    });
    var ChaPotion = document.createElement("input");
    ChaPotion.setAttribute("value", "Potion of Charm 100g");
    ChaPotion.setAttribute("type", "button");
    ChaPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Charm++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your charms grow."
            p.innerHTML += "<br>" + player.Charm;
        }
    });
    row1.appendChild(StrPotion);
    row1.appendChild(ChaPotion);
    innerdiv.appendChild(row1);

    var row2 = document.createElement("div");
    var EndPotion = document.createElement("input");
    EndPotion.setAttribute("value", "Potion of Endurance 100g");
    EndPotion.setAttribute("type", "button");
    EndPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.End++
            player.MaxHealth += 5; // This is bad, need something that mod maxhealth dependent on end and other buffs.
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your endurance growing."
            p.innerHTML += "<br>" + player.End;
        }
    });
    var IntPotion = document.createElement("input");
    IntPotion.setAttribute("value", "Potion of Intelligence 100g");
    IntPotion.setAttribute("type", "button");
    IntPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Int++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your mind becoming sharper."
            p.innerHTML += "<br>" + player.Int;
        }
    });
    row2.appendChild(EndPotion);
    row2.appendChild(IntPotion);
    innerdiv.appendChild(row2);

    var row3 = document.createElement("div");
    var WillPotion = document.createElement("input");
    WillPotion.setAttribute("value", "Potion of Willpower 100g");
    WillPotion.setAttribute("type", "button");
    WillPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Will++
            player.MaxWillHealth += 5;
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your willpower growing."
            p.innerHTML += "<br>" + player.Will;
        }
    });
    var SexPotion = document.createElement("input");
    SexPotion.setAttribute("value", "Potion of Sexskill 100g") // Needs to be renamed, sounds stupid.
    SexPotion.setAttribute("type", "button");
    SexPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.SexSkill++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you get a feeling that somehow your bedskills have grown."
            p.innerHTML += "<br>" + player.SexSkill;
        }
    });
    row3.appendChild(WillPotion);
    row3.appendChild(SexPotion);
    innerdiv.appendChild(row3);

    div.appendChild(innerdiv);

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