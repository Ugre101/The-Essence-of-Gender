function ShopFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    div.appendChild(TitleText("Potion shop"));

    const p = TextBox();
    div.appendChild(p);

    const innerdiv = document.createElement("div");

    const StrPotion = ButtonButton("Potion of Strength 100g");
    StrPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Str++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body 
            becoming stronger.<br>${player.Str}`;
        }
    });

    const ChaPotion = ButtonButton("Potion of Charm <br>100g");
    ChaPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Charm++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your 
            charms grow.<br>${player.Charm}`;
        }
    });
    innerdiv.appendChild(StrPotion);
    innerdiv.appendChild(ChaPotion);
    innerdiv.appendChild(document.createElement("br"));

    const EndPotion = ButtonButton("Potion of Endurance 100g")
    EndPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.End++
            player.MaxHealth += 5; // This is bad, need something that mod maxhealth dependent on end and other buffs.
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel 
            your endurance growing.<br>${player.End}`;
        }
    });
    const IntPotion = ButtonButton("Potion of Intelligence 100g")
    IntPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Int++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can 
            feel your mind becoming sharper.<br>${player.Int}`;
        }
    });
    innerdiv.appendChild(EndPotion);
    innerdiv.appendChild(IntPotion);
    innerdiv.appendChild(document.createElement("br"));

    const WillPotion = ButtonButton("Potion of Willpower 100g")
    WillPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Will++
            player.MaxWillHealth += 5;
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you can 
            feel your willpower growing.<br>${player.Will}`;
        }
    });
    const SexPotion = ButtonButton("Potion of Sexskill 100g"); // Needs to be renamed, sounds stupid.
    SexPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.SexSkill++
            player.Gold -= 100;
            p.innerHTML = `You pay 100gold proced to drink the potion, once the fluid enter your stomach you get 
            a feeling that somehow your bedskills have improved.<br>${player.SexSkill}`;
        }
    });
    innerdiv.appendChild(WillPotion);
    innerdiv.appendChild(SexPotion);

    div.appendChild(innerdiv);

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
} // Saved 13 lines with ButtonButton, wow... but looks better to me atleast!    