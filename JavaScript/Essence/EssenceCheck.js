function OrganSize(Size, who) {
    return Size * (who.Height / 160);
    // return Math.ceil(Math.sqrt(Size) * GrowthScale(who));
}

function EssenceCheck(who) {
    function DickMaker() {
        const Dick = {
            Size: 2,
            Type: who.Race,
            Virgin: true
        }
        return Dick;
    }

    function BallMakes() {
        const Ball = {
            Size: 2,
            Type: who.Race,
            CumMax: 1 / 3 * Math.PI * Math.pow(2, 3),
            Cum: 1 / 6 * Math.PI * Math.pow(2, 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        return Ball;
    }

    function BoobMaker(e = 0) {
        const Boob = {
            Size: 2,
            Type: who.Race,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(2, 3)
        }
        return Boob;
    }

    function PussyMaker(e = 0) {
        const Pussy = {
            Size: 2,
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
        who.Dicks.push(DickMaker());
        who.Masc -= 30;
        EssenceCheck(who);
        return
    }
    if (who.Balls.length === 0 && who.Masc >= 50) {
        who.Balls.push(BallMakes());
        who.Masc -= 50;
        EssenceCheck(who);
        return
    }
    if (who.Pussies.length === 0 && who.Femi >= 30) {
        who.Pussies.push(PussyMaker());
        who.Femi -= 30;
        EssenceCheck(who);
        return
    }
    if (who.Boobies.length === 0 && who.Femi >= 30) {
        who.Boobies.push(BoobMaker());
        who.Femi -= 30;
        EssenceCheck(who);
        return
    }
    const DickTotal = who.Dicks.length > 0 ? who.Dicks.map(d => d.Size).reduce((tot, cur) => tot + cur) : 0,
        BallsTotal = who.Balls.length > 0 ? who.Balls.map(b => b.Size).reduce((tot, cur) => tot + cur) : 0,
        PussyTotal = who.Pussies.length > 0 ? who.Pussies.map(p => p.Size).reduce((tot, cur) => tot + cur) : 0,
        BoobsTotal = who.Boobies.length > 0 ? who.Boobies.map(b => b.Size).reduce((tot, cur) => tot + cur) : 0;
    if (BallsTotal * 2 > DickTotal) {
        if (who.Dicks.length > 0 ? EssenceCost(Last(who.Dicks)) <= who.Masc : false) {
            who.Masc -= EssenceCost(Last(who.Dicks));
            Last(who.Dicks).Size++;
            EssenceCheck(who);
            return
        };
    } else {
        if (who.Balls.length > 0 ? EssenceCost(Last(who.Balls)) <= who.Masc : false) {
            who.Masc -= EssenceCost(Last(who.Balls));
            Last(who.Balls).Size++;
            EssenceCheck(who);
            return
        };
    }
    if (BoobsTotal * 2 > PussyTotal) {
        if (who.Pussies.length > 0 ? EssenceCost(Last(who.Pussies)) <= who.Femi : false) {
            who.Femi -= EssenceCost(Last(who.Pussies));
            Last(who.Pussies).Size++;
            EssenceCheck(who);
            return
        };
    } else {
        if (who.Boobies.length > 0 ? EssenceCost(Last(who.Boobies)) <= who.Femi : false) {
            who.Femi -= EssenceCost(Last(who.Boobies));
            Last(who.Boobies).Size++;
            EssenceCheck(who);
            return
        };
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