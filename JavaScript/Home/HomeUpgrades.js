    DocId("UpgradeHome").addEventListener("click", function () {
        UpgradeHomeMenu();
    })

    function UpgradeHomeMenu() {
        DocId("HomeStart").style.display = 'none';
        DocId("HomeText").style.display = 'none';
        DocId("Upgrades").style.display = 'block';

        const Upgrades = DocId("Upgrades");
        while (Upgrades.hasChildNodes()) {
            Upgrades.removeChild(Upgrades.firstChild);
        }

        const p = TextBox();
        Upgrades.appendChild(p);

        const h2 = document.createElement("h2"),
            h2Text = document.createTextNode("Upgrades");
        h2.appendChild(h2Text);
        Upgrades.appendChild(h2);

        function BedCost() {
            return Math.round(50 * Math.pow(1.2, House.BedLevel));
        }
        const UpgradeBed = ButtonButton(`Upgrade bedroom ${BedCost()}g`);
        UpgradeBed.addEventListener("click", function () {
            if (player.Gold >= BedCost()) {
                House.BedLevel++;
                player.Gold -= BedCost();
                if (House.BedLevel < 5) {
                    p.innerHTML = "You have upgraded your master bedroom, this will allow you to wake up with extra health and will."
                } else {
                    p.innerHTML = "You upgrade your master bedroom.";
                }
                UpgradeBed.setAttribute("value", `Upgrade bedroom ${BedCost()}g`)
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

        const DormValue = House.Dorm > 0 ? `Upgrade dorm ${DormCost()}g` : `Build dorm ${DormCost()}g`,
            BuildDorm = ButtonButton(DormValue);
        BuildDorm.addEventListener("click", function () {
            if (player.Gold >= DormCost()) {
                House.Dorm++;
                player.Gold -= DormCost();
                if (House.Dorm < 2) {
                    DocId("Dorm").style.display = "inline-block";
                    p.innerHTML = `Hiring construction workers you give orders to build a dorm to house servants.<br><br>
                    Looking outside you see the newly built dorm. You can now take home opponent you have made orgasm five times.`
                } else {
                    p.innerHTML = `You expand your dorm to house three more servants.(${House.Dorm * 3})`;
                }
                BuildDorm.setAttribute("value", `Upgrade dorm ${DormCost()}g`)
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
        const GymValue = House.Gym > 0 ? `Upgrade gym ${Gymcost()}g` : `Build gym ${Gymcost()}g`,
            BuildGym = ButtonButton(GymValue);
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
        const KitchenValue = House.Kitchen > 0 ? `Upgrade kitchen ${Kitchencost()}g` : `Build kitchen ${Kitchencost()}g`,
            BuildKitchen = ButtonButton(KitchenValue)

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
        const BrothelValue = House.Brothel > 0 ? `Upgrade brothel ${Brothelcost()}g` : `Build brothel ${Brothelcost()}g`,
            BuildBrothel = ButtonButton(BrothelValue);

        BuildBrothel.addEventListener("click", function () {
            if (player.Gold >= Brothelcost()) {
                player.Gold -= Brothelcost();
                if (House.Brothel < 1) {
                    p.innerHTML = "You have built a brothel where your servants will whore themself out, allowing you to gain extra income."
                } else {
                    p.innerHTML = "You upgrade your brothel for extra income.";
                }
                House.Brothel++;
                DocId("Brothel").style.display = 'inline-block';
                BuildBrothel.setAttribute("value", "Upgrade brothel " + Brothelcost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        Upgrades.appendChild(BuildBrothel);

        function Nurserycost() {
            return Math.round(200 * Math.pow(1.2, House.Nursery));
        }
        const NurseryValue = House.Nursery > 0 ? `Upgrade nursery ${Nurserycost()}g` : `Build nursery ${Nurserycost()}g`,
            BuildNursery = ButtonButton(NurseryValue);

        BuildNursery.addEventListener("click", function () {
            if (player.Gold >= Nurserycost()) {
                player.Gold -= Nurserycost();
                if (House.Nursery < 1) {
                    p.innerHTML = "You have built a nursery."
                } else {
                    p.innerHTML = "You upgrade your nursery.";
                }
                House.Nursery++;
                BuildNursery.setAttribute("value", `Upgrade nursery ${Nurserycost()}g`);
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
            const BuildPortal = ButtonButton("Build portal 1000g")
            BuildPortal.addEventListener("click", function () {
                if (player.Gold >= 1000) {
                    player.Gold -= 1000;
                    House.Portal.Owned = true;
                    p.innerHTML = "Congratulations you now own a personal portal, a true sign of wealth for peasants to envy!"
                    DocId("Portal").style.display = 'inline-block';
                    Upgrades.removeChild(BuildPortal)
                } else {
                    p.innerHTML = `Sadly you lack funds to afford commissions the construction of a portal…
                    <br><br>You will have to continue walking like the poor peasant you are.`
                }
            });
            BuildPortal.addEventListener("mouseover", function () {
                p.innerHTML = "Why would you walk in a magic world, that's for peasants!"
            });
            Upgrades.appendChild(BuildPortal);
        }

        const Close = ButtonButton("Close");
        Close.addEventListener("click", function () {
            DocId("HomeStart").style.display = 'block';
            DocId("Upgrades").style.display = 'none';
            DocId("HomeText").style.display = 'block';

            const Upgrades = DocId("Upgrades");
            while (Upgrades.hasChildNodes()) {
                Upgrades.removeChild(Upgrades.firstChild);
            }
        });
        Upgrades.appendChild(document.createElement("br"));
        Upgrades.appendChild(Close);

        // Barn.innerHTML = "Allows you to milk your lactating servants. The milk can be brought with you as a travel snack or you can sell it for gold."
    }