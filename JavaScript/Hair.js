function HairGrowth() {
    player.Face.HairLength++;
}
document.getElementById("DyeHair").addEventListener("click", function () {
    if (document.getElementById("DyeHairMenu").style.display === 'block') {
        document.getElementById("DyeHairMenu").style.display = 'none';
    } else {
        document.getElementById("DyeHairMenu").style.display = 'block';
        document.getElementById("CutHairMenu").style.display = 'none';
    }
});
document.getElementById("CutHair").addEventListener("click", function () {
    if (document.getElementById("CutHairMenu").style.display === 'block') {
        document.getElementById("CutHairMenu").style.display = 'none';
    } else {
        document.getElementById("CutHairMenu").style.display = 'block';
        document.getElementById("DyeHairMenu").style.display = 'none';
    }
});