import game from "../game.js"
import { tooltipConfig } from "../tooltip.js"

export default class Item {
    /**
     * The name of the Item
     * @type {string}
     */
    name = ""

    /**
     * The ID of the Item
     * @type {string}
     */
    id = ""

    /**
     * The image of the Item
     * @type {string}
     */
    image = "assets/images/unknown.svg"

    /**
     * The description of the Item
     * @type {string}
     */
    desc = "Unknown"

    /**
     * @param {string} name 
     * @param {string} id 
     * @param {string?} image 
     * @param {string?} desc 
     */
    constructor(name, id, image, desc) {
        this.name = name
        this.id = id
        this.image = image || this.image
        this.desc = desc || this.desc

        game.items[id] = {
            amount: 0,
            exist: 0
        }
    }

    get amount() {
        return game.items[this.id].amount
    }

    set amount(x) {
        game.items[this.id].amount = x
    }

    get exist() {
        return game.items[this.id].exist
    }

    /**
     * Adds more of Item, and also increases exist
     * @param {number} x 
     */
    addAmount(x) {
        game.items[this.id].amount += x
        game.items[this.id].exist += x
    }

    /**
     * Generates a HTML Element for the item
     * @returns {HTMLDivElement}
     */
    generate() {
        var root = document.createElement('div')
        root.classList.add('item')

        var image = document.createElement('img')
        image.src = this.image
        root.appendChild(image)

        var amt = document.createElement('span')
        amt.classList.add('amount', 'outlinetext')
        amt.innerText = "x" + this.amount
        root.appendChild(amt)

        root.addEventListener('mousemove', () => {
            tooltipConfig.visible = true
            tooltipConfig.title = this.name
            tooltipConfig.desc = `${this.desc}<br><br><span style="color: #b4f">${this.exist} Exist</span>`
        })

        return root
    }
}