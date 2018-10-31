document.getElementById("ShowInventory").addEventListener("click", function () {
    DisplayNone();
    console.log(player.Inventory)
    document.getElementById("Inventory").style.display = 'block';
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
});
document.getElementById("InventoryBag").addEventListener("mouseover", function (e) {
    document.getElementById("InventoryText").innerHTML = e.target.title;
});

function Items(Things) {
    var Bag = "";
    Things.sort();
    for (var e = 0; e < Things.length; e++) {
        var Thing = Things[e];
        console.log(Thing);
        var item = "<div title=\"" + Thing.Title + "\">" + Thing.Name + " (" + Thing.Quantity + "\)"
        if (Thing.Use === "Yes") {
            item += "<input type=\"button\" onclick=\"Use(" + e + ")\" value=\"Use\">"
        }
        if (Thing.Equip === "Yes") {
            item += "<input type=\"button\" onclick=\"Equip(" + e + ")\" value=\"Equip\">"
        }
        if (Thing.Drop != "No") {
            item += "<input type=\"button\" onclick=\"Drop(" + e + ")\" value=\"Drop\">"
        }
        item += "</div>";
        Bag += item;
    }
    return Bag;

}

function Use(item) {
    var thing = player.Inventory[item];
    if (thing.Name === "Orc cum") {
        player.Masc += 50;
        EventLog("After drinking the orc cum, you body absorbs the manly essence of it.");
    } else if (thing.Name === "Fairy dust") {
        player.Height -= 5;
        EventLog("Inhaling the fairy dust you see the world grow before you, or maybe it's you who became shorter?");
    } else if (thing.Name === "Humanity") {
        TfEngine("human");
        EventLog("You try to regain your humanity...");
    } else if (thing.Name === "Pouch") {
        var z = Math.round(Math.random() * 40) + 10;
        z = parseInt(z);
        player.Gold += z;
        EventLog("What's in the bag? It's " + z + " coins!");
    } else if (thing.Name === "HalfPouch") {
        var z = Math.round(Math.random() * 40) + 10;
        z = parseInt(z);
        player.Gold += z;
        EventLog("What's in the bag? It's " + z + " coins!");
    } else if (thing.Name === "Orc brew") {
        var z = Math.min(Math.round(player.MaxHealth / 10), player.MaxHealth - player.Health);
        player.health += z;
        EventLog("Bottoms up!");
        if (z > 0)
            EventLog("You gained " + z + " health back!");
        else if (z < 0)
            EventLog("Bleh. That ruined your night's sleep.");
    } else if (thing.Name === "Troll Milk") {
        var z = Math.min(Math.round(player.MaxWillHealth / 10), player.MaxWillHealth - player.WillHealth);
        player.WillHealth += z;
        EventLog("Bottoms up!");
        if (z > 0)
            EventLog("You gained " + z + " willpower back!");
        else if (z < 0)
            EventLog("Bleh. That ruined your night's sleep.");
    } else if (thing.Name === "Elven hair") {
        TfEngine("elf");
        EventLog("You try to become an elf...");
    } else if (thing.Name === "Amazon's Girdle") {
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
    } else if (thing.Name === "Milk Jug") {
        for (var i = 0; i < player.Boobies.length; i++) {
            player.Boobies[i].MilkRate += 0.1;
        }
        EventLog("Chugging the jug, you feel a shudder run through your chest...");
    } else if (thing.Name === "Fertility idol") {
        player.Femi += 100;
        EventLog("You absorb the statue's latent energies.");
    } else if (thing.Name === "Cocky rock") {
        player.Masc += 100;
        EventLog("You absorb the rock's male essence.");
    } else if (thing.Name === "Infernal semen") {
        player.Masc += player.Femi;
        player.Femi = 0;
        EventLog("The infernally-hot semen burns your feminine essence, leaving you 100% male.");
    } else if (thing.Name === "Infernal milk") {
        player.Femi += player.Masc;
        player.Masc = 0;
        EventLog("The infernally-hot milk burns your masculine essence, leaving you 100% female.");
    } else {
        EventLog("Uh... Something went wrong...");
    }
    player.Inventory[item].Quantity--;
    if (player.Inventory[item].Quantity <= 0)
        player.Inventory.splice(item, 1);
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
    return console.log(player.Inventory[item]);
}

function Equip(item) {
    return console.log(player.Inventory[item]);
}

function Drop(item) {
    player.Inventory.splice(item, 1);
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)

}
document.getElementById("InventoryLeave").addEventListener("click", function () {
    battle = false;
    document.getElementById("Inventory").style.display = 'none';
    document.getElementById("map").style.display = 'block';
});