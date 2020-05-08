let chris = {
    character: "Christopher Robin",
    greet: function () {
        console.log("Hello!")
    }
};
let kanga = {
    character: "Kanga",
    greet: function () {
        console.log("Hello!")
    }
};
let piglet = {
    character: "Piglet",
    greet: function () {
        console.log("Hello!")
    }
};
let tigger = {
    character: "Tigger",
    greet: function () {
        console.log("Hello!")
    }
};
let pooh = {
    character: "Whinney the Pooh",
    greet: function () {
        console.log("Hello!")
    }
};
let eeyore = {
    character: "Eeyore",
    greet: function () {
        console.log("Hello!")
    }
};
let heffalumps = {
    character: "Heffalumps",
    greet: function () {
        console.log("Hello!")
    }
};
let owl = {
    character: "Owl",
    greet: function () {
        console.log("Hello!")
    }
};
let rabbit = {
    character: "Rabbit",
    greet: function () {
        console.log("Hello!")
    }
};
let gopher = {
    character: "Gopher",
    greet: function () {
        console.log("Hello!")
    }
};
let bees = {
    character: "Bees",
    greet: function () {
        console.log("Hello!")
    }
};
let player = {
    location: tigger,
    honey: false

}
// console.log(player.location.character)

chris.north = kanga;
chris.south = pooh;
chris.east = rabbit;
chris.west = owl;

pooh.north = chris;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;

tigger.north = pooh;

piglet.north = owl;
piglet.east = pooh;

bees.north = rabbit;
bees.west = pooh;

owl.east = chris;
owl.south = piglet;

rabbit.south = bees;
rabbit.west = chris;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = chris;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;

function move(direction) {
    if (direction == "north") {
        temp = player.location
        player.location = player.location.north
        if (player.location === undefined) {
            player.location = temp
            return console.log("You may not go that way!")
        }

    }
    else if (direction == "south") {
        temp = player.location
        player.location = player.location.south
        if (player.location === undefined) {
            player.location = temp
            return console.log("You may not go that way!")
        }

    }
    else if (direction == "west") {
        temp = player.location
        player.location = player.location.west
        if (player.location === undefined) {
            player.location = temp
            return console.log("You may not go that way!")
        }

    }
    else {
        temp = player.location
        player.location = player.location.east
        if (player.location === undefined) {
            player.location = temp
            return console.log("You may not go that way!")
        }

    }
    return console.log('You are now at ' + player.location.character + "'s house."), player.location.greet()
}
function pickUp() {
    if (player.location.character == "Bees") {
        player.honey = true
        console.log("You picked up some honey!")
    }
    else {
        console.log("There isn't any honey here!")
    }
}
function drop() {
    if (player.honey == true) {
        if (player.location.character == "Whinney the Pooh") {
            player.honey = false
            console.log("Here is your honey Pooh!")
        }
        else{
            console.log("Pooh isn't here.")
        }
    }
    else{
        console.log("You don't have anything to drop off.")
    }
}


move('north');
move('east');
// move('east');
// move('east');
// move('west');
pickUp();
move('west');
move('west');
drop();
