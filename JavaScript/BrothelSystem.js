var BrothelLogArray = [];
var BrothelLogHistory = "";

/* Instead of constant passive gain through brothel, servants will gain gold & essence 
in burst trough customers. */

// Recyled eventlog for brothel
function BrothelLog(LogText) {
    var newText = LogText + "<br>";
    BrothelLogArray.unshift(newText);
    while (BrothelLogArray.length > Settings.LogLength) {
        LogArray.pop();
    }
    LogHistory = "";
    for (var e of BrothelLogArray) {
        LogHistory += e + "<br>";
    }
    //LogHistory = newText + LogHistory;
    document.getElementById("").innerHTML = LogHistory;// Make a brothelTextLog
} // This will be inside brothel at home.
function BrothelEngine() {
    for (var e of House.Dormmates) {
        var male = 0,
            female = 0;
        if (Settings.Brothel.ServeFemi) {
            /* Remember to make it so on randomint(min,max) min is affect by servants essence e.g. a 
            servant with say high masculinity attracts more customers.*/
            var a = RandomInt(1, 30 + 20 * House.Brothel);
            female = a;
        }
        if (Settings.Brothel.ServeMasc) {
            var a = RandomInt(1, 20 + 20 * House.Brothel);
            male = a
        }
        if (male > 40 && female > 40) {
            // serve herm or maybe a mixed gender group? (if your lucky)
            BrothelLog(e.FirstName + " served a ");
        } else if (male > 40) {
            // serve male
        } else if (female > 40) {
            // serve female
        } else {
            // no luck
        }
    }
}

/* ToDo options to whore yourself. maybe give bonus dependent on level/rank? 
Like custmer find it exciting to fuck a high rank adventurer(need add ranks). */