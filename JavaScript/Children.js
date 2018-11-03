document.getElementById("Children").addEventListener("click", function() {
    DisplayNone();
    document.getElementById("ChildrenMenu").style.display = 'block';
});
document.getElementById("LeaveChildrenMenu").addEventListener("click", function(){
    DisplayNone();
    document.getElementById("DetailedInfo").style.display = 'block';
})