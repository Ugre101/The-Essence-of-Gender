function GrowthScale(who) {
    return (who.Height / 160)
} // I put this a function to make it easier to trial different formulas.

function OrganSize(who, Essence, MaxDiv, what, e = 0, EssDiv = 1) {
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
    return Math.min(who.Height / MaxDiv, (Math.sqrt(who[Essence] / EssDiv * GrowthScale(who)) - e * 18 * GrowthScale(who)) + who.OrganMod[what].Size)
}

function EssenceCheck(who) {
    if (Settings.BalanceParts) {
        BalanceEssenceCheck(who);
    } else {
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
            const Anal = {
                Size: who.Height / 3,
                Type: who.Race,
                Virgin: true,
                stretch: 1,
            }
            who.Anal.push(Anal);
        }

        if (who.Masc < 30) {
            if (who.Dicks.length > 0) {
                who.Dicks.pop();
            }
        } else {
            if (who.Dicks.length === 0) {
                const Dick = {
                    Size: 3,
                    Type: who.SecondRace,
                    Virgin: true
                }
                who.Dicks.push(Dick);
            }
            for (let e in who.Dicks) {
                who.Dicks[e].Size = OrganSize(who, "Masc", 3, "Dick", e);
                if (e == who.Dicks.length - 1 && who.Dicks[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxDicks > e) {
                    const Dick = {
                        Size: OrganSize(who, "Masc", 3, "Dick", e + 1),
                        Type: who.SecondRace,
                        Virgin: true
                    }
                    who.Dicks.push(Dick);
                }
                if (who.Dicks[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxDicks) {
                    who.Dicks.pop();
                }
            }
        }



        if (who.Masc < 50) {
            if (who.Balls.length > 0) {
                who.Balls.pop();
            }
        } else {
            if (who.Balls.length == 0) {
                const Ball = {
                    Size: OrganSize(who, "Masc", 4, "Balls", 0, 2),
                    Type: who.SecondRace,
                    CumMax: 1 / 3 * Math.PI * Math.pow(OrganSize(who, "Masc", 4, "Balls", 0, 2), 3),
                    Cum: 1 / 6 * Math.PI * Math.pow(OrganSize(who, "Masc", 4, "Balls", 0, 2), 3),
                    CumRate: 0,
                    CumBaseRate: 0.5
                }
                who.Balls.push(Ball);
            }
            for (let e in who.Balls) {
                who.Balls[e].Size = OrganSize(who, "Masc", 4, "Balls", e, 2)
                if (e == who.Balls.length - 1 && who.Balls[e].Size > who.Height / 6 && Settings.MaxLimbs.MaxBalls > e) {
                    const Ball = {
                        Size: OrganSize(who, "Masc", 4, "Balls", e + 1, 2),
                        Type: who.SecondRace,
                        CumMax: 1 / 3 * Math.PI * Math.pow(OrganSize(who, "Masc", 4, "Balls", e + 1, 2), 3),
                        Cum: 1 / 7 * Math.PI * Math.pow(OrganSize(who, "Masc", 4, "Balls", e + 1, 2), 3),
                        CumRate: 0,
                        CumBaseRate: 0.5
                    }
                    who.Balls.push(Ball);
                }
                if (who.Balls[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxBalls) {
                    who.Balls.pop();
                }
            }
        }

        if (who.Femi < 30) {
            if (who.Pussies.length > 0) {
                who.Pussies.pop();
            }
        } else {
            if (who.Pussies.length == 0) {
                const Pussy = {
                    Size: OrganSize(who, "Femi", 3, "Pussy"),
                    Type: who.SecondRace,
                    Virgin: true
                }
                who.Pussies.push(Pussy);
            }
            for (let e in who.Pussies) {
                who.Pussies[e].Size = OrganSize(who, "Femi", 3, "Pussy", e);
                if (e == who.Pussies.length - 1 && who.Pussies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxVaginas > e) {
                    const Pussy = {
                        Size: OrganSize(who, "Femi", 3, "Pussy", e + 1),
                        Type: who.SecondRace,
                        Virgin: true
                    }
                    who.Pussies.push(Pussy);
                }
                if (who.Pussies[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxVaginas) {
                    who.Pussies.pop();
                }
            }
        }


        for (let e in who.Boobies) {
            if (who.Boobies.length < 1) {
                const Boob = {
                    Size: OrganSize(who, "Femi", 3, "Boobies", e + 1),
                    Type: who.Race,
                    Milk: 0,
                    MilkBaseRate: 0,
                    MilkRate: 0,
                    MilkMax: 1 / 3 * Math.PI * Math.pow(OrganSize(who, "Femi", 3, "Boobies", e + 1), 3)
                }
                who.Boobies.push(Boob);
            }
            if (who.Femi < 30) {
                who.Boobies[e].Size = 0;
                if (who.Boobies.length > 1) {
                    who.Boobies.pop();
                }
            } else {
                who.Boobies[e].Size = OrganSize(who, "Femi", 3, "Boobies", e, 2)
                who.Boobies[e].MilkMax = 1 / 3 * Math.PI * Math.pow(who.Boobies[e].Size, 3);
                if (e == who.Boobies.length - 1 && who.Boobies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxBoobs > e) {
                    const Boob = {
                        Size: OrganSize(who, "Femi", 3, "Boobies", e + 1),
                        Type: who.Race,
                        Milk: 0,
                        MilkBaseRate: 0,
                        MilkRate: 0,
                        MilkMax: 1 / 3 * Math.PI * Math.pow(OrganSize(who, "Femi", 3, "Boobies", e + 1), 3)
                    }
                    who.Boobies.push(Boob);
                }
                if (who.Boobies.length > 1 && who.Boobies[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxBoobs) {
                    who.Boobies.pop();
                }
            }
        }

        if (who.Anal.length == 0) {
            const Anal = {
                Size: 0,
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
}