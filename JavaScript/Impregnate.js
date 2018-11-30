function BabyMaker(who, by) {
    var Father = RandomInt(1, 4);
    if (Father > 2) {
        Father = by;
    } else {
        Father = who;
    }
    who.Pregnant.Status = true;
    who.Pregnant.Baby = 0;
    who.Pregnant.BabyRace = Father.Race;
    who.Pregnant.Father = by.Name + " " + by.LastName;
    who.Pregnant.Mother = who.FirstName + " " + who.LastName;
    Flags.Impregnations++;
}

function playerBabyMaker(who, by) {
    var Father = RandomInt(1, 4);
    if (Father > 2) {
        Father = by;
    } else {
        Father = who;
    }
    var Baby = {
        BabyAge: 0,
        BabyRace: Father.Race,
        Father: by.FirstName + " " + by.LastName,
        Mother: who.Name + " " + who.LastName
    }
    who.Pregnant.Status = true;
    player.Pregnant.Babies.push(Baby);
    Flags.Pregnations++;
}

function Impregnate(who, by, mode = "A", where = "") {
    if (mode == "A") {
        var Impregnation = RandomInt(0, 100);
        switch (CheckGender(who)) {
            case "cuntboy":
                if (by.Virility >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated him!"
                }
                break;
            case "female":
                if (by.Virility >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated her!"
                }
                break;
            case "hermaphrodite":
                if (by.Virility >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated hir!"
                }
                break;
            case "male":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate him!"
                }
                break;
            case "dickgirl":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate her!"
                }
                break;
            default:
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnated the doll!"
                }
                break;
        }
    } else if (mode == "B") {
        var Impregnation = RandomInt(0, (500 - by.Masc));
        switch (CheckGender(who)) {
            case "cuntboy":
            case "female":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "hermaphrodite":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "dickgirl":
            case "male":
                if (false) { //Need to make a way to enable make impreg (item/blessing/curse)
                    if (who.Fertility - 50 >= Impregnation) {
                        playerBabyMaker(who, by);
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                }
                break;
            default:
                if (false) { 
                    if (who.Fertility - 50 >= Impregnation) {
                        playerBabyMaker(who, by);
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                }
                break;
        }
    }
    return;
}