// default items. You can still create others if they respect the template
const ItemDict = {
    itemTemplate: {
        Lite: { // What should be saved between games, quantity is added to this
            Name: "Name of the item",
        },
        Name: "Name of the item",
        Equip: "No", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
        Drop: true, // or false
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
        Use: function (who) {
            //EventLog(who.Name + " used the item") Lets stop spamming the eventlog!
            return who.Name + " used the item"
        }
    },
    orcCum: {
        Lite: {
            Name: "Orc cum"
        },
        Name: "Orc cum",
        Use: function (who) {
            who.Masc += 50;
            //if (who == who.
            return "After drinking the orc cum, " + who.Name + " absorbs the manly essence of it."
        },
        Equip: "No",
        Drop: true,
        Does: "Heals 10% of HP.",
        Title: "Low-quality beer. It'll heal a bit."
    },
    fairyDust: {
        Lite: {
            Name: "Fairy dust"
        },
        Name: "Fairy dust",
        Use: function (who) {
            who.Height -= 5;
            return "Inhaling the fairy dust you see the world grow before you, or maybe it's you who became shorter?"
        },
        Use: "Yes",
        Equip: "No",
        Drop: true,
        Does: "Shrinks you 5 cm",
        Title: "Sparkly, commonly used as prank item to shrink people."
    },
    humanity: {
        Lite: {
            Name: "Humanity"
        },
        Name: "Humanity",
        Use: function (who) {
            PotionDrunk("human");
            return "You try to gain some humanity."
            // if player already have alot of human race ess maybe say strengtn?
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you human",
        Title: "One way to get your humanity back."
    },
    pouch: {
        Lite: {
            Name: "Pouch"
        },
        Name: "Pouch",
        Use: function (who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            who.Gold += z;
            return "What's in the bag? It's " + z + " coins!"
        },
        Equip: "No",
        Drop: true,
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    halfPouch: {
        Lite: {
            Name: "Small Pouch",
        },
        Name: "Small Pouch",
        Use: function (who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            who.Gold += z;
            return "What's in the bag? It's " + z + " coins!";
        },
        Equip: "No",
        Drop: true,
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    orcBrew: {
        Lite: {
            Name: "Orc brew"
        },
        Name: "Orc brew",
        Use: function (who) {
            var z = Math.min(Math.round(who.MaxHealth / 10), who.MaxHealth - who.Health);
            who.Health += z;
            if (z > 0) {
                return "Bottoms up!<br><br>" + "You gained " + z + " health back!";
            } else if (z < 0) {
                return "Bottoms up!<br><br>" + "Bleh. That ruined your night's sleep.";
            }
        },
        Title: "Heals?",
        Drop: true
    },
    trollMilk: {
        Lite: {
            Name: "Troll Milk"
        },
        Name: "Troll Milk",
        Use: function (who) {
            var z = Math.min(Math.round(who.MaxWillHealth / 10), who.MaxWillHealth - who.WillHealth);
            who.WillHealth += z;
            if (z > 0) {
                return "Bottoms up!<br><br>" + "You gained " + z + " willpower back!"
            } else if (z < 0) {
                return "Bottoms up!<br><br>" + "Bleh. That ruined your night's sleep."
            }
        },
        Equip: "No",
        Drop: true,
        Does: "Restores 10% of willpower.",
        Title: "Smells like it's already gone sour. Increases focus."
    },
    elvenHair: {
        Lite: {
            Name: "Elven hair"
        },
        Name: "Elven hair",
        Use: function (who) {
            PotionDrunk("elf");
            return "You try to become an elf..."
        },
        Equip: "No",
        Drop: true,
        Does: "Elf TF",
        Title: "This is all you need to become an elf, no potions needed."
    },
    amazonGirdle: {
        Lite: {
            Name: "Amazon's Girdle"
        },
        Name: "Amazon's Girdle",
        Use: function (who) {
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
            return "Tightening the girdle, you feel your essences balancing..."
        },
        Equip: "No",
        Drop: true,
        Does: "Balances gender",
        Title: "Brings your essences closer together in strength."
    },
    milkJug: {
        Lite: {
            Name: "Milk Jug"
        },
        Name: "Milk Jug",
        Use: function (who) {
            for (var i = 0; i < who.Boobies.length; i++) {
                who.Boobies[i].MilkRate += 0.1;
            }
            return "Chugging the jug, you feel a shudder run through your chest..."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases lactation",
        Title: "It'll go straight to your chest!"
    },
    fertilityIdol: {
        Lite: {
            Name: "Fertility idol"
        },
        Name: "Fertility idol",
        Use: function (who) {
            who.Femi += 100;
            return "You absorb the statue's latent energies."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases femininity",
        Title: "Brings out your feminine side."
    },
    cockyRock: {
        Lite: {
            Name: "Cocky rock"
        },
        Name: "Cocky rock",
        Use: function (who) {
            who.Masc += 100;
            return "You absorb the rock's male essence."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases masculinity",
        Title: "Brings out your masculine side."
    },
    infernalSemen: {
        Lite: {
            Name: "Infernal semen"
        },
        Name: "Infernal semen",
        Use: function (who) {
            who.Masc += who.Femi;
            who.Femi = 0;
            return "The infernally-hot semen burns your feminine essence, leaving you 100% male."
        },
        Equip: "No",
        Drop: true,
        Does: "Turns femininity into masculinity",
        Title: "Turns your feminine side into another masculine one."
    },
    infernalMilk: {
        Lite: {
            Name: "Infernal milk"
        },
        Name: "Infernal milk",
        Use: function (who) {
            who.Femi += who.Masc;
            who.Masc = 0;
            return "The infernally-hot milk burns your masculine essence, leaving you 100% female."
        },
        Equip: "No",
        Drop: true,
        Does: "Turns masculinity into femininity",
        Title: "Turns your masculine side into another feminine one."
    },
    SuccMilk: {
        Lite: {
            Name: "Milk+"
        },
        Name: "Milk+",
        Use: function (who) {
            var a = "",
                b = "";
            if (Settings.EssenceAuto == false && who.Boobies.length < 2) {
                if (who.Boobies[0].Size < 6) {
                    who.Boobies[0].Size = 6;
                    a = "your breasts swell";
                }
                who.Boobies[1] = who.Boobies[0];
                a += ", as another pair grow right below them to the same size!";
            } else if (Settings.EssenceAuto == false) {
                var c = 0;
                for (var i = 0; i < who.Boobies.length; i++) {
                    if (who.Boobies[i].Size < 6) {
                        who.Boobies[i].Size = 6;
                        c++;
                    }
                }
                if (c > 0)
                    a = "your smallest breasts swell to D-cups!";
            } else if (who.Femi <= 3560) {
                who.Femi = 3561;
                a = "your chest explodes with activity, leaving you with a feminized body, complete with massive breasts!";
            } else a = "your boobs vibrate with energy...";
            FluidsEngine();
            for (var i = 0; i < who.Boobies.length; i++) {
                if (who.Boobies[i].Milk < who.Boobies[i].MilkMax) {
                    who.Boobies[i].Milk = who.Boobies[i].MilkMax;
                    b = "<br>A few seconds later, they're completely filled with milk!";
                }
            }

            FluidsEngine();
            return "Feeling a flush of heat in your chest, you glance down just in time to see " + a + b
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you filled with milk!",
        Title: "Guarantees milkiness."
    },
    IncSemen: {
        Lite: {
            Name: "Semen+"
        },
        Name: "Semen+",
        Use: function (who) {
            var a = "",
                b = "";
            if (Settings.EssenceAuto == false && who.Balls.length < 2) {
                a = "your balls"
                if (who.Balls[0].Size < 6) {
                    who.Balls[0].Size = 6;
                    a += " swell";
                }
                who.Balls[1] = who.Balls[0];
                a += ", as another pair grow right beside them to the same size!";
            } else if (Settings.EssenceAuto == false) {
                var c = 0;
                for (var i = 0; i < who.Balls.length; i++) {
                    if (who.Balls[i].Size < 6) {
                        who.Balls[i].Size = 6;
                        c++;
                    }
                }
                if (c > 0)
                    a = "your smallest balls swell in size!";
            } else if (who.Masc <= 3560) {
                who.Masc = 3561;
                a = "your groin explode with activity, leaving you with a masculinized body, complete with massive dicks and balls!";
            } else a = "your balls vibrate with energy...";
            FluidsEngine();
            for (var i = 0; i < who.Balls.length; i++) {
                if (who.Balls[i].Cum < who.Balls[i].CumMax) {
                    who.Balls[i].Cum = who.Balls[i].CumMax;
                    b = " A few seconds later, they're completely filled with cum!";
                }
                FluidsEngine();
            }

            return "Feeling a flush of heat in your groin, you glance down just in time to see " + a + b
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you filled with cum!",
        Title: "Guarantees cum-filling."
    },
    book: {
        Lite: {
            Name: "Book"
        },
        Name: "Book",
        Use: function (who) {
            who.Int++;
            who.Arousal = 99;
            return "A dirty magazine, that's made you extremely aroused..."
        },
        Equip: "No",
        Drop: true,
        Does: "Int +1",
        Title: "Magically connects to another dimension's internet, but only shows porn."
    },
    Milker: {
        Lite: {
            Name: "Milker500"
        },
        Name: "Milker500",
        Use: function (who, item) {
            const Milktotal = who.Boobies.map(m => m.Milk).reduce((acc, cur) => acc + cur);
            for (let e of who.Boobies) {
                e.Milk = 0
            }
            item.Quantity++; // Crude way to stop player from wasteing milker.
            if (Math.round(Milktotal / 500) > 0) {
                item.Quantity -= Math.max(1, Math.round(Milktotal / 1000));
            }
            if (Math.floor(Milktotal / 2000) > 0) {
                SnowInventoryAdd(ItemDict.LargeMilkBottle, Math.floor(Milktotal / 2000))
            }
            if (Math.floor(Milktotal % 2000 / 1000 > 0)) {
                SnowInventoryAdd(ItemDict.MilkBottle, Math.floor(Milktotal % 2000 / 1000))
            }
            if (Math.round((Milktotal % 1000 / 500))) { // Giving two bottles if over 1.5 seems fair
                SnowInventoryAdd(ItemDict.SmallMilkBottle, Math.round((Milktotal % 1000 / 500)));
            }
            FluidsEngine();
        },
        Equip: "No",
        Drop: true,
        Does: "Milk you",
        Title: "Milk yourself"
    },
    SmallMilkBottle: {
        Lite: {
            Name: "Small milk bottle"
        },
        Name: "Small milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 18) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 5;
            player.WillHealth += 5;
            player.Fat += 0.1;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A half liter bottle filled milk."
    },
    MilkBottle: {
        Lite: {
            Name: "Milk bottle"
        },
        Name: "Milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 17) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 12;
            player.WillHealth += 12;
            player.Fat += 0.3;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A one liter bottle filled milk."
    },
    LargeMilkBottle: {
        Lite: {
            Name: "Large milk bottle"
        },
        Name: "Large milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 16) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 30;
            player.WillHealth += 30;
            player.Fat += 0.5;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A two liter bottle filled milk."
    },
    PocketPortal: {
        Lite: {
            Name: "Pocket portal"
        },
        Name: "Pocket portal",
        Use: function (who, item) {
            if (who.Map === "RoadToHome") {
                DocId("InventoryText").innerHTML = "... seriously?"
                item.Quantity++;
            } else if (House.Portal.Owned) {
                enemies = [];
                who.Area = "First";
                who.Map = "RoadToHome";
                DisplayGame();
                DocId("Inventory").style.display = 'none';
            } else {
                item.Quantity++;
                DocId("InventoryText").innerHTML = "You have no house portal.";
            }
        },
        Equip: "No",
        Does: "Teleport home",
        Drop: false, //I think?
        Title: "Never walk home again!"
    },
}

// Splited from main dict to keep it readable
ItemDict.SpellBook = {
    Lite: {
        Name: "SpellBook"
    },
    Name: "SpellBook",
    Equip: "", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
    Drop: false,
    Does: "Short desc.",
    Quantity: "bob", // Infinity
    Title: "Long description of the item",
    Use: function (who) {
        DocId("Inventory").style.display = "none";

        var Div = DocId("SpellBook");
        Div.style.display = "block";
        while (Div.hasChildNodes()) {
            Div.removeChild(Div.firstChild);
        }

        var h1 = document.createElement("h1");
        h1.innerHTML = "Spell book"
        Div.appendChild(h1);

        var p = document.createElement("p");
        p.classList.add("TextBox");
        Div.appendChild(p);

        for (var e = 0; e < player.Spells.length; e++) {
            var Spell = DictSpell(e);
            Div.appendChild(Spell);
        }

        function DictSpell(e) {
            var it = player.Spells[e];
            var DictIt = SpellDict[it.Name];
            var DictSpell = InputButton(DictIt.Name);
            DictSpell.addEventListener("click", function () {
                h1.innerHTML = DictIt.Name
                p.innerHTML = `${SpellDictLite[it.Name].Title}<br><br>Manacost: ${DictIt.ManaCost(it.Exp)}<br>
                Type: ${DictIt.Type}<br>Exp: ${it.Exp}`
            });
            Div.appendChild(DictSpell);
            return DictSpell
        }
        var CloseBook = InputButton("Close book");
        CloseBook.addEventListener("click", function () {
            while (Div.hasChildNodes()) {
                Div.removeChild(Div.firstChild);
            }
            Div.style.display = "none";
            DocId("Inventory").style.display = "block";
        });
        Div.appendChild(CloseBook);
    }
}