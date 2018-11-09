document.getElementById("RestBar").addEventListener("click", function () {
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
document.getElementById("EatBar").addEventListener("click", function () {
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
document.getElementById("Bar").addEventListener("mouseover", function (e) {
    document.getElementById("BarText").innerHTML = e.target.title;
});
document.getElementById("EatBarMedium").addEventListener("click", function () {
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
document.getElementById("EatBarLarge").addEventListener("click", function () {
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