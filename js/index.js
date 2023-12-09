import { Items } from "./items.js";

for (var item of Items.items.sort((a, b) => b.amount - a.amount)) {
    if (item.amount > 0) {
        var el = item.generate()
        document.getElementById('items').appendChild(el)
    }
}