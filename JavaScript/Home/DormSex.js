function GetImpregOrgyFunc() {
    const HomeText = DocId("HomeText");
    HomeText.innerHTML = `Orgy`;
    let CumTotal = 0;
    for (let d of House.Dormmates) {
        for (let b of d.Balls) {
            CumTotal += b.Cum;
            while (b.Cum >= 10 && !player.Pregnant.Status) {
                Impregnate(player, d, "B", "Dorm")
                b.Cum -= 10;
            };
        };
    };
    HomeText.innerHTML += `<br><br> By the end of the night they have emptied ${(LToGal(CumTotal/1000))} cum into you
    ${player.Pregnant.Status ?  ` and you are now pregnant!` : `, but they failed to impregnate you...`}`;
};

function ImpregOrgyFunc() {
    const HomeText = DocId("HomeText");
    HomeText.innerHTML = "Orgy<br>"
    let CumTotal = player.Balls.map(b => b.Cum).reduce((acc, curr) => acc + curr);
    // some check if any of your dormmates isn't pregnant
    while (CumTotal >= 10 && House.Dormmates.some(b => !b.Pregnant.Status)) {
        for (let non of House.Dormmates) {
            if (non.Pregnant.Status) {
                CumTotal--;
                continue;
            } else {
                Impregnate(non, player, "A", "Dorm");
                CumTotal -= 10;
                if (non.Pregnant.Status) {
                    HomeText.innerHTML += `${non.FirstName} ${non.LastName} is impregnated!<br>`
                };
            };
        };
    };
    for (let non of House.Dormmates) {
        if (!non.Pregnant.Status) {
            HomeText.innerHTML += `You failed to impregnate ${non.FirstName} ${non.LastName}... `;
        }
    }
    FluidsEngine();
};

DocId("DormDrainMasc").addEventListener("click", function () {
    const ee = MateIndex,
        old = JSON.parse(JSON.stringify(player)),
        Need = player.EssenceDrain;
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
    //RaceDrain(ee);
    DormSex(ee);
    DocId("DormSexText").innerHTML = "Siphon masc";
});
DocId("DormDrainFemi").addEventListener("click", function () {
    const ee = MateIndex,
        old = JSON.parse(JSON.stringify(player));
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
    //RaceDrain(ee); // This could be op way to gain race? Disabled for now
    DormSex(ee);
    DocId("DormSexText").innerHTML = "Siphon femi";
    return;
});
DocId("DormInjMasc").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Masc > 0) {
        e.Masc += Math.min(100, player.Masc);
        player.Masc -= Math.min(100, player.Masc);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject masc";
        return;
    }
});
DocId("DormInjFemi").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Femi > 0) {
        e.Femi += Math.min(100, player.Femi);
        player.Femi -= Math.min(100, player.Femi);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject femi";
        return;
    }
});
DocId("Impregnate").addEventListener("click", function () {
    DocId("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
    const e = MateIndex;
    if (e.Pussies.length > 0) {
        var pussypicker = RandomInt(0, e.Pussies.length - 1)
        if (e.Pussies[pussypicker].Virgin) {
            e.Pussies[pussypicker].Virgin = false;
        }
    }
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            DocId("DormSexText").innerHTML = "You have already impregnated her!"
            DormSex(e);
            return;
        }
    } else {
        e.Pregnant = {};
        e.Pregnant.Status = false;
        e.Pregnant.Baby = 0;
    }
    for (var b = 0; b < player.Balls.length; b++) {
        if (player.Balls[b].Cum > 50) {
            Impregnate(e, player, "A", "Dorm");
            player.Balls[b].Cum -= 50;
        } else {
            DocId("DormSexText").innerHTML = "You try but there is to little cum in your balls."
        }

    }
    DormSex(e);
});
var Setup = true;
DocId("GetImpregnated").addEventListener("click", function () {
    const e = MateIndex;
    if (Setup) {
        DocId("DormSexText").innerHTML = `Desiring to get pregnant you call ${e.FirstName} ${e.LastName} a 
        servant whom you feel are worthy fathering you child. Firmly pushing them down on the bed you 
        get on top them straddling their face grinding your pussy against their mouth, once you feel ready 
        you shift focus to their groin removing their clothes and free their ${CmToInch(e.Dicks[0].Size)} 
        ${e.Dicks[0].Type} dick. Positions your pussy on top of their glans letting it slowly enter, 
        once accustomed speeding up.`
    } else {
        DocId("DormSexText").innerHTML = `Not giving up you continue riding them.`;
    }
    if (player.Pregnant.Status) {
        DocId("DormSexText").innerHTML = "You are already pregnant.";
        DormSex(e);
        return;
    } else if (e.Balls.length > 0) {
        Setup = false;
        for (var b = 0; b < e.Balls.length; b++) {
            if (e.Balls[b].Cum >= 10) {
                Impregnate(player, e, "B", "Dorm");
                e.Balls[b].Cum -= 10;
                if (!player.Pregnant.Status) {
                    DocId("DormSexText").innerHTML += "<br><br>They failed to impregnate you";
                }
                break;
            } else {
                DocId("DormSexText").innerHTML += "<br><br>Their balls are dry, you have to let them recover.(10ml needed  )";
            }
        }
    }
    var pussypicker = RandomInt(0, player.Pussies.length - 1)
    if (player.Pussies[pussypicker].Virgin) {
        player.Pussies[pussypicker].Virgin = false;
    }
    DormSex(e);
});