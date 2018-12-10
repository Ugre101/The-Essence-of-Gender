function CheckArousal() {
    var ee = enemies[EnemyIndex];
    if (ee.Arousal >= 100) {
        ee.Orgasm++;
        ee.SessionOrgasm++;
        ee.Arousal = 0;
        if (LastPressed == "RideCowgirl" && !player.Pregnant.Status) {
            Impregnate(player, ee, "B", "");
        }
        if (LastPressed == "GiveBlowjob") {
            var cum = Cumming(ee);
            document.getElementById("SexText").innerHTML = "Your opponent’s grip on your head tightens as they start humping you mouth in earnest. You gladly oblige their request starting to deepthroat them to the base of their cock. Their rhythm starts to falter as you push their cock to the back of your throat." +
                " You push your head deep into their crotch as they make one last desperate thrust"
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += ", depositing " + LToGal(cum) + " deep into your gullet."
            } else document.getElementById("SexText").innerHTML += "."
            document.getElementById("SexText").innerHTML += "Your opponent takes deep breathes as they lie completely spent. You rise from between their legs admiring your work and begin to plan your next move."
        } else if (LastPressed == "RideCowgirl") {
            var cum = Cumming(ee);
            document.getElementById("SexText").innerHTML += "<br>Reading their body language, you know they are close to cumming."
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += " Pulling them deep inside you, they release " + LToGal(cum) + " of cum into your pussy."
            } else document.getElementById("SexText").innerHTML += " Nothing comes out, as they're already drained."
        } else if (LastPressed == "GiveCunnilingus") {
            document.getElementById("SexText").innerHTML += "<br>Reading their body language, you know they are close to cumming. Shoving your tongue as deep as you can into them, your face gets splashed with their nectar."
        } else if (false) document.getElementById("SexText").innerHTML += " Nothing comes out, as they're already drained."
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
        var ImpregActions = ["DoggyStyle", "Missionary", "DualPen", "MultiPen"];
        var AnalImpregActions = ["DoggyStyleAnal"]
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
        } else if (AnalImpregActions.indexOf(LastPressed) != -1 && player.Blessings.MountainShrine.Malepreg > 0) {
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
            document.getElementById("SexText").innerHTML = "You reach down and grab your opponent’s head, giving a bestial grunt as you approach your climax. You ram your cock as far as you can into " + enemies[EnemyIndex].FirstName + "'s throat."
            if (player.Balls.length > 0) {
                document.getElementById("SexText").innerHTML += "Your balls tense up as you pump your " + LToGal(cum) + " load down their gullet, thrusting erratically, holding your opponent tight as you empty your sac into them. You bend over their head, making small jabs into their mouth as each wave of cum is sent to their stomach."
            }
            document.getElementById("SexText").innerHTML += "You stand there for a while, enjoying your afterglow, before you pull out, causing your opponent to fall over, gasping for air. You smile deviously as you ponder how you should use them next.";
            ee.Cumin.Stomach += cum;
            if (ee.Cumin.Stomach > (ee.Height / 100) * 2) {
                document.getElementById("SexText").innerHTML += "<br><br> Their stomach is overflowing with your cum; as you pull out, your excess cum follows.";
                player.cumGround += ee.Cumin.Stomach - (ee.Height / 100) * 2;
                ee.Cumin.Stomach = (ee.Height / 100) * 2;
            } else if (ee.Cumin.Stomach > ee.Height / 100) {
                document.getElementById("SexText").innerHTML += "<br><br> Their stomach bulges visibly, filled with your cum."
            }
        } else if (LastPressed == "Missionary") {
            var cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            document.getElementById("SexText").innerHTML = "<br>Feeling close you thrust deep inside them";
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    document.getElementById("SexText").innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    document.getElementById("SexText").innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out of your dick."
        } else if (LastPressed == "DoggyStyle") {
            var cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            document.getElementById("SexText").innerHTML = "<br>Feeling close, you firmly grab their hips, and thrust deep into their pussy"
            if (cum > 0) {
                document.getElementById("SexText").innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    document.getElementById("SexText").innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    document.getElementById("SexText").innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out."
        } else if (LastPressed == "DoggyStyleAnal") {
            var cum = Cumming(player);
            document.getElementById("SexText").innerHTML = "<br>Feeling close, you firmly grab their waist, and thrust deep into their bowels"
            if (cum > 0) {
                ee.Cumin.Ass += cum;
                document.getElementById("SexText").innerHTML += ", releasing " + LToGal(cum) + " of cum into their ass."
                if (ee.Cumin.Ass > (ee.Height / 50)) {
                    document.getElementById("SexText").innerHTML += "<br><br> Their ass is overflowing with your cum; as you pull out, your excess seed leaks out."
                    player.cumGround += ee.Cumin.Ass - ee.Height / 50;
                    ee.Cumin.Ass = ee.Height / 50;
                } else if (ee.Cumin.Stomach > ee.Height / 100) {
                    document.getElementById("SexText").innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            }
        } else if (false) {
            document.getElementById("SexText").innerHTML += ", but nothing comes out."
        }
        if (player.cumGround > 20000)
            document.getElementById("SexText").innerHTML += "<br><br>Your opponent is caked white and heavily panting, cum still flowing out of their overfilled holes. Your extreme output has covered them, and all of the ground nearby, in your semen. You're glad that you don't have to clean this up..."
        else if (player.cumGround > 5000)
            document.getElementById("SexText").innerHTML += "<br><br>You've covered your (ex-)opponent in your cum, and left a sizable puddle underneath them. They're still dripping..."
        else if (player.cumGround > 500)
            document.getElementById("SexText").innerHTML += "<br><br>You've made quite a mess; they weren't able to handle your output, and have been covered in what their body couldn't handle."
        else if (player.cumGround > 0)
            document.getElementById("SexText").innerHTML += "<br><br>Their body bulges with your load, but it's not enough - what they couldn't keep inside, they're now wearing outside."
        AfterBattleButtons();
        CheckArousal();
    }
    if (window.innerHeight > 800) {
        document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player);
        document.getElementById("EnemyLooks").innerHTML = BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee);
    } else {
        document.getElementById("PlayerLooks").innerHTML = "";
        document.getElementById("EnemyLooks").innerHTML = "";
    }
    if (player.Pregnant.Babies.length > 0) {
        var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        if (age < 1) {
            age = "Impregnated";
        } else {
            age = age + " months pregnant";
        }
        document.getElementById("PlayerLooks").innerHTML += "<br>" + age;
    }
    if (ee.hasOwnProperty("Pregnant")) {
        if (ee.Pregnant.Status) {
            document.getElementById("EnemyLooks").innerHTML += "<br>Pregnant";
        }
    }


    BaseSexAttack = Math.round((RandomInt(4, 7) * player.SexSkill) / 2);
    BaseESexAttack = Math.round((RandomInt(4, 7) * enemies[EnemyIndex].SexSkill) / 2);
    SexAttack = Math.min(RandomInt(45, 77), BaseSexAttack * (BaseSexAttack / BaseESexAttack));
    ESexAttack = Math.max(RandomInt(15, 32), BaseESexAttack * (BaseESexAttack / BaseSexAttack));


    document.getElementById("PName").innerHTML = player.Name + " " + player.LastName + "<br>" + player.Race + " " + Pronoun(CheckGender(player));
    document.getElementById("EName").innerHTML = " " + ee.FirstName + " " + ee.LastName + "<br>" + ee.Name + " " + ee.Race + " " + Pronoun(CheckGender(ee));
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
    var PlayerMaxOrgasm = Math.round(player.End / 8);
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
            Cum += Math.min(who.Balls[b].Cum, Math.max(10, who.Balls[b].Cum / 8));
            who.Balls[b].Cum -= Math.min(who.Balls[b].Cum, Math.max(100, who.Balls[b].Cum / 8));
        }
        Cum = Math.round((Cum / 1000) * 100) / 100;
        return Cum;
    }
}

