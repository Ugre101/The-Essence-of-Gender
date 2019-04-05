function BarFunc() {
    const Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div"),
        h1 = document.createElement("h1"),
        h1text = document.createTextNode("Local bar");
    h1.appendChild(h1text);
    div.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = "The local tavern is small and cozy, quite calm for being a tavern but not that" +
        "surprising given the small number of patrons. The smell from the kitchen is very appetizing, maybe you should buy a meal?"
    p.classList.add("TextBox");
    div.appendChild(p);

    const ShopMenu = document.createElement("div");
    ShopMenu.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })

    const input1 = new InputButton("Rest 5g", "Spend the night to recover health and will")
    input1.addEventListener("click", function () {
        if (player.Gold >= 5 && (player.Health < player.MaxHealth || player.WillHealth < player.MaxWillHealth)) {
            player.Gold -= 5;
            player.Health = player.MaxHealth;
            player.WillHealth = player.MaxWillHealth;
            Flags.Date.Day++;
            document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input1);

    const input2 = new InputButton("Medium meal 10g", "+2kg fat")
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

    const input3 = new InputButton("Large meal 30g", "+4kg fat");
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

    const input4 = new InputButton("Buffet 50g", "+8kg fat");
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