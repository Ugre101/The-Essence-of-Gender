function IntToOne(i) {
    switch (i) {
        case 0:
            return "A "
        case 1:
            return ", below it there is a second "
        case 2:
            return ", followed by a third "
        default:
            return ", and a " + (i + 1) + "th ";
    }
}

function DickLook(who) {
    if (who.Dicks.length > 0) {
        var dicks = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            dicks = "Under your equine body, retracted into their penile sheath, you find "
        } else if (who.SecondRace == "equine") {
            dicks = "Retracted into their penile sheath, you find "
        }
        for (var d = 0; d < who.Dicks.length; d++) {
            if (who.Dicks[d].Virgin) {
                virgin = " virgin"
            }
            dicks += IntToOne(d) + CmToInch(who.Dicks[d].Size) + " long " + who.Dicks[d].Type.toLowerCase() + virgin + " dick";
        }
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function ExactDickLook(who) {
    if (who.Dicks.length > 0) {
        var dicks = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            dicks = "Under your equine body, retracted into their penile sheath, you find "
        } else if (who.SecondRace == "equine") {
            dicks = "Retracted into their penile sheath, you find "
        }
        for (var d = 0; d < who.Dicks.length; d++) {
            if (who.Dicks[d].Virgin) {
                virgin = " virgin"
            }
            dicks += IntToOne(d) + CmToInch(who.Dicks[d].Size) + " long " + who.Dicks[d].Type.toLowerCase() + virgin + " dick";
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
            balls += IntToOne(b) + "pair of " + CmToInch(who.Balls[b].Size) + " wide balls, ";
            balls += Filled(who.Balls[b]) + " cum";
        }
        return balls + "<br><br>";
    } else {
        return "";
    }
}

function ExactBallLook(who) {
    if (who.Balls.length > 0) {
        var balls = "";
        for (var b = 0; b < who.Balls.length; b++) {
            balls += IntToOne(b) + "pair of " + CmToInch(who.Balls[b].Size) + " wide balls, ";
            balls += "filled with " + LToGal(who.Balls[b].Cum / 1000) + " cum";
        }
        return balls + "<br><br>";
    } else {
        return "";
    }
}

function Filled(what) {
    return "filled with "+LToGal(what.Cum/1000)
    var Procent = what.Cum/what.CumMax;
    console.log(Procent);
    if (Procent > 0.9) {
        return "engorged with"
    } else if (Procent > 0.5) {
    console.log(Percent);
    } else if (Percent > 0.5) {
        return "filled with"
    } else if (Percent > 0.3) {
        return ""
    } else if (Percent > 0.1) {
        return "shrunken due their emptiness"
    } else if (Percent > 0.01) {
        return ""
    } else {
        return "completely emptied"
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
            pussies += IntToOne(p) + CmToInch(who.Pussies[p].Size) + " deep " + who.Pussies[p].Type.toLowerCase() + virgin + " pussy";
        }
        return pussies + ".<br><br>";
    } else {
        return "";
    }
}

function ExactPussyLook(who) {
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
            pussies += IntToOne(p) + CmToInch(who.Pussies[p].Size) + " deep " + who.Pussies[p].Type.toLowerCase() + virgin + " pussy";
        }
        return pussies + ".<br><br>";
    } else {
        return "";
    }
}

function BoobLook(who) {
    if (who.Boobies.length > 0) {
        var boobies = "";
        for (var b = 0; b < who.Boobies.length; b++) {
            if (b == 0 && (Math.round(who.Boobies[0].Size) == 2 || Math.round(who.Boobies[0].Size) == 3)) {
                boobies += "An " + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else if (Math.round(who.Boobies[b].Size) > 1 && Math.round(who.Boobies[b].Size < 28)) {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + " chest";
            }
        }
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function ExactBoobLook(who) {
    if (who.Boobies.length > 0) {
        var boobies = "";
        for (var b = 0; b < who.Boobies.length; b++) {
            if (b == 0 && (Math.round(who.Boobies[0].Size) == 2 || Math.round(who.Boobies[0].Size) == 3)) {
                boobies += "An " + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else if (Math.round(who.Boobies[b].Size) > 1 && Math.round(who.Boobies[b].Size < 28)) {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + " chest";
            }
        }
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function AnalLook(who) {

}

function BoobSizeConvertor(Size) {
    switch (Math.round(Size)) {
        case 0:
        case 1:
            return "flat";
        case 2:
            return "AA";
        case 3:
            return "A";
        case 4:
            return "B";
        case 5:
            return "C";
        case 6:
            return "D";
        case 7:
            return "DD";
        case 8:
            return "F";
        case 9:
            return "Large F";
        case 10:
            return "G";
        case 11:
            return "Large G";
        case 12:
            return "H";
        case 13:
            return "Large H";
        case 14:
            return "I";
        case 15:
            return "Large I";
        case 16:
            return "J";
        case 17:
            return "Large J";
        case 18:
            return "K";
        case 19:
            return "Large K";
        case 20:
            return "L";
        case 21:
            return "Large L";
        case 22:
            return "M";
        case 23:
            return "Large M";
        case 24:
            return "N";
        case 25:
            return "Large N";
        case 26:
            return "O";
        case 27:
            return "Large O";
        default:
            return "scale-breaking"
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