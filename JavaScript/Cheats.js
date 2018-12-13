// Cheats to help me with development and aid those who don't like grinding. 
function CheatEngine() {
    if (Settings.Cheats.Gold) {
        player.Gold++;
    }
    if (Settings.Cheats.Masc) {
        player.Masc++;
    }
    if (Settings.Cheats.Femi) {
        player.Femi++;
    }
    if (Settings.Cheats.Exp) {
        player.Exp++;
    }
    if (Settings.Cheats.VoreExp) {
        player.Vore.Exp++;
    }
    if (Settings.Cheats.FastTime) {
        Flags.Date.Hour++;
    }
}

document.getElementById("Gold").addEventListener("click", function () {
    var gold = document.getElementById("Gold");
    var clicked = gold.title;
    clicked++;
    gold.setAttribute("title", clicked);
    if (clicked > 10) {
        DisplayNone();
        document.getElementById("CheatMenu").style.display = 'block';
        document.getElementById("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
        document.getElementById("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
        document.getElementById("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
        document.getElementById("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
        document.getElementById("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
        document.getElementById("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
        document.getElementById("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
    }
});
document.getElementById("CheatsEnabled").addEventListener("click", function () {
    Settings.Cheats.Enabled = !Settings.Cheats.Enabled;
    document.getElementById("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
});
document.getElementById("CheatsGold").addEventListener("click", function () {
    Settings.Cheats.Gold = !Settings.Cheats.Gold;
    document.getElementById("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
});
document.getElementById("CheatsMasc").addEventListener("click", function () {
    Settings.Cheats.Masc = !Settings.Cheats.Masc;
    document.getElementById("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
});
document.getElementById("CheatsFemi").addEventListener("click", function () {
    Settings.Cheats.Femi = !Settings.Cheats.Femi;
    document.getElementById("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
});
document.getElementById("CheatsExp").addEventListener("click", function () {
    Settings.Cheats.Exp = !Settings.Cheats.Exp;
    document.getElementById("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
});
document.getElementById("CheatsVoreExp").addEventListener("click", function () {
    Settings.Cheats.VoreExp = !Settings.Cheats.VoreExp;
    document.getElementById("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
});
document.getElementById("CheatsFastTime").addEventListener("click", function () {
    Settings.Cheats.FastTime = !Settings.Cheats.FastTime;
    document.getElementById("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
});
document.getElementById("CloseCheatMenu").addEventListener("click", function () {
    document.getElementById("CheatMenu").style.display = 'none';
    DisplayGame();
});