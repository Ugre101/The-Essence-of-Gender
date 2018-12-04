function DrainChangesEnemy(eold, ecurrent) {
    var b = "";
    if (eold.Dicks.length > ecurrent.Dicks.length) {
        if (ecurrent.Dicks.length < 1) {
            b += "You see their dick shrinking completely into their body, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "They lost a dick"
        }
    } else if (eold.Dicks.length < ecurrent.Dicks.length) {
        b += "They have grown a dick"
    } else if (ecurrent.Dicks.length > 0) {
        for (var e = 0; e < eold.Dicks.length; e++) {
            if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick shrinking" //Need to add what dick e.g. their second dick shrinks etc
            } else if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick growing"
            }
        }
    }

    if (eold.Balls.length > ecurrent.Balls.length) {
        if (ecurrent.Balls.length < 1) {
            b += "<br>They lost a pair of balls"
        } else {
            b += "<br>They lost a pair of balls"
        }
    } else if (eold.Balls.length < ecurrent.Balls.length) {
        b += "<br>They have grown a pair of balls"
    } else if (ecurrent.Balls.length > 0) {
        for (var e = 0; e < ecurrent.Balls.length; e++) {
            if (Math.round(eold.Balls[e].Size) > Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls shrinking"
            } else if (Math.round(eold.Balls[e].Size) < Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls growing"
            }
        }
    }

    if (eold.Boobies.length > ecurrent.Boobies.length) {
        b += "<br>They loost a pair of breasts";
    } else if (eold.Boobies.length < ecurrent.Boobies.length) {
        b += "<br>They have grown a pair of breasts";
    } else {
        for (var e = 0; e < eold.Boobies.length; e++) {
            if (Math.round(eold.Boobies[e].Size) > Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts shrinking."
            } else if (Math.round(eold.Boobies[e].Size) < Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts growing."
            }
        }
    }

    if (eold.Pussies.length > ecurrent.Pussies.length) {
        if (ecurrent.Pussies.length < 1) {
            b += "<br>You see their pussy closing completely and disappear, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "<br>They a lost a pussy"
        }
    } else if (eold.Pussies.length < ecurrent.Pussies.length) {
        b += "<br>They a have grown a pussy"
    } else if (ecurrent.Pussies.length > 0) {
        for (var e = 0; e < eold.Pussies.length; e++) {
            if (Math.round(eold.Pussies[e].Size) > Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy tightening"
            } else if (Math.round(eold.Pussies[e].Size) < Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy growing" //Need better word/phrase than growing
            }
        }
    }
    return b;
}

//Need to do same for player
function DrainChanges(old, current, eold, ecurrent) {
    var a = " ";
    var b = " ";

    if (old.Dicks.length < current.Dicks.length) {
        a = "You have grown a dick!";
    } else if (current.Dicks.length < old.Dicks.length) {
        if (current.Dicks.length < 1) {

        } else {
            a = "You have lost a dick";
        }

    } else if (current.Dicks.length > 0) {
        for (var e = 0; e < current.Dicks.length; e++) {
            if (Math.round(old.Dicks[e].Size) < Math.round(current.Dicks[e].Size)) {
                a += "<br>You feel your dick growing.";
            } else if (Math.round(current.Dicks[e].Size) < Math.round(old.Dicks[e].Size)) {
                a += "<br>You feel your dick shrinking.";
            }
        }
    }

    if (old.Balls.length < current.Balls.length) {
        a += "<br>you have grown a pair of balls"
    } else if (current.Balls.length < old.Balls.length) {
        a += "<br>you have lost a pair of balls"
    } else if (current.Balls.length > 0) {
        for (var e = 0; e < current.Balls.length; e++) {
            if (Math.round(old.Balls[e].Size) < Math.round(current.Balls[e].Size)) {
                a += "<br>you feel you balls growing"
            } else if (Math.round(current.Balls[e].Size) < Math.round(old.Balls[e].Size)) {
                a += "<br>you feel you balls shrinking"
            }
        }
    }

    if (old.Boobies.length < current.Boobies.length) {
        a += "<br>You have grown a new pair of breasts."
    } else if (current.Boobies.length < old.Boobies.length) {
        a += "<br>You have lost a pair of breasts"
    } else if (current.Boobies.length > 0) {
        for (var e = 0; e < current.Boobies.length; e++) {
            if (Math.round(old.Boobies[e].Size) < Math.round(current.Boobies[e].Size)) {
                a += "<br>You feel your breasts grow bigger.";
            } else if (Math.round(current.Boobies[e].Size) < Math.round(old.Boobies[e].Size)) {
                a += "<br>You feel your breasts shrinking.";
            }
        }
    }

    if (old.Pussies.length < current.Pussies.length) {
        a += "<br>You gave grown a pussy";
    } else if (current.Pussies.length < old.Pussies.length) {
        a += "<br>You have lost a pussy";
    } else if (current.Pussies.length > 0) {
        for (var e = 0; e < current.Pussies.length; e++) {
            if (Math.round(old.Pussies[e].Size) < Math.round(current.Pussies[e].Size)) {
                a += "<br>You feel your pussy grow";
            } else if (Math.round(current.Pussies[e].Size) < Math.round(old.Pussies[e].Size)) {
                a += "<br>You feel your pussy tighten";
            }
        }
    }
    if (CheckGender(old) != CheckGender(current)) {
        a += "<br><br>You have become a " + Pronoun(CheckGender(current)) + "!<br>";
    }
    b = DrainChangesEnemy(eold, ecurrent);
    return "<br>" + a + "<br>" + b;
}