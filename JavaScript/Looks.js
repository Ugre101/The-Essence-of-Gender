function IntToOne(int) {
    switch (int) {
        case 0:
            return "A "
        case 1:
            return ", below it there is a second "
        case 2:
            return ". Followed by a third "
        default:
            return " and a ";
    }
}

function DickLook(who) {
    if (who.Dicks.length > 0) {
        var dicks = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            dicks = "Under your equine body retracted into their penile sheath you find "
        } else if (who.SecondRace == "equine") {
            dicks = "Retracted into their penile sheath you find "
        }
        for (var d = 0; d < who.Dicks.length; d++) {
            if (who.Dicks[d].Virgin) {
                virgin = " virgin"
            }
            dicks += IntToOne(d) + who.Dicks[d].Size + "cm long " + who.Dicks[d].Type + virgin + " dick";
        }
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function BallLook(who) {
    if (who.Balls.length > 0) {
        var balls = "";
        for (var b = 0; b < who.Balls.length; b++) {
            balls += IntToOne(b) + "pair of " + who.Balls[b].Size + "cm wide balls, ";
            balls += "which are filled with " + (who.Balls[b].Cum / 1000).toFixed(2) + "Liters of cum"
        }
        return balls + ".<br><br>";
    } else {
        return "";
    }
}

function PussyLook(who) {
    if (who.Pussies.length > 0) {
        var pussies = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            pussies = "At your equine backside are your mare genitals, ";
        }
        for (var p = 0; p < who.Pussies.length; p++) {
            if (who.Pussies[p].Virgin) {
                virgin = " virgin"
            }
            who.Pussies[p].Type + virgin + " pussy <br>";
            pussies += IntToOne(p) + who.Pussies[p].Size + "cm deep " + who.Pussies[p].Type + virgin + " pussy";
        }
        return pussies + "<br><br>";
    } else {
        return "";
    }
}

function BoobLook(who) {
    if (who.Boobies.length > 0) {
        var boobies = "";
        for (var b = 0; b < who.Boobies.length; b++) {
            boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + " chest";
        }
        return boobies + "<br><br>";
    } else {
        return "";
    }
}

function AnalLook(who) {

}

function BoobSizeConvertor(Size) {
    switch (Size) {
        case 0:
        case 1:
            return "flat";
        case 2:
            return "AA size";
        case 3:
            return "A size";
        case 4:
            return "B size";
        case 5:
            return "C size";
        case 6:
            return "D size";
        case 7:
            return "DD size";
        case 8:
            return "F size";
        case 9:
            return "Large F size";
        case 10:
            return "G size";
        case 11:
            return "Large G size";
        case 12:
            return "H size";
        case 13:
            return "Large H size";
        case 14:
            return "I size";
        case 15:
            return "Large I size";
        case 16:
            return "J size";
        case 17:
            return "Large J size";
        case 18:
            return "K size";
        case 19:
            return "Large L size";
        case 20:
            return "M size";
        case 21:
            return "Large M size";
        case 22:
            return "N size";
        case 23:
            return "Large N size";
        case 24:
            return "O size";
        case 25:
            return "Large O size";
        case 26:
            return "P size";
        case 27:
            return "Large P size";
        default:
            return "Scale-breaking"
    }
}

function PussySizeConvetor(Size) {
    if (Size <= 1) {
        return "extremely tight";
    } else if (Size >= 2 && Size < 4) {
        return "very tight";
    } else if (Size >= 4 && Size < 6) {
        return "tight";
    } else if (Size >= 6 && Size < 8) {
        return "parted";
    } else if (Size >= 8 && Size < 10) {
        return "loose";
    } else {
        return "gaping";
    }
}

function Fitness(who) {
    var a, b, c;
    if ((who.Fat / who.Weight) * 100 <= 2) {
        a = "You look malnourished ";
    } else if ((who.Fat / who.Weight) * 100 <= 14) {
        a = "You have an athletic body ";
    } else if ((who.Fat / who.Weight) * 100 <= 18) {
        a = "You have a fit body ";
    } else if ((who.Fat / who.Weight) * 100 <= 26) {
        a = "You have a healthy body ";
    } else if ((who.Fat / who.Weight) * 100 <= 31) {
        a = "You have an overweight body ";
    } else if ((who.Fat / who.Weight) * 100 <= 36) {
        a = "You have a obese body ";
    } else {
        a = "You have a morbidly obese body ";
    }

    if (who.Muscle < who.Height * 0.18) {
        b = "with unnoticable muscle";
    } else if (who.Muscle < who.Height * 0.20) {
        b = "with some defined muscle";
    } else if (who.Muscle < who.Height * 0.22) {
        b = "with well-defined muscle";
    } else {
        b = "with massive muscle";
    }


    if ((who.Fat / who.Weight) * 100 <= 25) {
        c = "."
    } else if ((who.Fat / who.Weight) * 100 <= 31 && who.Muscle < who.Height * 0.18) {
        c = " covered in fat.";
    } else if ((who.Fat / who.Weight) * 100 <= 38 && who.Muscle < who.Height * 0.20) {
        c = " buried in fat.";
    } else if ((who.Fat / who.Weight) * 100 <= 55 && who.Muscle > who.Height * 0.22) {
        c = "... Otherwise, you couldn't move.";
    } else if ((who.Fat / who.Weight) * 100 <= 55 && who.Muscle < who.Height * 0.22) {
        c = "... Your weight is a burden to your ability to move.";
    } else {
        c = "... No-one knows how you move.";
    }

    return a + b + c;
}