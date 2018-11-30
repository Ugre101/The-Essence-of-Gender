// Temporary global values
var RaceAbsorb = [
    {Race: "Human", amount: 100},
    {Race: "Halfling", amount: 0},
    {Race: "Orc", amount: 0},
    {Race: "Troll", amount: 0},
    {Race: "Fairy", amount: 0},
    {Race: "Elf", amount: 0},
    {Race: "Dark elf", amount: 0},
    {Race: "Amazon", amount: 0},
    {Race: "Imp", amount: 0},
    {Race: "Demon", amount: 0},
    {Race: "Dhampir", amount: 0},
    {Race: "Succubus", amount: 0},
    {Race: "Incubus", amount: 0},
    {Race: "Equine", amount: 0}
]
// Function for initializing stats, placeholder
/*function SnowCheck() {
    if (!player.hasOwnAttribute("Essence_R")) {
        if (FeralEnemy != 'undefined') {
            for (var i = 0; i < FeralEnemy.length; i++) {
                player.Essence_R.FeralEnemy[i] = 0;
            }
        }
        player.Essence_R.human = 0;
        player.Essence_R.Halfling = 0;
        player.Essence_R.Orc = 0;
        player.Essence_R.Fairy = 0;
        player.Essence_R.Elf = 0;
        player.Essence_R.DarkElf = 0;
        player.Essence_R.Amazon = 0;
        player.Essence_R.Imp = 0;
        player.Essence_R.Demon = 0;
        player.Essence_R.Dhampir = 0;
        player.Essence_R.Succubus = 0;
        player.Essence_R.Incubus = 0;
    }
    player.Essence_R[player.Race] = 50;
    player.Essence_R[player.SecondRace] += 50;
}*/

// Function for checking values - AKA when transformation kicks in.
function CheckSplit() {
    split();
}    

function split(q){
    var totalAbsorb = 0;
    for (var i = 0; i < RaceAbsorb.length; i++) {
        totalAbsorb += RaceAbsorb[i].amount; 
    }
    if (totalAbsorb >= 200) { // When total essence is over 200%
        RaceAbsorb.sort(function(a,b){return b.amount - a.amount}); // Finding the new majority essence
        for (var i = RaceAbsorb.length - 1; i > 0; i--) { // Clearing out anything below 1%
            if (RaceAbsorb[i].amount < 1) {
                RaceAbsorb[i-1].amount += RaceAbsorb[i].amount;
                RaceAbsorb[i].amount = 0;
            } else {
                RaceAbsorb[i].amount = Math.round(RaceAbsorb[i].amount / 2);
            }
        }
        if(typeof q != "undefined")
            split(1);
        else 
            split(q+1);
    } else if (q == 1) {
        EssenceBalance();
    }
}

function EssenceBalance() { // Concept for calculating what species you're treated as
    var totalAbsorb = 0;
    for (var i = 0; i < RaceAbsorb.length; i++) {
        totalAbsorb += RaceAbsorb[i].amount; 
    }
    var R1 = Math.round(100 * RaceAbsorb[0].amount / totalAbsorb);
    var R2 = Math.round(100 * RaceAbsorb[1].amount / totalAbsorb);
    var R3 = Math.round(100 * RaceAbsorb[2].amount / totalAbsorb);
    if (R1 > 99) {
        console.log("You're fully "+RaceAbsorb[0].Race+"!");
    } else if (R1 + R2 + R3 < 50) {
        console.log("You're an unnatural mix of an assortment of creatures!");
    } else if (R1 > 90) {
        console.log("You're indistinguishable from any other "+RaceAbsorb[0].Race);
    } else if (R1 > 80) {
        if (R2 > 10) {
            console.log("You're mostly "+RaceAbsorb[0].Race+", but you've got some " + RaceAbsorb[1].Race + " traits.");
        } else {
            console.log("You're mostly "+RaceAbsorb[0].Race+", but you've got other traits mixed in.");
        }
    } else if (R1 > 70) {
        if (R2 > 20) {
            console.log("You're mostly "+RaceAbsorb[0].Race+", but could be confused for a half-" + RaceAbsorb[1].Race + ".");
        } else if (R2 + R3 > 20) {
            console.log("You're mostly "+RaceAbsorb[0].Race+", but you've added a few other traits, notably "+RaceAbsorb[1].Race+" and "+RaceAbsorb[2].Race+".");
        } else {
            console.log("You're mostly "+RaceAbsorb[0].Race+", but you've added a few other traits.");
        }
    } else if (R1 < R2 + 10) {
        console.log("You're half-"+RaceAbsorb[0].Race+", half "+RaceAbsorb[1].Race+".");
    } else if (R1 < R2 + R3) {
        console.log("You're a curious hybrid, a mix between "+RaceAbsorb[0].Race+", "+RaceAbsorb[1].Race+", and "+RaceAbsorb[2].Race+".");
    } else {
        console.log("You're unmistakably "+RaceAbsorb[0].Race+", but you're deep in an uncanny valley.");
    }
    pRaceBonus();
}

