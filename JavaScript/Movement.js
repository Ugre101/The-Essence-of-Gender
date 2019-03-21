// Movement buttons
var mousedowner = false,
    mFunction,
    mouseX, mouseY;

/**
 var Movement = {
    XSpeed: 0,
    YSpeed: 0,
    Drag: 1
}
function MovementEngine(x, y) {
    var M = Movement;
    M.XSpeed = Math.min(10, Math.max(-10, M.XSpeed));
    M.YSpeed = Math.min(10, Math.max(-10, M.YSpeed));
    if ((x > 0 && M.XSpeed < 0) || (x < 0 && M.XSpeed > 0)) {
        M.XSpeed = 0;
    } else if ((y > 0 && M.YSpeed < 0) || (y < 0 && M.YSpeed > 0)) {
        M.YSpeed = 0;
    }
    Movement.XSpeed += x > 0 ? 2 : x < 0 ? -2 : 0;
    Movement.YSpeed += y > 0 ? 2 : y < 0 ? -2 : 0;
    sprite.x += Movement.XSpeed
    sprite.y += Movement.YSpeed
}
**/

document.addEventListener('keydown', function (e) {
    const startarea = DocId("hem");
    if (battle) {
        return;
    }
    if ((e.which === 37 || e.which === 65) && sprite.x > 0) {
        sprite.x -= grid;
    } else if ((e.which === 39 || e.which === 68) && sprite.x + grid * sprite.Size < startarea.width) {
        sprite.x += grid;
    }
    if ((e.which === 38 || e.which === 87) && sprite.y > 0) {
        sprite.y -= grid; // * sprite.Size;
    } else if ((e.which === 40 || e.which === 83) && sprite.y + grid * sprite.Size < startarea.height) {
        sprite.y += grid; // * sprite.Size;
    }
    Touching();
    CheckDoor();
});

function mousedownfunc() {
    const startarea = DocId("hem"),
        MapRect = startarea.getBoundingClientRect();
    if (mouseX - MapRect.left > sprite.x + 1.5 * grid && sprite.x + grid * sprite.Size < startarea.width) {
        sprite.x += grid * sprite.Size;
    } else if (mouseX - MapRect.left + grid / 2 < sprite.x && sprite.x > 0) {
        sprite.x -= grid * sprite.Size;
    }
    if (mouseY - MapRect.top > sprite.y + 1.5 * grid && sprite.y < startarea.height) {
        sprite.y += grid * sprite.Size;
    } else if (mouseY - MapRect.top + grid / 2 < sprite.y && sprite.y > 0) {
        sprite.y -= grid * sprite.Size;
    }
    Touching();
    CheckDoor();
}

DocId("hem").addEventListener('mousedown', function (e) {
    if (!mousedowner) {
        mousedowner = true;
        mouseX = e.pageX;
        mouseY = e.pageY;
        mFunction = setInterval(mousedownfunc, 100);
    }
});

DocId("hem").addEventListener('touchstart', function (e) {
    if (!mousedowner) {
        mousedowner = true;
        mouseX = e.touches[e.touches.length - 1].clientX;
        mouseY = e.touches[e.touches.length - 1].clientY;
        mFunction = setInterval(mousedownfunc, 100);
    }
});

document.addEventListener('mouseup', function () {
    if (mousedowner) {
        clearInterval(mFunction);
        mousedowner = false;
    }
});

document.addEventListener('touchend', function () {
    if (mousedowner) {
        clearInterval(mFunction);
        mousedowner = false;
    }
});

DocId("hem").addEventListener('mousemove', function (e) {
    if (mousedowner) {
        if (mouseX != e.pageX || mouseY != e.pageY) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }
    }
});

DocId("hem").addEventListener('touchmove', function (e) {
    if (mousedowner) {
        if (mouseX != e.touches[e.touches.length - 1].clientX || e.touches[e.touches.length - 1].clientY) {
            mouseX = e.touches[e.touches.length - 1].clientX;
            mouseY = e.touches[e.touches.length - 1].clientY;
        }
    }
});