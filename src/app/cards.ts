import { Card } from './card'

export const CARDS: Card[] = [
	{
		id: 100,
		name: 'Adventurer',
		set: 'Dominion',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Reveal cards from your deck until you reveal 2 Treasure cards. Put those Treasure cards into your hand and discard the other revealed cards.',
		help: '<p>This card was removed for the 2nd Edition of Dominion</p><ul class="faq"><li>If you have to shuffle in the middle, shuffle. Don’t shuffle in the revealed cards as these cards do not go to the Discard pile until you have finished revealing cards.</li><li>If you run out of cards after shuffling and still only have one Treasure, you get just that one Treasure.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card to your hand costing up to <img src="assets/Coin5.png" alt="5 coins">.<br>Put a card from your hand onto your deck.',
		help: '<p>This card was added for the 2nd Edition of Dominion</p><ul class="faq"><li>The card you gain comes from the Supply and is put into your hand.</li><li>You cannot use <img src="assets/Coin.png" alt="coins"> to increase how expensive a card you gain; it always costs from <img src="assets/Coin0.png" alt="0 coins"> to <img src="assets/Coin5.png" alt="5 coins">.</li><li>After gaining the card, you put a card from your hand onto your deck; that can be the card you just gained, or a different card.</li></ul><ul class="rules"><li>Artisan cares about the costs cards have when you play the Artisan. For example, if you play Highway and then Artisan, you can gain a Gold since it now costs <img src="assets/Coin5.png" alt="5 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Each other player reveals the top 2 cards of their deck, trashes a revealed Treasure other than Copper, and discards the rest.',
		help: '<p>This card was added for the 2nd Edition of Dominion</p><ul class="faq"><li>First you gain a Gold from the Supply, putting it into your discard pile.</li><li>Then each other player, in turn order, reveals their top 2 cards, trashes one they choose that is a Treasure other than Copper (e.g. Silver or Gold), and discards the other revealed cards. A player who did not reveal a Treasure card other than Copper simply discards both cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Silver onto your deck. Each other player reveals a Victory card from their hand and puts it onto their deck (or reveals a hand with no Victory cards).',
		help: '<ul class="faq"><li>A player with no cards in their deck will have the card they put on top become the only card in their deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Discard any number of cards, then draw that many.',
		help: '<ul class="faq"><li>Choose any number of cards from your hand; discard them all at once; then draw as many cards as you actually discarded.</li><li>If this causes you to shuffle, you will shuffle in the cards you discarded.</li><li>You do not have to let players see any but the top card discarded; however the number of cards you discard is public.</li></ul><ul class="rules"><li>You cannot discard the Cellar itself, since it is not in your hand after you play it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>You may immediately put your deck into your discard pile.',
		help: '<p>This card was removed for the 2nd Edition of Dominion</p><ul class="faq"><li>You must resolve the Chancellor (decide whether or not to discard your Deck by flipping it into your Discard pile) before doing other things on your turn, like deciding what to buy or playing another Action card.</li><li>You may not look through your Deck as you discard it.</li></ul><ul class="rules"><li>Putting your Deck in your Discard pile in this manner does not count as individually discarding each card in your deck, and you may not use Reactions that require discarding a card (such as that of Tunnels) as you put those cards in your discard pile with Chancellor.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 4 cards from your hand.',
		help: '<ul class="faq"><li>You cannot trash the Chapel itself, since it is not in your hand after you play it.</li></ul><ul class="rules"><li>You don’t have to trash any cards; zero is included in “up to four”. This may be relevant if you are forced to play Chapel (for example, as a result of playing Herald) and don’t have anything you want to trash.</li><li>When you trash any cards with “when you trash this” abilities, you trash all the cards first, then pick an order to resolve things that happen due to trashing them.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+4 Cards<br>+1 Buy</b><br>Each other player draws a card.',
		help: '<ul class="faq"><li>The other players draw a card whether they want to or not.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash this card.<br>Gain a card costing up to <img src="assets/Coin5.png" alt="5 coins">.',
		help: '<p>This card was removed for the 2nd Edition of Dominion</p><ul class="faq"><li>The gained card goes into your Discard pile.</li><li>It has to be a card from the Supply.</li><li>You cannot use <img src="assets/Coin.png" alt="coins"> from Treasures or previous Actions (like the Market) to increase the cost of the card that you gain.</li><li>If you use Throne Room on Feast, you will gain two cards, even though you can only trash Feast once. Gaining the card isn’t contingent on trashing Feast; they’re just two things that the card tries to make you do.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions<br>+1 Buy<br>+<img src="assets/Coin2.png" alt="2 coins"></b>',
		help: '<ul class="faq"><li>You get +2 Actions, +1 Buy, and +<img src="assets/Coin2.png" alt="2 coins">.</li></ul>',
		flags: { village: true, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png" alt="victory point"> per 10 cards you have (round down).',
		help: '<ul class="faq"><li>For example, if you have 37 cards at the end of the game, each copy of Gardens you have is worth 3<img src="assets/VP.png" alt="victory points">.</li><li>Use 8 copies of Gardens in a 2-player game, 12 copies for 3 or more players.</li></ul><ul class="rules"><li>Gardens counts all the cards belonging to you, including cards you have in play, cards that you have set aside, and cards on your mats, in addition to those physically in your deck at the end of the game.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look through your discard pile. You may put a card from it onto your deck.',
		help: '<p>This card was added for the 2nd Edition of Dominion</p><ul class="faq"><li>First draw a card and get +1 Action; then look through your discard pile, and you may put a card from it on top of your deck.</li><li>Putting a card on top is optional.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Action</b>',
		help: '<ul class="faq"><li>You draw 2 cards and get +1 Action</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Draw until you have 7 cards in hand, skipping any Action cards you choose to; set those aside, discarding them afterwards.',
		help: '<ul class="faq"><li>You look at cards one at a time, putting each one into your hand or setting it aside, until you have 7 cards in hand; then you discard the set aside cards.</li><li>If you shuffle in the middle of doing this, you do not shuffle in the set aside cards.</li><li>Only Action cards can be set aside. You are not forced to set aside Action cards; that is just an option.</li><li>If you already have 7 or more cards in hand to start, you do not draw any cards.</li></ul><ul class="rules"><li>If you have 6 or fewer cards in hand and your –1 Card token is on your deck, you’ll remove the token and will draw until you have 7 cards.</li><li>If you set aside any Action-Reactions that care about being discarded (such as Village Green or Trail), you resolve their Reactions after you finish drawing.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Buy<br>+<img src="assets/Coin1.png" alt="1 coin"></b>',
		help: '<ul class="faq"><li>You draw a card and get +1 Action, +1 Buy, and +<img src="assets/Coin1.png" alt="1 coin"></li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>The first time you play a Silver this turn, <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.',
		help: '<p>This card was added for the 2nd Edition of Dominion</p><ul class="faq"><li>When you play Merchant, you draw a card and get +1 Action.</li><li>If you end up playing a Silver later in the turn, it comes with +<img src="assets/Coin1.png" alt="1 coin">.</li><li>If you play more than one Merchant, each gives you +<img src="assets/Coin1.png" alt="1 coin"> when you play that first Silver; but if you play more than one Silver, you only get the +<img src="assets/Coin1.png" alt="1 coin"> for the first Silver.</li></ul><ul class="rules"><li>If you play the same Merchant multiple times (e.g. with Throne Room), each of the plays will give you +<img src="assets/Coin1.png" alt="1 coin"> when you play the first Silver.</li><li>If you play Merchant after you play your first Silver (e.g. you played a Silver to buy a Villa, and then play a Merchant), you do not get +<img src="assets/Coin1.png" alt="1 coin"> for the Silver you already played; you also do not get +<img src="assets/Coin1.png" alt="1 coin"> if you play another Silver since it’s not the first one you played.</li><li>However, if playing a Silver causes you to play a Merchant (e.g. you trash a Catacombs with Sauna, gain a Merchant, and play it with Innovation), you’ll get +<img src="assets/Coin1.png" alt="1 coin">.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '+<img src="assets/Coin2.png" alt="2 coins"><br>Each other player discards down to 3 cards in hand.',
		help: '<ul class="faq"><li>Players with 3 or fewer cards in hand do not discard any cards. Players with more cards discard until they only have 3.</li></ul><ul class="rules"><li>When attacked by Militia, you do not have to let players see all the cards you discard, just the one you leave on top of your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure from your hand. Gain a Treasure to your hand costing up to <img src="assets/Coin3.png" alt="3 coins"> more than it.',
		help: '<ul class="faq"><li>You can, for example, trash a Copper to gain a Silver, or trash a Silver to gain a Gold.</li><li>The Treasure you gain comes from the Supply and is put into your hand; you can play it on the same turn.</li><li>If you do not have a Treasure to trash, you do not gain one.</li></ul><ul class="rules"><li>The Treasure you gain does not need to cost exactly <img src="assets/Coin3.png" alt="3 coins"> more than the trashed Treasure; it can cost that much or less, and can even be another copy of the trashed Treasure.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When another player plays an Attack card, you may first reveal this from your hand, to be unaffected by it.',
		help: '<ul class="faq"><li>An Attack card says “Attack” on the bottom line; in this set, Bandit, Bureaucrat, Militia, and Witch are Attacks.</li><li>When another player plays an Attack card, you may reveal a Moat from your hand, before the Attack does anything, to be unaffected by the Attack - you do not reveal cards to Bandit, or put a Victory card on your deck for Bureaucrat, or discard for Militia, or gain a Curse for Witch.</li><li>Moat stays in your hand, and can still be played on your next turn.</li><li>Moat does not stop anything an Attack does to other players, or for the player who played it; it just protects you personally.</li><li>If multiple Attacks are played on a turn or in a round of turns, you may reveal Moat for as many of them as you want.</li></ul><ul class="rules"><li>Moat only gives you +2 Cards when you play it, not when you reveal it to use its Reaction ability.</li><li>The other player must play the Attack card; for example, you cannot reveal Moat when another player buys a Noble Brigand.</li><li>The played card must have the Attack type; for example, you cannot reveal Moat when another player plays a Masquerade.</li><li>Other players must reveal Moat before you resolve any abilities of the Attack you played. For example, you can see if anyone reveals a Moat before making your choice with Minion, and before deciding whether to play your Attack via a Way.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Copper from your hand for +<img src="assets/Coin3.png" alt="3 coins">.',
		help: '<ul class="faq"><li>You only get the +<img src="assets/Coin3.png" alt="3 coins"> if you actually trashed a Copper.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Discard a card per empty supply pile.',
		help: '<p>This card was added for the 2nd Edition of Dominion</p><ul class="faq"><li>You draw your one card before discarding.</li><li>If there are no empty piles, you do not discard. If there is one empty pile, you discard one card; if there are two empty piles, you discard two cards, and so on. This includes all Supply piles, including Curses, Coppers, Poacher itself, etc.</li><li>If you do not have enough cards to discard, just discard the rest of your hand.</li></ul><ul class="rules"><li>Non-Supply piles, such as Spoils, do not matter to Poacher.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than it.',
		help: '<ul class="faq"><li>You cannot trash the Remodel itself, since it is not in your hand after you play it.</li><li>If you do not have a card to trash, you do not gain one.</li><li>If you do gain a card, it comes from the Supply and is put into your discard pile.</li><li>The gained card does not need to cost exactly <img src="assets/Coin2.png" alt="2 coins"> more than the trashed card; it can cost that much or less, and can even be another copy of the trashed card.</li><li>You cannot use <img src="assets/Coin.png" alt="coins"> to increase how expensive of a card you gain.</li></ul><ul class="rules"><li>You must trash a card from your hand if you have one.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look at the top 2 cards of your deck. Trash and/or discard any number of them. Put the rest back on top in any order.',
		help: '<p>This card was added for the 2nd Edition of Dominion</p><ul class="faq"><li>First you draw a card and get +1 Action.</li><li>Then you look at the top 2 cards of your deck. You can trash both, or discard both, or put both back in either order; or you can trash one and discard one, or trash one and put one back, or discard one and put one back.</li></ul><ul class="rules"><li>You finish trashing any cards you choose to before you decide whether to discard any of the remaining cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b>',
		help: '<ul class="faq"><li>You draw 3 cards</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Each player (including you) reveals the top card of their deck and either discards it or puts it back, your choice.',
		help: '<p>This card was removed for the 2nd Edition of Dominion</p><ul class="faq"><li>Spy causes all players, including the one who played it, to reveal the top card of their Deck.</li><li>Note that you draw your card for playing Spy before any cards are revealed.</li><li>Anyone who does not have any cards left in their Deck shuffles in order to have something to reveal. Anyone who still has no cards to reveal doesn’t reveal one.</li><li>If players care about the order in which things happen for this, you do yourself first, then each other player in turn order.</li><li>Revealed cards that aren’t discarded are returned to the top of their players’ Decks.</li></ul><ul class="rules"><li>In a strict interpretation of the rules, each player reveals their card and returns it or discards it before the next player does, and for certain cards (such as Chariot Race), this can matter when it comes to deciding which each player should do. However, in practice, it’s usually fine for all players to reveal their cards at the same time for efficiency’s sake, provided there’s no effect in the game that cares about the order of revealing.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Each other player reveals the top 2 cards of their deck. If they revealed any Treasure cards, they trash one of them that you choose. You may gain any or all of these trashed cards. They discard the other revealed cards.',
		help: '<p>This card was removed for the 2nd Edition of Dominion</p><ul class="faq"><li>A player with just one card left reveals that last card and then shuffles to get the other card to reveal (without including the revealed card); a player with no cards left shuffles to get both of them.</li><li>A player who still doesn’t have two cards to reveal after shuffling just reveals what they can.</li><li>Each player trashes one Treasure card at most, of the attacker’s choice from the two revealed cards, and then you gain any of the trashed cards that you want.</li><li>You can only take Treasures just trashed—not ones trashed on previous turns. You can take none of them, all of them, or anything in between.</li><li>Put the Treasures you decided to gain into your Discard pile. The ones you choose not to gain stay in the Trash pile.</li></ul><ul class="rules"><li>The treasures are trashed and then gained, so any things that happen on-trash happen first, and then any on-gain abilities activate afterwards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may play an Action card from your hand twice.',
		help: '<ul class="faq"><li>Playing an Action card from your hand is optional. If you do play one, you resolve it completely, then play it a second time.</li><li>You cannot play other cards in-between (unless told to by the card, such as with Vassal or Throne Room itself).</li><li>Playing Action cards with Throne Room is just like playing Action cards normally, except it does not use up Action plays for the turn. For example if you start a turn by playing Throne Room on Village, you would draw a card, get +2 Actions, draw another card, and get +2 Actions again, leaving you with 4 Actions.</li><li>If you Throne Room a Throne Room, you may play an Action card twice, then may play another Action card twice; you do not play one Action card four times.</li></ul><ul class="rules"><li>If you use Throne Room to play a Duration card, the Throne Room also stays in play until you discard the Duration card. This enables you to track the fact that the Duration card was played multiple times. Even if only one play of the Duration card is keeping it in play, such as using Throne Room on Gear and only setting aside cards one of the times, Throne Room stays in play with it. If the Duration card leaves play without being discarded (e.g. because you played it with Way of the Horse on one of its plays), Throne Room is discarded the turn the Duration card leaves play, even if the Duration card has not finished doing things.</li><li>Throne Room plays a card twice; it does not double the effects of a card. It is possible that the card played by Throne Room does different things each time it’s played.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Discard the top card of your deck. If it is an Action card, you may play it.',
		help: '<p>This card was added for the 2nd Edition of Dominion</p><ul class="faq"><li>If the card is an Action card, you can play it, but do not have to.</li><li>If you do play it, you move it into your play area and follow its instructions; this does not use up one of your Action plays for the turn.</li></ul><ul class="rules"><li>Previously, if you discarded an Action that moves itself when it is discarded, such as Faithful Hound or Village Green, you could still opt to play the Action card but wouldn’t be able to move it into play. However, playing the Action is no longer possible under a new rule for playing cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b>',
		help: '<ul class="faq"><li>You draw a card and get +2 Actions.</li></ul><ul class="rules"><li>“+2 actions” increases the number of Action cards you can play this turn; you do not have to play other Action cards right away, and playing them is not part of resolving Village.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each other player gains a Curse.',
		help: '<ul class="faq"><li>The Curses come from the Supply and are put into discard piles.</li><li>They are given out in turn order, which can matter when the Curse pile is low.</li><li>When the Curses are gone, you can still play Witch for +2 Cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png" alt="2 coins"></b>',
		help: '<p>This card was removed for the 2nd Edition of Dominion</p><ul class="faq"><li>During your Buy phase, you add <img src="assets/Coin2.png" alt="2 coins"> to the total value of the Treasure cards played, and you may buy an additional card from the Supply.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">.',
		help: '<ul class="faq"><li>The card you gain comes from the Supply and is put into your discard pile.</li><li>You cannot use <img src="assets/Coin.png" alt="coins"> to increase how expensive of a card you gain; it always costs from <img src="assets/Coin0.png" alt="0 coins"> to <img src="assets/Coin4.png" alt="4 coins">.</li></ul><ul class="rules"><li>Workshop cares about the costs cards have when you play the Workshop, which can sometimes be different from the cost printed on the card. For example, if you play Highway the cost of Duchy is reduced to <img src="assets/Coin4.png" alt="4 coins">, and so now you can use Workshop to gain a Duchy.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>You may discard an Estate for +<img src="assets/Coin4.png" alt="4 coins">. If you don’t, gain an Estate.',
		help: '<ul class="faq"><li>You do not have to discard an Estate, but if you do not, you must gain an Estate (if any are left).</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>This turn, cards (everywhere) cost <img src="assets/Coin1.png" alt="1 coin"> less, but not less than <img src="assets/Coin0.png" alt="0 coins">.',
		help: '<ul class="faq"><li>All cards, including cards in the Supply, in play, in decks, and in hands, cost <img src="assets/Coin1.png" alt="1 coin"> less for the rest of this turn, but not less than <img src="assets/Coin0.png" alt="0 coins">.</li><li>For example after playing Bridge, you could buy a Gold with <img src="assets/Coin5.png" alt="5 coins">, since Gold only costs <img src="assets/Coin5.png" alt="5 coins">; you could Upgrade Copper to Estate, since Copper still costs <img src="assets/Coin0.png" alt="0 coins">, but Estate costs <img src="assets/Coin1.png" alt="1 coin">; you could use Ironworks to gain a Duchy, since Duchy only costs <img src="assets/Coin4.png" alt="4 coins">.</li><li>This is cumulative; if you play two Bridges (or the same Bridge twice via Throne Room), cards will cost <img src="assets/Coin2.png" alt="2 coins"> less.</li></ul><ul class="rules"><li>The effect of Bridge does not depend on the Bridge card itself being in play—only on how many times you’ve played it this turn. Thus if you use Procession on a Bridge, costs are still reduced (by <img src="assets/Coin2.png" alt="2 coins">) even though the Bridge ends up in the trash.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>If you’ve played 3 or more Actions this turn (counting this), <b>+1 Card</b> and <b>+1 Action</b>.',
		help: '<ul class="faq"><li>This counts Actions played this turn, rather than Action cards in play.</li><li>For example if you start a turn with Throne Room on a Conspirator, you get +<img src="assets/Coin2.png" alt="2 coins"> for the first play of Conspirator, but +<img src="assets/Coin2.png" alt="2 coins"> +1 Card +1 Action for the second play of Conspirator. You only have two Action cards in play, but the second play of Conspirator is your third Action played this turn.</li></ul><ul class="rules"><li>Conspirator <em>does</em> count one-shots and other Actions that have been played but left the play area, but does <em>not</em> count Durations that are still in play left over from the previous turn, or Reserves called into play that were not played this turn.</li><li>When you play a Command variant, you are playing two actions. The Command variant is the first action, and the card it plays is the second action.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Reveal a card from your hand. For each type it has (Action, Attack, etc.), choose one: <b>+1 Action</b>; or <b>+1 Buy</b>; or <b>+<img src="assets/Coin3.png" alt="3 coins"></b>; or gain a Gold. The choices must be different.',
		help: '<p>This card was added for the 2nd Edition of Intrigue</p><ul class="faq"><li>First reveal a card from your hand, then count the types.</li><li>The types are the words on the bottom line – including Action, Attack, Curse, Reaction, Treasure, and Victory (with more in expansions).</li><li>Then choose one different thing per type the card had; if you revealed a card with two types, you pick two things.</li><li>For example you could reveal a Copper and choose “gain a Gold,” or reveal a Mill and choose “+1 Action” and “+<img src="assets/Coin3.png" alt="3 coins">.”</li><li>If you gain a Gold, put the Gold into your discard pile.</li></ul><ul class="rules"><li>If you play Courtier twice, you may reveal either the same card or a different card the second time, and choose the same bonuses or different ones.</li><li>Revealing a card with four types (such as Werewolf or Dame Josephine) gives you all bonuses.</li><li>Capitalism and Inheritance can change the number of types a card has, and Courtier takes that into account when counting types.</li><li>If you reveal a card with 5 types (such as a Stronghold affected by Capitalism), you get the 4 bonuses and nothing extra.</li><li>If you use Elder on Courtier, you get one extra choice, not one extra choice per type. So if you reveal a card with 2 types, you get 3 choices from Courtier.</li><li>If you can’t reveal a card (because you have no cards in hand), you get no bonus. This is true even if you play this with Elder.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Put a card from your hand onto your deck.',
		help: '<ul class="faq"><li>The card you put on top does not have to be one of the 3 you just drew.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>If you have 5 or fewer cards in hand (after drawing), <b>+2 Actions</b>.<hr>When another player plays an Attack card, you may first reveal this from a hand of 5 or more cards, to draw 2 cards then discard 3.',
		help: '<p>This card was added for the 2nd Edition of Intrigue</p><ul class="faq"><li>When playing this, you get +2 Cards, then count your cards in hand, and if you have 5 cards or fewer, you get +2 Actions.</li><li>So, for example if you play this from a hand of 5 cards, you will put it into play, going down to 4 cards, then draw 2 cards, going up to 6 cards, and that is more than 5 cards so you would not get the +2 Actions.</li><li>Diplomat can also be used when another player plays an Attack card, if you have at least 5 cards in hand.</li><li>Before the Attack card does anything, you can reveal a Diplomat from your hand; if you do, you draw 2 cards, then discard 3 cards (which can include the Diplomat).</li><li>If you still have at least 5 cards in hand after doing that (such as due to Council Rooms), you can reveal Diplomat again and do it again.</li><li>You reveal Reactions one at a time; you cannot reveal two Diplomats simultaneously.</li><li>You can reveal a Moat from your hand (to be unaffected by an Attack) either before or after revealing and resolving a Diplomat (even if the Moat was not in your hand until after resolving Diplomat).</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Victory'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png" alt="victory point"> per Duchy you have.',
		help: '<ul class="faq"><li>For example, if you have five Duchies, then each of your Dukes is worth 5<img src="assets/VP.png" alt="victory points">.</li><li>Use 8 Dukes for games with 2 players, 12 for games with 3 or more players.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Treasure', 'Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><hr>2<img src="assets/VP.png" alt="victory points">',
		help: '<ul class="faq"><li>This can be played in your Buy phase like other Treasures, and is worth 2<img src="assets/VP.png" alt="victory points"> at the end of the game.</li><li>Use 8 Harems for games with 2 players, 12 for games with 3 or more players.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png" alt="4 coins"><br>If the gained card is an…<br>Action card, <b>+1 Action</b><br>Treasure card, <b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Victory card, <b>+1 Card</b>',
		help: '<ul class="faq"><li>The card you gain comes from the Supply and is put into your discard pile.</li><li>You get bonuses depending on the types of the card you gained.</li><li>A card with 2 types gives you both bonuses; if you use Ironworks to gain a Mill, you both draw a card and get +1 Action.</li></ul><ul class="rules"><li>If you gain a card that has none of the listed types (such as Curse or Ghost Town), you get no bonus.</li><li>If you gain an Inherited Estate, you get +1 Action and +1 Card.</li><li>Abilities that happen when you gain a card happen before you get the bonuses from Ironworks. For example, if you gain a Mill and play it with Innovation, you’ll get +1 Action and +1 Card after you finish playing the Mill.</li><li>During a Possession turn, Ironworks will never give you any bonus (see the blue dog rule).</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Choose one: Trash an Action card from the Supply, or gain an Action card from the trash.',
		help: '<p>This card was added for the 2nd Edition of Intrigue</p><ul class="faq"><li>The card trashed or gained has to be an Action card, but can have other types too. For example Lurker can trash Nobles from the Supply and can gain Nobles from the trash.</li><li>When gaining a card with Lurker, put the gained card into your discard pile.</li></ul><ul class="rules"><li>Trashing a card from the Supply will activate its when-trash abilities. For example, if you trash a Fortress from the Supply, it will move itself into your hand; if you trash Hunting Grounds from the Supply you gain a Duchy or Estates.</li><li>Trashing from the supply does not allow you to react with Market Square.</li><li>You can choose the gain-from-trash option even if there are no Actions in the trash at the time; in that case, nothing happens. (Similarly, you can also choose the trash-from-supply option even in the unlikely event that there are no Actions in the supply.)</li><li>You can only trash the top card of a Supply pile, which may matter with split piles or Knights.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each player with any cards in hand passes one to the next such player to their left, at once. Then you may trash a card from your hand.',
		help: '<ul class="faq"><li>First you draw 2 cards.</li><li>Then, all players at the same time choose a card to pass left, putting it face down on the table between players.</li><li>Then the cards are passed; each player takes the passed card from the player to their right.</li><li>Players with no cards in hand (such as due to Torturer) are skipped over - they neither pass a card nor receive one.</li><li>Finally, you may trash a card from your hand.</li><li>This is not an Attack and so cannot be stopped with Moat.</li><li>Passed cards are not “gained” (which matters for some expansion cards, e.g. Trader from Dominion: Hinterlands).</li></ul><ul class="rules"><li>If only one player has cards in their hand, they pass a card to themself.</li><li>Masquerade’s mechanism for changing card ownership is unique in the game, since it uses the word “pass” to indicate a change of card ownership. The consequence of this wording is that the player receiving a passed card is not “gaining” it. So, for example, they cannot react to the card passing with Watchtower.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [2],
		cardType: ['Action', 'Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may discard 2 cards, for +<img src="assets/Coin2.png" alt="2 coins">.<hr>1<img src="assets/VP.png" alt="victory point">',
		help: '<p>This card was added for the 2nd Edition of Intrigue</p><ul class="faq"><li>You can choose to discard 2 cards even if you only have one card in hand, but you only get +<img src="assets/Coin2.png" alt="2 coins"> if you actually discarded 2 cards.</li><li>Use 8 Mills for games with 2 players, 12 for games with 3 or more players.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>You may trash this for +<img src="assets/Coin2.png" alt="2 coins">.',
		help: '<ul class="faq"><li>First draw a card and get +2 Actions; then choose whether or not to trash Mining Village before moving on to other actions or other phases, getting +<img src="assets/Coin2.png" alt="2 coins"> if you did.</li><li>You may not trash Mining Village later in the turn, only right then.</li><li>If you Throne Room a Mining Village, you cannot trash it twice (and so cannot get the +<img src="assets/Coin2.png" alt="2 coins"> twice).</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Choose one: +<img src="assets/Coin2.png" alt="2 coins">; or discard your hand, <b>+4 Cards</b>, and each other player with at least 5 cards in hand discards their hand and draws 4 cards.',
		help: '<ul class="faq"><li>Players ’ing to respond with e.g. Moat or Diplomat do so before you choose your option.</li><li>A player who Moats this neither discards nor draws.</li></ul><ul class="rules"><li>You still draw 4 cards if you choose the discard option with no cards left in hand.</li><li>Horse Traders normally doesn’t actually block an attack, but in the case of Minion it can.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+3 Cards</b>; or <b>+2 Actions</b>.<hr>2<img src="assets/VP.png" alt="victory points">',
		help: '<ul class="faq"><li>Use 8 copies of Nobles for games with 2 players, 12 for games with 3 or more players.</li></ul><ul class="rules"><li>If you play the same Nobles multiple times, such as with Throne Room, Procession, or King’s Court, you may make different choices for each play.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Reveal the top 4 cards of your deck. Put the Victory cards and Curses into your hand. Put the rest back in any order.',
		help: '<p>This card was added for the 2nd Edition of Intrigue</p><ul class="faq"><li>First draw 3 cards, then reveal the top 4 cards of your deck.</li><li>Put the revealed Victory cards and Curses into your hand; you have to take them all.</li><li>Put the rest of the cards back on your deck in any order you choose.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Choose two: <b>+1 Card</b>; <b>+1 Action</b>; <b>+1 Buy</b>; +<img src="assets/Coin1.png" alt="1 coin">. The choices must be different.',
		help: '<ul class="faq"><li>You pick both things before doing either.</li><li>You cannot pick the same option twice.</li></ul><ul class="rules"><li>If Pawn is Throne Roomed or King’s Courted, the choices do not have to be the same for each play of Pawn.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than it. If the gained card is an Action or Treasure, put it onto your deck; if it’s a Victory card, each other player gains a Curse.',
		help: '<p>This card was added for the 2nd Edition of Intrigue</p><ul class="faq"><li>Like Remodel, you first trash a card from your hand, then gain a card from the Supply costing up to <img src="assets/Coin2.png" alt="2 coins"> more than the trashed card, putting the gained card into your discard pile.</li><li>Replace gives you an additional bonus based on the types of the gained card; if it is an Action or Treasure you move it to the top of your deck, and if it is a Victory card the other players each gain a Curse.</li><li>It is possible to get both bonuses; if you gain Harem, Mill, or Nobles with Replace, it both goes on your deck and causes the other players to each gain a Curse.</li></ul><ul class="rules"><li>If you gain an Action or Treasure, and then move it elsewhere first, Replace will fail to topdeck it. So if you gain an Action card and then use Innovation on it, Replace cannot remove the card from your play area and put it onto your deck.</li><li>If you do this with an Action-Victory card (like Nobles), that does not stop Replace from giving out Curses.</li><li>Replace will also fail to move a card if it moves away, and then moves back to the same place. For example, if you gain an Experiment, exile it to Gatekeeper, then gain the second Experiment and discard the first Experiment from Exile, Replace will still fail to topdeck the Experiment, even though it’s still in your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: true },
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
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Action</b><br>Take a card from your hand and put it anywhere in your deck.',
		help: '<p>This card was added for the 2nd Edition of Intrigue</p><ul class="faq"><li>First draw 2 cards and get +1 Action; then put a card from your hand anywhere in your deck.</li><li>The card can be one you just drew or any other card from your hand.</li><li>It can go on top of your deck, on the bottom, or anywhere in-between; you can count out a specific place to put it, e.g. four cards down.</li><li>If there are no cards left in your deck, the card put back becomes the only card in your deck.</li></ul><ul class="rules"><li>Where you put the card is public knowledge.</li><li>You don’t have to put the card into a specific spot, you can just shove it into your deck if you want.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Reveal your hand. If you have no Action cards in hand, <b>+2 Cards</b>.',
		help: '<ul class="faq"><li>You get +2 Actions, then reveal your hand.</li><li>If it has no Action cards in it (including Action cards with other types too, such as Nobles), then you draw 2 cards.</li></ul><ul class="rules"><li>If you Throne Room a Shanty Town, you reveal your hand, get +2 actions, and potentially draw two cards, then you reveal your hand again, get 2 more actions, and potentially draw two more cards. You do NOT reveal your hand once and get +4 cards.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+2 Cards</b>; or <b>+<img src="assets/Coin2.png" alt="2 coins"></b>; or trash 2 cards from your hand.',
		help: '<ul class="faq"><li>First choose one of the three options, then do it.</li><li>If you pick “trash 2 cards from your hand” and only have one card in hand, you trash that card; if you choose that option and have 2 or more cards in hand, you have to trash 2.</li></ul><ul class="rules"><li>You first choose which two cards to trash, then trash them both at the same time, and then choose which order to activate any when-trashed effects.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player trashes the top card of their deck and gains a card with the same cost that you choose.',
		help: '<ul class="faq"><li>When it matters (such as when piles are low), go in turn order, starting with the player to your left.</li><li>Each other player trashes their top card, and gains a replacement you choose with the same cost.</li><li>The card they gain comes from the Supply and goes to their discard pile.</li><li>For example if a player trashed Copper, you might give them Curse, which costs <img src="assets/Coin0.png" alt="0 coins"> like Copper does.</li><li>You can give a player back another copy of what they lost.</li><li>If the Supply has no cards with the same cost as the trashed card, the player fails to gain a card.</li></ul><ul class="rules"><li>When-trashed effects trigger before the player who played Swindler has to choose which card the opponent gains. The opponent is the one who trashes the revealed card and resolves any when-trashed effects.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Each other player either discards 2 cards or gains a Curse to their hand, their choice. (They may pick an option they can’t do.)',
		help: '<ul class="faq"><li>If it matters, the other players choose what happens to them (and resolve that) in turn order, starting to your left.</li><li>A player can choose to gain a Curse even with no Curses left (and thus not gain one), or to discard 2 cards even with one or zero cards in hand (discarding their only card if they have one).</li><li>Gained Curses go to players’ hands rather than their discard piles.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash 2 cards from your hand. If you did, gain a Silver to your hand.',
		help: '<ul class="faq"><li>If you have only one card in hand, trash it and nothing else happens; if you have 2 or more cards in hand, trash exactly 2 of them and gain a Silver, putting it into your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Trash a card from your hand.<br>Gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it.',
		help: '<ul class="faq"><li>First draw a card and get +1 Action; then trash a card from your hand; then gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than the trashed card.</li><li>The gained card comes from the Supply and is put into your discard pile.</li><li>If there is no card available at that cost, you do not gain a card; for example if you play Upgrade and trash a Copper, in a game with nothing costing <img src="assets/Coin1.png" alt="1 coin">, you simply fail to gain a card.</li></ul><ul class="rules"><li>First you trash a card, and resolve all of its on-trash effects; then you gain a card, and then resolve all on-gain effects.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Name a card, then reveal the top card of your deck. If you named it, put it into your hand.',
		help: '<ul class="faq"><li>First you draw a card and get +1 Action.</li><li>Then name a card - a name, not a type, so e.g. “Copper,” not “Treasure.”</li><li>Reveal the top card of your deck. If it has the name you named, put it into your hand, otherwise leave it on your deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 227,
		name: 'Secret Chamber',
		set: 'Intrigue',
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Discard any number of cards.<br><b>+<img src="assets/Coin1.png" alt="1 coin"></b> per card discarded.<hr>When another player plays an Attack card, you may reveal this from your hand. If you do, +2 Cards, then put 2 cards from your hand on top of your deck.',
		help: '<p>This card was removed for the 2nd Edition of Intrigue</p><ul class="faq"><li>When you play this as an Action on your turn, you first discard any number of cards from your hand, then get <img src="assets/Coin1.png" alt="1 coin"> per card you discarded. The other ability does nothing at that time as it is only used as a Reaction.</li><li>You may choose to discard zero cards, but then you will get zero additional <img src="assets/Coin.png" alt="coins">.</li><li>When someone else plays an Attack card, you may reveal Secret Chamber from your hand. If you do, first you draw 2 cards, then you put any 2 cards from your hand on top of your deck (in any order).</li><li>The cards you put back do not have to be the ones you drew. You can put Secret Chamber itself on top of your deck; it’s still in your hand when you reveal it.</li><li>Revealing Secret Chamber happens prior to resolving what an Attack does to you. For example, if another player plays Thief, you can reveal Secret Chamber, draw 2 cards, put 2 back, and then you resolve getting hit by the Thief.</li><li>You can reveal Secret Chamber whenever another player plays an Attack card, even if that Attack would not affect you.</li><li>Also, you can reveal more than one Reaction card in response to an Attack. For example, after revealing the Secret Chamber in response to an Attack and resolving the effect of the Secret Chamber, you can still reveal a Moat to avoid the Attack completely.</li></ul><ul class="rules"><li>You may reveal the same Secret Chamber multiple times when reacting to an Attack; for example, in response to an attack, you could reveal Secret Chamber, draw a Moat and a Copper off the top of your deck, put back two coppers, reveal the Moat to be unaffected by the attack, and then reveal Secret Chamber again to put either the Moat or the Secret Chamber back on top of your deck.</li><li>Revealing the Secret Chamber alone does NOT prevent the attack from affecting you. You can reveal Secret Chamber even in response to an attack that does not affect the top of your deck, like Witch.</li><li>You must reveal the Secret Chamber as soon as the Attack is played, but before any text on it is resolved. So if your opponent plays Minion or Pirate Ship, you must finish drawing cards and then putting cards back on top before your opponent makes their choice for which action on attack card to take.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 228,
		name: 'Great Hall',
		set: 'Intrigue',
		edition: [1],
		cardType: ['Action', 'Victory'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<hr>1<img src="assets/VP.png" alt="victory point">',
		help: '<p>This card was removed for the 2nd Edition of Intrigue</p><ul class="faq"><li>This is both an Action card and a Victory card.</li><li>When you play it, you draw a card and may play another Action.</li><li>At the end of the game, it’s worth 1<img src="assets/VP.png" alt="victory point">, like an Estate.</li><li>During set-up, place 12 Great Halls in the Supply for a 3- or 4-player game and 8 in the Supply for a 2-player game.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 229,
		name: 'Coppersmith',
		set: 'Intrigue',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Copper produces an extra <img src="assets/Coin1.png" alt="1 coin"> this turn.',
		help: '<p>This card was removed for the 2nd Edition of Intrigue</p><ul class="faq"><li>This just changes how much money you get when playing Copper.</li><li>The effect is cumulative; if you Throne Room a Coppersmith, each Copper you play that turn will produce <img src="assets/Coin3.png" alt="3 coins">.</li></ul><ul class="rules"><li>The bonus does not apply retroactively to Coppers that have already been played this turn, such as with Storyteller, or if you have returned to your Action phase via Villa.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 230,
		name: 'Scout',
		set: 'Intrigue',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top 4 cards of your deck. Put the revealed Victory cards into your hand. Put the other cards on top of your deck in any order.',
		help: '<p>This card was removed for the 2nd Edition of Intrigue</p><ul class="faq"><li>If there are fewer than 4 cards left in your deck, reveal all the cards in your deck, shuffle your discard pile (which does not include currently revealed cards), and then reveal the remainder needed.</li><li>Action - Victory cards are Victory cards.</li><li>Curse cards are not Victory cards.</li><li>Take all revealed Victory cards into your hand; you cannot choose to leave some on top.</li><li>You do not have to reveal the order that you put cards back in.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 231,
		name: 'Saboteur',
		set: 'Intrigue',
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Each other player reveals cards from the top of their deck until revealing one costing <img src="assets/Coin3.png" alt="3 coins"> or more. They trash that card and may gain a card costing at most <img src="assets/Coin2.png" alt="2 coins"> less than it. They discard the other revealed cards.',
		help: '<p>This card was removed for the 2nd Edition of Intrigue</p><ul class="faq"><li>Each other player turns over the top cards of his deck until he reveals one costing <img src="assets/Coin3.png" alt="3 coins"> or more. If a player needs to shuffle to continue revealing cards, he does not shuffle in the already revealed cards.</li><li>If he goes through all of his cards without finding a card costing <img src="assets/Coin3.png" alt="3 coins"> or more, he just discards everything revealed and is done.</li><li>If he does find a card costing <img src="assets/Coin3.png" alt="3 coins"> or more, he trashes it, and then may choose to gain a card costing at most <img src="assets/Coin2.png" alt="2 coins"> less than the trashed card. For example, if he trashed a card costing <img src="assets/Coin5.png" alt="5 coins">, he may gain a card costing up to <img src="assets/Coin3.png" alt="3 coins">.</li><li>The gained card must be from the Supply and is put into his discard pile, as are his revealed cards.</li><li>Costs of cards are affected by Bridge.</li></ul><ul class="rules"><li>Saboteur forces other players to trash their own card; the player who owns the card being trashed is the one who trashes it and gets any on-trash benefits.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 232,
		name: 'Tribute',
		set: 'Intrigue',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'The player to your left reveals then discards the top 2 cards of their deck. For each differently named card revealed, if it is an…<br>Action Card, <b>+2 Actions</b><br>Treasure Card, +<img src="assets/Coin2.png" alt="2 coins"><br>Victory Card, <b>+2 Cards</b>',
		help: '<p>This card was removed for the 2nd Edition of Intrigue</p><ul class="faq"><li>If the player after you has fewer than 2 cards left in his deck, he reveals all the cards in his deck, shuffles his discard pile (which does not include currently revealed cards), and then reveals the remainder needed. The player then discards the revealed cards.</li><li>If the player after you does not have enough cards to reveal 2, he reveals what he can.</li><li>You get bonuses for the types of cards revealed, counting only the different cards.</li><li>A card with 2 types gives you both bonuses.</li><li>So if the player to your left reveals Copper and Harem, you get +<img src="assets/Coin4.png" alt="4 coins"> and +2 cards; if he reveals 2 Silvers, you just get +<img src="assets/Coin2.png" alt="2 coins">.</li><li>Curse produces no bonus.</li></ul><ul class="rules"><li>Revealing an Estate Inherited as a Crown would give you all three bonuses. (Now that Inheritance works differently, this doesn’t apply.)</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<p>Reveal a card from your hand. Return up to 2 copies of it from your hand to the Supply. Then each other player gains a copy of it.</p>',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>First you reveal a card from your hand.</li><li>Then take 0, 1, or 2 copies of that card from your hand and put them on top of their Supply pile.</li><li>Then each other player gains a copy of that card from the Supply.</li><li>If there are not enough copies to go around, deal them out in turn order, starting with the player to your left.</li></ul><ul class="rules"><li>If you reveal a card which is not from the Supply, such as Spoils, Madman, Mercenary, or Shelters, Ambassador does nothing. Similarly, because none of the cards bought through Black Market are in the Supply, if you reveal a card bought through Black Market, Ambassador does nothing.</li><li>If you reveal a card which is part of a Supply pile with differently named cards, such as Ruins or Knights, you can only return two cards to the supply pile if they have the same name. Other players will only gain cards with that name, and only if they are on the top of the deck (no digging).</li><li>If you empty either the Province pile or a third Supply pile, then use Ambassador so that the pile is no longer empty at the end of your turn, the game does not end.</li><li>If you return the bottom card of a Split pile when there is a top card on top, you still put the returned bottom card on top, not under the remaining top cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions<br>+<img src="assets/Coin1.png" alt="1 coin"></b>',
		help: '<ul class="faq"><li>You draw a card and get +2 Actions and +<img src="assets/Coin1.png" alt="1 coin">.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>At the start of your next turn, <b>+1 Card</b>.',
		help: '<ul class="faq"><li>You draw a card and get +1 Action when you play this, and then you draw another card at the start of your next turn.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player discards a Copper (or reveals a hand with no Copper).',
		help: '<ul class="faq"><li>Each of your opponents with at least one Copper in hand discards one Copper.</li><li>Each of your opponents with no Coppers in hand reveals their hand to prove this.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Trash this. Add an Embargo token to a Supply pile. (For the rest of the game, when a player buys a card from that pile, they gain a Curse.)',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>The token can go on any Supply pile - a Kingdom card pile such as Embargo, or a base card pile such as Silver.</li><li>The token modifies the pile, so that anyone buying a card from that pile gains a Curse.</li><li>This even affects the player who placed the Embargo token.</li><li>This is cumulative; with three Embargo tokens on a pile, buying a card from that pile will give you three Curses.</li><li>Embargo tokens do not do anything if a card is gained without being bought, such as with Smugglers, or if the Curse pile is empty.</li><li>Embargo tokens are not counter-limited; use a replacement if necessary.</li><li>If you Throne Room Embargo, you will get +<img src="assets/Coin4.png" alt="4 coins"> and place two tokens, even though you can only trash Embargo once.</li></ul><ul class="rules"><li>If there are multiple Embargo tokens on a pile, each Curse gain from buying from that pile happens separately, which allows other when-buy triggers (such as the pre-errata version of Haggler’s) to activate in between Curse gains.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may reveal a Province from your hand. If you do, gain a Gold to your hand. If you don’t, gain a Silver to your hand.',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>You do not have to reveal a Province if you have one.</li><li>If you do reveal one you gain a Gold, otherwise you gain a Silver.</li><li>The gained card comes from the Supply and is put into your hand; it can be played the same turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>At the start of your next turn: <b>+1 Action</b> and <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.',
		help: '<ul class="faq"><li>You get +2 Actions and +<img src="assets/Coin1.png" alt="1 coin"> when you play this, and then +1 Action and +<img src="assets/Coin1.png" alt="1 coin"> at the start of your next turn.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each other player with 4 or more cards in hand puts cards from their hand onto their deck until they have 3 cards in hand.',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>Each other player keeps putting cards from their hand onto their deck, in any order they choose, until they only have 3 cards in hand.</li><li>Players who already had 3 or fewer cards in hand do not put any cards onto their deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Set aside a card from your hand face down (under this). At the start of your next turn, put it into your hand.',
		help: '<ul class="faq"><li>First draw a card and get +1 Action; then choose a card from your hand and set it aside face down under Haven.</li><li>You may look at it, but other players may not.</li><li>You have to set aside a card if you can.</li><li>At the start of your next turn, return the set aside card to your hand.</li></ul><ul class="rules"><li>If you have no card in your hand to set aside when you play Haven, you set aside nothing, and clean up Haven at the end of that turn; it does not stay out.</li><li>If Haven is still in play when the game ends, it and the card set aside with it are returned to your deck before scoring; this can matter for alt-VP cards like Gardens.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Put this and a card from your hand onto your Island mat.<hr>2<img src="assets/VP.png" alt="victory points">',
		help: '<ul class="faq"><li>When you set aside your first Island, take an Island player mat to put it on.</li><li>Island and the set aside card are face up on the mat; anyone can look at them.</li><li>They stay there until the end of the game, when you return them to your deck and count your score.</li><li>When playing Island, you have to set aside a card if you can.</li><li>If you play a Command card that plays an Island, you leave the Island in its pile and you move a card to the Island mat.</li><li>If you Throne Room an Island, you set aside two cards with it.</li><li>Use 8 copies of Island for games with 2 players, 12 for games with 3 or more players.</li></ul><ul class="rules"><li>If you Procession an Island, you set it aside with a card, then you set aside another card; you do not trash the Island because it has already been set aside, but you do gain a card costing <img src="assets/Coin1.png" alt="1 coin"> more than the Island.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>At the start of your next turn, +<img src="assets/Coin1.png" alt="1 coin">. Until then, when another player plays an Attack card, it doesn’t affect you.',
		help: '<ul class="faq"><li>Between when you play Lighthouse and the start of your next turn, other players’ Attack cards do not affect you (even if you want them to).</li><li>This does not prevent you from using Reactions when other players play Attacks.</li></ul><ul class="rules"><li>Lighthouse only protects you from Attacks if the Lighthouse is in effect when the Attack is played, regardless of when the Attack’s effects would hit you. So for example, if you get attacked by a Corsair or Blockade, playing a Lighthouse afterwards will not protect you from their attacks.</li><li>This protects you for the rest of the turn when you play it. So for example, if after playing a Lighthouse, you gain a Duchy, this will protect you from another player’s Black Cat.</li><li>With the 2022 revisions, Lighthouse’s phrasing concerning its defense ability has shifted from “while in play” to “until your next turn”. As a result:<ul><li>Lighthouse offers no protection during your next turn. This means that on the turn after you play a Lighthouse, you can still get attacked by another player’s Black Cat.</li><li>If you play a Lighthouse via a Command variant, you will be protected against Attacks.</li></ul></li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Look at the top 3 cards of your deck. Trash one of them. Discard one of them. Put the other one back on top of your deck.',
		help: '<ul class="faq"><li>You do the things in order - first trash one of the cards, then discard one, then put the last one on top of your deck.</li><li>So if there is only one card (even after shuffling), you trash it, and if there are only 2 cards, you trash one then discard the other.</li></ul><ul class="rules"><li>Resolve any on-trash effects of the trashed card before discarding the next card, and resolve any on-discard effects of the discarded card before putting back the last card.</li><li>The three cards you look at are not considered to still be the top cards of your deck <em>while</em> you are resolving Lookout. Thus, for example, if you trash a card with an on-trash draw bonus, such as Overgrown Estate, you will not draw one of the remaining two cards you’re looking at, but rather the next one down.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn: <b>+<img src="assets/Coin2.png" alt="2 coins"></b>.',
		help: '<ul class="faq"><li>You get +<img src="assets/Coin2.png" alt="2 coins"> when you play this and another +<img src="assets/Coin2.png" alt="2 coins"> at the start of your next turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Choose one: Put the top card of your deck face down on your Native Village mat (you may look at those cards at any time); or put all the cards from your mat into your hand.',
		help: '<ul class="faq"><li>When you play this, you either take all of the cards from your mat, or set aside the top card of your deck on your mat.</li><li>When you first set aside a card with Native Village, take a Native Village mat to put the cards on.</li><li>You can look at the cards on your mat whenever you like, but other players cannot.</li><li>You may choose either option even if there are no cards in your deck or no cards on your mat.</li><li>You cannot look at the top card before deciding whether to set it aside or take the cards from the mat.</li><li>At the end of the game, all cards from the mat are returned to your deck for scoring.</li></ul><ul class="rules"><li>If you choose to place the top card of your deck on the Native Village player mat you may then immediately look at the card, but your choice has been done.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Look at the top 5 cards of your deck. Either discard them all, or put them back in any order.',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>You discard all 5 cards (or however many were left after shuffling) or none of them.</li><li>If you do not discard them, put them back in any order.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If this is the first time you played an Outpost this turn, and the previous turn wasn’t yours, then take an extra turn after this one, and you only draw 3 cards for your next hand.',
		help: '<ul class="faq"><li>Outpost only does anything the first time you play it in a turn, and only if the previous turn was another player’s (meaning, you are not already taking an extra turn).</li><li>If these conditions are met, you take an extra turn, and only draw 3 cards for your next hand rather than 5 (thus usually only having 3 cards in hand on the extra turn).</li><li>Except for the smaller starting hand, the extra turn is a normal turn.</li><li>If you play e.g. Merchant Ship in the same turn as Outpost, the extra turn will be when you get the +<img src="assets/Coin2.png" alt="2 coins"> from Merchant Ship.</li><li>Extra turns do not count towards the tiebreaker of which tied player had fewer turns.</li></ul><ul class="rules"><li>Remember that the extra turn is completely normal (if it happens); it is the turn in which you play Outpost which is different, in that you only draw three cards during Clean-up.</li><li>This makes Outpost an exception to the basic rule that Duration cards are discarded from play during the Clean-up phase of the last turn on which they “do something”; Outpost doesn’t do anything on the extra turn it creates, but it is not cleaned up until the end of the extra turn regardless.</li><li>Playing Throne Room (or similar cards) on Outpost would seem to do nothing, but the Throne Room will still have to stay out with the Outpost as long as it does.</li><li>If you play more than 1 Outpost in a turn, the extra Outposts will do nothing and they will get discarded from play this turn. This is true even if the first Outpost was enchanted or played as a Way.</li><li>If the previous player played multiple Possessions, and tells you to play an Outpost on the first Possession turn, you get to decide whether to take the Outpost turn first, or one of the other Possession turns. Possession does not have any power in-between turns, making the choice your decision.</li><li>If you buy Mission or Seize the Day or play Voyage on the same turn you play Outpost, you can order those extra turns. The first one you take though, will start with a 3-card hand.</li><li>If you play Outpost and Lich in the same turn, you draw a 3-card hand, skip the Outpost turn, and you keep that hand for your next actual turn. Outpost is discarded during the next Clean-up that happens (either yours or another player’s).</li><li>If you play Voyage and Outpost in the same turn, you can take the extra turns in either order. If you take the Outpost turn second, Outpost will stay in play until you take its extra turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look at the bottom card of your deck. You may put it on top.',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>First draw a card and get +1 Action; then look at the bottom card of your deck, shuffling first if needed.</li><li>If you choose to put the bottom card on top of your deck, be sure not to look at the card above it.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: +<img src="assets/Coin1.png" alt="1 coin"> per Coin token on your Pirate Ship mat; or each other player reveals the top 2 cards of their deck, trashes one of those Treasures that you choose, and discards the rest, and then if anyone trashed a Treasure, you add a Coin token to your Pirate Ship mat.',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>Players revealing a card like Moat do so before you choose your option.</li><li>If you choose the first option, you get +<img src="assets/Coin1.png" alt="1 coin"> per Coin token on your Pirate Ship mat; the Coin tokens stay there.</li><li>If you choose the second option, each other player reveals the top 2 cards of their deck, trashes a revealed Treasure of your choice, if possible, and discards the rest of their revealed cards.</li><li>Then, if any players did trash a Treasure, you add a Coin token to your Pirate Ship mat (from the supply of tokens).</li><li>You get at most one Coin token per play of Pirate Ship.</li><li>Take a Pirate Ship mat when you first need one.</li></ul><ul class="rules"><li>Coin tokens on your Pirate Ship mat cannot be spent (as the Coin tokens from Dominion: Guilds can be).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Trash a card from your hand. +<img src="assets/Coin1.png" alt="1 coin"> per <img src="assets/Coin1.png" alt="1 coin"> it costs.',
		help: '<ul class="faq"><li>For example if you trash an Estate, which costs <img src="assets/Coin2.png" alt="2 coins">, you get +<img src="assets/Coin2.png" alt="2 coins"> (and +1 Buy).</li><li>If you trash a card with <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in the cost (from other expansions), you get nothing for those symbols.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Each other player discards the top card of their deck, then gains a Curse onto their deck.',
		help: '<p>This card was removed for the 2nd Edition of Seaside</p><ul class="faq"><li>The Curses are given out in turn order, which can matter when the Curse pile is low.</li><li>They go onto decks rather than into discard piles.</li></ul><ul class="rules"><li>Even when there are no Curses left, other players still discard the top card of their deck when Sea Hag is played.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain a copy of a card costing up to <img src="assets/Coin6.png" alt="6 coins"> that the player to your right gained on their last turn.',
		help: '<ul class="faq"><li>The card has to cost <img src="assets/Coin6.png" alt="6 coins"> or less when you play Smugglers; it does not have to have cost <img src="assets/Coin6.png" alt="6 coins"> or less when the player to your right gained it.</li><li>This looks at the most recent turn of the player to your right, even if you have taken multiple turns in a row.</li><li>The gained card does not have to have been bought by the other player, just gained; for example you can gain a copy of a card they gained with their own Smugglers.</li><li>If they gained multiple cards costing <img src="assets/Coin6.png" alt="6 coins"> or less, you choose between them; if they gained no such cards, you do not gain anything.</li><li>This can only gain cards that are present in the Supply; for example you cannot gain a Spoils (from Dominion: Dark Ages).</li><li>This is not an Attack, so Lighthouse and Moat do not stop it.</li></ul><ul class="rules"><li>You may choose a card the player to your right gained from the Trash.</li><li>If your opponent gained a Ruins or a Knight, Smugglers will only let you gain a copy if the top card of the Ruins or Knights pile has the same name. (This is quite unlikely in the case of Knights!)</li><li>Cards with a <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in their cost can never be gained by Smugglers.</li><li>You can choose to gain a copy of a card from an empty pile; if you do, you won’t gain anything.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If you have at least one card in hand, discard your hand, and at the start of your next turn, <b>+5 Cards</b>, <b>+1 Action</b>, and <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>If you have no cards in hand, then Tactician does nothing more and is discarded in the same turn’s Clean-up.</li><li>If you do have at least one card, you discard your hand, Tactician stays in play, and at the start of your next turn you get +5 Cards, +1 Buy, and +1 Action (and Tactician is discarded that turn).</li><li>If you use Throne Room on Tactician, you will discard your hand on the first play and will have no cards in hand for the second play, and so will not get the bonuses from it.</li></ul><ul class="rules"><li>You can Throne Room a Tactician, but (under ordinary circumstances) you do not get any extra cards (as described above). Still the Throne Room (or its variants) stays in play.</li><li>Like all Duration cards, Tactician only stays in play during your Clean-up phase if it will do something in a future turn. So, if you play Tactician but do not discard any cards, it will have no effect on your next turn and should be discarded during the same turn’s Clean-up phase.</li><li>When the +1 Card token is on Tactician, using a Throne Room variant on it becomes meaningful as it provides you a card to discard each time Tactician is played again.</li></ul>',
		flags: { village: true, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash this and a Treasure Map from your hand. If you trashed two Treasure Maps, gain 4 Golds onto your deck.',
		help: '<ul class="faq"><li>When you play this, you trash it and trash another Treasure Map from your hand, if you can.</li><li>If you did trash another copy of Treasure Map, then you gain 4 Golds, putting them onto your deck instead of your discard pile.</li><li>If you did not have another copy of Treasure Map in hand, then you just trash the one Treasure Map and nothing else happens.</li><li>If you Throne Room a Treasure Map, you will only trash the first Treasure Map once, and will gain no Golds.</li></ul><ul class="rules"><li>If you play a Command variant such as Band of Misfits, which then plays a Treasure Map, you can’t trash the Treasure Map from the supply, so you will fail to gain 4 Golds.</li><li>If you Possess someone and make them trash 2 Treasure Maps, both of them are set aside, and you gain 4 Golds to your discard pile.</li><li>Both Treasure Maps have to be trashed at once. This means that if you draw the second Treasure Map as a result of trashing the first one (e.g. by trashing a Cultist to Sewers), you can’t trash the second Treasure Map for 4 Golds.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>At the end of your Buy phase this turn, if you didn’t gain a Victory card in it, you may put this onto your deck.',
		help: '<ul class="faq"><li>If you didn’t gain any Victory cards during your Buy phase, you may put any or all of your played Treasuries on top of your deck at the end of it.</li><li>If you did gain at least one Victory card, all of the Treasuries are discarded normally.</li><li>Victory cards gained outside of the Buy phase, such as with Smugglers, don’t prevent you from putting Treasuries on your deck.</li></ul><ul class="rules"><li>In 2022, Treasury was reworded, which changed its topdecking condition from not buying a Victory card to not gaining a Victory card in your Buy phase.</li><li>Returning from your Buy phase to your Action phase (e.g. with Villa or Cavalry) counts as ending your Buy phase, which will let you put Treasury onto your deck. You can potentially do this multiple times a turn.</li><li>If you gain a Cavalry, you get the +2 Cards before you get to put Treasury onto your deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Action</b><br>Discard 3 cards.',
		help: '<ul class="faq"><li>If there are fewer than 3 cards for you to draw (after shuffling), you still discard 3 cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn: <b>+2 Cards</b> and <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>You draw 2 cards and get +1 Buy when you play this, and draw another 2 Cards and get +1 Buy at the start of your next turn.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 327,
		name: 'Astrolabe',
		set: 'Seaside',
		edition: [2],
		cardType: ['Treasure', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn: <b>+<img src="assets/Coin1.png" alt="1 coin"><br>+1 Buy</b>.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>This gives you +1 Buy and +<img src="assets/Coin1.png" alt="1 coin"> on the turn you play it, and +1 Buy and +<img src="assets/Coin1.png" alt="1 coin"> on your next turn too.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 328,
		name: 'Monkey',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Until your next turn, when the player to your right gains a card, <b>+1 Card</b>.<br>At the start of your next turn, <b>+1 Card</b>.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>This includes cards they gain on other players’ turns, such as a Curse they gain on your turn via Witch.</li></ul><ul class="rules"><li>When the player to your right gains a card, if it’s their turn, they resolve any of their on-gain effects before you draw a card.</li><li>So if they gain an Attack card to make you discard to Skirmisher, you’ll first discard, and then draw with Monkey.</li><li>However, if they play a Berserker, you’ll draw with Monkey when they gain the cheaper card, and afterwards you’ll have to discard.</li><li>If your Monkey draws a Reaction that can react to the card they gained (e.g. they gain a Treasure and you draw a Pirate), you can immediately use it.</li><li>If the player to your right gains a Province, you can trash a Fool’s Gold from your hand, and then draw the gained Gold with Monkey.</li><li>If you play this with Way of the Chameleon, you get +<img src="assets/Coin1.png" alt="1 coin"> when the player to your right gains a card during your turn. After your turn ends, you’ll get +1 Card when they gain a card, and +1 Card at the start of your next turn.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 329,
		name: 'Sea Chart',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If you have a copy of it in play, put it into your hand.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>If you have a copy of the revealed card in play - including the just played Sea Chart, or a Duration card that you have in play from a previous turn - then you put the revealed card into your hand; otherwise, you leave the card on top of your deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 330,
		name: 'Blockade',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action', 'Duration', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">, setting it aside.<br>At the start of your next turn, put it into your hand. While it’s set aside, when another player gains a copy of it on their turn, they gain a Curse.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>The gained card comes from the Supply and is set aside; put it on the Blockade to remember which card goes with Blockade.</li><li>If the gained card somehow doesn’t end up set aside (for example if you trash it with Watchtower from Prosperity), nothing further happens; if the card is set aside, then you put it into your hand on your next turn, and until then, when other players gain the card on their own turns, they also gain a Curse.</li></ul><ul class="rules"><li>Like all Duration Attacks, you have to reveal your Moat as soon as another player plays a Blockade.</li><li>The card you gain is immediately set aside, and doesn’t visit your discard pile. So if you gain a Nomad Camp or Ghost Town, their abilities won’t trigger.</li><li>If a card moves itself when you gain it (e.g. Berserker or Villa), Blockade will fail to keep that card set aside for your next turn.</li><li>If Blockade fails to keep its gained card set aside (because it got moved away), you’ll discard the Blockade from play during Clean-up.</li><li>This only Curses another player if they gain a copy of a Blockaded card during their own turn. If you make them gain a copy of that card when it’s not their turn (e.g. you give them a copy with Messenger), they won’t gain a Curse.</li><li>If you gain a Curse with Blockade, then when another player gains a Curse on their turn (e.g. by buying Desperation), they will gain all Curses in the Supply.</li><li>If they have a Trader in hand, they can exchange any number of those Curses for Silvers, but they’ll still have to gain all the Curses.</li><li>During a Possession turn, no one will get Cursed from Blockade.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 331,
		name: 'Sailor',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Once this turn, when you gain a Duration card, you may play it.<br>At the start of your next turn, +<img src="assets/Coin2.png" alt="2 coins"> and you may trash a card from your hand.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>If you gain a Duration card the turn you play Sailor, playing it is optional.</li><li>This is cumulative; if you play two Sailors, you can play up to two gained Duration cards. However two Sailors cannot play the same gained Duration card twice.</li><li>Sailor applies to cards gained due to being bought, or gained other ways, such as with Workshop.</li><li>If you gain a Duration card in your Buy phase, Sailor can play it, even though it’s your Buy phase. If such a card gives you +Actions, that doesn’t let you play more Action cards in your Buy phase; if it draws Treasure cards, you can only play them if you haven’t bought any cards yet.</li><li>The ability to play Duration cards only happens the turn you play Sailor; on your next turn, you just get +<img src="assets/Coin2.png" alt="2 coins"> and may trash a card from your hand.</li></ul><ul class="rules"><li>The Duration doesn’t need to be an Action, meaning that you can play Night-Durations when you gain them (like Cobbler).</li><li>If you exchange a Hero for a Champion, you aren’t gaining it, so you can’t play it.</li><li>If you gain a Garrison and play it, you’ll immediately add a token to Garrison.</li><li>This can play a gained Duration even if it was gained to somewhere other than your discard pile (such as a Guardian, or a card gained with Blockade), or if another card is trying to move it at the same time (such as Gatekeeper). But if the gained card has already gotten moved (e.g. by another Sailor), then this can’t play it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 332,
		name: 'Tide Pools',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Action</b><br>At the start of your next turn, discard 2 cards.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>When you play this, you get +3 Cards and +1 Action, but at the start of your next turn, you have to discard 2 cards.</li><li>If you have only one card left in hand you discard that one, and if you have no cards you don’t discard any.</li><li>When you have multiple Duration cards doing things at the start of your turn, you can put them in an order to your advantage; for example if you have four Tide Pools and a Wharf, you could discard all of your cards to the Tide Pools, then draw the Wharf cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 333,
		name: 'Corsair',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action', 'Duration', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>At the start of your next turn, <b>+1 Card</b>. Until then, each other player trashes the first Silver or Gold they play each turn.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>The trashed Silver or Gold still made <img src="assets/Coin.png" alt="coins"> for the player to spend that turn.</li></ul><ul class="rules"><li>If you’re under multiple Corsair attacks, you’ll only trash 1 Silver and/or Gold.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 334,
		name: 'Pirate',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action', 'Duration', 'Reaction'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, gain a Treasure costing up to <img src="assets/Coin6.png" alt="6 coins"> to your hand.<hr>When any player gains a Treasure, you may play this from your hand.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>You can play this when you gain a Treasure, or when another player gains a Treasure.</li><li>If you play this during another player’s turn, your following turn is when your Pirate gains you a Treasure.</li><li>The Treasure you gain comes from the Supply and goes directly to your hand.</li></ul><ul class="rules"><li>If Capitalism is in play, gaining an Action with +<img src="assets/Coin.png" alt="coins"> in its text will let all players play Pirates from their hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 335,
		name: 'Sea Witch',
		set: 'Seaside',
		edition: [2],
		cardType: ['Action', 'Duration', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each other player gains a Curse.<br>At the start of your next turn, <b>+2 Cards</b>, then discard 2 cards.',
		help: '<p>This card was added for the 2nd Edition of Seaside</p><ul class="faq"><li>When you play this, you draw 2 cards and each other player gains a Curse; then at the start of your next turn, you draw 2 cards and then discard 2 cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 1
		},
		text: '<p><b>+2 Cards<br>+1 Action</b><br>At the start of Clean-up this turn, if you have a Potion in play, you may put this onto your deck.</p>',
		help: '<ul class="faq"><li>At the start of your Clean-up phase, before you discard any cards from your play area, if you have at least one Potion in play you may move Alchemist from your play area to the top of your deck. This is optional.</li><li>Since this happens at the start of Clean-up, under ordinary circumstances this means that the Alchemist will be in the new hand you draw at the end of Clean-up.</li><li>If you have multiple Alchemists and a Potion, you can put any or all of the Alchemists on top of your deck.</li><li>You do not have to have used the Potion to buy anything; you only need to have played it.</li><li>You can topdeck all your Alchemists, and then topdeck your Potion with Herbalist.</li><li>However, if you play a Potion but then remove it from the play area before Clean-up, such as by trashing it with Counterfeit, it is no longer in play and will not allow you to topdeck your Alchemists.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 1
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top 4 cards of your deck. Put the Coppers and Potions into your hand. Put the rest back in any order.',
		help: '<ul class="faq"><li>You draw a card and get +1 Action first.</li><li>Then reveal the top four cards of your deck, put the revealed Coppers and Potions into your hand, and put the other cards back on your deck in any order.</li><li>You cannot choose not to take all of the Coppers and Potions.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Trash a card from your hand.<br><b>+1 Card</b> per <img src="assets/Coin.png" alt="coins"> it costs.<br><b>+2 Cards</b> if it has <img src="assets/Potion.png" alt="potion"> in its cost.',
		help: '<ul class="faq"><li>If you trash a card costing <img src="assets/Coin0.png" alt="0 coins">, such as Curse or Copper, you do not draw any cards.</li><li>Otherwise you draw a card per <img src="assets/Coin1.png" alt="1 coin"> the card you trashed cost, and another two cards if it had <img src="assets/Potion.png" alt="potion"> in its cost. For example if you trashed a Golem, which costs <img src="assets/Coin4.png" alt="4 coins"><img src="assets/Potion.png" alt="potion">, you would draw 6 cards.</li></ul><ul class="rules"><li>If you trash a card with <img src="assets/Debt.png" alt="debt"> in the cost, the <img src="assets/Debt.png" alt="debt"> component is ignored.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 1
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Each other player gains a Curse.',
		help: '<ul class="faq"><li>You draw a card, get +1 Action, and each other player gains a Curse.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 1
		},
		text: 'Reveal cards from your deck until you reveal 2 Action cards other than Golems. Discard the other cards, then play the Action cards in either order.',
		help: '<ul class="faq"><li>Reveal cards from the top of your deck, one at a time, until you have revealed two Action cards that are not Golem.</li><li>Discard all of the revealed cards except for the non-Golem Actions you found. If you did not find any, you are done.</li><li>If you found one, play it. If you found two, play them both, in either order. You cannot choose not to play one of them.</li><li>These Action cards are not in your hand and so are unaffected by things that look for cards in your hand. For example if one of them is Throne Room, you cannot use it on the other one.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Once this turn, when you discard a Treasure from play, you may put it onto your deck.',
		help: '<p>Herbalist got errata in 2022 to take the focus off the order of discards in Clean-up.</p><ul class="faq"><li>When you play this, you get +1 Buy and +<img src="assets/Coin1.png" alt="1 coin">, and set up an effect to happen later in the turn; once, when you discard a Treasure card from play, you can put it onto your deck.</li><li>Herbalist is cumulative; if you play two Herbalists, or Throne Room an Herbalist, you can put up to two discarded Treasures onto your deck.</li><li>If you have Capitalism, Herbalist can put itself onto your deck.</li><li>If a Treasure isn’t getting discarded from play this turn (such as an Astrolabe, or a Crown that’s staying in play with a Duration), you can’t put it on your deck with Herbalist.</li><li>If you topdeck a Treasure that does something when you discard it from play (e.g. Capital), you still have to do its ability.</li><li>Herbalist cannot topdeck a Treasure that leaves play in any way other than by being discarded, such as Spoils, Stockpile, or any Treasure trashed by Counterfeit.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 1
		},
		text: 'Count your deck and discard pile. <b>+<img src="assets/Coin1.png" alt="1 coin"></b> per 5 cards total between them (round down).',
		help: '<ul class="faq"><li>When you play this, count the number of cards in your deck and discard pile combined, divide by 5, and round down. That is how many <img src="assets/Coin.png" alt="coins"> this produces for you.</li><li>Once played, the amount of <img src="assets/Coin.png" alt="coins"> you got does not change even if the number of cards changes later in the turn.</li><li>Make sure not to change the order of your deck when counting it; the order of your discard pile does not matter.</li><li>You will get to look through your discard pile as you count it.</li><li>You only count your deck and discard pile, not your hand or cards in play or set aside cards.</li></ul><ul class="rules"><li>It is sometimes possible to play multiple copies of Philosopher’s Stone that give different amounts of <img src="assets/Coin.png" alt="coins">. For example, if you have 20 cards in your deck and play this, it produces <img src="assets/Coin4.png" alt="4 coins">. Then, you could play a Crystal Ball, which could cause you to reveal and play another copy of this. When you play the second copy, you would only have 19 cards in your deck, so it would only produce <img src="assets/Coin3.png" alt="3 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 1
		},
		text: 'The player to your left takes an extra turn after this one, in which you can see all cards they can and make all decisions for them. Any cards or <img src="assets/Debt.png" alt="debt"> they would gain on that turn, you gain instead; any cards of theirs that are trashed are set aside and put in their discard pile at end of turn.',
		help: '<ul class="faq"><li>You are not taking a turn with the deck of the player to your left; that player is taking a turn, with you making the decisions and gaining the cards. The “you” in all cards still refers to the player being Possessed, not the player doing the Possessing.</li><li>Possession has several pieces to it:<ul><li>You can see the Possessed player’s cards for the entire turn, which means you will see their next hand during Clean-up. You will also see any cards they are entitled to see due to card rules; for example you can look at cards they have set aside with Native Village (from Dominion: Seaside).</li><li>You make all decisions for the Possessed player, including what cards to play, decisions those cards provide, and what cards to buy.</li><li>Any cards the Possessed player would have gained in any way, you gain instead; this includes cards bought, as well as cards gained due to Actions. The cards you gain this way go to your discard pile, even if they would have gone to that player’s hand or the top of their deck or somewhere else. You also get any <img src="assets/Debt.png" alt="debt"> tokens that player would have gotten (this is a change from the original version of Possession). You do not get any other tokens that player would have gotten (this is a change from the errata in Dominion: Empires).</li><li>During the Possessed turn, whenever one of that player’s cards is trashed, set it aside, and that player puts it into their discard pile at the end of the turn, after Clean-up. The card is still trashed, so for example you could have them trash a Mining Village (from Dominion: Intrigue) and get the +<img src="assets/Coin2.png" alt="2 coins">. Getting those cards back at end of turn does not count as those cards being gained (so for example, you will not get them). Other players’ cards that are trashed during that turn are not returned.</li><li>Cards passed with Masquerade (from Dominion: Intrigue) are not being gained or trashed. Exchanging a card (such as Soldier from Adventures) does not count as gaining or trashing. Cards returned to the Supply, such as with Ambassador (from Dominion: Seaside) are also not being trashed, and so return to the Supply normally.</li><li>If you make another player play an Attack via Possession, that Attack will hit you like it would normally. If you want to use a Reaction in response to that Attack (such as Moat), you would be the one revealing the Reaction, not the player being Possessed.</li><li>Possession causes an extra turn to be played, like the card Outpost does (from Dominion: Seaside). The extra turn happens only after this turn is completely over - you will have discarded everything and drawn your next hand. Outpost only prevents itself from giving a player two consecutive turns, it does not prevent other cards or the rules from doing so. So for example if you play Possession in a two-player game, then after the Possession turn, that player still gets their normal turn. If they played Outpost during that turn though, it would not give them an extra turn (unless another player took a turn in between, such as via another Possession). If you play both Outpost and Possession in the same turn, the Outpost turn happens first. If you make someone play Outpost during a turn in which you Possessed them, that player will get the extra turn and make decisions during it and so forth, not you; if you make someone play Possession during a turn in which you Possessed them, that will make that player Possess the player to their left, rather than you getting to Possess anyone further. Possession turns (and other extra turns) do not count for the tiebreaker. Once the game ends, no further turns are played, including extra turns from Possession and Outpost.</li><li>Unlike Outpost, Possession is not a Duration card. It is discarded in the Clean-up phase of the turn you played it.</li><li>Possession is cumulative; if you play it twice in one turn, there will be two extra turns after this one.</li></ul></li></ul><ul class="rules"><li>Possession is not an Attack, and cannot be blocked by cards like Moat.</li><li>In a 2-player game, if you make your opponent play Possession while you’re Possessing their deck, then you next take an extra turn with your opponent making all decisions, and then finally your opponent takes their normal turn.</li><li>If you play 2 Possessions, then make the Possessed player play Possession during the first Possessed turn, you finish all Possessed turns of the current Possessed player before moving on to the next player’s Possessed turns. Then the first Possessed player finally takes their normal turn. Extra turns happen in turn order.</li><li>Possession does not give control between turns. For example, if you play 2 Possessions, then make the Possessed player play Outpost during the first Possession turn, they decide whether the next turn is the other Possession turn, or the Outpost or Mission turn.</li><li>If you were Possessed before your normal turn, and you play Outpost or buy Mission during your normal turn, you will not take an extra turn.</li><li>Cards that are trashed and set aside on a Possession turn are not <em>in</em> the trash for the rest of the turn, which may matter for Necromancer or Graverobber. If you trash a Fortress during a Possession turn, you choose to either put it into your hand, or to set it aside, at which point it stops moving.</li><li>When they would gain a card, they do not resolve its when-gain abilities; you do. So if you make them gain a Spices, you get the +2 Coffers and not them.</li><li>Note that some cards care if you gain a card by buying it (e.g. Haggler); these abilities will never trigger on a Possession turn. This also means that if you make them buy a card and overpay for it (e.g. Stonemason), that ability never triggers.</li><li>Since they can’t gain any cards on the Possession turn, anything that cared about how many cards were gained (such as Cauldron and Labyrinth) will never trigger.</li><li>If a gainer cares about what card they gained, these cards didn’t gain a card, and so will do nothing. For example, if you Possess someone and have them play a Replace and gain a Province, they didn’t gain a Victory card, so no Curses are given out.</li><li>If they would gain a card to somewhere other than their discard pile (e.g. they would gain a Horse onto their deck with Supplies), the gained card is instead gained to your discard pile. The exception to this rule is cards which gain themselves to a particular location (like Guardian or Den of Sin).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 1
		},
		text: '<b>+1 Action</b><br>Each player (including you) reveals the top card of their deck and either discards it or puts it back, your choice. Then reveal cards from your deck until revealing one that isn’t an Action. Put all of the revealed cards into your hand.',
		help: '<ul class="faq"><li>First each player reveals their top card, and discards it or puts it back, with you choosing separately for each player.</li><li>If people care about the order, go clockwise, starting with yourself.</li><li>After that, reveal cards from the top of your deck until you reveal a card that is not an Action card.</li><li>If you run out of cards without revealing a non-Action card, shuffle your discard pile and keep going. If you have no discard pile left either, stop there.</li><li>Put all of the Action cards you revealed from your deck into your hand, plus that first non-Action card.</li></ul><ul class="rules"><li>Cards with multiple types, one of which is Action, are Actions.</li><li>The only cards that go into your hand are the ones revealed as part of revealing cards until finding a non-Action; you do not get discarded cards from the first part of what Scrying Pool did, or cards from other players’ decks.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 1
		},
		text: 'Trash a card from your hand. If it’s an…<br>Action card, gain a Duchy<br>Treasure card, gain a Transmute<br>Victory card, gain a Gold',
		help: '<ul class="faq"><li>If you trash a Curse to this, you do not get anything.</li><li>If you trash a card with more than one type to this, you get each applicable thing. For example if you trash an Action-Victory card (such as Nobles, from Dominion: Intrigue), you gain both a Duchy and a Gold.</li></ul><ul class="rules"><li>If you Transmute an Inherited Estate, you will gain a Gold (for trashing a Victory card) and a Duchy (for trashing an Action card).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 1
		},
		text: '<b>+2 Actions</b><br>You may gain an Action card costing up to <img src="assets/Coin5.png" alt="5 coins">.',
		help: '<ul class="faq"><li>Gaining an Action card is optional.</li><li>Cards with <img src="assets/Potion.png" alt="potion"> in their cost cannot be gained by this.</li></ul><ul class="rules"><li>Cards with multiple types, one of which is Action, are Actions and can be gained this way.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Victory'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 1
		},
		text: 'Worth <b>1<img src="assets/VP.png" alt="victory point"></b> per 3 Action cards you have (round down).',
		help: '<ul class="faq"><li>This is worth 1<img src="assets/VP.png" alt="victory point"> per 3 Action cards you have, rounded down; for example if you have 11 Action cards, your Vineyards are worth <b>3<img src="assets/VP.png" alt="victory points"></b> each.</li></ul><ul class="rules"><li>Cards with multiple types, one of which is Action, are Actions and so are counted by Vineyard.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Treasure'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: '+<img src="assets/Coin1.png" alt="1 coin"> per Treasure card you have in play (counting this).',
		help: '<ul class="faq"><li>When you play Bank, it makes +<img src="assets/Coin1.png" alt="1 coin"> per Treasure you have in play, counting itself.</li><li>If you play two copies of Bank in a row, the second one will be worth <img src="assets/Coin1.png" alt="1 coin"> more than the first one.</li><li>Playing more Treasures after Bank will not change how much <img src="assets/Coin.png" alt="coin"> you got from it.</li></ul><ul class="rules"><li>Example turn: You play 2 Coppers followed by a Crystal Ball. The Crystal Ball causes you to play a Bank which produces +<img src="assets/Coin4.png" alt="4 coins">. You play another Crystal Ball which causes you to play another Bank, which produces +<img src="assets/Coin6.png" alt="6 coins"> giving you a total of <img src="assets/Coin14.png" alt="14 coins"> to spend.</li><li>It doesn’t matter whether the other Treasures you have in play gave you <img src="assets/Coin.png" alt="coins"> when you played them (some that don’t include Potion or Horn of Plenty); Bank will still give you <img src="assets/Coin.png" alt="coins"> for them.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"><br>+1<img src="assets/VP.png" alt="victory point"></b><br>Trash a card from your hand. <b>+1<img src="assets/VP.png" alt="victory point"></b> per <img src="assets/Coin2.png" alt="2 coins"> it costs (round down). Each other player may trash a card from their hand.',
		help: '<ul class="faq"><li>Trashing a card is optional for the other players but mandatory for you.</li><li>If players care about the order things happen for this, you trash a card first, then each other player may trash a card, in turn order.</li><li>Only the player who played Bishop can get <img src="assets/VP.png" alt="victory point"> tokens from it.</li><li><img src="assets/Potion.png" alt="Potion"> and <img src="assets/Debt.png" alt="debt"> in costs is ignored, for example if you trash Golem (from Dominion: Alchemy), which costs <img src="assets/Coin4.png" alt="4 coins"><img src="assets/Potion.png" alt="potion">, you get 3<img src="assets/VP.png" alt="victory points"> total.</li><li>If you have no cards left in hand to trash, you still get the <img src="assets/Coin1.png" alt="1 coin"> and 1<img src="assets/VP.png" alt="victory point">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>If there are one or more empty Supply piles, <b>+1 Card</b>. If there are two or more, <b>+1 Buy</b> and <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.',
		help: '<ul class="faq"><li>You draw a card and can play two more Actions no matter what.</li><li>If there is just one empty pile in the Supply, you also draw another card.</li><li>If there are two or more empty piles, you both draw another card, and get +<img src="assets/Coin1.png" alt="1 coin"> and +1 Buy.</li><li>There are no further bonuses if three or more piles are empty.</li><li>This only checks how many piles are empty when you play it; what you got does not change if a pile becomes empty (or non-empty, such as due to Ambassador from Dominion: Seaside).</li><li>This only counts Supply piles, not non-Supply piles like Spoils from Dark Ages.</li></ul><ul class="rules"><li>Unlike Laboratory, if you play this when a pile is empty, you draw a card, then draw a second card separately. So if you only have 1 card in your deck, you can see that card before shuffling and topdecking a card with Star Chart.</li></ul>',
		flags: { village: true, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin3.png" alt="3 coins"><br>+1 Buy</b><br>The player to your left names a card. You can’t buy that card this turn.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>When you play this, you get <img src="assets/Coin3.png" alt="3 coins"> and +1 Buy.</li><li>The player to your left names a card, and you cannot buy the named card this turn.</li><li>This does not stop you from gaining the card in ways other than buying it (such as via Hoard).</li><li>They do not have to name a card in the Supply.</li><li>If you play multiple Contrabands in one turn, the player to your left names a card each time; if they name different cards, you cannot buy any of the named cards this turn.</li><li>If you play Contraband before other Treasures, you hide how much <img src="assets/Coin.png" alt="coin"> you will have; however the number of cards left in a player’s hand is public information.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Look through your discard pile, reveal any number of Coppers from it, and put them into your hand.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>This card lets you look through your discard pile, something you normally are not allowed to do.</li><li>You only get to look through your discard pile when you play this.</li><li>You do not have to show the other players your entire discard pile, just the Coppers you take out.</li><li>After you take out the Coppers, you can leave your discard pile in any order.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin3.png" alt="3 coins"> more than it.',
		help: '<ul class="faq"><li>If you do not have a card to trash, you do not gain one.</li><li>If you do gain a card, it comes from the Supply and is put into your discard pile.</li><li>The gained card does not need to cost exactly <img src="assets/Coin3.png" alt="3 coins"> more than the trashed card; it can cost that much or less, and can even be another copy of the trashed card.</li></ul><ul class="rules"><li><img src="assets/Potion.png" alt="Potion"> is counted as part of the cost, so you could Expand a Familiar into a Possession.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Trash any number of cards from your hand. Gain a card with cost exactly equal to the total cost in <img src="assets/Coin.png" alt="coin"> of the trashed cards.',
		help: '<ul class="faq"><li>“Any number” includes zero.</li><li>If you trash no cards, you have to gain a card costing <img src="assets/Coin0.png" alt="0 coins"> if you can.</li><li>If there is no card at the required cost, you do not gain a card.</li><li>The card you gain comes from the Supply and is put into your discard pile.</li><li><img src="assets/Potion.png" alt="Potion"> (on cards from Dominion: Alchemy) and <img src="assets/Debt.png" alt="debt"> (on cards from Dominion: Empires) are not added, and the card you gain cannot have those symbols in its cost.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player discards down to 3 cards in hand.<hr>While you have this in play, when you buy a card, <b>+1<img src="assets/VP.png" alt="victory point"></b>.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>You get +1<img src="assets/VP.png" alt="victory point"> for each card you buy, but do not get +1<img src="assets/VP.png" alt="victory point"> for gaining a card some other way.</li><li>Multiple copies of Goons are cumulative; if you have two Goons in play and buy a Silver, you get +2<img src="assets/VP.png" alt="victory points">.</li><li>However if you King’s Court a Goons, despite having played the card 3 times, there is still only one copy of it in play, so buying Silver would only get you +1<img src="assets/VP.png" alt="victory point">.</li></ul><ul class="rules"><li>Buying Events does not give you <img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Buy<br>+<img src="assets/Coin2.png" alt="2 coins"></b><hr>You can’t buy this if you have any Coppers in play.',
		help: '<ul class="faq"><li>A single Copper in play is enough to stop you from buying Grand Market.</li><li>You do not have to play all of the Treasures in your hand.</li><li>Coppers in your hand do not stop you from buying Grand Market - only Coppers in play do.</li><li>Coppers that were in play earlier in the turn but aren’t anymore also do not stop you; if you have 11 Coppers in play and 2 Buys, you could buy a Mint, trash all of your played Treasures, and then buy a Grand Market.</li><li>You can gain Grand Market other ways - for example with Expand - whether or not you have Coppers in play.</li><li>Treasures other than Copper do not prevent you from buying Grand Market, even if they are worth <img src="assets/Coin1.png" alt="1 coin"> (such as Loan).</li><li>Remember you cannot play more Treasures after buying a card.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Treasure'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><hr>This turn, when you gain a Victory card, if you bought it, gain a Gold.',
		help: '<ul class="faq"><li>You only gain a Gold when you gain a Victory card that you bought, not when you gain a Victory card other ways (such as via War Chest).</li><li>The Gold comes from the Supply and is put into your discard pile.</li><li>This is cumulative, and works on all gains; for example if you have two Hoards in play, and buy and gain two Estates, you’ll gain four Golds total.</li></ul><p>Hoard got errata in 2022 so that it’s no longer a while-in-play effect, and the Gold gain was delayed to when you gained the bought Victory card.</p><ul class="rules"><li>If you play this twice with e.g. Tiara or Crown, buying and gaining a Victory card will gain you two Golds.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'You may play an Action card from your hand three times.',
		help: '<ul class="faq"><li>This is similar to Throne Room, but plays the Action three times rather than twice.</li><li>Playing an Action card from your hand is optional.</li><li>If you do play one, you resolve it completely, then play it a second time, then play it a third time.</li><li>You cannot play other cards in-between (unless told to by the card, such as with King’s Court itself).</li><li>Playing Action cards with King’s Court is just like playing Action cards normally, except it does not use up Action plays for the turn.</li><li>For example if you start a turn by playing King’s Court on Village, you would draw a card, get +2 Actions, draw another card, get +2 Actions again, draw a 3rd card, and get +2 Actions again, leaving you with 6 Actions.</li><li>If you King’s Court a King’s Court, you may play an Action card three times, then may play another Action card three times, then may play a 3rd Action card three times; you do not play one Action card nine times.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png" alt="1 coin"><br>Reveal cards from your deck until you reveal a Treasure. Discard it or trash it. Discard the other cards.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>When you play Loan, you get <img src="assets/Coin1.png" alt="1 coin">, reveal cards from the top of your deck until revealing a Treasure card, and then decide whether to trash that card or discard it.</li><li>Then you discard all of the other revealed cards.</li><li>If you run out of cards before revealing a Treasure, shuffle your discard pile (but not the revealed cards) to get more; if you still do not find a Treasure, just discard all of the revealed cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may reveal a Treasure card from your hand. Gain a copy of it.<hr>When you gain this, trash all non-Duration Treasures you have in play.',
		help: '<ul class="faq"><li>When you gain this, you trash all of your non-Duration Treasure cards from play (but not ones in your hand or elsewhere). (Duration cards are in other expansions, such as Seaside).</li><li>This doesn’t cause you to lose the <img src="assets/Coin.png" alt="coins"> you made from those cards this turn.</li><li>Remember that you don’t have to play all of the Treasures from your hand each turn, just the ones you want to play, and you can’t play more Treasures after buying cards.</li><li>If you gain this in your Action phase, such as with Artisan, you will usually not have any Treasures in play to trash.</li><li>When you play this, you may reveal a Treasure card from your hand and gain a copy of it from the Supply, putting the gained card into your discard pile.</li><li>The revealed card stays in your hand amd can still be played that turn.</li><li>If you gain a Mint with Tiara in play, you can put the Mint on your deck, regardless of whether you trash the Tiara before or afterwards.</li></ul><ul class="rules"><li>If you have Capitalism, Mint can both gain and trash Action-Treasures.</li><li>If you played some Coppers, but trashed them all with Mint, that means you’re allowed to buy a Grand Market.</li><li>If you first gain Mandarin and top-deck all your Treasures, gaining Mint won’t trash any Treasures.</li><li>Mint can only gain copies from the Supply, so it can’t gain copies of Spoils, Heirlooms, or Treasures from the Black Market deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"><br>+1<img src="assets/VP.png" alt="victory point"></b>',
		help: '<ul class="faq"><li>You get +<img src="assets/Coin2.png" alt="2 coins"> and take a <img src="assets/VP.png" alt="victory point"> token.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player may discard a Curse. If they don’t, they gain a Curse and a Copper.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>This hits the other players in turn order, which can matter when the Curse or Copper piles are low.</li><li>Each of the other players in turn chooses whether or not to discard a Curse card, and the players who do not gain a Curse and a Copper from the Supply, putting them into their discard piles.</li><li>If either the Curse or Copper pile is empty, players still gain the other card.</li></ul><ul class="rules"><li>A player hit by Mountebank gains the Curse first, and then the Copper.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><hr>During a player’s Buy phase, this costs <img src="assets/Coin2.png" alt="2 coins"> less per Action card they have in play.',
		help: '<ul class="faq"><li>Most of the time, this costs <img src="assets/Coin8.png" alt="8 coins">.</li><li>During a player’s Buy phase, this costs <img src="assets/Coin2.png" alt="2 coins"> less per Action card that player has in play.</li><li>This applies to all Peddler cards, including ones in hands and decks.</li><li>It never costs less than <img src="assets/Coin0.png" alt="0 coins">.</li><li>If you play King’s Court on Worker’s Village, for example, that’s just two Action cards you have in play, even though you played Worker’s Village three times.</li><li>Buying cards using the promotional card Black Market is something that does not happen during a Buy phase, so Peddler still costs <img src="assets/Coin8.png" alt="8 coins"> then.</li></ul><ul class="rules"><li>During your Buy phase, if you get more Action cards into your play area (with e.g. Toil), Peddler’s cost will be further reduced. And if any Action cards leave your play area (e.g. you Scepter a card and play it as Way of the Butterfly), Peddler’s cost will increase.</li><li>Crown is an Action card, even if you play it as a Treasure in the Buy phase, and so playing it in the Buy phase affects Peddler’s cost.</li><li>When an Action is played during the Buy phase, Peddler’s cost changes as soon as the new card enters your play area. So if you have 1 Action in play and then play a Workshop (with e.g. Toil), Peddler now costs <img src="assets/Coin4.png" alt="4 coins">, and can be gained by Workshop’s effect.</li><li>Unlike Destrier, this changes cost only during your Buy phase. So if you return to your Action phase (with e.g. Villa or Cavalry), or enter your Night and/or Clean-up phase, Peddler will return to its normal cost of <img src="assets/Coin8.png" alt="8 coins">.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Treasure'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><hr>This turn, Actions cost <img src="assets/Coin2.png" alt="2 coins"> less.',
		help: '<ul class="faq"><li>All Action cards, including cards in the Supply, in play, in decks, and in hands, cost <img src="assets/Coin2.png" alt="2 coins"> less for the rest of the turn, but not less than <img src="assets/Coin0.png" alt="0 coins">.</li><li>This is cumulative; if you play two Quarries in your Buy phase, then King’s Court will only cost <img src="assets/Coin3.png" alt="3 coins">, rather than the usual <img src="assets/Coin7.png" alt="7 coins">.</li><li>This is also cumulative with other effects that modify costs.</li></ul><p>With the 2022 updated release, Quarry (as well as Hoard) was tweaked to lose its “while in play” wording, converting it to “this turn”.</p><ul class="rules"><li>If you play this twice with e.g. Tiara or Crown, costs will be reduced by <img src="assets/Coin4.png" alt="4 coins">, to a minimum of <img src="assets/Coin0.png" alt="0 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Each other player reveals the top 3 cards of their deck, discards the Actions and Treasures, and puts the rest back in any order they choose.',
		help: '<ul class="faq"><li>The other players shuffle if necessary to get 3 cards to reveal, and just reveal what they can if they still have fewer than 3 cards.</li><li>They discard revealed Treasures and Actions and put the rest back on top in whatever order they want.</li></ul><ul class="rules"><li>The order in which cards were returned to your deck is public knowledge.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><hr>While you have this in play, when you gain a card, you may put that card onto your deck.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>If you gain multiple cards with this in play, this applies to each of them - you could put any or all of them on top of your deck.</li><li>This applies both to cards gained due to being bought, and to cards gained other ways with Royal Seal in play, such as with Hoard.</li></ul><ul class="rules"><li>If Royal Seal is no longer in play when you gain a card, such as because it was trashed with Mint or top-decked with Mandarin, you cannot use its ability.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><hr>While you have this in play, when you buy a non-Victory card costing <img src="assets/Coin4.png" alt="4 coins"> or less, gain a copy of it.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>Each time you buy a non-Victory card costing <img src="assets/Coin4.png" alt="4 coins"> or less with this in play, you gain another copy of the bought card.</li><li>If there are no copies left, you do not gain one.</li><li>The gained card comes from the Supply and goes into your discard pile.</li><li>If you have multiple Talismans, you gain an additional copy for each one; if you buy multiple cards for <img src="assets/Coin4.png" alt="4 coins"> or less, Talisman applies to each one.</li><li>For example if you have two Talismans, four Coppers, and two Buys, you could buy Silver and Trade Route, gaining two more Silvers and two more Trade Routes.</li><li>Talisman only affects buying cards; it does not work on cards gained other ways, such as with Expand.</li><li>Talisman only cares about the cost of the card when you buy it, not its normal cost; so for example it can get you a Peddler if you have played two Actions this turn, thus lowering Peddler’s cost to <img src="assets/Coin4.png" alt="4 coins">, or can get you a Grand Market if you have a Quarry in play.</li></ul><ul class="rules"><li>When you buy a card from the Black Market deck, you do not get a second copy of it even if Talisman is in play, since there is no second copy in the Supply.</li><li>Talisman, like most other gainers, cannot be used to gain cards with <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in their cost.</li><li>This checks the cost of a card when you buy it, even if it changes later. So if you buy a Fisherman for <img src="assets/Coin2.png" alt="2 coins"> and then gain a Sleigh with Charm, you will gain a second Fisherman, even though it now costs <img src="assets/Coin5.png" alt="5 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Trash a card from your hand. +<img src="assets/Coin1.png" alt="1 coin"> per Coin token on the Trade Route mat.<hr>Setup: Add a Coin token to each Victory Supply pile; move that token to the Trade Route mat when a card is gained from the pile.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>You get +1 Buy, and trash a card from your hand if you can.</li><li>Then you get +<img src="assets/Coin1.png" alt="1 coin"> per Coin token on the Trade Route mat.</li><li>This card has setup; at the start of games using it, you put a Coin token on each Victory card pile being used (including Kingdom card piles such as Gardens, and Colonies if used).</li><li>In the rare cases where there are more than 8 Victory piles, the tokens are not counter-limited; use a replacement.</li><li>Whenever any player gains the first card from a Victory card pile - whether by buying it or otherwise gaining it - the Coin token is moved to the mat.</li><li>So if no Victory cards have been gained this game, the mat has no tokens and Trade Route makes +<img src="assets/Coin0.png" alt="0 coins">; if four Provinces and one Estate have been gained, the mat has two tokens and Trade Route makes +<img src="assets/Coin2.png" alt="2 coins">.</li><li>If you are using the promotional card Black Market, and Trade Route is in the Black Market deck, you do the setup for Trade Route.</li></ul><ul class="rules"><li>Certain Victory cards come from split piles that are not themselves Victory card piles, such as Dame Josephine and Territory; gaining them does not add a token to the Trade Route mat.</li><li>However Castles are a Victory Card pile. A good rule of thumb would be whether Victory appears on the pile’s randomizer card.</li><li>The Trade Route token on a pile will not move if the top card of a pile is removed without gaining it, such as when you trash it with Salt the Earth, or exile it with Way of the Worm or Enclave.</li><li>If you gain a Victory card from the trash, you still move a Coin token from its Supply pile to the mat.</li><li>You get +<img src="assets/Coin.png" alt="coins"> after trashing a card. So if you trash a Hunting Grounds and gain the first Duchy, that will increase the +<img src="assets/Coin.png" alt="coins"> you get from this.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Discard any number of cards for +<img src="assets/Coin1.png" alt="1 coin"> each.<br>Each other player may discard 2 cards, to draw a card.',
		help: '<ul class="faq"><li>“Any number” includes zero.</li><li>You draw two cards first; the cards you just drew can be among the cards you discard.</li><li>Each other player chooses whether or not to discard 2 cards, then discards 2 cards if they chose to, then draws a card if they did discard 2 cards.</li><li>A player with just one card can choose to discard it, but won’t draw a card.</li><li>A player who discards but then has no cards left to draw shuffles in the discards before drawing.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png" alt="1 coin"><br>Reveal cards from your deck until you reveal a Treasure. Discard the other cards. Play that Treasure.',
		help: '<p>This card was removed for the 2nd Edition of Prosperity</p><ul class="faq"><li>When you play Venture, you reveal cards from your deck until revealing a Treasure card.</li><li>If you run out of cards before revealing a Treasure, shuffle your discard pile (but not the revealed cards) to get more; if you still don’t find a Treasure, just discard all of the revealed cards.</li><li>If you do find a Treasure, discard the other cards and play the Treasure.</li><li>If that Treasure does something when played, do that something. For example if Venture finds you another Venture, you reveal cards again.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Draw until you have 6 cards in hand.<hr>When you gain a card, you may reveal this from your hand, to either trash that card or put it onto your deck.',
		help: '<ul class="faq"><li>When you play this, you draw cards one at a time until you have 6 cards in hand.</li><li>If you have 6 or more cards in hand already, you don’t draw any cards.</li><li>When you gain a card, directly afterwards, you may reveal Watchtower from your hand, to either trash the gained card or put it on top of your deck (with Watchtower staying in your hand).</li><li>You may reveal Watchtower whether you gained the card due to buying it, or gained it some other way, such as with Expand or Mountebank.</li><li>You may reveal Watchtower each time you gain a card, and each gain is a separate decision; for example if another player plays Mountebank, you may reveal Watchtower to trash both the Copper and Curse, or just one, or trash one and put the other on your deck, and so on.</li><li>Cards trashed with Watchtower were still gained; they were just immediately trashed afterwards.</li><li>If a gained card is going somewhere other than to your discard pile, such as a card gained with Mine, you can still use Watchtower to trash it or put it on your deck.</li></ul><ul class="rules"><li>Trashing a card with Watchtower does not prevent on-gain effects from happening.</li><li>Watchtower’s topdecking happens after the gain happens; the card still visits the discard pile, or whatever location it was gained to.</li><li>Watchtower’s topdecking has the same timing as on-gain effects, so for example you could choose to topdeck Death Cart before gaining the 2 Ruins.</li><li>If you gain a Watchtower to your hand (with e.g. Artisan), you can react with that Watchtower to either trash or topdeck itself.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions<br>+1 Buy</b>',
		help: '<ul class="faq"><li>You draw a card and get +2 Actions and +1 Buy.</li></ul>',
		flags: { village: true, drawing: true, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 526,
		name: 'Anvil',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png" alt="1 coin"><br>You may discard a Treasure to gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>Discarding a Treasure is optional.</li><li>If you discard one, you gain a card costing up to <img src="assets/Coin4.png" alt="4 coins"> which comes from the Supply and goes to your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 527,
		name: 'Clerk',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Action', 'Reaction', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player with 5 or more cards in hand puts on onto their deck.<hr>At the start of your turn, you may play this from your hand.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>A player with no cards in their deck will have the card they put on top become the only card in their deck.</li><li>At the start of your turn you may play any number of Clerks without using up your regular Action play.</li></ul><ul class="rules"><li>You may use Clerk’s self-playing start-of-turn ability before, between, or after other start-of-turn effects. For instance, if you draw Clerk due to the effect of Den of Sin, it’s not too late to use Clerk’s Reaction ability.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 528,
		name: 'Investment',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Treasure'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand.<br>Choose one: <b>+<img src="assets/Coin1.png" alt="1 coin"></b>; or trash this to reveal your hand for <b>+1<img src="assets/VP.png" alt="victory point"></b> per differently named Treasure there.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>You trash a card no matter what; it’s okay if Investment was your last card in hand, you just fail to trash a card then.</li><li>Then you choose either to get +<img src="assets/Coin1.png" alt="1 coin"> or to trash Investment.</li><li>If you trash it, you reveal your hand and get +1<img src="assets/VP.png" alt="victory point"> per differently named Treasure there; for example if you reveal two Coppers and a Silver, you get +2<img src="assets/VP.png" alt="victory points">.</li><li>You can still play the revealed Treasures after resolving Investment.</li></ul><ul class="rules"><li>If you play the same Investment twice (e.g. with Crown) and trash it on the first play for <img src="assets/VP.png" alt="victory points">, then you can’t trash it on the second play for <img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 529,
		name: 'Tiara',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Treasure'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>This turn, when you gain a card, you may put it onto your deck.<br>You may play a Treasure from your hand twice.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>If you gain multiple cards after playing Tiara, you may put any or all of them onto your deck.</li><li>This applies both to cards gained due to being bought, and to cards gained other ways, such as with War Chest.</li><li>If you play a Tiara with a Tiara, you will be able to play two Treasures from your hand twice each - you don’t play one Treasure four times.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 530,
		name: 'Charlatan',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br>Each other player gains a Curse.<hr>In games using this, Curse is also a Treasure worth <img src="assets/Coin1.png" alt="1 coin">.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>This turns Curses into Treasures for the entire game and in all situations; it’s just like the bottom bar says “Curse - Treasure.”</li><li>They may be played for +<img src="assets/Coin1.png" alt="1 coin"> in the Buy phase. They are trashed from play when gaining Mint, Magnate counts them in your hand, Courtier (from Intrigue) gives you two choices when revealing one, and so on.</li><li>They are still Curses and are still worth <b>-1<img src="assets/VP.png" alt="victory point"></b> at the end of the game.</li></ul><ul class="rules"><li>Unlike Capitalism, Charlatan makes Curses stay as Treasures during scoring, so they will count for Keep.</li><li>Curses will be Treasures if Charlatan is in the Black Market deck, even if no one actually gains it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 531,
		name: 'Collection',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><br><b>+1 Buy</b><br>This turn, when you gain an Action card, <b>+1<img src="assets/VP.png" alt="victory point"></b>.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>You get +1<img src="assets/VP.png" alt="victory point"> for each Action card you gain, whether bought, or gained some other way.</li><li>Multiple copies of this are cumulative; if you have two Collections in play and buy a Village, you’ll get +2<img src="assets/VP.png" alt="victory points">.</li></ul><ul class="rules"><li>You only get <img src="assets/VP.png" alt="victory points"> for Actions you gain after you play the Collection; it doesn’t retroactively give you points for cards you gained earlier in the turn.</li><li>If the Collection leaves play (for instance, because you trashed it with Counterfeit), you still get <img src="assets/VP.png" alt="victory points"> from it for the rest of the turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 532,
		name: 'Crystal Ball',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png" alt="1 coin"><br>Look at the top card of your deck. You may trash it, discard it, or, if it’s an Action or Treasure, play it.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>If you don’t choose to do any of those things, you leave the card on your deck.</li><li>If this plays an Action during your Buy phase that gives you +Actions, that doesn’t let you play more Action cards in your Buy phase; if it draws Treasure cards, you can still play them.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 533,
		name: 'Magnate',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Reveal your hand. <b>+1 Action</b> per Treasure in it.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>For example, if your hand had two Coppers and a Silver, you’d draw 3 cards.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 534,
		name: 'War Chest',
		set: 'Prosperity',
		edition: [2],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'The player to your left names a card. Gain a card costing up to <img src="assets/Coin5.png" alt="5 coins"> that hasn’t been named for War Chests this turn.',
		help: '<p>This card was added for the 2nd Edition of Prosperity</p><ul class="faq"><li>The first War Chest you play in a turn can’t gain whatever card they name; the second can’t gain the card they name, or the card they previously named, and so on.</li><li>The gained card comes from the Supply and is put into your discard pile.</li><li>You can still gain the named cards other ways, just not via War Chests.</li><li>They do not have to name a card in the Supply; however War Chest gains a card from the Supply, and puts it into your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Worth <b>2<img src="assets/VP.png" alt="victory points"></b> per 5 differently named cards you have (round down).',
		help: '<ul class="faq"><li>At the end of the game, this is worth 2<img src="assets/VP.png" alt="victory points"> per 5 differently named cards in your deck, rounded down.</li><li>So if you have 0–4 different cards, it is worth 0<img src="assets/VP.png" alt="victory points">; if you have 5–9, it is worth 2<img src="assets/VP.png" alt="victory points">; if you have 10–14, it is worth 4<img src="assets/VP.png" alt="victory points">; if you have 15–19, it is worth 6<img src="assets/VP.png" alt="victory points">; and so on.</li><li>By default there are only 17 differently named cards available in a game, but sometimes there may be more cards, such as via Young Witch’s setup rule, or due to Tournament.</li><li>Use 8 Fairgrounds in a game with 2 players, and 12 for a game with 3 or more players.</li></ul><ul class="rules"><li>Differently named Shelters, Ruins, and Knights (from Dark Ages) count as different cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Reveal cards from your deck until you reveal a Treasure or Action card. Put that card into your hand and discard the rest.',
		help: '<ul class="faq"><li>Reveal cards from the top of your deck until you reveal a Treasure or Action card.</li><li>If you fail to find one (even after shuffling), just discard all of the revealed cards.</li><li>If you do find a Treasure of Action card, put it into your hand, and discard the rest of the revealed cards.</li><li>You do not choose Treasure or Action - you stop on the first card matching either type.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player reveals cards from the top of their deck until they reveal a Victory card or a Curse. They put it on top and discard the rest.',
		help: '<ul class="faq"><li>Each other player reveals cards from the top of their deck until they reveal a Victory or Curse card.</li><li>If they do not find one (even after shuffling), they just discard all of the revealed cards.</li><li>If they do find one, they put the Victory or Curse card on top of their deck, and discard the other revealed cards.</li><li>You do not choose Victory or Curse – they stop on the first card that matches either type.</li></ul><ul class="rules"><li>Cards with Victory as one of multiple types, such as Nobles, are still Victory cards and can be left on top by Fortune Teller.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may discard a card for <b>+1 Action</b>.<br>You may discard a card for <b>+1 Buy</b>',
		help: '<ul class="faq"><li>First draw a card, and get +1 Action.</li><li>Then you may either discard one card to get another +1 Action; or you may discard one card to get +1 Buy; or you may discard two cards and get both +1 Action and +1 Buy; or you may discard no cards at all.</li><li>You only get the extra +1 Action or +1 Buy if you actually discarded a card for it.</li><li>You cannot discard multiple cards to get multiple +Actions or multiple +Buys.</li></ul>',
		flags: { village: true, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Reveal the top 4 cards of your deck, then discard them. +<img src="assets/Coin1.png" alt="1 coin"> per differently named card revealed.',
		help: '<ul class="faq"><li>Reveal the top 4 cards of your deck; if you have fewer than 4 cards (after shuffling), just reveal what you can.</li><li>Discard the revealed cards, and get +<img src="assets/Coin1.png" alt="1 coin"> per differently named card revealed. For example if you revealed Copper, Silver, Copper, Estate, that would be +<img src="assets/Coin3.png" alt="3 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you play this, gain a card costing up to <img src="assets/Coin1.png" alt="1 coin"> per differently named card you have in play (counting this). If it’s a Victory card, trash this.',
		help: '<ul class="faq"><li>This is a Treasure worth <img src="assets/Coin0.png" alt="0 coins">; you play it in your Buy phase, but do not get any <img src="assets/Coin.png" alt="coins"> for playing it.</li><li>However, when you play it, you gain a card costing up to <img src="assets/Coin1.png" alt="1 coin"> per differently named card you have in play. For example, if you have 5 differently named cards in play, you gain a card costing up to <img src="assets/Coin5.png" alt="5 coins">.</li><li>This counts itself, other played Treasures, played Actions, and any Duration cards (such as Caravan from Dominion: Seaside) played on your previous turn.</li><li>It only counts cards currently in play, not ones that were in play but left; for example if you played a Pillage (from Dominion: Dark Ages) this turn, you will have trashed it, so it will not count for Horn of Plenty.</li><li>If the card you gain is a Victory card, trash Horn of Plenty.</li><li>You do not have to play Horn of Plenty, and you choose the order that you play Treasures.</li><li>You do not trash Horn of Plenty if you gain a Victory card some other way while it’s in play (such as by buying one).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin3.png" alt="3 coins"></b><br>Discard 2 cards<hr>When another player plays an Attack card, you may first set this aside from your hand. If you do, then at the start of your next turn, <b>+1 Card</b> and return this to your hand.',
		help: '<ul class="faq"><li>When you play this, you get +1 Buy and +<img src="assets/Coin3.png" alt="3 coins">, and discard 2 cards from your hand.</li><li>If you do not have enough cards to discard, just discard what you can; you still get the +1 Buy and +<img src="assets/Coin3.png" alt="3 coins">.</li><li>When another player plays an Attack card, before that card does anything, you may reveal this from your hand. If you do, you set this aside, and at the start of your next turn, you return it to your hand and draw a card.</li><li>While it is set aside, it is not in play or in your hand, and cannot be further revealed to Attacks. Therefore it will only work on one Attack per round of turns.</li><li>You can reveal it for an Attack and still play it on your next turn.</li><li>You can reveal multiple Horse Traders to a single Attack. For example, if another player plays Followers, you could reveal and set aside two Horse Traders from your hand, then gain a Curse but discard no cards, as you would only have three cards in hand at that point. Then on your next turn you would pick up the two Horse Traders and also draw two cards.</li></ul><ul class="rules"><li>If the game ends while Horse Traders is set aside, it’s returned to its owner’s deck before scoring; this can matter for alt-VP cards such as Gardens.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal your hand. Reveal cards from your deck until you reveal one that isn’t a copy of one in your hand. Put it into your hand and discard the rest.',
		help: '<ul class="faq"><li>First you draw a card and get +1 Action.</li><li>Then you reveal your hand, and reveal cards from your deck until revealing one that does not have the same name as any of the cards in your hand.</li><li>If you do not find one (even after shuffling), just discard all of the cards revealed from your deck.</li><li>If you do find a card not matching any cards in your hand, put it into your hand and discard the other cards revealed from your deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player discards the top card of their deck. If it’s a Victory card they gain a Curse; otherwise they gain a copy of the discarded card or you do, your choice.',
		help: '<ul class="faq"><li>Each other player (in turn order) discards the top card of their deck; players with no cards (after shuffling) are unaffected.</li><li>For each player who discarded a card, if it is a Victory card, they gain a Curse, and otherwise, you choose: either that player gains a copy of the card, or you do.</li><li>If a card is revealed for which there are no copies in the Supply, no-one gains a copy of it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal your hand. If the revealed cards all have different names, <b>+3 Cards</b>. Otherwise, <b>+1 Card</b>.',
		help: '<ul class="faq"><li>If there are any two or more cards in your hand with the same name, you only draw one card; if there are no matches, you draw three cards.</li><li>Only the card names matter for this; Copper and Silver are different cards for example, despite both being Treasures.</li><li>If you have no cards in hand at all after playing Menagerie, then you have no matching cards, and so get +3 Cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Do this twice: Trash a card from your hand, then gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it.',
		help: '<ul class="faq"><li>Trash a card from your hand, and gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it; then trash another card from your hand, and gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than that card.</li><li>If you have no cards in hand, you do not trash anything or gain anything; if you have only one card in hand, trash it and gain a card costing <img src="assets/Coin1.png" alt="1 coin"> more than it.</li><li>If there is no card at the exact cost needed, you do not gain a card for that trashed card. For example you could use Remake to trash an Estate, gaining a Silver, then trash a Copper, gaining nothing, due to there being no cards costing <img src="assets/Coin1.png" alt="1 coin"> in the Supply.</li></ul><ul class="rules"><li>First trash a card, activating on-trash abilities; then gain a card, activating on-gain abilities; then trash a second card, activating its on-trash abilities; then gain a card, activating on-gain abilities.</li><li>This is in contrast to other cards that trash multiple cards at once (like Count). Even though Remake trashes 2 cards, the trashes take place one after another, instead of all at once. This means you can use Remake to trash the same Fortress twice, which is not possible with other two-card trashers such as Steward.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Each player may reveal a Province from their hand. If you do, discard it and gain any Prize (from the Prize pile) or a Duchy, onto your deck. If no-one else does, <b>+1 Card</b> and <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.',
		help: '<ul class="faq"><li>First you get +1 Action.</li><li>Then each player, including you, may reveal a Province card from their hand.</li><li>Then, if you revealed a Province, discard it, and you gain a Prize of your choice, or a Duchy, putting whatever card you took on top of your deck.</li><li>There are five Prizes, set out at the start of the game.</li><li>You cannot take Prizes from the trash or from other players; you can only take Prizes that no-one has taken yet this game.</li><li>You can take any Prize from the Prize pile; you do not have to take the top one.</li><li>You can take a Duchy instead, whether or not the Prizes have run out.</li><li>You can opt to take a Duchy even if the Duchy pile is empty, or a Prize even if no Prizes are left; in these cases you gain nothing.</li><li>After gaining your card or not, if no other player revealed a Province, you draw a card and get +<img src="assets/Coin1.png" alt="1 coin">.</li><li>So this card will play out one of four ways:<ol><li>if you do not reveal a Province and no-one else does either, you will get +1 Action +1 Card +<img src="assets/Coin1.png" alt="1 coin">;</li><li>if you reveal a Province and no-one else does, you will gain a Prize or a Duchy onto the top of your deck, as well as get +1 Action +1 Card +<img src="assets/Coin1.png" alt="1 coin">; the card drawn will always be the Prize or Duchy just placed on top of your deck;</li><li>if you reveal a Province and so does someone else, you will get +1 Action and gain a Prize or a Duchy, which will be on top of your deck;</li><li>if you do not reveal a Province but someone else does, you will just get +1 Action.</li></ol></li><li>You can look through the Prizes that players have not gained yet at any time.</li></ul><p>Prizes</p><ul class="faq"><li>There are five Prizes: Bag of Gold, Diadem, Followers, Princess, and Trusty Steed. These are cards which are never part of the Supply.</li><li>If the Prizes run out, that does not count towards the game end condition.</li><li>The Prizes may not be bought, or gained via cards like Horn of Plenty; they may only be gained via the card Tournament, or via cards that directly provide a way to gain them (such as Lurker from second edition Intrigue, which can gain Actions from the trash).</li><li>Ambassador (from Dominion: Seaside) cannot return Prizes to their pile.</li><li>Trashed Prizes go to the trash pile, like other cards; they do not return to the Prize pile.</li><li>If you are using the promotional card Black Market, do not put Prizes in the Black Market deck.</li><li>Even though Prizes cannot be bought, they have a cost of <img src="assets/Coin0.png" alt="0 coins">, which matters for cards like Remake.</li></ul><p>Bag of Gold</p><ul class="faq"><li>The Gold you gain is put on top of your deck.</li><li>If there are no Golds left in the Supply, you do not gain one.</li></ul><p>Diadem</p><ul class="faq"><li>When you play Diadem, you get an extra +<img src="assets/Coin1.png" alt="1 coin"> per unused Action you have. This means Actions, not Action cards. So for example if you play Farming Village (which gives you +2 Actions), then Diadem, Diadem will give you an extra +<img src="assets/Coin2.png" alt="2 coins">, for <img src="assets/Coin4.png" alt="4 coins"> total.</li><li>If you play no Action cards at all on your turn, you will have one unused Action, so you will get <img src="assets/Coin3.png" alt="3 coins"> total from Diadem.</li></ul><ul class="rules"><li>It is possible to steal Diadem from another player by using Thief.</li><li>If you play Diadem during your Action phase, such as with Black Market, it does not use up your remaining Actions; it only gives <img src="assets/Coin.png" alt="coins"> equal to their number.</li></ul><p>Followers</p><ul class="faq"><li>Do the things in the order listed. You draw 2 cards; then you gain an Estate; then each other player (in turn order) gains a Curse and discards down to 3 cards in hand.</li><li>A player with 3 or fewer cards in hand does not discard any cards.</li><li>If there are no Estates left, you do not gain one.</li></ul><p>Princess</p><ul class="faq"><li>This makes all cards cheaper (to a minimum of <img src="assets/Coin0.png" alt="0 coins">) for the rest of the turn.</li><li>This applies to cards everywhere - cards in the Supply, cards in hand, cards in decks. For example if you played Princess, then Remake, trashing a Copper, you could gain a Silver, as Silver would cost <img src="assets/Coin1.png" alt="1 coin"> while Copper would still cost <img src="assets/Coin0.png" alt="0 coins">.</li><li>This is cumulative with itself and with other forms of cost reduction: for instance, if you play a Bridge and then Princess, costs will be reduced by a total of <img src="assets/Coin3.png" alt="3 coins">; if you use Throne Room on a Princess, costs will be reduced by <img src="assets/Coin4.png" alt="4 coins">.</li></ul><ul class="rules"><li>Princess’s cost-reduction ability was originally below a dividing line checking to see “while it is in play”, but since 2022, it simply counts “this turn” when played.</li></ul><p>Trusty Steed</p><ul class="faq"><li>First choose any two of the four options; then do those options in the order listed. So if you choose both +2 Cards and the last option, you will draw cards before you gain the Silvers and put your deck into your discard pile.</li><li>The last option both gains you Silvers and puts your deck into your discard pile. If you choose that option and there are fewer than four Silvers left, just gain as many as you can.</li><li>You do not get to look through your deck as you put it into your discard pile.</li></ul><ul class="rules"><li>This doesn’t count as discarding, so it will not activate Tunnel, Faithful Hound, or Village Green.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Discard 2 cards. Each other player may reveal a Bane card from their hand; if they don’t, they gain a Curse.<hr>Setup: Add an extra Kingdom card pile costing <img src="assets/Coin2.png" alt="2 coins"> or <img src="assets/Coin3.png" alt="3 coins"> to the Supply. Cards from that pile are Bane cards.',
		help: '<p>Preparation</p><ul><li>In games using Young Witch, choose an additional Kingdom card costing <img src="assets/Coin2.png" alt="2 coins"> or <img src="assets/Coin3.png" alt="3 coins">, put its pile into the Supply, and mark its pile with the Bane card (underneath it, sideways). This is the “Bane” pile referred to by Young Witch; cards that start the game in this pile are “Bane cards.”</li><li>You may choose the card any way you like; if you are using randomizers to choose your 10 cards, you can reveal cards from the randomizer deck until finding one costing <img src="assets/Coin2.png" alt="2 coins"> or <img src="assets/Coin3.png" alt="3 coins">, and use that one.</li><li>If you are also using the card Trade Route (from Dominion: Prosperity) and the Bane pile is a Victory card pile, that pile gets a Coin token, like other Victory card piles; similarly, if Trade Route itself is the Bane pile, all Victory card piles get tokens as normal.</li><li>If you are using the promotional card Black Market, and Young Witch is in the Black Market deck, put out a Bane pile for Young Witch.</li></ul><ul class="faq"><li>This card causes there to be an extra pile in the Supply, called the Bane pile.</li><li>The extra pile is just like other Kingdom card piles - it can be bought, it can be gained via cards like Horn of Plenty, it counts for the end game condition.</li><li>When you play Young Witch, after you draw 2 cards and discard 2 cards, each other player may reveal a Bane card from their hand; each player who does not gains a Curse.</li><li>This attack hits other players in turn order, which matters when the Curse pile is low.</li><li>Players may respond to a Young Witch with Reaction cards like Horse Traders or Moat; those happen before Bane cards are revealed.</li></ul><ul class="rules"><li>You may select a Kingdom card pile to use as the Bane in whatever way you want—at random, choosing a card you particularly enjoy, etc.—as long as its cost is <img src="assets/Coin2.png" alt="2 coins"> or <img src="assets/Coin3.png" alt="3 coins"> and it’s not already part of the Kingdom.</li><li>If Young Witch is in the Black Market deck, you do put out a Bane; however, Black Market itself cannot be the Bane in that instance.</li><li>If the top card of a split pile costs either <img src="assets/Coin2.png" alt="2 coins"> or <img src="assets/Coin3.png" alt="3 coins"> (such as Settlers or Herb Gatherer), it can be chosen as the Bane. All cards from the split pile can be revealed to block Young Witch.</li><li>However, cards that the Bane gives you access to but do not come from the same supply pile <em>cannot</em> block Young Witch. For instance, if Page or Urchin is the Bane, Treasure Hunter or Mercenary is <em>not</em> a Bane card.</li><li>Any setup instructions or rule changes triggered by the presence of the Bane have their normal effect. For instance, if the Bane is a Liaison you have to select an Ally and everyone starts with a Favor token; if the Bane is Tracker, everyone starts with a Pouch; etc.</li><li>Any relevant setup instructions of any other cards will also apply as usual to the Bane. For example, the Bane will still get <img src="assets/Debt1.png" alt="1 debt"> from Tax; and if it’s an Action Supply pile, it may be chosen by Obelisk.</li><li>If the Bane is a Reaction that reacts to an Attack being played and leaves your hand when you use its ability (such as Beggar or Caravan Guard), you cannot both use its Reaction effect and block Young Witch; you must pick one.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you gain this, gain a cheaper card.',
		help: '<ul class="faq"><li>Normally Border Village costs <img src="assets/Coin6.png" alt="6 coins">, so it comes with a card costing up to <img src="assets/Coin5.png" alt="5 coins">.</li><li>If Border Village has a different cost (such as due to Highway) then that affects what you gain with it (though Highway would also affect the other cards).</li><li>Border Village goes to your discard pile first, then the card you gain with it.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin3.png" alt="3 coins"><hr>When you gain this, gain 2 Coppers.',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>If there are not two Coppers left, gain as many as you can.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look at the top 4 cards of your deck. Discard any number of them, then put the rest back on top in any order.',
		help: '<ul class="faq"><li>You draw a card first, then look at the top 4 cards of your deck.</li><li>If there are fewer than 4 cards left (even after shuffling), just look at as many as you can.</li><li>Discard any number of the cards you looked at - none, all four, or something in-between - and put the rest back on top of your deck in any order.</li><li>You do not reveal any of the cards, except whatever ends up on top of your discard pile.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Reveal your hand. <b>+1 Card</b> per Victory card revealed. If this is the first time you played a Crossroads this turn, <b>+3 Actions</b>.',
		help: '<ul class="faq"><li>First reveal your hand, and draw a card for each Victory card you revealed, if any.</li><li>The revealed cards all stay in your hand.</li><li>Then, if this is the first time you played a Crossroads this turn, you get +3 Actions.</li><li>Subsequent Crossroads this turn will give you cards but not Actions.</li><li>If you use Throne Room on Crossroads, you will play Crossroads twice, getting +3 Actions the first time but not the second time.</li></ul><ul class="rules"><li>Cards with multiple types of which one is the Victory type (such as Mill) are counted as Victory cards.</li><li>If your first Crossroads is either enchanted or played as a Way, the second one will not give +Actions.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain two cards onto your deck, with one costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it, and one costing exactly <img src="assets/Coin1.png" alt="1 coin"> less than it, in either order.',
		help: '<ul class="faq"><li>First trash a card from your hand, if able.</li><li>If you trashed a card, gain two cards, one costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than the trashed card, and one costing exactly <img src="assets/Coin1.png" alt="1 coin"> less than the trashed card.</li><li>The gained cards come from the Supply; gain them in either order, resolving any abilities due to gaining them also in that order.</li><li>If there is no card in the Supply at one of the costs, you still gain the other card if you can.</li><li>Put the gained cards on top of your deck rather than into your discard pile.</li><li>If you trash a Copper, which costs <img src="assets/Coin0.png" alt="0 coins">, you will fail to gain a card costing −<img src="assets/Coin1.png" alt="1 coin"> (and try to gain a card costing <img src="assets/Coin1.png" alt="1 coin">).</li></ul><ul class="rules"><li>Even cards that are normally gained directly into your hand, such as Guardian, Ghost Town, Night Watchman, or Den of Sin, are gained onto your deck instead by Develop. However, Villa does end up in your hand, since its ability moves it to your hand <em>after</em> gaining.</li><li>You first choose a cost either <img src="assets/Coin1.png" alt="1 coin"> more or <img src="assets/Coin1.png" alt="1 coin"> less than the trashed card, and gain a card of that cost; then you gain a card costing the other amount. You don’t choose both cards and then gain them; you select one and gain it, and then select the other, and gain it. This can matter if gaining the first card triggers on-gain effects that affect your decision about what to gain for the second card.</li><li>What matters is the cost of each card at the time you’re gaining cards, not at the time you play Develop.</li><li>For example, If you start your turn by Developing a card costing <img src="assets/Coin4.png" alt="4 coins"> and gain a Silver (costing <img src="assets/Coin3.png" alt="3 coins">) as your first gain, then you could gain a Destrier as your second gain: although Destrier cost <img src="assets/Coin6.png" alt="6 coins"> when you played Develop, your first gain reduced Destrier’s price to <img src="assets/Coin5.png" alt="5 coins"> and it’s now eligible for your second gain.</li><li>If you start your turn by Developing Wayfarer, and you gain a Duchy (costing <img src="assets/Coin5.png" alt="5 coins">) as your first gain, then you could gain a Gold as your second gain. Although Wayfarer cost <img src="assets/Coin6.png" alt="6 coins"> when you trashed it, gaining the Duchy reduced the Wayfarer’s cost to <img src="assets/Coin5.png" alt="5 coins">, meaning your second gain must cost <img src="assets/Coin6.png" alt="6 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each player (including you) looks at the top card of their deck and may discard it.<hr>In games using this, when you gain a Duchy, you may gain a Duchess.',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When a player plays Duchess, each player secretly looks at the top card of their deck, and either discards it or puts it back, their choice.</li><li>When a player gains a Duchy in a game with Duchess in the Supply, that player may also gain a Duchess, putting it into their discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+5 Cards</b><br>Discard 3 cards.<hr>When you gain this, each other player gains a Silver.',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>The Silvers come from the Supply and are put into discard piles.</li><li>Gaining them is not optional for the other players.</li><li>If there are not enough Silvers left to go around, deal them out in turn order, starting with the player whose turn it is.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Victory'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>2<img src="assets/VP.png" alt="victory points"><hr>When you gain this, trash a card from your hand and gain a card costing exactly <img src="assets/Coin2.png" alt="2 coins"> more than it.',
		help: '<ul class="faq"><li>When you gain this, whether by buying it or otherwise gaining it, you trash a card from your hand if able, and if you did, you gain a card from the Supply costing exactly <img src="assets/Coin2.png" alt="2 coins"> more than the trashed card, but not another copy of Farmland.</li><li>If there are no cards left in your hand to trash, you do not trash or gain a card, and if you trashed a card but there are no cards in the Supply costing exactly <img src="assets/Coin2.png" alt="2 coins"> more than the trashed card, you do not gain a card.</li><li>Use 8 copies of Farmland for games with 2 players, 12 for games with 3 or more players.</li></ul><ul class="rules"><li>Farmland got errata in 2022 to no longer have an on-buy trigger in order to avoid loops.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Treasure', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'If this is the first time you played a Fool’s Gold this turn, <b>+<img src="assets/Coin1.png" alt="1 coin"></b> otherwise <b>+<img src="assets/Coin4.png" alt="4 coins"></b>.<hr>When another player gains a Province, you may trash this from your hand, to gain a Gold onto your deck.',
		help: '<ul class="faq"><li>The first Fool’s Gold you play in a turn is worth <img src="assets/Coin1.png" alt="1 coin">, and all further copies are worth <img src="assets/Coin4.png" alt="4 coins">.</li><li>So if you play three of them, you get <img src="assets/Coin1.png" alt="1 coin"> + <img src="assets/Coin4.png" alt="4 coins"> + <img src="assets/Coin4.png" alt="4 coins">, or <img src="assets/Coin9.png" alt="9 coins"> total.</li><li>Fool’s Gold is also a Reaction.</li><li>When another player gains a Province, you may trash Fool’s Gold from your hand to gain a Gold from the Supply, putting it onto your deck.</li><li>You cannot use this ability when you gain a Province, only when another player does.</li></ul><ul class="rules"><li>If you play the same Fool’s Gold twice in the same turn (with Crown or Counterfeit), the second play will produce +<img src="assets/Coin4.png" alt="4 coins">.</li><li>If another player gains a Province during your turn (e.g. you play a Governor and they trash a King’s Court into Province), you can react with your Fool’s Gold.</li><li>Even if your 1st Fool’s Gold gets blocked by Highwayman, your other Fool’s Golds will still give +<img src="assets/Coin4.png" alt="4 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><hr>This turn, when you gain a card, if you bought it, gain a cheaper non-Victory card.',
		help: '<ul class="faq"><li>For the rest of the turn, whenever you gain a card that you bought, you gain a card that is cheaper than that card you bought, but not a Victory card. For example, you could buy a Province, gain that Province, and gain a Gold via Haggler.</li><li>Gaining a card is not optional.</li><li>The gained card comes from the Supply and is put into your discard pile.</li><li>Haggler only gives you an extra card when you gain a card you bought, not when you gain a card some other way (such as with Haggler itself).</li><li>If there is no cheaper card available in the Supply (for example, if you buy Copper), you do not gain a card.</li><li>The bonus is cumulative; if you play a Haggler, and Throne Room another Haggler, you will gain three cards for each card you buy.</li></ul><ul class="rules"><li>An amount of <img src="assets/Coin.png" alt="coins"> and <img src="assets/Debt.png" alt="debt"> and/or <img src="assets/Potion.png" alt="potion"> is only larger than another if both amounts are larger, or one is larger and one the same. This means that if you have a Haggler in play and then buy a Fortune, you can gain an Overlord, but not a Possession.</li><li>Haggler gains you a card after you gain the card you bought. So if you buy and gain a card from a split pile, that may reveal a different card from the pile, and if it’s cheaper (e.g. you gained a Distant Shore and revealed an Old Map), you can gain it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><hr>This turn, cards cost <img src="assets/Coin1.png" alt="1 coin"> less.',
		help: '<ul class="faq"><li>This makes all cards cheaper (to a minimum of <img src="assets/Coin0.png" alt="0 coins">) for the remainder of the turn.</li><li>This applies to cards everywhere - cards in the Supply, cards in hand, cards in decks, and so on.</li><li>For example if you played Highway, then Develop, trashing a Copper, you could gain an Estate, as Estate would cost <img src="assets/Coin1.png" alt="1 coin"> while Copper would still cost <img src="assets/Coin0.png" alt="0 coins">.</li><li>The effect is cumulative: if you Throne Room a Highway and then play another one, card costs are reduced by <img src="assets/Coin3.png" alt="3 coins"> (to a minimum of <img src="assets/Coin0.png" alt="0 coins">).</li></ul><ul class="rules"><li>Highway’s cost-reduction ability was originally below a dividing line checking to see “while it is in play”, but since 2022 it simply counts “this turn” when played.</li><li>If you use Procession on a Highway, costs end up reduced by <img src="assets/Coin2.png" alt="2 coins">.</li><li>If you play Highway using a Way other than Way of the Chameleon, or under the influence of Enchantress, you do not get the cost reduction.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png" alt="1 coin"><br>When you play this, you may gain a Copper to your hand.<hr>When you gain this, each other player gains a Curse.',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you play this, you may gain a Copper.</li><li>The Copper comes from the Supply and is put into your hand; you can immediately play it.</li><li>When you gain Ill-Gotten Gains, each other player gains a Curse.</li><li>The Curses come from the Supply and go into the players’ discard piles.</li><li>If there are not enough Curses left to go around, deal them out in turn order.</li><li>Ill-Gotten Gains is not an Attack, and gaining it is not playing an Attack; cards like Moat do not work against it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+2 Actions</b><br>Discard 2 cards.<hr>When you gain this, reveal any number of Action cards from your discard pile and shuffle them into your deck.',
		help: '<ul class="faq"><li>When you gain this, you look through your discard pile (something normally not allowed), and shuffle any number of Action cards from it into your deck.</li><li>You do not have to shuffle any Action cards into your deck.</li><li>You can shuffle the Inn you just gained into your deck; it is an Action card in your discard pile.</li><li>You must reveal the Action cards that you choose to shuffle into your deck.</li><li>It does not matter what order you leave your discard pile in afterwards.</li></ul><ul class="rules"><li>Anything that cares about shuffling (e.g. Star Chart or Order of Masons) can be used when you shuffle your entire deck. You may look through all the cards in your deck when using their abilities.</li><li>If you don’t reveal any Actions from your discard pile, you still shuffle your deck. This will still let you use effects like Star Chart and Order of Masons.</li><li>If you gain an Inn and you don’t shuffle it into your deck, it can still get moved by other abilities (like Changeling and Gatekeeper).</li><li>This is true even if you shuffle in a different copy of Inn. So if you gain an Inn, discard an Inn from Exile, and shuffle in the Inn you just discarded, then Changeling and Gatekeeper can still move the Inn you just gained.</li><li>If you gain an Inn onto your deck (with e.g. Artificer), shuffling your deck will cause other abilities (like Changeling and Gatekeeper) to lose track. This is true even if Inn is the only card in your deck, or if you keep Inn on top of your deck (with either Star Chart or Order of Astrologers).</li><li>If gaining an Action card causes you to gain an Inn (e.g. it was Border Village, or you played a Charm), you can shuffle both that Action card and the Inn back in your deck.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Silver.<br>Look at the top card of your deck; you may discard it.<br>Draw until you have 5 cards in hand.<br>You may trash a non-Treasure card from your hand.',
		help: '<ul class="faq"><li>This card does four separate things, in the order listed; you do all of them (the last one is optional).</li><li>First, gain a Silver from the Supply, putting it into your discard pile.</li><li>Second, look at the top card of your deck, and either discard it or put it back on top. If this causes you to shuffle, the Silver will be shuffled in.</li><li>Third, draw cards until you have at least five cards in hand. If you already have five or more cards in hand, you do not draw any cards.</li><li>Fourth, you may trash a card from your hand that is not a Treasure card.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br>Put a card from your hand onto your deck.<hr>When you gain this, put all Treasures you have in play onto your deck in any order.',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you gain this, you put all of your Treasures from play on top of your deck in any order.</li><li>You do not have to show this order to other players.</li><li>You have to put all of your Treasures on top; you cannot leave some out.</li><li>You only put Treasures from play on top of your deck, not unplayed Treasures from your hand.</li><li>This does not stop you from having the <img src="assets/Coin.png" alt="coins"> you got from playing those Treasures; for example, if you have +1 Buy and play four Golds and buy a Mandarin, you put the Golds on top of your deck, and still have <img src="assets/Coin7.png" alt="7 coins"> left to spend.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Buy</b><br>Each other player draws a card, then discards down to 3 cards in hand.',
		help: '<ul class="faq"><li>Drawing a card is not optional for the other players.</li><li>A player who only has 3 cards or fewer after drawing does not discard.</li></ul><ul class="rules"><li>If the card they draw is a Reaction that triggers on an attack (such as Moat or Caravan Guard), they cannot use it (but they can keep it in their hand to use against a future attack).</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Each other player reveals the top 2 cards of their deck, trashes a revealed Silver or Gold you choose, discards the rest, and gains a Copper if they didn’t reveal a Treasure. You gain the trashed cards.<hr>When you buy this, do its attack.',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you play this, you get +<img src="assets/Coin1.png" alt="1 coin">.</li><li>When you play this and also when you buy it, each other player reveals the top two cards of their deck, trashes a Silver or Gold they revealed that you choose, and discards the rest.</li><li>Each of these players that did not reveal a Treasure at all gains a Copper from the Supply, putting it into their discard pile.</li><li>Finally, you gain all of the Silvers and Golds trashed this way.</li><li>This cannot trash any Treasures except Silver or Gold.</li><li>Gaining a Noble Brigand without buying it does not cause this ability to happen.</li><li>Noble Brigand is an Attack card, and when you announce it, players can use cards like Moat in response.</li><li>However, buying a Noble Brigand is not “playing an Attack card,” and so cards like Moat cannot respond to that.</li></ul><ul class="rules"><li>Because when-Gain effects happen after when-Buy effects, you can buy a Noble Brigand, do its attack, and then use Trader to get a Silver instead of keeping the Noble Brigand.</li><li>If this trashed multiple Silvers or Golds, you gain those cards after each other player has been attacked.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png" alt="2 coins"></b><hr>This is gained onto your deck (instead of to your discard pile).',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you gain this card, it goes on top of your deck rather than into your discard pile.</li><li>This is true whether you gained it due to buying it, or gained it some other way.</li></ul><ul class="rules"><li>If you gain Nomad Camp but you exchange it (e.g. for a Changeling), the exchanged card goes in your discard pile, not on your deck.</li><li>If you gain this to your hand (e.g. with Artisan), you didn’t gain it to your discard pile, so Nomad Camp’s ability doesn’t trigger and it stays in your hand.</li><li>An effect that tries to move Nomad Camp <em>after</em> it is gained (such as Summon) will successfully move it from your deck without losing track of it.</li><li>If you Possess a player and make them gain a Nomad Camp, you’ll gain it onto your deck. This is in contrast to other ways to gain cards onto your deck (such as Crafters’ Guild), in which case Possession will make you gain the card to your discard pile instead.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Discard a card.',
		help: '<ul class="faq"><li>You draw a card, get +1 Action and +<img src="assets/Coin1.png" alt="1 coin">, and then discard a card.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Each player (including you) reveals the top 2 cards of their deck, and discards them or puts them back, your choice (they choose the order). Then, <b>+2 cards</b>.',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>First, each player, including you, reveals the top two cards of their deck, and either discards both of them or puts both of them back on top, your choice.</li><li>A player putting the cards back puts them back in an order they choose, and without needing to reveal that order.</li><li>Then, you draw two cards.</li><li>So if you put back the cards you revealed, you will draw them.</li></ul><ul class="rules"><li>Although in most cases, the order you put your 2 cards back won’t matter, it does matter when you aren’t drawing 2 cards (either because of your -1 Card token, or Way of the Chameleon).</li><li>Despite what the FAQ says, when players return their 2 cards on top of their deck, that order is public knowledge.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>This turn, you may put one of your Action cards onto your deck when you discard it from play.',
		help: '<ul class="faq"><li>When you play this, you draw a card, get +1 Action, and set up an effect to happen later in the turn: once, when you discard an Action card from play, you can put it onto your deck.</li><li>The Action card can be Scheme itself, or any other Action card you have in play, which might have been played before or after you played Scheme.</li><li>Scheme is cumulative; if you play two Schemes, or Throne Room a Scheme, you will be able to put up to two discarded Action cards onto your deck, and so on.</li></ul><ul class="rules"><li>Scheme still has its clean-up effect even if it is no longer in play by the time you start your clean-up phase; specifically, if you play Procession on Scheme, at the start of clean-up you will be able to put two action cards from play on top of your deck, even though your Scheme has already been trashed and will not be in play itself.</li><li>Due to the Stop-Moving rule, Scheme cannot topdeck an exchanged Traveller, and a Traveller cannot be exchanged if it’s been topdecked with Scheme.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png" alt="victory point"> for every 4 Victory cards you have (round down).',
		help: '<p>This card was removed for the 2nd Edition of Hinterlands</p><ul class="faq"><li>Silk Roads count themselves.</li><li>Round down; if you have 11 Victory cards, Silk Road is worth 2<img src="assets/VP.png" alt="victory points">.</li><li>Use 8 copies of Silk Road for games with 2 players, 12 for games with 3 or more players.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure from your hand to choose one:<br><b>+2 Cards</b> and <b>+1 Action</b>;<br>or <b>+1 Buy</b> and <b>+<img src="assets/Coin2.png" alt="2 coins"></b>.',
		help: '<ul class="faq"><li>Trashing a Treasure card from your hand is optional.</li><li>If you did trash a Treasure card, you choose either to get +2 Cards and +1 Action, or +<img src="assets/Coin2.png" alt="2 coins"> and +1 Buy.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may discard a Treasure, for <b>+3 Cards</b> and <b>+1 Action</b>.',
		help: '<ul class="faq"><li>Discarding a Treasure is optional. If you did discard one, you get +3 Cards and +1 Action.</li><li>You draw after discarding, so if you have to shuffle to get the 3 cards, you will end up shuffling in the card you discarded.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1, 2],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a Silver per <img src="assets/Coin1.png" alt="1 coin"> it costs.<hr>When you would gain a card, you may reveal this from your hand, to exchange the card for a Silver.',
		help: '<ul class="faq"><li>When you play this, trash a card from your hand, and if you did, gain a number of Silvers equal to the cost of that card in <img src="assets/Coin.png" alt="coins">.<ul><li>The Silvers come from the Supply and are put into your discard pile.</li><li>You only gain Silvers if you trashed a card.</li><li>If you trash a card costing <img src="assets/Coin0.png" alt="0 coins">, such as Copper, you will gain zero Silvers.</li><li>You can trash Silver if you want; you will gain three Silvers for it normally.</li><li>If costs are different, such as due to playing Highway, then Trader will give you a different number of Silvers, based on the current costs. For example if you play Highway and then Trader, trashing an Estate, you will only gain one Silver.</li><li>If you trash a card with <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in its cost, you do not get anything for the <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt">, just for the <img src="assets/Coin.png" alt="coins"> that the card cost.</li></ul></li><li>Trader is also a Reaction.<ul><li>When you gain a card, whether due to buying it or gaining it some other way, you may reveal Trader from your hand to exchange the gained card for a Silver.</li><li>You return the gained card to its pile (whether in the Supply or not), and take a Silver and put it into your discard pile.</li><li>You still “gained” the card you gained (and not the Silver), for effects that care about gaining a card; for example you could gain Border Village, use Trader to exchange it for a Silver, then gain a Duchy using Border Village’s ability, and use Trader to exchange that for a Silver too.</li><li>You can only exchange if both cards are available to be exchanged; you have to be able to return the gained card to its pile (only possible if it came from a pile), and you have to be able to take the Silver.</li></ul></li></ul><ul class="rules"><li>If you gain a Mill with Ironworks and then exchange it for a Silver, you get +1 Action and +1 Card.</li><li>If you gain a Trader to your hand (with e.g. Falconer), you can exchange the Trader for a Silver.</li><li>You can use Trader to exchange a Silver for a Silver. Since exchanging is not gaining, this means the exchanged Silver can avoid getting exiled by a Gatekeeper.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1, 2],
		cardType: ['Victory', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '2<img src="assets/VP.png" alt="victory points"><hr>When you discard this other than during Clean-up, you may reveal it to gain a Gold.',
		help: '<ul class="faq"><li>Use 8 copies for a 2-player game, 12 for 3 or more players.</li><li>This is worth 2<img src="assets/VP.png" alt="victory points"> at the end of the game, and can gain you a Gold each time you discard it.</li></ul><ul class="rules"><li>You cannot simply choose to discard Tunnel; something has to let you or make you discard it to activate its reaction. The key thing to look for is a card actually telling you to “discard” cards.</li><li>This can happen on your own turn (such as due to Oasis), or on someone else’s (such as due to Margrave). It does not happen in Clean-up, when you normally discard all of your played and unplayed cards.</li><li>It works when the Tunnel is discarded from anywhere - for example, from your hand (such as due to Oasis) or from your deck (such as due to Cartographer), or from being in Exile (a mat from Dominion: Menagerie).</li><li>If the card would not necessarily be revealed (such as when discarding multiple cards to Cartographer), you have to reveal it to gain a Gold.</li><li>This ability is optional, even if the card was already revealed for some other reason.</li><li>You do not gain a Gold if Tunnel is put into your discard pile without being discarded, such as when you gain it, or when your deck is put into your discard pile (such as with Messenger from Dominion: Adventures).</li><li>You can only reveal a given copy of Tunnel once per discard. That is, you can’t discard one Tunnel, reveal it twice, and get two Golds.</li><li>When you discard multiple cards at once (e.g. to a Minion), they are all discarded at once. This means if you discard a hand with Tunnel and Watchtower, you can reveal the Tunnel, but you can’t use your Watchtower anymore.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 727,
		name: 'Guard Dog',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>If you have 5 or fewer cards in hand, <b>+2 Cards</b>.<hr>When another player plays an Attack, you may first play this from your hand.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you play this, you draw 2 cards, then count the cards in your hand; if it’s 5 or fewer, you draw 2 more cards.</li><li>When another player plays an Attack card, you may play this before that Attack resolves; then the Attack still happens (unless you stop it another way, such as with a Moat you just drew). So if another player plays Berserker, and you respond with Guard Dog, you’ll first draw 2 cards, then discard down to 3 cards in hand.</li><li>As usual playing it means putting it into play and following its instructions.</li><li>If you play this during another player’s turn, you discard it from play during that turn’s Clean-up.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 728,
		name: 'Nomads',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png" alt="2 coins"></b><br>When you gain or trash this, <b>+<img src="assets/Coin2.png" alt="2 coins"></b>.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you gain or trash this during another player’s turn, you still get the +<img src="assets/Coin2.png" alt="2 coins">, but normally won’t be able to use it.</li></ul><ul class="rules"><li>When you gain this, getting the +<img src="assets/Coin2.png" alt="2 coins"> will let you take 2<img src="assets/VP.png" alt="victory points"> from Basilica.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 729,
		name: 'Trail',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><hr>When you gain, trash, or discard this, other than in Clean-up, you may play it.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you play this, you simply get +1 Card and +1 Action.</li><li>When you gain, trash, or discard this, other than in Clean-up, you may play it. As usual playing it means putting it into play and following its instructions.</li><li>If you play Trail on another player’s turn, the +1 Action won’t be useful, and you discard Trail from play in that turn’s Clean-up.</li><li>If you trash Trail, playing it means you get the Trail back; it will go into play, and be discarded into your discard pile in that turn’s Clean-up.</li><li>This still counts as trashing it; if you Remodel a Trail you can play it and then gain a Gold from Remodel, and so on.</li></ul><ul class="rules"><li>If you gain or trash a Trail during Clean-up (with e.g. Improve), you can’t use its Reaction.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 730,
		name: 'Weaver',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain two Silvers or a card costing up to <img src="assets/Coin4.png" alt="4 coins">.<hr>When you discard this other than in Clean-up, you may play it.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>You either gain 2 Silvers, or a card costing up to <img src="assets/Coin4.png" alt="4 coins"> (which might be a Silver).</li><li>You can play this when you discard it. As usual playing it means putting it into play and following its instructions.</li><li>If you play it on another player’s turn, it’s discarded in that turn’s Clean-up.</li></ul><ul class="rules"><li>This doesn’t say “choose one,” so if you play this with Elder, you can’t choose to gain 2 Silvers and a <img src="assets/Coin4.png" alt="4 coins">.</li><li>If a Vassal discards Weaver, you can react with Weaver to play it. Doing this causes Vassal to lose track, so you will only play Weaver once.</li><li>If you need to discard down to a certain number of cards (due to Militia), you discard all the cards at once. So if you discard multiple Weavers, first you discard all of them, and then you resolve their reactions one at a time.</li><li>When discarding multiple Weavers, if playing one of them triggers a reshuffle (e.g. it gains a Cavalry), then you can’t play any of the other Weavers.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 731,
		name: 'Berserker',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing less than this. Each other player discards down to 3 cards in hand.<hr>When you gain this, if you have an Action in play, play this.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>When you gain a Berserker, if you have an Action card in play, you play the Berserker; this means it will go into play, and you’ll gain a cheaper card and then the other players will discard down to 3 cards in hand.</li><li>They can still use cards like Moat then.</li><li>If you gain a Berserker with no Actions in play, however, you don’t play it.</li></ul><ul class="rules"><li>If you gain and play this with Innovation, Berserker loses track of itself, so Berserker telling you to play it will fail.</li><li>If you gain this on another player’s turn (e.g. their Barbarian trashes your Border Village), and you have an Action in play (most likely a Duration card), you can play the Berserker and attack them during their own turn. You’ll discard the Berserker from play during their Clean-up.</li><li>If you played 5 Highways, Berserker will cost <img src="assets/Coin0.png" alt="0 coins">, so it’ll fail to gain a card.</li><li>If another player would draw cards from you gaining the cheaper card (e.g. they played a Monkey), Berserker will force them to discard afterwards. This is in contrast to Skirmisher, which attacks the other players before they draw cards from Monkey.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 732,
		name: 'Cauldron',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Treasure', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><br><b>+1 Buy</b><br>The third time you gain an Action this turn, each other player gains a Curse.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>If you gain three Actions before playing Cauldron that turn, then it won’t give out a Curse.</li><li>It doesn’t matter how many non-Action cards you gained; the third time you gain an Action, each other player gains a Curse.</li><li>This is cumulative if you play multiple Cauldrons.</li><li>This a Treasure, so you play it in your Buy phase, but also an Attack, so cards like Guard Dog and Moat can be used in response to it.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: true },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 733,
		name: 'Souk',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin7.png" alt="7 coins"><br>−<img src="assets/Coin1.png" alt="1 coin"></b> per card in your hand (you can’t go below <img src="assets/Coin0.png" alt="0 coins">).<hr>When you gain this, trash up to 2 cards from your hand.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>For example, if you play Souk and have 3 other cards left in your hand, you’d get +<img src="assets/Coin7.png" alt="7 coins"> (and +1 Buy), and then lose <img src="assets/Coin3.png" alt="3 coins"> for a net gain of +<img src="assets/Coin4.png" alt="4 coins">.</li><li>You can’t go below <img src="assets/Coin0.png" alt="0 coins"> but might end up with less <img src="assets/Coin.png" alt="coin"> than you started with.</li><li>When you gain Souk, trash up to 2 cards from your hand; you don’t have to trash any.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 734,
		name: 'Wheelwright',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may discard a card to gain an Action card costing as much as it or less.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>You may discard any type of card, but can only gain an Action card.</li><li>If you discard an Action card, you can gain a copy of it.</li></ul><ul class="rules"><li>If you do discard, you have to gain an Action card if there is one to gain.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 735,
		name: 'Witch’s Hut',
		set: 'Hinterlands',
		edition: [2],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+4 Cards</b><br>Discard 2 cards, revealed. If they’re both Actions, each other player gains a Curse.',
		help: '<p>This card was added for the 2nd Edition of Hinterlands</p><ul class="faq"><li>You reveal the discarded cards even if they aren’t both Actions.</li><li>If they’re both Actions - even if they also have other types - each other player gains a Curse.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a card costing up to <img src="assets/Coin5.png" alt="5 coins">.',
		help: '<ul class="faq"><li>You trash a card from your hand if you can, and then gain a card whether or not you trashed one.</li></ul><ul class="rules"><li>Neither step is optional.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card onto your deck costing up to <img src="assets/Coin4.png" alt="4 coins">.',
		help: '<ul class="faq"><li>The card you gain goes directly to the top of your deck.</li></ul><ul class="rules"><li>With Trader, if you use its Reaction on the gained card, you’ll get a Silver in your discard pile, not a Silver on your deck.</li><li>If the card would be gained into your hand, such as Guardian, Ghost Town, Night Watchman, or Den of Sin, it is gained onto your deck instead.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Command'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Play a non-Command Action card from the Supply that costs less than this, leaving it there.',
		help: '<ul class="faq"><li>This plays a non-Command Action card from the Supply costing less than it.</li><li>Command is a type that appears on cards like this; it has no meaning beyond stopping these cards from playing each other.</li><li>Band of Misfits can only play the top card of a Supply pile.</li><li>The played Action card stays in the Supply; if an effect tries to move it, such as Death Cart trying to trash itself, it will fail to move it. If the card checks to see if it was trashed, like Death Cart does, that part will fail, but if it does not, like Acting Troupe (from Renaissance), the rest of the effect will still happen.</li><li>Since the played card is not in play, “while this is in play” abilities (such as Highway’s from Hinterlands) will not do anything.</li><li>Leave Band of Misfits in play until the Clean-up of the turn the card it played would have left play. Normally that means you’ll discard it that turn, but if Band of Misfits plays a Duration card (Duration cards are in other expansions), it will stay out like the Duration card would have, and if Band of Misfits plays a card like Throne Room that plays a Duration card twice, it will stay out in the same way the Throne Room would have.</li><li>If you play Band of Misfits multiple times, such as with Throne Room, leave it out until the Clean-up of the turn that the last of the cards it played would have left play.</li></ul><ul class="rules"><li>Band of Misfits was one of the main cards affected by the 2019 errata. Instead of imitating the abilities of any cheaper Action card in the Supply—which raised rules questions—it now simply tells you to play said card, leaving it in the Supply.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>Gain a Spoils from the Spoils pile.',
		help: '<ul class="faq"><li>Draw a card before gaining a Spoils.</li><li>The Spoils comes from the Spoils pile, which is not part of the Supply.</li><li>If there are no Spoils cards left, you do not get one.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Gain 3 Coppers to your hand.<br>When another player plays an Attack card, you may first discard this to gain 2 Silvers, putting one onto your deck.',
		help: '<ul class="faq"><li>When you play this, you gain three Coppers, putting them into your hand.</li><li>If there are not three Coppers left, just gain as many as you can.</li><li>When another player plays an Attack card, you may discard this from your hand.</li><li>If you do, you gain two Silvers, putting one on your deck and the other into your discard pile.</li><li>If there is only one Silver left, put it on your deck; if there are no Silvers left, you do not gain any.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Look at the top 3 cards of your deck. Choose one: Put them into your hand; or discard them and <b>+3 Cards</b>.<hr>When you trash this, gain a cheaper card.',
		help: '<ul class="faq"><li>When you play this, you look at the top three cards of your deck, and either put all three into your hand, or discard all three and draw the next three cards.</li><li>If you discard them and have to shuffle to draw three cards, you will shuffle in the cards you discarded and may end up drawing some of them.</li><li>When you trash Catacombs, you gain a card costing less than it.</li><li>This happens whether Catacombs is trashed on your turn or someone else’s, and no matter who has the card that trashed it.</li></ul><ul class="rules"><li>Putting the 3 cards you’re looking at into your hand will have no interaction with your -1 Card token and/or Way of the Chameleon. But if you discard those 3 cards, then the +3 Cards will be affected by your -1 Card token and/or Way of the Chameleon.</li><li>If you play this with Elder and choose both its options, you won’t get anything useful. You’ll put the 3 cards you’re looking at into your hand, but then you’ll still discard them and draw 3 different cards.</li><li>When you trash this with e.g. Remodel, you gain a card from Catacombs before you gain a card with Remodel.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Discard 2 cards; or put a card from your hand onto your deck; or gain a Copper.<br>Choose one: <b>+<img src="assets/Coin3.png" alt="3 coins"></b>; or trash your hand; or gain a Duchy.',
		help: '<ul class="faq"><li>This card gives you two separate choices: first you either discard two cards, or put a card from your hand on top of your deck, or gain a Copper; after resolving that, you either get +<img src="assets/Coin3.png" alt="3 coins">, or trash your hand, or gain a Duchy.</li><li>For example you might choose to discard two cards, then gain a Duchy.</li><li>You can choose an option even if you cannot do it.</li><li>If you trash multiple cards that do something when trashed at once, trash them all, then choose an order to resolve the things that happen due to them being trashed.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png" alt="1 coin"><br><b>+1 Buy</b><br>You may play a non-Duration Treasure from your hand twice. Trash it.',
		help: '<ul class="faq"><li>When you play this, you get <img src="assets/Coin1.png" alt="1 coin"> and +1 Buy, and you may play a Treasure card from your hand twice.</li><li>If you choose to do that, you trash that Treasure.</li><li>You still get any coins that Treasure gave you from playing it, despite trashing it.</li><li>If you use Counterfeit to play Spoils twice, you will get +<img src="assets/Coin6.png" alt="6 coins"> (in addition to the <img src="assets/Coin1.png" alt="1 coin"> from Counterfeit) and return Spoils to the Spoils pile; you will be unable to trash it.</li><li>If you use Counterfeit to play a Treasure that does something special when you play it (such as another Counterfeit), you will do that thing twice.</li></ul><ul class="rules"><li>Counterfeit got errata in 2022 so that it can’t play Treasure-Durations twice (like Astrolabe).</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Looter'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Each other player gains a Ruins. You may play a Cultist from your hand.<hr>When you trash this, <b>+3 Cards</b>.',
		help: '<ul class="faq"><li>When you play this, you draw two cards, then each other player gains a Ruins.</li><li>Go in turn order starting to your left; each player takes the top Ruins, revealing the next one each time.</li><li>If the Ruins pile runs out, players stop gaining them at that point.</li><li>After giving out Ruins, you may play another Cultist from your hand.</li><li>It can be one you just drew from playing Cultist, or one you already had in your hand.</li><li>Playing a Cultist this way does not use up any extra Actions you were allowed to play due to cards like Fortress - the original Cultist uses up one Action and that is it.</li><li>When you trash a Cultist, you draw three cards.</li><li>This happens whether or not it is your turn, and whether or not the card that causes Cultist to be trashed was yours.</li><li>If you trash a Cultist while revealing cards, such as to a Knight attack, you do not draw the revealed cards that are about to be discarded.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Looter'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may trash this or an Action card from your hand, for <b>+<img src="assets/Coin5.png" alt="5 coins"></b><hr>When you gain this, gain 2 Ruins.',
		help: '<ul class="faq"><li>When you play Death Cart, you may trash it or an Action card from your hand. You do not have to do either.</li><li>If you do either, you get +<img src="assets/Coin5.png" alt="5 coins">.</li><li>When you gain a Death Cart, either from buying it or from gaining it some other way, you also gain two Ruins.</li><li>You just take the top two, whatever they are.</li><li>If there are not enough Ruins left, take as many as you can.</li><li>The other players get to see which ones you got.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Worth 1<img src="assets/VP.png" alt="victory point"> per 3 Silvers you have (round down).<hr>When you trash this, gain 3 Silvers.',
		help: '<ul class="faq"><li>This is a Victory card, so use eight copies for games with two players, or 12 for games with three or more players.</li><li>At the end of the game, each Feodum is worth 1<img src="assets/VP.png" alt="victory point"> for every three Silvers in your deck, rounded down.</li><li>For example if you have 11 Silvers, your Feodums are worth 3<img src="assets/VP.png" alt="victory points"> each.</li><li>If Feodum is trashed, you gain three Silvers.</li><li>If there are not enough Silvers left, gain as many as you can.</li></ul><ul class="rules"><li>If you use Salt the Earth to trash Feodum from the Supply, you gain the 3 Silvers.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+1 Buy</b><br>Trash a card from your hand, then +<img src="assets/Coin1.png" alt="1 coin"> per differently named Treasure in the trash.',
		help: '<ul class="faq"><li>Trash a card from your hand if you can.</li><li>Whether or not you can, you still get +<img src="assets/Coin1.png" alt="1 coin"> per differently named Treasure in the trash, plus +1 Action and +1 Buy.</li><li>Multiple copies of the same Treasure card do not increase how much you get.</li><li>For example if the trash has four Coppers and a Counterfeit, you get +<img src="assets/Coin2.png" alt="2 coins">.</li></ul><ul class="rules"><li>First you trash a card, then you calculate how much <img src="assets/Coin.png" alt="coin"> you get. The card you trash with Forager, if it is a Treasure, may contribute to this calculation.</li><li>Effects that are triggered <em>by</em> trashing a card take place before calculating your +<img src="assets/Coin.png" alt="coins">. For instance, if you have Sewers, and you trash a card with Forager, whereupon Sewers lets you trash an additional card, a Treasure trashed by Sewers can also figure into the calculation.</li><li>However, the amount of <img src="assets/Coin.png" alt="coins"> Forager fields is calculated the instant after it trashes a card (once all when-trashed effects are resolved); do <em>not</em> wait until the Buy phase to check how many Treasures are in the trash.</li><li>If Treasures are removed from the trash (with e.g. Treasurer), future Foragers will give less <img src="assets/Coin.png" alt="coin">.</li><li>If you have Capitalism, Forager will count Action-Treasures in the trash.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you trash this, put it into your hand.',
		help: '<ul class="faq"><li>When you play this, you draw a card and get +2 Actions.</li><li>If this is trashed, you take it from the trash and put it into your hand.</li><li>This happens no matter whose turn it is when Fortress is trashed.</li><li>It is not optional.</li><li>You still trashed Fortress, even though you get it back; for example if you play Death Cart and choose to trash Fortress, you did trash it and so get <img src="assets/Coin5.png" alt="5 coins">.</li></ul><ul class="rules"><li>When you put Fortress in your hand after trashing it, it is not ‘gained’ - you just put it in your hand. You can’t reveal Trader or Watchtower to do something else with it.</li><li>If a Possessed player’s Fortress is trashed, the Possessing player chooses whether to put it back in hand immediately, as usual, or to set it aside with other trashed cards, to be returned to the Possessed player’s discard pile at the end of the turn.</li><li>If you trash a Fortress from the Supply with Lurker, you put the Fortress into your hand; it still doesn’t count as being “gained”.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Gain a card from the trash costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, onto your deck; or trash an Action card from your hand and gain a card costing up to <img src="assets/Coin3.png" alt="3 coins"> more than it.',
		help: '<ul class="faq"><li>You choose either option, then do as much of it as you can; you can choose an option even if you will not be able to do it.</li><li>You can look through the trash at any time.</li><li>If you choose to gain a card from the trash, the other players get to see what it is, and it goes on top of your deck.</li><li>If there is no card in the trash costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, you will fail to gain one.</li><li>Cards with <img src="assets/Potion.png" alt="potion"> (from Alchemy) or <img src="assets/Debt.png" alt="debt"> (from Empires) in the cost do not cost from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">.</li><li>If you choose instead to trash an Action card from your hand, the card you gain is put into your discard pile.</li></ul><ul class="rules"><li>Even if the card gained from the trash is one that would ordinarily be gained into your hand, such as Ghost Town, Night Watchman, or Den of Sin, it is gained onto your deck instead.</li><li>This does not apply to Villa, which moves itself into your hand <em>after</em> it is gained.</li><li>If you play this with Elder and choose both options, you have to do them in order. So you can’t trash an Action card and immediately regain it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Look through your discard pile. You may trash a non-Treasure card from it or from your hand. Gain a card costing up to <img src="assets/Coin3.png" alt="3 coins">.<br>At the end of your Buy phase this turn, if you didn’t gain any cards in it, exchange this for a Madman.',
		help: '<ul class="faq"><li>When you play this, look through your discard pile, and then you may choose to trash a card that is not a Treasure, from either your hand or your discard pile.</li><li>You do not have to trash a card and cannot trash Treasures.</li><li>After trashing or not, you must gain a card costing up to <img src="assets/Coin3.png" alt="3 coins">.</li><li>Then, at the end of your Buy phase normally, if you did not gain any cards during that Buy phase, you exchange the Hermit for a Madman. You return the Hermit to its pile, and you take a Madman from its pile (from outside the Supply) and put it into your discard pile.</li><li>If you buy any cards, or gain a card during your Buy phase (e.g. with War Chest or Ball), you won’t exchange the Hermit.</li><li>If Hermit is not in play (e.g. it got trashed by Procession, or it was played with Band of Misfits), you’ll fail to exchange the Hermit. And if there are no Madmen in the pile, you’ll fail to exchange the Hermit.</li><li>If you take multiple Buy phases in a turn (with e.g. Villa or Cavalry), Hermit will check each Buy phase separately to see if any cards were gained in it.</li><li>If you play Hermit after your Buy phase (e.g. you gain it at Night (with e.g. Vampire) or Clean-up (with e.g. Improve) and then play it with Innovation), you won’t have the chance to exchange it this turn.</li><li>If you Possess another player and make them play Hermit, they will never be able to gain a card during their Buy phase, so they’ll exchange the Hermit. But because they aren’t gaining the Madman, it doesn’t become yours.</li><li>If you buy a card with Black Market during your Action phase, that has no impact on whether or not you can exchange your Hermit.</li></ul><p>Madman</p><ul class="faq"><li>This card is not in the Supply; it can only be obtained via Hermit.</li><li>When you play it, you get +2 Actions, return it to the Madman pile if you can (this is not optional), and if you did return it, you draw a card per card in your hand.</li><li>For example if you had three cards in hand after playing Madman, you would draw three cards.</li><li>Normally nothing will prevent you from returning Madman to the Madman pile, but you may fail to due to playing Madman twice via cards like Throne Room.</li><li>So, for example, if you Procession a Madman, you will get +2 Actions, return Madman to the Madman pile, draw a card per card in your hand, get another +2 Actions, fail to return Madman and so not draw cards the second time, fail to trash Madman, and then gain an Action card costing exactly <img src="assets/Coin1.png" alt="1 coin"> if you can.</li></ul><ul class="rules"><li>Since Madman is not in the Supply, the Madman pile being empty does NOT count towards the three-pile end-game condition.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+4 Cards</b><hr>When you trash this, gain a Duchy or 3 Estates.',
		help: '<ul class="faq"><li>When you play this, draw four cards.</li><li>If this is trashed, you either gain a Duchy or three Estates, your choice.</li><li>If you choose the three Estates and there are not three left, just gain as many as you can.</li></ul><ul class="rules"><li>If you trash Hunting Grounds and the Duchy pile is empty, you can still choose Duchy (and gain nothing).</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck; you may discard it. Either way, if it is an…<br>Action card, <b>+1 Action</b><br>Treasure card, <b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Victory card, <b>+1 Card</b>',
		help: '<ul class="faq"><li>First you draw a card, then you reveal the top card of your deck, then you either discard that card or put it back on top of your deck.</li><li>Then you get bonuses based on the types of the card you revealed.</li><li>A card with multiple types gives you all relevant bonuses; if you revealed Harem (from Intrigue), you would both draw a card and get +<img src="assets/Coin1.png" alt="1 coin">.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Trash a card from your hand.',
		help: '<ul class="faq"><li>You draw before trashing.</li><li>You have to trash a card from your hand if you can.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Knight'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Shuffle the Knights pile before each game with it. Keep it face down except for the top card, which is the only one that can be bought or gained.',
		help: '<ul class="faq"><li>This is a pile in which each card is different.</li><li>There is the same basic ability on each card, but also another ability unique to that card in the pile, and they all have different names.</li><li>Follow the rules on Knights in order from top to bottom; Sir Michael causes players to discard before it trashes cards.</li><li>The ability they have in common is, each other player reveals the top two cards of their deck, trashes one of them that they choose that costs from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, and discards the rest; then, if a Knight was trashed, you trash the Knight you played that caused this trashing. Resolve this ability in turn order, starting with the player to your left.</li><li>Cards with <img src="assets/Potion.png" alt="potion"> (from Alchemy) or <img src="assets/Debt.png" alt="debt"> (from Empires) in the cost do not cost from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">.</li><li>The player losing a card only gets a choice if both cards revealed cost from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">.</li><li>If they both do and one is a Knight but the player picks the other card, that will not cause the played Knight to be trashed.</li><li>Dame Josephine is also a Victory card, worth 2<img src="assets/VP.png" alt="victory points"> at the end of the game. The Knight pile is not a Victory pile, and does not get a counter for Trade Route (from Prosperity) even if Dame Josephine starts on top.</li><li>If you choose to use the Knights with Black Market (a promotional card), put a Knight directly into the Black Market deck, rather than using the randomizer card.</li><li>Sir Martin only costs <img src="assets/Coin4.png" alt="4 coins">, though the other Knights all cost <img src="assets/Coin5.png" alt="5 coins">. When Sir Martin is the top card of the pile, it can be gained with an Armory and so on.</li><li>If Sir Vander is trashed, you gain a Gold; this happens whether it is trashed on your turn or someone else’s. The player who had Sir Vander is the one who gains the Gold, regardless of who played the card that trashed it.</li><li>When playing Dame Anna, you may choose to trash zero, one, or two cards from your hand. “If a Knight is trashed by this” only applies to the attack portion of Dame Anna’s ability. If you use the first part of her ability to trash a Knight from your own hand, that won’t make you trash Dame Anna.</li><li>Sir Michael causes players to discard before it trashes cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Looter'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Spoils from the Spoils pile. Each other player gains a Ruins.',
		help: '<ul class="faq"><li>First you gain a Spoils.</li><li>It comes from the Spoils pile, which is not part of the Supply.</li><li>If there are no Spoils cards left, you do not get one.</li><li>Then each other player gains a Ruins.</li><li>Go in turn order starting to your left; each player takes the top Ruins, revealing the next one each time.</li><li>If the Ruins pile runs out, players stop gaining them at that point.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Buy</b><hr>When one of your cards is trashed, you may discard this from your hand to gain a Gold.',
		help: '<ul class="faq"><li>When you play this, you draw a card and get +1 Action and +1 Buy.</li><li>When one of your cards is trashed, you may discard Market Square from your hand.</li><li>If you do, you gain a Gold.</li><li>If there is no Gold left in the Supply, you do not gain one.</li><li>You may discard multiple Market Squares when a single card of yours is trashed.</li></ul><ul class="rules"><li>Market Square has the same timing as ”when you trash this“ effects on other cards, such as Cultist, and you choose the order they happen in.</li><li>Market Square doesn’t have to have been in your hand when you trash a card; you could trash Cultist, drawing one or more Market Squares, and still discard them. This is allowed since your opponents can’t see what’s in your hand.</li><li>Market Square cannot be discarded if you trash a card you don’t own, such as with Lurker.</li><li>If you trash a Haunted Mirror, you can discard Market Square for either a Gold or a Ghost, but not both.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Name a card, then reveal the top card of your deck. If you named it, put it into your hand.',
		help: '<ul class="faq"><li>You get +1 Action and +<img src="assets/Coin2.png" alt="2 coins">.</li><li>Then name a card (“Copper,” for example - not “Treasure”) and reveal the top card of your deck; if you named the card you revealed, put the revealed card into your hand.</li><li>If you do not name the right card, put the revealed card back on top.</li><li>Names need to match exactly for you to get the card; for example Sir Destry and Sir Martin do not match.</li><li>You do not need to name a card available in the Supply.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash this. If you did, gain 2 Spoils, and each other player with 5 or more cards in hand reveals their hand and discards a card that you choose.',
		help: '<ul class="faq"><li>First trash Pillage.</li><li>Then, if you did, you gain two Spoils cards.</li><li>These come from the Spoils pile, which is not part of the Supply.</li><li>If there are no Spoils cards left, you do not get one; if there is only one, you just get one.</li><li>Then each other player with 5 or more cards in hand reveals their hand and discards a card of your choice.</li><li>This happens in turn order, starting with the player to your left.</li></ul><ul class="rules"><li>Pillage was originally phrased to not have all effects after the trashing be dependent on the card being trashed. This meant that you did get 4 Spoils when you Throne Room a Pillage, for example. Also the Spoils were gained after affecting other players.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 1,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin4.png" alt="4 coins"></b><br>Reveal your hand. −<img src="assets/Coin1.png" alt="1 coin"> per Treasure card in your hand. (You can’t go below <img src="assets/Coin0.png" alt="0 coins">.)',
		help: '<ul class="faq"><li>First you get +<img src="assets/Coin4.png" alt="4 coins">.</li><li>Then you reveal your hand, and lose <img src="assets/Coin1.png" alt="1 coin"> per Treasure card in it.</li><li>If you already have <img src="assets/Coin.png" alt="coins"> in your pool, you can lose more than <img src="assets/Coin4.png" alt="4 coins"> this way, but cannot go below <img src="assets/Coin0.png" alt="0 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may play a non-Duration Action card from your hand twice. Trash it. Gain an Action card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it.',
		help: '<ul class="faq"><li>Playing a non-Duration Action card from your hand is optional (Duration cards are in other expansions).</li><li>If you do play one, you then play it a second time, then trash it, then gain an Action card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it (even if somehow you failed to trash it).</li><li>The gained card can have other types besides Action, including Duration.</li><li>Gaining a card is not optional once you choose to play an Action card, but will fail to happen if no card in the Supply costs the exact amount needed.</li><li>If something happens due to trashing the card - for example drawing three cards due to trashing a Cultist - that will resolve before you gain a card.</li><li>This does not use up any extra Actions you were allowed to play due to cards like Fortress - Procession itself uses up one Action and that is it.</li><li>You cannot play any other cards in between resolving the Procession-ed Action card multiple times, unless that Action card specifically tells you to (such as Procession itself does).</li><li>If you Procession a Procession, you will play one Action twice, trash it, gain an Action card costing <img src="assets/Coin1.png" alt="1 coin"> more, then play another Action twice, trash it, gain an Action card costing <img src="assets/Coin1.png" alt="1 coin"> more, then trash the Procession and gain an Action costing <img src="assets/Coin1.png" alt="1 coin"> more than it.</li><li>If you Procession a card that gives you +1 Action, such as Vagrant, you will end up with two Actions to use afterwards, rather than the one you would have left if you just played two Vagrants.</li></ul><ul class="rules"><li>If you play Procession on a one-shot card, the stop-moving rule applies and the one-shot will end up where it instructs you to put it. For example, if you use Procession on Horse, the Horse is played, returning itself to its pile, then is played a second time, and then Procession tries and fails to trash it because it has already been moved. The Horse does not end up in the trash, but you still gain a <img src="assets/Coin4.png" alt="4 coins"> Action since Procession’s gaining is not conditional on the Horse being trashed. Similarly, if you play Procession on an Island, the Island is set aside on its mat and is not trashed by Procession, and you gain a <img src="assets/Coin5.png" alt="5 coins"> Action anyway.</li><li>Similarly, Reserve cards such as Guide also are not trashed by Procession, since they move themselves to the Tavern mat when played; and you gain a more expensive Action anyway.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Gain a Rats. Trash a card from your hand other than a Rats (or reveal a hand of all Rats).<hr>When you trash this, <b>+1 Card</b>.',
		help: '<ul class="faq"><li>Follow the instructions in order.</li><li>First draw a card; then gain a Rats; then trash a card from your hand that is not a Rats card.</li><li>If there are no Rats cards left, you do not gain one.</li><li>If you have no cards in your hand other than Rats, reveal your hand and you do not trash a card.</li><li>If Rats is trashed, you draw a card.</li><li>This happens whether it is your turn or another player’s, and regardless of which player has the card that trashed Rats.</li><li>There are 20 copies of Rats, rather than the usual 10; the pile starts with all 20, regardless of the number of players.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Name a card. Reveal cards from your deck until you reveal a Victory card you did not name. Discard the rest, trash the Victory card, and gain a Victory card costing up to <img src="assets/Coin3.png" alt="3 coins"> more than it.',
		help: '<ul class="faq"><li>You can name any card, whether or not it is being used this game or is a Victory card.</li><li>Then reveal cards from your deck until you reveal a Victory card that is not what you named.</li><li>If you run out of cards, shuffle your discard pile and continue, without shuffling in the revealed cards.</li><li>If you run out of cards with no cards left in your discard pile, stop there, discard everything, and nothing more happens.</li><li>If you did find a Victory card that was not what you named, you discard the other revealed cards, trash the Victory card, and gain a Victory card costing up to <img src="assets/Coin3.png" alt="3 coins"> more than the trashed card.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>If there are any cards in the trash costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, gain one of them. Otherwise, each other player reveals the top 2 cards of their deck, trashes one of them costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, and discards the rest.',
		help: '<ul class="faq"><li>If there is a card in the trash costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, you have to gain one of them; it is not optional.</li><li>You can look through the trash at any time.</li><li>The other players get to see what card you took.</li><li>The gained card goes into your discard pile.</li><li>Cards with <img src="assets/Potion.png" alt="potion"> (from Alchemy) or <img src="assets/Debt.png" alt="debt"> (from Empires) in the cost do not cost from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">.</li><li>If there was no card in the trash costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, you instead have each other player reveal the top two cards of their deck, trash one of them of their choice that costs from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins"> (if possible), and discard the rest.</li><li>Go in turn order, starting with the player to your left.</li></ul><ul class="rules"><li>Rogue is an Attack card, even when it is gaining cards from the trash rather than putting opponents’ cards in the trash, and so an opponent can reveal a Reaction such as Diplomat when you play it even if it’s not attacking them at the time.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal cards from the top of your deck until you reveal one costing <img src="assets/Coin3.png" alt="3 coins"> or more. Put that card into your hand and discard the rest.',
		help: '<ul class="faq"><li>If you run out of cards while revealing cards, shuffle your discard pile (not including the revealed cards) and continue.</li><li>If you run out of cards to reveal and have no cards in your discard pile, stop there; discard everything revealed, and you do not get a card.</li><li>If you find a card costing <img src="assets/Coin3.png" alt="3 coins"> or more, put that one into your hand and discard the rest.</li><li>For example you might reveal Copper, then Copper, then Curse, then Province; Province costs <img src="assets/Coin8.png" alt="8 coins">, so you would stop there, put Province in your hand, and discard the two Coppers and the Curse.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>You may put your deck into your discard pile. Look through your discard pile and put one card from it onto your deck.',
		help: '<ul class="faq"><li>Putting your deck into your discard pile is optional, but putting a card from your discard pile on top of your deck is not; you do it unless there are no cards in your discard pile.</li><li>Putting your deck into your discard pile will not trigger Tunnel (from Hinterlands).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Choose one: <b>+2 Actions</b>; or <b>+2 Buys</b>; or gain a Silver.<hr>When you trash this, gain an Attack card.',
		help: '<ul class="faq"><li>When you play this, you get +<img src="assets/Coin1.png" alt="1 coin">, and your choice of either +2 Actions, +2 Buys, or gaining a Silver.</li><li>If Squire is trashed somehow, you gain an Attack card.</li><li>You can gain any Attack card available in the Supply, but if no Attack card is available, you do not gain one.</li></ul><ul class="rules"><li>You cannot gain Mercenary by trashing a Squire, since Mercenary is not in the supply.</li></ul>',
		flags: { village: true, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Discard any number of cards, then draw that many. Then discard any number of cards for +<img src="assets/Coin1.png" alt="1 coin"> each.',
		help: '<ul class="faq"><li>You get +1 Buy</li><li>Discard any number of cards from your hand, and draw as many cards as you discarded.</li><li>Then, discard any number of cards - which could include cards you just drew - and you get +<img src="assets/Coin1.png" alt="1 coin"> per card you discarded that time.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Each other player discards down to 4 cards in hand.<hr>When you play another Attack card with this in play, you first may trash this, to gain a Mercenary.',
		help: '<ul class="faq"><li>When you play this, you draw a card and get +1 Action, then each other player discards down to 4 cards in hand.</li><li>Players who already have 4 or fewer cards in hand do not do anything.</li><li>While Urchin is in play, when you play another Attack card, before resolving it, you may trash the Urchin.</li><li>If you do, you gain a Mercenary.</li><li>The Mercenary comes from the Mercenary pile, which is not in the Supply.</li><li>If there are no Mercenaries left you do not gain one.</li><li>If you play the same Urchin twice in one turn, such as via Procession, that does not let you trash it for a Mercenary.</li><li>If you play two different Urchins however, playing the second one will let you trash the first one.</li></ul><ul class="rules"><li>You do not gain a Mercenary if you trash Urchin some other way.</li><li>If you play an Urchin, and then you play a Command variant such as Band of Misfits that plays an Attack from the Supply, you may still trash your Urchin for a Mercenary.</li><li>You trash Urchin and gain a Mercenary before resolving any effects of the other Attack you played, and before deciding whether to use a Way on the Attack instead of resolving its own effects.</li><li>It doesn’t matter if the effects of the other Attack card, when they are resolved, will actually end up having any effect on your opponents. For instance, if you play a Black Cat on your own turn, you can still trash an Urchin from play.</li><li>Because you trash the Urchin before resolving the Attack, that means if you trash an Urchin by playing a Tormentor, you’ll gain an Imp. And if you trash an Urchin by playing a Rogue, you can gain the Urchin from the trash.</li><li>You can order Urchin’s ability with other “when you play this, first” abilities (e.g. Pathfinding and Kiln). These still take place before the other players get to React to the Attack you played (with e.g. Beggar or Diplomat).</li><li>If you play Urchin itself as a Way, you can still trash the Urchin when you play an Attack.</li></ul><p>Mercenary</p><ul class="faq"><li>This card is not in the Supply; it can only be obtained via Urchin.</li><li>When you play it, you may trash 2 cards from your hand.</li><li>If you do, you draw two cards, get +<img src="assets/Coin2.png" alt="2 coins">, and each other player discards down to 3 cards in hand.</li><li>Players who already have three or fewer cards in hand do nothing.</li><li>Players responding to this Attack with cards like Beggar must choose to do so before you decide whether to trash two cards from your hand.</li><li>If you play this with only one card in hand, you may choose to trash that card, but then will fail the “if you do” and will not draw cards and so on.</li><li>If the cards you trash do things when trashed, first trash them both, then choose what order to resolve the things they do when trashed.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it’s a Curse, Ruins, Shelter, or Victory card, put it into your hand.',
		help: '<ul class="faq"><li>You draw a card before revealing your top card.</li><li>If the top card of your deck is a Curse, Ruins, Shelter, or Victory card, it goes into your hand; otherwise it goes back on top.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>Reveal the top 3 cards of your deck. Put the Action cards back in any order and discard the rest.',
		help: '<ul class="faq"><li>First draw a card, then reveal the top 3 cards of your deck, shuffling your discard pile if there are not enough cards in your deck.</li><li>If there still are not enough after shuffling, just reveal what you can.</li><li>Put the revealed Action cards on top of your deck in any order, and discard the other cards.</li><li>If you didn’t reveal any Action cards, no cards will be put on top.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top 3 cards of your deck. The player to your left chooses one of them. Discard that card and put the rest into your hand.',
		help: '<ul class="faq"><li>If you do not have the full three cards (after shuffling), just reveal what you can.</li><li>No matter how many you revealed, the player to your left chooses one for you to discard, and the remaining cards go into your hand.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Coffers</b><hr>Setup: Each player gets <b>+1 Coffers</b>.',
		help: '<ul class="faq"><li>You draw a card, get +1 Action, and add a token to your Coffers mat.</li><li>In games using this card, each player starts the game with a token on their Coffers.</li><li>This includes games using the promotional card Black Market in which Baker is in the Black Market deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Coffers</b><br>You may trash a card from your hand. If you do, remove any number of tokens from your Coffers and gain a card, costing up to the cost of the trashed card plus <img src="assets/Coin1.png" alt="1 coin"> per token removed.',
		help: '<ul class="faq"><li>First add two tokens to your Coffers mat.</li><li>Then you may trash a card from your hand and remove any number of tokens from your Coffers.</li><li>The number of tokens you remove can be zero.</li><li>If you trashed a card, you gain a card costing up to the cost of the trashed card plus the number of tokens you removed. For example you could trash an Estate and remove six tokens to gain a Province, or you could trash another Butcher and remove zero tokens to gain a Duchy.</li><li>You can remove the tokens you just added.</li><li>Removing tokens for this ability doesn’t give you <img src="assets/Coin.png" alt="coins"> to spend, it just changes what cards you can gain with this ability.</li></ul><ul class="rules"><li>If you trash a Silk Merchant, you can immediately use the Coffer you gain from it to gain a more expensive card with Butcher.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+1 Buy<br>+1 Coffers</b>',
		help: '<ul class="faq"><li>You get +1 Action and +1 Buy, and add a token to your Coffers mat.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Name a card. Reveal the top 3 cards of your deck. Trash the matches. Put the rest back in any order.<hr>Overpay: Per <img src="assets/Coin1.png" alt="1 coin"> overpaid, look at the top card of your deck; trash it, discard it, or put it back.',
		help: '<ul class="faq"><li>When you play this, you name a card, reveal the top three cards of your deck, trash each of those cards that has that name, and put the other cards back on your deck in any order.</li><li>You do not have to name a card being used this game.</li><li>If there are fewer than three cards (after shuffling), just reveal as many as you can.</li><li>When you buy this, for each extra <img src="assets/Coin1.png" alt="1 coin"> you pay over the cost, you look at the top card of your deck, and either trash it, discard it, or put it back on top.</li><li>If you overpaid more than <img src="assets/Coin1.png" alt="1 coin">, you may do different things for each card you look at, and you will look at the same card again if you put it back on top. For example if you bought Doctor for <img src="assets/Coin7.png" alt="7 coins">, you would look at the top card four times; you might end up first trashing a Copper, then discarding a Province, then putting a Silver back on top, then putting that Silver back on top again.</li></ul><ul class="rules"><li>In 2022, Doctor got errata to trigger when you gain it by buying and overpaying for it.</li><li>You gain the Doctor before you begin looking at cards from your deck. This means that it’s possible to reach the Doctor you just gained, and trash it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it’s an Action, play it.<hr>Overpay: Per <img src="assets/Coin1.png" alt="1 coin"> overpaid, put any card from your discard pile onto your deck.',
		help: '<ul class="faq"><li>When you play this, first draw a card and get +1 Action, then reveal the top card of your deck.</li><li>If it is an Action card, play it; this is not optional.</li><li>Playing the Action card does not “use up” one of your Action plays for the turn.</li><li>If Herald plays a Duration card, the Duration card remains in play but Herald is still discarded normally at end of turn.</li><li>When you buy this, you put one card from your discard pile on top of your deck for each extra <img src="assets/Coin1.png" alt="1 coin"> you pay over the cost. For example, if you buy Herald for <img src="assets/Coin6.png" alt="6 coins">, you will put two cards from your discard pile on top of your deck.</li><li>This card lets you look through your discard pile; normally you cannot.</li><li>You cannot look through your discard pile first to see how much you want to overpay, and once you overpay you must put the appropriate number of cards on top of your deck if possible.</li><li>If you overpay enough to put more cards on your deck than there are cards in your discard pile, you just put all of your discard pile onto your deck.</li><li>You may not look through your discard pile if you buy Herald without overpaying for it.</li></ul><ul class="rules"><li>In 2022, the rules for overpaying got errata so that effects now trigger after you gain the card you overpaid for.</li><li>You gain the Herald before you look through your discard pile, meaning you can topdeck the Herald with its own ability.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Name a card. Reveal cards from your deck until you reveal 3 cards without that name. Put those cards into your hand and discard the rest.',
		help: '<ul class="faq"><li>This draws you three cards that are not a particular card.</li><li>First name a card. It does not have to be a card being used this game.</li><li>Then reveal cards from the top of your deck until you have revealed three cards that are not the named card, or have revealed all of your cards (after shuffling).</li><li>Put the revealed cards that were not the named card into your hand and discard the rest.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin1.png" alt="1 coin"></b><hr>Overpay: Gain a Silver per <img src="assets/Coin1.png" alt="1 coin"> overpaid.',
		help: '<ul class="faq"><li>When you buy this, you gain a Silver for each extra <img src="assets/Coin1.png" alt="1 coin"> you pay over the cost. For example if you buy a Masterpiece for <img src="assets/Coin6.png" alt="6 coins">, you will gain three Silvers.</li></ul><ul class="rules"><li>With errata implemented in 2022, the overpay effect has become a when-gain trigger, and so gaining the Silver(s) resolves at the same time as other when-gain abilities, if any.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>At the end of your Buy phase this turn, <b>+1 Coffers</b> per card you gained in it.',
		help: '<ul class="faq"><li>When you play this, you get +1 Buy and +<img src="assets/Coin1.png" alt="1 coin">, and you set up an ability to conditionally add tokens to your Coffers mat, which will resolve at the end of your Buy phase.</li><li>Merchant Guild works on cards gained via buying them, and cards gained other ways. So if you buy 1 Stonemason and overpay for 2 Action cards, that will be 3 cards gained for +3 Coffers.</li><li>This is cumulative; if you use Throne Room to play Merchant Guild twice, then it will give you +2 Coffers for each card you gain in your Buy phase.</li><li>This only cares about cards you gained during your Buy phase. If you gain a card during your Action phase (with e.g. Butcher), Merchant Guild will not give you Coffers for it.</li><li>If you have multiple Buy phases in a single turn (due to Villa or Cavalry), Merchant Guild will trigger at the end of each of those Buy phases you take. However, cards gained in a previous Buy phase are not counted.</li></ul><ul class="rules"><li>With the new rules to Coffers introduced in 2021, you would be able to spend Coffers that you gained from Merchant Guild during the same Buy phase. Because of this, Merchant Guild received errata to give Coffers at the end of your Buy phase. It also lost the dividing line.</li><li>When multiple things are supposed to happen at the end of your buy phase, you can choose the order and spend Coffers between them. So you may acquire the Coffers from Merchant Guild, spend two of them to earn <img src="assets/Coin2.png" alt="2 coins">, and use the <img src="assets/Coin2.png" alt="2 coins"> to discard Wine Merchants from your Tavern mat.</li><li>If you play Merchant Guild after your Buy phase (e.g. you gain it at Night (with e.g. Vampire) or Clean-up (with e.g. Improve) and then play it with Innovation), you won’t get any Coffers from it.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>You may discard a Treasure for <b>+1 Coffers</b>.',
		help: '<ul class="faq"><li>First you draw a card and get +2 Actions; then you may discard a Treasure.</li><li>You can discard the card you drew if it is a Treasure.</li><li>If you discarded a Treasure, you add a token to your Coffers mat.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Each other player gains a Curse, and if they did, draws a card.',
		help: '<ul class="faq"><li>If there is no Gold left, you do not gain one.</li><li>If there are not enough Curses left to go around, deal them out in turn order, starting with the player to your left.</li><li>Each player who gained a Curse draws a card. This is not optional.</li><li>A player who did not gain a Curse, whether due to the Curses running out or due to some other reason, does not draw a card.</li><li>A player who uses Watchtower (from Dominion: Prosperity) to trash the Curse did gain a Curse and so draws a card; a player who uses Trader (from Dominion: Hinterlands) to gain a Silver instead did not gain a Curse and so does not draw a card.</li></ul><ul class="rules"><li>If you gain a Curse and draw a Reaction like Sheepdog or Horse Traders, it’s too late to use it.</li><li>Each affected player gains a Curse and draws a card before the next affected player does so. This is a change from the first version of Soothsayer.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain 2 cards each costing less than it.<hr>Overpay: Gain 2 Action cards each costing the amount you overpaid.',
		help: '<ul class="faq"><li>When you play this, trash a card from your hand, and gain two cards each costing less than the card you trashed.</li><li>Trashing a card is not optional.</li><li>If you do not have any cards left in your hand to trash, you do not gain any cards.</li><li>The two cards you gain can be different or the same. For example you could trash a Gold to gain a Duchy and a Silver.</li><li>Gaining cards is not optional if you trashed a card.</li><li>If there are no cheaper cards in the Supply (for example if you trash a Copper), you do not gain any.</li><li>The cards you gain are gained one at a time; this may matter with cards that do something when gained, such as Inn from Dominion: Hinterlands.</li><li>When you buy this, you may choose to overpay for it. If you do, then after you gain Stonemason, you gain two Action cards each costing exactly the amount you overpaid.</li><li>The Action cards can be different or the same. For example, if you buy Stonemason for <img src="assets/Coin6.png" alt="6 coins">, you could gain two Heralds.</li><li>If there are no cards with the appropriate cost in the Supply, you do not gain one.</li><li>Overpaying with <img src="assets/Potion.png" alt="potion"> (from Dominion: Alchemy) will let you gain cards with <img src="assets/Potion.png" alt="potion"> in the cost.</li><li>If you choose not to overpay, you will not gain any cards from that ability; it is not possible to use it to gain Action cards costing <img src="assets/Coin0.png" alt="0 coins">.</li></ul><ul class="rules"><li>If you gain this without buying it, you can’t overpay for it.</li><li>You can’t overpay with <img src="assets/Debt.png" alt="debt">, meaning you can’t overpay by <img src="assets/Debt8.png" alt="8 debt"> to gain 2 City Quarters.</li><li>To overpay and gain an Animal Fair, you have to overpay <img src="assets/Coin7.png" alt="7 coins">.</li><li>In 2022, the rules for overpaying got errata so that now you gain the Stonemason before you gain the cards from the overpay effect. This may matter for cards like Destrier and Wayfarer.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure from your hand. Each other player with 5 or more cards in hand discards a copy of it (or reveals they can’t). Gain a Treasure onto your deck costing up to <img src="assets/Coin3.png" alt="3 coins"> more than it.',
		help: '<ul class="faq"><li>You may trash a Treasure card from your hand. This is optional.</li><li>If you do trash a Treasure, each other player with at least five cards in hand discards a copy of it from their hand if they can, or reveals a hand with no copies of it, and you gain a Treasure costing up to <img src="assets/Coin3.png" alt="3 coins"> more than the trashed Treasure, putting it on top of your deck.</li><li>You do not have to gain a more expensive Treasure; you may gain a Treasure with the same cost, or a cheaper Treasure.</li><li>You have to gain a card if you trashed one though, if possible.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn, choose one: +<img src="assets/Coin1.png" alt="1 coin">; or trash a card from your hand; or gain a Silver.',
		help: '<ul class="faq"><li>You choose something when you play it, and again at the start of your next turn; the choices may be the same or different.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Discard any number of cards. You may gain a card onto your deck costing exactly <img src="assets/Coin1.png" alt="1 coin"> per card discarded.',
		help: '<ul class="faq"><li>First you get +1 Card, +1 Action, and +<img src="assets/Coin1.png" alt="1 coin">.</li><li>Then you discard any number of cards. You may choose not to discard any cards.</li><li>Then you may gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> per card discarded. For example if you discarded two cards; you may gain a card costing <img src="assets/Coin2.png" alt="2 coins">; if you discard no cards, you may gain a card costing <img src="assets/Coin0.png" alt="0 coins">.</li><li>The gained card comes from the Supply and is put on top of your deck.</li><li>You may choose not to gain a card, even if you discard cards.</li></ul><ul class="rules"><li>If the card would be gained into your hand, such as Guardian, Ghost Town, Night Watchman, or Den of Sin, it is gained onto your deck instead.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Each other player takes their –<img src="assets/Coin1.png" alt="1 coin"> token.<br>On this turn and your next turn, cards cost <img src="assets/Coin1.png" alt="1 coin"> less.<br>Now and at the start of your next turn: <b>+1 Buy</b>',
		help: '<ul class="faq"><li>This gives each other player their −<img src="assets/Coin1.png" alt="1 coin"> token, which will cause those players to get <img src="assets/Coin1.png" alt="1 coin"> less the next time they get <img src="assets/Coin.png" alt="coins">.</li><li>It also gives you +1 Buy both on the turn you play it and on your next turn.</li><li>For the rest of the turn on which you play it, and the entirety of your next turn, cards cost <img src="assets/Coin1.png" alt="1 coin"> less, but not less than <img src="assets/Coin0.png" alt="0 coins">. This applies to all cards everywhere, including cards in the Supply, cards in hand, and cards in Decks. For example if you’ve played one Bridge Troll and play Raze, trashing Estate, Estate will only cost <img src="assets/Coin1.png" alt="1 coin">, so you’ll only look at one card rather than two.</li><li>This is cumulative; if you played two Bridge Trolls last turn (or one Bridge Troll twice with Throne Room), and play another Bridge Troll this turn, all cards will cost <img src="assets/Coin3.png" alt="3 coins"> less this turn (to a minimum of <img src="assets/Coin0.png" alt="0 coins">).</li></ul><ul class="rules"><li>Bridge Troll got errata in 2022 so that its cost-reduction isn’t a while-in-play effect.</li><li>If you play this twice with Throne Room, cards cost <img src="assets/Coin2.png" alt="2 coins"> less both this turn and next turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>At the start of your next turn, <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.<hr>When another player plays an Attack card, you may first play this from your hand.',
		help: '<ul class="faq"><li>This gives you +1 Card and +1 Action when you play it, and then +<img src="assets/Coin1.png" alt="1 coin"> at the start of your next turn after that.</li><li>This card has a Reaction ability that lets you play it when another player plays an Attack card.</li><li>Playing this during another player’s turn is similar to playing it during your own turn - you put Caravan Guard into play, get +1 Card and +1 Action, and will get +<img src="assets/Coin1.png" alt="1 coin"> at the start of your next turn - the very next turn you take. However getting +1 Action during someone else’s turn does not do anything for you; it does not let you play other Action cards during that player’s turn.</li><li>Similarly if an effect gives you +<img src="assets/Coin1.png" alt="1 coin"> or +1 Buy during another player’s turn, that still does not let you buy cards during that player’s turn (although +<img src="assets/Coin1.png" alt="1 coin"> can cancel the −<img src="assets/Coin1.png" alt="1 coin"> token given out by Bridge Troll).</li><li>The +1 Action (or potential other +’s) does not carry over to your next turn either.</li><li>After reacting with a Caravan Guard, you can use another one, even one you just drew, and also can use other Reactions, even ones you just drew; you keep going until you have no more Reactions you ’ to respond to the Attack with.</li></ul><ul class="rules"><li>If you call Royal Carriage on Caravan Guard after you play it as a Reaction during another player’s turn, it will stay in play until your next turn and give you an extra +<img src="assets/Coin1.png" alt="1 coin"> at that time, as you would expect. However, if you call Coin of the Realm, it will be discarded during the Clean-up phase of the Attacking player’s turn, and the +2 Actions it will give you don’t do anything for you, as +Action doesn’t mean anything when it’s not your turn.</li><li>If you react with this against a Relic, you draw a card, and then you put your -1 Card token on your deck.</li><li>If you react with a Trained Caravan Guard (meaning has the <b>+<img src="assets/Coin1.png" alt="1 coin"></b> token from the Training event) against a Bridge Troll, and you don’t have your -<img src="assets/Coin1.png" alt="1 coin"> token, you will get +<img src="assets/Coin1.png" alt="1 coin"> before you take your -<img src="assets/Coin1.png" alt="1 coin"> token, so you won’t be able to remove it. But if you get affected by a different attack afterwards, reacting with a Trained Caravan Guard will remove your -<img src="assets/Coin1.png" alt="1 coin"> token.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure', 'Reserve'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin1.png" alt="1 coin"><br>When you play this, put it on your Tavern mat.<hr>Directly after you finish playing an Action card, you may call this, for <b>+2 Actions</b>.',
		help: '<ul class="faq"><li>This is a Treasure worth <img src="assets/Coin1.png" alt="1 coin">.</li><li>You play it in your Buy phase, like other Treasures.</li><li>When you play it, it goes on your Tavern mat. It produces <img src="assets/Coin1.png" alt="1 coin"> that turn but is no longer in play. It stays on the mat until you call it.</li><li>You can call it after resolving playing an Action card, for +2 Actions (which will let you play further Action cards).</li><li>Move the Coin of the Realm into play when you call it, but it does not give you <img src="assets/Coin1.png" alt="1 coin"> that turn, it just gives +2 Actions.</li><li>It is discarded that turn with your other cards in play.</li></ul><ul class="rules"><li>You can call Coin of the Realm if you play Actions outside of your Action phase (e.g. playing a card with Toil, or playing a Werewolf at Night, or playing a Caravan Guard on another player’s turn), but you don’t get to use the +2 Actions to play Actions from your hand.</li><li>If you play this with an Action card (such as Black Market or Storyteller), you may immediately call it for +2 Actions.</li><li>Unlike Royal Carriage, if the Action you played is no longer in play (e.g. because it was a Reserve card that went onto your Tavern mat), you can still call this.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reserve', 'Victory'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Put this on your Tavern mat.<hr>Worth 4<img src="assets/VP.png" alt="victory points"> if on your Tavern mat at the end of the game<br>(otherwise worth 0<img src="assets/VP.png" alt="victory points">).',
		help: '<ul class="faq"><li>This is a Victory card. Use 8 for games with 2 players, or 12 for games with 3 or more players.</li><li>This is also an Action card; when you play it, you put it on your Tavern mat. It will stay there the rest of the game; there is no way to call it.</li><li>At the end of the game, Distant Lands is worth 4<img src="assets/VP.png" alt="victory points"> if it is on your mat, or 0<img src="assets/VP.png" alt="victory points"> if it is not. It counts as part of your deck either way (for example it can contribute to how many <img src="assets/VP.png" alt="victory points"> a Gardens is worth).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Now and at the start of your next turn: <b>+2 Cards</b>, then discard 2 cards.',
		help: '<ul class="faq"><li>When you play this, you get +1 Action, draw 2 cards, and discard 2 cards; then at the start of your next turn, you again draw 2 cards and discard 2 cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Put this on your Tavern mat.<hr>When you gain a card costing up to <img src="assets/Coin6.png" alt="6 coins">, you may call this, to gain a copy of that card.',
		help: '<ul class="faq"><li>When you play this, you put it on your Tavern mat. It stays on your mat until you call it.</li><li>You can call it when gaining a card costing up to <img src="assets/Coin6.png" alt="6 coins">, and gain another copy of that card. The gained card comes from the Supply and is put into your discard pile; Duplicate cannot gain non-supply cards such as Teacher.</li><li>Duplicate can be called during other players’ turns when you gain cards; for example, another player might buy Messenger and choose to have each player gain an Estate, and you could Duplicate that Estate.</li><li>You can call multiple Duplicates to gain multiple copies of the same card.</li><li>Duplicate is discarded during the Clean-up of the turn you call it, whether or not it is your turn.</li></ul><ul class="rules"><li>Cards with <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in their cost cannot be Duplicated.</li><li>If you have Innovation, which allows you to play a card immediately on gaining it, you could gain a Duplicate, play it immediately and put it on the Tavern mat, and then call it immediately to gain another Duplicate. This is because when the Duplicate reaches the Tavern mat, you’re still within the time window of carrying out effects triggered by gaining the Duplicate.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Set aside up to 2 cards from your hand face down (under this). At the start of your next turn, put them into your hand.',
		help: '<ul class="faq"><li>You may set aside zero, one, or two cards from your hand. Put them face down under the Gear; you may look at them. They do not have to be cards you drew with Gear.</li><li>If you set aside zero cards, Gear will be discarded the same turn you played it; if you set aside one or two cards, you put them into your hand at the start of your next turn, and Gear is discarded at the end of that turn.</li></ul><ul class="rules"><li>If you Throne Room a Gear, but only set aside cards once, you still leave Throne Room in play. The same logic applies to other Throne Room variants.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Turn your Journey token over (it starts face up). Then if it’s face down, +<img src="assets/Coin1.png" alt="1 coin">. If it’s face up, +<img src="assets/Coin5.png" alt="5 coins">, and each other player reveals the top card of their deck, trashes it if it costs from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, and otherwise discards it and gains a Curse.',
		help: '<ul class="faq"><li>At the start of the game, place your Journey token (the one with the boot) face up. When you play this, you turn it over.</li><li>Then, if it is face down, you get +<img src="assets/Coin1.png" alt="1 coin"> and nothing more happens.</li><li>If it is face up, you get +<img src="assets/Coin5.png" alt="5 coins"> and the attack part happens.</li><li>The attack resolves in turn order, starting with the player to your left. The player reveals the top card of their deck, and either trashes it if it costs from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, or discards it and gains a Curse otherwise.</li><li>If they have no cards (even after shuffling) they gain a Curse.</li><li>Cards with <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in the cost do not cost from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">.</li><li>Cards with an asterisk or + by the cost that cost from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins"> (such as Teacher, or Masterpiece from Guilds) do get trashed.</li><li>Players can respond to Giant being played with Reactions that respond to Attacks (such as Caravan Guard), even if Giant will only be producing +<img src="assets/Coin1.png" alt="1 coin"> this time.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to discard your hand and draw 5 cards.',
		help: '<ul class="faq"><li>When you play this, you get +1 Card and +1 Action, and put it on your Tavern mat. It stays on your mat until you call it at the start of one of your turns.</li><li>If multiple things can happen at the start of your turn, you can do them in any order.</li><li>When you call Guide, it moves from the mat into play, and you discard your hand, then draw 5 cards.</li><li>You discard it that turn with your other cards in play.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn:<br><b>+3 Cards</b><br>Until then, when any other player gains a card they bought, they put their hand onto their deck in any order.',
		help: '<ul class="faq"><li>Playing this sets up two effects for the future: you will draw 3 cards at the start of your next turn; and until then, other players will put the rest of their hand on their deck whenever they gain a card they bought.</li><li>A player may have no cards left in hand when buying a card; typically cards left in hand will include Victory cards, Curses, and unplayed Actions.</li><li>A player may intentionally avoid playing Treasures and Actions in order to take advantage of having to put their hand on their deck.</li><li>Players who do not buy any cards can discard their hand normally.</li><li>Buying Events is not buying cards and so does not trigger this.</li><li>If you play Haunted Woods and then take an extra turn immediately, such as with Mission or Outpost (from Seaside), you will draw the 3 cards at the start of that turn and discard Haunted Woods that turn, and other players will never be affected by it.</li><li>If you want to use a Reaction card like Moat against Haunted Woods, you have to use it right when Haunted Woods is played.</li></ul><ul class="rules"><li>Gaining cards without buying them, such as by playing Workshop or Sunken Treasure, does not trigger Haunted Woods’ effect.</li><li>Buying cards with Black Market does trigger Haunted Woods’ effect, even though it usually happens in the Action phase.</li><li>In 2022, Haunted Woods got reworded so that the attack triggers after players gain the card they bought, instead of before. This means that if you buy a card that gets gained to your hand (e.g. Ghost Town), Haunted Woods will make you put it onto your deck.</li><li>Some cards have on-gain abilities that affect your hand; these may be ordered before or after Haunted Woods. For instance, if you buy a Cavalry while subject to Haunted Woods, you can choose to use Cavalry’s ability to get +2 cards either before topdecking your hand (in which case the 2 cards you drew will go back to your deck) or after (in which case you may draw back 2 of the cards you topdecked).</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of each of your turns for the rest of the game:<br><b>+1 Card</b>',
		help: '<ul class="faq"><li>After playing this, you draw an extra card at the start of each of your turns for the rest of the game.</li><li>Hireling stays in play for the rest of the game to track this.</li><li>If you use Disciple (or a similar card, like Throne Room) to play Hireling twice, you will draw two extra cards each turn, and Disciple will also stay in play for the rest of the game.</li></ul><ul class="rules"><li>If you play Hireling at the start of your turn (e.g. with Piazza or Mastermind), you will draw a card immediately.</li><li>If you put an Adventures token on this (with e.g. Teacher), the token will only take effect when you play a new Hireling for the first time, not every turn when the Hireling effect activates.</li><li>If you reduce the cost of Hireling with Ferry, you can play it with Band of Misfits. If you do, Band of Misfits stays in play for the rest of the game. And if you play a Necromancer that plays a Throne Room that plays a Hireling twice, the Necromancer will stay in play for the rest of the game.</li><li>If you remove a Hireling from play (e.g. by calling a Royal Carriage and replaying the Hireling as Way of the Horse), you’ll have to remember Hireling’s effect for the rest of the game (and the Royal Carriage will get discarded from play during Clean-up). You can create a similar scenario with Royal Galley, Band of Misfits, and Ferry.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+2 Actions</b><hr>When you gain this, each other player draws a card.',
		help: '<ul class="faq"><li>When you gain this, each other player draws a card. This applies whether you bought it or gained it some other way.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it’s a Treasure, put it into your hand. If it’s an Action or Victory card, gain a Magpie.',
		help: '<ul class="faq"><li>If the top card of your deck is a Treasure, it goes into your hand.</li><li>If the card is not a Treasure, leave it on top of your deck.</li><li>If the card is an Action card or Victory card, you gain a Magpie; once the Magpie pile is empty, revealing an Action or Victory card will not get you anything.</li><li>If you reveal a Harem (from Intrigue), you both put it into your hand and gain a Magpie, since it is both a Treasure and a Victory card.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin2.png" alt="2 coins"></b><br>You may put your deck into your discard pile.<hr>When this is the first card you gain in your Buy phase, gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">, and each other player gains a copy of it.',
		help: '<ul class="faq"><li>When you play this, you get +1 Buy, +<img src="assets/Coin2.png" alt="2 coins">, and may optionally put your deck into your discard pile.</li><li>This is not discarding cards and does not trigger cards that have effects when they are discarded, such as Tunnel (from Hinterlands).</li><li>When Messenger is the first card you gain during your Buy phase, you also gain a card costing up to <img src="assets/Coin4.png" alt="4 coins"> from the Supply, putting it into your discard pile, and then each other player in turn order also gains a copy of that card.</li><li>If the Supply runs out of copies of the card, further players do not get anything.</li></ul><ul class="rules"><li>As a result of errata in 2022, this works if you gain this by buying it, or if you gain this in another way (such as Ball or Anvil).</li><li>If you take multiple Buy phases (with Villa or Cavalry), you can use Messenger’s on-gain effect multiple times in the same turn.</li><li>If you gain this during another player’s Buy phase, nothing extra happens.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Put a Copper from your hand onto your Tavern mat; or +<img src="assets/Coin1.png" alt="1 coin"> per Copper on your Tavern mat.',
		help: '<ul class="faq"><li>You may choose to put a Copper from your hand on your mat even if you have no Coppers in hand; nothing will happen.</li><li>You may also choose to get +<img src="assets/Coin1.png" alt="1 coin"> per Copper on your mat if there are no Coppers on your mat; nothing will happen.</li><li>Putting a Copper from your hand on your mat is not trashing it; Coppers on your mat are not in play, but count as part of your deck when scoring at the end.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Traveller', 'Attack', 'Duration'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><hr>When you discard this from play, you may exchange it for a Treasure Hunter.',
		help: '<ul class="faq"><li>When you play Page, you get +1 Card and +1 Action.</li><li>When you discard it from play, you may return it to its pile and take a Treasure Hunter, putting it into your discard pile.</li></ul><p>Treasure Hunter</p><ul class="faq"><li>This counts all cards gained, not just bought cards. For example if the player to your right played Amulet, gaining a Silver, then bought a Duchy, you would gain two Silvers.</li><li>The gained Silvers are put into your discard pile.</li></ul><ul class="rules"><li>Cards “the player to your right gained” include non-Supply cards, like Spoils or Prizes, as well as cards gained from the Trash, such as through Graverobber. On the other hand, Traveller upgrades are exchanged for, not gained, and do not count for this.</li></ul><p>Warrior</p><ul class="faq"><li>Each player, in turn order, discards the appropriate number of cards from the top of their deck, trashing the ones costing <img src="assets/Coin3.png" alt="3 coins"> or <img src="assets/Coin4.png" alt="4 coins">.</li><li>If Warrior is your only Traveller in play, each other player will only discard and potentially trash one card.</li><li>If you, for example, have a Peasant, a Fugitive, and the Warrior in play, each other player would discard and potentially trash three cards.</li><li>Cards are only trashed if they cost exactly <img src="assets/Coin3.png" alt="3 coins"> or exactly <img src="assets/Coin4.png" alt="4 coins">.</li><li>Cards with <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in the cost do not cost exactly <img src="assets/Coin3.png" alt="3 coins"> or <img src="assets/Coin4.png" alt="4 coins">.</li><li>Cards with an asterisk in the cost (such as Warrior) or + in the cost (such as Masterpiece from Guilds) may be trashed by Warrior (if costing <img src="assets/Coin3.png" alt="3 coins"> or <img src="assets/Coin4.png" alt="4 coins">).</li><li>Champion and Teacher are not Travellers.</li></ul><ul class="rules"><li>Warrior discards cards one at a time.</li><li>Instead of revealing the top card of their deck (like Giant), they instantly discard it. This means that they can’t get a Coffers from Patron), but it does mean that they can play a Village Green and have it not be trashed.</li><li>If another player discards a Tunnel, they can reveal it to gain a Gold, but they will still trash the Tunnel.</li></ul><p>Hero</p><ul class="faq"><li>The Treasure comes from the Supply and is put into your discard pile.</li><li>It can be any Treasure being used that game.</li></ul><ul class="rules"><li>Hero cannot be used to gain Treasures not in the Supply, such as Diadem and Spoils.</li></ul><p>Champion</p><ul class="faq"><li>Champion stays in play for the rest of the game once played.</li><li>For the rest of the game, it provides you with an additional +1 Action each time you play an Action, which means you will always be able to play all of your Actions; and it protects you from all further Attacks played (whether you want the protection or not).</li><li>Champion only protects you from Attacks played after it; for example it does not stop a previously played Swamp Hag from giving you Curses that turn.</li></ul><ul class="rules"><li>Champion does not protect you from the effects of cards that are not of the Attack type, such as Possession and Masquerade; the effects of cards that are not the result of them being played, such as the effect of buying Noble Brigand; or the effects of permanents that have attack-like abilities, such as Circle of Witches.</li><li>Removing Champion from play (such as by playing it with Throne Room and using Way of the Horse for one of these plays) does not end the effect.</li><li>Although ordinarily Champion makes it impossible to run out of Actions, Snowy Village can overrule that. If you play Snowy Village, then for the rest of the turn, Champion will not give you the expected extra Action for each Action card you play, and so you can run out.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Traveller', 'Attack', 'Reserve'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png" alt="1 coin"></b><hr>When you discard this from play, you may exchange it for a Soldier.',
		help: '<ul class="faq"><li>When you play Peasant, you get +1 Buy and +<img src="assets/Coin1.png" alt="1 coin">.</li><li>When you discard this from play, you may return it to its pile and take a Soldier, putting it into your discard pile.</li></ul><p>Soldier</p><ul class="faq"><li>This gives +<img src="assets/Coin2.png" alt="2 coins">, and then an additional +<img src="assets/Coin1.png" alt="1 coin"> per other Attack card you have in play.</li><li>Then each other player with 4 or more cards in hand discards a card.</li><li>So for example if you play Soldier, then another Soldier, and have an opponent with 5 cards in hand, you will get +<img src="assets/Coin2.png" alt="2 coins"> and that opponent will discard a card, then you will get +<img src="assets/Coin2.png" alt="2 coins"> and an extra +<img src="assets/Coin1.png" alt="1 coin"> while that opponent discards again.</li><li>Soldier only cares about Attack cards in play, not Attack cards played that turn; for example using Disciple on Soldier will not produce an extra +<img src="assets/Coin1.png" alt="1 coin">, because there is no other Attack card in play.</li><li>Duration Attacks played on the previous turn are Attack cards in play and so do count for Soldier.</li></ul><p>Fugitive</p><ul class="faq"><li>When you play Fugitive, you draw 2 cards, get +1 Action, and then discard a card from your hand.</li><li>The discarded card does not have to be one of the cards just drawn.</li></ul><p>Disciple</p><ul class="faq"><li>Playing an Action card from your hand is optional.</li><li>If you do play one, you play it twice, then gain a copy of it if possible; gaining the copy is not optional once you have played it.</li><li>The copy comes from the Supply and is put into your discard pile; if the Action is a non-Supply card, such as Fugitive, you can play it twice, but do not gain a copy of it.</li><li>This does not use up any extra Actions you were allowed to play due to cards like Port - Disciple itself uses up one Action and that is it.</li><li>You cannot play any other cards in between resolving the Discipled Action card multiple times, unless that Action card specifically tells you to (such as Disciple itself does).</li><li>If you Disciple a card that gives you +1 Action, such as Artificer, you will end up with 2 Actions to use afterwards, rather than the one you would have left if you just played two Artificers.</li><li>If you use Disciple on a Duration card, Disciple will stay in play until the Duration card is discarded.</li></ul><p>Teacher</p><ul class="faq"><li>When you play this, put it on your Tavern mat. It stays on your mat until you call it at the start of one of your turns.</li><li>If multiple things can happen at the start of your turn, you can do them in any order.</li><li>When you call Teacher, it moves from the mat into play, and you choose your +1 Action, +1 Card, +1 Buy, or +<img src="assets/Coin1.png" alt="1 coin"> token, and move it to an Action Supply pile that you have no tokens on.</li><li>The token on the pile means that every time you play a card from that pile, you will get the corresponding bonus - if you put your +1 Action token on a pile, you will get an extra +1 Action when playing a card from that pile.</li><li>This cannot put a token on a pile you have tokens on, including the tokens Teacher places as well as your −<img src="assets/Coin2.png" alt="2 coins"> cost token and Trashing token.</li><li>This can put a token on a pile that other players have tokens on.</li><li>Other things can put tokens on a pile you put a token on with Teacher; it is just Teacher itself that cannot put a token on a pile you have a token on.</li><li>It is okay if the pile has a token that does not belong to you or anyone, such as an Embargo token (from Seaside) or coin token for Trade Route (from Prosperity).</li><li>It is okay if you have an Estate token on a card set aside from that pile.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you gain this, gain another Port (that doesn’t come with another).',
		help: '<p>This is (currently) the only non-Victory Action card to have 12 cards in its pile. It changed significantly in the 2022 errata.</p><ul class="faq"><li>When you gain a Port, you gain another one; this applies whether you gain it via buying it or some other way.</li><li>If you gain one to a place other than your discard pile, the 2nd copy goes to your discard pile. For example, if you use Transmogrify to gain a Port to your hand, the 2nd Port still goes to your discard pile.</li><li>If you gain a Port from the trash, the second Port is still gained from the Supply.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Turn your Journey token over (it starts face up). Then if it’s face up, <b>+5 Cards</b>.',
		help: '<ul class="faq"><li>At the start of the game, place your Journey token (the one with the boot) face up.</li><li>When you play this, you get +1 Buy, and turn the token over.</li><li>Then if it is face down, nothing more happens.</li><li>If it is face up, you draw 5 cards.</li><li>So, every other time you play a Ranger, you will draw 5 cards.</li><li>It does not matter what turned over the Journey token; you could turn it face down with Giant, then face up with Ranger.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to trash a card from your hand.',
		help: '<ul class="faq"><li>When you play this, you get +1 Card and +1 Action, and put it on your Tavern mat. It stays on your mat until you call it at the start of one of your turns.</li><li>If multiple things can happen at the start of your turn, you can do them in any order.</li><li>When you call Ratcatcher, you move it from the mat into play, and you trash a card from your hand.</li><li>Ratcatcher is discarded that turn with your other cards in play.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Trash this or a card from your hand. Look at one card from the top of your deck per <img src="assets/Coin1.png" alt="1 coin"> the trashed card costs. Put one of them into your hand and discard the rest.',
		help: '<ul class="faq"><li>If you trash a card costing <img src="assets/Coin0.png" alt="0 coins"> with this, you do not get any cards.</li><li>If you trash a card costing <img src="assets/Coin1.png" alt="1 coin"> or more, you look at a number of cards from the top of your deck equal to the cost in <img src="assets/Coin.png" alt="coins"> of the trashed card, take one into your hand, and discard the rest.</li><li>For example if you trash an Estate, you look at the top two cards of your deck, put one into your hand, and discard the other one.</li><li>You can trash the Raze itself; normally it costs <img src="assets/Coin2.png" alt="2 coins">, so you would look at two cards.</li><li>Costs may be affected by cards like Bridge Troll.</li><li>Raze is unaffected by the −1 Card token; if it is on top of your deck, replace it after resolving Raze.</li></ul><ul class="rules"><li>You may make either choice — trash the played card or trash a card from your hand — even if the played card is not in play anymore (e.g. from playing it twice with Throne Room) or you have no cards in your hand. You won’t look at any cards if the choice you made causes you to not trash a card.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Treasure', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><br>Each other player puts their –1 Card token on their deck.',
		help: '<ul class="faq"><li>This is a Treasure worth <img src="assets/Coin2.png" alt="2 coins">.</li><li>You play it in your Buy phase, like other Treasures.</li><li>When you play it, you also make each other player put their −1 Card token on their deck, which will cause those players to draw one less card the next time they draw cards.</li><li>Relic is an Attack despite not being an Action; it can be blocked with Moat and responded to with Caravan Guard and so on.</li><li>A player responding to Relic with Caravan Guard first plays Caravan Guard, including drawing a card, and then puts their −1 Card token on their deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Put this on your Tavern mat.<hr>Directly after you finish playing an Action card, if it’s still in play, you may call this, to replay that Action.',
		help: '<ul class="faq"><li>When you play this, you get +1 Action and put it on your Tavern mat. It stays on your mat until you call it, directly after resolving a played Action card that is still in play.</li><li>Royal Carriage cannot respond to Actions that are no longer in play, such as a Reserve card that was put on the Tavern mat, or a card that trashed itself (like a Raze used to trash itself).</li><li>When called, Royal Carriage causes you to replay the card you just played.</li><li>You can call multiple Royal Carriages to replay the same Action multiple times (provided the Action is still in play).</li><li>You completely resolve the Action before deciding whether or not to use Royal Carriage on it.</li><li>If you use Royal Carriage to replay a Duration card, Royal Carriage will stay in play until the Duration card is discarded from play, to track the fact that the Duration card has been played twice.</li></ul><ul class="rules"><li>With Duration cards, you call Royal Carriage after resolving the Duration card’s on-play effects; you don’t wait for the next turn.</li><li>You can’t call a Royal Carriage to replay a called Reserve card, even though the Reserve card is in play after you call it.</li><li>Royal Carriage can be called on a Crown played during your Buy phase, a Werewolf played during your Night phase.</li><li>You can also call Royal Carriage on a card you play on another player’s turn (e.g. Caravan Guard or Falconer). If it’s a Duration, Royal Carriage will stay in play; otherwise you will discard the Royal Carriage during that player’s Clean-up.</li><li>If a card you play leaves and then immediately returns to your play area (e.g. you play a Transmogrify at the start of your turn with Piazza and then immediately call the Transmogrify), you can’t call Royal Carriage on it.</li><li>If an Action card plays a Royal Carriage (such as Disciple), you can immediately call the Royal Carriage to replay the Disciple.</li><li>If an Action plays another Action (such as a Sauna that plays an Avanto), you will call Royal Carriages in the opposite order of when they were played. So you can’t call Royal Carriage on Sauna before Avanto. If you call a Royal Carriage on Sauna, you can no longer call Royal Carriage on Avanto.</li><li>If an Action is in play, and you replay it with a Royal Carriage to remove it from play (e.g. you replay a Tragic Hero and it trashes itself, then you can no longer call other Royal Carriages on it.</li><li>If you have 3 Favors, play an Underling, and then replay it with Royal Carriage, you’ll get a total of +<img src="assets/Coin2.png" alt="2 coins"> from League of Shopkeepers.</li><li>In a couple of rare and implausible scenarios, it is conceivably possible to play a card in someone else’s play area. In the unlikely event that this ever happens, you can’t call Royal Carriage on a card you played in another player’s play area.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Play up to 3 Treasures from your hand. Then pay all of your <img src="assets/Coin.png" alt="coins"> (including the <img src="assets/Coin1.png" alt="1 coin"> from this) and draw a card per <img src="assets/Coin1.png" alt="1 coin"> you paid.',
		help: '<ul class="faq"><li>This lets you play Treasures in your Action phase. They go into play and produce <img src="assets/Coin.png" alt="coins">, just like Treasures played in the Buy phase.</li><li>Then Storyteller turns all of your <img src="assets/Coin.png" alt="coins"> into +Cards; for each <img src="assets/Coin1.png" alt="1 coin"> you have you lose the <img src="assets/Coin1.png" alt="1 coin"> and get +1 Card.</li><li>For example if you had <img src="assets/Coin4.png" alt="4 coins">, you lose the <img src="assets/Coin4.png" alt="4 coins"> and draw 4 cards. This makes you lose all <img src="assets/Coin.png" alt="coins"> you have so far that turn, including the <img src="assets/Coin.png" alt="coins"> you get from playing the Treasures, the +<img src="assets/Coin1.png" alt="1 coin"> Storyteller gives you directly, and any <img src="assets/Coin.png" alt="coins"> you made earlier in the turn.</li><li>You can track that the Treasures have been “spent” by putting them under the Storyteller.</li><li><img src="assets/Potion.png" alt="Potion">, produced by Potions from Alchemy, is not <img src="assets/Coin.png" alt="coins"> and so is not lost and does not get you any cards.</li></ul><ul class="rules"><li>Treasures that have effects other than (or in addition to) giving you <img src="assets/Coin.png" alt="coins"> will still have their normal effects when played with Storyteller. For instance, Quarry will give you +<img src="assets/Coin1.png" alt="1 coin"> and reduce the cost of Action cards; Storyteller will convert that <img src="assets/Coin1.png" alt="1 coin"> into +1 Card, but the cost reduction will remain in effect.</li><li>Treasures that play other Treasures (such as Counterfeit, Crystal Ball, and Tiara) will let you play more than three Treasures while resolving Storyteller.</li><li>However, since under ordinary circumstances you’ll be playing Storyteller in your Action phase, this means that playing Crown while resolving Storyteller will cause you to double-play another Action card, not an extra Treasure card.</li><li>Although Storyteller causes you to spend all your <img src="assets/Coin.png" alt="coins">, the Treasures that gave you those <img src="assets/Coin.png" alt="coins"> remain in play. This means, for instance, that if you play Copper with Storyteller, you usually won’t be able to buy Grand Market later in the turn.</li><li>Playing this with Way of the Chameleon means that you will pay all your <img src="assets/Coin.png" alt="coins"> just to get it back. This may still be useful just to get Treasures into play earlier than normal, without drawing any cards. Getting Treasures into play may be relevant for cards like Quarry and Sea Chart.</li><li>In 2022, Storyteller got errata that removed its +<img src="assets/Coin1.png" alt="1 coin">, and it instead gives you +1 Card after you play Treasures.</li><li>With the new rules to Coffers, you can spend Coffers at any time during your turn. This means that after you play your Treasures and get your first +1 Card, and before you spend all your <img src="assets/Coin.png" alt="coins">, you may spend Coffers to increase the number of cards you draw.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn: +<img src="assets/Coin3.png" alt="3 coins">.<br>Until then, when any other player gains a card they bought, they gain a Curse.',
		help: '<ul class="faq"><li>Playing this sets up two effects for the future: you will get +<img src="assets/Coin3.png" alt="3 coins"> at the start of your next turn; and until then, other players will gain a Curse whenever they gain a card they bought.</li><li>Players who buy multiple cards will gain a Curse per card bought; players who do not buy any cards will not get any Curses.</li><li>This is cumulative; if you play two Swamp Hags, and the player after you plays one, then the player after that will get three Curses with any card bought.</li><li>This does not affect cards gained other ways, only bought cards.</li><li>Buying Events is not buying cards and so does not trigger this.</li><li>If you play Swamp Hag and then take an extra turn immediately, such as with Mission or Outpost (from Seaside), you will get +<img src="assets/Coin3.png" alt="3 coins"> at the start of that turn and discard Swamp Hag that turn, and other players will never be affected by it.</li><li>If you want to use a Reaction card like Moat against Swamp Hag, you have to use it right when Swamp Hag is played.</li></ul><ul class="rules"><li>Buying a card via Black Market still causes a Curse to be gained, even though it usually takes place during the Action phase rather than the buy phase.</li><li>In 2022 Swamp Hag got errata to trigger on “when they gain” rather than on “when they buy”. Other when-gain effects happen at the same time as Swamp Hag’s effects; the Attacked player chooses in which order to resolve them. This can matter, for instance, in the case of Doctor’s overpay, if it triggers a reshuffle.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to trash a card from your hand, and gain a card to your hand costing up to <img src="assets/Coin1.png" alt="1 coin"> more than it.',
		help: '<ul class="faq"><li>When you play this, you get +1 Action and put it on your Tavern mat. It stays on your mat until you call it, at the start of one of your turns.</li><li>If multiple things can happen at the start of your turn, you can do them in any order.</li><li>When you call Transmogrify, it moves from the mat into play, and you trash a card from your hand, then gain a card costing up to <img src="assets/Coin1.png" alt="1 coin"> more than the trashed card.</li><li>The gained card comes from the Supply and is put into your hand; if you had no cards to trash, you do not gain one.</li><li>Transmogrify is discarded that turn with your other cards in play.</li><li>You may trash a card to gain a card costing <img src="assets/Coin1.png" alt="1 coin"> more, or the same amount, or less; you may trash a card to gain a copy of the same card.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><br>Gain a Gold and a Copper.',
		help: '<ul class="faq"><li>This is a Treasure worth <img src="assets/Coin2.png" alt="2 coins">.</li><li>You play it in your Buy phase, like other Treasures.</li><li>When you play it, you gain a Copper and a Gold from the Supply, putting them into your discard pile.</li><li>If one of those piles is empty, you still gain the other card.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reserve'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin4.png" alt="4 coins"></b><br>Put this on your Tavern mat.<hr>At the end of your Buy phase, if you have at least <img src="assets/Coin2.png" alt="2 coins"> unspent, you may discard this from your Tavern mat.',
		help: '<ul class="faq"><li>When you play this, you get +1 Buy and +<img src="assets/Coin4.png" alt="4 coins">, and put it on your Tavern mat.</li><li>It stays on your mat until the end of one of your Buy phases in which you have <img src="assets/Coin2.png" alt="2 coins"> or more that you didn’t spend. At that point you can discard Wine Merchant from your mat.</li><li>If you have multiple Wine Merchants on your mat, you don’t need <img src="assets/Coin2.png" alt="2 coins"> per Wine Merchant, just <img src="assets/Coin2.png" alt="2 coins"> total.</li></ul><ul class="rules"><li>Unlike other Reserve cards, you don’t recover Wine Merchant from your Tavern mat by calling it; it goes straight to your discard pile, not your play area.</li><li>Unplayed Treasures in your hand are not unspent <img src="assets/Coin.png" alt="coins">; you only get <img src="assets/Coin.png" alt="coins"> for the Treasures you play.</li><li>After discarding Wine Merchants you can use the unspent <img src="assets/Coin.png" alt="coins"> for other effects, e.g. for Pageant.</li><li>If you return from your Buy phase to your Action phase (with Villa or Cavalry), you do not get to discard your Wine Merchants.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Set aside the top 3 cards of your deck face down (you may look at them). Now and at the start of your next two turns, put one into your hand.',
		help: '<ul class="faq"><li>You look at three cards, and get one now, one next turn, and one the turn after that.</li><li>Put the set-aside cards under Archive.</li><li>If you play two Archives, they get separate sets of cards.</li><li>If you Throne Room an Archive, keep the sets of cards separate; you get one from each each turn.</li><li>If there are fewer than three cards, just set aside what you can, and Archive will run out of cards faster and still be discarded the turn it has no cards left.</li></ul><ul class="rules"><li>A Throne Room on an Archive remains in play even if there are not enough cards left in your deck to sustain a second Archive effect for the full 3 turns.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin6.png" alt="6 coins"><br><b>+1 Buy</b><hr>When you discard this from play, take <img src="assets/Debt6.png" alt="6 debt">, and then you may pay off <img src="assets/Debt.png" alt="debt">.',
		help: '<ul class="faq"><li>When you discard this from play (normally, in the Clean-up phase of the turn you played it), you get <img src="assets/Debt6.png" alt="6 debt">, and then get an extra opportunity to pay off <img src="assets/Debt.png" alt="debt"> with <img src="assets/Coin.png" alt="coins">, right then.</li><li>You do not get the <img src="assets/Debt6.png" alt="6 debt"> if you did not discard it from play - for example, if you trash it due to Counterfeit (from Dominion: Dark Ages).</li><li>You only get <img src="assets/Debt6.png" alt="6 debt"> per copy of Capital discarded; for example if you use Crown to play Capital twice, you still only get <img src="assets/Debt6.png" alt="6 debt"> when you discard it from play.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Victory', 'Castle'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Sort the Castle pile by cost, putting the more expensive Castles on the bottom. For a 2-player game, use only one of each Castle. Only the top card of the pile can be gained or bought.',
		help: '<ul class="rules"><li>When Castles are selected as a Kingdom card for a game, they are ordered in ascending order of cost from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin10.png" alt="10 coins"> in a single Supply pile, of which only the top card can be gained at any given time, though you may look through the pile to see which Castles are next.</li><li>Every Castle is a Victory–Castle card, though 3 have an additional type as well. They are all worth some amount of <img src="assets/VP.png" alt="victory points">, and most have different abilities as well.</li><li>In games with more than 2 players, an extra copy of 4 of the Castles (Humble, Small, Opulent, King’s) are added to the pile, still in ascending order of cost.</li><li>Humble Castle and King’s Castle count themselves.</li><li>Small Castle gains you the top Castle, whichever one that is. You are allowed to choose to trash a Castle from your hand, even if you don’t have any Castles in your hand, though this means you will not gain a Castle.</li><li>Haunted Castle works whether you buy it or gain it some other way, provided that it is your turn. Unlike Ghost Ship, if they have more than 5 cards in hand, they only put 2 of them back. If gaining this activates when-gain abilities for another player (such as Road Network or Black Cat), you do Haunted Castle’s ability first (assuming you gained it on your own turn). Just like Ill-Gotten Gains and Raid, Haunted Castle is not an Attack, so it cannot be responded to with Horse Traders, and it cannot be blocked with Moat.</li><li>You can pick either option on Sprawling Castle regardless of how many Duchies and Estates are left in the piles.</li><li>Grand Castle counts both Victory cards in play - such as an Opulent Castle - and Victory cards in your hand. Due to the wording, you receive +1<img src="assets/VP.png" alt="victory point"> from all Victory cards in play, including your opponents’. So if your opponent has a Mill in play, and they play a Swindler and trash your Platinum into Grand Castle, you will get +1<img src="assets/VP.png" alt="victory point"> from their Mill.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Trash a card from your hand. If it costs <img src="assets/Coin3.png" alt="3 coins"> or more, each other player gains a Curse. If it’s a Treasure, each other player discards down to 3 cards in hand.',
		help: '<ul class="faq"><li>If the card you trash is a treasure, each other player discards down to 3 cards in hand; if the card you trash costs <img src="assets/Coin3.png" alt="3 coins"> or more, each other player gains a Curse; if it is both (e.g. Silver), both things happen; if it is neither, neither thing happens.</li><li>If you have no cards in hand left to trash, neither thing happens.</li></ul><ul class="rules"><li>Unlike Followers (where one player gains the Curse and discards before the next player does so), the other players first gain the Curse in turn order, and then the other players discard cards in turn order.</li></ul><p>Rocks</p><ul class="faq"><li>If it is another player’s turn, then it is not your Buy phase, so the Silver goes to your hand.</li></ul><ul class="rules"><li>The Silver is gained directly to your deck or hand; it does not visit your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top card of your deck and put it into your hand. The player to your left reveals the top card of their deck. If your card costs more, <b>+<img src="assets/Coin1.png" alt="1 coin"></b> and <b>+1<img src="assets/VP.png" alt="victory point"></b>.',
		help: '<ul class="faq"><li>You and the player to your left reveal your top cards; yours goes into your hand, theirs goes back on their deck.</li><li>If your card costs more you get +<img src="assets/Coin1.png" alt="1 coin"> and +1<img src="assets/VP.png" alt="victory point">; you can put the <img src="assets/VP.png" alt="victory point"> token on the Chariot Race to remind you that it made +<img src="assets/Coin1.png" alt="1 coin"> this turn.</li><li>If it is a tie, your card did not cost more.</li><li>With <img src="assets/Debt.png" alt="debt">, your card costs more only if both <img src="assets/Coin.png" alt="coins"> and <img src="assets/Debt.png" alt="debt"> amounts are larger, or one is larger and the other the same.</li><li>For example Fortune (<img src="assets/Coin8.png" alt="8 coins"><img src="assets/Debt8.png" alt="8 debt">) costs more than Overlord (<img src="assets/Debt8.png" alt="8 debt">), but Overlord does not cost more than Silver, and Silver does not cost more than Overlord.</li><li>If either player has no card to reveal, your card does not cost more.</li></ul><ul class="rules"><li><img src="assets/Potion.png" alt="Potion"> cards never cost more or less than cards costing <img src="assets/Debt.png" alt="debt">.</li><li>Just like <img src="assets/Debt.png" alt="debt">-costs, <img src="assets/Potion.png" alt="potion"> cards only cost more than another card if both the <img src="assets/Coin.png" alt="coins"> and <img src="assets/Potion.png" alt="potion"> amounts are larger, or one is larger and one the same. This means that Familiar costs more than Farmers’ Market and Apothecary, but it does not cost more than Forum.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+1 Buy</b> and <b>+<img src="assets/Coin2.png" alt="2 coins"></b>; or the next time you gain a card this turn, you may also gain a differently named card with the same cost.',
		help: '<ul class="faq"><li>These are cumulative, and each Charm does not have to gain a different card, just a different card from the one whose gain triggered the Charms’ effect.</li><li>For example if you play two Charms and then gain a Forum, you could gain two Duchies.</li><li>If the next card you gain triggers other on-gain effects, you can choose the order of those effects and the additional card you gain from Charm. For example if you play Charm, choosing to gain an extra card, and then gain Villa, you may put the Villa in your hand, get +1 Action, and return to your Action phase either before or after gaining an additional card costing <img src="assets/Coin4.png" alt="4 coins">.</li><li>The costs have to be identical; for example if you play Charm and buy Overlord, you can gain City Quarter, which also costs <img src="assets/Debt8.png" alt="8 debt">, but not Fortune, which costs <img src="assets/Coin8.png" alt="8 coins"><img src="assets/Debt8.png" alt="8 debt">.</li></ul><ul class="rules"><li>As a result of errata in 2022, Charm’s gain effect activates the next time you gain something, regardless of whether you gained a card by buying it or some other way.</li><li>If the next card you gain changes its own cost, that can affect what Charm can gain. For example, if you play 2 Charms and then gain a Destrier that costs <img src="assets/Coin6.png" alt="6 coins">, the first Charm will gain a card costing <img src="assets/Coin5.png" alt="5 coins">, and the second Charm gains a card costing <img src="assets/Coin4.png" alt="4 coins">.</li><li>If you gain a Knight, Charm can gain the next Knight that gets revealed (assuming that neither is Sir Martin).</li>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Reveal your hand. <b>+1 Card</b> per Action card revealed.',
		help: '<ul class="faq"><li>Cards with multiple types that include Action, such as Crown, are Actions.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If it’s your Action phase, you may play an Action from your hand twice.<br>If it’s your Buy phase, you may play a Treasure from your hand twice.',
		help: '<ul class="faq"><li>If you play this in your Action phase, you play an Action card from your hand, then play the same card again; this does not use up any extra Actions you have.</li><li>If you play this in your Buy phase, you play a Treasure from your hand, then play it again; this does not use up any Actions at all.</li><li>Crown can be used to play another Crown in either your Action or Buy phase, causing you to either play two more Actions twice each, or two more Treasures twice each.</li><li>If you play Crown in your Action phase via something that lets you play Treasures (like Storyteller from Dominion: Adventures), Crown will still play an Action card twice.</li></ul><ul class="rules"><li>If you have abilities to resolve at the start of your turn, it is considered part of your Action phase, and you cannot end it. This means if you play Crown at the start of your turn (with e.g, Delay), you cannot skip to your Buy phase and play a Treasure twice.</li><li>Crown counts as both an Action and a Treasure for all purposes, regardless of when you play it. If you play a Crown in your Action phase, it’s still a Treasure and will be trashed from play if you buy Mint. If you play it in your Buy phase, it’s still an Action and will reduce the cost of Peddler. And so on.</li><li>Crown can be played as a Way even if it’s played in the Buy phase.</li><li>If you somehow manage to play Crown when it’s neither your Action phase nor your Buy phase (e.g., if you gain it at Night (with e.g. Vampire) or Clean-up (with e.g. Improve) and play it with Innovation, or even if you play it on someone else’s turn via some esoteric and unlikely combo), you can’t play any card from your hand twice.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+2 Actions</b><br>You may reveal a Gold or Plunder from your hand. If you do not, set this aside, and return it to the Supply at the start of Clean-up.',
		help: '<ul class="faq"><li>Revealing a Plunder or Gold is optional.</li><li>When you return Encampment to the Supply, it goes on top of its pile, potentially covering up a Plunder.</li></ul><ul class="rules"><li>If you cannot return Encampment to the Supply (e.g. you bought it from the Black Market), then if it is set aside it will stay there but will still count as one of your cards at the end of the game.</li><li>If you somehow play this at the start of Clean-up, and it sets itself aside, it will immediately return to the Supply.</li></ul><p>Plunder</p><ul class="faq"><li>This gives you a <img src="assets/VP.png" alt="victory point"> token every time you play it.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Until your next turn, the first time each other player plays an Action card on their turn, they get <b>+1 Card</b> and <b>+1 Action</b> instead of following its instructions.<br>At the start of your next turn,<br><b>+2 Cards</b>',
		help: '<ul class="faq"><li>Players revealing a card like Moat when this is played have to do it right then, not later, even though the attack will not hurt them until their turn.</li><li>The first Action each other player plays, just on their next turn, will give them +1 Card +1 Action instead of what it would have normally done.</li><li>This does not affect abilities below a dividing line; they still function. For example a player playing Sacrifice would get +1 Card +1 Action and not do anything Sacrifice normally does; a player playing Groundskeeper would get +1 Card +1 Action and would still get <img src="assets/VP.png" alt="victory points"> for gaining Victory cards.</li><li>It can be helpful to turn the affected card sideways, to remember that it did not do what it normally does.</li><li>Enchantress does not affect card abilities from cards played on previous turns; for example if an opponent plays Enchantress and you have an Archive out from a previous turn, on your turn you will first get a card from your Archive as normal, and then the first Action card actually played on that turn will be affected by Enchantress.</li><li>If Enchantress affects a Crown played in a Buy phase, its player gets +1 Card +1 Action, but has no way to use the +1 Action, since it is their Buy phase (but it might matter e.g. if the player buys Villa).</li><li>If your opponents play multiple Enchantresses in a round, they still only affect the first card you play on each turn, and not any further cards.</li></ul><ul class="rules"><li>If a player under the effect of an Enchantress takes one or more extra turns, the first Action played on each of those turns is also turned into a cantrip.</li><li>If a Duration card gets affected by Enchantress, it will get discarded from play this turn. This doesn’t stop any below-the-line effects.</li><li>Enchantress does not change anything about the card, just prevents on-play instructions on the card from being carried out properly. So cards that are Enchanted can still prompt Reactions (such as another player’s Diplomat), still carry out all Adventures tokens effects (such as the +<img src="assets/Coin1.png" alt="1 coin"> token from Training), and can still be replayed by Royal Carriage, Citadel, or Scepter to perform their normal effects.</li><li>Using a Way on a card overrides Enchantress; you get the effect of the Way, rather than the +1 Card / +1 Action effect Enchantress would give you. This applies even for Way of the ChameleonWay of the Chameleon.jpg.</li><li>The Lantern has no effect on Enchantress; if the first card you play on an Enchanted turn is Border Guard, you just get +1 Card / +1 Action regardless of whether or not you have the Lantern.</li><li>If you play a card, but then somehow play a second card before you begin executing the first card’s instructions, the first card is still the one affected by Enchantress.</li><li>If the first Action card you play in a turn is a Werewolf during the Night phase, or a Crown during the Buy phase, the Werewolf or Crown will still be affected by Enchantress and give you +1 Card / +1 Action (neither of them very useful in the Night phase) rather than its usual effect.</li><li>This applies if the first Action card played in a turn is played after the Action phase for any other reason, as well—e.g., as a result of Capitalism or Gamble.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 0,
			debt: 4,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">.<br>You may trash this.<br>If you do, gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">.',
		help: '<ul class="faq"><li>Engineer cannot gain copies of itself, or any other card with <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> in the cost.</li><li>When you play it, you gain a card, then may trash Engineer to gain a second card (which can be the same as the first or different).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Gathering'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>If there are 4<img src="assets/VP.png" alt="victory points"> or more on the Farmers’ Market Supply pile, take them and trash this. Otherwise, add 1<img src="assets/VP.png" alt="victory point"> to the pile and then +<img src="assets/Coin1.png" alt="1 coin"> per 1<img src="assets/VP.png" alt="victory point"> on the pile.',
		help: '<ul class="faq"><li>The first time this is played, it produces +<img src="assets/Coin1.png" alt="1 coin"> (and +1 Buy), the next time +<img src="assets/Coin2.png" alt="2 coins">, then +<img src="assets/Coin3.png" alt="3 coins">, then +<img src="assets/Coin4.png" alt="4 coins">, then the next time the player takes the 4<img src="assets/VP.png" alt="victory points"> (and gets no +<img src="assets/Coin.png" alt="coins">), then the next time it is back to +<img src="assets/Coin1.png" alt="1 coin">.</li><li>This still functions if the Farmers’ Market pile is empty.</li></ul><ul class="rules"><li>If you gain this from Black Market, or when it’s set aside with Way of the Mouse, there is no Farmers’ Market pile. This means no <img src="assets/VP.png" alt="victory points"> will accumulate, and you won’t get any <img src="assets/Coin.png" alt="coins">; the card does nothing but +1 Buy.</li><li>If you play this with a Command variant, the Farmers’ Market will fail to trash itself, but you still take 4<img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Action</b><br>Discard 2 cards.<hr>When you gain this, <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>For example, with <img src="assets/Coin13.png" alt="13 coins"> and only one Buy, you could buy a Forum, getting +1 Buy, then buy a Province.</li></ul><ul class="rules"><li>Since 2022, Forum’s +Buy bonus’ trigger is changing from “when you buy” to “when you gain”.</li><li>Getting +1 Buy happens when you buy or otherwise gain this.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Reveal a card from your hand. The player to your left may reveal a copy from their hand. If they do not, +<img src="assets/Coin1.png" alt="1 coin"> and trash a Gladiator from the Supply.',
		help: '<ul class="faq"><li>If there are no Gladiators in the Supply, you cannot trash one, but that does not stop you from getting the +<img src="assets/Coin1.png" alt="1 coin">.</li><li>If you have no cards in hand, the player to your left cannot reveal a copy of the card you revealed, so you will get the +<img src="assets/Coin1.png" alt="1 coin"> and trash a Gladiator.</li></ul><ul class="rules"><li>You can’t trash a Gladiator from the Supply if it’s not on top of its pile. This may come up if you rotate the Gladiators with Battle Plan.</li></ul><p>Fortune</p><ul class="faq"><li>You only double your <img src="assets/Coin.png" alt="coins"> the first time you play a Fortune in a turn; any further times only get you +1 Buy.</li></ul><ul class="rules"><li>Fortune does not take into consideration <img src="assets/Coin.png" alt="coins"> that have been produced, but already spent this turn, such as via Storyteller; Fortune only doubles the <img src="assets/Coin.png" alt="coins"> that you currently have when you play it.</li><li>Coffers can be used before playing Fortune, and Debt can be repayed after.</li><li>If you put your +<img src="assets/Coin1.png" alt="1 coin"> token (from Training) on the Gladiator/Fortune pile, you’ll get +<img src="assets/Coin1.png" alt="1 coin"> from playing Fortune before you double your <img src="assets/Coin.png" alt="coins">.</li><li>If you buy Ball, gain a Cavalry, and draw a Fortune, you can play Fortune while you have your –<img src="assets/Coin1.png" alt="1 coin"> token. The token takes effect after doubling your <img src="assets/Coin.png" alt="coins">. So if you have <img src="assets/Coin5.png" alt="5 coins"> and then play Fortune, you go to <img src="assets/Coin10.png" alt="10 coins">, lose <img src="assets/Coin1.png" alt="1 coin">, and end with <img src="assets/Coin9.png" alt="9 coins">.</li><li>If you play Fortune when you have <img src="assets/Coin0.png" alt="0 coins">, you won’t remove your –<img src="assets/Coin1.png" alt="1 coin"> token, and it will still count as doubling your <img src="assets/Coin.png" alt="coins"> for the turn.</li><li>Unlike Fool’s Gold, which checks if you played another Fool’s Gold this turn, Fortune only checks if you haven’t doubled your <img src="assets/Coin.png" alt="coins"> this turn. So if your 1st Fortune gets blocked by a Highwayman, playing a 2nd Fortune will still double your <img src="assets/Coin.png" alt="coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>This turn, when you gain a Victory card, +1<img src="assets/VP.png" alt="victory point">.',
		help: '<ul class="faq"><li>This can trigger multiple times in a turn, for cards gained different ways. For example you could play Groundskeeper, then play Engineer gaining an Estate and taking 1<img src="assets/VP.png" alt="victory point">, then in your Buy phase buy a Duchy taking another +1<img src="assets/VP.png" alt="victory point">.</li><li>Multiple Groundskeepers are cumulative.</li></ul><ul class="rules"><li>In 2022, Groundskeeper got errata that changed it from a “while this is in play” ability to a “this turn” ability. This means that now if you use Crown to play a Groundskeeper twice, then each Victory card you gain that turn will come with 2<img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br>You may reveal a Gold from your hand. If you do, each other player discards down to 2 cards in hand, then draws a card.',
		help: '<ul class="faq"><li>Players ’ing to respond to the Attack (e.g. with Moat) must do so before you choose whether or not to reveal a Gold.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Command'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'Play a non-Command Action card from the Supply costing up to <img src="assets/Coin5.png" alt="5 coins">, leaving it there.',
		help: '<ul class="faq"><li>This plays a non-Command Action card from the Supply costing up to <img src="assets/Coin5.png" alt="5 coins">.</li><li>Command is a type that appears on cards like this; it has no meaning beyond stopping these cards from playing each other.</li><li>Overlord can only play the top card of a Supply pile.</li><li>The played Action card stays in the Supply; if an effect tries to move it, such as Encampment trying to set itself aside, it will fail to move it. If the card checks to see if it was trashed, such as with Mining Village (from Intrigue), that part will fail, but if it does not, like Acting Troupe (from Renaissance), the rest of the effect will still happen.</li><li>Since the played card is not in play, “while this is in play” abilities (such as Highway’s from Hinterlands) will not do anything.</li><li>Leave Overlord in play until the Clean-up of the turn the card it played would have left play. Normally that means you’ll discard it that turn, but if Overlord plays a Duration card (Duration cards are in other expansions), it will stay out like the Duration card would have, and if Overlord plays a card like Throne Room that plays a Duration card twice, it will stay out in the same way the Throne Room would have.</li><li>If you play Overlord multiple times, such as with Throne Room, leave it out until the Clean-up of the turn that the last of the cards it played would have left play.</li><li>Overlord cannot play a Crown during a Buy phase, since normally Overlord itself is not a Treasure and so cannot normally be played in Buy phases.</li></ul><ul class="rules"><li>Overlord, along with Band of Misfits, was one of the main cards affected by the 2019 errata. Instead of imitating the abilities of an eligible Action card in the Supply—which raised rules questions—it now simply tells you to play said card, leaving it in the Supply.</li><li></li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top card of your deck. If it costs <img src="assets/Coin5.png" alt="5 coins"> or more, put it into your hand.',
		help: '<ul class="faq"><li>Cards costing <img src="assets/Debt.png" alt="debt"> do not cost <img src="assets/Coin5.png" alt="5 coins"> or more unless they also have a <img src="assets/Coin.png" alt="coin"> cost of <img src="assets/Coin5.png" alt="5 coins"> or more. So Fortune does but City Quarter does not.</li></ul><p>Emporium</p><ul class="faq"><li>This counts Action cards in play, including Action cards played this turn, Duration cards in play from previous turns, and Reserve cards (from Dominion: Adventures) called into play this turn.</li></ul><ul class="rules"><li>Since the attempt to gain 2<img src="assets/VP.png" alt="victory points"> (and thus, the check to see how many Actions are in play) has “when-gain” timing, if another effect with “when-gain” timing brings more Actions into play (such as Duplicate being called), the player can choose to resolve the effect bringing the Actions into play first, delaying the attempted <img src="assets/VP.png" alt="victory point"> gain until after those effects are resolved. This can lead to instances where when an Emporium is first gained, fewer than 5 Actions are in play, but the player still gets 2<img src="assets/VP.png" alt="victory points">, since they have chosen to do so after bringing a sufficient amount of Actions into play. For example, with only four Actions in play, a player could buy an Emporium, choose to call Duplicate first, then gain 2<img src="assets/VP.png" alt="victory points"> (since they now have 5 Actions in play), then another 2<img src="assets/VP.png" alt="victory points"> from the Duplicated Emporium.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: '<b>+5 Cards</b><br>Reveal your hand; discard the Coppers.',
		help: '<ul class="faq"><li>You discard both Coppers that were in your hand already, and Coppers drawn in the +5 Cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. If it’s an…<br>Action card, <b>+2 Cards</b>, <b>+2 Actions</b><br>Treasure card, <b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Victory card, <b>+2<img src="assets/VP.png" alt="victory points"></b>',
		help: '<ul class="faq"><li>If you trash a card with multiple types, you get all relevant bonuses; for example if you trash Crown, you get +2 Cards, +2 Actions, and +<img src="assets/Coin2.png" alt="2 coins">.</li><li>If you trash a card with no relevant types (such as Curse), you get nothing.</li></ul><ul class="rules"><li>With the 2019 errata, Inherited Estates in the trash are still Action cards, so Sacrificing an Estate will give +2 Cards, +2 Actions, and +2<img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Look through your discard pile. You may reveal a Copper from it and put it into your hand.',
		help: '<ul class="faq"><li>You can look through your discard pile even if you know there are no Coppers or Settlers in it.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Gathering'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png" alt="victory point"></b><br>Trash from 1 to 3 differently named cards from your hand. Add <b>1<img src="assets/VP.png" alt="victory point"></b> to the Temple Supply pile.<hr>When you gain this, take the <img src="assets/VP.png" alt="victory points"> from the Temple Supply pile.',
		help: '<ul class="faq"><li>You get +1<img src="assets/VP.png" alt="victory point">, trash 1, 2, or 3 cards with different names from your hand (for example a Copper and an Estate, but not two Coppers), then add 1<img src="assets/VP.png" alt="victory point"> (from the supply) to the Temple pile.</li><li>Gaining a Temple (whether buying it or otherwise) gives you all the <img src="assets/VP.png" alt="victory points"> that has accumulated on the pile.</li><li>The pile gets <img src="assets/VP.png" alt="victory points"> even if it is empty; this only matters if there is a way to return a Temple to the pile (like Ambassador from Dominion: Seaside) or a way to gain one from the trash (like Graverobber from Dominion: Dark Ages).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions<br>+1 Buy<br>+<img src="assets/Coin1.png" alt="1 coin"></b><hr>When you gain this, put it into your hand, <b>+1 Action</b>, and if it’s your Buy phase return to your Action phase.',
		help: '<ul class="faq"><li>If you gain this during your Action phase, such as with Engineer, you will put the Villa into your hand and get +1 Action (letting you, for example, play the Villa).</li><li>If you gain this during your Buy phase (such as by buying it), you will put the Villa into your hand, get +1 Action, and return to your Action phase.</li><li>This will let you play more Action cards (such as the Villa); when you are done with that you will return to your Buy phase, from the beginning - you can play more Treasures (and Arena will trigger again).</li><li>If you buy Villa, that uses up your default Buy for the turn, however playing Villa will give you +1 Buy and so let you buy another card in your second Buy phase.</li><li>If you gain this during another player’s turn, you will put the Villa into your hand and get +1 Action, but will have no way to use that Action, since it is not your turn.</li><li>It is possible to return to your Action phase multiple times in a turn via buying multiple Villas.</li><li>Returning to your Action phase does not cause “start of turn” abilities to repeat; they only happen at the start of your turn.</li></ul><ul class="rules"><li>Unlike Ghost Town, Villa visits the place it is gained to before it moves itself to your hand. This means that when you gain it onto your deck (with e.g. Artificer), Villa will visit the top of your deck before going into your hand.</li><li>Normally, when you gain a Villa while under a Gatekeeper attack, you can choose to put Villa into your hand first, and Gatekeeper will fail to exile Villa. But if you gain it to your hand (with e.g. Transmogrify), Gatekeeper will be able to exile it.</li><li>If Villa can’t put itself into your hand (e.g. because you set it aside with Cargo Ship), you’ll still get +1 Action, and you still return to your Action phase.</li><li>Because Replace and Summon try to move Villa after it is gained and then put into your hand, they will fail to move it.</li><li>If you buy a Villa, but you don’t play it, you can enter your next Buy phase with 0 Buys. You can still play Treasures, but unless you get +Buy from them, you can’t buy anything.</li><li>Villa only returns you to your Action phase if gained in your Buy phase. If you gain it at Night (with e.g. Devil’s Workshop) or Clean-up (with e.g. Improve), it goes to your hand, but you can’t play it.</li><li>Gaining a Villa during your Buy phase counts as ending it (for cards like Wine Merchant and Pageant). If you take multiple Buy phases, those cards will trigger multiple times.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Gathering'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: <b>+3 Cards</b> and add <b>1<img src="assets/VP.png" alt="victory point"></b> to the Wild Hunt Supply pile; or gain an Estate, and if you do, take the <img src="assets/VP.png" alt="victory points"> from the pile.',
		help: '<ul class="faq"><li>If the Estate pile is empty, you can choose that option but will not get the tokens.</li><li>Wild Hunt still functions normally if the Wild Hunt pile is empty.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Receive a Boon.',
		help: '<ul class="faq"><li>You get +<img src="assets/Coin2.png" alt="2 coins"> and receive a Boon.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>When you gain this, take a Boon. Receive it now or at the start of your next turn.',
		help: '<ul class="faq"><li>You see the Boon before deciding to resolve it immediately or at the start of your next turn.</li><li>If you save it for next turn, it sits in front of you until then (or until the end of that turn if it says to keep it out until Clean-up).</li></ul><ul class="rules"><li>If you gain this onto your deck (with e.g. Armory) and receive The Sea’s Gift, cards like Gatekeeper will lose track of Blessed Village.</li><li>When you are looking at cards from the top of your deck (with e.g. The Sun’s Gift), that counts as moving them. So if you gain this onto your deck and then receive The Sun’s Gift, that will cause Gatekeeper to lose track (even if you leave Blessed Village on top of your deck).</li><li>If you gain a Blessed Village, discard a Blessed Village from Exile, and receive The Moon’s Gift, and topdeck the Blessed Village you just discarded, then Changeling and Gatekeeper can still move the Blessed Village you just gained.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>2<img src="assets/VP.png" alt="victory points"></b><hr>When you gain this, trash up to 4 cards from your hand.<hr>Heirloom: Haunted Mirror',
		help: '<ul class="faq"><li>In games using this, replace one of your starting Coppers with a Haunted Mirror.</li><li>When you gain a Cemetery, trash from zero to four cards from your hand.</li></ul><p>Haunted Mirror</p><ul class="faq"><li>Haunted Mirror does not give you a way to trash it, but does something if you find a way to.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Night'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash this. Gain a copy of a card you have in play.<hr>In games using this, when you gain a card costing <img src="assets/Coin3.png" alt="3 coins"> or more, you may exchange it for a Changeling.',
		help: '<ul class="faq"><li>When Changeling is in the Supply, any time you gain a card costing at least <img src="assets/Coin3.png" alt="3 coins">, you may exchange it for a Changeling from the Supply.</li><li>You can only do this if you can actually return the card you gained, and there is at least one Changeling in the Supply.</li><li>The Changeling goes to your discard pile, no matter where the gained card went.</li><li>Things that happen due to gaining the gained card still happen.</li><li>So for example you could gain Skulk, exchange it for a Changeling (returning Skulk to the Supply and putting Changeling into your discard pile), and still gain a Gold from Skulk’s ability.</li><li>Exchanging for a Changeling is optional.</li><li>You cannot do it if the gained card costs less than<img src="assets/Coin3.png" alt="3 coins">, even if it normally costs <img src="assets/Coin3.png" alt="3 coins"> or more, and you cannot do it if the cost is neither more or less than <img src="assets/Coin3.png" alt="3 coins"> (such as Transmute from Alchemy).</li><li>When you play Changeling, you trash it and gain a copy of a card you have in play; that can be any card you have in play, including Actions, Treasures, and Night cards, and including Duration cards you played on a previous turn that are still in play.</li></ul><ul class="rules"><li>Changeling cannot gain a copy of Changeling, since it is not in play when the effect happens – it’s either in the trash (in a normal turn) or set aside (when played in a Possessed turn).</li><li>Changeling can gain only Supply cards – for example it cannot gain an Imp, any Traveller upgrades, etc.</li><li>Changeling cannot gain cards that are not available – for example it cannot gain any of Knights (since all Knights are different), a Ruins when the Ruins card you have in play is not the same as the top card on the Ruins pile, a card from a split pile when it is covered by the other card from that pile (like Plunder, when it is covered by Encampment), etc.</li><li>You can choose any card you have in play, but if that card’s pile is empty, or its name does not match the name of the top card on that pile, or that card’s pile is not in the Supply, or that card has no pile, you gain nothing.</li><li>You can exchange for Changeling when gaining non-Supply cards, as long as they come from a pile, such as Ghost. You cannot exchange for non-Supply cards that do not have an associated pile, such as the Zombies.</li><li>Remember that you can choose the order in which simultaneous effects happen. When you gain a card that moves itself (like Villa), and you allow that moving effect to happen first, Changeling will lose track of the card and not be able to exchange with it. If you want to exchange, make sure you do that first.</li><li>This checks the cost of the card as you’re gaining it, not after. So if you gain a Fisherman with an empty discard pile, you cannot exchange it for a Changeling, because Fisherman cost <img src="assets/Coin2.png" alt="2 coins"> when you gained it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, gain a card to your hand costing up to <img src="assets/Coin4.png" alt="4 coins">.',
		help: '<ul class="faq"><li>If you use this to gain a card that is normally gained to a location other than your discard pile, such as Nomad Camp (from Hinterlands), it goes to your hand instead.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>You may play an Action card from your hand that you don’t have a copy of in play. If you do, <b>+1 Action</b>.',
		help: '<ul class="faq"><li>When you play this, you can play an Action card from your hand, provided that you do not have a copy of that card in play.</li><li>It does not matter if you played the Action card this turn, only that it is not in play when you play Conclave; you can use Conclave to play a card that you played but trashed and so do not have in play, like a Pixie you trashed, but cannot use it to play a card you did not play this turn that is still in play, such as a Secret Cave from your previous turn.</li><li>Conclave normally cannot play a Conclave, as that is a card you have in play.</li><li>If you do play a card with Conclave, then Conclave gives you +1 Action, which has no special limitations, and so can for example be used to play another Conclave.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Set aside any number of non-Duration Treasures you have in play, face down (under this). While any remain, at the start of each of your turns, put one of them into your hand.',
		help: '<ul class="faq"><li>For example if you set aside three Treasures, then at the start of each of your next three turns you will put one of them into your hand, and at the end of the last of those turns you will discard Crypt from play.</li><li>The Treasures are face-down; you can look at them at any time, but other players may not.</li></ul><ul class="rules"><li>Crypt got errata in 2022 so that it can’t set aside Treasure-Durations (like Astrolabe).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Draw until you have 6 cards in hand.<hr>When you gain this, receive a Hex.',
		help: '<ul class="faq"><li>If you already have six or more cards in hand, you do not draw any cards.</li><li>When you gain Cursed Village, you receive a Hex; since that will often be in your Buy phase, some of the Hexes may not do anything to you.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, <b>+2 Cards</b>.<hr>This is gained to your hand (instead of your discard pile).',
		help: '<ul class="faq"><li>Since Night is after the Buy phase, normally you can play this the turn you buy it.</li></ul><ul class="rules"><li>If you gain this card onto your deck (with e.g. Armory), you didn’t gain it to your discard pile, so Den of Sin’s ability doesn’t trigger and it stays on your deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'If the number of cards you’ve gained this turn is:<br>2+, gain an Imp from its pile;<br>1, gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">;<br>0, gain a Gold.',
		help: '<ul class="faq"><li>This counts all cards you have gained this turn, including cards gained at Night prior to playing it.</li><li>You cannot choose a different benefit; if you have gained two or more cards, you have to gain an Imp, you cannot take a card costing up to <img src="assets/Coin4.png" alt="4 coins"> or a Gold instead.</li><li>Normally, bought cards are then gained, but cards exchanged for (such as Vampire exchanging for Bat) are not gained.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Receive one of the set-aside Boons (leaving it there).<hr>Setup: Set aside the top 3 Boons face up.',
		help: '<ul class="faq"><li>At the start of the game, deal out three Boons face up for Druid.</li><li>If there are other Fate cards in the same game, those Fate cards will not produce those Boons that game; the deck will consist of the other nine Boons.</li><li>When you play Druid, you choose one of its three Boons to receive, and leave it there in the set-aside area for Druid, even if it is one of the Boons that says to keep it until Cleanup (e.g. The Field’s Gift).</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Gain a cheaper Spirit from one of the Spirit piles.',
		help: '<ul class="faq"><li>The Spirits are Will-o’-Wisp, Imp, and Ghost.</li><li>If for example you trash a Silver, you can gain a Will-o’-Wisp or Imp, as those both cost less than Silver.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When you discard this other than during Clean-up, you may set it aside, and put it into your hand at end of turn.',
		help: '<ul class="faq"><li>“End of turn” is after drawing in Clean-up.</li><li>The Reaction ability can happen on your turn and on other players’ turns; if for example you discard Faithful Hound to another player’s Raider, you can set it aside and return it to your hand at the end of that turn.</li><li>Faithful Hound does not have to be in your hand for the ability to work; for example you can set it aside when it is discarded from your deck due to Night Watchman.</li><li>The ability does not work if Faithful Hound is put into your discard pile without being discarded; for example nothing special happens when you gain Faithful Hound, or put your deck into your discard pile with Scavenger (from Dark Ages).</li><li>The ability does not do anything during Clean-up.</li><li>Setting Faithful Hound aside is optional.</li><li>You cannot choose to discard Faithful Hound without something telling you to discard.</li></ul><ul class="rules"><li>If discarded by Vassal, it can be set aside first, and still played (drawing 2 cards); it just won’t be moved into your play area, since Vassal will have lost track of it.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'If you aren’t the player with Lost in the Woods, take it, take 3 Boons, and receive the Boons in any order.<hr>Heirloom: Lucky Coin',
		help: '<ul class="faq"><li>If you have Lost in the Woods, playing Fool does nothing.</li><li>If you do not have Lost in the Woods, you take it – even from another player, if another player has it – and also take 3 Boons and receive them in the order you choose (discarding them when receiving them, or in Clean-up as appropriate).</li><li>You do not need to pick the full order in advance – pick one to resolve, then after resolving it pick another to resolve.</li><li>The player with Lost in the Woods (if any) can optionally discard a card to receive a Boon, at the start of each of their turns.</li><li>In games using Fool, replace one of your starting Coppers with a Lucky Coin.</li></ul><p>Lost in the Woods</p><ul class="faq"><li>The two sides are the same; use either.</li><li>Using the ability is optional.</li><li>Lost in the Woods stays in front of you, turn after turn, until another player takes it with Fool.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, <b>+1 Card</b> and <b>+1 Action</b>.<hr>This is gained to your hand (instead of your discard pile).',
		help: '<ul class="faq"><li>Since Night is after the Buy phase, normally you can play this the turn you buy it.</li></ul><ul class="rules"><li>If you gain this onto your deck (with e.g. Armory), you didn’t gain it to your discard pile, so Ghost Town’s ability doesn’t trigger and it stays on your deck.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night', 'Duration'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.<br>Until then, when another player plays an Attack card, it doesn’t affect you.<hr>This is gained to your hand (instead of your discard pile).',
		help: '<ul class="faq"><li>Since Night is after the Buy phase, normally you can play this the turn you buy it.</li><li>When you play Guardian, you are unaffected by Attack cards other players play between then and your next turn (even if you want one to affect you).</li><li>Guardian does not prevent you from using Reactions when other players play Attacks.</li></ul><ul class="rules"><li>If you gain this onto your deck (with e.g. Armory), you didn’t gain it to your discard pile, so Guardian’s ability doesn’t trigger and it stays on your deck.</li><li>This protects you for the rest of the turn when you play it. So if after playing a Guardian, you gain a Duchy with Vampire, this will protect you from another player’s Black Cat.</li><li>This offers no protection during your next turn. This means that on the turn after you play a Guardian, you can still get attacked by another player’s Black Cat.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure', 'Attack', 'Fate'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin2.png" alt="2 coins"></b><br>If you have an odd number of Idols in play (counting this), receive a Boon; otherwise, each other player gains a Curse.',
		help: '<ul class="faq"><li>Idol cares how many Idols you have in play, not how many you have played this turn; some cards can make those numbers different (e.g. Counterfeit from Dark Ages).</li><li>If you have one Idol in play, you receive a Boon, if two, the other players gain a Curse, if three, you receive a Boon, and so on.</li></ul><ul class="rules"><li>As with all Treasures, you play Idols one at a time.</li><li>If there are no Curses in the Supply, you can’t choose to receive a Boon instead.</li><li>Receiving either The Sea’s Gift or The Wind’s Gift may draw you Actions that you can’t play.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action', 'Doom'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. If you have exactly 7 cards in play, gain a Wish from its pile. Otherwise, receive a Hex.',
		help: '<ul class="faq"><li>Cards you have in play normally include Leprechaun itself, other cards you have played this turn, and Duration cards from previous turns that have not removed themselves from play.</li><li>Cards that were in play but no longer are – e.g. a Pixie you trashed – do not count.</li></ul><ul class="rules"><li>This checks for the number of cards you have in play after gaining the Gold. This means that if you have 6 cards in play (including the Leprechaun), you can react to the gained Gold with a Sheepdog, and that will count for the Wish.</li></ul><p>Wish</p><ul class="faq"><li>You only gain a card if you actually returned Wish to its pile.</li><li>A card you gain that would normally go somewhere else, like Nomad Camp (from Hinterlands), goes to your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'For each card you’ve gained this turn, you may trash a card from your hand or a Copper you have in play.',
		help: '<ul class="faq"><li>For example if you have gained three cards, you may trash up to three cards, with each being either a card from your hand or a Copper you have in play, in any combination.</li><li>Normally, bought cards are then gained, but cards exchanged for (such as Vampire exchanging for Bat) are not gained.</li></ul><ul class="rules"><li>Cards are trashed one at a time. This matters if one of the cards you trashed draws another card; such cards drawn in the middle of trashing can be trashed by Monastery.</li><li>Gaining cards while you trash to Monastery (for example, if you trash a Hunting Grounds) does not let you trash additional cards; you can only trash a number of cards equal to the number of cards gained that turn prior to playing Monastery.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Choose a face up, non-Duration Action card in the trash. Turn it face down for the turn, and play it, leaving it there.<hr>Setup: Put the 3 Zombies into the trash.',
		help: '<ul class="faq"><li>This plays a non-Duration Action card from the trash.</li><li>Normally it can at least play one of the three Zombies, since they start the game in the trash.</li><li>It can play other Action cards that make their way into the trash too.</li><li>The played cards are turned over, to track that each can only be used once per turn this way; at end of turn, turn them back face up.</li><li>Necromancer can play another Necromancer, though normally that will not be useful.</li><li>The Action card stays in the trash; if an effect tries to move it, such as Encampment (from Empires) returning to the Supply, it will fail to move it.</li><li>Necromancer can be used on a card that trashes itself when played; if the card checks to see if it was trashed (such as Pixie), it was not, but if the card does not check (such as Tragic Hero), it will function normally.</li><li>Since the played card is not in play, “while this is in play” abilities (such as Tracker’s) will not do anything.</li></ul><ul class="rules"><li>Face-down cards in the trash can still be interacted with by cards other than Necromancer, such as Lurker, and you can still look at them if you want to know what they are.</li><li>The restriction on movement only applies to effects that would have moved the card out of the play area if it were played normally, for example, Island will fail to move itself out of the trash and onto your Island Mat, although any other effect will still apply, such as moving a card from your hand onto your Island Mat; if a card is looking to move a card out of the trash, it may move itself - thus, if you choose to play a Lurker, Graverobber or Rogue in the trash, it can gain itself out of the trash as a result.</li><li>If a face-down card in the trash is gained, and then later trashed in the same turn, it is returned to the trash face-up, meaning another Necromancer may play it.</li><li>Attempting to trash a card in the trash doesn’t count as trashing. So if you try to trash a Tragic Hero in the trash, you won’t gain any <img src="assets/VP.png" alt="victory points"> from Tomb, and it won’t activate Sewers.</li><li>If Necromancer plays a Throne Room variant that then plays a Duration card, the Necromancer stays in play as long as the Duration does.</li><li>Unlike Band of Misfits, Necromancer can play Command cards from the trash.</li></ul><p>Zombie Apprentice</p><ul class="faq"><li>If you trash an Action card from your hand, you draw three cards and get +1 Action.</li></ul><p>Zombie Mason</p><ul class="faq"><li>Gaining a card is optional.</li><li>You can gain a card costing <img src="assets/Coin1.png" alt="1 coin"> more than the trashed card, or any amount less; for example you can gain a copy of the trashed card.</li></ul><p>Zombie Spy</p><ul class="faq"><li>You draw a card before looking at the top card.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Look at the top 5 cards of your deck, discard any number, and put the rest back in any order.<hr>This is gained to your hand (instead of your discard pile).',
		help: '<ul class="faq"><li>Since Night is after the Buy phase, normally you can play this the turn you buy it.</li></ul><ul class="rules"><li>If you gain this onto your deck (with e.g. Armory), you didn’t gain it to your discard pile, so Night Watchman’s ability doesn’t trigger and it stays on your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Discard the top Boon. You may trash this to receive that Boon twice.<hr>Heirloom: Goat',
		help: '<ul class="faq"><li>If you receive a Boon that says to keep it until Clean-up, move it to in front of you, and remember that you get it twice.</li><li>In games using Pixie, replace one of your starting Coppers with a Goat.</li></ul><p>Goat</p><ul class="faq"><li>Trashing a card is optional.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a Treasure other than Cursed Gold from your hand, for <b>+4 Cards</b>.<hr>Heirloom: Cursed Gold',
		help: '<ul class="faq"><li>In games using Pooka, replace one of your starting Coppers with a Cursed Gold.</li></ul><p>Cursed Gold</p><ul class="faq"><li>You can choose not to play Cursed Gold, and thus not gain a Curse.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Night', 'Duration', 'Attack'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Each other player with 5 or more cards in hand discards a copy of a card you have in play (or reveals they can’t). At the start of your next turn, <b>+<img src="assets/Coin3.png" alt="3 coins"></b>.',
		help: '<ul class="faq"><li>For example if your cards in play are 3 Coppers, a Silver, and a Raider, then each other player with at least 5 cards in hand has to discard a Copper, Silver, or Raider, or reveal their hand to show that they did not have any of those cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin3.png" alt="3 coins"></b><br>Receive a Boon. If it doesn’t give +<img src="assets/Coin1.png" alt="1 coin">, each other player may receive it.',
		help: '<ul class="faq"><li>You have to receive the Boon; the other players can choose to receive it.</li><li>The Field’s Gift and The Forest’s Gift are not shared.</li><li>The River’s Gift means that each player choosing to receive it draws a card at the end of your turn, at the same time as you.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may discard 3 cards. If you did, then at the start of your next turn, <b>+<img src="assets/Coin3.png" alt="3 coins"></b>.<hr>Heirloom: Magic Lamp',
		help: '<ul class="faq"><li>If you do not discard three cards, Secret Cave is discarded from play at end of turn.</li><li>If you do discard three cards, Secret Cave stays out until the Cleanup of your next turn, and you get +<img src="assets/Coin3.png" alt="3 coins"> at the start of that turn.</li><li>You can choose to discard three cards even with fewer cards in hand, and will discard your remaining cards, but will not get the bonus.</li><li>In games using Secret Cave, replace one of your starting Coppers with a Magic Lamp.</li></ul><p>Magic Lamp</p><ul class="faq"><li>Magic Lamp itself counts as one of the six cards.</li><li>A card you have two or more copies of in play does not count; you have to have exactly one copy in play to count a card.</li><li>You can play more Treasures after trashing Magic Lamp, and still get <img src="assets/Coin1.png" alt="1 coin"> from it for that turn.</li></ul><p>Wish</p><ul class="faq"><li>You only gain a card if you actually returned Wish to its pile.</li><li>A card you gain that would normally go somewhere else, like Nomad Camp (from Hinterlands), goes to your hand.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Discard any number of Victory cards, revealing them. <b>+2 Cards</b> per card discarded.<hr>Heirloom: Pasture',
		help: '<ul class="faq"><li>For example, you could discard three Victory cards to draw six cards.</li><li>In games using Shepherd, replace one of your starting Coppers with a Pasture.</li></ul><ul class="rules"><li>If drawing causes you to shuffle, you will shuffle in the discarded Victory cards. And if you discard a Tunnel and gain a Gold, the Gold will get shuffled in.</li></ul><p>Pasture</p><ul class="faq"><li>For example if you have three Estates, then Pasture is worth 3<img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Doom'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Each other player receives the next Hex.<hr>When you gain this, gain a Gold.',
		help: '<ul class="faq"><li>You gain the Gold whether you gained Skulk due to buying it, or gained it some other way.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>If you have no other cards in play, gain an Imp from its pile. Otherwise, each other player receives the next Hex.',
		help: '<ul class="faq"><li>Cards in play from previous turns are still cards in play; cards you played this turn but which are no longer in play (such as a Pixie you trashed) are not in play.</li></ul><ul class="rules"><li>If your only card in play is an Overlord, and it plays a Tormentor, you give out a Hex instead of gaining an Imp.</li><li>If you somehow play this without having any cards in play (even the Tormentor itself), you gain an Imp.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Fate'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>This turn, when you gain a card, you may put it onto your deck.<br>Receive a Boon.<hr>Heirloom: Pouch',
		help: '<ul class="faq"><li>In 2022, Tracker got errata that changed it from a “while this is in play” ability to a “this turn” ability.</li><li>If you gain multiple cards after playing Tracker, this applies to each of them – you could put any or all of them on top of your deck.</li><li>This applies both to cards gained due to being bought, and to cards gained other ways.</li><li>Tracker’s top-decking effect kicks in before its Boon-granting effect does, so if the Boon causes you to gain a card, for example a Silver from The Mountain’s Gift, you can put that card onto your deck.</li><li>In games using Tracker, replace one of your starting Coppers with a Pouch.</li></ul><p>Pouch</p><ul class="faq"><li>This simply gives you <img src="assets/Coin1.png" alt="1 coin"> and +1 Buy when you play it.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards<br>+1 Buy</b><br>If you have 8 or more cards in hand (after drawing), trash this and gain a Treasure.',
		help: '<ul class="faq"><li>First draw three cards; then, if you have eight or more cards in hand, you trash Tragic Hero and gain a Treasure.</li><li>If you cannot trash Tragic Hero (for example if you play it twice with Throne Room and trashed it the first time), you still gain the Treasure.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Night', 'Attack', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Each other player receives the next Hex. Gain a card costing up to <img src="assets/Coin5.png" alt="5 coins"> other than a Vampire. Exchange this for a Bat.',
		help: '<ul class="faq"><li>Follow the instructions in order.</li><li>If the Bat pile is empty, you will be unable to exchange Vampire for a Bat, but will do the rest.</li><li>The Bat is put into your discard pile.</li></ul><p>Bat</p><ul class="faq"><li>The Vampire is put into your discard pile.</li><li>If there are no Vampires in their pile, you cannot exchange Bat for one, but can still trash cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Night', 'Attack', 'Doom'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If it’s your Night phase, each other player receives the next Hex. Otherwise, <b>+3 Cards</b>.',
		help: '<ul class="faq"><li>Werewolf can be played in either your Action phase or Night phase.</li><li>If played in your Action phase, you draw three cards; if played at Night, each other player receives the next Hex.</li></ul><ul class="rules"><li>As always, a card with multiple types retains those types in all contexts. For instance, when you play Werewolf in the Action phase (so it doesn’t attack), it’s still an Attack card and activates other players’ Diplomats and so on. And when you play it in the Night phase, it’s still an Action card, so you can call Royal Carriage to repeat the Hexing, for example.</li><li>If you have abilities to resolve at the start of your turn, it is considered part of your Action phase, and you cannot end it. This means if you play Werewolf at the start of your turn (with e.g, Delay), you cannot skip to your Night phase and give out a Hex.</li><li>If you play it during any phase that isn’t your own Night phase (such as with Scepter, or March), including during another player’s Night Phase, you get +3 Cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+4 Villagers</b><br>Trash this.',
		help: '<ul class="faq"><li>If you do not manage to trash this (for example if you play it twice via Throne Room), you still get the +4 Villagers.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top 2 cards of your deck. Put one into your hand and discard the other. If both were Actions, take the Lantern or Horn.',
		help: '<ul class="faq"><li>When you play a Border Guard and do not have the Lantern, you reveal the top 2 cards of your deck, choose one and put it into your hand, and discard the other; then if they were both Action cards, you take the Lantern or the Horn.</li><li>If you reveal fewer than 2 cards, or fewer than 3 cards when you have the Lantern, you don’t take an Artifact.</li></ul><p>Lantern</p><ul class="faq"><li>When you play a Border Guard and have the Lantern, you reveal the top 3 cards of your deck, choose one and put it into your hand, and discard the rest; then if all three were Action cards, you may take the Horn.</li><li>The Lantern functions the turn you get it.</li></ul><ul class="rules"><li>Lantern will still affect Border Guards played from the Supply (with eg. Band of Misfits) or the trash (with Necromancer).</li><li>If you play Border Guard using Way of the Chameleon (for example, to avoid the effect of Enchantress), Lantern will have no effect, meaning you will only reveal 2 cards.</li></ul><p>Horn</p><ul class="faq"><li>The Horn functions the turn you get it.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Once this turn, when you gain a card, you may set it aside face up (on this). At the start of your next turn, put it into your hand.',
		help: '<ul class="faq"><li>The card you set aside doesn’t have to be the next card you gain; you could gain multiple cards and then gain one where you decided to set it aside.</li><li>If you don’t set a card aside at all, Cargo Ship is discarded that turn.</li></ul><ul class="rules"><li>If you haven’t set aside a card by Cargo Ship’s ability, Cargo Ship is set to be discarded this turn, which means you may use Improve to trash this during Clean-up and gain a different card. If you do, you may then still use Cargo Ship’s ability and set aside the newly gained card for next turn, even though Cargo Ship has already been trashed.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Coffers<br>+1 Buy</b><hr>When you gain this, you may trash a Copper from your hand.',
		help: '<ul class="faq"><li>When you play this, you get no <img src="assets/Coin.png" alt="coins">, but get +1 Coffers and +1 Buy.</li><li>When you gain this, you may trash a Copper from your hand; this is optional.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Action</b><br>Return this to the Supply.<hr>When you gain this, gain another Experiment (that doesn’t come with another).',
		help: '<ul class="faq"><li>When you play this, you get +2 Cards and +1 Action, and return it to its Supply pile.</li><li>When you gain it, you gain another one; this applies whether you gain it via buying it or some other way.</li><li>If you gain one to a place other than your discard pile, the 2nd copy goes to your discard pile.</li><li>For example if you use Sculptor to gain Experiment, you get one in your hand, and one in your discard pile.</li><li>If Experiment somehow is not in play (for example if played from the trash via Necromancer, from Nocturne), it fails to return to its pile.</li></ul><ul class="rules"><li>If you gain an Experiment from the trash, the second Experiment is still gained from the Supply.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>When you gain or trash this, take the Flag.',
		help: '<ul class="faq"><li>When you gain or trash a Flag Bearer, you take the Flag.</li><li>If Flag Bearer is trashed, the player trashing it takes the Flag, regardless of whose turn it is.</li></ul><p>Flag</p><ul class="faq"><li>The Flag causes you to draw an extra card when drawing your hand in Clean-up. This is true even if your hand would normally be some amount other than 5 cards - for example if you played Outpost (from Seaside), instead of drawing 3 cards for your Outpost turn, you would draw 4.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>Trash a card from your hand. If it’s a Victory card, gain a Curse.',
		help: '<ul class="faq"><li>Trashing is not optional.</li><li>Curses are not Victory cards.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>At the start of Clean-up, you may trash an Action card you would discard from play this turn, to gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it.',
		help: '<ul class="faq"><li>You can only trash an Action card that would be discarded this turn; you cannot trash a non-Action like Silver, or a Duration card that will stay out (but you can trash a Duration card that will be discarded).</li><li>You can trash the Improve itself.</li><li>The card you gain does not have to be an Action, it just has to cost exactly <img src="assets/Coin1.png" alt="1 coin"> more than the trashed Action.</li><li>Using this ability is optional, but if you trash a card then you have to gain one if you can.</li></ul><ul class="rules"><li>If you put cards into your hand using Improve (for example, if you trash a Fortress or gain a Den of Sin), they will get discarded during Clean-up (but you can still keep them in your hand with Coastal Haven).</li><li>If you gain a 2nd copy of Improve and play it with Innovation, you can immediately use the 2nd Improve’s ability to trash another Action from play.</li><li>You can trash a Cargo Ship from play if it hasn’t set aside a card yet. When you gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more, Cargo Ship can still set it aside for your next turn, even though it’s no longer in play.</li><li>You can trash a Garrison from play if it has no tokens on it. But when you gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more, the Garrison is no longer in play, so you can’t add a token to it, and it won’t draw any cards next turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">, then cards cost <img src="assets/Coin1.png" alt="1 coin"> less this turn.',
		help: '<ul class="faq"><li>First you gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">; then, after that happens, prices are lowered for the rest of the turn.</li><li>The cost lowering applies to all cards everywhere, including cards in the Supply, in hands, and in Decks.</li><li>It’s cumulative; for example if you play two Inventors, the cost reduction from the first applies to playing the second (for example it could gain a Duchy, which would then cost <img src="assets/Coin4.png" alt="4 coins">), and afterwards cards cost <img src="assets/Coin2.png" alt="2 coins"> less for the rest of the turn.</li></ul><ul class="rules"><li>If you gain an Inventor with Inventor and then play the gained Inventor with Innovation, the first Inventor’s cost reduction hasn’t kicked in yet, so the second Inventor can still only gain a card costing <img src="assets/Coin4.png" alt="4 coins">.</li><li>Inventor’s cost reduction isn’t contingent on the Inventor being in the play area. This has several consequences: if you play the same Inventor multiple times in one turn (e.g., with Throne Room), costs are reduced multiple times; if you trash an Inventor from the play area (e.g., with Procession), the cost reduction remains in force till the end of the turn; but if you play an Inventor under the influence of Enchantress or a Way, you don’t get the cost reduction.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When you gain this, <b>+2 Villagers</b>.',
		help: '<ul class="faq"><li>Playing this gives +2 Cards; gaining it gives +2 Villagers.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b><br>Look through your discard pile and put a card from it into your hand; if you can’t, <b>+1 Card</b>.',
		help: '<ul class="faq"><li>If your discard pile has any cards in it, you have to take one of them, you cannot choose to draw a card instead.</li><li>You get to look through your discard pile to pick the card to take.</li><li>It does not matter what order you leave your discard pile in.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>Each other player gains a Curse and may trash a Curse from their hand.',
		help: '<ul class="faq"><li>After the Curse pile is empty, playing this still lets each other player trash a Curse from their hand.</li><li>A player who is unaffected by Old Witch, such as due to Moat, neither gains a Curse nor may trash one.</li></ul><ul class="rules"><li>The Curse is gained before you may trash one. So you can gain a Curse, react with Sheepdog, draw a Curse, and then trash that Curse.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Villager<br>+<img src="assets/Coin2.png" alt="2 coins"></b><hr>When something causes you to reveal this (using the word “reveal”), <b>+1 Coffers</b>.',
		help: '<ul class="faq"><li>Anything that causes you to reveal a Patron, and specifically uses the word “reveal,” causes you to get +1 Coffers.</li><li>For example if you play a Border Guard and reveal two Patrons, you will get +2 Coffers.</li><li>Other players seeing a card, without the word “reveal” being used, is not enough; for example if another player plays a Villain and you discard a Patron, you do not get +1 Coffers.</li></ul><ul class="rules"><li>Once Patron is revealed, getting +1 Coffers is not optional.</li><li>If you play Black Market and Patron is one of the 3 cards revealed from the Black Market deck, you get +1 Coffers.</li><li>If you have Capitalism, you may discard Patron to Hostelry. If you do, you will reveal the Patron for +1 Coffers.</li><li>With the new rules to Coffers, Patron and Pursue would become an infinite combo. Because of this, Patron has received errata to only give Coffers during an Action phase.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Trash a card from your hand. For the rest of this turn, when you trash a card, +<img src="assets/Coin2.png" alt="2 coins">.',
		help: '<ul class="faq"><li>When you play this, you get +<img src="assets/Coin2.png" alt="2 coins">, trash a card from your hand (mandatory), and then for the rest of the turn, trashing a card from your hand will give you +<img src="assets/Coin2.png" alt="2 coins">.</li><li>This is cumulative, even if the same Priest is played multiple times (such as with Scepter).</li><li>For example if you play two Priests and trash two Coppers, you will get +<img src="assets/Coin6.png" alt="6 coins"> total: +<img src="assets/Coin2.png" alt="2 coins"> from each play of Priest, and +<img src="assets/Coin2.png" alt="2 coins"> that the first Priest gives you for the second Priest trashing a card.</li><li>The bonus works even if the card was not trashed from your hand; for example you will get +<img src="assets/Coin2.png" alt="2 coins"> for trashing an Acting Troupe due to playing it, or for trashing a card from the Supply with Lurker (from Intrigue).</li><li>With Sewers, the extra trashing from Sewers happens before the “For the rest of the turn” ability happens, so you don’t get +<img src="assets/Coin2.png" alt="2 coins"> for that trash.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>Trash a card from your hand. <b>+1 Villager</b> per <img src="assets/Coin1.png" alt="1 coin"> it costs.',
		help: '<ul class="faq"><li>First you draw 2 cards, then you trash a card from your hand.</li><li>Trashing is not optional.</li><li>For each <img src="assets/Coin1.png" alt="1 coin"> the trashed card costs, you get +1 Villager; for example if you trash a Silver, you get +3 Villagers.</li><li>You do not get anything for <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> amounts, just for <img src="assets/Coin.png" alt="coins">.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Trash a card from your hand. Per <img src="assets/Coin1.png" alt="1 coin"> it costs, set aside a card from your deck face down (on this). At the start of your next turn, put those cards into your hand.',
		help: '<ul class="faq"><li>For each <img src="assets/Coin1.png" alt="1 coin"> the trashed card costs, you set aside the top card of your deck for next turn; for example if you trash a Silver, you set aside the top 3 cards for next turn.</li><li>If there are not enough cards, just set aside as many as you can.</li><li>The cards are set aside face down; you can look at them and other players cannot.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you play this, choose one: +<img src="assets/Coin2.png" alt="2 coins">; or replay an Action card you played this turn that’s still in play.',
		help: '<ul class="faq"><li>This cannot replay a Duration card you played on a previous turn, but can replay one played the same turn (in which case Scepter will stay in play until the Duration card leaves play).</li><li>This can cause you to get +Actions in your Buy phase, but that does not let you play Action cards in your Buy phase (though Scepter itself replays one).</li><li>If this causes you to draw cards and some of them are Treasures, you can still play those Treasures.</li></ul><ul class="rules"><li>Scepter can replay an Action that isn’t finished resolving, such as a Storyteller that played Scepter in the first place.</li><li>If a card you play leaves and then later returns to your play area (for example, if you play a Duplicate and then call it on the same turn), you can’t replay it with Scepter.</li><li>If a Duration card has been played for both a non-Duration ability (such as Barge, or a Way) and a next-turn effect, the Scepter will stay in play, since the action card is staying in play.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Discard your hand<br><b>+7 Cards</b>',
		help: '<ul class="faq"><li>If drawing causes you to shuffle, you will shuffle in the discarded cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card to your hand costing up to <img src="assets/Coin4.png" alt="4 coins">. If it’s a Treasure, <b>+1 Villager</b>.',
		help: '<ul class="faq"><li>The card is gained to your hand; that is not optional.</li><li>If you gain a Nomad Camp (from Hinterlands) with this, it goes to your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>Reveal the top 3 cards of your deck. Put the ones costing from <img src="assets/Coin2.png" alt="2 coins"> to <img src="assets/Coin4.png" alt="4 coins"> into your hand. Put the rest back in any order.',
		help: '<ul class="faq"><li>Cards with <img src="assets/Potion.png" alt="potion"> (from Alchemy) or <img src="assets/Debt.png" alt="debt"> (from Empires) in their cost do not cost from <img src="assets/Coin2.png" alt="2 coins"> to <img src="assets/Coin4.png" alt="4 coins">.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards<br>+1 Buy</b><br>When you gain or trash this, <b>+1 Coffers</b> and <b>+1 Villager</b>.',
		help: '<ul class="faq"><li>When you play this, you get +2 Cards and +1 Buy; when you trash it or gain it, you get +1 Coffers and +1 Villager.</li><li>If Silk Merchant is trashed, the player trashing it takes the +1 Coffers and +1 Villager, regardless of whose turn it is.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b><img src="assets/Coin2.png" alt="2 coins"><br>+1 Buy</b><hr>When you gain this, <b>+2 Coffers</b>.',
		help: '<ul class="faq"><li>This is a Treasure that makes <img src="assets/Coin2.png" alt="2 coins"> and +1 Buy when played; when gaining it, you get +2 Coffers.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>If your discard pile has any cards in it: <b>+1 Coffers</b>, then if you have at least 4 Coffers tokens, take the Treasure Chest.',
		help: '<ul class="faq"><li>First you draw 3 cards, then you check to see if your discard pile has any cards in it; if drawing those cards caused you to shuffle, your discard pile would be empty.</li><li>If your discard pile has at least one card, you get +1 Coffers, and if you then have 4 or more tokens on your Coffers, you take the Treasure Chest.</li><li>You cannot get the Treasure Chest unless your discard pile had at least one card.</li></ul><ul class="rules"><li>Normally, if drawing the 3 cards would cause you to shuffle, you won’t get a Coffers from this. But if you leave cards in your discard pile when shuffling (with Order of Masons), you’ll get a Coffers from this.</li><li>You may spend Coffers at any time during your turn, including when getting +3 Cards from Swashbuckler. This may be useful if you want +1 Coffers, but you don’t want the Treasure Chest.</li></ul><p>Treasure Chest</p><ul class="faq"><li>Treasure Chest simply causes you to gain a Gold at the start of your Buy phase each turn, including the turn you take it; this is not optional.</li></ul><ul class="rules"><li>If you take the Treasure Chest at the start of your Buy phase (e.g. by playing a Swashbuckler with Market Towns), you’ll immediately gain the Gold.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br>Choose one: Trash a Treasure from your hand; or gain a Treasure from the trash to your hand; or take the Key.',
		help: '<ul class="faq"><li>When you use a Treasurer to gain a Treasure from the trash, that can trigger abilities like the ones on Ducat and Spices.</li><li>You can choose to take the Key even if you already have it.</li></ul><ul class="rules"><li>If you play this with Elder, you can trash a Treasure and immediately regain it.</li><li>If you play Treasurer at the start of your turn (with e.g. Piazza) and take the Key, you immediately get +<img src="assets/Coin1.png" alt="1 coin"> from it.</li></ul><p>Key</p><ul class="faq"><li>The Key does not help you the turn you take it; it gives +<img src="assets/Coin1.png" alt="1 coin"> at the start of your turn, which has already happened.</li></ul><ul class="rules"><li>An exception is if you play Treasurer at the start of your turn (via Prince or similar), and take the Key, you do get the +<img src="assets/Coin1.png" alt="1 coin"> , since it’s still the start of your turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Coffers</b><br>Each other player with 5 or more cards in hand discards one costing <img src="assets/Coin2.png" alt="2 coins"> or more (or reveals they can’t).',
		help: '<ul class="faq"><li>For example a player could discard an Estate which costs <img src="assets/Coin2.png" alt="2 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin4.png" alt="4 coins"></b><br><b>+1 Buy</b> per empty supply pile.<hr>Instead of paying this card’s cost, you may trash an Action card from your hand.',
		help: '<ul class="faq"><li>This only checks how many piles are empty when you play it; how many +Buys you got does not change if a pile becomes empty later in the turn (or non-empty, such as due to Ambassador from Seaside).</li><li>This only counts Supply piles, not non-Supply piles like Horse.</li><li>When buying this card, you can trash an Action card from your hand instead of paying <img src="assets/Coin7.png" alt="7 coins">. You can only do this if you have an Action card in hand to trash. You can do this even if you do not have <img src="assets/Coin7.png" alt="7 coins">. When buying Animal Fair this way, you spend no <img src="assets/Coin.png" alt="coins">, but still use up a Buy.</li><li>Animal Fair still has a cost of <img src="assets/Coin7.png" alt="7 coins">, regardless of how you pay for it.</li></ul><ul class="rules"><li>If you pay for this by trashing an Action card, any “when trash” abilities are resolved before any “when buy” abilities, which are then followed by any “when gain” abilities. So if you pay for this by trashing a Rats, the card you draw will again be topdecked by Haunted Woods.</li><li>If you play a Haggler and then pay for an Animal Fair by trashing an Action card, you still gain a non-Victory card costing less than <img src="assets/Coin7.png" alt="7 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Either now or at the start of your next turn, <b>+3 Cards</b> and <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>When playing Barge, choose whether to take +3 Cards and +1 Buy immediately, or at the start of your next turn.</li><li>If you choose “immediately,” Barge will be discarded in the same turn’s Clean-up; if you choose “next turn,” Barge will be discarded that turn.</li><li>If you play a Barge multiple times, such as with Mastermind, you choose each time whether to take +3 Cards and +1 Buy immediately or next turn, and the Barge only stays in play until next turn if at least one of the plays was for next turn (in which case the Mastermind also stays in play).</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br>If it isn’t your turn, each other player gains a Curse.<hr>When another player gains a Victory card, you may play this from your hand.',
		help: '<ul class="faq"><li>When you play this on your turn, you draw 2 cards.</li><li>When you play it on another player’s turn – usually only possible via its reaction – you draw 2 cards, and then everyone else gains a Curse, in turn order starting with the player whose turn it is.</li><li>When anyone else gains a Victory card – whether or not it is your turn – you may play this from your hand.</li></ul><ul class="rules"><li>If another player gains a Victory card during your turn (for example, if you give them an Estate with Ambassador), you can react with your Black Cat, but you will not give out any Curses.</li><li>If you get attacked during your turn, you can still use Reactions like Horse Traders and Caravan Guard.</li><li>If another player gains a Province, but you first gain a Curse from another player’s Black Cat, then you may play Sheepdogs in response to the Curse, but you can’t react with any of your Black Cats in the middle of the Curse gain. This is because all on-gain effects from the Province are “paused” to resolve on-gain effects from the Curse, and they unpause once the other player’s Black Cat has finished resolving.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Exile a card from your hand. If you didn’t have a copy of it in Exile, +<img src="assets/Coin3.png" alt="3 coins">.',
		help: '<ul class="faq"><li>First you get +1 Action and Exile a card from your hand; this is not optional.</li><li>Then if that is the only copy of that card that you have in Exile, you get +<img src="assets/Coin3.png" alt="3 coins">.</li><li>If you can’t Exile a card, you don’t get +<img src="assets/Coin3.png" alt="3 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Exile a non-Victory card from the Supply.<hr>When you gain this, Exile a Gold from the Supply.',
		help: '<ul class="faq"><li>When you play this, you Exile a non-Victory card from the Supply; when you gain this, you Exile a Gold from the Supply.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player reveals the top 2 cards of their deck, Exiles one costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, and discards the rest.',
		help: '<ul class="faq"><li>If an attacked player reveals two cards each costing from <img src="assets/Coin3.png" alt="3 coins"> to <img src="assets/Coin6.png" alt="6 coins">, that player chooses which card they Exile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Horses.<hr>When you gain this, +2 Cards, +1 Buy, and if it’s your Buy phase return to your Action phase.',
		help: '<ul class="faq"><li>When you gain Cavalry in your Buy phase, you get +2 Cards, +1 Buy, and return to your Action phase.</li><li>When you gain Cavalry in a different phase or during another player’s turn, you get +2 Cards and +1 Buy. (+1 Buy is not useful if it is not your turn.)</li><li>This ability of Cavalry is not playing the Cavalry, and does not put Cavalry into play.</li><li>Returning to your Action phase does not cause “start of turn” abilities to repeat; however when your Buy phase happens again after that, “start of your Buy phase” abilities can repeat.</li><li>Returning to your Action phase does not give you any +Actions; you have left however many you already had left.</li></ul><ul class="rules"><li>If you gain this onto your deck (with e.g. Demand), you will draw the Cavalry itself.</li><li>If other on-gain effects are trying to move a gained Cavalry (e.g. Changeling, or Innovation), you may perform the other on-gain effects before or after Cavalry’s effect.</li><li>However, if you gain this to your discard pile and then reshuffle while drawing the +2 Cards, the Cavalry can no longer be moved by other on-gain effects. The same is true if you gain it to your deck and then draw it.</li><li>Gaining a Cavalry during your Buy phase counts as ending it (for cards like Wine Merchant and Pageant). If you take multiple Buy phases, those cards will trigger multiple times.</li><li>You draw the 2 cards from a gained Cavalry before you return to your Action phase. This means that if you are topdecking any Treasuries, the Cavalry won’t draw them.</li><li>Cavalry only returns you to your Action phase if gained in your Buy phase. If you gain it at Night (with e.g. Devil’s Workshop) or Clean-up (with e.g. Improve), you’ll still draw 2 cards, although this usually won’t be useful.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br><b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player Exiles a Curse from the Supply. If they can’t, they discard their Exiled Curses.',
		help: '<ul class="faq"><li>Curses are Exiled in turn order; it may be that one player Exiles a Curse while another discards the Curses from their mat.</li></ul><ul class="rules"><li>Exiling a Curse from the supply or discarding a Curse from Exile does not count as “gaining” a Curse; this means that, unlike other cursers, Coven’s attack can’t be avoided with Watchtower or Trader.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br><b>+1 Action</b><hr>During your turns, this costs <img src="assets/Coin1.png" alt="1 coin"> less per card you’ve gained this turn.',
		help: '<ul class="faq"><li>Destrier costs <img src="assets/Coin1.png" alt="1 coin"> less per card the player whose turn it is has gained that turn.</li><li>For example, you could play a Sleigh to gain two Horses, then use Workshop to gain a Destrier, as it would cost <img src="assets/Coin4.png" alt="4 coins">.</li><li>Destrier only cares about cards gained by the player whose turn it is; for example, playing Witch to give other players Curses will not lower its cost.</li></ul><ul class="rules"><li>Destrier’s cost changes immediately as soon as you gain a card; this can have some tricky interactions with effects that cause you to gain multiple cards, and it can be important to keep track of the order in which cards are gained and what Destrier costs at each point in time. For example, if you overpay for a Stonemason, you gain two cards with the same cost; this means that if the first card you gain is a Destrier, the second one can’t be a Destrier as well (because it no longer has that cost).</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Exile a card from your hand. Gain a differently named card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than it.',
		help: '<ul class="faq"><li>The card you gain does not have to cost more than the card you Exiled.</li><li>For example, you could Exile a Province and gain a Gold.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card to your hand costing less than this.<hr>When any player gains a card with 2 or more types (Action, Attack, etc.), you may play this from your hand.',
		help: '<ul class="faq"><li>This can only gain cards from the Supply.</li><li>You can react with this to any gained card with 2 or more types; it can be a card that was bought, or a card gained some other way, such as via a Falconer.</li><li>You can do this regardless of who gained the card - you or anyone else - and regardless of whose turn it is.</li><li>The types are the words on the bottom line – including Action, Attack, Curse, Duration, Reaction, Treasure, and Victory (with more in other expansions).</li><li>If you gain a Falconer to your hand - such as via Artisan - you can react to that gain and play it, since it has two types.</li></ul><ul class="rules"><li>If another player gains a card with 2 or more types during your turn (e.g. you give them a Survivors with Cultist), multiple players get to react with Falconer. Since it is your turn, you get to react first.</li><li>Capitalism and Inheritance can change the number of types a card has, and Falconer takes that into account when counting types. These changes are in effect on the turns of players who have bought Capitalism and Inheritance. This means that, for example, if you have Inheritance and your opponent doesn’t, and you gain an Estate on your opponent’s turn for some reason, Falconer isn’t triggered.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+1 Action</b><br><b>+<img src="assets/Coin1.png" alt="1 coin"></b><hr>During your turns, if your discard pile is empty, this costs <img src="assets/Coin3.png" alt="3 coins"> less.',
		help: '<ul class="faq"><li>This costs <img src="assets/Coin5.png" alt="5 coins"> normally, but <img src="assets/Coin2.png" alt="2 coins"> whenever the player whose turn it is has an empty discard pile.</li><li>If you have <img src="assets/Coin4.png" alt="4 coins"> and two Buys with an empty discard pile, you can buy Fisherman for <img src="assets/Coin2.png" alt="2 coins">, but then you will no longer have an empty discard pile, so you cannot buy a second for <img src="assets/Coin2.png" alt="2 coins">.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Attack', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, <b>+<img src="assets/Coin3.png" alt="3 coins"></b>. Until then, when another player gains an Action or Treasure card they don’t have an Exiled copy of, they Exile it.',
		help: '<ul class="faq"><li>While under this attack, whenever you gain an Action or Treasure that you do not have a copy of on your Exile mat, you Exile the gained card.</li><li>Gaining a card that you do have a copy of on your Exile mat is unaffected, and lets you discard copies from your Exile mat if you want to as usual.</li><li>Other abilities that happen when you gain a card happen at the same time, and you can only put the card on your mat if it has not moved anywhere since gaining it; so you can, for example, use a Sleigh to put a gained card into your hand, then fail to put it on your Exile mat.</li><li>Gatekeeper only Exiles Actions and Treasures, it does not Exile, for example, Province.</li><li>It only cares about cards in Exile, it does not care how they got there.</li></ul><ul class="rules"><li>While most cards that move gained cards can “beat” Gatekeeper (like Sleigh), there are also cards that move gained cards after they have been gained (such as Replace and Summon). In these cases, Gatekeeper will be able to exile the card before you can move the card elsewhere.</li><li>If a card is gained directly to somewhere (such as how Supplies gains a Horse onto your deck), Gatekeeper can still exile it.</li><li>This does not lose track of a card if it never moves. So if you gain a Nomad Camp onto your deck, then revealing Watchtower to topdeck the Nomad Camp will not block Gatekeeper.</li><li>This can exile cards if another player gains a card during the turn you play it. For example, if you Bargain and give them a Horse, their Horse will get exiled.</li><li>The exiling effect ends instantaneously when your next turn starts; you can’t choose to execute other start-of-turn abilities while your Gatekeeper’s exiling ability is still in effect.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>You may trash a card from your hand.<br><b>+1 Card</b> per card the player to your right trashed on their last turn.',
		help: '<ul class="faq"><li>You draw cards even if you did not trash a card.</li></ul><ul class="rules"><li>You get +1 Card for every time the player to your right trashed a card during their last turn, even when they trash a card they already trashed that turn. For example, if they trashed the same Fortress twice, your Goatherds will give you +2 Cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">. If it’s an…<br>Action card, gain a Horse;<br>Treasure card, gain a Silver;<br>Victory card, <b>+1 Card</b> and <b>+1 Action</b>.',
		help: '<ul class="faq"><li>First gain a card, then apply the bonuses in the order listed.</li><li>A card can give you multiple bonuses; for example, if you gain a Mill (from Intrigue), you gain a Horse and then get +1 Card and +1 Action.</li></ul><ul class="rules"><li>You get the bonuses from this after gaining a card. So if you gain a Cemetery, you cannot draw a card before trashing.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+2 Actions</b><hr>When you gain this, you may discard any number of Treasures, revealed, to gain that many Horses.',
		help: '<ul class="faq"><li>When you gain this, you may discard any number of Treasure cards from your hand, to gain that many Horses from their pile.</li><li>Reveal the discarded Treasure cards.</li><li>You do not have to discard anything, and cannot discard anything but Treasures.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+2 Actions</b><br>You may discard your hand for <b>+5 Cards</b>.',
		help: '<ul class="faq"><li>When you play this, first draw a card and get +2 Actions; then decide if you want to discard your hand (which will include the card you just drew).</li><li>If you do discard your hand, draw 5 cards (which may cause you to shuffle in the discarded cards).</li></ul><ul class="rules"><li>If you somehow have no cards in hand after getting the +1 Card from this, you may still discard your hand for +5 Cards.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>The next time you play a card this turn, you may first gain a copy of it.',
		help: '<ul class="faq"><li>Kiln can gain any type of card, as long as the card is played directly after Kiln.</li><li>It can only gain cards from the Supply.</li><li>You (optionally) gain a copy of whatever card you are playing before following the instructions on the card.</li><li>If the card is an Attack and other players want to use cards like Moat, you gain the card before they choose to use Moat or not.</li><li>If Throne Room a Kiln, you will play Kiln, then play Kiln again, first gaining a Kiln (optionally), and then can still gain a copy of the next card you play after that.</li><li>If the next card you play is an Action and you use a Way for it, that has no special interaction with Kiln; you still may optionally gain a copy of that card.</li></ul><ul class="rules"><li>If you play a Stockpile after a Kiln, you gain a Stockpile first, may discard Stockpiles from Exile, and then you Exile your played Stockpile.</li><li>If you have a +1 Card token on the card you played, you can get +1 Card before or after gaining a copy.</li><li>If you Throne Room a Kiln and gain a Kiln, you can react with Sheepdog, but since you haven’t resolved Kiln a second time yet, you won’t gain a copy of Sheepdog.</li><li>If you play Kiln, play Conspirator, gain a 2nd Conspirator and play it with Innovation, both Conspirators will give +1 Card and +1 Action.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br>This turn, when you gain a card costing <img src="assets/Coin4.png" alt="4 coins"> or more, gain a Horse.',
		help: '<ul class="faq"><li>This is cumulative; for example, if you use Mastermind to play a Livery three times, then each card you gain that turn costing <img src="assets/Coin4.png" alt="4 coins"> or more will come with three Horses.</li><li>Livery works on cards gained via buying them, and cards gained other ways.</li></ul><ul class="rules"><li>This checks the cost of the card as it’s being gained, not after. So if you gain a Fisherman with an empty discard pile, you will not gain a Horse, because Fisherman cost <img src="assets/Coin2.png" alt="2 coins"> when you gained it.</li><li>If you gain a Livery and play it with Innovation, you will gain a Horse.</li><li>If you gain a copy of Livery with either Disciple or Specialist, you will gain a Horse. But if you gain a copy of Livery with Kiln, you won’t gain a Horse, because you haven’t followed Livery’s instructions yet.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, you may play an Action card from your hand three times.',
		help: '<ul class="faq"><li>Playing an Action card via this is optional. If you do play one, you resolve the card completely, then play it a second time, then play it a third time, without playing other cards in-between (unless told to by a card).</li><li>Playing these Action cards does not use up Action plays. For example, if you Mastermind a Bounty Hunter, you will get +3 Actions total, and be able to play 4 Action cards after that - your normal one, plus 3 more for the +3 Actions.</li><li>If a Mastermind plays a Duration card, the Mastermind stays in play as long as the Duration card does.</li><li>If a Mastermind plays another Mastermind, both will stay in play, and the turn after that you can play three different Action cards from your hand three times each.</li><li>If you Mastermind a Horse, you will get +2 Cards and +1 Action, return the Horse to its pile, get +2 Cards and +1 Action, fail to return the Horse since you already did, and get +2 Cards and +1 Action a third time and fail to return the Horse again.</li></ul><ul class="rules"><li>Mastermind only stays in play for longer than normal if it plays a Duration card (such as a 2nd Mastermind). If it plays a Throne Room that plays a Duration, or a Band of Misfits that plays a Duration, the Mastermind doesn’t stay in play.</li><li>If Mastermind plays a Duration (such as a 2nd Mastermind), but you remove it from play (with e.g. Way of the Horse), the Mastermind doesn’t stay in play (and you’ll have to remember the Duration’s effects on your next turn).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Gain 2 Horses.<br><b>+1 Action</b> per empty Supply pile.',
		help: '<ul class="faq"><li>This only checks how many piles are empty when you play it; how many +Actions you got does not change if a pile becomes empty later in the turn (or non-empty, such as due to Ambassador from Seaside).</li><li>This only counts Supply piles, not non-Supply piles like Horse.</li></ul><ul class="rules"><li>If gaining the Horses empties a Supply pile (e.g. you exchange them for a Changeling, which then empties the Changeling pile), you will get +1 Action for that pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+1 Action</b><br><b>+1 Buy</b><br>You may Exile a card from your hand.',
		help: '<ul class="faq"><li>Exiling a card is optional.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Choose a different thing per <img src="assets/Coin1.png" alt="1 coin"> it costs: <b>+1 Card</b>; <b>+1 Action</b>; <b>+1 Buy</b>; <b>+<img src="assets/Coin1.png" alt="1 coin"></b>; gain a Silver; gain a Horse.',
		help: '<ul class="faq"><li>First trash a card, then choose a different bonus per <img src="assets/Coin1.png" alt="1 coin"> the card cost, then do them in the order listed.</li><li>So you might trash an Estate, choose +1 Card and “gain a Horse,”.</li></ul><ul class="rules"><li>If you choose +1 Card as well as “gain a Silver” and/or “gain a Horse”, and the card you draw is a Reaction that reacts to a card being gained, such as Sheepdog, you can use the Reaction ability to react to the gain.</li><li>If the card you trash costs <img src="assets/Coin6.png" alt="6 coins"> or more, you just get all 6 bonuses.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><hr>When you gain a card, you may play this from your hand.',
		help: '<ul class="faq"><li>You can use this when gaining a card due to buying it, when gaining a card some other way such as due to Falconer, and even when gaining a card on another player’s turn, such as due to Black Cat or getting Cursed.</li><li>Remember that when you buy a card, you can no longer play Treasures in that Buy phase.</li><li>If you gain a Sheepdog to your hand - such as via Falconer - you can react to that gain and play the Sheepdog.</li></ul><ul class="rules"><li>If you gain a card with a “when you gain” clause, you can choose to resolve that before or after reacting with Sheepdog, for example, if you gain Hostelry, you can choose to discard Treasures for Horses before or after reacting with Sheepdog.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Horses<hr>When you gain a card, you may discard this, to put that card into your hand or onto your deck.',
		help: '<ul class="faq"><li>You can move the gained card from your discard pile even though you discarded Sleigh on top of it.</li><li>If a gained card goes directly to somewhere other than your discard pile (for example, the Silver gained from Bureaucrat), Sleigh can still move it to your hand or the top of your deck.</li><li>If something else has moved the card since it was gained, Sleigh cannot move it.</li></ul><ul class="rules"><li>If you gain a Sleigh to your hand (with e.g. Falconer), you can use the Sleigh’s reaction to discard itself, but the stop-moving rule prevents you from then putting it back into your hand or onto your deck.</li><li>If you gain a Cemetery, you can react with a Sleigh to put it in your hand, and then trash the Cemetery.</li><li>If you gain Sleigh A, you may discard Sleigh B to put Sleigh A into your hand. You can now use Sleigh A’s reaction, but since it lost track of itself, it can’t return itself to your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br><b>+4 Actions</b><br><b>+1 Buy</b><br>Ignore any further <b>+Actions</b> you get this turn.',
		help: '<ul class="faq"><li>Any extra Actions you already had before playing this do not go away; for example, if you play Village and then Snowy Village, you can play 5 more Actions after that.</li><li>Any further +Actions you would get that turn, you do not, including from playing another Snowy Village or converting Villagers (from Renaissance).</li><li>This does not stop you from playing more cards via cards that tell you to play cards, such as Throne Room.</li></ul><ul class="rules"><li>You can convert Villagers between drawing the card and reaching the sentence that prevents further +Actions.</li><li>If you played a Champion, you’ll get +1 Action from it when you play Snowy Village, and then you won’t get any +Actions from Champion for the rest of the turn.</li><li>If you play this with Conclave, Snowy Village will prevent you from getting +1 Action from Conclave.</li></ul>',
		flags: { village: true, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br><b>+1 Buy</b><br>When you play this, Exile it.',
		help: '<ul class="faq"><li>This is a Treasure worth <img src="assets/Coin3.png" alt="3 coins">, like Gold; you play it in your Buy phase.</li><li>When you play this, you also get +1 Buy, and put this on your Exile mat.</li><li>If you play this twice with a card like Crown (from Empires), you will get +<img src="assets/Coin6.png" alt="6 coins"> and +2 Buys total, even though you could only Exile it once.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>When you play this, gain a Horse onto your deck.',
		help: '<ul class="faq"><li>This is a Treasure worth <img src="assets/Coin1.png" alt="1 coin">, like Copper; you play it in your Buy phase.</li><li>When you play this, gain a Horse, putting it directly onto your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Reaction', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Either now or at the start of your next turn, <b>+1 Card</b> and <b>+2 Actions</b>.<hr>When you discard this other than during Clean-up, you may reveal it to play it.',
		help: '<ul class="faq"><li>When playing Village Green, choose whether to take +1 Card and +2 Actions immediately, or at the start of your next turn.</li><li>If you choose “immediately,” Village Green will be discarded in the same turn’s Clean-up; if you choose “next turn,” Village Green will be discarded that turn.</li><li>If you play a Village Green multiple times, such as with Mastermind, you choose each time whether to take +1 Card and +2 Actions immediately or next turn, and the Village Green only stays in play until next turn if at least one of the plays was for next turn (in which case the Mastermind also stays in play).</li><li>Village Green also lets you play it when you discard it, other than in Clean-up.</li><li>You can only discard Village Green if something causes you to or lets you, and discarding it only lets you play it once (each time you discard it). This works whether it is your turn or another player’s, and whether you discard it from your hand, or deck (such as with Cardinal), or from being set aside, or from Exile. This ability does not function if Village Green is put into your discard pile without being discarded, such as when bought, or due to Scavenger (from Dark Ages). The key thing to look for is a card telling you to “discard” cards.</li><li>If you play Village Green when it is not your turn, and choose to take the +1 Card and +2 Actions immediately, the +2 Actions will not be useful.</li></ul><ul class="rules"><li>If you play Vassal and discard Village Green, you can react with Village Green to play it. Doing this causes Vassal to lose track, and it will fail to play Village Green.</li><li>When discarding multiple Village Greens, if playing one of them triggers a reshuffle, then you can’t reveal (and thus play) any of the other Village Greens, because they get lost into your deck (due to the Stop-Moving rule), and Reactions are revealed one at a time.</li><li>If you need to discard down to a certain number of cards (due to Militia), and you want to discard Village Greens, you discard them all at once before you resolve their reactions.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>You may gain a Silver.<hr>This has the same cost as the last other card gained this turn, if any.',
		help: '<ul class="faq"><li>Normally Wayfarer costs <img src="assets/Coin6.png" alt="6 coins">.</li><li>When anyone gains a card other than a Wayfarer, Wayfarer’s cost changes to that card’s cost for the rest of the turn (or until another card is gained). For example, if you play a Wayfarer and choose to gain a Silver, Wayfarer then costs <img src="assets/Coin3.png" alt="3 coins">, the same as Silver; if you play Witch, each other player gains a Curse, and then Wayfarer costs <img src="assets/Coin0.png" alt="0 coins">, the same as Curse.</li><li>Cards that lower costs, like Bridge from Intrigue, only apply to the other card, not to Wayfarer too (though they apply to Wayfarer if no other cards have been gained yet). For example, if you play Bridge, Wayfarer costs <img src="assets/Coin5.png" alt="5 coins">; if you then buy a Silver, at that point Wayfarer costs <img src="assets/Coin2.png" alt="2 coins">, the same as Silver.</li><li>Wayfarer can have a cost with <img src="assets/Potion.png" alt="potion"> (from Alchemy) or <img src="assets/Debt.png" alt="debt"> (from Empires) in it.</li><li>Buying Animal Fair via trashing an Action card changes the cost of Wayfarer to <img src="assets/Coin7.png" alt="7 coins">, Animal Fair’s cost, not to trashing an Action card.</li></ul><ul class="rules"><li>All Wayfarers change their costs to the last gained card, including ones in other players’ hands.</li><li>If the cost of the last card gained changes after it was gained, the cost of Wayfarer changes too. For example, if you gain a Destrier when it costs <img src="assets/Coin6.png" alt="6 coins">, and then its cost reduces to <img src="assets/Coin5.png" alt="5 coins">, that means Wayfarer also costs <img src="assets/Coin5.png" alt="5 coins">.</li><li>The cost of Wayfarer can change while resolving other cards. For example, if you play Stonemason and trash a Wayfarer which costs <img src="assets/Coin6.png" alt="6 coins">, you then gain a cheaper card such as Duchy which costs <img src="assets/Coin5.png" alt="5 coins">; then you gain a second card costing less than Wayfarer which now costs <img src="assets/Coin5.png" alt="5 coins">.</li><li>Once a card is gained, Wayfarer’s cost-changing effect overrides other cost-changing effects. For example, if you have a –<img src="assets/Coin2.png" alt="2 coins"> cost token on this, and no cards have been gained yet, Wayfarer costs <img src="assets/Coin4.png" alt="4 coins">. But if you gain a Silver, Wayfarer now costs <img src="assets/Coin3.png" alt="3 coins"> (and not <img src="assets/Coin1.png" alt="1 coin">).</li><li>If someone acquires a card through means other than gaining it, such as by exiling it directly from the supply or exchanging another card for it, that has no effect on Wayfarer’s cost.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1501,
		name: 'Bauble',
		set: 'Allies',
		edition: [1],
		cardType: ['Treasure', 'Liaison'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Choose two different options:<br><b>+1 Buy</b>; <b>+<img src="assets/Coin1.png" alt="1 coin"></b>; <b>+1 Favor</b>;<br>this turn, when you gain a card, you may put it onto your deck.',
		help: '<ul class="faq"><li>Choose two of the four options; the first three options are simple +1’s, and the last is everything else. So for example you could choose to take +1 Buy and “this turn, when you gain a card, you may put it onto your deck.”</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1502,
		name: 'Sycophant',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Liaison'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Discard 3 cards. If you discarded at least one, +<img src="assets/Coin3.png" alt="3 coins">.<hr>When you gain or trash this, <b>+2 Favors</b>.',
		help: '<ul class="faq"><li>You can play this regardless of how many cards are left in your hand.</li><li>When you play this, if you have at least three cards left in hand, you discard three and get +<img src="assets/Coin3.png" alt="3 coins">. If you have one or two cards, you discard them and get +<img src="assets/Coin3.png" alt="3 coins">. If you have no cards, you don’t get the +<img src="assets/Coin3.png" alt="3 coins">.</li><li>When you gain or trash this, you get +2 Favors; you can immediately spend them, for example on the ability of City-state.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1503,
		name: 'Townsfolk',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Townsfolk'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'This pile starts the game with 4 copies each of Town Crier, Blacksmith, Miller, and Elder, in that order. Only the top card can be gained or bought.',
		help: '<ul class="faq"><li>Dominion: Allies has six split piles, that have four different cards in each of them.</li><li>The cards start the game in order by cost. For example, the Townsfolk pile starts out with 4 Town Criers on top, then 4 Millers, then 4 Blacksmiths, then 4 Elders. This order may get messed up by cards like Swap; that’s fine.</li><li>As with the split piles in Dominion: Empires, only the top card of a split pile can be bought or gained.</li><li>You can look through the cards in a split pile at any time, without changing the order.</li><li>The top card of each split pile has an ability that can “rotate” the pile. Rotating a pile means taking the top card, and all copies of it directly under it, and putting them on the bottom. For example, if three Town Criers were at the top of the Townsfolk, followed by Millers, you would put those three Town Criers on the bottom, and Millers would now be on top.</li><li>Some cards refer to information about a pile as if it’s just one card. In these cases, go with what’s on the Randomizer card, which usually matches the top card.</li><li>Some things refer to cards from a particular pile; these things work on all cards from a split pile. For example Training (from Dominion: Adventures) lets a player put a token on an Action pile, which causes them to get +<img src="assets/Coin1.png" alt="1 coin"> when playing a card from that pile. The token can be put on the Townsfolk pile, and then Miller will also make +<img src="assets/Coin1.png" alt="1 coin"> when played.</li></ul><p>Town Crier</p><ul class="faq"><li>First choose either to get +<img src="assets/Coin2.png" alt="2 coins">:, or to gain a Silver, or to get +1 Card and +1 Action. Then, no matter what you picked, choose whether or not to rotate the Townsfolk pile.</li></ul><p>Blacksmith</p><ul class="faq"><li>You either draw until you have 6 cards in hand, or draw 2 cards, or draw one card and get +1 Action.</li></ul><p>Miller</p><ul class="faq"><li>If you have fewer than four cards (after shuffling), you just look at what’s left.</li></ul><p>Elder</p><ul class="faq"><li>You can play an Action card with no “choose” ability; it will simply do what it normally does.</li><li>If you play one with a “choose” ability, you may take an extra choice, but don’t have to; for example, when playing Count (from Dark Ages), you could choose to only get one thing from the first “choose” ability, but two from the second.</li><li>If you choose multiple things, you do those things in the order listed on the card; for example, if you use Elder on Blacksmith and choose “draw until you have 6 cards in hand” and “+1 Card and +1 Action,” you first draw up to 6, then get +1 Card and +1 Action.</li><li>If you use Elder on Courtier (from Intrigue), you get one extra choice, not one extra choice per type.</li><li>Elder doesn’t affect all choices, just ones that say “choose” and have a list of options; for example Workshop gives you a choice of what card to gain, but Elder playing Workshop doesn’t do anything extra.</li></ul><ul class="rules"><li>Some cards may appear like they’re giving you a choice (e.g. Weaver, Barge, and Jester), but because they don’t say “choose one,” they aren’t affected by Elder.</li><li>If you use Elder on Scrap and trash a card costing <img src="assets/Coin0.png" alt="0 coins">, you get one choice. But if you use Elder on Scrap and trash nothing (because you have no cards in hand), you get no choices.</li><li>Catacombs is not useful when played with Elder. If you choose both options, you put the 3 cards into your hand, discard them (from your hand), and draw 3 different cards.</li><li>If you use Elder on Amulet, you get an additional choice this turn, but you won’t get an additional choice on the following turn. Elder won’t stay in play.</li><li>If you use Elder on Stronghold, you can get both +<img src="assets/Coin3.png" alt="3 coins"> now and +3 Cards next turn. Elder won’t stay in play.</li><li>Way of the Chameleon overrules Elder; if you play Elder and then play a card that gives choices using Way of the Chameleon, you get the normal number of choices.</li><li>If you use Elder on an Action that gives choices, and then you replay that Action (e.g. with Royal Carriage or Scepter), you won’t get an additional choice on the second play.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1504,
		name: 'Augurs',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Augur', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'This pile starts the game with 4 copies each of Herb Gatherer, Acolyte, Sorceress, and Sibyl, in that order. Only the top card can be gained or bought.',
		help: '<ul class="faq"><li>Dominion: Allies has six split piles, that have four different cards in each of them.</li><li>The cards start the game in order by cost. For example, the Augurs pile starts out with 4 Herb Gatherers on top, then 4 Acolytes, then 4 Sorceresses, then 4 Sibyls. This order may get messed up by cards like Swap; that’s fine.</li><li>As with the split piles in Dominion: Empires, only the top card of a split pile can be bought or gained.</li><li>You can look through the cards in a split pile at any time, without changing the order.</li><li>The top card of each split pile has an ability that can “rotate” the pile. Rotating a pile means taking the top card, and all copies of it directly under it, and putting them on the bottom. For example, if three Herb Gatherers were at the top of the Augurs, followed by Acolytes, you would put those three Herb Gatherers on the bottom, and Acolyte would now be on top.</li><li>Some cards refer to information about a pile as if it’s just one card. In these cases, go with what’s on the Randomizer card, which usually matches the top card.</li><li>Some things refer to cards from a particular pile; these things work on all cards from a split pile. For example Training (from Dominion: Adventures) lets a player put a token on an Action pile, which causes them to get +<img src="assets/Coin1.png" alt="1 coin"> when playing a card from that pile. The token can be put on the Augurs pile, and then Sorceress will also make +<img src="assets/Coin1.png" alt="1 coin"> when played.</li></ul><p>Herb Gatherer</p><ul class="faq"><li>Putting your deck into your discard pile does not trigger “when you discard this” abilities like Tunnel’s (from Hinterlands).</li><li>Playing a Treasure from your discard pile is optional, as is rotating the Augurs.</li></ul><p>Acolyte</p><ul class="faq"><li>Both abilities are optional; you may do either or both or neither.</li><li>You only gain a Gold if you actually trashed an Action or Victory card from your hand; you only gain an Augur if you actually trashed Acolyte.</li><li>Gaining an Augur will give you whichever Augur is on top of the pile currently, even if that’s another Acolyte.</li></ul><p>Sorceress</p><ul class="faq"><li>Name a card; if the top card of your deck has that name, each other player gains a Curse.</li><li>You put the card into your hand whether or not it had the name you chose.</li></ul><p>Sibyl</p><ul class="faq"><li>If after drawing your deck has no cards in it, the first card you put back will become the top card of it.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: true },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1505,
		name: 'Clashes',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Clash', 'Attack', 'Duration', 'Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'This pile starts the game with 4 copies each of Battle Plan, Archer, Warlord, and Territory, in that order. Only the top card can be gained or bought.',
		help: '<ul class="faq"><li>Dominion: Allies has six split piles, that have four different cards in each of them.</li><li>The cards start the game in order by cost. For example, the Clashes pile starts out with 4 Battle Plans on top, then 4 Archers, then 4 Warlords, then 4 Territories. This order may get messed up by cards like Swap; that’s fine.</li><li>As with the split piles in Dominion: Empires, only the top card of a split pile can be bought or gained.</li><li>You can look through the cards in a split pile at any time, without changing the order.</li><li>The top card of each split pile has an ability that can “rotate” the pile (or with Battle Plan, any pile). Rotating a pile means taking the top card, and all copies of it directly under it, and putting them on the bottom. For example, if three Battle Plans were at the top of the Clashes, followed by Archers, you would put those three Battle Plans on the bottom, and Archer would now be on top.</li><li>Some cards refer to information about a pile as if it’s just one card. In these cases, go with what’s on the Randomizer card, which usually matches the top card.</li><li>Some things refer to cards from a particular pile; these things work on all cards from a split pile. For example Training (from Dominion: Adventures) lets a player put a token on an Action pile, which causes them to get +<img src="assets/Coin1.png" alt="1 coin"> when playing a card from that pile. The token can be put on the Clashes pile, and then Warlord will also make +<img src="assets/Coin1.png" alt="1 coin"> when played.</li></ul><p>Battle Plan</p><ul class="faq"><li>First you get +1 Card and +1 Action, then you may reveal an Attack card from your hand to draw a card, and finally you may rotate any Supply pile.</li><li>Many piles won’t do anything meaningful if you do this. It can be relevant though for split piles, or for the Castles from Empires, or the Knights or Ruins from Dark Ages.</li></ul><p>Archer</p><ul class="faq"><li>The players go in turn order if they care.</li><li>Each other player, if they have 5 or more cards in hand, chooses one to keep secret and safe, and reveals the rest.</li><li>You choose one of the revealed cards for them to discard.</li></ul><p>Warlord</p><ul class="faq"><li>This doesn’t stop players from playing cards that aren’t in their hands; for example, Golem (from Alchemy) can still play its two cards, which are set aside, no matter how many copies of them are in play.</li><li>With Warlord affecting you, Throne Room can’t play a card from your hand that you have two copies of in play; but Throne can play a card you have one copy of in play, and then can replay that card, even though now you have two copies of it in play.</li><li>This only affects Action cards; it doesn’t affect Copper, for example.</li></ul><ul class="rules"><li>Normally, playing an Action with City-state isn’t playing a card from your hand, so it gets around Warlord. But if you gain an Action to your hand (with e.g. Swap), then playing it with City-state counts as playing it from your hand, meaning Warlord can prevent it.</li><li>Warlord can still prevent you from playing a card from your hand, even if you didn’t play any copies of it this turn. For example, if you called 2 Guides, then you can’t play any Guides from your hand.</li><li>Actions that have been played as a Way will still count towards Warlord’s restriction.</li><li>If you remove a 2nd copy of an Action card from play (with e.g. Royal Galley or Way of the Horse), you can then play another copy of that Action from your hand.</li><li>This attack already applies to other players during the turn on which you play it. So if you play Warlord and then gain a Province, each other player may play up to 2 Black Cats from their hands, but they can’t play a 3rd one.</li><li>However, if you play a Warlord (and haven’t already played one), other players can react with as many Caravan Guards as they want, because the Caravan Guard reaction takes place before the Warlord restriction kicks in.</li><li>The attack ends instantaneously when your next turn starts; you can’t choose to execute other start-of-turn abilities while your Warlord’s restriction on other players is still in effect. So if you start your turn by playing an Archer with Royal Galley, other players can react with as many Caravan Guards as they want, even if you haven’t taken your +2 cards from Warlord yet.</li></ul><p>Territory</p><ul class="faq"><li>For example, if your deck has 3 Estates, a Province, and a Territory, Territory is worth 3<img src="assets/VP.png" alt="victory points">.</li><li>If gaining Territory causes the Clashes pile to be empty, that counts for how many Golds you get.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1506,
		name: 'Forts',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Fort', 'Duration', 'Victory'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'This pile starts the game with 4 copies each of Tent, Garrison, Hill Fort, and Stronghold, in that order. Only the top card can be gained or bought.',
		help: '<ul class="faq"><li>Dominion: Allies has six split piles, that have four different cards in each of them.</li><li>The cards start the game in order by cost. For example, the Forts pile starts out with 4 Tents on top, then 4 Garrisons, then 4 Hill Forts, then 4 Strongholds. This order may get messed up by cards like Swap; that’s fine.</li><li>As with the split piles in Dominion: Empires, only the top card of a split pile can be bought or gained.</li><li>You can look through the cards in a split pile at any time, without changing the order.</li><li>The top card of each split pile has an ability that can “rotate” the pile (or with Battle Plan, any pile). Rotating a pile means taking the top card, and all copies of it directly under it, and putting them on the bottom. For example, if three Tents were at the top of the Forts, followed by Garrisons, you would put those three Tents on the bottom, and Garrison would now be on top.</li><li>Some cards refer to information about a pile as if it’s just one card. In these cases, go with what’s on the Randomizer card, which usually matches the top card.</li><li>Some things refer to cards from a particular pile; these things work on all cards from a split pile. For example Training (from Dominion: Adventures) lets a player put a token on an Action pile, which causes them to get +<img src="assets/Coin1.png" alt="1 coin"> when playing a card from that pile. The token can be put on the Allies pile, and then Hill Fort will also make +<img src="assets/Coin1.png" alt="1 coin"> when played.</li></ul><p>Tent</p><ul class="faq"><li>If you have multiple Tents in play, you can choose how many you want to put on top of your deck.</li></ul><p>Garrison</p><ul class="faq"><li>This can only have tokens on it if it’s in play; if it leaves play, it has no tokens.</li><li>You can use coin tokens for this; on Garrison they have no other meaning, they’re just tokens on Garrison.</li><li>If you Throne Room Garrison and then gain 3 cards, it will get 6 tokens total, and you’ll draw 6 cards next turn, not 12, as you can only remove the tokens once.</li></ul><ul class="rules"><li>If Garrison doesn’t have any tokens on it (i.e. because you didn’t gain any cards after playing it), you discard Garrison from play during Clean-up.</li><li>This means you can Improve the Garrison if you haven’t yet gained any cards this turn, since it is due to get discarded from play. Improve will then gain a card, but since Garrison is no longer in play, you can’t put tokens on Garrison, so you won’t draw cards next turn.</li><li>If you play Garrison with a card like Band of Misfits, it’s not in play, so you can’t put any tokens on it. In contrast, Haven and Cargo Ship can set aside a card even if they’re not in play, because their “(on/under this)” wordings are only for player convenience.</li></ul><p>Hill Fort</p><ul class="faq"><li>First completely resolve gaining a card costing up to <img src="assets/Coin4.png" alt="4 coins">; then choose whether to put it into your hand or get +1 Card and +1 Action.</li><li>If the card is no longer where it was gained to (normally your discard pile) then you will fail to put it into your hand if you choose that. If it’s been covered up in your discard pile, you can still put it into your hand.</li></ul><ul class="rules"><li>Because you resolve all on-gain effects before you make your choice, this means that if you gain a Sheepdog and put it into your hand, you can’t use the Sheepdog’s reaction to react to its own gain.</li><li>If you’re subject to the effect of Gatekeeper, the gained card will be exiled before you get a chance to put it into your hand.</li></ul><p>Stronghold</p><ul class="faq"><li>If you choose +<img src="assets/Coin3.png" alt="3 coins">, Stronghold will be discarded that turn; if you choose the +3 Cards next turn, Stronghold will stay out until that turn’s Clean-up (and if you choose both via Elder, it will stay out).</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1507,
		name: 'Importer',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Duration', 'Liaison'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, gain a card costing up to <img src="assets/Coin5.png" alt="5 coins">.<hr>Setup: Each player gets <b>+4 Favors</b>.',
		help: '<ul class="faq"><li>At the start of the game, each player gets five Favors instead of one. Importer doesn’t provide a way to get any more Favors during the game.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1508,
		name: 'Merchant Camp',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions<br>+<img src="assets/Coin1.png" alt="1 coin"></b><hr>When you discard this from play, you may put it onto your deck.',
		help: '<ul class="faq"><li>If you have multiple Merchant Camps in play, you can choose how many you want to put on top of your deck.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1509,
		name: 'Odysseys',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Odyssey', 'Duration', 'Treasure', 'Victory'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'This pile starts the game with 4 copies each of Old Map, Voyage, Sunken Treasure, and Distant Shore, in that order. Only the top card can be gained or bought.',
		help: '<ul class="faq"><li>Dominion: Allies has six split piles, that have four different cards in each of them.</li><li>The cards start the game in order by cost. For example, the Odysseys pile starts out with 4 Old Maps on top, then 4 Voyages, then 4 Sunken Treasures, then 4 Distant Shores. This order may get messed up by cards like Swap; that’s fine.</li><li>As with the split piles in Dominion: Empires, only the top card of a split pile can be bought or gained.</li><li>You can look through the cards in a split pile at any time, without changing the order.</li><li>The top card of each split pile has an ability that can “rotate” the pile. Rotating a pile means taking the top card, and all copies of it directly under it, and putting them on the bottom. For example, if three Old Maps were at the top of the Odysseys, followed by Voyages, you would put those three Old Maps on the bottom, and Voyage would now be on top.</li><li>Some cards refer to information about a pile as if it’s just one card. In these cases, go with what’s on the Randomizer card, which usually matches the top card.</li><li>Some things refer to cards from a particular pile; these things work on all cards from a split pile. For example Training (from Dominion: Adventures) lets a player put a token on an Action pile, which causes them to get +<img src="assets/Coin1.png" alt="1 coin"> when playing a card from that pile. The token can be put on the Odyssey pile, and then Sunken Treasure will also make +<img src="assets/Coin1.png" alt="1 coin"> when played.</li></ul><p>Old Map</p><ul class="faq"><li>Everything happens in the order listed: first you get +1 Card and +1 Action; then you discard a card; then you draw a card; then you choose whether or not to rotate the Odysseys.</li></ul><p>Voyage</p><ul class="faq"><li>This doesn’t stop you from playing cards that aren’t in your hand; for example, if the third card you play is Golem (from Alchemy), it can still play its two cards, which are set aside.</li><li>On a Voyage turn, if you Throne Room a card, both Throne Room and that card count as plays from your hand, but Throne Room replaying the card does not.</li><li>This limits plays of all types of cards, including Treasures like Copper.</li></ul><ul class="rules"><li>Unlike Outpost, playing multiple Voyages in one turn will give you that many extra turns.</li><li>If you play 2 Voyages in one turn, you discard one Voyage during the first extra turn, and you discard the 2nd Voyage during the 2nd extra turn.</li><li>If you play a Voyage twice with Throne Room, both the Voyage and the Throne Room will remain in play for both extra turns.</li><li>If you skip a Voyage turn with Lich, you discard the Voyage during the next Clean-up that happens (either yours or another player’s).</li><li>Once you’ve played 3 cards from your hand, Voyage’s restriction will override any ability that lets you play cards from your hand (such as Market Towns or Storyteller).</li><li>Normally, an Action played with City-state won’t count towards Voyage’s restriction. But if you gain an Action card to your hand (with e.g. Swap), playing that card with City-state will count towards Voyage’s restriction.</li></ul><p>Sunken Treasure</p><ul class="faq"><li>If there’s no such Action in the Supply, you don’t gain one.</li></ul><p>Distant Shore</p><ul class="faq"><li>Gaining an Estate isn’t optional. If the Estate pile is empty you still get +2 Cards and +1 Action.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1510,
		name: 'Sentinel',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Look at the top 5 cards of your deck. You may trash up to 2 of them. Put the rest back in any order.',
		help: '<ul class="faq"><li>Shuffle as needed; if you don’t have five cards even after shuffling, you look at all of them.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1511,
		name: 'Underling',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Liaison'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+1 Favor</b>',
		help: '<ul class="faq"><li>Playing this simply gives you +1 Card, +1 Action, and +1 Favor.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1512,
		name: 'Wizards',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Wizard', 'Liaison', 'Duration', 'Attack'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'This pile starts the game with 4 copies each of Student, Conjurer, Sorcerer, and Lich, in that order. Only the top card can be gained or bought.',
		help: '<ul class="faq"><li>Dominion: Allies has six split piles, that have four different cards in each of them.</li><li>The cards start the game in order by cost. For example, the Wizards pile starts out with 4 Students on top, then 4 Conjurers, then 4 Sorcerers, then 4 Liches. This order may get messed up by cards like Swap; that’s fine.</li><li>As with the split piles in Dominion: Empires, only the top card of a split pile can be bought or gained.</li><li>You can look through the cards in a split pile at any time, without changing the order.</li><li>The top card of each split pile has an ability that can “rotate” the pile. Rotating a pile means taking the top card, and all copies of it directly under it, and putting them on the bottom. For example, if three Students were at the top of the Wizards, followed by Conjurers, you would put those three Students on the bottom, and Conjurer would now be on top.</li><li>Some cards refer to information about a pile as if it’s just one card. In these cases, go with what’s on the Randomizer card, which usually matches the top card.</li><li>Some things refer to cards from a particular pile; these things work on all cards from a split pile. For example Training (from Dominion: Adventures) lets a player put a token on an Action pile, which causes them to get +<img src="assets/Coin1.png" alt="1 coin"> when playing a card from that pile. The token can be put on the Wizards pile, and then Sorcerer will also make +<img src="assets/Coin1.png" alt="1 coin"> when played.</li></ul><p>Student</p><ul class="faq"><li>Rotating the Wizards is optional, but trashing a card is mandatory.</li><li>If you trash a Treasure, you get +1 Favor and put Student onto your deck: that’s mandatory. This means you might draw that same Student again that turn and play it again.</li><li>If you trash a non-Treasure, Student stays in play, and is discarded in Clean-up like other cards.</li></ul><ul class="rules"><li>If Student isn’t in play (e.g. you played it from the Supply with Band of Misfits), trashing a Treasure means you’ll get +1 Favor, but you won’t put the Student on your deck.</li><li>If you Throne Room a Student and put it onto your deck, the Throne Room loses track of Student. And if you immediately draw the Student with Fellowship of Scribes, Throne Room can’t move the Student back into play.</li></ul><p>Conjurer</p><ul class="faq"><li>This will keep returning to your hand each turn as long as you keep playing it.</li></ul><ul class="rules"><li>If you play this with a card like Band of Misfits, Band of Misfits will stay in play through the end of your next turn. Neither the Band of Misfits nor any Conjurer will move to your hand at the beginning of the next turn; it will try but fail to do so because of the stop-moving rule.</li></ul><p>Sorcerer</p><ul class="faq"><li>Each other player names a card, and reveals the top card of their deck.</li><li>If it doesn’t have that name, they gain a Curse.</li><li>Whether or not it does, they return the card to the top of their deck.</li><li>So if you play Sorcerer twice in a turn, they will probably know the card for the 2nd play.</li></ul><ul class="rules"><li>Similar to Sorceress, if a player doesn’t have a card to reveal, they won’t gain a Curse.</li></ul><p>Lich</p><ul class="faq"><li>Skipping a turn means that the next time you would take a turn, you don’t; nothing happens for that turn: no “start of turn” abilities, no phases. Play continues with the player to your left as usual.</li><li>You can skip an extra turn, like one from Voyage.</li><li>Skipped turns still count for the tiebreaker however they would have if taken.</li><li>If you play multiple Liches you will skip multiple turns.</li><li>When you trash Lich, you put it from the trash into your discard pile, which does not trigger abilities that care about gaining cards; then you gain a card costing less than Lich from the trash, which does trigger such abilities.</li><li>Gaining a cheaper card is mandatory if possible.</li></ul><ul class="rules"><li>If you play Lich and Outpost in the same turn, you draw 3 cards during Clean-up, skip the Outpost turn, and then you keep that 3-card hand for your next turn.</li><li>When you skip a Voyage or Outpost turn, you’re also skipping its Clean-up phase. This means you’ll discard the Voyage or Outpost from play during the Clean-up of the next turn that happens (either yours or another player’s).</li><li>If you’re due to take multiple extra turns at the same time (e.g. one from Voyage and one from Island Folk), you can choose what order they happen in. The extra turn you choose to happen first will be the one that gets skipped by Lich.</li><li>Cards that check what you did on a previous turn (like Smugglers) will check the turn that you actually played. So if you skip a turn with Lich, and the next player plays a Smugglers, it doesn’t check the skipped turn, and instead checks the last turn you played (which will usually be the same turn that you played Lich).</li><li>Similarly, cards that check the owner of the previous turn (e.g. Voyage) will check the last turn that was actually played. So if all the other players have skipped their turns with Lich, your Voyage will fail.</li><li>If on the same turn, you play Lich and a Duration that says “until your next turn...” (e.g. Monkey or Highwayman), that Duration’s effect will last until the next turn you take (i.e. it extends past your skipped turn).</li><li>This gains a card cheaper than it, and not a card that costs up to <img src="assets/Coin5.png" alt="5 coins">. This may matter if cards have changed cost (e.g. due to Family of Inventors).</li><li>If you Possess a player and make them trash a Lich, you can choose to either put the Lich in their discard pile, or set it aside, to put in their discard pile at the end of the turn. Either way, you will still gain a cheaper card from the trash.</li>When you trash this from the Supply (with Lurker), you still discard the Lich (into your own discard pile) and gain a cheaper card from the trash. Discarding the Lich in this way doesn’t count as gaining it.</ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: true, cursing: true },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1513,
		name: 'Broker',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Liaison'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand and choose one:<br><b>+1 Card</b> per <img src="assets/Coin1.png" alt="1 coin"> it costs;<br><b>+1 Action</b> per <img src="assets/Coin1.png" alt="1 coin"> it costs;<br><b>+<img src="assets/Coin1.png" alt="1 coin"></b> per <img src="assets/Coin1.png" alt="1 coin"> it costs;<br><b>+1 Favor</b> per <img src="assets/Coin1.png" alt="1 coin"> it costs;<br>',
		help: '<ul class="faq"><li>For example, if you trash an Estate, which costs <img src="assets/Coin2.png" alt="2 coins">, you could choose to get +2 Cards, or +2 Actions, or +<img src="assets/Coin2.png" alt="2 coins">, or +2 Favors.</li><li>If you trash a card with <img src="assets/Debt.png" alt="debt"> or <img src="assets/Potion.png" alt="potion"> in the cost (from other expansions), you get nothing for those symbols.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1514,
		name: 'Carpenter',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'If no Supply piles are empty, +1 Action and gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">.<br>Otherwise, trash a card from your hand and gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than it.',
		help: '<ul class="faq"><li>First see if there are any empty Supply piles.</li><li>If there are none, you get +1 Action and gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">; if there are one or more empty piles, instead you trash a card from your hand and gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than the card you trashed.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1515,
		name: 'Courier',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>Discard the top card of your deck. Look through your discard pile; you may play an Action or Treasure from it.',
		help: '<ul class="faq"><li>First discard your top card, shuffling if needed. Then look through your discard pile, and you may play an Action or Treasure from it.</li></ul><ul class="rules"><li>You resolve any effects from discarding the top card of your deck before you look through your discard pile. So if this discards a Tunnel, you can play the Gold that you gained from it.</li><li>If you have an empty discard pile after discarding the top card of your deck (e.g. you discard a Village Green, play it, and that makes you shuffle), you can’t play any card.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1516,
		name: 'Innkeeper',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Choose one: <b>+1 Card</b>; or <b>+3 Cards</b>, then discard 3 cards; or <b>+5 Cards</b>, then discard 6 cards.',
		help: '<ul class="faq"><li>First get +1 Action and choose which option you want, then do it.</li><li>You either get +1 Card, or get +3 Cards but discard 3 cards, or get +5 Cards but discard 6 cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1517,
		name: 'Royal Galley',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card</b><br>You may play a non-Duration Action card from your hand.<br>Set it aside; if you did, then at the start of your next turn, play it.',
		help: '<ul class="faq"><li>Playing a non-Duration Action card via this is optional. If you do play one, you resolve the card completely, then set it aside. If it moved elsewhere somehow (for example, if it trashed itself), you fail to set it aside, and Royal Galley is discarded that turn normally.</li><li>If you do set the card aside, then Royal Galley stays in play with it this turn, and at the start of your next turn, you play the card again. Royal Galley and the card are both discarded that turn.</li><li>Playing a card via Royal Galley does not use up an Action play (though playing Royal Galley itself does).</li></ul><ul class="rules"><li>If you Royal Galley a non-Duration card that should stay in play (such as a Band of Misfits that plays a Duration, or a Throne Room that plays a Duration), it still gets set aside with Royal Galley.</li><li>If you Royal Galley a Throne Room, and on your next turn, you make the Throne Room plays a Duration (like Caravan), the Throne Room stays in play, but Royal Galley doesn’t.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1518,
		name: 'Town',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Choose one:<br><b>+1 Card</b> and <b>+2 Actions</b>;<br>or <b>+1 Buy</b> and <b>+<img src="assets/Coin2.png" alt="2 coins"></b>.',
		help: '<ul class="faq"><li>You simply choose to either get +1 Card and +2 Actions, or +1 Buy and +<img src="assets/Coin2.png" alt="2 coins">.</li></ul>',
		flags: { village: true, drawing: true, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1519,
		name: 'Barbarian',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b><br>Each other player trashes the top card of their deck. If it costs <img src="assets/Coin3.png" alt="3 coins"> or more they gain a cheaper card sharing a type with it; otherwise they gain a Curse.',
		help: '<ul class="faq"><li>For example, if a player trashes Contract to this, they could gain a Royal Galley, as they share the Duration type, or a Silver, as they share the Treasure type, or a Sycophant, as they share the Liaison type.</li><li>If the trashed card costs <img src="assets/Coin3.png" alt="3 coins"> or more, they have to gain a cheaper card if they can; if there are no cheaper cards that share a type, they simply fail to gain a card.</li><li>The attack hits each other player in turn order, starting with the player to your left; this can be important.</li></ul><ul class="rules"><li>Cards that cost <img src="assets/Potion.png" alt="potion"> only cost more than another card if both the <img src="assets/Coin.png" alt="coins"> and <img src="assets/Potion.png" alt="potion"> amounts are larger, or one is larger and one the same. For example, a Barbarian that trashes your Alchemist means you can gain either an Apothecary or an Underling. However, a Barbarian that trashes your Underling means you can’t gain an Apothecary.</li><li>Unlike Locusts, which checks whether the trashed card is Copper or Estate, Barbarian checks the cost of the trashed card (ignoring <img src="assets/Potion.png" alt="potion"> and <img src="assets/Debt.png" alt="debt">). This leads to several differences:<ul><li>If Locusts trashes nothing, the player gains nothing. If Barbarian trashes nothing, the player gains a Curse (similar to Giant).</li><li>If Locusts trashes a card costing <img src="assets/Coin2.png" alt="2 coins"> or less (such as Bauble or Curse), the player gains a cheaper card sharing a type if possible (Copper is cheaper than Bauble, while there’s nothing cheaper than Curse). If Barbarian trashes a Bauble, the player gains a Curse.</li><li>If Locusts trashes an Apothecary or Engineer, the player gains a cheaper card sharing a type if possible. Barbarian will give out Curse in both scenarios.</li></ul></li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1520,
		name: 'Capital City',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><br>You may discard 2 cards for <b>+<img src="assets/Coin2.png" alt="2 coins"></b>.<br>You may pay <img src="assets/Coin2.png" alt="2 coins"> for <b>+2 Cards</b>.',
		help: '<ul class="faq"><li>First draw a card and get +2 Actions.</li><li>Then decide if you want to discard 2 cards for +<img src="assets/Coin2.png" alt="2 coins">. You may choose to do this even with fewer than 2 cards in hand, and will discard what you can, but you only get +<img src="assets/Coin2.png" alt="2 coins"> if you actually discarded 2 cards.</li><li>Then decide if you want to spend <img src="assets/Coin2.png" alt="2 coins"> for +2 Cards. The <img src="assets/Coin2.png" alt="2 coins"> can come from discarding to Capital City, or some other source, e.g. a Barbarian you played earlier in the turn. You don’t get to play Treasures here to make the <img src="assets/Coin2.png" alt="2 coins"> though.</li></ul><ul class="rules"><li>If you play this with Way of the Chameleon, you may discard 2 cards for +2 Cards. You can also pay <img src="assets/Coin2.png" alt="2 coins"> for +<img src="assets/Coin2.png" alt="2 coins">, although this isn’t useful.</li></ul>',
		flags: { village: true, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1521,
		name: 'Contract',
		set: 'Allies',
		edition: [1],
		cardType: ['Treasure', 'Duration', 'Liaison'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><br><b>+1 Favor</b><br>You may set aside an Action from your hand to play it at the start of your next turn.',
		help: '<ul class="faq"><li>If you set aside a card, then Contract stays in play until the Clean-up of your next turn; if you don’t set aside a card, Contract is discarded the same turn in Clean-up.</li><li>If you set aside a card, you have to play it at the start of your next turn.</li><li>The set-aside card is face up.</li></ul><ul class="rules"><li>Contract is discarded from play during Clean-up on the turn on which it plays the set-aside card, even if the set-aside card itself is a Duration card (or a Throne Room variant that plays a Duration card) and stays in play longer than that.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1522,
		name: 'Emissary',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Liaison'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+3 Cards</b><br>If this made you shuffle (at least one card), <b>+1 Action</b> and <b>+2 Favors</b>.',
		help: '<ul class="faq"><li>First draw 3 cards; then see if drawing those cards caused you to shuffle. If it did, you get +1 Action and +2 Favors.</li><li>It only counts as shuffling if at least one card was in your discard pile.</li></ul><ul class="rules"><li>This checks if any cards were in your discard pile, and not how many cards were actually shuffled. So if you use either Order of Astrologers or Order of Masons to effectively shuffle 0 cards back into your deck, you’ll still get the bonus from Emissary.</li><li>This checks if its +3 Cards is the effect that you makes you shuffle. So if playing Emissary gets you +1 Card (from Pathfinding), and that makes you shuffle, you won’t get the bonus from Emissary.</li><li>But if you use Order of Masons to leave yourself with less than 3 cards in your deck after Pathfinding, then Emissary’s +3 Cards will make you shuffle, and that gives you +1 Action and +2 Favors.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1523,
		name: 'Galleria',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br>This turn, when you gain a card costing <img src="assets/Coin3.png" alt="3 coins"> or <img src="assets/Coin4.png" alt="4 coins">, <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>What matters is how much a card actually costs when you gain it. If, for example, cards cost <img src="assets/Coin1.png" alt="1 coin"> less due to Bridge (from Intrigue), then gaining Silver would not produce +1 Buy, but gaining Duchy would.</li></ul><ul class="rules"><li>Alchemist, Familiar, and Golem do not cost either <img src="assets/Coin3.png" alt="3 coins"> or <img src="assets/Coin4.png" alt="4 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1524,
		name: 'Guildmaster',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Liaison'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin3.png" alt="3 coins"></b><br>This turn, when you gain a card, <b>+1 Favor</b>.',
		help: '<ul class="faq"><li>If an Ally ability triggers on gaining cards, e.g. Band of Nomads, you can use the Favor you just got on it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1525,
		name: 'Highwayman',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Duration', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your next turn, discard this from play and <b>+3 Cards</b>.<br>Until then, the first Treasure each other player plays each turn does nothing.',
		help: '<ul class="faq"><li>You draw the 3 cards even if Highwayman can’t be discarded from play; for example, if you Throne Room a Highwayman, you’ll only discard it once but will draw 6 cards.</li><li>Discarding Highwayman happens first, so it’s possible to draw that Highwayman with the +3 Cards.</li><li>The attack stops each other player’s first Treasure from doing anything, each turn; if they take extra turns, every turn is affected. For example, if their first played Treasure is Copper, it produces no <img src="assets/Coin.png" alt="coins">.</li><li>This isn’t cumulative; if multiple players play copies of Highwayman, or one player plays multiple copies of it, still only one Treasure per turn does nothing.</li><li>The Treasure does nothing even if it’s also an Action, e.g., Crown (from Empires).</li><li>This stops the Treasure from doing what it does when played, but doesn’t stop abilities below a dividing line, like Capital’s (from Empires).</li><li>If the Treasure is also an Action, a Way (from Menagerie) can still be used on it, and Enchantress (from Empires) can still work on it; the player who played the Treasure decides which effect applies.</li></ul><ul class="rules"><li>If you play this with Throne Room, then when Highwayman discards itself from play, Throne Room still remains in play until Clean-up.</li><li>If you play a Scheme at the start of your turn (with e.g. Royal Galley), you may put Highwayman onto your deck when you discard it from play with its own ability (and you will immediately draw the Highwayman back).</li><li>Highwayman does not change anything about the Treasure, just prevents on-play instructions on the card from being carried out. So a blocked Fool’s Gold will still let your other Fool’s Gold make +<img src="assets/Coin4.png" alt="4 coins">, and it can still be replayed by Specialist.</li><li>However, Highwayman overrules effects that change the values of Treasures, such as Envious and Coppersmith. If you play a Silver or Gold that does nothing, Envious has no effect on it. And if you play a Copper that does nothing, Coppersmith has no effect on it.</li><li>Unlike Enchantress, this can affect a Treasure that another player plays during your turn. So if you have Capitalism, and play Highwayman and then another Attack, and another player reacts with a Caravan Guard to the second Attack, their first Caravan Guard does nothing, and they discard it during your Clean-up phase.</li><li>However, if you have Capitalism and other players react with Caravan Guards <em>to the first Highwayman you play</em>, they get full value from all their Caravan Guards, because the reaction takes place before Highwayman resolves.</li><li>If you play an Action card that gives +<img src="assets/Coin.png" alt="coins">, and then buy Capitalism later the same turn, that Action card you already played will become a Treasure, but it doesn’t count as the first Treasure you played this turn because it wasn’t a Treasure when you played it.</li><li>If you play a Treasure and <em>then</em> an opponent somehow plays Highwayman on the same turn, Highwayman missed its chance; the first Treasure you played has already had its effect and doesn’t get revoked, and future Treasures you may play on that turn aren’t affected by Highwayman because they’re not the first.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1526,
		name: 'Hunter',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Reveal the top 3 cards of your deck. From those cards, put an Action, a Treasure, and a Victory card into your hand. Discard the rest.',
		help: '<ul class="faq"><li>From the three cards, choose an Action, then a Treasure, then a Victory card.</li><li>Cards with multiple types can be chosen for any matching type. For example, if the revealed cards were Stronghold, Copper, Silver, you would have to take Stronghold as the Action, would choose between Silver and Copper as the Treasure, and would get no Victory card. Then you would discard the unchosen Treasure.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1527,
		name: 'Modify',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. Choose one: <b>+1 Card</b> and <b>+1 Action</b>; or gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than the trashed card.',
		help: '<ul class="faq"><li>First trash a card from your hand. Then, choose whether to take +1 Card and +1 Action, or to gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than the trashed card.</li></ul><ul class="rules"><li>If you play this with Elder and pick both choices, you do them in the printed order, meaning you draw a card before gaining a card. This means you can’t draw the card that you just gained. But if the card you draw is a Reaction that cares about gaining cards (such as Sheepdog), you can use it.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1528,
		name: 'Skirmisher',
		set: 'Allies',
		edition: [1],
		cardType: ['Action', 'Attack'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b><br>This turn, when you gain an Attack card, each other player discards down to 3 cards in hand.',
		help: '<ul class="faq"><li>When played, Skirmisher sets up an ability for the rest of the turn; any time you gain an Attack card, each other player discards down to 3 cards in hand.</li><li>Revealing Moat when Skirmisher is played stops the attack; you can’t reveal Moat when an Attack card is gained later.</li></ul><ul class="rules"><li>You resolve all your on-gain abilities before the other players get to use their own on-gain abilities (assuming that it’s your turn). This means that an attacked player has to discard to your Skirmisher first before they get to use Invest or Falconer.</li><li>If you gain Skirmisher and then play it (with e.g. City-state), the other players will discard down to 3 cards in hand.</li><li>When you gain an Attack, you may play it with City-state before attacking with Skirmisher. This may be useful if playing the Attack would draw them cards (such as Soothsayer).</li><li>If you gain a copy of Skirmisher with either Disciple or Specialist, Skirmisher will attack. But if you gain a copy of Skirmisher with Kiln, you won’t attack, because you haven’t followed Skirmisher’s instructions yet.</li><li>Exchanging or exiling a card doesn’t count as gaining it. So if you exchange a Peasant for a Soldier, or exile a Skirmisher with Invest, you won’t attack. But if you gain an Attack and exchange it (e.g. for a Changeling), you’ll still attack.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1529,
		name: 'Specialist',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'You may play an Action or Treasure from your hand.<br>Choose one: play it again; or gain a copy of it.',
		help: '<ul class="faq"><li>First you may play an Action or Treasure card from your hand. If you did, then after completely resolving playing that card, you choose to either play it again, or gain a copy of it.</li><li>You can play the card again even if it left play.</li><li>You can choose to gain a copy even if there are no copies left; you won’t gain anything though.</li><li>This can only gain cards from the Supply.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1530,
		name: 'Swap',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may return an Action from your hand to its pile, to gain to your hand a different Action costing up to <img src="assets/Coin5.png" alt="5 coins">.',
		help: '<ul class="faq"><li>First you get +1 Card and +1 Action. Then you may return an Action card from your hand to its pile; this is optional. If you do, then gain an Action card from the Supply costing up to <img src="assets/Coin5.png" alt="5 coins">, and put it into your hand.</li><li>The card you gain can’t have the same name as the one you returned.</li><li>Returning the card isn’t trashing it, and won’t trigger “when you trash this” abilities; gaining the card is gaining it, and will trigger “when you gain this” abilities.</li></ul><ul class="rules"><li>A non-Supply card (like Horse) can be returned to its pile. However, a card with no pile (like Necropolis, or anything from the Black Market deck) can’t be returned anywhere.</li><li>You can’t return a card and gain a card from the same pile. So if Sorceress is on top of the Augurs pile, and you return a Herb Gatherer, you can’t gain the Sorceress.</li><li>If you Possess another player and make them Swap an Action card, their Action returns to its pile, and then you gain a differently named Action card to your discard pile.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1531,
		name: 'Marquis',
		set: 'Allies',
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+1 Card</b> per card in your hand. Discard down to 10 cards in hand.',
		help: '<ul class="faq"><li>Even if you were unable to draw the full amount, you still discard down to 10 cards in hand afterwards.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b>. Reveal the top 3 cards of the Black Market deck. Play any number of Treasures from your hand. You may buy one of the revealed cards. Put the rest on the bottom of the Black Market deck in any order.<hr>Setup: Make a Black Market deck out of different unused Kingdom cards.',
		help: '<ul class="faq"><li>Black Market allows you to Buy a card during the Action phase.</li><li>You can use <img src="assets/Coin.png" alt="coins"> provided by other Action cards played earlier in the Action phase and you can also play Treasure cards from your hand to pay the cost of the bought card.</li><li>The Treasure cards are played to the table in your play area, just as you would during the Buy phase.</li><li>You may play more Treasure cards than are required for the purchase; the extra <img src="assets/Coin.png" alt="coins"> from Action cards and Treasure cards are available to use during your Buy phase.</li><li>You may even play Treasure cards without Buying a card.</li><li>You may not reuse <img src="assets/Coin.png" alt="coins"> already spent during a turn.</li><li>A card bought during the Action phase does not count as a card bought in your Buy phase, so you do not need an Action card giving you +1 Buy to still buy a card during your normal Buy phase.</li><li>To use the Black Market Kingdom card, you must create a Black Market deck before starting the game. The Black Market deck is made up of Kingdom cards that are not in the Supply of the current game. The players should agree before the game which cards will be used to create the Black Market deck (for example, you could agree to use one of every Kingdom card you own that is not a part of the Supply).</li><li>It is recommended that the Black Market deck contain at least 15 Kingdom cards, with no duplicates.</li><li>All players can see which cards are placed in the Black Market deck before the game begins.</li><li>Take one of each selected Kingdom card, shuffle them together, and place the deck face down on the table where all players can reach it.</li><li>This deck is not a Supply pile and if it is emptied, it does not count towards the end game conditions.</li><li>If you play Black Market and the Black Market deck is empty, you cannot buy a card but you still get +<img src="assets/Coin2.png" alt="2 coins">.</li><li>If you play Black Market and choose not to buy one of the three cards from the Black Market deck, you still get +<img src="assets/Coin2.png" alt="2 coins">.</li></ul><ul class="rules"><li>Any setup instructions or “in games using this” rules that apply to cards in the Black Market deck are in effect, even if nobody ever gains (or even reveals) the relevant cards. For example, if Young Witch is in the Black Market deck, you add a Bane, and if Charlatan is there, Curses are Treasures for the whole game.</li><li>It is not necessary to include <em>every</em> unused Kingdom card; you may decide how many cards to include in the Black Market deck, and which ones, in any way.</li><li>Dominion Online creates a deck of up to 60 cards (less if both players have a free account). It does not include cards with an obvious setup that would give away what’s in the Black Market deck, such as Tournament or Baker.</li><li>On Dominion Online, the Black Market deck is shuffled after every card in it has been seen.</li><li>For piles with differently named cards in them (e.g. Knights or split piles), only one of each can be added to the Black Market deck.</li><li>Black Market does not give you an extra Buy phase; you are (usually) buying from the Black Market deck during your Action phase. So, for example, the cost of Peddler stays at <img src="assets/Coin8.png" alt="8 coins">, and cards you buy won’t count for Merchant Guild.</li><li>You cannot pay off <img src="assets/Debt.png" alt="debt"> while buying from the Black Market, and you cannot buy anything from the Black Market if you have <img src="assets/Debt.png" alt="debt">. You also cannot buy cards if it’s a Mission turn.</li><li>Buying and gaining a card from from the Black Market will count for anything that cares about cards that you bought (e.g.Haggler or Swamp Hag).</li><li>If gaining a card from the Black Market causes you to gain more cards (e.g. you gain a Border Village or a Stonemason), the cards you gain come from the Supply, and you can’t gain one of the other revealed cards.</li><li>The Black Market deck is not considered a “pile”, and cards from the Black Market deck don’t have a pile. This has several implications.<ul><li>You cannot exchange cards that come from the Black Market deck (e.g. with Trader or Changeling, or if they are Travellers or Vampire).</li><li>Cards from the Black Market deck cannot be returned to a pile or the Supply (with e.g. Way of the Horse or Swap), meaning that those cards will stay where they were.</li><li>The Gathering cards will not accumulate <img src="assets/VP.png" alt="victory points"> anywhere.</li></ul></li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration', 'Command'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Now and at the start of your next turn: Play a non-Duration, non-Command Action card from the Supply costing up to <img src="assets/Coin4.png" alt="4 coins">, leaving it there.',
		help: '<ul class="rules"><li>You choose a non-Duration, non-Command Action card from the Supply that costs up to <img src="assets/Coin4.png" alt="4 coins"> and play it, leaving it there, then choose again at the start of your next turn.</li><li>On the second turn, you can choose to play a different card, or the same card if there is still a copy of it in the Supply.</li><li>Captain can only play a visible card in the Supply, and the top card of a pile; it cannot play a card from an empty pile, or a card that has not been uncovered from a split pile, or a card from a split pile that has been bought out, or a non-Supply card (such as Mercenary).</li><li>The Action card stays in the Supply; if an effect tries to move it (such as Island putting itself on your Island Mat) it will fail to move it.</li><li>Captain can play a card that trashes itself when played; if the card checks to see if it was trashed (such as Mining Village), it was not, but if the card does not check (such as Acting Troupe), it will function normally.</li><li>Cards that normally move other cards from the Supply can move themselves when played via Captain; for example playing Workshop can gain itself, and playing Lurker can trash itself.</li><li>If there are no non-Duration, non-Command Action cards in the Supply that cost up to <img src="assets/Coin4.png" alt="4 coins"> the turn you play Captain, Captain still stays in play and tries to play a card at the start of your next turn.</li><li>While Captain can’t directly play Duration cards, it can still stay in play for longer than usual if, on the second turn, it plays a Throne Room that then plays a Caravan.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Set aside up to 3 cards from your hand face down. At the start of your next turn, put them into your hand, then you may trash a card from your hand.',
		help: '<ul class="rules"><li>You may set aside zero cards, one, two, or three cards from your hand. Put them face down; you may look at them.</li><li>No matter how many cards you set aside, you may trash a card at the start of your next turn and Church is discarded at the end of that turn.</li><li>The card you trash can be a card you had set aside, or a card that was already in your hand.</li><li>If you play multiple Churches (or one Church multiple times such as via Throne Room), you may set aside multiple batches of up to three cards. What happens on your next turn is this: you put one batch of set-aside cards in hand, then trash, then put the next batch of set-aside cards in hand, then trash. You can choose which batch of set-aside cards you put in hand first.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand. If it costs <img src="assets/Coin1.png" alt="1 coin"> or more, gain a cheaper card and a Gold.',
		help: '<ul class="faq"><li>Trashing is not optional.</li><li>If you trash a card costing <img src="assets/Coin0.png" alt="0 coins">, or if you have no cards left in hand, nothing else happens.</li><li>If you trash a card costing <img src="assets/Coin1.png" alt="1 coin"> or more, you gain a cheaper card and a Gold. Both come from the Supply, and are put into your discard pile. The cheaper card goes into your discard pile first. For example, if you trash a Silver (costing <img src="assets/Coin3.png" alt="3 coins">), you could gain an Estate (costing <img src="assets/Coin2.png" alt="2 coins">).</li><li>There will almost always be a cheaper card in the Supply, since Copper and Curse cost <img src="assets/Coin0.png" alt="0 coins">, but if there aren’t any, you still gain a Gold.</li><li>If there aren’t any Gold left in the Supply, you still gain the cheaper card.</li><li>Cards that cost only <img src="assets/Potion.png" alt="potion"> (like Transmute from Alchemy) or only <img src="assets/Debt.png" alt="debt"> (like Engineer from Empires) do not cost <img src="assets/Coin1.png" alt="1 coin"> or more.</li></ul><ul class="rules"><li>Cards that cost <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> <em>plus</em> some amount of <img src="assets/Coin.png" alt="coins">, like Apothecary or Fortune, do cost “<img src="assets/Coin1.png" alt="1 coin"> or more”. For instance, you could Dismantle a Fortune and get a Province and a Gold, or an Overlord and a Gold.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Reveal the top 5 cards of your deck. The player to your left chooses one. Discard that one and put the rest into your hand.',
		help: '<ul class="faq"><li>If you do not have 5 cards in your deck, reveal as many as you can and shuffle your discard pile to reveal the rest.</li><li>The player to your left then chooses one of the revealed cards for you to discard and then you put the rest into your hand.</li><li>If you do not have enough cards left to reveal 5 cards, even after shuffling, reveal as many as you can. The opponent to your left still discards one card before you put the rest to your hand.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Choose one; you get the version in parentheses: Each player gets <b>+1 (+3) Cards</b>; or each player gains a Silver (Gold); or each player may trash a card from their hand and gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> (<img src="assets/Coin2.png" alt="2 coins">) more.',
		help: '<ul class="faq"><li>You always get +1 Action.</li><li>Then you either<ul><li>draw three cards and each other player draws a card;</li><li>or you gain a Gold and each other player gains a Silver;</li><li>or you may trash a card from your hand and gain a card costing exactly <img src="assets/Coin2.png" alt="2 coins"> more and each other player may trash a card from their hand and gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more.</li></ul></li><li>Go in turn order, starting with yourself; this may matter if piles are low.</li><li>The gained cards come from the Supply and are put into discard piles; if there are none left, those cards are not gained. For example if you choose the second option and there is only one Silver in the Supply, the player to your left gets it and no-one else gets one.</li><li>For the third option, you only gain a card if you trashed a card, and only if there is a card available in the Supply with the exact cost required.</li><li>If you do trash a card, you must gain a card if you can.</li><li>You cannot trash a Governor you played to itself, as it is no longer in your hand when you play it (though you can trash another copy of Governor from your hand).</li></ul><ul class="rules"><li>If you play this with Way of the Chameleon and choose the first option, you get +<img src="assets/Coin3.png" alt="3 coins">, and each other player gets +1 Card.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Action', 'Duration', 'Command'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'You may set aside (on this) a non-Duration non-Command Action card from your hand costing up to <img src="assets/Coin4.png" alt="4 coins">. At the start of each of your turns, play that card, leaving it set aside.',
		help: '<ul class="faq"><li>Prince has you play the same cheap action every turn for the rest of the game.</li><li>The turn you play Prince, you set it aside with a non-Duration non-Command Action card from your hand costing <img src="assets/Coin4.png" alt="4 coins"> or less; then every turn after that you play the Action at the start of the turn. Command is a type that appears on cards like this; it has no meaning beyond stopping these cards from playing each other.</li><li>If you don’t set aside an Action card, you’ll discard the Prince from play during Clean-up. Otherwise, Prince will stay in play for the rest of the game.</li><li>When playing the set-aside card, normally this means that you follow its instructions.</li><li>For example, if you set aside a Village, you will get +1 Card and +2 Actions at the start of each of your turns.</li><li>The Action card stays set aside. If the card tries to move itself (e.g. Mining Village), it stays set aside and it fails to move. If the card has a bonus that is conditional on moving itself (such as Pixie, which gives Boons only if it trashes itself), you won’t get its bonus. But if the bonus is not phrased so as to be conditional on the card moving (such as Tragic Hero, which trashes itself and gains a Treasure), you’ll get its bonus.</li><li>With cost-reduction, you can set aside a card that normally costs more than <img src="assets/Coin4.png" alt="4 coins">.</li><li>Cards costing <img src="assets/Potion.png" alt="potion"> or <img src="assets/Debt.png" alt="debt"> can never be set aside with Prince.</li><li>Playing the card each turn doesn’t use up your normal Action play, and is mandatory.</li><li>At the end of the game, Prince and the set aside card are returned to your deck before scoring.</li><li>Prince plays its Action on extra turns from Outpost, Possession, etc.</li><li>If you play this with Throne Room, you can set aside 2 cards on this. You will play both of them at the start of each of your turns. Both the Throne Room and the Prince will stay in play for the rest of the game.</li><li>If you play a Necromancer that plays a Throne Room that plays a Prince twice, the Necromancer will stay in play for the rest of the game.</li></ul><ul class="rules"><li>You ordinarily don’t get to play the set-aside card on the turn when you set it aside.</li><li>However, if you play a Prince via an effect triggered by the start of your turn (e.g. with Piazza and set aside a card, you’ll play the set-aside card on the same turn.</li><li>The start of your turn is part of your Action phase. This matters if you use Prince to play Crown.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b><br>You may play an Avanto from your hand.<hr>This turn, when you play a Silver, you may trash a card from your hand.',
		help: '<ul class="faq"><li>When you play Sauna, you first draw a card and get +1 Action.</li><li>You may then immediately play an Avanto from your hand. This does not take up one of your Actions, including the Action provided by Sauna.</li><li>You can only play an Avanto this way directly after playing the Sauna, not if you played another Action card in between, even if you have a Sauna in play.</li><li>When you play Avanto, you first draw 3 cards.</li><li>You may then immediately play a Sauna from your hand. This does not take up any of your Actions, and Sauna will still give you +1 Action if you play it this way.</li><li>You can only play a Sauna this way directly after playing the Avanto, not if you played another Action card in between, even if you have an Avanto in play.</li><li>You can play Sauna and Avanto in alternation this way, taking up only the Action for the first of the cards you play.</li><li>You can do this until you don’t have the respective card in hand after playing the other.</li><li>When you play a Sauna, you cannot immediately play a Sauna from your hand without using up one Action. The same goes for playing Avanto after Avanto.</li><li>Once you have played a Sauna, you can trash a card from your hand anytime you play a Silver later that turn.</li><li>If you play the same Silver several times, such as with Counterfeit (Dominion: Dark Ages) or Crown (Dominion: Empires), you may trash a card each time you play the Silver.</li><li>You do not have to trash anything when you play a Silver.</li><li>You can decide whether to trash a card every time you play a Silver, you do not have to decide once for the entire turn.</li><li>When you have played several Saunas, or have played the same Sauna multiple time (e.g. with Throne Room), and then play a Silver, you can trash a card from your hand for every time you have played a Sauna. You can still decide to not trash a card each time.</li></ul><ul class="rules"><li>In 2022, Sauna got errata to let its trashing effect not depend on the Sauna being in play, but rather be an effect of having played the Sauna.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: true, cursing: false },
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
		edition: [1],
		cardType: ['Treasure'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: '<img src="assets/Coin2.png" alt="2 coins"><hr>When shuffling this, you may look through your remaining deck, and may put this anywhere in the shuffled cards.',
		help: '<ul class="faq"><li>This is a Treasure worth <img src="assets/Coin2.png" alt="2 coins">.</li><li>When you’re shuffling, and Stash is one of the cards you’re shuffling, you can put it anywhere in your deck.</li><li>You can’t look at the fronts of the cards you’re shuffling; Stash has a different card back so you know where it is.</li><li>If you have multiple copies of Stash, you can clump them together, or spread them out however you want.</li><li>If there are any cards in your deck that aren’t being shuffled, such as when you had fewer than 5 cards left in your deck when you needed to draw a new hand for next turn, you can look through those remaining cards before putting them on top of your newly shuffled deck, though you can’t put Stash in among those remaining cards.</li><li>If a card tells you to shuffle your entire deck, like Inn, and Stash is in your deck, there is no “remaining deck” that isn’t being shuffled, so you don’t get to look at the front of any cards.</li><li>Because Stash has a different back, you’ll be able to tell when it’s in other players’ hands, or set aside for a Haven, and so on.</li></ul><ul class="rules"><li>When you shuffle your entire deck (with e.g. Annex), you can reposition any Stashes in your deck. Any Stashes that you leave in your discard pile are not being shuffled.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
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
		edition: [1],
		cardType: ['Action'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+2 Actions</b><hr>At the start of Clean-up, if you have this and no more than one other Action card in play, you may put this onto your deck.',
		help: '<ul class="faq"><li>When you play this, you draw a card and can play two more Actions this turn.</li><li>At the start of your Clean-up phase, before discarding anything and before drawing for next turn, if you have a Walled Village in play and no more than two Action cards in play (counting the Walled Village), you may put the Walled Village on top of your deck.</li><li>If the only cards you have in play are two Walled Villages, you may put either or both of them on top of your deck.</li><li>Walled Village has to be in play to be put on top of your deck.</li><li>Walled Village only checks how many Action cards are in play when its ability resolves; Action cards you played earlier this turn but which are no longer in play (such as Feast) are not counted, while Action cards still in play from previous turns (duration cards) are counted, as are Action cards that are in play now but may leave play after resolving Walled Village (such as Treasury).</li></ul><ul class="rules"><li>Walled Village’s ability doesn’t care about whether or not it actually helped you avoid terminal collision. If you play Walled Village and two cantrips, you can’t top-deck your Walled Village even though you got no real benefit out of it.</li><li>If you have 3+ Actions in play, but you remove some of them at the start of Clean-up (e.g. by topdecking Alchemist or using Improve), that will let you topdeck your Walled Village.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	}
]
