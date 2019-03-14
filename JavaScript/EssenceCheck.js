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
            var Boob = {
                Size: 0,
                Type: who.Race
            }
            who.Boobies.push(Boob);
        }
        if (!who.hasOwnProperty("Anal")) {
            who.Anal = []
            var Anal = {
                Size: who.Height / 3,
                Type: who.Race,
                Virgin: true,
                stretch: 1,
            }
            who.Anal.push(Anal);
        }

        if (who.Masc < 30 && who.Dicks.length > 0) {
            who.Dicks.pop();
        } else if (OrganSize(who, "Masc", 3, "Dick") >= 3 && who.Dicks.length == 0) {
            var Dick = {
                Size: OrganSize(who, "Masc", 3, "Dick"),
                Type: who.Race,
                Virgin: true
            }
            who.Dicks.push(Dick);
        } else if (who.Dicks.length > 0) {
            for (var e = 0; e < who.Dicks.length; e++) {
                if (who.hasOwnProperty("SecondRace")) {
                    who.Dicks[e].Type = who.SecondRace;
                } else {
                    who.Dicks[e].Type = who.Race;
                }
                who.Dicks[e].Size = OrganSize(who, "Masc", 3, "Dick", e);
                if (e == who.Dicks.length - 1 && who.Dicks[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxDicks > e) {
                    var Dick = {
                        Size: OrganSize(who, "Masc", 3, "Dick", e + 1),
                        Type: who.Race,
                        Virgin: true
                    }
                    who.Dicks.push(Dick);
                }
                if (who.Dicks[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxDicks) {
                    who.Dicks.pop();
                }
            }
        }

        if (who.Masc < 50 && who.Balls.length > 0) {
            who.Balls.pop();
        } else if (OrganSize(who, "Masc", 4, "Balls", 0, 2) >= 2 && who.Balls.length == 0) {
            var Ball = {
                Size: OrganSize(who, "Masc", 4, "Balls", 0, 2),
                Type: who.Race,
                CumMax: 1 / 3 * Math.PI * Math.pow(OrganSize(who, "Masc", 4, "Balls", 0, 2), 3),
                Cum: 1 / 6 * Math.PI * Math.pow(OrganSize(who, "Masc", 4, "Balls", 0, 2), 3),
                CumRate: 0,
                CumBaseRate: 0.5
            }
            who.Balls.push(Ball);
        } else if (who.Balls.length > 0) {
            for (var e = 0; e < who.Balls.length; e++) {
                if (who.hasOwnProperty("SecondRace")) {
                    who.Balls[e].Type = who.SecondRace;
                } else {
                    who.Balls[e].Type = who.Race;
                }
                who.Balls[e].Size = OrganSize(who, "Masc", 4, "Balls", e, 2)
                if (e == who.Balls.length - 1 && who.Balls[e].Size > who.Height / 6 && Settings.MaxLimbs.MaxBalls > e) {
                    var Ball = {
                        Size: OrganSize(who, "Masc", 4, "Balls", e + 1, 2),
                        Type: who.Race,
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

        if (who.Femi < 30 && who.Pussies.length > 0) {
            who.Pussies.pop();
            who.Boobies[0].Size = 0;
        } else if (OrganSize(who, "Femi", 3, "Pussy") >= 3 && who.Pussies.length == 0) {
            var Pussy = {
                Size: OrganSize(who, "Femi", 3, "Pussy"),
                Type: who.Race,
                Virgin: true
            }
            who.Pussies.push(Pussy);
        } else if (who.Pussies.length > 0) {
            for (var e = 0; e < who.Pussies.length; e++) {
                if (who.hasOwnProperty("SecondRace")) {
                    who.Pussies[e].Type = who.SecondRace;
                } else {
                    who.Pussies[e].Type = who.Race;
                }
                who.Pussies[e].Size = OrganSize(who, "Femi", 3, "Pussy", e);
                if (e == who.Pussies.length - 1 && who.Pussies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxVaginas > e) {
                    var Pussy = {
                        Size: OrganSize(who, "Femi", 3, "Pussy", e + 1),
                        Type: who.Race,
                        Virgin: true
                    }
                    who.Pussies.push(Pussy);
                }
                if (who.Pussies[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxVaginas) {
                    who.Pussies.pop();
                }
            }
        }

        for (var e = 0; e < who.Boobies.length; e++) {
            if (who.hasOwnProperty("SecondRace")) {
                who.Boobies[e].Type = who.SecondRace;
            } else {
                who.Boobies[e].Type = who.Race;
            }
            if (e == 0) {
                who.Boobies[e].Size = Math.max(0, OrganSize(who, "Femi", 3, "Boobies", e));
            } else {
                who.Boobies[e].Size = OrganSize(who, "Femi", 3, "Boobies", e)
            }
            who.Boobies[e].MilkMax = 1 / 3 * Math.PI * Math.pow(who.Boobies[e].Size, 3);
            if (e == who.Boobies.length - 1 && who.Boobies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxBoobs > e) {
                var Boob = {
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
        if (who.Anal.length == 0) {
            var Anal = {
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