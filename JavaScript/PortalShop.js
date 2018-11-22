document.getElementById("BuyPocketPortal").addEventListener("click", function () {
   if (player.Gold >= 1000) {
        player.Gold -= 1000;
        SnowInventoryAdd(ItemDict.PocketPortal, 99);
   } else {
       document.getElementById("PortalShopText").innerHTML = "You can't afford a pocket portal..."
   }

});
document.getElementById("PortalShop").addEventListener("mouseover", function (e) {
    document.getElementById("PortalShopText").innerHTML = e.target.title;
});

document.getElementById("BuyMountainPortal").addEventListener("click", function() {
    if (player.Gold > 500) {

    }
});