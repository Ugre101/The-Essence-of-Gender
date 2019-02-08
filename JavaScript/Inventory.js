document.getElementById("ShowInventory").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("Inventory").style.display = 'block';
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
});
document.getElementById("InventoryBag").addEventListener("mouseover", function (e) {
    if (e.target.type !== "button") {
        if (e.target.nodeName === "P") { // So that text still show if you hover over <p></p>
            document.getElementById("InventoryText").innerHTML = e.target.parentElement.title;
        } else {
            document.getElementById("InventoryText").innerHTML = e.target.title;
        }
    }
});
document.getElementById("InventoryBag").addEventListener("click", function (e) { // For mobile users
    if (e.target.type !== "button") {
        if (e.target.nodeName === "P") {
            document.getElementById("InventoryText").innerHTML = e.target.parentElement.title;
        } else {
            document.getElementById("InventoryText").innerHTML = e.target.title;
        }
    }
});

function Items(Things) {
    var KeyItems = ["Pocket portal", "SpellBook"]; // Make sure important items are first in iventory
    var Exists = 0;
    for (var k of KeyItems) {
        var index = Things.findIndex(f => f.Name === k)
        if (Things.some(f => f.Name === k) && index !== Exists) {
            Exists++;
            var temp = Things[index]
            Things.splice(index, 1);
            Things.unshift(temp);
        }
    }
    var Bag = "";
    Things.sort();
    for (var e = 0; e < Things.length; e++) {
        var Thing = Things[e];
        var item = "<div title=\"" + Thing.Title + "\"><p>" + Thing.Name;
        if (typeof Thing.Quantity === "number") { // Don't show for non number values
            item += " (" + Thing.Quantity + "\)"
        }
        item += "</p>"
        if (typeof Thing.Use === "function") {
            item += "<input type=\"button\" onclick=\"Use(" + e + ")\" value=\"Use\">"
        }
        if (typeof Thing.Read === "function") {
            item += "<input type=\"button\" onclick=\"Read(" + e + ")\" value=\"Read\">"
        }
        if (typeof Thing.Equip === "function") {
            item += "<input type=\"button\" onclick=\"Equip(" + e + ")\" value=\"Equip\">"
        }
        if (Thing.Drop === true) {
            item += "<input type=\"button\" onclick=\"Drop(" + e + ")\" value=\"Drop\">"
        }
        item += "</div>";
        Bag += item;
    }
    return Bag;

}

function Use(item) {
    var thing = player.Inventory[item];
    if (thing.hasOwnProperty("Use") && typeof thing.Use == 'function') {
        thing.Use(player, thing)
    } else {
        console.log("this item has not been refactored: " + item.Name);
        switch (thing.Name) {
            default:
                EventLog("Uh... Something went wrong...");
                break;
        }
    }
    console.log((typeof player.Inventory[item].Quantity == "number"))
    if (typeof player.Inventory[item].Quantity === "number") {
        player.Inventory[item].Quantity--;
        if (player.Inventory[item].Quantity <= 0) {
            player.Inventory.splice(item, 1);
        }
    }
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
}

function Equip(item) {
    ItemDict[player.Inventory[item].Name].Equip();
    return console.log(player.Inventory[item]);
}

function Read(item) {
    ItemDict[player.Inventory[item].Name].Read();
    return console.log(player.Inventory[item]);
}

function Drop(item) {
    player.Inventory.splice(item, 1);
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)

}
document.getElementById("InventoryLeave").addEventListener("click", function () {
    document.getElementById("Inventory").style.display = 'none';
    DisplayGame();
});