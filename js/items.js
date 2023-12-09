import Inventory from "./classes/inventory.js"
import Item from "./classes/item.js"

export const Items = new Inventory

Items.addItem(new Item('Rock', 'rock', 'assets/images/rock.svg', 'Something to throw in somebody\'s window.'))
Items.addItem(new Item('Orb', 'orb', 'assets/images/orb.svg', '???'))

//test
Items.getItemFromName('Rock').amount += 2
Items.getItemFromName('Orb').amount += 1