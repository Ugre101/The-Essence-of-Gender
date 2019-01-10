function WinBattle() {
    var ee = enemies[EnemyIndex];
    Winner = true;
    player.Exp += ee.Exp;
    player.Gold += ee.Gold;
    ee.SessionOrgasm = 0;
    player.SessionOrgasm = 0;
    document.getElementById("Encounter").style.display = 'none';
    CombatQuests(ee);
    //WinEnemyChanges(ee);
    DropSystem(ee);
    if (Settings.Skip) {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
    } else if (Dungeon) {
        if (Wave == 4 && false) {
            document.getElementById("DungeonSystem").style.display = 'block';
            document.getElementById("DungeonText").innerHTML = "What should you do with her?";
            document.getElementById("DungeonButtons").innerHTML = "<input type=\"button\" id=\"Partner\" value=\"Take her as a equal.\">" +
                "<input type=\"button\" id=\"MakeSubmit\" value=\"Make her understand her place.\" >";
        } else {
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
            AfterBattleButtons();
        }
    } else {
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
        // No sex with animals (yet??) #Moved it to afterbattlebutton so it can be easier expanded -Ugre
        if (enemies[EnemyIndex].Name === "Feral") {
            AfterBattleButtons(false);
        } else {
            AfterBattleButtons();
        }
    }
}

// Handles quests related to combat
function CombatQuests(ee) {
    for (var i = 0; i < player.Quests.length; i++) {
        if (player.Quests[i].Name === "ElfHunt") {
            if (ee.Race == "Elf") {
                player.Quests[i].Count++;
                if (player.Quests[i].Count >= 3) {
                    player.Quests[i].Completed = true;
                    if (player.Quests[i].Count % 3 == 0) {
                        if (!player.Quests[i].hasOwnProperty("Tier")) {
                            player.Quests[i].Tier = 1
                        } else if (player.Quests[i].Tier < 5) {
                            player.Quests[i].Tier++;
                        }
                    }
                }
            }
        }
        if (player.Quests[i].Name === "BanditLord" && !player.Quests[i].Completed) {
            if (ee.Name === "Banditlord") {
                player.Quests[i].Completed = true;
            }
        }
    }
}

// Some enemies change when you win
function WinEnemyChanges(ee) {
    if (ee.Race == "Dragon") {
        ee.Race == "Anthro dragon";
    }
}