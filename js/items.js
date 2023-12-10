import Inventory from "./classes/inventory.js"
import Item from "./classes/item.js"

export const Items = new Inventory

Items.addItem(new Item('Rock', 'rock', 'assets/images/rock.svg', 'Something to throw at a window.'))
Items.addItem(new Item('Stick', 'stick', 'assets/images/stick.svg', 'Wow.<br>A stick.'))
Items.addItem(new Item('Pebble', 'pebble', 'assets/images/pebble.svg', 'Wanna-be rock.'))
Items.addItem(new Item('Orb', 'orb', 'assets/images/orb.svg', '<span style="color: #63b">???</span>'))

//test
Items.getItemFromName('Rock').addAmount(2)
Items.getItemFromName('Stick').addAmount(3)
Items.getItemFromName('Pebble').addAmount(1)
Items.getItemFromName('Orb').addAmount(1)