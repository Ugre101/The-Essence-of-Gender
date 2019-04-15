// Start Farm
function FarmOwnerFunc() {
    const Npc = document.getElementById("Npcs")
    CleanNpcs(); // Empties div
    const div = document.createElement("div");
    div.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });

    if (window.innerHeight > 600) { // No title on small screen
        Npc.appendChild(TitleText("Title"));
    }

    const p = TextBox();
    Npc.appendChild(p);

    const wip = ButtonButton("(Placeholder)Need help?");

    const EquineTaurTF = ButtonButton("Equine-Taur Essence 250g", `Do you lack endurance? Want to able to work 
    like a horse? One dose of this and you will turn to a taur hybrid of equine and you current race.`)
    EquineTaurTF.addEventListener("click", function () {
        if (player.Gold >= 250) {
            player.Gold -= 250;
            PotionDrunk("centaur");
            return;
            //TfEngine("centaur");
        } else {
            p.innerHTML = "Insufficient gold.";
            return;
        }
    });
    div.appendChild(EquineTaurTF);

    const EquineTF = ButtonButton("Equine Essence 250g", `Want more lower body strength? Lucky for you this essence 
    will make you to the mare or stallion of your dreams! One dose will turn your lower body to a set of humanoid 
    equine legs while two doses will turn you to a anthropomorphic equine.`)
    EquineTF.addEventListener("click", function () {
        if (player.Gold >= 250) {
            player.Gold -= 250;
            PotionDrunk("equine");
        } else {
            p.innerHTML = "Insufficient gold.";
            return;
        }
    });
    div.appendChild(EquineTF);

    const wip2 = ButtonButton("(Placeholder)Bovine Essence");

    const Looks = ButtonButton("Looks");
    Looks.addEventListener("click", function () {
        p.innerHTML = `Standing before you, a centaur who introduce himself as Teoivz, looking at him it’s evident 
        he spends many hours working on the farm. His human upper body possess muscle forged from years of work, 
        his equine lower body is not one from a race horse but a work horse.<br>Throwing an eye towards his 
        genitals, it’s	hard to guess the exact size his two members retracted inside their penile sheath but it's 
        obvious that they are well capable of stretching a maiden.`
    });
    Looks.addEventListener("mouseover", function () {

    });
    Npc.appendChild(div);
    Npc.appendChild(Looks);
    Npc.appendChild(LeaveNpc());
    Npc.style.display = 'block';
};

function FarmBarnFunc() {
    const Buildings = DocId("Buildings")
    CleanBuildings();
    const div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        div.appendChild(TitleText("Barn"));
    }

    const p = TextBox();
    div.appendChild(p);

    const input1 = ButtonButton("Milker500 499g", "Are your breasts constantly leaking? Does it feel like a waste, seeing your milk drip away? Buy today; a portable milker!");
    input1.addEventListener("click", function () {
        if (player.Gold >= 499) {
            player.Gold -= 499;
            SnowInventoryAdd(ItemDict.Milker, 500);
            p.innerHTML = "Added to inventory"
        } else {
            p.innerHTML = "Not enough gold"
        }
    });
    input1.addEventListener("mouseover", function () {
        p.innerHTML = "Are your breasts constantly leaking? Does it feel like a waste, seeing your milk drip away?<br><br> Buy today; a portable milker!"
    });
    div.appendChild(input1);

    const input2 = ButtonButton("Milk booster 30g", "Can't produce enough milk to feed a baby? Or maybe you want to feed your whole family, or even your town?! Well, this is for your humble (or crazy) needs!")
    input2.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            for (let e of player.Boobies) {
                e.MilkRate++;
                if (false) {
                    // if milkrate is over certain value say stuff like wow godly amounts etc...
                }
            }
            p.innerHTML = "Your breasts milk production increases."
        } else {
            p.innerHTML = "Sorry you can't afford this."
        }
    });
    input2.addEventListener("mouseover", function () {
        p.innerHTML = "Can't produce enough milk to feed a baby? Or maybe you want to feed your whole family, or even your town?!<br><br> Well, this is for your humble (or crazy) needs!"
    });
    div.appendChild(input2);

    const input3 = ButtonButton("Milk stopper 50g", "Sick and tired of your breasts leaving milk spots on your clothes? Just one of these will reduce future 'accidents.' #Note this does not affect lacation rate from pregnancy.")
    input3.addEventListener("click", function () {
        // Lower milkrate
        // if no breast have milkrate stop
        if (player.Gold >= 50) {
            player.Gold -= 50;
            p.innerHTML = ""
            for (let e of player.Boobies) {
                if (e.MilkRate - 1 < 0) {
                    e.MilkRate = 0;
                    p.innerHTML += "Your breasts stops lactating.<br>" //Milk stops
                } else {
                    e.MilkRate--;
                    p.innerHTML = "Your milk production slows.<br>"
                }
                if (false) {
                    // if milkrate is over certain value say stuff like wow gogly amounts etc...
                }
            }
        } else {
            // you are broke
            p.innerHTML = "Sorry you can't afford this."
        }
    })
    input3.addEventListener("mouseover", function () {
        p.innerHTML = "Sick and tired of your breasts leaving milk spots on your clothes? Just one of these will reduce future 'accidents.'<br><br> #Note this does not affect lacation rate from pregnancy."
    })
    div.appendChild(input3);

    if (false) { // TODO
        const DrinkFresh = ButtonButton("Drink fresh milk", "It's not yours. You think.");
        DrinkFresh.addEventListener("click", function () {
            // Drink milk Maybe fuck a bovine furry? 
            // Get healed + temp boost to hp & will stronger than bar meal
            const a = RandomInt(1, 20);
            if (a > 15) {
                if (player.Int > 20) {
                    if (false) {
                        Partners.FarmOwner.Submit += 1; // ask Bovine to help you dom farmowner
                        // Flags.BovineSometing = true;
                    }
                    // Fuck bovine
                } else {
                    // The horny bovine staddles you before you mangage to figure out what's happening.
                }
            }
        })
        const GetMilked = ButtonButton("Get milked", "Mooooooooooooo!");
        GetMilked.addEventListener("click", function () {
            // Sell milk(maybe cum to?), this can trigger a event where farmowner tries to fuck you
            // depenent on your stats you can turn it around or get away, if your stats are to weak you get fucked.
            const MilkTotal = 0;
            for (const e of player.Boobies) {
                MilkTotal += e.Milk * 0.9;
                e.Milk = e.Milk * 0.1;
            }
            if (MilkTotal > 0) {
                if (MilkTotal > 10) {
                    const a = RandomInt(1, 20);
                    if (a > 10) {
                        // if (Flags.Bovine) {};
                    }
                }

            } else {

            }
        })
    }

    // TODO add a milking event with farm owner
    /**
     * // Barn Milk Event
    // Let him fuck you
    Partners.FarmOwner.Submit -= 5;
    Partners.FarmOwner.Like += 5;
    // Turn it around if you have enough strength
    Partners.FarmOwner.Submit += 5;
    Partners.FarmOwner.Like -= 5;
    // Get away
    Partners.FarmOwner.Like += 3;
     */

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    DocId("Buildings").style.display = 'block';
}