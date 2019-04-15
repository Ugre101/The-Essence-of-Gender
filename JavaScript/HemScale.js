    // Makes sure map scales correctly when user change screen size.
    function HemScale() {
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