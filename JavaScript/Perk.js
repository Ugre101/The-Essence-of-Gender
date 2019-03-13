function PerkHandler(perket) {
    player.PerkPoints--;
    player.Perks[perket].Count++
}
// Changeing perk menu to a func so I can make a more advanced perk menu e.g. unlocked perk etc..
function PerkMenuFunc() {
    let div = document.getElementById("LevelMenu");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    let innerdiv = document.createElement("div");
    innerdiv.classList.add("LPMenuInner");

    if (window.innerHeight > 600) { // Testing spawning titles only when screen is big to help mobile users.
        let h1 = document.createElement("h1");
        let h1text = document.createTextNode("Perk menu");
        h1.appendChild(h1text);
        innerdiv.appendChild(h1);
    }

    let p = document.createElement("p");
    p.classList.add("MenuText");
    innerdiv.appendChild(p);

    let pp = document.createElement("p");
    pp.innerHTML = "You have " + player.PerkPoints + " perk points left.";
    innerdiv.appendChild(pp);

    let active = document.createElement("div");
    active.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });
    let activeh3 = document.createElement("h3");
    let activeh3Text = document.createTextNode("Active");
    activeh3.appendChild(activeh3Text);

    let passive = document.createElement("div");
    passive.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })
    let passiveh3 = document.createElement("h3");
    let passiveh3Text = document.createTextNode("Passive");
    passiveh3.appendChild(passiveh3Text);

    let ExtraHealth = document.createElement("input");
    ExtraHealth.setAttribute("type", "button");
    ExtraHealth.setAttribute("title", "Increase max health by 20")
    ExtraHealth.setAttribute("value", player.Perks.ExtraHealth.Count > 0 ?
        ("Extra Health +" + player.Perks.ExtraHealth.Count) : ("Extra Health"));
    ExtraHealth.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraHealth);

    let ExtraWillHealth = document.createElement("input");
    ExtraWillHealth.setAttribute("type", "button");
    ExtraWillHealth.setAttribute("title", "Increase willpower by 20");
    ExtraWillHealth.setAttribute("value", player.Perks.ExtraWillHealth.Count > 0 ?
        ("Extra Willhealth +" + player.Perks.ExtraWillHealth.Count) : ("Extra Willhealth"));
    ExtraWillHealth.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraWillHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraWillHealth);

    let FasterRest = document.createElement("input");
    FasterRest.setAttribute("type", "button");
    FasterRest.setAttribute("title", "Increases your passive rest with +0.01hp/tick. This will also increase rate burning fat.");
    FasterRest.setAttribute("value", player.Perks.FasterRest.Count > 0 ?
        ("Faster Rest +" + player.Perks.FasterRest.Count) : ("Faster Rest"));
    FasterRest.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("FasterRest");
            PerkMenuFunc();
        }
    });
    passive.appendChild(FasterRest);

    let StealMore = document.createElement("input");
    StealMore.setAttribute("type", "button");
    StealMore.setAttribute("title", "Increases the amount of essence you take when your enemy orgasms");
    StealMore.setAttribute("value", player.Perks.StealMore.Count > 0 ?
        ("More essence +" + player.Perks.StealMore.Count) : ("More essence"));
    StealMore.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("StealMore");
            PerkMenuFunc();
        }
    });
    active.appendChild(StealMore);

    let GiveEssence = document.createElement("input");
    GiveEssence.setAttribute("type", "button");
    GiveEssence.setAttribute("title", "Gives your enemy your femininity and/or masculinity when you orgasm");
    GiveEssence.setAttribute("value", player.Perks.GiveEssence.Count > 0 ?
        ("Give essence +" + player.Perks.GiveEssence.Count) : ("Give essence"));
    GiveEssence.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("GiveEssence");
            PerkMenuFunc();
        }
    });
    active.appendChild(GiveEssence);

    innerdiv.appendChild(passiveh3);
    innerdiv.appendChild(passive);
    innerdiv.appendChild(activeh3);
    innerdiv.appendChild(active)

    let back = InputButton("Back")
    back.addEventListener("click", function () {
        LevelMenuFunc();
    });

    let close = InputButton("Close");
    close.addEventListener("click", function () {
        DisplayNone();
        DisplayGame();
    });

    let br = document.createElement("br");
    innerdiv.appendChild(br);
    innerdiv.appendChild(back);
    innerdiv.appendChild(close);
    div.appendChild(innerdiv);
}