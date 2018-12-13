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
function isTaur() {
    var Taur = ["centaur"]
    var max = Math.min(3, player.RaceEssence.length);
    for (var e = 0; e < max; e++) {
        if (Taur.indexOf(player.RaceEssence[e].Race) > -1) {
            return e;
        } else {
            return false;
        }
    }
}


function EssenceBalance() { // Concept for calculating what species you're treated as
    var RaceEss = player.RaceEssence;
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence
    for (var i = 0; i < RaceEss.length; i++) { // Clearing/Spicing out anything below 1
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

    /* Will convert to use this insted to I can make changed dependant on amount of essence.
Need to make it like earlier so that low essence doesn't give a race, 
e.g. you are not a dragon because you have 1 dragon essence.
    */
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
        player.Race = "race less" //?
        player.SecondRace = player.Race;
        GenitalChange("human"); // null dick? bland dick? average?
    }
    if (isTaur() > -1) { // centaur always second race or maybe search for taur essence?
        if (isTaur() > 0) {
            player.Race = RaceEss[0].Race;
        } else {
            player.Race = RaceEss[1].Race;
        }
        player.SecondRace = RaceEss[isTaur()].Race;
        GenitalChange(RaceEss[isTaur()].Race);
    } else if (R1 + R2 + R3 < 50) {
        player.Race = "chimera";
        player.SecondRace = "chimera";
        GenitalChange(RaceEss[0].Race); // change GenitalsChange you can have organs from more than on race
    } else {
        if (R2 > 20) {
            player.Race = RaceEss[0].Race;
            player.SecondRace = RaceEss[1].Race
            GenitalChange(RaceEss[1].Race); // Will add options to chose what race genitals is.
        }
    }
    /** Move this to racedesc
     * //console.log(R1 + " " + R2 + " " + R3)
    if (R1 > 99) {
        player.Race = RaceEss[0].Race;
        console.log("You're fully " + RaceEss[0].Race + "!");
    } else if (R1 + R2 + R3 < 50) {
        console.log("You're an unnatural mix of an assortment of creatures!");
    } else if (R1 > 90) {
        player.Race = RaceEss[0].Race;
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
     */
}

function PotionDrunk(race, Dose = 50) {
    var RaceEss = player.RaceEssence;
    var a = RaceEss.findIndex(e => e.Race == race);
    console.log(a);
    if (a > -1) {
        RaceEss[a].amount += Dose;
    } else {
        var Race = {
            Race: race,
            amount: Dose
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

function RaceDesc(who) {
    switch (who.Race) {
        case "human":
            if (who.SecondRace == "human") {
                return "human";
            } else if (who.SecondRace == "elf") {
                return "half elf";
            } else if (who.SecondRace == "centaur") {
                return "centaur";
            } else if (who.SecondRace == "equine") {
                return "satyr";
            }
        case "elf":
            if (who.SecondRace == "human") {
                return "half elf";
            } else if (who.SecondRace == "elf") {
                return "elf";
            } else if (who.SecondRace == "centaur") {
                return "centaur";
            } else if (who.SecondRace == "equine") {
                return "satyr";
            }
        case "equine":
            if (who.SecondRace == "human") {
                return "humanoid equine";
            } else if (who.SecondRace == "elf") {
                return "humanoid equine";
            } else if (who.SecondRace == "centaur") {
                return "anthropomorphic centaur";
            } else if (who.SecondRace == "equine") {
                return "equine";
            }
        default:
            return player.Race;
    }
    var RaceEss = player.RaceEssence;
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence
    for (var i = 0; i < RaceEss.length; i++) { // Clearing/Spicing out anything below 1
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
    if (R1 > 99) {
        player.Race = RaceEss[0].Race;
        console.log("You're fully " + RaceEss[0].Race + "!");
    } else if (R1 + R2 + R3 < 50) {
        console.log("You're an unnatural mix of an assortment of creatures!");
    } else if (R1 > 90) {
        player.Race = RaceEss[0].Race;
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
}