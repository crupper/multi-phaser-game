// towers.js
// Contains the Tower class and all children and grandchildren classes

class Tower {
	constructor(level, cost, name, sprite) {
		this.level = level;
		this.cost = cost;
		this.name = name;
		this.sprite = sprite;
	}
}

// OffensiveTower class definition and children: ReconTower, AttackTower, and Persistence Tower
class OffensiveTower extends Tower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

module.exports = class ReconTower extends OffensiveTower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

module.exports = class AttackTower extends OffensiveTower {
	constructor(level, cost, name, sprite, shape, color) {
		super(level, cost, name, sprite);
		this.shape = shape;
		this.color = color;
	}
}

module.exports = class PersistenceTower extends OffensiveTower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

// DefensiveTower class definition and children: SecOpsTower, IRTower, and ForensicsTower
class DefensiveTower extends Tower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

module.exports = class SecOpsTower extends DefensiveTower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

module.exports = class IRTower extends DefensiveTower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

module.exports = class ForensicsTower extends DefensiveTower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

// Infrastructure class definition and children: Server, and Workstation
class Infrastructure extends Tower {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}

module.exports = class Server extends Infrastructure {
	constructor(level, cost, name, sprite, income) {
		super(level, cost, name, sprite);
		this.income = income;
	}

	generateIncome() {
		return
	}
}

module.exports = class Workstation extends Infrastructure {
	constructor(level, cost, name, sprite) {
		super(level, cost, name, sprite);
	}
}