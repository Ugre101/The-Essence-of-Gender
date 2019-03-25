function CheckArousal() {
    const ee = enemies[EnemyIndex],
        SexText = document.getElementById("SexText");
    if (ee.Arousal >= 100) {
        ee.Orgasm++;
        ee.SessionOrgasm++;
        ee.Arousal = 0;
        if (LastPressed == "RideCowgirl" && !player.Pregnant.Status) {
            Impregnate(player, ee, "B", "");
        }
        if (LastPressed == "GiveBlowjob") {
            const cum = Cumming(ee);
            SexText.innerHTML = "Your opponent’s grip on your head tightens as they start humping you mouth in earnest. You gladly oblige their request starting to deepthroat them to the base of their cock. Their rhythm starts to falter as you push their cock to the back of your throat." +
                " You push your head deep into their crotch as they make one last desperate thrust"
            SexText.innerHTML += cum > 0 ? ", depositing " + LToGal(cum) + " deep into your gullet." : "."
            SexText.innerHTML += "Your opponent takes deep breathes as they lie completely spent. You rise from between their legs admiring your work and begin to plan your next move."
        } else if (LastPressed == "RideCowgirl") {
            const cum = Cumming(ee);
            SexText.innerHTML += "<br>Reading their body language, you know they are close to cumming."
            SexText.innerHTML += cum > 0 ?
                " Pulling them deep inside you, they release " + LToGal(cum) + " of cum into your pussy." :
                " Nothing comes out, as they're already drained."
        } else if (LastPressed == "GiveCunnilingus") {
            SexText.innerHTML += "<br>Reading their body language, you know they are close to cumming. Shoving your tongue as deep as you can into them, your face gets splashed with their nectar."
        } else if (false) SexText.innerHTML += " Nothing comes out, as they're already drained."
    }
    if (player.Arousal >= 100) {
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
        const ImpregActions = ["DoggyStyle", "Missionary", "DualPen", "MultiPen"],
            AnalImpregActions = ["DoggyStyleAnal"];
        if (ImpregActions.indexOf(LastPressed) != -1) {
            if (!ee.hasOwnProperty("Pregnant")) {
                ee.Pregnant = {
                    Status: false
                }
            }
            if (!ee.Pregnant.Status) {
                for (let b of player.Balls) {
                    if (b.Cum > 10) {
                        Impregnate(ee, player);
                        b.Cum -= 10;
                    }
                }
            }
        } else if (AnalImpregActions.indexOf(LastPressed) != -1 && player.Blessings.MountainShrine.Malepreg > 0) {
            if (!ee.hasOwnProperty("Pregnant")) {
                ee.Pregnant = {
                    Status: false
                }
            }
            if (!ee.Pregnant.Status) {
                for (var b of player.Balls) {
                    if (b.Cum > 10) {
                        Impregnate(ee, player);
                        b.Cum -= 10;
                    }
                }
            }
        }
        if (LastPressed == "GetBlowjob") {
            const cum = Cumming(player);
            SexText.innerHTML = "You reach down and grab your opponent’s head, giving a bestial grunt as you approach your climax. You ram your cock as far as you can into " + enemies[EnemyIndex].FirstName + "'s throat."
            if (player.Balls.length > 0) {
                SexText.innerHTML += "Your balls tense up as you pump your " + LToGal(cum) + " load down their gullet, thrusting erratically, holding your opponent tight as you empty your sac into them. You bend over their head, making small jabs into their mouth as each wave of cum is sent to their stomach."
            }
            SexText.innerHTML += "You stand there for a while, enjoying your afterglow, before you pull out, causing your opponent to fall over, gasping for air. You smile deviously as you ponder how you should use them next.";
            ee.Cumin.Stomach += cum;
            if (ee.Cumin.Stomach > (ee.Height / 100) * 2) {
                SexText.innerHTML += "<br><br> Their stomach is overflowing with your cum; as you pull out, your excess cum follows.";
                player.cumGround += ee.Cumin.Stomach - (ee.Height / 100) * 2;
                ee.Cumin.Stomach = (ee.Height / 100) * 2;
            } else if (ee.Cumin.Stomach > ee.Height / 100) {
                SexText.innerHTML += "<br><br> Their stomach bulges visibly, filled with your cum."
            }
        } else if (LastPressed == "Missionary") {
            const cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            SexText.innerHTML = "<br>Feeling close you thrust deep inside them";
            if (cum > 0) {
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    SexText.innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else {
                SexText.innerHTML += ", but nothing comes out of your dick."
            }
        } else if (LastPressed == "DoggyStyle") {
            const cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            SexText.innerHTML = "<br>Feeling close, you firmly grab their hips, and thrust deep into their pussy"
            if (cum > 0) {
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    SexText.innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out."
        } else if (LastPressed == "DoggyStyleAnal") {
            const cum = Cumming(player);
            SexText.innerHTML = "<br>Feeling close, you firmly grab their waist, and thrust deep into their bowels"
            if (cum > 0) {
                ee.Cumin.Ass += cum;
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their ass."
                if (ee.Cumin.Ass > (ee.Height / 50)) {
                    SexText.innerHTML += "<br><br> Their ass is overflowing with your cum; as you pull out, your excess seed leaks out."
                    player.cumGround += ee.Cumin.Ass - ee.Height / 50;
                    ee.Cumin.Ass = ee.Height / 50;
                } else if (ee.Cumin.Stomach > ee.Height / 100) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            }
        } else if (false) {
            SexText.innerHTML += ", but nothing comes out."
        }
        SexText.innerHTML += (player.cumGround > 20000 ? // If 
            "<br><br>Your opponent is caked white and heavily panting, cum still flowing out of their overfilled holes. Your extreme output has covered them, and all of the ground nearby, in your semen. You're glad that you don't have to clean this up..." :
            player.cumGround > 5000 ? // if else
            "<br><br>You've covered your (ex-)opponent in your cum, and left a sizable puddle underneath them. They're still dripping..." :
            player.cumGround > 500 ?
            "<br><br>You've made quite a mess; they weren't able to handle your output, and have been covered in what their body couldn't handle." :
            player.cumGround > 0 ?
            "<br><br>Their body bulges with your load, but it's not enough - what they couldn't keep inside, they're now wearing outside." :
            "" // else
        )
        CheckArousal();
    }
    const PlayerLooks = document.getElementById("PlayerLooks"),
        EnemyLooks = document.getElementById("EnemyLooks");

    PlayerLooks.innerHTML = window.innerHeight > 800 ?
        BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player) : "";
    EnemyLooks.innerHTML = window.innerHeight > 800 ?
        BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee) : "";

    if (player.Pregnant.Babies.length > 0) {
        let age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        age < 0 ? age = "Impregnated" : age = age + " months pregnant";
        PlayerLooks.innerHTML += "<br>" + age;
    }
    if (ee.hasOwnProperty("Pregnant")) {
        if (ee.Pregnant.Status) {
            EnemyLooks.innerHTML += "<br>Pregnant";
        }
    }


    const BaseSexAttack = Math.round((RandomInt(4, 7) * player.SexSkill) / 2),
        BaseESexAttack = Math.round((RandomInt(4, 7) * enemies[EnemyIndex].SexSkill) / 2);
    // SexAttack is a global should probably change that, but how?
    SexAttack = Math.min(RandomInt(45, 77), BaseSexAttack * (BaseSexAttack / BaseESexAttack));
    ESexAttack = Math.max(RandomInt(15, 32), BaseESexAttack * (BaseESexAttack / BaseSexAttack));


    DocId("PName").innerHTML = `${player.Name} ${player.LastName}<br>${player.Race} ${Pronoun(CheckGender(player))}`;
    DocId("EName").innerHTML = `${ee.FirstName} ${ee.LastName}<br>${ee.Name} ${ee.Race} ${Pronoun(CheckGender(ee))}`;
    DocId("Mascu").innerHTML = Math.round(player.Masc);
    DocId("Femin").innerHTML = Math.round(player.Femi);
    DocId("PArousal").innerHTML = Math.round(player.Arousal);
    DocId("EMascu").innerHTML = ee.Masc;
    DocId("EFemin").innerHTML = ee.Femi;
    DocId("EArousal").innerHTML = Math.round(ee.Arousal);
    // Divide by bigest value amoung both player and enemy
    let DelatMed = (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) ?
        (100 / player.Masc) : (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) ?
        (100 / player.Femi) : (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) ?
        (100 / ee.Masc) : (100 / ee.Femi);

    DocId("Mascu").style.width = player.Masc * DelatMed + "%";
    DocId("Femin").style.width = player.Femi * DelatMed + "%";
    DocId("PArousal").style.width = Math.max(1, player.Arousal) + "%";
    DocId("EMascu").style.width = ee.Masc * DelatMed + "%";
    DocId("EFemin").style.width = ee.Femi * DelatMed + "%";
    DocId("EArousal").style.width = Math.max(1, ee.Arousal) + "%";

    DocId("SexStats").innerHTML = " ";
    DocId("EnemyOrgasm").style.display = 'block';
    DocId("EnemyOrgasm").innerHTML = ee.Orgasm;
    DocId("PlayerOrgasm").style.display = 'block';
    DocId("PlayerOrgasm").innerHTML = player.Orgasm;

    SexColor(player, "Player");
    SexColor(ee, "Enemy");
    AfterBattleButtons();
}

