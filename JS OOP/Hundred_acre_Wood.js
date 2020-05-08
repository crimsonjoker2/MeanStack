let chris = {character: "Christopher Robin"};
let kanga = {character: "Kanga"};
let piglet = {character: "Piglet"};
let tigger = {character: "Tigger"};
let pooh = {character: "Whinney the Pooh"};
let eeyore = {character: "Eeyore"};
let heffalumps = {character: "Heffalumps"};
let owl = {character: "Owl"};
let rabbit = {character: "Rabbit"};
let gopher = {character: "Gopher"};
let bees = {character: "Bees"};

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