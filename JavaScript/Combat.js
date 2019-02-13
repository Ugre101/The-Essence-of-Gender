function UpdateStats(FirstRound = false) {
    var ee = enemies[EnemyIndex];
    CombatButtons();
    document.getElementById("BattleEnemy").innerHTML = ee.Name + "<br>" + ee.Race + " " + Pronoun(CheckGender(ee));
    document.getElementById("EnemyStatusHealth").innerHTML = Math.round(ee.Health);
    document.getElementById("EnemyStatusHealth").style.width = 100 * (ee.Health / ee.FullHealth) + "%";
    document.getElementById("EnemyStatusWillHealth").innerHTML = Math.round(ee.WillHealth);
    document.getElementById("EnemyStatusWillHealth").style.width = 100 * (ee.WillHealth / ee.FullWillHealth) + "%";
    document.getElementById("StatusName2").innerHTML = player.Name + " " + player.LastName;
    document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
    if (player.Health <= player.MaxHealth) {
        document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
    } else {
        document.getElementById("StatusHealth2").style.width = 103 + "%";
    }
    document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
    if (player.WillHealth <= player.MaxWillHealth) {
        document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
    } else {
        document.getElementById("StatusWillHealth2").style.width = 103 + "%";
    }

    player.Mana++; // Slow in combat mana rec

    // Concept: Squishing your enemy if you're 10X bigger and heavier
    /*if (player.Weight > ee.Weight * 10 && player.Height > ee.Height * 10)
    {
        Teased = false;
        WinBattle();
        return;
    } else*/
    if (ee.Health <= 0) {
        WinBattle();
        //     Teased = false;
        return;
    } else if (ee.WillHealth <= 0) {
        //   Teased = true;
        WinBattle();
        return;
    } else if (player.Health <= 0) {
        Lose();
        player.Health = 0;
        return;
    } else if (player.WillHealth <= 0) {
        Lose();
        player.WillHealth = 0;
        return;
    } else if (!FirstRound) {
        EnemyAttack();
        return;
    } else {
        FirstRound = false;
        return;
    }
}
// var Teased = false;

/**
 * Need to make enemy attack more flavour full
 * Make it so enemies tease with different movement & hit with stuff like kick, sweeps, slashing, etc..
 * Race specific is extra needed, succubus can tex tease by fucking themselfs with their tail maybe?
 */

function EnemyAttack() {
    var PhysicalAttacks = [
        "kicks", "hits", "grapple with"
    ]
    var ee = enemies[EnemyIndex];
    if (ee.Str >= ee.Charm) {
        var EAttack = (RandomInt(1, 5) * ee.Str) / 2;
        player.Health -= EAttack;
        document.getElementById("BattleText2").innerHTML = "Your opponent " + RandomString(PhysicalAttacks) + " you, causing " + EAttack + " dmg.";
        document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
        document.getElementById("StatusHealth2").style.width = Math.min(103, 100 * (player.Health / player.MaxHealth)) + "%";
        document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
        document.getElementById("StatusWillHealth2").style.width = Math.min(103, 100 * (player.WillHealth / player.MaxWillHealth)) + "%";
        if (player.Health <= EAttack) {
            UpdateStats();
            return;
        }
        return;
    } else if (ee.Str < ee.Charm) {
        var LustAttacks = ["tease you"]
        if (ee.Boobies[0].Size > 5) {
            var boob = "fondle their breast in a seductive manner";
            LustAttacks.push(boob);
        }
        if (ee.Balls.length > 0) {
            var ball = "fondle their balls in a teasing manner";
            LustAttacks.push(ball);
        }
        var EAttack = (RandomInt(1, 5) * ee.Charm) / 2;
        player.WillHealth -= EAttack;
        document.getElementById("BattleText2").innerHTML = "Your opponent " + RandomString(LustAttacks) + " causing your will to suffer by " + EAttack + ".";
        document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
        document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
        document.getElementById("StatusHealth2").style.width = Math.min(103, 100 * (player.Health / player.MaxHealth)) + "%";
        document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
        document.getElementById("StatusWillHealth2").style.width = Math.min(103, 100 * (player.WillHealth / player.MaxWillHealth)) + "%";
        if (player.WillHealth <= EAttack) {
            UpdateStats();
            return;
        }
        return;
    }
}
// Battle attack buttons
/** To Do:
 *  Add a sort of mana insted of max fireballs
 *  I think I like having magical essence as "mana", magical essence can be a elelemt found in everything and like our air
 *  it always want to achive equalilty/even presure so having a alot of mana is hard. Because it will slowly seep out of your body.
 *  
 *  Might add a cooldown
 * 
 *  More speels and skills overall
 */
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
    var Combat = document.getElementById("Encounter");
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Battle");
    h1.appendChild(h1text);
    div.appendChild(h1);

    // Enemy
    var TheEnemy = document.createElement("div");
    TheEnemy.setAttribute("id", "TheEnemy");
    TheEnemy.classList.add("d");

    var BattleEnemy = document.createElement("p");
    BattleEnemy.setAttribute("id", "BattleEnemy");

    var EH = document.createElement("div");
    EH.setAttribute("id", "EnemyStatusHealth");
    EH.classList.add("StatusHealth");

    var EHOD = document.createElement("div");
    EHOD.classList.add("FullBar");
    EHOD.appendChild(EH);

    var EHL = document.createElement("label");
    EHL.setAttribute("for", "EnemyStatusHealth");
    EHL.innerHTML("Health");
};

