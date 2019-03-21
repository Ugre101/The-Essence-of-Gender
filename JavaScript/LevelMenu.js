    // Level Menu
    DocId("LevelButton").addEventListener("click", function () {
        DisplayNone();
        LevelMenuFunc();
        DocId("LevelMenu").style.display = 'block';
    });
    // Incraese stats

    function LevelMenuFunc() {
        let div = DocId("LevelMenu");
        while (div.hasChildNodes()) {
            div.removeChild(div.lastChild);
        }
        let innerdiv = document.createElement("div");
        innerdiv.classList.add("LPMenuInner");

        let Con = document.createElement("div");
        if (window.innerHeight > 600) {
            let h1 = document.createElement("h1");
            let h1text = document.createTextNode("Level menu")
            h1.appendChild(h1text);
            innerdiv.appendChild(h1);

        }

        let p = document.createElement("p");
        p.classList.add("MenuText");
        innerdiv.appendChild(p);

        Con.addEventListener("mouseover", function (e) {
            p.innerHTML = e.target.title;
        })

        let pl = document.createElement("p"); // PointsLeft
        pl.innerHTML = player.SkillPoints + " points left";
        innerdiv.appendChild(pl);

        let br = document.createElement("br"),
            br2 = document.createElement("br"),
            br3 = document.createElement("br");

        let Strength = InputButton("Strength: " + player.Str, "Makes physical attacks stronger");
        Strength.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Str++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Strength);

        let Charm = InputButton("Charm: " + player.Charm, "Makes tease stronger");
        Charm.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Charm++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Charm);
        Con.appendChild(br);

        let Endurance = InputButton("Endurance: " + player.End, "Gives you more health and every 8 point increase max orgasm");
        Endurance.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.End++;
                player.SkillPoints--;
                player.MaxHealth += 5;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Endurance);

        let Intelligence = InputButton("Intelligence: " + player.Int, "Increases spell effects");
        Intelligence.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Int++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Intelligence);
        Con.appendChild(br2);

        let Willpower = InputButton("Willpower: " + player.Will, "Increases your willhealth");
        Willpower.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Will++;
                player.MaxWillHealth += 5;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Willpower);

        let Sexskill = InputButton("Sex skill: " + player.SexSkill, "When having sex your enemy gains more arousal");
        Sexskill.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.SexSkill++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Sexskill);

        innerdiv.appendChild(Con);
        innerdiv.appendChild(br3);

        let PerkMenu = InputButton("Perk menu");
        PerkMenu.addEventListener("click", function () {
            PerkMenuFunc();
        });
        innerdiv.appendChild(PerkMenu);

        let Done = InputButton("Done");
        Done.addEventListener("click", function () {
            div.style.display = 'none';
            DisplayGame();
        })
        innerdiv.appendChild(Done);
        div.appendChild(innerdiv);
    }