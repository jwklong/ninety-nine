import { Items } from "./items.js";

for (var item of Items.items.sort((a, b) => b.amount - a.amount).sort((a, b) => b.type - a.type)) {
    if (item.amount > 0) {
        var el = item.generate()
        document.getElementById('items').appendChild(el)
    }
}