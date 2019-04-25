const Tails = {
    Horse: {
        Race: "equine",
        Dick: false,
        Pussy: false,
        Color: "black",
        Looks: () => ` a ${this.Color} horse tail `
    },
    Dragon: {
        Race: "dragon",
        Dick: false,
        Pussy: false,
        Color: () => player.Skincolor,
        Looks: () => ` a ${this.Color()} dragon tail `
    }
}