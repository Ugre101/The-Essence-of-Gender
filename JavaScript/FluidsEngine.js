function FluidsEngine() {
    DocId("FemcumBar").style.display = 'none';
    if (player.Balls.length > 0) {
        for (let b of player.Balls) {
            const Size = OrganSize(b.Size, player);
            b.CumMax = 1 / 3 * Math.PI * Math.pow(Size, 3),
                b.CumBaseRate = b.CumMax / 500;
            if (b.Cum < b.CumMax) {
                b.Cum += Math.max(0, b.CumRate + b.CumBaseRate);
            }
        }
        DocId("CumBar").style.display = 'block';
        const TotalCum = player.Balls.map(c => c.Cum).reduce((acc, cur) => acc + cur),
            TotalCumMax = player.Balls.map(c => c.CumMax).reduce((acc, cur) => acc + cur),
            CumPercent = TotalCum / TotalCumMax;
        if (false) {
            EventLog("Your balls are so full that you can barely hold it!")
            // Change style of cumbar?
        }
        DocId("FluidCum").innerHTML = CumPercent >= 1 ?
            `Full (${LToGal(TotalCum/1000)})` :
            `${LToGal(TotalCum/1000)}`;
        DocId("FluidCum").style.width = Math.min(1, CumPercent) * 100 + "%";

    } else {
        DocId("CumBar").style.display = 'none';
    }
    if (player.Boobies.length > 0 && GotMilk(player)) {
        DocId("MilkBar").style.display = 'block';
        for (let b of player.Boobies) {
            const Size = OrganSize(b.Size, player);
            b.MilkMax = 1 / 3 * Math.PI * Math.pow(Size, 3);
            if (b.MilkRate > 0) {
                b.Milk += b.MilkRate;
            }
        }
        const TotalMilk = player.Boobies.map(m => m.Milk).reduce((acc, cur) => acc + cur),
            TotalMilkMax = player.Boobies.map(m => m.MilkMax).reduce((acc, cur) => acc + cur),
            MilkPercent = TotalMilk / TotalMilkMax;
        if (false) {
            EventLog("You breasts are so full that they have started leaking!")
        }
        DocId("FluidMilk").innerHTML = MilkPercent >= 1 ?
            `Full (${LToGal(TotalMilk/1000)})` :
            `${LToGal(TotalMilk/1000)}`;
        DocId("FluidMilk").style.width = Math.min(1, MilkPercent) * 100 + "%";

    } else {
        DocId("MilkBar").style.display = 'none';
    }
    if (House.Dormmates.length > 0) {
        for (let e of House.Dormmates) {
            EssenceCheck(e);
            if (e.Balls.length > 0) {
                for (let b of e.Balls) {
                    const Size = OrganSize(b.Size, e);
                    b.CumMax = 1 / 3 * Math.PI * Math.pow(Size, 3),
                        b.CumBaseRate = b.CumMax / 500;
                    if (b.Cum < b.CumMax) {
                        b.Cum += Math.max(0, b.CumRate + b.CumBaseRate);
                    }
                }
            }
            if (GotMilk(e)) {
                for (let b of e.Boobies) {
                    const Size = OrganSize(b.Size, e);
                    b.MilkMax = 1 / 3 * Math.PI * Math.pow(Size, 3);
                    if (b.MilkRate > 0) {
                        b.Milk += b.MilkRate;
                    }
                }
            }
        }
    };
    // Handle enemy fluid here insted of in essencecheck, at higher rate.
    if (enemies.length > 0) {
        for (let e of enemies) {
            EssenceCheck(e);
            if (e.Balls.length > 0) {
                for (let b of e.Balls) {
                    const Size = OrganSize(b.Size, e);
                    b.CumMax = 1 / 3 * Math.PI * Math.pow(Size, 3),
                        b.CumBaseRate = b.CumMax / 50;
                    if (b.Cum < b.CumMax) {
                        b.Cum += Math.max(0, b.CumRate + b.CumBaseRate);
                    }
                }
            }
            if (GotMilk(e)) {
                for (let b of e.Boobies) {
                    const Size = OrganSize(b.Size, e);
                    b.MilkMax = 1 / 3 * Math.PI * Math.pow(Size, 3);
                    if (b.MilkRate > 0) {
                        b.Milk += b.MilkRate;
                    }
                }
            }
        }
    }
};

function GotMilk(who) {
    for (let e of who.Boobies) {
        if (e.MilkRate > 0) {
            return true;
        }
    }
    return false;
};