function PotionDrunk(race) {
    if(race === "centaur")
        player.isTaur = true;
    else {
        player.isTaur = false;
        for(var i = 0; i < RaceAbsorb.length; i++) {
            if(RaceAbsorb[i].Race === race) {
                RaceAbsorb[i].amount += 50;
                RaceAbsorb.sort(function(a,b){return a.amount - b.amount});
                break;
            }
        }
    }
}

function pRaceBonus() {
    for (var i = 0; i < player.raceBonus.length; i++)
        player.raceBonus[i].amount = 0;
    if (RaceAbsorb[0].amount > 90) {
        if (RaceAbsorb[0].Race === "Imp" || RaceAbsorb[0].Race === "Incubus") {
            player.ForcedMale = true;
            player.ForcedFemale = false;
            player.Masc += player.Femi;
            player.Femi = 0;
            return;
        } else if (RaceAbsorb[0].Race === "Succubus") {
            player.ForcedFemale = true;
            player.ForcedMale = false;
            player.Femi += player.Masc;
            player.Masc = 0;
            return;
        }
    } else {
        player.ForcedFemale = false;
        player.ForcedMale = false;
    }
    for (var i = 0; i < RaceAbsorb.length; i++) {
        if(RaceAbsorb[i].amount < 10)
            break;
        else {
            switch (RaceAbsorb[i].Race) {
                case "Human":
                    console.log("You get NOTHING!");
                    break;
                case "Halfling":
                    player.raceBonus[0].amount -= 0.5 * RaceAbsorb[i].amount;
                    player.raceBonus[1].amount -= 0.5 * RaceAbsorb[i].amount;
                    player.raceBonus[2].amount -= 0.2 * RaceAbsorb[i].amount;
                    break;
                case "Orc":
                    player.raceBonus[3].amount += RaceAbsorb[i].amount;
                    break;
                case "Fairy":
                    player.raceBonus[0].amount -= 8 * RaceAbsorb[i].amount / 9;
                    player.raceBonus[1].amount -= 8 * RaceAbsorb[i].amount / 9;
                    player.raceBonus[2].amount -= 6 * RaceAbsorb[i].amount / 10;
                    break;
                case "Elf":
                    player.raceBonus[4].amount += 1 * RaceAbsorb[i].amount;
                    player.raceBonus[5].amount += 1 * RaceAbsorb[i].amount;
                    break;
                case "Dark elf":
                    player.raceBonus[5].amount += 1 * RaceAbsorb[i].amount;
                    player.raceBonus[6].amount += 1 * RaceAbsorb[i].amount;
                    break;
                case "Amazon":
                    player.raceBonus[3].amount += 1 * RaceAbsorb[i].amount;
                    player.raceBonus[6].amount += 2;
                    break;
                case "Demon":
                    player.raceBonus[8].amount += 20 * RaceAbsorb[i].amount;
                    break;
                case "Dhampir":
                    player.raceBonus[7].amount += 1 * RaceAbsorb[i].amount;
                    player.raceBonus[8].amount += 20 * RaceAbsorb[i].amount;
                    break;
                default: 
                    console.log("Error: Race not found. "+RaceAbsorb[i].Race);
                    break;
            }
        }
    }
    player.raceBonus[0].amount++;
    player.raceBonus[1].amount++;
    player.raceBonus[2].amount++;
}