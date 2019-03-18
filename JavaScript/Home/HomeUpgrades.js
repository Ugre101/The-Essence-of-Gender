    document.getElementById("UpgradeHome").addEventListener("click", function () {
        UpgradeHomeMenu();
    })

    function UpgradeHomeMenu() {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("HomeText").style.display = 'none';
        document.getElementById("Upgrades").style.display = 'block';

        var Upgrades = document.getElementById("Upgrades");
        while (Upgrades.hasChildNodes()) {
            Upgrades.removeChild(Upgrades.firstChild);
        }

        var p = document.createElement("p");
        p.classList.add("TextBox");
        Upgrades.appendChild(p);

        var h2 = document.createElement("h2");
        var h2Text = document.createTextNode("Upgrades");
        h2.appendChild(h2Text);
        Upgrades.appendChild(h2);

        function BedCost() {
            return Math.round(50 * Math.pow(1.2, House.BedLevel));
        }
        var UpgradeBed = InputButton("Upgrade bedroom " + BedCost() + "g");
        UpgradeBed.addEventListener("click", function () {
            if (player.Gold >= BedCost()) {
                House.BedLevel++;
                player.Gold -= BedCost();
                if (House.BedLevel < 5) {
                    p.innerHTML = "You have upgraded your master bedroom, this will allow you to wake up with extra health and will."
                } else {
                    p.innerHTML = "You upgrade your master bedroom.";
                }
                UpgradeBed.setAttribute("value", "Upgrade bedroom " + BedCost() + "g")
            } else {
                p.innerHTML = "You can't afford to upgrade your bedroom.";
            }
        });
        UpgradeBed.addEventListener("mouseover", function () {
            p.innerHTML = "An upgraded bedroom makes you wake up bonus health & willpower."
        })
        Upgrades.appendChild(UpgradeBed);

        function DormCost() {
            return Math.round(250 * Math.pow(1.2, House.Dorm));
        }
        if (House.Dorm > 0) {
            var BuildDorm = InputButton("Upgrade dorm " + DormCost() + "g")

        } else {
            var BuildDorm = InputButton("Build dorm " + DormCost() + "g")
        }
        BuildDorm.addEventListener("click", function () {
            if (player.Gold >= DormCost()) {
                House.Dorm++;
                player.Gold -= DormCost();
                if (House.Dorm < 2) {
                    document.getElementById("Dorm").style.display = "inline-block";
                    p.innerHTML = "Hiring construction workers you give orders to build a dorm to house servants. <br><br>" +
                        "Looking outside you see the newly built dorm. You can now take home opponent you have made orgasm five times."
                } else {
                    p.innerHTML = "You expand your dorm to house three more servants.(" + House.Dorm * 3 + ")";
                }
                BuildDorm.setAttribute("value", "Upgrade dorm " + DormCost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildDorm.addEventListener("mouseover", function () {
            p.innerHTML = "A building to house former opponents whom chose to join you either trough submission or other means."
        })
        Upgrades.appendChild(BuildDorm);

        function Gymcost() {
            return Math.round(200 * Math.pow(1.2, House.Gym));
        }
        if (House.Gym > 0) {
            var BuildGym = InputButton("Upgrade gym " + Gymcost() + "g")
        } else {
            var BuildGym = InputButton("Build gym " + Gymcost() + "g")
        }
        BuildGym.addEventListener("click", function () {
            if (player.Gold >= Gymcost()) {
                if (House.Gym < 1) {
                    p.innerHTML = "You built a gym for your servants, they can now go there in order to burn fat and build muscle.";
                } else {
                    p.innerHTML = "You upgrade your gym so your servants can gain more muscle."
                }
                House.Gym++;
                player.Gold -= Gymcost();
                BuildGym.setAttribute("value", "Upgrade gym " + Gymcost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildGym.addEventListener("mouseover", function () {
            p.innerHTML = "A gym will make your servant can gain muscle over time."
        })
        Upgrades.appendChild(BuildGym);

        function Kitchencost() {
            return Math.round(200 * Math.pow(1.2, House.Kitchen));
        }
        if (House.Kitchen > 0) {
            var BuildKitchen = InputButton("Upgrade kitchen " + Kitchencost() + "g")
        } else {
            var BuildKitchen = InputButton("Build kitchen " + Kitchencost() + "g")
        }
        BuildKitchen.addEventListener("click", function () {
            if (player.Gold >= Kitchencost()) {
                if (House.Kitchen < 1) {
                    p.innerHTML = "You have built a kitchen where your servant can go and eat. Be aware that if you don't build a gym they will get fat, unless that's what you are into to."
                } else {
                    p.innerHTML = "You upgrade your kitchen servants can now gain more fat.";
                }
                House.Kitchen++;
                player.Gold -= Kitchencost();
                BuildKitchen.setAttribute("value", "Upgrade kitchen " + Kitchencost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildKitchen.addEventListener("mouseover", function () {
            p.innerHTML = "A kitchen will make your servants gain fat over time.";
        })
        Upgrades.appendChild(BuildKitchen)

        function Brothelcost() {
            return Math.round(500 * Math.pow(1.2, House.Brothel));
        }
        if (House.Brothel > 0) {
            var BuildBrothel = InputButton("Upgrade brothel " + Brothelcost() + "g")
        } else {
            var BuildBrothel = InputButton("Build brothel " + Brothelcost() + "g")
        }
        BuildBrothel.addEventListener("click", function () {
            if (player.Gold >= Brothelcost()) {
                player.Gold -= Brothelcost();
                if (House.Brothel < 1) {
                    p.innerHTML = "You have built a brothel where your servants will whore themself out, allowing you to gain extra income."
                } else {
                    p.innerHTML = "You upgrade your brothel for extra income.";
                }
                House.Brothel++;
                document.getElementById("Brothel").style.display = 'inline-block';
                BuildBrothel.setAttribute("value", "Upgrade brothel " + Brothelcost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        Upgrades.appendChild(BuildBrothel);

        function Nurserycost() {
            return Math.round(200 * Math.pow(1.2, House.Nursery));
        }
        if (House.Nursery > 0) {
            var BuildNursery = InputButton("Upgrade nursery " + Nurserycost() + "g");
        } else {
            var BuildNursery = InputButton("Build nursery " + Nurserycost() + "g");
        }
        BuildNursery.addEventListener("click", function () {
            if (player.Gold >= Nurserycost()) {
                player.Gold -= Nurserycost();
                if (House.Nursery < 1) {
                    p.innerHTML = "You have built a nursery."
                } else {
                    p.innerHTML = "You upgrade your nursery.";
                }
                House.Nursery++;
                BuildNursery.setAttribute("value", "Upgrade nursery " + Nurserycost() + "g");
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildNursery.addEventListener("mouseover", function () {
            //p.innerHTML = "Speeds up aging of non-adult children, hopefully without consequences..."
            p.innerHTML = "Accelerate your children’s growth towards adulthood, childhood isn’t that important right?"
        });
        Upgrades.appendChild(BuildNursery);

        if (House.Portal.Owned === false) {
            var BuildPortal = InputButton("Build portal 1000g")
            BuildPortal.addEventListener("click", function () {
                if (player.Gold >= 1000) {
                    player.Gold -= 1000;
                    House.Portal.Owned = true;
                    p.innerHTML = "Congratulations you now own a personal portal, a true sign of wealth for peasants to envy!"
                    document.getElementById("Portal").style.display = 'inline-block';
                    Upgrades.removeChild(BuildPortal)
                } else {
                    p.innerHTML = "	Sadly you lack funds to afford commissions the construction of a portal…" +
                        "<br><br>You will have to continue walking like the poor peasant you are."
                }
            });
            BuildPortal.addEventListener("mouseover", function () {
                p.innerHTML = "Why would you walk in a magic world, that's for peasants!"
            });
            Upgrades.appendChild(BuildPortal);
        }

        var Close = InputButton("Close");
        Close.addEventListener("click", function () {
            document.getElementById("HomeStart").style.display = 'block';
            document.getElementById("Upgrades").style.display = 'none';
            document.getElementById("HomeText").style.display = 'block';

            var Upgrades = document.getElementById("Upgrades");
            while (Upgrades.hasChildNodes()) {
                Upgrades.removeChild(Upgrades.firstChild);
            }
        });
        Upgrades.appendChild(Close);

        // Barn.innerHTML = "Allows you to milk your lactating servants. The milk can be brought with you as a travel snack or you can sell it for gold."
    }