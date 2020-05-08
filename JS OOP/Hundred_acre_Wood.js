let chris = { character: "Christopher Robin" };
let kanga = { character: "Kanga" };
let piglet = { character: "Piglet" };
let tigger = { character: "Tigger" };
let pooh = { character: "Whinney the Pooh" };
let eeyore = { character: "Eeyore" };
let heffalumps = { character: "Heffalumps" };
let owl = { character: "Owl" };
let rabbit = { character: "Rabbit" };
let gopher = { character: "Gopher" };
let bees = { character: "Bees" };
let player = {
    location: tigger

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
    return console.log('You are now at ' + player.location.character + "'s house.")
}


move('north');
move('north');
move('east');
move('east');
move('east');
move('west');
