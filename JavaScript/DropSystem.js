function SnowInventoryAdd(item) {
    var i = 0;
    for (i = 0; i < player.Inventory.length; i++) {
        var q = false;
        if (player.Inventory[i].Name === item.Name) {
            player.Inventory[i].Quantity++;
            q = true;
            break;
        }
    }
    if (!q)
        player.Inventory.push(item);
}

function DropSystem(who) {
    var e = who;
    var r = Math.random();
    if (r <= dropRate[e.Name]) {
        switch (e.Name) {
            case "Banditlord":
                var OrcCum = {
                    Name: "Orc cum",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Masc+50",
                    Quantity: 1,
                    Title: "Quite nasty, but it will give you extra masculinity."
                }
                SnowInventoryAdd(OrcCum);
                break;
            case "Commoner":
                var HalfPouch = {
                    Name: "Pouch",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Gives gold.",
                    Quantity: 1,
                    Title: "Jingles faintly; probably has money in it."
                }
                SnowInventoryAdd(HalfPouch);
                break;
            case "Farmer":
                var Dairy = {
                    Name: "Milk Jug",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Increases lactation",
                    Quantity: 1,
                    Title: "It'll go straight to your chest!"
                }
                SnowInventoryAdd(Dairy);
                break;
            case "Thug":
                var HalfPouch = {
                    Name: "Pouch",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Gives gold.",
                    Quantity: 1,
                    Title: "Jingles faintly; probably has money in it."
                }
                SnowInventoryAdd(HalfPouch);
                break;
            default:
                break;
        }
    }
    if (r <= dropRate[e.Race]) {
        switch (e.Race) {
            case "Fairy":
                var FairyDust = {
                    Name: "Fairy dust",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Shrinks you 5 cm",
                    Quantity: 1,
                    Title: "Sparkly, commonly used as prank item to shrink people."
                }
                SnowInventoryAdd(FairyDust);
                break;
            case "Human":
                var Human = {
                    Name: "Humanity",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Makes you human",
                    Quantity: 1,
                    Title: "One way to get your humanity back."
                }
                SnowInventoryAdd(Human);
                break;
            case "Halfling":
                var Pouch = {
                    Name: "HalfPouch",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Gives gold.",
                    Quantity: 1,
                    Title: "Jingles faintly; probably has money in it."
                }
                SnowInventoryAdd(Pouch);
                break;
            case "Orc":
                var brew = {
                    Name: "Orc brew",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Heals 10% of HP.",
                    Quantity: 1,
                    Title: "Low-quality beer. It'll heal a bit."
                }
                SnowInventoryAdd(brew);
                break;
            case "Troll":
                var TMilk = {
                    Name: "Troll Milk",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Restores 10% of willpower.",
                    Quantity: 1,
                    Title: "Smells like it's already gone sour. Increases focus."
                }
                SnowInventoryAdd(TMilk);
                break;
            case "Elf":
                var EHair = {
                    Name: "Elven hair",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Elf TF",
                    Quantity: 1,
                    Title: "This is all you need to become an elf, no potions needed."
                }
                SnowInventoryAdd(EHair);
                break;
            case "Amazon":
                var Girdle = {
                    Name: "Amazon's Girdle",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Balances gender",
                    Quantity: 1,
                    Title: "Brings your essences closer together in strength."
                }
                SnowInventoryAdd(Girdle);
                break;
            case "Dark Elf":
                var EHair = {
                    Name: "Elven hair",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Elf TF",
                    Quantity: 1,
                    Title: "This is all you need to become an elf, no potions needed."
                }
                SnowInventoryAdd(EHair);
                break;
            case "Goblin":
                var Female = {
                    Name: "Fertility idol",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Increases femininity",
                    Quantity: 1,
                    Title: "Brings out your feminine side."
                }
                SnowInventoryAdd(Female);
                break;
            case "Imp":
                var Male = {
                    Name: "Cocky rock",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Increases masculinity",
                    Quantity: 1,
                    Title: "Brings out your masculine side."
                }
                SnowInventoryAdd(Male);
                break;
            case "Demon":
                var MaxMale = {
                    Name: "Infernal semen",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Turns femininity into masculinity",
                    Quantity: 1,
                    Title: "Turns your feminine side into another masculine one."
                }
                SnowInventoryAdd(MaxMale);
                break;
            case "Dhampir":
                var MaxFemale = {
                    Name: "Infernal milk",
                    Use: "Yes",
                    Equip: "No",
                    Drop: "Yes",
                    Does: "Turns masculinity into femininity",
                    Quantity: 1,
                    Title: "Turns your masculine side into another feminine one."
                }
                SnowInventoryAdd(MaxFemale);
                break;
            default:
                break;
        }
    }
}