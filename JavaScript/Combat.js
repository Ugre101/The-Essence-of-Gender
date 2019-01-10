function UpdateStats(FirstRound = false) {
    var ee = enemies[EnemyIndex];
    document.getElementById("BattleEnemy").innerHTML = ee.Name + "<br>" + ee.Race + " " + Pronoun(CheckGender(ee));
    document.getElementById("EnemyStatusHealth").innerHTML = Math.round(ee.Health);
    document.getElementById("EnemyStatusHealth").style.width = 100 * (ee.Health / ee.FullHealth) + "%";
    document.getElementById("EnemyStatusWillHealth").innerHTML = Math.round(ee.WillHealth);
    document.getElementById("EnemyStatusWillHealth").style.width = 100 * (ee.WillHealth / ee.FullWillHealth) + "%";
    if (player.hasOwnProperty("Spells")) {
        document.getElementById("SpellBook").style.display = 'block';
        if (player.Spells.FireballMax > 0) {
            document.getElementById("Fireball").style.display = 'inline-block';
            document.getElementById("Fireball").value = "Fireball (" + player.Spells.Fireball + " left)";
        } else {
            document.getElementById("Fireball").style.display = 'none';
            document.getElementById("SpellBook").style.display = 'none';
        }
    }
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
document.getElementById("Hit").addEventListener("click", function () {
    var ee = enemies[EnemyIndex];
    var PAttack = Math.floor(RandomInt(3, 8) * player.Str / 2) * PhyRes(ee);
    ee.Health -= PAttack;
    document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " dmg.";
    UpdateStats();
    return;
});

document.getElementById("Tease").addEventListener("click", function () {
    // Ferals shouldn't get aroused by you #Tease is now disabled if enemy is feral -Ugre
    var ee = enemies[EnemyIndex];
    var PAttack = Math.floor(RandomInt(3, 8) * player.Charm / 2) * LusRes(ee);
    ee.WillHealth -= PAttack;
    document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " will dmg."
    UpdateStats();
    return;
});
/** To Do:
 *  Add a sort of mana insted of max fireballs
 *  I think I like having magical essence as "mana", magical essence can be a elelemt found in everything and like our air
 *  it always want to achive equalilty/even presure so having a alot of mana is hard. Because it will slowly seep out of your body.
 *  
 *  Might add a cooldown
 * 
 *  More speels and skills overall
 */
document.getElementById("Fireball").addEventListener("click", function () {
    var ee = enemies[EnemyIndex];
    if (!player.hasOwnProperty("Spells")) {
        document.getElementById("BattleText").innerHTML = "You wave your arms, but nothing happens. Maybe you should learn magic first...";
        UpdateStats();
        return;
    } else if (player.Spells.FireballMax <= 0) {
        document.getElementById("BattleText").innerHTML = "You wave your arms, but nothing happens. Maybe you should learn magic first...";
        UpdateStats();
        return;
    } else if (player.Spells.Fireball <= 0) {
        document.getElementById("BattleText").innerHTML = "You're exhausted, and can't cast another fireball...";
        UpdateStats();
        return;
    }
    var PAttack = (RandomInt(3, 7) * player.Int);
    ee.WillHealth -= PAttack * MagRes(ee);
    ee.Health -= PAttack * MagRes(ee);
    player.Spells.Fireball--;
    document.getElementById("BattleText").innerHTML = "You threw a ball covered in fire, dealing " + PAttack + " damage to their HP and will!";
    UpdateStats();
    return;
});
document.getElementById("Surrender").addEventListener("click", function () {
    Lose();
});
document.getElementById("FleeBattle").addEventListener("click", function () {
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