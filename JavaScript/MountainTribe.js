function TribeQuests() {
    var x = document.getElementById("TribeQuestsMenu");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }

    var TribeDragon = document.createElement("INPUT");
    TribeDragon.setAttribute("type", "button");
    TribeDragon.setAttribute("value", "Dragon");
    TribeDragon.setAttribute("title", "Prove you worth.");
    TribeDragon.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TribeQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            TribeQuests();
        });
        document.getElementById("ShrineQuestsMenu").appendChild(Accept);
        document.getElementById("ShrineQuestsMenu").appendChild(Decline);
    });

    var TribeDragonReward = document.createElement("INPUT");
    TribeDragonReward.setAttribute("type", "button");
    TribeDragonReward.setAttribute("value", "reward");
    TribeDragonReward.setAttribute("title", "");
    TribeDragonReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "");
        player.Quests.splice(index, 1);
        TribeQuests();
    });
};