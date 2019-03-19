    // Makes sure map scales correctly when user change screen size.
    function HemScale() {
        if (window.innerHeight < 500) {
            document.getElementById("FirstButtons").style.display = 'none';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
            document.getElementById("MobileButtons").style.display = 'inline-block';
        } else if (window.innerHeight < 850) {
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
            document.getElementById("MobileButtons").style.display = 'none';
        } else {
            document.getElementById("SecondButtons").style.display = 'block';
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MoreButtons").style.display = 'none';
            document.getElementById("LessButtons").style.display = 'none';
            document.getElementById("MobileButtons").style.display = 'none';
        }
        const startarea = document.getElementById("hem"),
            OldMap = medium;
        medium = Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20;
        startarea.width = medium;
        startarea.height = medium;
        const NewMap = medium;
        grid = (startarea.height / 20);
        sprite.x = sprite.x * NewMap / OldMap;
        sprite.y = sprite.y * NewMap / OldMap;
        for (let j of enemies) {
            j.Size = j.Size * (NewMap / OldMap);
            j.XPos = j.XPos * (NewMap / OldMap);
            j.YPos = j.YPos * (NewMap / OldMap);
        }
        return;
    }