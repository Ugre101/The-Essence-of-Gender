// Function for initializing stats, placeholder
/*function SnowCheck () {
    if (!hasOwnAttribute ("Essence_R")) {
        if (FeralEnemy ! = 'undefined') {
            for (var i = 0; i < FeralEnemy.length; i++) {
                Essence_R.FeralEnemy[i] = 0;
            }
        }
        Essence_R.human = 0;
        Essence_R.Halfling = 0;
        Essence_R.Orc = 0;
        Essence_R.Fairy = 0;
        Essence_R.Elf = 0;
        Essence_R.DarkElf = 0;
        Essence_R.Amazon = 0;
        Essence_R.Imp = 0;
        Essence_R.Demon = 0;
        Essence_R.Dhampir = 0;
        Essence_R.Succubus = 0;
        Essence_R.Incubus = 0;
    }
    Essence_R[Race] = 50;
    Essence_R[SecondRace] += 50;
}*/

function EssenceBalance() { // Concept for calculating what species you're treated as
    var RaceEss = player.RaceEssence;
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence
    for (var i = 0; i < RaceEss.length; i++) { // Clearing out anything below 1
        //console.log(RaceEss[i].Race + " " + RaceEss[i].amount)
        if (RaceEss[i].amount < 1) {
            console.log("Spliced " + RaceEss[i].Race);
            RaceEss.splice(i, 1);
        }
    }
    var totalAbsorb = 0;
    for (var i = 0; i < RaceEss.length; i++) {
        totalAbsorb += RaceEss[i].amount;
    }

    if (RaceEss.length > 2) {
        var R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        var R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
        var R3 = Math.round(100 * RaceEss[2].amount / totalAbsorb);
    } else if (RaceEss.length > 1) {
        var R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        var R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
        var R3 = 0;
    } else if (RaceEss.length > 0) {
        var R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        var R2 = 0;
        var R3 = 0;
    } else {
        var R1 = 0;
        var R2 = 0;
        var R3 = 0;
    }
    //console.log(R1 + " " + R2 + " " + R3)
    if (R1 > 99) {
        player.Race = RaceEss[0].Race;
        GenitalChange(RaceEss[0].Race);
        console.log("You're fully " + RaceEss[0].Race + "!");
    } else if (R1 + R2 + R3 < 50) {
        console.log("You're an unnatural mix of an assortment of creatures!");
    } else if (R1 > 90) {
        player.Race = RaceEss[0].Race;
        GenitalChange(RaceEss[0].Race);
        console.log("You're indistinguishable from any other " + RaceEss[0].Race);
    } else if (R1 > 80) {
        if (R2 > 10) {
            console.log("You're mostly " + RaceEss[0].Race + ", but you've got some " + RaceEss[1].Race + " traits.");
        } else {
            console.log("You're mostly " + RaceEss[0].Race + ", but you've got other traits mixed in.");
        }
    } else if (R1 > 70) {
        if (R2 > 20) {
            console.log("You're mostly " + RaceEss[0].Race + ", but could be confused for a half-" + RaceEss[1].Race + ".");
        } else if (R2 + R3 > 20) {
            console.log("You're mostly " + RaceEss[0].Race + ", but you've added a few other traits, notably " + RaceEss[1].Race + " and " + RaceEss[2].Race + ".");
        } else {
            console.log("You're mostly " + RaceEss[0].Race + ", but you've added a few other traits.");
        }
    } else if (R1 < R2 + 10) {
        console.log("You're half-" + RaceEss[0].Race + ", half " + RaceEss[1].Race + ".");
    } else if (R1 < R2 + R3) {
        console.log("You're a curious hybrid, a mix between " + RaceEss[0].Race + ", " + RaceEss[1].Race + ", and " + RaceEss[2].Race + ".");
    } else {
        console.log("You're unmistakably a(n) " + RaceEss[0].Race + ", but you're deep in an uncanny valley.");
    }
    // pRaceBonus();
}

function PotionDrunk(race) {
    var RaceEss = player.RaceEssence;
    var a = RaceEss.findIndex(e => e.Race == race);
    console.log(a);
    if (a > -1) {
        RaceEss[a].amount += 50;
    } else {
        var Race = {
            Race: race,
            amount: 50
        }
        RaceEss.push(Race);
    }
    if (race === "centaur")
        isTaur = true;
    else {
        isTaur = false;
    }
}

function pRaceBonus() {
    var RaceEss = player.RaceEssence;
    for (var i = 0; i < raceBonus.length; i++)
        raceBonus[i].amount = 0;
    if (RaceEss[0].amount > 90) {
        if (RaceEss[0].Race === "Imp" || RaceEss[0].Race === "Incubus") {
            ForcedMale = true;
            ForcedFemale = false;
            Masc += Femi;
            Femi = 0;
            return;
        } else if (RaceEss[0].Race === "Succubus") {
            ForcedFemale = true;
            ForcedMale = false;
            Femi += Masc;
            Masc = 0;
            return;
        }
    } else {
        ForcedFemale = false;
        ForcedMale = false;
    }
    for (var i = 0; i < RaceEss.length; i++) {
        if (RaceEss[i].amount < 10)
            break;
        else {
            switch (RaceEss[i].Race) {
                case "Halfling":
                    raceBonus[0].amount -= 0.5 * (RaceEss[i].amount / 100);
                    raceBonus[1].amount -= 0.5 * (RaceEss[i].amount / 100);
                    raceBonus[2].amount -= 0.2 * (RaceEss[i].amount / 100);
                    break;
                case "Orc":
                    raceBonus[3].amount += (RaceEss[i].amount / 100);
                    break;
                case "Fairy":
                    raceBonus[0].amount -= 8 * (RaceEss[i].amount / 100) / 9;
                    raceBonus[1].amount -= 8 * (RaceEss[i].amount / 100) / 9;
                    raceBonus[2].amount -= 6 * (RaceEss[i].amount / 100) / 10;
                    break;
                case "Elf":
                    raceBonus[4].amount += RaceEss[i].amount / 100
                    raceBonus[5].amount += RaceEss[i].amount / 100
                    break;
                case "Dark elf":
                    raceBonus[5].amount += RaceEss[i].amount / 100
                    raceBonus[6].amount += RaceEss[i].amount / 100
                    break;
                case "Amazon":
                    raceBonus[3].amount += RaceEss[i].amount / 100;
                    raceBonus[6].amount += 2 * (RaceEss[i].amount / 100);
                    break;
                case "Demon":
                    raceBonus[8].amount += 20 * (RaceEss[i].amount / 100);
                    break;
                case "Dhampir":
                    raceBonus[7].amount += RaceEss[i].amount / 100
                    raceBonus[8].amount += 20 * (RaceEss[i].amount / 100);
                    break;
                default:
                    console.log(RaceEss[i].Race + " has no perks yet.");
                    break;
            }
        }
    }
    raceBonus[0].amount++;
    raceBonus[1].amount++;
    raceBonus[2].amount++;
}