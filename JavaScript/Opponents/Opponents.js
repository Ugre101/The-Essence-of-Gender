class enemy {
    constructor(
        EnemyName, EnemyRace, Strength, Endurance, Willpower, Charm,
        Intelligence, SexSkill, EnemyHealth, EnemyWillHealth, ExpDrop, GoldDrop,
        Color, Size, Height, EnemySecondRace = EnemyRace) {
        this.Name = EnemyName;
        this.Race = EnemyRace;
        this.Str = Strength;
        this.End = Endurance;
        this.Will = Willpower;
        this.Charm = Charm;
        this.Int = Intelligence;
        this.SexSkill = SexSkill;
        this.Health = EnemyHealth;
        this.WillHealth = EnemyWillHealth;
        this.Exp = ExpDrop;
        this.Gold = GoldDrop;
        this.Color = Color;
        this.Size = Size;
        this.Height = Height;
        this.SecondRace = EnemySecondRace;
        // Under is non input values
        this.FullHealth = EnemyHealth;
        this.FullWillHealth = EnemyWillHealth;
        this.Arousal = 0;
        this.Orgasm = 0;
        this.Dicks = [];
        this.Balls = [];
        this.Boobies = [Boob = {
            Size: 0,
            Type: this.Race,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 0
        }];
        this.Anal = [];
        this.Pussies = [];
        this.Cumin = {
            Stomach: 0,
            Pussy: 0,
            Anal: 0
        };
    };
    // Testing class prototypes... Think I prefer this method over functions maninly becasue use of "this"
    FatMuscle(minfatprocent, minweight) {
        const fatratio = RandomInt(minfatprocent, minfatprocent + 10),
            muscleration = 100 - fatratio;
        this.Fat = minweight / 200 * fatratio;
        this.Muscle = minweight / 200 * muscleration;
        this.Weight = minweight + this.Fat + this.Muscle;
    };

    GenderLock(amount, Genderlock) { // gives exact gender
        const Dick = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                Virgin: true
            };
        };
        const Ball = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                CumMax: 1 / 3 * Math.PI * Math.pow(Math.ceil(Math.sqrt(v)), 3),
                Cum: 1 / 6 * Math.PI * Math.pow(Math.ceil(Math.sqrt(v)), 3),
                CumRate: 0,
                CumBaseRate: 0.5
            };
        };
        const Boob = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                Milk: 0,
                MilkBaseRate: 0,
                MilkRate: 0,
                MilkMax: 1 / 3 * Math.PI * Math.pow(Math.ceil(Math.sqrt(v)), 3)
            };
        };
        const Pussy = (v) => {
            return {
                Size: Math.ceil(Math.sqrt(v)),
                Type: this.Race,
                Virgin: true
            }
        }
        if (Genderlock == "male") {
            this.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Femi = 0;
        } else if (Genderlock == "cuntboy") {
            this.Femi = RandomInt(0, 25);
            this.Masc = RandomInt(0, 25);
            this.Pussies.push(Pussy(Math.round(Math.max(amount / 3, Math.random() * amount))));
        } else if (Genderlock == "herm") {
            this.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            this.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        } else if (Genderlock == "dickgirl") {
            this.Femi = RandomInt(0, 25);
            this.Masc = RandomInt(0, 25);
            this.Dicks.push(Dick(Math.round(Math.max(amount / 3, Math.random() * amount))));
            if (this.Boobies.length > 0) {
                this.Boobies.pop()
            };
            this.Boobies.push(Boob(Math.round(Math.max(amount / 3, Math.random() * amount))));
        } else if (Genderlock == "female") {
            this.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Masc = 0;
        }
    }

    EssenceGiver(amount, GenderPref = 0) { // Gives random gender
        const a = RandomInt(1, 14) + GenderPref;
        /** Negative Genderpref gives more males and postive more girls. 
               e.g. -5 makes it's so only males to herm can spawn */
        if (a < 4) { // Boy
            this.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Femi = 0;
        } else if (a < 6) { // Dickgirl
            this.GenderLock(amount, "dickgirl");
        } else if (a < 9) { // Herm
            this.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            this.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        } else if (a < 11) { // Cuntboy
            this.GenderLock(amount, "cuntboy");
        } else { // Girl
            this.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            this.Masc = 0;
        };
    };
}

