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
                AnalDigestion: true
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
                AnalDigestion: true
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
            document.getElementById("SexText").innerHTML = "Grabbing your opponent, you shove them down your throat!";
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
            document.getElementById("SexText").innerHTML = "Grabbing your opponent, you shove them down into your cockslit, watching the bulge travel down your shaft.";
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
            document.getElementById("SexText").innerHTML = "Grabbing your opponent, you shove them into your bowels!";
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
            " <br> " + Pronun(CheckGender(ps)) + "<br><br>Height:" + Math.round(ps.Height) + "<br>Weight:" +
            Math.round(ps.Weight) + "</button>";
    }

    function ShowAnalPrey(e) {
        var Prey = player.Vore.Anal[e];
        PreyIndex = e;
        document.getElementById("AnalContent").style.display = 'none';
        document.getElementById("AnalPrey").style.display = 'block';
        document.getElementById("AnalLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveAnalPrey").style.display = 'inline-block';
        document.getElementById("regurgitateAnal").style.display = 'inline-block';
        document.getElementById("AnalPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveAnalPrey").addEventListener("click", function () {
        document.getElementById("AnalContent").style.display = 'grid';
        document.getElementById("AnalPrey").style.display = 'none';
        document.getElementById("AnalLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveAnalPrey").style.display = 'none';
        document.getElementById("regurgitateAnal").style.display = 'none';
    });
    document.getElementById("regurgitateAnal").addEventListener("click", function () {
        var who = player.Vore.Anal[PreyIndex];
        enemies.push(who);
        player.Vore.Anal.splice(PreyIndex, 1);
        document.getElementById("AnalContent").style.display = 'grid';
        document.getElementById("AnalPrey").style.display = 'none';
        document.getElementById("AnalLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveAnalPrey").style.display = 'none';
        document.getElementById("regurgitateAnal").style.display = 'none';
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
        document.getElementById("BallsContent").style.display = 'none';
        document.getElementById("BallsPrey").style.display = 'block';
        document.getElementById("BallsLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveBallsPrey").style.display = 'inline-block';
        document.getElementById("regurgitateBalls").style.display = 'inline-block';
        document.getElementById("BallsPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveBallsPrey").addEventListener("click", function () {
        document.getElementById("BallsContent").style.display = 'grid';
        document.getElementById("BallsPrey").style.display = 'none';
        document.getElementById("BallsLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBallsPrey").style.display = 'none';
        document.getElementById("regurgitateBalls").style.display = 'none';
    });
    document.getElementById("regurgitateBalls").addEventListener("click", function () {
        var who = player.Vore.Balls[PreyIndex];
        enemies.push(who);
        player.Vore.Balls.splice(PreyIndex, 1);
        document.getElementById("BallsContent").style.display = 'grid';
        document.getElementById("BallsPrey").style.display = 'none';
        document.getElementById("BallsLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBallsPrey").style.display = 'none';
        document.getElementById("regurgitateBalls").style.display = 'none';
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
        document.getElementById("VaginaContent").style.display = 'none';
        document.getElementById("VaginaPrey").style.display = 'block';
        document.getElementById("VaginaLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveVaginaPrey").style.display = 'inline-block';
        document.getElementById("regurgitateVagina").style.display = 'inline-block';
        document.getElementById("VaginaPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveVaginaPrey").addEventListener("click", function () {
        document.getElementById("VaginaContent").style.display = 'grid';
        document.getElementById("VaginaPrey").style.display = 'none';
        document.getElementById("VaginaLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveVaginaPrey").style.display = 'none';
        document.getElementById("regurgitateVagina").style.display = 'none';
    });
    document.getElementById("regurgitateVagina").addEventListener("click", function () {
        var who = player.Vore.Vagina[PreyIndex];
        enemies.push(who);
        player.Vore.Vagina.splice(PreyIndex, 1);
        document.getElementById("VaginaContent").style.display = 'grid';
        document.getElementById("VaginaPrey").style.display = 'none';
        document.getElementById("VaginaLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveVaginaPrey").style.display = 'none';
        document.getElementById("regurgitateVagina").style.display = 'none';
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
        document.getElementById("BreastContent").style.display = 'none';
        document.getElementById("BreastPrey").style.display = 'block';
        document.getElementById("BreastLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveBreastPrey").style.display = 'inline-block';
        document.getElementById("regurgitateBreast").style.display = 'inline-block';
        document.getElementById("BreastPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };

    document.getElementById("LeaveBreastPrey").addEventListener("click", function () {
        document.getElementById("BreastContent").style.display = 'grid';
        document.getElementById("BreastPrey").style.display = 'none';
        document.getElementById("BreastLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBreastPrey").style.display = 'none';
        document.getElementById("regurgitateBreast").style.display = 'none';
    });
    document.getElementById("regurgitateBreast").addEventListener("click", function () {
        var who = player.Vore.Breast[PreyIndex];
        enemies.push(who);
        player.Vore.Breast.splice(PreyIndex, 1);
        document.getElementById("BreastContent").style.display = 'grid';
        document.getElementById("BreastPrey").style.display = 'none';
        document.getElementById("BreastLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveBreastPrey").style.display = 'none';
        document.getElementById("regurgitateBreast").style.display = 'none';
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
        document.getElementById("StomachContent").style.display = 'none';
        document.getElementById("StomachPrey").style.display = 'block';
        document.getElementById("StomachLeave").style.display = 'none';
        document.getElementById("LeaveVore").style.display = 'none';
        document.getElementById("LeaveStomachPrey").style.display = 'inline-block';
        document.getElementById("regurgitateStomach").style.display = 'inline-block';
        document.getElementById("StomachPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    };
    document.getElementById("LeaveStomachPrey").addEventListener("click", function () {
        document.getElementById("StomachContent").style.display = 'grid';
        document.getElementById("StomachPrey").style.display = 'none';
        document.getElementById("StomachLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveStomachPrey").style.display = 'none';
        document.getElementById("regurgitateStomach").style.display = 'none'
    });
    document.getElementById("regurgitateStomach").addEventListener("click", function () {
        var who = player.Vore.Stomach[PreyIndex];
        enemies.push(who);
        player.Vore.Stomach.splice(PreyIndex, 1);

        document.getElementById("StomachContent").style.display = 'grid';
        document.getElementById("StomachPrey").style.display = 'none';
        document.getElementById("StomachLeave").style.display = 'inline-block';
        document.getElementById("LeaveVore").style.display = 'inline-block';
        document.getElementById("LeaveStomachPrey").style.display = 'none';
        document.getElementById("regurgitateStomach").style.display = 'none'
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
    document.getElementById("ShowStomach").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreStomach").style.display = 'block';
        document.getElementById("LeaveStomachPrey").style.display = 'none';
        document.getElementById("regurgitateStomach").style.display = 'none';
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
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreVagina").style.display = 'block';
        document.getElementById("LeaveVaginaPrey").style.display = 'none';
        document.getElementById("regurgitateVagina").style.display = 'none';
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
        document.getElementById("VoreButtons").style.display = 'none'
        document.getElementById("VoreBreast").style.display = 'block';
        document.getElementById("LeaveBreastPrey").style.display = 'none';
        document.getElementById("regurgitateBreast").style.display = 'none';
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
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'block';
        document.getElementById("LeaveBallsPrey").style.display = 'none';
        document.getElementById("regurgitateBalls").style.display = 'none';
        var food = "";
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            var ps = player.Vore.Balls[e];
            EssenceCheck(ps);
            food += PreyButton(ps, "Balls", e);
        }
        document.getElementById("BallsContent").innerHTML = food;
        document.getElementById("CumDigestion").innerHTML = "Cum transformation " + Settings.VoreSettings.CumTF;
    });
    document.getElementById("CumDigestion").addEventListener("click", function () {
        Settings.VoreSettings.CumTF = !Settings.VoreSettings.CumTF;
        document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
    });
    document.getElementById("ShowAnal").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'block';
        document.getElementById("LeaveAnalPrey").style.display = 'none';
        document.getElementById("regurgitateAnal").style.display = 'none';
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

    document.getElementById("StomachLeave").addEventListener("click", function () {
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("VaginaLeave").addEventListener("click", function () {
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("BreastLeave").addEventListener("click", function () {
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("BallsLeave").addEventListener("click", function () {
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
    });
    document.getElementById("AnalLeave").addEventListener("click", function () {
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
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
                console.log(player.Vore.VorePerks.AbsorbStats.Count);
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
        battle = false;
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("VoreButtons").style.display = 'grid';

    });

    function VoreEngine() {
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

        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            if (!player.Vore.Stomach[e].hasOwnProperty("LastName")) {
                player.Vore.Stomach[e].LastName = "";
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        if (player.Vore.Stomach[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Stomach[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    case "Femininity":
                        if (player.Vore.Stomach[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Stomach[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    default:
                        if (player.Vore.Stomach[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Stomach[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        if (player.Vore.Stomach[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Stomach[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Stomach[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Stomach[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }

            }
            if (Settings.VoreSettings.StomachDigestion) {
                player.Vore.Stomach[e].Weight -= 0.001;
                player.Vore.StomachExp += 0.001;
                player.Vore.Exp += 0.001;
                player.Fat += 0.0005;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Stomach[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.StomachExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Fat += 0.0005 * player.Vore.VorePerks.FasterDigestion.Count;
                }

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
            } else {
                player.Vore.StomachExp += 0.0005;
                player.Vore.Exp += 0.0005;
            }
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        if (player.Vore.Vagina[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Vagina[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    case "Femininity":
                        if (player.Vore.Vagina[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Vagina[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    default:
                        if (player.Vore.Vagina[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Vagina[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        if (player.Vore.Vagina[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Vagina[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Vagina[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Vagina[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }
            }
            if (Settings.VoreSettings.VCumDigestion) {
                player.Vore.Vagina[e].Weight -= 0.001;
                player.Vore.Vagina[e].VaginaExp += 0.001;
                player.Vore.Exp += 0.001;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Vagina[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Vagina[e].VaginaExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
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
            } else {
                player.Vore.VaginaExp += 0.0005;
                player.Vore.Exp += 0.0005;
            }
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        if (player.Vore.Breast[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Breast[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    case "Femininity":
                        if (player.Vore.Breast[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Breast[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    default:
                        if (player.Vore.Breast[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Breast[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        if (player.Vore.Breast[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Breast[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Breast[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Breast[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }

            }
            if (Settings.VoreSettings.MilkTF) {
                player.Vore.Breast[e].Weight -= 0.001;
                player.Vore.BreastExp += 0.001;
                player.Vore.Exp += 0.001;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Breast[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Breast[e].BreastExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
                for (var b = 0; b < player.Boobies.length; b++) {
                    if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                        player.Boobies[b].Milk += 0.001;
                        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                            player.Boobies[b].Milk += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                        };
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
            } else {
                player.Vore.BreastExp += 0.0005;
                player.Vore.Exp += 0.0005;
            }
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        if (player.Vore.Balls[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Balls[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    case "Femininity":
                        if (player.Vore.Balls[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Balls[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    default:
                        if (player.Vore.Balls[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Balls[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        if (player.Vore.Balls[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Balls[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Balls[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Balls[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }

            }
            if (Settings.VoreSettings.CumTF) {
                player.Vore.Balls[e].Weight -= 0.001;
                player.Vore.BallsExp += 0.001;
                player.Vore.Exp += 0.001;
                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Balls[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Balls[e].BallsExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
                for (var b = 0; b < player.Balls.length; b++) {
                    if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                        player.Balls[b].Cum += 0.1;
                        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                            player.Balls[b].Cum += 0.1 * player.Vore.VorePerks.FasterDigestion.Count;

                        }
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
            } else {
                player.Vore.BallsExp += 0.0005;
                player.Vore.Exp += 0.001;
            }
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        if (player.Vore.Anal[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Anal[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    case "Femininity":
                        if (player.Vore.Anal[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Anal[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                    default:
                        if (player.Vore.Anal[e].Masc >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Anal[e].Masc -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Masc += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        if (player.Vore.Anal[e].Femi >= player.Vore.VorePerks.AbsorbEssence.Count * 0.001) {
                            player.Vore.Anal[e].Femi -= player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                            player.Femi += player.Vore.VorePerks.AbsorbEssence.Count * 0.001;
                        }
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Anal[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                    player.Vore.Anal[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * 0.001;
                }
            }
            if (Settings.VoreSettings.AnalDigestion) {
                player.Vore.Anal[e].Weight -= 0.001;
                player.Vore.AnalExp += 0.001;
                player.Vore.Exp += 0.001;
                player.Fat += 0.0005;

                if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
                    player.Vore.Anal[e].Weight -= 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Anal[e].AnalExp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                    player.Vore.Exp += 0.001 * player.Vore.VorePerks.FasterDigestion.Count;
                };
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
                    player.Vore.Anal.splice(e, 1);
                }
            } else {
                player.Vore.AnalExp += 0.0005;
                player.Vore.Exp += 0.001;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus - sub;
    }

    function MaxStomachCapacity() {
        var capacity = player.Height / 3
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
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
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            bonus += 0.1 * player.Vore.VorePerks.HigherCapacity.Count;
        }
        return capacity * bonus;
    }
    // End vore
