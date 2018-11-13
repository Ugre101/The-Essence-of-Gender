function DrainChangesEnemy(eold, ecurrent) {
    var b = " ";
    switch (CheckGender(eold)) {
        case "dickgirl":
            if (eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                b = "You see their breasts shrinking."
            }
        case "male":
            if (ecurrent.Dicks.length > 0) {
                if (eold.Dicks[0].Size > ecurrent.Dicks[0].Size) {
                    b = "You see their dick shrinking."
                }
            } else {
                b = "You see their dick shrinking completely into their body, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
            }
            break;
        case "cuntboy":
        case "female":
            if (ecurrent.Pussies.length > 0) {
                if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size && eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                    b = "You see their breasts shrinking and feel their pussy tightening."
                } else if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size) {
                    b = "You feel their pussy tightening."
                } else if (eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                    b = "You see their breasts shrinking."
                }
            } else {
                b = "You see their pussy closing completely and disappear, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
            }
            break;
        case "hermaphrodite":
            if (ecurrent.Dicks.length > 0) {
                if (eold.Dicks[0].Size > ecurrent.Dicks[0].Size) {
                    b = "You see their dick shrinking."
                }
            } else {
                b = "You see their dick shrinking completely into their body, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
            }
            if (ecurrent.Pussies.length > 0) {
                if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size && eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                    b = "You see their breasts shrinking and feel their pussy tightening."
                } else if (eold.Pussies[0].Size > ecurrent.Pussies[0].Size) {
                    b = "You feel their pussy tightening."
                } else if (eold.Boobies[0].Size > ecurrent.Boobies[0].Size) {
                    b = "You see their breasts shrinking."
                }
            } else {
                b = "You see their pussy closing completely and disappear, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
            }
            break;
        default:
            b = " "
    }
    return b;
}

function DrainChanges(old, current, eold, ecurrent) {
    var a = " ";
    var b = " ";

    switch (CheckGender(old)) {
        case "dickgirl":
        case "male":
            if (old.Dicks[0].Size < current.Dicks[0].Size) {
                a = "You feel your dick growing.";
            }
            if (old.Boobies[0].Size < current.Boobies[0].Size) {
                a = "You feel your breasts grow bigger.";
            }
            if (current.Pussies.length > 0) {
                a = "You've grown a pussy!"
            }
            b = DrainChangesEnemy(eold, ecurrent);
            break;
        case "cuntboy":
        case "female":
            if (old.Pussies[0].Size < current.Pussies[0].Size && old.Boobies[0].Size < current.Boobies[0].Size) {
                a = "You feel both your breasts and pussy growing.";
            } else if (old.Pussies[0].Size < current.Pussies[0].Size) {
                a = "You feel your pussy grow.";
            } else if (old.Boobies[0].Size < current.Boobies[0].Size) {
                a = "You feel your breasts grow.";
            }
            if (current.Dicks.length > 0) {
                a = "You have grown a dick!";
            }
            b = DrainChangesEnemy(eold, ecurrent);
            break;
        case "hermaphrodite":
            if (old.Dicks[0].Size < current.Dicks[0].Size) {
                a = "You feel your dick growing.";
            }
            if (old.Pussies[0].Size < current.Pussies[0].Size && old.Boobies[0].Size < current.Boobies[0].Size) {
                a = "You feel your breasts and pussy growing.";
            } else if (old.Pussies[0].Size < current.Pussies[0].Size) {
                a = "You feel your pussy grow.";
            } else if (old.Boobies[0].Size < current.Boobies[0].Size) {
                a = "You feel your breasts grow bigger.";
            }
            b = DrainChangesEnemy(eold, ecurrent);
            break;
        case "doll":
            if (current.Dicks.length > 0) {
                a = "You have grown a dick!";
            }
            if (current.Pussies.length > 0) {
                a = "You gave grown a pussy!"
            }
            if (old.Boobies[0].Size < current.Boobies[0].Size) {
                a = "You feel your breasts grow bigger.";
            }
            b = DrainChangesEnemy(eold, ecurrent);
            break;

    }
    if (CheckGender(old) != CheckGender(current)) {
        b += "<br>You have become a " + Pronun(CheckGender(current)) + "!";
    }
    return "<br>" + a + "<br>" + b;
}