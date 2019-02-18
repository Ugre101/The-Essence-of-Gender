document.getElementById("PerkMenu").addEventListener("click", function () {
    document.getElementById("LevelMenu").style.display = 'none';
    document.getElementById("PerksMenu").style.display = 'block';
    PerkMenuFunc();
});

function PerkHandler(perket) {
    player.PerkPoints--;
    player.Perks[perket].Count++
}


// Changeing perk menu to a func so I can make a more advanced perk menu e.g. unlocked perk etc..
function PerkMenuFunc() {
    var div = document.getElementById("PerksMenu");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    if (window.innerHeight > 800) { // Testing spawning titles only when screen is big to help mobile users.
        var h1 = document.createElement("h1");
        var h1text = document.createTextNode("Perk menu");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    var p = document.createElement("p");
    p.classList.add("MenuText");
    div.appendChild(p);

    var pp = document.createElement("p");
    pp.innerHTML = "You have " + player.PerkPoints + " perk points left.";
    div.appendChild(pp);

    var active = document.createElement("div");
    active.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });
    var activeh3 = document.createElement("h3");
    var activeh3Text = document.createTextNode("Active");
    activeh3.appendChild(activeh3Text);
    active.appendChild(activeh3);

    var passive = document.createElement("div");
    passive.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })
    var passiveh3 = document.createElement("h3");
    var passiveh3Text = document.createTextNode("Passive");
    passiveh3.appendChild(passiveh3Text);
    passive.appendChild(passiveh3);

    var ExtraHealth = document.createElement("input");
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

    var ExtraWillHealth = document.createElement("input");
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

    var FasterRest = document.createElement("input");
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

    var StealMore = document.createElement("input");
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

    var GiveEssence = document.createElement("input");
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

    div.appendChild(passive);
    div.appendChild(active)

    var close = new InputButton("Close");
    close.addEventListener("click", function () {
        DisplayNone();
        DisplayGame();
    })
    div.appendChild(close);
}

(function () {
    setTimeout(() => {
        console.log("Hello")
    }, 2000)
    setTimeout(() => {
        console.log("Future")
    }, 4000);
})()