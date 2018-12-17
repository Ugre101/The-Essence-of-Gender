function RaceDrain(whose) {
    var RaceEss = player.RaceEssence;
    var a = RaceEss.findIndex(e => e.Race == whose.Race);
    if (a > -1) {
        RaceEss[a].amount += RandomInt(2,10);
    } else {
        var Race = {
            Race: whose.Race,
            amount: RandomInt(2,10)
        }
        RaceEss.push(Race);
    }
    var b = RaceEss.findIndex(e => e.Race == whose.SecondRace);
    if (b > -1) {
        RaceEss[a].amount += RandomInt(1,5);
    } else {
        var Race = {
            Race: whose.SecondRace,
            amount: RandomInt(1,5)
        }
        RaceEss.push(Race);
    }
};

document.getElementById("DrainM").addEventListener("click", function () {
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    var enemy = enemies[EnemyIndex];
    if (player.EssenceDrain >= enemies[EnemyIndex].Masc && enemies[EnemyIndex].Masc > 0) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedFemale)
            player.Femi += enemies[EnemyIndex].Masc;
        else
            player.Masc += enemies[EnemyIndex].Masc;
        enemies[EnemyIndex].Masc = 0;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon the last essence of masculinity from them leaving them with no signs of masculinity left." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.EssenceDrain < enemies[EnemyIndex].Masc) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedFemale)
            player.Femi += player.EssenceDrain;
        else
            player.Masc += player.EssenceDrain;
        enemies[EnemyIndex].Masc -= player.EssenceDrain;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon essence of masculinity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }
    RaceDrain(enemy);
    AfterBattleButtons();
    CheckArousal();
    return;
});

document.getElementById("DrainF").addEventListener("click", function () {
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    var enemy = enemies[EnemyIndex];
    if (player.EssenceDrain >= enemies[EnemyIndex].Femi && enemies[EnemyIndex].Femi > 0) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedMale)
            player.Masc += enemies[EnemyIndex].Femi;
        else
            player.Femi += enemies[EnemyIndex].Femi;
        enemies[EnemyIndex].Femi = 0;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon the last essence of femininity from them leaving them with no signs of femininity left. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.EssenceDrain < enemies[EnemyIndex].Femi) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedMale)
            player.Masc += player.EssenceDrain;
        else
            player.Femi += player.EssenceDrain;
        enemies[EnemyIndex].Femi -= player.EssenceDrain;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon essence of femininity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }
    RaceDrain(enemy);
    AfterBattleButtons();
    CheckArousal();
    return;
})

document.getElementById("InjectM").addEventListener("click", function () {
    var q = Math.min(player.GiveEssence, player.Masc);
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    if (player.GiveEssence >= player.Masc && player.Masc > 0) {
        player.SessionOrgasm--;
        player.Masc -= q;
        enemies[EnemyIndex].Masc += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You inject them with your last essence of masculinity, leaving yourself male-free." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.GiveEssence < player.Masc) {
        player.SessionOrgasm--;
        player.Masc -= q;
        enemies[EnemyIndex].Masc += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You inject essence of masculinity into them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }

    AfterBattleButtons();
    CheckArousal();
    return;
});

document.getElementById("InjectF").addEventListener("click", function () {
    var q = Math.min(player.GiveEssence, player.Femi);
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    if (player.GiveEssence >= player.Femi && player.Femi > 0) {
        player.SessionOrgasm--;
        player.Femi -= q;
        enemies[EnemyIndex].Femi += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You give them the last of your femininity, leaving yourself female-free. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.GiveEssence < player.Femi) {
        player.SessionOrgasm--;
        player.Femi -= q;
        enemies[EnemyIndex].Femi += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You inject essence of femininity into them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }
    AfterBattleButtons();
    CheckArousal();
    return;
})

function IntToAge(int) {
    switch (int) {
        case 1:
            return "one year";
        case 2:
            return "two years";
        case 3:
            return "three years";
        case 4:
            return "four years";
        case 5:
            return "five years";
        case 6:
            return "six years";
        default:
            return int + "years";
    }
}