function Cumming(who) {
    if (who.Balls.length > 0) {
        let Cum = 0;
        for (let b of who.Balls) {
            Cum += Math.min(b.Cum, Math.max(10, b.Cum / 8));
            b.Cum -= Math.min(b.Cum, Math.max(100, b.Cum / 8));
        }
        Cum = Math.round((Cum / 1000) * 100) / 100;
        return Cum;
    }
}

function SexLooksExactAndKinda() { // A function to be able to enter a bunch of "local global consts"
    const EnemyKinda = DocId("EnemyKinda"),
        EnemyExact = DocId("EnemyExact"),
        SexStats = DocId("SexStats"),
        playerKinda = DocId("playerKinda"),
        playerExact = DocId("playerExact"),
        EnemySex = DocId("EnemySex"),
        PlayerSex = DocId("PlayerSex");
    EnemySex.addEventListener("click", function () {
        if (EnemyKinda.style.display == 'none') {
            SexStats.innerHTML = " ";
            EnemyKinda.style.display = 'block';
            EnemyExact.style.display = 'none';
            EnemyExact.innerHTML = "";
        } else {
            const ee = enemies[EnemyIndex];
            SexStats.innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
            EnemyKinda.style.display = 'none';
            EnemyExact.style.display = 'block';
            EnemyExact.innerHTML = `<p>${ExactBoobLook(ee)+ExactPussyLook(ee)+ExactDickLook(ee)+ExactBallLook(ee)}</p>`;
        }
    });
    EnemySex.addEventListener("mouseenter", function () {
        const ee = enemies[EnemyIndex];
        SexStats.innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
        EnemyKinda.style.display = 'none';
        EnemyExact.style.display = 'block';
        EnemyExact.innerHTML = `<p>${ExactBoobLook(ee) + ExactPussyLook(ee) + 
            ExactDickLook(ee) + ExactBallLook(ee)}</p>`;
    });
    EnemySex.addEventListener("mouseleave", function () {
        SexStats.innerHTML = " ";
        EnemyKinda.style.display = 'block';
        EnemyExact.style.display = 'none';
        EnemyExact.innerHTML = "";
    });
    PlayerSex.addEventListener("click", function () {
        if (playerKinda.style.display == 'none') {
            playerKinda.style.display = 'block';
            playerExact.style.display = 'none';
            playerExact.innerHTML = "";
        } else {
            playerKinda.style.display = 'none';
            playerExact.style.display = 'block';
            playerExact.innerHTML = `<p>${ExactBoobLook(player) + ExactPussyLook(player) + 
                ExactDickLook(player) + ExactBallLook(player)}</p>`
        }
    });
    PlayerSex.addEventListener("mouseenter", function () {
        playerKinda.style.display = 'none';
        playerExact.style.display = 'block';
        playerExact.innerHTML = `<p>${ExactBoobLook(player) + ExactPussyLook(player) + 
            ExactDickLook(player) + ExactBallLook(player)}</p>`
    });
    PlayerSex.addEventListener("mouseleave", function () {
        playerKinda.style.display = 'block';
        playerExact.style.display = 'none';
        playerExact.innerHTML = "";
    });
}
SexLooksExactAndKinda();