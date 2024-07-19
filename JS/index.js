function toggleMenuLateral() {
    var menuLateral = document.getElementById("menuLateral");
    if (menuLateral.style.left === "-250px") {
        menuLateral.style.left = "0";
    } else {
        menuLateral.style.left = "-250px";
    }
}
