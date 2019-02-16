function WinBattle() {
    var ee = enemies[EnemyIndex];
    player.Exp += ee.Exp;
    player.Gold += ee.Gold;
    ee.SessionOrgasm = 0;
    player.SessionOrgasm = 0;
    CombatQuests(ee);
    //WinEnemyChanges(ee);
    DropSystem(ee);
    document.getElementById("Encounter").style.display = 'none';
    if (Settings.Skip) {
        DisplayGame();
    } else if (false) { // Replace with ee.Name === "specific name"
        document.getElementById("DungeonSystem").style.display = 'block';
        document.getElementById("DungeonText").innerHTML = "What should you do with her?";
        document.getElementById("DungeonButtons").innerHTML = "<input type=\"button\" id=\"Partner\" value=\"Take her as a equal.\">" +
            "<input type=\"button\" id=\"MakeSubmit\" value=\"Make her understand her place.\" >";
    } else {
        SetupSex(ee);
    }
}

function SetupSex(ee) {
    document.getElementById("SexText").innerHTML = HeightSystem(player, ee);
    document.getElementById("AfterBattle").style.display = 'grid';
    document.getElementById("SexButtons").style.display = 'grid';
    if (Settings.ImgPack) {
        document.getElementById("AfterBattle").classList.remove("AfterBattle");
        document.getElementById("AfterBattle").classList.add("AfterBattleImg");
        document.getElementById("MyImg").style.display = 'block';

    } else {
        document.getElementById("AfterBattle").classList.add("AfterBattle");
        document.getElementById("AfterBattle").classList.remove("AfterBattleImg");
        document.getElementById("MyImg").style.display = 'none';
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