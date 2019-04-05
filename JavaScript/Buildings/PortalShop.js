function PortalShopFunc() {
    const Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div");

    if (window.innerHeight > 600) { // Skip title on smaller screens
        const h1 = document.createElement("h1"),
            h1text = document.createTextNode("Portal shop");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    const p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    const input1 = InputButton("Pocket portal 1000g", "Are you tired of walking home? Then pocket portal is for you, now with 99 uses! #Note seller is not responsible if you waste them by using them without owning a home portal.");
    input1.addEventListener("click", function () {
        if (player.Gold >= 1000) {
            player.Gold -= 1000;
            SnowInventoryAdd(ItemDict.PocketPortal, 99);
            if (!House.Portal.Owned) {
                p.innerHTML = "Now you just need to build a portal at home..."
            }
        } else {
            p.innerHTML = "You can't afford a pocket portal..."
        }
    });
    input1.addEventListener("mouseover", function () {
        p.innerHTML = "Are you tired of walking home? Then pocket portal is for you, now with 99 uses!<br>#Note seller is not responsible if you waste them by using them without owning a home portal."
    });
    div.appendChild(input1);

    if (House.Portal.Mountain === false) {
        const input2 = InputButton("Portal to mountain region 500g", "A beautiful land with wonderful views, but be consty as it’s the home for plenty dangerous races and tribes.");
        input2.addEventListener("click", function () {
            if (player.Gold >= 500) {
                if (House.Portal.Mountain) {
                    p.innerHTML = "You already own this."
                } else {
                    player.Gold -= 500;
                    House.Portal.Mountain = true;
                    if (House.Portal.Owned) {
                        p.innerHTML = "A new destination have been unlocked at your home portal."
                    } else {
                        p.innerHTML = "Now you just need to build a portal at home..."
                    }
                }
            } else {
                p.innerHTML = "You can't afford it..."
            }
        });
        input2.addEventListener("mouseover", function () {
            p.innerHTML = "A beautiful land with wonderful views, but be consty as it’s the home for plenty dangerous races and tribes."
        });
        div.appendChild(input2);
    }

    div.appendChild(document.createElement("br"));

    div.appendChild(LeaveBuilding()); // Call to leave building function; returns a leave button

    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}