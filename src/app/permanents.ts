import { Card } from './card'

export const PERMANENTS: Card[] = [
	{
		id: 1125,
		name: 'Advance',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may trash an Action card from your hand. If you do, gain an Action card costing up to <img src="assets/Coin6.png" alt="6 coins">.',
		help: '<ul class="faq"><li>If you do not trash an Action, nothing else happens.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1431,
		name: 'Alliance',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 10,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Province, a Duchy, an Estate, a Gold, a Silver, and a Copper.',
		help: '<ul class="faq"><li>You gain each of those cards that is present in the Supply; you cannot choose not to gain one. You gain them in the order listed.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1031,
		name: 'Alms',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: If you have no Treasures in play, gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">.',
		help: '<ul class="faq"><li>You can only buy this once per turn.</li><li>When you do, if you have no Treasures in play, you gain a card costing up to <img src="assets/Coin4.png" alt="4 coins">.</li><li>The gained card comes from the Supply and is put into your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1126,
		name: 'Annex',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'Look through your discard pile. Shuffle all but up to 5 cards from it into your deck. Gain a Duchy.',
		help: '<ul class="faq"><li>You can do this even if the Duchy pile is empty.</li><li>The chosen cards stay in your discard pile when the other cards are shuffled into your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1032,
		name: 'Ball',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Take your −<img src="assets/Coin1.png" alt="1 coin"> token. Gain 2 cards each costing up to <img src="assets/Coin4.png" alt="4 coins">.',
		help: '<ul class="faq"><li>When you buy this, you take your −<img src="assets/Coin1.png" alt="1 coin"> token, which will cause you to get less the next time you get <img src="assets/Coin.png" alt="coins">.</li><li>Then you gain 2 cards, each costing up to <img src="assets/Coin4.png" alt="4 coins">.</li><li>They can be 2 copies of the same card, or 2 different cards.</li></ul><ul class="rules"><li>This Event may be bought more than once per turn, gaining cards each time; however, the −<img src="assets/Coin1.png" alt="1 coin"> token can only be taken once.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: true, minusDraw: false
		}
	},
	{
		id: 1432,
		name: 'Banish',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Exile any number of cards with the same name from your hand.',
		help: '<ul class="faq"><li>For example, you could Exile three Estates from your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1127,
		name: 'Banquet',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Coppers and a non-Victory card costing up to <img src="assets/Coin5.png" alt="5 coins">.',
		help: '<ul class="faq"><li>You can do this even if the Copper pile is empty.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1433,
		name: 'Bargain',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a non-Victory card costing up to <img src="assets/Coin5.png" alt="5 coins">. Each other player gains a Horse.',
		help: '<ul class="faq"><li>The other players gain their Horses in turn order.</li><li>They cannot decline to gain one.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1033,
		name: 'Bonfire',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 2 Coppers you have in play.',
		help: '<ul class="faq"><li>This only trashes Coppers you have in play, not Coppers from your hand.</li><li>You can trash zero, one, or two cards.</li><li>This does not remove the <img src="assets/Coin.png" alt="coins"> you got from playing those Coppers this turn. For example, with 5 Coppers in play and two Buys, you could pay <img src="assets/Coin3.png" alt="3 coins"> for a Bonfire to trash two of the Coppers, then spend the other <img src="assets/Coin2.png" alt="2 coins"> on a Peasant.</li></ul><ul class="rules"><li>In 2022, Bonfire got errata to only trash Coppers from play.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1034,
		name: 'Borrow',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: <b>+1 Buy</b>. If your −1 Card token isn’t on your deck, put it there and <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.',
		help: '<ul class="faq"><li>You can only buy this once per turn.</li><li>When you do, if your -1 Card token is not on your deck, you put it on your deck and get +<img src="assets/Coin1.png" alt="1 coin">.</li><li>The -1 Card token will cause you to draw one less card the next time you draw cards.</li></ul><ul class="rules"><li>You do not get +<img src="assets/Coin1.png" alt="1 coin"> if you buy Borrow when your -1 Card token is already on your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: true
		}
	},
	{
		id: 1434,
		name: 'Commerce',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold per differently named card you’ve gained this turn.',
		help: '<ul class="faq"><li>First count how many differently named cards you have gained this turn, then gain that many Golds. For example, if you have gained two Provinces, a Silver, and a Horse, you would gain three Golds.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1128,
		name: 'Conquest',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Silvers.<br><b>+1<img src="assets/VP.png" alt="victory point"></b> per Silver you’ve gained this turn.',
		help: '<ul class="faq"><li>This counts the two Silvers it gives you (provided that there were Silvers left to gain).</li><li>For example, with <img src="assets/Coin12.png" alt="12 coins"> and 2 Buys and having gained no Silvers earlier in the turn, you could buy Conquest twice, getting two Silvers, then +2<img src="assets/VP.png" alt="victory points">, then two more Silvers, then +4<img src="assets/VP.png" alt="victory points">.</li></ul><ul class="rules"><li>If you exchange any gained Silvers for Changelings, they will still count for Conquest.</li><li>Unlike Triumph and Dominate, this will still give you <img src="assets/VP.png" alt="victory points"> even if the Silvers are empty when you buy it, as long as you gained Silvers earlier in the turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1435,
		name: 'Delay',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may set aside an Action card from your hand. At the start of your next turn, play it.',
		help: '<ul class="faq"><li>Once you set aside the Action card, you have to play it at the start of your next turn.</li><li>If you do multiple things at the start of your turn, you choose the order in which to do them.</li><li>Playing the Action card at the start of your next turn does not use up an Action.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1129,
		name: 'Delve',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Gain a Silver.',
		help: '<ul class="faq"><li>Each purchase of Delve gives you back the Buy you used on it.</li><li>For example, if you have <img src="assets/Coin7.png" alt="7 coins">, you can Delve, then Delve, then buy a card for <img src="assets/Coin3.png" alt="3 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1436,
		name: 'Demand',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Horse and a card costing up to <img src="assets/Coin4.png" alt="4 coins">, both onto your deck.',
		help: '<ul class="faq"><li>The Horse goes onto your deck first, then the card costing up to <img src="assets/Coin4.png" alt="4 coins">.</li></ul><ul class="rules"><li>The Horse is gained before the second card is chosen, which means that cards like Destrier are reduced in cost.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1437,
		name: 'Desperation',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: You may gain a Curse. If you do, <b>+1 Buy</b> and <b>+<img src="assets/Coin2.png" alt="2 coins"></b>.',
		help: '<ul class="faq"><li>If the Curse pile is empty, you fail to gain one and do not get +1 Buy and +<img src="assets/Coin2.png" alt="2 coins">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1130,
		name: 'Dominate',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 14,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Province. If you do, <b>+9<img src="assets/VP.png" alt="victory points"></b>.',
		help: '<ul class="faq"><li>This does nothing once the Province pile is empty.</li></ul><ul class="rules"><li>If you exchange the Province with a Silver or a Changeling, you still get +9<img src="assets/VP.png" alt="victory points">. But if you Possess a player and make them buy Dominate, no one gets +9<img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1131,
		name: 'Donate',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'At the start of your next turn, first, put your deck and discard pile into your hand, trash any number of cards from it, then shuffle the rest into your deck and draw 5 cards.',
		help: '<ul class="faq"><li>Effects that happen due to trashing cards (such as Rocks’) will happen before you shuffle.</li><li>Regardless of what your original hand size was, you draw 5 cards after trashing.</li><li>Unlike other “start of turn” effects (such as Archive or Clerk), Donate happens first.</li><li>So if you have a Curse set aside with Archive, you can’t put it in your hand, to trash it to Donate. And if you have any Clerks in your starting hand, you can’t play them before shuffling your hand with Donate.</li><li>If the game ends before the start of your next turn, you won’t get to trash any cards.</li><li>Anything that cares about shuffling (e.g. Star Chart or Order of Masons) can be used when you shuffle your hand into your deck.</li><li>Donate only makes you shuffle your hand. So if any cards end up in your discard pile (e.g. you discard a Market Square and gain a Gold), those cards won’t get shuffled into your deck (unless you shuffled less than 5 cards into your deck, in which case you’ll shuffle your discard pile).</li><li>If you trash a Fortress, it goes into the trash, then back to your hand, and then you shuffle your hand into your deck.</li><li>If you buy Donate, and then another player plays Possession, they can make you trash any number of your cards. Those cards are set aside until the end of the turn, after you draw your hand in Clean-up.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1438,
		name: 'Enclave',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Exile a Duchy from the Supply.',
		help: '<ul class="faq"><li>The Duchy goes directly from the Duchy pile to your Exile mat.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1439,
		name: 'Enhance',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a non-Victory card from your hand, to gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than it.',
		help: '<ul class="faq"><li>If you trash a card, you must gain a card costing up to <img src="assets/Coin2.png" alt="2 coins"> more than it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1035,
		name: 'Expedition',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Draw 2 extra cards for your next hand.',
		help: '<ul class="faq"><li>This increases the number of cards you draw in Clean-up of the same turn.</li><li>It is cumulative.</li><li>Normally you draw 5 cards; after an Expedition you would draw 7, after two Expeditions you would draw 9, and so on.</li><li>It only applies for the turn you buy it.</li><li>If you play Outpost (from Seaside), getting an extra turn with only 3 cards, and also buy Expedition, you add the 2 extra cards onto the base of 3 cards, for 5 cards total.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1036,
		name: 'Ferry',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Move your −<img src="assets/Coin2.png" alt="2 coins"> cost token to an Action Supply pile. (Cards from that pile cost <img src="assets/Coin2.png" alt="2 coins"> less on your turns, but not less than <img src="assets/Coin0.png" alt="0 coins">.)',
		help: '<ul class="faq"><li>When you buy this, you move your -<img src="assets/Coin2.png" alt="2 coins"> cost token to any Action Supply pile.</li><li>This token makes cards from that pile cost less, but not less than <img src="assets/Coin0.png" alt="0 coins">, on your turns.</li></ul><ul class="rules"><li>Other players’ cards from the tokened pile are also reduced in cost during your turns.</li><li>For split piles, the types of a pile are determined solely by the types on its randomizer card. For example, the Odysseys pile has the types Action-Odyssey, even though the cards themselves have other types.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1440,
		name: 'Gamble',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Reveal the top card of your deck. If it’s a Treasure or Action, you may play it. Otherwise, discard it.',
		help: '<ul class="faq"><li>Playing the card is optional and does not use up an Action.</li><li>If you do not play the card – whether or not it is an Action or Treasure – discard it.</li></ul><ul class="rules"><li>If Gamble plays a card for you that draws additional Action or Treasure cards into your hand, you can’t play the cards it draws.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1037,
		name: 'Inheritance',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Once per game: Set aside a non-Command Action card from the Supply costing up to <img src="assets/Coin4.png" alt="4 coins">. Move your Estate token to it.<br>(During your turns, Estates are also Command Actions with “Play the card with your Estate token, leaving it there.”)',
		help: '<ul class="faq"><li>You can only buy this once per game. When you do, set aside a non-Command Action card from the Supply that costs up to <img src="assets/Coin4.png" alt="4 coins">, and put your Estate token on it (the one depicting a house).</li><li>This is not gaining a card, and does not count for things that care about gaining, such as Treasure Hunter; however at the end of the game, include the card in your deck when scoring.</li><li>For the rest of the game, on your turns, Estates are also Action cards (in addition to still being Victory cards), and when you play one, it plays the card you set aside, leaving it set aside. If that effect tries to move the set aside card, it fails. If the set aside card has a “while this is in play” or “when discarded from play” effect, that will not do anything; the card is never in play.</li><li>Leave the Estate in play until the Clean-up of the turn the card it played would have left play. Normally that means you will discard it that turn, but if the card is a Duration card, it will stay out like the Duration card would have, and if the card is something like Throne Room and used to play a Duration card, it will stay out the same way Throne Room itself would have.</li><li>If the set aside card is from a pile you have a +1 Action or similar token on, you will get that effect when playing it.</li><li>All Estates are affected, including ones in the Supply and ones other players have; for example this means you could gain one with Seaway.</li><li>The set aside card does not need to continue costing <img src="assets/Coin4.png" alt="4 coins"> or less; it only has to when Inheritance is bought.</li><li>The card cannot be a Command card; Command cards are certain cards that can play other cards without moving them, including Band of Misfits, Overlord, and Captain.</li></ul><ul class="rules"><li>Inheritance affects Estates in the trash and in other players’ decks and hands. This means that they can be gained with Lurker, discarded by Rabble, and so on.</li><li>Since it is no one’s turn when scoring, this means that Estates will not count for Landmarks/Victory cards that care about Actions (like Orchard or Vineyard).</li><li>Estates do not acquire the abilities of the card with your Estate token on it; they just cause it to be played when you play the Estate. This means that, for example, gaining an Estate doesn’t activate any on-gain effects of the Action card you’ve Inherited; Inheriting a Crown or Werewolf does not allow you to play Estates in the Buy or Night phases; Inheriting a Reaction card does not allow you to react with Estates the way you would react with the Reaction card; etc.</li><li>Under rare circumstances (involving a combination of certain Reaction cards, Way of the Mouse, and Vassal) it can be possible to play an Estate (if it’s an Action card) on another player’s turn. Whether or not an Estate is an Action card on another player’s turn depends on whether they have bought Inheritance, not whether you have. If you do play an Estate on another player’s turn, it plays the card with your Estate token on it as usual, not the card with their Estate token.</li><li>If your opponent has bought Inheritance but you haven’t, your Estates still count as Actions on their turns, but if you somehow manage to play one it doesn’t do anything.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1441,
		name: 'Invest',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Exile an Action card from the Supply. While it’s in Exile, when another player gains or Invests in a copy of it, <b>+2 Cards</b>.',
		help: '<ul class="faq"><li>It only matters if the card you Exile is an Action, not if the whole pile is.</li><li>While the card is Exiled, you draw 2 cards each time another player gains a copy of it, or uses Invest to Exile a copy of it.</li><li>This is not optional.</li><li>This is cumulative; if you Invest twice in the same card, you will get +4 Cards each time someone else gains a copy or Invests in it.</li><li>If the game has another way to Exile cards, other Exiled cards were not Invested and do not draw you cards. Keep the Invested ones separate from the other ones; for example, turn them sideways, or put them half under the mat. Those other Exiled cards were not Invested and do not draw you cards.</li><li>Cards Exiled with Invest can be discarded from the mat in the normal way, by gaining another copy of the card; then you will no longer draw cards for players gaining/Investing in them.</li></ul><ul class="rules"><li>If you have 2 copies of a card in exile, and only one of them was exiled with Invest, you can use Transport to topdeck the non-Invested copy.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1038,
		name: 'Lost Arts',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Move your +1 Action token to an Action Supply pile. (When you play a card from that pile, you first get <b>+1 Action</b>.)',
		help: '<ul class="faq"><li>When you buy this, you move your +1 Action token to any Action Supply pile.</li><li>This token gives you +1 Action whenever you play a card from that pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: true, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1442,
		name: 'March',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Look through your discard pile. You may play an Action card from it.',
		help: '<ul class="faq"><li>Normally you cannot look through your discard pile, so you cannot look to see if you want to buy March or not.</li><li>Once you buy March, you look through your discard pile, and then have the option of playing an Action card from it.</li><li>This does not use up an Action.</li></ul><ul class="rules"><li>If you buy March and play an Action card that draws additional cards into your hand, you can’t play any Action or Treasure cards you drew (under ordinary circumstances). If you draw Night cards, you can play them during your upcoming Night phase.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1039,
		name: 'Mission',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: If the previous turn wasn’t yours, take another turn after this one, during which you can’t buy cards.',
		help: '<ul class="faq"><li>You can only buy this once per turn.</li><li>When you do, if the previous turn was not yours - if it was another player’s turn before this turn - you take another turn after this turn ends.</li><li>The extra turn is completely normal except that you cannot buy cards during it.</li><li>You can still buy Events, and play cards, and gain cards in ways other than buying them (such as gaining a Silver from Amulet), and exchange Travellers.</li><li>Buying Mission during a turn granted by Mission will not give you another turn, because the previous turn was yours.</li></ul><ul class="rules"><li>During a Mission turn, you will be unable to buy cards from the Black Market.</li><li>If you buy Mission the same turn you play Outpost, and the previous turn wasn’t yours, then you will get two extra turns and can choose whether the Mission turn or the Outpost turn happens first. Either way, the first extra turn will start with a 3-card hand, and the other will start with a 5-card hand.</li><li>Buying Mission does nothing if you were Possessed on your previous turn.</li><li>If the previous player played multiple Possessions, and tells you to buy a Mission on your first Possession turn, you get to decide whether to take the Mission turn first, or one of the other Possession turns; Possession does not grant control between turns, making the choice your decision.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1040,
		name: 'Pathfinding',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'Move your +1 Card token to an Action Supply pile. (When you play a card from that pile, you first get <b>+1 Card</b>.)',
		help: '<ul class="faq"><li>When you buy this, you move your +1 Card token to any Action Supply pile.</li><li>This token gives you +1 Card whenever you play a card from that pile.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: true, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1041,
		name: 'Pilgrimage',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: Turn your Journey token over (it starts face up); then if it’s face up, choose up to 3 differently named cards you have in play and gain a copy of each.',
		help: '<ul class="faq"><li>At the start of the game, place your Journey token (the one with the boot) face up.</li><li>You can only buy this once per turn.</li><li>When you do, turn your Journey token over.</li><li>Then if it is face down, nothing more happens.</li><li>If it is face up, choose up to 3 cards you have in play with different names and gain a copy of each in any order.</li><li>The copies you gain come from the Supply and are put into your discard pile.</li><li>So, every other time you buy this, you will gain up to 3 cards.</li><li>It does not matter what turned over the Journey token; you could turn it face down with Ranger, then face up with Pilgrimage.</li></ul><ul class="rules"><li>You cannot gain copies of cards not from the Supply, such as Mercenary or Disciple.</li><li>You can gain cards with <img src="assets/Debt.png" alt="debt"> or <img src="assets/Potion.png" alt="potion"> in their cost.</li><li>You choose the cards to gain before gaining any of them. Once chosen, you gain each card even if it leaves play and cannot choose new cards that are put into play.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: true, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1042,
		name: 'Plan',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Move your Trashing token to an Action Supply pile. (When you gain a card from that pile, you may trash a card from your hand.)',
		help: '<ul class="faq"><li>When you buy this, you move your Trashing token (the one depicting a tombstone) to any Action Supply pile.</li><li>This token will let you trash a card from your hand when gaining a card from that pile.</li></ul><ul class="rules"><li>Plan got errata in 2022 so that the trashing token activates whenever you gain a card from the chosen pile, whether you buy it or gain it in some other way.</li><li>Even though you can only put the Trashing token on an Action Supply pile, the card you gain from the pile doesn’t need to be an Action. So if you put your Trashing token on the Odysseys and then gain a Sunken Treasure, you may still trash a card from your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1443,
		name: 'Populate',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 10,
			debt: 0,
			potion: 0
		},
		text: 'Gain one card from each Action Supply pile.',
		help: '<ul class="faq"><li>You gain the top card from each Action pile in the Supply; you do not gain non-supply cards like Horse, or non-Action cards like Stockpile.</li><li>If there are different cards in an Action pile, like the Knights (from Dark Ages), you just get the top one.</li><li>If a pile is empty, you do not gain one of those. Obviously.</li><li>You choose the order to gain the cards, which sometimes matters; normally you can pick up a card from each pile and then choose what order to gain them in.</li><li>For piles with different cards, the pile is an Action pile if the randomizer is an Action; so, Castles (from Empires) are not one even if Small Castle or Opulent Castle are on top.</li><li>If you gain Cavalry or Villa (from Empires) with Populate, you return to your Action phase right then, but still finish gaining cards from Populate before doing more things.</li></ul><ul class="rules"><li>If you bought Inheritance, Estates will be Action cards, but Populate won’t gain an Estate, because the Estate pile is still a Victory Supply pile.</li><li>Populate gains you the top card of an Action Supply pile, even if the current top card isn’t an Action (e.g. it’s Fortune or Territory). You can check the types of a kingdom pile by checking its randomizer.</li><li>Ruins are an Action Supply pile, which means that Populate will gain you the Ruins on top.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1444,
		name: 'Pursue',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b>Name a card. Reveal the top 4 cards from your deck. Put the matches back and discard the rest.',
		help: '<ul class="faq"><li>You can name a card that is not in the game; all four cards will be discarded.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1043,
		name: 'Quest',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may discard an Attack, two Curses, or six cards. If you do, gain a Gold.',
		help: '<ul class="faq"><li>You may either discard an Attack to gain a Gold, or discard two Curses to gain a Gold, or discard any 6 cards to gain a Gold.</li><li>The gained Gold is put into your discard pile.</li><li>You may choose to discard 6 cards despite not having enough cards in hand; you will discard everything and not gain a Gold.</li><li>You may choose to discard two Curses despite only having one; you will discard that Curse and not gain a Gold.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1044,
		name: 'Raid',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Silver per Silver you have in play. Each other player puts their –1 Card token on their deck.',
		help: '<ul class="faq"><li>This Event is like an Attack, but buying it is not playing an Attack, and so cannot be responded to with cards like Moat and Caravan Guard.</li><li>When you buy this, you gain a Silver for each Silver you have in play; for example, with four Silvers in play, you would gain four Silvers.</li><li>The Silvers go to your discard pile; if there aren’t enough left, just take what is left.</li><li>Then each other player puts his -1 Card token on top of his deck, which will cause those players to draw one less card the next time they draw cards.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: true
		}
	},
	{
		id: 1445,
		name: 'Reap',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Set it aside. If you do, at the start of your next turn, play it.',
		help: '<ul class="faq"><li>This means you will start your next turn with a Gold in play and +<img src="assets/Coin3.png" alt="3 coins"> from it.</li><li>You discard the Gold that turn as normal.</li><li>If multiple things happen at the start of your turn, you can order them.</li><li>This does not skip your Action phase.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1446,
		name: 'Ride',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Horse.',
		help: '<ul class="faq"><li>You simply gain a Horse.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1132,
		name: 'Ritual',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Curse. If you do, trash a card from your hand.<br><b>+1<img src="assets/VP.png" alt="victory point"></b> per <img src="assets/Coin1.png" alt="1 coin"> it cost.',
		help: '<ul class="faq"><li>This does nothing once the Curse pile is empty.</li><li>This only gives you +1<img src="assets/VP.png" alt="victory point"> per <img src="assets/Coin1.png" alt="1 coin"> the trashed card cost; it does not give anything for <img src="assets/Debt.png" alt="debt"> or <img src="assets/Potion.png" alt="potion"> in costs.</li></ul><ul class="rules"><li>Unlike similar cards (like Enhance and Salvager), Ritual is written in the past tense and therefore cares about the cost of the card at the instant it is trashed, rather than checking it later, when its cost may have changed. For example, if you trash a Wayfarer (which costs <img src="assets/Coin0.png" alt="0 coins"> from the Curse), then discard a Market Square to gain a Gold, Ritual will still give 0<img src="assets/VP.png" alt="victory points"> and not 6<img src="assets/VP.png" alt="victory points">, even though Wayfarer now costs <img src="assets/Coin6.png" alt="6 coins">. This seems likely to change in future errata.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1133,
		name: 'Salt the Earth',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png" alt="victory point"></b><br>Trash a Victory card from the Supply.',
		help: '<ul class="faq"><li>If the trashed card does something when trashed (such as Crumbling Castle), you do that thing.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1045,
		name: 'Save',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 1,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: <b>+1 Buy</b>. Set aside a card from your hand, and put it into your hand at end of turn (after drawing).',
		help: '<ul class="faq"><li>You can only buy this once per turn.</li><li>When you do, you get +1 Buy (letting you buy another Event or a card afterwards), set aside a card from your hand face down (the other players do not get to see it), and put it into your hand at the end of the turn, after drawing your hand for the next turn. For example you might set aside an unplayed Copper, and then after drawing your 5 cards for next turn, add the Copper to your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1046,
		name: 'Scouting Party',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Look at the top 5 cards of your deck. Discard 3 and put the rest back in any order.',
		help: '<ul class="faq"><li>When you buy this you get +1 Buy (letting you buy another Event or a card afterwards).</li><li>Then look at the top 5 cards of your deck, discarding 3 and putting the rest on top of your deck in any order.</li><li>If there are fewer than 5 cards even after shuffling, you still discard 3 of them; if there are only 3 cards left between your deck and discard pile, all 3 will be discarded.</li><li>Scouting Party is unaffected by the -1 Card token; if it is on top of your deck, replace it after resolving Scouting Party.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1047,
		name: 'Seaway',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain an Action card costing up to <img src="assets/Coin4.png" alt="4 coins">. Move your +1 Buy token to its pile. (When you play a card from that pile, you first get <b>+1 Buy</b>.)',
		help: '<ul class="faq"><li>When you buy this, first you gain an Action card costing up to <img src="assets/Coin4.png" alt="4 coins">. The Action card comes from the Supply and is put into your discard pile.</li><li>Then move your +1 Buy token to the pile the Action card came from.</li><li>The token gives you +1 Buy when playing a card from that pile.</li><li>It only matters how much the card costs that you gain; the cost is not checked later. For example you can play Bridge Troll, then use Seaway to gain a Bridge Troll (currently costing <img src="assets/Coin4.png" alt="4 coins"> due to its own effect), and the token will stay there even when Bridge Troll costs <img src="assets/Coin5.png" alt="5 coins"> later.</li><li>You can use Seaway to gain Sir Martin (from Dark Ages) when he’s on top of the Knights pile; then your +1 Buy token will be on the Knights pile, even though any remaining Knights will cost <img src="assets/Coin5.png" alt="5 coins">.</li><li>You cannot use Seaway on an empty pile just to move the +1 Buy token; you have to pick a card you can gain.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: true, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1447,
		name: 'Seize the Day',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per game:<br>Take an extra turn after this one.',
		help: '<ul class="faq"><li>The extra turn is like a normal turn, except that it does not count for the tiebreaker.</li></ul><ul class="rules"><li>Unlike Outpost and Mission, Seize the Day doesn’t check if the previous turn was another player’s. So if you take an extra turn with Outpost, you can buy Seize the Day on the extra turn, and take a 3rd turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1448,
		name: 'Stampede',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If you have 5 or fewer cards in play, gain 5 Horses onto your deck.',
		help: '<ul class="faq"><li>It does not matter how many cards you played that turn, only how many you have in play when buying Stampede.</li><li>If there are fewer than 5 Horses left in the pile, just gain as many as you can.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: true, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1134,
		name: 'Tax',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Add <img src="assets/Debt2.png" alt="2 debt"> to a Supply pile.<hr>Setup: Add <img src="assets/Debt1.png" alt="1 debt"> to each Supply pile. When a player gains a card in their Buy phase, they take the <img src="assets/Debt.png" alt="debt"> from its pile.',
		help: '<ul class="faq"><li>Every Supply pile starts with <img src="assets/Debt1.png" alt="1 debt">, including Kingdom cards and basic cards like Silver.</li><li>The Event itself, when bought, adds <img src="assets/Debt2.png" alt="2 debt"> to a single pile, whether or not that pile has any <img src="assets/Debt.png" alt="debt"> on it already.</li><li>The <img src="assets/Debt.png" alt="debt"> is taken by the next player to gain a card from that pile in their Buy phase; gaining a card when it’s not their Buy phase leaves the <img src="assets/Debt.png" alt="debt"> on the pile.</li></ul><ul class="rules"><li>Tax got errata in 2022 to trigger when you gain a card in your Buy phase.</li><li>This works if you gain a card by buying it, or if you gain a card in another way (such as Advance or Charm).</li><li>If you gain a Black Market, you can play it with Innovation before taking the <img src="assets/Debt.png" alt="debt"> from its pile.</li><li>If you gain a card during another player’s Buy phase (e.g. with Messenger), you won’t take the <img src="assets/Debt.png" alt="debt"> on its pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1449,
		name: 'Toil',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>You may play an Action card from your hand.',
		help: '<ul class="faq"><li>Playing an Action card this way does not use up an Action.</li></ul><ul class="rules"><li>You can’t play Treasure cards in your Buy phase after buying something, so if you draw any Treasure cards as a result of the Action you play with Toil, you will ordinarily not be able to play them; if you draw any Action cards, you can play them by buying Toil again.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1048,
		name: 'Trade',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 2 cards from your hand.<br>Gain a Silver per card you trashed.',
		help: '<ul class="faq"><li>You may trash zero, one, or two cards from your hand.</li><li>For each card you actually trashed, you gain a Silver, putting it into your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1049,
		name: 'Training',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Move your +<img src="assets/Coin1.png" alt="1 coin"> token to an Action Supply pile. (When you play a card from that pile, you first get <b>+<img src="assets/Coin1.png" alt="1 coin"></b>.)',
		help: '<ul class="faq"><li>When you buy this, you move your +<img src="assets/Coin1.png" alt="1 coin"> token to any Action Supply pile.</li>This token gives you +<img src="assets/Coin1.png" alt="1 coin"> whenever you play a card from that pile.</ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: true,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1450,
		name: 'Transport',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Exile an Action card from the Supply; or put an Action card you have in Exile onto your deck.',
		help: '<ul class="faq"><li>This can take Action cards from your Exile mat that were put there by other cards.</li><li>It only matters if the card is an Action, not if the whole pile is.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1050,
		name: 'Travelling Fair',
		set: 'Adventures',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Buys</b><br>When you gain a card this turn, you may put it onto your deck.',
		help: '<ul class="faq"><li>When you buy this, you get +2 Buys (letting you buy more Events or cards afterwards).</li><li>Then for the rest of the turn, whenever you gain a card, you may put it on your deck.</li><li>This works on cards you buy, as well as cards gained other ways, such as gaining cards with Ball.</li><li>It does not work on Travellers exchanged for other cards; exchanging is not gaining.</li><li>Putting the card on your deck is optional each time you gain a card that turn; you could put some on top and let the others go to your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1135,
		name: 'Triumph',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 5,
			potion: 0
		},
		text: 'Gain an Estate. If you did, <b>+1<img src="assets/VP.png" alt="victory point"></b> per card you’ve gained this turn.',
		help: '<ul class="faq"><li>You get +1<img src="assets/VP.png" alt="victory point"> per card you have gained, including the Estate, and any other cards bought or gained other ways; you do not get <img src="assets/VP.png" alt="victory points"> for Events bought.</li><li>Once the Estate pile is empty, this does nothing.</li></ul><ul class="rules"><li>After gaining an Estate from this, if you gain a Curse from another player’s Black Cat, that will counts as a card you’ve gained this turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1136,
		name: 'Wedding',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 3,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png" alt="victory point"></b><br>Gain a Gold.',
		help: '<ul class="faq"><li>You get the <img src="assets/VP.png" alt="victory point"> even if there are no Golds left.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1137,
		name: 'Windfall',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If your deck and discard pile are empty, gain 3 Golds.',
		help: '<ul class="faq"><li>If there are fewer than 3 Golds in the pile, just gain the remaining Golds.</li></ul>',
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
		name: 'Summon',
		set: 'Promo',
		edition: [1],
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain an Action card costing up to <img src="assets/Coin4.png" alt="4 coins">. Set it aside. If you do, then at the start of your next turn, play it.',
		help: '<ul class="faq"><li>When you buy this, you gain an Action card costing up to <img src="assets/Coin4.png" alt="4 coins"> from the Supply and set it aside face up.</li><li>If you did set it aside, then at the start of your next turn, play that Action card. This doesn’t use up your default Action for the turn.</li><li>In order to remember to play the card on your next turn, you may want to turn it sideways or diagonally, turning it right side up when you play it.</li><li>If you move the Action card after you gain it but before you set it aside (e.g. by putting it on top of your deck with Watchtower, from Dominion: Prosperity), then Summon will “lose track” of it and be unable to set it aside; in that case you will not play it at the start of your next turn.</li><li>If you use Summon to gain a Nomad Camp (from Dominion: Hinterlands), Summon will know to find the Nomad Camp on your deck, so you will set it aside in that case (unless you have moved it elsewhere via another ability).</li></ul><ul class="rules"><li>The Summoned card is discarded during your Clean-up phase once its effects are resolved like a typical Action card, as it has been brought into play by the effect of Summon.</li><li>If you are being Possessed, and the player to your right tells you to Summon a card, they gain the card, which does not get set aside, nor played at the start of their turn, instead staying in their discard pile.</li><li>If you Summon a Hireling, you will draw a card when you play it, since it will still be the start of your turn.</li><li>Summon will fail to move a card if it moves away, and then moves back to the same place. For example, if you gain an Experiment, exile it to Gatekeeper, then gain the second Experiment and discard the first Experiment from Exile, Summon will still fail to set aside the Experiment, even though it’s still in your discard pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1138,
		name: 'Aqueduct',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Treasure, move <b>1<img src="assets/VP.png" alt="victory point"></b> from its pile to this. When you gain a Victory card, take the <img src="assets/VP.png" alt="victory points"> from this.<hr>Setup: Put <b>8<img src="assets/VP.png" alt="victory points"></b> on the Silver and Gold piles.',
		help: '<ul class="faq"><li>If you gain a card that is both a Treasure and a Victory card, such as Humble Castle, you can resolve the abilities in either order.</li></ul><ul class="rules"><li>Aqueduct only puts <img src="assets/VP.png" alt="victory points"> on Silver and Gold, but if you gain a different Treasure in the Supply that has <img src="assets/VP.png" alt="victory points"> on it, you’ll move 1<img src="assets/VP.png" alt="victory point"> to Aqueduct. For example:<ul><li>If you have Capitalism and then gain a Farmers’ Market, you’ll move 1<img src="assets/VP.png" alt="victory point"> from the pile onto Aqueduct.</li><li>Action Supply piles can have <img src="assets/VP.png" alt="victory points"> on them due to Defiled Shrine. If you rotate to e.g. Sunken Treasure, then gaining it would move 1<img src="assets/VP.png" alt="victory point"> to Aqueduct.</li></ul></li><li>If the card you gain is both a Treasure and an Action (because of Capitalism, or because it’s Crown), you move 1<img src="assets/VP.png" alt="victory point"> each to Aqueduct and Defiled Shrine. If there’s only 1<img src="assets/VP.png" alt="victory point"> on the pile, you choose which Landmark to move it to.</li><li>If you gain a Treasure from somewhere other than the Supply (e.g. gaining a Gold from the trash with Treasurer), you’ll still move the <img src="assets/VP.png" alt="victory point"> tokens from that card’s pile.</li><li>If gaining a Victory card causes you to gain a Treasure (e.g. Hoard makes you gain a Gold), you can move the <img src="assets/VP.png" alt="victory point"> from the Treasure pile to Aqueduct, and then immediately take them.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1139,
		name: 'Arena',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, you may discard an Action card. If you do, take <b>2<img src="assets/VP.png" alt="victory points"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png" alt="victory points"></b> here per player.',
		help: '<ul class="faq"><li>With Villa it is possible for your Buy phase to start twice or more in a turn; you can make use of Arena each time.</li></ul><ul class="rules"><li>You can discard an Action card even if there’s no more <img src="assets/VP.png" alt="victory points"> on this, which can be useful with Village Green.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1140,
		name: 'Bandit Fort',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−2<img src="assets/VP.png" alt="victory points"></b> for each Silver and each Gold you have.',
		help: '<ul class="faq"><li>For example with 3 Silvers and 1 Gold, you would get −8<img src="assets/VP.png" alt="victory points">.</li><li>Scores can go negative.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1141,
		name: 'Basilica',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a card in your Buy phase, if you have <img src="assets/Coin2.png" alt="2 coins"> or more left, take <b>2<img src="assets/VP.png" alt="victory points"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png" alt="victory points"></b> here per player.',
		help: '<ul class="faq"><li>This happens each time you gain a card in your Buy phase, and works on cards gained via buying them, and cards gained other ways.</li><li>For example with <img src="assets/Coin4.png" alt="4 coins"> and 3 Buys, you could buy Copper, then Copper, then Silver, taking 2<img src="assets/VP.png" alt="victory points">, then 2<img src="assets/VP.png" alt="victory points">, then none. And if you play a Cursed Gold, you’ll get 2<img src="assets/VP.png" alt="victory points"> from the Curse.</li><li>If you gain a card while you have <img src="assets/Coin0.png" alt="0 coins">, and gaining the card causes you to get +<img src="assets/Coin2.png" alt="2 coins"> (e.g. you gained a Nomads), that will let you take 2<img src="assets/VP.png" alt="victory points"> from this.</li><li>If you buy a card that allows you to overpay, you have to pay the extra <img src="assets/Coin.png" alt="coins"> before you gain it. This could prevent you from getting the <img src="assets/VP.png" alt="victory points"> from this.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1142,
		name: 'Baths',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you end your turn without having gained a card, take <b>2<img src="assets/VP.png" alt="victory points"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png" alt="victory points"></b> here per player.',
		help: '<ul class="faq"><li>Any way you gain a card will stop you from getting <img src="assets/VP.png" alt="victory points"> from this that turn.</li></ul><ul class="rules"><li>On a Possession turn, the Possessed player is the one to take 2<img src="assets/VP.png" alt="victory points"> from this, because they cannot gain any cards on that turn.</li><li>If a player ends the game on a turn without gaining any cards (such as by playing a Witch and emptying the Curse pile), they will still get the <img src="assets/VP.png" alt="victory points"> from Baths, as the end-of-game check happens after the turn is ended.</li><li>Exchanging a card does not count as gaining a card. As an example, if your entire turn is playing a Bat, trashing two cards, and exchanging for a Vampire, you will get the <img src="assets/VP.png" alt="victory points"> from Baths.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1143,
		name: 'Battlefield',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Victory card, take <b>2<img src="assets/VP.png" alt="victory points"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png" alt="victory points"></b> here per player.',
		help: '<ul class="faq"><li>You take the <img src="assets/VP.png" alt="victory points"> whether you bought the Victory card or gained it another way.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1144,
		name: 'Colonnade',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain an Action card in your Buy phase, if you have a copy of it in play, take <b>2<img src="assets/VP.png" alt="victory points"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png" alt="victory points"></b> here per player.',
		help: '<ul class="faq"><li>For example with Settlers in play, buying another Settlers gets you 2<img src="assets/VP.png" alt="victory points"> from here.</li><li>Cards from the same pile are not necessarily copies of each other; for example Bustling Village is not a copy of Settlers.</li></ul><ul class="rules"><li>In 2022, Colonnade got errata to care about any Action that was gained in your Buy phase, and not just Actions that were bought.</li><li>You get 2<img src="assets/VP.png" alt="victory points"> for each copy of the Action you buy, <em>not</em> for each copy you have in play.</li><li>Before the 2019 Errata, a Band of Misfits or Overlord in play would count as a copy of whichever Action it was emulating (unless its emulation was prevented by an Enchantress). This no longer applies, as under the new rules, the only thing in play is the Band of Misfits or Overlord, rather than the card they are playing.</li><li>If gaining an Action allows you to immediately play it (e.g. you gained a Trail, or you use Innovation), that will let you take 2<img src="assets/VP.png" alt="victory points"> from this.</li><li>If you have bought Inheritance, Estates count as Actions on your turn, and therefore will give you 2<img src="assets/VP.png" alt="victory points"> when bought with an Estate in play.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1145,
		name: 'Defiled Shrine',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain an Action, move <b>1<img src="assets/VP.png" alt="victory point"></b> from its pile to this. When you gain a Curse in your Buy phase, take the <img src="assets/VP.png" alt="victory points"> from this.<hr>Setup: Put <b>2<img src="assets/VP.png" alt="victory points"></b> on each non-Gathering Action Supply pile.',
		help: '<ul class="faq"><li>Note that this triggers on gaining an Action at any time, but only on gaining Curse during the Buy phase; gaining Curse at other times will not get you any <img src="assets/VP.png" alt="victory points">.</li><li><img src="assets/VP.png" alt="Victory point"> tokens will go on the Ruins pile (from Dominion: Dark Ages) when used, but not on Farmers’ Market, Temple, or Wild Hunt (the three Action - Gathering cards).</li></ul><ul class="rules"><li>Although Defiled Shrine itself does not place <img src="assets/VP.png" alt="victory point"> tokens on Gathering Action Supply piles, it will still move <img src="assets/VP.png" alt="victory point"> tokens off the supply piles when you gain one of them.</li><li>However, when you gain a Temple, you can take all the <img src="assets/VP.png" alt="victory points"> on it before attempting to send one to Defiled Shrine.</li><li>If other Action Supply piles are added to the game during setup (e.g. Looters adding the Ruins pile, or Young Witch adding an Action Supply pile as its Bane), those piles starts with 2<img src="assets/VP.png" alt="victory points">.</li><li>If you remove an Action from the Supply without gaining it (e.g. you exile it with Camel Train), the <img src="assets/VP.png" alt="victory point"> stays on the pile.</li><li>If you gain an Action from the trash (with e.g. Lurker), you’ll move 1<img src="assets/VP.png" alt="victory point"> from its pile onto Defiled Shrine.</li><li>With certain split piles, you can send Defiled Shrine’s <img src="assets/VP.png" alt="victory points"> onto Aqueduct instead. For example, if you rotate the Odysseys to Sunken Treasure, then gaining a Sunken Treasure will move 1<img src="assets/VP.png" alt="victory point"> to Aqueduct.</li><li>Defiled Shrine got errata in 2022 so that you take its <img src="assets/VP.png" alt="victory points"> when you gain a Curse in your Buy phase. This means that you now get <img src="assets/VP.png" alt="victory points"> if you gain the Curse by buying it, or if you gain it during your Buy phase in another way (e.g. from Ritual).<ul><li>If gaining an Action card in your Buy phase causes you to gain a Curse (e.g. from another player’s Swamp Hag), you can move 1<img src="assets/VP.png" alt="victory point"> from the Action card’s pile to Defiled Shrine, and then gain the Curse and immediately take all the <img src="assets/VP.png" alt="victory points">.</li><li>If you gain a Curse during another player’s Buy phase (e.g. you gain a Curse from their Cauldron), you won’t get the <img src="assets/VP.png" alt="victory points">.</li></ul></li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1146,
		name: 'Fountain',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>15<img src="assets/VP.png" alt="victory points"></b> if you have at least 10 Coppers.',
		help: '<ul class="faq"><li>You either get 15<img src="assets/VP.png" alt="victory points"> or 0<img src="assets/VP.png" alt="victory points">; there is no extra bonus for having 20 Coppers.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1147,
		name: 'Keep',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>5<img src="assets/VP.png" alt="victory points"></b> per differently named Treasure you have, that you have more copies of than each other player, or tied for most.',
		help: '<ul class="faq"><li>This applies to each different Treasure being used in the game.</li><li>If all players have the same number of copies of a Treasure, they all get the 5<img src="assets/VP.png" alt="victory points"> for that Treasure.</li></ul><ul class="rules"><li>Actions that have become treasures via Capitalism do not count at the end of the game, as it is no longer your turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1148,
		name: 'Labyrinth',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a 2nd card in one of your turns, take <b>2<img src="assets/VP.png" alt="victory points"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png" alt="victory points"></b> here per player.',
		help: '<ul class="faq"><li>This can only happen once per turn per player.</li><li>For example if you gain 4 cards in the same turn, only the second one will come with 2<img src="assets/VP.png" alt="victory points">.</li></ul><ul class="rules"><li>During a turn with Possession, no players will get any <img src="assets/VP.png" alt="victory points"> from this.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1149,
		name: 'Mountain Pass',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you are the first player to gain a Province, each player bids once, up to <img src="assets/Debt40.png" alt="40 debt">, ending with you. High bidder gets <b>+8<img src="assets/VP.png" alt="victory points"></b> and takes the <img src="assets/Debt.png" alt="debt"> they bid.',
		help: '<ul class="faq"><li>This only happens the first time a player gains a Province; it does not matter if the Province was bought or not, or if Provinces have left the pile earlier due to Salt the Earth.</li><li>The player to the left of the player who got the Province bids first, then the player to their left and so on, ending with the player who got the Province.</li><li>Each bid can be a pass, or a higher bid than the previous bid.</li><li>Bids are in amounts of <img src="assets/Debt.png" alt="debt">, from <img src="assets/Debt1.png" alt="1 debt"> to <img src="assets/Debt40.png" alt="40 debt">; a bid of <img src="assets/Debt40.png" alt="40 debt"> cannot be beaten.</li><li>The player who bid the highest (if any) gets +8<img src="assets/VP.png" alt="victory points"> and takes the amount of <img src="assets/Debt.png" alt="debt"> of their bid.</li><li>If you win the bid on your turn, you can immediately pay off some of your <img src="assets/Debt.png" alt="debt">.</li><li>If you Possess a player and then gain the first Province, you still have control over how much <img src="assets/Debt.png" alt="debt"> they bid. If they win the bid, they take the 8<img src="assets/VP.png" alt="victory points">, and you take the <img src="assets/Debt.png" alt="debt">. In practice (at least in a 2-player game), you force them to bid <img src="assets/Debt0.png" alt="0 debt">, and you can take <img src="assets/Debt1.png" alt="1 debt"> for 8<img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: true, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1150,
		name: 'Museum',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>2<img src="assets/VP.png" alt="victory points"></b> per differently named card you have.',
		help: '<ul class="faq"><li>Multiple cards from the same pile can score for this as long as they have different names.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1151,
		name: 'Obelisk',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>2<img src="assets/VP.png" alt="victory points"></b> per card you have from the chosen pile.<hr>Setup: Choose a random Action Supply pile.',
		help: '<ul class="faq"><li>All cards from the chosen pile count, even if they have different names (such as when it is a split pile).</li><li>Ruins (from Dominion: Dark Ages), when used, can be the pile.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1152,
		name: 'Orchard',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>4<img src="assets/VP.png" alt="victory points"></b> per differently named Action card you have 3 or more copies of.',
		help: '<ul class="faq"><li>Having 6 or more copies of a card confers no additional bonus.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1153,
		name: 'Palace',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>3<img src="assets/VP.png" alt="victory points"></b> per set you have of Copper - Silver - Gold.',
		help: '<ul class="faq"><li>For example, if you had 7 Coppers, 5 Silvers, and 2 Golds, that would be two sets of Copper - Silver - Gold, for 6<img src="assets/VP.png" alt="victory points"> total.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1154,
		name: 'Tomb',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you trash a card, <b>+1<img src="assets/VP.png" alt="victory point"></b>.',
		help: '<ul class="faq"><li>This works even when it is not your turn, such as when you trash a card to Swindler (from Dominion: Intrigue), and works when told to trash a card that is not yours, such as with Salt the Earth.</li></ul><ul class="rules"><li>You get +1<img src="assets/VP.png" alt="victory point"> for each card you trash, even if you trash multiple cards at the same time.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: true,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1155,
		name: 'Tower',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>1<img src="assets/VP.png" alt="victory point"></b> per non-Victory card you have from an empty Supply pile.',
		help: '<ul class="faq"><li>A Supply pile is only empty if it has no cards in it; a split pile with half of the cards gone is not empty.</li><li>Victory cards do not count, but Curses do.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1156,
		name: 'Triumphal Arch',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>3<img src="assets/VP.png" alt="victory points"></b> per copy you have of the 2nd most common Action card among your cards (if it’s a tie, count either).',
		help: '<ul class="faq"><li>For example, if you had 7 copies of Villa and 4 copies of Wild Hunt, you would score 12<img src="assets/VP.png" alt="victory points">.</li></ul><ul class="rules"><li>The tie can be for either first or second place: if you had 7 copies each of Villa and Village, you would score 21<img src="assets/VP.png" alt="victory points">. If you had 7 copies of Villa, then 4 copies each of Village and Wild Hunt, you would score 12<img src="assets/VP.png" alt="victory points">.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1157,
		name: 'Wall',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−1<img src="assets/VP.png" alt="victory point"></b> per card you have after the first 15.',
		help: '<ul class="faq"><li>For example, if you had 27 cards in your deck, you would score −12<img src="assets/VP.png" alt="victory points"> for Wall.</li><li>Scores can go negative.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1158,
		name: 'Wolf Den',
		set: 'Empires',
		edition: [1],
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−3<img src="assets/VP.png" alt="victory points"></b> per card you have exactly one copy of.',
		help: '<ul class="faq"><li>Having no copies of a card, or two or more copies of a card, confers no penalty.</li><li>Scores can go negative.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1326,
		name: 'Academy',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you gain an Action card, <b>+1 Villager</b>.',
		help: '<ul class="faq"><li>This happens whether you gain an Action card due to buying it, or some other way.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1327,
		name: 'Barracks',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Action</b>.',
		help: '<ul class="faq"><li>You simply have +1 Action on each of your turns.</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1328,
		name: 'Canal',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'During your turns, cards cost <img src="assets/Coin1.png" alt="1 coin"> less.',
		help: '<ul class="faq"><li>During your turns, all cards, including cards in the Supply, in hands, and in Decks, cost <img src="assets/Coin1.png" alt="1 coin"> less, but not less than <img src="assets/Coin0.png" alt="0 coins">.</li><li>For example if you have Canal and play Villain, other players discard a card costing at least <img src="assets/Coin2.png" alt="2 coins">, which could not be Estate, as Estate only costs <img src="assets/Coin1.png" alt="1 coin"> on your turns.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1329,
		name: 'Capitalism',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'During your turns, Actions with +<img src="assets/Coin.png" alt="coin"> amounts in their text are also Treasures.',
		help: '<ul class="faq"><li>To be affected, a card must have a +<img src="assets/Coin.png" alt="coin"> amount in its text, not just a <img src="assets/Coin.png" alt="coin"> amount - for example, Capitalism turns Improve into a Treasure, but does not affect Inventor.</li><li>Having Capitalism means you can play any number of Action cards with +<img src="assets/Coin.png" alt="coin"> amounts in your Buy phase (without using up Action plays).</li><li>It also means that things that interact with Treasure cards also interact with those cards; for example, if you have Capitalism, you can use Treasurer to gain an Improve from the trash, since Improve is a Treasure on your turns.</li><li>Any time you play an Action - Treasure card, it is both an Action and a Treasure, regardless of which phase it is.</li><li>Getting +1 Action in your Buy phase does not let you play other Action cards then.</li><li>Capitalism works on your turn, but affects cards everywhere; for example if you have Capitalism and play Bandit, you could trash another player’s Improve, and it is not relevant if that player has Capitalism or not.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1330,
		name: 'Cathedral',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, trash a card from your hand.',
		help: '<ul class="faq"><li>Once you have claimed this ability, it is not optional. There is no way to remove your cube.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1331,
		name: 'Citadel',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'The first time you play an Action card during each of your turns, replay it afterwards.',
		help: '<ul class="faq"><li>Once you’ve claimed this ability, it is not optional.</li><li>This can affect an Action card played outside of the Action phase, if it is your first Action card played that turn; for example if you also had Capitalism, you could opt to play a Flag Bearer in your Buy phase as your first play of the turn, and it would still be played twice.</li><li>Citadel can cause a Duration card to be played twice; you will have to remember that on your next turn.</li></ul><ul class="rules"><li>If you’re under the influence of an opponent’s Enchantress, the first Action card you play will first give you +1 Card and +1 Action, and then will replay itself for its normal effect.</li><li>If you play a card, but then somehow play a second card before you begin executing the first card’s instructions, the first card is still the one Citadel replays.</li><li>If you buy Citadel, return to your Action phase (with e.g. Villa), and then play the Villa as your first Action of the turn, Citadel will replay it.</li><li>In 2022, Citadel received errata to say “The first time you play an Action card during each of your turns, replay it afterwards.” With the new rules for playing cards, Citadel would no longer have been able to replay one-shot cards like Horse; this errata will preserve that ability.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1332,
		name: 'City Gate',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Card</b>, then put a card from your hand onto your deck.',
		help: '<ul class="faq"><li>First you draw a card; then you put any card from your hand onto your deck.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1333,
		name: 'Crop Rotation',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may discard a Victory card for <b>+2 Cards</b>.',
		help: '<ul class="faq"><li>If drawing causes you to shuffle, you will shuffle in the discarded Victory card.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1334,
		name: 'Exploration',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the end of your Buy phase, if you didn’t gain any cards during it, <b>+1 Coffers</b> and <b>+1 Villager</b>.',
		help: '<ul class="faq"><li>This only cares if you gained a card in your Buy phase; it does not care if you gained cards at other times, and it does not care if you bought an Event or Project during your Buy phase unless you gained a card by doing so.</li><li>For example if all you buy on your turn is Exploration, you will get +1 Coffers and +1 Villager that turn.</li></ul><ul class="rules"><li>Exploration got errata in 2022 to check whether cards were gained by you in your Buy phase, rather than just whether you bought them.</li><li>If you take multiple Buy phases (with Villa or Cavalry), Exploration will check each of them to see if any cards were gained in it.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: true, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1335,
		name: 'Fair',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>You simply have +1 Buy on each of your turns.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1336,
		name: 'Fleet',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'After the game ends, there’s an extra round of turns just for players with this.',
		help: '<ul class="faq"><li>The extra turns go in order starting with the next player after the one that just took a turn.</li><li>Other extra turns, such as from Outpost (in Seaside) can happen in-between those turns; however after the last extra turn due to Fleet, no other extra turns can happen (since e.g. Outpost does not keep the game going after it ends).</li><li>Players do not sort through their cards and add up their scores until all of the Fleet turns are done, even the players without Fleet.</li><li>If the game end conditions are no longer met after Fleet turns, the game is still over.</li></ul><ul class="rules"><li>If no players have bought Fleet, the game ends before any extra turns happen from e.g. Outpost, Possession, Mission, or Seize the Day.</li><li>Fleet doesn’t create extra turns; it creates an extra round of turns. This means that if you have Fleet and then get Possessed on what would be the last turn of the game, you cannot take your Fleet turn before the Possession turn.</li><li>If during your Fleet turn, you play Possession and make the next player buy Fleet for themselves, they do not get a turn with Fleet.</li><li>If you end the game and take an extra turn in the same turn, and another player has Fleet, you will get your extra turn. During that turn, if you buy Fleet, you will not get a Fleet turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1337,
		name: 'Guildhall',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Treasure, <b>+1 Coffers</b>.',
		help: '<ul class="faq"><li>This happens whether you gain a Treasure due to buying it, or some other way.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1338,
		name: 'Innovation',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Once during each of your turns, when you gain an Action card, you may play it.',
		help: '<ul class="faq"><li>This is optional; you don’t have to play any Action cards immediately upon gaining them if you don’t want to.</li><li>This ability can only be used at most once each turn. If you choose to use Innovation’s ability on one Action card you gain, you can’t use it on any other Action card gained later that turn.</li><li>This applies to cards gained due to being bought, or gained other ways.</li><li>If you gain an Action card in your Buy phase, you can play it even though ordinarily you can’t play Action cards in your Buy phase.</li><li>If it gives you +Actions, that will not let you play more Action cards in your Buy phase; if it draws you Treasures, you can only play them if you have not bought anything yet.</li><li>Innovation can’t play a card unless it can physically put it into play. For example, if you gain a card to your discard pile and use Sleigh to move the card to the top of your deck, the stop-moving rule prevents Innovation from moving the card again from your deck into play, and so it can’t be played.</li></ul><ul class="rules"><li>If you gain a Duplicate and then play it with Innovation, you can call it immediately to gain another Duplicate.</li><li>In 2021, a new general ruling emerged, in this case meaning that Innovation can’t play a card unless it can physically put it into play, and so the original mechanism to first set the gained card aside (to check that it was not lost track of) became redundant.</li><li>In 2022, Innovation got reworded so that while it can still be used once a turn, it can play any Action you gain, not just the first one.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1339,
		name: 'Pageant',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the end of your Buy phase, you may pay <img src="assets/Coin1.png" alt="1 coin"> for <b>+1 Coffers</b>.',
		help: '<ul class="faq"><li>If you have at least <img src="assets/Coin1.png" alt="1 coin"> that you did not spend, you can spend <img src="assets/Coin1.png" alt="1 coin"> for +1 Coffers.</li><li>This only works once per turn.</li></ul><ul class="rules"><li>If you have <img src="assets/Coin2.png" alt="2 coins"> unspent, you can discard a Wine Merchant from your Tavern mat, and then pay <img src="assets/Coin1.png" alt="1 coin"> for Pageant.</li><li>If your turn has multiple Buy phases (due to Villa or Cavalry), you can pay <img src="assets/Coin1.png" alt="1 coin"> to Pageant at the end of each of those Buy phases.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: true, debt: false, VP: false,
			tavernMats: false, coffers: true, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1340,
		name: 'Piazza',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, reveal the top card of your deck. If it’s an Action, play it.',
		help: '<ul class="faq"><li>Once you have claimed this ability, it is not optional.</li><li>If the revealed card is not an Action, return it to the top of your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1341,
		name: 'Road Network',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When another player gains a Victory card, <b>+1 Card</b>.',
		help: '<ul class="faq"><li>This happens every time another player gains a Victory card, whether bought or gained another way, and even if it is your turn.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1342,
		name: 'Sewers',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'When you trash a card other than with this, you may trash a card from your hand.',
		help: '<ul class="faq"><li>This works however you trash the card. For example it works when trashing a card to Priest, when trashing a Curse to Old Witch, when trashing Acting Troupe when playing it, and when trashing a card from the Supply with Lurker (from Intrigue).</li><li>The card you trash with Sewers must be from your hand, and can be any card in your hand, even if the thing that triggered Sewers could only trash certain cards.</li></ul><ul class="rules"><li>When you trash multiple cards (with e.g. Steward), you trash them all at once, and then resolve any when-trashed abilities (which includes Sewers).</li><li>When you trash multiple cards at once, Sewers lets you trash a card from your hand per card trashed.</li><li>Just like Monastery, cards are trashed one at a time with Sewers. This matters if trashing one card (e.g., Overgrown Estate) causes you to draw another card; such cards drawn in the middle of trashing can be trashed by Sewers.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1343,
		name: 'Silos',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, discard any number of Coppers, revealed, and draw that many cards.',
		help: '<ul class="faq"><li>First you discard the Coppers, then you draw. So if drawing causes you to shuffle, you will shuffle in the Coppers.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1344,
		name: 'Sinister Plot',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, add a token here, or remove your tokens here for <b>+1 Card</b> each.',
		help: '<ul class="faq"><li>Each player has a separate pile of coin tokens on Sinister Plot; keep yours by your cube.</li><li>Each turn you either add a token (an unused one, not one from a mat), or remove all of your tokens to draw as many cards.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1345,
		name: 'Star Chart',
		set: 'Renaissance',
		edition: [1],
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'When you shuffle, you may pick one of the cards to go on top.',
		help: '<ul class="faq"><li>Each time you shuffle, you can look through the cards and pick one to go on top. Shuffle the other cards.</li><li>You can also look at any cards about to be drawn, that aren’t being shuffled, while deciding.</li></ul><ul class="rules"><li>If you shuffle your entire deck (with e.g. Famine), you can look through your deck and pick a card to put on top.</li><li>The card you choose with this goes on top of the shuffled cards, not on top of your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1451,
		name: 'Way of the Butterfly',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may return this to its pile to gain a card costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than it.',
		help: '<ul class="faq"><li>You only gain a card if you manage to return the card to its pile.</li><li>A non-Supply card (like Horse) can return to its pile; a card with no pile, such as Necropolis (from Dark Ages), fails to return to its pile.</li><li>The card you gain comes from the Supply, and can be any type; if there is no card in the Supply costing exactly <img src="assets/Coin1.png" alt="1 coin"> more than the returned card, you do not gain one.</li></ul><ul class="rules"><li>Cards bought from the Black Market deck do not come from a pile, so Way of the Butterfly has no effect on them.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1452,
		name: 'Way of the Camel',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Exile a Gold from the Supply.',
		help: '<ul class="faq"><li>You may play a card as this Way even if the Gold pile is empty.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1453,
		name: 'Way of the Chameleon',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Follow this card’s instructions; each time that would give you <b>+Cards</b> this turn, you get <b>+<img src="assets/Coin.png" alt="coins"></b> instead, and vice-versa.',
		help: '<ul class="faq"><li>For example, if you play Sheepdog and use Way of the Chameleon, you will get +<img src="assets/Coin2.png" alt="2 coins"> instead of +2 Cards.</li><li>If you play a Duration card using Way of the Chameleon, only the +<img src="assets/Coin.png" alt="coins"> and +Cards you get that turn are affected; for example, if you play Merchant Ship (from Seaside) and use Way of the Chameleon, you will get +2 Cards this turn, but the normal +<img src="assets/Coin2.png" alt="2 coins"> next turn.</li><li>This turns “+Cards” into “+<img src="assets/Coin.png" alt="coins">” and vice-versa, but does not change other ways to draw cards, for example, “draw that many” or “draw until you have 6 cards in hand.”</li><li>If the card that uses Way of the Chameleon plays another card, that card just does what it normally does (unless you use Way of the Chameleon on it as well).</li></ul><ul class="rules"><li>Cellar, Oracle, Storeroom, and Storyteller were originally phrased as +Cards, but were re-worded in later printings to be “draw”.</li><li>Way of the Chameleon can be used on cards without any +Cards or +<img src="assets/Coin.png" alt="coins"> (e.g., Chapel) or cards with equal +Cards and +<img src="assets/Coin.png" alt="coins"> (e.g., Market) even though this would normally have no effect. Doing so would, for example, allow a card to override Enchantress.</li><li>Cards that give choices (e.g. Courtier) give you bonuses in order listed. So if you use Way of the Chameleon on Courtier, and choose +<img src="assets/Coin3.png" alt="3 coins"> (which becomes +3 Cards) and Gold, you gain the Gold after drawing.</li><li>If a card you play would activate another card’s +Cards / +<img src="assets/Coin.png" alt="coins">, that won’t be affected by Way of the Chameleon. For example, if you play Lurker as Way of the Chameleon and trash a Cultist, you still get +3 Cards from doing so. And if you play Herb Gatherer as Way of the Chameleon and play a Gold, you still get +<img src="assets/Coin3.png" alt="3 coins">.</li><li>Similarly, Boons are not affected by Way of the Chameleon. So if you play Druid as Way of the Chameleon and receive The Field’s Gift, you’ll get +1 Action and +<img src="assets/Coin1.png" alt="1 coin">.</li><li>This has no interaction with +Coffers.</li><li>This has no interaction with effects that make you lose <img src="assets/Coin.png" alt="coins"> (such as Poor House and Souk).</li><li>If you would get +1 Card while you have the -1 Card token, you won’t remove your token. And if you would get +<img src="assets/Coin1.png" alt="1 coin"> while you have the -<img src="assets/Coin1.png" alt="1 coin"> token, you won’t remove your token.</li><li>The tokens from Teacher take effect before you decide to use Way of the Chameleon, so those bonuses will be unaffected.</li><li>If the card you play with Way of the Chameleon gives bonuses later in the same turn, this will still apply to those bonuses. For example, if you play a Priest as Way of the Chameleon, you get +2 Cards, and then for the rest of the turn, you get +2 Cards when trashing another card.</li><li>Way of the Chameleon only affects on-play effects. So if you Procession a Nomads and play it twice as Way of the Chameleon, you’ll draw 4 cards. But when you trash the Nomads, you still get +<img src="assets/Coin2.png" alt="2 coins">.</li><li>This has no effect on bonuses that other players get. For example, if you play Governor as Way of the Chameleon and choose the first option, you get +<img src="assets/Coin3.png" alt="3 coins">, and the other players get +1 Card.</li><li>"Follow this card’s instructions" overrides the abilities of both Lantern and Elder (which would ordinarily make you do something different from the card’s instructions).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1454,
		name: 'Way of the Frog',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>When you discard this from play this turn, put it onto your deck.',
		help: '<ul class="rules"><li>If you Throne Room a Duration card (like Wharf), and play it as Way of the Frog on the second play, you will get +1 Action, but since Wharf isn’t getting discarded from play this turn, it will not topdeck itself on your next turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1455,
		name: 'Way of the Goat',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand.',
		help: '<ul class="faq"><li>Way of the Goat has no Official FAQ</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1456,
		name: 'Way of the Horse',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br><b>+1 Action</b><br>Return this to its pile.',
		help: '<ul class="faq"><li>The card returns to its pile, even if that is a non-Supply pile. A card with no pile, such as Necropolis (from Dark Ages), fails to return to its pile.</li></ul><ul class="rules"><li>If you use a card like Necromancer to play another card without moving it into play, and use Way of the Horse, that card does not move to its pile.</li><li>Cards bought from the Black Market deck are not considered to have a pile, and so, like Necropolis, you can use Way of the Horse on them and not return them anywhere.</li><li>Failing to return a card to a pile does not stop you from getting +2 Cards and +1 Action.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1457,
		name: 'Way of the Mole',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Discard your hand. <b>+3 Cards</b>.',
		help: '<ul class="faq"><li>You draw 3 cards even if you did not have any cards left to discard.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1458,
		name: 'Way of the Monkey',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png" alt="1 coin"></b>',
		help: '<ul class="faq"><li>Way of the Monkey does not have an Official FAQ</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1459,
		name: 'Way of the Mouse',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Play the set-aside card, leaving it there.<hr>Setup: Set aside an unused Action costing <img src="assets/Coin2.png" alt="2 coins"> or <img src="assets/Coin3.png" alt="3 coins">.',
		help: '<ul class="faq"><li>Set aside any unused Action kingdom card costing <img src="assets/Coin2.png" alt="2 coins"> or <img src="assets/Coin3.png" alt="3 coins"> at the start of the game. Do any setup that that card requires.</li><li>When using Way of the Mouse, you play the set-aside card, leaving it set-aside. For example, if you set aside Sleigh, then any Action card could be used to gain 2 Horses.</li><li>The set-aside card cannot move itself when played, since it is not in play; for example, if the card is Embargo (from Seaside), it cannot be trashed.</li><li>Text below a dividing line (other than setup) will not do anything.</li></ul><ul class="rules"><li>If the set-aside card is a Duration, then a card played this Way will stay out as long as that Duration would.</li><li>You cannot use Way of the Mouse when playing the card set aside by Way of the Mouse, to prevent loops that could matter with cards like Champion (from Adventures).</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1460,
		name: 'Way of the Mule',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+<img src="assets/Coin1.png" alt="1 coin"></b>',
		help: '<ul class="faq"><li>Way of the Mule does not have an Official FAQ</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1461,
		name: 'Way of the Otter',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b>',
		help: '<ul class="faq"><li>Way of the Otter does not have an Official FAQ</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1462,
		name: 'Way of the Owl',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Draw until you have 6 cards in hand.',
		help: '<ul class="faq"><li>If you already have 6 or more cards in hand, you do not draw anything.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1463,
		name: 'Way of the Ox',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b>',
		help: '<ul class="faq"><li>Way of the Ox does not have an Official FAQ</li></ul>',
		flags: { village: true, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1464,
		name: 'Way of the Pig',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b>',
		help: '<ul class="faq"><li>Way of the Pig does not have an Official FAQ</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1465,
		name: 'Way of the Rat',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may discard a Treasure to gain a copy of this.',
		help: '<ul class="faq"><li>You may only gain cards from the Supply.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1466,
		name: 'Way of the Seal',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png" alt="1 coin"></b><br>This turn, when you gain a card, you may put it onto your deck.',
		help: '<ul class="faq"><li>This applies to all gained cards, whether bought or gained in other ways.</li><li>The card is first gained to wherever it normally would be, then you can move it onto your deck. If it moves somewhere else in-between (for example, trashing it using Watchtower from Prosperity), Way of the Seal cannot find it to move it again.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1467,
		name: 'Way of the Sheep',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png" alt="2 coins"></b>',
		help: '<ul class="faq"><li>Way of the Sheep does not have an Official FAQ</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1468,
		name: 'Way of the Squirrel',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b> at the end of this turn.',
		help: '<ul class="faq"><li>Normally you get the two cards after drawing your hand in Clean-up. If you use this when it is not your turn (such as via Black Cat), you still draw two cards at the end of the current turn.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1469,
		name: 'Way of the Turtle',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Set this aside. If you did, play it at the start of your next turn.',
		help: '<ul class="faq"><li>When you play the card at the start of your next turn, you can again use Way of the Turtle, delaying it another turn. You can keep doing this.</li><li>Playing the card next turn does not use up an Action then.</li><li>If you use a card like Throne Room to play a card twice, and then use Way of the Turtle, this does not cause the Throne Room to be set aside, or to stay in play as with Duration cards.</li></ul><ul class="rules"><li>If you use a card like Throne Room to play a card twice, and choose Way of the Turtle both times, you still only get one play at the start of your next turn, as you were not able to set it aside the second time.</li><li>If you use Way of the Turtle on a Reserve card that can be called at the start of your turn (like Transmogrify), you can play it at the start of your turn, put it on your Tavern mat, and then immediately call it (because it’s still the start of your turn).</li><li>If you use Throne Room on a Duration card, play it once normally and then play it using Way of the Turtle, the Throne Room will leave play, and you will have to remember the Duration card’s effects next turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1470,
		name: 'Way of the Worm',
		set: 'Menagerie',
		edition: [1],
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Exile an Estate from the Supply.',
		help: '<ul class="faq"><li>Way of the Worm does not have an Official FAQ</li></ul>',
		flags: {village: false, drawing: false, buyer: false, trashing: false, cursing: false},
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		},
	},
	{
		id: 1532,
		name: 'Architects’ Guild',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a card, you may spend <b>2 Favors</b> to gain a cheaper non-Victory card.',
		help: '<ul class="faq"><li>This only works once per gain but can trigger off of itself; you could gain a Province, spend 2 Favors to gain a Gold (cheaper than Province), spend 2 Favors to gain a Laboratory (cheaper than Gold).</li></ul><ul class="rules"><li>In situations where costs change, what matters is its cost of cards at the time you are gaining the second card. If you gain a Fisherman when it costs <img src="assets/Coin2.png" alt="2 coins">, and it lands in your discard pile and now costs <img src="assets/Coin5.png" alt="5 coins">, Architects’ Guild will gain a card costing less than <img src="assets/Coin5.png" alt="5 coins">, because it’s once the Fisherman is already in your discard pile that Architects’ Guild cares about what its cost is.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1533,
		name: 'Band of Nomads',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a card costing <img src="assets/Coin3.png" alt="3 coins"> or more, you may spend a Favor, for <b>+1 Card</b>, or <b>+1 Action</b>, or <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>What matters is how much the card costs when you gain it, not how much it normally costs.</li><li>This only works once per gain; you can spend a Favor, and then get your choice of +1 Card, +1 Action, or +1 Buy.</li></ul><ul class="rules"><li>The card has to cost <img src="assets/Coin3.png" alt="3 coins"> or more when you gain it; if it changes cost afterwards, that doesn’t matter. For example, if you gain a Fisherman when it costs <img src="assets/Coin2.png" alt="2 coins">, and it goes into your discard pile, you can’t spend a Favor for Band of Nomads, even though by that time the Fisherman now costs <img src="assets/Coin5.png" alt="5 coins">.</li></ul>',
		flags: { village: false, drawing: true, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1534,
		name: 'Cave Dwellers',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may spend a <b>Favor</b>, to discard a card then draw a card. Repeat as desired.',
		help: '<ul class="faq"><li>At the start of your turn, you may spend a Favor; if you do, you discard a card and then draw a card. Then you can spend another Favor to discard another card and draw another card, and so on, until you stop spending Favors.</li><li>You draw a card even if you failed to discard one.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1535,
		name: 'Circle of Witches',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'After playing a Liaison, you may spend <b>3 Favors</b> to have each other player gain a Curse.',
		help: '<ul class="faq"><li>After you completely resolve playing a Liaison, you may spend 3 Favors to have each other player gain a Curse. This can include Favors you just got from playing that Liaison.</li><li>This is not playing an Attack card and cannot be blocked with Moat.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: true },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1536,
		name: 'City-State',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain an Action card during your turn, you may spend <b>2 Favors</b> to play it.',
		help: '<ul class="faq"><li>If you gain an Action card in your Buy phase (such as by buying it), City-state can still let you play it then; if it gives you +Actions, that won’t let you play more Action cards in your Buy phase, and if it draws you Treasures, you can only play them if you haven’t bought anything yet.</li><li>City-state can only play a card that’s still wherever it was gained to (normally the discard pile) but can still play a card in your discard pile if it was covered up by other cards.</li><li>City-state only works during your turns.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1537,
		name: 'Coastal Haven',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When discarding your hand in Clean-up, you may spend any number of <b>Favors</b> to keep that many cards in hand for next turn (you still draw 5).',
		help: '<ul class="faq"><li>For example, you could spend two Favors to keep a Copper and a Silver in your hand, discard the rest of your hand and all of your cards from play (as usual), then draw a new hand of five cards and add it to the Copper and Silver.</li><li>If for some reason you aren’t drawing five cards (for example due to Outpost, from Seaside), Coastal Haven doesn’t get you around that; you draw however many cards you were otherwise supposed to draw, with the kept cards not counting against that.</li></ul><ul class="rules"><li>This only applies to discarding your hand the normal way during Clean-up. If something else causes you to discard your hand (e.g. you use Improve to gain a Tactician, and then play it with Sailor), you can’t use Coastal Haven there.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1538,
		name: 'Crafters’ Guild',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may spend <b>2 Favors</b> to gain a card costing up to <img src="assets/Coin4.png" alt="4 coins"> onto your deck.',
		help: '<ul class="faq"><li>The card is gained directly onto your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1539,
		name: 'Desert Guides',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may spend a <b>Favor</b> to discard your hand and draw 5 cards. Repeat as desired.',
		help: '<ul class="faq"><li>After discarding your hand and drawing 5 cards, you may spend another Favor to do it again, repeatedly.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1540,
		name: 'Family of Inventors',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, you may put a <b>Favor</b> token you have on a non-Victory Supply pile.<br>Cards cost <img src="assets/Coin1.png" alt="1 coin"> less per <b>Favor</b> token on their piles.',
		help: '<ul class="faq"><li>This can’t put tokens on Victory piles. It can put tokens on split piles that have Victory cards in them, if the randomizer isn’t a Victory card; this means it can put tokens on Knights and the 6 split piles in Allies, but not on the Castles pile from Empires.</li><li>The effect is cumulative; two tokens on a pile means that cards in that pile cost <img src="assets/Coin2.png" alt="2 coins"> less.</li><li>This does not reduce costs below <img src="assets/Coin0.png" alt="0 coins">.</li><li>This makes cards cost less at all times for all players, not just for the player placing the token.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1541,
		name: 'Fellowship of Scribes',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'After playing an Action, if you have 4 or fewer cards in hand, you may spend a <b>Favor</b> for <b>+1 Card</b>.',
		help: '<ul class="faq"><li>You can only do this once per time you play an Action card.</li><li>Completely resolve the Action card; then if you have 4 or fewer cards in hand, you may spend a Favor for +1 Card.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1542,
		name: 'Forest Dwellers',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may spend a <b>Favor</b> to look at the top 3 cards of your deck, discard any number and put the rest back in any order.',
		help: '<ul class="faq"><li>You can only do this once per turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1543,
		name: 'Gang of Pickpockets',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, discard down to 4 cards in hand unless you spend a <b>Favor</b>.',
		help: '<ul class="faq"><li>At the start of each of your turns, you choose to spend a Favor or not, and if you didn’t, you discard down to 4 cards in hand. It’s okay if you already only had 4 cards or fewer.</li><li>This is not an Attack card being played and cannot be blocked with Moat.</li></ul><ul class="rules"><li>If you have other abilities at the start of your turn (such as Highwayman or Cathedral), you may resolve them either before or after Gang of Pickpockets. This may matter if those abilities would change the number of cards in your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1544,
		name: 'Island Folk',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the end of your turn, if the previous turn wasn’t yours, you may spend <b>5 Favors</b> to take another turn.',
		help: '<ul class="faq"><li>This can never let you take a 3rd turn in a row.</li></ul><ul class="rules"><li>You can look at your next hand before deciding to spend 5 Favors for an extra turn.</li><li>If you play Voyage the same turn you spend Favors with Island Folk, you will have 2 extra turns, and you can order them.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1545,
		name: 'League of Bankers',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, <b>+<img src="assets/Coin1.png" alt="1 coin"></b> per <b>4 Favors</b> you have (round down).',
		help: '<ul class="faq"><li>You don’t spend Favors to use this; you just get +<img src="assets/Coin.png" alt="coin"> based on the number of Favors you’ve accumulated.</li></ul><ul class="rules"><li>If you gain extra Favors at the start of your Buy phase (e.g. you discard a Weaver to Arena, and then gain a Sycophant), that may give you more +<img src="assets/Coin.png" alt="coin"> from this.</li><li>If you take multiple Buy phases in a turn (with e.g. Villa or Cavalry), you can get +<img src="assets/Coin.png" alt="coin"> from this multiple times.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1546,
		name: 'League of Shopkeepers',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'After playing a Liaison,<br>if you have <b>5</b> or more <b>Favors</b>, +<img src="assets/Coin1.png" alt="1 coin">,<br>and if 10 or more, <b>+1 Action</b> and <b>+1 Buy</b>.',
		help: '<ul class="faq"><li>You don’t spend Favors to use this.</li><li>After each time you play a Liaison, you get +<img src="assets/Coin1.png" alt="1 coin"> if you have 5 or more Favors, and +1 Action and +1 Buy (in addition to the +<img src="assets/Coin1.png" alt="1 coin">) if you have 10 or more.</li><li>In games with multiple Liaisons, all of the Liaisons get the bonus, even if only one of them was used to get the Favors.</li></ul><ul class="rules"><li>If you have 3 Favors, and you use Throne Room on an Underling, you only get +<img src="assets/Coin1.png" alt="1 coin"> from League of Shopkeepers.</li><li>But if you have 3 Favors, play an Underling, and then replay it with either Royal Carriage or Citadel, you’ll get +<img src="assets/Coin2.png" alt="2 coins"> from League of Shopkeepers.</li><li>If you play a Bauble or Contract with 10+ Favors, you can get +1 Action in your Buy phase; this won’t let you play more Actions from your hand.</li></ul>',
		flags: { village: false, drawing: false, buyer: true, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1547,
		name: 'Market Towns',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, you may spend a <b>Favor</b> to play an Action card from your hand. Repeat as desired.',
		help: '<ul class="faq"><li>Fully resolve playing the Action card before deciding if you want to spend a Favor to play another one.</li></ul><ul class="rules"><li>If you gain Favors while resolving Market Towns (e.g. by playing a Broker), you may continue spending those Favors to keep playing Actions.</li><li>If you gain a Villa or Cavalry in the middle of resolving Market Towns, you’ll end your Buy phase (which will let you discard Wine Merchant and pay <img src="assets/Coin1.png" alt="1 coin"> to Pageant), and then continue resolving other “at the start of Buy phase” abilities (such as Arena or Market Towns itself).</li><li>If you play Leprechaun and receive either Envy or Delusion, you return the corresponding State after you finish resolving Market Towns.</li><li>If you return Deluded, then use Market Towns to play Leprechaun and receive Envy, you’ll be affected by Deluded and Envious at the same time.</li><li>Market Towns does not specify that you re-enter your Action phase. Therefore, cards that give additional Actions, such as Village, do not allow additional Actions to be played.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1548,
		name: 'Mountain Folk',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may spend <b>5 Favors</b> for <b>+3 Cards</b>.',
		help: '<ul class="faq"><li>You need the full 5 Favors to use this.</li></ul>',
		flags: { village: false, drawing: true, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1549,
		name: 'Order of Astrologers',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When shuffling, you may pick one card per <b>Favor</b> you spend to go on top.',
		help: '<ul class="faq"><li>Each time you shuffle, you can spend Favors to look through the cards and pick one card per Favor spent to go on top. Shuffle the other cards normally.</li><li>You can’t look through your cards unless you spend at least one Favor. You can look at any to-be-drawn cards while making this decision; for example, if you’re shuffling at end of turn and had two cards left, you can look at those, then decide whether or not to spend Favors and what cards to put on top.</li><li>After spending a Favor and looking at the cards, you may still spend more Favors.</li><li>Note that Emissary and Underling can cause you to shuffle before giving you Favors; the Favors you don’t have yet can’t be used on that shuffle.</li></ul><ul class="rules"><li>Since you can only begin using Favors starting from the first turn of the game, you can’t use Order of Astrologers when shuffling your starting deck during setup.</li><li>If you shuffle your entire deck (with e.g. Inn), you may still spend Favors for Order of Astrologers. If you do, you get to look through your entire deck.</li><li>If you have Star Chart, you may pick one card to go on top for free, and then may spend Favors to put additional cards on top.</li><li>If you spend multiple Favors for this, you can choose the order for the cards you put on top of the shuffled cards. This may matter if e.g. you play Smithy with 2 cards in your deck, and the Smithy will only draw one of the cards you put on top with Order of Astrologers.</li><li>The cards you choose with this go on top of the other shuffled cards, not on top of your deck. So if you play Smithy with 2 Towns in your deck, you can’t use Order of Astrologers to put 3 Coppers on top of the Towns; you’re forced to draw those 2 Towns dead.</li><li>If you spend a Favor to look through the cards you’re shuffling, but decide not to put any of them on top, you still lose that Favor.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1550,
		name: 'Order of Masons',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When shuffling, you may pick up to 2 cards per <b>Favor</b> you spend to put into your discard pile.',
		help: '<ul class="faq"><li>Each time you shuffle, you can spend Favors to look through the cards and pick up to two cards per Favor spent to put into your discard pile. Shuffle the other cards normally, but don’t shuffle in those cards.</li><li>You can’t look through your cards unless you spend at least one Favor. You can look at any to-be-drawn cards while making this decision, as with Order of Astrologers.</li><li>After spending a Favor and looking at the cards, you may still spend more Favors.</li><li>Note that Emissary and Underling can cause you to shuffle before giving you Favors; the Favors you don’t have yet can’t be used on that shuffle.</li></ul><ul class="rules"><li>Since you can only begin using Favors starting from the first turn of the game, you can’t use Order of Masons when shuffling your starting deck during setup.</li><li>Putting cards into your discard pile doesn’t count as discarding (e.g. it won’t activate e.g. Village Green).</li><li>If you have Star Chart, you can both choose a card to go on top of of the shuffle, and spend Favors to leave cards in your discard pile.</li><li>When you shuffle your entire deck (with e.g. Inn or Famine), you may spend Favors to both look through your entire deck, and put cards directly into your discard pile.</li><li>When you need to shuffle to access more cards from your deck, you only shuffle one time, even if Order of Masons put some cards back in your discard pile. For example, if Sentinel makes you shuffle a discard pile of 2 Curses and 2 Provinces, but you spend a Favor to leave the 2 Provinces in your discard pile, the Sentinel will only look at the 2 Curses; you won’t shuffle a 2nd time for the 2 Provinces.</li><li>However, some cards access cards from your deck one at a time (e.g. Watchtower and Journeyman). If there aren’t enough cards after shuffling for the first time, you will shuffle a second time.</li><li>If you spend a Favor to look through the cards you’re shuffling, but decide not to put any of them into your discard pile, you still lose that Favor.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1551,
		name: 'Peaceful Cult',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, you may spend any number of <b>Favors</b> to trash that many cards from your hand.',
		help: '<ul class="faq"><li>Spend the Favors all at once; then choose all the cards to trash; then trash them; then resolve things that happen due to trashing those cards, in any order.</li></ul><ul class="rules"><li>If trashing those cards gets you more Favors (e.g. by trashing a Sycophant) or more cards in your hand (e.g. by trashing a Cultist), you won’t be able to trash more cards with Peaceful Cult.</li><li>If you take multiple Buy phases in a turn (with e.g. Villa or Cavalry), you can trash with Peaceful Cult multiple times a turn.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1552,
		name: 'Plateau Shepherds',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, pair up your <b>Favors</b> with cards you have costing <img src="assets/Coin2.png" alt="2 coins">, for 2<img src="assets/VP.png" alt="victory points"> per pair.',
		help: '<ul class="faq"><li>For example, if you have five Favors, two Estates, and a Moat, you can make three pairs, for 6<img src="assets/VP.png" alt="victory points">.</li><li>Cost reduction does not affect scoring.</li><li>Cards must cost exactly <img src="assets/Coin2.png" alt="2 coins"> to count. E.g., Apothecary, costing <img src="assets/Coin2.png" alt="2 coins"><img src="assets/Potion.png" alt="and a potion">, would not be paired.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1553,
		name: 'Trappers’ Lodge',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a card, you may spend a <b>Favor</b> to put it onto your deck.',
		help: '<ul class="faq"><li>If your deck is empty, the card becomes the only card in your deck.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: false, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	},
	{
		id: 1554,
		name: 'Woodworkers’ Guild',
		set: 'Allies',
		edition: [1],
		cardType: ['Permanent', 'Ally'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, you may spend a <b>Favor</b> to trash an Action card from your hand. If you did, gain an Action card.',
		help: '<ul class="faq"><li>This can gain an Action of any cost, including Actions with <img src="assets/Debt.png" alt="debt"> or <img src="assets/Potion.png" alt="potion"> in the cost.</li><li>You only gain an Action if you trashed one.</li></ul>',
		flags: { village: false, drawing: false, buyer: false, trashing: true, cursing: false },
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	}
]
