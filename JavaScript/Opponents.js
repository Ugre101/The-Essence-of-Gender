function enemy(EnemyName, EnemyRace, EnemyMasculinity, EnemyFemininity, Strength,
    Endurance, Willpower, Charm, Intelligence, SexSkill, Arousal, Orgasm, EnemyHealth, EnemyFullHealth,
    EnemyWillHealth, EnemyFullWillHealth, EnemyXPos, EnemyYPos, ExpDrop, GoldDrop, Color, Size, Weight,
    Height, Muscle, Fat) {
    this.Name = EnemyName;
    this.Race = EnemyRace;
    this.Masc = EnemyMasculinity;
    this.Femi = EnemyFemininity
    this.Str = Strength;
    this.End = Endurance;
    this.Willpower = Willpower;
    this.Charm = Charm;
    this.Int = Intelligence;
    this.SexSkill = SexSkill;
    this.Health = EnemyHealth;
    this.FullHealth = EnemyFullHealth;
    this.WillHealth = EnemyWillHealth;
    this.FullWillHealth = EnemyFullWillHealth;
    this.Arousal = Arousal;
    this.Orgasm = Orgasm;
    this.XPos = EnemyXPos;
    this.YPos = EnemyYPos;
    this.Exp = ExpDrop;
    this.Gold = GoldDrop;
    this.Color = Color;
    this.Size = Size;
    this.Weight = Weight;
    this.Height = Height;
    this.Fat = Fat;
    this.Muscle = Muscle;
}

var Races = ["Human", "Halfling"];
var RacesBandit = ["Orc", "Troll"]
var RacesRoad = ["Human"];
var RacesForest = ["Elf", "Amazon"];
var RacesForest2 = ["Elf", "Fairy"];
var Names = ["Commoner", "Farmer", "Thug"];
var RacesWitch = ["Human", "Elf", "Dark elf"];
var RacesCave = ["Goblin", "Imp"];
var RacesCave2 = ["Goblin", "Demon"];
var RacesCave3 = ["Dhampir", "Demon"];
var RacesCave4 = ["Succubus", "incubus"];

var dropRate = {
    "Human": 1.00,
    "Halfling": 1.00,
    "Orc": 1.00,
    "Troll": 1.00,
    "Farmer": 1.00,
    "Elf": 1.00,
    "Amazon": 1.00,
    "Fairy": 1.00,
    "Commoner": 1.00,
    "Thug": 1.00,
    "Dark elf": 1.00,
    "Imp": 1.00,
    "Goblin": 1.00,
    "Dhampir": 1.00,
    "Demon": 1.00
}

var FemaleFirstNames = ["Veronica", "Kyra", "Lauryn", "Alicja", "Tate", "Colleen", "Melody", "Pippa", "Keziah", "Melissa", "Lana", "Marie", "Molly", "Sandra", "Dannielle", "Yusra", "Laiba", "Gabrielle", "Syeda", "Amirah"];
var MaleFirstNames = ["Asim", "Faith", "Macy", "Landon", "Sulaiman", "Iestyn", "Gordon", "Hector", "Haris", "Lee", "Simran", "Ronnie", "Rishi", "Bartosz", "Shelley", "Virgil", "Howard", "Rio"];
var LastNames = ["Heath", "Bone", "Dupont", "Patterson", "Garza", "Stein", "Madden", "Francis", "Villanueva", "Perry", "Lyssa", "Beach", "Crouch", "Sharp", "Clifford", "Wade", "Vargas", "Hatfield", "Mata", "Lozano", "Everett"];

var EvilMaleFirstNames = ["Neclord", "Virion", "Dario", "Grumio", "Auron", "Jaymes", "Fark", "Cidolfus", "Bartholomew", "Arthur"];
var EvilFemaleFirstNames = ["Autumn", "Imeena", "Margorie", "Draven", "Lauden", "Ethel", "Cat", "Raven", "Senka", "Jinx"];
var EvilLastNames = ["Crimson", "Kane", "Duke", "Interfector", "Geulimja", "Ebonywood", "Grove", "Helion", "Church", "Geulimja", "Moonfall", "Winter", "Hart", "Calarook", "Crypt", "Wolf", "Rex", "Fadington", "Maganti", "Hook"];

