// Need to remake player variable as it's a mess
// This js file is a place to try different ways.
var player = {
    Stats: {
        Str: 10,
        Int: 10,
        Charm: 10,
        Will: 10,
        End: 10,
        SexSkill: 10
    },
    Sex: {
        Orgasm: 0,
        Arousal: 0
    },
    Level: {
        Exp: 0,
        level: 1,
        SkillPoints: 0,
        PerkPoints: 0,
        Perks: {
            ExtraHealth: {
                Count: 0
            },
            ExtraWillHealth: {
                Count: 0
            },
            FasterRest: {
                Count: 0
            },
            StealMore: {
                Count: 0
            },
            GiveEssence: {
                Count: 0
            }
        }
    },
    Race: {
        RaceEssence: [
            Human = {
                Race: "Human",
                amount: 100
            }
        ],
        Race: "human",
        SecondRace: "human",
        isTaur: "false", // Testing
    },
    SexualOrgans: {
        Dicks: [],
        Balls: [],
        Pussies: [],
        Boobies: [
            Boob = {
                Size: 1,
                Type: "human",
                Milk: 0,
                MilkBaseRate: 0,
                MilkRate: 0,
                MilkMax: 0
            }
        ],
        Anal: [
            Anal = {
                Size: 0,
                Type: "human",
                Virgin: true,
                stretch: 1,
            }
        ],
        OrganMod: {
            Dick: {
                Size: 0
            },
            Boobies: {
                Size: 0
            },
            Balls: {
                Size: 0
            },
            Pussy: {
                Size: 0
            },
            Anal: {
                Size: 0
            }
        }
    },
    General: {
        Map: "Start",
        Area: "First",
        Inventory: [],
        Quests: [],
        Gold: 0,
        RestRate: 1
    },
    Essence: {
        EssenceDrain: 5,
        GiveEssence: 0,
        Masc: 25,
        Femi: 25
    },
    Looks: {
        Age: 18,
        Weight: 60,
        Height: 160,
        Fat: 10,
        Muscle: 20,
        Tails: [],
        Face: {
            Eyes: "brown",
            HairStyle: "curly",
            HairColor: "brown",
            HairLength: "shoulder-length"
        }
    },
    Pregnant: {
        Fertility: 10,
        Virility: 5,
        Status: false,
        Babies: [],
        Children: []
    },
    Vore: {
        Level: 0,
        Exp: 0,
        VorePoints: 0,
        VorePerks: {},
        Stomach: [],
        StomachExp: 0,
        TaurStomach: [],
        TaurStomachExp: 0,
        Vagina: [],
        VaginaExp: 0,
        Balls: [],
        BallsExp: 0,
        Anal: [],
        AnalExp: 0,
        Breast: [],
        BreastExp: 0
    },
    Spells: {
        Fireball: 0,
    },
    Blessings: {
        MountainShrine: {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            Malepreg: 0
        },
        ChimeraShrine: {
            Donated: 0,
            Points: 0
        }
    },
    Combat: {
        Health: 100,
        MaxHealth: 100,
        WillHealth: 100,
        MaxWillHealth: 100,
        Mana: 100,
        MaxMana: 100
    }
};