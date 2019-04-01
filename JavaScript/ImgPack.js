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
    DocId("ImgPack").value = `Img pack: ${Settings.ImgPack}`;
});

function ImgChose(what, who, type = "SexActs") {
    const myimg = new Image(),
        a = player.Race.Capitalize(),
        b = CheckGender(player),
        c = what,
        d = who.Race.Capitalize(),
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
        myimg.src = `imgPack/${type}/${d}/${what}/${playerGender()+OtherGender()}.png`;
        myimg.onload = () => {
            DocId("MyImg").src = myimg.src;
        };
        myimg.onerror = () => {
            myimg.src = `imgPack/${type}/${d}/${what}/${playerGender()+OtherGender()}.jpg`;
            myimg.onload = () => {
                DocId("MyImg").src = myimg.src;
            };
            myimg.onerror = () => {
                myimg.src = `imgPack/${type}/${d}/${what}/Default.png`;
                myimg.onload = () => {
                    DocId("MyImg").src = myimg.src;
                };
                myimg.onerror = () => {
                    myimg.src = `imgPack/${type}/${d}/${what}/Default.jpg`;
                    myimg.onload = () => {
                        DocId("MyImg").src = myimg.src;
                    };
                    myimg.onerror = () => {
                        myimg.src = `imgPack/${type}/${d}/Default.png`;
                        myimg.onload = () => {
                            DocId("MyImg").src = myimg.src;
                        };
                        myimg.onerror = () => {
                            myimg.src = `imgPack/${type}/${d}/Default.jpg`;
                            myimg.onload = () => {
                                DocId("MyImg").src = myimg.src;
                            };
                            myimg.onerror = () => {
                                myimg.src = `imgPack/${type}/Default.png`;
                                myimg.onload = () => {
                                    DocId("MyImg").src = myimg.src;
                                };
                                myimg.onerror = () => {
                                    myimg.src = `imgPack/${type}/Default.jpg`;
                                    myimg.onload = () => {
                                        DocId("MyImg").src = myimg.src;
                                    };
                                    myimg.onerror = () => {
                                        // Total failure
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        console.log(myimg.src);
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