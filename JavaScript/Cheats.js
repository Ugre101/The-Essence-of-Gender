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
        DateTracker();
    }
}

DocId("Gold").addEventListener("click", function () {
    const gold = DocId("Gold");
    let clicked = gold.dataset.clicked;
    clicked++;
    gold.dataset.clicked = clicked;
    if (clicked > 10) {
        DisplayNone();
        DocId("CheatMenu").style.display = 'block';
        DocId("CheatsEnabled").innerHTML = "Cheats Enabled " + Settings.Cheats.Enabled;
        DocId("CheatsGold").innerHTML = "Gold " + Settings.Cheats.Gold;
        DocId("CheatsMasc").innerHTML = "Masc " + Settings.Cheats.Masc;
        DocId("CheatsFemi").innerHTML = "Femi " + Settings.Cheats.Femi;
        DocId("CheatsExp").innerHTML = "Exp " + Settings.Cheats.Exp;
        DocId("CheatsVoreExp").innerHTML = "Vore Exp " + Settings.Cheats.VoreExp;
        DocId("CheatsFastTime").innerHTML = "FastTime " + Settings.Cheats.FastTime;
    }
});
DocId("CheatsEnabled").addEventListener("click", function () {
    Settings.Cheats.Enabled = Settings.Cheats.Enabled ? false : true;
    DocId("CheatsEnabled").innerHTML = "Cheats Enabled " + Settings.Cheats.Enabled;
});
DocId("CheatsGold").addEventListener("click", function () {
    Settings.Cheats.Gold = Settings.Cheats.Gold ? false : true;
    DocId("CheatsGold").innerHTML = "Gold " + Settings.Cheats.Gold;
});
DocId("CheatsMasc").addEventListener("click", function () {
    Settings.Cheats.Masc = Settings.Cheats.Masc ? false : true;
    DocId("CheatsMasc").innerHTML = "Masc " + Settings.Cheats.Masc;
});
DocId("CheatsFemi").addEventListener("click", function () {
    Settings.Cheats.Femi = Settings.Cheats.Femi ? false : true;
    DocId("CheatsFemi").innerHTML = "Femi " + Settings.Cheats.Femi;
});
DocId("CheatsExp").addEventListener("click", function () {
    Settings.Cheats.Exp = Settings.Cheats.Exp ? false : true;
    DocId("CheatsExp").innerHTML = "Exp " + Settings.Cheats.Exp;
});
DocId("CheatsVoreExp").addEventListener("click", function () {
    Settings.Cheats.VoreExp = Settings.Cheats.VoreExp ? false : true;
    DocId("CheatsVoreExp").innerHTML = "Vore Exp " + Settings.Cheats.VoreExp;
});
DocId("CheatsFastTime").addEventListener("click", function () {
    Settings.Cheats.FastTime = Settings.Cheats.FastTime ? false : true;
    DocId("CheatsFastTime").innerHTML = "FastTime " + Settings.Cheats.FastTime;
});
DocId("CloseCheatMenu").addEventListener("click", function () {
    DocId("CheatMenu").style.display = 'none';
    DisplayGame();
});