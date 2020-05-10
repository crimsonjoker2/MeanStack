class Card{
    constructor(suit, name, number){
        this.suit = suit
        this.name = name
        this.number = number
    }
    showCard(){
        console.log(`Suit: ${this.suit}, Name: ${this.name}, Number: ${this.number}`);
        return this;
    }
}
class Deck{
    constructor(){
        this.cards = []
        this.assemble();
        this.shuffle();
    }
    assemble(){
        var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
        const name = ["Ace", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]

        for (let i=0; i < suits.length; i++){
            for(let y=0; y<name.length;y++){
                var card = new Card (suits[i], name[y], y)
                this.cards.push(card);
            }
        }
    }
    shuffle(){
        var card = this.cards.length, temp, i;
        while (card){

            i=Math.floor(Math.random()* card--);

            temp = this.cards[card];
            this.cards[card] = this.cards[i]
            this.cards[i] = temp;
        }
    }
    reset(){
        this.cards = [];
        this.assemble();
    }
    deal(){
        return this.cards.pop();
    }
    showDeck(){
        console.log(this.cards)
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    take(deck){
        let takeCard = deck.deal();
        this.hand.push(takeCard)
    }
    discard(){
        this.hand.pop
    }
    showHand(){
        console.log(this.hand)
    }
}
var deck1 = new Deck;
// deck1.showDeck();
var player1 = new Player("Johnny");
player1.take(deck1);
player1.take(deck1);
player1.take(deck1);
player1.take(deck1);
player1.take(deck1);
player1.take(deck1);
player1.take(deck1);
player1.showHand();