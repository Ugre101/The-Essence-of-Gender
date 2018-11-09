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
    var e = who;
    var r = Math.random();
    if (r <= dropRate[e.Name]) {
        switch (e.Name) {
            case "Banditlord":
                SnowInventoryAdd(ItemDict.orcCum);
                break;
            case "Commoner":
                SnowInventoryAdd(ItemDict.halfPouch);
                break;
            case "Farmer":
                SnowInventoryAdd(ItemDict.milkJug);
                break;
            case "Thug":
                SnowInventoryAdd(ItemDict.halfPouch);
                break;
            case "Witch":
                SnowInventoryAdd(ItemDict.book);
                break;
            default:
                break;
        }
    }
    var r = Math.random();
    if (r <= dropRate[e.Race]) {
        switch (e.Race) {
            case "Fairy":
                SnowInventoryAdd(ItemDict.fairyDust);
                break;
            case "Human":
                SnowInventoryAdd(ItemDict.humanity);
                break;
            case "Halfling":
                SnowInventoryAdd(ItemDict.pouch);
                break;
            case "Orc":
                SnowInventoryAdd(ItemDict.orcBrew);
                break;
            case "Troll":
                SnowInventoryAdd(ItemDict.trollMilk);
                break;
            case "Elf":
                SnowInventoryAdd(ItemDict.elvenHair);
                break;
            case "Amazon":
                SnowInventoryAdd(ItemDict.amazonGirdle);
                break;
            case "Dark Elf":
                SnowInventoryAdd(ItemDict.elvenHair);
                break;
            case "Goblin":
                SnowInventoryAdd(ItemDict.fertilityIdol);
                break;
            case "Imp":
                SnowInventoryAdd(ItemDict.cockyRock);
                break;
            case "Demon":
                SnowInventoryAdd(ItemDict.infernalSemen);
                break;
            case "Dhampir":
                SnowInventoryAdd(ItemDict.infernalMilk);
                break;
			case "Succubus":
                SnowInventoryAdd(ItemDict.SuccMilk);
                break;
			case "Incubus":
                SnowInventoryAdd(ItemDict.IncSemen);
                break;
            default:
                break;
        }
    }
}