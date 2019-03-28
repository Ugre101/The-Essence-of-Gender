function DrainSiphonDick() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        ed = ee.Dicks[ee.Dicks.length - 1],
        pd = player.Dicks[player.Dicks.length - 1],
        Siphon = typeof player.EssenceDrain === "number" ? player.EssenceDrain / 2 : 1;

    if (player.Dicks.length === 0) {
        const Dick = {
            Size: 1,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Dicks.push(Dick);
    } else {
        pd.Size += Siphon;
    }
    ee.SessionOrgasm--;
    ed.Size -= Siphon;
    if (ed.Size <= 0) {
        ee.Dicks.pop();
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    CheckArousal();
};

function DrainSiphonDickToMasc() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        ed = ee.Dicks[ee.Dicks.length - 1],
        Ess = player.EssenceDrain;

    player.Masc += Ess;
    ee.SessionOrgasm--;
    ed.Size -= Math.round(Ess / 5);
    if (ed.Size <= 0.5) {
        ee.Dicks.pop()
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
}

function DrainSiphonBalls() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        eb = ee.Balls[ee.Balls.length - 1],
        pb = player.Balls[player.Balls.length - 1],
        Siphon = typeof player.EssenceDrain === "number" ? player.EssenceDrain / 2 : 1;

    if (player.Balls.length === 0) {
        const Ball = {
            Size: 1,
            Type: player.SecondRace,
            CumMax: 1 / 3 * Math.PI * Math.pow(1, 3),
            Cum: 1 / 6 * Math.PI * Math.pow(1, 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        player.Balls.push(Ball);
    } else {
        pb.Size += Siphon;
    }
    ee.SessionOrgasm--;
    eb.Size -= Siphon;
    if (eb.Size <= 0) {
        ee.Balls.pop();
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    CheckArousal();
};

function DrainSiphonBallsToMasc() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        eb = ee.Balls[ee.Balls.length - 1],
        Ess = player.EssenceDrain;

    player.Masc += Ess;
    ee.SessionOrgasm--;
    eb.Size -= Math.round(Ess / 5);
    if (eb.Size <= 0.5) {
        ee.Balls.pop()
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
};

function DrainSiphonBoobs() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        eb = ee.Boobies[ee.Boobies.length - 1],
        pb = player.Boobies[player.Boobies.length - 1],
        Siphon = typeof player.EssenceDrain === "number" ? player.EssenceDrain / 2 : 1;

    if (player.Boobies.length === 0) {
        const Boob = {
            Size: 1,
            Type: player.SecondRace,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(1, 3)
        }
        player.Boobies.push(Boob);
    } else {
        pb.Size += Siphon;
    }
    ee.SessionOrgasm--;
    eb.Size -= Siphon;
    if (eb.Size <= 0 && ee.Boobies.length > 1) {
        ee.Boobies.pop();
    } else if (eb.Size <= 0 && ee.Boobies.length === 1) {
        eb.Size = 0;
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    CheckArousal();
};


function DrainSiphonBoobsToFemi() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        eb = ee.Boobies[ee.Boobies.length - 1],
        Ess = player.EssenceDrain;

    player.Femi += Ess;
    ee.SessionOrgasm--;
    eb.Size -= Math.round(Ess / 5);
    if (eb.Size <= 0 && ee.Boobies.length > 1) {
        ee.Boobies.pop();
    } else if (eb.Size <= 0 && ee.Boobies.length === 1) {
        eb.Size = 0;
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
};

function DrainSiphonPussy() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        eb = ee.Pussies[ee.Pussies.length - 1],
        pb = player.Pussies[player.Pussies.length - 1],
        Siphon = typeof player.EssenceDrain === "number" ? player.EssenceDrain / 2 : 1;


    if (player.Pussies.length === 0) {
        const Pussy = {
            Size: 1,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Pussies.push(Pussy);
    } else {
        pb.Size += Siphon;
    }
    ee.SessionOrgasm--;
    eb.Size -= Siphon;
    if (eb.Size <= 0) {
        ee.Pussies.pop();
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    CheckArousal();
};

function DrainSiphonPussyToFemi() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        eb = ee.Pussies[ee.Pussies.length - 1],
        Ess = player.EssenceDrain;

    player.Femi += Ess;
    ee.SessionOrgasm--;
    eb.Size -= Math.round(Ess / 5);
    if (eb.Size <= 0.5) {
        ee.Pussies.pop()
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
};

function DrainDrainM() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(ee.Masc, player.EssenceDrain);
    if (ee.Masc > 0) {
        ee.SessionOrgasm--;
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
        RaceDrain(ee);
        AfterBattleButtons();
        CheckArousal();
        return;
    };
}

function DrainDrainF() {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        Ess = Math.min(ee.Femi, player.EssenceDrain);
    if (ee.Femi > 0) {
        ee.SessionOrgasm--;
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
    }
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