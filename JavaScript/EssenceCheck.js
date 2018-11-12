 function GrowthScale(who) {
     return (who.Height / 160)
 } // I put this a function to make it easier to trial different formulas.

 function EssenceCheck(who) {
     //if (Settings.BalanceParts) {BalanceEssenceCheck(who);} else {
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
             Size: 0,
             Type: who.Race,
             Virgin: true,
             stretch: 1,
         }
         who.Anal.push(Anal);
     }

     if (who.Masc < 30 && who.Dicks.length > 0) {
         who.Dicks.pop();
     } else if (who.Masc >= 30 && who.Dicks.length == 0) {
         var Dick = {
             Size: Math.max(player.Height * 0.03, who.Masc / 30 * GrowthScale(who)),
             Type: who.Race,
             Virgin: true
         }
         who.Dicks.push(Dick);
     } else if (who.Dicks.length > 0) {
         var dicktotal = 0;
         for (var e = 0; e < who.Dicks.length; e++) {
             if (who.hasOwnProperty("SecondRace")) {
                 who.Dicks[e].Type = who.SecondRace;
             } else {
                 who.Dicks[e].Type = who.Race;
             }
             who.Dicks[e].Size = Math.min(who.Height / 3, Math.max(who.Masc / 30 * GrowthScale(who) - dicktotal, who.Height * 0.03));
             if (e == who.Dicks.length - 1 && who.Masc / 30 - dicktotal > who.Height / 3 && Settings.MaxLimbs.MaxDicks > e) {
                 var Dick = {
                     Size: 5,
                     Type: who.Race,
                     Virgin: true
                 }
                 who.Dicks.push(Dick);
             }
             if (who.Masc / 30 - dicktotal < 0 || e >= Settings.MaxLimbs.MaxDicks) {
                 who.Dicks.pop();
             } else {
                 dicktotal += who.Dicks[e].Size;
             }
         }
     }

     if (who.Masc < 50 && who.Balls.length > 0) {
         who.Balls.pop();
     } else if (who.Masc >= 50 && who.Balls.length == 0) {
         var Ball = {
             Size: who.Masc / 50 * GrowthScale(who),
             Type: who.Race,
             CumMax: 1/3 * Math.PI * Math.pow(who.Masc/50 * GrowthScale(who), 3),
             Cum: 1/6 * Math.PI * Math.pow(who.Masc/50, 3),
             CumRate: 0,
             CumBaseRate: 0.5
         }
         who.Balls.push(Ball);
     } else if (who.Balls.length > 0) {
         var ballstotal = 0;
         for (var e = 0; e < who.Balls.length; e++) {
             if (who.hasOwnProperty("SecondRace")) {
                who.Balls[e].Type = who.SecondRace;
            } else {
                who.Balls[e].Type = who.Race;
            }
             who.Balls[e].Size = Math.min(who.Height / 4, Math.max(who.Masc / 50 * GrowthScale(who) - ballstotal, who.Height * 0.02));
             if (e == who.Balls.length - 1 && who.Masc / 50 - ballstotal > who.Height / 3 && Settings.MaxLimbs.MaxBalls > e) {
                 var Ball = {
                     Size: 2,
                     Type: who.Race,
                     CumMax: 2,
                     Cum: 0,
                     CumRate: 0,
                     CumBaseRate: 0.5
                 }
                 who.Balls.push(Ball);
             }
             if (who.Masc / 50 - ballstotal < 0 || e >= Settings.MaxLimbs.MaxBalls) {
                 who.Balls.pop();
             } else {
                 ballstotal += who.Balls[e].Size;
             }
         }
     }

     if (who.Femi < 30 && who.Pussies.length > 0) {
         who.Pussies.pop();
         who.Boobies[0].Size = 0;
     } else if (who.Femi >= 30 && who.Pussies.length == 0) {
         var Pussy = {
             Size: Math.max(who.Height * 0.03, who.Femi / 25 * GrowthScale(who)),
             Type: who.Race,
             Virgin: true
         }
         who.Pussies.push(Pussy);
     } else if (who.Pussies.length > 0) {
         var pussytotal = 0;
         for (var e = 0; e < who.Pussies.length; e++) {
            if (who.hasOwnProperty("SecondRace")) {
                who.Pussies[e].Type = who.SecondRace;
            } else {
                who.Pussies[e].Type = who.Race;
            }
             who.Pussies[e].Size = Math.min(who.Height / 3, Math.max(who.Femi / 30 * GrowthScale(who) - pussytotal, who.Height * 0.03));
             if (e == who.Pussies.length - 1 && who.Femi / 30 - pussytotal > who.Height / 3 && Settings.MaxLimbs.MaxVaginas > e) {
                 var Pussy = {
                     Size: 5,
                     Type: who.Race,
                     Virgin: true
                 }
                 who.Pussies.push(Pussy);
             }
             if (who.Femi / 30 - pussytotal < 0 || e >= Settings.MaxLimbs.MaxVaginas) {
                 who.Pussies.pop();
             } else {
                 pussytotal += who.Pussies[e].Size
             }
         }
     }

     var boobtotal = 0;
     for (var e = 0; e < who.Boobies.length; e++) {
         if (who.hasOwnProperty("SecondRace")) {
            who.Boobies[e].Type = who.SecondRace;
        } else {
            who.Boobies[e].Type = who.Race;
        }
         who.Boobies[e].Size = Math.min(who.Height / 3, Math.max(who.Femi / 45 * GrowthScale(who) - boobtotal, 0));
         who.Boobies[e].MilkMax = 1/3 * Math.PI * Math.pow(who.Femi/45 * GrowthScale(who), 3);
         if (e == who.Boobies.length - 1 && who.Femi / 45 - boobtotal > who.Height / 3 && Settings.MaxLimbs.MaxBoobs > e) {
             var Boob = {
                 Size: 0,
                 Type: who.Race,
                 Milk: 0,
                 MilkBaseRate: 0,
                 MilkRate: 0,
                 MilkMax: 0
             }
             who.Boobies.push(Boob);
         }
         if (who.Femi / 45 - boobtotal < 0 && e > 0 || e >= Settings.MaxLimbs.MaxBoobs) {
             who.Boobies.pop();
         } else {
             boobtotal += who.Boobies[e].Size;
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