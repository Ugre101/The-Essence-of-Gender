// "Friendly" shop in dungeon area
var items = { // export to items.js when done!
    itemTemplate: {
        Name: "Name of the item",
        Equip: "No", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
        Drop: true, // or false
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
        Use: function (who) {
            EventLog(who.Name + " used the item")
        }
    },
    Whip: {
        Name: "Basic whip",
        Equip: function () {
            /** Function to equip whip think I will make so that where dmg is calulated will use 
             *  something like TotalStr() instead of player.str 
             *  */
        }
    }
}