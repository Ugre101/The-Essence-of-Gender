const SpellDict = {
    Template: {

    },
    Fireball: {
        Name: "Fireball",
        Type: "Elemental",
        ManaCost: 40,
        BaseDamage: 20,
        Exp: 0 // I think I want magic to be a thing which gets better with use
    }
}
const SpellCastDict = {
    Fireball: {
        Succes: function (dmg) {
            return "You threw a ball covered in fire, dealing " + dmg + " damage to their HP and will!"
        },
        Fail: "You're exhausted, and can't cast another fireball..."
    }
}