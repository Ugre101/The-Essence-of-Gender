
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
            document.getElementById("SexText").innerHTML = "You suck your opponents " + enemies[EnemyIndex].Dicks[RL].Type + " " + enemies[EnemyIndex].Dicks[RL].Size + "cm dick.";
        } else {
            RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "You go down on your knees you and suck your opponents " + enemies[EnemyIndex].Dicks[RL].Type + " " + enemies[EnemyIndex].Dicks[RL].Size + "cm dick.";
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
            document.getElementById("SexText").innerHTML = "You eat their " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
        } else {
            document.getElementById("SexText").innerHTML = "You go between the opponent legs and eat their " + enemies[EnemyIndex].Pussies[0].Type + " pussy out.";
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
            document.getElementById("SexText").innerHTML = "You eat ass.";
        } else {
            document.getElementById("SexText").innerHTML = "You eat ass.";
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
            document.getElementById("SexText").innerHTML = "You grind your pussy against theirs " + enemies[EnemyIndex].Pussies[0].Type + "   pussy.";
        } else {
            document.getElementById("SexText").innerHTML = "You straddle the  opponent and grind your pussy against their " + enemies[EnemyIndex].Pussies[0].Type + "   pussy.";
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
            document.getElementById("SexText").innerHTML = "Holding their head agianst your " + player.Pussies[0].Type + " pussy they " +
                "eat you out with thier " + enemies[EnemyIndex].Race + " tounge.";
        } else {
            document.getElementById("SexText").innerHTML = "You command your  opponent to get down on their knees, then you grab their head using it to grind your " + player.Pussies[0].Type + " pussy agianst until they " +
                "understands what you want and start eating you what with thier " + enemies[EnemyIndex].Race + " tounge.";
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
            document.getElementById("SexText").innerHTML = "You ride their " + enemies[EnemyIndex].Dicks[RL].Size + "cm " + enemies[EnemyIndex].Dicks[RL].Type + " dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        } else {
            RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
            PRL = RandomInt(0, player.Pussies.length - 1);

            document.getElementById("SexText").innerHTML = "Laying your  opponent down on thier back, you position yourself ontop of them and ride their " + enemies[EnemyIndex].Dicks[RL].Size + "cm " + enemies[EnemyIndex].Dicks[RL].Type + " dick.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
        }
        if (player.Pussies[PRL].Virgin) {
            player.Pussies[PRL].Virgin = false;
            document.getElementById("SexText").innerHTML += "<br>You have lost your virginity!"
        }
        CheckArousal();
        LastPressed = "RideCowgirl";
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
            document.getElementById("SexText").innerHTML = "You continue fucking their " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "Positioning your  opponent on thier back you fuck their " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.<br> Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
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
            document.getElementById("SexText").innerHTML = "You continue fucking them from behind.<br>Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "Commanding the defeated to get down on their all fours you fuck them from behind.<br> Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
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
            document.getElementById("SexText").innerHTML = "You hold their head guiding them sucking your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
        } else {
            document.getElementById("SexText").innerHTML = "Commanding your  opponent on their knees you grab their head guiding them sucking your " + player.Dicks[0].Size + "cm " + player.Dicks[0].Type + " dick.";
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
            document.getElementById("SexText").innerHTML = "You hold their head down and fuck their ass with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
        } else {
            PRL = RandomInt(0, player.Dicks.length - 1);
            document.getElementById("SexText").innerHTML = "You order you opponent down on their kees and position yourself behind them you push their head down and fuck their ass with your " + player.Dicks[PRL].Size + "cm " + player.Dicks[PRL].Type + " dick.";
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
            document.getElementById("SexText").innerHTML = "Your opponent eat your ass.";
        } else {
            document.getElementById("SexText").innerHTML = "You command your opponent to eat your ass.";
        }
        CheckArousal();
        LastPressed = "GetRimjob";
        return;
    });

    document.getElementById("StopSexButton").addEventListener("click", function () {
        battle = false;
        player.Orgasm = 0;
        document.getElementById("AfterBattle").style.display = 'none';
        document.getElementById("PlayerMouth").style.display = 'block';
        document.getElementById("PlayerVagina").style.display = 'block';
        document.getElementById("PlayerDick").style.display = 'block';
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
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("DrainMenu").style.display = 'block';
        document.getElementById("InjectMenu").style.display = 'block';
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
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size) {
                return "feels big in";
            } else if (pipe.Dicks[0].Size == hole.Pussies[0].Size) {
                return "feels like a perfect fit to";
            } else {
                return "feels small in";
            }
        }
    }