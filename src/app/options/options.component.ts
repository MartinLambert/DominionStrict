import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { Options } from '../optionsclass'
import { optionValues } from '../optionValues'

@Component({
	selector: 'dom-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

	@Output() changeSets = new EventEmitter<string[]>()
	@Output() changePromos = new EventEmitter<string[]>()
	@Output() changeOptions = new EventEmitter<Options>()

	// allSets: string[] = ['Dominion-1', 'Dominion-2', 'Intrigue-1', 'Intrigue-2', 'Seaside-1', 'Seaside-2', 'Alchemy', 'Prosperity-1', 'Prosperity-2', 'Cornucopia', 'Hinterlands-1', 'Hinterlands-2', 'Dark Ages', 'Guilds', 'Adventures', 'Empires', 'Nocturne', 'Renaissance', 'Menagerie', 'Allies', 'Plunder', 'Promo']
	selectedSets: string[] = ['Dominion-2', 'Intrigue-2', 'Seaside-2', 'Alchemy', 'Prosperity-2', 'Cornucopia', 'Hinterlands-2', 'Dark Ages', 'Guilds', 'Adventures', 'Empires', 'Nocturne', 'Renaissance', 'Menagerie', 'Allies', 'Plunder', 'Promo']
	allPromos: string[] = ['Black Market', 'Captain', 'Church', 'Dismantle', 'Envoy', 'Governor', 'Prince', 'Sauna/Avanto', 'Stash', 'Summon', 'Walled Village']
	selectedPromos: string[] = ['Black Market', 'Captain', 'Church', 'Dismantle', 'Envoy', 'Governor', 'Prince', 'Sauna/Avanto', 'Stash', 'Summon', 'Walled Village']
	panelOpen = false
	options: Options = new Options()
	optionVals: typeof optionValues = optionValues

	constructor(private cookieService: CookieService) {
	}

	ngOnInit(): void {
		if (this.cookieService.check('sets'))
			this.selectedSets = this.cookieService.get('sets').split(':')
		else
			this.cookieService.set('sets', this.selectedSets.join(':'))
		this.changeSets.emit(this.selectedSets)

		if (this.cookieService.check('promos'))
			this.selectedPromos = this.cookieService.get('promos').split(':')
		else
			this.cookieService.set('promos', this.selectedPromos.join(':'))
		this.changePromos.emit(this.selectedPromos)

		if (this.cookieService.check('options'))
			this.options = JSON.parse(this.cookieService.get('options'))
		else
			this.cookieService.set('options', JSON.stringify(this.options))
		this.changeOptions.emit(this.options)
	}

	changeSet(setName: string): void {
		const i = this.selectedSets.indexOf(setName)
		if (i === -1) this.selectedSets.push(setName)
		else this.selectedSets.splice(i, 1)
		this.cookieService.set('sets', this.selectedSets.join(':'))
		this.changeSets.emit(this.selectedSets)
	}

	changePromo(cardName: string): void {
		const i = this.selectedPromos.indexOf(cardName)
		if (i === -1) this.selectedPromos.push(cardName)
		else this.selectedPromos.splice(i, 1)
		this.cookieService.set('promos', this.selectedPromos.join(':'))
		this.changePromos.emit(this.selectedPromos)
		if ((!this.selectedPromos.length && this.selectedSets.indexOf('Promo') !== -1) || (this.selectedPromos.length && this.selectedSets.indexOf('Promo') === -1))
			this.changeSet('Promo')
	}

	changeOption(opt: string, val: number): void {
		switch (opt) {
			case 'attacks':
				this.options.attacks = val
				break
			case 'trash':
				this.options.trash = val
				break
			case 'village':
				this.options.village = val
				break
			case 'draw':
				this.options.draw = val
				break
			case 'buy':
				this.options.buy = val
				break
			case 'potions':
				this.options.potions = val
				break
			case 'costs':
				this.options.costs = val
				break
			case 'sort':
				this.options.sortBySet = val ? 'no' : 'yes'
		}
		this.cookieService.set('options', JSON.stringify(this.options))
		this.changeOptions.emit(this.options)
	}

}
