function FirstWave() {
    var OP = new enemy("Guard", RandomString(RacesCave), RandomInt(80, 150), RandomInt(0, 150), RandomInt(10, 13), RandomInt(10, 13), RandomInt(10, 13), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(9, 18), 0, 0, 150, 150, 180, 180, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(30, 40), RandomInt(20, 35), 'red', grid, RandomInt(40, 60), RandomInt(120, 140), RandomInt(10, 25), RandomInt(15, 35));
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
    var OP = new enemy("Guard", RandomString(RacesCave2), RandomInt(80, 250), RandomInt(0, 150), RandomInt(15, 21), RandomInt(15, 21), RandomInt(15, 21), RandomInt(11, 15),
        RandomInt(8, 11), RandomInt(19, 28), 0, 0, 220, 220, 240, 240, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(45, 65), RandomInt(40, 65), 'red', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(15, 35), RandomInt(15, 35));
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
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(250, 700), RandomInt(50, 350), RandomInt(30, 45), RandomInt(30, 45), RandomInt(27, 43), RandomInt(23, 27),
        RandomInt(20, 23), RandomInt(55, 75), 0, 0, 420, 420, 450, 450, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(75, 95), RandomInt(65, 85), 'red', grid, RandomInt(50, 80), RandomInt(160, 190), RandomInt(25, 35), RandomInt(15, 35));
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
    var OP = new enemy("Guard", RandomString(RacesCave4), 100, 100, RandomInt(10, 15), RandomInt(50, 65), RandomInt(55, 70), RandomInt(55, 70),
        RandomInt(35, 55), RandomInt(95, 135), 0, 0, 500, 500, 600, 600, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(110, 140), RandomInt(90, 140), 'purple', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(20, 30), RandomInt(15, 35));
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(2500, 5000);
        OP.Masc = 0;
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(2500, 5000);
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

function SuccubusBoss() {
    var OP = new enemy("Mistress", RandomString(RacesCave4), 100, 100, RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 0, 0, 800, 800, 1500, 1500, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(300, 400), RandomInt(200, 340), 'purple', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(20, 30), RandomInt(15, 35));
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(4500, 7000);
        OP.Masc = 0;
        OP.Name = "Mistress";
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(4500, 7000);
        OP.Name = "Master";
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

function SuccubusBossUnique() {
    var OP = new enemy("Dungeon Mistress", "Succubus", 0, 9999, RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 0, 0, 800, 800, 1500, 1500, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(300, 400), RandomInt(200, 340), 'purple', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(20, 30), RandomInt(15, 35));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 8);
        if (a < 8) {
            OP.Pussies[0].Virgin = false;
        }
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}
var Dungeon = false;
var Wave = 0;
document.getElementById("EnterDungeon").addEventListener("click", function () {
    enemies = [];
    if (false) {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBossUnique()];
    } else {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBoss()];
    }
    document.getElementById("FirstDungeon").style.display = 'none';
    document.getElementById("FirstDungeonText").innerHTML = "Wave " + (Wave + 2);

    document.getElementById("Encounter").style.display = 'grid';
    document.getElementById("BattleText").innerHTML = null;
    document.getElementById("BattleText2").innerHTML = null;
    EnemyIndex = enemies.indexOf(enemies[Wave]);
    enemies[Wave].Health = enemies[Wave].FullHealth;
    enemies[Wave].WillHealth = enemies[Wave].FullWillHealth;
    EssenceCheck(enemies[Wave]);
    UpdateStats();
    Dungeon = true;
});
document.getElementById("DungeonStopButton").addEventListener("click", function () {
    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("PlayerMouth").style.display = 'block';
    document.getElementById("PlayerVagina").style.display = 'block';
    document.getElementById("PlayerDick").style.display = 'block';
    document.getElementById("Anal").style.display = 'block';
    document.getElementById("EnemyVagina").style.display = 'block';
    document.getElementById("EnemyDick").style.display = 'block';

    document.getElementById("DrainMenu").style.display = 'block';
    document.getElementById("InjectMenu").style.display = 'block';

    document.getElementById("FirstDungeon").style.display = 'block';
    Wave++;
    if (Wave == 4 && !Flags.BeatSuccubus && false) {
        Flags.BeatSuccubus = true;
        document.getElementById("FirstDungeonText").innerHTML = "Having beaten her you found a teleport shard to a new world,"
        if (House.Portal) {
            document.getElementById("FirstDungeonText").innerHTML += " you can use it at your portal at home!"
        } else {
            document.getElementById("FirstDungeonText").innerHTML += " you should build a portal at your mansion so you can use it."
        }
    }
    if (Wave == 5) {
        Wave = 0;
        document.getElementById("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
});
document.getElementById("DungeonCapture").addEventListener("click", function () {
    House.Dormmates.push(enemies[EnemyIndex]);
    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("PlayerMouth").style.display = 'block';
    document.getElementById("PlayerVagina").style.display = 'block';
    document.getElementById("PlayerDick").style.display = 'block';
    document.getElementById("Anal").style.display = 'block';
    document.getElementById("Breast").style.display = 'block';
    document.getElementById("EnemyVagina").style.display = 'block';
    document.getElementById("EnemyDick").style.display = 'block';
    document.getElementById("DrainMenu").style.display = 'block';
    document.getElementById("InjectMenu").style.display = 'block';
    document.getElementById("FirstDungeon").style.display = 'block';
    Wave++;
    LastPressed = " ";
    if (Wave == 5) {
        Wave = 0;
        document.getElementById("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
});
document.getElementById("DungenoLose").addEventListener("click", function () {
    battle = false;
    document.getElementById("Lose").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("LoseStruggle").style.display = 'inline-block';
    document.getElementById("LoseSubmit").style.display = 'inline-block';
    document.getElementById("LosePlayerOrgasm").innerHTML = " ";
    document.getElementById("EventLog").style.display = 'block';
    enemies = [];
    Dungeon = false;
    Wave = 0;
});
document.getElementById("LeaveFirstDungeon").addEventListener("click", function () {
    enemies = [];
    battle = false;
    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("PlayerMouth").style.display = 'block';
    document.getElementById("PlayerVagina").style.display = 'block';
    document.getElementById("PlayerDick").style.display = 'block';
    document.getElementById("Anal").style.display = 'block';
    document.getElementById("EnemyVagina").style.display = 'block';
    document.getElementById("EnemyDick").style.display = 'block';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("DrainMenu").style.display = 'block';
    document.getElementById("InjectMenu").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';
    LastPressed = " ";
    Dungeon = false;
    Wave = 0;
    return;
});