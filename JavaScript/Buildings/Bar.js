function BarFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Local bar");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.innerHTML = "The local tavern is small and cozy, quite calm for being a tavern but not that" +
        "surprising given the small number of patrons. The smell from the kitchen is very appetizing, maybe you should buy a meal?"
    p.classList.add("TextBox");
    div.appendChild(p);

    var ShopMenu = document.createElement("div");
    ShopMenu.addEventListener("mouseover", function(e) {
        p.innerHTML = e.target.title;
    })
    var row1 = document.createElement("div");

    var input1 = new InputButton("Rest 5g", "Spend the night to recover health and will")
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
    row1.appendChild(input1);

    var input2 = new InputButton("Medium meal 10g","+2kg fat")
    input2.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 2;
            /*  var BarMeal = {
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
    row1.appendChild(input2);

    var input3 = new InputButton("Large meal 30g","+4kg fat");
    input3.addEventListener("click", function () {
        if (player.Gold > 30) {
            player.Fat += 4;
            /*    var BarMeal = {
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
    row1.appendChild(input3);

    var input4 = new InputButton("Buffet 50g","+8kg fat");
    input4.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 8;
            /*    var BarMeal = {
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
    row1.appendChild(input4);
    div.appendChild(row1);

    ShopMenu.appendChild(row1);
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(ShopMenu);
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}