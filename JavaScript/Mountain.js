var MountainHalfRaces = ["human", "elf"]//
var MountainRaces = ["dragon", "giant", "human", "harpy",""]

// Mountain opponents
// "Pure" Maiden
function EncounterMaiden() {
    var OP = new enemy("Pure", "temp", 0, RandomInt(1000, 10000), RandomInt(1, 10), RandomIn(1, 10), RandomInt(20, 50),
    RandomInt(0, 5), RandomInt(5, 20), RandomInt(0, 5), 0 , 0, 2500, 2500, 5000, 5000, RandomInt(2, 18) * grid, 
    RandomInt(2, 18) * grid, RandomInt(50, 250), RandomInt(30, 100), "Pink", grid, RandomInt(40, 60), RandomInt(150, 170), 
    RandomInt(10, 20), RandomInt(10, 15));
    /* Strong virgins, they are not virgin by choice it's their culture to not offer themself to anyone weaker
    which have made them very strong over generation but there is a lot of desire to be dominated.
    After beating them change their title to depraved or something.*/ 
    
}

function EncounterDragonKind() {
    var OP = new enemy("Lesser", "dragon", RandomInt(1000, 5000), RandomInt(1000, 5000), RandomInt(10,50), RandomInt(10, 50),
    RandomInt(10, 30), RandomInt(30, 50), RandomInt(10, 50), RandomInt(10, 60), 0, 0, 5000, 5000, 5000, 5000,
    RandomInt(2, 18) * grid, RandomInt(2,18)* grid, RandomInt(50, 500), RandomInt(50, 500), "Red", 
    grid, RandomInt(60,120), RandomInt(160,240), RandomInt(10, 40), RandomInt(5,20), RandomString(MountainHalfRaces)); 
}
