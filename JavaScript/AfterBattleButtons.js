function AfterBattleButtons(Sex = true) {
    var ee = enemies[EnemyIndex];

    var div = document.getElementById("SexButtons");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }

    // Main Collumns 
    var Mouth = document.createElement("div");
    var Pussy = document.createElement("div");
    var Dick = document.createElement("div");
    var Anal = document.createElement("div");
    var Breast = document.createElement("div");
    var Siphon = document.createElement("div");
    var Right = document.createElement("div"); // Container for stop & capture

    var DickOne = document.createElement("div");
    Dick.appendChild(DickOne);
    var DickTwo = document.createElement("div");
    Dick.appendChild(DickTwo);
    var PlayerMaxOrgasm = Math.round(player.End / 8);
    console.log(player.Orgasm + ">=" + PlayerMaxOrgasm)
    if (Sex) {
        if (PlayerMaxOrgasm >= player.Orgasm) {
            var GetRimjob = InputButton("Receive rimjob");
            GetRimjob.addEventListener("click", function () {
                SexActGetRimjob();
            });
            Anal.appendChild(GetRimjob);

            var GiveRimjob = InputButton("Give rimjob");
            GiveRimjob.addEventListener("click", function () {
                SexActGiveRimjob();
            });
            Anal.appendChild(GiveRimjob);

            if (ee.Pussies.length > 0) {
                var GiveCunnilingus = InputButton("Give Cunnilingus");
                GiveCunnilingus.addEventListener("click", function () {
                    SexActGiveCunnilingus();
                })
                Mouth.appendChild(GiveCunnilingus);

                if (player.Pussies.length > 0) {
                    var Scissoring = InputButton("Scissoring");
                    Scissoring.addEventListener("click", function () {
                        SexActScissoring();
                    });
                    Pussy.appendChild(Scissoring);
                }

            }
            if (ee.Dicks.length > 0) {
                var GiveBlowjob = InputButton("Give blowjob");
                GiveBlowjob.addEventListener("click", function () {
                    SexActGiveBlowjob();
                });
                Mouth.appendChild(GiveBlowjob);

                if (player.Pussies.length > 0) {
                    var RideCowgirl = InputButton("Ride cowgirl");
                    RideCowgirl.addEventListener("click", function () {
                        SexActRideCowgirl();
                    });
                    Pussy.appendChild(RideCowgirl);
                }
            }
            if (player.Pussies.length > 0) {
                var PP = document.createElement("div");

                var GetCunnilingus = InputButton("Receive cunnilingus");
                GetCunnilingus.addEventListener("click", function () {
                    SexActGetCunnilingus();
                });
                Mouth.appendChild(GetCunnilingus);

                if (ee.Dicks.length > 1) {
                    // Dual pen old value Get dual penetrated
                    var DualFuckt = InputButton("");
                    Pussy.appendChild(DualFuckt);
                }

                if (enemies[EnemyIndex].Height * 9 < player.Height) {
                    var Insertion = InputButton("Insertion");
                    Insertion.addEventListener("click", function () {
                        SexActInsertion();
                    });
                    Pussy.appendChild(Insertion);
                }


            }
            if (player.Dicks.length > 0) {
                var PD = document.createElement("div");
                var GetBlowjob = InputButton("Receive blowjob");
                GetBlowjob.addEventListener("click", function () {
                    SexActGetBlowjob();
                });
                DickOne.appendChild(GetBlowjob);

                if (player.Dicks.length > 1 && ee.Pussies.length > 0) {
                    var DualPen = InputButton("");
                    DualPen.addEventListener("click", function () {
                        SexActDualPen();
                    })
                    DickTwo.appendChild(DualPen);
                    // Dual pen
                }
                if (player.Dicks.length > 2 && ee.Pussies.length > 1) {
                    // Multi pen
                    var MultiPen = InputButton("");
                    MultiPen.addEventListener("click", function () {
                        SexActMultiPen();
                    })
                    DickTwo.appendChild(MultiPen);
                }

                if (ee.Pussies.length > 0) {
                    var Missionary = InputButton("Missionary");
                    Missionary.addEventListener("click", function () {
                        SexActMissionary();
                    });
                    DickOne.appendChild(Missionary);

                    var DoggyStyle = InputButton("Doggy style");
                    DoggyStyle.addEventListener("click", function () {
                        SexActDoggyStyle();
                    })
                    DickOne.appendChild(DoggyStyle);
                }

                var DoggyStyleAnal = InputButton("Anal doggy style");
                DoggyStyleAnal.addEventListener("click", function () {
                    SexActDoggyStyleAnal();
                })
                DickTwo.appendChild(DoggyStyleAnal);

            }
            if (player.SessionOrgasm > 0 && player.Perks.GiveEssence.Count > 0) {
                if (player.Masc > 0) {
                    var InjectM = InputButton("Infuse masculinity");
                    InjectM.addEventListener("click", function () {
                        DrainInjectM();
                    });
                    Siphon.appendChild(InjectM);
                }
                if (player.Femi > 0) {
                    var InjectF = InputButton("Infuse femininity");
                    InjectF.addEventListener("click", function () {
                        DrainInjectF();
                    });
                    Siphon.appendChild(InjectF);
                }
            }
            if (enemies[EnemyIndex].SessionOrgasm > 0) {
                if (ee.Masc > 0) {
                    var DrainM = InputButton("Siphon masculinity");
                    DrainM.addEventListener("click", function () {
                        DrainDrainM()
                    });
                    Siphon.appendChild(DrainM);
                }
                if (ee.Femi > 0) {
                    var DrainF = InputButton("Siphon femininity");
                    DrainF.addEventListener("click", function () {
                        DrainDrainF();
                    });
                    Siphon.appendChild(DrainF);
                }


            }
            var Milktotal = 0;
            for (var b = 0; b < player.Boobies.length; b++) {
                Milktotal += player.Boobies[b].Milk;
            }
            if (Milktotal > 100) {
                var BreastFeed = InputButton("Breast feed");
                BreastFeed.addEventListener("click", function () {

                });
                Breast.appendChild(BreastFeed);
            }
            if (Settings.Vore) {
                if (StomachCapacity() > enemies[EnemyIndex].Weight) {
                    var OralVore = InputButton("Eat them");
                    OralVore.addEventListener("click", function () {
                        VoreActionsOralVore();
                    });
                    Mouth.appendChild(OralVore);
                }
                if (VaginaCapacity() > enemies[EnemyIndex].Weight) {
                    var Unbirth = InputButton("Unbirth");
                    Unbirth.addEventListener("click", function () {
                        VoreActionsUnbirth();
                    });
                    Pussy.appendChild(Unbirth);
                }
                if (BallsCapacity() > enemies[EnemyIndex].Weight) {
                    var CockVore = InputButton("Cock vore");
                    CockVore.addEventListener("click", function () {
                        VoreActionsCockVore();
                    });
                    DickOne.appendChild(CockVore);
                }
                if (BreastCapacity() > enemies[EnemyIndex].Weight) {
                    var BreastVore = InputButton("Breast vore");
                    BreastVore.addEventListener("click", function () {
                        VoreActionsBreastVore();
                    });
                    Breast.appendChild(BreastVore);
                }
                if (AnalCapacity() > enemies[EnemyIndex].Weight) {
                    var AnalVore = InputButton("Anal vore");
                    AnalVore.addEventListener("click", function () {
                        VoreActionsAnalVore();
                    });
                    Anal.appendChild(AnalVore);
                }
            }
            var dickCount = DickOne.childElementCount + DickTwo.childElementCount
            if (window.innerHeight < 800 && dickCount > 3) {
                DickTwo.style.display = "none";

                var DickAction = InputButton("More");
                DickAction.addEventListener("click", function () {
                    if (DickTwo.style.display === "none") {
                        DickOne.style.display = "none";
                        DickTwo.style.display = "block";
                    } else {
                        DickOne.style.display = "block";
                        DickTwo.style.display = "none";
                    }
                });
                Dick.appendChild(DickAction);
            }
        }
        if (enemies[EnemyIndex].Orgasm > 4 && House.Dormmates.length < (House.Dorm * 3)) {
            if (Dungeon) {
                var Capture = InputButton("Take them home");
                Capture.addEventListener("click", function () {
                    DungeonCapture();
                });
                Right.appendChild(Capture);
            } else {
                var Capture = InputButton("Take them home");
                Capture.addEventListener("click", function () {
                    SexActCapture();
                });
                Right.appendChild(Capture);
            }
        }
    }
    if (Dungeon) {
        var Stop = InputButton("Stop sex");
        Stop.addEventListener("click", function () {
            DungeonStopButton();
        })
        Right.appendChild(Stop);
    } else {
        var Stop = InputButton("Stop sex");
        Stop.addEventListener("click", function () {
            StopSexButton()
        });
        Right.appendChild(Stop);
    }
    div.appendChild(Mouth);
    div.appendChild(Pussy);
    div.appendChild(Dick);
    div.appendChild(Anal);
    div.appendChild(Breast);
    div.appendChild(Siphon);
    div.appendChild(Right);
}