function FirstWave() {
    var OP = new enemy("Lesser", RandomString(RacesCave4), 100, 100, RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 0, 0, 420, 420, 550, 550, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(85, 110), RandomInt(70, 120), 'purple', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(20, 30), RandomInt(15, 35));
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(1500, 3000);
        OP.Masc = 0;
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(1500, 3000);
    }
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 8);
        if (a < 8) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 8);
        if (b < 8) {
            OP.Dicks[0].Virgin = false;
        }
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}
function SecondWave() {
    var OP = new enemy("Lesser", RandomString(RacesCave4), 100, 100, RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 0, 0, 420, 420, 550, 550, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(85, 110), RandomInt(70, 120), 'purple', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(20, 30), RandomInt(15, 35));
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(1500, 3000);
        OP.Masc = 0;
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(1500, 3000);
    }
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 8);
        if (a < 8) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 8);
        if (b < 8) {
            OP.Dicks[0].Virgin = false;
        }
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}
function ThirdWave() {
    var OP = new enemy("Lesser", RandomString(RacesCave4), 100, 100, RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 0, 0, 420, 420, 550, 550, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(85, 110), RandomInt(70, 120), 'purple', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(20, 30), RandomInt(15, 35));
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(1500, 3000);
        OP.Masc = 0;
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(1500, 3000);
    }
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 8);
        if (a < 8) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 8);
        if (b < 8) {
            OP.Dicks[0].Virgin = false;
        }
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}
function FourthWave() {
    var OP = new enemy("Lesser", RandomString(RacesCave4), 100, 100, RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 0, 0, 420, 420, 550, 550, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(85, 110), RandomInt(70, 120), 'purple', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(20, 30), RandomInt(15, 35));
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(1500, 3000);
        OP.Masc = 0;
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(1500, 3000);
    }
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 8);
        if (a < 8) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 8);
        if (b < 8) {
            OP.Dicks[0].Virgin = false;
        }
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}

document.getElementById("map").style.display = 'none';
document.getElementById("Encounter").style.display = 'grid';
document.getElementById("BattleText").innerHTML = null;
document.getElementById("BattleText2").innerHTML = null;
battle = true;
EnemyIndex = enemies.indexOf(enemies[0]);
enemies[0].Health = enemies[0].FullHealth;
enemies[0].WillHealth = enemies[0].FullWillHealth;
EssenceCheck(enemies[0]);
UpdateStats();