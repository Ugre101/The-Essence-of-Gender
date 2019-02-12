document.getElementById("BuyPocketPortal").addEventListener("click", function () {
    if (player.Gold >= 1000) {
        player.Gold -= 1000;
        SnowInventoryAdd(ItemDict.PocketPortal, 99);
        if (!House.Portal.Owned) {
            document.getElementById("PortalShopText").innerHTML = "Now you just need to build a portal at home..."
        }
    } else {
        document.getElementById("PortalShopText").innerHTML = "You can't afford a pocket portal..."
    }

});
document.getElementById("PortalShop").addEventListener("mouseover", function (e) {
    document.getElementById("PortalShopText").innerHTML = e.target.title;
});

document.getElementById("BuyMountainPortal").addEventListener("click", function () {
    if (player.Gold >= 500) {
        if (House.Portal.Mountain) {
            document.getElementById("PortalShopText").innerHTML = "You already own this."
        } else {
            player.Gold -= 500;
            House.Portal.Mountain = true;
            if (House.Portal.Owned) {
                document.getElementById("PortalShopText").innerHTML = "A new destination have been unlocked at your home portal."
            } else {
                document.getElementById("PortalShopText").innerHTML = "Now you just need to build a portal at home..."
            }
        }
    } else {
        document.getElementById("PortalShopText").innerHTML = "You can't afford it..."
    }
});