/*jshint esversion: 6 */

class Item {
  constructor(name){
    this.name = name;
  }
}

class Weapon extends Item {
  constructor(name, damage){
    super(name);
    this.damage = damage;
  }
}

class Food extends Item {
  constructor(name, energy){
    super(name);
    this.energy = energy;
  }
}

class Player {
  constructor(name, health, strength, speed){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this.equipped = false;
    this._pack = [];
    this._maxHealth = health;
  }

  getPack(){
    return this._pack;
  }

  getMaxHealth(){
    return this._maxHealth;
  }

  checkPack(){
    console.log(this._pack);
  }

  takeItem(item){
    if (this._pack.length < 3) {
      this._pack.push(item);
      console.log(this.name, item);
      return true;
      } else {
      console.log("your pack is full. the item could not be stored.");
      return false;
      }
    }

  discardItem(item){
    var itemIndex = this._pack.indexOf(item);
    if (itemIndex !== -1){
      this._pack.splice(itemIndex, 1);
      console.log(item + " has been discarded " + "from " + this.name + "'s pack.");
      return true;
      } else {
        console.log("nothing was discarded because item could not be found.");
        return false;
      }
    }

  equip(itemToEquip){
    var itemIndex = this._pack.indexOf(itemToEquip);
    if(itemToEquip instanceof Weapon && itemIndex !== -1 && this.equipped !== false){
      var isEquipped = this.equipped;
      this._pack.splice(itemIndex, 1, isEquipped);
      this.equipped = itemToEquip;
    } else if (itemToEquip instanceof Weapon && itemIndex !== -1 && this.equipped === false){
      this._pack.splice(itemIndex, 1);
      this.equipped = itemToEquip;
    } else {
      return false;
    }
  }

  eat(itemToEat){
    var itemIndex = this._pack.indexOf(itemToEat);
    var maxHealth = this._maxHealth; // couldn't get getMaxHealth() to work; console logged as undefined; b/c of private variable??
    if (itemToEat instanceof Food && itemIndex !== -1){
      this._pack.splice(itemIndex, 1);
      this.health += itemToEat.energy;
      if (this.health > maxHealth){
        this.health = maxHealth;
      }
    }
  }

  useItem(item){
    if (item instanceof Weapon){
      this.equip(item);
    } else if (item instanceof Food){
      this.eat(item);
    }
  }

  equippedWith(){
    if (this.equipped !== false){
      console.log(this.name + " is equipped with a " + this.equipped.name);
      return this.equipped.name;
      } else {
      console.log(this.name + " is not equipped");
      return false;
      }
    }
  }

class Zombie {
  constructor(health, strength, speed){
    this._maxHealth = health;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
  }
}

class FastZombie extends Zombie {
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
}


/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * FastZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * RangedZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
