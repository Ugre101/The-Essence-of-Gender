function SnowInventoryAdd(item, quantity = 1) {
    var i = 0;
    for (i = 0; i < player.Inventory.length; i++) {
        var q = false;
        if (player.Inventory[i].Name === item.Name) {
            player.Inventory[i].Quantity += quantity;
            q = true;
            break;
        }
    }
    if (!q) {
        item.Quantity = quantity;
        player.Inventory.push(item);
    }
}

function DropSystem(who) {
    const dropRate = {
            "Human": 1.00,
            "Halfling": 1.00,
            "Orc": 1.00,
            "Troll": 1.00,
            "Farmer": 1.00,
            "Elf": 1.00,
            "Amazon": 1.00,
            "Fairy": 1.00,
            "Commoner": 1.00,
            "Thug": 1.00,
            "Dark elf": 1.00,
            "Imp": 1.00,
            "Goblin": 1.00,
            "Dhampir": 1.00,
            "Demon": 1.00,
            "Succubus": 1.00,
            "Incubus": 1.00,
            "Witch": 1.00
        },
        e = who,
        r = Math.random();
    if (r <= typeof dropRate[e.Name] !== "undefined" ? dropRate[e.Name] : 0) {
        switch (e.Name) {
            case "Banditlord":
                SnowInventoryAdd(ItemDict.orcCum.Lite);
                break;
            case "Commoner":
                SnowInventoryAdd(ItemDict.halfPouch.Lite);
                break;
            case "Farmer":
                SnowInventoryAdd(ItemDict.milkJug.Lite);
                break;
            case "Thug":
                SnowInventoryAdd(ItemDict.halfPouch.Lite);
                break;
            case "Witch":
                SnowInventoryAdd(ItemDict.book.Lite);
                break;
            default:
                break;
        }
    }
    const r2 = Math.random();
    if (r2 <= typeof dropRate[e.Race] !== "undefined" ? dropRate[e.Race] : 0) {
        switch (e.Race) {
            case "Fairy":
                SnowInventoryAdd(ItemDict.fairyDust.Lite);
                break;
            case "Human":
                SnowInventoryAdd(ItemDict.humanity.Lite);
                break;
            case "Halfling":
                SnowInventoryAdd(ItemDict.pouch.Lite);
                break;
            case "Orc":
                SnowInventoryAdd(ItemDict.orcBrew.Lite);
                break;
            case "Troll":
                SnowInventoryAdd(ItemDict.trollMilk.Lite);
                break;
            case "Elf":
                SnowInventoryAdd(ItemDict.elvenHair.Lite);
                break;
            case "Amazon":
                SnowInventoryAdd(ItemDict.amazonGirdle.Lite);
                break;
            case "Dark Elf":
                SnowInventoryAdd(ItemDict.elvenHair.Lite);
                break;
            case "Goblin":
                SnowInventoryAdd(ItemDict.fertilityIdol.Lite);
                break;
            case "Imp":
                SnowInventoryAdd(ItemDict.cockyRock.Lite);
                break;
            case "Demon":
                SnowInventoryAdd(ItemDict.infernalSemen.Lite);
                break;
            case "Dhampir":
                SnowInventoryAdd(ItemDict.infernalMilk.Lite);
                break;
            case "Succubus":
                SnowInventoryAdd(ItemDict.SuccMilk.Lite);
                break;
            case "Incubus":
                SnowInventoryAdd(ItemDict.IncSemen.Lite);
                break;
            default:
                break;
        }
    }
}