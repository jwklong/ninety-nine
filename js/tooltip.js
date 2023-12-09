export const tooltipConfig = {
    visible: false,
    title: "",
    desc: "",
}

const tooltip = document.getElementById('tooltip')

addEventListener("mousemove", (event) => {
    if (tooltipConfig.visible) {
        tooltip.style.left = event.x + 8 + "px"
        tooltip.style.top = event.y + 8 + "px"
        tooltip.style.display = "flex"

        tooltip.querySelector(".title").innerText = tooltipConfig.title
        tooltip.querySelector(".body").innerHTML = tooltipConfig.desc

        tooltipConfig.visible = false
    } else {
        tooltip.style.display = "none"
    }
})