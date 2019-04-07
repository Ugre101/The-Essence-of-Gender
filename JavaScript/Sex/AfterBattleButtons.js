function AfterBattleButtons(Sex = true, Vored = false) {
    const div = document.getElementById("SexButtons");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }

    function SexButton(value, func) {
        const button = InputButton(value);
        button.addEventListener("click", func);
        button.classList.add("SexButtons");
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
            const Milktotal = player.Boobies.length > 0 ? player.Boobies.some(b => b.hasOwnProperty("Milk")) ? player.Boobies.map(v => v.Milk).reduce((acc, cur) => acc + cur) : 0 : 0;
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
                const InjectM = ButtonButton("Infuse Masc");
                InjectM.addEventListener("click", DrainInjectM);
                InjectM.style.background = "linear-gradient(to right,rgba(245, 245, 220),blue)";
                InfuseDiv.appendChild(InjectM);
            } else { //filler button to stop player from missclicking
                const InjectM = InputButton("Empty");
                InfuseDiv.appendChild(InjectM);
            }
            if (player.Femi > 0) {
                const InjectF = ButtonButton("Infuse Femi");
                InjectF.addEventListener("click", DrainInjectF);
                InjectF.style.background = "linear-gradient(to right,rgba(245, 245, 220),#C12970)";
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
            if (ee.Masc > 0 || ee.Balls.length > 0 || ee.Dicks.length > 0) {
                const DrainM = ButtonButton("Siphon Masc");
                DrainM.addEventListener("click", DrainDrainM);
                DrainM.style.background = "linear-gradient(to right,blue,rgba(245, 245, 220))";
                SiphonDiv.appendChild(DrainM);
            } else {
                const DrainM = InputButton("Drained");
                SiphonDiv.appendChild(DrainM);
            }

            if (ee.Femi > 0 || ee.Pussies.length > 0 || (ee.Boobies.length > 1 ? true : (ee.Boobies.length > 0 ? ee.Boobies[0].Size > 0 : false))) {
                const DrainF = ButtonButton("Siphon Femi");
                DrainF.addEventListener("click", DrainDrainF);
                DrainF.style.background = "linear-gradient(to right, #C12970,rgba(245, 245, 220))";

                SiphonDiv.appendChild(DrainF);
            } else {
                const DrainF = InputButton("Drained");
                SiphonDiv.appendChild(DrainF);
            }
            Siphon.appendChild(SiphonDiv);
            if (player.Dicks.length > 0 ? EssenceCost(Last(player.Dicks)) <= player.Masc : false || (player.Masc >= 30 && player.Dicks.length === 0)) {
                SiphonDiv.appendChild(SexButton("Grow dick", GrowDick));
            };
            if (player.Balls.length > 0 ? EssenceCost(Last(player.Balls)) <= player.Masc : false || (player.Masc >= 50 && player.Balls.length === 0)) {
                SiphonDiv.appendChild(SexButton("Grow balls", GrowBalls));
            };
            if (player.Pussies.length > 0 ? EssenceCost(Last(player.Pussies)) <= player.Femi : false || (player.Femi >= 30 && player.Pussies.length === 0)) {
                SiphonDiv.appendChild(SexButton("Grow pussy", GrowPussy));
            };
            if (player.Boobies.length > 0 ? EssenceCost(Last(player.Boobies)) <= player.Femi : false || player.Boobies.length === 0) {
                SiphonDiv.appendChild(SexButton("Grow boobs", GrowBoobs));
            };
        };
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