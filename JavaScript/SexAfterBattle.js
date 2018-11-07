
    var PRL;
    var RL;
    var LastPressed;
    // Mouth
    document.getElementById("GiveBlowjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GiveBlowjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 2
        player.Arousal += ESexAttack / 3;
        if (LastPressed == "GiveBlowjob") {
            document.getElementById("SexText").innerHTML = "You suck your opponent's " + enemies[EnemyIndex].Dicks[RL].Type + " " + enemies[EnemyIndex].Dicks[RL].Size + "cm dick.";
        } else {
            RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "You go down on your knees you and suck your opponent's " + enemies[EnemyIndex].Dicks[RL].Type + " " + enemies[EnemyIndex].Dicks[RL].Size + "cm dick.";
        }
        CheckArousal();
        LastPressed = "GiveBlowjob";
        console.log(a);
        return;
    });
    document.getElementById("GiveCunnilingus").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GiveCunnilingus", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 2;
        player.Arousal += ESexAttack / 3;
        if (LastPressed == "GiveCunnilingus") {
            document.getElementById("SexText").innerHTML = "You eat "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
        } else {
            document.getElementById("SexText").innerHTML = "You go between the opponent legs and eat "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
        }
        CheckArousal();
        LastPressed = "GiveCunnilingus";
        return;
    });
    document.getElementById("GiveRimjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GiveRimjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 2;
        player.Arousal += ESexAttack / 3;
        if (LastPressed == "GiveRimjob") {
            document.getElementById("SexText").innerHTML = "You continue eating their ass out.";
        } else {
            document.getElementById("SexText").innerHTML = "You eat their ass out.";
        }
        CheckArousal();
        LastPressed = "GiveRimjob";
        return;
    });
    // Vagina
    document.getElementById("Scissoring").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "Scissoring", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "Scissoring") {
            document.getElementById("SexText").innerHTML = "You grind your pussy against "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Pussies[0].Type + " pussy.";
        } else {
            document.getElementById("SexText").innerHTML = "You straddle your opponent and grind your pussy against "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Pussies[0].Type + " pussy.";
        }
        CheckArousal();
        LastPressed = "Scissoring";
        return;
    });
    document.getElementById("GetCunnilingus").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GetCunnilingus", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 3;
        player.Arousal += ESexAttack / 2;
        if (LastPressed == "GetCunnilingus") {
            document.getElementById("SexText").innerHTML = "Holding "+HisHer(enemies[EnemyIndex])+" head against your " + player.Pussies[0].Type + " pussy they " +
                "eat you out with "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Race + " tongue.";
        } else {
            document.getElementById("SexText").innerHTML = "You command your opponent to get down on "+HisHer(enemies[EnemyIndex])+" knees, then you grab their head, grinding your " + player.Pussies[0].Type + " pussy against them until they " +
                "start eating you out with "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Race + " tounge.";
        }
        CheckArousal();
        LastPressed = "GetCunnilingus";
        return;
    });
    document.getElementById("RideCowgirl").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "RideCowgirl", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "RideCowgirl") {
            document.getElementById("SexText").innerHTML = "You continue riding "+HisHer(enemies[EnemyIndex])+" " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        } else {
            RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
            PRL = RandomInt(0, player.Pussies.length - 1);
            document.getElementById("SexText").innerHTML = "Pushing your opponent down on to "+HisHer(enemies[EnemyIndex])+" back, you position yourself on top of them and ride "+HisHer(enemies[EnemyIndex])+" " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        }
        if (player.Pussies[PRL].Virgin) {
            player.Pussies[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You have lost your virginity!"
        }
        CheckArousal();
        LastPressed = "RideCowgirl";
        return;
    });
    document.getElementById("Insertion").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "Insertion", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "Insertion") {
            document.getElementById("SexText").innerHTML = "Allowing them only short breaks, you continue masturbating with your living dildo.";
        } else {
            RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
            PRL = RandomInt(0, player.Pussies.length - 1);

            document.getElementById("SexText").innerHTML = "Due to their small size, conventional sex would be difficult, but looking closer at them you realize they are about the size of a dildo. " +
            "Grabbing them you bring them to your " + CmToInch(player.Pussies[PRL].Size) + " deep " + player.Pussies[PRL].Type +" vagina, telling them look closely at the wet folds they are about to be better acquitted with. Feet first, you insert them into your pussy, slow at first but once sure they can survive it you go rougher."
        }
        if (player.Pussies[PRL].Virgin) {
            player.Pussies[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You have lost your virginity to your little dildo!"
        }
        CheckArousal();
        LastPressed = "Insertion";
        return;
    });
    // Dick
    document.getElementById("Missionary").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "Missionary", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "Missionary") {
            document.getElementById("SexText").innerHTML = "You continue fucking "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "Positioning your opponent on "+HisHer(enemies[EnemyIndex])+" back you fuck "+HisHer(enemies[EnemyIndex])+" " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        }
        if (player.Dicks[PRL].Virgin) {
            player.Dicks[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
        }

        CheckArousal();
        LastPressed = "Missionary";
        return;
    });
    document.getElementById("DoggyStyle").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "DoggyStyle", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "DoggyStyle") {
            document.getElementById("SexText").innerHTML = "You continue fucking them from behind.<br>Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "Commanding "+HisHer(enemies[EnemyIndex])+" to get down on their all fours you fuck "+HisHer(enemies[EnemyIndex])+" from behind.<br> Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
        }
        if (player.Dicks[PRL].Virgin) {
            player.Dicks[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
        }

        CheckArousal();
        LastPressed = "DoggyStyle";
        return;
    });
    document.getElementById("GetBlowjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GetBlowjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 3;
        player.Arousal += ESexAttack / 2;
        if (LastPressed == "GetBlowjob") {
            document.getElementById("SexText").innerHTML = "You hold "+HisHer(enemies[EnemyIndex])+" head, guiding them as they suck your " + CmToInch(player.Dicks[0].Size) + " " + player.Dicks[0].Type + " dick.";
        } else {
            document.getElementById("SexText").innerHTML = "Commanding your opponent to "+HisHer(enemies[EnemyIndex])+" knees, you grab "+HisHer(enemies[EnemyIndex])+" head, guiding them to sucking your " + CmToInch(player.Dicks[0].Size) + " " + player.Dicks[0].Type + " dick.";
        }
        CheckArousal();
        LastPressed = "GetBlowjob";
        return;
    });
    // Anal
    document.getElementById("DoggyStyleAnal").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "DoggyStyleAnal", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack;
        player.Arousal += ESexAttack;
        if (LastPressed == "DoggyStyleAnal") {
            document.getElementById("SexText").innerHTML = "You keep "+HisHer(enemies[EnemyIndex])+" head down and fuck "+HisHer(enemies[EnemyIndex])+" ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "You order you opponent down on "+HisHer(enemies[EnemyIndex])+" knees, and position yourself behind them. Pushing "+HisHer(enemies[EnemyIndex])+" head down, you start fucking "+HisHer(enemies[EnemyIndex])+" ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
        }
        if (player.Dicks[PRL].Virgin) {
            player.Dicks[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
        }

        CheckArousal();
        LastPressed = "DoggyStyleAnal";
        return;
    });
    document.getElementById("GetRimjob").addEventListener("click", function () {
        if (Settings.ImgPack) {
            ImgChose(player, "GetRimjob", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack / 3;
        player.Arousal += ESexAttack / 2;
        if (LastPressed == "GetRimjob") {
            document.getElementById("SexText").innerHTML = "You force your opponent to continue eating out your ass.";
        } else {
            document.getElementById("SexText").innerHTML = "You command your opponent to eat out your ass.";
        }
        CheckArousal();
        LastPressed = "GetRimjob";
        return;
    });
    document.getElementById("BreastFeed").addEventListener("click", function() {
        if (Settings.ImgPack) {
            ImgChose(player, "BreastFeed", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].Arousal += SexAttack*1.2;
        player.Arousal += ESexAttack;
        for (var b = 0; b < player.Boobies.length; b++) {
            player.Boobies[b].Milk -= 100 / player.Boobies.length;
        } 
        if (LastPressed == "BreastFeed") {
            document.getElementById("SexText").innerHTML = "You continue feeding them your milk, releiving the pressure in your chest.";
        } else {
            document.getElementById("SexText").innerHTML = "The urge to nurture is strong due the hormones released from your lactating breasts. Wanting release, you take them into your lap and guide "+HisHer(enemies[EnemyIndex])+" head to your fullest breast. " + 
            "At first they assumed you wanted them you suck on your nipples for pleasure, but once their mouth was full they had no choice but to swallow. As they quickly fell in love with the taste, you remove your hand from their head unnoticed, they don't think about stopping their feeding."
        }
        CheckArousal();
        LastPressed = "BreastFeed";
        return;
    });

    document.getElementById("StopSexButton").addEventListener("click", function () {
        battle = false;
        player.Orgasm = 0;
        document.getElementById("AfterBattle").style.display = 'none';
        document.getElementById("PlayerMouth").style.display = 'block';
        document.getElementById("PlayerVagina").style.display = 'block';
        document.getElementById("PlayerDick").style.display = 'block';
        document.getElementById("Breast").style.display = 'block';
        document.getElementById("Anal").style.display = 'block';
        document.getElementById("EnemyVagina").style.display = 'block';
        document.getElementById("EnemyDick").style.display = 'block';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("DrainMenu").style.display = 'block';
        document.getElementById("InjectMenu").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
        LastPressed = " ";
        return;
    });
    document.getElementById("Capture").addEventListener("click", function () {
        House.Dormmates.push(enemies[EnemyIndex]);
        enemies.splice(EnemyIndex, 1);
        battle = false;
        player.Orgasm = 0;
        document.getElementById("AfterBattle").style.display = 'none';
        document.getElementById("PlayerMouth").style.display = 'block';
        document.getElementById("PlayerVagina").style.display = 'block';
        document.getElementById("PlayerDick").style.display = 'block';
        document.getElementById("Anal").style.display = 'block';
        document.getElementById("Breast").style.display = 'block';
        document.getElementById("EnemyVagina").style.display = 'block';
        document.getElementById("EnemyDick").style.display = 'block';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("DrainMenu").style.display = 'block';
        document.getElementById("InjectMenu").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
        LastPressed = " ";
        return;
    });

    function Tightness(pipe, hole, mode) {
        if (mode == "A") {
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size + 1) {
                if (pipe.Dicks[0].Size > hole.Pussies[0].Size * 2) {
                    return "feels extremly tight";
                } else {
                    return "feels tight";
                }
            } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size - 1) {
                if (pipe.Dicks[0].Size * 2 < hole.Pussies[0].Size) {
                    return "feels very loose"
                } else {
                    return "feels loose";
                }
            } else {
                return "feels like a perfect fit";

            }
        } else if (mode == "B") {
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size - 1) {
                return "feels big in";
            } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size + 1) {
                return "feels small in";
            } else {
                return "feels like a perfect fit to";
            }
        }
    }
    
    function HisHer(Gender) {
        switch (CheckGender(Gender)) {
            case "male":
                return "his";
            case "female":
                return "her";
            case "hermaphrodite":
                return "their";
            default:
                return "their";
        }
    } 