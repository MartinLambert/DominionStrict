import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Card } from '../card'
import { Game } from '../game'
import { Setup } from '../setupclass'

@Component({
	selector: 'dom-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

	@Input() kingdom: Game = new Game()
	@Input() setup: Setup = new Setup()
	@Input() selectedCard: Card | null = null
	// @Output() randomize = new EventEmitter<boolean>()
	@Output() swapCard = new EventEmitter<Card>()
	@Output() selectCard = new EventEmitter<Card | null>()
	@Output() generateMarket = new EventEmitter<number>()
	marketSize = 40

	constructor() {}

	ngOnInit(): void {
	}

	onSelect(card: Card | null): void {
		this.selectCard.emit(card)
	}

}
