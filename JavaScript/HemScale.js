    // Makes sure map scales correctly when user change screen size.
    function HemScale() {
        if (window.innerHeight < 500) {
            DocId("FirstButtons").style.display = 'none';
            DocId("SecondButtons").style.display = 'none';
            DocId("MoreButtons").style.display = 'inline-block';
            DocId("LessButtons").style.display = 'inline-block';
            DocId("MobileButtons").style.display = 'inline-block';
        } else if (window.innerHeight < 850) {
            DocId("FirstButtons").style.display = 'block';
            DocId("SecondButtons").style.display = 'none';
            DocId("MoreButtons").style.display = 'inline-block';
            DocId("LessButtons").style.display = 'inline-block';
            DocId("MobileButtons").style.display = 'none';
        } else {
            DocId("SecondButtons").style.display = 'block';
            DocId("FirstButtons").style.display = 'block';
            DocId("MoreButtons").style.display = 'none';
            DocId("LessButtons").style.display = 'none';
            DocId("MobileButtons").style.display = 'none';
        }
        const startarea = DocId("hem"),
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