    // Makes sure map scales correctly when user change screen size.
    function HemScale() {
        if (window.innerHeight < 600) {
            document.getElementById("FirstButtons").style.display = 'none';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
            document.getElementById("MobileButtons").style.display = 'inline-block';
            FontSize = 0.75;
            document.body.style.fontSize = FontSize + "em";
        } else if (window.innerHeight < 800) {
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
            document.getElementById("MobileButtons").style.display = 'none';
            FontSize = 0.95;
            document.body.style.fontSize = FontSize + "em";
        } else {
            document.getElementById("SecondButtons").style.display = 'block';
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MoreButtons").style.display = 'none';
            document.getElementById("LessButtons").style.display = 'none';
            document.getElementById("MobileButtons").style.display = 'none';
        }

        OldMap = medium;
        medium = Math.ceil((document.documentElement.clientHeight * MapPercent) / 20) * 20;
        startarea.width = medium;
        startarea.height = medium;
        var NewMap = medium;
        grid = (startarea.height / 20);
        sprite.x = sprite.x * NewMap / OldMap;
        sprite.y = sprite.y * NewMap / OldMap;
        for (var j = 0; j < enemies.length; j++) {
            enemies[j].Size = enemies[j].Size * (NewMap / OldMap);
            enemies[j].XPos = enemies[j].XPos * (NewMap / OldMap);
            enemies[j].YPos = enemies[j].YPos * (NewMap / OldMap);
        }

        DoorE = new MakeDoor(startarea.width - 2 * grid, startarea.height / 2 - 3 * grid, grid, 5 * grid, "E");
        DoorS = new MakeDoor(startarea.width / 2 - 3 * grid, startarea.height - 2 * grid, grid * 5, grid, "S");
        DoorW = new MakeDoor(0, startarea.height / 2 - 3 * grid, grid, 5 * grid, "W");
        DoorN = new MakeDoor(startarea.width / 2 - 3 * grid, 0, grid * 5, grid, "N");
        Doors = [DoorE, DoorS, DoorN, DoorW];
        // Rescale & relocate npcs
        Npcs = [];
        Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)");
        Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)");
        Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)")
        Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
        WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
        WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)");
        Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)");
        Portal = new Npc("LocalPortal", "Portal", grid * 12, grid * 8, grid * 4, grid * 4, "RGB(96, 47, 107)");
        BlackMarket = new Npc("BlackMarket", "Black market", grid * 12, grid * 5, grid * 5, grid * 3, "RGB(133,94,66)");
        FarmOwner = new Npc("FarmOwner", "Teoviz", grid * 5, grid * 2, grid, grid, "RGB(133,94,66)");
        FirstDungeon = new Npc("FirstDungeon", "Dungeon", grid * 8, grid * 18, grid * 4, grid * 2, "RGB(133,94,66)")
        FarmBarn = new Npc("FarmBarn", "Barn", grid * 13, grid, grid * 5, grid * 7, "RGB(133,94,66)");
        Barberer = new Npc("Barberer", "Hair salon" , grid, grid, grid * 5, grid*4, "RGB(133,94,66)")
        PortalShop = new Npc("PortalShop", "Portal shop", grid, grid * 15, grid * 4, grid * 4, "RGB(133,94,66)"); 


        return;
    }