export class Card {
	id: number
	name: string
	set: string
	cardType: string[]
	cost: {
		coin: number,
		debt: number,
		potion: number
	}
	text: string
	help: string
	setup: {
		spoils: boolean, ruins: boolean, horse: boolean, coins: boolean, debt: boolean, VP: boolean,
		tavernMats: boolean, coffers: boolean, villagers: boolean, exile: boolean,
		plusCard: boolean, plusAction: boolean, plusBuy: boolean, plusOne: boolean,
		journey: boolean, minusOne: boolean, minusDraw: boolean
	}

	constructor() {
		this.id = 0
		this.name = ''
		this.set = ''
		this.cardType = []
		this.cost = {
			coin: 0,
			debt: 0,
			potion: 0
		}
		this.text = ''
		this.help = ''
		this.setup = {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	}
}
