    // Start Vore
    document.getElementById("Vore").addEventListener("click", function () {
        switch (Settings.Vore) {
            case true:
                Settings.Vore = false;
                break;
            default:
                Settings.Vore = true;
                break;
        }
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
        if (!Settings.Vore) {
            document.getElementById("VoreLooks").style.display = 'none';

        }
        if (!player.hasOwnProperty("Vore")) {
            player.Vore = {
                Level: 0,
                Exp: 0,
                VorePoints: 0,
                VorePerks: {},
                Stomach: [],
                StomachExp: 0,
                Vagina: [],
                VaginaExp: 0,
                Balls: [],
                BallsExp: 0,
                Anal: [],
                AnalExp: 0,
                Breast: [],
                BreastExp: 0
            }
        }
        if (!Settings.hasOwnProperty("VoreSettings")) {
            Settings.VoreSettings = {
                StomachDigestion: true,
                CumTF: true,
                ChildTF: false,
                VCumDigestion: true,
                MilkTF: true,
                AnalDigestion: true,
                AbsorbEssence: true
            }
        }
    });

    document.getElementById("VoreStart").addEventListener("click", function () {
        switch (Settings.Vore) {
            case true:
                Settings.Vore = false;
                break;
            default:
                Settings.Vore = true;
                break;
        }
        document.getElementById("VoreStart").value = "Vore " + Settings.Vore;
        if (!Settings.Vore) {
            document.getElementById("VoreLooks").style.display = 'none';

        }
        if (!player.hasOwnProperty("Vore")) {
            player.Vore = {
                Level: 0,
                Exp: 0,
                VorePoints: 0,
                VorePerks: {},
                Stomach: [],
                StomachExp: 0,
                Vagina: [],
                VaginaExp: 0,
                Balls: [],
                BallsExp: 0,
                Anal: [],
                AnalExp: 0,
                Breast: [],
                BreastExp: 0
            }
        }
        if (!Settings.hasOwnProperty("VoreSettings")) {
            Settings.VoreSettings = {
                StomachDigestion: true,
                CumTF: true,
                ChildTF: false,
                VCumDigestion: true,
                MilkTF: true,
                AnalDigestion: true,
                AbsorbEssence: true
            }
        }
    });
    document.getElementById("OralVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < StomachCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "OralVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
            player.Vore.Stomach.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "You walk up to your foe with a primal hunger in your abdomen. Your foe is still groggy from the beating you gave them leaving them too fulfill your stomachs desire." +
                " You swiftly grab their head with both your hands and bring their face to yours. They grunt expecting a make out session, only for their eyes to widen as your mouth does the same. You take in their head in one motion and " +
                "lower your hands to their waist holding them in place. You lick their head enjoying their taste as you push their head and neck into your greedy throat.<br><br> Loud gulping noises emanate from your neck as you stretch your mouth one " +
                "more and take in their shoulders. Your muscles strain and bulge as you lift your meal of the ground suspending them in the air. This causes the rest of their chest to slide down into your gullet leaving only their legs." +
                "Your stomach grows as their head enters your gut giving a growl of approval and anticipation for the rest of its meal. Your hands make their way to their calves as you grip tightly and give a hard shove pushing them down to their ankles." +
                "<br><br> You open wide and let their feet slide past your mouth and close your mouth hard locking your food into its fate. Your stomach fills out and heaves as your prey struggles and pushes in attempts to free its self.";
            if (StomachCapacity() / MaxStomachCapacity() > 0.5) {
                document.getElementById("SexText").innerHTML += " You start to walk off lifting your gut and releasing it causing to sag heavily with its weight. Your wince as you attempt to stand and make your way out.";
            }
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your stomach!";
        }
        return;
    });
    document.getElementById("Unbirth").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < VaginaCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "Unbirth", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
            player.Vore.Vagina.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            document.getElementById("SexText").innerHTML = "Grabbing your opponent, you shove into your pussy!";
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your vagina!";
        }
        return;
    });
    document.getElementById("CockVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < BallsCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "CockVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
            player.Vore.Balls.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            if (player.SecondRace !== "centaur") {
                document.getElementById("SexText").innerHTML = "Your confidently stride up to your opponent looking your food up and down as your reach for your waist. They lift their head from the floor and roll their eyes as they are greeted with your erect cock." +
                    " They open their mouth to start sucking only for your dick to return the sentiment. Their head is quickly enveloped by your dick with their neck following suit. You use your hands to squeeze the bulge in your member as you eagerly thrust into your foe forcing them deeper with each hump." +
                    " <br><br>Your breathing deepens as their shoulders begin their journey to your sac causing your dick to stretch wide to accommodate its food. Both your hands reach to your dick as you rub over its food is making." +
                    " Your sac churns audibly with a hunger for its meal, causing precum to move up your cock speeding your foes descent. Your massaging of your food makes squelching sounds as your now massive member greedily sucks in their waist." +
                    " Their head starts to be deposited in your nuts causing their body to twist and squirm against your member, their struggles cause waves of pleasure as you shiver from their protests. <br><br>You lazily lift your cock with one hand giving it encouraging strokes to finish its meal." +
                    " You sigh and give soft humps as all that remains of your foe is a massive bulge in your shaft. Loud slurp sounds are made as your recent meal ends its journey and is deposited in your sac. Your nuts heave a drag against the floor as you haul your soon to be load off and away.";
            } else {
                document.getElementById("SexText").innerHTML = "Seeing your opponent lying there defeated gives you an idea, your cock stiffens at this idea as you make your way to your soon to be prey. Your foe sits up from being prone and jumps from your large equine form blocking out the sun." +
                    " Standing over your foe you convey your desires as your cock makes a loud thwap against your stomach. Your opponent gets the idea as they slowly raise themselves to your shafts begrudgingly encompassing it with their hands." +
                    "<br><br> Sensing their hesitation, you made a deafening stomp with your hooves causing your for to nervously tend to your dick. You pull your hips back away from your foe causing them confusion of what they expected to be a simple blowjob." +
                    " An excited whip of your tail and a small grunt of dominance is the only signs your prey receives as you make a single thrust into your opponent’s head causing your shaft to hungerly envelop them up to their chest." +
                    " You instinctively snort as you claim your foe with you cock causing it to suck on their form as almost tasting them. Desperate for more you tense your groin with immense strength and pull your prey in up to their crotch." +
                    "<br><br> Gasps of nerve-wracking pleasure escape you as your prey begins its fruitless struggles inside your monstrous shaft.Not wanting to risk an orgasm and releasing them you repeatedly stiffen your cock causing it to beat your meal into submission against your stomach." +
                    " Pleased with your display of power over your meal you pull in their legs with little effort seal your cock head around their feet. You sigh in relief as you feel the rest of your prey get deposited in your sac. Feeling sated you make your way back to the road with your nuts sagging heavily between your legs."
            }
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your balls!";
        }
        return;
    });
    document.getElementById("BreastVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < BreastCapacity()) {
            if (Settings.ImgPack) {
                ImgChose(player, "BreastVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
            player.Vore.Breast.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            var i = "left";
            if (Math.random() > 0.5)
                i = "right";
            document.getElementById("SexText").innerHTML = "Grabbing your opponent, you shove them into your " + i + " nipple.";
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit them into your breasts!";
        }
        return;
    });
    document.getElementById("AnalVore").addEventListener("click", function () {
        if (enemies[EnemyIndex].Weight < AnalCapacity() + 100) {
            if (Settings.ImgPack) {
                ImgChose(player, "AnalVore", enemies[EnemyIndex]);
            }
            enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
            player.Vore.Anal.push(enemies[EnemyIndex]);
            enemies.splice(EnemyIndex, 1);
            if (player.SecondRace !== "centaur") {
                document.getElementById("SexText").innerHTML = "Seeing your foe fall you eagerly make your waay up to them as you unbutton your pants and undergarments. Your foe sighs as they begrudgingly assume what you’re going to do next. " +
                    "You turn your body around and lower your cheeks to their face. They take both sides of your ass in each hand and bring their mouth to your hole in force of habit. Your alternative plan starts as you push your ass forcefully into their face." +
                    " Your foe gasps in surprise as your hole touches their nose and begins to envelop their head.<br><br> Muffled protests come from your waist as they instinctively push against your cheeks to free themselves." +
                    " You squat down and grunt as you begin to your rectum makes a powerful suck forcing your meal up to their chest. Their arms are pinned against your ass making it easier to pull them up to your waist." +
                    " Your wince as your food makes its way through your gut stretching it as you pull more in to it.<br><br> You notice their legs are all that is left, you grin as you straighten your back using their limbs as a pseudo chair." +
                    " You adamantly lower your hips using the force between the ground and their feet to shove them further into your bowels. Your cheeks make contact with the ground as they hungrily shove the last of your foe into your depths." +
                    " Rough shoves and struggles are all that is left of them as your gut conforms and kneads its meal.";
            } else {
                document.getElementById("SexText").innerHTML = "As your foe crumbles from your back hooves delivering a deadly buck, you decide to stay back turned and slowly walk backwards into them."+
                " Rubbing their head from the recent blow your opponent has only a second to see your large equine rear descend on them putting them into darkness. Rough grunting and the sounds of squeezing accompany this surprise as you lift your foe up to their chest with your twisted strength."+
                "<br><br> Your tail flicks upward sharply with each contraction of your anal muscles, as your ass continues to feast upon the poor soul trapped inside. The display of control you have over your rear continues as your prey suddenly disappears up to their waste into your bowels."+
                " Pleasurable struggles are awarded to you from inside your equine half as your conquest twists and pushes your sensitive walls, encouraging you to finish your meal.<br><br> Not wanting to disappoint your gut, you make one last effort to envelop your foe with your rectum."+
                " With immense force their legs are pulled in leaving their ankles and feet to be squeezed harshly by your ass. With a loud \"schluck\" their ankles are pulled in with their feet following closely."+
                " A satisfied sigh leaves you as you wiggle your hips in victory over your foe. You start to head back on your journey as your intestines begin their work on the fresh meat you conquered."
            }
            HideVore();
        } else {
            document.getElementById("SexText").innerHTML = "You cannot fit more into your bowels!";
        }
        return;
    });

    function HideVore() {
        document.getElementById("OralVore").style.display = 'none';
        document.getElementById("Unbirth").style.display = 'none';
        document.getElementById("CockVore").style.display = 'none';
        document.getElementById("AnalVore").style.display = 'none';
        document.getElementById("BreastVore").style.display = 'none';
        document.getElementById("DrainMenu").style.display = 'none';
        document.getElementById("InjectMenu").style.display = 'none';
        document.getElementById("PlayerMouth").style.display = 'none';
        document.getElementById("PlayerVagina").style.display = 'none';
        document.getElementById("PlayerDick").style.display = 'none';
        document.getElementById("Breast").style.display = 'none';
        document.getElementById("Anal").style.display = 'none';
        document.getElementById("CaptureOpponent").style.display = 'none';
    }

    function PreyButton(ps, from, index) {
        var color;
        switch (CheckGender(ps)) {
            case "female":
                color = "Pink";
                break;
            case "male":
                color = "Blue";
                break;
            case "hermaphrodite":
                color = "Purple";
                break;
            case "doll":
                color = "Beige";
                break;
        }
        return "<button type=\"button\" class=\"" + color + "\" onclick=\"Show" + from + "Prey(" + index + ")\">" + ps.Name + " " + ps.Race +
            " <br> " + Pronun(CheckGender(ps)) + "<br><br>Height:" + CmToInch(ps.Height) + "<br>Weight:" +
            KgToPound(ps.Weight) + "</button>";
    }

    function ShowPrey(where) {
        document.getElementById(where + "Content").style.display = 'none';
        document.getElementById(where + "Prey").style.display = 'block';
        document.getElementById(where + "Leave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("Leave" + where + "Prey").style.display = 'inline-block';
        document.getElementById("regurgitate" + where).style.display = 'inline-block';
    }

    function HidePrey(where) {
        document.getElementById(where + "Content").style.display = 'grid';
        document.getElementById(where + "Prey").style.display = 'none';
        document.getElementById(where + "Leave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("Leave" + where + "Prey").style.display = 'none';
        document.getElementById("regurgitate" + where).style.display = 'none';
    }

    function ShowAnalPrey(e) {
        var Prey = player.Vore.Anal[e];
        PreyIndex = e;
        ShowPrey("Anal")
        document.getElementById("AnalPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
        document.getElementById("AnalDigestion").style.display = 'none';
    };

    document.getElementById("LeaveAnalPrey").addEventListener("click", function () {
        HidePrey("Anal")
        document.getElementById("AnalDigestion").style.display = 'inline-block';
    });
    document.getElementById("regurgitateAnal").addEventListener("click", function () {
        var who = player.Vore.Anal[PreyIndex];
        enemies.push(who);
        player.Vore.Anal.splice(PreyIndex, 1);
        HidePrey("Anal");
        document.getElementById("AnalDigestion").style.display = 'inline-block';
        var food = "";
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            var ps = player.Vore.Anal[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Anal", e);
        }
        document.getElementById("AnalContent").innerHTML = food;
    });

    function ShowBallsPrey(e) {
        var Prey = player.Vore.Balls[e];
        PreyIndex = e;
        ShowPrey("Balls");
        document.getElementById("CumDigestion").style.display = 'none';
        document.getElementById("BallsPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveBallsPrey").addEventListener("click", function () {
        HidePrey("Balls")
        document.getElementById("CumDigestion").style.display = 'inline-block';
    });
    document.getElementById("regurgitateBalls").addEventListener("click", function () {
        var who = player.Vore.Balls[PreyIndex];
        enemies.push(who);
        player.Vore.Balls.splice(PreyIndex, 1);
        HidePrey("Balls");
        document.getElementById("CumDigestion").style.display = 'inline-block';
        var food = "";
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            var ps = player.Vore.Balls[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Balls", e);
        }
        document.getElementById("BallsContent").innerHTML = food;
    });

    function ShowVaginaPrey(e) {
        var Prey = player.Vore.Vagina[e];
        PreyIndex = e;
        ShowPrey("Vagina");
        document.getElementById("VCumDigestion").style.display = 'none';
        document.getElementById("ChildTF").style.display = 'none';
        document.getElementById("VaginaPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;

        document.getElementById("")
    };

    document.getElementById("LeaveVaginaPrey").addEventListener("click", function () {
        HidePrey("Vagina");
        document.getElementById("VCumDigestion").style.display = 'inline-block';
        document.getElementById("ChildTF").style.display = 'inline-block';
    });
    document.getElementById("regurgitateVagina").addEventListener("click", function () {
        var who = player.Vore.Vagina[PreyIndex];
        enemies.push(who);
        player.Vore.Vagina.splice(PreyIndex, 1);
        HidePrey("Vagina");
        document.getElementById("VCumDigestion").style.display = 'inline-block';
        document.getElementById("ChildTF").style.display = 'inline-block';
        var food = "";
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            var ps = player.Vore.Vagina[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Vagina", e);
        }
        document.getElementById("VaginaContent").innerHTML = food;
    });


    function ShowBreastPrey(e) {
        var Prey = player.Vore.Breast[e];
        PreyIndex = e;
        ShowPrey("Breast");
        document.getElementById("MilkTransformation").style.display = 'none';
        document.getElementById("BreastPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveBreastPrey").addEventListener("click", function () {
        HidePrey("Breast");
        document.getElementById("MilkTransformation").style.display = 'inline-block';
    });
    document.getElementById("regurgitateBreast").addEventListener("click", function () {
        var who = player.Vore.Breast[PreyIndex];
        enemies.push(who);
        player.Vore.Breast.splice(PreyIndex, 1);
        HidePrey("Breast");
        document.getElementById("MilkTransformation").style.display = 'inline-block';
        var food = "";
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            var ps = player.Vore.Breast[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Breast", e);
        }
        document.getElementById("BreastContent").innerHTML = food;
    });


    var PreyIndex;

    function ShowStomachPrey(e) {
        var Prey = player.Vore.Stomach[e];
        PreyIndex = e;
        ShowPrey("Stomach");
        document.getElementById("StomachDigestion").style.display = 'none';
        document.getElementById("StomachPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };
    document.getElementById("LeaveStomachPrey").addEventListener("click", function () {
        HidePrey("Stomach");
        document.getElementById("StomachDigestion").style.display = 'inline-block';
    });
    document.getElementById("regurgitateStomach").addEventListener("click", function () {
        var who = player.Vore.Stomach[PreyIndex];
        enemies.push(who);
        player.Vore.Stomach.splice(PreyIndex, 1);
        HidePrey("Stomach");
        document.getElementById("StomachDigestion").style.display = 'inline-block';
        var food = "";
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            var ps = player.Vore.Stomach[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Stomach", e);
        }
        document.getElementById("StomachContent").innerHTML = food;
    });


    document.getElementById("VoreLooks").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("ShowVore").style.display = 'block';
        document.getElementById("VorePerkMenu").style.display = 'none';
        document.getElementById("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
    });

    function DisplayNoneVore(where) {
        document.getElementById("VoreSettings").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("Leave" + where + "Prey").style.display = 'none';
        document.getElementById("regurgitate" + where).style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("Leave" + where + "Prey").style.display = 'none';
        document.getElementById("regurgitate" + where).style.display = 'none';
    }
    document.getElementById("ShowStomach").addEventListener("click", function () {
        DisplayNoneVore("Stomach");
        document.getElementById("VoreStomach").style.display = 'block';
        document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
        var food = "";
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            var ps = player.Vore.Stomach[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Stomach", e);
        }
        document.getElementById("StomachContent").innerHTML = food;

    });
    document.getElementById("StomachDigestion").addEventListener("click", function () {
        Settings.VoreSettings.StomachDigestion = !Settings.VoreSettings.StomachDigestion
        document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
    });
    document.getElementById("ShowVagina").addEventListener("click", function () {
        DisplayNoneVore("Vagina")
        document.getElementById("VoreVagina").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            var ps = player.Vore.Vagina[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Vagina", e);
        }
        document.getElementById("VaginaContent").innerHTML = food;
        document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
        document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
    });
    document.getElementById("ChildTF").addEventListener("click", function () {
        if (Settings.VoreSettings.ChildTF) {
            Settings.VoreSettings.ChildTF = false;
        } else {
            Settings.VoreSettings.ChildTF = true;
            Settings.VoreSettings.VCumDigestion = false;
        }
        document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
        document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
    });
    document.getElementById("VCumDigestion").addEventListener("click", function () {
        if (Settings.VoreSettings.VCumDigestion) {
            Settings.VoreSettings.VCumDigestion = false;
        } else {
            Settings.VoreSettings.ChildTF = false;
            Settings.VoreSettings.VCumDigestion = true;
        }
        document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
        document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
    })

    document.getElementById("ShowBreast").addEventListener("click", function () {
        document.getElementById("VoreBreast").style.display = 'block';
        DisplayNoneVore("Breast")
        var food = "";
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            var ps = player.Vore.Breast[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Breast", e);
        }
        document.getElementById("BreastContent").innerHTML = food;
        document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
    });
    document.getElementById("MilkTransformation").addEventListener("click", function () {
        Settings.VoreSettings.MilkTF = !Settings.VoreSettings.MilkTF;
        document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
    });
    document.getElementById("ShowBalls").addEventListener("click", function () {
        DisplayNoneVore("Balls")
        document.getElementById("VoreBalls").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            var ps = player.Vore.Balls[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Balls", e);
        }
        document.getElementById("BallsContent").innerHTML = food;
        document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
    });
    document.getElementById("CumDigestion").addEventListener("click", function () {
        Settings.VoreSettings.CumTF = !Settings.VoreSettings.CumTF;
        document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
    });
    document.getElementById("ShowAnal").addEventListener("click", function () {
        DisplayNoneVore("Anal")
        document.getElementById("VoreAnal").style.display = 'block';
        var food = "";
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            var ps = player.Vore.Anal[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Anal", e);
        }
        document.getElementById("AnalContent").innerHTML = food;
        document.getElementById("AnalDigestion").value = "Anal digestion " + Settings.VoreSettings.AnalDigestion;
    });
    document.getElementById("AnalDigestion").addEventListener("click", function () {
        Settings.VoreSettings.AnalDigestion = !Settings.VoreSettings.AnalDigestion;
        document.getElementById("AnalDigestion").value = "Anal Digestion " + Settings.VoreSettings.AnalDigestion;
    });

    function LeavePreyMenu() {
        document.getElementById("VoreButtons").style.display = 'grid';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("VoreSettings").style.display = 'inline-block';
    }

    document.getElementById("StomachLeave").addEventListener("click", function () {
        document.getElementById("VoreStomach").style.display = 'none';
        LeavePreyMenu();
    });
    document.getElementById("VaginaLeave").addEventListener("click", function () {
        document.getElementById("VoreVagina").style.display = 'none';
        LeavePreyMenu();
    });
    document.getElementById("BreastLeave").addEventListener("click", function () {
        document.getElementById("VoreBreast").style.display = 'none';
        LeavePreyMenu();
    });
    document.getElementById("BallsLeave").addEventListener("click", function () {
        document.getElementById("VoreBalls").style.display = 'none';
        LeavePreyMenu();
    });
    document.getElementById("AnalLeave").addEventListener("click", function () {
        document.getElementById("VoreAnal").style.display = 'none';
        LeavePreyMenu();
    });
    document.getElementById("VorePerks").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VorePerkMenu").style.display = 'block';
        document.getElementById("VorePerkPointsLeft").innerHTML = "You have " + player.Vore.VorePoints + " perk points left.";
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
            document.getElementById("AbsorbEssence").value = "AbsorbEssence +" + player.Vore.VorePerks.AbsorbEssence.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
            document.getElementById("FasterDigestion").value = "Faster digestion +" + player.Vore.VorePerks.FasterDigestion.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
            if (player.Vore.VorePerks.AbsorbStats.Count > 9) {
                document.getElementById("AbsorbStats").style.display = 'none';
            } else {
                document.getElementById("AbsorbStats").value = "Drain Stats +" + player.Vore.VorePerks.AbsorbStats.Count; //Had to shorten value as text got outside button
            }
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            document.getElementById("HigherCapacity").value = "Higher capacity +" + player.Vore.VorePerks.HigherCapacity.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
            document.getElementById("AbsorbHeight").value = "Absorb height +" + player.Vore.VorePerks.AbsorbHeight.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("PredatorsMeta")) {
            document.getElementById("PredatorsMeta").value = "Predators meta +" + player.Vore.VorePerks.PredatorsMeta.Count;
        }
        return;
    });

    function VorePerkHandler(perket) {
        player.Vore.VorePoints--;
        if (perket === "AbsorbStats")
            player.Vore.VorePoints -= 9;
        if (player.Vore.VorePerks.hasOwnProperty(perket)) {
            player.Vore.VorePerks[perket].Count++;
        } else {
            player.Vore.VorePerks[perket] = {
                Count: 1
            }
        }
        document.getElementById(perket).value = perket + " +" + player.Vore.VorePerks[perket].Count;
        document.getElementById("VorePerkPointsLeft").innerHTML = "You have " + player.Vore.VorePoints + " perk points left.";
    }
    document.getElementById("AbsorbEssence").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("AbsorbEssence");
        } else {
            return;
        }
    });
    document.getElementById("AbsorbStats").addEventListener("click", function () {
        if (player.Vore.VorePoints > 9) {
            if (!player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                VorePerkHandler("AbsorbStats");
            } else if (player.Vore.VorePerks.AbsorbStats.Count < 10) {
                //console.log(player.Vore.VorePerks.AbsorbStats.Count);
                VorePerkHandler("AbsorbStats");
            }
        } else {
            return;
        }
    });
    document.getElementById("VorePerkMenu").addEventListener("mouseover", function (e) {
        document.getElementById("VorePerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("FasterDigestion").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("FasterDigestion");
        } else {
            return;
        }
    });
    document.getElementById("HigherCapacity").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("HigherCapacity");
        } else {
            return;
        }
    });
    document.getElementById("AbsorbHeight").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("AbsorbHeight");
        } else {
            return;
        }
    });
    document.getElementById("PredatorsMeta").addEventListener("click", function () {
        if (player.Vore.VorePoints > 0) {
            VorePerkHandler("PredatorsMeta");
        } else {
            return;
        }
    });
    document.getElementById("LeaveVorePerkMenu").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'grid';
        document.getElementById("VorePerkMenu").style.display = 'none';
    });

    document.getElementById("VoreSettings").addEventListener("click", function () {
        if (document.getElementById("VoreSettingsMenu").style.display == 'block') {
            document.getElementById("VoreSettingsMenu").style.display = 'none';
        } else {
            document.getElementById("VoreSettingsMenu").style.display = 'block';
        }
    });
    document.getElementById("AbsorbEssenceSetting").addEventListener("click", function () {
        switch (Settings.VoreSettings.AbsorbEssence) {
            case "Both":
                Settings.VoreSettings.AbsorbEssence = "Femininity";
                break;
            case "Femininity":
                Settings.VoreSettings.AbsorbEssence = "Masculinity";
                break;
            case "Masculinity":
                Settings.VoreSettings.AbsorbEssence = "None";
                break;
            default:
                Settings.VoreSettings.AbsorbEssence = "Both";
                break;
        }
        document.getElementById("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
    });
    document.getElementById("LeaveVore").addEventListener("click", function () {
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
        DisplayGame();
    });

    function VoreEngine(progress = 0.001) {
        var VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level - 1);
        if (player.Vore.Exp >= VoreMaxExp) {
            player.Vore.Exp = player.Vore.Exp - VoreMaxExp;
            player.Vore.Level++;
            player.Vore.VorePoints++;
        }
        document.getElementById("VoreLevel").innerHTML = player.Vore.Level;
        document.getElementById("VoreLevel").style.width = 100 * (player.Vore.Exp / VoreMaxExp) + "%";
        document.getElementById("ShowStomach").innerHTML = "Stomach<br>" + KgToPound(MaxStomachCapacity() - StomachCapacity()) + " prey <br> " + KgToPound(MaxStomachCapacity()) + " Max";
        document.getElementById("ShowVagina").innerHTML = "Pussy<br>" + KgToPound(MaxVaginaCapacity() - VaginaCapacity()) + " prey <br> " + KgToPound(MaxVaginaCapacity()) + " Max";
        document.getElementById("ShowBreast").innerHTML = "Breast<br>" + KgToPound(MaxBreastCapacity() - BreastCapacity()) + " prey <br> " + KgToPound(MaxBreastCapacity()) + " Max";
        document.getElementById("ShowBalls").innerHTML = "Balls<br>" + KgToPound(MaxBallsCapacity() - BallsCapacity()) + " prey <br> " + KgToPound(MaxBallsCapacity()) + " Max";
        document.getElementById("ShowAnal").innerHTML = "Anal<br>" + KgToPound(MaxAnalCapacity() - AnalCapacity()) + " prey <br> " + KgToPound(MaxAnalCapacity()) + " Max";

        if (player.Vore.VorePoints > 0) {
            document.getElementById("VorePerks").style.display = 'inline-block';
        } else {
            document.getElementById("VorePerks").style.display = 'none';
        }

        // Digestion perk
        var digestionCount = 1;
        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
            digestionCount += player.Vore.VorePerks.FasterDigestion.Count;
        }

        // Stomach
        var content = 0;
        for (var e of player.Vore.Stomach) {
            content += e.Weight;
        }
        while (content > MaxStomachCapacity()) {
            enemies.push(player.Vore.Stomach[player.Vore.Stomach.length - 1]);
            player.Vore.Stomach.pop();
            content = 0;
            for (var e of player.Vore.Stomach) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxStomachCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // stomach fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.StomachDigestion) {
            player.Vore.StomachExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.StomachExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            if (!player.Vore.Stomach[e].hasOwnProperty("LastName")) {
                player.Vore.Stomach[e].LastName = "";
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Masc)
                        player.Vore.Stomach[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Femi)
                        player.Vore.Stomach[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Masc)
                        player.Vore.Stomach[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Femi)
                        player.Vore.Stomach[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Stomach[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Stomach[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.StomachDigestion) {
                player.Vore.Stomach[e].Weight -= progress * digestionCount;
                for (var q = 0; q < RaceAbsorb.length; q++) {
                    if (RaceAbsorb[q].Race === player.Vore.Stomach[e].Race) {
                        RaceAbsorb[q].amount += progress * digestionCount;
                        //console.log(RaceAbsorb[q].Race);
                        break;
                    } else if (q + 1 == RaceAbsorb.length) {
                        //console.log("None??");
                    }
                }
                player.Fat += progress / 2 * digestionCount;

                if (player.Vore.Stomach[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Stomach[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Stomach[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Stomach[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Stomach[e].Willpower / snowA);
                        player.End += Math.round(player.Vore.Stomach[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Stomach[e].SexSkill / snowA);
                    }
                    EventLog("You have digested " + player.Vore.Stomach[e].Name + " " + player.Vore.Stomach[e].Race + " " + player.Vore.Stomach[e].FirstName + " " + player.Vore.Stomach[e].LastName);
                    player.Vore.Stomach.splice(e, 1);
                }
            }
        }
        // Vagina
        var content = 0;
        for (var e of player.Vore.Vagina) {
            content += e.Weight;
        }
        while (content > MaxVaginaCapacity()) {
            enemies.push(player.Vore.Vagina[player.Vore.Vagina.length - 1]);
            player.Vore.Vagina.pop();
            content = 0;
            for (var e of player.Vore.Vagina) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxVaginaCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Vagina fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.VCumDigestion) {
            player.Vore.VaginaExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.VaginaExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Masc);
                        player.Vore.Vagina[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Femi);
                        player.Vore.Vagina[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Masc);
                        player.Vore.Vagina[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Femi);
                        player.Vore.Vagina[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Vagina[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Vagina[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.VCumDigestion) {
                player.Vore.Vagina[e].Weight -= progress * digestionCount;
                for (var q = 0; q < RaceAbsorb.length; q++) {
                    if (RaceAbsorb[q].Race === player.Vore.Vagina[e].Race) {
                        RaceAbsorb[q].amount += progress * digestionCount;
                        //console.log(RaceAbsorb[q].Race);
                        break;
                    } else if (q + 1 == RaceAbsorb.length) {
                        //console.log("None??");
                    }
                }
                if (player.Vore.Vagina[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Vagina[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Vagina[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Vagina[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Vagina[e].Willpower / snowA);
                        player.End += Math.round(player.Vore.Vagina[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Vagina[e].SexSkill / snowA);
                    }
                    EventLog("The only trace left of " + player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].LastName + " is a trail of pussy discharge traveling down your legs.");
                    player.Vore.Vagina.splice(e, 1);
                }
            } else if (Settings.VoreSettings.ChildTF) {
                if (!player.Vore.Vagina[e].hasOwnProperty("Counter")) {
                    player.Vore.Vagina[e].Counter = 0;
                } else {
                    player.Vore.Vagina[e].Counter++;
                    if (player.Vore.Vagina[e].Counter > 1000) {
                        var Baby = {
                            BabyAge: 0,
                            BabyRace: player.Vore.Vagina[e].Race
                        }
                        player.Pregnant.Status = true;
                        player.Pregnant.Babies.push(Baby);
                        EventLog(player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].LastName + " have been reduced to infant who now rests in your womb.")
                        player.Vore.Vagina.splice(e, 1);
                    }
                }
            }
        }
        // Breast
        var content = 0;
        for (var e of player.Vore.Breast) {
            content += e.Weight;
        }
        while (content > MaxBreastCapacity()) {
            enemies.push(player.Vore.Breast[player.Vore.Breast.length - 1]);
            player.Vore.Breast.pop();
            content = 0;
            for (var e of player.Vore.Breast) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxBreastCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Breast fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.MilkTF) {
            player.Vore.BreastExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.BreastExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Masc)
                        player.Vore.Breast[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Femi)
                        player.Vore.Breast[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Masc)
                        player.Vore.Breast[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Femi)
                        player.Vore.Breast[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Breast[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Breast[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.MilkTF) {
                player.Vore.Breast[e].Weight -= progress * digestionCount;
                for (var q = 0; q < RaceAbsorb.length; q++) {
                    if (RaceAbsorb[q].Race === player.Vore.Breast[e].Race) {
                        RaceAbsorb[q].amount += progress * digestionCount;
                        //console.log(RaceAbsorb[q].Race);
                        break;
                    } else if (q + 1 == RaceAbsorb.length) {
                        //console.log("None??");
                    }
                }
                for (var b = 0; b < player.Boobies.length; b++) {
                    if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                        player.Boobies[b].Milk += progress * digestionCount;
                    }
                }
                if (player.Vore.Breast[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Breast[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Breast[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Breast[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Breast[e].Willpower / snowA);
                        player.End += Math.round(player.Vore.Breast[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Breast[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing but milk left of " + player.Vore.Breast[e].Name + " " + player.Vore.Breast[e].Race + " " + player.Vore.Breast[e].FirstName + " " + player.Vore.Breast[e].LastName);
                    player.Vore.Breast.splice(e, 1);
                }
            }
        }
        // Balls
        var content = 0;
        for (var e of player.Vore.Balls) {
            content += e.Weight;
        }
        while (content > MaxBallsCapacity()) {
            enemies.push(player.Vore.Balls[player.Vore.Balls.length - 1]);
            player.Vore.Balls.pop();
            content = 0;
            for (var e of player.Vore.Balls) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxBallsCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Balls fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.CumTF) {
            player.Vore.BallsExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.BallsExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Masc)
                        player.Vore.Balls[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Femi)
                        player.Vore.Balls[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Masc)
                        player.Vore.Balls[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Femi)
                        player.Vore.Balls[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Balls[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Balls[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.CumTF) {
                player.Vore.Balls[e].Weight -= progress * digestionCount;
                for (var q = 0; q < RaceAbsorb.length; q++) {
                    if (RaceAbsorb[q].Race === player.Vore.Balls[e].Race) {
                        RaceAbsorb[q].amount += progress * digestionCount;
                        //console.log(RaceAbsorb[q].Race);
                        break;
                    } else if (q + 1 == RaceAbsorb.length) {
                        //console.log("None??");
                    }
                }
                for (var b = 0; b < player.Balls.length; b++) {
                    if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                        player.Balls[b].Cum += 100 * progress * digestionCount;
                    }
                }
                if (player.Vore.Balls[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Balls[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Balls[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Balls[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Balls[e].Willpower / snowA);
                        player.End += Math.round(player.Vore.Balls[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Balls[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing but cum left of the " + player.Vore.Balls[e].Name + " " + player.Vore.Balls[e].Race + " " + player.Vore.Balls[e].FirstName + " " + player.Vore.Balls[e].LastName);
                    player.Vore.Balls.splice(e, 1);
                    return;
                }
            }
        }
        // Anal
        var content = 0;
        for (var e of player.Vore.Anal) {
            content += e.Weight;
        }
        while (content > MaxAnalCapacity()) {
            enemies.push(player.Vore.Anal[player.Vore.Anal.length - 1]);
            player.Vore.Anal.pop();
            content = 0;
            for (var e of player.Vore.Anal) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxAnalCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Anal fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.AnalDigestion) {
            player.Vore.AnalExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.AnalExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Masc)
                        player.Vore.Anal[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Femi)
                        player.Vore.Anal[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Masc)
                        player.Vore.Anal[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Femi)
                        player.Vore.Anal[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Anal[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Anal[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.AnalDigestion) {
                player.Vore.Anal[e].Weight -= progress * digestionCount;
                for (var q = 0; q < RaceAbsorb.length; q++) {
                    if (RaceAbsorb[q].Race === player.Vore.Anal[e].Race) {
                        RaceAbsorb[q].amount += progress * digestionCount;
                        //console.log(RaceAbsorb[q].Race);
                        break;
                    } else if (q + 1 == RaceAbsorb.length) {
                        //console.log("None??");
                    }
                }
                player.Fat += progress / 2 * digestionCount;
                if (player.Vore.Anal[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Anal[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Anal[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Anal[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Anal[e].Willpower / snowA);
                        player.End += Math.round(player.Vore.Anal[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Anal[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing left of the " + player.Vore.Anal[e].Name + " " + player.Vore.Anal[e].Race + " " + player.Vore.Anal[e].FirstName + " " + player.Vore.Anal[e].LastName);
                    player.Vore.Anal.splice(e, 1);
                }
            }
        }
    }

    function StomachCapacity() {
        var capacity = player.Height / 3
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            sub += player.Vore.Stomach[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus - sub;
    }

    function MaxStomachCapacity() {
        var capacity = player.Height / 3
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus;
    }

    function VaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Pussies.length; e++) {
            capacity += player.Pussies[e].Size
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.VaginaExp / 100;
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            sub += player.Vore.Vagina[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus - sub;
    }

    function MaxVaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Pussies.length; e++) {
            capacity += player.Pussies[e].Size
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.VaginaExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus;
    }

    function BreastCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Boobies.length; e++) {
            capacity += player.Boobies[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BreastExp / 100;
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            sub += player.Vore.Breast[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus - sub;
    }

    function MaxBreastCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Boobies.length; e++) {
            capacity += player.Boobies[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BreastExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus;
    }

    function BallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            capacity += player.Balls[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BallsExp / 100;
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            sub += player.Vore.Balls[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus - sub;
    }

    function MaxBallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            capacity += player.Balls[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BallsExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus;
    }

    function AnalCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Anal.length; e++) {
            capacity += player.Anal[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.AnalExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            sub += player.Vore.Anal[e].Weight;
        }
        return capacity * bonus - sub;
    }

    function MaxAnalCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Anal.length; e++) {
            capacity += player.Anal[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.AnalExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
            //bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus;
    }
    // End vore