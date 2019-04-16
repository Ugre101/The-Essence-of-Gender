function ImgPackLoader(file) {

}
ImgPackLoader()

DocId("ImgPack").addEventListener("click", function () {
    switch (Settings.ImgPack) {
        case false:
            Settings.ImgPack = "Mode1";
            break;
        case "Mode1":
            Settings.ImgPack = "Mode2";
            break;
        case "Mode2":
            Settings.ImgPack = "Mode3";
            break;
        case "Mode3":
            Settings.ImgPack = "Yllarius";
            break
        default:
            Settings.ImgPack = false;
            break;
    }
    DocId("ImgPack").innerHTML = `Img pack: ${Settings.ImgPack}`;
});

function ImgChose(what, who, type = "SexActs") {
    const myimg = new Image(),
        playerRace = player.Race.Capitalize().replace(/\s/g, ""),
        b = CheckGender(player),
        Act = what,
        Race = who.Race.Capitalize().replace(/\s/g, ""),
        e = CheckGender(who);
    if (Settings.ImgPack === "Yllarius") {
        const playerGender = () => {
                switch (b) {
                    case "hermaphrodite":
                    case "dickgirl":
                        return "H";
                    case "male":
                        return "M";
                    case "cuntboy":
                        return "C";
                    case "female":
                        return "F";
                    case "doll":
                        return "D";
                }
            },
            OtherGender = () => {
                switch (e) {
                    case "hermaphrodite":
                    case "dickgirl":
                        return "H";
                    case "male":
                        return "M";
                    case "cuntboy":
                        return "C";
                    case "female":
                        return "F";
                    case "doll":
                        return "D";
                }
            }
        // This nested onload/onerror works but it looks like a disaster... TODO search for better way.
        if (type === "SexActs") {
            // if (SexActs.Race !== "undf") {if (SexActs.Race.Act !== "undf") {if array length > 0 etc.. }}
            const ImgArray = () => {
                if (typeof SexActs[Race] !== "undefined" ? typeof SexActs[Race][Act] !== "undefined" : false) {
                    if (typeof SexActs[Race][Act][playerGender() + OtherGender()] !== "undefined" ? SexActs[Race][Act][playerGender() + OtherGender()].length > 0 : false) {
                        return SexActs[Race][Act][playerGender() + OtherGender()];
                    } else if (typeof SexActs[Race][Act][OtherGender()] !== "undefined" ? SexActs[Race][Act][OtherGender()].length > 0 : false) {
                        return SexActs[Race][Act][OtherGender()];
                    } else if (typeof SexActs[Race][Act].Default !== "undefined" ? SexActs[Race][Act].Default.length > 0 : false) {
                        return SexActs[Race][Act].Default;
                    } else {
                        return [];
                    }
                } else {
                    return [];
                }
            }
            if (ImgArray().length > 0) {
                myimg.src = ImgArray()[RandomInt(0, ImgArray().length - 1)];
                myimg.onload = function () {
                    DocId("MyImg").src = myimg.src;
                };
                myimg.onerror = () => {
                    return
                }
            } else {
                //console.log(ImgArray());
                //console.log(`SexActs[${Race}][${Act}][${playerGender() + OtherGender()}]`);
            }
        } else if (type === "Vore") {
            // if (SexActs.Race !== "undf") {if (SexActs.Race.Act !== "undf") {if array length > 0 etc.. }}
            const ImgArray = () => {
                if (typeof Vore[playerRace] !== "undefined" ? typeof Vore[playerRace][Act] !== "undefined" : false) {
                    if (typeof Vore[playerRace][Act][playerGender() + OtherGender()] !== "undefined" ? Vore[playerRace][Act][playerGender() + OtherGender()].length > 0 : false) {
                        return Vore[playerRace][Act][playerGender() + OtherGender()];
                    } else if (typeof Vore[playerRace][Act][playerGender()] !== "undefined" ? Vore[playerRace][Act][playerGender()].length > 0 : false) {
                        return Vore[playerRace][Act][playerGender()];
                    } else if (typeof Vore[playerRace][Act].Default !== "undefined" ? Vore[playerRace][Act].Default.length > 0 : false) {
                        return Vore[playerRace][Act].Default;
                    } else {
                        return [];
                    }
                } else {
                    return [];
                };
            };
            if (ImgArray().length > 0) {
                myimg.src = ImgArray()[RandomInt(0, ImgArray().length - 1)];
                myimg.onload = function () {
                    DocId("MyImg").src = myimg.src;
                };
                myimg.onerror = () => {
                    return
                }
            } else {
                //console.log(ImgArray);
                //console.log(`SexActs[${playerRace}][${Act}][${playerGender() + OtherGender()}]`);
            }
        }

    } else {
        const source = () => {
            switch (Settings.ImgPack) {
                case "Mode1":
                    return a + b + c;
                case "Mode2":
                    return d + e + c;
                case "Mode3":
                    return a + b + c + d + e;
                case "Yllarius":
                default:
                    return "";
            }
        };
        myimg.src = `imgPack/${source()}.jpg`;
        myimg.onload = function () {
            DocId("MyImg").src = myimg.src;
        };
        myimg.onerror = function () {
            myimg.src = `imgPack/${type}/${source()}.png`;
            myimg.onload = function () {
                DocId("MyImg").src = myimg.src;
            }
            myimg.onerror = function () {
                DocId("MyImg").src = "imgPack/Default.jpg";
            }
        };
    }
};

DocId("MyImg").addEventListener("click", () => {
    const img = DocId("MyImg"),
        imgf = DocId("MyImgF"),
        modal = DocId("MyImgModal"),
        AfterBattle = DocId("AfterBattle");

    modal.style.display = 'flex';
    imgf.src = img.src;
});

DocId("MyImgF").addEventListener("click", () => {
    const modal = DocId("MyImgModal"),
        AfterBattle = DocId("AfterBattle");
    modal.style.display = 'none';
});