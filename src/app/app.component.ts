import { Component, OnInit } from '@angular/core'

import { Game } from './game'
import { Card } from './card'
import { Setup } from './setupclass'
import { CARDS } from './cards'
import { PERMANENTS } from './permanents'
import { mark } from '@angular/compiler-cli/src/ngtsc/perf/src/clock'

@Component({
	selector: 'dom-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	dominion: Game = new Game()
	owned: Game = new Game()
	kingdom: Game = new Game()
	kingdomSize = 10
	setup: Setup = new Setup()
	selectedCard: Card | null = null
	selectedSets: string[] = []
	selectedPromos: string[] = []
	sortBySet = 'no'
	market: Game = new Game()
	marketDraw: Game = new Game()
	marketDrawSetup: Setup = new Setup()
	marketSize = 15
	marketMax = 0
	marketSetup: Setup = new Setup()
	marketState = 0
	title = 'DominionStrict'

	ngOnInit(): void {
		this.dominion.cards = CARDS
		this.dominion.permanents = PERMANENTS
	}

	randomize(): void {
		// add {kingdomSize} random cards to the kingdom deck, with at least one each of cost 3, 4, and 5, and up to 2 permanents
		let deck: Card[] = []
		let cardsOK = false
		deck = this.kingdom.cards = []
		this.kingdom.permanents = []
		this.market.cards = []
		this.marketSetup = new Setup()
		this.marketState = 0

		while (!cardsOK) {
			while (deck.length) deck.pop()
			while (deck.length < this.kingdomSize)
				this.addCard(deck)
			const costs = deck.map(({cost}) => cost.coin)
			cardsOK = costs.includes(3) && costs.includes(4) && costs.includes(5)
		}

		this.setup = new Setup()
		this.doSetup(this.kingdom.cards, this.setup)

		if (this.owned.permanents.length) {
			// There is a 25% chance of no permanents, 50% chance of one, 25% chance of two.
			let numPermanents = 0
			const theRand = Math.random()
			if (theRand > 0.25)
				numPermanents++
			if (theRand > 0.75)
				numPermanents++

			while (this.kingdom.permanents.length < numPermanents)
				this.kingdom.permanents.push(this.owned.permanents[Math.floor(Math.random() * this.owned.permanents.length)])
			// if we got two of the same permanent, then we'll just live with one in this game
			if (numPermanents === 2 && this.kingdom.permanents[1] === this.kingdom.permanents[0])
				this.kingdom.permanents.pop()
			this.doSetup(this.kingdom.permanents, this.setup)
		}
	}

	selectCard(card: Card | null): void {
		this.selectedCard = card
	}
	swapCard(card: Card): void {
		let newCard: Card
		this.kingdom.cards.forEach((c, i) => {
			if (c === card)
				this.kingdom.cards.splice(i, 1)
		})
		newCard = this.addCard(this.kingdom.cards)
		this.selectCard(newCard)
	}

	addCard(deck: Card[]): Card {
		// adds a random card to the given $deck (Kingdom or Black Market)
		let newCard = new Card()
		let cardOK = false
		let insertIndex = 0
		while (!cardOK) {
			newCard = this.owned.cards[Math.floor(Math.random() * this.owned.cards.length)]
			cardOK = true
			insertIndex = 0
			for (const card of deck) {
				if (newCard === card)
					cardOK = false
				if (this.sortBySet === 'yes') {
					if (card.id < newCard.id)
						insertIndex++
				} else if (card.name < newCard.name)
					insertIndex++
			}
		}
		deck.splice(insertIndex, 0, newCard)
		return newCard
	}

	generateMarketDeck(size: number): void {
		if (size > this.owned.cards.length - this.kingdom.cards.length)
			size = this.owned.cards.length - this.kingdom.cards.length
		this.marketSize = size
		this.market.cards = []

		while (this.market.cards.length < this.marketSize) {
			const newCard = this.addCard(this.market.cards)
			if (this.kingdom.cards.includes(newCard))
				this.market.cards.forEach((c, i) => {
					if (c === newCard)
						this.market.cards.splice(i, 1)
				})
		}

		this.marketSetup = new Setup()
		this.doSetup(this.market.cards, this.marketSetup)
		this.marketState++
	}
	shuffleMarket(): void {
		this.market.cards.sort(() => Math.random() - 0.5)
		this.marketState++
	}
	drawMarket(): void {
		const numDraw = Math.min(3, this.market.cards.length)
		let card: Card | undefined
		while (this.marketDraw.cards.length < numDraw) {
			card = this.market.cards.shift()
			if (card)
				this.marketDraw.cards.push(card)
		}
		this.doSetup(this.marketDraw.cards, this.marketDrawSetup)
		this.marketState++
	}
	selectMarket(card: Card | null): void {
		if (this.marketState !== 4) return
		this.marketDraw.cards.forEach((c, i) => {
			if (c === card)
				this.marketDraw.cards.splice(i, 1)
		})
		this.marketState++
		if (!(this.market.cards.length + this.marketDraw.cards.length))
			this.marketState = 6
	}
	closeMarket(): void {
		let card: Card | undefined
		while (this.marketDraw.cards.length) {
			card = this.marketDraw.cards.shift()
			if (card)
				this.market.cards.push(card)
		}
		this.marketDrawSetup = new Setup()
		this.marketState = 3
		if (!this.market.cards.length)
			this.marketState = 6
	}

	changeSets(newSets: string[]): void {
		this.selectedSets = newSets
		this.updateOwned()
		this.resetGame()
	}
	changePromos(newCards: string[]): void {
		this.selectedPromos = newCards
		this.updateOwned()
		this.resetGame()
	}
	changeSorting(bySet: string): void {
		this.sortBySet = bySet
		if (bySet === 'yes')
			this.owned.cards.sort((cardA, cardB) => cardA.id - cardB.id)
		else
			this.owned.cards.sort((cardA, cardB) => cardA.name > cardB.name ? -1 : 1)
	}
	updateOwned(): void {
		this.owned.cards = this.dominion.cards.filter(card =>
			card.set === 'Promo' ? this.selectedPromos.includes(card.name) : this.selectedSets.includes(card.set))
		this.owned.permanents = this.dominion.permanents.filter(card =>
			card.set === 'Promo' ? this.selectedPromos.includes(card.name) : this.selectedSets.includes(card.set))
	}

	resetGame(): void {
		this.kingdom.cards = []
		this.kingdom.permanents = []
		this.setup = new Setup()
		this.market.cards = []
		this.marketSetup = new Setup()
		this.selectedCard = null
	}

	doSetup(deck: Card[], setup: Setup): void {
		for (const card of deck)
			this.checkCard(card, setup)
		if (this.selectedSets.includes('Dark Ages') && setup.numDarkAges > Math.random() * 10)
			setup.shelters = true
		if (this.selectedSets.includes('Prosperity') && setup.numProsperity > Math.random() * 10)
			setup.platCol = true
		if (setup.bane) {
			do
				setup.baneChoice = this.owned.cards[Math.floor(Math.random() * this.owned.cards.length)]
			while (setup.baneChoice.cost.coin < 2 || setup.baneChoice.cost.coin > 3 || this.kingdom.cards.includes(setup.baneChoice))
			this.checkCard(setup.baneChoice, setup)
		}
		if (setup.mouse) {
			do
				setup.mouseChoice = this.owned.cards[Math.floor(Math.random() * this.owned.cards.length)]
			while (!setup.mouseChoice.cardType.includes('Action') || setup.mouseChoice.cost.coin < 2 ||
				setup.mouseChoice.cost.coin > 3 || this.kingdom.cards.includes(setup.mouseChoice))
			this.checkCard(setup.baneChoice, setup)
		}
		if (setup.obelisk)
			do
				setup.obeliskChoice = this.kingdom.cards[Math.floor(Math.random() * this.kingdom.cards.length)]
			while (!setup.obeliskChoice.cardType.includes('Action'))
	}
	checkCard(card: Card, setup: Setup): void {
		if (card.setup.VP)
			setup.VP = true
		if (card.setup.debt)
			setup.debt = true
		if (card.setup.spoils)
			setup.spoils = true
		if (card.setup.ruins)
			setup.ruins = true
		if (card.setup.coins)
			setup.coins = true
		if (card.setup.coffers)
			setup.coffers = true
		if (card.setup.villagers)
			setup.villagers = true
		if (card.setup.tavernMats)
			setup.tavernMats = true
		if (card.setup.journey)
			setup.journey = true
		if (card.setup.plusCard)
			setup.plusCard = true
		if (card.setup.plusAction)
			setup.plusAction = true
		if (card.setup.plusBuy)
			setup.plusBuy = true
		if (card.setup.plusOne)
			setup.plusOne = true
		if (card.setup.minusOne)
			setup.minusOne = true
		if (card.setup.minusDraw)
			setup.minusDraw = true
		if (card.setup.exile)
			setup.exile = true
		if (card.setup.horse)
			setup.horse = true
		if (card.cost.potion)
			setup.potions = true
		if (card.set.includes('Dark Ages'))
			setup.numDarkAges++
		if (card.set.includes('Prosperity'))
			setup.numProsperity++
		if (card.cardType.includes('Fate')) {
			setup.boon = true
			setup.wisp = true
		}
		if (card.cardType.includes('Doom'))
			setup.hex = true
		if (card.cardType.includes('Project'))
			setup.cubes = true
		if (card.id === 305)
			setup.embargo = true
		if (card.id === 310)
			setup.island = true
		if (card.id === 314)
			setup.nativeVillage = true
		if (card.id === 318)
			setup.pirateShip = true
		if (card.id === 521)
			setup.tradeRoute = true
		if (card.id === 612)
			setup.prizes = true
		if (card.id === 613)
			setup.bane = true
		if (card.id === 815)
			setup.hermit = true
		if (card.id === 833)
			setup.urchin = true
		if (card.id === 1018)
			setup.page = true
		if (card.id === 1019)
			setup.peasant = true
		if (card.id === 1036)
			setup.minusTwo = true
		if (card.id === 1037)
			setup.estate = true
		if (card.id === 1042)
			setup.trashing = true
		if (card.id === 1151)
			setup.obelisk = true
		if (card.id === 1203) {
			setup.mirror = true
			setup.ghost = true
		}
		if (card.id === 1212) {
			setup.wisp = true
			setup.imp = true
			setup.ghost = true
		}
		if (card.id === 1214)
			setup.luckyCoin = true
		if (card.id === 1218)
			setup.wishes = true
		if (card.id === 1220)
			setup.zombies = true
		if (card.id === 1222)
			setup.goat = true
		if (card.id === 1223)
			setup.cursedGold = true
		if (card.id === 1226) {
			setup.lamp = true
			setup.wishes = true
		}
		if (card.id === 1227)
			setup.pasture = true
		if (card.id === 1210 || card.id === 1229)
			setup.imp = true
		if (card.id === 1230)
			setup.pouch = true
		if (card.id === 1232)
			setup.bats = true
		if (card.id === 1302) {
			setup.horn = true
			setup.lantern = true
		}
		if (card.id === 1306)
			setup.flag = true
		if (card.id === 1323)
			setup.chest = true
		if (card.id === 1324)
			setup.key = true
		if (card.id === 1459)
			setup.mouse = true
		if (card.id === 2001) {
			setup.market = true
			this.marketMax = this.owned.cards.length - this.kingdom.cards.length
			this.marketSize = Math.min(40, this.marketMax)
			this.marketState++
		}
		if (card.cardType.includes('Liaison')) {
			setup.favors = true
			setup.coins = true
		}
	}

}
