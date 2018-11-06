
// default items. You can still create others if they respect the template
const ItemDict = {
    itemTemplate: {
        Name: "Name of the item",
        Equip: "No", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
        Drop: "Yes",
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
        Use: function(who){EventLog(who.Name + " used the item")}
    },
    orcCum: {
        Name: "Orc cum",
        Use: function(who){
            who.Masc += 50;
            //if (who == player)
            EventLog("After drinking the orc cum, "+who.Name+" absorbs the manly essence of it.");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Heals 10% of HP.",
        Title: "Low-quality beer. It'll heal a bit."
    },
    fairyDust: {
        Name: "Fairy dust",
        Use: function(who) {
            who.Height -= 5;
            EventLog("Inhaling the fairy dust you see the world grow before you, or maybe it's you who became shorter?");    
        },
        Use: "Yes",
        Equip: "No",
        Drop: "Yes",
        Does: "Shrinks you 5 cm",
        Title: "Sparkly, commonly used as prank item to shrink people."
    },
    humanity: {
        Name: "Humanity",
        Use: function(who) {
            TfEngine("human");
            EventLog("You try to regain your humanity...");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Makes you human",
        Title: "One way to get your humanity back."
    },
    pouch: {
        Name: "Pouch",
        Use: function(who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            player.Gold += z;
            EventLog("What's in the bag? It's " + z + " coins!");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    halfPouch: {
        Name: "Small Pouch",
        Use: function(who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            player.Gold += z;
            EventLog("What's in the bag? It's " + z + " coins!");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    orcBrew: {
        Name: "Orc brew",
        Use: function(who) {
            var z = Math.min(Math.round(player.MaxHealth / 10), player.MaxHealth - player.Health);
            who.Health += z;
            EventLog("Bottoms up!");
            if (z > 0)
                EventLog("You gained " + z + " health back!");
            else if (z < 0)
                EventLog("Bleh. That ruined your night's sleep.");
        },
        Title: "Heals?"
    }, 
    trollMilk: {
        Name: "Troll Milk",
        Use: function(who) {
            var z = Math.min(Math.round(player.MaxWillHealth / 10), player.MaxWillHealth - player.WillHealth);
            player.WillHealth += z;
            EventLog("Bottoms up!");
            if (z > 0)
                EventLog("You gained " + z + " willpower back!");
            else if (z < 0)
                EventLog("Bleh. That ruined your night's sleep.");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Restores 10% of willpower.",
        Title: "Smells like it's already gone sour. Increases focus."
    }, 
    elvenHair: {
        Name: "Elven hair",
        Use: function(who) {
            TfEngine("elf");
            EventLog("You try to become an elf...");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Elf TF",
        Title: "This is all you need to become an elf, no potions needed."
    }, 
    amazonGirdle: {
        Name: "Amazon's Girdle",
        Use: function(who) {
            if (player.Masc > player.Femi + 100) {
                player.Masc -= 50;
                player.Femi += 50;
            } else if (player.Masc + 100 < player.Femi) {
                player.Masc += 50;
                player.Femi -= 50;
            } else {
                var z = Math.round((player.Masc + player.Femi) / 2);
                player.Masc = z;
                player.Femi = z;
            }
            EventLog("Tightening the girdle, you feel your essences balancing...");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Balances gender",
        Title: "Brings your essences closer together in strength."
    }, 
    milkJug: {
        Name: "Milk Jug",
        Use: function(who) {
            for (var i = 0; i < player.Boobies.length; i++) {
                player.Boobies[i].MilkRate += 0.1;
            }
            EventLog("Chugging the jug, you feel a shudder run through your chest...");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Increases lactation",
        Title: "It'll go straight to your chest!"
    }, 
    fertilityIdol: {
        Name: "Fertility idol",
        Use: function(who) {
            player.Femi += 100;
            EventLog("You absorb the statue's latent energies.");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Increases femininity",
        Title: "Brings out your feminine side."
    }, 
    cockyRock: {
        Name: "Cocky rock",
        Use: function(who) {
            player.Masc += 100;
            EventLog("You absorb the rock's male essence.");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Increases masculinity",
        Title: "Brings out your masculine side."
    }, 
    infernalSemen: {
        Name: "Infernal semen",
        Use: function(who) {
            player.Masc += player.Femi;
            player.Femi = 0;
            EventLog("The infernally-hot semen burns your feminine essence, leaving you 100% male.");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Turns femininity into masculinity",
        Title: "Turns your feminine side into another masculine one."
    }, 
    infernalMilk: {
        Name: "Infernal milk",
        Use: function(who) {
            player.Femi += player.Masc;
            player.Masc = 0;
            EventLog("The infernally-hot milk burns your masculine essence, leaving you 100% female.");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Turns masculinity into femininity",
        Title: "Turns your masculine side into another feminine one."
    },
    blade: {
        // currently used in TestFlags.js
        Name: "Blade",
        //Use: "Yes",
        Equip: "Yes",
        Drop: "Yes",
        Does: "Temp+5",
        Quantity: 1,
        Title: "Temp_Tempsson legendary temp sword gives +999 to testing."
    }
}