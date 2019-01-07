//var MountainHalfRaces = ["human", "elf"]
//var MountainRaces = ["dragon", "giant", "human", "harpy", ""]

// Mountain opponents
function DragonNameGiver(who) {
    var FemaleFirstNames = ["Adhonth","Rindyth","Hendro","Frarlei","Fukyss","Fover","Chaghess","Indarrass","Aeghentanth","Dodhisser","Nisses","Rephes","Eny","Qierleo","Qirass","Zevno","Persoan","Frairmossolth","Bayzassath","Pullontinth"];
    var MaleFirstNames = ["Kalzreot", "Pendryss", "Xierdiss", "Frayvrag", "Cyddrunth", "Zergyr", "Cennir", "Akosdiat", "Jygoda", "Qothasdyr", "Bryrgusdirth", "Frorvedeg", "Kytidum", "Jialdrum", "Pegis", "Ymrirth", "Dayddrog", "Byrvog", "Brenneg", "Kairranth"];
    var LastNames = [""];
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "dickgirl":
        case "doll":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}


function EncounterMaiden() {
    var MountainHalfRaces = ["human", "elf"] //
    var OP = new enemy("Maiden", RandomString(MountainHalfRaces), RandomInt(1, 10), RandomInt(1, 10), RandomInt(20, 50), RandomInt(0, 5),
        RandomInt(5, 20), RandomInt(0, 5), 1500, 2000, RandomInt(50, 250), RandomInt(30, 100),
        "Pink", grid, RandomInt(150, 170));
    EssenceGiver(OP, 1500, "female");
    FatMuscle(OP, 15, 55);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
    /* Strong virgins, they are not virgin by choice it's their culture to not offer themself to anyone weaker
    which have made them very strong over generation but there is a lot of desire to be dominated.
    After beating them change their title to depraved or something.
    update: I think I prefer to say they are pure after thay have had say, feels odd to say they are 
    not pure by having sex when their religion is based on sex & breeding.
    */

}

function EncounterDragonKind() {
    var MountainHalfRaces = ["human", "elf"] //
    var OP = new enemy("Young", "Dragonkind", RandomInt(10, 50), RandomInt(10, 50), RandomInt(10, 30), RandomInt(30, 50),
        RandomInt(10, 50), RandomInt(10, 60), 5000, 5000, RandomInt(50, 500), RandomInt(50, 500),
        "Red", grid, RandomInt(160, 240), RandomString(MountainHalfRaces));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 12, 70);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterHarpy() {
    var OP = new enemy("Young", "Harpy", RandomInt(10, 30), RandomInt(30, 70), RandomInt(0, 20), RandomInt(10, 60),
        RandomInt(0, 10), RandomInt(20, 80), 6000, 4500, RandomInt(50, 500), RandomInt(50, 500),
        "Yellow", grid, RandomInt(70, 140));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 8, 45);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterAnthroDragon() {
    var OP = new enemy("Young", "Anthro dragon", RandomInt(30, 50), RandomInt(20, 50), RandomInt(25, 50), RandomInt(10, 30),
        RandomInt(20, 60), RandomInt(20, 70), 8000, 8000, RandomInt(100, 400), RandomInt(100, 300),
        "Red", grid, RandomInt(160, 220));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 12, 80);
    StandardEnemy(OP);
    DragonNameGiver(OP);
    return OP;
}

function EncounterAnthroDragon2() {
    var OP = new enemy("", "Anthro dragon", RandomInt(40, 60), RandomInt(30, 60), RandomInt(35, 60), RandomInt(15, 35),
        RandomInt(25, 65), RandomInt(25, 75), 8500, 8500, RandomInt(150, 470), RandomInt(140, 380),
        "Red", grid, RandomInt(170, 230));
    EssenceGiver(OP, 2300);
    FatMuscle(OP, 12, 80);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterShapeDragon() {
    var OP = new enemy("", "Dragon", RandomInt(60, 100), RandomInt(40, 80), RandomInt(40, 70), RandomInt(30, 50), RandomInt(20, 80),
        RandomInt(20, 70), 12000, 12000, RandomInt(200, 500), RandomInt(160, 450),
        "Red", grid * 1.1, RandomInt(300, 600));
    // Feral dragon when fighting Shapeshift to anthro when having sex.
    EssenceGiver(OP, 3500);
    FatMuscle(OP, 10, 220);
    StandardEnemy(OP);
    NameGiver(OP);
}