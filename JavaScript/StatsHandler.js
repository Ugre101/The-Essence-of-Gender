function TotalStr() { // Testing order
    var Str = player.Str;
    // Add precent buffs to player raw stats 
    // Maybe negative?
    // Maybe precent negative?
    // #TODO Add bonus for player with alot of muscle and a negative for little, should add a negative impacted stats to like agility?
    //Str += EquipMent(); // Add raw buffs e.g. +3 str weapon work for negative values to.
    switch (player.Race.toLowerCase()) { // Race buffs
        case "orc":
            Str += 4; // Maybe multiple by race ess amount / 100 ?
            break;
        case "equine":
            Str += 3;
            break;
        case "fairy":
            Str -= 7;
            break;
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        case "orc":
            Str += 2;
            break;
        case "fairy":
            Str -= 2;
            break;
        case "equine":
            Str += 1;
            break;
        default:
            break;
    }
    return Str;
}

function TotalInt() {
    var Int = player.Int;
    //Int += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Int
}

function TotalCharm() {
    var Charm = player.Charm;
    //Charm += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Charm
}

function TotalWill() {
    var Will = player.Will;
    //Will += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Will;
}

function TotalEnd() {
    var End = player.End;
    //End += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return End;
}

function TotalSexSkill() {
    var SexSkill = player.SexSkill; // Should I keep this as a basic stat? Maybe change it so it's own skill system?
    //SexSkill += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return SexSkill;
}