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
        return Math.round(cm) + "cm";
    }
}
function CmToInchDecimal(cm) {
    if (Settings.Inch) {
        var Inch = Math.round(cm / 2.54 * 10)/10;
        var Feet = Math.floor(Inch / 12)
        Inch = Inch % 12;
        if (Feet > 0) {
            return Feet + " feet and " + Inch + " inches"
        } else {
            return Inch + " inches"
        }
    } else {
        return Math.round(cm*10)/10 + "cm";
    }
}

function KgToPound(kg) {
    if (Settings.Inch) {
        return Math.round(kg*2.2046) + "lb"
    }
    else {
        return Math.round(kg) + "kg";
    }
} 