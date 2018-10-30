function Lose() {
    Winner = false;
    document.getElementById("LosePName").innerHTML = player.Name + " " + player.Lastname;
    document.getElementById("LoseEName").innerHTML = enemies[EnemyIndex].Name + "<br>" + enemies[EnemyIndex].Race + " " + Pronun(CheckGender(enemies[EnemyIndex]));
    document.getElementById("LoseMascu").innerHTML = Math.round(player.Masc);
    document.getElementById("LoseFemin").innerHTML = Math.round(player.Femi);
    document.getElementById("LoseEMascu").innerHTML = enemies[EnemyIndex].Masc;
    document.getElementById("LoseEFemin").innerHTML = enemies[EnemyIndex].Femi;
    SexColor(player, "PlayerLose");
    SexColor(enemies[EnemyIndex], "EnemyLose");
    var DelatMed = 2;
    if (player.Masc >= enemies[EnemyIndex].Masc && player.Masc >= enemies[EnemyIndex].Femi && player.Masc >= player.Femi) {
        DelatMed = 100 / player.Masc;
    } else if (player.Femi >= enemies[EnemyIndex].Masc && player.Femi >= enemies[EnemyIndex].Femi && player.Femi >= player.Masc) {
        DelatMed = 100 / player.Femi;
    } else if (enemies[EnemyIndex].Masc >= player.Masc && enemies[EnemyIndex].Masc >= enemies[EnemyIndex].Femi && enemies[EnemyIndex].Masc >= player.Femi) {
        DelatMed = 100 / enemies[EnemyIndex].Masc;
    } else {
        DelatMed = 100 / enemies[EnemyIndex].Femi;
    }

    document.getElementById("LoseMascu").style.width = player.Masc * DelatMed + "%";
    document.getElementById("LoseFemin").style.width = player.Femi * DelatMed + "%";
    document.getElementById("LoseEMascu").style.width = enemies[EnemyIndex].Masc * DelatMed + "%";
    document.getElementById("LoseEFemin").style.width = enemies[EnemyIndex].Femi * DelatMed + "%";

    document.getElementById("Encounter").style.display = 'none';
    document.getElementById("Lose").style.display = 'grid';
    document.getElementById("LeaveLose").style.display = 'none';
    document.getElementById("LoseSexText").innerHTML = "You lost to a " + Pronun(CheckGender(enemies[EnemyIndex])) + " " + enemies[EnemyIndex].Race + " " + enemies[EnemyIndex].Name;
    return;
}
document.getElementById("LoseSubmit").addEventListener("click", function () {
    document.getElementById("LoseSexText").innerHTML = "You submit";
    var a = RandomInt(1, 5);
    var take = Math.round(enemies[EnemyIndex].SexSkill);
    switch (a) {
        case 1:
        case 4:
            if ((player.Masc - take) <= 0) {
                player.Masc = 0;
            } else {
                player.Masc -= take;
            }
            document.getElementById("LosePlayerOrgasm").innerHTML = "They fucked you until you had an orgasm, allowing them to siphon " + take + " maculinity.";
            break;
        case 2:
        case 5:
            if ((player.Femi - take) <= 0) {
                player.Femi = 0;
            } else {
                player.Femi -= take;
            }
            document.getElementById("LosePlayerOrgasm").innerHTML = "They fucked you until you had an orgasm, allowing them to siphon " + take + " femininity.";
            break;
        default:
        case 3:
            if ((player.Femi - take / 2) <= 0) {
                player.Femi = 0;
            } else {
                player.Femi -= Math.round(take / 2);
            }
            if ((player.Masc - take) <= 0) {
                player.Masc = 0;
            } else {
                player.Masc -= Math.round(take / 2);
                document.getElementById("LosePlayerOrgasm").innerHTML = "They fucked you until you had an orgasm, allowing them to siphon " + take / 2 + " femininity and maculinity.";
            }
            break;
    }
    switch (CheckGender(enemies[EnemyIndex])) {
        case "hermaphrodite":
        case "male":
            Impregnate(player, enemies[EnemyIndex], "B", "");
            break;
        default:
            break;
    }
    Lose();
    document.getElementById("LoseStruggle").style.display = 'none';
    document.getElementById("LoseSubmit").style.display = 'none';
    document.getElementById("LeaveLose").style.display = 'inline-block';
});
document.getElementById("LoseStruggle").addEventListener("click", function () {
    document.getElementById("LoseSexText").innerHTML = "You struggle";
    var a = RandomInt(1, 5);
    var take = Math.round((RandomInt(1, 4) * enemies[EnemyIndex].SexSkill) / 3);
    switch (a) {
        case 1:
        case 4:
            if ((player.Masc - take) <= 0) {
                player.Masc = 0;
            } else {
                player.Masc -= take;
            }
            document.getElementById("LosePlayerOrgasm").innerHTML = "They fucked you until you had an orgasm, allowing them to siphon " + take + " maculinity.";
            break;
        case 2:
        case 5:
            if ((player.Femi - take) <= 0) {
                player.Femi = 0;
            } else {
                player.Femi -= take;
            }
            document.getElementById("LosePlayerOrgasm").innerHTML = "They fucked you until you had an orgasm, allowing them to siphon " + take + " femininity.";
            break;
        default:
        case 3:
            if ((player.Femi - take / 2) <= 0) {
                player.Femi = 0;
            } else {
                player.Femi -= Math.round(take / 2);
            }
            if ((player.Masc - take) <= 0) {
                player.Masc = 0;
            } else {
                player.Masc -= Math.round(take / 2);
            }
            document.getElementById("LosePlayerOrgasm").innerHTML = "They fucked you until you had an orgasm, allowing them to siphon " + take / 2 + " femininity and maculinity.";
            break;
    }
    switch (CheckGender(enemies[EnemyIndex])) {
        case "hermaphrodite":
        case "male":
            Impregnate(player, enemies[EnemyIndex], "B", "");
            break;
        default:
            break;
    }
    Lose();
    document.getElementById("LoseStruggle").style.display = 'none';
    document.getElementById("LoseSubmit").style.display = 'none';
    document.getElementById("LeaveLose").style.display = 'inline-block';
})
document.getElementById("LeaveLose").addEventListener("click", function () {
    battle = false;
    document.getElementById("Lose").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("LoseStruggle").style.display = 'inline-block';
    document.getElementById("LoseSubmit").style.display = 'inline-block';
    document.getElementById("LosePlayerOrgasm").innerHTML = " ";
});