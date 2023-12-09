var tooltip = document.getElementById('tooltip')
var rock = document.querySelector('.item')

window.onmousemove = (event) => {
  if (rock.matches(":hover")) {
    tooltip.style.display = "flex"
    tooltip.style.top = event.clientY + 8 + "px"
    tooltip.style.left = event.clientX + 8 + "px"
  } else {
    tooltip.style.display = "none"
  }
}