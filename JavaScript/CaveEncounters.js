function EncounterCave1() {
    var RacesCave = ["Goblin", "Imp"];
    var OP = new enemy("Lesser", RandomString(RacesCave), RandomInt(7, 10), RandomInt(7, 10), RandomInt(7, 10), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(6, 15), 120, 150, RandomInt(25, 35), RandomInt(15, 30),
        'red', grid, RandomInt(120, 140));
    EssenceGiver(OP, 250);
    FatMuscle(OP, 8, 40);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave2() {
    var RacesCave2 = ["Goblin", "Demon"];
    var OP = new enemy("Cave", RandomString(RacesCave2), RandomInt(12, 18), RandomInt(12, 18), RandomInt(12, 18), RandomInt(8, 12),
        RandomInt(5, 8), RandomInt(16, 25), 190, 210, RandomInt(40, 60), RandomInt(35, 60),
        'red', grid, RandomInt(150, 180));
    EssenceGiver(OP, 500);
    FatMuscle(OP, 8, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave3() {
    var RacesCave3 = ["Dhampir", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(25, 40), RandomInt(25, 40), RandomInt(22, 38), RandomInt(18, 22),
        RandomInt(15, 18), RandomInt(50, 70), 370, 400, RandomInt(65, 85), RandomInt(55, 80),
        'red', grid, RandomInt(160, 190));
    EssenceGiver(OP, 750);
    FatMuscle(OP, 8, 70);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave4() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Lesser", RandomString(RacesCave4), RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 420, 550, RandomInt(85, 110), RandomInt(70, 120),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 2000);
    FatMuscle(OP, 10, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}