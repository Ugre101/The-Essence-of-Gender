function AgeEngine() {
    var AgelimitMod = 1;

    switch (player.Race) {
        case "human":
            if (player.Age > 100 + AgelimitMod) {
                return "Dead";
            } else if (player.Age > 90) {
                return "old";
            } else {
                return "";
            }
        case "elf":
            if (player.Age > 90) {
                return "young adult";
            } else {
                return "";
            }
        case "equine":
            if (player.Age > 30) {
                return "Dead";
                /* probably to short, but could work with option to contuine 
                               with heir or means prolong life */
            } else if (player.Age > 25) {
                return "old";
            } else if (player.Age > 20) {
                return "adult";
            } else {
                return "young adult";
            }
    }
}