function BlackMarketFunc() {
    const Buildings = document.getElementById("Buildings"),
        MainFrag = document.createDocumentFragment(),
        p = document.createElement("p"),
        input1 = InputButton("Sell limbs"),
        limbcon = document.createElement("div"),
        PESS = document.createElement("p"),
        input2 = InputButton("Sell 50 femininity 100g"),
        input3 = InputButton("Sell 50 masculinity 100g"),
        input4 = InputButton("Why can't I buy?", "I see a plenty signs here of what you are buying, but I see nothing about what I can buy?"),
        Content = [p, input1, limbcon, PESS, input2, input3, input4, LeaveBuilding()];

    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }

    if (window.innerHeight > 200) { // No title on small screen
        const h1 = document.createElement("h1"),
            h1text = document.createTextNode("Black Market");
        h1.appendChild(h1text);
        Content.unshift(h1);
    }

    p.classList.add("TextBox");

    input1.addEventListener("click", function () {
        limbcon.classList.add("LimbSale")
        if (limbcon.hasChildNodes()) {
            while (limbcon.hasChildNodes()) {
                limbcon.removeChild(limbcon.firstChild);
            };
            p.style.display = 'block';
        } else {
            LimbSale();
            p.style.display = 'none';
        }
    });
    input1.addEventListener("mouseover", function () {

    });

    PESS.innerHTML = `Masc: ${Math.round(player.Masc)} Femi: ${Math.round(player.Femi)}`

    input2.addEventListener("click", function () {
        const amount = Math.min(50, player.Femi);
        if (typeof amount === "number" && !Number.isNaN(amount)) {
            player.Femi -= amount;
            player.Gold += amount * 2;
        }
        BlackMarketFunc();
    });
    input2.addEventListener("mouseover", function () {

    });

    input3.addEventListener("click", function () {
        const amount = Math.min(50, player.Masc);
        if (typeof amount === "number" && !Number.isNaN(amount)) {
            player.Masc -= amount;
            player.Gold += amount * 2;
        }
        BlackMarketFunc();
    });
    input3.addEventListener("mouseover", function () {

    });

    input4.addEventListener("click", function () {
        p.innerHTML = `Yeah we are only buying essence here, you see we have a contract with guys in the capital where we can sell for a lot more to nobles.  Nobles you might ask aren’t they the ones who preach about how you should only have as much essence you can conquer!
             The thing is though while they say trading essence are forbidden and for the weak, the rich don’t follow the rules they only pretend to in order to maintain their image.`
    });
    input4.addEventListener("mouseover", function () {
        p.innerHTML = `I see a plenty signs here of what you are buying, but I see nothing about what I can buy?`
    });

    Content.forEach((val) => {
        MainFrag.appendChild(val);
    });
    Buildings.appendChild(MainFrag);
    document.getElementById("Buildings").style.display = 'block';

    function LimbSale() {
        while (limbcon.hasChildNodes()) {
            limbcon.removeChild(limbcon.firstChild);
        };
        const Frag = document.createDocumentFragment(),
            H41 = document.createElement("h4"),
            H41Text = document.createTextNode("Sell sexual organs 30g/cm"),
            label1 = document.createElement("label"),
            div1 = document.createElement("div"),
            label2 = document.createElement("label"),
            div2 = document.createElement("div"),
            label3 = document.createElement("label"),
            div3 = document.createElement("div"),
            label4 = document.createElement("label"),
            div4 = document.createElement("div"),
            H42 = document.createElement("h4"),
            H42Text = document.createTextNode("Sell sexual organ size 25g/cm"),
            label5 = document.createElement("label"),
            div5 = document.createElement("div"),
            label6 = document.createElement("label"),
            div6 = document.createElement("div"),
            label7 = document.createElement("label"),
            div7 = document.createElement("div"),
            label8 = document.createElement("label"),
            div8 = document.createElement("div"),
            SellLimbsCon = [H41, label1, div1, label2, div2, label3, div3, label4, div4,
                H42, label5, div5, label6, div6, label7, div7, label8, div8
            ]

        H41.appendChild(H41Text);
        H42.appendChild(H42Text);

        div1.setAttribute("id", "SellDicks");
        label1.setAttribute("for", "SellDicks");
        label1.innerHTML = "Dicks";
        player.Dicks.forEach((e, i) => {
            const inp = InputButton(e.Type + " dick " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Dicks.splice(i, 1);
                LimbSale();
            });
            div1.appendChild(inp);
        });

        div2.setAttribute("id", "SellBalls");
        label2.setAttribute("for", "SellBalls");
        label2.innerHTML = "Balls";
        player.Balls.forEach((e, i) => {
            const inp = InputButton(e.Type + " balls " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Balls.splice(i, 1);
                LimbSale();
            });
            div2.appendChild(inp);
        });

        div3.setAttribute("id", "SellBreasts");
        label3.setAttribute("for", "SellBreasts");
        label3.innerHTML = "Breasts";
        player.Boobies.forEach((e, i) => {
            const inp = InputButton(e.Type + " boobs " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                if (player.Boobies.length > 1) {
                    player.Gold += e.Size * 30;
                    player.Boobies.splice(i, 1);
                    LimbSale();
                }
            });
            div3.appendChild(inp);
        });

        div4.setAttribute("id", "SellVaginas");
        label4.setAttribute("for", "SellVaginas");
        label4.innerHTML = "Vaginas";
        player.Pussies.forEach((e, i) => {
            const inp = InputButton(e.Type + " vagina " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Pussies.splice(i, 1);
                LimbSale();
            });
            div4.appendChild(inp);
        });

        div5.setAttribute("id", "SellDickSize");
        label5.setAttribute("for", "SellDickSize");
        label5.innerHTML = "Dick size";
        player.Dicks.forEach((e, i) => {
            const inp = InputButton(e.Type + " dick " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div5.appendChild(inp);
        });

        div6.setAttribute("id", "SellBallSize");
        label6.setAttribute("for", "SellBallSize");
        label6.innerHTML = "Ball size";
        player.Balls.forEach((e, i) => {
            const inp = InputButton(e.Type + " balls " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div6.appendChild(inp);
        });

        div7.setAttribute("id", "SellBreastSize");
        label7.setAttribute("for", "SellBreastSize");
        label7.innerHTML = "Breast size";
        player.Boobies.forEach((e, i) => {
            const inp = InputButton(e.Type + " boobs " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div7.appendChild(inp);
        });

        div8.setAttribute("id", "SellVaginaSize");
        label8.setAttribute("for", "SellVaginaSize");
        label8.innerHTML = "Vagina depth";
        player.Pussies.forEach((e, i) => {
            const inp = InputButton(e.Type + " vagina " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div8.appendChild(inp);
        });

        SellLimbsCon.forEach((src) => {
            Frag.appendChild(src)
        });
        limbcon.appendChild(Frag);
    }
}