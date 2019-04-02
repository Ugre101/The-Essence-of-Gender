const SpellDict = {
    Template: {
        Name: "Template", // Display Name
        Type: "Temp", // Spell "Type" 
        ManaCost: function () {
            return Math.ceil(40 * 100 / (100 + player.MagicAffinity.Temp))
        }, // Mana cost should maybe be lowerd here?
        Does: function (exp) {

        }, // short description of spell & value of action in this case "40 fire type dmg" 
        Succes: function () {},
        Fail: function () {
            AddToBattleLog(``); // So it doesn't look like enemy attacked you.
            return "" // e.g you are to exhausted to cast template.
        },
        Cast: function (index, ee) {
            AddToBattleLog(this.Succes());
        }
    },
    Fireball: {
        Name: "Fireball",
        Type: "Fire",
        ManaCost: function () {
            return Math.ceil(40 * 100 / (100 + player.MagicAffinity.Fire))
        },
        Does: function (Exp) {
            return Math.floor(20 * (player.Int / 20) + (Exp / 100))
        },
        Succes: function (dmg) {
            AddToBattleLog(`You threw a ball covered in fire, dealing ${dmg} damage to their HP and will!`);
            player.Mana -= this.ManaCost();
            if (typeof player.MagicAffinity[this.Type] !== 'undefined') {
                player.MagicAffinity[this.Type]++;
            }
            UpdateStats();
        },
        Fail: function () {
            AddToBattleLog(`You're exhausted, and can't cast another fireball...`)
        },
        Cast: function (index, ee) {
            if (player.Mana >= this.ManaCost()) {
                const that = player.Spells[index],
                    PAttack = Math.floor(RandomInt(3, 5) * this.Does(that.Exp) / 4)
                ee.Health -= PAttack; // * MagRes(ee);
                that.Exp++;
                this.Succes(PAttack);
            } else {
                this.Fail();
            }
        }
    },
    MinorHealing: {
        Name: "Minor healing",
        Type: "Restoration",
        ManaCost: function () {
            return Math.ceil(30 * 100 / (100 + player.MagicAffinity.Restoration))
        },
        Does: function (Exp) {
            return Math.floor(25 * (player.Int / 20) + (Exp / 100))
        },
        Succes: function (Heal) {
            AddToBattleLog(`You healed for ${Heal}`);
            player.Mana -= this.ManaCost();
            if (typeof player.MagicAffinity[this.Type] !== 'undefined') {
                player.MagicAffinity[this.Type]++;
            }
            UpdateStats();
        },
        Fail: function () {
            AddToBattleLog(`Fail`);
        },
        Cast: function (index, ee) {
            const that = player.Spells[index],
                ManaCost = this.ManaCost(), // Affinity will lower cost
                Heal = this.Does(that.Exp)
            if (player.Mana > ManaCost) {
                if (player.Health > player.MaxHealth) {
                    AddToBattleLog(`You already have full health.`)
                } else if (player.Health + Heal > player.MaxHealth) {
                    player.Mana -= ManaCost;
                    player.Health = player.MaxHealth;
                    this.Succes(Heal);
                } else {
                    player.Mana -= ManaCost;
                    player.Health += Heal;
                    this.Succes(Heal);
                }
            } else {
                this.Fail();
            }
        }
    }
}
const SpellDictLite = { // Add spells from here no need to save what it does
    Template: {
        Name: "",
        Exp: 0,
        Title: ""
    },
    Fireball: {
        Name: "Fireball",
        Exp: 0, // I think I want magic to be a thing which gets better with use
        Title: "Cast a fire ball dealing phyical damage to your enemies."
    },
    MinorHealing: {
        Name: "MinorHealing",
        Exp: 0,
        Title: "Basic first aid spell, to heal minor wounds."
    }
}