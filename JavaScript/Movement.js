// Movement buttons
var mousedowner = false,
    mouseX, mouseY,
    keymap = {}; // You could also use an array

document.onkeydown = document.onkeyup = function (e) {
    e = e || event; // to deal with IE
    keymap[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
}

function MovementEngine(e) {
    if (!battle && !GamePaused) {
        const startarea = DocId("hem"),
            MapRect = startarea.getBoundingClientRect();
        if (battle) {
            return;
        }
        if ((keymap[37] || keymap[65]) && sprite.x > 0) {
            sprite.x -= grid / 2;
        } else if ((keymap[39] || keymap[68]) && sprite.x + grid * sprite.Size < startarea.width) {
            sprite.x += grid / 2;
        }
        if ((keymap[38] || keymap[87]) && sprite.y > 0) {
            sprite.y -= grid / 2; // * sprite.Size;
        } else if ((keymap[40] || keymap[83]) && sprite.y + grid * sprite.Size < startarea.height) {
            sprite.y += grid / 2; // * sprite.Size;
        }
        if (mousedowner) {
            if (mouseX - MapRect.left > sprite.x + 1.2 * grid && sprite.x + grid * sprite.Size < startarea.width) {
                sprite.x += grid / 2; // * sprite.Size;
            } else if (mouseX - MapRect.left + grid * 0.2 < sprite.x && sprite.x > 0) {
                sprite.x -= grid / 2; // * sprite.Size;
            }
            if (mouseY - MapRect.top > sprite.y + 1.2 * grid && sprite.y < startarea.height) {
                sprite.y += grid / 2; // * sprite.Size;
            } else if (mouseY - MapRect.top + grid * 0.2 < sprite.y && sprite.y > 0) {
                sprite.y -= grid / 2; // * sprite.Size;
            }
        }
        Touching();
        CheckDoor();
    };
};

setInterval(() => {
    MovementEngine();
}, 30);

DocId("hem").addEventListener('mousedown', function (e) {
    mousedowner = true;
    mouseX = e.pageX;
    mouseY = e.pageY;
});
DocId("hem").addEventListener('mousemove', function (e) {
    if (mousedowner) {
        if (mouseX != e.pageX || mouseY != e.pageY) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }
    }
});
document.addEventListener('mouseup', function () {
    mousedowner = false;
});

DocId("hem").addEventListener('touchstart', function (e) {
    if (!mousedowner) {
        mousedowner = true;
        mouseX = e.touches[e.touches.length - 1].clientX;
        mouseY = e.touches[e.touches.length - 1].clientY;
    }
});

document.addEventListener('touchend', function () {
    if (mousedowner) {
        mousedowner = false;
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