function FirstWave() {
    var RacesCave = ["Goblin", "Imp"];
    var OP = new enemy("Guard", RandomString(RacesCave), RandomInt(10, 13), RandomInt(10, 13), RandomInt(10, 13), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(9, 18), 150, 180, RandomInt(30, 40), RandomInt(20, 35),
        'red', grid, RandomInt(120, 140));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SecondWave() {
    var RacesCave2 = ["Goblin", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave2), RandomInt(15, 21), RandomInt(15, 21), RandomInt(15, 21), RandomInt(11, 15),
        RandomInt(8, 11), RandomInt(19, 28), 220, 240, RandomInt(45, 65), RandomInt(40, 65),
        'red', grid, RandomInt(150, 180));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function ThirdWave() {
    var RacesCave3 = ["Dhampir", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(30, 45), RandomInt(30, 45), RandomInt(27, 43), RandomInt(23, 27),
        RandomInt(20, 23), RandomInt(55, 75), 420, 450, RandomInt(75, 95), RandomInt(65, 85),
        'red', grid, RandomInt(160, 190));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function FourthWave() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Guard", RandomString(RacesCave4), RandomInt(10, 15), RandomInt(50, 65), RandomInt(55, 70), RandomInt(55, 70),
        RandomInt(35, 55), RandomInt(95, 135), 500, 600, RandomInt(110, 140), RandomInt(90, 140),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SuccubusBoss() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Mistress", RandomString(RacesCave4), RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(4500, 7000);
        OP.Masc = 0;
        OP.Name = "Mistress";
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(4500, 7000);
        OP.Name = "Master";
    }
    return OP;
}

function SuccubusBossUnique() {
    var OP = new enemy("Dungeon Mistress", "Succubus", RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 3000, "female");
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}
var Dungeon = false;
var Wave = 0;
DocId("EnterDungeon").addEventListener("click", function () {
    enemies = [];
    if (false) {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBossUnique()];
    } else {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBoss()];
    }

    EnemyIndex = Wave;
    BattleSetup(enemies[Wave]);

    DocId("FirstDungeon").style.display = 'none';
    DocId("FirstDungeonText").innerHTML = "Wave " + (Wave + 2);
    EssenceCheck(enemies[Wave]);
    Dungeon = true;
});

function DungeonStopButton() {
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'none';
    DocId("EmptyButtons").style.display = 'block';
    DocId("EventLog").style.display = 'block';

    player.Orgasm = 0;
    DocId("AfterBattle").style.display = 'none';
    DocId("FirstDungeon").style.display = 'block';
    Wave++;
    if (Wave == 4 && !Flags.BeatSuccubus && false) {
        Flags.BeatSuccubus = true;
        DocId("FirstDungeonText").innerHTML = "Having beaten her you found a teleport shard to a new world,"
        if (House.Portal) {
            DocId("FirstDungeonText").innerHTML += " you can use it at your portal at home!"
        } else {
            DocId("FirstDungeonText").innerHTML += " you should build a portal at your mansion so you can use it."
        }
    }
    if (Wave == 5) {
        Wave = 0;
        DocId("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
};

function DungeonCapture() {
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'none';
    DocId("EmptyButtons").style.display = 'block';
    DocId("EventLog").style.display = 'block';

    House.Dormmates.push(enemies[EnemyIndex]);
    player.Orgasm = 0;
    DocId("AfterBattle").style.display = 'none';
    DocId("FirstDungeon").style.display = 'block';
    Wave++;
    LastPressed = " ";
    if (Wave == 4) {
        Wave = 0;
        DocId("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
};
DocId("DungeonLose").addEventListener("click", function () {
    battle = false;
    DocId("Lose").style.display = 'none';
    DocId("map").style.display = 'block';
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'block';
    DocId("LoseStruggle").style.display = 'inline-block';
    DocId("LoseSubmit").style.display = 'inline-block';
    DocId("LosePlayerOrgasm").innerHTML = " ";
    DocId("EventLog").style.display = 'block';
    enemies = [];
    Dungeon = false;
    Wave = 0;
});
DocId("LeaveFirstDungeon").addEventListener("click", function () {
    enemies = [];
    battle = false;
    player.Orgasm = 0;
    DocId("AfterBattle").style.display = 'none';
    DocId("map").style.display = 'block';
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'block';
    DocId("EventLog").style.display = 'block';
    LastPressed = " ";
    Dungeon = false;
    Wave = 0;
    return;
});

// change these to document.get... adventlistners
function MakeHerEqual() {
    // Some friendly sex
    Partners.Succubus.Equal = true;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Like += 100;
}

function MakeHerSubmit() {
    // Some rougher sex
    Partners.Succubus.Equal = false;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Submit += 100; // Points so it's possible to change route, but 100 is a lot so this choice matters
}

function UseAndIgonore() {
    // Sex where you skip taking her as partner
}