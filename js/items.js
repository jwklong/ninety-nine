import Inventory from "./classes/inventory.js"
import Item from "./classes/item.js"

export const Items = new Inventory

/**
 * Registers items to the inventory.
 * @param {Item} item 
 */
function register(item) {
    var normal = new Item(item.name, item.id, item.image, item.desc)
    Items.addItem(normal)

    var golden = new Item("Golden " + item.name, "GOLDEN!" + item.id, item.image, item.desc)
    golden.type = 1
    Items.addItem(golden)
}

register(new Item('Rock', 'rock', 'assets/images/rock.svg', 'Something to throw at a window.'))
register(new Item('Stick', 'stick', 'assets/images/stick.svg', 'Wow.<br>A stick.'))
register(new Item('Pebble', 'pebble', 'assets/images/pebble.svg', 'Wanna-be rock.'))
register(new Item('Orb', 'orb', 'assets/images/orb.svg', '<span style="color: #63b">???</span>'))

//test
console.log(Items)
Items.getItemFromName('Rock').addAmount(2)
Items.getItemFromName('Golden Rock').addAmount(1)
Items.getItemFromName('Stick').addAmount(3)
Items.getItemFromName('Pebble').addAmount(1)
Items.getItemFromName('Golden Pebble').addAmount(3)
Items.getItemFromName('Orb').addAmount(1)