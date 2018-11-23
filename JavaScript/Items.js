
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
            //if (who == who.
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
            who.Gold += z;
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
            who.Gold += z;
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
            var z = Math.min(Math.round(who.MaxHealth / 10), who.MaxHealth - who.Health);
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
            var z = Math.min(Math.round(who.MaxWillHealth / 10), who.MaxWillHealth - who.WillHealth);
            who.WillHealth += z;
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
            if (who.Masc > who.Femi + 100) {
                who.Masc -= 50;
                who.Femi += 50;
            } else if (who.Masc + 100 < who.Femi) {
                who.Masc += 50;
                who.Femi -= 50;
            } else {
                var z = Math.round((who.Masc + who.Femi) / 2);
                who.Masc = z;
                who.Femi = z;
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
            for (var i = 0; i < who.Boobies.length; i++) {
                who.Boobies[i].MilkRate += 0.1;
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
            who.Femi += 100;
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
            who.Masc += 100;
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
            who.Masc += who.Femi;
            who.Femi = 0;
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
            who.Femi += who.Masc;
            who.Masc = 0;
            EventLog("The infernally-hot milk burns your masculine essence, leaving you 100% female.");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Turns masculinity into femininity",
        Title: "Turns your masculine side into another feminine one."
    },
	    SuccMilk: {
        Name: "Milk+",
        Use: function(who) {
			var a = "", 
			    b = "";
            if(Settings.EssenceAuto == false && who.Boobies.length < 2)
			{
				if(who.Boobies[0].Size < 6)
				{
					who.Boobies[0].Size = 6;
					a = "your breasts swell";
				}
				who.Boobies[1] = who.Boobies[0];
				a += ", as another pair grow right below them to the same size!";
			}
			else if(Settings.EssenceAuto == false)
			{
				var c = 0;
				for(var i = 0; i < who.Boobies.length; i++)
				{
					if(who.Boobies[i].Size < 6)
					{
						who.Boobies[i].Size = 6;
						c++;
					}
				}
				if (c > 0)
					a = "your smallest breasts swell to D-cups!";
			}
			else if(who.Femi <= 3560)
			{
				who.Femi = 3561;
				a = "your chest explodes with activity, leaving you with a feminized body, complete with massive breasts!";
			}
			else a = "your boobs vibrate with energy...";
			FluidsEngine();
			for(var i = 0; i < who.Boobies.length; i++)
			{
				if(who.Boobies[i].Milk < who.Boobies[i].MilkMax)
				{
				who.Boobies[i].Milk = who.Boobies[i].MilkMax;
				b = "<br>A few seconds later, they're completely filled with milk!";
				}
			}
			
            EventLog("Feeling a flush of heat in your chest, you glance down just in time to see " + a + b);
			FluidsEngine();
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Makes you filled with milk!",
        Title: "Guarantees milkiness."
    },
	    IncSemen: {
        Name: "Semen+",
        Use: function(who) {
			var a = "", 
			    b = "";
            if(Settings.EssenceAuto == false && who.Balls.length < 2)
			{
				a = "your balls"
				if(who.Balls[0].Size < 6)
				{
					who.Balls[0].Size = 6;
					a += " swell";
				}
				who.Balls[1] = who.Balls[0];
				a += ", as another pair grow right beside them to the same size!";
			}
			else if(Settings.EssenceAuto == false)
			{
				var c = 0;
				for(var i = 0; i < who.Balls.length; i++)
				{
					if(who.Balls[i].Size < 6)
					{
						who.Balls[i].Size = 6;
						c++;
					}
				}
				if (c > 0)
					a = "your smallest balls swell in size!";
			}
			else if(who.Masc <= 3560)
			{
				who.Masc = 3561;
				a = "your groin explode with activity, leaving you with a masculinized body, complete with massive dicks and balls!";
			}
			else a = "your balls vibrate with energy...";
			FluidsEngine();
			for(var i = 0; i < who.Balls.length; i++)
			{
				if(who.Balls[i].Cum < who.Balls[i].CumMax)
				{
				who.Balls[i].Cum = who.Balls[i].CumMax;
				b = " A few seconds later, they're completely filled with cum!";
				}
			FluidsEngine();
			}
			
            EventLog("Feeling a flush of heat in your groin, you glance down just in time to see " + a + b);
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Makes you filled with cum!",
        Title: "Guarantees cum-filling."
    },
	    book: {
        Name: "Book",
        Use: function(who) {
			who.Int++;
			who.Arousal = 99;
            EventLog("A dirty magazine, that's made you extremely aroused...");
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Int +1",
        Title: "Magically connects to another dimension's internet, but only shows porn."
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
    },
    Milker: {
        Name: "Milker",
        Use: function(who) {
            for (var e of player.Boobies) {
                if (e.Milk > 0) {
                    e.Milk = 0
                    
                }
            }
        },
        Equip: "No",
        Drop: "Yes",
        Does: "Milk you",
        Title: "Milk yourself"
    },
    MilkBottle: {
        Name: "Milk",
        Use: function(who) {
            //Drink milk
        },
        Equip: "No",
        Drop: "Yes",
        Does: "...",
        Title: "A bottle of milk."
    },
    PocketPortal: {
        Name: "Pocket portal",
        Use: function(who) {
            console.log(House)
            if (House.Portal) {
                who.Area = "First";
                who.Map = "RoadToHome";
                DisplayGame();
                document.getElementById("Inventory").style.display = 'none';
            } else {
                document.getElementById("InventoryText").innerHTML = "What a waste...";
            }
        },
        Equip: "No",
        Does: "Teleport home",
        Drop: "No",//I think?
        Title: "Never walk home again!"
    }
}