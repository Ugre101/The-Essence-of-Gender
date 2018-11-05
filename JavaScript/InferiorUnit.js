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
        return cm + "cm";
    }
}