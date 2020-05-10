function Ninja(name, health = 100, speed=3, strength = 3){
    var speed = speed;
    var strength = strength;
    this.name = name;
    this.health = health;

    this.sayName = function(){
        console.log("My name is " + this.name + ".");
        return this
    }

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
    this.punch = function(target){
        if (target instanceof Ninja){
        target.health -= 5;
        console.log(target.name + "was punched by " + this.name + " and lost 5 health.");
        return this;}
        else{
            console.log("You aren't a ninja, you're an imposter!")
            return this;
        }
    }
    this.kick = function(target){
        if (target instanceof Ninja){
        var damage = 15 * strength;
        target.health -= damage;
        console.log(target.name + " was kicked by " + this.name + " and lost " + damage + " health.");
        return this;
    }
        else{
            console.log("You're no ninja, Pathetic.")
            return this;
        }
    }
}

var ninja1 = new Ninja ("Miyamoto");
var ninja2 = new Ninja ("Jinto");
var potato = "Potato"
var carrot = "Carrot"
ninja1.sayName();
ninja1.showStats();
ninja1.punch(ninja2);
ninja2.kick(ninja1);
ninja1.kick(potato);
ninja2.punch(carrot);
ninja1.showStats();
ninja2.showStats();