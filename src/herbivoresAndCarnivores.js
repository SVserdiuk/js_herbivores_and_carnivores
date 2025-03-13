'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
    }
  }
}
    
    class Herbivore extends Animal {
      constructor(name) {
        super();
        this.hidden = false;
      }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
  super();
  }
  bite(obj) {
    if ((obj instanceof Herbivore) && obj.hidden === false) {
      obj.health -= 50;
      obj.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
