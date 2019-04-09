function CmToInch(cm) {
    if (Settings.Inch) {
        const Inch = Math.round(cm / 2.54),
            Feet = Math.floor(Inch / 12),
            Yard = Math.floor(Feet / 3);
        return Feet > 0 ?
            `${Feet} feet ${Inch % 12 > 0 ? 
                `and ${Inch % 12} inches`: ``} inches` : `${Inch} inches`;
    } else {
        return cm < 1 ?
            Math.round(cm * 10) + "mm" : cm < 300 ? 
                Math.round(cm) + "cm" : Math.round(cm * 10) / 1000 + "m";;
    }
}

function KgToPound(kg) {
    if (Settings.Inch) {
        return Math.round(kg * 2.2046) + "lb"
    } else {
        return kg < 1 ? `${Math.round(kg * 1000) / 1000}g` : kg < 10 ?
            `${Math.round(kg * 10) / 10}kg` : `${Math.round(kg)}kg`;
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
        return L < 0.1 ? `${Math.round(L * 100)}cl` : L < 0.99 ? `${Math.round(L * 10)}dl` :
            `${Math.round(L)}L`
    }
}