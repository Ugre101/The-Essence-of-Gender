function OrganSize(Size, who) {
    return Math.ceil(Math.sqrt(Size) * GrowthScale(who));
}

function EssenceCheck(who) {
    function DickSize(e = 0) {
        return Math.max(0, Math.min(who.Height / 3, (Math.sqrt(who.Masc / (e + 1)) + who.OrganMod.Dick.Size) * GrowthScale(who)));
    }

    function DickMaker(e = 0) {
        const Dick = {
            Size: DickSize(e),
            Type: who.Race,
            Virgin: true
        }
        return Dick;
    }

    function BallsSize(e = 0) {
        return Math.max(0, Math.min(who.Height / 3, (Math.sqrt(who.Masc / (e + 2) + who.OrganMod.Balls.Size) * GrowthScale(who))));
    }

    function BallMakes(e = 0) {
        const Ball = {
            Size: BallsSize(e),
            Type: who.Race,
            CumMax: 1 / 3 * Math.PI * Math.pow(BallsSize(e), 3),
            Cum: 1 / 6 * Math.PI * Math.pow(BallsSize(e), 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        return Ball;
    }

    function BoobSize(e = 0) {
        return Math.max(0, Math.min(who.Height / 3, (Math.sqrt(who.Femi / (e + 1) + who.OrganMod.Boobies.Size) * GrowthScale(who))));
    }

    function BoobMaker(e = 0) {
        const Boob = {
            Size: BoobSize(e),
            Type: who.Race,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(BoobSize(e), 3)
        }
        return Boob;
    }

    function PussySize(e = 0) {
        return Math.max(0, Math.min(who.Height / 3, (Math.sqrt(who.Femi / (e + 2) + who.OrganMod.Pussy.Size) * GrowthScale(who))));
    }

    function PussyMaker(e = 0) {
        const Pussy = {
            Size: PussySize(e),
            Type: who.Race,
            Virgin: true
        }
        return Pussy;
    }
    if (!who.hasOwnProperty("OrganMod")) {
        who.OrganMod = {
            Dick: {
                Size: 0
            },
            Boobies: {
                Size: 0
            },
            Balls: {
                Size: 0
            },
            Pussy: {
                Size: 0
            },
            Anal: {
                Size: 0
            }
        }
    }
    if (!who.hasOwnProperty("Dicks")) {
        who.Dicks = [];
    }
    if (!who.hasOwnProperty("Balls")) {
        who.Balls = [];
    }
    if (!who.hasOwnProperty("Pussies")) {
        who.Pussies = [];
    }
    if (!who.hasOwnProperty("Boobies")) {
        who.Boobies = [];
    }
    if (!who.hasOwnProperty("Anal")) {
        who.Anal = []
    }

    if (DickSize() < who.Height * 0.03 && who.Dicks.length > 0) {
        who.Dicks.pop();
    } else {
        if (who.Dicks.length === 0) {
            who.Dicks.push(DickMaker());
            EssenceCheck(who); // Recursion might be a problem?
            return;
        }
        for (let e = 0; e < who.Dicks.length; e++) {
            who.Dicks[e].Size = DickSize(e);
            if (e + 1 === who.Dicks.length && who.Dicks[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxDicks > e) {
                who.Dicks.push(DickMaker(e + 1));
                EssenceCheck(who); // Recursion might be a problem?
                return;
            } else if (who.Dicks[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxDicks) {
                if (who.Dicks.length > 0) {
                    who.Dicks.pop();
                }
            }
        }
    }

    if (BallsSize() < who.Height * 0.03 && who.Balls.length > 0) {
        who.Balls.pop();
    } else {
        if (who.Balls.length === 0) {
            who.Balls.push(BallMakes());
            EssenceCheck(who);
            return;
        }
        for (let e = 0; e < who.Balls.length; e++) {
            who.Balls[e].Size = BallsSize(e);
            if (e == who.Balls.length - 1 && who.Balls[e].Size > who.Height / 6 && Settings.MaxLimbs.MaxBalls > e) {
                who.Balls.push(BallMakes(e + 1));
                EssenceCheck(who);
                return;
            } else if (who.Balls[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxBalls) {
                who.Balls.pop();
            }
        }

    }

    if (PussySize() < who.Height * 0.03 && who.Pussies.length > 0) {
        who.Pussies.pop();
    } else {
        if (who.Pussies.length === 0) {
            who.Pussies.push(PussyMaker());
            EssenceCheck(who);
            return;
        }
        for (var e = 0; e < who.Pussies.length; e++) {
            who.Pussies[e].Size = PussySize(e);
            if (e + 1 === who.Pussies.length && who.Pussies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxVaginas > e) {
                who.Pussies.push(PussyMaker(e + 1));
                EssenceCheck(who);
                return;
            } else if (who.Pussies[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxVaginas) {
                who.Pussies.pop();
            }
        }
    }
    if (who.Boobies.length === 0) {
        who.Boobies.push(BoobMaker());
        EssenceCheck(who);
        return
    }
    for (let e = 0; e < who.Boobies.length; e++) {
        if (e === 0) {
            who.Boobies[e].Size = Math.max(0, BoobSize(e));
        } else {
            who.Boobies[e].Size = BoobSize(e)
        }
        who.Boobies[e].MilkMax = 1 / 3 * Math.PI * Math.pow(who.Boobies[e].Size, 3);
        if (e + 1 === who.Boobies.length && who.Boobies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxBoobs > e) {
            who.Boobies.push(BoobMaker(e + 1));
            EssenceCheck(who);
            return
        } else if (who.Boobies.length > 1 && who.Boobies[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxBoobs) {
            who.Boobies.pop();
            console.log("pop")
        }
    }
    if (who.Anal.length === 0) {
        const Anal = {
            Size: who.Height / 12,
            Type: who.Race,
            Virgin: true,
            stretch: 1,
        }
        who.Anal.push(Anal);
    } else {
        who.Anal[0].Size = who.Height / 12;
    }
    return;

}