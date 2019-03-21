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

DocId("Gold").addEventListener("click", function () {
    const gold = DocId("Gold");
    let clicked = gold.dataset.clicked;
    clicked++;
    gold.dataset.clicked = clicked;
    if (clicked > 10) {
        DisplayNone();
        DocId("CheatMenu").style.display = 'block';
        DocId("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
        DocId("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
        DocId("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
        DocId("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
        DocId("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
        DocId("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
        DocId("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
    }
});
DocId("CheatsEnabled").addEventListener("click", function () {
    Settings.Cheats.Enabled = !Settings.Cheats.Enabled;
    DocId("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
});
DocId("CheatsGold").addEventListener("click", function () {
    Settings.Cheats.Gold = !Settings.Cheats.Gold;
    DocId("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
});
DocId("CheatsMasc").addEventListener("click", function () {
    Settings.Cheats.Masc = !Settings.Cheats.Masc;
    DocId("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
});
DocId("CheatsFemi").addEventListener("click", function () {
    Settings.Cheats.Femi = !Settings.Cheats.Femi;
    DocId("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
});
DocId("CheatsExp").addEventListener("click", function () {
    Settings.Cheats.Exp = !Settings.Cheats.Exp;
    DocId("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
});
DocId("CheatsVoreExp").addEventListener("click", function () {
    Settings.Cheats.VoreExp = !Settings.Cheats.VoreExp;
    DocId("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
});
DocId("CheatsFastTime").addEventListener("click", function () {
    Settings.Cheats.FastTime = !Settings.Cheats.FastTime;
    DocId("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
});
DocId("CloseCheatMenu").addEventListener("click", function () {
    DocId("CheatMenu").style.display = 'none';
    DisplayGame();
});