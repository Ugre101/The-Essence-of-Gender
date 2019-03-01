    // Level Menu
    document.getElementById("LevelButton").addEventListener("click", function () {
        DisplayNone();
        LevelMenuFunc();
        document.getElementById("LevelMenu").style.display = 'block';
    });
    // Incraese stats

    function LevelMenuFunc() {
        var div = document.getElementById("LevelMenu");
        while (div.hasChildNodes()) {
            div.removeChild(div.lastChild);
        }
        var innerdiv = document.createElement("div");
        innerdiv.classList.add("LPMenuInner");

        var Con = document.createElement("div");
        if (window.innerHeight > 600) {
            var h1 = document.createElement("h1");
            var h1text = document.createTextNode("Level menu")
            h1.appendChild(h1text);
            innerdiv.appendChild(h1);

            Con.classList.add("TwoColumn")
        }

        var p = document.createElement("p");
        p.classList.add("MenuText");
        innerdiv.appendChild(p);

        Con.addEventListener("mouseover", function(e) {
            p.innerHTML = e.target.title;
        })

        var pl = document.createElement("p"); // PointsLeft
        pl.innerHTML = player.SkillPoints + " points left";
        innerdiv.appendChild(pl);

        var buttons = [a = {
            name: function () {
                return "Strength: " + player.Str
            },
            title: "Makes hit stronger",
            Func: function () {
                if (player.SkillPoints > 0) {
                    player.Str++;
                    player.SkillPoints--;
                    LevelMenuFunc();
                } else {
                    return;
                }
            }
        }, b = {
            name: function () {
                return "Charm: " + player.Charm;
            },
            title: "Makes tease stronger",
            Func: function () {
                if (player.SkillPoints > 0) {
                    player.Charm++;
                    player.SkillPoints--;
                    LevelMenuFunc();
                } else {
                    return;
                }
            }
        }, c = {
            name: function () {
                return "Endurance: " + player.End;
            },
            title: "Gives you more health and every 8 point increase max orgasm",
            Func: function () {
                if (player.SkillPoints > 0) {
                    player.End++;
                    player.SkillPoints--;
                    player.MaxHealth += 5;
                    LevelMenuFunc();
                } else {
                    return;
                }
            }
        }, d = {
            name: function () {
                return "Intelligence: " + player.Int;
            },
            title: "Increases spell effects",
            Func: function () {
                if (player.SkillPoints > 0) {
                    player.Int++;
                    player.SkillPoints--;
                    LevelMenuFunc();
                } else {
                    return;
                }
            }
        }, e = {
            name: function () {
                return "Willpower: " + player.Will;
            },
            title: "Gives you more WillPower",
            Func: function () {
                if (player.SkillPoints > 0) {
                    player.Will++;
                    player.MaxWillHealth += 5;
                    player.SkillPoints--;
                    LevelMenuFunc();
                } else {
                    return;
                }
            }
        }, f = {
            name: function () {
                return "Sex skill: " + player.SexSkill;
            },
            title: "When having sex your enemy gains more arousal",
            Func: function () {
                if (player.SkillPoints > 0) {
                    player.SexSkill++;
                    player.SkillPoints--;
                    LevelMenuFunc();
                } else {
                    return;
                }
            }
        }];

        for (var e of buttons) {
            Con.appendChild(SkillButton(e));
        }
        innerdiv.appendChild(Con);

        var PerkMenu = InputButton("Perk menu");
        PerkMenu.addEventListener("click", function () {
            PerkMenuFunc();
        });
        innerdiv.appendChild(PerkMenu);

        var Done = InputButton("Done");
        Done.addEventListener("click", function () {
            div.style.display = 'none';
            DisplayGame();
        })
        innerdiv.appendChild(Done);
        div.appendChild(innerdiv);
    }

    function SkillButton(e) {
        var button = InputButton(e.name(), e.title);
        button.addEventListener("click", e.Func);
        return button;
    }