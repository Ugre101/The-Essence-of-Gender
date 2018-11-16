function DrainChangesEnemy(eold, ecurrent) {
    var b = "";
    if (eold.Dicks.length > ecurrent.Dicks.length) {
        if (ecurrent.Dicks.length < 1) {
            b = "You see their dick shrinking completely into their body, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
        } else {
            b = "They lost a dick"
        }
    } else if (ecurrent.Dicks.length > 0) {
        for (var e = 0; e < eold.Dicks.length; e++) {
            if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick shrinking." //Need to add what dick e.g. their second dick shrinks etc
            } else if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick growing."
            }
        }
    }
    if (eold.Boobies.length > ecurrent.Boobies.length) {
        b += "<br>They loost a breast row";
    } else {
        for (var e = 0; e < eold.Boobies.length; e++) {
            if (eold.Boobies[e].Size > ecurrent.Boobies[e].Size) {
                b += "<br>You see their breasts shrinking."
            } else if (eold.Boobies[e].Size < ecurrent.Boobies[e].Size) {
                b += "<br>You see their breasts growing."
            }
        }
    }
    if (eold.Pussies.length > ecurrent.Pussies.length) {
        if (ecurrent.Pussies.length < 1) {
            b += "<br>You see their pussy closing completely and disappear, turning them into a " + Pronun(CheckGender(ecurrent)) + ".";
        } else {
            b += "<br>They a lost a pussy."
        }
    } else if (ecurrent.Pussies.length > 0) {
        for (var e = 0; e < eold.Pussies.length; e++) {
            if (eold.Pussies[e].Size > ecurrent.Pussies[e].Size) {
                b += "You feel their pussy tightening."
            } else if (eold.Pussies[e].Size < ecurrent.Pussies[e].Size) {
                b += "You feel their pussy growing." //Need better word/phrase than growing
            }
        }
    }
    return b;
}

//Need to do same for player
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
                a = "You gave grown a pussy!"
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