function UpdateStats(YourTurn = true) {
    let ee = enemies[EnemyIndex];
    CombatButtons();
    const ESH = document.getElementById("EnemyStatusHealth"),
        ESWH = document.getElementById("EnemyStatusWillHealth"),
        SH = document.getElementById("StatusHealth2"),
        SWH = document.getElementById("StatusWillHealth2"),
        BE = document.getElementById("BattleEnemy"),
        SN = document.getElementById("StatusName2");
    // Enemy Status
    BE.innerHTML = `${ee.Name}<br>${ee.Race} ${Pronoun(CheckGender(ee))}`;
    ESH.innerHTML = Math.round(ee.Health);
    ESH.style.width = `${100 * (ee.Health / ee.FullHealth)}%`;
    ESWH.innerHTML = Math.round(ee.WillHealth);
    ESWH.style.width = `${100 * (ee.WillHealth / ee.FullWillHealth)}%`;
    // Player Status
    SN.innerHTML = `${player.Name} ${player.LastName}`;
    SH.innerHTML = Math.round(player.Health);
    SH.style.width = `${Math.min(103, 100 * (player.Health / player.MaxHealth))}%`;
    SWH.innerHTML = Math.round(player.WillHealth);
    SWH.style.width = `${Math.min(103, 100 * (player.WillHealth / player.MaxWillHealth))}%`;
    player.Mana += 2; // Slow in combat mana rec

    if (ee.Health <= 0 || ee.WillHealth <= 0) {
        WinBattle();
        return;
    } else if (player.Health <= 0 || player.WillHealth <= 0) {
        Lose();
        return;
    }

    if (YourTurn === false) {
        EnemyAttack();
    }


}

function EnemyAttack() {
    const PhysicalAttacks = [
            "kicks", "hits", "grapple with"
        ],
        BT = document.getElementById("BattleText2");

    let ee = enemies[EnemyIndex];
    if (ee.Str >= ee.Charm) {
        let EAttack = (RandomInt(1, 5) * ee.Str) / 2;
        player.Health -= EAttack;
        BT.innerHTML = "Your opponent " + RandomString(PhysicalAttacks) + " you, causing " + EAttack + " dmg.";
        UpdateStats();
        return;
    } else { // if (ee.Str < ee.Charm) Unnesary?
        let LustAttacks = ["tease you"];
        if (ee.Boobies[0].Size > 5) {
            let boob = "fondle their breast in a seductive manner";
            LustAttacks.push(boob);
        }
        if (ee.Balls.length > 0) {
            let ball = "fondle their balls in a teasing manner";
            LustAttacks.push(ball);
        }
        let EAttack = (RandomInt(1, 5) * ee.Charm) / 2;
        BT.innerHTML = `Your opponent ${RandomString(LustAttacks)} causing your will to suffer by ${EAttack}.`;
        player.WillHealth -= EAttack;
        UpdateStats();
        return;
    }
}
/**
 * Need to make enemy attack more flavour full
 * Make it so enemies tease with different movement & hit with stuff like kick, sweeps, slashing, etc..
 * Race specific is extra needed, succubus can tex tease by fucking themselfs with their tail maybe?
 */

// Battle attack buttons
// Ideas for new combat system I want to add resistence and other things for more depth
/** Ideas to add
 *  Ways to ignore resistance like pierce?
 *  Ways to do extra dmg like they have 5% res but you have 12% something so they get -7% res
 *  Pets & allies attack
 */

function LusRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.Will + 0.01 * who.Charm)));
}

function PhyRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.End + 0.01 * who.Str)));
}

function MagRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.Will + 0.01 * who.Int)));
}

function CombatFunc() { // Whole combat div
    const Combat = document.getElementById("Encounter");
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    const h1text = document.createTextNode("Battle");
    h1.appendChild(h1text);
    div.appendChild(h1);

    // Enemy
    const TheEnemy = document.createElement("div");
    TheEnemy.setAttribute("id", "TheEnemy");
    TheEnemy.classList.add("d");

    const BattleEnemy = document.createElement("p");
    BattleEnemy.setAttribute("id", "BattleEnemy");

    const EH = document.createElement("div");
    EH.setAttribute("id", "EnemyStatusHealth");
    EH.classList.add("StatusHealth");

    const EHOD = document.createElement("div");
    EHOD.classList.add("FullBar");
    EHOD.appendChild(EH);

    const EHL = document.createElement("label");
    EHL.setAttribute("for", "EnemyStatusHealth");
    EHL.innerHTML("Health");
};