// Feral concept list
//var FeralEnemy = ["Squirrel", "Rabbit", "Cat", "Wolf", "Boar", "Deer", "Horse", "Lion", "Bear", "Rhino", "Elephant", "Dragon"];
function NameGiver(who) {
    const FemaleFirstNames = ["Jaiden", "Judy", "Nia", "Kelis", "Chelsea", "Amani", "Veronica", "Kyra", "Lauryn", "Alicja", "Tate", "Colleen", "Melody", "Pippa", "Keziah", "Melissa", "Lana", "Marie", "Molly", "Sandra", "Dannielle", "Yusra", "Laiba", "Gabrielle", "Syeda", "Amirah",
            "Lindsay", "Karly", "Itzel", "Clarissa", "Ansley", "Leanna", "Briley", "Cara", "Katelynn", "Susan", "Alexis", "Kaia", "Marlee", "Emmy", "Genevieve", "Melany", "Jaylynn", "Amari", "Sharon", "Miah", "Karen", "Kylie"
        ],
        MaleFirstNames = ["Jerome", "Napoleon", "Duncan", "Brant", "Chance", "Dewitt", "Brendan", "Asim", "Faith", "Macy", "Landon", "Sulaiman", "Iestyn", "Gordon", "Hector", "Haris", "Lee", "Simran", "Ronnie", "Rishi", "Bartosz", "Shelley", "Virgil", "Howard", "Rio", "Prince",
            "Glenn", "Daniel", "Felipe", "Willie", "Aden", "Brennen", "Cale", "Arnav", "Quentin", "River", "Clarence", "Jamal", "Luca", "Brent", "Tyrone", "Ryan", "Damien", "Carmelo", "Reese", "Braiden", "Beckham"
        ],
        LastNames = ["Paine", "Ward", "Bostock", "Devine", "Heath", "Bone", "Dupont", "Patterson", "Garza", "Stein", "Madden", "Francis", "Villanueva", "Perry", "Lyssa", "Beach", "Crouch", "Sharp", "Clifford", "Wade", "Vargas", "Hatfield", "Mata", "Lozano", "Everett",
            "Krueger", "Jimenez", "Fitzpatrick", "Nelson", "Scott", "Vaughn", "Lee", "Hodge", "Blackburn", "Wall", "Hernandez", "Valdez", "Summers", "Mercado", "Villarreal", "Mitchell", "Duran", "David", "Black", "Hopkins", "Hughes", "Rangel"
        ];
    //LastNames.RemoveDup();
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "dickgirl":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
        case "doll":
            who.FirstName = RandomInt(0, 10) < 5 ? RandomString(FemaleFirstNames) : RandomString(MaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}

function EvilNameGiver(who) {
    const EvilMaleFirstNames = [
            "Neclord", "Virion", "Dario", "Grumio", "Auron", "Jaymes", "Fark", "Cidolfus", "Bartholomew", "Arthur"
        ],
        EvilFemaleFirstNames = [
            "Autumn", "Imeena", "Margorie", "Draven", "Lauden", "Ethel", "Cat", "Raven", "Senka", "Jinx"
        ],
        EvilLastNames = [
            "Crimson", "Kane", "Duke", "Interfector", "Geulimja", "Ebonywood", "Grove", "Helion", "Church", "Geulimja", "Moonfall", "Winter", "Hart", "Calarook", "Crypt", "Wolf", "Rex", "Fadington", "Maganti", "Hook"
        ];
    //EvilMaleFirstNames.RemoveDup();
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(EvilMaleFirstNames);
            break;
        case "hermaphrodite":
        case "dickgirl":
        case "female":
            who.FirstName = RandomString(EvilFemaleFirstNames);
            break;
        case "doll":
            who.FirstName = RandomInt(0, 10) < 5 ? RandomString(EvilFemaleFirstNames) : RandomString(EvilMaleFirstNames);
            break;
    }
    who.LastName = RandomString(EvilLastNames);
}

function RandomPos(who) {
    who.XPos = RandomInt(2, 18) * grid;
    who.YPos = RandomInt(2, 18) * grid;
}

function StandardEnemy(who) {
    RandomPos(who);
    RaceBonus(who);
    EssenceCheck(who);
    if (who.Pussies.length > 0) {
        if (RandomInt(1, 5) < 5) {
            who.Pussies[0].Virgin = false;
        }
    }
    if (who.Dicks.length > 0) {
        if (RandomInt(1, 5) < 5) {
            who.Dicks[0].Virgin = false;
        }
    }
}

