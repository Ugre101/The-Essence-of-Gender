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

    var StrPotion = InputButton("Potion of Strength 100g");
    StrPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Str++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body becoming stronger."
            p.innerHTML += "<br>" + player.Str;
        }
    });

    var ChaPotion = InputButton("Potion of Charm 100g");
    ChaPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Charm++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your charms grow."
            p.innerHTML += "<br>" + player.Charm;
        }
    });
    innerdiv.appendChild(StrPotion);
    innerdiv.appendChild(ChaPotion);
    var br = document.createElement("br")
    innerdiv.appendChild(br);

    var EndPotion = InputButton("Potion of Endurance 100g")
    EndPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.End++
            player.MaxHealth += 5; // This is bad, need something that mod maxhealth dependent on end and other buffs.
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your endurance growing."
            p.innerHTML += "<br>" + player.End;
        }
    });
    var IntPotion = InputButton("Potion of Intelligence 100g")
    IntPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Int++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your mind becoming sharper."
            p.innerHTML += "<br>" + player.Int;
        }
    });
    innerdiv.appendChild(EndPotion);
    innerdiv.appendChild(IntPotion);
    var br2 = document.createElement("br")
    innerdiv.appendChild(br2);


    var WillPotion = InputButton("Potion of Willpower 100g")
    WillPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Will++
            player.MaxWillHealth += 5;
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your willpower growing."
            p.innerHTML += "<br>" + player.Will;
        }
    });
    var SexPotion = InputButton("Potion of Sexskill 100g"); // Needs to be renamed, sounds stupid.
    SexPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.SexSkill++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you get a feeling that somehow your bedskills have grown."
            p.innerHTML += "<br>" + player.SexSkill;
        }
    });
    innerdiv.appendChild(WillPotion);
    innerdiv.appendChild(SexPotion);

    div.appendChild(innerdiv);

    var Leave = InputButton("Leave");
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
} // Saved 13 lines with inputbutton, wow... but looks better to me atleast!    