function CombatButtons() { // Just combat buttons
    var ee = enemies[EnemyIndex];
    var Combat = document.getElementById("CombatButtons");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    var row1 = document.createElement("div");
    var row2 = document.createElement("div");
    var row3 = document.createElement("div");
    var row4 = document.createElement("div");

    var Hit = ButtonButton();
    Hit.innerHTML = "Hit<br>" + Math.floor(4 * player.Str / 2) + "-" + Math.floor(8 * player.Str / 2) + "dmg"
    Hit.addEventListener("click", function () {
        var PAttack = Math.floor(RandomInt(4, 8) * player.Str / 2) // * PhyRes(ee);
        ee.Health -= PAttack;
        document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " dmg.";
        UpdateStats();
    });
    row1.appendChild(Hit);
    Combat.appendChild(row1);

    var NonTease = [ // Insert enemies who can't be beaten by tease
        "Feral"
    ];
    if (NonTease.some(e => e === ee.Name)) {
        // Nothing for now will later make it so tease doesn't get created.
        console.log("Non tease")
    } else {
        var Tease = ButtonButton();
        Tease.innerHTML = "Tease<br>" + Math.floor(4 * player.Charm / 2) + "-" + Math.floor(8 * player.Charm / 2) + "Will"
        Tease.addEventListener("click", function () {
            var PAttack = Math.floor(RandomInt(4, 8) * player.Charm / 2) // * LusRes(ee);
            ee.WillHealth -= PAttack;
            document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " will dmg."
            UpdateStats();
        });
        row2.appendChild(Tease);
        Combat.appendChild(row2);
    }
    if (player.Spells.length > 0) {
        for (var e = 0; e < Math.min(player.Spells.length, 3); e++) {
            var Spell = new SpellButton(e);
            row3.appendChild(Spell);
        }
        // if more than 3 spells spawn a spell book
        // Todo make it so that instead of spell with index 0,1,2 spawn at outside book make it so
        // that last casted spells is at the "quick cast" menu 
        if (player.Spells.length >= 2) {
            var book = InputButton("Spellbook");
            book.addEventListener("click", function () {
                Spellbook();
            });
            row3.appendChild(book);
        }
        Combat.appendChild(row3)
    }

    var FleeBattle = InputButton("Flee");
    FleeBattle.addEventListener("click", function () {
        var a = RandomInt(1, 10);
        if (a > 7) {
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("status").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("EmptyButtons").style.display = 'none';
            document.getElementById("EventLog").style.display = 'block';
            document.getElementById("Encounter").style.display = 'none';
            document.getElementById("BattleText").innerHTML = "Success!"
        }
        UpdateStats();
        document.getElementById("BattleText").innerHTML = "You failed to get away."
    });
    row4.appendChild(FleeBattle);

    var Surrender = InputButton("Surrender");
    Surrender.addEventListener("click", function () {
        Lose();
    });
    row4.appendChild(Surrender);
    Combat.appendChild(row4);
}

function Spellbook() {
    // Replace all buttons with spells
    var Combat = document.getElementById("CombatButtons");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    var row1 = document.createElement("div");
    var row2 = document.createElement("div");
    var row3 = document.createElement("div");
    var row4 = document.createElement("div");

    var CloseBook = InputButton("Close book");
    CloseBook.addEventListener("click", function () {
        CombatButtons();
    });
    row4.appendChild(CloseBook);

    for (var e = 0; e < Math.min(player.Spells.length, 3); e++) {
        var Spell = new SpellButton(e);
        row1.appendChild(Spell);
    }
    if (player.Spells.length > 2) {
        for (var e = 3; e < Math.min(player.Spells.length, 7); e++) {
            var Spell = new SpellButton(e);
            row2.appendChild(Spell);
        }
    }
    if (player.Spells.length > 6) {
        for (var e = 7; e < Math.min(player.Spells.length, 10); e++) {
            var Spell = new SpellButton(e);
            row3.appendChild(Spell);
        }
    }
    Combat.appendChild(row1);
    Combat.appendChild(row2);
    Combat.appendChild(row3);
    Combat.appendChild(row4);

}

function SpellButton(index) { // Instead of repeating, Can only add fireball now need a const dic for spells
    var it = player.Spells[index];
    var DictIt = SpellDict[it.Name];
    var Spell = document.createElement("button") // + " Mana-cost: " + ManaCost;
    Spell.setAttribute("type", "button");
    Spell.setAttribute("title", SpellDictLite[it.Name].Title);
    Spell.innerHTML = DictIt.Name + " " + DictIt.ManaCost() + "M<br>" + DictIt.Does(it.Exp);
    Spell.addEventListener("click", function () {
        var ee = enemies[EnemyIndex];
        DictIt.Cast(index, ee);
        console.log(it);
    });
    return Spell;
}