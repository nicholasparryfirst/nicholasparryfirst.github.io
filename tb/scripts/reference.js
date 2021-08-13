const verNo = "Alpha 0.41";

const introGreetings = [
  'Hey there, ready to learn?',
  'Hi there, I knew you\'d come around',
  'Welcome back!',
];

function introGreeting() {
  let greetingShuffle = Math.floor(Math.random() * introGreetings.length);
document.getElementById("rightTextField1").innerHTML = introGreetings[greetingShuffle];
};

//roman numeral conversion
const sNum2rNum = [
'O','I','II','III',
'IV','V','VI','VII','VIII','IX',
'X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX',
'XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX',
'XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX',
'XL','XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX',
'L','LI','LII','LIII','LIV','LV','LVI','LVII','LVIII','LIX',
'LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII','LXIX',
'LXX','LXXI','LXXII','LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX'
];


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
'Knight of Pntcls',
'Queen of Pentacles',
'King of Pentacles'
];


//global bottomContainer buttons reference
const lookupButton = '<button class="dynamicButton" id="dynamicLookupButton" name="dynamicLookupButton" value="lookup" formmethod="get" onclick="lookupFromMenu()">Lookup this card</button>';
const similarButton = '<button class="dynamicButton" id="dynamicSimilarButton" name="dynamicSimilarButton" value="similar" formmethod="get">Similar cards</button>';
const yomamaButton = '<button class="dynamicButton" id="dynamicYomamaButton" name="dynamicYomamaButton" value="Yomama" formmethod="get">Ur Moms card</button>';
const noButton = '<div class="noButton" id="noButton" name="noButton" value="noButton" formmethod="get"></div>';
const backToSpreadButton = '<button class="dynamicButton" id="backToSpreadButton" name="backButton1" value="backButton1" formmethod="get" onClick="readNumberedSpread()">Return</button>';
const mbpButton = '<a href="https://madebyparry.com"><button class="dynamicMbpButton" id="dynamicMbpButton" name="dynamicMbpButton" value="Yomama" formmethod="get">MadeByParry</button></a>';


console.log("/scripts/references.js loaded");
introGreeting();
