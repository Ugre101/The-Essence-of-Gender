function UpdateStats() {
    var ee = enemies[EnemyIndex];
    document.getElementById("BattleEnemy").innerHTML = ee.Name + "<br>" + ee.Race + " " + Pronun(CheckGender(ee));
    document.getElementById("EnemyStatusHealth").innerHTML = ee.Health;
    document.getElementById("EnemyStatusHealth").style.width = 100 * (ee.Health / ee.FullHealth) + "%";
    document.getElementById("EnemyStatusWillHealth").innerHTML = ee.WillHealth;
    document.getElementById("EnemyStatusWillHealth").style.width = 100 * (ee.WillHealth / ee.FullWillHealth) + "%";
    document.getElementById("StatusName2").innerHTML = player.Name + " " + player.Lastname;

    document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
    if (player.Health <= player.MaxHealth) {
        document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
    } else {
        document.getElementById("StatusHealth2").style.width = 103 + "%";
    }
    document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
    if (player.WillHealth <= player.MaxWillHealth) {
        document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
    } else {
        document.getElementById("StatusWillHealth2").style.width = 103 + "%";
    }

    if (ee.Health <= 0) {
        WinBattle();
        Teased = false;
        return;
    } else if (ee.WillHealth <= 0) {
        Teased = true;
        WinBattle();
        return;
    } else if (player.Health <= 0) {
        Lose();
        player.Health = 0;
        return;
    } else if (player.WillHealth <= 0) {
        Lose();
        player.WillHealth = 0;
        return;
    } else if (!FirstRound) {
        EnemyAttack();
        return;
    } else {
        FirstRound = false;
        return;
    }
}
var Teased = false;

function EnemyAttack() {
    var ee = enemies[EnemyIndex];
    if (ee.Str >= ee.Charm) {
        var EAttack = (RandomInt(1, 5) * ee.Str) / 2;
        player.Health -= EAttack;
        document.getElementById("BattleText2").innerHTML = "Your opponent hits you for " + EAttack + " dmg.";
        document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
        if (player.Health <= player.MaxHealth) {
            document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
        } else {
            document.getElementById("StatusHealth2").style.width = 103 + "%";
        }
        document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
        if (player.WillHealth <= player.MaxWillHealth) {
            document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
        } else {
            document.getElementById("StatusWillHealth2").style.width = 103 + "%";
        }
        if (player.Health <= EAttack) {
            UpdateStats();
            return;
        }
        return;
    } else if (ee.Str < ee.Charm) {
        var EAttack = (RandomInt(1, 5) * ee.Charm) / 2;
        player.WillHealth -= EAttack;
        document.getElementById("BattleText2").innerHTML = "Your opponent teased you for " + EAttack + " will dmg.";
        document.getElementById("StatusHealth2").innerHTML = Math.round(player.Health);
        if (player.Health <= player.MaxHealth) {
            document.getElementById("StatusHealth2").style.width = 100 * (player.Health / player.MaxHealth) + "%";
        } else {
            document.getElementById("StatusHealth2").style.width = 103 + "%";
        }
        document.getElementById("StatusWillHealth2").innerHTML = Math.round(player.WillHealth);
        if (player.WillHealth <= player.MaxWillHealth) {
            document.getElementById("StatusWillHealth2").style.width = 100 * (player.WillHealth / player.MaxWillHealth) + "%";
        } else {
            document.getElementById("StatusWillHealth2").style.width = 103 + "%";
        }
        if (player.WillHealth <= EAttack) {
            UpdateStats();
            return;
        }
        return;
    }
}
// Battle attack buttons
document.getElementById("Hit").addEventListener("click", function () {
    var PAttack = (RandomInt(1, 5) * player.Str) / 2;
    enemies[EnemyIndex].Health -= PAttack;
    document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " dmg.";
    UpdateStats();
    return;
});

document.getElementById("Tease").addEventListener("click", function () {
    var PAttack = (RandomInt(1, 5) * player.Charm) / 2;
    enemies[EnemyIndex].WillHealth -= PAttack;
    document.getElementById("BattleText").innerHTML = "You dealt " + PAttack + " will dmg."
    UpdateStats();
    return;
});
document.getElementById("Surrender").addEventListener("click", function () {
    Lose();
});
document.getElementById("FleeBattle").addEventListener("click", function () {
    var a = RandomInt(1, 10);
    if (a > 7) {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("EventLog").style.display = 'block';
        document.getElementById("Encounter").style.display = 'none';
        document.getElementById("BattleText").innerHTML = "Success!"
    }
    UpdateStats();
    document.getElementById("BattleText").innerHTML = "You failed to get away."
});

// Function to call when battle is won
var SexAttack;
var ESexAttack;

function WinBattle() {
    var ee = enemies[EnemyIndex];
    FirstRound = true;
    Winner = true;
    player.Exp += ee.Exp;
    player.Gold += ee.Gold;
    ee.SessionOrgasm = 0;
    player.SessionOrgasm = 0;
    document.getElementById("Encounter").style.display = 'none';
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
        AfterBattleButtons();
    }
}