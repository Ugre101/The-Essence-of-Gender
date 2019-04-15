DocId("ShowInventory").addEventListener("click", function () {
    DisplayNone();
    DocId("Inventory").style.display = 'grid';
    //DocId("InventoryBag").innerHTML = Items(player.Inventory)
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
    DocId("InventoryBag").innerHTML = Items(player.Inventory)
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
    DocId("InventoryBag").innerHTML = Items(player.Inventory)

}
DocId("InventoryLeave").addEventListener("click", function () {
    DocId("Inventory").style.display = 'none';
    DisplayGame();
});

// Trial of new inventory system so I can stop saving unnecessary data
function Items2() {
    const div = DocId("InventoryBag");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    const KeyItems = ["Pocket portal", "SpellBook"]; // Make sure important items are first in iventory
    let Exists = 0;
    for (let k of KeyItems) {
        Exists++;
        const index = player.Inventory.findIndex(f => f.Name === k)
        if (player.Inventory.some(f => f.Name === k) && index !== Exists) {
            let temp = player.Inventory[index]
            player.Inventory.splice(index, 1);
            player.Inventory.unshift(temp);
        }
    }
    for (let e of player.Inventory) {
        const itemarray = Object.values(ItemDict);
        for (let b of itemarray) {
            if (e.Name === b.Name) {
                var item = new InventoryThing(e, b)
                div.appendChild(item);
            }
        }
    }
}

function InventoryThing(e, b) {
    const item = document.createElement("div");
    item.setAttribute("title", b.Title)

    const p = document.createElement("p");
    p.innerHTML = b.Name
    if (typeof e.Quantity === "number") {
        p.innerHTML += ` (${e.Quantity})`
    }
    item.appendChild(p);

    if (typeof b.Use === "function") {
        const use = InputButton("Use");
        use.addEventListener("click", function () {
            DocId("InventoryText").innerHTML = b.Use(player, e);
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    const index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(use)
    }
    if (typeof b.Equip === "function") {
        const Equip = InputButton("Equip");
        Equip.addEventListener("click", function () {
            b.Equip();
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    const index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(Equip)
    }
    if (b.Drop === true) {
        const drop = InputButton("Drop");
        drop.addEventListener("click", function () {
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    const index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(drop);
    }
    var what = InputButton("?");
    what.addEventListener("mouseover", function () {
        DocId("InventoryText").innerHTML = b.Title
    });
    what.addEventListener("click", function () {
        DocId("InventoryText").innerHTML = b.Title
    });
    item.appendChild(what);

    return item;
}