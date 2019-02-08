function TestDialog() {
    var Npc = document.getElementById("Npcs");
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.lastChild)
    };

    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode("Testsson");
    h1.appendChild(h1Text);
    Npc.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    Npc.appendChild(p);

    var Inputs = document.createElement("div");

    var Option1 = InputButton("Option 1");
    Option1.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option11 = InputButton("Option 1-1");
        Option11.addEventListener("click", function () {

        });
        Inputs.appendChild(Option11);

        var Option12 = InputButton("Option 1-2");
        Option12.addEventListener("click", function () {

        });
        Inputs.appendChild(Option12);
    });
    Inputs.appendChild(Option1);

    var Option2 = InputButton("Option 2a");
    Option2.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option21 = InputButton("Option 2-1");
        Option21.addEventListener("click", function () {

        });
        Inputs.appendChild(Option21);

        var Option22 = InputButton("Option 2-2");
        Option22.addEventListener("click", function () {

        });
        Inputs.appendChild(Option22);
    });
    Inputs.appendChild(Option2);

    Npc.appendChild(Inputs);
}