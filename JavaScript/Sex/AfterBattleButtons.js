function AfterBattleButtons(Sex = true, Vored = false) {
    const div = document.getElementById("SexButtons");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }

    function SexButton(value, func) {
        const button = InputButton(value);
        button.addEventListener("click", func);
        return button
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
            Anal.appendChild(SexButton("Receive rimjob", SexActGetRimjob));
            Anal.appendChild(SexButton("Give rimjob", SexActGiveRimjob));
            if (ee.Pussies.length > 0) {
                Mouth.appendChild(SexButton("Give Cunnilingus", SexActGiveCunnilingus));
                if (player.Pussies.length > 0) {
                    Pussy.appendChild(SexButton("Scissoring", SexActScissoring));
                };
            };
            if (ee.Dicks.length > 0) {
                Mouth.appendChild(SexButton("Give blowjob", SexActGiveBlowjob));
                if (player.Pussies.length > 0) {
                    Pussy.appendChild(SexButton("Ride cowgirl", SexActRideCowgirl));
                };
            };
            if (player.Pussies.length > 0) {
                Mouth.appendChild(SexButton("Receive cunnilingus", SexActGetCunnilingus));
                if (ee.Dicks.length > 1) {
                    // Dual pen old value Get dual penetrated
                    const DualFuckt = InputButton("");
                    Pussy.appendChild(DualFuckt);
                };
                if (ee.Height * 9 < player.Height) {
                    Pussy.appendChild(SexButton("Insertion", SexActInsertion));
                };
            };
            if (player.Dicks.length > 0) {
                DickOne.appendChild(SexButton("Receive blowjob", SexActGetBlowjob));
                if (player.Dicks.length > 1 && ee.Pussies.length > 0) {
                    // Dual pen
                    DickTwo.appendChild(SexButton("", SexActDualPen));
                };
                if (player.Dicks.length > 2 && ee.Pussies.length > 1) {
                    // Multi pen
                    DickTwo.appendChild(SexButton("", SexActMultiPen));
                };
                if (ee.Pussies.length > 0) {
                    DickOne.appendChild(SexButton("Missionary", SexActMissionary));
                    DickOne.appendChild(SexButton("Doggy style", SexActDoggyStyle));
                };
                DickTwo.appendChild(SexButton("Anal doggy style", SexActDoggyStyleAnal));
            }
            const Milktotal = player.Boobies.map(v => v.Milk).reduce((acc, cur) => acc + cur);
            if (Milktotal > 100) {
                Breast.appendChild(SexButton("Breast feed", SexActBreastFeed));
            }
            const dickCount = DickOne.childElementCount + DickTwo.childElementCount
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
            const InfuseDiv = document.createElement("div");
            InfuseDiv.classList.add("MascFemi");
            if (player.Masc > 0) {
                const InjectM = InputButton("Infuse Masc");
                InjectM.addEventListener("click", DrainInjectM);
                InjectM.style.background = "linear-gradient(to right,white,blue)";
                InfuseDiv.appendChild(InjectM);
            } else { //filler button to stop player from missclicking
                const InjectM = InputButton("Empty");
                InfuseDiv.appendChild(InjectM);
            }
            if (player.Femi > 0) {
                const InjectF = InputButton("Infuse Femi");
                InjectF.addEventListener("click", DrainInjectF);
                InjectF.style.background = "linear-gradient(to right,white,#C12970)";
                InfuseDiv.appendChild(InjectF);
            } else {
                const InjectF = InputButton("Empty");
                InfuseDiv.appendChild(InjectF);
            }
            Siphon.appendChild(InfuseDiv);

        }
        if (ee.SessionOrgasm > 0) {
            const SiphonDiv = document.createElement("div");
            SiphonDiv.classList.add("MascFemi");
            if (ee.Masc > 0) {
                const DrainM = InputButton("Siphon Masc");
                DrainM.addEventListener("click", DrainDrainM);
                DrainM.style.background = "linear-gradient(to right,blue,white)";
                SiphonDiv.appendChild(DrainM);
            } else {
                const DrainM = InputButton("Drained");
                SiphonDiv.appendChild(DrainM);
            }

            if (ee.Femi > 0) {
                const DrainF = InputButton("Siphon Femi");
                DrainF.addEventListener("click", DrainDrainF);
                DrainF.style.background = "linear-gradient(to right, #C12970,white)";

                SiphonDiv.appendChild(DrainF);
            } else {
                const DrainF = InputButton("Drained");
                SiphonDiv.appendChild(DrainF);
            }
            Siphon.appendChild(SiphonDiv);
            if (ee.Dicks.length > 0) { // Trial
                let EEDickIndex = ee.Dicks.length - 1,
                    playerDickIndex = player.Dicks.length - 1;
                const SiphonDickDiv = document.createElement("div"),
                    SiphonDickIndex = InputButton(EEDickIndex + 1, "Enemy"),
                    SiphonDick = InputButton("Siphon dick(test)"),
                    SiphonPlayerDickIndex = InputButton(playerDickIndex + 1, "Player");

                SiphonDickDiv.classList.add("SiphonButtons");

                SiphonDickIndex.addEventListener("click", function () {
                    (EEDickIndex + 1 < ee.Dicks.length) ? EEDickIndex++ : EEDickIndex = 0;
                    SiphonDickIndex.setAttribute("value", EEDickIndex + 1);
                });
                SiphonDickDiv.appendChild(SiphonDickIndex);

                SiphonDick.addEventListener("click", function () {
                    DrainSiphonDick(EEDickIndex, playerDickIndex);
                });
                SiphonDickDiv.appendChild(SiphonDick);

                SiphonPlayerDickIndex.addEventListener("click", function () {
                    (playerDickIndex + 1 < player.Dicks.length) ? playerDickIndex++ : playerDickIndex = 0;
                    SiphonPlayerDickIndex.setAttribute("value", playerDickIndex + 1);
                });
                SiphonDickDiv.appendChild(SiphonPlayerDickIndex);
                Siphon.appendChild(SiphonDickDiv);

                const SiphonDickToMasc = InputButton("Shrink dick(test)");
                SiphonDickToMasc.addEventListener("click", DrainSiphonDickToMasc);
                Siphon.appendChild(SiphonDickToMasc);
            }
            if (ee.Balls.length > 0) {
                let EBI = ee.Balls.length - 1,
                    PBI = player.Balls.length - 1;
                const SiphonBallsDiv = document.createElement("div"),
                    SiphonBallsIndex = InputButton(EBI + 1, "Enemy"),
                    SiphonBalls = InputButton("Siphon balls(test)"),
                    SiphonPlayerBallsIndex = InputButton(PBI + 1, "Player");

                SiphonBallsDiv.classList.add("SiphonButtons");

                SiphonBallsIndex.addEventListener("click", function () {
                    (EBI + 1 < ee.Balls.length) ? EBI++ : EBI = 0;
                    SiphonBallsIndex.setAttribute("value", EBI + 1);
                });
                SiphonBallsDiv.appendChild(SiphonBallsIndex);

                SiphonBalls.addEventListener("click", function () {
                    DrainSiphonBalls(EBI, PBI);
                });
                SiphonBallsDiv.appendChild(SiphonBalls);

                SiphonPlayerBallsIndex.addEventListener("click", function () {
                    (PBI + 1 < player.Balls.length) ? PBI++ : PBI = 0;
                    SiphonPlayerBallsIndex.setAttribute("value", PBI + 1);
                });
                SiphonBallsDiv.appendChild(SiphonPlayerBallsIndex);
                Siphon.appendChild(SiphonBallsDiv);

                const SiphonBallsToMasc = InputButton("Shrink balls(test)");
                SiphonBallsToMasc.addEventListener("click", DrainSiphonBallsToMasc);
                Siphon.appendChild(SiphonBallsToMasc);
            }
        }
        if (Settings.Vore) {
            const {
                Weight
            } = ee;
            if (StomachCapacity() > Weight) {
                Mouth.appendChild(SexButton("Eat them", VoreActionsOralVore));
            }
            if (VaginaCapacity() > Weight) {
                Pussy.appendChild(SexButton("Unbirth", VoreActionsUnbirth));
            }
            if (BallsCapacity() > Weight) {
                DickOne.appendChild(SexButton("Cock vore", VoreActionsCockVore));
            }
            if (BreastCapacity() > Weight) {
                Breast.appendChild(SexButton("Breast vore", VoreActionsBreastVore));
            }
            if (AnalCapacity() > Weight) {
                Anal.appendChild(SexButton("Anal vore", VoreActionsAnalVore));
            }
        }
    }
    const Frag = document.createDocumentFragment(),
        divs = [Mouth, Pussy, Dick, Anal, Breast, Siphon, Right].forEach(function (div) {
            Frag.appendChild(div);
        });
    div.appendChild(Frag);

}