function NameGiver(who) {
    switch (CheckGender(who)) {
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "doll":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}

function EvilNameGiver(who) {
    switch (CheckGender(who)) {
        case "male":
            who.FirstName = RandomString(EvilMaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "doll":
            who.FirstName = RandomString(EvilFemaleFirstNames);
            break;
    }
    who.LastName = RandomString(EvilLastNames);
}

// Encounter function
function EncounterStart() {
    var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(0, 100), RandomInt(0, 100), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 0, 0, 70, 70, 70, 70, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(15, 20), RandomInt(5, 15), 'Chocolate', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPath1() {
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(0, 120), RandomInt(0, 120), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6),
        RandomInt(3, 6), RandomInt(7, 10), 0, 0, 80, 80, 80, 80, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(20, 25), RandomInt(8, 18), 'Chocolate', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPath2() {
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(0, 130), RandomInt(0, 130), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7),
        RandomInt(4, 7), RandomInt(8, 12), 0, 0, 100, 100, 100, 100, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(23, 30), RandomInt(12, 25), 'green', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBandit() {
    var OP = new enemy("Bandit", RandomString(RacesBandit), RandomInt(50, 200), RandomInt(0, 100), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15),
        RandomInt(8, 15), RandomInt(10, 15), 0, 0, 170, 170, 170, 170, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(30, 45), RandomInt(30, 55), 'tomato ', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBanditLord() {
    var OP = new enemy("Banditlord", RandomString(RacesBandit), RandomInt(50, 500), RandomInt(0, 0), RandomInt(20, 35), RandomInt(10, 15), RandomInt(20, 35), RandomInt(20, 35),
        RandomInt(20, 35), RandomInt(40, 60), 0, 0, 350, 350, 300, 300, startarea.width / 2 - grid, grid,
        RandomInt(55, 85), RandomInt(75, 150), 'tomato', 1.5 * grid, RandomInt(70, 90), RandomInt(160, 200), RandomInt(20, 40), RandomInt(30, 50));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest() {
    var OP = new enemy("Forest", RandomString(RacesForest), RandomInt(0, 100), RandomInt(50, 300), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 0, 0, 150, 150, 150, 150, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(25, 40), RandomInt(25, 45), 'darkgreen', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest2() {
    var OP = new enemy("Forest", RandomString(RacesForest2), RandomInt(0, 100), RandomInt(50, 300), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 0, 0, 150, 150, 150, 150, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(25, 40), RandomInt(25, 45), 'darkgreen', grid, RandomInt(50, 70), RandomInt(140, 180), RandomInt(10, 30), RandomInt(20, 40));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPathToWitch2() {
    var OP = new enemy("Witch", RandomString(RacesWitch), RandomInt(0, 300), RandomInt(0, 300), RandomInt(1, 5), RandomInt(3, 7), RandomInt(7, 16), RandomInt(10, 40),
        RandomInt(30, 70), RandomInt(20, 80), 0, 0, 150, 150, 300, 300, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(30, 60), RandomInt(30, 70), 'IndianRed', grid, RandomInt(50, 60), RandomInt(140, 170), RandomInt(5, 15), RandomInt(25, 40))
    EssenceCheck(OP);

    switch (CheckGender(OP)) {
        case "male":
        case "doll":
            OP.Name = "Wizard"
            break;
        default:
            OP.Name = "Witch"
            break;
    }
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    NameGiver(OP);
    return OP;
}

function EncounterCave1() {
    var OP = new enemy("Lesser", RandomString(RacesCave), RandomInt(50, 150), RandomInt(0, 150), RandomInt(7, 10), RandomInt(7, 10), RandomInt(7, 10), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(6, 15), 0, 0, 120, 120, 150, 150, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(25, 35), RandomInt(15, 30), 'red', grid, RandomInt(40, 60), RandomInt(120, 140), RandomInt(10, 25), RandomInt(15, 35));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave2() {
    var OP = new enemy("Cave", RandomString(RacesCave2), RandomInt(50, 250), RandomInt(0, 150), RandomInt(12, 18), RandomInt(12, 18), RandomInt(12, 18), RandomInt(8, 12),
        RandomInt(5, 8), RandomInt(16, 25), 0, 0, 190, 190, 210, 210, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(40, 60), RandomInt(35, 60), 'red', grid, RandomInt(50, 70), RandomInt(150, 180), RandomInt(15, 35), RandomInt(15, 35));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave3() {
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(200, 700), RandomInt(50, 350), RandomInt(25, 40), RandomInt(25, 40), RandomInt(22, 38), RandomInt(18, 22),
        RandomInt(15, 18), RandomInt(50, 70), 0, 0, 370, 370, 400, 400, RandomInt(2, 18) * grid, RandomInt(2, 18) * grid,
        RandomInt(65, 85), RandomInt(55, 80), 'red', grid, RandomInt(50, 80), RandomInt(160, 190), RandomInt(25, 35), RandomInt(15, 35));
    EssenceCheck(OP);
    if (OP.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            OP.Pussies[0].Virgin = false;
        }
    }
    if (OP.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            OP.Dicks[0].Virgin = false;
        }
    }
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave4() {
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
    OP.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    RaceBonus(OP);
    EvilNameGiver(OP);
    return OP;
}
