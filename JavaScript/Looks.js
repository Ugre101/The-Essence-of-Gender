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

function GrowthScale(who) {
    return (who.Height / 160)
}

function DickLook(who) {
    if (who.Dicks.length > 0) {
        let dicks = who.SecondRace == "centaur" ?
            "Under your equine body, retracted into their penile sheath, you find " :
            who.SecondRace == "equine" ? "Retracted into their penile sheath, you find " : "";

        who.Dicks.forEach((Dick, index) => {
            const Size = OrganSize(Dick.Size, who);
            // width = Size / modded value;
            dicks += `${IntToOne(index)} ${CmToInch(Size)} long ${Dick.Type.toLowerCase()} 
            ${Dick.Virgin ? " virgin" : ""} dick`;
        });
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function ExactDickLook(who) {
    if (who.Dicks.length > 0) {
        let dicks = who.SecondRace == "centaur" ?
            "Under your equine body, retracted into their penile sheath, you find " :
            who.SecondRace == "equine" ? "Retracted into their penile sheath, you find " : "";

        who.Dicks.forEach((Dick, index) => {
            const Size = OrganSize(Dick.Size, who);
            // width = Size / modded value;
            dicks += `${IntToOne(index)} ${CmToInch(Size)} long ${Dick.Type.toLowerCase()} 
            ${Dick.Virgin ? " virgin" : ""} dick`;
        });
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function BallLook(who) {
    if (who.Balls.length > 0) {
        let balls = "";
        who.Balls.forEach((Balls, index) => {
            const Size = OrganSize(Balls.Size, who);
            balls += `${IntToOne(index)} pair of ${CmToInch(Size)} wide balls, ${Filled(Balls)} cum`;
        });
        return balls + "<br><br>";
    } else {
        return "";
    };
};

function ExactBallLook(who) {
    if (who.Balls.length > 0) {
        let balls = "";
        who.Balls.forEach((Balls, index) => {
            const Size = OrganSize(Balls.Size, who);
            balls += `${IntToOne(index)} pair of ${CmToInch(Size)} wide balls, ${Filled(Balls)} cum`;
        });
        return balls + "<br><br>";
    } else {
        return "";
    };
};

function Filled(what) {
    return "filled with " + LToGal(what.Cum / 1000)
    /**
     *     var Percent = what.Cum / what.CumMax;
        console.log(Percent);
        if (Percent > 0.9) {
            return "swollen with"
        } else if (Percent > 0.5) {
            return "filled with"
        } else if (Percent > 0.3) {
            return "filled with"
        } else if (Percent > 0.1) {
            return "shrunken due their emptiness"
        } else if (Percent > 0.01) {
            return "shrunken due their emptiness"
        } else {
            return "completely dried up"
        }
     */
}

function PussyLook(who) {
    if (who.Pussies.length > 0) {
        let pussies = (who.SecondRace == "centaur") ?
            "At your equine backside are your mare genitals, " : "";
        who.Pussies.forEach((Pussy, index) => {
            const Size = OrganSize(Pussy.Size, who);
            pussies += `${IntToOne(index)} ${CmToInch(Size)} deep ${Pussy.Type.toLowerCase()} 
            ${Pussy.Virgin ? " virgin" : ""} pussy`;
        });
        return pussies + ".<br><br>";
    } else {
        return "";
    };
};

function ExactPussyLook(who) {
    if (who.Pussies.length > 0) {
        let pussies = (who.SecondRace == "centaur") ?
            "At your equine backside are your mare genitals, " : "";
        who.Pussies.forEach((Pussy, index) => {
            const Size = OrganSize(Pussy.Size, who);
            pussies += `${IntToOne(index)} ${CmToInch(Size)} deep ${Pussy.Type.toLowerCase()} 
            ${Pussy.Virgin ? " virgin" : ""} pussy`;
        });
        return pussies + ".<br><br>";
    } else {
        return "";
    };
};

function BoobLook(who) {
    if (who.Boobies.length > 0) {
        let boobies = "";
        who.Boobies.forEach((Boobs, index) => {
            const Size = OrganSize(Boobs.Size, who);
            if (index === 0 && Size <= 4 && Size > 2) {
                boobies += `An ${BoobSizeConvertor(Size)}-cup chest`;
            } else if (Size > 4 && Size < 28) {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)}-cup chest`;
            } else {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)} chest`;
            }
            // Todo add milk desc!
        });
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function ExactBoobLook(who) {
    if (who.Boobies.length > 0) {
        let boobies = "";
        who.Boobies.forEach((Boobs, index) => {
            const Size = OrganSize(Boobs.Size, who);
            if (index === 0 && Size <= 4 && Size > 1) {
                boobies += `An ${BoobSizeConvertor(Size)}-cup chest`;
            } else if (Size > 4 && Size < 28) {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)}-cup chest`;
            } else {
                boobies += `${IntToOne(index)} ${BoobSizeConvertor(Size)} chest`;
            }
        });
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function AnalLook(who) {

}

function BoobSizeConvertor(Size) {
    //const Prop = Size / GrowthScale(who)
    switch (Math.floor(Size)) {
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

// TODO add pussy width
function PussySizeConvetor(Size) { // Could be fun to reuse with a strecht factor
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
    let a, b, c;
    if ((who.Fat / who.Weight) * 100 <= 2) {
        a = "You look malnourished ";
    } else if ((who.Fat / who.Weight) * 100 <= 14) {
        a = "You have an athletic body ";
    } else if ((who.Fat / who.Weight) * 100 <= 18) {
        a = "You have a fit body ";
    } else if ((who.Fat / who.Weight) * 100 <= 26) {
        a = "You have a healthy body ";
    } else if ((who.Fat / who.Weight) * 100 <= 31) {
        a = "You have an pudgy body "; // Probably should change to more positive words, plus size? fat?
    } else if ((who.Fat / who.Weight) * 100 <= 36) {
        a = "You have a plump body "; // Obese
    } else {
        a = "You have a plus size body "; // morbidly obese
    }

    if (who.Muscle < who.Height * 0.18) {
        b = "with unnoticable muscle";
    } else if (who.Muscle < who.Height * 0.20) {
        b = "with some defined muscle";
    } else if (who.Muscle < who.Height * 0.22) {
        b = "with well-defined muscle";
    } else if (who.Muscle < who.Height * 0.26) {
        b = "with bulky muscle";
    } else if (who.Muscle < who.Height * 0.30) {
        b = "with hulking muscle";
    } else if (who.Muscle < who.Height * 0.34) {
        b = "with enormous muscle";
    } else {
        b = "with colossal muscle"; // This is relative does a fairy ever have colossal muscle?
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

function AllSexualOrgans(who) {
    return BoobLook(who) + DickLook(who) + BallLook(who) + PussyLook(who);
};