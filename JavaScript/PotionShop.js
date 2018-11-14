    // Items
    document.getElementById("ItemsShop").addEventListener("click", function (e) {
        if (e.target.type == "button") {
            Chosen = String(e.target.id);
            if (Chosen == "StrPotion" && player.Gold > 100) {
                player.Str++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body becoming stronger."
            } else if (Chosen == "ChaPotion" && player.Gold > 100) {
                player.Charm++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your charms grow."
            } else if (Chosen == "EndPotion" && player.Gold > 100) {
                player.End++
                player.MaxHealth += 5;
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your endurance growing."
            } else if (Chosen == "IntPotion" && player.Gold > 100) {
                player.Int++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your mind becoming sharper."
            } else if (Chosen == "WillPotion" && player.Gold > 100) {
                player.Will++
                player.MaxWillHealth += 5;
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your willpower growing."
            } else if (Chosen == "SexPotion" && player.Gold > 100) {
                player.SexSkill++
                player.Gold -= 100;
                document.getElementById("ShopText").innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you get a feeling that somehow your bedskills have grown."
            } else {
                document.getElementById("ShopText").innerHTML = "";
            }
        }
    });