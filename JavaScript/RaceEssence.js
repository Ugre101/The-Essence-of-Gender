function isTaur(mode = 1) {
    var Taur = ["centaur"]
    var max = Math.min(3, player.RaceEssence.length);
    for (var e = 0; e < max; e++) {
        if (mode === 1) {
            if (Taur.indexOf(player.RaceEssence[e].Race) > -1) {
                return e;
            } else {
                return false;
            }
        } else {
            if (Taur.indexOf(player.RaceEssence[e].Race) > -1) {} else {
                return e; // return biggest non taur race
            }
        }
    }
}


function EssenceBalance() { // Concept for calculating what species you're treated as
    var RaceEss = player.RaceEssence;
    if (RaceEss.some(e => e.Race !== e.Race.Capitalize())) { // Make sure all races have firt letter cap + rest lowercase
        console.log("Non cap race");
        for (var e of RaceEss) {
            e.Race = e.Race.Capitalize();
        }
    }
    for (var i = 0; i < RaceEss.length; i++) { // Clearing/Spicing out anything below 1
        if (RaceEss[i].amount < 1) {
            console.log("Spliced " + RaceEss[i].Race);
            RaceEss.splice(i, 1);
        }
    }
    for (var e = 0; e < RaceEss.length; e++) { // Clearing/splicing duplicates
        for (var i = 0; i < RaceEss.length; i++) {
            if (RaceEss[e].Race == RaceEss[i].Race && e != i) {
                console.log("Duplicate race");
                RaceEss[e].amount += RaceEss[i].amount;
                RaceEss.splice(i, 1);
            }
        }
    }
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence

    var totalAbsorb = 0;
    for (var i = 0; i < RaceEss.length; i++) {
        totalAbsorb += RaceEss[i].amount;
    }

    /* Will convert to use this insted to I can make changed dependant on amount of essence.
Need to make it like earlier so that low essence doesn't give a race, 
e.g. you are not a dragon because you have 1 dragon essence.

Don't like that no race = human, maybe should add a special race?
    */
    var oldRace = player.Race,
        oldSecondRace = player.SecondRace;
    if (totalAbsorb < 100) {
        player.Race = "humanoid" // No race is lowest form of human? or implement doll race?
        if (RaceEss[0].amount > 50) {
            player.SecondRace = RaceEss[0].Race;
            GenitalChange(player.SecondRace); // null dick? bland dick? average?
        } else {
            player.SecondRace = player.Race
            GenitalChange(player.SecondRace)
        }
    } else {
        var R1 = 0,
            R2 = 0,
            R3 = 0;
        if (RaceEss.length > 2) {
            R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
            R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
            R3 = Math.round(100 * RaceEss[2].amount / totalAbsorb);
        } else if (RaceEss.length > 1) {
            R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
            R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
        } else if (RaceEss.length > 0) {
            R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        }
        if (isTaur() !== false) { // centaur always second race?
            player.Race = player.RaceEssence.length < 2 ? "human" : RaceEss[isTaur("B")].Race;
            player.SecondRace = RaceEss[isTaur()].Race;
            GenitalChange(RaceEss[isTaur()].Race);
        } else if (R1 + R2 + R3 < 50 && R1 > 0 && R2 > 0 && R3 > 0) {
            player.Race = "chimera";
            player.SecondRace = "chimera";
            GenitalChange(RaceEss[0].Race); // change GenitalsChange you can have organs from more than on race
        } else {
            if (R2 > 20) {
                player.Race = RaceEss[0].Race;
                player.SecondRace = RaceEss[1].Race
                GenitalChange(RaceEss[1].Race); // Will add options to chose what race genitals is.
            } else {
                player.Race = RaceEss[0].Race;
                player.SecondRace = player.Race;
                GenitalChange(RaceEss[0].Race);
            }
        }
        player.Race = player.Race.toLowerCase();
        player.SecondRace = player.Race.toLowerCase();
    }
    if (player.Race !== oldRace) { // Add a call to eventlog #TODO write text to reflect race change
        console.log("Race change!");
    }
    if (player.SecondRace !== oldSecondRace) {
        console.log("SecondRace change");
    }
}

