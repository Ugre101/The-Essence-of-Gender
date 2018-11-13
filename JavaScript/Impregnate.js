function Impregnate(who, by, mode, where) {
    var Father = RandomInt(1, 4);
    if (Father > 2) {
        Father = by;
    } else {
        Father = who;
    }

    if (mode == "A") {
        var Impregnation = RandomInt(0, 100);
        switch (CheckGender(who)) {
            case "cuntboy":
                if (by.Virility >= Impregnation) {
                    who.Pregnant.Status = true;
                    who.Pregnant.Baby = 0;
                    who.Pregnant.BabyRace = Father.Race;
                    who.Pregnant.Father = by.Name + " " + by.Lastname;
                    who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                    Flags.Impregnations++;
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated him!"
                }
                break;
            case "female":
                if (by.Virility >= Impregnation) {
                    who.Pregnant.Status = true;
                    who.Pregnant.Baby = 0;
                    who.Pregnant.BabyRace = Father.Race;
                    who.Pregnant.Father = by.Name + " " + by.Lastname;
                    who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                    Flags.Impregnations++;
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated her!"
                }
                break;
            case "hermaphrodite":
                if (by.Virility >= Impregnation) {
                    who.Pregnant.Status = true;
                    who.Pregnant.Baby = 0;
                    who.Pregnant.BabyRace = Father.Race;
                    who.Pregnant.Father = by.Name + " " + by.Lastname;
                    who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                    Flags.Impregnations++;
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated hir!"
                }
                break;
            case "male":
                if (by.Virility - 60 >= Impregnation) {
                    who.Pregnant.Status = true;
                    who.Pregnant.Baby = 0;
                    who.Pregnant.BabyRace = Father.Race;
                    who.Pregnant.Father = by.Name + " " + by.Lastname;
                    who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                    Flags.Impregnations++;
                    document.getElementById(where + "SexText").innerHTML = "Somehow, your extreme virility has managed to impregnate him!"
                }
                break;
            case "dickgirl":
                if (by.Virility - 60 >= Impregnation) {
                    who.Pregnant.Status = true;
                    who.Pregnant.Baby = 0;
                    who.Pregnant.BabyRace = Father.Race;
                    who.Pregnant.Father = by.Name + " " + by.Lastname;
                    who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                    Flags.Impregnations++;
                    document.getElementById(where + "SexText").innerHTML = "Somehow, your extreme virility has managed to impregnate her!"
                }
                break;
            default:
                if (by.Virility - 60 >= Impregnation) {
                    who.Pregnant.Status = true;
                    who.Pregnant.Baby = 0;
                    who.Pregnant.BabyRace = Father.Race;
                    who.Pregnant.Father = by.Name + " " + by.Lastname;
                    who.Pregnant.Mother = who.FirstName + " " + who.LastName;
                    Flags.Impregnations++;
                    document.getElementById(where + "SexText").innerHTML = "Somehow, your extreme virility has managed to impregnate the doll!"
                }
                break;
        }
    } else if (mode == "B") {
        var Impregnation = RandomInt(0, (500 - by.Masc));
        var Baby = {
            BabyAge: 0,
            BabyRace: Father.Race,
            Father: by.FirstName + " " + by.LastName,
            Mother: who.Name + " " + who.Lastname
        }
        switch (CheckGender(who)) {
            case "cuntboy":
            case "female":
                if (who.Fertility >= Impregnation) {
                    who.Pregnant.Status = true;
                    player.Pregnant.Babies.push(Baby);
                    Flags.Pregnations++;
                    document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "hermaphrodite":
                if (who.Fertility >= Impregnation) {
                    who.Pregnant.Status = true;
                    player.Pregnant.Babies.push(Baby);
                    Flags.Pregnations++;
                    document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "dickgirl":
            case "male":
                if (who.Fertility - 50 >= Impregnation) {
                    who.Pregnant.Status = true;
                    player.Pregnant.Babies.push(Baby);
                    Flags.Pregnations++;
                    document.getElementById(where + "SexText").innerHTML = "Somehow, due your extreme fertility and their virility, you have been impregnated!"
                }
                break;
            default:
                if (who.Fertility - 50 >= Impregnation) {
                    who.Pregnant.Status = true;
                    player.Pregnant.Babies.push(Baby);
                    Flags.Pregnations++;
                    document.getElementById(where + "SexText").innerHTML = "Somehow, due your extreme fertility and their virility, you have been impregnated!"
                }
                break;
        }
    }
    return;
}