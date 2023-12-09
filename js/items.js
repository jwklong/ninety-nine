import Inventory from "./classes/inventory.js"
import Item from "./classes/item.js"

export const Items = new Inventory

Items.addItem(new Item('Rock', 'rock', 'assets/images/rock.svg', 'Something to throw at a window.'))
Items.addItem(new Item('Stick', 'stick', 'assets/images/stick.svg', 'Wow.<br>A stick.'))
Items.addItem(new Item('Orb', 'orb', 'assets/images/orb.svg', '<span style="color: #b4f">???</span>'))

//test
Items.getItemFromName('Rock').amount += 2
Items.getItemFromName('Stick').amount += 3
Items.getItemFromName('Orb').amount += 1