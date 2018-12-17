// Movement buttons
var mousedowner = false;
var mFunction;
var mouseX;
var mouseY;

document.addEventListener('keydown', function (e) {
    var startarea = document.getElementById("hem");
    if (battle === true) {
        return;
    }
    if ((e.which === 37 || e.which === 65) && sprite.x > 0) {
        sprite.x -= grid * sprite.Size;
        sprite.y += 0;
    } else if ((e.which === 39 || e.which === 68) && sprite.x + grid * sprite.Size < startarea.width) {
        sprite.x += grid * sprite.Size;
        sprite.y += 0;
    }
    if ((e.which === 38 || e.which === 87) && sprite.y > 0) {
        sprite.y -= grid * sprite.Size;
        sprite.x += 0;
    } else if ((e.which === 40 || e.which === 83) && sprite.y + grid * sprite.Size < startarea.height) {
        sprite.y += grid * sprite.Size;
        sprite.x += 0;
    }
    Touching();
    CheckDoor();
});

function mousedownfunc() {
    var startarea = document.getElementById("hem");
    var MapRect = startarea.getBoundingClientRect();
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

document.getElementById("hem").addEventListener('mousedown', function (e) {
    if (!mousedowner) {
        mousedowner = true;
        mouseX = e.pageX;
        mouseY = e.pageY;
        mFunction = setInterval(mousedownfunc, 100);
    }
});

document.getElementById("hem").addEventListener('touchstart', function (e) {
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

document.getElementById("hem").addEventListener('mousemove', function (e) {
    if (mousedowner) {
        if (mouseX != e.pageX || mouseY != e.pageY) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }
    }
});

document.getElementById("hem").addEventListener('touchmove', function (e) {
    if (mousedowner) {
        if (mouseX != e.touches[e.touches.length - 1].clientX || e.touches[e.touches.length - 1].clientY) {
            mouseX = e.touches[e.touches.length - 1].clientX;
            mouseY = e.touches[e.touches.length - 1].clientY;
        }
    }
});