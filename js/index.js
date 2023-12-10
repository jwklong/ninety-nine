import { Items } from "./items.js";

for (var item of Items.items) {
    if (item.amount > 0) {
        var el = item.generate()
        document.getElementById('items').appendChild(el)
    }
}

for (let button of document.getElementById('switcher').children) {
    button.addEventListener('click', (e) => {
        for (let tab of document.getElementById('main').children) {
            tab.style.display = tab.id == button.classList.value ? "" : "none"
        }
    })
}
for (let tab of document.getElementById('main').children) {
    tab.style.display = tab.id == "inventory" ? "" : "none"
}