// Encounter function
function EncounterStart() {
    const Races = ["Human", "Halfling"],
        Names = ["Commoner", "Farmer", "Thug"]
    let OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    OP.EssenceGiver(70);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function RespawnBlocker() {
    var Races = ["Human", "Halfling"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    OP.EssenceGiver(50);
    OP.FatMuscle(1, 1);
    StandardEnemy(OP);
    NameGiver(OP);
    OP.XPos = 99 * grid;
    OP.YPos = 99 * grid;
    return OP;
}

function animalSpawn(maxSize) { // Here's the mess of concept code
    var randomAnimalScore = RandomInt(0, Math.floor(Math.min(Math.pow(maxSize / 10, 0.5), FeralEnemy.length))); // Spawns animals based on height - wolves and lower at start of the game
    console.log("RandScore: " + randomAnimalScore);
    var essence = 10 * Math.max(1, Math.pow(randomAnimalScore, 2)); //The larger the creature, the greater its essence
    console.log("Essence: " + essence);
    var M = 0;
    var F = 0; //Only males or females, no intersex
    console.log("M: " + M + " F: " + F);
    if (Math.random() > 0.5)
        M = essence;
    else F = essence;
    var OP = new enemy("Feral", // Always named feral for description
        FeralEnemy[randomAnimalScore], // Race is their species 
        M, F, //Essence!
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Strength based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Endurance based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Unused willpower based on size
        0, 0, 0, 0, 0, // No charm, Intelligence, SexSkill, Arousal, or Orgasm
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore),
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore), // HP and Will based on size
        RandomInt(2, 18) * grid, RandomInt(2, 18) * grid, // Same positioning
        RandomInt(Math.floor(randomAnimalScore / 2), Math.floor(randomAnimalScore * 1.5)), RandomInt(randomAnimalScore + 1, (randomAnimalScore + 1) * 10), // XP and gold based on size 
        'Chocolate', // Why not
        grid * (Math.floor(randomAnimalScore / 4) + 0.4), // Thought this determined dimensions, was supposed to be steps based on size
        Math.max(0.5, Math.pow(3, randomAnimalScore / 2)), // Why does weight affect size appearance?
        Math.pow(5, randomAnimalScore), // Massive sizes!
        Math.pow(2, randomAnimalScore), // Muscle?
        Math.pow(2, randomAnimalScore)); // Fat?
    EssenceCheck(OP); // They still have genitals
    OP.LastName = ""; // No named animals
    return OP;
}

function EncounterPath1() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6),
        RandomInt(3, 6), RandomInt(7, 10), 80, 80, RandomInt(20, 25), RandomInt(8, 18),
        'Chocolate', grid, RandomInt(140, 180));
    OP.EssenceGiver(80);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPath2() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7),
        RandomInt(4, 7), RandomInt(8, 12), 100, 100, RandomInt(23, 30), RandomInt(12, 25),
        'green', grid, RandomInt(140, 180));
    OP.EssenceGiver(100);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBandit() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Bandit", RandomString(RacesBandit), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15),
        RandomInt(8, 15), RandomInt(10, 15), 170, 170, RandomInt(30, 45), RandomInt(30, 55),
        'tomato ', grid, RandomInt(140, 180));
    OP.GenderLock(600, "male");
    OP.FatMuscle(7, 70);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBanditLord() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Banditlord", RandomString(RacesBandit), RandomInt(20, 35), RandomInt(10, 15), RandomInt(20, 35), RandomInt(20, 35),
        RandomInt(20, 35), RandomInt(40, 60), 350, 300, RandomInt(55, 85), RandomInt(75, 150),
        'tomato', grid * 1.5, RandomInt(160, 200));
    OP.GenderLock(1200, "male");
    OP.FatMuscle(7, 80);
    StandardEnemy(OP);
    var startarea = document.getElementById("hem");
    OP.XPos = startarea.width / 2 - grid;
    OP.YPos = grid;
    NameGiver(OP);
    return OP;
}

function EncounterForest() {
    var RacesForest = ["Elf", "Amazon"];
    var OP = new enemy("Forest", RandomString(RacesForest), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    OP.EssenceGiver(400, 5);
    OP.FatMuscle(11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest2() {
    var RacesForest2 = ["Elf", "Fairy"];
    var OP = new enemy("Forest", RandomString(RacesForest2), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    OP.EssenceGiver(500, 5);
    OP.FatMuscle(11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPathToWitch2() {
    var RacesWitch = ["Human", "Elf", "Dark elf"];
    var OP = new enemy("Witch", RandomString(RacesWitch), RandomInt(1, 5), RandomInt(3, 7), RandomInt(7, 16), RandomInt(10, 40),
        RandomInt(30, 70), RandomInt(20, 80), 150, 300, RandomInt(30, 60), RandomInt(30, 70),
        'IndianRed', grid, RandomInt(140, 170));
    OP.EssenceGiver(450);
    OP.FatMuscle(10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    switch (CheckGender(OP)) {
        case "male":
        case "cuntboy":
        case "doll":
            OP.Name = "Wizard"
            break;
        default:
            OP.Name = "Witch"
            break;
    }
    return OP;
}