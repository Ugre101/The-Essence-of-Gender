document.getElementById("ShowInventory").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("Inventory").style.display = 'grid';
    //document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
    Items2();
});

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

// Trial of new inventory system so I can stop saving unnecessary data
function Items2() {
    var div = document.getElementById("InventoryBag");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    var KeyItems = ["Pocket portal", "SpellBook"]; // Make sure important items are first in iventory
    var Exists = 0;
    for (var k of KeyItems) {
        Exists++;
        var index = player.Inventory.findIndex(f => f.Name === k)
        if (player.Inventory.some(f => f.Name === k) && index !== Exists) {
            var temp = player.Inventory[index]
            player.Inventory.splice(index, 1);
            player.Inventory.unshift(temp);
        }
    }
    for (var e of player.Inventory) {
        var itemarray = Object.values(ItemDict);
        for (var b of itemarray) {
            if (e.Name === b.Name) {
                var item = new InventoryThing(e, b)
                div.appendChild(item);
            }
        }
    }
}

function InventoryThing(e, b) {
    var item = document.createElement("div");
    item.setAttribute("title", b.Title)

    var p = document.createElement("p");
    p.innerHTML = b.Name
    if (typeof e.Quantity === "number") {
        p.innerHTML += " (" + e.Quantity + ")"
    }
    item.appendChild(p);

    if (typeof b.Use === "function") {
        var use = InputButton("Use");
        use.addEventListener("click", function () {
            document.getElementById("InventoryText").innerHTML = b.Use(player, e);
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    var index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();

        });
        item.appendChild(use)
    }
    if (typeof b.Equip === "function") {
        var Equip = InputButton("Equip");
        Equip.addEventListener("click", function () {
            b.Equip();
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    var index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();

        });
        item.appendChild(Equip)
    }
    if (b.Drop === true) {
        var drop = InputButton("Drop");
        drop.addEventListener("click", function () {
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    var index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(drop);
    }
    var what = InputButton("?");
    what.addEventListener("mouseover", function () {
        document.getElementById("InventoryText").innerHTML = b.Title
    });
    what.addEventListener("click", function () {
        document.getElementById("InventoryText").innerHTML = b.Title
    });
    item.appendChild(what);
    return item;
}