function BattleSetup(who) {
    const none = [DocId("map"), DocId("status"), DocId("buttons"),
        DocId("EmptyButtons"), DocId("EventLog")
    ].forEach((src) => {
        src.style.display = 'none';
    })
    DocId("Encounter").style.display = 'grid';
    DocId("BattleText").innerHTML = null;
    DocId("BattleText2").innerHTML = null;
    battle = true;
    who.Health = who.FullHealth;
    who.WillHealth = who.FullWillHealth;
    player.Mana = 100; // Remember to Change
    // Clean battlelog
    while (BattleLog.length > 0) {
        BattleLog.pop();
    };
    Combatants = [];
    CombatTurn = 1;
    CombatantIndex = -1;
    Combatants.push(player);
    // push player teammates
    if (Array.isArray(who)) {
        for (let e of who) {
            Combatants.push(e);
        };
    } else {
        Combatants.push(who);
    };
    // Push enemy teammates 
    UpdateStats();
};

// Combat turn system to allow me to add team mates or fight against 
var CombatTurn = 1,
    Combatants = [],
    CombatantIndex = -1;

function NextTurn() {
    CombatantIndex++;
    if (CombatantIndex >= Combatants.length) {
        CombatantIndex = 0;
        BattleLog.push(`<br>Turn ${CombatTurn}<br>`);
        CombatTurn++;
        const BT = DocId("BattleText2"),
            temp = BattleLog.slice(0);
        BT.innerHTML = null;
        for (let e of temp.reverse()) {
            BT.innerHTML += `${e}<br>`
        }
    };
    if (Combatants[CombatantIndex] === player) {
        // wait for player input
    } else {
        const ee = Combatants[CombatantIndex];
        EnemyAttack(ee);
    };
};

function UpdateStats() {
    CombatButtons();
    const ee = enemies[EnemyIndex],
        ESH = DocId("EnemyStatusHealth"),
        ESWH = DocId("EnemyStatusWillHealth"),
        SH = DocId("StatusHealth2"),
        SWH = DocId("StatusWillHealth2"),
        BE = DocId("BattleEnemy"),
        SN = DocId("StatusName2");

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
    NextTurn();
};

const BattleLog = [];

function AddToBattleLog(text, who = player) {
    BattleLog.push(`${text}<br>`);
    BattleLog.push(who.Name);
};

function EnemyAttack(ee) {
    const {
        Charm,
        Str,
        Boobies,
        Balls
    } = ee;
    if (Str >= Charm) {
        const PhysicalAttacks = [
                "Kicks", "Hits", "Grapple with"
            ],
            EAttack = (RandomInt(1, 5) * Str) / 2,
            Text = `${RandomString(PhysicalAttacks)} you, causing ${EAttack} dmg.`
        player.Health -= EAttack;
        AddToBattleLog(Text, ee);
    } else { // if (ee.Str < ee.Charm) Unnesary?
        const LustAttacks = ["Tease you"],
            EAttack = (RandomInt(1, 5) * Charm) / 2;
        if (Boobies.length > 0 ? Boobies[0].Size > 5 : false) {
            const boob = "Fondle their breast in a seductive manner";
            LustAttacks.push(boob);
        };
        if (Balls.length > 0) {
            const ball = "Fondle their balls in a teasing manner";
            LustAttacks.push(ball);
        };
        const Text = `${RandomString(LustAttacks)} causing your will to suffer by ${EAttack}.`
        AddToBattleLog(Text, ee);
        player.WillHealth -= EAttack;
    };
    UpdateStats();
    return;
};
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
    const Combat = DocId("Encounter");
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
    const Combat = DocId("CombatButtons"),
        BT = DocId("BattleText");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    let row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const Hit = ButtonButton(`Hit<br>${Math.floor(4 * player.Str / 2)}-${Math.floor(8 * player.Str / 2)}dmg`);
    Hit.addEventListener("click", function () {
        const PAttack = Math.floor(RandomInt(4, 8) * player.Str / 2); // * PhyRes(ee);
        ee.Health -= PAttack;
        AddToBattleLog(`You dealt ${PAttack} dmg to ${ee.Name}.`);
        UpdateStats();
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
        const Tease = ButtonButton(`Tease<br>${Math.floor(4 * player.Charm / 2)}-${Math.floor(8 * player.Charm / 2)}Will`);
        Tease.addEventListener("click", function () {
            const PAttack = Math.floor(RandomInt(4, 8) * player.Charm / 2); // * LusRes(ee);
            ee.WillHealth -= PAttack;
            AddToBattleLog(`You dealt ${PAttack} will dmg to ${ee.Name}.`);
            UpdateStats();
        });
        row2.appendChild(Tease);
        Combat.appendChild(row2);
    }
    if (player.Spells.length > 0) {
        for (let e = 0; e < Math.min(player.Spells.length, 3); e++) {
            const Spell = SpellButton(e);
            row3.appendChild(Spell);
        }
        // Todo make it so that instead of spell with index 0,1,2 spawn at outside book make it so
        // that last casted spells is at the "quick cast" menu 
        if (player.Spells.length >= 2) {
            const book = ButtonButton("Spellbook");
            book.addEventListener("click", function () {
                Spellbook();
            });
            row3.appendChild(book);
        }
        Combat.appendChild(row3)
    }

    const FleeBattle = ButtonButton("Flee");
    FleeBattle.addEventListener("click", function () {
        if (RandomInt(1, 10) > 7) {
            battle = false;
            DisplayGame();
            DocId("Encounter").style.display = 'none';
            AddToBattleLog(`Success!`);
        } else {
            AddToBattleLog(`You failed to get away.`);
            UpdateStats();
        }
    });
    row4.appendChild(FleeBattle);

    const Surrender = ButtonButton("Surrender");
    Surrender.addEventListener("click", function () {
        Lose();
    });
    row4.appendChild(Surrender);
    Combat.appendChild(row4);
}

function Spellbook() {
    // Replace all buttons with spells
    const Combat = DocId("CombatButtons");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    const row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const CloseBook = ButtonButton("Close book");
    CloseBook.addEventListener("click", function () {
        CombatButtons();
    });
    row4.appendChild(CloseBook);

    for (let e = 0; e < player.Spells.length; e++) {
        if (e < 3) {
            const Spell = SpellButton(e);
            row1.appendChild(Spell);
        } else if (e < 6) {
            const Spell = SpellButton(e);
            row2.appendChild(Spell);
        } else {
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
        Spell = ButtonButton(`${DictIt.Name} ${DictIt.ManaCost()}M<br>${DictIt.Does(it.Exp)}`,
            SpellDictLite[it.Name].Title), // + " Mana-cost: " + ManaCost;
        ee = enemies[EnemyIndex];
    Spell.addEventListener("click", function () {
        DictIt.Cast(index, ee);
        UpdateStats();
    });
    return Spell;
}