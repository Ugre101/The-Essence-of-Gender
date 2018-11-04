function CheckArousal() {
    var ee = enemies[EnemyIndex];
    var ImpregActions ={
        male : ["DoggyStyle","DoggyStyleAnal" , "Missionary"],
        female:["DoggyStyle","Missionary"]};
    if (ee.Arousal >= 100) {
        ee.Orgasm++;
        ee.SessionOrgasm++;
        ee.Arousal = 0;
        if (LastPressed == "RideCowgirl" && !player.Pregnant.Status) {
            Impregnate(player, ee, "B", "");
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

        if (ImpregActions.male.indexOf(LastPressed) != -1) {

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
        if (ImpregActions.female.indexOf(LastPressed) != -1) {
            document.getElementById("SexText").innerHTML = "Feeling yourself getting close, you push yourself as deep as you can into them."
            if (player.Balls.length > 0) {
                var Cum = 0;
                for (var b = 0; b < player.Balls.length; b++) {
                    Cum += player.Balls[b].Cum / 10;
                    player.Balls[b].Cum -= player.Balls[b].Cum / 10;
                }
                Cum = Math.round((Cum / 1000) * 100) / 100;
				if(Cum < 1)
					document.getElementById("SexText").innerHTML += "<br>You release " + Cum*1000 + "mL of cum into their pussy.";
				else
					document.getElementById("SexText").innerHTML += "<br>You release " + Cum + "L of cum into their pussy.";
            }
        }
        AfterBattleButtons();
        CheckArousal();
    }

    document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + PussyLook(player) + DickLook(player);
    if (player.Pregnant.Babies.length > 0) {
        var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        if (age < 1) {
            age = "Impregnated";
        } else {
            age = age + " months pregnant";
        }
        document.getElementById("PlayerLooks").innerHTML += "<br>" + age;
    }
    document.getElementById("EnemyLooks").innerHTML = BoobLook(ee) + PussyLook(ee) + DickLook(ee);
    if (ee.hasOwnProperty("Pregnant")) {
        if (ee.Pregnant.Status) {
            document.getElementById("EnemyLooks").innerHTML += "<br>Pregnant";
        }
    }


    var PlayerMaxOrgasm = Math.round(player.End / 8);
    SexAttack = Math.round((RandomInt(4, 7) * player.SexSkill) / 2);
    ESexAttack = Math.round((RandomInt(4, 7) * enemies[EnemyIndex].SexSkill) / 2);
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
    if (ee.Orgasm > 0) {
        document.getElementById("EnemyOrgasm").style.display = 'block';
        document.getElementById("EnemyOrgasm").innerHTML = "Enemy have orgasmed: " + ee.Orgasm + " times";
    } else {
        document.getElementById("EnemyOrgasm").style.display = 'none';
    }
    if (player.Orgasm > 0) {
        document.getElementById("PlayerOrgasm").style.display = 'block';
        document.getElementById("PlayerOrgasm").innerHTML = "You have orgasmed: " + player.Orgasm + " times"
    } else {
        document.getElementById("PlayerOrgasm").style.display = 'none';
    }
    if (player.SessionOrgasm > 0) {
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
        return;
    }
}