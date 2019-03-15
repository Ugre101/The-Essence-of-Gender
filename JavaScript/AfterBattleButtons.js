function AfterBattleButtons(Sex = true, Vored = false) {
    const div = document.getElementById("SexButtons");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }

    // Main Collumns 
    const Mouth = document.createElement("div"),
        Pussy = document.createElement("div"),
        Dick = document.createElement("div"),
        Anal = document.createElement("div"),
        Breast = document.createElement("div"),
        Siphon = document.createElement("div"),
        Right = document.createElement("div"); // Container for stop & capture

    const DickOne = document.createElement("div"),
        DickTwo = document.createElement("div");
    Dick.appendChild(DickOne);
    Dick.appendChild(DickTwo);
    const PlayerMaxOrgasm = Math.round(player.End / 8),
        ee = enemies[EnemyIndex];
    if (Sex) {
        if (PlayerMaxOrgasm >= player.Orgasm) {
            const GetRimjob = InputButton("Receive rimjob"),
                GiveRimjob = InputButton("Give rimjob");
            GetRimjob.addEventListener("click", SexActGetRimjob);
            Anal.appendChild(GetRimjob);

            GiveRimjob.addEventListener("click", SexActGiveRimjob);
            Anal.appendChild(GiveRimjob);

            if (ee.Pussies.length > 0) {
                const GiveCunnilingus = InputButton("Give Cunnilingus");
                GiveCunnilingus.addEventListener("click", SexActGiveCunnilingus)
                Mouth.appendChild(GiveCunnilingus);

                if (player.Pussies.length > 0) {
                    const Scissoring = InputButton("Scissoring");
                    Scissoring.addEventListener("click", SexActScissoring);
                    Pussy.appendChild(Scissoring);
                }

            }
            if (ee.Dicks.length > 0) {
                const GiveBlowjob = InputButton("Give blowjob");
                GiveBlowjob.addEventListener("click", SexActGiveBlowjob);
                Mouth.appendChild(GiveBlowjob);

                if (player.Pussies.length > 0) {
                    const RideCowgirl = InputButton("Ride cowgirl");
                    RideCowgirl.addEventListener("click", SexActRideCowgirl);
                    Pussy.appendChild(RideCowgirl);
                }
            }
            if (player.Pussies.length > 0) {
                const GetCunnilingus = InputButton("Receive cunnilingus");
                GetCunnilingus.addEventListener("click", SexActGetCunnilingus);
                Mouth.appendChild(GetCunnilingus);

                if (ee.Dicks.length > 1) {
                    // Dual pen old value Get dual penetrated
                    const DualFuckt = InputButton("");
                    Pussy.appendChild(DualFuckt);
                }

                if (ee.Height * 9 < player.Height) {
                    const Insertion = InputButton("Insertion");
                    Insertion.addEventListener("click", SexActInsertion);
                    Pussy.appendChild(Insertion);
                }


            }
            if (player.Dicks.length > 0) {
                const GetBlowjob = InputButton("Receive blowjob");
                GetBlowjob.addEventListener("click", SexActGetBlowjob);
                DickOne.appendChild(GetBlowjob);

                if (player.Dicks.length > 1 && ee.Pussies.length > 0) {
                    const DualPen = InputButton("");
                    DualPen.addEventListener("click", SexActDualPen);
                    DickTwo.appendChild(DualPen);
                    // Dual pen
                }
                if (player.Dicks.length > 2 && ee.Pussies.length > 1) {
                    // Multi pen
                    const MultiPen = InputButton("");
                    MultiPen.addEventListener("click", SexActMultiPen);
                    DickTwo.appendChild(MultiPen);
                }

                if (ee.Pussies.length > 0) {
                    const Missionary = InputButton("Missionary"),
                        DoggyStyle = InputButton("Doggy style");

                    Missionary.addEventListener("click", SexActMissionary);
                    DickOne.appendChild(Missionary);

                    DoggyStyle.addEventListener("click", SexActDoggyStyle);
                    DickOne.appendChild(DoggyStyle);
                }

                const DoggyStyleAnal = InputButton("Anal doggy style");
                DoggyStyleAnal.addEventListener("click", SexActDoggyStyleAnal);
                DickTwo.appendChild(DoggyStyleAnal);

            }
            let Milktotal = 0;
            for (let b = 0; b < player.Boobies.length; b++) {
                Milktotal += player.Boobies[b].Milk;
            }
            if (Milktotal > 100) {
                const BreastFeed = InputButton("Breast feed");
                BreastFeed.addEventListener("click", SexActBreastFeed);
                Breast.appendChild(BreastFeed);
            }
            let dickCount = DickOne.childElementCount + DickTwo.childElementCount
            if (window.innerHeight < 800 && dickCount > 3) {
                DickTwo.style.display = "none";
                const DickAction = InputButton("More");
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
    }
    const Stop = InputButton("Stop sex");
    Dungeon ? Stop.addEventListener("click", DungeonStopButton) :
        Stop.addEventListener("click", StopSexButton);
    Right.appendChild(Stop);
    if (!Vored) {
        if (ee.Orgasm > 4 && House.Dormmates.length < (House.Dorm * 3)) {
            const Capture = InputButton("Take them home");
            Dungeon ? Capture.addEventListener("click", DungeonCapture) :
                Capture.addEventListener("click", SexActCapture);
            Right.appendChild(Capture);
        }
        if (player.SessionOrgasm > 0 && player.Perks.GiveEssence.Count > 0) {
            if (player.Masc > 0) {
                const InjectM = InputButton("Infuse masculinity");
                InjectM.addEventListener("click", DrainInjectM);
                Siphon.appendChild(InjectM);
            } else { //filler button to stop player from missclicking
                const InjectM = InputButton("Empty");
                Siphon.appendChild(InjectM);
            }
            if (player.Femi > 0) {
                const InjectF = InputButton("Infuse femininity");
                InjectF.addEventListener("click", DrainInjectF);
                Siphon.appendChild(InjectF);
            } else {
                const InjectF = InputButton("Empty");
                Siphon.appendChild(InjectF);
            }

        }
        if (ee.SessionOrgasm > 0) {
            if (ee.Masc > 0) {
                const DrainM = InputButton("Siphon masculinity");
                DrainM.addEventListener("click", DrainDrainM);
                Siphon.appendChild(DrainM);
            } else {
                const DrainM = InputButton("Drained");
                Siphon.appendChild(DrainM);
            }

            if (ee.Femi > 0) {
                const DrainF = InputButton("Siphon femininity");
                DrainF.addEventListener("click", DrainDrainF);
                Siphon.appendChild(DrainF);
            } else {
                const DrainF = InputButton("Drained");
                Siphon.appendChild(DrainF);
            }
        }
        if (Settings.Vore) {
            if (StomachCapacity() > enemies[EnemyIndex].Weight) {
                const OralVore = InputButton("Eat them");
                OralVore.addEventListener("click", VoreActionsOralVore);
                Mouth.appendChild(OralVore);
            }
            if (VaginaCapacity() > enemies[EnemyIndex].Weight) {
                const Unbirth = InputButton("Unbirth");
                Unbirth.addEventListener("click", VoreActionsUnbirth);
                Pussy.appendChild(Unbirth);
            }
            if (BallsCapacity() > enemies[EnemyIndex].Weight) {
                const CockVore = InputButton("Cock vore");
                CockVore.addEventListener("click", VoreActionsCockVore);
                DickOne.appendChild(CockVore);
            }
            if (BreastCapacity() > enemies[EnemyIndex].Weight) {
                const BreastVore = InputButton("Breast vore");
                BreastVore.addEventListener("click", VoreActionsBreastVore);
                Breast.appendChild(BreastVore);
            }
            if (AnalCapacity() > enemies[EnemyIndex].Weight) {
                const AnalVore = InputButton("Anal vore");
                AnalVore.addEventListener("click", VoreActionsAnalVore);
                Anal.appendChild(AnalVore);
            }
        }
    }
    const Frag = document.createDocumentFragment(),
        divs = [Mouth, Pussy, Dick, Anal, Breast, Siphon, Right].forEach(function (div) {
            Frag.appendChild(div);
        });
    div.appendChild(Frag);

}