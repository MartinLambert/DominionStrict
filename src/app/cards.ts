import { Card } from './card'

export const CARDS: Card[] = [
	{
		id: 100,
		name: 'Adventurer',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Reveal cards from your deck until you reveal 2 Treasure cards. Put those Treasure cards into your hand and discard the other revealed cards.',
		help: 'If you have to shuffle in the middle, shuffle. Don’t shuffle in the revealed cards as these cards do not go to the Discard pile until you have finished revealing cards. If you run out of cards after shuffling and still only have one Treasure, you get just that one Treasure.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 101,
		name: 'Artisan',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card to your hand costing up to <img src="assets/Coin5.png">.<br>Put a card from your hand onto your deck.',
		help: 'The card you gain comes from the Supply and is put into your hand. You cannot use <img src="assets/Coin.png"> to increase how expensive a card you gain; it always costs from <img src="assets/Coin0.png"> to <img src="assets/Coin5.png">. After gaining the card, you put a card from your hand onto your deck; that can be the card you just gained, or a different card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 102,
		name: 'Bandit',
		set: 'Dominion',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Each other player reveals the top 2 cards of their deck, trashes a revealed Treasure other than Copper, and discards the rest.',
		help: 'First you gain a Gold from the Supply, putting it into your discard pile. Then each other player, in turn order, reveals their top 2 cards, trashes one they choose that is a Treasure other than Copper (e.g. Silver or Gold), and discards the other revealed cards. A player who did not reveal a Treasure card other than Copper simply discards both cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 103,
		name: 'Bureaucrat',
		set: 'Dominion',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Silver onto your deck. Each other player reveals a Victory card from their hand and puts it onto their deck (or reveals a hand with no Victory cards).',
		help: 'A player with no cards in their deck will have the card they put on top become the only card in their deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 104,
		name: 'Cellar',
		set: 'Dominion',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Discard any number of cards, then draw that many.',
		help: 'Choose any number of cards from your hand; discard them all at once; then draw as many cards as you actually discarded. If this causes you to shuffle, you will shuffle in the cards you discarded. You do not have to let players see any but the top card discarded; however the number of cards you discard is public.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 105,
		name: 'Chancellor',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>You may immediately put your deck into your discard pile.',
		help: 'You must resolve the Chancellor (decide whether or not to discard your Deck by flipping it into your Discard pile) before doing other things on your turn, like deciding what to buy or playing another Action card. You may not look through your Deck as you discard it. Putting your Deck in your Discard pile in this manner does not count as individually discarding each card in your deck, and you may not reveal Tunnels from your deck as you put it in your discard pile with Chancellor.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 106,
		name: 'Chapel',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 4 cards from your hand.',
		help: 'You cannot trash the Chapel itself, since it is not in your hand after you play it. You choose all the cards you want to trash, and then trash them at the same time; you don’t trash them one-by-one. This matters for interactions with cards with on-trash abilities. You can trash a different Chapel from your hand, if one is there.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 107,
		name: 'Council Room',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+4 Cards<br>+1 Buy</b><br>Each other player draws a card.',
		help: 'The other players draw a card whether they want to or not.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 108,
		name: 'Feast',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash this card.<br>Gain a card costing up to <img src="assets/Coin5.png">.',
		help: 'The gained card goes into your Discard pile. It has to be a card from the Supply. You cannot use <img src="assets/Coin.png"> from Treasures or previous Actions (like the Market) to increase the cost of the card that you gain. If you use Throne Room on Feast, you will gain two cards, even though you can only trash Feast once. Gaining the card isn’t contingent on trashing Feast; they’re just two things that the card tries to make you do.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 109,
		name: 'Festival',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions<br>+1 Buy<br>+<img src="assets/Coin2.png"></b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 110,
		name: 'Gardens',
		set: 'Dominion',
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png"> per 10 cards you have (round down).',
		help: 'For example, if you have 37 cards at the end of the game, each copy of Gardens you have is worth 3<img src="assets/VP.png">. Use 8 copies of Gardens in a 2-player game, 12 copies for 3 or more players. Cards on your Island mat, Durations still in play at the end of the game, and cards set aside for Haven or Inheritance or for any other reason are also counted at the end of the game.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 111,
		name: 'Harbinger',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look through your discard pile. You may put a card from it onto your deck.',
		help: 'First draw a card and get +1 Action; then look through your discard pile, and you may put a card from it on top of your deck. Putting a card on top is optional.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 112,
		name: 'Laboratory',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Action</b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 113,
		name: 'Library',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Draw until you have 7 cards in hand, skipping any Action cards you choose to; set those aside, discarding them afterwards.',
		help: 'You look at cards one at a time, putting each one into your hand or setting it aside, until you have 7 cards in hand; then you discard the set aside cards. If you shuffle in the middle of doing this, you do not shuffle in the set aside cards. Only Action cards can be set aside. You are not forced to set aside Action cards; that is just an option. If you already have 7 or more cards in hand to start, you do not draw any cards. If your −1 Card token is on your deck when you play Library, take it off.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 114,
		name: 'Market',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Buy<br>+<img src="assets/Coin1.png"></b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 115,
		name: 'Merchant',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>The first time you play a Silver this turn, <b>+<img src="assets/Coin1.png"></b>.',
		help: 'If you end up playing a Silver later in the turn, it comes with +<img src="assets/Coin1.png">. If you play more than one Merchant, each gives you +<img src="assets/Coin1.png"> when you play that first Silver; but if you play more than one Silver, you only get the +<img src="assets/Coin1.png"> for the first Silver. If you manage to play a Merchant after playing a Silver, the Merchant gives you no bonus (for the previous Silver or for any Silvers you might play later in the turn). Playing Throne Room on Merchant will give you +<img src="assets/Coin2.png"> when you play your first Silver.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 116,
		name: 'Militia',
		set: 'Dominion',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '+<img src="assets/Coin2.png"><br>Each other player discards down to 3 cards in hand.',
		help: 'Players with 3 or fewer cards in hand do not discard any cards. Players with more cards discard until they only have 3.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 117,
		name: 'Mine',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure from your hand. Gain a Treasure to your hand costing up to <img src="assets/Coin3.png"> more than it.',
		help: 'You can, for example, trash a Copper to gain a Silver, or trash a Silver to gain a Gold. The Treasure you gain comes from the Supply and is put into your hand; you can play it for the same turn. If you do not have a Treasure to trash, you do not gain one. You could also trash a Treasure to gain the same Treasure or a cheaper one.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 118,
		name: 'Moat',
		set: 'Dominion',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When another player plays an Attack card, you may first reveal this from your hand, to be unaffected by it.',
		help: 'An Attack card says "Attack" on the bottom line; in this set, Bandit, Bureaucrat, Militia, and Witch are Attacks. When another player plays an Attack card, you may reveal a Moat from your hand, before the Attack does anything, to be unaffected by the Attack - you do not reveal cards to Bandit, or put a Victory card on your deck for Bureaucrat, or discard for Militia, or gain a Curse for Witch. Moat stays in your hand, and can still be played on your next turn. Moat does not stop anything an Attack does to other players, or for the player who played it; it just protects you personally. If multiple Attacks are played on a turn or in a round of turns, you may reveal Moat for as many of them as you want. Moat can also be played on your turn for +2 Cards. Using a Moat to block an Attack does not give you +2 cards at the time; you only get the +2 cards when you play the Moat during the Action phase of your own turn. The ONLY thing that determines whether a card is an Attack card is whether it says "Attack" on the bottom. Not all cards which can hurt you are Attack cards, and not all Attack cards will hurt you. You can only reveal Moat when an Attack card is played, not when it is bought or gained, even if it affects you at that time. If an Attack card allows the player who played it to make a decision, like Minion or Pirate Ship, you must decide whether to reveal Moat before the player decides what function of the Attack card to use.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 119,
		name: 'Moneylender',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Copper from your hand for +<img src="assets/Coin3.png">.',
		help: 'You only get the +<img src="assets/Coin3.png"> if you actually trashed a Copper.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 120,
		name: 'Poacher',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png"></b><br>Discard a card per empty supply pile.',
		help: 'You draw your one card before discarding. If there are no empty piles, you do not discard. If there is one empty pile, you discard one card; if there are two empty piles, you discard two cards, and so on. This includes all Supply piles, including Curses, Coppers, Poacher itself, etc. If you do not have enough cards to discard, just discard the rest of your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 121,
		name: 'Remodel',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin2.png"> more than it.',
		help: 'You must trash a card from your hand if you have one. You cannot trash the Remodel itself, since it is not in your hand after you play it. If you do not have a card to trash, you do not gain one. If you do gain a card, it comes from the Supply and is put into your discard pile. The gained card does not need to cost exactly <img src="assets/Coin2.png"> more than the trashed card; it can cost that much or less, and can even be another copy of the trashed card. You cannot use <img src="assets/Coin.png"> to increase how expensive of a card you gain.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 122,
		name: 'Sentry',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1Action</b><br>Look at the top 2 cards of your deck. Trash and/or discard any number of them. Put the rest back on top in any order.',
		help: 'First you draw a card and get +1 Action. Then you look at the top 2 cards of your deck. You can trash both, or discard both, or put both back in either order; or you can trash one and discard one, or trash one and put one back, or discard one and put one back.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 123,
		name: 'Smithy',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 124,
		name: 'Spy',
		set: 'Dominion',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1Action</b><br>Each player (including you) reveals the top card of his deck and either discards it or puts it back, your choice.',
		help: 'Spy causes all players, including the one who played it, to reveal the top card of their Deck. Note that you draw your card for playing Spy before any cards are revealed. Anyone who does not have any cards left in their Deck shuffles in order to have something to reveal. Anyone who still has no cards to reveal doesn’t reveal one. If players care about the order in which things happen for this, you do yourself first, then each other player in turn order. Revealed cards that aren’t discarded are returned to the top of their players’ Decks. In a strict interpretation of the rules, each player reveals their card and returns it or discards it before the next player does, and for certain cards (such as Chariot Race), this can matter when it comes to deciding which each player should do. However, in practice, it’s usually fine for all players to reveal their cards at the same time for efficiency’s sake, provided there’s no effect in the game that cares about the order of revealing.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 125,
		name: 'Thief',
		set: 'Dominion',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Each other player reveals the top 2 cards of his deck. If they revealed any Treasure cards, they trash one of them that you choose. You may gain any or all of these trashed cards. They discard the other revealed cards.',
		help: 'A player with just one card left reveals that last card and then shuffles to get the other card to reveal (without including the revealed card); a player with no cards left shuffles to get both of them. A player who still doesn’t have two cards to reveal after shuffling just reveals what they can. Each player trashes one Treasure card at most, of the attacker’s choice from the two revealed cards, and then you gain any of the trashed cards that you want. You can only take Treasures just trashed—not ones trashed on previous turns. You can take none of them, all of them, or anything in between. Put the Treasures you decided to gain into your Discard pile. The ones you choose not to gain stay in the Trash pile. The treasures are trashed and then gained, so any things that happen on-trash happen first, and then any on-gain abilities activate afterwards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 126,
		name: 'Throne Room',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may play an Action card from your hand twice.',
		help: 'Playing an Action card from your hand is optional. If you do play one, you resolve it completely, then play it a second time. You cannot play other cards in-between (unless told to by the card, such as with Vassal or Throne Room itself). Playing Action cards with Throne Room is just like playing Action cards normally, except it does not use up Action plays for the turn. For example if you start a turn by playing Throne Room on Village, you would draw a card, get +2 Actions, draw another card, and get +2 Actions again, leaving you with 4 Actions. If you Throne Room a Throne Room, you may play an Action card twice, then may play another Action card twice; you do not play one Action card four times. When you play Throne Room and choose to target a Duration, the Throne Room stays out in play with the Duration that it affects. If you Throne Room a Throne Room which affects a Duration, the top-level Throne Room does not stay in play and gets cleaned up during the Clean-up phase of the turn. However, if the targeted Duration won’t do anything next turn on its second execution (for example, if it is a Tactician), the Throne Room doesn’t stay out. Remember that Throne Room does NOT “double” a card - it simply makes you play it twice. It may have different effects the first and second time it is played, so remember to follow all the instructions on the card fully from top to bottom, and then go back and follow them a second time.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 127,
		name: 'Vassal',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Discard the top card of your deck. If it is an Action card, you may play it.',
		help: 'If the card is an Action card, you can play it, but do not have to. If you do play it, you move it into your play area and follow its instructions; this does not use up one of your Action plays for the turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 128,
		name: 'Village',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b>',
		help: '“+2 actions” does not mean that you must immediately play 2 actions; it means that you may, later in the turn, play 2 more actions. Playing those actions is not part of resolving Village.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 129,
		name: 'Witch',
		set: 'Dominion',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each other player gains a Curse.',
		help: 'The Curses come from the Supply and are put into discard piles. They are given out in turn order, which can matter when the Curse pile is low. When the Curses are gone, you can still play Witch for +2 Cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 130,
		name: 'Woodcutter',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png"></b>',
		help: 'During your Buy phase, you add <img src="assets/Coin2.png"> to the total value of the Treasure cards played, and you may buy an additional card from the Supply.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 131,
		name: 'Workshop',
		set: 'Dominion',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png">.',
		help: 'The card you gain comes from the Supply and is put into your discard pile. You cannot use <img src="assets/Coin.png"> to increase how expensive of a card you gain; it always costs from <img src="assets/Coin0.png"> to <img src="assets/Coin4.png">. The costs of cards may be reduced by other cards - Bridge, Princess, or Highway. When checking whether you can gain a card with Workshop, you look at its cost as modified by all Bridges and Highways that have been played, not its “original” cost.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 201,
		name: 'Baron',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>You may discard an Estate for +<img src="assets/Coin4.png">. If you don’t, gain an Estate.',
		help: 'You do not have to discard an Estate, but if you do not, you must gain an Estate (if any are left).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 202,
		name: 'Bridge',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png"></b><br>This turn, cards (everywhere) cost <img src="assets/Coin1.png"> less, but not less than <img src="assets/Coin0.png">.',
		help: 'All cards, including cards in the Supply, in play, in decks, and in hands, cost <img src="assets/Coin1.png"> less for the rest of this turn, but not less than <img src="assets/Coin0.png">. For example after playing Bridge, you could buy a Gold with <img src="assets/Coin5.png">, since Gold only costs <img src="assets/Coin5.png">; you could Upgrade Copper to Estate, since Copper still costs <img src="assets/Coin0.png">, but Estate costs <img src="assets/Coin1.png">; you could use Ironworks to gain a Duchy, since Duchy only costs <img src="assets/Coin4.png">. This is cumulative; if you play two Bridges (or the same Bridge twice via Throne Room), cards will cost <img src="assets/Coin2.png"> less. Unlike other cost-reducing cards (such as Highway and Quarry), the effect of Bridge does not depend on the Bridge card itself being in play—only on how many times you’ve played it this turn. Thus if you use Procession on a Bridge, costs are still reduced (by <img src="assets/Coin2.png">) even though the Bridge ends up in the trash. This is not the case if you use Procession on Highway or Counterfeit on Quarry.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 203,
		name: 'Conspirator',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>If you’ve played 3 or more Actions this turn (counting this), <b>+1 Card</b> and <b>+1 Action</b>.',
		help: 'This counts Actions played this turn, rather than Action cards in play. For example if you start a turn with Throne Room on a Conspirator, you get +<img src="assets/Coin2.png"> for the first play of Conspirator, but +<img src="assets/Coin2.png"> +1 Card +1 Action for the second play of Conspirator. You only have two Action cards in play, but the second play of Conspirator is your third Action played this turn. Conspirator <em>does</em> count one-shots and other Actions that have been played but left the play area, but does not count Durations that are still in play left over from the previous turn, or Reserves called into play that were not played this turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 204,
		name: 'Courtier',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Reveal a card from your hand. For each type it has (Action, Attack, etc.), choose one: <b>+1 Action</b>; or <b>+1 Buy</b>; or <b>+<img src="assets/Coin3.png"></b>; or gain a Gold. The choices must be different.',
		help: 'First reveal a card from your hand, then count the types. The types are the words on the bottom line – including Action, Attack, Curse, Reaction, Treasure, and Victory (with more in expansions). Then choose one different thing per type the card had; if you revealed a card with two types, you pick two things. For example you could reveal a Copper and choose “gain a Gold,” or reveal a Mill and choose “+1 Action” and “+<img src="assets/Coin3.png">.” If you gain a Gold, put the Gold into your discard pile. Revealing a card with four types gives you all bonuses. Revealing a card with more than four types (such as an Estate Inherited as a Werewolf) just gives you all four bonuses; you don’t get to pick a fifth one. Different Courtiers can reveal different cards from your hand. If you play Courtier and have no cards in hand, you get no bonus.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 205,
		name: 'Courtyard',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Put a card from your hand onto your deck.',
		help: 'The card you put on top does not have to be one of the 3 you just drew.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 206,
		name: 'Diplomat',
		set: 'Intrigue',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>If you have 5 or fewer cards in hand (after drawing), <b>+2 Actions</b>.<hr>When another player plays an Attack card, you may first reveal this from a hand of 5 or more cards, to draw 2 cards then discard 3.',
		help: 'When playing this, you get +2 Cards, then count your cards in hand, and if you have 5 cards or fewer, you get +2 Actions. So, for example if you play this from a hand of 5 cards, you will put it into play, going down to 4 cards, then draw 2 cards, going up to 6 cards, and that is more than 5 cards so you would not get the +2 Actions. Diplomat can also be used when another player plays an Attack card, if you have at least 5 cards in hand. Before the Attack card does anything, you can reveal a Diplomat from your hand; if you do, you draw 2 cards, then discard 3 cards (which can include the Diplomat). If you still have at least 5 cards in hand after doing that (such as due to Council Rooms), you can reveal Diplomat again and do it again. You reveal Reactions one at a time; you cannot reveal two Diplomats simultaneously. You can reveal a Moat from your hand (to be unaffected by an Attack) either before or after revealing and resolving a Diplomat (even if the Moat was not in your hand until after resolving Diplomat).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 207,
		name: 'Duke',
		set: 'Intrigue',
		cardType: ['Victory'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png"> per Duchy you have.',
		help: 'For example, if you have five Duchies, then each of your Dukes is worth 5<img src="assets/VP.png">. Use 8 Dukes for games with 2 players, 12 for games with 3 or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 208,
		name: 'Harem',
		set: 'Intrigue',
		cardType: ['Treasure', 'Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png"><hr>2<img src="assets/VP.png">',
		help: 'This can be played in your Buy phase like other Treasures, and is worth 2<img src="assets/VP.png"> at the end of the game. Use 8 Harems for games with 2 players, 12 for games with 3 or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 209,
		name: 'Ironworks',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png"><br>If the gained card is an...<br>Action card, <b>+1 Action</b><br>Treasure card, <b>+<img src="assets/Coin1.png"></b><br>Victory card, <b>+1 Card</b>',
		help: 'The card you gain comes from the Supply and is put into your discard pile. You get bonuses depending on the types of the card you gained. A card with 2 types gives you both bonuses; if you use Ironworks to gain a Mill, you both draw a card and get +1 Action. If you do not actually gain the card you chose, such as because of Trader or Possession, you get no bonus. Curse cards are not Actions, Victories, or Treasures, so you get no bonus for gaining one, though you would generally not want to. Cards that change type when gained, such as Estates after Inheritance has been bought, give the bonus corresponding to the types they have after being gained. So if Inheritance set aside a Village, and you gained an Estate with Ironworks, you would get +1 Card and +1 Action.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 210,
		name: 'Lurker',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Choose one: Trash an Action card from the Supply, or gain an Action card from the trash.',
		help: 'The card trashed or gained has to be an Action card, but can have other types too. For example Lurker can trash Nobles from the Supply and can gain Nobles from the trash. When gaining a card with Lurker, put the gained card into your discard pile. When you trash a card from the supply that has a special effect when trashed, the on-trash effect activates. However, trashing from the supply does not allow you to react with Market Square. You can choose the gain-from-trash option even if there are no Actions in the trash at the time; in that case, nothing happens. (Similarly, you can also choose the trash-from-supply option even in the unlikely event that there are no Actions in the supply.)',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 211,
		name: 'Masquerade',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each player with any cards in hand passes one to the next such player to their left, at once. Then you may trash a card from your hand.',
		help: 'First you draw 2 cards. Then, all players at the same time choose a card to pass left, putting it face down on the table between players. Then the cards are passed; each player takes the passed card from the player to their right. Players with no cards in hand (such as due to Torturer) are skipped over - they neither pass a card nor receive one. Finally, you may trash a card from your hand. This is not an Attack and so cannot be stopped with Moat. Passed cards are not “gained” (which matters for some expansion cards, e.g. Trader from Dominion: Hinterlands). If only one player has cards in their hand, they pass a card to themself. Masquerade’s mechanism for changing card ownership is unique in the game, since it uses the word “pass” to indicate a change of card ownership. The consequence of this wording is that the player receiving a passed card is not “gaining” it. So, for example, they cannot react to the card passing with Watchtower.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 212,
		name: 'Mill',
		set: 'Intrigue',
		cardType: ['Action', 'Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may discard 2 cards, for +<img src="assets/Coin2.png">.<hr>1<img src="assets/VP.png">',
		help: 'You can choose to discard 2 cards even if you only have one card in hand, but you only get +<img src="assets/Coin2.png"> if you actually discarded 2 cards. Use 8 Mills for games with 2 players, 12 for games with 3 or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 213,
		name: 'Mining Village',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>You may trash this for +<img src="assets/Coin2.png">.',
		help: 'First draw a card and get +2 Actions; then choose whether or not to trash Mining Village before moving on to other actions or other phases, getting +<img src="assets/Coin2.png"> if you did. You may not trash Mining Village later in the turn, only right then. If you Throne Room a Mining Village, you cannot trash it twice (and so cannot get the +<img src="assets/Coin2.png"> twice).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 214,
		name: 'Minion',
		set: 'Intrigue',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Choose one: +<img src="assets/Coin2.png">; or discard your hand, <b>+4 Cards</b>, and each other player with at least 5 cards in hand discards their hand and draws 4 cards.',
		help: 'Players wishing to respond with e.g. Moat or Diplomat do so before you choose your option. A player who Moats this neither discards nor draws. You still draw 4 cards if you choose the discard option with no cards left in hand. Horse Traders normally doesn’t actually block an attack, but in the case of Minion it can.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 215,
		name: 'Nobles',
		set: 'Intrigue',
		cardType: ['Action', 'Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+3 Cards</b>; or <b>+2 Actions</b>.<hr>2<img src="assets/VP.png">',
		help: 'If you play the same Nobles multiple times, such as with Throne Room, Procession, or King’s Court, you may make different choices for each play. Use 8 copies of Nobles for games with 2 players, 12 for games with 3 or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 216,
		name: 'Patrol',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Reveal the top 4 cards of your deck. Put the Victory cards and Curses into your hand. Put the rest back in any order.',
		help: 'First draw 3 cards, then reveal the top 4 cards of your deck. Put the revealed Victory cards and Curses into your hand; you have to take them all. Put the rest of the cards back on your deck in any order you choose.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 217,
		name: 'Pawn',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+1 Card</b>; <b>+1 Action</b>; <b>+1 Buy</b>; +<img src="assets/Coin1.png">. The choices must be different.',
		help: 'You pick both things before doing either. You cannot pick the same option twice. If Pawn is Throne Roomed or King’s Courted, the choices do not have to be the same for each play of Pawn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 218,
		name: 'Replace',
		set: 'Intrigue',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin2.png"> more than it. If the gained card is an Action or Treasure, put it onto your deck; if it’s a Victory card, each other player gains a Curse.',
		help: 'Like Remodel, you first trash a card from your hand, then gain a card from the Supply costing up to <img src="assets/Coin2.png"> more than the trashed card, putting the gained card into your discard pile. Replace gives you an additional bonus based on the types of the gained card; if it is an Action or Treasure you move it to the top of your deck, and if it is a Victory card the other players each gain a Curse. It is possible to get both bonuses; if you gain Harem, Mill, or Nobles with Replace, it both goes on your deck and causes the other players to each gain a Curse.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 219,
		name: 'Secret Passage',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Action</b><br>Take a card from your hand and put it anywhere in your deck.',
		help: 'First draw 2 cards and get +1 Action; then put a card from your hand anywhere in your deck. The card can be one you just drew or any other card from your hand. It can go on top of your deck, on the bottom, or anywhere in-between; you can count out a specific place to put it, e.g. four cards down. If there are no cards left in your deck, the card put back becomes the only card in your deck. Where you put the card is public knowledge. You don’t have to put the card into a specific spot, you can just shove it into your deck if you want.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 220,
		name: 'Shanty Town',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Reveal your hand. If you have no Action cards in hand, <b>+2 Cards</b>.',
		help: 'You get +2 Actions, then reveal your hand. If it has no Action cards in it (including Action cards with other types too, such as Nobles), then you draw 2 cards. If you Throne Room a Shanty Town, you reveal your hand, get +2 actions, and potentially draw two cards, then you reveal your hand again, get 2 more actions, and potentially draw two more cards. You do NOT reveal your hand once and get +4 cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 221,
		name: 'Steward',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+2 Cards</b>; or <b>+<img src="assets/Coin2.png"></b>; or trash 2 cards from your hand.',
		help: 'First choose one of the three options, then do it. If you pick “trash 2 cards from your hand” and only have one card in hand, you trash that card; if you choose that option and have 2 or more cards in hand, you have to trash 2. You first choose which two cards to trash, then trash them both at the same time, and then choose which order to activate any when-trashed effects.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 222,
		name: 'Swindler',
		set: 'Intrigue',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Each other player trashes the top card of their deck and gains a card with the same cost that you choose.',
		help: 'When it matters (such as when piles are low), go in turn order, starting with the player to your left. Each other player trashes their top card, and gains a replacement you choose with the same cost. The card they gain comes from the Supply and goes to their discard pile. For example if a player trashed Copper, you might give them Curse, which costs <img src="assets/Coin0.png"> like Copper does. You can give a player back another copy of what they lost. If the Supply has no cards with the same cost as the trashed card, the player fails to gain a card. When-trashed effects trigger before the player who played Swindler has to choose which card the opponent gains. The opponent is the one who trashes the revealed card and resolves any when-trashed effects.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 223,
		name: 'Torturer',
		set: 'Intrigue',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Each other player either discards 2 cards or gains a Curse to their hand, their choice. (They may pick an option they can’t do.)',
		help: 'If it matters, the other players choose what happens to them (and resolve that) in turn order, starting to your left. A player can choose to gain a Curse even with no Curses left (and thus not gain one), or to discard 2 cards even with one or zero cards in hand (discarding their only card if they have one). Gained Curses go to players’ hands rather than their discard piles.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 224,
		name: 'Trading Post',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash 2 cards from your hand. If you did, gain a Silver to your hand.',
		help: 'If you have only one card in hand, trash it and nothing else happens; if you have 2 or more cards in hand, trash exactly 2 of them and gain a Silver, putting it into your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 225,
		name: 'Upgrade',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Trash a card from your hand. ' +
			'Gain a card costing exactly <img src="assets/Coin1.png"> more than it.',
		help: 'First draw a card and get +1 Action; then trash a card from your hand; then gain a card costing exactly <img src="assets/Coin1.png"> more than the trashed card. The gained card comes from the Supply and is put into your discard pile. If there is no card available at that cost, you do not gain a card; for example if you play Upgrade and trash a Copper, in a game with nothing costing <img src="assets/Coin1.png">, you simply fail to gain a card. First you trash a card, and resolve all of its on-trash effects; then you gain a card, and then resolve all on-gain effects.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 226,
		name: 'Wishing Well',
		set: 'Intrigue',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Name a card, then reveal the top card of your deck. If you named it, put it into your hand.',
		help: 'First you draw a card and get +1 Action. Then name a card - a name, not a type, so e.g. “Copper,” not “Treasure.” Reveal the top card of your deck. If it has the name you named, put it into your hand, otherwise leave it on your deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 301,
		name: 'Ambassador',
		set: 'Seaside',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Reveal a card from your hand. Return up to 2 copies of it from ' +
			'your hand to the Supply. Then each other player gains a copy of it.',
		help: 'First you reveal a card from your hand. Then take 0, 1, or 2 copies of that card from your hand and put them on top of their Supply pile. Then each other player gains a copy of that card from the Supply. If there are not enough copies to go around, deal them out in turn order, starting with the player to your left. If you reveal a card which is not in the Supply, such as Spoils, Madman, Mercenary, or Shelters, Ambassador does nothing. Similarly, because none of the cards bought through Black Market are in the Supply, if you reveal a card bought through Black Market, Ambassador does nothing. If you reveal a card which is part of a Supply pile with differently named cards, such as Ruins or Knights, you can only return two cards to the supply pile if they have the same name. Other players will only gain cards with that name. If you empty either the Province pile or a third Supply pile, then use Ambassador so that the pile is no longer empty at the end of your turn, the game does not end. If you return the bottom card of a Split pile when there is a top card on top, you still put the returned bottom card on top, not under the remaining top cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 302,
		name: 'Bazaar',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions<br>+<img src="assets/Coin1.png"></b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 303,
		name: 'Caravan',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>At the start of your next turn, <b>+1 Card</b>.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 304,
		name: 'Cutpurse',
		set: 'Seaside',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Each other player discards a Copper (or reveals a hand with no Copper).',
		help: 'Each of your opponents with at least one Copper in hand discards one Copper. Each of your opponents with no Coppers in hand reveals their hand to prove this.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 305,
		name: 'Embargo',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Trash this. Add an Embargo token to a Supply pile. (For the rest of the game, when a player buys a card from that pile, they gain a Curse.)',
		help: 'The token can go on any Supply pile - a Kingdom card pile such as Embargo, or a base card pile such as Silver. The token modifies the pile, so that anyone buying a card from that pile gains a Curse. This even affects the player who placed the Embargo token. This is cumulative; with three Embargo tokens on a pile, buying a card from that pile will give you three Curses. Embargo tokens do not do anything if a card is gained without being bought, such as with Smugglers, or if the Curse pile is empty. Embargo tokens are not counter-limited; use a replacement if necessary. If you Throne Room Embargo, you will get +<img src="assets/Coin4.png"> and place two tokens, even though you can only trash Embargo once. If there are multiple Embargo tokens on a pile, each Curse gain from buying from that pile happens separately, which allows other when-buy triggers (such as Haggler’s) to activate in between Curse gains.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 306,
		name: 'Explorer',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may reveal a Province from your hand. If you do, gain a Gold to your hand. If you don’t, gain a Silver to your hand.',
		help: 'You do not have to reveal a Province if you have one. If you do reveal one you gain a Gold, otherwise you gain a Silver. The gained card comes from the Supply and is put into your hand; it can be played the same turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 307,
		name: 'Fishing Village',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions<br>+<img src="assets/Coin1.png"></b><br>At the start of your next turn: <b>+1 Action</b> and <b>+<img src="assets/Coin1.png"></b>.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 308,
		name: 'Ghost Ship',
		set: 'Seaside',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each other player with 4 or more cards in hand puts cards from their hand onto their deck until they have 3 cards in hand.',
		help: 'Each other player keeps putting cards from their hand onto their deck, in any order they choose, until they only have 3 cards in hand. Players who already had 3 or fewer cards in hand do not put any cards onto their deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 309,
		name: 'Haven',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Set aside a card from your hand face down (under this). At the start of your next turn, put it into your hand.',
		help: 'First draw a card and get +1 Action; then choose a card from your hand and set it aside face down under Haven. You may look at it, but other players may not. You have to set aside a card if you can. At the start of your next turn, return the set aside card to your hand. If you have no card in your hand to set aside when you play Haven, you set aside nothing, and clean up Haven at the end of that turn; it does not stay out. If Haven is still in play when the game ends, it and the card set aside with it are returned to your deck before scoring; this can matter for alt-VP cards like Gardens.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 310,
		name: 'Island',
		set: 'Seaside',
		cardType: ['Action', 'Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Put this and a card from your hand onto your Island mat.<hr>2<img src="assets/VP.png">',
		help: 'When you set aside your first Island, take an Island player mat to put it on. Island and the set aside card are face up on the mat; anyone can look at them. They stay there until the end of the game, when you return them to your deck and count your score. When playing Island, you have to set aside a card if you can. If you Throne Room an Island, you set aside two cards with it. Use 8 copies of Island for games with 2 players, 12 for games with 3 or more players. If you Procession an Island, you set it aside with a card, then you set aside another card; you do not trash the Island because it has already been set aside, but you do gain a card costing <img src="assets/Coin1.png"> more than the Island.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 311,
		name: 'Lighthouse',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Now and at the start of your next turn, +<img src="assets/Coin1.png">.<hr>While this is in play, when another player plays an Attack card, it doesn’t affect you.',
		help: 'While Lighthouse is in play, other players’ Attack cards do not affect you (even if you want them to). This does not prevent you from using Reactions when other players play Attacks. Lighthouse only protects you against Attack cards played while the Lighthouse is in play. Swamp Hag and Haunted Woods are Attack cards that affect you at a time other than when they are played, but what matters for Lighthouse is whether Lighthouse was in play when the Attack card was played, not whether it’s in play when the Attack cards would have their effect on you.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 312,
		name: 'Lookout',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Look at the top 3 cards of your deck. Trash one of them. Discard one of them. Put the other one back on top of your deck.',
		help: 'You do the things in order - first trash one of the cards, then discard one, then put the last one on top of your deck. So if there is only one card (even after shuffling), you trash it, and if there are only 2 cards, you trash one then discard the other. Resolve any on-trash effects of the trashed card before discarding the next card, and resolve any on-discard effects of the discarded card before putting back the last card. The three cards you look at are not considered to still be the top cards of your deck while you are resolving Lookout. Thus, for example, if you trash a card with an on-trash draw bonus, such as Overgrown Estate, you will not draw one of the remaining two cards you’re looking at, but rather the next one down.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 313,
		name: 'Merchant Ship',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn: <b>+<img src="assets/Coin2.png"></b>.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 314,
		name: 'Native Village',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Choose one: Put the top card of your deck face down on your Native Village mat (you may look at those cards at any time); or put all the cards from your mat into your hand.',
		help: 'When you play this, you either take all of the cards from your mat, or set aside the top card of your deck on your mat. You can look at the cards on your mat whenever you like, but other players cannot. You may choose either option even if there are no cards in your deck or no cards on your mat. You cannot look at the top card before deciding whether to set it aside or take the cards from the mat. At the end of the game, all cards from the mat are returned to your deck for scoring. If you choose to place the top card of your deck on the Native Village player mat you may then immediately look at the card, but your choice has been done.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 315,
		name: 'Navigator',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Look at the top 5 cards of your deck. Either discard them all, or put them back in any order.',
		help: 'You discard all 5 cards (or however many were left after shuffling) or none of them. If you do not discard them, put them back in any order.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 316,
		name: 'Outpost',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If this is the first time you played an Outpost this turn, and the previous turn wasn’t yours, then take an extra turn after this one, and you only draw 3 cards for your next hand.',
		help: 'Outpost only does anything the first time you play it in a turn, and only if the previous turn was another player’s (meaning, you are not already taking an extra turn). If these conditions are met, you take an extra turn, and only draw 3 cards for your next hand rather than 5 (thus usually only having 3 cards in hand on the extra turn). Except for the smaller starting hand, the extra turn is a normal turn. If you play e.g. Merchant Ship in the same turn as Outpost, the extra turn will be when you get the +<img src="assets/Coin2.png"> from Merchant Ship. Extra turns do not count towards the tiebreaker of which tied player had fewer turns.<br>Remember that the extra turn is completely normal (if it happens); it is the turn in which you play Outpost which is different, in that you only draw three cards during cleanup. This makes Outpost an exception to the basic rule that Duration cards are discarded from play during the Clean-up phase of the last turn on which they “do something”; Outpost doesn’t do anything on the extra turn it creates, but it is not cleaned up until the end of the extra turn regardless. Playing Throne Room (or similar cards) on Outpost would seem to do nothing, but the Throne Room will still have to stay out with the Outpost as long as it does. Playing any Outposts beyond the first one on a turn does nothing, and extra Outposts will be discarded from play before you take your extra turn. If you buy Mission on the same turn you play Outpost, you can choose whether the Mission turn or the Outpost turn happens first; whichever one does will start with a 3 card hand, while the other will start with a 5 card hand. An Estate Inherited as an Outpost will never do anything.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 317,
		name: 'Pearl Diver',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look at the bottom card of your deck. You may put it on top.',
		help: 'First draw a card and get +1 Action; then look at the bottom card of your deck, shuffling first if needed. If you choose to put the bottom card on top of your deck, be sure not to look at the card above it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 318,
		name: 'Pirate Ship',
		set: 'Seaside',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: +<img src="assets/Coin1.png"> per Coin token on your Pirate Ship mat; or each other player reveals the top 2 cards of their deck, trashes one of those Treasures that you choose, and discards the rest, and then if anyone trashed a Treasure you add a Coin token to your Pirate Ship mat.',
		help: 'Players revealing a card like Moat do so before you choose your option. If you choose the first option, you get +<img src="assets/Coin1.png"> per Coin token on your Pirate Ship mat; the Coin tokens stay there. If you choose the second option, each other player reveals the top 2 cards of their deck, trashes a revealed Treasure of your choice, if possible, and discards the rest of their revealed cards. Then, if any players did trash a Treasure, you add a Coin token to your Pirate Ship mat (from the supply of tokens). You get at most one Coin token per play of Pirate Ship. Coin tokens on your Pirate Ship mat cannot be spent (as the Coin tokens from Dominion: Guilds can be).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 319,
		name: 'Salvager',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Trash a card from your hand. +<img src="assets/Coin1.png"> per <img src="assets/Coin1.png"> it costs.',
		help: 'For example if you trash an Estate, which costs <img src="assets/Coin2.png">, you get +<img src="assets/Coin2.png"> (and +1 Buy). If you trash a card with <img src="assets/Potion.png"> or <img src="assets/Debt.png"> in the cost (from other expansions), you get nothing for those symbols.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 320,
		name: 'Sea Hag',
		set: 'Seaside',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Each other player discards the top card of their deck, then gains a Curse onto their deck.',
		help: 'The Curses are given out in turn order, which can matter when the Curse pile is low. They go onto decks rather than into discard piles. Even when there are no Curses left, other players still discard the top card of their deck when Sea Hag is played.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 321,
		name: 'Smugglers',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain a copy of a card costing up to <img src="assets/Coin6.png"> that the player to your right gained on their last turn.',
		help: 'The card has to cost <img src="assets/Coin6.png"> or less when you play Smugglers; it does not have to have cost <img src="assets/Coin6.png"> or less when the player to your right gained it. This looks at the most recent turn of the player to your right, even if you have taken multiple turns in a row. The gained card does not have to have been bought by the other player, just gained; for example you can gain a copy of a card they gained with their own Smugglers. If they gained multiple cards costing <img src="assets/Coin6.png"> or less, you choose between them; if they gained no such cards, you do not gain anything. This can only gain cards that are present in the Supply; for example you cannot gain a Spoils (from Dominion: Dark Ages). This is not an Attack, so Lighthouse and Moat do not stop it.<br>You may choose a card the player to your right gained from the Trash. If your opponent gained a Ruins or a Knight, Smugglers will only let you gain a copy if the top card of the Ruins or Knights pile has the same name. (This is quite unlikely in the case of Knights!) Cards with a <img src="assets/Potion.png"> or <img src="assets/Debt.png"> cost do not cost less than <img src="assets/Coin6.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 322,
		name: 'Tactician',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If you have at least one card in hand, discard your hand, and at the start of your next turn, <b>+5 Cards</b>, <b>+1 Action</b>, and <b>+1 Buy</b>.',
		help: 'If you have no cards in hand, then Tactician does nothing more and is discarded in the same turn’s Clean-up. If you do have at least one card, you discard your hand, Tactician stays in play, and at the start of your next turn you get +5 Cards, +1 Buy, and +1 Action (and Tactician is discarded that turn). If you use Throne Room on Tactician, you will discard your hand on the first play and (without a +1 Card token) will have no cards in hand for the second play, and so will not get the bonuses from it. Still the Throne Room (or its variants) stays in play. When the +1 Card token is on Tactician, using a Throne Room variant on it becomes meaningful as it provides you a card to discard each time Tactician is played again.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 323,
		name: 'Treasure Map',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash this and a Treasure Map from your hand. If you trashed two Treasure Maps, gain 4 Golds onto your deck.',
		help: 'When you play this, you trash it and trash another Treasure Map from your hand, if you can. If you did trash another copy of Treasure Map, then you gain 4 Golds, putting them onto your deck instead of your discard pile. If you did not have another copy of Treasure Map in hand, then you just trash the one Treasure Map and nothing else happens. If you Throne Room a Treasure Map, you will only trash the first Treasure Map once, and will gain no Golds. You gain no Gold when you play Estate if it inherits Treasure Map. You gain 4 Golds when you play Band of Misfits as Treasure Map.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 324,
		name: 'Treasury',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png"></b><br>When you discard this from play, if you didn’t buy a Victory card this turn, you may put this onto your deck.',
		help: 'If you did not buy any Victory cards during your turn, you may put any or all of your played Treasuries on top of your deck during Clean-up. If you did buy at least one Victory card, all of the Treasuries are discarded normally. Gaining a Victory card without buying it, such as with Smugglers, does not prevent you from putting Treasuries on your deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 325,
		name: 'Warehouse',
		set: 'Seaside',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Action</b><br>Discard 3 cards.',
		help: 'If there are fewer than 3 cards for you to draw (after shuffling), you still discard 3 cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 326,
		name: 'Wharf',
		set: 'Seaside',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn: <b>+2 Cards</b> and <b>+1 Buy</b>.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 401,
		name: 'Alchemist',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 1
		},
		text: '<b>+2 Cards<br>+1 Action</b><br>When you discard this from play, if you have a Potion in play, you may put this onto your deck.',
		help: 'When you discard this from play during Clean-up, if you have at least one Potion card in play, you may put Alchemist on top of your deck. This is optional, and happens before drawing your new hand. If you have multiple Alchemists and a Potion, you can put any or all of the Alchemists on top of your deck. You do not have to have used the Potion to buy anything, you only need to have played it. You choose what order to discard cards in Clean-up, and so can discard your Alchemists ahead of your Potion. Remember that you are allowed to play a Potion during your buy phase, like any other Treasure, even if you don’t intend to or can’t buy a card with <img src="assets/Potion.png"> in the cost.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 402,
		name: 'Apothecary',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 1
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top 4 cards of your deck. Put the Coppers and Potions into your hand. Put the rest back in any order.',
		help: 'You draw a card and get +1 Action first. Then reveal the top four cards of your deck, put the revealed Coppers and Potions into your hand, and put the other cards back on your deck in any order. You cannot choose not to take all of the Coppers and Potions.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 403,
		name: 'Apprentice',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Trash a card from your hand.<br><b>+1 Card</b> per <img src="assets/Coin.png"> it costs.<br><b>+2 Cards</b> if it has <img src="assets/Potion.png"> in its cost.',
		help: 'If you trash a card costing <img src="assets/Coin0.png">, such as Curse or Copper, you do not draw any cards. Otherwise you draw a card per <img src="assets/Coin1.png"> the card you trashed cost, and another two cards if it had <img src="assets/Potion.png"> in its cost. For example if you trashed a Golem, which costs <img src="assets/Coin4.png"><img src="assets/Potion.png">, you would draw 6 cards. If you trash a card with <img src="assets/Debt.png"> in the cost, the <img src="assets/Debt.png"> component is ignored.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 404,
		name: 'Familiar',
		set: 'Alchemy',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 1
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Each other player gains a Curse.',
		help: 'You draw a card, get +1 Action, and each other player gains a Curse.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 405,
		name: 'Golem',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 1
		},
		text: 'Reveal cards from your deck until you reveal 2 Action cards other than Golems. Discard the other cards, then play the Action cards in either order.',
		help: 'Reveal cards from the top of your deck, one at a time, until you have revealed two Action cards that are not Golem. Discard all of the revealed cards except for the non-Golem Actions you found. If you did not find any, you are done. If you found one, play it. If you found two, play them both, in either order. You cannot choose not to play one of them. These Action cards are not in your hand and so are unaffected by things that look for cards in your hand. For example if one of them is Throne Room, you cannot use it on the other one.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 406,
		name: 'Herbalist',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png"></b><br>When you discard this from play, you may put one of your Treasures from play onto your deck.',
		help: 'When you discard this from play in Clean-up, you may choose a Treasure card you have in play, and put that card on your deck. You choose what order to discard cards during Clean-up; so for example if you have Herbalist, Potion, and Alchemist in play, you could choose to discard Alchemist first, putting it on top of your deck, then discard Herbalist, and put Potion on top of your deck. If you have multiple Herbalists in play, each one will let you put another Treasure from play onto your deck when you discard it.<br>Using Herbalist with Throne Room or King’s Court does not allow you to top-deck more than one Treasure per Herbalist card. Using Herbalist with Procession doesn’t allow you to top-deck any Treasures at all, since you never actually discard the Herbalist. Herbalist cannot top-deck Spoils or any Treasure doubled by Counterfeit, as they are no longer in play when Herbalist is discarded.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 407,
		name: 'Philosopher’s Stone',
		set: 'Alchemy',
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 1
		},
		text: 'When you play this, count your deck and discard pile. Worth <img src="assets/Coin1.png"> per 5 cards total between them (round down).',
		help: 'When you play this, count the number of cards in your deck and discard pile combined, divide by 5, and round down. That is how many <img src="assets/Coin.png"> this produces for you. Once played, the amount of <img src="assets/Coin.png"> you got does not change even if the number of cards changes later in the turn. Make sure not to change the order of your deck when counting it; the order of your discard pile does not matter. You will get to look through your discard pile as you count it. You only count your deck and discard pile, not your hand or cards in play or set aside cards.<br>Since the release of Prosperity, it is actually possible to play multiple copies of Philosopher’s Stone that give different amounts of <img src="assets/Coin.png">. For example, if you have 20 cards in your deck and play this, it produces <img src="assets/Coin4.png">. Then, you could play a Venture, which could reveal and play another copy of this. When you play the second copy, you would only have 19 cards in your deck, so it would only produce <img src="assets/Coin3.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 408,
		name: 'Possession',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 1
		},
		text: 'The player to your left takes an extra turn after this one, in which you can see all cards they can and make all decisions for them. Any cards or tokens they would gain on that turn, you gain instead; any cards of theirs that are trashed are set aside and put in their discard pile at end of turn.',
		help: 'You are not taking a turn with the deck of the player to your left; that player is taking a turn, with you making the decisions and gaining the cards. The “you” in all cards still refers to the player being Possessed, not the player doing the Possessing. Possession has several pieces to it:<ul><li>You can see the Possessed player’s cards for the entire turn, which means you will see their next hand during Clean-up. You will also see any cards they are entitled to see due to card rules; for example you can look at cards they have set aside with Native Village (from Dominion: Seaside).</li><li>You make all decisions for the Possessed player, including what cards to play, decisions those cards provide, and what cards to buy.</li><li>Any cards the Possessed player would have gained in any way, you gain instead; this includes cards bought, as well as cards gained due to Actions. The cards you gain this way go to your discard pile, even if they would have gone to that player’s hand or the top of their deck or somewhere else. You also get any <img src="assets/Debt.png"> tokens that player would have gotten (this is a change from the original version of Possession). You do not get any other tokens that player would have gotten (this is a change from the errata in Dominion: Empires). <img src="assets/Debt.png"> is something from Dominion: Empires; if you do not have those cards, that part of Possession’s effects does not matter.</li><li>During the Possessed turn, whenever one of that player’s cards is trashed, set it aside, and that player puts it into their discard pile at the end of the turn, after Clean-up. The card is still trashed, so for example you could have them trash a Mining Village (from Dominion: Intrigue) and get the +<img src="assets/Coin2.png">. Getting those cards back at end of turn does not count as those cards being gained (so for example, you will not get them). Other players’ cards that are trashed during that turn are not returned.</li><li>Cards passed with Masquerade (from Dominion: Intrigue) are not being gained or trashed. Exchanging a card (such as Soldier from Adventures) does not count as gaining or trashing. Cards returned to the Supply, such as with Ambassador (from Dominion: Seaside) are also not being trashed, and so return to the Supply normally.</li><li>If you make another player play an Attack via Possession, that Attack will hit you like it would normally. If you want to use a Reaction in response to that Attack (such as Moat), you would be the one revealing the Reaction, not the player being Possessed.</li><li>Possession causes an extra turn to be played, like the card Outpost does (from Dominion: Seaside). The extra turn happens only after this turn is completely over - you will have discarded everything and drawn your next hand. Outpost only prevents itself from giving a player two consecutive turns, it does not prevent other cards or the rules from doing so. So for example if you play Possession in a two-player game, then after the Possession turn, that player still gets their normal turn. If they played Outpost during that turn though, it would not give them an extra turn (unless another player took a turn in between, such as via another Possession). If you play both Outpost and Possession in the same turn, the Outpost turn happens first. If you make someone play Outpost during a turn in which you Possessed them, that player will get the extra turn and make decisions during it and so forth, not you; if you make someone play Possession during a turn in which you Possessed them, that will make that player Possess the player to their left, rather than you getting to Possess anyone further. Possession turns (and other extra turns) do not count for the tiebreaker. Once the game ends, no further turns are played, including extra turns from Possession and Outpost.</li><li>Unlike Outpost, Possession is not a Duration card. It is discarded in the Clean-up phase of the turn you played it.</li><li>Possession is cumulative; if you play it twice in one turn, there will be two extra turns after this one.</li></ul>Possession is not an Attack, and cannot be blocked by cards like Moat.<br>In a 2-player game, if you have your opponent play Possession while you’re Possessing their deck, then at the end of this turn, they will control a turn with your deck, and then will play their turn as normal. If you play 2 Possessions, then tell the Possessed player to play a Possession of their own during the first Possessed turn, you finish all Possessed turns of the current Possessed player before moving on to the next player’s Possessed turns. Then the first Possessed player finally takes their normal turn. Extra turns happen in turn order. If you play multiple Possessions, then tell the Possessed player to play an Outpost or buy a Mission during the first Possession turn, they get to decide whether the next Possession turns happen first, or the Outpost/Mission turn, since Possession does not give control between turns. If you were Possessed before your regular turn, playing an Outpost or buying a Mission on your regular turn will not give you an extra turn. Cards that are trashed and set aside on a Possession turn are not in the trash for the rest of the turn. This means that they can’t be gained with Graverobber or Rogue, they can’t be played by Necromancer, and they won’t contribute to the value of Forager. A trashed Fortress can be set aside like any other trashed card, at which point it loses track of itself and is not returned to the owner’s hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 409,
		name: 'Scrying Pool',
		set: 'Alchemy',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 1
		},
		text: '<b>+1 Action</b><br>Each player (including you) reveals the top card of their deck and either discards it or puts it back, your choice. Then reveal cards from your deck until revealing one that isn’t an Action. Put all of the revealed cards into your hand.',
		help: 'First each player reveals their top card, and discards it or puts it back, with you choosing separately for each player. If people care about the order, go clockwise, starting with yourself. After that, reveal cards from the top of your deck until you reveal a card that is not an Action card. If you run out of cards without revealing a non-Action card, shuffle your discard pile and keep going. If you have no discard pile left either, stop there. Put all of the Action cards you revealed from your deck into your hand, plus that first non-Action card. The only cards that go into your hand are the ones revealed as part of revealing cards until finding a non-Action; you do not get discarded cards from the first part of what Scrying Pool did, or cards from other players’ decks.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 410,
		name: 'Transmute',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 1
		},
		text: 'Trash a card from your hand. If it’s an...<br>Action card, gain a Duchy<br>Treasure card, gain a Transmute<br>Victory card, gain a Gold',
		help: 'If you trash a Curse to this, you do not get anything. If you trash a card with more than one type to this, you get each applicable thing. For example if you trash an Action-Victory card (such as Nobles, from Dominion: Intrigue), you gain both a Duchy and a Gold. If you Transmute an Inherited Estate, the Estate is in the trash and, thus, no longer yours when Transmute checks its type; therefore you would only get a Gold (for trashing a Victory card) and not a Duchy (since Estate cannot be an Action card in the trash).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 411,
		name: 'University',
		set: 'Alchemy',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 1
		},
		text: '<b>+2 Actions</b><br>You may gain an Action card costing up to <img src="assets/Coin5.png">.',
		help: 'Gaining an Action card is optional. Cards with <img src="assets/Potion.png"> in their cost cannot be gained by this. Cards with multiple types, one of which is Action, are Actions and can be gained this way.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 412,
		name: 'Vineyard',
		set: 'Alchemy',
		cardType: ['Victory'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 1
		},
		text: 'Worth <b>1<img src="assets/VP.png"></b> per 3 Action cards you have (round down).',
		help: 'for example if you have 11 Action cards, your Vineyards are worth <b>3<img src="assets/VP.png"></b> each. Cards with multiple types, one of which is Action, are Actions and so are counted by Vineyard.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 501,
		name: 'Bank',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'When you play this, it’s worth <img src="assets/Coin1.png"> per Treasure card you have in play (counting this).',
		help: 'If you play two copies of Bank in a row, the second one will be worth <img src="assets/Coin1.png"> more than the first one. Playing more Treasures after Bank will not change how much <img src="assets/Coin.png"> you got from it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 502,
		name: 'Bishop',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"><br>+1<img src="assets/VP.png"></b><br>Trash a card from your hand. <b>+1<img src="assets/VP.png"></b> per <img src="assets/Coin2.png"> it costs (round down). Each other player may trash a card from their hand.',
		help: 'Trashing a card is optional for the other players but mandatory for you. If players care about the order things happen for this, you trash a card first, then each other player may trash a card, in turn order. Only the player who played Bishop can get <img src="assets/VP.png"> tokens from it. <img src="assets/Potion.png"> and <img src="assets/Debt.png"> in costs is ignored, for example if you trash Golem (from Dominion: Alchemy), which costs <img src="assets/Coin4.png"><img src="assets/Potion.png">, you get 3<img src="assets/VP.png"> total. If you have no cards left in hand to trash, you still get the <img src="assets/Coin1.png"> and 1<img src="assets/VP.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 503,
		name: 'City',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>If there are one or more empty Supply piles, <b>+1 Card</b>. If there are two or more, <b>+1 Buy</b> and <b>+<img src="assets/Coin1.png"></b>.',
		help: 'You draw a card and can play two more Actions no matter what. If there is just one empty pile in the Supply, you also draw another card. If there are two or more empty piles, you both draw another card, and get +<img src="assets/Coin1.png"> and +1 Buy. There are no further bonuses if three or more piles are empty. This only checks how many piles are empty when you play it; what you got does not change if a pile becomes empty (or non-empty, such as due to Ambassador from Dominion: Seaside). This only counts Supply piles, not non-Supply piles like Spoils from Dark Ages.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 504,
		name: 'Contraband',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin3.png"><br>+1 Buy</b><br>When you play this, the player to your left names a card. You can’t buy that card this turn.',
		help: 'This does not stop you from gaining the card in ways other than buying it (such as via Hoard). They do not have to name a card in the Supply. If you play multiple Contrabands in one turn, the player to your left names a card each time; if they name different cards, you cannot buy any of the named cards this turn. If you play Contraband before other Treasures, you hide how much <img src="assets/Coin.png"> you will have; however the number of cards left in a player’s hand is public information.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 505,
		name: 'Counting House',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Look through your discard pile, reveal any number of Coppers from it, and put them into your hand.',
		help: 'This card lets you look through your discard pile, something you normally are not allowed to do. You only get to look through your discard pile when you play this. You do not have to show the other players your entire discard pile, just the Coppers you take out. After you take out the Coppers, you can leave your discard pile in any order.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 506,
		name: 'Expand',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin3.png"> more than it.',
		help: 'If you do not have a card to trash, you do not gain one. If you do gain a card, it comes from the Supply and is put into your discard pile. The gained card does not need to cost exactly <img src="assets/Coin3.png"> more than the trashed card; it can cost that much or less, and can even be another copy of the trashed card. <img src="assets/Potion.png"> is counted as part of the cost, so you could Expand a Familiar into a Possession.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 507,
		name: 'Forge',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Trash any number of cards from your hand. Gain a card with cost exactly equal to the total cost in <img src="assets/Coin.png"> of the trashed cards.',
		help: '“Any number” includes zero. If you trash no cards, you have to gain a card costing <img src="assets/Coin0.png"> if you can. If there is no card at the required cost, you do not gain a card. The card you gain comes from the Supply and is put into your discard pile. <img src="assets/Potion.png"> (on cards from Dominion: Alchemy) and <img src="assets/Debt.png"> (on cards from Dominion: Empires) are not added, and the card you gain cannot have those symbols in its cost.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 508,
		name: 'Goons',
		set: 'Prosperity',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png"></b><br>Each other player discards down to 3 cards in hand.<hr>While this is in play, when you buy a card, <b>+1<img src="assets/VP.png"></b>.',
		help: 'You get +1<img src="assets/VP.png"> for each card you buy, but do not get +1<img src="assets/VP.png"> for gaining a card some other way. Multiple copies of Goons are cumulative; if you have two Goons in play and buy a Silver, you get +2<img src="assets/VP.png">. However if you King’s Court a Goons, despite having played the card 3 times, there is still only one copy of it in play, so buying Silver would only get you +1<img src="assets/VP.png">. Buying Events does not give you <img src="assets/VP.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 509,
		name: 'Grand Market',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Buy<br>+<img src="assets/Coin2.png"></b><hr>You can’t buy this if you have any Coppers in play.',
		help: 'A single Copper in play is enough to stop you from buying Grand Market. You do not have to play all of the Treasures in your hand. Coppers in your hand do not stop you from buying Grand Market - only Coppers in play do. Coppers that were in play earlier in the turn but aren’t anymore also do not stop you; if you have 11 Coppers in play and 2 Buys, you could buy a Mint, trash all of your played Treasures, and then buy a Grand Market. You can gain Grand Market other ways - for example with Expand - whether or not you have Coppers in play. Treasures other than Copper do not prevent you from buying Grand Market, even if they are worth <img src="assets/Coin1.png"> (such as Loan). Remember you cannot play more Treasures after buying a card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 510,
		name: 'Hoard',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png"><hr>While this is in play, when you buy a Victory card, gain a Gold.',
		help: 'When you buy a Victory card with this in play, you gain a Gold card from the Supply, putting it into your discard pile. If there are no Golds left, you do not get one. If you have multiple Hoards in play, you will gain multiple Golds from buying a single Victory card. If you buy multiple Victory cards, you will get Gold for each one. So for example if you had two Hoards in play and no other money, with +1 Buy, you could buy two Estates and gain four Golds. Victory cards gained other than via buying them do not get you Gold. A Crowned Hoard will still only gain one Gold per Victory card buy.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 511,
		name: 'King’s Court',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'You may play an Action card from your hand three times.',
		help: 'This is similar to Throne Room, but plays the Action three times rather than twice. Playing an Action card from your hand is optional. If you do play one, you resolve it completely, then play it a second time, then play it a third time. You cannot play other cards in-between (unless told to by the card, such as with King’s Court itself). Playing Action cards with King’s Court is just like playing Action cards normally, except it does not use up Action plays for the turn. For example if you start a turn by playing King’s Court on Village, you would draw a card, get +2 Actions, draw another card, get +2 Actions again, draw a 3rd card, and get +2 Actions again, leaving you with 6 Actions. If you King’s Court a King’s Court, you may play an Action card three times, then may play another Action card three times, then may play a 3rd Action card three times; you do not play one Action card nine times.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 512,
		name: 'Loan',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png"><br>When you play this, reveal cards from your deck until you reveal a Treasure. Discard it or trash it. Discard the other cards.',
		help: 'When you play Loan, you get <img src="assets/Coin1.png">, reveal cards from the top of your deck until revealing a Treasure card, and then decide whether to trash that card or discard it. Then you discard all of the other revealed cards. If you run out of cards before revealing a Treasure, shuffle your discard pile (but not the revealed cards) to get more; if you still do not find a Treasure, just discard all of the revealed cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 513,
		name: 'Mint',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may reveal a Treasure card from your hand. Gain a copy of it.<hr>When you buy this, trash all Treasures you have in play.',
		help: 'When you buy this, you trash all of your Treasure cards in play (but not ones in your hand or elsewhere). If you buy multiple cards in a turn, trash your Treasures right when you buy Mint; you still have any leftover <img src="assets/Coin.png"> they produced for spending on something else. Remember you do not have to play all of the Treasures from your hand each turn (just all the ones you want producing money for you), and you cannot play more Treasures after buying a card. When you play this, you may reveal a Treasure card from your hand and gain a copy of it from the Supply, putting the gained card into your discard pile. The revealed card stays in your hand. If you buy a Mint and use Watchtower to put it on top of your deck or trash it, you still trash all of your Treasures from play. However if you buy a Mint with Royal Seal in play, the Royal Seal will be gone before you can use it to put Mint on your deck.<br>If you buy a Mint with treasures such as Talisman or Quarry, the bonus from those cards is no longer applicable after they are trashed, but they still do apply to Mint. You can have as many Treasure cards as you want in play, so you can put Potions in play, for example, to trash them even though they didn’t go into the purchase of Mint. If you buy Mint with at least <img src="assets/Coin11.png"> and 2 buys, you are able to purchase the Mint, trash your Treasures in play, and then buy a Grand Market, even if some of those Treasures were Coppers, as they are not in play anymore. If you buy Mandarin first and top-deck all your treasures, buying Mint will not result in any Treasures being trashed as there are none in play any longer. Since gained cards must come from the supply, Mint cannot be used to gain copies of Spoils or Treasures that were bought from the Black Market deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 514,
		name: 'Monument',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"><br>+1<img src="assets/VP.png"></b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 515,
		name: 'Mountebank',
		set: 'Prosperity',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Each other player may discard a Curse. If they don’t, they gain a Curse and a Copper.',
		help: 'This hits the other players in turn order, which can matter when the Curse or Copper piles are low. Each of the other players in turn chooses whether or not to discard a Curse card, and the players who do not gain a Curse and a Copper from the Supply, putting them into their discard piles. A player hit by Mountebank gains the Curse first, and then the Copper. If either the Curse or Copper pile is empty, players still gain the other card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 516,
		name: 'Peddler',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png"></b><hr>During your Buy phase, this costs <img src="assets/Coin2.png"> less per Action card you have in play, but not less than <img src="assets/Coin0.png">.',
		help: 'Most of the time, this costs <img src="assets/Coin8.png">. It is only during your Buy phase that this costs <img src="assets/Coin2.png"> less per Action card you have in play. This cost applies to all Peddler cards, including ones in hands and decks. It never costs less than <img src="assets/Coin0.png">. If you play King’s Court or Throne Room on an Action, that is just two Action <em>cards</em> you have in play, even though you played the Action’s effect two or three times. Buying cards using the promotional card Black Market is something that does not happen during a Buy phase, so Peddler still costs <img src="assets/Coin8.png"> then.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 517,
		name: 'Quarry',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><hr>While this is in play, Action cards cost <img src="assets/Coin2.png"> less, but not less than <img src="assets/Coin0.png">.',
		help: 'The effect is cumulative; if you play two Quarries during your Buy phase, then King’s Court will only cost <img src="assets/Coin3.png">, rather than the usual <img src="assets/Coin7.png">. It is also cumulative with other effects that modify costs; if you play Worker’s Village in your Action phase, then two Quarries in your Buy phase, Peddler will cost <img src="assets/Coin2.png">. It affects cards everywhere, such as cards in players’ hands. If you use Counterfeit on Quarry, costs do not end up reduced at all: the Quarry ends up in the trash, not in the play area, so its cost-reducing effect is not active. The same is true if you buy Mint, trashing treasures, or gain Mandarin, top-decking treasures, with Quarry in play: costs go back up as soon as Quarry leaves the play area. If you use Crown on Quarry, costs will only be reduced by <img src="assets/Coin2.png">, as there is still only one copy of Quarry in play.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 518,
		name: 'Rabble',
		set: 'Prosperity',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Each other player reveals the top 3 cards of their deck, discards the Actions and Treasures, and puts the rest back in any order they choose.',
		help: 'The other players shuffle if necessary to get 3 cards to reveal, and just reveal what they can if they still have fewer than 3 cards. They discard revealed Treasures and Actions and put the rest back on top in whatever order they want. The order in which cards were returned to your deck is public knowledge.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 519,
		name: 'Royal Seal',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><hr>While this is in play, when you gain a card, you may put that card onto your deck.',
		help: 'If you gain multiple cards with this in play, this applies to each of them - you could put any or all of them on top of your deck. This applies both to cards gained due to being bought, and to cards gained other ways with Royal Seal in play, such as with Hoard. If Royal Seal is no longer in play when you gain a card, such as because it was trashed with Mint or top-decked with Mandarin, you cannot use its ability.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 520,
		name: 'Talisman',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><hr>While this is in play, when you buy a non-Victory card costing <img src="assets/Coin4.png"> or less, gain a copy of it.',
		help: 'Each time you buy a non-Victory card costing <img src="assets/Coin4.png"> or less with this in play, you gain another copy of the bought card. If you have multiple Talismans, you gain an additional copy for each one; if you buy multiple cards for <img src="assets/Coin4.png"> or less, Talisman applies to each one. If there are no copies left, you do not gain one. Talisman only affects buying cards; it does not work on cards gained other ways, such as with Expand. Talisman only cares about the cost of the card when you buy it, not its normal cost; so for example it can get you a Peddler if you have played two Actions this turn, thus lowering Peddler’s cost to <img src="assets/Coin4.png">, or can get you a Grand Market if you have a Quarry in play. When you buy a card from the Black Market deck, you do not get a second copy of it even if Talisman is in play, since there is no second copy in the Supply. Talisman, like most other gainers, cannot be used to gain cards with <img src="assets/Potion.png"> or <img src="assets/Debt.png"> in their cost.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 521,
		name: 'Trade Route',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Trash a card from your hand. +<img src="assets/Coin1.png"> per Coin token on the Trade Route mat.<hr>Setup: Add a Coin token to each Victory Supply pile; move that token to the Trade Route mat when a card is gained from the pile.',
		help: 'You get +1 Buy, and trash a card from your hand if you can. Then you get +<img src="assets/Coin1.png"> per Coin token on the Trade Route mat. This card has setup; at the start of games using it, you put a Coin token on each Victory card pile being used (including Kingdom card piles such as Gardens, and Colonies if used). In the rare cases where there are more than 8 Victory piles, the tokens are not counter-limited; use a replacement. Whenever any player gains the first card from a Victory card pile - whether by buying it or otherwise gaining it - the Coin token is moved to the mat. So if no Victory cards have been gained this game, the mat has no tokens and Trade Route makes +<img src="assets/Coin0.png">; if four Provinces and one Estate have been gained, the mat has two tokens and Trade Route makes +<img src="assets/Coin2.png">. If you are using the promotional card Black Market, and Trade Route is in the Black Market deck, you do the setup for Trade Route. Although Dame Josephine is a Victory card, gaining her does not add a token to the Trade Route mat. Trashing a Victory card with Salt the Earth will not move the Trade Route token on the pile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 522,
		name: 'Vault',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Discard any number of cards for +<img src="assets/Coin1.png"> each.<br>Each other player may discard 2 cards, to draw a card.',
		help: '“Any number” includes zero. You draw two cards first; the cards you just drew can be among the cards you discard. Each other player chooses whether or not to discard 2 cards, then discards 2 cards if they chose to, then draws a card if they did discard 2 cards. A player with just one card can choose to discard it, but won’t draw a card. A player who discards but then has no cards left to draw shuffles in the discards before drawing.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 523,
		name: 'Venture',
		set: 'Prosperity',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png"><br>When you play this, reveal cards from your deck until you reveal a Treasure. Discard the other cards. Play that Treasure.',
		help: 'If you run out of cards before revealing a Treasure, shuffle your discard pile (but not the revealed cards) to get more; if you still don’t find a Treasure, just discard all of the revealed cards. If you do find a Treasure, discard the other cards and play the Treasure. If that Treasure does something when played, do that something. For example if Venture finds you another Venture, you reveal cards again.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 524,
		name: 'Watchtower',
		set: 'Prosperity',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Draw until you have 6 cards in hand.<hr>When you gain a card, you may reveal this from your hand, to either trash that card or put it onto your deck.',
		help: 'When you play this, you draw cards one at a time until you have 6 cards in hand. If you have 6 or more cards in hand already, you don’t draw any cards. When you gain a card, directly afterwards, you may reveal Watchtower from your hand, to either trash the gained card or put it on top of your deck (with Watchtower staying in your hand). You may reveal Watchtower whether you gained the card due to buying it, or gained it some other way, such as with Expand or Mountebank. You may reveal Watchtower each time you gain a card, and each gain is a separate decision; for example if another player plays Mountebank, you may reveal Watchtower to trash both the Copper and Curse, or just one, or trash one and put the other on your deck, and so on. Cards trashed with Watchtower were still gained; they were just immediately trashed afterwards. Trashing a card with Watchtower does not prevent on-gain effects from happening. If a gained card is going somewhere other than to your discard pile, such as a card gained with Mine, you can still use Watchtower to trash it or put it on your deck. Watchtower’s topdecking happens after the gain happens; the card still visits the discard pile, or whatever location it was gained to. Watchtower’s topdecking has the same timing as on-gain effects, so for example you could choose to topdeck Death Cart before gaining the 2 Ruins.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 525,
		name: 'Worker’s Village',
		set: 'Prosperity',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions<br>+1 Buy</b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 601,
		name: 'Fairgrounds',
		set: 'Cornucopia',
		cardType: ['Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Worth <b>2<img src="assets/VP.png"></b> per 5 differently named cards you have (round down).',
		help: 'At the end of the game, this is worth 2<img src="assets/VP.png"> per 5 differently named cards in your deck, rounded down. So if you have 0–4 different cards, it is worth 0<img src="assets/VP.png">; if you have 5–9, it is worth 2<img src="assets/VP.png">; if you have 10–14, it is worth 4<img src="assets/VP.png">; if you have 15–19, it is worth 6<img src="assets/VP.png">; and so on. By default there are only 17 differently named cards available in a game, but sometimes there may be more cards, such as via Young Witch’s setup rule, or due to Tournament. Differently named Shelters, Ruins, and Knights (from Dark Ages) count as different cards. Use 8 Fairgrounds in a game with 2 players, and 12 for a game with 3 or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 602,
		name: 'Farming Village',
		set: 'Cornucopia',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Reveal cards from your deck until you reveal a Treasure or Action card. Put that card into your hand and discard the rest.',
		help: 'Reveal cards from the top of your deck until you reveal a Treasure or Action card. If you fail to find one (even after shuffling), just discard all of the revealed cards. If you do find a Treasure of Action card, put it into your hand, and discard the rest of the revealed cards. You do not choose Treasure or Action - you stop on the first card matching either type.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 603,
		name: 'Fortune Teller',
		set: 'Cornucopia',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Each other player reveals cards from the top of their deck until they reveal a Victory card or a Curse. They put it on top and discard the rest.',
		help: 'Each other player reveals cards from the top of their deck until they reveal a Victory or Curse card. If they do not find one (even after shuffling), they just discard all of the revealed cards. If they do find one, they put the Victory or Curse card on top of their deck, and discards the other revealed cards. You do not choose Victory or Curse – they stop on the first card that matches either type. Cards with Victory as one of multiple types, such as Nobles, are still Victory cards and can be left on top by Fortune Teller.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 604,
		name: 'Hamlet',
		set: 'Cornucopia',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may discard a card for <b>+1 Action</b>.<br>You may discard a card for <b>+1 Buy</b>',
		help: 'First draw a card, and get +1 Action. Then you may either discard one card to get another +1 Action; or you may discard one card to get +1 Buy; or you may discard two cards and get both +1 Action and +1 Buy; or you may discard no cards at all. You only get the extra +1 Action or +1 Buy if you actually discarded a card for it. You cannot discard multiple cards to get multiple +Actions or multiple +Buys.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 605,
		name: 'Harvest',
		set: 'Cornucopia',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Reveal the top 4 cards of your deck, then discard them. +<img src="assets/Coin1.png"> per differently named card revealed.',
		help: 'Reveal the top 4 cards of your deck; if you have fewer than 4 cards (after shuffling), just reveal what you can. Discard the revealed cards, and get +<img src="assets/Coin1.png"> per differently named card revealed. For example if you revealed Copper, Silver, Copper, Estate, that would be +<img src="assets/Coin3.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 606,
		name: 'Horn of Plenty',
		set: 'Cornucopia',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you play this, gain a card costing up to <img src="assets/Coin1.png"> per differently named card you have in play (counting this). If it’s a Victory card, trash this.',
		help: 'This is a Treasure worth <img src="assets/Coin0.png">; you play it in your Buy phase, but do not get any <img src="assets/Coin.png"> for playing it. However, when you play it, you gain a card costing up to <img src="assets/Coin1.png"> per differently named card you have in play. For example, if you have 5 differently named cards in play, you gain a card costing up to <img src="assets/Coin5.png">. This counts itself, other played Treasures, played Actions, and any Duration cards (such as Caravan from Dominion: Seaside) played on your previous turn. It only counts cards currently in play, not ones that were in play but left; for example if you played a Pillage (from Dominion: Dark Ages) this turn, you will have trashed it, so it will not count for Horn of Plenty. If the card you gain is a Victory card, trash Horn of Plenty. You do not have to play Horn of Plenty, and you choose the order that you play Treasures. You do not trash Horn of Plenty if you gain a Victory card some other way while it’s in play (such as by buying one).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 607,
		name: 'Horse Traders',
		set: 'Cornucopia',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin3.png"></b><br>Discard 2 cards<hr>When another player plays an Attack card, you may first set this aside from your hand. If you do, then at the start of your next turn, <b>+1 Card</b> and return this to your hand.',
		help: 'When you play this, you get +1 Buy and +<img src="assets/Coin3.png">, and discard 2 cards from your hand. If you do not have enough cards to discard, just discard what you can; you still get the +1 Buy and +<img src="assets/Coin3.png">. When another player plays an Attack card, before that card does anything, you may reveal this from your hand. If you do, you set this aside, and at the start of your next turn, you return it to your hand and draw a card. While it is set aside, it is not in play or in your hand, and cannot be further revealed to Attacks. Therefore it will only work on one Attack per round of turns. You can reveal it for an Attack and still play it on your next turn. You can reveal multiple Horse Traders to a single Attack. For example, if another player plays Followers, you could reveal and set aside two Horse Traders from your hand, then gain a Curse but discard no cards, as you would only have three cards in hand at that point. Then on your next turn you would pick up the two Horse Traders and also draw two cards. If the game ends while Horse Traders is set aside, it’s returned to its owner’s deck before scoring; this can matter for alt-VP cards such as Gardens.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 608,
		name: 'Hunting Party',
		set: 'Cornucopia',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal your hand. Reveal cards from your deck until you reveal one that isn’t a copy of one in your hand. Put it into your hand and discard the rest.',
		help: 'First you draw a card and get +1 Action. Then you reveal your hand, and reveal cards from your deck until revealing one that does not have the same name as any of the cards in your hand. If you do not find one (even after shuffling), just discard all of the cards revealed from your deck. If you do find a card not matching any cards in your hand, put it into your hand and discard the other cards revealed from your deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 609,
		name: 'Jester',
		set: 'Cornucopia',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Each other player discards the top card of their deck. If it’s a Victory card they gain a Curse; otherwise they gain a copy of the discarded card or you do, your choice.',
		help: 'Each other player (in turn order) discards the top card of their deck; players with no cards (after shuffling) are unaffected. For each player who discarded a card, if it is a Victory card, they gain a Curse, and otherwise, you choose: either that player gains a copy of the card, or you do. If a card is revealed for which there are no copies in the Supply, no-one gains a copy of it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 610,
		name: 'Menagerie',
		set: 'Cornucopia',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal your hand. If the revealed cards all have different names, <b>+3 Cards</b>. Otherwise, <b>+1 Card</b>.',
		help: 'If there are any two or more cards in your hand with the same name, you only draw one card; if there are no matches, you draw three cards. Only the card names matter for this; Copper and Silver are different cards for example, despite both being Treasures. If you have no cards in hand at all after playing Menagerie, then you have no matching cards, and so get +3 Cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 611,
		name: 'Remake',
		set: 'Cornucopia',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Do this twice: Trash a card from your hand, then gain a card costing exactly <img src="assets/Coin1.png"> more than it.',
		help: 'Trash a card from your hand, and gain a card costing exactly <img src="assets/Coin1.png"> more than it; then trash another card from your hand, and gain a card costing exactly <img src="assets/Coin1.png"> more than that card. First trash a card, activating on-trash abilities; then gain a card, activating on-gain abilities; then trash a second card, activating its on-trash abilities; then gain a card, activating on-gain abilities. If you have no cards in hand, you do not trash anything or gain anything; if you have only one card in hand, trash it and gain a card costing <img src="assets/Coin1.png"> more than it. If there is no card at the exact cost needed, you do not gain a card for that trashed card. For example you could use Remake to trash an Estate, gaining a Silver, then trash a Copper, gaining nothing, due to there being no cards costing <img src="assets/Coin1.png"> in the Supply.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 612,
		name: 'Tournament',
		set: 'Cornucopia',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Each player may reveal a Province from their hand. If you do, discard it and gain any Prize (from the Prize pile) or a Duchy, onto your deck. If no-one else does, <b>+1 Card</b> and <b>+<img src="assets/Coin1.png"></b>.',
		help: 'First you get +1 Action. Then each player, including you, may reveal a Province card from their hand. Then, if you revealed a Province, discard it, and you gain a Prize of your choice, or a Duchy, putting whatever card you took on top of your deck. After gaining your card or not, if no other player revealed a Province, you draw a card and get +<img src="assets/Coin1.png">.<br>There are five Prizes, set out at the start of the game. You cannot take Prizes from the trash or from other players; you can only take Prizes that no-one has taken yet this game. You can take any Prize from the Prize pile; you do not have to take the top one. You can look through the Prizes that players have not gained yet at any time. You can take a Duchy instead, whether or not the Prizes have run out. You can opt to take a Duchy even if the Duchy pile is empty, or a Prize even if no Prizes are left; in these cases you gain nothing.<br>So this card will play out one of four ways:<ol><li>if you do not reveal a Province and no-one else does either, you will get +1 Action +1 Card +<img src="assets/Coin1.png">;</li><li>if you reveal a Province and no-one else does, you will gain a Prize or a Duchy and draw it, as well as get +1 Action +<img src="assets/Coin1.png">;</li><li>if you reveal a Province and so does someone else, you will get +1 Action and gain a Prize or a Duchy, which will be on top of your deck;</li><li>if you do not reveal a Province but someone else does, you will just get +1 Action.</li></ol>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 613,
		name: 'Young Witch',
		set: 'Cornucopia',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Discard 2 cards. Each other player may reveal a Bane card from their hand; if they don’t, they gain a Curse.<hr>Setup: Add an extra Kingdom card pile costing <img src="assets/Coin2.png"> or <img src="assets/Coin3.png"> to the Supply. Cards from that pile are Bane cards.',
		help: 'This card causes there to be an extra pile in the Supply, called the Bane pile. The extra pile is just like other Kingdom card piles - it can be bought, it can be gained via cards like Horn of Plenty, it counts for the end game condition.<br>When you play Young Witch, after you draw 2 cards and discard 2 cards, each other player may reveal a Bane card from their hand; each player who does not gains a Curse. This attack hits other players in turn order, which matters when the Curse pile is low. Players may respond to a Young Witch with Reaction cards like Horse Traders or Moat; those happen before Bane cards are revealed.<br>If the Bane is itself a Reaction that leaves your hand when you use its ability (such as Beggar or Caravan Guard), you cannot both use its Reaction effect and block Young Witch; you must pick one. If Young Witch is in the Black Market deck, you do put out a Bane; however, Black Market itself cannot be the Bane in that instance. Split piles (from Empires) can be chosen as the Bane, as long as the top card costs <img src="assets/Coin2.png"> or <img src="assets/Coin3.png">; in that case all cards from that pile can be revealed to protect from Young Witch.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 701,
		name: 'Border Village',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you gain this, gain a cheaper card.',
		help: 'Normally Border Village costs <img src="assets/Coin6.png">, so it comes with a card costing up to <img src="assets/Coin5.png">. If Border Village has a different cost (such as due to Highway) then that affects what you gain with it (though Highway would also affect the other cards). Border Village goes to your discard pile first, then the card you gain with it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 702,
		name: 'Cache',
		set: 'Hinterlands',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin3.png"><hr>When you gain this, gain 2 Coppers.',
		help: 'If there are not two Coppers left, gain as many as you can.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 703,
		name: 'Cartographer',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look at the top 4 cards of your deck. Discard any number of them, then put the rest back on top in any order.',
		help: 'You draw a card first, then look at the top 4 cards of your deck. If there are fewer than 4 cards left (even after shuffling), just look at as many as you can. Discard any number of the cards you looked at - none, all four, or something in-between - and put the rest back on top of your deck in any order. You do not reveal any of the cards, except whatever ends up on top of your discard pile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 704,
		name: 'Crossroads',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Reveal your hand. <b>+1 Card</b> per Victory card revealed. If this is the first time you played a Crossroads this turn, <b>+3 Actions</b>.',
		help: 'First reveal your hand, and draw a card for each Victory card you revealed, if any. The revealed cards all stay in your hand. Then, if this is the first time you played a Crossroads this turn, you get +3 Actions. Subsequent Crossroads this turn will give you cards but not Actions. If you use Throne Room on Crossroads, you will play Crossroads twice, getting +3 Actions the first time but not the second time. Cards with multiple types of which one is the Victory type (such as Mill) are counted as Victory cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 705,
		name: 'Develop',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain two cards onto your deck, with one costing exactly <img src="assets/Coin1.png"> more than it, and one costing exactly <img src="assets/Coin1.png"> less than it, in either order.',
		help: 'First trash a card from your hand, if able. If you trashed a card, gain two cards, one costing exactly <img src="assets/Coin1.png"> more than the trashed card, and one costing exactly <img src="assets/Coin1.png"> less than the trashed card. The gained cards come from the Supply; gain them in either order, resolving any abilities due to gaining them also in that order. If there is no card in the Supply at one of the costs, you still gain the other card if you can. Put the gained cards on top of your deck rather than into your discard pile. If you trash a Copper, which costs <img src="assets/Coin0.png">, you will fail to gain a card costing −<img src="assets/Coin1.png"> (and try to gain a card costing <img src="assets/Coin1.png">). If the card would be gained into your hand, such as Guardian, Ghost Town, Night Watchman, or Den of Sin, it is gained onto your deck instead.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 706,
		name: 'Duchess',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Each player (including you) looks at the top card of their deck and may discard it.<hr>In games using this, when you gain a Duchy, you may gain a Duchess.',
		help: 'When a player plays Duchess, each player secretly looks at the top card of their deck, and either discards it or puts it back, their choice. When a player gains a Duchy in a game with Duchess in the Supply, that player may also gain a Duchess, putting it into their discard pile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 707,
		name: 'Embassy',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+5 Cards</b><br>Discard 3 cards.<hr>When you gain this, each other player gains a Silver.',
		help: 'The Silvers come from the Supply and are put into discard piles. Gaining them is not optional for the other players. If there are not enough Silvers left to go around, deal them out in turn order, starting with the player whose turn it is.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 708,
		name: 'Farmland',
		set: 'Hinterlands',
		cardType: ['Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>2<img src="assets/VP.png"><hr>When you buy this, trash a card from your hand and gain a card costing exactly <img src="assets/Coin2.png"> more than it.',
		help: 'When you buy this, you trash a card from your hand if able, and if you did, you gain a card from the Supply costing exactly <img src="assets/Coin2.png"> more than the trashed card if able. If there are no cards left in your hand to trash, you do not trash or gain a card, and if you trashed a card but there are no cards in the Supply costing exactly <img src="assets/Coin2.png"> more than the trashed card, you do not gain a card. This ability only functions when you buy Farmland, not when you gain it some other way. Revealing Trader to gain a Silver instead of a Farmland when you buy one does not prevent the on-buy effect from happening. Use 8 copies of Farmland for games with 2 players, 12 for games with 3 or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 709,
		name: 'Fool’s Gold',
		set: 'Hinterlands',
		cardType: ['Treasure', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Worth <img src="assets/Coin1.png"> if it’s the first time you played a Fool’s Gold this turn, otherwise worth <img src="assets/Coin4.png">.<hr>When another player gains a Province, you may trash this from your hand, to gain a Gold onto your deck.',
		help: 'The first Fool’s Gold you play in a turn is worth <img src="assets/Coin1.png">, and all further copies are worth <img src="assets/Coin4.png">. So if you play three of them, you get <img src="assets/Coin1.png"> + <img src="assets/Coin4.png"> + <img src="assets/Coin4.png">, or <img src="assets/Coin9.png"> total. Fool’s Gold is also a Reaction. When another player gains a Province, you may trash Fool’s Gold from your hand to gain a Gold from the Supply, putting it onto your deck. You cannot use this ability when you gain a Province, only when another player does.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 710,
		name: 'Haggler',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><hr>While this is in play, when you buy a card, gain a cheaper non-Victory card.',
		help: 'While this is in play, whenever you buy a card, you gain a card that is cheaper than the card you bought, but not a Victory card. For example, you could buy a Province, and gain a Gold via Haggler. Gaining a card is not optional. The gained card comes from the Supply and is put into your discard pile. Haggler only gives you an extra card when you buy a card, not when you gain a card some other way (such as with Haggler itself). If there is no cheaper card available in the Supply (for example, if you buy Copper), you do not gain a card. Using Throne Room on Haggler will not gain you two cards per card bought, as there is still only one copy of Haggler in play. The bonus is cumulative though; if you have three Hagglers in play, you will gain three more cards for each card you buy.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 711,
		name: 'Highway',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><hr>While this is in play, cards cost <img src="assets/Coin1.png"> less, but not less than <img src="assets/Coin0.png">.',
		help: 'This makes all cards cheaper (to a minimum of <img src="assets/Coin0.png">) as long as it is in play. This applies to cards everywhere - cards in the Supply, cards in hand, cards in Decks, and so on. For example if you played Highway, then Develop, trashing a Copper, you could gain an Estate, as Estate would cost <img src="assets/Coin1.png"> while Copper would still cost <img src="assets/Coin0.png">. Using Throne Room on Highway will not make cards cost <img src="assets/Coin2.png"> less, as there is still only one copy of Highway in play. The bonus is cumulative: if you have three Highways in play, all cards cost <img src="assets/Coin3.png"> less (to a minimum of <img src="assets/Coin0.png">). If you use Procession on a Highway, costs do not end up reduced at all: the Highway is trashed and thus leaves the play area, so the cost-reducing effect is no longer active. (This is not the case for Bridge.)',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 712,
		name: 'Ill-Gotten Gains',
		set: 'Hinterlands',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png"><br>When you play this, you may gain a Copper to your hand.<hr>When you gain this, each other player gains a Curse.',
		help: 'When you play this, you may gain a Copper. The Copper comes from the Supply and is put into your hand; you can immediately play it. When you gain Ill-Gotten Gains, each other player gains a Curse. The Curses come from the Supply and go into the players’ discard piles. If there are not enough Curses left to go around, deal them out in turn order, starting with the player to the left of the player who gained Ill-Gotten Gains. Ill-Gotten Gains is not an Attack, and gaining it is not playing an Attack; cards like Moat do not work against it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 713,
		name: 'Inn',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+2 Actions</b><br>Discard 2 cards.<hr>When you gain this, look through your discard pile, reveal any number of Action cards from it (which can include this), and shuffle them into your deck.',
		help: 'When you gain this, you look through your discard pile (something normally not allowed), and shuffle any number of Action cards from it into your deck. You do not have to shuffle any Action cards into your deck. You can shuffle the Inn you just gained into your deck; it is an Action card in your discard pile. You must reveal the Action cards that you choose to shuffle into your deck. It does not matter what order you leave your discard pile in afterwards. If you did not reveal any Actions from your discard pile, you still shuffle your deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 714,
		name: 'Jack of All Trades',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Silver.<br>Look at the top card of your deck; you may discard it.<br>Draw until you have 5 cards in hand.<br>You may trash a non-Treasure card from your hand.',
		help: 'This card does four separate things, in the order listed; you do all of them (the last one is optional). First, gain a Silver from the Supply, putting it into your discard pile. Second, look at the top card of your deck, and either discard it or put it back on top. If this causes you to shuffle, the Silver will be shuffled in. Third, draw cards until you have at least five cards in hand. If you already have five or more cards in hand, you do not draw any cards. Fourth, you may trash a card from your hand that is not a Treasure card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 715,
		name: 'Mandarin',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png"></b><br>Put a card from your hand onto your deck.<hr>When you gain this, put all Treasures you have in play onto your deck in any order.',
		help: 'When you gain this, you put all of your Treasures from play on top of your deck in any order. You do not have to show this order to other players. You have to put all of your Treasures on top; you cannot leave some out. You only put Treasures from play on top of your deck, not unplayed Treasures from your hand. This does not stop you from having the <img src="assets/Coin.png"> you got from playing those Treasures; for example, if you have +1 Buy and play four Golds and buy a Mandarin, you put the Golds on top of your deck, and still have <img src="assets/Coin7.png"> left to spend. Note that Mandarin’s on-gain effect can remove from play Treasures that have while-in-play abilities, canceling their effects. For example, if you have a Quarry in play and then buy a Mandarin, Action card costs will no longer be reduced for any subsequent buys you may make on that turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 716,
		name: 'Margrave',
		set: 'Hinterlands',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Buy</b><br>Each other player draws a card, then discards down to 3 cards in hand.',
		help: 'Drawing a card is not optional for the other players. A player who only has 3 cards or fewer after drawing does not discard.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 717,
		name: 'Noble Brigand',
		set: 'Hinterlands',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><br>When you buy or play this, each other player reveals the top 2 cards of their deck, trashes a revealed Silver or Gold you choose, discards the rest, and gains a Copper if they didn’t reveal a Treasure. You gain the trashed cards.',
		help: 'When you play this, you get +<img src="assets/Coin1.png">. When you play this and also when you buy it, each other player reveals the top two cards of their deck, trashes a Silver or Gold they revealed that you choose, and discards the rest. Each of these players that did not reveal a Treasure at all gains a Copper from the Supply, putting it into their discard pile. Finally, you gain all of the Silvers and Golds trashed this way. This cannot trash any Treasures except Silver or Gold. Gaining a Noble Brigand without buying it does not cause this ability to happen. Noble Brigand is an Attack card, and when you announce it, players can use cards like Moat in response. However, buying a Noble Brigand is not “playing an Attack card,” and so cards like Moat cannot respond to that. Revealing Trader to gain a Silver instead of a Noble Brigand when you buy one does not prevent the on-buy effect from happening.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 718,
		name: 'Nomad Camp',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png"></b><hr>This is gained onto your deck (instead of to your discard pile).',
		help: 'When you gain this card, it goes on top of your deck rather than into your discard pile. This is true whether you gained it due to buying it, or gained it some other way. An effect that moves Nomad Camp somewhere <em>else</em> when it is gained (such as Transmogrify’s) overrides Nomad Camp’s effect, and it goes directly to where the other effect is moving it. An effect that moves Nomad Camp somewhere <em>after</em> it is gained (such as Summon’s) will move it directly from your deck without losing track of it; such cards just look for a card being gained, not a card in the discard pile. If you buy Nomad Camp but reveal a Trader to gain a Silver, the Silver goes in your discard pile, not on top of your deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 719,
		name: 'Oasis',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png"></b><br>Discard a card.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 720,
		name: 'Oracle',
		set: 'Hinterlands',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Each player (including you) reveals the top 2 cards of their deck, and discards them or puts them back, your choice. They choose the order to return them. Afterwards, you draw 2 cards.',
		help: 'First, each player, including you, reveals the top two cards of their deck, and either discards both of them or puts both of them back on top, your choice. A player putting the cards back puts them back in an order they choose, and without needing to reveal that order. Then, you draw two cards. So if you put back the cards you revealed, you will draw them.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 721,
		name: 'Scheme',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>This turn, you may put one of your Action cards onto your deck when you discard it from play.',
		help: 'When you play this, you draw a card, get +1 Action, and set up an effect to happen later in the turn: once, when you discard an Action card from play, you can put it onto your deck. The Action card can be Scheme itself, or any other Action card you have in play, which might have been played before or after you played Scheme. Scheme is cumulative; if you play two Schemes, or Throne Room a Scheme, you will be able to put up to two discarded Action cards onto your deck, and so on. Unlike Herbalist, Scheme still has its clean-up effect even if it is no longer in play by the time you start your clean-up phase; specifically, if you play Procession on Scheme, at the start of clean-up you will be able to put two action cards from play on top of your deck, even though your Scheme has already been trashed and will not be in play itself. Scheme cannot top-deck a Traveller card after it has been exchanged. This is due to the Lose Track rule. Similarly, a Traveller cannot be exchanged if it is top-decked with Scheme.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 722,
		name: 'Silk Road',
		set: 'Hinterlands',
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png"> for every 4 Victory cards you have (round down).',
		help: 'Silk Roads count themselves. Round down; if you have 11 Victory cards, Silk Road is worth 2<img src="assets/VP.png">. Use 8 copies of Silk Road for games with 2 players, 12 for games with 3 or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 723,
		name: 'Spice Merchant',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure from your hand to choose one:<br><b>+2 Cards</b> and <b>+1 Action</b>;<br>or <b>+1 Buy</b> and <b>+<img src="assets/Coin2.png"></b>.',
		help: 'Trashing a Treasure card from your hand is optional.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 724,
		name: 'Stables',
		set: 'Hinterlands',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may discard a Treasure, for <b>+3 Cards</b> and <b>+1 Action</b>.',
		help: 'Discarding a Treasure is optional. If you did discard one, you get +3 Cards and +1 Action. You draw after discarding, so if you have to shuffle to get the 3 cards, you will end up shuffling in the card you discarded.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 725,
		name: 'Trader',
		set: 'Hinterlands',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a Silver per <img src="assets/Coin1.png"> it costs.<hr>When you would gain a card, you may reveal this from your hand, to instead gain a Silver.',
		help: 'When you play this, trash a card from your hand, and if you did, gain a number of Silvers equal to the cost of that card in <img src="assets/Coin.png">. The Silvers come from the Supply and are put into your discard pile. You only gain Silvers if you trashed a card. If you trash a card costing <img src="assets/Coin0.png">, such as Copper, you will gain zero Silvers. You can trash Silver if you want; you will gain three Silvers for it normally. If costs are different, such as due to playing Highway, then Trader will give you a different number of Silvers, based on the current costs. For example if you play Highway and then Trader, trashing an Estate, you will only gain one Silver. If you trash a card with <img src="assets/Potion.png"> in its cost, from Dominion: Alchemy, you do not get anything for the <img src="assets/Potion.png">, just for the <img src="assets/Coin.png"> that the card cost.<br>Trader is also a Reaction. When you gain a card, whether due to buying it or gaining it some other way, you may reveal Trader from your hand to instead gain a Silver from the Supply. If you do this, you gain a Silver, not the card you would have gained; if something would have happened due to gaining the other card, it does not happen, because you did not gain it. For example if you buy Ill-Gotten Gains but use Trader to gain Silver instead, no-one will gain a Curse. However if something happens when you <em>buy</em> a card, that will still happen if you replace gaining the card with gaining Silver. For example you can buy Farmland, trash a card from your hand and gain one costing <img src="assets/Coin2.png"> more, then use Trader to gain Silver rather than Farmland. If the card you were going to gain was not going to your discard pile, the Silver still goes to your discard pile; if the card you were going to gain did not come from the Supply, the Silver still comes from the Supply. If there are no Silvers left in the Supply, you can still reveal Trader when you gain a card and gain nothing instead of the card you would have gained. If you are told to gain a card that has no copies left, you cannot use Trader to instead gain a Silver. If you use Ironworks to try to gain a card, but reveal Trader to gain a Silver instead, the Ironworks does not give you any bonus(es) for the card you didn’t actually gain.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 726,
		name: 'Tunnel',
		set: 'Hinterlands',
		cardType: ['Victory', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '2<img src="assets/VP.png"><hr>When you discard this other than during Clean-up, you may reveal it to gain a Gold.',
		help: 'Tunnel’s Reaction ability functions when you discard it. You cannot simply choose to discard it; something has to let you or make you discard it. This ability functions whether you discard Tunnel on your own turn (such as due to Oasis) or on someone else’s (such as due to Margrave). It functions if Tunnel is discarded from your hand (such as due to Oasis) or from your deck (such as due to Cartographer), or when set aside. If Tunnel would normally not necessarily be revealed (such as when discarding multiple cards to Cartographer), you have to reveal it to get the Gold. Revealing it is optional, even if Tunnel was already revealed for some other reason; you are not forced to gain a Gold. This ability does not function if cards are put into your discard pile without being discarded, such as when you buy a card, when you gain a card directly (such as with Border Village), or when your deck is put into your discard pile (such as with Scavenger from Dominion: Dark Ages). It also does not function during Clean-up, when you normally discard all of your played and unplayed cards. The key thing to look for is a card actually telling you to “discard” cards. The Gold you gain comes from the Supply and is put into your discard pile. You can only reveal a given copy of Tunnel once per discard. That is, you can’t discard one Tunnel, reveal it twice, and get two Golds. Due to Warrior’s wording, if you discard a Tunnel to it, you can first reveal it, gaining a Gold, which then covers up Tunnel, causing Warrior to lose track of it, thus failing to trash Tunnel.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 801,
		name: 'Altar',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin5.png">.',
		help: 'You trash a card from your hand if you can, and then gain a card whether or not you trashed one.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 802,
		name: 'Armory',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card onto your deck costing up to <img src="assets/Coin4.png">.',
		help: 'The card you gain goes directly to the top of your deck. If you reveal a Trader to gain a Silver instead, the Silver will not go on top of your deck, but instead will go on your discard pile as per the usual rules of Trader. If the card would be gained into your hand, such as Guardian, Ghost Town, Night Watchman, or Den of Sin, it is gained onto your deck instead.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 803,
		name: 'Band of Misfits',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Play this as if it were a cheaper Action card in the Supply. This is that card until it leaves play.',
		help: 'When you play this, you pick an Action card from the Supply that costs less than it, and treat this card as if it were the card you chose. Normally this will just mean that you follow the instructions on the card you picked. For example with Village in the Supply, you could play Band of Misfits as Village and get +1 Card +2 Actions. Band of Misfits also gets the chosen card’s cost, name, and types, until it leaves play. If you play Band of Misfits as a card that moves itself somewhere, Band of Misfits will do that; for example Band of Misfits played as Death Cart, choosing to trash itself, will put Band of Misfits into the trash. If you play Band of Misfits as a card that does something when trashed or discarded from play, and that thing happens, Band of Misfits will do that; for example if you play Band of Misfits as Hermit and buy no cards, in Clean-up Band of Misfits will be trashed and you will get a Madman. If you play Band of Misfits as a Duration card, or as a Throne Room on a Duration card, Band of Misfits will stay in play the same way the Duration card or Throne Room would. If you play Band of Misfits multiple times such as via a Throne Room, you will only pick what to play it as the first time; the other times it will be the same thing. Once in play, Band of Misfits is the thing it copied, rather than a Band of Misfits; for example Horn of Plenty (from Cornucopia) will count the Band of Misfits as the card it copied. Band of Misfits can only be played as a visible card in the Supply, and the top card of a pile; it cannot be played as a card from an empty pile, or as a card that has not been uncovered (such as Sir Martin when another Knight is on top of him), or as a non-Supply card (like Mercenary).<br>You first play Band of Misfits, then you play it again as the card you chose to emulate. In this sense, Band of Misfits plays like a Throne Room variant, and one play of Band of Misfits with a successful emulation counts as two Actions played; this matters for Conspirator. As such, bonus tokens on Band of Misfits do give their effect when Band of Misfits is played, since token effects happen before anything else a card does. If there are any bonus tokens on the card Band of Misfits is emulating, those effects occur as well, after the effects from tokens on Band of Misfits. If Band of Misfits is multiplied when tokens are on its pile (and there’s a card for it to emulate), the token effect on Band of Misfits happens only once, since Band of Misfits is only being played once; once it has been played, it is a different card. However, tokens on a card Band of Misfits is emulating do have their effects multiplied. For example, if the +1 Card token is on Band of Misfits and the +<img src="assets/Coin1.png"> token is on Chapel, and you Throne Room a Band of Misfits, emulating Chapel, you would first get +1 Card, then +<img src="assets/Coin2.png">.<br>If you use Throne Room on Band of Misfits, choosing to play Band of Misfits as a self-trashing card (for example, Embargo), the Band of Misfits will be in the trash after the first play as Embargo, meaning it has left play. Throne Room then plays Band of Misfits again (getting token effects again, if there are any), allowing you to make a new choice as to what Band of Misfits should emulate. However, since Band of Misfits is in the trash, you will only get the on-play effects of the emulated card. Similar logic applies to one-shots that do not trash themselves, but still leave play, such as Island, as well as the case where there are no non-empty Action supply piles cheap enough for Band of Misfits to copy. Under this ruling, it is possible for a multiplied Band of Misfits to trash itself (emulating any trashing one-shot), then gain itself back out of the trash (emulating Lurker, or etc.). Along a similar vein, playing Procession on Band of Misfits, choosing Fortress, would allow you to play the same Band of Misfits again afterwards, since it returned to your hand.<br>If you Procession a Band of Misfits, you will gain a <img src="assets/Coin6.png"> Action, since Band of Misfits will be in the trash (and thus cost <img src="assets/Coin5.png">, since it has left play) when Procession checks its cost.<br>Band of Misfits does not play well with Reserve cards. If you play Band of Misfits as a Reserve card it goes to your Tavern mat and stays there; you can’t call it or otherwise recover it because it is now out of your play area and no longer has the abilities of the card it was imitating. Similarly, a Band of Misfits set aside as an Island will not provide any <img src="assets/VP.png">.<br>Effects that care about card names (such as Pilgrimage) will not register Band of Misfits as a Band of Misfits when it is in play, but as whatever it is emulating. The only exceptions to this are if Band of Misfits were affected by Enchantress, and thus prevented from emulating anything, or if there were no valid emulation targets in the Supply.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 804,
		name: 'Bandit Camp',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>Gain a Spoils from the Spoils pile.',
		help: 'Draw a card before gaining a Spoils. The Spoils comes from the Spoils pile, which is not part of the Supply. If there are no Spoils cards left, you do not get one.',
		setup: {
			spoils: true, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 805,
		name: 'Beggar',
		set: 'Dark Ages',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Gain 3 Coppers to your hand.<br>When another player plays an Attack card, you may first discard this to gain 2 Silvers, putting one onto your deck.',
		help: 'When you play this, you gain three Coppers, putting them into your hand. If there are not three Coppers left, just gain as many as you can. When another player plays an Attack card, you may discard this from your hand. If you do, you gain two Silvers, putting one on your deck and the other into your discard pile. If there is only one Silver left, put it on your deck; if there are no Silvers left, you do not gain any.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 806,
		name: 'Catacombs',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Look at the top 3 cards of your deck. Choose one: Put them into your hand; or discard them and <b>+3 Cards</b>.<hr>When you trash this, gain a cheaper card.',
		help: 'When you play this, you look at the top three cards of your deck, and either put all three into your hand, or discard all three and draw the next three cards. If you discard them and have to shuffle to draw three cards, you will shuffle in the cards you discarded and may end up drawing some of them. When you trash Catacombs, you gain a card costing less than it. This happens whether Catacombs is trashed on your turn or someone else’s, and no matter who has the card that trashed it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 807,
		name: 'Count',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Discard 2 cards; or put a card from your hand onto your deck; or gain a Copper.<br>Choose one: +<img src="assets/Coin3.png">; or trash your hand; or gain a Duchy.',
		help: 'This card gives you two separate choices: first you either discard two cards, or put a card from your hand on top of your deck, or gain a Copper; after resolving that, you either get +<img src="assets/Coin3.png">, or trash your hand, or gain a Duchy. For example you might choose to discard two cards, then gain a Duchy. You can choose an option even if you cannot do it. If you trash multiple cards that do something when trashed at once, trash them all, then choose an order to resolve the things that happen due to them being trashed.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 808,
		name: 'Counterfeit',
		set: 'Dark Ages',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png"><br><b>+1 Buy</b><br>When you play this, you may play a Treasure from your hand twice. If you do, trash that Treasure.',
		help: 'You still get any coins that Treasure gave you from playing it, despite trashing it. If you use Counterfeit to play Spoils twice, you will get +<img src="assets/Coin6.png"> (in addition to the <img src="assets/Coin1.png"> from Counterfeit) and return Spoils to the Spoils pile; you will be unable to trash it. If you use Counterfeit to play a Treasure that does something special when you play it (such as another Counterfeit), you will do that thing twice.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 809,
		name: 'Cultist',
		set: 'Dark Ages',
		cardType: ['Action', 'Attack', 'Looter'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each other player gains a Ruins. You may play a Cultist from your hand.<hr>When you trash this, <b>+3 Cards</b>.',
		help: 'When you play this, you draw two cards, then each other player gains a Ruins. Go in turn order starting to your left; each player takes the top Ruins, revealing the next one each time. If the Ruins pile runs out, players stop gaining them at that point. After giving out Ruins, you may play another Cultist from your hand. It can be one you just drew from playing Cultist, or one you already had in your hand. Playing a Cultist this way does not use up any extra Actions you were allowed to play due to cards like Fortress - the original Cultist uses up one Action and that is it.<br>When you trash a Cultist, you draw three cards. This happens whether or not it is your turn, and whether or not the card that causes Cultist to be trashed was yours. If you trash a Cultist while revealing cards, such as to a Knight attack, you do not draw the revealed cards that are about to be discarded.',
		setup: {
			spoils: false, ruins: true, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 810,
		name: 'Death Cart',
		set: 'Dark Ages',
		cardType: ['Action', 'Looter'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin5.png"></b><br>You may trash an Action card from your hand. If you don’t, trash this.<hr>When you gain this, gain 2 Ruins.',
		help: 'If you have no Action card in your hand, you will have to trash the Death Cart, but you can trash the Death Cart whether or not you have an Action card in hand. When you gain a Death Cart, either from buying it or from gaining it some other way, you also gain two Ruins. You just take the top two, whatever they are. If there are not enough Ruins left, take as many as you can. The other players get to see which ones you got. If you use Trader (from Hinterlands) to take a Silver instead of a Death Cart, you do not gain any Ruins. It does not matter whose turn it is; if you use Ambassador (from Seaside) to give Death Carts to each other player, those players also gain Ruins. Passing cards with Masquerade (from Intrigue) does not count as gaining them.',
		setup: {
			spoils: false, ruins: true, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 811,
		name: 'Feodum',
		set: 'Dark Ages',
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png"> per 3 Silvers you have (round down).<hr>When you trash this, gain 3 Silvers.',
		help: 'For example if you have 11 Silvers, your Feodums are worth 3<img src="assets/VP.png"> each. If Feodum is trashed, you gain three Silvers. If there are not enough Silvers left, gain as many as you can. This is a Victory card, so use eight copies for games with two players, or 12 for games with three or more players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 812,
		name: 'Forager',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+1 Buy</b><br>Trash a card from your hand, then +<img src="assets/Coin1.png"> per differently named Treasure in the trash.',
		help: 'Trash a card from your hand if you can. Whether or not you can, you still get +<img src="assets/Coin1.png"> per differently named Treasure in the trash, plus +1 Action and +1 Buy. Multiple copies of the same Treasure card do not increase how much you get. For example if the trash has four Coppers and a Counterfeit, you get +<img src="assets/Coin2.png">. The amount of <img src="assets/Coin.png"> Forager fields is calculated the instant after it trashes a card; do not wait until the Buy phase to check how many Treasures are in the trash.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 813,
		name: 'Fortress',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you trash this, put it into your hand.',
		help: 'If this is trashed, you take it from the trash and put it into your hand. This happens no matter whose turn it is when Fortress is trashed. It is not optional. You still trashed Fortress, even though you get it back; for example if you play Death Cart and choose to trash Fortress, the “if you do” on Death Cart is true, you did trash an Action, so you do not trash Death Cart.<br>When you put Fortress in your hand after trashing it, it is not ‘gained’ - you just put it in your hand. You can’t reveal Trader or Watchtower to do something else with it. If a Possessed player’s Fortress is trashed, the Possessing player chooses whether to put it back in hand immediately, as usual, or to set it aside with other trashed cards, to be returned to the Possessed player’s discard pile at the end of the turn. If you trash a Fortress from the Supply with Lurker, you put the Fortress into your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 814,
		name: 'Graverobber',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Gain a card from the trash costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, onto your deck; or trash an Action card from your hand and gain a card costing up to <img src="assets/Coin3.png"> more than it.',
		help: 'You choose either option, then do as much of it as you can; you can choose an option even if you will not be able to do it. You can look through the trash at any time. If you choose to gain a card from the trash, the other players get to see what it is, and it goes on top of your deck. If there is no card in the trash costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, you will fail to gain one. Cards with <img src="assets/Potion.png"> (from Alchemy) or <img src="assets/Debt.png"> (from Empires) in the cost do not cost from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">. If the card would be gained into your hand, such as Ghost Town, Night Watchman, or Den of Sin, it is gained onto your deck instead. If you choose instead to trash an Action card from your hand, the card you gain is put into your discard pile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 815,
		name: 'Hermit',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Look through your discard pile. You may trash a non-Treasure card from your discard pile or hand. Gain a card costing up to <img src="assets/Coin3.png">.<hr>When you discard this from play, if you didn’t buy any cards this turn, trash this and gain a Madman from the Madman pile.',
		help: 'When you play this, look through your discard pile, and then you may choose to trash a card that is not a Treasure, from either your hand or your discard pile. You do not have to trash a card and cannot trash Treasures. After trashing or not, you must gain a card costing up to <img src="assets/Coin3.png">. Then, when you discard Hermit from play - normally, in Clean-up, after playing it in your Action phase - if you did not buy any cards this turn, you trash Hermit and gain a Madman. The Madman comes from the Madman pile, which is not in the Supply. It does not matter whether or not you gained cards other ways, only whether you did not buy a card. If there are no Madman cards left, you do not gain one. Buying a card with Black Market from the Black Market deck prevents a Madman gain, even if no card is bought during the player’s Buy phase that turn.<hr>Madman is not in the Supply; it can only be obtained via Hermit. When you play it, you get +2 Actions, return it to the Madman pile if you can (this is not optional), and if you did return it, you draw a card per card in your hand. For example if you had three cards in hand after playing Madman, you would draw three cards. Normally nothing will prevent you from returning Madman to the Madman pile, but you may fail to due to playing Madman twice via cards like Throne Room. So, for example, if you Procession a Madman, you will get +2 Actions, return Madman to the Madman pile, draw a card per card in your hand, get another +2 Actions, fail to return Madman and so not draw cards the second time, fail to trash Madman, and then gain an Action card costing exactly <img src="assets/Coin1.png"> if you can. Since Madman is not in the Supply, the Madman pile being empty does NOT count towards the three-pile end-game condition.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 816,
		name: 'Hunting Grounds',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+4 Cards</b><hr>When you trash this, gain a Duchy or 3 Estates.',
		help: 'If you choose the three Estates and there are not three left, just gain as many as you can. If you trash Hunting Grounds and the Duchy pile is empty, you can still choose Duchy (and gain nothing).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 817,
		name: 'Ironmonger',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck; you may discard it. Either way, if it is an…<br>Action card, <b>+1 Action</b><br>Treasure card, <b>+<img src="assets/Coin1.png"></b><br>Victory card, <b>+1 Card</b>',
		help: 'First you draw a card, then you reveal the top card of your deck, then you either discard that card or put it back on top of your deck. Then you get bonuses based on the types of the card you revealed. A card with multiple types gives you all relevant bonuses; if you revealed Harem (from Intrigue), you would both draw a card and get +<img src="assets/Coin1.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 818,
		name: 'Junk Dealer',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png"></b><br>Trash a card from your hand.',
		help: 'You draw before trashing. You have to trash a card from your hand if you can.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 819,
		name: 'Knights',
		set: 'Dark Ages',
		cardType: ['Action', 'Attack', 'Knight'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Shuffle the Knights pile before each game with it. Keep it face down except for the top card, which is the only one that can be bought or gained.',
		help: 'This is a pile in which each card is different. There is the same basic ability on each card, but also another ability unique to that card in the pile, and they all have different names. Follow the rules on Knights in order from top to bottom; Sir Michael causes players to discard before it trashes cards. The ability they have in common is, each other player reveals the top two cards of their deck, trashes one of them that they choose that costs from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, and discards the rest; then, if a Knight was trashed, you trash the Knight you played that caused this trashing. Resolve this ability in turn order, starting with the player to your left. Cards with <img src="assets/Potion.png"> (from Alchemy) or <img src="assets/Debt.png"> (from Empires) in the cost do not cost from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">. The player losing a card only gets a choice if both cards revealed cost from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">. If they both do and one is a Knight but the player picks the other card, that will not cause the played Knight to be trashed. The Knight pile is not a Victory pile, and does not get a counter for Trade Route (from Prosperity) even if Dame Josephine starts on top. If you choose to use the Knights with Black Market (a promotional card), put a Knight directly into the Black Market deck, rather than using the randomizer card.<br>When playing Dame Anna, you may choose to trash zero, one, or two cards from your hand. “If a Knight is trashed by this” only applies to the attack portion of Dame Anna’s ability. If you use the first part of her ability to trash a Knight from your own hand, that won’t make you trash Dame Anna.<br>Sir Martin only costs <img src="assets/Coin4.png">, though the other Knights all cost <img src="assets/Coin5.png">. When Sir Martin is the top card of the pile, it can be gained with an Armory and so on.<br>Sir Michael causes players to discard before it trashes cards.<br>If Sir Vander is trashed, you gain a Gold; this happens whether it is trashed on your turn or someone else’s. The player who had Sir Vander is the one who gains the Gold, regardless of who played the card that trashed it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 820,
		name: 'Marauder',
		set: 'Dark Ages',
		cardType: ['Action', 'Attack', 'Looter'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Spoils from the Spoils pile. Each other player gains a Ruins.',
		help: 'First you gain a Spoils. It comes from the Spoils pile, which is not part of the Supply. If there are no Spoils cards left, you do not get one. Then each other player gains a Ruins. If the Ruins pile runs out, players stop gaining them at that point.',
		setup: {
			spoils: true, ruins: true, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 821,
		name: 'Market Square',
		set: 'Dark Ages',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Buy</b><hr>When one of your cards is trashed, you may discard this from your hand to gain a Gold.',
		help: 'If there is no Gold left in the Supply, you do not gain one. You may discard multiple Market Squares when a single card of yours is trashed.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 822,
		name: 'Mystic',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+<img src="assets/Coin2.png"></b><br>Name a card, then reveal the top card of your deck. If you named it, put it into your hand.',
		help: 'You get +1 Action and +<img src="assets/Coin2.png">. Then name a card (“Copper,” for example - not “Treasure”) and reveal the top card of your deck; if you named the card you revealed, put the revealed card into your hand. If you do not name the right card, put the revealed card back on top. Names need to match exactly for you to get the card; for example Sir Destry and Sir Martin do not match. You do not need to name a card available in the Supply.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 823,
		name: 'Pillage',
		set: 'Dark Ages',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash this. Each other player with 5 or more cards in hand reveals their hand and discards a card that you choose. Gain 2 Spoils from the Spoils pile.',
		help: 'First trash Pillage. Then each other player with 5 or more cards in hand reveals their hand and discards a card of your choice. This happens in turn order, starting with the player to your left. Then you gain two Spoils cards. The two Spoils cards come from the Spoils pile, which is not part of the Supply. If there are no Spoils cards left, you do not get one; if there is only one, you just get one.',
		setup: {
			spoils: true, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 824,
		name: 'Poor House',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 1,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin4.png"></b><br>Reveal your hand. −<img src="assets/Coin1.png"> per Treasure card in your hand. (You can’t go below <img src="assets/Coin0.png">.)',
		help: 'First you get +<img src="assets/Coin4.png">. Then you reveal your hand, and lose <img src="assets/Coin1.png"> per Treasure card in it. You can lose more than <img src="assets/Coin4.png"> this way, but cannot go below <img src="assets/Coin0.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 825,
		name: 'Procession',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may play an action card from your hand twice. Trash it. Gain an Action card costing exactly <img src="assets/Coin1.png"> more than it.',
		help: 'Playing an Action card from your hand is optional. If you do play one, you then play it a second time, then trash it, then gain an Action card costing exactly <img src="assets/Coin1.png"> more than it (even if somehow you failed to trash it). Gaining a card is not optional once you choose to play an Action card, but will fail to happen if no card in the Supply costs the exact amount needed. If something happens due to trashing the card - for example drawing three cards due to trashing a Cultist - that will resolve before you gain a card. This does not use up any extra Actions you were allowed to play due to cards like Fortress - Procession itself uses up one Action and that is it. You cannot play any other cards in between resolving the Procession-ed Action card multiple times, unless that Action card specifically tells you to (such as Procession itself does). If you Procession a Procession, you will play one Action twice, trash it, gain an Action card costing <img src="assets/Coin1.png"> more, then play another Action twice, trash it, gain an Action card costing <img src="assets/Coin1.png"> more, then trash the Procession and gain an Action costing <img src="assets/Coin1.png"> more than it. If you Procession a card that gives you +1 Action, such as Vagrant, you will end up with two Actions to use afterwards, rather than the one you would have left if you just played two Vagrants. If you use Procession on a Duration card, Procession will be discarded in the same turn’s Clean-up, since the Duration card will no longer be in play. This can lead to some problems with tracking, particularly with permanent Durations, such as Hireling. If you play Procession on an Island, the Island is set aside on its mat and is not trashed by Procession. The same applies to Reserve cards, which move themselves to the Tavern mat. You still gain a more expensive card, though. If you play Procession on a Lighthouse, the Lighthouse does not offer you protection from attacks.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 826,
		name: 'Rats',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+ Card<br>+1 Action</b><br>Gain a Rats. Trash a card from your hand other than a Rats (or reveal a hand of all Rats).<hr>When you trash this, <b>+1 Card</b>.',
		help: 'Follow the instructions in order. First draw a card; then gain a Rats; then trash a card from your hand that is not a Rats card. If there are no Rats cards left, you do not gain one. If you have no cards in your hand other than Rats, reveal your hand and you do not trash a card. If Rats is trashed, you draw a card. This happens whether it is your turn or another player’s, and regardless of which player has the card that trashed Rats. There are 20 copies of Rats, rather than the usual 10; the pile starts with all 20, regardless of the number of players.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 827,
		name: 'Rebuild',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Name a card. Reveal cards from your deck until you reveal a Victory card you did not name. Discard the rest, trash the Victory card, and gain a Victory card costing up to <img src="assets/Coin3.png"> more than it.',
		help: 'You can name any card, whether or not it is being used this game or is a Victory card. Then reveal cards from your deck until you reveal a Victory card that is not what you named. If you run out of cards, shuffle your discard pile and continue, without shuffling in the revealed cards. If you run out of cards with no cards left in your discard pile, stop there, discard everything, and nothing more happens. If you did find a Victory card that was not what you named, you discard the other revealed cards, trash the Victory card, and gain a Victory card costing up to <img src="assets/Coin3.png"> more than the trashed card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 828,
		name: 'Rogue',
		set: 'Dark Ages',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>If there are any cards in the trash costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, gain one of them. Otherwise, each other player reveals the top 2 cards of their deck, trashes one of them costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, and discards the rest.',
		help: 'If there is a card in the trash costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, you have to gain one of them; it is not optional. You can look through the trash at any time. The other players get to see what card you took. The gained card goes into your discard pile. Cards with <img src="assets/Potion.png"> (from Alchemy) or <img src="assets/Debt.png"> (from Empires) in the cost do not cost from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">. If there was no card in the trash costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, you instead have each other player reveal the top two cards of their deck, trash one of them of their choice that costs from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png"> (if possible), and discard the rest. Go in turn order, starting with the player to your left. Rogue is an Attack, even if you don’t trash any cards with it, so an opponent can reveal a Reaction (such as Diplomat).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 829,
		name: 'Sage',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal cards from the top of your deck until you reveal one costing <img src="assets/Coin3.png"> or more. Put that card into your hand and discard the rest.',
		help: 'If you run out of cards while revealing cards, shuffle your discard pile (not including the revealed cards) and continue. If you run out of cards to reveal and have no cards in your discard pile, stop there; discard everything revealed, and you do not get a card. If you find a card costing <img src="assets/Coin3.png"> or more, put that one into your hand and discard the rest. For example you might reveal Copper, then Copper, then Curse, then Province; Province costs <img src="assets/Coin8.png">, so you would stop there, put Province in your hand, and discard the two Coppers and the Curse.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 830,
		name: 'Scavenger',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>You may put your deck into your discard pile. Look through your discard pile and put one card from it onto your deck.',
		help: 'Putting your deck into your discard pile is optional, but putting a card from your discard pile on top of your deck is not; you do it unless there are no cards in your discard pile. Putting your deck into your discard pile will not trigger Tunnel (from Hinterlands).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 831,
		name: 'Squire',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><br>Choose one: <b>+2 Actions</b>; or <b>+2 Buys</b>; or gain a Silver.<hr>When you trash this, gain an Attack card.',
		help: 'When you play this, you get +<img src="assets/Coin1.png">, and your choice of either +2 Actions, +2 Buys, or gaining a Silver. If Squire is trashed somehow, you gain an Attack card. You can gain any Attack card available in the Supply, but if no Attack card is available, you do not gain one. You cannot gain Mercenary by trashing a Squire, since Mercenary is not in the supply.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 832,
		name: 'Storeroom',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Discard any number of cards, then draw that many. Then discard any number of cards for +<img src="assets/Coin1.png"> each.',
		help: 'Discard any number of cards from your hand, and draw as many cards as you discarded. Then, discard any number of cards - which could include cards you just drew - and you get +<img src="assets/Coin1.png"> per card you discarded that time.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 833,
		name: 'Urchin',
		set: 'Dark Ages',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Each other player discards down to 4 cards in hand.<hr>When you play another Attack card with this in play, you first may trash this, to gain a Mercenary from the Mercenary pile.',
		help: 'When you play this, you draw a card and get +1 Action, then each other player discards down to 4 cards in hand. Players who already have 4 or fewer cards in hand do not do anything. While Urchin is in play, when you play another Attack card, before resolving it, you may trash the Urchin. If you do, you gain a Mercenary. The Mercenary comes from the Mercenary pile, which is not in the Supply. If there are no Mercenaries left you do not gain one. If you play the same Urchin twice in one turn, such as via Procession, that does not let you trash it for a Mercenary. If you play two different Urchins however, playing the second one will let you trash the first one. You do not gain a Mercenary if you trash Urchin some other way.<hr>Mercenary is not in the Supply; it can only be obtained via Urchin. When you play it, you may trash 2 cards from your hand. If you do, you draw two cards, get +<img src="assets/Coin2.png">, and each other player discards down to 3 cards in hand. Players who already have three or fewer cards in hand do nothing. Players responding to this Attack with cards like Beggar must choose to do so before you decide whether or not to trash two cards from your hand. If you play this with only one card in hand, you may choose to trash that card, but then will fail the “if you do” and will not draw cards and so on. If the cards you trash do things when trashed, first trash them both, then choose what order to resolve the things they do when trashed.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 834,
		name: 'Vagrant',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it’s a Curse, Ruins, Shelter, or Victory card, put it into your hand.',
		help: 'You draw a card before revealing your top card. If the top card of your deck is a Curse, Ruins, Shelter, or Victory card, it goes into your hand; otherwise it goes back on top.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 835,
		name: 'Wandering Minstrel',
		set: 'Dark Ages',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>Reveal the top 3 cards of your deck. Put the Action cards back in any order and discard the rest.',
		help: 'First draw a card, then reveal the top 3 cards of your deck, shuffling your discard pile if there are not enough cards in your deck. If there still are not enough after shuffling, just reveal what you can. Put the revealed Action cards on top of your deck in any order, and discard the other cards. If you didn’t reveal any Action cards, no cards will be put on top.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 901,
		name: 'Advisor',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top 3 cards of your deck. The player to your left chooses one of them. Discard that card and put the rest into your hand.',
		help: 'If you do not have the full three cards (after shuffling), just reveal what you can. No matter how many you revealed, the player to your left chooses one for you to discard, and the remaining cards go into your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 902,
		name: 'Baker',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Coffers</b><hr>Setup: Each player gets <b>+1 Coffers</b>.',
		help: 'You draw a card, get +1 Action, and add a token to your Coffers mat. In games using this card, each player starts the game with a token on their Coffers. This includes games using the promotional card Black Market in which Baker is in the Black Market deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 903,
		name: 'Butcher',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Coffers</b><br>You may trash a card from your hand. If you do, remove any number of tokens from your Coffers and gain a card, costing up to the cost of the trashed card plus <img src="assets/Coin1.png"> per token removed.',
		help: 'First add two tokens to your Coffers mat. Then you may trash a card from your hand and remove any number of tokens from your Coffers. You can remove the tokens you just added. The number of tokens you remove can be zero.<br>If you trashed a card, you gain a card costing up to the cost of the trashed card plus the number of tokens you removed. For example you could trash an Estate and remove six tokens to gain a Province, or you could trash another Butcher and remove zero tokens to gain a Duchy.<br>Removing tokens for this ability doesn’t give you <img src="assets/Coin.png"> to spend, it just changes what cards you can gain with this ability.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 904,
		name: 'Candlestick Maker',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+1 Buy<br>+1 Coffers</b>',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 905,
		name: 'Doctor',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Name a card. Reveal the top 3 cards of your deck. Trash the matches. Put the rest back in any order.<hr>When you buy this, you may overpay for it. For each <img src="assets/Coin1.png"> you overpaid, look at the top card of your deck; trash it, discard it, or put it back.',
		help: 'When you play this, you name a card, reveal the top three cards of your deck, trash each of those cards that has that name, and put the other cards back on your deck in any order. If there are fewer than three cards (after shuffling), just reveal as many as you can.<br>You do not have to name a card being used this game.<br>When you buy this, for each extra <img src="assets/Coin1.png"> you pay over the cost, you look at the top card of your deck, and either trash it, discard it, or put it back on top. If you overpay more than <img src="assets/Coin1.png">, you may do different things for each card you look at, and you will look at the same card again if you put it back on top. For example if you bought Doctor for <img src="assets/Coin7.png">, you would look at the top card four times; you might end up first trashing a Copper, then discarding a Province, then putting a Silver back on top, then putting that Silver back on top again.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 906,
		name: 'Herald',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it’s an Action, play it.<hr>When you buy this, you may overpay for it. For each <img src="assets/Coin1.png"> you overpaid, look through your discard pile and put a card from it onto your deck.',
		help: 'When you play this, first draw a card and get +1 Action, then reveal the top card of your deck. If it is an Action card, play it; this is not optional. Playing the Action card does not “use up” one of your Action plays for the turn. If Herald plays a Duration card (such as Caravan from Dominion: Seaside), the Herald is still discarded normally at end of turn.<br>When you buy this, you put one card from your discard pile on top of your deck for each extra <img src="assets/Coin1.png"> you pay over the cost. For example, if you buy Herald for <img src="assets/Coin6.png">, you will put two cards from your discard pile on top of your deck. This card lets you look through your discard pile; normally you cannot. You cannot look through your discard pile first to see how much you want to overpay, and once you overpay you must put the appropriate number of cards on top of your deck if possible. If you overpay enough to put more cards on your deck than there are cards in your discard pile, you just put all of your discard pile onto your deck. You may not look through your discard pile if you buy Herald without overpaying for it. Herald’s bottom is an on-buy effect, which triggers after buying but before gaining. When looking through the discard pile, the bought Herald is not there yet, so you cannot put it on your deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 907,
		name: 'Journeyman',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Name a card. Reveal cards from your deck until you reveal 3 cards without that name. Put those cards into your hand and discard the rest.',
		help: 'This draws you three cards that are not a particular card. First name a card. It does not have to be a card being used this game. Then reveal cards from the top of your deck until you have revealed three cards that are not the named card, or have revealed all of your cards (after shuffling). Put the revealed cards that were not the named card into your hand and discard the rest.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 908,
		name: 'Masterpiece',
		set: 'Guilds',
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin1.png"></b><br>When you buy this, you may overpay for it. For each <img src="assets/Coin1.png"> you overpaid, gain a Silver.',
		help: 'When you buy this, you gain a Silver for each extra <img src="assets/Coin1.png"> you pay over the cost. For example if you buy a Masterpiece for <img src="assets/Coin6.png">, you will gain three Silvers.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 909,
		name: 'Merchant Guild',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png"></b><hr>While this is in play, when you buy a card, <b>+1 Coffers</b>.',
		help: 'When you play this, you get +1 Buy and +<img src="assets/Coin1.png">. While this is in play, any time you buy a card you also add a token to your Coffers mat. This ability is cumulative; if you have two Merchant Guilds in play, each card you buy will get you two tokens. However if you play a Merchant Guild multiple times but only have one in play, such as with Throne Room, you will only get one token when you buy a card.<br>Remember that you may only remove tokens from your Coffers prior to buying anything, so you will not be able to immediately use the added tokens.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 910,
		name: 'Plaza',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>You may discard a Treasure for <b>+1 Coffers</b>.',
		help: 'First you draw a card and get +2 Actions; then you may discard a Treasure. You can discard the card you drew if it is a Treasure. If you discarded a Treasure, you add a token to your Coffers mat.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 911,
		name: 'Soothsayer',
		set: 'Guilds',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Each other player gains a Curse, and if they did, draws a card.',
		help: 'If there is no Gold left, you do not gain one.<br>If there are not enough Curses left to go around, deal them out in turn order, starting with the player to your left. Each player who gained a Curse draws a card. This is not optional. A player who did not gain a Curse, whether due to the Curses running out or due to some other reason, does not draw a card.<br>A player who uses Watchtower (from Dominion: Prosperity) to trash the Curse did gain a Curse and so draws a card; a player who uses Trader (from Dominion: Hinterlands) to gain a Silver instead did not gain a Curse and so does not draw a card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 912,
		name: 'Stonemason',
		set: 'Guilds',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain 2 cards each costing less than it.<br>When you buy this, you may overpay for it. If you do, gain 2 Action cards each costing the amount you overpaid.',
		help: 'When you play this, trash a card from your hand, and gain two cards each costing less than the card you trashed. Trashing a card is not optional. Gaining cards is not optional if you trashed a card. If you do not have any cards left in your hand to trash, you do not gain any cards. The two cards you gain can be different or the same. For example you could trash a Gold to gain a Duchy and a Silver. If there are no cheaper cards in the Supply (for example if you trash a Copper), you do not gain any. The cards you gain are gained one at a time; this may matter with cards that do something when gained, such as Inn from Dominion: Hinterlands.<br>When you buy this, you may choose to overpay for it. If you do, you gain two Action cards each costing exactly the amount you overpaid. The Action cards can be different or the same. For example, if you buy Stonemason for <img src="assets/Coin6.png">, you could gain two Heralds. If there are no cards with the appropriate cost in the Supply, you do not gain one. Overpaying with a Potion (from Dominion: Alchemy) will let you gain cards with Potion in the cost. If you choose not to overpay, you will not gain any cards from that ability; it is not possible to use it to gain Action cards costing <img src="assets/Coin0.png">. Cards gained through the on-play effect or overpay effect are chosen and gained separately. For example, if there is one Crossroads left in the pile, and you overpay by <img src="assets/Coin2.png"> for Stonemason, you can’t choose 2 Crossroads, then try to gain 2 Crossroads, failing to get the second one. You choose to gain 1 Crossroads, and then Crossroads is no longer an option for you to choose, forcing you to choose a different Action costing <img src="assets/Coin2.png"> as your second gain.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 913,
		name: 'Taxman',
		set: 'Guilds',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure from your hand. Each other player with 5 or more cards in hand discards a copy of it (or reveals they can’t). Gain a Treasure onto your deck costing up to <img src="assets/Coin3.png"> more than it.',
		help: 'You may trash a Treasure card from your hand. This is optional. If you do trash a Treasure, each other player with at least five cards in hand discards a copy of it from their hand if they can, or reveals a hand with no copies of it, and you gain a Treasure costing up to <img src="assets/Coin3.png"> more than the trashed Treasure, putting it on top of your deck. You do not have to gain a more expensive Treasure; you may gain a Treasure with the same cost, or a cheaper Treasure. You have to gain a card if you trashed one though, if possible.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1001,
		name: 'Amulet',
		set: 'Adventures',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn, choose one: +<img src="assets/Coin1.png">; or trash a card from your hand; or gain a Silver.',
		help: 'You choose something when you play it, and again at the start of your next turn; the choices may be the same or different.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1002,
		name: 'Artificer',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png"></b><br>Discard any number of cards. You may gain a card onto your deck costing exactly <img src="assets/Coin1.png"> per card discarded.',
		help: 'First you get +1 Card, +1 Action, and +<img src="assets/Coin1.png">. Then you discard any number of cards. You may choose not to discard any cards. Then you may gain a card costing exactly <img src="assets/Coin1.png"> per card discarded. For example if you discarded two cards; you may gain a card costing <img src="assets/Coin2.png">; if you discard no cards, you may gain a card costing <img src="assets/Coin0.png">. The gained card comes from the Supply and is put on top of your deck. You may choose not to gain a card, even if you discard cards. If the card would be gained into your hand, such as Guardian, Ghost Town, Night Watchman, or Den of Sin, it is gained onto your deck instead.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1003,
		name: 'Bridge Troll',
		set: 'Adventures',
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Each other player takes their –<img src="assets/Coin1.png"> token. Now and at the start of your next turn: <b>+1 Buy</b><hr>While this is in play, cards cost <img src="assets/Coin1.png"> less on your turns, but not less than <img src="assets/Coin0.png">.',
		help: 'This gives each other player his −<img src="assets/Coin1.png"> token, which will cause those players to get <img src="assets/Coin1.png"> less the next time they get <img src="assets/Coin.png">. It also gives you +1 Buy both on the turn you play it and on your next turn. While Bridge Troll is in play, on your turns only, cards cost <img src="assets/Coin1.png"> less, but not less than <img src="assets/Coin0.png">. This applies to all cards everywhere, including cards in the Supply, cards in hand, and cards in Decks. For example if you have Bridge Troll in play and play Raze, trashing Estate, Estate will only cost <img src="assets/Coin1.png">, so you’ll only look at one card rather than two. This is cumulative; if you have two Bridge Trolls in play from last turn and play another Bridge Troll this turn, all cards will cost <img src="assets/Coin3.png"> less this turn (to a minimum of <img src="assets/Coin0.png">).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: true, minusDraw: false
		}
	},
	{
		id: 1004,
		name: 'Caravan Guard',
		set: 'Adventures',
		cardType: ['Action', 'Duration', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>At the start of your next turn, <b>+<img src="assets/Coin1.png"></b>.<hr>When another player plays an Attack card, you may first play this from your hand.<br>(+1 Action has no effect if it’s not your turn.)',
		help: 'This gives you +1 Card and +1 Action when you play it, and then +<img src="assets/Coin1.png"> at the start of your next turn after that. This card has a Reaction ability that lets you play it when another player plays an Attack card. Playing this during another player’s turn is similar to playing it during your own turn - you put Caravan Guard into play, get +1 Card and +1 Action, and will get +<img src="assets/Coin1.png"> at the start of your next turn - the very next turn you take. However getting +1 Action during someone else’s turn does not do anything for you; it does not let you play other Action cards during that player’s turn. Similarly if a token gives you +<img src="assets/Coin1.png"> or +1 Buy during another player’s turn, that still does not let you buy cards during that player’s turn (although +<img src="assets/Coin1.png"> can cancel the −<img src="assets/Coin1.png"> token given out by Bridge Troll). The +1 Action (or potential other +’s) does not carry over to your next turn either. After reacting with a Caravan Guard, you can use another one, even one you just drew, and also can use other Reactions, even ones you just drew; you keep going until you have no more Reactions you wish to respond to the Attack with. If you call Royal Carriage on Caravan Guard after you play it as a Reaction during another player’s turn, it will stay in play until your next turn and give you an extra +<img src="assets/Coin1.png"> at that time, as you would expect. However, if you call Coin of the Realm, it will be discarded during the Clean-up phase of the Attacking player’s turn, and the +2 Actions it will give you don’t do anything for you, as +Action doesn’t mean anything when it’s not your turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1005,
		name: 'Coin of the Realm',
		set: 'Adventures',
		cardType: ['Treasure', 'Reserve'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png"><br>When you play this, put it on your Tavern mat.<hr>Directly after you finish playing an Action card, you may call this, for <b>+2 Actions</b>.',
		help: 'This is a Treasure worth <img src="assets/Coin1.png">. You play it in your Buy phase, like other Treasures. When you play it, it goes on your Tavern mat. It produces <img src="assets/Coin1.png"> that turn but is no longer in play. You can call it after resolving playing an Action card, for +2 Actions (which will let you play further Action cards). Move the Coin of the Realm into play when you call it, but it does not give you <img src="assets/Coin1.png"> that turn, it just gives +2 Actions. It is discarded that turn with your other cards in play. Coin of the Realm can be called on a Crown played during your Buy phase, though this is usually not meaningful.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1006,
		name: 'Distant Lands',
		set: 'Adventures',
		cardType: ['Action', 'Reserve', 'Victory'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Put this on your Tavern mat.<hr>Worth 4<img src="assets/VP.png"> if on your Tavern mat at the end of the game<br>(otherwise worth 0<img src="assets/VP.png">).',
		help: 'This is a Victory card. Use 8 for games with 2 players, or 12 for games with 3 or more players. This is also an Action card; when you play it, you put it on your Tavern mat. It will stay there the rest of the game; there is no way to call it. At the end of the game, Distant Lands is worth 4<img src="assets/VP.png"> if it is on your mat, or 0<img src="assets/VP.png"> if it is not. It counts as part of your deck either way (for example it can contribute to how many <img src="assets/VP.png"> a Gardens is worth).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1007,
		name: 'Dungeon',
		set: 'Adventures',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Now and at the start of your next turn: <b>+2 Cards</b>, then discard 2 cards.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1008,
		name: 'Duplicate',
		set: 'Adventures',
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Put this on your Tavern mat.<hr>When you gain a card costing up to <img src="assets/Coin6.png">, you may call this, to gain a copy of that card.',
		help: 'When you play this, you put it on your Tavern mat. It stays on your mat until you call it. You can call it when gaining a card costing up to <img src="assets/Coin6.png">, and gain another copy of that card. The gained card comes from the Supply and is put into your discard pile; Duplicate cannot gain non-supply cards such as Teacher. Duplicate can be called during other players’ turns when you gain cards; for example, another player might buy Messenger and choose to have each player gain an Estate, and you could Duplicate that Estate. You can call multiple Duplicates to gain multiple copies of the same card. Duplicate is discarded during the Clean-up of the turn you call it, whether or not it is your turn. Cards with <img src="assets/Potion.png"> or <img src="assets/Debt.png"> in their cost cannot be Duplicated.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1009,
		name: 'Gear',
		set: 'Adventures',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Set aside up to 2 cards from your hand face down (under this). At the start of your next turn, put them into your hand.',
		help: 'You may set aside zero, one, or two cards from your hand. Put them face down under the Gear; you may look at them. They do not have to be cards you drew with Gear. If you set aside zero cards, Gear will be discarded the same turn you played it; if you set aside one or two cards, you put them into your hand at the start of your next turn, and Gear is discarded at the end of that turn. If you Throne Room a Gear, but only set aside cards once, you still leave Throne Room in play. The same logic applies to other Throne Room variants.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1010,
		name: 'Giant',
		set: 'Adventures',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Turn your Journey token over (it starts face up). If it’s face down, +<img src="assets/Coin1.png">. If it’s face up, +<img src="assets/Coin5.png">, and each other player reveals the top card of his deck, trashes it if it costs from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, and otherwise discards it and gains a Curse.',
		help: 'At the start of the game, place your Journey token (the one with the boot) face up. When you play this, you turn the Journey token over. Then, if it is face down, you get +<img src="assets/Coin1.png"> and nothing more happens. If it is face up, you get +<img src="assets/Coin5.png"> and the attack part happens. The attack resolves in turn order, starting with the player to your left. The player reveals the top card of his deck, and either trashes it if it costs from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, or discards it and gains a Curse otherwise. Shuffle if necessary to produce a card to reveal. If there are no cards in the players’ deck and discard pile, they gain a Curse. Cards with <img src="assets/Potion.png"> in the cost (from Alchemy) do not cost from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">. Cards with an asterisk or + by the cost that cost from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png"> (such as Teacher, or Masterpiece from Guilds) do get trashed. Players can respond to Giant being played with Reactions that respond to Attacks (such as Caravan Guard), even if Giant will only be producing +<img src="assets/Coin1.png"> this time.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: true, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1011,
		name: 'Guide',
		set: 'Adventures',
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to discard your hand and draw 5 cards.',
		help: 'When you play this, you get +1 Card and +1 Action, and put it on your Tavern mat. It stays on your mat until you call it at the start of one of your turns. If multiple things can happen at the start of your turn, you can do them in any order. When you call Guide, it moves from the mat into play, and you discard your hand, then draw 5 cards. You discard it that turn with your other cards in play.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1012,
		name: 'Haunted Woods',
		set: 'Adventures',
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Until your next turn, when any other player buys a card, they put their hand onto their deck in any order.<br>At the start of your next turn:<br><b>+3 Cards</b>',
		help: 'Playing this sets up two effects for the future: you will draw 3 cards at the start of your next turn; and until then, other players will put the rest of their hand on their deck whenever they buy a card. A player may not have any cards left in hand when buying a card; typically cards left in hand will include Victory cards, Curses, and unplayed Actions. A player may intentionally avoid playing Treasures and Actions in order to take advantage of having to put his hand on his deck. Players who do not buy any cards can discard their hand normally. Buying Events is not buying cards and so does not trigger this. If you play Haunted Woods and then take an extra turn immediately, such as with Mission or Outpost (from Seaside), you will draw the 3 cards at the start of that turn and discard Haunted Woods that turn, and other players will never be affected by it. If you want to use a Reaction card like Moat against Haunted Woods, you have to use it right when Haunted Woods is played. Gaining cards without buying them first does not trigger Haunted Woods’ effect. Gaining happens after buying, so when-gain effects (such as Inn’s deck-shuffling) occur after you’ve top-decked your hand. When-buy effects happen at the same time as Haunted Woods’ effects; the Attacked player chooses in which order to resolve them.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1013,
		name: 'Hireling',
		set: 'Adventures',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of each of your turns for the rest of the game:<br><b>+1 Card</b><br>(This stays in play)',
		help: 'After playing this, you draw an extra card at the start of each of your turns for the rest of the game. Hireling stays in play for the rest of the game to track this. If you use Disciple (or a similar card, like Throne Room) to play Hireling twice, you will draw two extra cards each turn, and Disciple will also stay in play for the rest of the game. If a Hireling is put into play at the start of your turn, such as by Summon or Prince, you will draw a card. If used with Procession, Hireling goes to the trash, Procession is discarded from play in Clean-up phase, and you will draw two extra cards per turn, even with Hireling in the trash.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1014,
		name: 'Lost City',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+2 Actions</b><hr>When you gain this, each other player draws a card.',
		help: 'When you gain this, each other player draws a card. This applies whether you bought it or gained it some other way.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1015,
		name: 'Magpie',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it’s a Treasure, put it into your hand. If it’s an Action or Victory card, gain a Magpie.',
		help: 'If the top card of your deck is a Treasure, it goes into your hand. If the card is not a Treasure, leave it on top of your deck. If the card is an Action card or Victory card, you gain a Magpie; once the Magpie pile is empty, revealing an Action or Victory card will not get you anything. If you reveal a Harem (from Intrigue), you both put it into your hand and gain a Magpie, since it is both a Treasure and a Victory card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1016,
		name: 'Messenger',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png"></b><br>You may put your deck into your discard pile.<hr>When this is your first buy in a turn, gain a card costing up to <img src="assets/Coin4.png">, and each other player gains a copy of it.',
		help: 'When you play this, you get +1 Buy, +<img src="assets/Coin2.png">, and may optionally put your deck into your discard pile. This is not discarding cards and does not trigger Tunnel (from Hinterlands). When you buy Messenger, if it is the first thing you bought that turn (card or Event), you gain a card costing up to <img src="assets/Coin4.png"> from the Supply, putting it into your discard pile, and then each other player in turn order also gains a copy of that card. If the Supply runs out of copies of the card, further players do not get anything. Revealing Trader to gain a Silver instead of a Messenger when you buy one does not prevent the on-buy effect from happening. However, revealing a Trader to gain a Silver instead of the other card that comes with Messenger <em>does</em> prevent each other player from gaining that card. Messenger’s on-buy effect happens before you actually gain the Messenger. This can matter if you choose Messenger for everyone to gain, or if everyone gains a card like Border Village (allowing other players to gain an extra Messenger before you do), and there aren’t enough copies of Messenger left in the pile to fulfill all Messenger gains.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1017,
		name: 'Miser',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Put a Copper from your hand onto your Tavern mat; or +<img src="assets/Coin1.png"> per Copper on your Tavern mat.',
		help: 'You may choose to put a Copper from your hand on your mat even if you have no Coppers in hand; nothing will happen. You may also choose to get +<img src="assets/Coin1.png"> per Copper on your mat if there are no Coppers on your mat; nothing will happen. Putting a Copper from your hand on your mat is not trashing it; Coppers on your mat are not in play, but count as part of your deck when scoring at the end.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1018,
		name: 'Page',
		set: 'Adventures',
		cardType: ['Action', 'Traveller'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><hr>When you discard this from play, you may exchange it for a Treasure Hunter.',
		help: 'When you discard this from play, you may return it to its pile and take a Treasure Hunter, putting it into your discard pile.<hr>Treasure Hunter gives you +1 Action and +<img src="assets/Coin1.png"> when played, and you gain a Silver for each card that was gained by the player to your right during their most recent turn. This counts all cards gained, not just bought cards. For example if the player to your right played Amulet, gaining a Silver, then bought a Duchy, you would gain two Silvers. Gaining Silver(s) is not optional. The gained Silvers are put into your discard pile. Cards “the player to your right gained” include non-Supply cards, like Spoils or Prizes, as well as cards gained from the Trash, such as through Graverobber. On the other hand, Traveller upgrades are exchanged for, not gained, and do not count for this.<hr>When Warrior is played, each other player, in turn order, discards the appropriate number of cards from the top of his deck, trashing the ones costing <img src="assets/Coin3.png"> or <img src="assets/Coin4.png">. If Warrior is your only Traveller in play, each other player will only discard and potentially trash one card. If you, for example, have a Peasant, a Fugitive, and the Warrior in play, each other player would discard and potentially trash three cards. Cards are only trashed if they cost exactly <img src="assets/Coin3.png"> or exactly <img src="assets/Coin4.png">. Cards with <img src="assets/Potion.png"> in the cost (from Alchemy) do not cost exactly <img src="assets/Coin3.png"> or <img src="assets/Coin4.png">. Cards with an asterisk in the cost (such as Warrior) or + in the cost (such as Masterpiece from Guilds) may be trashed by Warrior (if costing <img src="assets/Coin3.png"> or <img src="assets/Coin4.png">). Champion and Teacher are not Travellers. If an opponent discards a Tunnel, they can reveal it, gaining a Gold, which then covers up Tunnel, causing Warrior to lose track of it, thus failing to trash the Tunnel.<hr>Hero lets you gain any Treasure being used that game. The Treasure comes from the Supply and is put into your discard pile. Hero cannot be used to gain Treasures not in the Supply, such as Diadem and Spoils.<hr>Champion stays in play for the rest of the game once played. For the rest of the game, it provides you with an additional +1 Action each time you play an Action, which means you will always be able to play all of your Actions; and it protects you from all further Attacks played (whether you want the protection or not). Champion only protects you from Attacks played after it; for example it does not stop a previously played Swamp Hag from giving you Curses that turn. Champion does not protect you from Possession as that card is not an Attack card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1019,
		name: 'Peasant',
		set: 'Adventures',
		cardType: ['Action', 'Traveller'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png"></b><hr>When you discard this from play, you may exchange it for a Soldier.',
		help: 'When you discard this from play, you may return it to its pile and take a Soldier, putting it into your discard pile.<hr>Soldier gives +<img src="assets/Coin2.png">, and then an additional +<img src="assets/Coin1.png"> per other Attack card you have in play. Then each other player with 4 or more cards in hand discards a card. So for example if you play Soldier, then another Soldier, and have an opponent with 5 cards in hand, you will get +<img src="assets/Coin2.png"> and that opponent will discard a card, then you will get +<img src="assets/Coin2.png"> and an extra +<img src="assets/Coin1.png"> while that opponent discards again. Soldier only cares about Attack cards in play, not Attack cards played that turn; for example using Disciple on Soldier will not produce an extra +<img src="assets/Coin1.png">, because there is no other Attack card in play. Duration Attacks played on the previous turn are Attack cards in play and so do count for Soldier.<hr>When you play Fugitive, you draw 2 cards, get +1 Action, and then discard a card from your hand. The discarded card does not have to be one of the cards just drawn.<hr>Disciple lets you play an Action card twice, exactly like Throne Room, but you then gain an additional copy of that card. Playing an Action card from your hand is optional. If you do play one, you play it twice, then gain a copy of it if possible; gaining the copy is not optional once you have played it. The copy comes from the Supply and is put into your discard pile; if the Action is a non-Supply card, such as Fugitive, you can play it twice, but do not gain a copy of it. This does not use up any extra Actions you were allowed to play due to cards like Port - Disciple itself uses up one Action and that is it. You cannot play any other cards in between resolving the Discipled Action card multiple times, unless that Action card specifically tells you to (such as Disciple itself does). If you Disciple a card that gives you +1 Action, such as Artificer, you will end up with 2 Actions to use afterwards, rather than the one you would have left if you just played two Artificers. If you use Disciple on a Duration card, Disciple will stay in play until the Duration card is discarded.<hr>When you play Teacher, put it on your Tavern mat. It stays on your mat until you call it at the start of one of your turns. If multiple things can happen at the start of your turn, you can do them in any order. When you call Teacher, it moves from the mat into play, and you choose your +1 Action, +1 Card, +1 Buy, or +<img src="assets/Coin1.png"> token, and move it to an Action Supply pile that you have no tokens on. The token on the pile means that every time you play a card from that pile, you will get the corresponding bonus - if you put your +1 Action token on a pile, you will get an extra +1 Action when playing a card from that pile. This cannot put a token on a pile you have tokens on, including the tokens Teacher places as well as your −<img src="assets/Coin2.png"> cost token and Trashing token. This can put a token on a pile that other players have tokens on. Other things can put tokens on a pile you put a token on with Teacher; it is just Teacher itself that cannot put a token on a pile you have a token on. It is okay if the pile has a token that does not belong to you or anyone, such as an Embargo token (from Seaside) or coin token for Trade Route (from Prosperity). It is okay if you have an Estate token on a card set aside from that pile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: true, plusAction: true, plusBuy: true, plusOne: true,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1020,
		name: 'Port',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you buy this, gain another Port.',
		help: 'When you buy a Port, you gain another Port. If you gain a Port some other way, you do not get an extra Port. There are 12 Ports in the pile; use all 12.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1021,
		name: 'Ranger',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Turn your Journey token over (it starts face up). Then if it’s face up, <b>+5 Cards</b>.',
		help: 'At the start of the game, place your Journey token (the one with the boot) face up. When you play this, you get +1 Buy, and turn the token over. Then if it is face down, nothing more happens. If it is face up, you draw 5 cards. So, every other time you play a Ranger, you will draw 5 cards. It does not matter what turned over the Journey token; you could turn it face down with Giant, then face up with Ranger.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: true, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1022,
		name: 'Ratcatcher',
		set: 'Adventures',
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this to trash a card from your hand.',
		help: 'When you play this, you get +1 Card and +1 Action, and put it on your Tavern mat. It stays on your mat until you call it at the start of one of your turns. If multiple things can happen at the start of your turn, you can do them in any order. When you call Ratcatcher, you move it from the mat into play, and you trash a card from your hand. Ratcatcher is discarded that turn with your other cards in play.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1023,
		name: 'Raze',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Trash this or a card from your hand. Look at one card from the top of your deck per <img src="assets/Coin1.png"> the trashed card costs. Put one of them into your hand and discard the rest.',
		help: 'If you trash a card costing <img src="assets/Coin0.png"> with this, you do not get any cards. If you trash a card costing <img src="assets/Coin1.png"> or more, you look at a number of cards from the top of your deck equal to the cost in <img src="assets/Coin.png"> of the trashed card, take one into your hand, and discard the rest. For example if you trash an Estate, you look at the top two cards of your deck, put one into your hand, and discard the other one. You can trash the Raze itself; normally it costs <img src="assets/Coin2.png">, so you would look at two cards. Costs may be affected by cards like Bridge Troll. Raze is unaffected by the −1 Card token; if it is on top of your deck, replace it after resolving Raze. You may make either choice — trash the played card or trash a card from your hand — even if the played card is not in play anymore (e.g. from playing it twice with Throne Room) or you have no cards in your hand. You won’t look at any cards if the choice you made causes you to not trash a card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1024,
		name: 'Relic',
		set: 'Adventures',
		cardType: ['Treasure', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png"><br>When you play this, each other player puts their –1 Card token on their deck.',
		help: 'This is a Treasure worth <img src="assets/Coin2.png">. You play it in your Buy phase, like other Treasures. When you play it, you also make each other player put his −1 Card token on his deck, which will cause those players to draw one less card the next time they draw cards. Relic is an Attack despite not being an Action; it can be blocked with Moat and responded to with Caravan Guard and so on. A player responding to Relic with Caravan Guard first plays Caravan Guard, including drawing a card, and then puts his −1 Card token on his deck.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: true
		}
	},
	{
		id: 1025,
		name: 'Royal Carriage',
		set: 'Adventures',
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Put this on your Tavern mat.<hr>Directly after you finish playing an Action card, if it’s still in play, you may call this, to replay that Action.',
		help: 'When you play this, you get +1 Action and put it on your Tavern mat. It stays on your mat until you call it, directly after resolving a played Action card that is still in play. Royal Carriage cannot respond to Actions that are no longer in play, such as a Reserve card that was put on the Tavern mat, or a card that trashed itself (like a Raze used to trash itself). When called, Royal Carriage causes you to replay the card you just played. You can call multiple Royal Carriages to replay the same Action multiple times (provided the Action is still in play). You completely resolve the Action before deciding whether or not to use Royal Carriage on it. If you use Royal Carriage to replay a Duration card, Royal Carriage will stay in play until the Duration card is discarded from play, to track the fact that the Duration card has been played twice. Although Reserve cards are in play after being called, calling one does not count as “resolving” it for the purposes of Royal Carriage; you can’t call a Reserve card and then call Royal Carriage to replay it. Similarly, with Duration cards, you call Royal Carriage after resolving the Duration card’s on-play effects; you don’t wait for the next turn. Royal Carriage can be called on a Crown played during your Buy phase, and a Werewolf played during your Night phase.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1026,
		name: 'Storyteller',
		set: 'Adventures',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+<img src="assets/Coin1.png"></b><br>Play up to 3 Treasures from your hand. Then pay all of your <img src="assets/Coin.png"> (including the <img src="assets/Coin1.png"> from this) and draw a card per <img src="assets/Coin1.png"> you paid.',
		help: 'This lets you play Treasures in your Action phase. They go into play and produce <img src="assets/Coin.png">, just like Treasures played in the Buy phase. Then Storyteller turns all of your <img src="assets/Coin.png"> into +Cards; for each <img src="assets/Coin1.png"> you have you lose the <img src="assets/Coin1.png"> and get +1 Card. For example if you had <img src="assets/Coin4.png">, you lose the <img src="assets/Coin4.png"> and draw 4 cards. This makes you lose all <img src="assets/Coin.png"> you have so far that turn, including the <img src="assets/Coin.png"> you get from playing the Treasures, the +<img src="assets/Coin1.png"> Storyteller gives you directly, and any <img src="assets/Coin.png"> you made earlier in the turn. You can track that the Treasures have been “spent” by putting them under the Storyteller. <img src="assets/Potion.png">, produced by Potions from Alchemy, is not <img src="assets/Coin.png"> and so is not lost and does not get you any cards. Treasures that play other Treasures (Venture and Counterfeit) allow you to play more than three Treasures for Storyteller.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1027,
		name: 'Swamp Hag',
		set: 'Adventures',
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Until your next turn, when any other player buys a card, they gain a Curse.<br>At the start of your next turn: +<img src="assets/Coin3.png">',
		help: 'Playing this sets up two effects for the future: you will get +<img src="assets/Coin3.png"> at the start of your next turn; and until then, other players will gain a Curse whenever they buy a Card. Players who buy multiple cards will gain a Curse per card bought; players who do not buy any cards will not get any Curses. This is cumulative; if you play two Swamp Hags, and the player after you plays one, then the player after that will get three Curses with any card bought. This does not affect cards gained other ways, only bought cards. Buying Events is not buying cards and so does not trigger this. If you play Swamp Hag and then take an extra turn immediately, such as with Mission or Outpost (from Seaside), you will get +<img src="assets/Coin3.png"> at the start of that turn and discard Swamp Hag that turn, and other players will never be affected by it. If you want to use a Reaction card like Moat against Swamp Hag, you have to use it right when Swamp Hag is played. Gaining happens after buying, so when-gain effects (such as Ill-Gotten Gains’ Curse giving) occur after you’ve gained a Curse. If there’s only one Curse left when you buy an Ill-Gotten Gains after an opponent played a Swamp Hag, only you receive a Curse. When-buy effects happen at the same time as Swamp Hag’s effects; the Attacked player chooses in which order to resolve them. This can matter in the case of Doctor’s overpay, if it triggers a reshuffle.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1028,
		name: 'Transmogrify',
		set: 'Adventures',
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to trash a card from your hand, and gain a card to your hand costing up to <img src="assets/Coin1.png"> more than it.',
		help: 'When you play this, you get +1 Action and put it on your Tavern mat. It stays on your mat until you call it, at the start of one of your turns. If multiple things can happen at the start of your turn, you can do them in any order. When you call Transmogrify, it moves from the mat into play, and you trash a card from your hand, then gain a card costing up to <img src="assets/Coin1.png"> more than the trashed card. The gained card comes from the Supply and is put into your hand; if you had no cards to trash, you do not gain one. Transmogrify is discarded that turn with your other cards in play. You may trash a card to gain a card costing <img src="assets/Coin1.png"> more, or the same amount, or less; you may trash a card to gain a copy of the same card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1029,
		name: 'Treasure Trove',
		set: 'Adventures',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png"><br>When you play this, gain a Gold and a Copper.',
		help: 'This is a Treasure worth <img src="assets/Coin2.png">. You play it in your Buy phase, like other Treasures. When you play it, you gain a Copper and a Gold from the Supply, putting them into your discard pile. If one of those piles is empty, you still gain the other card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1030,
		name: 'Wine Merchant',
		set: 'Adventures',
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin4.png"><br>+1 Buy</b><br>Put this on your Tavern mat.<hr>At the end of your Buy phase, if you have at least <img src="assets/Coin2.png"> unspent, you may discard this from your Tavern mat.',
		help: 'When you play this, you get +1 Buy and +<img src="assets/Coin4.png">, and put it on your Tavern mat. It stays on your mat until the end of one of your Buy phases in which you have <img src="assets/Coin2.png"> or more that you didn’t spend. At that point you can discard Wine Merchant from your mat. If you have multiple Wine Merchants on your mat, you don’t need <img src="assets/Coin2.png"> per Wine Merchant, just <img src="assets/Coin2.png"> total. Unlike other Reserve cards, you don’t recover Wine Merchant from your Tavern mat by calling it; it goes straight to your discard pile, not your play area.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: true, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1101,
		name: 'Archive',
		set: 'Empires',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Set aside the top 3 cards of your deck face down (you may look at them). Now and at the start of your next two turns, put one into your hand.',
		help: 'You look at three cards, and get one now, one next turn, and one the turn after that. Put the set-aside cards under Archive. If you play two Archives, they get separate sets of cards. If you Throne Room an Archive, keep the sets of cards separate; you get one from each each turn. If there are fewer than three cards, just set aside what you can, and Archive will run out of cards faster and still be discarded the turn it has no cards left.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1102,
		name: 'Capital',
		set: 'Empires',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin6.png"><br><b>+1 Buy</b><hr>When you discard this from play, take <img src="assets/Debt6.png">, and then you may pay off <img src="assets/Debt.png">.',
		help: 'When you discard this from play (normally, in the Clean-up phase of the turn you played it), you get <img src="assets/Debt6.png">, and then get an extra opportunity to pay off <img src="assets/Debt.png"> with <img src="assets/Coin.png">, right then. You do not get the <img src="assets/Debt6.png"> if you did not discard it from play - for example, if you trash it due to Counterfeit (from Dominion: Dark Ages). You only get <img src="assets/Debt6.png"> per copy of Capital discarded; for example if you use Crown to play Capital twice, you still only get <img src="assets/Debt6.png"> when you discard it from play.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1103,
		name: 'Castles',
		set: 'Empires',
		cardType: ['Victory', 'Castle'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Sort the Castle pile by cost, putting the more expensive Castles on the bottom. For a 2-player game, use only one of each Castle. Only the top card of the pile can be gained or bought.',
		help: 'In games with more than 2 players, an extra copy of 4 of the Castles (Humble, Small, Opulent, King’s) are added to the pile, still in ascending order of cost.<hr>Humble Castle and King’s Castle count themselves.<hr>Small Castle gains you the top Castle, whichever one that is. You are allowed to choose to trash a Castle from your hand, even if you don’t have any Castles in your hand, though this means you will not gain a Castle.<hr>Haunted Castle works whether you buy it or gain it some other way, provided that it is your turn.<hr>You can pick either option on Sprawling Castle regardless of how many Duchies and Estates are left in the piles.<hr>Grand Castle counts both Victory cards in play - such as an Opulent Castle - and Victory cards in your hand. You receive +1<img src="assets/VP.png"> from all Victory cards in play, including your opponents’.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1104,
		name: 'Catapult/Rocks',
		set: 'Empires',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><br>Trash a card from your hand. If it costs <img src="assets/Coin3.png"> or more, each other player gains a Curse. If it’s a Treasure, each other player discards down to 3 cards in hand.',
		help: 'If the card you trash is a treasure, each other player discards down to 3 cards in hand; if the card you trash costs <img src="assets/Coin3.png"> or more, each other player gains a Curse; if it is both (e.g. Silver), both things happen; if it is neither, neither thing happens. If you have no cards in hand left to trash, neither thing happens. If you Catapult an Inherited Estate, the Estate is in the trash and, thus, no longer yours when Catapult checks its type; therefore when you trash an Estate Inheriting Crown, the other players would not discard down to 3 cards.<hr>When you gain or trash Rocks you gain a Silver. If it is your Buy phase, the Silver goes onto your deck, otherwise it goes into your hand. If it is another player’s turn, then it is not your Buy phase, so the Silver goes to your hand. The Silver is gained directly to your deck or hand; it does not visit your discard pile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1105,
		name: 'Chariot Race',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top card of your deck and put it into your hand. The player to your left reveals the top card of their deck. If your card costs more, <b>+<img src="assets/Coin1.png"></b> and <b>+1<img src="assets/VP.png"></b>.',
		help: 'You and the player to your left reveal your top cards; yours goes into your hand, theirs goes back on their deck. If your card costs more you get +<img src="assets/Coin1.png"> and +1<img src="assets/VP.png">; you can put the <img src="assets/VP.png"> token on the Chariot Race to remind you that it made +<img src="assets/Coin1.png"> this turn. If it is a tie, your card did not cost more. With <img src="assets/Debt.png">, your card costs more only if both <img src="assets/Coin.png"> and <img src="assets/Debt.png"> amounts are larger, or one is larger and the other the same. For example Fortune (<img src="assets/Coin8.png"><img src="assets/Debt8.png">) costs more than Overlord (<img src="assets/Debt8.png">), but Overlord does not cost more than Silver, and Silver does not cost more than Overlord. If either player has no card to reveal, your card does not cost more. Cards that cost <img src="assets/Potion.png"> (from Alchemy) cost more than cards that cost only <img src="assets/Coin.png"> with a <img src="assets/Coin.png"> cost equal to or less than the <img src="assets/Potion.png">-costing card’s <img src="assets/Coin.png"> cost, and do not cost more or less than cards with <img src="assets/Debt.png"> in their cost.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1106,
		name: 'Charm',
		set: 'Empires',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you play this, choose one: <b>+1 Buy</b> and <b>+<img src="assets/Coin2.png"></b>; or the next time you buy a card this turn, you may also gain a differently named card with the same cost.',
		help: 'These are cumulative, and each Charm does not have to gain a different card, just a different card from the one bought. For example if you play two Charms and buy a Forum, you could gain two Duchies. The card gained from Charm is gained before gaining the card you bought, which may matter when cards do things when gained. For example if you buy Villa and gain Rocks via Charm, you will first gain a Silver to your deck due to Rocks, then get +1 Action and return to your Action phase due to Villa. The costs have to be identical; for example if you play Charm and buy Overlord, you can gain City Quarter, which also costs <img src="assets/Debt8.png">, but not Fortune, which costs <img src="assets/Coin8.png"><img src="assets/Debt8.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1107,
		name: 'City Quarter',
		set: 'Empires',
		cardType: ['Treasure'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Reveal your hand. <b>+1 Card</b> per Action card revealed.',
		help: 'Cards with multiple types that include Action, such as Crown, are Actions.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1108,
		name: 'Crown',
		set: 'Empires',
		cardType: ['Action', 'Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If it’s your Action phase, you may play an Action from your hand twice.<br>If it’s your Buy phase, you may play a Treasure from your hand twice.',
		help: 'If you play this in your Action phase, you play an Action card from your hand, then play the same card again; this does not use up any extra Actions you have. If you play this in your Buy phase, you play a Treasure from your hand, then play it again; this does not use up any Actions at all. Crown can be used to play another Crown in either your Action or Buy phase, causing you to either play two more Actions twice each, or two more Treasures twice each. If you play Crown in your Action phase via something that lets you play Treasures (like Storyteller from Dominion: Adventures), Crown will still play an Action card twice. The start of your turn is considered part of your Action phase. This can matter if you play Crown using Prince or Summon (either of which requires cost reduction) or a card set aside by Prince or Summon (such as Throne Room or Herald). As such, a Princed or Summoned Crown can never play Treasures, even if you have no Actions in your hand, and no other start-of-turn effects to resolve.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1109,
		name: 'Encampment/Plunder',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+2 Actions</b><br>You may reveal a Gold or Plunder from your hand. If you do not, set this aside, and return it to the Supply at the start of Clean-up.',
		help: 'Revealing a Plunder or Gold is optional. When you return Encampment to the Supply, it goes on top of its pile, potentially covering up a Plunder. If you cannot return Encampment to the Supply (e.g. you bought it from the Black Market), then if it is set aside it will stay there but will still count as one of your cards at the end of the game.<hr>Plunder gives you a <img src="assets/VP.png"> token every time you play it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1110,
		name: 'Enchantress',
		set: 'Empires',
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Until your next turn, the first time each other player plays an Action card on their turn, they get <b>+1 Card</b> and <b>+1 Action</b> instead of following its instructions.<br>At the start of your next turn,<br><b>+2 Cards</b>',
		help: 'Players revealing a card like Moat when this is played have to do it right then, not later, even though the attack will not hurt them until their turn. The first Action each other player plays, just on their next turn, will give them +1 Card +1 Action instead of what it would have normally done. This does not affect abilities below a dividing line; they still function. For example a player playing Sacrifice would get +1 Card +1 Action and not do anything Sacrifice normally does; a player playing Groundskeeper would get +1 Card +1 Action and would still get <img src="assets/VP.png"> for gaining Victory cards. It can be helpful to turn the affected card sideways, to remember that it did not do what it normally does. Enchantress does not affect card abilities from cards played on previous turns; for example if an opponent plays Enchantress and you have an Archive out from a previous turn, on your turn you will first get a card from your Archive as normal, and then the first Action card actually played on that turn will be affected by Enchantress. If Enchantress affects a Crown played in a Buy phase, its player gets +1 Card +1 Action, but has no way to use the +1 Action, since it is their Buy phase (but it might matter e.g. if the player buys Villa). If a player under the effect of an Enchantress takes one or more extra turns, the first Action played on each of those turns is also turned into a cantrip. The Enchantress effect does not stack. Enchantress does not change anything about the card, just prevents on-play instructions on the card from being carried out properly. So cards that are Enchanted can still prompt Reactions, such as Moat, still carry out all Adventures tokens effects, such as from Training, and can be replayed by Royal Carriage to carry out their normal card text.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1111,
		name: 'Engineer',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 0,
			debt: 4,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png">.<br>You may trash this.<br>If you do, gain a card costing up to <img src="assets/Coin4.png">.',
		help: 'Engineer cannot gain copies of itself, or any other card with <img src="assets/Potion.png"> or <img src="assets/Debt.png"> in the cost. When you play it, you gain a card, then may trash Engineer to gain a second card (which can be the same as the first or different).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1112,
		name: 'Farmers’ Market',
		set: 'Empires',
		cardType: ['Action', 'Gathering'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>If there are 4<img src="assets/VP.png"> or more on the Farmers’ Market Supply pile, take them and trash this. Otherwise, add 1<img src="assets/VP.png"> to the pile and then +<img src="assets/Coin1.png"> per 1<img src="assets/VP.png"> on the pile.',
		help: 'The first time this is played, it produces +<img src="assets/Coin1.png"> (and +1 Buy), the next time +<img src="assets/Coin2.png">, then +<img src="assets/Coin3.png">, then +<img src="assets/Coin4.png">, then the next time the player takes the 4<img src="assets/VP.png"> (and gets no +<img src="assets/Coin.png">), then the next time it is back to +<img src="assets/Coin1.png">. This still functions if the Farmers’ Market pile is empty. If you get this card from Black Market, there is no supply pile for Farmers’ Market, therefore no victory tokens will accumulate. This also means you will get no coins for playing Farmers’ Market, making it no better than a Ruined Market.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1113,
		name: 'Forum',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Action</b><br>Discard 2 cards.<hr>When you buy this, <b>+1 Buy</b>.',
		help: 'For example, with <img src="assets/Coin13.png"> and only one Buy, you could buy a Forum, getting +1 Buy, then buy a Province.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1114,
		name: 'Gladiator/Fortune',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Reveal a card from your hand. The player to your left may reveal a copy from their hand. If they do not, +<img src="assets/Coin1.png"> and trash a Gladiator from the Supply.',
		help: 'If there are no Gladiators in the Supply, you cannot trash one, but that does not stop you from getting the +<img src="assets/Coin1.png">. If you have no cards in hand, the player to your left cannot reveal a copy of the card you revealed, so you will get the +<img src="assets/Coin1.png"> and trash a Gladiator.<hr>Fortune lets you double the amount of <img src="assets/Coin.png"> you have. You only double your <img src="assets/Coin.png"> the first time you play a Fortune in a turn; any further times only get you +1 Buy. Fortune does not take into consideration <img src="assets/Coin.png"> that has been produced, but already spent this turn, such as via Storyteller; Fortune only doubles the <img src="assets/Coin.png"> that you currently have when you play it. Coin tokens can be played before playing Fortune. Debt can be repayed after playing Fortune.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1115,
		name: 'Groundskeeper',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><hr>While this is in play, when you gain a Victory card, +1<img src="assets/VP.png">.',
		help: 'This can trigger multiple times in a turn, for cards gained different ways. For example you could play Groundskeeper, then play Engineer gaining an Estate and taking 1<img src="assets/VP.png">, then in your Buy phase buy a Duchy taking another +1<img src="assets/VP.png">. Multiple Groundskeepers are cumulative. If you Crown a Groundskeeper, there is still just one Groundskeeper in play, so you only get +1<img src="assets/VP.png"> per Victory card gained.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1116,
		name: 'Legionary',
		set: 'Empires',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png"></b><br>You may reveal a Gold from your hand. If you do, each other player discards down to 2 cards in hand, then draws a card.',
		help: 'Players wishing to respond to the Attack (e.g. with Moat) must do so before you choose whether or not to reveal a Gold.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1117,
		name: 'Overlord',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'Play this as if it were an Action card in the Supply costing up to <img src="assets/Coin5.png">. This is that card until it leaves play.',
		help: 'When you play this, you pick an Action card from the Supply that costs up to <img src="assets/Coin5.png">, and treat this card as if it were the card you chose. Normally this will just mean that you follow the instructions on the card you picked. For example, with Village in the Supply, you could play Overlord as Village and get +1 Card +2 Actions. Overlord also gets the chosen card\'s cost, name, and types, until it leaves play. If you play Overlord as a card that moves itself somewhere, such as to the trash or the Supply, Overlord will do that; for example Overlord played as Encampment will be set aside and return to the Overlord pile at the start of Clean-up. If you play Overlord as a Duration card, or as a Throne Room on a Duration card, Overlord will stay in play the same way the Duration card or Throne Room would. If you play an Overlord multiple times such as via a Throne Room, you will only pick what to play it as the first time; the other times it will be the same thing. Once in play, Overlord is the thing it copied, rather than an Overlord; for example Colonnade will produce <img src="assets/VP.png"> if you buy a copy of that card, but not if you buy an Overlord. Overlord can only be played as a visible card in the Supply, and the top card of a pile; it cannot be played as a card from an empty pile, or as a card that has not been uncovered from a split pile, or as a card from a split pile that has been bought out, or as a non-Supply card (like Mercenary from Dominion: Dark Ages). Overlord cannot be played as Crown during a Buy phase, since Overlord itself is not a Treasure and so cannot be played in Buy phases. Procession used on an Overlord would try to gain a card costing <img src="assets/Coin1.png"><img src="assets/Debt8.png"> (and fail, since no such card exists).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1118,
		name: 'Patrician/Emporium',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it costs <img src="assets/Coin5.png"> or more, put it into your hand.',
		help: 'Cards costing <img src="assets/Debt.png"> do not cost <img src="assets/Coin5.png"> or more unless they also have a <img src="assets/Coin.png"> cost of <img src="assets/Coin5.png"> or more. So Fortune does but City Quarter does not.<hr>Emporium counts Action cards in play, including Action cards played this turn, Duration cards in play from previous turns, and Reserve cards (from Dominion: Adventures) called into play this turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1119,
		name: 'Royal Blacksmith',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: '<b>+5 Cards</b><br>Reveal your hand; discard the Coppers.',
		help: 'You discard both Coppers that were in your hand already, and Coppers drawn in the +5 Cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1120,
		name: 'Sacrifice',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. If it’s an...<br>Action card, <b>+2 Cards</b>, <b>+2 Actions</b><br>Treasure card, <b>+<img src="assets/Coin2.png"></b><br>Victory card, <b>+2<img src="assets/VP.png"></b>',
		help: 'If you trash a card with multiple types, you get all relevant bonuses; for example if you trash Crown, you get +2 Cards, +2 Actions, and +<img src="assets/Coin2.png">. If you trash a card with no relevant types (such as Curse), you get nothing.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1121,
		name: 'Settlers/Bustling Village',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look through your discard pile. You may reveal a Copper from it and put it into your hand.',
		help: 'You can look through your discard pile even if you know there are no Coppers or Settlers in it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1122,
		name: 'Temple',
		set: 'Empires',
		cardType: ['Action', 'Gathering'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png"></b><br>Trash from 1 to 3 differently named cards from your hand. Add <b>1<img src="assets/VP.png"></b> to the Temple Supply pile.<hr>When you gain this, take the <img src="assets/VP.png"> from the Temple Supply pile.',
		help: 'You get +1<img src="assets/VP.png">, trash 1, 2, or 3 cards with different names from your hand (for example a Copper and an Estate, but not two Coppers), then add 1<img src="assets/VP.png"> (from the supply) to the Temple pile. Gaining a Temple (whether buying it or otherwise) gives you all the <img src="assets/VP.png"> that has accumulated on the pile. The pile gets <img src="assets/VP.png"> even if it is empty; this only matters if there is a way to return a Temple to the pile (like Ambassador from Dominion: Seaside) or a way to gain one from the trash (like Graverobber from Dominion: Dark Ages).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1123,
		name: 'Villa',
		set: 'Empires',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions<br>+1 Buy<br>+<img src="assets/Coin1.png"></b><hr>When you gain this, put it into your hand, <b>+1 Action</b>, and if it’s your Buy phase return to your Action phase.',
		help: 'If you gain this during your Action phase, such as with Engineer, you will put the Villa into your hand and get +1 Action (letting you, for example, play the Villa). If you gain this during your Buy phase (such as by buying it), you will put the Villa into your hand, get +1 Action, and return to your Action phase. This will let you play more Action cards (such as the Villa); when you are done with that you will return to your Buy phase, from the beginning - you can play more Treasures (and Arena will trigger again). If you buy Villa, that uses up your default Buy for the turn, however playing Villa will give you +1 Buy and so let you buy another card in your second Buy phase. If you gain this during another player’s turn, you will put the Villa into your hand and get +1 Action, but will have no way to use that Action, since it is not your turn. It is possible to return to your Action phase multiple times in a turn via buying multiple Villas. Returning to your Action phase does not cause “start of turn” abilities to repeat; they only happen at the start of your turn.<br>Villa visits the discard pile before being put in your hand. This means that when you gain it with a card like Artificer (which changes gain location), Villa will visit the top of your deck before going into your hand, while if gained by a card like Replace (which moves cards after gaining them), you will have a choice between the multiple gain locations. Gaining a Villa during your Buy phase does not “end” your Buy phase in a technical sense; therefore Wine Merchant cannot be discarded from your Tavern mat when you return to your Action phase. If you buy a Villa, then don’t play it, it is possible to enter the Buy phase with 0 Buys. You may play treasures, but unless your treasures give +1 Buy, you won’t be able to buy anything.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1124,
		name: 'Wild Hunt',
		set: 'Empires',
		cardType: ['Action', 'Gathering'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+3 Cards</b> and add <b>1<img src="assets/VP.png"></b> to the Wild Hunt Supply pile; or gain an Estate, and if you do, take the <img src="assets/VP.png"> from the pile.',
		help: 'If the Estate pile is empty, you can choose that option but will not get the tokens. Wild Hunt still functions normally if the Wild Hunt pile is empty.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1201,
		name: 'Bard',
		set: 'Nocturne',
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Receive a Boon.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1202,
		name: 'Blessed Village',
		set: 'Nocturne',
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you gain this, take a Boon. Receive it now or at the start of your next turn.',
		help: 'You see the Boon before deciding to resolve it immediately or at the start of your next turn. If you save it for next turn, it sits in front of you until then (or until the end of that turn if it says to keep it out until Clean-up).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1203,
		name: 'Cemetery',
		set: 'Nocturne',
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>2<img src="assets/VP.png"></b><hr>When you gain this, trash up to 4 cards from your hand.<hr>Heirloom: Haunted Mirror',
		help: 'In games using this, replace one of your starting Coppers with a Haunted Mirror.<br>When you gain a Cemetery, trash from zero to four cards from your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1204,
		name: 'Changeling',
		set: 'Nocturne',
		cardType: ['Night'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash this. Gain a copy of a card you have in play.<hr>In games using this, when you gain a card costing <img src="assets/Coin3.png"> or more, you may exchange it for a Changeling.',
		help: 'When you play Changeling, you trash it and gain a copy of a card you have in play; that can be any card you have in play, including Actions, Treasures, and Night cards, and including Duration cards you played on a previous turn that are still in play. Changeling cannot gain a copy of Changeling, since it is not in play when the effect happens – it’s either in the trash (in normal turn) or set aside (when played in a Possessed turn). Changeling can gain only Supply cards – for example it cannot gain an Imp, any Traveller upgrades, etc. Changeling cannot gain cards that are not available – for example it cannot gain any of Knights (since all Knights are different), a Ruins when the Ruins card you have in play is not the same as the top card on the Ruins pile, a card from a split pile when it is covered by the other card from that pile (like Plunder, when it is covered by Encampment), etc. You can choose any card you have in play, but if that card’s pile is empty, or its name does not match the name of the top card on that pile, or that card’s pile is not in the Supply, or that card has no pile, you gain nothing.<hr>When Changeling is in the Supply, any time you gain a card costing at least <img src="assets/Coin3.png">, you may exchange it for a Changeling from the Supply. You can only do this if you can actually return the card you gained, and there is at least one Changeling in the Supply. The Changeling goes to your discard pile, no matter where the gained card went. Things that happen due to gaining the gained card still happen. So for example you could gain Skulk, exchange it for a Changeling (returning Skulk to the Supply and putting Changeling into your discard pile), and still gain a Gold from Skulk’s ability. Exchanging for a Changeling is optional. You cannot do it if the gained card costs less than<img src="assets/Coin3.png">, even if it normally costs <img src="assets/Coin3.png"> or more, and you cannot do it if the cost is neither more or less than <img src="assets/Coin3.png"> (such as Transmute from Alchemy). Remember that you can choose the order in which simultaneous effects happen. When you gain a card that moves itself (like Villa), and you allow that moving effect to happen first, Changeling will lose track of the card and not be able to exchange with it. If you want to exchange, make sure you do that first.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1205,
		name: 'Cobbler',
		set: 'Nocturne',
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, gain a card to your hand costing up to <img src="assets/Coin4.png">.',
		help: 'If you use this to gain a card that is normally gained to a location other than your discard pile, such as Nomad Camp (from Hinterlands), it goes to your hand instead.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1206,
		name: 'Conclave',
		set: 'Nocturne',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>You may play an Action card from your hand that you don’t have a copy of in play. If you do, <b>+1 Action</b>.',
		help: 'When you play this, you can play an Action card from your hand, provided that you do not have a copy of that card in play. It does not matter if you played the Action card this turn, only that it is not in play when you play Conclave; you can use Conclave to play a card that you played but trashed and so do not have in play, like a Pixie you trashed, but cannot use it to play a card you did not play this turn that is still in play, such as a Secret Cave from your previous turn. Conclave normally cannot play a Conclave, as that is a card you have in play. If you do play a card with Conclave, then Conclave gives you +1 Action, which has no special limitations, and so can for example be used to play another Conclave.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1207,
		name: 'Crypt',
		set: 'Nocturne',
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Set aside any number of Treasures you have in play, face down (under this). While any remain, at the start of each of your turns, put one of them into your hand.',
		help: 'For example if you set aside three Treasures, then at the start of each of your next three turns you will put one of them into your hand, and at the end of the last of those turns you will discard Crypt from play. The Treasures are facedown; you can look at them at any time, but other players may not.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1208,
		name: 'Cursed Village',
		set: 'Nocturne',
		cardType: ['Action', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Draw until you have 6 cards in hand.<hr>When you gain this, receive a Hex.',
		help: 'If you already have six or more cards in hand, you do not draw any cards.<br>When you gain Cursed Village, you receive a Hex; since that will often be in your Buy phase, some of the Hexes may not do anything to you.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1209,
		name: 'Den of Sin',
		set: 'Nocturne',
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, <b>+2 Cards</b>.<hr>This is gained to your hand (instead of your discard pile).',
		help: 'Since Night is after the Buy phase, normally you can play this the turn you buy it. If you gain this card onto your deck with Armory, Artificer, Develop, or Graverobber, it goes to the top of your deck, not into your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1210,
		name: 'Devil’s Workshop',
		set: 'Nocturne',
		cardType: ['Night'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'If the number of cards you’ve gained this turn is:<br>2+, gain an Imp from its pile;<br>1, gain a card costing up to <img src="assets/Coin4.png">;<br>0, gain a Gold.',
		help: 'This counts all cards you have gained this turn, including cards gained at Night prior to playing it. You cannot choose a different benefit; if you have gained two or more cards, you have to gain an Imp, you cannot take a card costing up to <img src="assets/Coin4.png"> or a Gold instead. Normally, bought cards are then gained, but cards exchanged for (such as Vampire exchanging for Bat) are not gained.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1211,
		name: 'Druid',
		set: 'Nocturne',
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Receive one of the set-aside Boons (leaving it there).<hr>Setup: Set aside the top 3 Boons face up.',
		help: 'At the start of the game, deal out three Boons face up for Druid. If there are other Fate cards in the same game, those Fate cards will not produce those Boons that game; the deck will consist of the other nine Boons. When you play Druid, you choose one of its three Boons to receive, and leave it there in the set-aside area for Druid, even if it is one of the Boons that says to keep it until Cleanup (e.g. The Field’s Gift).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1212,
		name: 'Exorcist',
		set: 'Nocturne',
		cardType: ['Night'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a cheaper Spirit from one of the Spirit piles.',
		help: 'The Spirits are Will-o’-Wisp, Imp, and Ghost. If for example you trash a Silver, you can gain a Will-o’-Wisp or Imp, as those both cost less than Silver.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1213,
		name: 'Faithful Hound',
		set: 'Nocturne',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When you discard this other than during Clean-up, you may set it aside, and put it into your hand at end of turn.',
		help: '“End of turn” is after drawing in Clean-up. The Reaction ability can happen on your turn and on other players’ turns; if for example you discard Faithful Hound to another player’s Raider, you can set it aside and return it to your hand at the end of that turn. Faithful Hound does not have to be in your hand for the ability to work; for example you can set it aside when it is discarded from your deck due to Night Watchman. The ability does not work if Faithful Hound is put into your discard pile without being discarded; for example nothing special happens when you gain Faithful Hound, or put your deck into your discard pile with Scavenger (from Dark Ages). The ability does not do anything during Clean-up. Setting Faithful Hound aside is optional. You cannot choose to discard Faithful Hound without something telling you to discard. If discarded by Vassal, it can be set aside first, and still played (drawing 2 cards); it just won’t be moved into your play area, since Vassal will have lost track of it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1214,
		name: 'Fool',
		set: 'Nocturne',
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'If you aren’t the player with Lost in the Woods, take it, take 3 Boons, and receive the Boons in any order.<hr>Heirloom: Lucky Coin',
		help: 'If you have Lost in the Woods, playing Fool does nothing. If you do not have Lost in the Woods, you take it – even from another player, if another player has it – and also take 3 Boons and receive them in the order you choose (discarding them when receiving them, or in Clean-up as appropriate). You do not need to pick the full order in advance – pick one to resolve, then after resolving it pick another to resolve.<br>The player with Lost in the Woods (if any) can optionally discard a card to receive a Boon, at the start of each of their turns.<br>In games using Fool, replace one of your starting Coppers with a Lucky Coin.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1215,
		name: 'Ghost Town',
		set: 'Nocturne',
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, <b>+1 Card</b> and <b>+1 Action</b>.<hr>This is gained to your hand (instead of your discard pile).',
		help: 'Since Night is after the Buy phase, normally you can play this the turn you buy it. If you gain this card onto your deck with Armory, Artificer, Develop, or Graverobber, it goes to the top of your deck, not into your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1216,
		name: 'Guardian',
		set: 'Nocturne',
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Until your next turn, when another player plays an Attack card, it doesn’t affect you. At the start of your next turn, <b>+<img src="assets/Coin1.png"></b>.<hr>This is gained to your hand (instead of your discard pile).',
		help: 'Since Night is after the Buy phase, normally you can play this the turn you buy it. When you play Guardian, you are unaffected by Attack cards other players play between then and your next turn (even if you want one to affect you). Guardian does not prevent you from using Reactions when other players play Attacks.<br>If you gain this card onto your deck with Armory, Artificer, Develop, it goes to the top of your deck, not into your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1217,
		name: 'Idol',
		set: 'Nocturne',
		cardType: ['Treasure', 'Attack', 'Fate'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin2.png"></b><br>When you play this, if you then have an odd number of Idols in play, receive a Boon; if an even number, each other player gains a Curse.',
		help: 'Idol cares how many Idols you have in play, not how many you have played this turn; some cards can make those numbers different (e.g. Counterfeit from Dark Ages). If you have one Idol in play, you receive a Boon, if two, the other players gain a Curse, if three, you receive a Boon, and so on.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1218,
		name: 'Leprechaun',
		set: 'Nocturne',
		cardType: ['Action', 'Doom'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. If you have exactly 7 cards in play, gain a Wish from its pile. Otherwise, receive a Hex.',
		help: 'Cards you have in play normally include Leprechaun itself, other cards you have played this turn, and sometimes Duration cards from previous turns. Cards that were in play but no longer are – e.g. a Pixie you trashed – do not count.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1219,
		name: 'Monastery',
		set: 'Nocturne',
		cardType: ['Night'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'For each card you’ve gained this turn, you may trash a card from your hand or a Copper you have in play.',
		help: 'For example if you have gained three cards, you may trash up to three cards, with each being either a card from your hand or a Copper you have in play, in any combination. Normally, bought cards are then gained, but cards exchanged for (such as Vampire exchanging for Bat) are not gained. Cards are trashed one at a time. This matters if one of the cards you trashed draws another card; such cards drawn in the middle of trashing can be trashed by Monastery. Gaining cards while you trash to Monastery (for example, if you trash a Hunting Grounds) does not let you trash additional cards; you can only trash a number of cards equal to the number of cards gained that turn prior to playing Monastery.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1220,
		name: 'Necromancer',
		set: 'Nocturne',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Play a face up, non-Duration Action card from the trash, leaving it there and turning it face down for the turn.<hr>Setup: Put the 3 Zombies into the trash.',
		help: 'This plays a non-Duration Action card from the trash. Normally it can at least play one of the three Zombies, since they start the game in the trash. It can play other Action cards that make their way into the trash too. The played cards are turned over, to track that each can only be used once per turn this way; at end of turn, turn them back face up. Necromancer can play another Necromancer, though normally that will not be useful. The Action card stays in the trash; if an effect tries to move it, such as Encampment (from Empires) returning to the Supply, it will fail to move it. Necromancer can be used on a card that trashes itself when played; if the card checks to see if it was trashed (such as Pixie), it was not, but if the card does not check (such as Tragic Hero), it will function normally. Since the played card is not in play, “while this is in play” abilities (such as Tracker’s) will not do anything.<br>Face-down cards in the trash can still be interacted with by cards other than Necromancer, such as Lurker, and you can still look at them if you want to know what they are. The restriction on movement only applies to effects that would have moved the card out of the play area if it were played normally; if a card is looking to move a card out of the trash, it may move itself. Thus, if you choose to play a Lurker (or Graverobber or Rogue) in the trash, it can gain itself out of the trash. If a face-down card in the trash is gained, and then later trashed in the same turn, it is returned to the trash face-up, meaning another Necromancer may play it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1221,
		name: 'Night Watchman',
		set: 'Nocturne',
		cardType: ['Night'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Look at the top 5 cards of your deck, discard any number, and put the rest back in any order.<hr>This is gained to your hand (instead of your discard pile).',
		help: 'Since Night is after the Buy phase, normally you can play this the turn you buy it. If you gain this card onto your deck with Armory, Artificer, Develop, or Graverobber, it goes to the top of your deck, not into your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1222,
		name: 'Pixie',
		set: 'Nocturne',
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Discard the top Boon. You may trash this to receive that Boon twice.<hr>Heirloom: Goat',
		help: 'If you receive a Boon that says to keep it until Clean-up, move it to in front of you, and remember that you get it twice. In games using Pixie, replace one of your starting Coppers with a Goat.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1223,
		name: 'Pooka',
		set: 'Nocturne',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure other than Cursed Gold from your hand, for <b>+4 Cards</b>.<hr>Heirloom: Cursed Gold',
		help: 'In games using Pooka, replace one of your starting Coppers with a Cursed Gold.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1224,
		name: 'Raider',
		set: 'Nocturne',
		cardType: ['Night', 'Duration', 'Attack'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Each other player with 5 or more cards in hand discards a copy of a card you have in play (or reveals they can’t). At the start of your next turn, <b>+<img src="assets/Coin3.png"></b>.',
		help: 'For example if your cards in play are 3 Coppers, a Silver, and a Raider, then each other player with at least 5 cards in hand has to discard a Copper, Silver, or Raider, or reveal their hand to show that they did not have any of those cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1225,
		name: 'Sacred Grove',
		set: 'Nocturne',
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin3.png"></b><br>Receive a Boon. If it doesn’t give +<img src="assets/Coin1.png">, each other player may receive it.',
		help: 'You have to receive the Boon; the other players can choose to receive it. The Field’s Gift and The Forest’s Gift are not shared. The River’s Gift means that each player choosing to receive it draws a card at the end of your turn, at the same time as you.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1226,
		name: 'Secret Cave',
		set: 'Nocturne',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may discard 3 cards. If you did, then at the start of your next turn, <b>+<img src="assets/Coin3.png"></b>.<hr>Heirloom: Magic Lamp',
		help: 'If you do not discard three cards, Secret Cave is discarded from play at end of turn. If you do discard three cards, Secret Cave stays out until the Cleanup of your next turn, and you get +<img src="assets/Coin3.png"> at the start of that turn. You can choose to discard three cards even with fewer cards in hand, and will discard your remaining cards, but will not get the bonus. In games using Secret Cave, replace one of your starting Coppers with a Magic Lamp.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1227,
		name: 'Shepherd',
		set: 'Nocturne',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Discard any number of Victory cards, revealing them. <b>+2 Cards</b> per card discarded.<hr>Heirloom: Pasture',
		help: 'For example, you could discard three Victory cards to draw six cards. In games using Shepherd, replace one of your starting Coppers with a Pasture.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1228,
		name: 'Skulk',
		set: 'Nocturne',
		cardType: ['Action', 'Attack', 'Doom'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Each other player receives the next Hex.<hr>When you gain this, gain a Gold.',
		help: 'You gain the Gold whether you gained Skulk due to buying it, or gained it some other way.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1229,
		name: 'Tormentor',
		set: 'Nocturne',
		cardType: ['Action', 'Attack', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>If you have no other cards in play, gain an Imp from its pile. Otherwise, each other player receives the next Hex.',
		help: 'Cards in play from previous turns are still cards in play; cards you played this turn but which are no longer in play (such as a Pixie you trashed) are not in play.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1230,
		name: 'Tracker',
		set: 'Nocturne',
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><br>Receive a Boon.<hr>While this is in play, when you gain a card, you may put that card onto your deck.<hr>Heirloom: Pouch',
		help: 'If you gain multiple cards with this in play, this applies to each of them – you could put any or all of them on top of your deck. This applies both to cards gained due to being bought, and to cards gained other ways with Tracker in play. Tracker is in play when you resolve its Boon, so if the Boon causes you to gain a card, for example a Silver from The Mountain’s Gift, you can put that card onto your deck. In games using Tracker, replace one of your starting Coppers with a Pouch.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1231,
		name: 'Tragic Hero',
		set: 'Nocturne',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Buy</b><br>If you have 8 or more cards in hand (after drawing), trash this and gain a Treasure.',
		help: 'First draw three cards; then, if you have eight or more cards in hand, you trash Tragic Hero and gain a Treasure. If you cannot trash Tragic Hero (for example if you play it twice with Throne Room and trashed it the first time), you still gain the Treasure.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1232,
		name: 'Vampire',
		set: 'Nocturne',
		cardType: ['Night', 'Attack', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Each other player receives the next Hex. Gain a card costing up to <img src="assets/Coin5.png"> other than a Vampire. Exchange this for a Bat.',
		help: 'Follow the instructions in order. The Bat is put into your discard pile. If the Bat pile is empty, you will be unable to exchange Vampire for a Bat, but will do the rest.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1233,
		name: 'Werewolf',
		set: 'Nocturne',
		cardType: ['Action', 'Night', 'Attack', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If it’s your Night phase, each other player receives the next Hex. Otherwise, <b>+3 Cards</b>.',
		help: 'Werewolf can be played in either your Action phase or Night phase. If played in your Action phase, you draw three cards; if played at Night, each other player receives the next Hex.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1301,
		name: 'Acting Troupe',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+4 Villagers</b><br>Trash this.',
		help: 'If you do not manage to trash this (for example if you play it twice via Throne Room), you still get the +4 Villagers.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1302,
		name: 'Border Guard',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top 2 cards of your deck. Put one into your hand and discard the other. If both were Actions, take the Lantern or Horn.',
		help: 'When you play a Border Guard and do not have the Lantern, you reveal the top 2 cards of your deck, choose one and put it into your hand, and discard the other; then if they were both Action cards, you take the Lantern or the Horn. When you play a Border Guard and have the Lantern, you reveal the top 3 cards of your deck, choose one and put it into your hand, and discard the rest; then if all three were Action cards, you may take the Horn. If you reveal fewer than 2 cards, or fewer than 3 cards when you have the Lantern, you don\'t take an Artifact. Both the Horn and the Lantern function the turn you get them.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1303,
		name: 'Cargo Ship',
		set: 'Renaissance',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Once this turn, when you gain a card, you may set it aside face up (on this). At the start of your next turn, put it into your hand.',
		help: 'The card you set aside doesn\'t have to be the next card you gain; you could gain multiple cards and then gain one where you decided to set it aside. If you don\'t set a card aside at all, Cargo Ship is discarded that turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1304,
		name: 'Ducat',
		set: 'Renaissance',
		cardType: ['Treasure'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Coffers<br>+1 Buy</b><hr>When you gain this, you may trash a Copper from your hand.',
		help: 'When you play this, you get no <img src="assets/Coin.png">, but get +1 Coffers and +1 Buy. When you gain this, you may trash a Copper from your hand; this is optional.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1305,
		name: 'Experiment',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Action</b><br>Return this to the Supply.<hr>When you gain this, gain another Experiment (that doesn\'t come with another).',
		help: 'When you play this, you get +2 Cards and +1 Action, and return it to its Supply pile. When you gain it, you gain another one; this applies whether you gain it via buying it or some other way. If you gain one to a place other than your discard pile, the 2nd copy goes to your discard pile. For example if you use Sculptor to gain Experiment, you get one in your hand, and one in your discard pile. If you play Band of Misfits (from Dark Ages) or Overlord (from Empires) as Experiment, you will return the card to its own pile, not to the Experiment pile. If Experiment somehow is not in play (for example if played from the trash via Necromancer, from Nocturne), it fails to return to its pile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1306,
		name: 'Flag Bearer',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>When you gain or trash this, take the Flag.',
		help: 'When you gain or trash a Flag Bearer, you take the Flag. If Flag Bearer is trashed, the player trashing it takes the Flag, regardless of whose turn it is.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1307,
		name: 'Hideout',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>Trash a card from your hand. If it\'s a Victory card, gain a Curse.',
		help: 'Trashing is not optional. Curses are not Victory cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1308,
		name: 'Improve',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>At the start of Clean-up, you may trash an Action card you would discard from play this turn, to gain a card costing exactly <img src="assets/Coin1.png"> more than it.',
		help: 'You can only trash an Action card that would be discarded this turn; you cannot trash a non-Action like Silver, or a Duration card that will stay out (but you can trash a Duration card that will be discarded). You can trash the Improve itself. The card you gain does not have to be an Action, it just has to cost exactly <img src="assets/Coin1.png"> more than the trashed Action. Using this ability is optional, but if you trash a card then you have to gain one if you can.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1309,
		name: 'Inventor',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png">, then cards cost <img src="assets/Coin1.png"> less this turn (but not less than <img src="assets/Coin0.png">).',
		help: 'First you gain a card costing up to <img src="assets/Coin4.png">; then, after that happens, prices are lowered for the rest of the turn. The cost lowering applies to all cards everywhere, including cards in the Supply, in hands, and in Decks. It\'s cumulative; for example if you play two Inventors, the cost reduction from the first applies to playing the second (for example it could gain a Duchy, which would then cost <img src="assets/Coin4.png">), and afterwards cards cost <img src="assets/Coin2.png"> less for the rest of the turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1310,
		name: 'Lackeys',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When you gain this, <b>+2 Villagers</b>.',
		help: 'Playing this gives +2 Cards; gaining it gives +2 Villagers.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1311,
		name: 'Mountain Village',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Look through your discard pile and put a card from it into your hand; if you can\'t, <b>+1 Card</b>.',
		help: 'If your discard pile has any cards in it, you have to take one of them, you cannot choose to draw a card instead. You get to look through your discard pile to pick the card to take. It does not matter what order you leave your discard pile in.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1312,
		name: 'Old Witch',
		set: 'Renaissance',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Each other player gains a Curse and may trash a Curse from their hand.',
		help: 'After the Curse pile is empty, playing this still lets each other player trash a Curse from their hand. A player who is unaffected by Old Witch, such as due to Moat, neither gains a Curse nor may trash one.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1313,
		name: 'Patron',
		set: 'Renaissance',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Villager<br>+<img src="assets/Coin2.png"></b><hr>When something causes you to reveal this (using the word "reveal"), <b>+1 Coffers</b>.',
		help: 'Anything that causes you to reveal a Patron, and specifically uses the word "reveal," causes you to get +1 Coffers. For example if you play a Border Guard and reveal two Patrons, you will get +2 Coffers. Other players seeing a card, without the word "reveal" being used, is not enough; for example if another player plays a Villain and you discard a Patron, you do not get +1 Coffers.<br>Once Patron is revealed, getting +1 Coffers is not optional. If you play Black Market and Patron is one of the 3 cards revealed from the Black Market deck, you get +1 Coffers.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1314,
		name: 'Priest',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Trash a card from your hand. For the rest of this turn, when you trash a card, +<img src="assets/Coin2.png">.',
		help: 'When you play this, you get +<img src="assets/Coin2.png">, trash a card from your hand (mandatory), and then for the rest of the turn, trashing a card from your hand will give you +<img src="assets/Coin2.png">. This is cumulative, even if the same Priest is played multiple times (such as with Scepter). For example if you play two Priests and trash two Coppers, you will get +<img src="assets/Coin6.png"> total: +<img src="assets/Coin2.png"> from each play of Priest, and +<img src="assets/Coin2.png"> that the first Priest gives you for the second Priest trashing a card. The bonus works even if the card was not trashed from your hand; for example you will get +<img src="assets/Coin2.png"> for trashing an Acting Troupe due to playing it, or for trashing a card from the Supply with Lurker (from Intrigue).<br>If you trash a card to Sewers due to trashing a card to Priest, you do not get +<img src="assets/Coin2.png"> from that Priest, as Sewers trashes a card before Priest\'s <img src="assets/Coin.png"> producing effect begins.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1315,
		name: 'Recruiter',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Trash a card from your hand. <b>+1 Villager</b> per <img src="assets/Coin1.png"> it costs.',
		help: 'First you draw 2 cards, then you trash a card from your hand. Trashing is not optional. For each <img src="assets/Coin1.png"> the trashed card costs, you get +1 Villager; for example if you trash a Silver, you get +3 Villagers. You do not get anything for <img src="assets/Potion.png"> or <img src="assets/Debt.png"> amounts, just for <img src="assets/Coin.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1316,
		name: 'Research',
		set: 'Renaissance',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Trash a card from your hand. Per <img src="assets/Coin1.png"> it costs, set aside a card from your deck face down (on this). At the start of your next turn, put those cards into your hand.',
		help: 'For each <img src="assets/Coin1.png"> the trashed card costs, you set aside the top card of your deck for next turn; for example if you trash a Silver, you set aside the top 3 cards for next turn. If there are not enough cards, just set aside as many as you can. The cards are set aside face down; you can look at them and other players cannot.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1317,
		name: 'Scepter',
		set: 'Renaissance',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you play this, choose one: +<img src="assets/Coin2.png">; or replay an Action card you played this turn that\'s still in play.',
		help: 'This cannot replay a Duration card you played on a previous turn, but can replay one played the same turn (in which case Scepter will stay in play until the Duration card leaves play). This can cause you to get +Actions in your Buy phase, but that does not let you play Action cards in your Buy phase (though Scepter itself replays one). If this causes you to draw cards and some of them are Treasures, you can still play those Treasures. Scepter can replay an Action that isn\'t finished resolving, such as a Storyteller that played Scepter in the first place.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1318,
		name: 'Scholar',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Discard your hand<br><b>+7 Cards</b>',
		help: 'If drawing causes you to shuffle, you will shuffle in the discarded cards.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1319,
		name: 'Sculptor',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card to your hand costing up to <img src="assets/Coin4.png">. If it\'s a Treasure, <b>+1 Villager</b>.',
		help: 'The card is gained to your hand; that is not optional. If you gain a Nomad Camp (from Hinterlands) with this, it goes to your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1320,
		name: 'Seer',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top 3 cards of your deck. Put the ones costing from <img src="assets/Coin2.png"> to <img src="assets/Coin4.png"> into your hand. Put the rest back in any order.',
		help: 'Cards with <img src="assets/Potion.png"> (from Alchemy) or <img src="assets/Debt.png"> (from Empires) in their cost do not cost from <img src="assets/Coin2.png"> to <img src="assets/Coin4.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1321,
		name: 'Silk Merchant',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Buy</b><br>When you gain or trash this, <b>+1 Coffers</b> and <b>+1 Villager</b>.',
		help: 'When you play this, you get +2 Cards and +1 Buy; when you trash it or gain it, you get +1 Coffers and +1 Villager. If Silk Merchant is trashed, the player trashing it takes the +1 Coffers and +1 Villager, regardless of whose turn it is.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1322,
		name: 'Spices',
		set: 'Renaissance',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin2.png"><br>+1 Buy</b><hr>When you gain this, <b>+2 Coffers</b>.',
		help: 'This is a Treasure that makes <img src="assets/Coin2.png"> and +1 Buy when played; when gaining it, you get +2 Coffers.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1323,
		name: 'Swashbuckler',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>If your discard pile has any cards in it: <b>+1 Coffers</b>, then if you have at least 4 Coffers tokens, take the Treasure Chest.',
		help: 'First you draw 3 cards, then you check to see if your discard pile has any cards in it; if drawing those cards caused you to shuffle, your discard pile would be empty. If your discard pile has at least one card, you get +1 Coffers, and if you then have 4 or more tokens on your Coffers, you take the Treasure Chest. You cannot get the Treasure Chest unless your discard pile had at least one card.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1324,
		name: 'Treasurer',
		set: 'Renaissance',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png"></b><br>Choose one: Trash a Treasure from your hand; or gain a Treasure from the trash to your hand; or take the Key.',
		help: 'When you use a Treasurer to gain a Treasure from the trash, that can trigger abilities like the ones on Ducat and Spices. You can choose to take the Key even if you already have it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1325,
		name: 'Villain',
		set: 'Renaissance',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Coffers</b><br>Each other player with 5 or more cards in hand discards one costing <img src="assets/Coin2.png"> or more (or reveals they can\'t).',
		help: 'For example a player could discard an Estate which costs <img src="assets/Coin2.png">.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1401,
		name: 'Animal Fair',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin4.png"></b><br><b>+ 1 Buy</b> per empty supply pile.<hr>Instead of paying this card\'s cost, you may trash an Action card from your hand.',
		help: '<ul><li>This only checks how many piles are empty when you play it; how many +Buys you got does not change if a pile becomes empty later in the turn (or non-empty, such as due to Ambassador from Seaside).</li><li>This only counts Supply piles, not non-Supply piles like Horse.</li><li>When buying this card, you can trash an Action card from your hand instead of paying <img src="assets/Coin7.png">. You can only do this if you have an Action card in hand to trash. You can do this even if you do not have <img src="assets/Coin7.png">. When buying Animal Fair this way, you spend no <img src="assets/Coin.png">, but still use up a Buy.</li><li>Animal Fair still has a cost of <img src="assets/Coin7.png">, regardless of how you pay for it.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1402,
		name: 'Barge',
		set: 'Menagerie',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Either now or at the start of your next turn, <b>+3 Cards</b> and <b>+ 1 Buy</b>.',
		help: '<ul><li>When playing Barge, choose whether to take +3 Cards and +1 Buy immediately, or at the start of your next turn.</li><li>If you choose “immediately,” Barge will be discarded in the same turn\'s Clean-up; if you choose “next turn,” Barge will be discarded that turn.</li><li>If you play a Barge multiple times, such as with Mastermind, you choose each time whether to take +3 Cards and +1 Buy immediately or next turn, and the Barge only stays in play until next turn if at least one of the plays was for next turn (in which case the Mastermind also stays in play).</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1403,
		name: 'Black Cat',
		set: 'Menagerie',
		cardType: ['Action', 'Attack', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>If it isn\'t your turn, each other player gains a Curse.<hr>When another player gains a Victory card, you may play this from your hand.',
		help: '<ul><li>When you play this on your turn, you draw 2 cards.</li><li>When you play it on another player\'s turn – usually only possible via its reaction – you draw 2 cards, and then everyone else gains a Curse, in turn order starting with the player whose turn it is.</li><li>When anyone else gains a Victory card – whether or not it is your turn – you may play this from your hand.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1404,
		name: 'Bounty Hunter',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Exile a card from your hand. If you didn\'t have a copy of it in Exile, +<img src="assets/Coin3.png">.',
		help: '<ul><li>First you get +1 Action and Exile a card from your hand; this is not optional.</li><li>Then if that is the only copy of that card that you have in Exile, you get +<img src="assets/Coin3.png">.</li><li>If you can\'t Exile a card, you don\'t get +<img src="assets/Coin3.png">.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1405,
		name: 'Camel Train',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Exile a non-Victory card from the Supply.<hr>When you gain this, Exile a Gold from the Supply.',
		help: 'Exiling a card from the Supply does not count as “gaining” the card for the purposes of “When you gain…” card text. Neither is discarding a card from Exile. In other words, this is a rare way to add a card to your deck without ever “gaining” it.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1406,
		name: 'Cardinal',
		set: 'Menagerie',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Each other player reveals the top 2 cards of their deck, Exiles one costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, and discards the rest.',
		help: 'If an attacked player reveals two cards each costing from <img src="assets/Coin3.png"> to <img src="assets/Coin6.png">, that player chooses which card they Exile.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1407,
		name: 'Cavalry',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Horses.<hr>When you gain this, +2 Cards, +1 Buy, and if it\'s your Buy phase return to your Action phase.',
		help: '<ul><li>When you gain Cavalry in your Buy phase, you get +2 Cards, +1 Buy, and return to your Action phase.</li><li>When you gain Cavalry in a different phase or during another player\'s turn, you get +2 Cards and +1 Buy. (+1 Buy is not useful if it is not your turn.</li><li>This ability of Cavalry is not playing the Cavalry, and does not put Cavalry into play.</li><li>Returning to your Action phase does not cause “start of turn” abilities to repeat; however when your Buy phase happens again after that, “start of your Buy phase” abilities can repeat.</li><li>Returning to your Action phase does not give you any +Actions; you have left however many you already had left.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1408,
		name: 'Coven',
		set: 'Menagerie',
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br><b>+<img src="assets/Coin2.png"></b><br>Each other player Exiles a Curse from the Supply. If they can\'t, they discard their Exiled Curses.',
		help: 'Curses are Exiled in turn order; it may be that one player Exiles a Curse while another discards the Curses from their mat.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1409,
		name: 'Destrier',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br><b>+1 Action</b><hr>During your turns, this costs <img src="assets/Coin1.png"> less per card you\'ve gained this turn.',
		help: '<ul><li>For example, you could play a Sleigh to gain two Horses, then use Workshop to gain a Destrier, as it would cost <img src="assets/Coin4.png">.</li><li>Destrier only cares about cards gained by the player whose turn it is; for example, playing Witch to give other players Curses will not lower its cost.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1410,
		name: 'Displace',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Exile a card from your hand. Gain a differently named card costing up to <img src="assets/Coin2.png"> more than it.',
		help: 'The card you gain does not have to cost more than the card you Exiled. For example, you could Exile a Province and gain a Gold.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1411,
		name: 'Falconer',
		set: 'Menagerie',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card to your hand costing less than this.<hr>When any player gains a card with 2 or more types (Action, Attack, etc.), you may play this from your hand.',
		help: '<ul><li>This can only gain cards from the Supply.</li><li>You can react with this to any gained card with 2 or more types; it can be a card that was bought, or a card gained some other way, such as via a Falconer.</li><li>You can do this regardless of who gained the card - you or anyone else - and regardless of whose turn it is.</li><li>The types are the words on the bottom line – including Action, Attack, Curse, Duration, Reaction, Treasure, and Victory (with more in other expansions).</li><li>If you gain a Falconer to your hand - such as via Artisan - you can react to that gain and play it, since it has two types.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1412,
		name: 'Fisherman',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+1 Action</b><br><b>+<img src="assets/Coin1.png"></b><hr>During your turns, if your discard pile is empty, this costs <img src="assets/Coin3.png"> less.',
		help: '<ul><li>This costs <img src="assets/Coin5.png"> normally, but <img src="assets/Coin2.png"> whenever the player whose turn it is has an empty discard pile.</li><li>If you have <img src="assets/Coin4.png"> and two Buys with an empty discard pile, you can buy Fisherman for <img src="assets/Coin2.png">, but then you will no longer have an empty discard pile, so you cannot buy a second for <img src="assets/Coin2.png">.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1413,
		name: 'Gatekeeper',
		set: 'Menagerie',
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, <b>+<img src="assets/Coin3.png"></b>. Until then, when another player gains an Action or Treasure card they don\'t have an Exiled copy of, they Exile it.',
		help: '<ul><li>While under this attack, whenever you gain an Action or Treasure that you do not have a copy of on your Exile mat, you Exile the gained card. Gaining a card that you do have a copy of on your Exile mat is unaffected, and lets you discard copies from your Exile mat if you want to as usual.</li><li>Other abilities that happen when you gain a card happen at the same time, and you can only put the card on your mat if it has not moved anywhere since gaining it; so you can, for example, use a Sleigh to put a gained card into your hand, then fail to put it on your Exile mat.</li><li>Gatekeeper only Exiles Actions and Treasures, it does not Exile, for example, Province. It only cares about cards in Exile, it does not care how they got there.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1414,
		name: 'Goatherd',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>You may trash a card from your hand.<br><b>+1 Card</b> per card the player to your right trashed on their last turn.',
		help: '<ul><li>You draw cards even if you did not trash a card.</li><li>You get +1 Card for every time the player to your right trashed a card during their last turn, even when they trash a card they already trashed that turn. For example, if they trashed the same Fortress twice, your Goatherds will give you +2 Cards.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1415,
		name: 'Groom',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png">. If it\'s an…<br>Action card, gain a Horse;<br>Treasure card, gain a Silver;<br>Victory card, <b>+1 Card</b> and <b>+1 Action</b>.',
		help: '<ul><li>First gain a card, then apply the bonuses in the order listed.</li><li>A card can give you multiple bonuses; for example, if you gain a Mill (from Intrigue), you gain a Horse and then get +1 Card and +1 Action.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1416,
		name: 'Hostelry',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+2 Actions</b><hr>When you gain this, you may discard any number of Treasures, revealed, to gain that many Horses.',
		help: 'You do not have to discard anything, and cannot discard anything but Treasures.',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1417,
		name: 'Hunting Lodge',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+2 Actions</b><br>You may discard your hand for <b>+5 Cards</b>.',
		help: '<ul><li>When you play this, first draw a card and get +2 Actions; then decide if you want to discard your hand (which will include the card you just drew).</li><li>If you do discard your hand, draw 5 cards (which may cause you to shuffle in the discarded cards).</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1418,
		name: 'Kiln',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>The next time you play a card this turn, you may first gain a copy of it.',
		help: '<ul><li>Kiln can gain any type of card, as long as the card is played directly after Kiln. This can be another action if you have the +Actions, a Treasure if this is the last Action played before your Buy phase, or even a Night card if you don\'t play anything during your Buy.</li><li>It can only gain cards from the Supply.</li><li>You (optionally) gain a copy of whatever card you are playing before following the instructions on the card.</li><li>If the card is an Attack and other players want to use cards like Moat, you gain the card before they choose to use Moat or not.</li><li>If play a Kiln multiple times as with Throne Room, you will play Kiln, then play Kiln again which gives you an opportunity to gain a Kiln, and so forth, and then can still gain a copy of the next card you play after the final Kiln.</li><li>If the next card you play is an Action and you use a Way for it, that has no special interaction with Kiln; you still may optionally gain a copy of that card.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1419,
		name: 'Livery',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png"></b><br>This turn, when you gain a card costing <img src="assets/Coin4.png"> or more, gain a Horse.',
		help: '<ul><li>This is cumulative; for example, if you use Mastermind to play a Livery three times, then each card you gain that turn costing <img src="assets/Coin4.png"> or more will come with three Horses.</li><li>Livery works on cards gained via buying them, and cards gained other ways.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1420,
		name: 'Mastermind',
		set: 'Menagerie',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, you may play an Action card from your hand three times.',
		help: '<ul><li>Playing an Action card via this is optional. If you do play one, you resolve the card completely, then play it a second time, then play it a third time, without playing other cards in-between (unless told to).</li><li>Playing these Action cards does not use up Actions. For example, if you Mastermind a Bounty Hunter, you will get +3 Actions total, and be able to play 4 Action cards after that - your normal one, plus 3 more for the +3 Actions.</li><li>If a Mastermind plays a Duration card, the Mastermind stays in play as long as the Duration card does.</li><li>If a Mastermind plays another Mastermind, both will stay in play, and the turn after that you can play three different Action cards from your hand three times each.</li><li>If you Mastermind a Horse, you will get +2 Cards and +1 Action, return the Horse to its pile, and the remaining two attempts will fail because the card is no longer in play.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1421,
		name: 'Paddock',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b><br>Gain 2 Horses.<br><b>+1 Action</b> per empty Supply pile.',
		help: '<ul><li>This only checks how many piles are empty when you play it; how many +Actions you got does not change if a pile becomes empty later in the turn (or non-empty, such as due to Ambassador from Seaside).</li><li>This only counts Supply piles, not non-Supply piles like Horse.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1422,
		name: 'Sanctuary',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+1 Action</b><br><b>+1 Buy</b><br>You may Exile a card from your hand.',
		help: 'Exiling a card is optional.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1423,
		name: 'Scrap',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Choose a different thing per <img src="assets/Coin1.png"> it costs: <b>+1 Card</b>; <b>+1 Action</b>; <b>+1 Buy</b>; <b>+<img src="assets/Coin1.png"></b>; gain a Silver; gain a Horse.',
		help: 'You have to choose all of your options at once. So you cannot, for example, trash an Estate, draw a card, and then based on what you drew decide whether to take +1 Action or +1 Buy.',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1424,
		name: 'Sheepdog',
		set: 'Menagerie',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When you gain a card, you may play this from your hand.',
		help: '<ul><li>You can use this when gaining a card due to buying it, when gaining a card some other way such as due to Falconer, and even when gaining a card on another player\'s turn, such as due to Black Cat or getting Cursed.</li><li>Remember that when you buy a card, you can no longer play Treasures in that Buy phase.</li><li>If you gain a Sheepdog to your hand - such as via Falconer - you can react to that gain and play the Sheepdog.</li><li>If you gain a card with a “when you gain” clause, you can choose to resolve that before or after reacting with Sheepdog, for example, if you gain Hostelry, you can choose to discard Treasures for Horses before or after reacting with Sheepdog.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1425,
		name: 'Sleigh',
		set: 'Menagerie',
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Horses<hr>When you gain a card, you may discard this, to put that card into your hand or onto your deck.',
		help: '<ul><li>You can move the gained card from your discard pile even though you discarded Sleigh on top of it.</li><li>If a gained card goes directly to somewhere other than your discard pile (for example, the Silver gained from Bureaucrat), Sleigh can still move it to your hand or the top of your deck.</li><li>If something else has moved the card since it was gained, Sleigh cannot move it.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1426,
		name: 'Snowy Village',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+4 Actions</b><br><b>+1 Buy</b><br>Ignore any further <b>+Actions</b> you get this turn.',
		help: '<ul><li>Any extra Actions you already had before playing this do not go away; for example, if you play Village and then Snowy Village, you can play 5 more Actions after that.</li><li>Any further +Actions you would get that turn, you do not, including from playing another Snowy Village or converting Villagers (from Renaissance).</li><li>This does not stop you from playing more cards via cards that tell you to play cards, such as Throne Room.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1427,
		name: 'Stockpile',
		set: 'Menagerie',
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png"></b><br><b>+1 Buy</b><br>When you play this, Exile it.',
		help: '<ul><li>This is a Treasure worth <img src="assets/Coin3.png">, like Gold; you play it in your Buy phase.</li><li>If you play this twice with a card like Crown (from Empires), you will get +<img src="assets/Coin6.png"> and +2 Buys total, even though you could only Exile it once.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1428,
		name: 'Supplies',
		set: 'Menagerie',
		cardType: ['Treasure'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><br>When you play this, gain a Horse onto your deck.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1429,
		name: 'Village Green',
		set: 'Menagerie',
		cardType: ['Action', 'Reaction', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Either now or at the start of your next turn, <b>+1 Card</b> and <b>+2 Actions</b>.<hr>When you discard this other than during Clean-up, you may reveal it to play it.',
		help: '<ul><li>When playing Village Green, choose whether to take +1 Card and +2 Actions immediately, or at the start of your next turn. If you choose “immediately,” Village Green will be discarded in the same turn\'s Clean-up; if you choose “next turn,” Village Green will be discarded that turn.</li><li>If you play a Village Green multiple times, such as with Mastermind, you choose each time whether to take +1 Card and +2 Actions immediately or next turn, and the Village Green only stays in play until next turn if at least one of the plays was for next turn (in which case the Mastermind also stays in play).</li><li>You can only discard Village Green if something causes you to or lets you, and discarding it only lets you play it once (each time you discard it). This works whether it is your turn or another player\'s, and whether you discard it from your hand, or deck (such as with Cardinal), or from being set aside, or from Exile. This ability does not function if Village Green is put into your discard pile without being discarded, such as when bought, or due to Scavenger (from Dark Ages). The key thing to look for is a card telling you to “discard” cards.</li><li>If you play Village Green when it is not your turn, and choose to take the +1 Card and +2 Actions immediately, the +2 Actions will not be useful.</li><li>If you play Vassal and discard Village Green, you can react with Village Green to play it, and then Vassal lets you play it a second time. Vassal is discarded from play that turn, regardless of whether Village Green stays out.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1430,
		name: 'Wayfarer',
		set: 'Menagerie',
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>You may gain a Silver.<hr>This has the same cost as the last other card gained this turn, if any.',
		help: '<ul><li>Cards that lower costs, like Bridge from Intrigue, only apply to the other card, not to Wayfarer too (though they apply to Wayfarer if no other cards have been gained yet). For example, if you play Bridge, Wayfarer costs <img src="assets/Coin5.png">; if you then buy a Silver, at that point Wayfarer costs <img src="assets/Coin2.png">, the same as Silver.</li><li>Wayfarer can have a cost with <img src="assets/Potion.png"> (from Alchemy) or <img src="assets/Debt.png"> (from Empires) in it.</li><li>Buying Animal Fair via trashing an Action card changes the cost of Wayfarer to <img src="assets/Coin7.png">, Animal Fair\'s cost, not to trashing an Action card.</li><li>If the cost of the last card gained changes after it was gained, the cost of Wayfarer changes too. For example, if you gain a Peddler when it costs <img src="assets/Coin8.png">, and then play 2 Action cards, Peddler and therefore Wayfarer both now cost <img src="assets/Coin4.png"> in the Buy phase.</li><li>The cost of Wayfarer can change while resolving other cards. For example, if you play Stonemason and trash a Wayfarer which costs <img src="assets/Coin6.png">, you then gain a cheaper card such as Duchy which costs <img src="assets/Coin5.png">; then you gain a second card costing less than Wayfarer which now costs <img src="assets/Coin5.png">.</li></ul>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2001,
		name: 'Black Market',
		set: 'Promo',
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b>. Reveal the top 3 cards of the Black Market deck. Play any number of Treasures from your hand. You may buy one of the revealed cards. Put the rest on the bottom of the Black Market deck in any order.<hr>Setup: Make a Black Market deck out of different unused Kingdom cards.',
		help: '<p>Black Market allows you to Buy a card during the Action phase. You can use <img src="assets/Coin.png"> provided by other Action cards played earlier in the Action phase and you can also play Treasure cards from your hand to pay the cost of the bought card. The Treasure cards are played to the table in your play area, just as you would during the Buy phase. You may play more Treasure cards than are required for the purchase; the extra <img src="assets/Coin.png"> from Action cards and Treasure cards are available to use during your Buy phase. You may even play Treasure cards without Buying a card. You may not reuse <img src="assets/Coin.png"> already spent during a turn. If you play Black Market and choose not to buy one of the three cards from the Black Market deck, you still get +<img src="assets/Coin2.png">.</p><p>To use the Black Market Kingdom card, you must create a Black Market deck before starting the game. The Black Market deck is made up of Kingdom cards that are not in the Supply of the current game. The players should agree before the game which cards will be used to create the Black Market deck (for example, you could agree to use one of every Kingdom card you own that is not a part of the Supply). Randomizer cards are good for this purpose. It is not necessary to include every unused Kingdom card; you may decide how many cards to include in the Black Market deck, and which ones, in any way. It is recommended that the Black Market deck contain at least 15 Kingdom cards, with no duplicates. Dominion Online creates a deck of up to 60 cards. All players can see which cards are placed in the Black Market deck before the game begins. This deck is not a Supply pile and if it is emptied, it does not count towards the end game conditions. If you play Black Market and the Black Market deck is empty, you cannot buy a card but you still get +<img src="assets/Coin2.png">.</p><p>A card bought during the Action phase does not count as a card bought in your Buy phase, so you do not need an Action card giving you +1 Buy to still buy a card during your normal Buy phase. Black Market does not give you an extra buy phase, so the cost of Peddler stays at <img src="assets/Coin8.png">, and you may not spend Coffers while resolving Black Market. You cannot pay off Debt while buying from the Black Market, and you cannot buy anything from the Black Market if you have <img src="assets/Debt.png">. Buying from the Black Market counts as a “Buy” for all effects that care about buying cards, such as Goons, Basilica, and “when-buy” effects on cards. However, it does not count as a “Buy” that signals you can no longer play Treasures or spend Coffers that Buy phase.</p>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2002,
		name: 'Captain',
		set: 'Promo',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn: Play a non-Duration, non-Command Action card from the Supply costing up to <img src="assets/Coin4.png">, leaving it there.',
		help: '<p>[Command cards are Captain, Overseer, and Band of Misfits. This restriction is to prevent infinite loops.]</p><p>You may choose the same card on the second turn (if it is still in the Supply) or a different card. In the case of a mixed or split pile, it can only play the card currently on top. Any effect that tries to move the card (like an Island moving to your Island mat) will fail. If the card attempts to trash itself, it will not; if the card then checks whether it did so, such as Mining Village, it will fail. If it does not check, like Acting Troupe, it will work fine. Cards that move other cards from the Supply may move themselves, so you can use Workshop to gain itself or Lurker to trash itself. The played card is not “in play” and any effects that require it to be will fail. If there are somehow no eligible cards in the Supply on the turn you play Captain, it still remains in play to try again on your next turn.</p>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2003,
		name: 'Church',
		set: 'Promo',
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Set aside up to 3 cards from your hand face down. At the start of your next turn, put them into your hand, then you may trash a card from your hand.',
		help: '<p>You may set aside zero cards. Regardless of how many cards you set aside, you may trash a card at the start of your next turn and Church is discarded at the end of that turn. If you play multiple Churches (or one Church multiple times), you set aside multiple batches of 0–3 cards. At the start of the next turn, you pick up one batch of cards, optionally trash one card, pick up the next batch, optionally trash another card, etc. You decide which order to pick them up in.</p>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2004,
		name: 'Dismantle',
		set: 'Promo',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. If it costs <img src="assets/Coin1.png"> or more, gain a cheaper card and a Gold.',
		help: '<p>Trashing is not optional. If you trash a card costing <img src="assets/Coin0.png">, or if you have no cards left in hand to trash, nothing else happens. If you trash a card costing <img src="assets/Coin1.png"> or more, you gain a cheaper card and a Gold. Both come from the Supply, and are put into your discard pile. The cheaper card goes into your discard pile first.</p><p>There will almost always be a cheaper card in the Supply, since Copper and Curse cost <img src="assets/Coin0.png">, but if there aren\'t any, you still gain a Gold. If there aren\'t any Gold left in the Supply, you still gain the cheaper card.</p><p>Cards with <img src="assets/Potion.png"> or <img src="assets/Debt.png"> in their cost do not cost <img src="assets/Coin1.png"> or more.</p>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2005,
		name: 'Envoy',
		set: 'Promo',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Reveal the top 5 cards of your deck. The player to your left chooses one. Discard that one and put the rest into your hand.',
		help: 'If you do not have 5 cards in your deck, reveal as many as you can and shuffle your discard pile to reveal the rest. The player to your left then chooses one of the revealed cards for you to discard and then you put the rest to your hand. If you do not have enough cards left to reveal 5 cards, even after shuffling, reveal as many as you can. The opponent to your left still discards one card before you put the rest to your hand.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2006,
		name: 'Governor',
		set: 'Promo',
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Choose one; you get the version in parentheses: Each player gets <b>+1 (+3) Cards</b>; or each player gains a Silver (Gold); or each player may trash a card from their hand and gain a card costing exactly <img src="assets/Coin1.png"> (<img src="assets/Coin2.png">) more.',
		help: '<p>You always get +1 Action. Then you either</p><ul><li>draw three cards and each other player draws a card;</li><li>or you gain a Gold and each other player gains a Silver;</li><li>or you may trash a card from your hand and gain a card costing exactly <img src="assets/Coin2.png"> more and each other player may trash a card from his hand and gain a card costing exactly <img src="assets/Coin1.png"> more.</li></ul><p>Go in turn order, starting with yourself; this may matter if piles are low. The gained cards come from the Supply and are put into discard piles; if there are none left, those cards are not gained. For example if you choose the second option and there is only one Silver in the Supply, the player to your left gets it and no-one else gets one. For the third option, you only gain a card if you trashed a card, and only if there is a card available in the Supply with the exact cost required. If you do trash a card, you must gain a card if you can.You cannot trash a Governor you played to itself, as it is no longer in your hand when you play it (though you can trash another copy of Governor from your hand).</p>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2007,
		name: 'Prince',
		set: 'Promo',
		cardType: ['Action'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'You may set this aside. If you do, set aside an Action card from your hand costing up to <img src="assets/Coin4.png">. At the start of each of your turns, play that Action, setting it aside again when you discard it from play. (Stop playing it if you fail to set it aside on a turn you play it.)',
		help: '<p>Prince has you play the same cheap action every turn for the rest of the game. The turn you play Prince, you set it aside with an Action from your hand costing <img src="assets/Coin4.png"> or less; then every turn after that you play the Action at the start of the turn, and then set it aside again when you discard it from play. If you don\'t discard the Action then you stop playing it with Prince; Prince at that point is just set aside doing nothing for the rest of the game. That won\'t normally happen but will happen for example if the Action is a Feast or Mining Village and you trashed it, or if it\'s a Duration card and so it stayed in play, or if it\'s a Madman and was returned to its pile, or if it\'s an Island and was set aside, or if it\'s a card you put back on your deck with Scheme. In practice you will probably not choose to set aside Prince with a card that won\'t work well with it, and so will play the Action you set aside every turn from that point on. The set aside Action technically goes back and forth from being in play to being set aside each turn, but in practice it\'s easier to leave it sitting on the Prince and just announce resolving it each turn.</p><p>Prince has to be physically set aside to do anything; using Throne Room on Prince won\'t let you set aside two cards. You do not play the set aside Action the turn you first set it aside with Prince. Cards which cost <img src="assets/Coin0star.png"> such as Mercenary can be set aside with a Prince, as can cards from Guilds that cost <img src="assets/Coin2plus.png"> or <img src="assets/Coin3plus.png"> or <img src="assets/Coin4plus.png">. Cards with <img src="assets/Potion.png"> or <img src="assets/Debt.png"> in their cost cannot be set aside with Prince.</p><p>The Action card you set aside has to cost up to <img src="assets/Coin4.png"> at the time you play Prince, but can normally cost more; for example you could play a Highway, then use Prince on a Laboratory. Playing the card each turn doesn\'t use up your normal Action play, and is mandatory; setting aside the Action when you discard it from play is also mandatory, you only fail to do it if the card isn\'t in play at that point. At the end of the game, Prince and the set aside card are returned to your deck before scoring. When you have multiple effects to resolve at the start of the turn, resolve them in any order, and that order may vary from turn to turn. Prince plays its Action on extra turns from Outpost and Possession. The Action card that Prince plays is in play after it\'s played each turn, so it will count for things like Peddler; Prince however remains set aside.</p><p>If the card selected for Prince is Band of Misfits, you may choose a new card for Band of Misfits to emulate each turn. Though Island is set aside when played, since it was not Prince setting it aside at the end of your turn, the Lose Track rule dictates that Prince cannot cause Island to be played past the first time. Like with Scheme, a Hermit that is set aside again by Prince on a turn where no cards were bought will fail to trash itself, but you will still gain a Madman. Although certain Reserve cards can be called back into play from the Tavern mat on the same turn they are put there, Prince cannot set them aside again, even though they are where Prince expects them; when they went to the Tavern mat, Prince lost track of them, and cannot do anything further with them. The start of your turn is considered part of your Action phase. This matters if you use Prince to play Crown (either directly using cost reduction or indirectly through cards like Throne Room or Herald).</p>',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2008,
		name: 'Sauna/Avanto',
		set: 'Promo',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may play an Avanto from your hand.<hr>While this is in play, when you play a Silver, you may trash a card from your hand.',
		help: 'When you play Sauna, you first draw a card and get +1 Action. You may then immediately play an Avanto from your hand. This does not take up one of your Actions, including the Action provided by Sauna. You can only play an Avanto this way directly after playing the Sauna, not if you played another Action card in between, even if you have a Sauna in play. When you play Avanto, you first draw 3 cards. You may then immediately play a Sauna from your hand. This does not take up any of your Actions, and Sauna will still give you +1 Action if you play it this way. You can only play a Sauna this way directly after playing the Avanto, not if you played another Action card in between, even if you have an Avanto in play. You can play Sauna and Avanto in alternation this way, taking up only the Action for the first of the cards you play. You can do this until you don’t have the respective card in hand after playing the other. When you play a Sauna, you cannot immediately play a Sauna from your hand without using up one Action. The same goes for playing Avanto after Avanto. While Sauna is in play, you can trash a card from your hand anytime you play a Silver. If you play the same Silver several times, such as with Counterfeit (Dominion: Dark Ages) or Crown (Dominion: Empires), you may trash a card each time you play the Silver. You do not have to trash anything when you play a Silver. You can decide to trash a card every time you play a Silver, you do not have to decide once for the entire turn. When Sauna leaves play, such as being trashed with Procession (Dominion: Dark Ages), you cannot use its effect anymore. When you have several Saunas in play and play a Silver, you can trash a card from your hand for every Sauna you have in play. You can still decide to not trash a card each time.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2009,
		name: 'Stash',
		set: 'Promo',
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png"><hr>When shuffling this, you may look through your remaining deck, and may put this anywhere in the shuffled cards.',
		help: 'When you\'re shuffling, and Stash is one of the cards you\'re shuffling, you can put it anywhere in your deck. You can\'t look at the fronts of the cards you\'re shuffling; Stash has a different card back so you know where it is. If you have multiple copies of Stash, you can clump them together, or spread them out however you want. If there are any cards in your deck that aren\'t being shuffled, such as when you had fewer than 5 cards left in your deck when you needed to draw a new hand for next turn, you can look through those remaining cards before putting them on top of your newly shuffled deck, though you can\'t put Stash in among those remaining cards. If a card tells you to shuffle your entire deck, like Inn, and Stash is in your deck, there is no “remaining deck” that isn\'t being shuffled, so you don\'t get to look at the front of any cards. If Stash is in your draw pile when this happens, it\'s not being shuffled, so just shuffle normally. Because Stash has a different back, you\'ll be able to tell when it\'s in other players\' hands, or set aside for a Haven, and so on.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 2010,
		name: 'Walled Village',
		set: 'Promo',
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>At the start of Clean-up, if you have this and no more than one other Action card in play, you may put this onto your deck.',
		help: 'If the only cards you have in play are two Walled Villages, you may put either or both of them on top of your deck. Walled Village has to be in play to be put on top of your deck. Walled Village only checks how many Action cards are in play when its ability resolves; Action cards you played earlier this turn but which are no longer in play (such as Feast) are not counted, while Action cards still in play from previous turns (duration cards) are counted, as are Action cards that are in play now but may leave play after resolving Walled Village (such as Treasury).',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	}
]
