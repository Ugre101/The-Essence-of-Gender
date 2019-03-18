function EnemyImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {};
    var loaded = 0;
    if (Array.isArray(arr)) {
        for (var e of arr) {
            var img = new Image();
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
var Enemy_images = {};
const Enemyloader = EnemyImageLoad(["orc"], function (images) {
    Enemy_images = images;
});

function PrintEnemies() {
    function Color() {
        var color;
        switch (CheckGender(enemies[e])) {
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
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    for (var e = 0; e < enemies.length; e++) {
        var ee = enemies[e];
        for (var i = e + 1; i < enemies.length; i++) {
            if (ee.XPos == enemies[i].XPos) {
                ee.XPos = RandomInt(2, 18) * grid;
            }
        }
        ctx.fillStyle = ee.Color;
        let image = ee.Race.toLowerCase(); // + gender?
        if (typeof Enemy_images[image] !== "undefined") {
            ctx.drawImage(Enemy_images[image], ee.XPos, ee.YPos, ee.Size, ee.Size);
            ctx.fillStyle = Color();
            ctx.fillRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos - enemies[e].Size + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
            ctx.fillStyle = "Black";
            ctx.strokeRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
        } else {
            ctx.fillRect(enemies[e].XPos, enemies[e].YPos, enemies[e].Size, enemies[e].Size);
            ctx.fillStyle = Color();
            ctx.fillRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
            ctx.fillStyle = "Black";
            ctx.strokeRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
        }
        ctx.fillStyle = Settings.TextColor;
        ctx.font = "1vh Arial";
        ctx.textAlign = "center";
        ctx.fillText(enemies[e].Name + " " + enemies[e].Race, enemies[e].XPos + enemies[e].Size / 2, enemies[e].YPos);
    }
};