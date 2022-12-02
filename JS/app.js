
const menuLogo = document.querySelector(".menulogo")
const navBar = document.querySelector("#navlinks")


const logoMenu = document.querySelector(".logomenu")
logoMenu.addEventListener("click", changeMenu)
const logoExit = document.querySelector(".logoexit")
logoExit.addEventListener("click", closedMenu)

// menuLogo.addEventListener("click", changeMenu)
function changeMenu (e) {
    console.log(e)
    console.log("Click Me")

    menuLogo.classList.toggle("active")
    logoMenu.classList.toggle("active")
    logoExit.classList.toggle("active")
    navBar.classList.toggle("active")
}

function closedMenu () {
    logoMenu.classList.toggle("active")
    logoExit.classList.toggle("active")
    navBar.classList.toggle("active")
}

document.querySelectorAll("li").forEach(e => e.addEventListener("click", () => {
    changeMenu()
    navBar.classList.remove("active")
}
))