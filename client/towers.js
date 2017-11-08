// towers.js
// Contains the Tower class and all children and grandchildren classes

class Tower {
	constructor(level, cost, name) {
		this.level = level;
		this.cost = cost;
		this.name = name;
	}
}

// OffensiveTower class definition and children: ReconTower, AttackTower, and Persistence Tower
class OffensiveTower extends Tower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

module.exports = class ReconTower extends OffensiveTower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

module.exports = class AttackTower extends OffensiveTower {
	constructor(level, cost, name, shape, color) {
		super(level, cost, name);
		this.shape = shape;
		this.color = color;
	}
}

module.exports = class PersistenceTower extends OffensiveTower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

// DefensiveTower class definition and children: SecOpsTower, IRTower, and ForensicsTower
class DefensiveTower extends Tower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

module.exports = class SecOpsTower extends DefensiveTower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

module.exports = class IRTower extends DefensiveTower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

module.exports = class ForensicsTower extends DefensiveTower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

// Infrastructure class definition and children: Server, and Workstation
class Infrastructure extends Tower {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}

module.exports = class Server extends Infrastructure {
	constructor(level, cost, name, income) {
		super(level, cost, name);
		this.income = income;
	}
}

module.exports = class Workstation extends Infrastructure {
	constructor(level, cost, name) {
		super(level, cost, name);
	}
}