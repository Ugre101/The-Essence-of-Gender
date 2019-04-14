function LocalPortalFunc() {
    const Buildings = DocId("Buildings"),
        InnerDiv = document.createElement("div"),
        Frag = document.createDocumentFragment(),
        p = TextBox(),
        Container = [p]
    CleanBuildings();

    if (window.innerHeight > 600) { // No title on small screen
        Container.unshift(TitleText("Portal"));
    }

    if (player.Map === "Outlaws" && House.Portal.BlackMarket === false) {
        const Activate = InputButton("Activate", "Sync this local portal with your home portal");
        Activate.addEventListener("click", function () {
            House.Portal.BlackMarket = true;
            p.innerHTML = "Sync"
            LocalPortalFunc();
        });
        Activate.addEventListener("mouseover", function () {
            p.innerHTML = "Sync this local portal with your home portal";
        });
        Container.push(Activate);
    } else if (player.Map === "MountainPlateau" && House.Portal.MountainPlateau != true) {
        const Activate = InputButton("Activate", "Sync this local portal with your home portal");
        Activate.addEventListener("click", function () {
            House.Portal.MountainPlateau = true;
            p.innerHTML = "Sync"
            LocalPortalFunc();
        });
        Activate.addEventListener("mouseover", function () {
            p.innerHTML = "Sync this local portal with your home portal";
        });
        Container.push(Activate);
    }

    const input1 = InputButton("Home")
    input1.addEventListener("click", function () {
        player.Area = "First";
        player.Map = "RoadToHome";
        Teleport();
        return;
    });
    input1.addEventListener("mouseover", function () {

    });
    Container.push(input1)

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        const Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            Teleport();
            return;
        });
        Container.push(Mountain);
    }

    if (House.Portal.BlackMarket) {
        const BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            Teleport();
            return;
        });
        BlackMarket.addEventListener("mouseover", function () {

        });
        Container.push(BlackMarket);
    }
    if (House.Portal.MountainPlateau) {
        const MountainPlateau = InputButton("Mountain plateau")
        MountainPlateau.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainPlateau";
            Teleport();
            return;
        });
        MountainPlateau.addEventListener("mouseover", function () {

        });
        Container.push(MountainPlateau);
    }
    Container.push((LeaveBuilding()));
    Container.forEach((src) => {
        Frag.appendChild(src);
    });
    InnerDiv.appendChild(Frag);
    Buildings.appendChild(InnerDiv);
    Buildings.style.display = "block";

    function Teleport() {
        Buildings.style.display = 'none';
        CleanBuildings();
        DisplayGame();
    }
}