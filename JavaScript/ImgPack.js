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


const SexActs = {
    Elf: {
        Default: ["imgPack/SexActs/Elf/Default.jpg", ],
        DoggyStyle: {
            Default: ["imgPack/SexActs/Elf/DoggyStyle/Default.png", "imgPack/SexActs/Elf/DoggyStyle/HF.png", ],
        },
    },
    Fairy: {
        Default: [],
        Example: {
            Default: ["imgPack/SexActs/Fairy/Example/Default.jpg", "imgPack/SexActs/Fairy/Example/HF.png", "imgPack/SexActs/Fairy/Example/HH.png", "imgPack/SexActs/Fairy/Example/HM.png", "imgPack/SexActs/Fairy/Example/MF.png", ],
        },
    },
    Human: {
        Default: ["imgPack/SexActs/Human/Default.jpg", "imgPack/SexActs/Human/Default2.jpg", ],
        DoggyStyle: {
            Default: ["imgPack/SexActs/Human/DoggyStyle/asfae.png", "imgPack/SexActs/Human/DoggyStyle/Default.png", "imgPack/SexActs/Human/DoggyStyle/HF.png", ],
            FF: ["imgPack/SexActs/Human/DoggyStyle/FF/FF.png", ],
            HF: ["imgPack/SexActs/Human/DoggyStyle/HF/HF.png", ],
            HH: ["imgPack/SexActs/Human/DoggyStyle/HH/HF.png", ],
            MF: ["imgPack/SexActs/Human/DoggyStyle/MF/HF.png", ],
            MM: ["imgPack/SexActs/Human/DoggyStyle/MM/HF.png", ],
        },
        DoggyStyle2: {
            Default: ["imgPack/SexActs/Human/DoggyStyle2/Default.png", "imgPack/SexActs/Human/DoggyStyle2/HF.png", ],
        },
    },
    Imp: {
        Default: [],
        xample: {
            Default: ["imgPack/SexActs/Imp/xample/Default.jpg", "imgPack/SexActs/Imp/xample/HF.png", "imgPack/SexActs/Imp/xample/HH.png", "imgPack/SexActs/Imp/xample/HM.png", "imgPack/SexActs/Imp/xample/MF.png", ],
        },
    },
    Incubus: {
        Default: [],
        Example: {
            Default: ["imgPack/SexActs/Incubus/Example/Default.jpg", "imgPack/SexActs/Incubus/Example/HF.png", "imgPack/SexActs/Incubus/Example/HH.png", "imgPack/SexActs/Incubus/Example/HM.png", "imgPack/SexActs/Incubus/Example/MF.png", ],
        },
    },
    Orc: {
        Default: [],
        ample: {
            Default: ["imgPack/SexActs/Orc/ample/Default.jpg", "imgPack/SexActs/Orc/ample/HF.png", "imgPack/SexActs/Orc/ample/HH.png", "imgPack/SexActs/Orc/ample/HM.png", "imgPack/SexActs/Orc/ample/MF.png", ],
        },
    },
    Succubus: {
        Default: [],
        mple: {
            Default: ["imgPack/SexActs/Succubus/mple/Default.jpg", "imgPack/SexActs/Succubus/mple/HF.png", "imgPack/SexActs/Succubus/mple/HH.png", "imgPack/SexActs/Succubus/mple/HM.png", "imgPack/SexActs/Succubus/mple/MF.png", ],
        },
    },
    Template: {
        Default: [],
        Example: {
            Default: ["imgPack/SexActs/Template/a Example/Default.jpg", "imgPack/SexActs/Template/a Example/HF.png", "imgPack/SexActs/Template/a Example/HH.png", "imgPack/SexActs/Template/a Example/HM.png", "imgPack/SexActs/Template/a Example/MF.png", ],
        },
        BreastFeed: {
            Default: [],
        },
        DoggyStyle: {
            Default: [],
        },
        DoggyStyleAnal: {
            Default: [],
        },
        DualPen: {
            Default: [],
        },
        GetBlowjob: {
            Default: [],
        },
        GetCunnilingus: {
            Default: [],
        },
        GetRimjob: {
            Default: [],
        },
        GiveBlowjob: {
            Default: [],
        },
        GiveCunnilingus: {
            Default: [],
        },
        GiveRimjob: {
            Default: [],
        },
        Insertion: {
            Default: [],
        },
        Missionary: {
            Default: [],
        },
        MultiPen: {
            Default: [],
        },
        RideCowgirl: {
            Default: [],
        },
        Scissoring: {
            Default: [],
        },
    },
}
const Vore = {
    Template: {
        Default: [],
        OralVore: {
            Default: ["imgPack/Vore/Template/OralVore/HF.png", "imgPack/Vore/Template/OralVore/HH.png", "imgPack/Vore/Template/OralVore/HM.png", "imgPack/Vore/Template/OralVore/MF.png", ],
        },
    },
}
