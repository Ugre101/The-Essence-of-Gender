function FirstWave() {
    const RacesCave = ["Goblin", "Imp"];
    const OP = new enemy("Guard", RandomString(RacesCave), RandomInt(10, 13), RandomInt(10, 13), RandomInt(10, 13), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(9, 18), 150, 180, RandomInt(30, 40), RandomInt(20, 35),
        'red', grid, RandomInt(120, 140));
    OP.EssenceGiver(250);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SecondWave() {
    const RacesCave2 = ["Goblin", "Demon"];
    const OP = new enemy("Guard", RandomString(RacesCave2), RandomInt(15, 21), RandomInt(15, 21), RandomInt(15, 21), RandomInt(11, 15),
        RandomInt(8, 11), RandomInt(19, 28), 220, 240, RandomInt(45, 65), RandomInt(40, 65),
        'red', grid, RandomInt(150, 180));
    OP.EssenceGiver(270);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function ThirdWave() {
    const RacesCave3 = ["Dhampir", "Demon"];
    const OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(30, 45), RandomInt(30, 45), RandomInt(27, 43), RandomInt(23, 27),
        RandomInt(20, 23), RandomInt(55, 75), 420, 450, RandomInt(75, 95), RandomInt(65, 85),
        'red', grid, RandomInt(160, 190));
    OP.EssenceGiver(300);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function FourthWave() {
    const RacesCave4 = ["Succubus", "Incubus"];
    const OP = new enemy("Guard", RandomString(RacesCave4), RandomInt(10, 15), RandomInt(50, 65), RandomInt(55, 70), RandomInt(55, 70),
        RandomInt(35, 55), RandomInt(95, 135), 500, 600, RandomInt(110, 140), RandomInt(90, 140),
        'purple', grid, RandomInt(150, 180));
    OP.EssenceGiver(2000);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SuccubusBoss() {
    const RacesCave4 = ["Succubus", "Incubus"];
    const OP = new enemy("Mistress", RandomString(RacesCave4), RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    StandardEnemy(OP);
    if (OP.Race == "Succubus") {
        OP.FatMuscle(11, 50);
        OP.Femi = RandomInt(4500, 7000);
        OP.Masc = 0;
        OP.Name = "Mistress";
    } else {
        OP.FatMuscle(7, 70);
        OP.Femi = 0;
        OP.Masc = RandomInt(4500, 7000);
        OP.Name = "Master";
    }
    EvilNameGiver(OP);
    return OP;
}

function SuccubusBossUnique() {
    const OP = new enemy("Dungeon Mistress", "Succubus", RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    OP.GenderLock(13000, "female");
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}
var Dungeon = false,
    Wave = 0;

function SuccubusDungeonFunc() {
    const dungeon = document.getElementById("DungeonSystem")
    while (dungeon.hasChildNodes()) {
        dungeon.removeChild(dungeon.lastChild);
    };

    const div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        div.appendChild(TitleText("Cave dungeon"));
    }

    const p = TextBox();
    div.appendChild(p);
    if (Wave === 5) {
        Wave = 0;
        p.innerHTML = "You beat the dungeon more to come!"
    } else {
        p.innerHTML = `Wave ${Wave + 1}`;
    }

    const input1 = ButtonButton("Go deeper")
    input1.addEventListener("click", function () {
        enemies = [];
        Dungeon = true;
        if (false) {
            enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBossUnique()];
        } else {
            enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBoss()];
        }
        EnemyIndex = Wave;
        EssenceCheck(enemies[Wave]);
        BattleSetup(enemies[Wave]);
        dungeon.style.display = 'none';
    });
    div.appendChild(input1);
    div.appendChild(LeaveDungeon());

    dungeon.appendChild(div);
    dungeon.style.display = 'block';
}

function DungeonStopButton() {
    DocId("AfterBattle").style.display = 'none';
    Wave++;
    EnemyIndex = Wave;
    if (Wave == 4 && !Flags.BeatSuccubus && false) {
        Flags.BeatSuccubus = true;
        DocId("FirstDungeonText").innerHTML = "Having beaten her you found a teleport shard to a new world,"
        if (House.Portal) {
            DocId("FirstDungeonText").innerHTML += " you can use it at your portal at home!"
        } else {
            DocId("FirstDungeonText").innerHTML += " you should build a portal at your mansion so you can use it."
        }
    }
    SuccubusDungeonFunc();
    return;
};

function DungeonCapture() {
    DocId("status").style.display = 'block';
    DocId("buttons").style.display = 'none';
    DocId("EmptyButtons").style.display = 'block';
    DocId("EventLog").style.display = 'block';
    DocId("AfterBattle").style.display = 'none';

    House.Dormmates.push(enemies[Wave]);
    Wave++;
    EnemyIndex = Wave;
    SuccubusDungeonFunc();
    return;
};
DocId("DungeonLose").addEventListener("click", function () {
    DocId("Lose").style.display = 'none';
    DocId("LoseStruggle").style.display = 'inline-block';
    DocId("LoseSubmit").style.display = 'inline-block';
    DocId("LosePlayerOrgasm").innerHTML = " ";
    enemies = [RespawnBlocker()];
    Dungeon = false;
    Wave = 0;
    DisplayGame();
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