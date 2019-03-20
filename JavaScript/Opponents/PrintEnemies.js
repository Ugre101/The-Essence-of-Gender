function EnemyImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {},
        loaded = 0;
    if (Array.isArray(arr)) {
        for (let e of arr) {
            let img = new Image();
            img.onload = EmageLoaded;
            img.src = "Res/" + e + ".png";
            images[e] = img;
        }
    } else {
        return
    }

    function EmageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}
var Enemy_SpriteImages = {};
const EnemySpriteLoader = EnemyImageLoad(["orc","troll"], function (images) {
    Enemy_SpriteImages = images;
    console.log(Enemy_SpriteImages)
});

function PrintEnemies() {
    const startarea = document.getElementById("hem"),
        ctx = startarea.getContext("2d");
    for (let e = 0; e < enemies.length; e++) {
        const ee = enemies[e],
            image = ee.Race.toLowerCase(); // + gender?
        function Color() {
            let color;
            switch (CheckGender(ee)) {
                case "cuntboy":
                    color = "blue";
                    break;
                case "female":
                    color = "rgb(231, 84, 128)";
                    break;
                case "dickgirl":
                    color = "rgb(231, 84, 128)";
                    break;
                case "male":
                    color = "Blue";
                    break;
                case "hermaphrodite":
                    color = "Purple";
                    break;
                case "doll":
                    color = "Beige";
                    break;
            }
            return color
        }
        for (let i = e + 1; i < enemies.length; i++) {
            if (ee.XPos == enemies[i].XPos) {
                ee.XPos = RandomInt(2, 18) * grid;
            }
        }
        ctx.fillStyle = ee.Color;
        if (typeof Enemy_SpriteImages[image] !== "undefined") {
            ctx.drawImage(Enemy_SpriteImages[image], ee.XPos, ee.YPos, ee.Size, ee.Size);
            ctx.fillStyle = Color();
            ctx.fillRect(ee.XPos + ee.Size / 3, ee.YPos - ee.Size + ee.Size / 3, ee.Size / 3, ee.Size / 3);
        } else {
            ctx.fillRect(ee.XPos, ee.YPos, ee.Size, ee.Size);
            ctx.fillStyle = Color();
            ctx.fillRect(ee.XPos + ee.Size / 3, ee.YPos + ee.Size / 3, ee.Size / 3, ee.Size / 3);
            ctx.fillStyle = "Black";
            ctx.strokeRect(ee.XPos + ee.Size / 3, ee.YPos + ee.Size / 3, ee.Size / 3, ee.Size / 3);
        }
        ctx.fillStyle = Settings.TextColor;
        ctx.font = "2vh Arial";
        ctx.textAlign = "center";
        ctx.fillText(ee.Name + " " + ee.Race, ee.XPos + ee.Size / 2, ee.YPos);
    }
};