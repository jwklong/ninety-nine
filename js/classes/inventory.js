import Item from './item.js'

export default class Inventory {
  /**
   * A array of items contained in the Inventory
   * @type {Item[]}
   */
  items = []

  constructor() {}

  /**
   * Add a item to the Inventory
   * @param {Item} item 
   */
  addItem(item) {
    this.items.push(item)
  }

  /**
   * Get a item from the Inventory with that exact name
   * @param {string} name
   * @returns {Item?}
   */
  getItemFromName(name) {
    return this.items.find((item) => item.name === name)
  }

  /**
   * Get a item from the Inventory with that exact ID
   * @param {string} id
   * @returns {Item?}
   */
  getItemFromID(id) {
    return this.items.find((item) => item.id === id)
  }
}