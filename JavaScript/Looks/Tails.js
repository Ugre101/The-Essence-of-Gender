const Tails = {
    Horse: {
        Dick: false,
        Pussy: false,
        Color: "black",
        Looks: () => ` a ${this.Color} horse tail `
    },
    Dragon: {
        Dick: false,
        Pussy: false,
        Color: () => player.Skincolor,
        Looks: () => ` a ${this.Color()} dragon tail `
    }
}