function CombatButtons() { // Just combat buttons
    let ee = enemies[EnemyIndex];
    const Combat = document.getElementById("CombatButtons"),
        BT = document.getElementById("BattleText");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    let row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const Hit = ButtonButton();
    Hit.innerHTML = `Hit<br>${Math.floor(4 * player.Str / 2)}-${Math.floor(8 * player.Str / 2)}dmg`;
    Hit.addEventListener("click", function () {
        const PAttack = Math.floor(RandomInt(4, 8) * player.Str / 2); // * PhyRes(ee);
        ee.Health -= PAttack;
        BT.innerHTML = "You dealt " + PAttack + " dmg.";
        UpdateStats(false);
    });
    row1.appendChild(Hit);
    Combat.appendChild(row1);

    const NonTease = [ // Insert enemies who can't be beaten by tease
        "Feral"
    ];
    if (NonTease.some(e => e === ee.Name)) {
        // Nothing for now will later make it so tease doesn't get created.
        console.log("Non tease")
    } else {
        const Tease = ButtonButton();
        Tease.innerHTML = "Tease<br>" + Math.floor(4 * player.Charm / 2) + "-" + Math.floor(8 * player.Charm / 2) + "Will"
        Tease.addEventListener("click", function () {
            const PAttack = Math.floor(RandomInt(4, 8) * player.Charm / 2); // * LusRes(ee);
            ee.WillHealth -= PAttack;
            BT.innerHTML = "You dealt " + PAttack + " will dmg."
            UpdateStats(false);
        });
        row2.appendChild(Tease);
        Combat.appendChild(row2);
    }
    if (player.Spells.length > 0) {
        for (let e = 0; e < Math.min(player.Spells.length, 3); e++) {
            const Spell = SpellButton(e);
            row3.appendChild(Spell);
        }
        // if more than 3 spells spawn a spell book
        // Todo make it so that instead of spell with index 0,1,2 spawn at outside book make it so
        // that last casted spells is at the "quick cast" menu 
        if (player.Spells.length >= 2) {
            const book = InputButton("Spellbook");
            book.addEventListener("click", function () {
                Spellbook();
            });
            row3.appendChild(book);
        }
        Combat.appendChild(row3)
    }

    const FleeBattle = InputButton("Flee");
    FleeBattle.addEventListener("click", function () {
        const a = RandomInt(1, 10);
        if (a > 7) {
            battle = false;
            DisplayGame();
            document.getElementById("Encounter").style.display = 'none';
            BT.innerHTML = "Success!"
        }
        UpdateStats(false);
        BT.innerHTML = "You failed to get away."
    });
    row4.appendChild(FleeBattle);

    const Surrender = InputButton("Surrender");
    Surrender.addEventListener("click", function () {
        Lose();
    });
    row4.appendChild(Surrender);
    Combat.appendChild(row4);
}

function Spellbook() {
    // Replace all buttons with spells
    const Combat = document.getElementById("CombatButtons");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    const row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const CloseBook = InputButton("Close book");
    CloseBook.addEventListener("click", function () {
        CombatButtons();
    });
    row4.appendChild(CloseBook);

    // Using same e
    for (var e = 0; e < Math.min(player.Spells.length, 3); e++) {
        const Spell = SpellButton(e);
        row1.appendChild(Spell);
    }
    if (player.Spells.length > 2) {
        for (e = 3; e < Math.min(player.Spells.length, 7); e++) {
            const Spell = SpellButton(e);
            row2.appendChild(Spell);
        }
    }
    if (player.Spells.length > 6) {
        for (e = 7; e < Math.min(player.Spells.length, 10); e++) {
            const Spell = SpellButton(e);
            row3.appendChild(Spell);
        }
    }
    const Frag = document.createDocumentFragment();
    Rows = [row1, row2, row3, row4].forEach(function (src, index, array) {
        Frag.appendChild(src);
        if (index + 1 === array.length) {
            Combat.appendChild(Frag);
        }
    });
}

function SpellButton(index) { // Instead of repeating, Can only add fireball now need a const dic for spells
    const it = player.Spells[index],
        DictIt = SpellDict[it.Name],
        Spell = document.createElement("button"), // + " Mana-cost: " + ManaCost;
        ee = enemies[EnemyIndex];
    Spell.setAttribute("type", "button");
    Spell.setAttribute("title", SpellDictLite[it.Name].Title);
    Spell.innerHTML = `${DictIt.Name} ${DictIt.ManaCost()}M<br>${DictIt.Does(it.Exp)}`;
    Spell.addEventListener("click", function () {
        DictIt.Cast(index, ee);
        UpdateStats(false);
        console.log(it);
    });
    return Spell;
}