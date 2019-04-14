function BlackMarketFunc() {
    const Buildings = document.getElementById("Buildings"),
        MainFrag = document.createDocumentFragment(),
        p = TextBox(),
        input1 = ButtonButton("Sell limbs"),
        limbcon = document.createElement("div"),
        PESS = document.createElement("p"),
        input2 = ButtonButton("Sell 50 femininity 100g"),
        input3 = ButtonButton("Sell 50 masculinity 100g"),
        input4 = ButtonButton("Why can't I buy?", "I see a plenty signs here of what you are buying, but I see nothing about what I can buy?"),
        Content = [p, input1, limbcon, PESS, input2, input3, input4, LeaveBuilding()];

    CleanBuildings();
    if (window.innerHeight > 200) { // No title on small screen
        Content.unshift(TitleText("Black Market"));
    }

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
        p.innerHTML = `Yeah we are only buying essence here, you see we have a contract with guys in the capital where we can sell for a lot more to nobles.  
        Nobles you might ask aren’t they the ones who preach about how you should only have as much essence you can conquer! 
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
            label1 = LabelFor("SellDicks", "Dicks"),
            div1 = document.createElement("div"),
            label2 = LabelFor("SellBalls", "Balls"),
            div2 = document.createElement("div"),
            label3 = LabelFor("SellBreasts", "Breasts"),
            div3 = document.createElement("div"),
            label4 = LabelFor("SellVaginas", "Vaginas"),
            div4 = document.createElement("div"),
            H42 = document.createElement("h4"),
            H42Text = document.createTextNode("Sell sexual organ size 25g/cm"),
            label5 = LabelFor("SellDickSize", "Dick size"),
            div5 = document.createElement("div"),
            label6 = LabelFor("SellBallSize", "Ball size"),
            div6 = document.createElement("div"),
            label7 = LabelFor("SellBreastSize", "Breast size"),
            div7 = document.createElement("div"),
            label8 = LabelFor("SellVaginaSize", "Vagina depth"),
            div8 = document.createElement("div"),
            SellLimbsCon = [H41, label1, div1, label2, div2, label3, div3, label4, div4,
                H42, label5, div5, label6, div6, label7, div7, label8, div8
            ]

        H41.appendChild(H41Text);
        H42.appendChild(H42Text);

        div1.setAttribute("id", "SellDicks");
        player.Dicks.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " dick " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Dicks.splice(i, 1);
                LimbSale();
            });
            div1.appendChild(inp);
        });

        div2.setAttribute("id", "SellBalls");
        player.Balls.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " balls " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Balls.splice(i, 1);
                LimbSale();
            });
            div2.appendChild(inp);
        });

        div3.setAttribute("id", "SellBreasts");
        player.Boobies.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " boobs " + CmToInch(e.Size));
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
        player.Pussies.forEach((e, i) => {
            const inp = ButtonButton(e.Type + " vagina " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                player.Gold += e.Size * 30;
                player.Pussies.splice(i, 1);
                LimbSale();
            });
            div4.appendChild(inp);
        });

        div5.setAttribute("id", "SellDickSize");
        player.Dicks.forEach((e) => {
            const inp = ButtonButton(e.Type + " dick " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div5.appendChild(inp);
        });

        div6.setAttribute("id", "SellBallSize");
        player.Balls.forEach((e) => {
            const inp = ButtonButton(e.Type + " balls " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div6.appendChild(inp);
        });

        div7.setAttribute("id", "SellBreastSize");
        player.Boobies.forEach((e) => {
            const inp = ButtonButton(e.Type + " boobs " + CmToInch(e.Size));
            inp.addEventListener("click", function () {
                (e.Size - 1 < 1) ? e.Size = 1: player.Gold += 25, e.Size--;
                LimbSale();
            });
            div7.appendChild(inp);
        });

        div8.setAttribute("id", "SellVaginaSize");
        player.Pussies.forEach((e) => {
            const inp = ButtonButton(e.Type + " vagina " + CmToInch(e.Size));
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