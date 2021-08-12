//program information
const currentVersion = "v0.01 - basic"

//checking version and boot
document.getElementById('versionId').innerHTML = currentVersion ;

console.log("booted js");

console.log("booted version " + currentVersion);


//list of cards
const tarotCards = [
'The Fool',
'The Magician',
'The High Priestess',
'The Empress',
'The Emperor',
'The Hierophant',
'The Lovers',
'The Chariot',
'Strength',
'The Hermit',
'Wheel of Fortune',
'Justice',
'The Hanged Man',
'Death',
'Temperance',
'The Devil',
'The Tower',
'The Star',
'The Moon',
'The Sun',
'Judgment',
'The World',
'Ace of Wands',
'Two of Wands',
'Three of Wands',
'Four of Wands',
'Five of Wands',
'Six of Wands',
'Seven of Wands',
'Eight of Wands',
'Nine of Wands',
'Ten of Wands',
'Page of Wands',
'Knight of Wands',
'Queen of Wands',
'King of Wands',
'Ace of Cups',
'Two of Cups',
'Three of Cups',
'Four of Cups',
'Five of Cups',
'Six of Cups',
'Seven of Cups',
'Eight of Cups',
'Nine of Cups',
'Ten of Cups',
'Page of Cups',
'Knight of Cups',
'Queen of Cups',
'King of Cups',
'Ace of Swords',
'Two of Swords',
'Three of Swords',
'Four of Swords',
'Five of Swords',
'Six of Swords',
'Seven of Swords',
'Eight of Swords',
'Nine of Swords',
'Ten of Swords',
'Page of Swords',
'Knight of Swords',
'Queen of Swords',
'King of Swords',
'Ace of Pentacles',
'Two of Pentacles',
'Three of Pentacles',
'Four of Pentacles',
'Five of Pentacles',
'Six of Pentacles',
'Seven of Pentacles',
'Eight of Pentacles',
'Nine of Pentacles',
'Ten of Pentacles',
'Page of Pentacles',
'Knight of Pentacles',
'Queen of Pentacles',
'King of Pentacles'
];
console.log('card list loaded');

console.log(tarotCards);


//button generates a random pull from tarotCards list
function generateACard(){

  console.log('button pressed');

  document.getElementById("youGet").innerHTML = "You reveal . . .";

  let randomTarotResult = Math.floor(Math.random() * tarotCards.length);

  document.getElementById("tarotResult").innerHTML = (randomTarotResult, tarotCards[randomTarotResult]);

  console.log("revealing the", tarotCards[randomTarotResult]);

}
