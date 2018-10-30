function RaceBonus(who) {
    switch (who.Race) {
        case "Halfling":
            who.Height = who.Height / 2;
            who.Weight = who.Weight / 2;
            who.Size = who.Size * 0.8;
            break;
        case "Orc":
            who.Str += 1;
            break;
        case "Fairy":
            who.Height = who.Height / 9;
            who.Weight = who.Weight / 9;
            who.Size = who.Size * 0.4;
            break;
        case "Elf":
            who.Int += 1;
            who.Charm += 1;
            break;
        case "Dark elf":
            who.SexSkill += 1;
            who.Charm += 1;
            break;
        case "Amazon":
            who.Str += 1;
            who.SexSkill += 2;
            break;
        case "Imp":
            who.Femi = 0;
            break;
        case "Demon":
            who.WillHealth += 20;
            who.FullWillHealth += 20;
            break;
        case "Dhampir":
            who.WillHealth += 40;
            who.WillFullHealth += 40;
            who.Will += 1;
            break;
    }
    return who;
};