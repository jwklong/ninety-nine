import { Items } from "./items.js";

for (var item of Items.items) {
    if (item.amount > 0) {
        var el = item.generate()
        document.getElementById('items').appendChild(el)
    }
}