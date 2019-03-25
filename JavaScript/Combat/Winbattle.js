function WinBattle() {
    var ee = enemies[EnemyIndex];
    player.Exp += ee.Exp;
    player.Gold += ee.Gold;
    ee.SessionOrgasm = 0;
    player.SessionOrgasm = 0;
    CombatQuests(ee);
    //WinEnemyChanges(ee);
    DropSystem(ee);
    DocId("Encounter").style.display = 'none';
    if (Settings.Skip) {
        DisplayGame();
    } else if (false) { // Replace with ee.Name === "specific name"
        DocId("DungeonSystem").style.display = 'block';
        DocId("DungeonText").innerHTML = "What should you do with her?";
        DocId("DungeonButtons").innerHTML = "<input type=\"button\" id=\"Partner\" value=\"Take her as a equal.\">" +
            "<input type=\"button\" id=\"MakeSubmit\" value=\"Make her understand her place.\" >";
    } else {
        SetupSex(ee);
    }
}

function SetupSex(ee) {
    DocId("SexText").innerHTML = HeightSystem(player, ee);
    DocId("AfterBattle").style.display = 'grid';
    DocId("SexButtons").style.display = 'grid';
    if (Settings.ImgPack) {
        DocId("AfterBattle").classList.remove("AfterBattle");
        DocId("AfterBattle").classList.add("AfterBattleImg");
        DocId("MyImg").style.display = 'block';

    } else {
        DocId("AfterBattle").classList.add("AfterBattle");
        DocId("AfterBattle").classList.remove("AfterBattleImg");
        DocId("MyImg").style.display = 'none';
    }
    CheckArousal();
    if (ee.Name === "Feral") {
        AfterBattleButtons(false);
    } else {
        AfterBattleButtons();
    }
}

// Handles quests related to combat
function CombatQuests(ee) {
    for (var q of player.Quests) {
        if (q.Name === "ElfHunt") {
            if (ee.Race === "Elf") {
                q.Count++;
                if (q.Count >= 3) {
                    q.Completed = true;
                    if (q.Count % 3 === 0) {
                        q.hasOwnProperty("Tier") ? q.Tier++ : q.Tier = 1;
                    }
                }
            }
        }
        if (q.Name === "BanditLord" && q.Completed === false) {
            if (ee.Name === "Banditlord") {
                q.Completed = true;
            }
        }
    }
}

// Some enemies change when you win
function WinEnemyChanges(ee) {
    if (ee.Race === "Dragon") {
        ee.Race = "Anthro dragon";
    }
}