function CmToInch(cm) {
    if (Settings.Inch) {
        var Inch = Math.round(cm / 2.54);
        var Feet = Math.floor(Inch / 12)
        Inch = Inch % 12;
        if (Feet > 0) {
            return Feet + " feet and " + Inch + " inches"
        } else {
            return Inch + " inches"
        }
    } else {
        if (cm < 1) {
            return Math.round(cm * 10) + "mm"
        } else {
            return Math.round(cm) + "cm";
        }
    }
}

function CmToInchDecimal(cm) {
    if (Settings.Inch) {
        var Inch = Math.round(cm / 2.54 * 10) / 10;
        var Feet = Math.floor(Inch / 12)
        Inch = Inch % 12;
        if (Feet > 0) {
            return Feet + " feet and " + Inch + " inches"
        } else {
            return Inch + " inches"
        }
    } else {
        return Math.round(cm * 10) / 10 + "cm";
    }
}

function KgToPound(kg) {
    if (Settings.Inch) {
        return Math.round(kg * 2.2046) + "lb"
    } else {
        if (kg < 10) {
            return Math.round(kg * 10) / 10 + "kg";
        } else if (kg < 1) {
            return Math.round(kg * 1000) / 1000 + "g"
        } else {
            return Math.round(kg) + "kg";
        }
    }
}

function LToGal(L) {
    if (Settings.Inch) {
        if (Math.round(0.264172052 * L) < 1) {
            return Math.round(L * 4.22675284) + "cups"
        } else {
            return Math.round(L * 0.264172052) + "gallon"
        }
    } else if (Settings.Approx) {
        if (L < 10)
            return "an almost-unnoticable amount"
        else if (L < 50)
            return "a few sprays"
        else if (L < 100)
            return "a decent load"
        else if (L < 250)
            return "a cupful"
        else if (L < 750)
            return "cupfuls"
        else if (L < 2000)
            return "a small bucket's worth"
        else if (L <= 5000)
            return "a bucket load"
        else if (L > 5000)
            return "a torrent of"
        else
            return "Snow's overfilled! (Error: " + L + ")";
    } else {
        if (L < 0.1) {
            return Math.round(L * 100) + "cl";
        } else if (L < 1) {
            return Math.round(L * 10) + "dl";
        } else {
            return Math.round(L) + "L";
        }
    }
}