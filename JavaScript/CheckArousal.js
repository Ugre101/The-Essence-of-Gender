function CheckArousal() {
    var ee = enemies[EnemyIndex];
    var ImpregActions = ["DoggyStyle", "DoggyStyleAnal", "Missionary"];
    if (ee.Arousal >= 100) {
        ee.Orgasm++;
        ee.SessionOrgasm++;
        ee.Arousal = 0;
        if (LastPressed == "RideCowgirl" && !player.Pregnant.Status) {
            Impregnate(player, ee, "B", "");
        }
        if (LastPressed == "GiveBlowjob") {
            var cum = Cumming(ee);
            document.getElementById("SexText").innerHTML += "<br>Reading their body language, you know they are close to cumming."
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += " You swallow " + cum + "L of their cum."
            } else document.getElementById("SexText").innerHTML += " Nothing comes out, as they're already drained."
        } else if (LastPressed == "RideCowgirl") {
            var cum = Cumming(ee);
            document.getElementById("SexText").innerHTML += "<br>Reading their body language, you know they are close to cumming."
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += " Pulling them deep inside you, they release " + cum + "L of cum into your pussy."
            } else document.getElementById("SexText").innerHTML += " Nothing comes out, as they're already drained."
        }
    }
    if (player.Arousal > 100) {
        player.Orgasm++;
        player.Arousal = 0;
        player.SessionOrgasm++;
        switch (Settings.GiveEssence) {
            case "Both":
                ee.Masc += Math.round(player.GiveEssence / 2);
                ee.Femi += Math.round(player.GiveEssence / 2);
                break;
            case "Masculinity":
                ee.Masc += Math.round(player.GiveEssence);
                break;
            case "Femininity":
                ee.Femi += Math.round(player.GiveEssence);
                break;
            case "None":
                break;
        }
        EssenceCheck(ee);

        if (ImpregActions.indexOf(LastPressed) != -1) {
            if (!ee.hasOwnProperty("Pregnant")) {
                ee.Pregnant = {}
                ee.Pregnant.Status = false;
            } else if (!ee.Pregnant.Status) {
                for (var b = 0; b < player.Balls.length; b++) {
                    if (player.Balls[b].Cum > 10) {
                        Impregnate(ee, player, "A", "");
                        player.Balls[b].Cum -= 10;
                    }
                }
            }
        }
        if (LastPressed == "GetBlowjob") {
            var cum = Cumming(player);
            document.getElementById("SexText").innerHTML += "<br>Feeling close, you grab their head and push your dick deeper down their throat, cumming " + cum + "L into their stomach."
            ee.Cumin.Stomach += cum;
            if (ee.Cumin.Stomach > (ee.Height / 100) * 2) {
                document.getElementById("SexText").innerHTML += " Their stomach is overfilled with your cum; as you pull out, your excess cum follows."
            } else if (ee.Cumin.Stomach > ee.Height / 100) {
                document.getElementById("SexText").innerHTML += " Their stomach bulges visibly, filled with your cum."
            }
        } else if (LastPressed == "Missionary") {
            var cum = Cumming(player);
            document.getElementById("SexText").innerHTML += "<br>Feeling close you thrust deep";
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += ", releasing " + cum + "L of cum into their pussy."
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out."
        } else if (LastPressed == "DoggyStyle") {
            var cum = Cumming(player);
            document.getElementById("SexText").innerHTML += "<br>Feeling close you thrust deep into their pussy"
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += ", releasing " + cum + "L of cum into their pussy."
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out."
        } else if (LastPressed == "DoggyStyleAnal") {
            var cum = Cumming(player);
            document.getElementById("SexText").innerHTML += "<br>Feeling close you thrust deep into their bowels"
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += ", releasing " + cum + "L of cum into their bowels."
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out."
        }
        AfterBattleButtons();
        CheckArousal();
    }

    document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player);
    if (player.Pregnant.Babies.length > 0) {
        var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        if (age < 1) {
            age = "Impregnated";
        } else {
            age = age + " months pregnant";
        }
        document.getElementById("PlayerLooks").innerHTML += "<br>" + age;
    }
    document.getElementById("EnemyLooks").innerHTML = BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee);
    if (ee.hasOwnProperty("Pregnant")) {
        if (ee.Pregnant.Status) {
            document.getElementById("EnemyLooks").innerHTML += "<br>Pregnant";
        }
    }


    var PlayerMaxOrgasm = Math.round(player.End / 8);
    BaseSexAttack = Math.round((RandomInt(4, 7) * player.SexSkill) / 2);
    BaseESexAttack = Math.round((RandomInt(4, 7) * enemies[EnemyIndex].SexSkill) / 2);
    SexAttack = Math.min(RandomInt(45, 77), BaseSexAttack * (BaseSexAttack / BaseESexAttack));
    ESexAttack = Math.max(RandomInt(15, 32), BaseESexAttack * (BaseESexAttack / BaseSexAttack));


    document.getElementById("PName").innerHTML = player.Name + " " + player.Lastname + "<br>" + player.Race + " " + Pronun(CheckGender(player));
    document.getElementById("EName").innerHTML = " " + ee.FirstName + " " + ee.LastName + "<br>" + ee.Name + " " + ee.Race + " " + Pronun(CheckGender(ee));
    document.getElementById("Mascu").innerHTML = Math.round(player.Masc);
    document.getElementById("Femin").innerHTML = Math.round(player.Femi);
    document.getElementById("PArousal").innerHTML = Math.round(player.Arousal);
    document.getElementById("EMascu").innerHTML = ee.Masc;
    document.getElementById("EFemin").innerHTML = ee.Femi;
    document.getElementById("EArousal").innerHTML = Math.round(ee.Arousal);
    var DelatMed = 2;
    if (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) {
        DelatMed = 100 / player.Masc;
    } else if (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) {
        DelatMed = 100 / player.Femi;
    } else if (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) {
        DelatMed = 100 / ee.Masc;
    } else {
        DelatMed = 100 / ee.Femi;
    }

    document.getElementById("Mascu").style.width = player.Masc * DelatMed + "%";
    document.getElementById("Femin").style.width = player.Femi * DelatMed + "%";
    document.getElementById("PArousal").style.width = Math.max(1, player.Arousal) + "%";
    document.getElementById("EMascu").style.width = ee.Masc * DelatMed + "%";
    document.getElementById("EFemin").style.width = ee.Femi * DelatMed + "%";
    document.getElementById("EArousal").style.width = Math.max(1, ee.Arousal) + "%";


    document.getElementById("SexStats").innerHTML = " ";
    document.getElementById("EnemyOrgasm").style.display = 'block';
    document.getElementById("EnemyOrgasm").innerHTML = ee.Orgasm;
    document.getElementById("PlayerOrgasm").style.display = 'block';
    document.getElementById("PlayerOrgasm").innerHTML = player.Orgasm;

    if (player.SessionOrgasm > 0 && player.Perks.GiveEssence.Count > 0) {
        document.getElementById("InjectMenu").style.display = 'block';
    } else {
        document.getElementById("InjectMenu").style.display = 'none';
    }
    if (enemies[EnemyIndex].SessionOrgasm > 0) {
        document.getElementById("DrainMenu").style.display = 'block';
    } else {
        document.getElementById("DrainMenu").style.display = 'none';
    }
    SexColor(player, "Player");
    SexColor(ee, "Enemy");
    if (PlayerMaxOrgasm <= player.Orgasm) {
        document.getElementById("EnemyVagina").style.display = 'none';
        document.getElementById("EnemyDick").style.display = 'none';
        document.getElementById("PlayerVagina").style.display = 'none';
        document.getElementById("PlayerDick").style.display = 'none';
        document.getElementById("Anal").style.display = 'none';
        document.getElementById("Breast").style.display = 'none';
        return;
    }
}

function Cumming(who) {
    if (who.Balls.length > 0) {
        var Cum = 0;
        for (var b = 0; b < who.Balls.length; b++) {
            Cum += Math.min(who.Balls[b].Cum, Math.max(100, who.Balls[b].Cum / 8));
            who.Balls[b].Cum -= Math.min(who.Balls[b].Cum, Math.max(100, who.Balls[b].Cum / 8));
        }
        Cum = Math.round((Cum / 1000) * 100) / 100;
        return Cum;
    }
}

document.getElementById("EnemySex").addEventListener("mouseover", function () {
    var ee = enemies[EnemyIndex];
    document.getElementById("SexStats").innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
});
document.getElementById("EnemySex").addEventListener("mouseout", function () {
    document.getElementById("SexStats").innerHTML = " ";
});