function DrainChangesEnemy(eold, ecurrent) {
    var b = "";
    if (eold.Dicks.length > ecurrent.Dicks.length) {
        if (ecurrent.Dicks.length < 1) {
            b += "You see their dick shrinking completely into their body, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "They lost a dick"
        }
    } else if (eold.Dicks.length < ecurrent.Dicks.length) {
        b += "They have grown a dick"
    } else if (ecurrent.Dicks.length > 0) {
        for (var e = 0; e < eold.Dicks.length; e++) {
            if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick shrinking" //Need to add what dick e.g. their second dick shrinks etc
            } else if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick growing"
            }
        }
    }

    if (eold.Balls.length > ecurrent.Balls.length) {
        if (ecurrent.Balls.length < 1) {
            b += "<br>They lost a pair of balls"
        } else {
            b += "<br>They lost a pair of balls"
        }
    } else if (eold.Balls.length < ecurrent.Balls.length) {
        b += "<br>They have grown a pair of balls"
    } else if (ecurrent.Balls.length > 0) {
        for (var e = 0; e < ecurrent.Balls.length; e++) {
            if (Math.round(eold.Balls[e].Size) > Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls shrinking"
            } else if (Math.round(eold.Balls[e].Size) < Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls growing"
            }
        }
    }

    if (eold.Boobies.length > ecurrent.Boobies.length) {
        b += "<br>They loost a pair of breasts";
    } else if (eold.Boobies.length < ecurrent.Boobies.length) {
        b += "<br>They have grown a pair of breasts";
    } else {
        for (var e = 0; e < eold.Boobies.length; e++) {
            if (Math.round(eold.Boobies[e].Size) > Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts shrinking."
            } else if (Math.round(eold.Boobies[e].Size) < Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts growing."
            }
        }
    }

    if (eold.Pussies.length > ecurrent.Pussies.length) {
        if (ecurrent.Pussies.length < 1) {
            b += "<br>You see their pussy closing completely and disappear, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "<br>They a lost a pussy"
        }
    } else if (eold.Pussies.length < ecurrent.Pussies.length) {
        b += "<br>They a have grown a pussy"
    } else if (ecurrent.Pussies.length > 0) {
        for (var e = 0; e < eold.Pussies.length; e++) {
            if (Math.round(eold.Pussies[e].Size) > Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy tightening"
            } else if (Math.round(eold.Pussies[e].Size) < Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy growing" //Need better word/phrase than growing
            }
        }
    }
    return b;
}

//Need to do same for player
function DrainChanges(old, current, eold, ecurrent) {
    var a = " ";
    var b = " ";

    if (old.Dicks.length < current.Dicks.length) {
        a = "You have grown a dick!";
    } else if (current.Dicks.length < old.Dicks.length) {
        if (current.Dicks.length < 1) {

        } else {
            a = "You have lost a dick";
        }

    } else if (current.Dicks.length > 0) {
        for (var e = 0; e < current.Dicks.length; e++) {
            if (Math.round(old.Dicks[e].Size) < Math.round(current.Dicks[e].Size)) {
                a += "<br>You feel your dick growing.";
            } else if (Math.round(current.Dicks[e].Size) < Math.round(old.Dicks[e].Size)) {
                a += "<br>You feel your dick shrinking.";
            }
        }
    }

    if (old.Balls.length < current.Balls.length) {
        a += "<br>you have grown a pair of balls"
    } else if (current.Balls.length < old.Balls.length) {
        a += "<br>you have lost a pair of balls"
    } else if (current.Balls.length > 0) {
        for (var e = 0; e < current.Balls.length; e++) {
            if (Math.round(old.Balls[e].Size) < Math.round(current.Balls[e].Size)) {
                a += "<br>you feel you balls growing"
            } else if (Math.round(current.Balls[e].Size) < Math.round(old.Balls[e].Size)) {
                a += "<br>you feel you balls shrinking"
            }
        }
    }

    if (old.Boobies.length < current.Boobies.length) {
        a += "<br>You have grown a new pair of breasts."
    } else if (current.Boobies.length < old.Boobies.length) {
        a += "<br>You have lost a pair of breasts"
    } else if (current.Boobies.length > 0) {
        for (var e = 0; e < current.Boobies.length; e++) {
            if (Math.round(old.Boobies[e].Size) < Math.round(current.Boobies[e].Size)) {
                a += "<br>You feel your breasts grow bigger.";
            } else if (Math.round(current.Boobies[e].Size) < Math.round(old.Boobies[e].Size)) {
                a += "<br>You feel your breasts shrinking.";
            }
        }
    }

    if (old.Pussies.length < current.Pussies.length) {
        a += "<br>You gave grown a pussy";
    } else if (current.Pussies.length < old.Pussies.length) {
        a += "<br>You have lost a pussy";
    } else if (current.Pussies.length > 0) {
        for (var e = 0; e < current.Pussies.length; e++) {
            if (Math.round(old.Pussies[e].Size) < Math.round(current.Pussies[e].Size)) {
                a += "<br>You feel your pussy grow";
            } else if (Math.round(current.Pussies[e].Size) < Math.round(old.Pussies[e].Size)) {
                a += "<br>You feel your pussy tighten";
            }
        }
    }
    if (CheckGender(old) != CheckGender(current)) {
        a += "<br><br>You have become a " + Pronoun(CheckGender(current)) + "!<br>";
    }
    b = DrainChangesEnemy(eold, ecurrent);
    return "<br>" + a + "<br>" + b;
}