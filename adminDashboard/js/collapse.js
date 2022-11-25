
function collapseDiv(id, helper) {
    var div = document.querySelector("#" + id)
    var down = document.querySelector("#down-" + helper)
    var up = document.querySelector("#up-" + helper)

    var d = window.getComputedStyle(down).display
    var u = window.getComputedStyle(up).display

    if (u == "none") {
        up.style.display = "inline"
        down.style.display = "none"
    }
    else if (d == "none") {
        down.style.display = "inline"
        up.style.display = "none"
    }

    var divDisplay = window.getComputedStyle(div).display;
    if (divDisplay == "none") {
        div.style.display = "block"
    }
    else if (divDisplay == "block") {
        div.style.display = "none"

    }

}
function openNav() {
    document.getElementById("mySidebar").style.width = "15rem"
    document.querySelector(".openbtn").style.display = "none"
    document.querySelector(".closebtn").style.display = "inline"
    document.querySelector("#panel-baslik").style.display = "inline"

}

function closeNav() {
    document.querySelector(".openbtn").style.display = "inline"
    document.getElementById("mySidebar").style.width = "3rem"
    document.querySelector(".closebtn").style.display = "none"
    document.querySelector("#panel-baslik").style.display = "none"


}
