function OrganSize(Size, who) {
    return Size;
    // return Math.ceil(Math.sqrt(Size) * GrowthScale(who));
}

function EssenceCheck(who) {
    function DickMaker(e = 0) {
        const Dick = {
            Size: DickSize(e),
            Type: who.Race,
            Virgin: true
        }
        return Dick;
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

    function PussyMaker(e = 0) {
        const Pussy = {
            Size: PussySize(e),
            Type: who.Race,
            Virgin: true
        }
        return Pussy;
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
    if (who.Dicks.length === 0 && who.Masc >= 30) {
        const Dick = {
            Size: 1,
            Type: who.SecondRace,
            Virgin: true
        }
        who.Dicks.push(Dick);
        who.Masc -= 30;
        EssenceCheck(who);
        return
    } else if (who.Dicks.length > 0 ? EssenceCost(Last(who.Dicks)) <= who.Masc : false) {
        Last(who.Dicks).Size += 1 * ManualGrowthScale();
        who.Masc -= EssenceCost(Last(who.Dicks));
        EssenceCheck(who);
        return
    };
    if (who.Balls.length === 0 && who.Masc >= 50) {
        const Ball = {
            Size: 1,
            Type: who.SecondRace,
            CumMax: 1 / 3 * Math.PI * Math.pow(1, 3),
            Cum: 1 / 6 * Math.PI * Math.pow(1, 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        who.Balls.push(Ball);
        who.Masc -= 50;        EssenceCheck(who);
        return
    } else if (who.Balls.length > 0 ? EssenceCost(Last(who.Balls)) <= who.Masc : false) {
        Last(who.Balls).Size += 1 * ManualGrowthScale();
        who.Masc -= EssenceCost(Last(who.Balls));
        EssenceCheck(who);
        return
    };
    if (who.Pussies.length === 0 && who.Femi >= 30) {
        const Pussy = {
            Size: 1,
            Type: who.SecondRace,
            Virgin: true
        }
        who.Pussies.push(Pussy);
        who.Femi -= 30;
        EssenceCheck(who);
        return
    } else if (who.Pussies.length > 0 ? EssenceCost(Last(who.Pussies)) <= who.Femi : false) {
        Last(who.Pussies).Size += 1 * ManualGrowthScale();
        who.Femi -= EssenceCost(Last(who.Pussies));
        EssenceCheck(who);
        return
    };
    if (who.Boobies.length === 0 && who.Femi >= 30) {
        const Boob = {
            Size: 0,
            Type: who.SecondRace,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(1, 3)
        }
        who.Boobies.push(Boob);
        who.Femi -= 30;
        EssenceCheck(who);
        return
    } else if (who.Boobies.length > 0 ? EssenceCost(Last(who.Boobies)) <= who.Femi : false) {
        Last(who.Boobies).Size += 1 * ManualGrowthScale();
        who.Femi -= EssenceCost(Last(who.Boobies));
        EssenceCheck(who);
        return
    };
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