function DrainDrainM() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex];
    //disabled (player.ForcedFemale) ? (player.Femi += ee.Masc) : (player.Masc += ee.Masc);
    // If masc is zero check if sexual organs exist to recyle for more masc
    const Need = player.EssenceDrain;
    let Have = ee.Masc;
    ee.Masc = Math.max(0, ee.Masc - Need);
    while (Have < Need && (ee.Balls.length > 0 || ee.Dicks.length > 0)) {
        if (ee.Balls.length > 0) {
            const ball = ee.Balls[ee.Balls.length - 1];
            ball.Size--;
            Have += EssenceCost(ball);
            if (ball.Size <= 1) {
                ee.Balls.pop();
            };
        };
        if (ee.Dicks.length > 0) {
            const dick = ee.Dicks[ee.Dicks.length - 1];
            dick.Size--;
            Have += EssenceCost(dick);
            if (dick.Size <= 1) {
                ee.Dicks.pop();
            }
        }
    }
    const Got = Math.min(Need, Have),
        left = Math.max(0, Have - Need);
    player.Masc += Got;
    ee.Masc = left;

    EssenceCheck(ee);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("SexText").innerHTML = `You siphon essence of masculinity from them.<br>${DrainChanges(old, player, eold, ee)}`;
    //        `You siphon the last essence of masculinity from them leaving them with no signs of masculinity left.<br>${DrainChanges(old, player, eold, ee)}` :
    ee.SessionOrgasm--;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
    return
};

function DrainDrainF() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex];
    //player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
    const Need = player.EssenceDrain;
    let Have = ee.Femi;
    ee.Femi = Math.max(0, ee.Femi - Need);
    while (Have < Need && (ee.Pussies.length > 0 || ee.Boobies.length > 0)) {
        if (ee.Pussies.length > 0) {
            const pussy = ee.Pussies[ee.Pussies.length - 1];
            pussy.Size--;
            Have += EssenceCost(pussy);
            if (pussy.Size <= 1) {
                ee.Pussies.pop();
            };
        };
        if (ee.Boobies.length > 0 ? ee.Boobies[0].Size > 0 : false) {
            const boobs = ee.Boobies[ee.Boobies.length - 1];
            boobs.Size--;
            Have += EssenceExtraCost(boobs);
            if (boobs.Size <= 1 && ee.Boobies.length > 1) {
                ee.Boobies.pop();
            };
        };
    };
    const Got = Math.min(Need, Have),
        left = Math.max(0, Have - Need);
    player.Femi += Got;
    ee.Femi = left;
    EssenceCheck(ee);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("SexText").innerHTML = `You siphon essence of femininity from them.<br>${DrainChanges(old, player, eold, ee)}`;
    //  `You siphon the last essence of femininity from them leaving them with no signs of femininity left.<br>${DrainChanges(old, player, eold, ee)}` :
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
            Size: 2,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Dicks.push(Dick);
        player.Masc -= 30;
    } else if (EssenceCost(pd) <= player.Masc) {
        pd.Size++;
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
            Size: 2,
            Type: player.SecondRace,
            CumMax: 1 / 3 * Math.PI * Math.pow(1, 3),
            Cum: 1 / 6 * Math.PI * Math.pow(1, 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        player.Balls.push(Ball);
        player.Masc -= 50;
    } else if (EssenceCost(pd) <= player.Masc) {
        pb.Size++;
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
            Size: 2,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Pussies.push(Pussy);
        player.Femi -= 30;
    } else if (EssenceCost(pd) <= player.Femi) {
        pb.Size++;
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
            Size: 2,
            Type: player.SecondRace,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(1, 3)
        }
        player.Boobies.push(Boob);
        player.Femi -= 30;
    } else if (EssenceCost(pb) <= player.Femi) {
        pb.Size++;
        player.Femi -= EssenceCost(pb);
    };
    AfterBattleButtons();
    CheckArousal();
};