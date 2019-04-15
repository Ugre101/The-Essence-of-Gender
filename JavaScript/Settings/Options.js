DocId("Options").addEventListener("click", function () {
    DisplayNone();
    const {
        ImgPack,
        LogLength,
        FontSize,
        Inch,
        HighLightDoors,
        BackColor,
        MapColor,
        TextColor,
        TextFont
    } = Settings
    DocId("optionpage").style.display = 'block';
    DocId("ImgPack").value = `Img pack: ${ImgPack}`;
    DocId("LogLength").innerHTML = LogLength;
    DocId("FontSize").innerHTML = `${Math.round(FontSize * 100) / 100}em`
    DocId("Inch").value = `Inch ${Inch}`;
    DocId("HighLightDoors").value = `Highlight doors ${HighLightDoors}`;
    DocId("backcolor").value = BackColor;
    DocId("MapColor").value = MapColor;
    DocId("textcolor").value = TextColor;
    DocId("textfont").value = TextFont;
});

DocId("FontSmaller").addEventListener("click", function () {
    Settings.FontSize -= 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    DocId("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

DocId("FontBigger").addEventListener("click", function () {
    Settings.FontSize += 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    DocId("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

DocId("SetPronoun").addEventListener("click", function () {
    DisplayNone();
    DocId("PronounForm").style.display = 'block'
});

DocId("Log+10").addEventListener("click", function () {
    Settings.LogLength += 10;
    DocId("LogLength").innerHTML = Settings.LogLength;
});

DocId("Log-10").addEventListener("click", function () {
    Settings.LogLength -= 10;
    DocId("LogLength").innerHTML = Settings.LogLength;
});

DocId("AcceptPronoun").addEventListener("click", function () {
    DisplayNone();
    DocId("optionpage").style.display = 'block';
    Settings.Pronoun = {
        Herm: DocId("Herm").value,
        Male: DocId("Male").value,
        Female: DocId("Female").value,
        Doll: DocId("Doll").value,
        DickGirl: DocId("DickGirl").value,
        CuntBoy: DocId("CuntBoy").value,
        Status: true
    };
});
DocId("DisablePronoun").addEventListener("click", function () {
    DisplayNone();
    DocId("optionpage").style.display = 'block';
    Settings.Pronoun.Status = false;
});

DocId("Inch").addEventListener("click", function () {
    Settings.Inch = Settings.Inch ? false : true;
    DocId("Inch").value = "Inch " + Settings.Inch;
});

DocId("FullScreen").addEventListener("click", function () {
    const elem = document.body,
        button = DocId("FullScreen");
    if (document.fullscreenElement === null) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
        button.value = "W";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
        button.value = "F"
    }
});

// Save options
DocId("saveoptions").addEventListener("click", function () {
    DocId("optionpage").style.display = 'none';
    DisplayGame();

    document.body.style.backgroundColor = DocId("backcolor").value;
    MapColor = DocId("MapColor").value;
    document.body.style.color = DocId("textcolor").value;
    document.body.style.fontFamily = DocId("textfont").value;

    DocId("status").style.backgroundColor = DocId("SideBarColor").value;
    DocId("buttons").style.backgroundColor = DocId("SideBarColor").value

    Settings.MapPercent = DocId("MapScale").value;
    Settings.BackColor = DocId("backcolor").value;
    Settings.MapColor = DocId("MapColor").value;
    Settings.TextColor = DocId("textcolor").value;
    Settings.TextFont = DocId("textfont").value;
    Settings.BorderColor = DocId("BorderColor").value;

    HemScale();
});

DocId("PerkOptions").addEventListener("click", function () {
    DisplayNone();
    DocId("PerkOptionsMenu").style.display = 'block';
    DocId("Skip").value = "Skip " + Settings.Skip;
    DocId("Vore").value = "Vore " + Settings.Vore;
});

DocId("Skip").addEventListener("click", function () {
    Settings.Skip = Settings.Skip ? false : true;
    DocId("Skip").value = "Skip " + Settings.Skip;
});

DocId("PlayerSpriteEnable").addEventListener("click", function () {
    Settings.PlayerSpriteEnable = Settings.PlayerSpriteEnable ? false : true;
    DocId("PlayerSpriteEnable").value = Settings.PlayerSpriteEnable;
})

DocId("OptionGiveEssence").addEventListener("click", function () {
    switch (Settings.GiveEssence) {
        case "Both":
            Settings.GiveEssence = "Femininity";
            break;
        case "Femininity":
            Settings.GiveEssence = "Masculinity";
            break;
        case "Masculinity":
            Settings.GiveEssence = "None";
            break;
        default:
            Settings.GiveEssence = "Both";
            break;
    }
    DocId("OptionGiveEssence").value = Settings.GiveEssence;
});

DocId("PerkOptionsLeave").addEventListener("click", function () {
    DocId("PerkOptionsMenu").style.display = 'none';
    DisplayGame();
});

DocId("HighLightDoors").addEventListener("click", function () {
    Settings.HighLightDoors = Settings.HighLightDoors ? false : true;
    DocId("HighLightDoors").value = "Highlight doors " + Settings.HighLightDoors;
});