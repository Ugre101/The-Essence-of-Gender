function DrainDrainM() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(ee.Masc, player.EssenceDrain);
    if (ee.Masc > 0) {
        //disabled (player.ForcedFemale) ? (player.Femi += ee.Masc) : (player.Masc += ee.Masc);
        player.Masc += Ess;
        ee.Masc -= Ess;
        EssenceCheck(ee);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DocId("SexText").innerHTML = (Ess >= ee.Masc) ?
            `You siphon the last essence of masculinity from them leaving them with no signs of masculinity left.<br>${DrainChanges(old, player, eold, ee)}` :
            `You siphon essence of masculinity from them.<br>${DrainChanges(old, player, eold, ee)}`;
    } else {
        // If masc is zero check if sexual organs exist to recyle for more masc
        const Need = player.EssenceDrain;
        let Have = 0;
        while (Have < Need && (ee.Balls.length > 0 || ee.Dicks.length > 0)) {
            if (ee.Balls.length > 0) {
                const ball = ee.Balls[ee.Balls.length - 1];
                ball.Size--;
                Have += 5;
                if (ball.Size <= 0) {
                    ee.Balls.pop();
                };
            };
            if (ee.Dicks.length > 0) {
                const dick = ee.Dicks[ee.Dicks.length - 1];
                dick.Size--;
                Have += 3;
                if (dick.Size <= 0) {
                    ee.Dicks.pop();
                }
            }
        }
        player.Masc += Have;
        DocId("SexText").innerHTML = `You siphon essence of masculinity from them.<br>${DrainChanges(old, player, eold, ee)}`;
    }
    ee.SessionOrgasm--;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
}

function DrainDrainF() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(ee.Femi, player.EssenceDrain);
    if (ee.Femi > 0) {
        //player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
        player.Femi += Ess;
        ee.Femi -= Ess;
        EssenceCheck(ee);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DocId("SexText").innerHTML = (Ess >= ee.Femi) ?
            `You siphon the last essence of femininity from them leaving them with no signs of femininity left.<br>${DrainChanges(old, player, eold, ee)}` :
            `You siphon essence of femininity from them.<br>${DrainChanges(old, player, eold, ee)}`;
    } else {
        const Need = player.EssenceDrain;
        let Have = 0;
        while (Have < Need && (ee.Pussies.length > 0 || ee.Boobies.length > 0)) {
            if (ee.Pussies.length > 0) {
                const pussy = ee.Pussies[ee.Pussies.length - 1];
                pussy.Size--;
                Have += 5;
                if (pussy.Size <= 0) {
                    ee.Pussies.pop();
                };
            };
            if (ee.Boobies[0].Size > 0) {
                const boobs = ee.Boobies[ee.Boobies.length - 1];
                boobs.Size--;
                Have += 3;
                if (boobs.Size <= 0 && ee.Boobies.length > 1) {
                    ee.Boobies.pop();
                };
            };
        };
    };
    ee.SessionOrgasm--;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
    return;
};

function DrainInjectM() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(player.GiveEssence * 33, player.Masc);
    if (player.Masc > 0) {
        player.SessionOrgasm--;
        player.Masc -= Ess;
        ee.Masc += Ess;
        EssenceCheck(ee);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DocId("SexText").innerHTML = (Ess >= player.Masc) ?
            `You inject them with your last essence of masculinity, leaving yourself male-free.<br>${DrainChanges(old, player, eold, ee)}` :
            `You inject essence of masculinity into them.<br>${DrainChanges(old, player, eold, ee)}`;
    }
    AfterBattleButtons();
    CheckArousal();
    return;
};

function DrainInjectF() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(player.GiveEssence * 33, player.Femi);
    if (player.Femi > 0) {
        player.SessionOrgasm--;
        player.Femi -= Ess;
        ee.Femi += Ess;
        EssenceCheck(ee);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DocId("SexText").innerHTML = (Ess >= player.Femi) ?
            `You give them the last of your femininity, leaving yourself female-free.<br>${DrainChanges(old, player, eold, ee)}` :
            `You inject essence of femininity into them.<br>${DrainChanges(old, player, eold, ee)}`;
        AfterBattleButtons();
        CheckArousal();
        return;
    }
};

function GrowDick() {
    const old = JSON.parse(JSON.stringify(player)),
        pd = player.Dicks[player.Dicks.length - 1];

    if (player.Dicks.length === 0 && player.Masc >= 30) {
        const Dick = {
            Size: 1,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Dicks.push(Dick);
        player.Masc -= 30;
    } else if (EssenceCost(pd) <= player.Masc) {
        pd.Size += 1 * ManualGrowthScale();
        player.Masc -= EssenceCost(pd);
    };
    AfterBattleButtons();
    CheckArousal();
};

function GrowBalls() {
    const old = JSON.parse(JSON.stringify(player)),
        pb = player.Balls[player.Balls.length - 1];

    if (player.Balls.length === 0 && player.Masc >= 50) {
        const Ball = {
            Size: 1,
            Type: player.SecondRace,
            CumMax: 1 / 3 * Math.PI * Math.pow(1, 3),
            Cum: 1 / 6 * Math.PI * Math.pow(1, 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        player.Balls.push(Ball);
        player.Masc -= 50;
    } else if (EssenceCost(pd) <= player.Masc) {
        pb.Size += 1 * ManualGrowthScale();
        player.Masc -= EssenceCost(pd);
    };
    AfterBattleButtons();
    CheckArousal();
};

function GrowPussy() {
    const old = JSON.parse(JSON.stringify(player)),
        pb = player.Pussies[player.Pussies.length - 1];

    if (player.Pussies.length === 0 && player.Femi >= 30) {
        const Pussy = {
            Size: 1,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Pussies.push(Pussy);
        player.Femi -= 30;
    } else if (EssenceCost(pd) <= player.Femi) {
        pb.Size += 1 * ManualGrowthScale();
        player.Femi -= EssenceCost(pd);
    };
    AfterBattleButtons();
    CheckArousal();
};

function GrowBoobs() {
    const old = JSON.parse(JSON.stringify(player)),
        pb = player.Boobies[player.Boobies.length - 1];
    if (player.Boobies.length === 0 && player.Femi >= 30) {
        const Boob = {
            Size: 1,
            Type: player.SecondRace,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(1, 3)
        }
        player.Boobies.push(Boob);
        player.Femi -= 30;
    } else if (EssenceCost(pb) <= player.Femi) {
        pb.Size += 1 * ManualGrowthScale();
        player.Femi -= EssenceCost(pb);
    };
    AfterBattleButtons();
    CheckArousal();
};