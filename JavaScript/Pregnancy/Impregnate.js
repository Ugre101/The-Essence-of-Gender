function Impregnate(who, by, mode = "A", where = "") {
    function Twins() {
        // The +1 gives a 1% or less chance for non blessed to birth twins 
        // Old saves might fail totaly
        const Twins = typeof (player.Blessings.Broodmother) === Number ? 1 + player.Blessings.Broodmother * 1 : 1,
            NoTwins = RandomInt(0, 100);
        switch (who.Race) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        switch (who.SecondRace) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        switch (by.Race) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        switch (by.SecondRace) {
            case "":
                Twins += 5;
                break;
            default:
                break;
        }
        // Some races will have higher chance
        if (NoTwins < Twins * 2) {
            return 3;
        } else if (NoTwins < Twins) {
            return 2;
        } else {
            return 1;
        }
    }

    function BabyMaker() {
        who.Pregnant.Status = true;
        Flags.Impregnations++;
        if (!Array.isArray(who.Pregnant.Babies)) {
            who.Pregnant.Babies = [];
        }
        if (player.Quests.some(e => e.Name === "Impregnate maidens") && who.Name == "Maiden") {
            var i = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
            player.Quests[i].Count++;
            player.Quests[i].Completed = true;
            who.Name = "Priestess";
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Baby = {
                    BabyAge: 0,
                    BabyRace: player.Race,
                    Father: by.Name + " " + by.LastName,
                    Mother: who.FirstName + " " + who.LastName,
                    Blessed: "Fertility" // Not in use for the moment, but I want it so children made during quest is different. 
                    //Maybe they leave house to join the shrine
                }
                who.Pregnant.Babies.push(Baby);
            }
        } else {
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Father = RandomInt(1, 4);
                if (Father > 2) {
                    Father = by;
                } else {
                    Father = who;
                }
                var Baby = {
                    BabyAge: 0,
                    BabyRace: Father.Race,
                    Father: by.Name + " " + by.LastName,
                    Mother: who.FirstName + " " + who.LastName
                }
                who.Pregnant.Babies.push(Baby);
            }
        }
    }

    function playerBabyMaker() {
        Flags.Pregnations++;
        player.Pregnant.Status = true;
        if (player.Quests.some(e => e.Name === "Get Impregnated")) {
            var i = player.Quests.findIndex(e => e.Name == "Get Impregnated");
            player.Quests[i].Completed = true;
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Baby = {
                    BabyAge: 0,
                    BabyRace: who.Race,
                    Father: by.FirstName + " " + by.LastName,
                    Mother: player.Name + " " + player.LastName,
                    Blessed: "Fertility"
                }
                player.Pregnant.Babies.push(Baby);
                player.Quests[i].Count++;
            }
        } else {
            var x = Twins();
            for (var e = 0; e < x; e++) {
                var Father = RandomInt(1, 4);
                if (Father > 2) {
                    Father = by;
                } else {
                    Father = player;
                }
                var Baby = {
                    BabyAge: 0,
                    BabyRace: Father.Race,
                    Father: by.FirstName + " " + by.LastName,
                    Mother: player.Name + " " + player.LastName
                }
                player.Pregnant.Babies.push(Baby);
            }
        }
    }
    if (who.hasOwnProperty("Pregnant")) {
        if (who.Pregnant.Status) {
            return;
        }
    }
    if (mode == "A") {
        var Impregnation = RandomInt(0, 100);
        switch (CheckGender(who)) {
            case "cuntboy":
                if (by.Virility >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "You have impregnated him!"
                }
                break;
            case "female":
                if (by.Virility >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexStats").innerHTML = "You have impregnated her!"
                }
                break;
            case "hermaphrodite":
                if (by.Virility >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "You have impregnated hir!"
                }
                break;
            case "male":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate him!"
                }
                break;
            case "dickgirl":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate her!"
                }
                break;
            default:
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker();
                    DocId(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnated the doll!"
                }
                break;
        }
    } else if (mode == "B") {
        var Impregnation = RandomInt(0, (500 - by.Masc));
        switch (CheckGender(who)) {
            case "cuntboy":
            case "female":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker();
                    DocId(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "hermaphrodite":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker();
                    DocId(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "dickgirl":
            case "male":
                if (false) { //Need to make a way to enable make impreg (item/blessing/curse)
                    if (who.Fertility - 50 >= Impregnation) {
                        playerBabyMaker();
                        DocId(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                }
                break;
            default:
                if (false) {
                    if (who.Fertility - 50 >= Impregnation) {
                        playerBabyMaker();
                        DocId(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                }
                break;
        }
    }
    return;
}