import { Card } from './card'

export const PERMANENTS: Card[] = [
	{
		id: 1125,
		name: 'Advance',
		set: 'Empires',
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may trash an Action card from your hand. If you do, gain an Action card costing up to <img src="assets/Coin6.png">.',
		help: 'If you do not trash an Action, nothing else happens.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 10,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Province, a Duchy, an Estate, a Gold, a Silver, and a Copper.',
		help: 'You gain each of those cards that is present in the Supply; you cannot choose not to gain one. You gain them in the order listed.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: If you have no Treasures in play, gain a card costing up to <img src="assets/Coin4.png">.',
		help: 'You can only buy this once per turn. When you do, if you have no Treasures in play, you gain a card costing up to <img src="assets/Coin4.png">. The gained card comes from the Supply and is put into your discard pile.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'Look through your discard pile. Shuffle all but up to 5 cards from it into your deck. Gain a Duchy.',
		help: 'You can do this even if the Duchy pile is empty. The chosen cards stay in your discard pile when the other cards are shuffled into your deck.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Take your −<img src="assets/Coin1.png"> token. Gain 2 cards each costing up to <img src="assets/Coin4.png">.',
		help: 'When you buy this, you take your −<img src="assets/Coin1.png"> token, which will cause you to get less the next time you get <img src="assets/Coin.png">. Then you gain 2 cards, each costing up to <img src="assets/Coin4.png">. They can be 2 copies of the same card, or 2 different cards. This Event may be bought more than once per turn, gaining cards each time; however, the −<img src="assets/Coin1.png"> token can only be taken once. If you’re Possessing someone and make them buy Ball, you will take their −<img src="assets/Coin1.png"> token. If they need to take it before you lose it, they take it from you, and you are no longer affected by it. This can result in you potentially having 2 −<img src="assets/Coin1.png"> tokens; resolve them one at a time when you make <img src="assets/Coin.png"> - so if you only make <img src="assets/Coin1.png">, you only lose one of the tokens (you pick which one to lose).',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Exile any number of cards with the same name from your hand.',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Coppers and a non-Victory card costing up to <img src="assets/Coin5.png">.',
		help: 'You can do this even if the Copper pile is empty.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a non-Victory card costing up to <img src="assets/Coin5.png">. Each other player gains a Horse.',
		help: 'The other players gain their Horses in turn order. They cannot decline to gain one.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 2 cards you have in play.',
		help: 'This only trashes cards you have in play, not cards from your hand. You can trash zero, one, or two cards. If you trash Treasures with this, this does not remove the <img src="assets/Coin.png"> you got from playing those Treasures this turn. For example, with 5 Coppers in play and two Buys, you could pay <img src="assets/Coin3.png"> for a Bonfire to trash two of the Coppers, then spend the other <img src="assets/Coin2.png"> on a Peasant.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: <b>+1 Buy</b>. If your −1 Card token isn’t on your deck, put it there and <b>+<img src="assets/Coin1.png"></b>.',
		help: 'You can only buy this once per turn. The -1 Card token will cause you to draw one less card the next time you draw cards. You do not get +<img src="assets/Coin1.png"> if you buy Borrow when your -1 Card token is already on your deck.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold per differently named card you\'ve gained this turn.',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Silvers.<br><b>+1<img src="assets/VP.png"></b> per Silver you’ve gained this turn.',
		help: 'This counts the two Silvers it gives you (provided that there were Silvers left to gain). For example, with <img src="assets/Coin12.png"> and 2 Buys and having gained no Silvers earlier in the turn, you could buy Conquest twice, getting two Silvers, then +2<img src="assets/VP.png">, then two more Silvers, then +4<img src="assets/VP.png">.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may set aside an Action card from your hand. At the start of your next turn, play it.',
		help: '<ul><li>Once you set aside the Action card, you have to play it at the start of your next turn.</li><li>If you do multiple things at the start of your turn, you choose the order in which to do them.</li><li>Playing the Action card at the start of your next turn does not use up an Action.</li></ul>',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Gain a Silver.',
		help: 'Each purchase of Delve gives you back the Buy you used on it. For example, if you have <img src="assets/Coin7.png">, you can Delve, then Delve, then buy a card for <img src="assets/Coin3.png">.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Horse and a card costing up to <img src="assets/Coin4.png">, both onto your deck.',
		help: 'The Horse is gained before the second card is chosen, which means that cards like Destrier are reduced in cost. It also means the Horse goes onto your deck first, then the other card.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: You may gain a Curse. If you do, <b>+1 Buy</b> and <b>+<img src="assets/Coin2.png"></b>.',
		help: 'If the Curse pile is empty, you fail to gain one and do not get +1 Buy and +<img src="assets/Coin2.png">.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 14,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Province. If you do, <b>+9<img src="assets/VP.png"></b>.',
		help: 'This does nothing once the Province pile is empty.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'After this turn, put all cards from your deck and discard pile into your hand, trash any number, shuffle your hand into your deck, then draw 5 cards.',
		help: 'Cards that are not in your deck or discard pile are ignored, such as cards in Exile, on your Tavern mat, or Duration cards in play. Effects that happen due to trashing cards (such as Rocks’) will happen before you shuffle.<br>This happens between turns, and so Possession (from Dominion: Alchemy) will no longer be doing anything. End-game conditions are checked at the end of each player’s turn. So if a player buys Donate and then empties the Provinces, the Donate effect will not occur. Conversely, if two piles are empty and a player buys Donate, and uses its effect to trash Hunting Grounds, thus emptying the Estates, the game will not end until the end of the next player’s turn.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Exile a Duchy from the Supply.',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'You may trash a non-Victory card from your hand, to gain a card costing up to <img src="assets/Coin2.png"> more than it.',
		help: 'If you trash a card, you must gain a card costing up to <img src="assets/Coin2.png"> more than it.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Draw 2 extra cards for your next hand.',
		help: 'This increases the number of cards you draw in Cleanup of the same turn. It is cumulative. Normally you draw 5 cards; after an Expedition you would draw 7, after two Expeditions you would draw 9, and so on. It only applies for the turn you buy it. If you play Outpost (from Seaside), getting an extra turn with only 3 cards, and also buy Expedition, you add the 2 extra cards onto the base of 3 cards, for 5 cards total.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Move your −<img src="assets/Coin2.png"> cost token to an Action Supply pile. (Cards from that pile cost <img src="assets/Coin2.png"> less on your turns, but not less than <img src="assets/Coin0.png">.)',
		help: 'Other players’ cards from the tokened pile are also reduced in cost during your turns.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Reveal the top card of your deck. If it\'s a Treasure or Action, you may play it. Otherwise, discard it.',
		help: '<ul><li>Playing the card is optional and does not use up an Action.</li><li>If you do not play the card – no matter what its type is – discard it.</li></ul>',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Once per game: Set aside a non-Victory Action card from the Supply costing up to <img src="assets/Coin4.png">. Move your Estate token to it. (Your Estates gain the abilities and types of that card.)',
		help: 'You can only buy this once per game. When you do, set aside a non-Victory Action card from the Supply that costs up to <img src="assets/Coin4.png">, and put your Estate token on it (the one depicting a house). This is not gaining a card, and does not count for things that care about gaining, such as Treasure Hunter; however at the end of the game, include the card in your deck when scoring. For the rest of the game, all of your Estates have the abilities and types of the set aside card. For example if you set aside a Port, then your Estates are Action - Victory cards, that can be played for +1 Card +2 Actions. This also changes Estates you buy or otherwise gain during the game; if you used Inheritance on a Port and then later bought an Estate, that Estate would come with a Port, just as buying a Port gains you a Port. This only affects your own Estates, not Estates of other players. An Estate is yours if either it started in your deck, or you gained it or bought it, or you were passed it with Masquerade (from Intrigue). An Estate stops being yours if you trash it, return it to the Supply, pass it with Masquerade, or are stopped from gaining it due to Possession (from Alchemy) or Trader (from Hinterlands). There are no limits on the set aside card other than being a non-Victory Action from the Supply costing up to <img src="assets/Coin4.png">; it may be a Duration card, a Reaction card, and so on. It does not have to continue costing up to <img src="assets/Coin4.png">, it only has to cost up to <img src="assets/Coin4.png"> when set aside. Your Estates are still worth 1<img src="assets/VP.png"> when scoring at the end of the game. Your Estates only copy abilities and types; they do not copy cost, name, or what pile they are from (thus they don’t trigger tokens like +1 Action on the copied pile, and are not the Bane for Young Witch from Cornucopia even if the copied pile is the Bane). Starting Estates come from the Estates pile.<br>If you Transmute an Inherited Estate, the Estate is in the trash and, thus, no longer yours when Transmute checks its type; therefore you would only get a Gold (for trashing a Victory card) and not a Duchy (since Estate cannot be an Action card in the trash). The same logic applies to when you Catapult an Inherited Estate, and thus when Catapulting an Estate Inheriting Crown, the other players do not discard down to 3, or gain a Curse. In contrast, if you Ironworks an Inherited Estate, you would get +1 Card and +1 Action. The fact that Estate inherits the abilities but not the name or cost of another card can lead to some surprising effects; as always, reading the text of the card carefully should resolve most confusions. Some examples:<br>If Estate inherits Treasure Map, then when you play an Estate, you trash it and a Treasure Map from your hand (not an Estate from your hand), but you don’t gain Gold because you didn’t “trash two Treasure Maps”.<br>If Estate inherits Crossroads, then playing an Estate can’t give you +3 Actions because it’s not “the first time you played a Crossroads this turn”. But if you play an Estate and then a Crossroads, you do get the +3 Actions from the Crossroads, since it is the first time you’ve played a Crossroads.<br>If Estate inherits Rats, then when you play Estate, you can trash another Estate (but not a Rats), and you gain an actual Rats, and not another Estate.<br>If Estate inherits Catacombs, then when you trash an Estate you must gain a card costing less than Estate, not just less than Catacombs.<br>The exception to the above, as usual, is when Estate inherits Pirate Ship: despite the wording on the Pirate Ship card, coin tokens placed on your Pirate Ship mat by playing Estate count toward the future value of your Pirate Ships (and Estates) in the same way as coin tokens placed by playing Pirate Ship itself.<br>If an Estate comes into your possession via a means not explicitly described in the Official FAQ, such as being put in your hand after being trashed as a Fortress, it is still “yours”, and still has its Inherited properties. Since Inherited Estates are not Actions until they are yours, they cannot be gained by abilities that specify gaining an Action, such as by University. Inherited Estates do count for Vineyard. Estates become yours upon the act of buying, therefore an Estate inherited as a Grand Market can be bought with Copper in play. Buying an Estate does trigger any on-buy effects of the set-aside card, e.g. if you inherited Noble Brigand, it triggers the “attack”. The Estate pile is not yours, and thus not an Action pile; it cannot have Adventures tokens put on it, and cannot be emulated by Band of Misfits or Overlord. Your Estates only look at the text of the set aside card, and do not care if there are Adventures tokens on the pile it is from. Estates Inherited as Gathering cards put <img src="assets/VP.png"> tokens on the pile they Inherited from, not the Estate pile. If you Inherit Fortress, you will not put Estates into your hand if you trash them with Salt the Earth, as Estates in the Supply are not yours.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Exile an Action card from the Supply. While it\'s in Exile,' +
			' when another player gains or Invests in a copy of it, <b>+2 Cards</b>.',
		help: '<ul><li>While the card is Exiled, you draw 2 cards each time another player gains a copy of it, or uses Invest to Exile a copy of it. This is not optional.</li><li>This <i>is</i> cumulative; if you Invest twice in the same card, you will get +4 Cards each time someone else gains a copy or Invests in it.</li><li>If the game has another way to Exile cards, other Exiled cards were not Invested and do not draw you cards. Keep the Invested ones separate from the other ones; for example, turn them sideways, or put them half under the mat.</li><li>Cards Exiled with Invest can be discarded from the mat in the normal way, by gaining another copy of the card; then you will no longer draw cards for players gaining/Investing in them.</li><li>It only matters if the card you Exile is an Action, not if the whole pile is; for example, Estates with Inheritance.</li></ul>',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Move your +1 Action token to an Action Supply pile. (When you play a card from that pile, you first get <b>+1 Action</b>.)',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Look through your discard pile. You may play an Action card from it.',
		help: '<ul><li>Normally you cannot look through your discard pile, so you cannot look to see if you want to buy March or not.</li><li>Once you buy March, you look through your discard pile, and then have the option of playing an Action card from it.</li><li>Events are bought during your Buy phase, so some Actions will be considerably less useful than others. For example, if an Action lets you draw cards, it\'s already too late to play additional Actions or Treasures.</li></ul>',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: If the previous turn wasn’t yours, take another turn after this one, in which you can’t buy cards.',
		help: 'You can only buy this once per turn. When you do, if the previous turn was not yours - if it was another player’s turn before this turn - you take another turn after this turn ends. The extra turn is completely normal except that you cannot buy cards during it. You can still buy Events, and play cards, and gain cards in ways other than buying them (such as gaining a Silver from Amulet), and exchange Travellers. Buying Mission during a turn granted by Mission will not give you another turn, because the previous turn was yours.<br>If you buy a Mission and play an Outpost on the same turn, both extra turn effects try to happen at the same time. If you resolve Mission’s first, your Mission turn will start with 3 cards, and you won’t get an Outpost turn (and Outpost stays in play until the Clean-up phase of the player to your left). If you resolve Outpost first, you get the normal 3-card Outpost turn, then your Mission turn, giving you three turns in a row. Buying Mission does nothing if you were Possessed on your previous turn. If the previous player played multiple Possessions, and tells you to buy a Mission on your first Possession turn, you get to decide whether to take the Mission turn first, or one of the other Possession turns; Possession does not grant control between turns, making the choice your decision.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'Move your +1 Card token to an Action Supply pile. (When you play a card from that pile, you first get <b>+1 Card</b>.)',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: Turn your Journey token over (it starts face up); then if it’s face up, choose up to 3 differently named cards you have in play and gain a copy of each.',
		help: 'At the start of the game, place your Journey token (the one with the boot) face up. You can only buy this once per turn. When you do, turn your Journey token over. Then if it is face down, nothing more happens. If it is face up, choose up to 3 cards you have in play with different names and gain a copy of each. The copies you gain come from the Supply and are put into your discard pile. So, every other time you buy this, you will gain up to 3 cards. It does not matter what turned over the Journey token; you could turn it face down with Ranger, then face up with Pilgrimage. You cannot gain copies of cards not from the Supply, such as Mercenary or Disciple. The cost of the card does not matter; you can gain cards with <img src="assets/Debt.png"> or <img src="assets/Potion.png"> in their cost as long as you have a copy of it in play. Choosing happens before gaining: you can choose a Mandarin and Gold you have in play, gain the Mandarin first, then still gain the Gold, even though the original is no longer in play.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Move your Trashing token to an Action Supply pile. (When you play a card from that pile, you may trash a card from your hand.)',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 10,
			debt: 0,
			potion: 0
		},
		text: 'Gain one card from each Action Supply pile.',
		help: '<ul><li>You gain the top card from each Action pile in the Supply; you cannot choose not to take some of them, and you do not gain non-supply cards like Horse, or non-Action cards like Stockpile.</li><li>If a pile is empty, you do not gain one of those. Obviously.</li><li>If there are different cards in an Action pile, like the Knights (from Dark Ages), you just get the top one.</li><li>You choose the order to gain the cards, which sometimes matters; normally you can pick up a card from each pile and then choose what order to gain them in.</li><li>For piles with different cards, the pile is an Action pile if the randomizer is an Action; so, Castles (from Empires) are not one even if Small Castle or Opulent Castle are on top.</li><li>If you gain Cavalry or Villa (from Empires) with Populate, you return to your Action phase right then, but still finish gaining cards from Populate before doing more things.</li></ul>',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b>Name a card. Reveal the top 4 cards from your deck. Put the matches back and discard the rest.',
		help: 'You can name a card that is not in the game; all four cards will be discarded.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may discard an Attack, two Curses, or six cards. If you do, gain a Gold.',
		help: 'You may either discard an Attack to gain a Gold, or discard two Curses to gain a Gold, or discard any 6 cards to gain a Gold. The gained Gold is put into your discard pile. You may choose to discard 6 cards despite not having enough cards in hand; you will discard everything and not gain a Gold. You may choose to discard two Curses despite only having one; you will discard that Curse and not gain a Gold.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Silver per Silver you have in play. Each other player puts their –1 Card token on their deck.',
		help: 'This Event is like an Attack, but buying it is not playing an Attack, and so cannot be responded to with cards like Moat and Caravan Guard. When you buy this, you gain a Silver for each Silver you have in play; for example, with four Silvers in play, you would gain four Silvers. The Silvers go to your discard pile; if there aren’t enough left, just take what is left. Then each other player puts his -1 Card token on top of his deck, which will cause those players to draw one less card the next time they draw cards.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Gold. Set it aside. If you do, at the start of your next turn, play it.',
		help: '<ul><li>This means you will start your next turn with a Gold in play and +<img src="assets/Coin3.png"> from it. You discard the Gold that turn as normal.</li><li>This does not skip your Action phase, even though Treasures are normally only played in your Buy phase.</li></ul>',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Horse.',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Curse. If you do, trash a card from your hand. ' +
			'<b>+1<img src="assets/VP.png"></b> per <img src="assets/Coin1.png"> it cost.',
		help: 'This does nothing once the Curse pile is empty. This only gives you +1<img src="assets/VP.png"> per <img src="assets/Coin1.png"> the trashed card cost; it does not give anything for <img src="assets/Debt.png"> or <img src="assets/Potion.png"> in costs. Unlike similar cards or Events, Ritual cares about the cost of the card at the instant it is trashed, rather than checking on it later, when its cost may have changed.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png"></b><br>Trash a Victory card from the Supply.',
		help: 'If the trashed card does something when trashed (such as Crumbling Castle), you do that thing.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 1,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: <b>+1 Buy</b>. Set aside a card from your hand, and put it into your hand at end of turn (after drawing).',
		help: 'You can only buy this once per turn. When you do, you get +1 Buy (letting you buy another Event or a card afterwards), set aside a card from your hand face down (the other players do not get to see it), and put it into your hand at the end of the turn, after drawing your hand for the next turn. For example you might set aside an unplayed Copper, and then after drawing your 5 cards for next turn, add the Copper to your hand.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Look at the top 5 cards of your deck. Discard 3 and put the rest back in any order.',
		help: 'When you buy this you get +1 Buy (letting you buy another Event or a card afterwards). Then look at the top 5 cards of your deck, discarding 3 and putting the rest on top of your deck in any order. If there are fewer than 5 cards even after shuffling, you still discard 3 of them; if there are only 3 cards left between your deck and discard pile, all 3 will be discarded. Scouting Party is unaffected by the -1 Card token; if it is on top of your deck, replace it after resolving Scouting Party.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain an Action card costing up to <img src="assets/Coin4.png">. Move your +1 Buy token to its pile. (When you play a card from that pile, you first get <b>+1 Buy</b>.)',
		help: 'When you buy this, first you gain an Action card costing up to <img src="assets/Coin4.png">. The Action card comes from the Supply and is put into your discard pile. Then move your +1 Buy token to the pile the Action card came from. The token gives you +1 Buy when playing a card from that pile. It only matters how much the card costs that you gain; the cost is not checked later. For example you can play Bridge Troll, then use Seaway to gain a Bridge Troll (currently costing <img src="assets/Coin4.png"> due to its own effect), and the token will stay there even when Bridge Troll costs <img src="assets/Coin5.png"> later. You can use Seaway to gain Sir Martin (from Dark Ages) when he’s on top of the Knights pile; then your +1 Buy token will be on the Knights pile, even though any remaining Knights will cost <img src="assets/Coin5.png">. You cannot use Seaway on an empty pile just to move the +1 Buy token; you have to pick a card you can gain.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per game: Take an extra turn after this one.',
		help: 'The extra turn is like a normal turn, except that it does not count for the tiebreaker.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If you have 5 or fewer cards in play, gain 5 Horses onto your deck.',
		help: 'It does not matter how many cards you played that turn, only how many you have in play when buying Stampede. If there are fewer than 5 Horses left in the pile, just gain as many as you can.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Add <img src="assets/Debt2.png"> to a Supply pile.<hr>Setup: Add <img src="assets/Debt1.png"> to each Supply pile. When a player buys a card, they take the <img src="assets/Debt.png"> from its pile.',
		help: 'Every Supply pile starts with <img src="assets/Debt1.png">, including Kingdom cards and basic cards like Silver. The Event itself, when bought, adds <img src="assets/Debt2.png"> to a single pile, whether or not that pile has any <img src="assets/Debt.png"> on it already. The <img src="assets/Debt.png"> is taken by the next player to buy a card from that pile; gaining a card without buying it leaves the <img src="assets/Debt.png"> on the pile.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>You may play an Action card from your hand.',
		help: 'Events are bought during your Buy phase, so some Actions will be considerably less useful than others. For example, if an Action lets you draw cards, it\'s already too late to play additional Actions or Treasures.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 2 cards from your hand.<br>Gain a Silver per card you trashed.',
		help: 'You may trash zero, one, or two cards from your hand. For each card you actually trashed, you gain a Silver, putting it into your discard pile.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Move your +<img src="assets/Coin1.png"> token to an Action Supply pile. (When you play a card from that pile, you first get <b>+<img src="assets/Coin1.png"></b>.)',
		help: '',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Choose one: Exile an Action card from the Supply; or put an Action card you have in Exile onto your deck.',
		help: '<ul><li>This can take Action cards from your Exile mat that were put there by other cards.</li><li>It only matters if the card is an Action, not if the whole pile is.</li></ul>',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Buys</b><br>When you gain a card this turn, you may put it onto your deck.',
		help: 'When you buy this, you get +2 Buys (letting you buy more Events or cards afterwards). Then for the rest of the turn, whenever you gain a card, you may put it on your deck. This works on cards you buy, as well as cards gained other ways, such as gaining cards with Ball. It does not work on Travellers exchanged for other cards; exchanging is not gaining. Putting the card on your deck is optional each time you gain a card that turn; you could put some on top and let the others go to your discard pile.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 0,
			debt: 5,
			potion: 0
		},
		text: 'Gain an Estate. If you did, <b>+1<img src="assets/VP.png"></b> per card you’ve gained this turn.',
		help: 'You get +1<img src="assets/VP.png"> per card you have gained, including the Estate, and any other cards bought or gained other ways; you do not get <img src="assets/VP.png"> for Events bought. Once the Estate pile is empty, this does nothing.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 4,
			debt: 3,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png"></b><br>Gain a Gold.',
		help: 'You get the <img src="assets/VP.png"> even if there are no Golds left.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If your deck and discard pile are empty, gain 3 Golds.',
		help: 'If there are fewer than 3 Golds in the pile, just gain the remaining Golds.',
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
		cardType: ['Permanent', 'Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain an Action card costing up to <img src="assets/Coin4.png">. Set it aside. If you do, then at the start of your next turn, play it.',
		help: 'When you buy this, you gain an Action card costing up to <img src="assets/Coin4.png"> from the Supply and set it aside face up. If you did set it aside, then at the start of your next turn, play that Action card. This doesn’t use up your default Action for the turn. In order to remember to play the card on your next turn, you may want to turn it sideways or diagonally, turning it right side up when you play it. If you move the Action card after you gain it but before you set it aside (e.g. by putting it on top of your deck with Watchtower, from Dominion: Prosperity), then Summon will “lose track” of it and be unable to set it aside; in that case you will not play it at the start of your next turn. If you use Summon to gain a Nomad Camp (from Dominion: Hinterlands), Summon will know to find the Nomad Camp on your deck, so you will set it aside in that case (unless you have moved it elsewhere via another ability). The Summoned card is discarded during your Clean-up phase once its effects are resolved like a typical Action card, as it has been brought into play by the effect of Summon. Summoning a card that gains other cards when gained (such as Border Village or Death Cart) will cause the Summoned card to not be set aside, and thus not played at the start of your next turn. This is because the extra cards gained cover up the Summoned card in the discard pile (since the Summoned card is not set aside immediately), causing the Summoned card to be lost track of. This can still be the right move, however, if the card is Embargoed or under a Contraband. If you are being Possessed, and the player to your right tells you to Summon a card, they gain the card, which does not get set aside, nor played at the start of their turn, instead staying in their discard pile. If you reveal a Trader after Summoning a card, the Silver you gain is not set aside, but stays in your discard pile. If you Summon a Hireling, you will draw a card when you play it, since it will still be the start of your turn.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Treasure, move <b>1<img src="assets/VP.png"></b> from its pile to this. When you gain a Victory card, take the <img src="assets/VP.png"> from this.<hr>Setup: Put <b>8<img src="assets/VP.png"></b> on the Silver and Gold piles.',
		help: 'If you gain a card that is both a Treasure and a Victory card, such as Humble Castle, you can resolve the abilities in either order.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, you may discard an Action card. If you do, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'With Villa it is possible for your Buy phase to start twice or more in a turn; you can make use of Arena each time.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−2<img src="assets/VP.png"></b> for each Silver and each Gold you have.',
		help: 'For example with 3 Silvers and 1 Gold, you would get −8<img src="assets/VP.png">. Scores can go negative.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you buy a card, if you have <img src="assets/Coin2.png"> or more left, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'This happens each time you buy a card. For example with <img src="assets/Coin4.png"> and 3 Buys, you could buy Copper, then Copper, then Silver, taking 2<img src="assets/VP.png">, then 2<img src="assets/VP.png">, then none. If you buy a card that allows you to overpay, you may take <img src="assets/VP.png"> from Basilica if you have <img src="assets/Coin2.png"> left before you overpay.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you end your turn without having gained a card, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'Any way you gain a card will stop you from getting <img src="assets/VP.png"> from this that turn. On a Possession turn, the Possessor will always get 2<img src="assets/VP.png"> from this (if there are any tokens left), since the Possessed player will not have actually gained any cards, so will try to gain the 2<img src="assets/VP.png">, which will go to the Possessor instead. If a player ends the game on a turn without gaining any cards (such as by playing a Witch and emptying the Curse pile), they will still get the <img src="assets/VP.png"> from Baths, as the end-of-game check happens after the turn is ended. Similarly, if the game ends on a Possession turn, the Possessing player will get the <img src="assets/VP.png">.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Victory card, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'You take the <img src="assets/VP.png"> whether you bought the Victory card or gained it another way.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you buy an Action card, if you have a copy of it in play, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'For example with Settlers in play, buying another Settlers gets you 2<img src="assets/VP.png"> from here. Cards from the same pile are not necessarily copies of each other; for example the different Knights are not copies of each other. You get 2<img src="assets/VP.png"> for each copy of the Action you buy, not for each copy you have in play. If you have successfully bought Inheritance, Estates will give you 2<img src="assets/VP.png"> when bought with an Estate in play (not a copy of whichever card your Estate token is on). A Band of Misfits or Overlord in play will count as a copy of whichever Action it is emulating (unless its emulation was prevented by an Enchantress).',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you buy an Action card, move <b>1<img src="assets/VP.png"></b> from its pile to this. When you buy a Curse, take the <img src="assets/VP.png"> from this.<hr>Setup: Put <b>2<img src="assets/VP.png"></b> on each non-Gathering Action Supply pile.',
		help: 'Note that this triggers on gaining an Action, whether bought or otherwise gained, but only on buying Curse, not on gaining Curse other ways. <img src="assets/VP.png"> tokens will go on the Ruins pile (from Dominion: Dark Ages) when used, but not on Farmers’ Market, Temple, or Wild Hunt (the three Action - Gathering cards). Although Defiled Shrine itself does not place <img src="assets/VP.png"> tokens on Gathering Action Supply piles, it will still move <img src="assets/VP.png"> tokens off the supply piles when you gain an action. When you gain a Temple in a game with Defiled Shrine, you can choose which order the two on-gain effects trigger, and so can gain all of the <img src="assets/VP.png"> on the Temple pile before one is sent to the Defiled Shrine. Setup instructions should happen in an order that allows everything to happen, so an Action Bane added by Young Witch would still get 2<img src="assets/VP.png"> put on it.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>15<img src="assets/VP.png"></b> if you have at least 10 Coppers.',
		help: 'You either get 15<img src="assets/VP.png"> or 0<img src="assets/VP.png">; there is no extra bonus for having 20 Coppers.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>5<img src="assets/VP.png"></b> per differently named Treasure you have, that you have more copies of than each other player, or tied for most.',
		help: 'This applies to each different Treasure being used in the game. If all players have the same number of copies of a Treasure, they all get the 5<img src="assets/VP.png"> for that Treasure. If at least one player Inherits Crowns, then Estates will be counted, the 5<img src="assets/VP.png"> going to the player(s) with the most Estates who have also Inherited Crowns (if the player with the most Estates has not Inherited Crowns, no <img src="assets/VP.png"> are awarded).',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a 2nd card in one of your turns, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'This can only happen once per turn per player. For example if you gain 4 cards in the same turn, only the second one will come with 2<img src="assets/VP.png">.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you are the first player to gain a Province, after that turn, each player bids once, up to <img src="assets/Debt40.png">, ending with you. High bidder gets <b>+8<img src="assets/VP.png"></b> and takes the <img src="assets/Debt.png"> they bid.',
		help: 'This only happens the first time a player gains a Province; it does not matter if the Province was bought or not, or if Provinces have left the pile earlier due to Salt the Earth. This happens between turns; Possession (from Dominion: Alchemy) will not be in effect. The player to the left of the player who got the Province bids first, then the player to their left and so on, ending with the player who got the Province. Each bid can be a pass, or a higher bid than the previous bid. Bids are in amounts of <img src="assets/Debt.png">, from <img src="assets/Debt1.png"> to <img src="assets/Debt40.png">; a bid of <img src="assets/Debt40.png"> cannot be beaten. The player who bid the highest (if any) gets +8<img src="assets/VP.png"> and takes the amount of <img src="assets/Debt.png"> of their bid. End-game conditions are checked at the end of each player’s turn. So if a player gains the first Province on the same turn a game-ending condition occurs (e.g. 3 empty piles), the Mountain Pass bidding effect will not occur.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>2<img src="assets/VP.png"></b> per differently named card you have.',
		help: 'Multiple cards from the same pile can score for this as long as they have different names.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>2<img src="assets/VP.png"></b> per card you have from the chosen pile.<hr>Setup: Choose a random Action Supply pile.',
		help: 'All cards from the chosen pile count, even if they have different names (such as when it is a split pile). Ruins (from Dominion: Dark Ages), when used, can be the pile.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>4<img src="assets/VP.png"></b> per differently named Action card you have 3 or more copies of.',
		help: 'Having 6 or more copies of a card confers no additional bonus.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>3<img src="assets/VP.png"></b> per set you have of Copper - Silver - Gold.',
		help: 'For example, if you had 7 Coppers, 5 Silvers, and 2 Golds, that would be two sets of Copper - Silver - Gold, for 6<img src="assets/VP.png"> total.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you trash a card, <b>+1<img src="assets/VP.png"></b>.',
		help: 'This works even when it is not your turn, such as when you trash a card to Swindler (from Dominion: Intrigue), and works when told to trash a card that is not yours, such as with Salt the Earth.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>1<img src="assets/VP.png"></b> per non-Victory card you have from an empty Supply pile.',
		help: 'A Supply pile is only empty if it has no cards in it; a split pile with half of the cards gone is not empty. Victory cards do not count, but Curses do.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>3<img src="assets/VP.png"></b> per copy you have of the 2nd most common Action card among your cards (if it’s a tie, count either).',
		help: 'For example, if you had 7 copies of Villa and 4 copies of Wild Hunt, you would score 12<img src="assets/VP.png">. The tie can be for either first or second place: if you had 7 copies each of Villa and Village, you would score 21<img src="assets/VP.png">. If you had 7 copies of Villa, then 4 copies each of Village and Wild Hunt, you would score 12<img src="assets/VP.png">.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−1<img src="assets/VP.png"></b> per card you have after the first 15.',
		help: 'For example, if you had 27 cards in your deck, you would score −12<img src="assets/VP.png"> for Wall. Scores can go negative.',
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
		cardType: ['Permanent', 'Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−3<img src="assets/VP.png"></b> per card you have exactly one copy of.',
		help: 'Having no copies of a card, or two or more copies of a card, confers no penalty. Scores can go negative.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you gain an Action card, <b>+1 Villager</b>.',
		help: 'This happens whether you gain an Action card due to buying it, or some other way.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Action</b>.',
		help: 'You simply have +1 Action on each of your turns.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'During your turns, cards cost <img src="assets/Coin1.png"> less, but not less than <img src="assets/Coin0.png">.',
		help: 'During your turns, all cards, including cards in the Supply, in hands, and in Decks, cost <img src="assets/Coin1.png"> less, but not less than <img src="assets/Coin0.png">. For example if you have Canal and play Villain, other players discard a card costing at least <img src="assets/Coin2.png">, which could not be Estate, as Estate only costs <img src="assets/Coin1.png"> on your turns.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'During your turns, Actions with +<img src="assets/Coin.png"> amounts in their text are also Treasures.',
		help: 'To be affected, a card must have a +<img src="assets/Coin.png"> amount in its text, not just a <img src="assets/Coin.png"> amount - for example, Capitalism turns Improve into a Treasure, but does not affect Inventor. Having Capitalism means you can play any number of Action cards with +<img src="assets/Coin.png"> amounts in your Buy phase (without using up Action plays). It also means that things that interact with Treasure cards also interact with those cards; for example, if you have Capitalism, you can use Treasurer to gain an Improve from the trash, since Improve is a Treasure on your turns. Any time you play an Action - Treasure card, it is both an Action and a Treasure, regardless of which phase it is. Getting +1 Action in your Buy phase does not let you play other Action cards then. Capitalism works on your turn, but affects cards everywhere; for example if you have Capitalism and play Bandit, you could trash another player\'s Improve, and it is not relevant if that player has Capitalism or not.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, trash a card from your hand.',
		help: 'Once you have claimed this ability, it is not optional. There is no way to remove your cube.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'The first time you play an Action card during each of your turns, play it again afterward.',
		help: 'Once you\'ve claimed this ability, it is not optional. This can affect an Action card played outside of the Action phase, if it is your first Action card played that turn; for example if you also had Capitalism, you could opt to play a Flag Bearer in your Buy phase as your first play of the turn, and it would still be played twice. Citadel can cause a Duration card to be played twice; you will have to remember that on your next turn.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Card</b>, then put a card from your hand onto your deck.',
		help: 'First you draw a card; then you put any card from your hand onto your deck.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may discard a Victory card for <b>+2 Cards</b>.',
		help: 'If drawing causes you to shuffle, you will shuffle in the discarded Victory card.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the end of your Buy phase, if you didn\'t buy any cards, <b>+1 Coffers</b> and <b>+1 Villager</b>.',
		help: 'This only cares if you bought a card in your Buy phase; it does not care if you gained cards other ways, or if you bought an Event (from Adventures and Empires) or Project. For example if all you buy on your turn is Exploration, you will get +1 Coffers and +1 Villager that turn. Exploration only cares if you bought cards in the Buy phase whose ending triggered Exploration; this can matter when your turn has multiple Buy phases due to Villa.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Buy</b>.',
		help: 'You simply have +1 Buy on each of your turns.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'After the game ends, there\'s an extra round of turns just for players with this.',
		help: 'The extra turns go in order starting with the next player after the one that just took a turn. Other extra turns, such as from Outpost (in Seaside) can happen in-between those turns; however after the last extra turn due to Fleet, no other extra turns can happen (since e.g. Outpost does not keep the game going after it ends). Players do not sort through their cards and add up their scores until all of the Fleet turns are done, even the players without Fleet. If the game end conditions are no longer met after Fleet turns, the game is still over.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Treasure, <b>+1 Coffers</b>.',
		help: 'This happens whether you gain a Treasure due to buying it, or some other way.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'The first time you gain an Action card in each of your turns, you may set it aside. If you do, play it.',
		help: 'This is optional, but only applies to your first Action card gained each turn; whether or not you use Innovation then, you will not be able to use it on subsequent gains that turn. This applies to cards gained due to being bought, or gained other ways. If the first Action card you gain in a turn is in your Buy phase, that means you can play that card even though it is your Buy phase. If it gives you +Actions, that will not let you play more Action cards in your Buy phase; if it draws you Treasures, you can only play them if you have not bought anything yet.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the end of your Buy phase, you may pay <img src="assets/Coin1.png"> for <b>+1 Coffers</b>.',
		help: 'If you have at least <img src="assets/Coin1.png"> that you did not spend, you can spend <img src="assets/Coin1.png"> for +1 Coffers. This only works once per turn.',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: false,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
}
	},
	{
		id: 1340,
		name: 'Piazza',
		set: 'Renaissance',
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, reveal the top card of your deck. If it\'s an Action, play it.',
		help: 'Once you have claimed this ability, it is not optional. If the revealed card is not an Action, return it to the top of your deck.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When another player gains a Victory card, <b>+1 Card</b>.',
		help: 'This happens every time another player gains a Victory card, whether bought or gained another way, and even if it is your turn.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'When you trash a card other than with this, you may trash a card from your hand.',
		help: 'This works however you trash the card. For example it works when trashing a card to Priest, when trashing a Curse to Old Witch, when trashing Acting Troupe when playing it, and when trashing a card from the Supply with Lurker (from Intrigue). The card you trash with Sewers must be from your hand, and can be any card in your hand, even if the thing that triggered Sewers could only trash certain cards.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, discard any number of Coppers, revealed, and draw that many cards.',
		help: 'First you discard the Coppers, then you draw. So if drawing causes you to shuffle, you will shuffle in the Coppers.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, add a token here, or remove your tokens here for <b>+1 Card</b> each.',
		help: 'Each player has a separate pile of coin tokens on Sinister Plot; keep yours by your cube. Each turn you either add a token (an unused one, not one from a mat), or remove all of your tokens to draw as many cards.',
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
		cardType: ['Permanent', 'Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'When you shuffle, you may pick one of the cards to go on top.',
		help: 'Each time you shuffle, you can look through the cards and pick one to go on top. Shuffle the other cards.',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may return this to its pile to gain a card costing exactly <img src="assets/Coin1.png"> more than it.',
		help: 'You only gain a card if you manage to return the card to its pile. A non-Supply card (like Horse) can return to its pile; a card with no pile, such as Necropolis (from Dark Ages), fails to return to its pile. The card you gain comes from the Supply, and can be any type; if there is no card in the Supply costing exactly $1 more than the returned card, you do not gain one.',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Exile a Gold from the Supply.',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Follow this card\'s instructions; each time that would give you <b>+Cards</b> this turn, you get <b>+<img src="assets/Coin.png"></b> instead, and vice-versa.',
		help: '<ul><li>For example, if you play Sheepdog and use Way of the Chameleon, you will get +<img src="assets/Coin2.png"> instead of +2 Cards.</li><li>If you play a Duration card using Way of the Chameleon, only the +<img src="assets/Coin.png"> and +Cards you get that turn are affected; for example, if you play Merchant Ship (from Seaside) and use Way of the Chameleon, you will get +2 Cards this turn, but the normal +<img src="assets/Coin2.png"> next turn.</li><li>This turns “+Cards” into “+<img src="assets/Coin.png">” and vice-versa, but does not change other ways to draw cards, for example, “draw that many” or “draw until you have 6 cards in hand.”</li><li>If the card that uses Way of the Chameleon plays another card, that card just does what it normally does (unless you use Way of the Chameleon on it as well).</li><li>Way of the Chameleon can be used on cards without any +Cards or +<img src="assets/Coin.png"> (e.g., Chapel) or cards with equal +Cards and +<img src="assets/Coin.png"> (e.g., Market) even though this would normally have no effect. Doing so would, for example, allow a card to override Enchantress.</li></ul>',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>When you discard this from play this turn, put it onto your deck.',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Trash a card from your hand.',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b><br><b>+1 Action</b><br>Return this to its pile.',
		help: '<ul><li>The card returns to its pile, even if that is a non-Supply pile. A card with no pile, such as Necropolis (from Dark Ages), fails to return to its pile.</li><li>If you use a card like Necromancer to play another card without moving it into play, and use Way of the Horse, that card does not move to its pile.</li><li>Returning a card to its pile is the final instruction on this Way, so failing to return the card does not stop you from getting +2 Cards and +1 Action.</li></ul>',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action</b><br>Discard your hand. <b>+3 Cards</b>.',
		help: 'You draw 3 cards even if you did not have any cards left to discard.',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy<br>+<img src="assets/Coin1.png"></b>',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Play the set-aside card, leaving it there.<hr>Setup: Set aside an unused Action costing <img src="assets/Coin2.png"> or <img src="assets/Coin3.png">.',
		help: '<ul><li>Set aside any unused Action kingdom card costing <img src="assets/Coin2.png"> or <img src="assets/Coin3.png"> at the start of the game. Do any setup that that card requires.</li><li>When using Way of the Mouse, you play the set-aside card, leaving it set-aside. For example, if you set aside Sleigh, then any Action card could be used to gain 2 Horses.</li><li>The set-aside card cannot move itself when played, since it is not in play; for example, if the card is Embargo (from Seaside), it cannot be trashed.</li><li>Text below a dividing line (other than setup) will not do anything.</li><li>If the set-aside card is a Duration, then a card played this Way will stay out as long as that Duration would.</li><li>You cannot use Way of the Mouse when playing the card set aside by Way of the Mouse, to prevent loops that could matter with cards like Champion (from Adventures).</li></ul>',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Action<br>+<img src="assets/Coin1.png"></b>',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b>',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Draw until you have 6 cards in hand.',
		help: 'If you already have 6 or more cards in hand, you do not draw anything.',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Actions</b>',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Card<br>+1 Action</b>',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may discard a Treasure to gain a copy of this.',
		help: 'You may only gain cards from the Supply.',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin1.png"></b><br>This turn, when you gain a card, you may put it onto your deck.',
		help: '<ul><li>This applies to all gained cards, whether bought or gained in other ways.</li>The card is first gained to wherever it normally would be, then you can move it onto your deck. If it moves somewhere else in-between (for example, trashing it using Watchtower from Prosperity), Way of the Seal cannot find it to move it again.</ul>',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+<img src="assets/Coin2.png"></b>',
		help: '',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Cards</b> at the end of this turn.',
		help: 'Normally you get the two cards after drawing your hand in Clean-up. If you use this when it is not your turn (such as via Black Cat), you still draw two cards at the end of the current turn.',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Set this aside. If you did, play it at the start of your next turn.',
		help: '<ul><li>When you play the card at the start of your next turn, you can again use Way of the Turtle, delaying it another turn. You can keep doing this.</li><li>If you use a card like Throne Room to play a card twice, and use Way of the Turtle both times, this does not cause the Throne Room to be set aside, or to stay in play as with Duration cards. Thus you will only get to play the Action card once on the following turn.</li></ul>',
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
		cardType: ['Permanent', 'Way'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Exile an Estate from the Supply.',
		help: '',
		setup: {
			spoils: false, ruins: false, horse: false, coins: false, debt: false, VP: false,
			tavernMats: false, coffers: false, villagers: false, exile: true,
			plusCard: false, plusAction: false, plusBuy: false, plusOne: false,
			journey: false, minusOne: false, minusDraw: false
		}
	}
]
