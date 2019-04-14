function WitchHutFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings();
    const div = document.createElement("div");
    if (window.innerHeight > 600) {
        div.appendChild(TitleText("Witch hut"));
    }

    const p = TextBox();
    div.appendChild(p);

    const row1 = document.createElement("div");
    row1.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })

    const elf = ButtonButton("Elf delight 200g", "Tired of being a human? Do you feel a desire to possess pointy ears? Become an elf today!")
    elf.addEventListener("click", function () {
        if (player.Gold >= 200) {
            player.Gold -= 200;
            PotionDrunk("elf");
            p.innerHTML = "You drink the potion and get a strange feeling running through your entire body.";
        } else {
            p.innerHTML = "You can't afford the potion";
        }
    });
    row1.appendChild(elf);

    const Perkup = ButtonButton("Perk Up 1000g", "This pill glows green and yellow, and seems to hover slightly above your hand. Eat it to get a perk point!")
    Perkup.addEventListener("click", function () {
        if (player.Gold >= 1000) {
            player.Gold -= 1000;
            player.PerkPoints++;
            p.innerHTML = "You eat the pill, and hear something like a bell ringing in your ears.";
        } else {
            p.innerHTML = "You can't afford the pill, and you don't have any emeralds to barter with.";
        }
    });
    row1.appendChild(Perkup);

    if (Settings.Vore) {
        const VoreUp = ButtonButton("Eating Up 1000g", "This red pill makes your mouth water and stomach growl. Eat it for an other perk point! (Below it is a little disclaimer: 'store owner not responsible for ineffective pills.')")
        // Move to more fitting place and need new title
        // title ideas
        // Ilegal item, made from havrested souls from the last great battle.
        VoreUp.addEventListener("click", function () {
            if (player.Gold >= 1000) {
                player.Gold -= 1000;
                player.Vore.VorePoints++;
                p.innerHTML = "You eat the pill, and get a strange feeling running through your entire body.";
            } else {
                p.innerHTML = "You can't afford the pill, and it looks so tasty...";
            }
        });
        row1.appendChild(VoreUp);
    }

    const Fireball = ButtonButton("Fireball 500g", "Basic quick course on elemental magic, includes how to cast a fireball.")
    //Fireball.setAttribute("title", "This little ball allows you to cast a single fireball spell per ball you own, per battle! (Don't set yourself on fire, please.)");
    Fireball.addEventListener("click", function () {
        if (!Array.isArray(player.Spells)) { // Remove later
            player.Spells = [];
        }
        if (player.Spells.some(e => e.Name === "Fireball")) {
            // Maybe add some affinity gain
            p.innerHTML = "You already know the basics"
            return;
        } else if (player.Gold >= 500) {
            player.Gold -= 500;
            player.Spells.push(SpellDictLite.Fireball);

            p.innerHTML = "Putting the ball in your pocket, you hope it works as advertised.";
        } else {
            // to poor
        }
    });
    row1.appendChild(Fireball);

    const HumanTF = ButtonButton("Potion of Humanity 250g", "Do you not remember who you are anymore? Feel like you have lost you humanity?");
    HumanTF.addEventListener("click", function () {
        if (player.Gold >= 250) {
            player.Gold -= 250;
            PotionDrunk("human");
            p.innerHTML = "You drink the potion and get a familiar feeling running through your entire body.";
        } else {
            p.innerHTML = "You can't afford the potion";
        }
    });
    row1.appendChild(HumanTF);

    const EyeColor = ButtonButton("Eye color 50g", "Not happy with the eyes you were born with?");
    EyeColor.addEventListener("click", function () {
        const row2 = document.createElement("div");
        row2.addEventListener("mouseover", function (e) {
            p.innerHTML = e.target.title;
        })
        const EyeColors = [
            "brown", "hazel", "blue", "green", "silver", "amber"
        ]
        for (let e of EyeColors) {
            const inputs = ButtonButton(e.Capitalize(), ` ${e.Capitalize()} eyes`)
            inputs.addEventListener("click", function (a) {
                if (player.Gold >= 50) {
                    player.Face.Eyes = a.target.value.toLowerCase();
                    p.innerHTML = "Looking in the mirror your eyes are now " + player.Face.Eyes;
                } else {
                    p.innerHTML = "Insufficient gold!"
                }
            });
            row2.appendChild(inputs);
        };

        const close = ButtonButton("Close", "Close eye color menu");
        close.addEventListener("click", function () {
            WitchHutFunc();
        })
        row2.appendChild(close);
        div.appendChild(row2);
    });
    row1.appendChild(EyeColor);

    div.appendChild(row1);
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}