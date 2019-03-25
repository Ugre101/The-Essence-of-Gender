function DrainSiphonDick(EEDickIndex, playerDickIndex = 0) {
    const old = JSON.parse(JSON.stringify(player)),
        eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
        ee = enemies[EnemyIndex],
        ed = ee.Dicks[EEDickIndex],
        pd = player.Dicks.length > 0 ? player.Dicks[playerDickIndex] : false;

    if (player.Dicks.length === 0) {
        const Dick = {
            Size: 1,
            Type: player.SecondRace,
            Virgin: true
        }
        player.Dicks.push(Dick);
    } else {
        pd.Size++;
    }
    ee.SessionOrgasm--;
    ed.Size--;
    if (ed.Size <= 0) {
        ee.Dicks.splice(EEDickIndex, 1);
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
        ee.Dicks.splice()
    }
    DocId("SexText").innerHTML = `${DrainChanges(old, player, eold, ee)}`;
    RaceDrain(ee);
    AfterBattleButtons();
    CheckArousal();
}

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