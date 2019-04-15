function WitchShopFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings(); // Empties div

    if (window.innerHeight > 600) { // No title on small screen
        Buildings.appendChild(TitleText("Title"));
    }

    const p = TextBox();
    Buildings.appendChild(p);

    const div = document.createElement("div");
    div.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });

    const input1 = ButtonButton("Grow 50g", `Can't reach the top shelf? Get taller today!`);
    input1.addEventListener("click", function () {
        if (player.Gold >= 50) {
            const growth = Math.round((180 / player.Height) * 100) / 100;
            player.Gold -= 50;
            player.Height += growth;
            p.innerHTML = `You grow ${growth}cm.`;
        }
    });
    const input2 = ButtonButton("Shrink 50g", `Hitting your head on ceilings and doorframes? Shrink today!`);
    input2.addEventListener("click", function () {
        if (player.Gold >= 50) {
            const shrunk = Math.round((player.Height / 100) * 100) / 100;
            player.Gold -= 50;
            player.Height -= shrunk;
            p.innerHTML = `You shrink ${shrunk}cm.`;
        }
    });
    const input3 = ButtonButton("Fertility booster 30g", `Is it hard to become pregnant? Fear not! 
    We have the product for you!`);
    input3.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            player.Fertility++;
            p.innerHTML = `You feel your body becoming more fertil.`;
        }
    });
    const input4 = ButtonButton("Fertility subtractor 70g", `Tired of getting knocked up by a bunch of deadbeat fathers? 
    We have the product to turn your fertile nethers into a barren wasteland!`);
    input4.addEventListener("click", function () {
        if (player.Gold >= 70) {
            player.Gold -= 70;
            player.Fertility -= 3;
            p.innerHTML = "You feel your body becoming more barren."
        }
    });
    const input5 = ButtonButton("Virility booster 70g", `Do you feel like you don't have enough children? 
    Don't worry! With our virility booster you can be sure that you will get enough successors!`);
    input5.addEventListener("click", function () {
        if (player.Gold >= 70) {
            player.Gold -= 70;
            player.Virility++;
            p.innerHTML = `You feel your virility increasing.`;
        }
    });
    const input6 = ButtonButton("Virility subtractor 30g", `Do you have nightmares that future partners will demand child support? 
    Do you want to live a child-free life? Well then, look no further!`);
    input6.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            player.Virility -= 3;
            p.innerHTML = `You feel your virility decreasing`;
        }
    });
    const input7 = ButtonButton("Cum booster 100g", `Do you shoot blanks? Say no more! With our cum booster, 
    your balls will refill at a healthy rate. Warning: over-dosing can lead to spontaneous ejaculation.`);
    input7.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Gold -= 100;
            for (let e of player.Balls) {
                e.CumRate += 0.1;
            }
            p.innerHTML = `You get a tingling feeling in your balls, you think it works!`
        }
    });
    const input8 = ButtonButton("Cum dropper 20g", `Do your balls overfill and you spontaneously ejaculate in your pants? 
    Don't worry about it! This will dry up your balls. Warning: over-dosing can lead to impotence.`);
    input8.addEventListener("click", function () {
        if (player.Gold >= 20) {
            player.Gold -= 20;
            for (let e of player.Balls) {
                e.CumRate -= 0.5;
            }
            p.innerHTML = `You get a strange feeling in your balls, you think it works!`
        }
    });
    const br = () => {
            return document.createElement("br");
        },
        Inputs = [input1, input2, br(), input3, input4, br(), input5, input6, br(), input7, input8].forEach((src) => {
            div.appendChild(src);
        });
    Buildings.appendChild(div);
    Buildings.appendChild(br());
    Buildings.appendChild(LeaveBuilding());
    document.getElementById("Buildings").style.display = 'block';
};