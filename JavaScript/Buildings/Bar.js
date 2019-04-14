function BarFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings()
    const div = document.createElement("div");
    div.appendChild(TitleText("Local bar"));

    const p = TextBox();
    p.innerHTML = "The local tavern is small and cozy, quite calm for being a tavern but not that" +
        "surprising given the small number of patrons. The smell from the kitchen is very appetizing, maybe you should buy a meal?"
    div.appendChild(p);

    const ShopMenu = document.createElement("div");
    ShopMenu.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })

    const input1 = ButtonButton("Rest 5g", "Spend the night to recover health and will")
    input1.addEventListener("click", function () {
        if (player.Gold >= 5) {
            player.Gold -= 5;
            player.Health = player.MaxHealth;
            player.WillHealth = player.MaxWillHealth;
            battle = false; // A bit overkill but whatever.
            GamePaused = true;
            for (let e = 0; e < 8; e++) {
                DateTracker();
            }
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input1);

    const input2 = ButtonButton("Medium meal 10g", "+2kg fat")
    input2.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 2;
            /*  const BarMeal = {
                  Kcal: 1200,
                  KcalRate: 0.05
              }
              player.FoodStomach.pop();
              player.FoodStomach.push(BarMeal); */
            player.Gold -= 10;
            player.Health += 20;
            player.WillHealth += 20;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input2);
    ShopMenu.appendChild(document.createElement("br"));

    const input3 = ButtonButton("Large meal 30g", "+4kg fat");
    input3.addEventListener("click", function () {
        if (player.Gold > 30) {
            player.Fat += 4;
            /*    const BarMeal = {
                    Kcal: 1800,
                    KcalRate: 0.1
                }
                player.FoodStomach.pop();
                player.FoodStomach.push(BarMeal); */
            player.Gold -= 30;
            player.Health += 50;
            player.WillHealth += 50;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input3);

    const input4 = ButtonButton("Buffet 50g", "+8kg fat");
    input4.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 8;
            /*    const BarMeal = {
                    Kcal: 3200,
                    KcalRate: 0.2
                }
                player.FoodStomach.pop();
                player.FoodStomach.push(BarMeal); */
            player.Gold -= 50;
            player.Health += 70;
            player.WillHealth += 70;
            return;
        }
    });
    ShopMenu.appendChild(input4);
    div.appendChild(ShopMenu);

    div.appendChild(ShopMenu);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}