document.getElementById("EnemySex").addEventListener("click", function () {
    console.log(document.getElementById("EnemyKinda").style.display)
    console.log(document.getElementById("EnemyKinda").style.display == 'none')
    if (document.getElementById("EnemyKinda").style.display == 'none') {
        document.getElementById("SexStats").innerHTML = " ";
        document.getElementById("EnemyKinda").style.display = 'block';
        document.getElementById("EnemyExact").style.display = 'none';
        document.getElementById("EnemyExact").innerHTML = "";
    } else {
        var ee = enemies[EnemyIndex];
        document.getElementById("SexStats").innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
        document.getElementById("EnemyKinda").style.display = 'none';
        document.getElementById("EnemyExact").style.display = 'block';
        document.getElementById("EnemyExact").innerHTML = "<p>" + ExactBoobLook(ee) + ExactPussyLook(ee) + ExactDickLook(ee) + ExactBallLook(ee) +
            "</p>";
    }
});
document.getElementById("EnemySex").addEventListener("mouseenter", function () {
    var ee = enemies[EnemyIndex];
    document.getElementById("SexStats").innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
    document.getElementById("EnemyKinda").style.display = 'none';
    document.getElementById("EnemyExact").style.display = 'block';
    document.getElementById("EnemyExact").innerHTML = "<p>" + ExactBoobLook(ee) + ExactPussyLook(ee) + ExactDickLook(ee) + ExactBallLook(ee) +
        "</p>";
});
document.getElementById("EnemySex").addEventListener("mouseleave", function () {
    document.getElementById("SexStats").innerHTML = " ";
    document.getElementById("EnemyKinda").style.display = 'block';
    document.getElementById("EnemyExact").style.display = 'none';
    document.getElementById("EnemyExact").innerHTML = "";
});
document.getElementById("PlayerSex").addEventListener("click", function () {
    if (document.getElementById("playerKinda").style.display == 'none') {
        document.getElementById("playerKinda").style.display = 'block';
        document.getElementById("playerExact").style.display = 'none';
        document.getElementById("playerExact").innerHTML = "";
    } else {
        document.getElementById("playerKinda").style.display = 'none';
        document.getElementById("playerExact").style.display = 'block';
        document.getElementById("playerExact").innerHTML = "<p>" + ExactBoobLook(player) + ExactPussyLook(player) + ExactDickLook(player) + ExactBallLook(player) +
            "</p>";
    }
});
document.getElementById("PlayerSex").addEventListener("mouseenter", function () {
    document.getElementById("playerKinda").style.display = 'none';
    document.getElementById("playerExact").style.display = 'block';
    document.getElementById("playerExact").innerHTML = "<p>" + ExactBoobLook(player) + ExactPussyLook(player) + ExactDickLook(player) + ExactBallLook(player) +
        "</p>";
});
document.getElementById("PlayerSex").addEventListener("mouseleave", function () {
    document.getElementById("playerKinda").style.display = 'block';
    document.getElementById("playerExact").style.display = 'none';
    document.getElementById("playerExact").innerHTML = "";
});