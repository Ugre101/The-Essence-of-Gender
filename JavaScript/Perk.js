// Changeing perk menu to a func so I can make a more advanced perk menu e.g. unlocked perk etc..
function PerkMenuFunc() {
    function PerkHandler(perket) {
        player.PerkPoints--;
        player.Perks[perket].Count++
    }
    const div = document.getElementById("LevelMenu");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    const {
        Perks,
        PerkPoints
    } = player;

    const innerdiv = document.createElement("div");
    innerdiv.classList.add("LPMenuInner");

    if (window.innerHeight > 600) { // Testing spawning titles only when screen is big to help mobile users.
        const h1 = document.createElement("h1"),
            h1text = document.createTextNode("Perk menu");
        h1.appendChild(h1text);
        innerdiv.appendChild(h1);
    }

    const p = document.createElement("p");
    p.classList.add("MenuText");

    const pp = document.createElement("p");
    pp.innerHTML = `You have ${PerkPoints} perk points left.`;

    const active = document.createElement("div");
    active.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });
    const activeh3 = document.createElement("h3"),
        activeh3Text = document.createTextNode("Active");
    activeh3.appendChild(activeh3Text);

    const passive = document.createElement("div");
    passive.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })
    const passiveh3 = document.createElement("h3"),
        passiveh3Text = document.createTextNode("Passive");
    passiveh3.appendChild(passiveh3Text);

    const ExtraHealth = ButtonButton(Perks.ExtraHealth.Count > 0 ?
        `Extra Health +${Perks.ExtraHealth.Count}` : `Extra Health`, `Increase max health by 20`);
    ExtraHealth.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("ExtraHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraHealth);

    const ExtraWillHealth = ButtonButton(Perks.ExtraWillHealth.Count > 0 ?
        `Extra Willhealth +${Perks.ExtraWillHealth.Count}` : "Extra Willhealth", "Increase willpower by 20");
    ExtraWillHealth.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("ExtraWillHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraWillHealth);

    const FasterRest = ButtonButton(Perks.FasterRest.Count > 0 ?
        `Faster Rest +${Perks.FasterRest.Count}` : "Faster Rest",
        "Increases your passive rest with +0.01hp/tick. This will also increase rate burning fat.");
    FasterRest.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("FasterRest");
            PerkMenuFunc();
        }
    });
    passive.appendChild(FasterRest);

    const StealMore = ButtonButton(Perks.StealMore.Count > 0 ?
        `More essence +${Perks.StealMore.Count}` : "More essence",
        `Increases the amount of essence you take when your enemy orgasms`);
    StealMore.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("StealMore");
            PerkMenuFunc();
        }
    });
    active.appendChild(StealMore);

    const GiveEssence = ButtonButton(Perks.GiveEssence.Count > 0 ?
        `Give essence +${Perks.GiveEssence.Count}` : "Give essence",
        `Gives your enemy your femininity and/or masculinity when you orgasm`);
    GiveEssence.addEventListener("click", function () {
        if (PerkPoints > 0) {
            PerkHandler("GiveEssence");
            PerkMenuFunc();
        }
    });
    active.appendChild(GiveEssence);

    const back = ButtonButton("Back");
    back.addEventListener("click", function () {
        LevelMenuFunc();
    });

    const close = ButtonButton("Close");
    close.addEventListener("click", function () {
        DisplayNone();
        DisplayGame();
    });

    [p, pp, passiveh3, passive, activeh3, active, document.createElement("br"), back, close].forEach((src) => {
        innerdiv.appendChild(src);
    })
    div.appendChild(innerdiv);
}