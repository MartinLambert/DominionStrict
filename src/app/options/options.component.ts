import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

@Component({
	selector: 'dom-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

	@Output() changeSets = new EventEmitter<string[]>()
	@Output() changePromos = new EventEmitter<string[]>()
	@Output() changeSort = new EventEmitter<string>()

	allSets: string[] = ['Dominion', 'Intrigue', 'Seaside', 'Alchemy', 'Prosperity', 'Cornucopia', 'Hinterlands', 'Dark Ages', 'Guilds', 'Adventures', 'Empires', 'Nocturne', 'Renaissance', 'Menagerie', 'Promo']
	selectedSets: string[] = ['Dominion', 'Intrigue', 'Seaside', 'Alchemy', 'Prosperity', 'Cornucopia', 'Hinterlands', 'Dark Ages', 'Guilds', 'Adventures', 'Empires', 'Nocturne', 'Renaissance', 'Menagerie', 'Promo']
	allPromos: string[] = ['Black Market', 'Captain', 'Church', 'Dismantle', 'Envoy', 'Governor', 'Prince', 'Sauna/Avanto', 'Stash', 'Summon', 'Walled Village']
	selectedPromos: string[] = ['Black Market', 'Captain', 'Church', 'Dismantle', 'Envoy', 'Governor', 'Prince', 'Sauna/Avanto', 'Stash', 'Summon', 'Walled Village']
	panelOpen = false
	sortBySet = 'no'

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

		if (this.cookieService.check('sort'))
			this.sortBySet = this.cookieService.get('sort')
		else
			this.cookieService.set('sort', this.sortBySet)
		this.changeSort.emit(this.sortBySet)
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
	}

	changeSorting(bySet: string): void {
		this.sortBySet = bySet
		this.cookieService.set('sort', bySet)
		this.changeSort.emit(bySet)
	}

}
