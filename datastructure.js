{
	board: {
		you: [],
		opponent: []
	},
	player: {
		you: {
			name: 'Viktor',
			health: 30,
			mana: 1,
			hero: {
				class_name: 'Mage',
				weapon: null,
				portait: '',
				manacost: 2,
				ability: ['fireball', function({}, callback)]
			}
		},
		opponent: {
			name: 'randomFOOL',
			health: 30,
			mana: 1,
			hero: {
				class_name: 'warrior',
				weapon: null,
				portait: '',
				manacost: 2,
				ability: ['shield', function({}, callback)]
			}
		},
	}
}