function PotionDrunk(race, Dose = 50) {
    var RaceEss = player.RaceEssence;
    var a = RaceEss.findIndex(e => e.Race === race.Capitalize());
    if (a > -1) {
        RaceEss[a].amount += Dose;
    } else {
        var Race = {
            Race: race.Capitalize(),
            amount: Dose
        }
        RaceEss.push(Race);
    }
}

function RaceDesc(who) {
    var Race = who.Race.toLowerCase();
    var SecondRace = who.SecondRace.toLowerCase();
    switch (Race) {
        case "human":
            if (SecondRace == "human") {
                return "human";
            } else if (SecondRace == "elf") {
                return "half elf";
            } else if (SecondRace == "centaur") {
                return "centaur";
            } else if (SecondRace == "equine") {
                return "satyr";
            }
        case "elf":
            if (SecondRace == "human") {
                return "half elf";
            } else if (SecondRace == "elf") {
                return "elf";
            } else if (SecondRace == "centaur") {
                return "centaur";
            } else if (SecondRace == "equine") {
                return "satyr";
            }
        case "equine":
            if (SecondRace == "human") {
                return "humanoid equine";
            } else if (SecondRace == "elf") {
                return "humanoid equine";
            } else if (SecondRace == "centaur") {
                return "anthropomorphic centaur";
            } else if (SecondRace == "equine") {
                return "equine";
            }
        default:
            return Race;
    }
}

function DetailedRaceDesc() {
    var RaceEss = player.RaceEssence;
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence
    for (var i = 0; i < RaceEss.length; i++) { // Clearing/Spicing out anything below 1
        if (RaceEss[i].amount < 1) {
            console.log("Spliced " + RaceEss[i].Race);
            RaceEss.splice(i, 1);
        }
    }
    var totalAbsorb = 0;
    for (var i = 0; i < RaceEss.length; i++) {
        totalAbsorb += RaceEss[i].amount;
    }
    var R1 = 0,
        R2 = 0,
        R3 = 0;
    if (RaceEss.length > 2) {
        R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
        R3 = Math.round(100 * RaceEss[2].amount / totalAbsorb);
    } else if (RaceEss.length > 1) {
        R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
    } else if (RaceEss.length > 0) {
        R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
    }

    var text
    if (totalAbsorb < 100) {
        text = "Yor're an "
        if (RaceEss[0].amount > 20) {
            text += RaceEss[0].Race + " looking humaniod."
        } else {
            text += "humaniod."
        }
        return text;
    } else if (R1 > 99) {
        return "You're fully " + RaceEss[0].Race + "!";
    } else if (R1 + R2 + R3 < 50) {
        return "You're an unnatural mix of an assortment of creatures!";
    } else if (R1 > 90) {
        return "You're indistinguishable from any other " + RaceEss[0].Race;
    } else if (R1 > 80) {
        text = "You're mostly " + RaceEss[0].Race + ", but you've got";
        if (R2 > 10) {
            text += " some " + RaceEss[1].Race + " traits.";
        } else {
            text += " other traits mixed in.";
        }
        return text;
    } else if (R1 > 70) {
        text = "You're mostly " + RaceEss[0].Race + ", but"
        if (R2 > 20) {
            text += " could be confused for a half-" + RaceEss[1].Race + ".";
        } else if (R2 + R3 > 20) {
            text += " you've added a few other traits, notably " + RaceEss[1].Race + " and " +
                RaceEss[2].Race + ".";
        } else {
            text += " you've added a few other traits.";
        }
        return text;
    } else if (R1 < R2 + 10) {
        return "You're half-" + RaceEss[0].Race + ", half " + RaceEss[1].Race + ".";
    } else if (R1 < R2 + R3) {
        return "You're a curious hybrid, a mix between " + RaceEss[0].Race + ", " + RaceEss[1].Race + ", and " + RaceEss[2].Race + ".";
    } else {
        return "You're unmistakably an " + RaceEss[0].Race + ", but you're deep in an uncanny valley.";
    }
}